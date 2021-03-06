package com.google.gwt.animcube5.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.canvas.dom.client.Context2d;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.Response;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Event.NativePreviewHandler;
import com.google.gwt.user.client.Event.NativePreviewEvent;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.dom.client.Touch;
import com.google.gwt.animation.client.AnimationScheduler.AnimationCallback;
import com.google.gwt.animation.client.AnimationScheduler;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.user.client.Command;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import java.util.HashMap;

/**
 * @author Josef Jelinek
 * @version 3.5b
 * Modification for 5x5 Supercube and conversion to JavaScript (JS) with
 * Google Web Toolkit (GWT) by Michael Feather
 */

public final class AnimCube5 implements EntryPoint {
  // external configuration
  private final HashMap<String, String> config = new HashMap<String, String>();
  // background colors
  private String bgColor;
  private String bgColor2;
  private String hlColor;
  private String textColor;
  private String buttonBgColor;
  private String sliderColor;   // progress bar
  private String sliderBgColor;
  private String buttonBorderColor;
  private String cubeColor;
  // cube colors
  private final String[] colors = new String[24];
  // cube facelets
  private final int[][] cube = new int[6][25];
  private final int[][] scube = new int[6][25];   // supercube facelet rotation
  private final int[][] initialCube = new int[6][25];
  private final int[][] initialSCube = new int[6][25];
  // normal vectors
  private static final double[][] faceNormals = {
    { 0.0, -1.0,  0.0}, // U
    { 0.0,  1.0,  0.0}, // D
    { 0.0,  0.0, -1.0}, // F
    { 0.0,  0.0,  1.0}, // B
    {-1.0,  0.0,  0.0}, // L
    { 1.0,  0.0,  0.0}  // R
  };
  // vertex co-ordinates
  private static final double[][] cornerCoords = {
    {-1.0, -1.0, -1.0}, // UFL
    { 1.0, -1.0, -1.0}, // UFR
    { 1.0, -1.0,  1.0}, // UBR
    {-1.0, -1.0,  1.0}, // UBL
    {-1.0,  1.0, -1.0}, // DFL
    { 1.0,  1.0, -1.0}, // DFR
    { 1.0,  1.0,  1.0}, // DBR
    {-1.0,  1.0,  1.0}  // DBL
  };
  // vertices of each face
  private static final int[][] faceCorners = {
    {0, 1, 2, 3}, // U: UFL UFR UBR UBL
    {4, 7, 6, 5}, // D: DFL DBL DBR DFR
    {0, 4, 5, 1}, // F: UFL DFL DFR UFR
    {2, 6, 7, 3}, // B: UBR DBR DBL UBL
    {0, 3, 7, 4}, // L: UFL UBL DBL DFL
    {1, 5, 6, 2}  // R: UFR DFR DBR UBR
  };
  // corresponding corners on the opposite face
  private static final int[][] oppositeCorners = {
    {0, 3, 2, 1}, // U->D
    {0, 3, 2, 1}, // D->U
    {3, 2, 1, 0}, // F->B
    {3, 2, 1, 0}, // B->F
    {0, 3, 2, 1}, // L->R
    {0, 3, 2, 1}, // R->L
  };
  // faces adjacent to each face
  private static final int[][] adjacentFaces = {
    {2, 5, 3, 4}, // U: F R B L
    {4, 3, 5, 2}, // D: L B R F
    {4, 1, 5, 0}, // F: L D R U
    {5, 1, 4, 0}, // B: R D L U
    {0, 3, 1, 2}, // L: U B D F
    {2, 1, 3, 0}  // R: F D B U
  };
  // current twisted layer
  private int twistedLayer;
  private int twistedMode;
  // directions of facelet cycling for all faces
  private static final int[] faceTwistDirs = {1, 1, -1, -1, -1, -1};
  // initial observer co-ordinate axes (view)
  private final double[] eye = {0.0, 0.0, -1.0};
  private final double[] eyeX = {1.0, 0.0, 0.0}; // (sideways)
  private final double[] eyeY = new double[3]; // (vertical)
  private final double[] initialEye = new double[3];
  private final double[] initialEyeX = new double[3];
  private final double[] initialEyeY = new double[3];
  // angle of rotation of the twistedLayer
  private double currentAngle; // edited angle of twisted layer
  private double originalAngle; // angle of twisted layer
  // animation speed
  private int speed;
  private int doubleSpeed;
  // current state of the program
  private boolean natural = true; // cube is compact, no layer is twisted
  private boolean toTwist; // layer can be twisted
  private boolean interrupted; // thread was interrupted
  private boolean restarted; // animation was stopped
  private boolean mirrored; // mirroring of the cube view
  private boolean editable; // editation of the cube with a mouse
  private boolean repeatable; // allow repetition of sequence
  private boolean clickProgress; // allow advance by clicking progress bar
  private boolean twisting; // a user twists a cube layer
  private boolean spinning; // an animation twists a cube layer
  private boolean animating; // animation run
  private boolean dragging; // progress bar is controlled
  private boolean demo; // demo mode
  private int persp; // perspective deformation
  private double scale; // cube scale
  private int align; // cube alignment (top, center, bottom)
  private boolean hint;
  private double faceShift;
  // move sequence data
  private int[][] move;
  private int[][] demoMove;
  private int curMove;
  private int movePos;
  private int moveDir;
  private boolean moveOne;
  private boolean moveAnimated;
  private int metric;
  private String[] infoText;
  private int curInfoText;
  // state of buttons
  private int buttonBar; // button bar mode
  private int buttonHeight;
  private boolean drawButtons = true;
  private boolean pushed;
  private int buttonPressed = -1;
  private int progressHeight = 6;
  private int textHeight = 12;
  private int moveText;
  private boolean outlined = true;
  private static boolean ww = false;   // waterwheel cube
  private static boolean snap = false;
  private static boolean superCube = false;
  private static boolean scrambleToggle = false;
  private static int scramble = 0;
  private static int randMoveCount = 0;
  private static int scw = 0;
  private static int borderWidth = 0;
  // transformation tables for compatibility with Lars's applet
  private static final int[] posFaceTransform = {3, 2, 0, 5, 1, 4};
  private static final int[][] posFaceletTransform = {
    {20,15,10,5,0,21,16,11,6,1,22,17,12,7,2,23,18,13,8,3,24,19,14,9,4}, // B
    {4,9,14,19,24,3,8,13,18,23,2,7,12,17,22,1,6,11,16,21,0,5,10,15,20}, // F
    {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24}, // U
    {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24}, // R
    {20,15,10,5,0,21,16,11,6,1,22,17,12,7,2,23,18,13,8,3,24,19,14,9,4}, // D
    {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24}  // L
  };
  // buffer to store hexa-digits
  private final int[] hex = new int[6];

  public void onModuleLoad() {
    String fname = getParameter("config");
    if (fname != null) 
      loadConfigFile(fname);
    else {
      init();
    }
  }

  // setup default configuration
  void loadConfigFile(String fname) {
      try {
        new RequestBuilder(RequestBuilder.GET, fname).sendRequest("", new RequestCallback() {
          public void onResponseReceived(Request req, Response resp) {
            String text = resp.getText();
            String[] lines = text.split("\n");
            for (int i=0; i < lines.length; i++) {
              int pos = lines[i].indexOf('=');
               if (pos > 0) {
                 String key = lines[i].substring(0, pos).trim();
                 String value = lines[i].substring(pos + 1).trim();
                 config.put(key, value);
               }
            }
            init();
          }
          public void onError(Request res, Throwable throwable) {
            Window.alert("could not read config file");
          }
        });
      }
      catch(RequestException e){
          e.printStackTrace();
      }
    }

  public void init() {
    // setup colors
    colors[0]  = rgbToHex(255, 128,  64);  // 0 - light orange
    colors[1]  = rgbToHex(255,   0,   0);  // 1 - pure red
    colors[2]  = rgbToHex(  0, 255,   0);  // 2 - pure green
    colors[3]  = rgbToHex(  0,   0, 255);  // 3 - pure blue
    colors[4]  = rgbToHex(153, 153, 153);  // 4 - white grey
    colors[5]  = rgbToHex(170, 170,  68);  // 5 - yellow grey
    colors[6]  = rgbToHex(187, 119,  68);  // 6 - orange grey
    colors[7]  = rgbToHex(153,  68,  68);  // 7 - red grey
    colors[8]  = rgbToHex(68,  119,  68);  // 8 - green grey
    colors[9]  = rgbToHex(0,    68, 119);  // 9 - blue grey
    colors[10] = rgbToHex(255, 255, 255);  // W - white
    colors[11] = rgbToHex(255, 255,   0);  // Y - yellow
    colors[12] = rgbToHex(255,  96,  32);  // O - orange
    colors[13] = rgbToHex(208,   0,   0);  // R - red
    colors[14] = rgbToHex(0,   144,   0);  // G - green
    colors[15] = rgbToHex(32,   64, 208);  // B - blue
    colors[16] = rgbToHex(176, 176, 176);  // L - light gray
    colors[17] = rgbToHex( 80,  80,  80);  // D - dark gray
    colors[18] = rgbToHex(255,   0, 255);  // M - magenta
    colors[19] = rgbToHex(  0, 255, 255);  // C - cyan
    colors[20] = rgbToHex(255, 160, 192);  // P - pink
    colors[21] = rgbToHex(32,  255,  16);  // N - light green
    colors[22] = rgbToHex(  0,   0,   0);  // K - black
    colors[23] = rgbToHex(128, 128, 128);  // . - gray
    // setup window background color
    String param = getParameter("bgcolor");
    if (param != null && param.length() == 6) {
      if (validateColor(param))
        bgColor = "#" + param;
      else
        bgColor = "gray";
    }
    else
      bgColor = "gray";
    // setup button bar background color
    param = getParameter("butbgcolor");
    if (param != null && param.length() == 6) {
      if (validateColor(param))
        buttonBgColor = "#" + param;
      else 
        buttonBgColor = bgColor;
    }
    else 
      buttonBgColor = bgColor;
    // custom colors
    param = getParameter("colors");
    if (param != null) {
      for (int i = 0; i < 10 && i < param.length() / 6; i++) {
        if (validateColor(param.substring(i*6,i*6+6)))
          colors[i] = "#" + param.substring(i*6,i*6+6);
      }
    }
    // clean the cube
    for (int i = 0; i < 6; i++)
      for (int j = 0; j < 25; j++)
        cube[i][j] = i + 10;
    param = getParameter("supercube");
    if (param != null) 
      if ("1".equals(param)) {
        superCube = true;
        setBorderWidth(.06);
        // change white to black for default colorscheme
        for (int i = 0; i < 25; i++)
            cube[0][i] = 22;
        param = getParameter("scw");
        if (param != null) {
          if ("1".equals(param))
            scw = 1;
          else if ("2".equals(param))
            scw = 2;
        }
        if (scw == 1)
          colors[10] = "#000000";
      }
    param = getParameter("gabbacolors");
    if (param != null) 
      if ("1".equals(param)) {
        if (superCube == true) {
          colors[11] = "#fdcf00";  // Y - yellow
          colors[12] = "#fd4e0a";  // O - orange
          colors[13] = "#93000d";  // R - red
          colors[14] = "#00702d";  // G - green
          colors[15] = "#00347a";  // B - blue
        }
        else {
          setBorderWidth(.06);
          colors[11] = "#ffd90a";  // Y
          colors[12] = "#ff4f0b";  // O
          colors[13] = "#9e0b19";  // R
          colors[14] = "#0b7d39";  // G
          colors[15] = "#0b4186";  // B
        }
      }
    param = getParameter("borderwidth");
    if (param != null) {
      for (int i = 0; i < param.length(); i++)
        if (param.charAt(i) >= '0' && param.charAt(i) <= '9')
          borderWidth = borderWidth * 10 + (int)param.charAt(i) - '0';
      if (borderWidth >= 0 && borderWidth <= 20)
        setBorderWidth((double)borderWidth/100);
    }
    // clean the supercube
    if (superCube) {
      for (int i = 1; i < 6; i++)
        for (int j = 0; j < 25; j++)
          scube[i][j] = 0;
    }
    String initialPosition = "lluu";
    // setup color configuration of the solved cube
    param = getParameter("colorscheme");
    if (param != null && param.length() == 6) {
      for (int i = 0; i < 6; i++) { // udfblr
        int color = 23;
        for (int j = 0; j < 23; j++) {
          if (Character.toLowerCase(param.charAt(i)) == "0123456789wyorgbldmcpnk".charAt(j)) {
            color = j;
            break;
          }
        }
        for (int j = 0; j < 25; j++)
          cube[i][j] = color;
      }
    }
    param = getParameter("scramble");
      if ("1".equals(param))
        scramble = 1;
      else if ("2".equals(param))
        scramble = 2;
    if (scramble == 2) {
      for (int i = 0; i < 6; i++)
        for (int j = 0; j < 25; j++) {
          initialCube[i][j] = cube[i][j];
          initialSCube[i][j] = scube[i][j];
        }
    }
    if (scramble == 0) {
    // setup facelets - compatible with Lars's applet
    param = getParameter("pos");
    if (param != null && param.length() == 150) {
      initialPosition = "uuuuff";
      if (bgColor == "gray")
        bgColor = "white";
      for (int i = 0; i < 6; i++) {
        int ti = posFaceTransform[i];
        for (int j = 0; j < 25; j++) {
          int tj = posFaceletTransform[i][j];
          cube[ti][tj] = 23;
          for (int k = 0; k < 14; k++) {
            // "abcdefgh" ~ "gbrwoyld"
            if (param.charAt(i * 25 + j) == "DFECABdfecabgh".charAt(k)) {
              cube[ti][tj] = k + 4;
              break;
            }
          }
        }
      }
    }
    // setup color facelets
    param = getParameter("facelets");
    if (param != null && param.length() == 150) {
      for (int i = 0; i < 6; i++) {
        for (int j = 0; j < 25; j++) {
          cube[i][j] = 23;
          for (int k = 0; k < 23; k++) {
            if (Character.toLowerCase(param.charAt(i * 25 + j)) == "0123456789wyorgbldmcpnk".charAt(k)) {
              cube[i][j] = k;
              break;
            }
          }
        }
      }
    }
    // setup supercube facelet twist
    param = getParameter("superfacelets");
    if (param != null && param.length() == 150) {
      for (int i = 0; i < 6; i++) {
        for (int j = 0; j < 25; j++) {
          for (int k = 0; k < 4; k++) {
            if (Character.toLowerCase(param.charAt(i * 25 + j)) == "0123".charAt(k)) {
              scube[i][j] = k;
              break;
            }
          }
        }
      }
    }
    }
    param = getParameter("randmoves");
    if (param != null) {
      int rm = 0;
      for (int i = 0; i < param.length(); i++)
        if (param.charAt(i) >= '0' && param.charAt(i) <= '9')
          rm = rm * 10 + (int)param.charAt(i) - '0';
      if (rm > 0)
        randMoveCount = rm;
    }
    // setup move sequence (and info texts)
    param = getParameter("move");
    if ("random".equals(param) || scramble > 0)
      param = randMoves(5, randMoveCount);
    move = (param == null ? new int[0][0] : getMove(param, true));
    movePos = 0;
    curInfoText = -1;
    // setup initial move sequence
    if (scramble == 0) {
      param = getParameter("initmove");
      if (param != null) {
        if ("random".equals(param))
          param = randMoves(5, randMoveCount);
        int[][] initialMove = param.equals("#") ? move : getMove(param, false);
        if (initialMove.length > 0)
          doMove(cube, initialMove[0], 0, initialMove[0].length, false);
      }
    }
    // setup initial reversed move sequence
    param = getParameter("initrevmove");
    if (scramble == 1)
      param = null;
    else if (scramble == 2)
      param = "#";
    if (param != null) {
      if ("random".equals(param))
        param = randMoves(5, randMoveCount);
      int[][] initialReversedMove = param.equals("#") ? move : getMove(param, false);
      if (initialReversedMove.length > 0)
        doMove(cube, initialReversedMove[0], 0, initialReversedMove[0].length, true);
    }
    // setup demo move sequence
    if (scramble == 0) {
      param = getParameter("demo");
      if (param != null) {
        if ("random".equals(param))
          param = randMoves(5, randMoveCount);
        demoMove = param.equals("#") ? move : getMove(param, true);
        if (demoMove.length > 0 && demoMove[0].length > 0)
          demo = true;
      }
    }
    // setup initial cube position
    param = getParameter("position");
    vNorm(vMul(eyeY, eye, eyeX));
    if (param == null)
      param = initialPosition;
    double pi12 = Math.PI / 12;
    for (int i = 0; i < param.length(); i++) {
      double angle = pi12;
      switch (Character.toLowerCase(param.charAt(i))) {
       case 'd':
        angle = -angle;
       case 'u':
        vRotY(eye, angle);
        vRotY(eyeX, angle);
        break;
       case 'f':
        angle = -angle;
       case 'b':
        vRotZ(eye, angle);
        vRotZ(eyeX, angle);
        break;
       case 'l':
        angle = -angle;
       case 'r':
        vRotX(eye, angle);
        vRotX(eyeX, angle);
        break;
      }
    }
    vNorm(vMul(eyeY, eye, eyeX)); // fix eyeY
    // setup quarter-turn speed and double-turn speed
    speed = 0;
    doubleSpeed = 0;
    param = getParameter("speed");
    if (param != null)
      for (int i = 0; i < param.length(); i++)
        if (param.charAt(i) >= '0' && param.charAt(i) <= '9')
          speed = speed * 10 + (int)param.charAt(i) - '0';
    param = getParameter("doublespeed");
    if (param != null)
      for (int i = 0; i < param.length(); i++)
        if (param.charAt(i) >= '0' && param.charAt(i) <= '9')
          doubleSpeed = doubleSpeed * 10 + (int)param.charAt(i) - '0';
    if (speed == 0)
      speed = 10;
    if (doubleSpeed == 0)
      doubleSpeed = speed * 3 / 2;
    // perspective deformation
    persp = 0;
    param = getParameter("perspective");
    if (param == null)
      persp = 2;
    else
      for (int i = 0; i < param.length(); i++)
        if (param.charAt(i) >= '0' && param.charAt(i) <= '9')
          persp = persp * 10 + (int)param.charAt(i) - '0';
    // cube scale
    int intscale = 0;
    param = getParameter("scale");
    if (param != null)
      for (int i = 0; i < param.length(); i++)
        if (param.charAt(i) >= '0' && param.charAt(i) <= '9')
          intscale = intscale * 10 + (int)param.charAt(i) - '0';
    scale = 1.0 / (1.0 + intscale / 10.0);
    // hint displaying
    hint = false;
    param = getParameter("hint");
    if (param != null) {
      hint = true;
      faceShift = 0.0;
      for (int i = 0; i < param.length(); i++)
        if (param.charAt(i) >= '0' && param.charAt(i) <= '9')
          faceShift = faceShift * 10 + (int)param.charAt(i) - '0';
      if (faceShift < 1.0)
        hint = false;
      else
        faceShift /= 10.0;
    }
    // appearance and configuration of the button bar
    buttonHeight = 13;
    param = getParameter("buttonheight");
    if (param != null) {
      int n = Integer.parseInt(param);
      if (n >= 9 & n <= 25)
        buttonHeight = n;
    }
    progressHeight = move.length == 0 ? 0 : 6;
    buttonBar = 1;
    param = getParameter("buttonbar");
    if ("0".equals(param)) {
      buttonBar = 0;
      buttonHeight = 0;
      progressHeight = 0;
    }
    else if ("1".equals(param))
      buttonBar = 1;
    else if ("2".equals(param) || move.length == 0) {
      buttonBar = 2;
      progressHeight = 0;
    }
    // whether the cube can be edited with mouse
    param = getParameter("edit");
    if ("0".equals(param))
      editable = false;
    else
      editable = true;
    // whether the sequence can be repeated 
    param = getParameter("repeat");
    if ("0".equals(param))
      repeatable = false;
    else
      repeatable = true;
    // whether clicking on the progress bar advances through the sequence
    param = getParameter("clickprogress");
    if ("0".equals(param))
      clickProgress = false;
    else
      clickProgress = true;
    // displaying the textual representation of the move
    param = getParameter("movetext");
    if ("1".equals(param))
      moveText = 1;
    else
      moveText = 0;
    // how texts are displayed
    param = getParameter("textsize");
    if (param != null) {
      int n = Integer.parseInt(param);
      if (n >= 5 & n <= 40)
        textHeight = n;
    }
    param = getParameter("fonttype");
    if (param == null || "1".equals(param))
      outlined = true;
    else
      outlined = false;
    // metric
    metric = 0;
    param = getParameter("metric");
    if (param != null) {
      if ("1".equals(param)) // quarter-turn
        metric = 1;
      else if ("2".equals(param)) // face-turn
        metric = 2;
      else if ("3".equals(param)) // slice-turn
        metric = 3;
    }
    align = 1;
    param = getParameter("align");
    if (param != null) {
      if ("0".equals(param)) // top
        align = 0;
      else if ("1".equals(param)) // center
        align = 1;
      else if ("2".equals(param)) // bottom
        align = 2;
    }
    param = getParameter("ww");
    if (param != null) 
      if ("1".equals(param))
        ww = true;
    param = getParameter("snap");
    if (param != null) 
      if ("1".equals(param))
        snap = true;
    // setup initial values
    if (scramble != 2) {
      for (int i = 0; i < 6; i++)
        for (int j = 0; j < 25; j++) {
          initialCube[i][j] = cube[i][j];
          initialSCube[i][j] = scube[i][j];
        }
    }
    for (int i = 0; i < 3; i++) {
      initialEye[i] = eye[i];
      initialEyeX[i] = eyeX[i];
      initialEyeY[i] = eyeY[i];
    }
    // setup colors (contrast)
    if (colorAverage(bgColor) < 128) {
      textColor = "white";
      hlColor = brighter(bgColor);
    }
    else {
      textColor = "black";
      hlColor = darker(bgColor);
    }
    // bgColor2 = new Color(red / 2, green / 2, blue / 2);
    if (colorAverage(buttonBgColor) < 128)
      buttonBorderColor = "white";
    else
      buttonBorderColor = "black";
    sliderColor = textColor;
    param = getParameter("slidercolor");
    if (param != null && param.length() == 6) {
      if (validateColor(param))
        sliderColor = "#" + param;
    }
    sliderBgColor = darker(bgColor);
    param = getParameter("sliderbgcolor");
    if (param != null && param.length() == 6) {
      if (validateColor(param))
        sliderBgColor = "#" + param;
    }
    param = getParameter("troughcolor");
    if (param != null && param.length() == 6) {
      if (validateColor(param))
        sliderBgColor = "#" + param;
    }
    cubeColor = "black";
    param = getParameter("cubecolor");
    if (param != null && param.length() == 6) {
      if (validateColor(param))
        cubeColor = "#" + param;
    }
    curInfoText = -1;
    init2();
    if (demo)
      startAnimation(-1);
  } // init()
  public String getParameter(String name) {
    String parameter = Window.Location.getParameter(name);
    if (parameter == null) 
      return (String)config.get(name);
    return parameter;
  }
  void setBorderWidth(double w) {
    border[0][0] = border[0][1] = border[1][1] = border[3][0] = w;
    border[1][0] = border[2][0] = border[2][1] = border[3][1] = 1.0 - w;
  }
  private static final int[] moveModes = {
    0, 0, 0, 0, 0, 0, // UDFBLR
    1, 1, 1,          // ESM
    3, 3, 3, 3, 3, 3, // XYZxyz
    2, 2, 2, 2, 2, 2  // udfblr
  };
  private static final int[] moveCodes = {
    0, 1, 2, 3, 4, 5, // UDFBLR
    1, 2, 4,          // ESM
    5, 2, 0, 5, 2, 0, // XYZxyz
    0, 1, 2, 3, 4, 5  // udfblr
  };
  private int[][] getMove(String sequence, boolean info) {
    if (info) {
      int inum = 0;
      int pos = sequence.indexOf('{');
      while (pos != -1) {
        inum++;
        pos = sequence.indexOf('{', pos + 1);
      }
      if (infoText == null) {
        curInfoText = 0;
        infoText = new String[inum];
      }
      else {
        String[] infoText2 = new String[infoText.length + inum];
        for (int i = 0; i < infoText.length; i++)
          infoText2[i] = infoText[i];
        curInfoText = infoText.length;
        infoText = infoText2;
      }
    }
    int num = 1;
    int pos = sequence.indexOf(';');
    while (pos != -1) {
      num++;
      pos = sequence.indexOf(';', pos + 1);
    }
    int[][] move = new int[num][];
    int lastPos = 0;
    pos = sequence.indexOf(';');
    num = 0;
    while (pos != -1) {
      move[num++] = getMovePart(sequence.substring(lastPos, pos), info);
      lastPos = pos + 1;
      pos = sequence.indexOf(';', lastPos);
    }
    move[num] = getMovePart(sequence.substring(lastPos), info);
    return move;
  }

  private static final char[] modeChar = {'n', 't', 'c', 's', 'a', 'm'};

  private int[] getMovePart(String sequence, boolean info) {
    int n = 0;
    int length = 0;
    int[] move = new int[sequence.length()]; // overdimensioned
    int[] skip = new int[sequence.length()];
    for (int i = 0; i < sequence.length(); i++) {
      if (sequence.charAt(i) == '.') {
        move[length] = -1;
        length++;
      }
      else if (sequence.charAt(i) == '{') {
        i++;
        String s = "";
        while (i < sequence.length()) {
          if (sequence.charAt(i) == '}')
            break;
          if (info)
            s += sequence.charAt(i);
          i++;
        }
        if (info) {
          infoText[curInfoText] = s;
          move[length] = 1000 + curInfoText;
          curInfoText++;
          length++;
        }
      }
      else {
        for (int j = 0; j < 21; j++) {
          if (sequence.charAt(i) == "UDFBLRESMXYZxyzudfblr".charAt(j)) {
            i++;
            int mode = moveModes[j];
            move[length] = moveCodes[j] * 28;
            if (i < sequence.length()) {
              if (moveModes[j] == 0) { // modifiers for basic characters UDFBLR
                for (int k = 0; k < modeChar.length; k++) {
                  if (sequence.charAt(i) == modeChar[k]) {
                    mode = k + 1;
                    i++;
                    break;
                  }
                }
              }
            }
            move[length] += mode * 4;
            if (i < sequence.length()) {
              if (sequence.charAt(i) == '1')
                i++;
              else if (sequence.charAt(i) == '\'' || sequence.charAt(i) == '3') {
                move[length] += 2;
                i++;
              }
              else if (sequence.charAt(i) == '2') {
                i++;
                if (i < sequence.length() && sequence.charAt(i) == '\'') {
                  move[length] += 3;
                  i++;
                }
                else
                  move[length] += 1;
              }
            }
            length++;
            i--;
            break;
          }
        }
      }
    }
    int[] returnMove = new int[length-n];
    for (int i = 0, k = 0; i < length; i++)
      if (skip[i] == 0)
        returnMove[k++] = move[i];
    return returnMove;
  }

  private String moveText(int[] move, int start, int end) {
    if (start >= move.length)
      return "";
    String s = "";
    for (int i = start; i < end; i++)
      s += turnText(move, i);
    return s;
  }
  private static final String[][][] turnSymbol = {
    { // "standard" notation
      {"U", "D", "F", "B", "L", "R"},
      {"Un", "Dn", "Fn", "Bn", "Ln", "Rn"},
      {"Ut", "Dt", "Ft", "Bt", "Lt", "Rt"},
      {"Uc", "Dc", "Fc", "Bc", "Lc", "Rc"},
      {"Us", "Ds", "Fs", "Bs", "Ls", "Rs"},
      {"Ua", "Da", "Fa", "Ba", "La", "Ra"},
      {"Um", "Dm", "Fm", "Bm", "Lm", "Rm"}
    },
    { // "reduced" notation
      {"U", "D", "F", "B", "L", "R"},
      {"Un", "Dn", "Fn", "Bn", "Ln", "Rn"},
      {"u", "d", "f", "b", "l", "r"},
      {"Z", "~Z", "Y", "~Y", "~X", "X"},
      {"Us", "Ds", "Fs", "Bs", "Ls", "Rs"},
      {"Ua", "Da", "Fa", "Ba", "La", "Ra"},
      {"~E", "E", "S", "~S", "M", "~M"}
    },
    { // "reduced" notation - swapped Y and Z
      {"U", "D", "F", "B", "L", "R"},
      {"Un", "Dn", "Fn", "Bn", "Ln", "Rn"},
      {"u", "d", "f", "b", "l", "r"},
      {"Y", "~Y", "Z", "~Z", "~X", "X"},
      {"Us", "Ds", "Fs", "Bs", "Ls", "Rs"},
      {"Ua", "Da", "Fa", "Ba", "La", "Ra"},
      {"~E", "E", "S", "~S", "M", "~M"}
    },
    { // another reduced notation
      {"U", "D", "F", "B", "L", "R"},
      {"Un", "Dn", "Fn", "Bn", "Ln", "Rn"},
      {"Uu", "Dd", "Ff", "Bb", "Ll", "Rr"},
      {"QU", "QD", "QF", "QB", "QL", "QR"},
      {"UD'", "DU'", "FB'", "BF'", "LR'", "RL'"},
      {"UD", "DU", "FB", "BF", "LR", "RL"},
      {"u", "d", "f", "b", "l", "r"}
    }
  };
  private static final String[] modifierStrings = {"", "2", "'", "2'"};

  private String turnText(int[] move, int pos) {
    if (pos >= move.length)
      return "";
    if (move[pos] >= 1000)
      return "";
    if (move[pos] == -1)
      return ".";
    String s = turnSymbol[moveText - 1][move[pos] / 4 % 7][move[pos] / 28];
    if (s.charAt(0) == '~')
      return s.substring(1) + modifierStrings[(move[pos] + 2) % 4];
    return s + modifierStrings[move[pos] % 4];
  }

  private static final String[] metricChar = {"", "q", "h", "s"};

  private static int realMoveLength(int[] move) {
    int length = 0;
    for (int i = 0; i < move.length; i++)
      if (move[i] < 1000)
        length++;
    return length;
  }

  private static int realMovePos(int[] move, int pos) {
    int rpos = 0;
    for (int i = 0; i < pos; i++)
      if (move[i] < 1000)
        rpos++;
    return rpos;
  }

  private static int arrayMovePos(int[] move, int realPos) {
    int pos = 0;
    int rpos = 0;
    while (true) {
      while (pos < move.length && move[pos] >= 1000)
        pos++;
      if (rpos == realPos)
        break;
      if (pos < move.length) {
        rpos++;
        pos++;
      }
    }
    return pos;
  }

  private int moveLength(int[] move, int end) {
    int length = 0;
    for (int i = 0; i < move.length && (i < end || end < 0); i++)
      length += turnLength(move[i]);
    return length;
  }

  private int turnLength(int turn) {
    if (turn < 0 || turn >= 1000)
      return 0;
    int modifier = turn % 4;
    int mode = turn / 4 % 7;
    int n = 1;
    switch (metric) {
     case 1: // quarter-turn metric
      if (modifier == 1 || modifier == 3)
        n *= 2;
     case 2: // face-turn metric
      if (mode == 1 || mode > 3)
        n *= 2;
     case 3: // slice-turn metric
      if (mode == 3)
        n = 0;
      if (metric == 3 && (mode == 4 || mode == 5))
        n *= 2;
    }
    return n;
  }

  private void initInfoText(int[] move) {
    if (move.length > 0 && move[0] >= 1000)
      curInfoText = move[0] - 1000;
    else
      curInfoText = -1;
  }

  private void doMove(int[][] cube, int[] move, int start, int length, boolean reversed) {
    int position = reversed ? start + length : start;
    while (true) {
      if (reversed) {
        if (position <= start)
          break;
        position--;
      }
      if (move[position] >= 1000) {
        curInfoText = reversed ? -1 : move[position] - 1000;
      }
      else if (move[position] >= 0) {
        int modifier = move[position] % 4 + 1;
        int mode = move[position] / 4 % 7;
        if (modifier == 4) // reversed double turn
          modifier = 2;
        if (reversed)
          modifier = 4 - modifier;
        twistLayers(cube, move[position] / 28, modifier, mode);
      }
      if (!reversed) {
        position++;
        if (position >= start + length)
          break;
      }
    }
  }

  int jobNumber = 0;
  int nowServing = 0;

  private void startAnimation(int mode) {
      stopAnimation();
      if (!demo && (move.length == 0 || move[curMove].length == 0))
        return;
      if (demo && (demoMove.length == 0 || demoMove[0].length == 0))
        return;
      moveDir = 1;
      moveOne = false;
      moveAnimated = true;
      switch (mode) {
       case 0: // play forward
        break;
       case 1: // play backward
        moveDir = -1;
        break;
       case 2: // step forward
        moveOne = true;
        break;
       case 3: // step backward
        moveDir = -1;
        moveOne = true;
        break;
       case 4: // fast forward
        moveAnimated = false;   // moved to run()
        break;
      }
      run(jobNumber++, moveDir);
  }

  public void stopAnimation() {
    if (animating == true)
      restarted = true;
  }

  private void clear() {
      movePos = 0;
      if (move.length > 0)
        initInfoText(move[curMove]);
      natural = true;
      mirrored = false;
      for (int i = 0; i < 6; i++)
	for (int j = 0; j < 25; j++) {
	  cube[i][j] = initialCube[i][j];
	  scube[i][j] = initialSCube[i][j];
        }
      if (scramble > 0)
        move = getMove(randMoves(5, randMoveCount), false);
      if (scramble == 2)
        doMove(cube, move[0], 0, move[0].length, true);
      for (int i = 0; i < 3; i++) {
	eye[i] = initialEye[i];
	eyeX[i] = initialEyeX[i];
	eyeY[i] = initialEyeY[i];
      }
  }

  // cube dimensions in number of facelets (mincol, maxcol, minrow, maxrow) for compact cube
  private static final int[][][] cubeBlocks = {
    {{0, 5}, {0, 5}}, // U
    {{0, 5}, {0, 5}}, // D
    {{0, 5}, {0, 5}}, // F
    {{0, 5}, {0, 5}}, // B
    {{0, 5}, {0, 5}}, // L
    {{0, 5}, {0, 5}}  // R
  };
  // subcube dimensions
  private final int[][][] topBlocks = new int[6][][];
  private final int[][][] midBlocks = new int[6][][];
  private final int[][][] midBlocks2 = new int[6][][];
  private final int[][][] midBlocks3 = new int[6][][];
  private final int[][][] botBlocks = new int[6][][];
  // all possible subcube dimensions for top and bottom layers
  private static final int[][][] topBlockTable = {
    {{0, 0}, {0, 0}},  // 0
    {{0, 5}, {0, 5}},  // 1
    {{0, 5}, {0, 1}},  // 2
    {{0, 1}, {0, 5}},  // 3
    {{0, 5}, {4, 5}},  // 4
    {{4, 5}, {0, 5}},  // 5
    {{0, 5}, {0, 2}},  // 6
    {{0, 2}, {0, 5}},  // 7
    {{0, 5}, {3, 5}},  // 8
    {{3, 5}, {0, 5}}   // 9
  };
  // indices to topBlockTable[] and botBlockTable[] for each twistedLayer value
  private static final int[][] topBlockFaceDim = {
  // U  D  F  B  L  R
    {1, 0, 3, 3, 2, 3}, // U
    {0, 1, 5, 5, 4, 5}, // D
    {2, 3, 1, 0, 3, 2}, // F
    {4, 5, 0, 1, 5, 4}, // B
    {3, 2, 2, 4, 1, 0}, // L
    {5, 4, 4, 2, 0, 1}  // R
  };
  private static final int[][] botBlockFaceDim = {
  // U  D  F  B  L  R
    {0, 1, 5, 5, 4, 5}, // U
    {1, 0, 3, 3, 2, 3}, // D
    {4, 5, 0, 1, 5, 4}, // F
    {2, 3, 1, 0, 3, 2}, // B
    {5, 4, 4, 2, 0, 1}, // L
    {3, 2, 2, 4, 1, 0}  // R
  };
  // subcube dimensions for middle layers
  private static final int[][][] midBlockTable = {
    {{0, 0}, {0, 0}},  // 0
    {{0, 4}, {1, 3}},  // 1
    {{1, 3}, {0, 4}},  // 2
    {{0, 5}, {3, 4}},  // 3
    {{0, 5}, {1, 2}},  // 4
    {{3, 4}, {0, 5}},  // 5
    {{1, 2}, {0, 5}},  // 6
    {{2, 3}, {0, 5}},  // 7 
    {{0, 5}, {2, 3}}   // 8
  };
  private static final int[][] midBlockFaceDim = {
  // U  D  F  B  L  R
    {0, 0, 6, 6, 4, 6}, // U
    {0, 0, 5, 5, 3, 5}, // D 
    {4, 6, 0, 0, 6, 4}, // F 
    {3, 5, 0, 0, 5, 3}, // B
    {6, 4, 4, 3, 0, 0}, // L
    {5, 3, 3, 4, 0, 0}  // R
  };
  private static final int[][] midBlockFaceDim2 = {
  // U  D  F  B  L  R
    {0, 0, 7, 7, 8, 7}, // U
    {0, 0, 7, 7, 8, 7}, // D
    {8, 7, 0, 0, 7, 8}, // F 
    {8, 7, 0, 0, 7, 8}, // B
    {7, 8, 8, 8, 0, 0}, // L
    {7, 8, 8, 8, 0, 0}  // R
  };
  private static final int[][] midBlockFaceDim3 = {
  // U  D  F  B  L  R
    {0, 0, 5, 5, 3, 5}, // U 
    {0, 0, 6, 6, 4, 6}, // D
    {3, 5, 0, 0, 5, 3}, // F
    {4, 6, 0, 0, 6, 4}, // B 
    {5, 3, 3, 4, 0, 0}, // L 
    {6, 4, 4, 3, 0, 0}  // R
  };
  private void splitCube(int layer) {
    for (int i = 0; i < 6; i++) { // for all faces
      topBlocks[i] = topBlockTable[topBlockFaceDim[layer][i]];
      botBlocks[i] = topBlockTable[botBlockFaceDim[layer][i]];
      midBlocks[i] = midBlockTable[midBlockFaceDim[layer][i]];
      midBlocks2[i] = midBlockTable[midBlockFaceDim2[layer][i]];
      midBlocks3[i] = midBlockTable[midBlockFaceDim3[layer][i]];
    }
    natural = false;
  }

  private void twistLayers(int[][] cube, int layer, int num, int mode) {
    switch (mode) {
     case 2:  // mode t
      twistLayer(cube, layer, 4 - num, 0);
      twistLayer(cube, layer, 4 - num, 1);
      break;
     case 3:  // mode c
      twistLayer(cube, layer, 4-num, 0);
      twistLayer(cube, layer, 4-num, 1);
      twistLayer(cube, layer, 4-num, 6);
      twistLayer(cube, layer ^ 1, num, 1);
      twistLayer(cube, layer ^ 1, num, 0);
      break;  
     case 4:  // mode s
      twistLayer(cube, layer, 4 - num, 0); 
      twistLayer(cube, layer ^ 1, num, 0); 
      break;
     case 5:  // mode a
      twistLayer(cube, layer ^ 1, 4 - num, mode);
      twistLayer(cube, layer, 4 - num, mode); 
      break;
     default: 
      twistLayer(cube, layer, 4 - num, mode);
    }
  }
  /*               20 21 22 23 24
                   15 16 17 18 19
                   10 11 12 13 14
                   05 06 07 08 09
                   00 01 02 03 04
   04 03 02 01 00  00 05 10 15 20  00 05 10 15 20  00 05 10 15 20
   09 08 07 06 05  01 06 11 16 21  01 06 11 16 21  01 06 11 16 21
   14 13 12 11 10  02 07 12 17 22  02 07 12 17 22  02 07 12 17 22
   19 18 17 16 15  03 08 13 18 23  03 08 13 18 23  03 08 13 18 23
   24 23 22 21 20  04 09 14 19 24  04 09 14 19 24  04 09 14 19 24
                   00 05 10 15 20
                   01 06 11 16 21
                   02 07 12 17 22
                   03 08 13 18 23
                   04 09 14 19 24
  */
  int [][][][] twistArray = {
    { {{2,0},  {5,0},  {3,0},  {4,4}},  // U 
      {{2,5},  {5,5},  {3,5},  {4,3}},
      {{2,10}, {5,10}, {3,10}, {4,2}},
      {{2,15}, {5,15}, {3,15}, {4,1}},
      {{2,20}, {5,20}, {3,20}, {4,0}},
      {{0,20}, {0,0},  {0,4},  {0,24}},
      {{0,15}, {0,1},  {0,9},  {0,23}},
      {{0,10}, {0,2},  {0,14}, {0,22}},
      {{0,5},  {0,3},  {0,19}, {0,21}},
      {{0,6},  {0,8},  {0,18}, {0,16}},
      {{0,7},  {0,13}, {0,17}, {0,11}},
    },
    { {{2,4},  {4,24}, {3,4},  {5,4}},  // D 
      {{2,9},  {4,23}, {3,9},  {5,9}},
      {{2,14}, {4,22}, {3,14}, {5,14}},
      {{2,19}, {4,21}, {3,19}, {5,19}},
      {{2,24}, {4,20}, {3,24}, {5,24}},
      {{1,0},  {1,4},  {1,24}, {1,20}},
      {{1,1},  {1,9},  {1,23}, {1,15}},
      {{1,2},  {1,14}, {1,22}, {1,10}},
      {{1,3},  {1,19}, {1,21}, {1,5}},
      {{1,6},  {1,8},  {1,18}, {1,16}},
      {{1,11}, {1,7},  {1,13}, {1,17}},
    },
    { {{0,0},  {4,20}, {1,20}, {5,0}},  // F 
      {{0,1},  {4,15}, {1,15}, {5,1}},
      {{0,2},  {4,10}, {1,10}, {5,2}},
      {{0,3},  {4,5},  {1,5},  {5,3}},
      {{0,4},  {4,0},  {1,0},  {5,4}},
      {{2,0},  {2,4},  {2,24}, {2,20}},
      {{2,1},  {2,9},  {2,23}, {2,15}},
      {{2,2},  {2,14}, {2,22}, {2,10}},
      {{2,3},  {2,19}, {2,21}, {2,5}},
      {{2,6},  {2,8},  {2,18}, {2,16}},
      {{2,11}, {2,7},  {2,13}, {2,17}},
    },
    { {{5,20}, {1,24}, {4,24}, {0,20}}, // B 
      {{5,21}, {1,19}, {4,19}, {0,21}},
      {{5,22}, {1,14}, {4,14}, {0,22}},
      {{5,23}, {1,9},  {4,9},  {0,23}},
      {{5,24}, {1,4},  {4,4},  {0,24}},
      {{3,0},  {3,4},  {3,24}, {3,20}},
      {{3,1},  {3,9},  {3,23}, {3,15}},
      {{3,2},  {3,14}, {3,22}, {3,10}},
      {{3,3},  {3,19}, {3,21}, {3,5}},
      {{3,6},  {3,8},  {3,18}, {3,16}},
      {{3,11}, {3,7},  {3,13}, {3,17}},
    },
    { {{2,0},  {0,20}, {3,24}, {1,0}},  // L 
      {{2,1},  {0,15}, {3,23}, {1,1}},
      {{2,2},  {0,10}, {3,22}, {1,2}},
      {{2,3},  {0,5},  {3,21}, {1,3}},
      {{2,4},  {0,0},  {3,20}, {1,4}},
      {{4,0},  {4,4},  {4,24}, {4,20}},
      {{4,1},  {4,9},  {4,23}, {4,15}},
      {{4,2},  {4,14}, {4,22}, {4,10}},
      {{4,3},  {4,19}, {4,21}, {4,5}},
      {{4,6},  {4,8},  {4,18}, {4,16}},
      {{4,11}, {4,7},  {4,13}, {4,17}},
    }, 
    { {{2,20}, {1,20}, {3,4},  {0,24}}, // R
      {{2,21}, {1,21}, {3,3},  {0,19}},
      {{2,22}, {1,22}, {3,2},  {0,14}}, 
      {{2,23}, {1,23}, {3,1},  {0,9}},
      {{2,24}, {1,24}, {3,0},  {0,4}},
      {{5,0},  {5,4},  {5,24}, {5,20}},
      {{5,1},  {5,9},  {5,23}, {5,15}},
      {{5,2},  {5,14}, {5,22}, {5,10}},
      {{5,3},  {5,19}, {5,21}, {5,5}},
      {{5,6},  {5,8},  {5,18}, {5,16}},
      {{5,11}, {5,7},  {5,13}, {5,17}},
    },
    { {{2,1},  {5,1},  {3,1},  {4,9}},  // Um 
      {{2,6},  {5,6},  {3,6},  {4,8}},
      {{2,11}, {5,11}, {3,11}, {4,7}},
      {{2,16}, {5,16}, {3,16}, {4,6}},
      {{2,21}, {5,21}, {3,21}, {4,5}},
      {{2,3},  {5,3},  {3,3},  {4,19}}, // Dm
      {{2,8},  {5,8},  {3,8},  {4,18}},
      {{2,13}, {5,13}, {3,13}, {4,17}},
      {{2,18}, {5,18}, {3,18}, {4,16}},
      {{2,23}, {5,23}, {3,23}, {4,15}},
    },
    { {{0,5},  {4,21}, {1,21}, {5,5}},  // Fm
      {{0,6},  {4,16}, {1,16}, {5,6}},
      {{0,7},  {4,11}, {1,11}, {5,7}},
      {{0,8},  {4,6},  {1,6},  {5,8}},
      {{0,9},  {4,1},  {1,1},  {5,9}},
      {{0,15}, {4,23}, {1,23}, {5,15}}, // Bm
      {{0,16}, {4,18}, {1,18}, {5,16}},
      {{0,17}, {4,13}, {1,13}, {5,17}},
      {{0,18}, {4,8},  {1,8},  {5,18}},
      {{0,19}, {4,3},  {1,3},  {5,19}},
    },
    { {{2,5},  {0,21}, {3,19}, {1,5}},  // Lm
      {{2,6},  {0,16}, {3,18}, {1,6}},
      {{2,7},  {0,11}, {3,17}, {1,7}},
      {{2,8},  {0,6},  {3,16}, {1,8}},
      {{2,9},  {0,1},  {3,15}, {1,9}},
      {{2,15}, {0,23}, {3,9},  {1,15}}, // Rm
      {{2,16}, {0,18}, {3,8},  {1,16}},
      {{2,17}, {0,13}, {3,7},  {1,17}},
      {{2,18}, {0,8},  {3,6},  {1,18}},
      {{2,19}, {0,3},  {3,5},  {1,19}},
    },
    { {{2,2},  {5,2},  {3,2},  {4,14}}, // Un 
      {{2,7},  {5,7},  {3,7},  {4,13}},
      {{2,12}, {5,12}, {3,12}, {4,12}},
      {{2,17}, {5,17}, {3,17}, {4,11}},
      {{2,22}, {5,22}, {3,22}, {4,10}},
      {{2,2},  {5,2},  {3,2},  {4,14}}, // Dn
      {{2,7},  {5,7},  {3,7},  {4,13}},
      {{2,12}, {5,12}, {3,12}, {4,12}},
      {{2,17}, {5,17}, {3,17}, {4,11}},
      {{2,22}, {5,22}, {3,22}, {4,10}}
    },
    { {{0,10}, {4,22}, {1,22}, {5,10}}, // Fn
      {{0,11}, {4,17}, {1,17}, {5,11}},
      {{0,12}, {4,12}, {1,12}, {5,12}},
      {{0,13}, {4,7},  {1,7},  {5,13}},
      {{0,14}, {4,2},  {1,2},  {5,14}},
      {{0,10}, {4,22}, {1,22}, {5,10}}, // Bn
      {{0,11}, {4,17}, {1,17}, {5,11}},
      {{0,12}, {4,12}, {1,12}, {5,12}},
      {{0,13}, {4,7},  {1,7},  {5,13}},
      {{0,14}, {4,2},  {1,2},  {5,14}},
    },
    { {{2,10}, {0,22}, {3,14}, {1,10}}, // Lm
      {{2,11}, {0,17}, {3,13}, {1,11}},
      {{2,12}, {0,12}, {3,12}, {1,12}},
      {{2,13}, {0,7},  {3,11}, {1,13}},
      {{2,14}, {0,2},  {3,10}, {1,14}},
      {{2,10}, {0,22}, {3,14}, {1,10}}, // Rm
      {{2,11}, {0,17}, {3,13}, {1,11}},
      {{2,12}, {0,12}, {3,12}, {1,12}},
      {{2,13}, {0,7},  {3,11}, {1,13}},
      {{2,14}, {0,2},  {3,10}, {1,14}}
    }
  };

  private void twistLayer(int[][] cube, int layer, int num, int mode) {
    twistLayer2(cube, layer, num, mode);
    if (superCube == true && num > 0 && num < 4) {
      twistLayer2(scube, layer, num, mode);
      twistSuperLayer(layer, num, mode);
    }
  }

  private void twistLayer2(int[][] cube, int layer, int num, int mode) {
    int [] a = new int[2];
    int [] b = new int[2];
    int i = 0;
    int n = 11;
    int opp[] = {0,3,2,1};
    int mv = layer;
    if (mode == 1 || mode == 6) {
      n = 10;
      if (layer%2 == 1) {
        i=5;
        num = opp[num];
      }
      else
        n=5;
      if (mode == 1)
        mv =  6 + layer/2; 
      else
        mv =  9 + layer/2; 
    }
    if (num == 1) { 
      for (; i < n; i++) {
        a = twistArray[mv][i][0];
        int tmp = cube[a[0]][a[1]];
        for (int j=2; j >= 0; j--) {
          b = twistArray[mv][i][j+1];
          cube[a[0]][a[1]] = cube[b[0]][b[1]]; 
          a = b;
        }
        cube[a[0]][a[1]] = tmp;
      }
    }
    if (num == 2) { 
      for (; i < n; i++) {
        a = twistArray[mv][i][0];
        b = twistArray[mv][i][2];
        int tmp = cube[a[0]][a[1]];
        cube[a[0]][a[1]] = cube[b[0]][b[1]]; 
        cube[b[0]][b[1]] = tmp; 
        a = twistArray[mv][i][1];
        b = twistArray[mv][i][3];
        tmp = cube[a[0]][a[1]];
        cube[a[0]][a[1]] = cube[b[0]][b[1]]; 
        cube[b[0]][b[1]] = tmp;
      } 
    }
    if (num == 3) { 
      for (; i < n; i++) {
        a = twistArray[mv][i][0];
        int tmp = cube[a[0]][a[1]];
        for (int j=0; j < 3; j++) {
          b = twistArray[mv][i][j+1];
          cube[a[0]][a[1]] = cube[b[0]][b[1]]; 
          a = b;
        }
        cube[a[0]][a[1]] = tmp;
      }
    }
  }

  int superTwistArr[][][] = {
   { { 0, 1, 0 },   // F 
     { 0, 5, 1 },
     { 0, 5, 4 },
     { 0, 1, 5 },
   },
   { { 20, 1, 0 },  // B
     { 4,  5, 1 },
     { 4,  5, 4 },
     { 20, 1, 5 },
   },
   { { 5, 1, 0 },   // F slice
     { 1, 5, 1 },
     { 1, 5, 4 },
     { 5, 1, 5 },
   },
   { { 15, 1, 0 },   // B slice
     { 3,  5, 1 },
     { 3,  5, 4 },
     { 15, 1, 5 },
   },
   { { 10, 1, 0 },   // FB center slice
     { 2,  5, 1 },
     { 2,  5, 4 },
     { 10, 1, 5 },
   }
  };

  private void twistSuperLayer(int layer, int num, int mode) {
    if (mode == 6) {  // center slice
      if (layer == 4) {
        superTwist(10, 1, 3);
        if      (num == 1) superTwist(10, 1, 1);
        else if (num == 2) superTwist(10, 1, 2);
        else if (num == 3) superTwist(2,  5, 0);
      }
      if (layer == 5) {
        superTwist(10, 1, 3);
        if      (num == 1) superTwist(2,  5, 0);
        else if (num == 2) superTwist(10, 1, 2);
        else if (num == 3) superTwist(10, 1, 1);
      }
      if (layer == 2) 
        superTwist2(4, 4-num);
      if (layer == 3)
        superTwist2(4, num);
      return;
    }
    boolean middle = (mode == 1) ? true : false; 
    if (middle == false)
      for (int i=0; i < 25; i++)
        scube[layer][i] = (scube[layer][i] + 4-num) % 4;
    if (layer == 4) {
      if (middle == false) {
        superTwist(20, 1, 3);
        if      (num == 1) superTwist(0, 1, 1);
        else if (num == 2) superTwist(0, 1, 2);
        else if (num == 3) superTwist(0, 5, 0);
      }
      if (middle == true) {
        superTwist(15, 1, 3);
        if      (num == 1) superTwist(5, 1, 1);
        else if (num == 2) superTwist(5, 1, 2);
        else if (num == 3) superTwist(1, 5, 0);
      }
    }
    if (layer == 5) {
      if (middle == false) {
        superTwist(0, 1, 3);
        if      (num == 1) superTwist(4,  5, 0);
        else if (num == 2) superTwist(20, 1, 2);
        else if (num == 3) superTwist(20, 1, 1);
      }
      if (middle == true) {
        superTwist(5, 1, 3);
        if      (num == 1) superTwist(3, 5, 0);
        else if (num == 2) superTwist(15, 1, 2);
        else if (num == 3) superTwist(15, 1, 1);
      }
    }
    if (middle == false) {
      if (layer == 2)
        superTwist2(0, 4-num);
      if (layer == 3)
        superTwist2(1, num);
    }
    if (middle == true) {
      if (layer == 2) 
        superTwist2(2, 4-num);
      if (layer == 3)
        superTwist2(3, num);
    } 
  }

  private void superTwist(int b, int inc, int face) {
    for (int i=b, n=0; n < 5; i+=inc, n++)
      scube[face][i] = (scube[face][i] + 2) % 4;
  }

  private void superTwist2(int ix, int tw) {
    for (int i=0; i < 4; i++) {
      int [] v = superTwistArr[ix][i];
      for (int j=v[0], n=0; n < 5; j+=v[1], n++)
        scube[v[2]][j] = (scube[v[2]][j] + tw) % 4;
    }
  }

  private int width;
  private int height;
  // last position of mouse (for dragging the cube)
  private int lastX;
  private int lastY;
  // last position of mouse (when waiting for clear decission)
  private int lastDragX;
  private int lastDragY;
  // drag areas
  private int dragAreas;
  private final int[][] dragCornersX = new int[30][4];
  private final int[][] dragCornersY = new int[30][4];
  private final double[] dragDirsX = new double[30];
  private final double[] dragDirsY = new double[30];
  private static final int[][][] dragBlocks = {
    {{0, 0}, {5, 0}, {5, 1}, {0, 1}},
    {{5, 0}, {5, 5}, {4, 5}, {4, 0}},
    {{5, 5}, {0, 5}, {0, 4}, {5, 4}},
    {{0, 5}, {0, 0}, {1, 0}, {1, 5}},
    // slices
    {{0, 1}, {5, 1}, {5, 2}, {0, 2}},  // bot horiz
    {{4, 0}, {4, 5}, {3, 5}, {3, 0}},  // right vert
    {{0, 3}, {5, 3}, {5, 4}, {0, 4}},  // top horiz
    {{2, 0}, {2, 5}, {1, 5}, {1, 0}},  // left vert 
    {{0, 2}, {5, 2}, {5, 3}, {0, 3}},  // center horiz 8
    {{3, 0}, {3, 5}, {2, 5}, {2, 0}},  // center vert 9
  };
  private static final int[][] areaDirs = {
    {1, 0}, {0,  1}, {-1, 0}, {0, -1}, {1, 0},
    {0, 1}, {-1, 0}, {0, -1}, {1,  0}, {0, 1}
  };
  private static final int[][] twistDirs = {
    { 1,  1,  1,  1,  1,  1,  1,  1,  1, -1}, // U
    { 1,  1,  1,  1,  1,  1,  1,  1,  1, -1}, // D
    { 1, -1,  1, -1,  1, -1,  1, -1,  1,  1}, // F
    { 1, -1,  1, -1,  1, -1,  1, -1, -1,  1}, // B
    {-1,  1, -1,  1, -1,  1, -1,  1, -1, -1}, // L
    { 1, -1,  1, -1,  1, -1,  1, -1,  1,  1}  // R
  };
  private int[] dragLayers = new int[30]; // which layers belongs to dragCorners
  private int[] dragModes = new int[30]; // which layer modes dragCorners
  // current drag directions
  private double dragX;
  private double dragY;
  // various sign tables for computation of directions of rotations
  private static final int[][][] rotCos = {
    {{ 1,  0,  0}, { 0,  0,  0}, { 0,  0,  1}}, // U-D
    {{ 1,  0,  0}, { 0,  1,  0}, { 0,  0,  0}}, // F-B
    {{ 0,  0,  0}, { 0,  1,  0}, { 0,  0,  1}}  // L-R
  };
  private static final int[][][] rotSin = {
    {{ 0,  0,  1}, { 0,  0,  0}, {-1,  0,  0}}, // U-D
    {{ 0,  1,  0}, {-1,  0,  0}, { 0,  0,  0}}, // F-B
    {{ 0,  0,  0}, { 0,  0,  1}, { 0, -1,  0}}  // L-R
  };
  private static final int[][][] rotVec = {
    {{ 0,  0,  0}, { 0,  1,  0}, { 0,  0,  0}}, // U-D
    {{ 0,  0,  0}, { 0,  0,  0}, { 0,  0,  1}}, // F-B
    {{ 1,  0,  0}, { 0,  0,  0}, { 0,  0,  0}}  // L-R
  };
  private static final int[] rotSign = {1, -1, 1, -1, 1, -1}; // U, D, F, B, L, R
  // temporary eye vectors for twisted sub-cube rotation
  private final double[] tempEye = new double[3];
  private final double[] tempEyeX = new double[3];
  private final double[] tempEyeY = new double[3];
  // temporary eye vectors for second twisted sub-cube rotation (antislice)
  private final double[] tempEye2 = new double[3];
  private final double[] tempEyeX2 = new double[3];
  private final double[] tempEyeY2 = new double[3];
  // temporary vectors to compute visibility in perspective projection
  private final double[] perspEye = new double[3];
  private final double[] perspEyeI = new double[3];
  private final double[] perspNormal = new double[3];
  // eye arrays to store various eyes for various modes
  private final double[][] eyeArray = new double[3][];
  private final double[][] eyeArrayX = new double[3][];
  private final double[][] eyeArrayY = new double[3][];
  private final int[][] eyeOrder = {
    {1, 0, 0, 0, 0}, 
    {0, 1, 0, 0, 0}, // n  modeChar
    {1, 1, 0, 0, 0}, // t
    {1, 1, 1, 1, 1}, // c
    {1, 0, 0, 0, 1}, // s
    {1, 0, 0, 0, 2}, // a
    {0, 0, 1, 0, 0}  // m
  };
  private final int[][][][] blockArray = new int[5][][][];
  private final int[][] blockMode = {
    {0, 2, 2, 2, 2}, 
    {2, 1, 2, 2, 2},
    {2, 2, 2, 2, 2},
    {2, 2, 2, 2, 2}, 
    {0, 2, 2, 2, 0}, 
    {0, 2, 2, 2, 0}, 
    {2, 2, 6, 2, 2}
  };
  private final int[][] drawOrder = {
    {0, 1, 2, 3, 4},  // top facing away, draw it first
    {4, 3, 2, 1, 0},  // bottom facing away: draw it first
    {0, 4, 3, 1, 2}   // both top and bottom layer facing away: draw them first
  };

  public void paint() {
    graphics.save();
    graphics.setFillStyle(bgColor);
    if (buttonBar == 1 && (progressHeight == 0 || demo)) {
      setClip(graphics, 0, 0, width, height - (int)Math.ceil(dpr-.11));
      graphics.fillRect(0, 0, width, height - (int)Math.ceil(dpr-.11));
    }
    else {
      setClip(graphics, 0, 0, width, height);
      graphics.fillRect(0, 0, width, height);
    }
    dragAreas = 0;
    if (natural) // compact cube
    {
      fixBlock(eye, eyeX, eyeY, cubeBlocks, 3, 9); // draw cube and fill drag areas
    }
    else { // in twisted state
	// compute top observer
	double cosA = Math.cos(originalAngle + currentAngle);
	double sinA = Math.sin(originalAngle + currentAngle) * rotSign[twistedLayer];
	for (int i = 0; i < 3; i++) {
	  tempEye[i] = 0;
	  tempEyeX[i] = 0;
	  for (int j = 0; j < 3; j++) {
	    int axis = twistedLayer / 2;
	    tempEye[i] += eye[j] * (rotVec[axis][i][j] + rotCos[axis][i][j] * cosA + rotSin[axis][i][j] * sinA);
	    tempEyeX[i] += eyeX[j] * (rotVec[axis][i][j] + rotCos[axis][i][j] * cosA + rotSin[axis][i][j] * sinA);
	  }
	}
	vMul(tempEyeY, tempEye, tempEyeX);
	// compute bottom anti-observer
	double cosB = Math.cos(originalAngle - currentAngle);
	double sinB = Math.sin(originalAngle - currentAngle) * rotSign[twistedLayer];
	for (int i = 0; i < 3; i++) {
	  tempEye2[i] = 0;
	  tempEyeX2[i] = 0;
	  for (int j = 0; j < 3; j++) {
	    int axis = twistedLayer / 2;
	    tempEye2[i] += eye[j] * (rotVec[axis][i][j] + rotCos[axis][i][j] * cosB + rotSin[axis][i][j] * sinB);
	    tempEyeX2[i] += eyeX[j] * (rotVec[axis][i][j] + rotCos[axis][i][j] * cosB + rotSin[axis][i][j] * sinB);
	  }
	}
	vMul(tempEyeY2, tempEye2, tempEyeX2);
	eyeArray[0] = eye;
	eyeArrayX[0] = eyeX;
	eyeArrayY[0] = eyeY;
	eyeArray[1] = tempEye;
	eyeArrayX[1] = tempEyeX;
	eyeArrayY[1] = tempEyeY;
	eyeArray[2] = tempEye2;
	eyeArrayX[2] = tempEyeX2;
	eyeArrayY[2] = tempEyeY2;

	blockArray[0] = topBlocks;
	blockArray[1] = midBlocks;
	blockArray[2] = midBlocks2;
	blockArray[3] = midBlocks3;
	blockArray[4] = botBlocks;
	// perspective corrections
	vSub(vScale(vCopy(perspEye, eye), 5.0 + persp), vScale(vCopy(perspNormal, faceNormals[twistedLayer]), 2.0 / 5.0));
	vSub(vScale(vCopy(perspEyeI, eye), 5.0 + persp), vScale(vCopy(perspNormal, faceNormals[twistedLayer ^ 1]), 2.0 / 5.0));
	double topProd = vProd(perspEye, faceNormals[twistedLayer]);
	double botProd = vProd(perspEyeI, faceNormals[twistedLayer ^ 1]);
	int orderMode;
	if (topProd < 0 && botProd > 0) // top facing away
	  orderMode = 0;
	else if (topProd > 0 && botProd < 0) // bottom facing away: draw it first
	  orderMode = 1;
	else // both top and bottom layer facing away: draw them first
	  orderMode = 2;
	fixBlock(eyeArray[eyeOrder[twistedMode][drawOrder[orderMode][0]]],
		 eyeArrayX[eyeOrder[twistedMode][drawOrder[orderMode][0]]],
		 eyeArrayY[eyeOrder[twistedMode][drawOrder[orderMode][0]]],
		 blockArray[drawOrder[orderMode][0]],
		 blockMode[twistedMode][drawOrder[orderMode][0]], 0);
	fixBlock(eyeArray[eyeOrder[twistedMode][drawOrder[orderMode][1]]],
		 eyeArrayX[eyeOrder[twistedMode][drawOrder[orderMode][1]]],
		 eyeArrayY[eyeOrder[twistedMode][drawOrder[orderMode][1]]],
		 blockArray[drawOrder[orderMode][1]],
		 blockMode[twistedMode][drawOrder[orderMode][1]], 1);
	fixBlock(eyeArray[eyeOrder[twistedMode][drawOrder[orderMode][2]]],
		 eyeArrayX[eyeOrder[twistedMode][drawOrder[orderMode][2]]],
		 eyeArrayY[eyeOrder[twistedMode][drawOrder[orderMode][2]]],
		 blockArray[drawOrder[orderMode][2]],
		 blockMode[twistedMode][drawOrder[orderMode][2]], 2);
	fixBlock(eyeArray[eyeOrder[twistedMode][drawOrder[orderMode][3]]],
		 eyeArrayX[eyeOrder[twistedMode][drawOrder[orderMode][3]]],
		 eyeArrayY[eyeOrder[twistedMode][drawOrder[orderMode][3]]],
		 blockArray[drawOrder[orderMode][3]],
		 blockMode[twistedMode][drawOrder[orderMode][3]], 3);
	fixBlock(eyeArray[eyeOrder[twistedMode][drawOrder[orderMode][4]]],
		 eyeArrayX[eyeOrder[twistedMode][drawOrder[orderMode][4]]],
		 eyeArrayY[eyeOrder[twistedMode][drawOrder[orderMode][4]]],
		 blockArray[drawOrder[orderMode][4]],
		 blockMode[twistedMode][drawOrder[orderMode][4]], 4);
    }
    if (!pushed && !animating) // no button should be deceased
      buttonPressed = -1;
    if (!(scramble > 0 && buttonBar == 2)) {
    // draw progress bar, move text and button (if more than one sequence)
    if (!demo && move.length > 0) {
      if (move[curMove].length > 0) { // some turns

	  // draw progress bar
          if (progressHeight > 0) {
          graphics.setLineWidth(lineWidth);
          graphics.setStrokeStyle(buttonBorderColor);

	  int progress = (width - 2) * realMovePos(move[curMove], movePos) / realMoveLength(move[curMove]);

          // trough
          graphics.setFillStyle(sliderBgColor);
          graphics.fillRect(dph, height - progressHeight - dph, width - dpr, progressHeight);

          // slider
          graphics.setFillStyle(sliderColor);
          graphics.fillRect(dph, height - progressHeight - dph, progress, progressHeight);

          // border
          graphics.beginPath();
          graphics.rect(dph, height - progressHeight - dph, width - dpr, progressHeight);
          graphics.stroke();
          }

	  // display move text
	  String s = "" + moveLength(move[curMove], movePos) + "/" + moveLength(move[curMove], -1) + metricChar[metric];
          graphics.setFont("bold " + textHeight + "px helvetica");
	  int w = (int)graphics.measureText(s).getWidth();
	  int x = width - w - 2;
	  int y = height - progressHeight - (int)(3*dpr);
	  if (moveText > 0) {
            drawString(graphics, s, x, y - textHeight);
            drawMoveText(graphics, y);
          }
          else
            drawString(graphics, s, x, y);
	}
	if (move.length > 1) { // more sequences
	  String s = "" + (curMove + 1) + "/" + move.length;
	  int w = (int)graphics.measureText(s).getWidth();
	  int x = width - w - buttonHeight - (int)(5*dpr);
	  drawString(graphics, s, x, adjTextHeight());
	  drawButton(graphics, 7, width - buttonHeight / 2, buttonHeight / 2);
        }
    }
    if (curInfoText >= 0) {
      graphics.setFont("bold " + textHeight + "px helvetica");
      drawString(graphics, infoText[curInfoText], 0, adjTextHeight());
    }
    }
    graphics.restore();
    if (drawButtons && buttonBar != 0) // omit unneccessary redrawing
      drawButtons(graphics);
    ctx.drawImage(graphics.getCanvas(), 0,0);
  } // paint()

  int adjTextHeight () {
    // size 14 font has enough padding for the top margin, smaller fonts
    // need space added so y value (as input to drawString) is increased 
    if (utextHeight < 10)
      return((int)(10*dpr));
    else if (utextHeight < 12) 
       return((int)(12*dpr));
    else if (utextHeight < 14) 
       return((int)(14*dpr));
    else
       return textHeight;
  }

  // polygon co-ordinates to fill (cube faces or facelets)
  private final int[] fillX = new int[4];
  private final int[] fillY = new int[4];
  // projected vertex co-ordinates (to screen)
  private final double[] coordsX = new double[8];
  private final double[] coordsY = new double[8];
  private final double[][] cooX = new double[6][4];
  private final double[][] cooY = new double[6][4];
  private static double[][] border = {{0.10, 0.10}, {0.90, 0.10}, {0.90, 0.90}, {0.10, 0.90}};
  private static final int[][] factors = {{0, 0}, {0, 1}, {1, 1}, {1, 0}};
  private final double[] faceShiftX = new double[6];
  private final double[] faceShiftY = new double[6];
  private final double[] tempNormal = new double[3];

  private void fixBlock(double[] eye, double[] eyeX, double[] eyeY, int[][][] blocks, int mode, int call) {
    final double v1[] = eye;
    final double v2[] = eyeX;
    final double v3[] = eyeY;
    // project 3D co-ordinates into 2D screen ones
    for (int i = 0; i < 8; i++) {
      double min = width < height ? width : height - progressHeight;
      double x = min / 3.7 * vProd(cornerCoords[i], eyeX) * scale;
      double y = min / 3.7 * vProd(cornerCoords[i], eyeY) * scale;
      double z = min / (5.0 + persp) * vProd(cornerCoords[i], eye) * scale;
      x = x / (1 - z / min); // perspective transformation
      y = y / (1 - z / min); // perspective transformation
      coordsX[i] = width / 2.0 + x;
      if (align == 0)
	coordsY[i] = (height - progressHeight) / 2.0 * scale  - y;
      else if (align == 2)
	coordsY[i] = height - progressHeight - (height - progressHeight) / 2.0 * scale  - y;
      else
	coordsY[i] = (height - progressHeight) / 2.0 - y;
    }
    // setup corner co-ordinates for all faces
    for (int i = 0; i < 6; i++) { // all faces
      for (int j = 0; j < 4; j++) { // all face corners
	cooX[i][j] = coordsX[faceCorners[i][j]];
	cooY[i][j] = coordsY[faceCorners[i][j]];
      }
    }
    if (hint) { // draw hint hidden facelets
      for (int i = 0; i < 6; i++) { // all faces
	vSub(vScale(vCopy(perspEye, eye), 5.0 + persp), faceNormals[i]); // perspective correction
	if (vProd(perspEye, faceNormals[i]) < 0) { // draw only hidden faces
	  vScale(vCopy(tempNormal, faceNormals[i]), faceShift);
	  double min = width < height ? width : height - progressHeight;
	  double x = min / 3.7 * vProd(tempNormal, eyeX);
	  double y = min / 3.7 * vProd(tempNormal, eyeY);
	  double z = min / (5.0 + persp) * vProd(tempNormal, eye);
	  x = x / (1 - z / min); // perspective transformation
	  y = y / (1 - z / min); // perspective transformation
	  int sideW = blocks[i][0][1] - blocks[i][0][0];
	  int sideH = blocks[i][1][1] - blocks[i][1][0];
	  if (sideW > 0 && sideH > 0) { // this side is not only black
	    // draw colored facelets
	    for (int n = 0, p = blocks[i][1][0]; n < sideH; n++, p++) {
	      for (int o = 0, q = blocks[i][0][0]; o < sideW; o++, q++) {
		for (int j = 0; j < 4; j++) {
		  getCorners(i, j, fillX, fillY, q + border[j][0], p + border[j][1], mirrored);
		  fillX[j] += mirrored ? -x : x;
		  fillY[j] -= y;
		}
                if (superCube == true) {
                  drawPolygon(graphics, fillX, fillY, "#fdfdfd");
                  drawSuperArrow(graphics, fillX, fillY, i, scube[i][p * 5 + q], colors[cube[i][p * 5 + q]]);
                }
                else
                  drawPolygon(graphics, fillX, fillY, colors[cube[i][p * 5 + q]]);
	      }
	    }
	  }
	}
     }
   }
   /* haven't seen any difference with this
   // draw black antialias
   for (int i = 0; i < 6; i++) { // all faces
      int sideW = blocks[i][0][1] - blocks[i][0][0];
      int sideH = blocks[i][1][1] - blocks[i][1][0];
      if (sideW > 0 && sideH > 0) {
	for (int j = 0; j < 4; j++) // corner co-ordinates
	  getCorners(i, j, fillX, fillY, blocks[i][0][factors[j][0]], blocks[i][1][factors[j][1]], mirrored);
        if (sideW == 3 && sideH == 3)
          graphics.setColor(bgColor2);
        else
          graphics.setColor(Color.black);
        // graphics.drawPolygon(fillX, fillY, 4);
        drawPolygon(graphics, fillX, fillY, "gray");
      }
    } */
    // find and draw black inner faces
    int layer = 0;
    if (twistedLayer > 3)
      layer = blocks[0][0][0];
    else if (twistedLayer < 2)
      layer = blocks[2][0][0];
    else
      layer = blocks[1][0][0];
    for (int i = 0; i < 6; i++) { // all faces
      int sideW = blocks[i][0][1] - blocks[i][0][0];
      int sideH = blocks[i][1][1] - blocks[i][1][0];
      if (sideW <= 0 || sideH <= 0) { // this face is inner and only black
        double v = 0;
        // twistable faces 
        if ((layer == 0 || layer == 4) && mode == 0)
          v = 4.0 / 5.0;
        else if ((layer == 1 || layer == 3) && mode == 1)
          v = (i%2 == twistedLayer%2) ? 1.0 / 5.0 : 3.0 / 5.0;
        else if (layer == 2 && mode == 6)
          v = 2.0 / 5.0;
        // fixed faces on layers 1 & 3 (outer) for s & a modes
        else if (twistedMode == 4 || twistedMode == 5)
          if (mode == 2 && ((layer == 1 && i%2 == 0) || (layer == 3 && i%2 == 1)))
            v = 1.0 / 5.0;
        if (v != 0) {
          for (int j = 0; j < 4; j++) { // for all corners
	    int k = oppositeCorners[i][j];
	    fillX[j] = (int)(cooX[i][j] + (cooX[i ^ 1][k] - cooX[i][j]) * v);
	    fillY[j] = (int)(cooY[i][j] + (cooY[i ^ 1][k] - cooY[i][j]) * v);
	    if (mirrored)
	      fillX[j] = width - fillX[j];
	  }
          drawPolygon(graphics, fillX, fillY, cubeColor);
        }
      }
      else {
	// draw black face background (do not care about normals and visibility!)
	for (int j = 0; j < 4; j++) // corner co-ordinates
	  getCorners(i, j, fillX, fillY, blocks[i][0][factors[j][0]], blocks[i][1][factors[j][1]], mirrored);
        if (call < 4)
          drawPolygon(graphics, fillX, fillY, cubeColor);
        else { 
          vSub(vScale(vCopy(perspEye, eye), 5.0 + persp), faceNormals[i]); // perspective correction
          if (vProd(perspEye, faceNormals[i]) > 0)  // draw only faces towards us
            drawPolygon(graphics, fillX, fillY, cubeColor);
        }
      }
    }
    // draw all visible faces and get dragging regions
    for (int i = 0; i < 6; i++) { // all faces
      vSub(vScale(vCopy(perspEye, eye), 5.0 + persp), faceNormals[i]); // perspective correction
      if (vProd(perspEye, faceNormals[i]) > 0) { // draw only faces towards us
	int sideW = blocks[i][0][1] - blocks[i][0][0];
	int sideH = blocks[i][1][1] - blocks[i][1][0];
	if (sideW > 0 && sideH > 0) { // this side is not only black
	  // draw colored facelets
	  for (int n = 0, p = blocks[i][1][0]; n < sideH; n++, p++) {
	    for (int o = 0, q = blocks[i][0][0]; o < sideW; o++, q++) {
	      for (int j = 0; j < 4; j++)
		getCorners(i, j, fillX, fillY, q + border[j][0], p + border[j][1], mirrored);
              if (superCube == true) {
                drawPolygon(graphics, fillX, fillY, "#fdfdfd");
                drawSuperArrow(graphics, fillX, fillY, i, scube[i][p * 5 + q], colors[cube[i][p * 5 + q]]);
              }
              else
                drawPolygon(graphics, fillX, fillY, colors[cube[i][p * 5 + q]]);
	    }
	  }
	}
	if (!editable || animating) // no need of twisting while animating
	  continue;
	// horizontal and vertical directions of face - interpolated
	double dxh = (cooX[i][1] - cooX[i][0] + cooX[i][2] - cooX[i][3]) / 6.0;
	double dyh = (cooX[i][3] - cooX[i][0] + cooX[i][2] - cooX[i][1]) / 6.0;
	double dxv = (cooY[i][1] - cooY[i][0] + cooY[i][2] - cooY[i][3]) / 6.0;
	double dyv = (cooY[i][3] - cooY[i][0] + cooY[i][2] - cooY[i][1]) / 6.0;
	if (mode == 3) { // just the normal cube
	  for (int j = 0; j < 10; j++) { // 4 areas 5x1 per face + 6 center slices
	    for (int k = 0; k < 4; k++) // 4 points per area
	      getCorners(i, k, dragCornersX[dragAreas], dragCornersY[dragAreas],
			       dragBlocks[j][k][0], dragBlocks[j][k][1], false);
	    dragDirsX[dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
	    dragDirsY[dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
            dragLayers[dragAreas] = adjacentFaces[i][j % 4];
	    if (j >= 8)
	      dragLayers[dragAreas] &= ~1;
	    dragModes[dragAreas] = j > 3 ? 1 : 0;
            if (dragAreas == 8 || dragAreas == 18 || dragAreas == 28 ||
                dragAreas == 9 || dragAreas == 19 || dragAreas == 29) {
              dragModes[dragAreas] = 6;
            }
	    dragAreas++;
	    if (dragAreas == 30)
	      break;
	  }
	}
	else if (mode == 0) { // twistable top layer
	  if (i != twistedLayer && sideW > 0 && sideH > 0) { // only 5x1 faces
	    int j = sideW == 5 ? (blocks[i][1][0] == 0 ? 0 : 2) : (blocks[i][0][0] == 0 ? 3 : 1);
	    for (int k = 0; k < 4; k++)
	      getCorners(i, k, dragCornersX[dragAreas], dragCornersY[dragAreas],
			       dragBlocks[j][k][0], dragBlocks[j][k][1], false);
	    dragDirsX[dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
	    dragDirsY[dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
	    dragLayers[dragAreas] = twistedLayer;
	    dragModes[dragAreas] = 0;
	    dragAreas++;
	  }
	}
	else if (mode == 1) { // twistable slice
	  if (i != twistedLayer && sideW > 0 && sideH > 0) { // only 5x1 faces
	    int j = sideW == 5 ? (blocks[i][1][0] == 1 ? 0 : 2) : (blocks[i][0][0] == 1 ? 3 : 1);
            j += 4;
	    for (int k = 0; k < 4; k++)
	      getCorners(i, k, dragCornersX[dragAreas], dragCornersY[dragAreas],
			       dragBlocks[j][k][0], dragBlocks[j][k][1], false);
	    dragDirsX[dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
	    dragDirsY[dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
	    dragLayers[dragAreas] = twistedLayer;
	    dragModes[dragAreas] = 1;
	    dragAreas++;
	  }
	}
	else if (mode == 6) { // twistable center slice 
	  if (i != twistedLayer && sideW > 0 && sideH > 0) { // only 5x1 faces
	    int j = sideW == 5 ? 8 : 9;
	    for (int k = 0; k < 4; k++)
	      getCorners(i, k, dragCornersX[dragAreas], dragCornersY[dragAreas],
			       dragBlocks[j][k][0], dragBlocks[j][k][1], false);
	    dragDirsX[dragAreas] = (dxh * areaDirs[j][0] + dxv * areaDirs[j][1]) * twistDirs[i][j];
	    dragDirsY[dragAreas] = (dyh * areaDirs[j][0] + dyv * areaDirs[j][1]) * twistDirs[i][j];
	    dragLayers[dragAreas] = twistedLayer;
	    dragModes[dragAreas] = 6;
	    dragAreas++;
	  }
	}
      }
    }
  } // fixblock

  private void getCorners(int face, int corner, int[] cornersX, int[] cornersY, double factor1, double factor2, boolean mirror) {
    factor1 /= 5.0;
    factor2 /= 5.0;
    double x1 = cooX[face][0] + (cooX[face][1] - cooX[face][0]) * factor1;
    double y1 = cooY[face][0] + (cooY[face][1] - cooY[face][0]) * factor1;
    double x2 = cooX[face][3] + (cooX[face][2] - cooX[face][3]) * factor1;
    double y2 = cooY[face][3] + (cooY[face][2] - cooY[face][3]) * factor1;
    cornersX[corner] = (int)(0.5 + x1 + (x2 - x1) * factor2);
    cornersY[corner] = (int)(0.5 + y1 + (y2 - y1) * factor2);
    if (mirror)
      cornersX[corner] = width - cornersX[corner];
  }
  private static final int[] textOffsetInit = {1, 1, -1, -1, -1, 1, 1, -1, -1, 0, 1, 0, 0, 1, 0, -1};
  private static final double[] textOffset = new double[16];

  private void drawString(Context2d g, String s, int x, int y) {
    if (outlined) {
      g.setFillStyle("black");
      for (int i = 0; i < textOffset.length; i += 2)
        g.fillText(s, x + textOffset[i], y + textOffset[i + 1]);
      g.setFillStyle("white");
    }
    else
      g.setFillStyle(textColor);
    g.fillText(s, x, y);
  }

  private void drawMoveText(Context2d g, int y) {
    int pos = movePos == 0 ? arrayMovePos(move[curMove], movePos) : movePos;
    String s1 = moveText(move[curMove], 0, pos);
    String s2 = turnText(move[curMove], pos);
    String s3 = moveText(move[curMove], pos + 1, move[curMove].length);

    int w1 = (int)g.measureText(s1).getWidth();
    int w2 = (int)g.measureText(s2).getWidth();
    int w3 = (int)g.measureText(s3).getWidth();

    int x = 1;
    if (x + w1 + w2 + w3 > width) {
      x = Math.min(1, width / 2 - w1 - w2 / 2);
      x = Math.max(x, width - w1 - w2 - w3 - 2);
    }
    if (w2 > 0) {
      g.setFillStyle(hlColor);
      g.setLineWidth(2);
      g.setStrokeStyle("black");
      g.beginPath();
      if (utextHeight <= 14) 
        // make rectangle taller for smaller fonts
        g.fillRect(x + w1 - 1, height - progressHeight - textHeight - (int)(dpr*4), w2 + 2, textHeight + (int)dpr*3);
      else
        g.fillRect(x + w1 - 1, height - progressHeight - textHeight - (int)(dpr*2), w2 + 2, textHeight + (int)dpr);
    }
    if (w1 > 0)
      drawString(g, s1, x, y);
    if (w2 > 0)
      drawString(g, s2, x + w1, y);
    if (w3 > 0)
      drawString(g, s3, x + w1 + w2, y);
  }
  private int selectButton(int x, int y) {
    if (buttonBar == 0)
      return -1;
    if (move.length > 1 && x >= width - buttonHeight && x < width && y >= 0 && y < buttonHeight)
      return 7;
    if (buttonBar == 2) { // only clear (rewind) button present
      if (x >= 0 && x < buttonHeight && y >= height - buttonHeight && y < height)
        return 0;
      return -1;
    }
    if (y < height)
      return -1;
    int buttonX = 0;
    for (int i = 0; i < 7; i++) {
      int buttonWidth = (width - buttonX) / (7 - i);
      if (x >= buttonX && x < buttonX + buttonWidth && y >= height && y < height + buttonHeight)
        return i;
      buttonX += buttonWidth;
    }
    return -1;
  }

  // Mouse event handlers

  private final static int[] buttonAction = {-1, 3, 1, -1, 0, 2, 4, -1};

  private final double[] eyeD = new double[3];

  // status bar help strings
  private static final String[] buttonDescriptions = {
    "Clear to the initial state",
    "Show the previous step",
    "Play backward",
    "Stop",
    "Play",
    "Show the next step",
    "Go to the end",
    "Next sequence"
  };
  private String buttonDescription = "";

  // Various useful vector functions

  private static double[] vCopy(double[] vector, double[] srcVec) {
    vector[0] = srcVec[0];
    vector[1] = srcVec[1];
    vector[2] = srcVec[2];
    return vector;
  }

  private static double[] vNorm(double[] vector) {
    double length = Math.sqrt(vProd(vector, vector));
    vector[0] /= length;
    vector[1] /= length;
    vector[2] /= length;
    return vector;
  }

  private static double[] vScale(double[] vector, double value) {
    vector[0] *= value;
    vector[1] *= value;
    vector[2] *= value;
    return vector;
  }

  private static double vProd(double[] vec1, double[] vec2) {
    return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
  }

  private static double[] vAdd(double[] vector, double[] srcVec) {
    vector[0] += srcVec[0];
    vector[1] += srcVec[1];
    vector[2] += srcVec[2];
    return vector;
  }

  private static double[] vSub(double[] vector, double[] srcVec) {
    vector[0] -= srcVec[0];
    vector[1] -= srcVec[1];
    vector[2] -= srcVec[2];
    return vector;
  }

  private static double[] vMul(double[] vector, double[] vec1, double[] vec2) {
    vector[0] = vec1[1] * vec2[2] - vec1[2] * vec2[1];
    vector[1] = vec1[2] * vec2[0] - vec1[0] * vec2[2];
    vector[2] = vec1[0] * vec2[1] - vec1[1] * vec2[0];
    return vector;
  }

  private static double[] vRotX(double[] vector, double angle) {
    double sinA = Math.sin(angle);
    double cosA = Math.cos(angle);
    double y = vector[1] * cosA - vector[2] * sinA;
    double z = vector[1] * sinA + vector[2] * cosA;
    vector[1] = y;
    vector[2] = z;
    return vector;
  }

  private static double[] vRotY(double[] vector, double angle) {
    double sinA = Math.sin(angle);
    double cosA = Math.cos(angle);
    double x = vector[0] * cosA - vector[2] * sinA;
    double z = vector[0] * sinA + vector[2] * cosA;
    vector[0] = x;
    vector[2] = z;
    return vector;
  }

  private static double[] vRotZ(double[] vector, double angle) {
    double sinA = Math.sin(angle);
    double cosA = Math.cos(angle);
    double x = vector[0] * cosA - vector[1] * sinA;
    double y = vector[0] * sinA + vector[1] * cosA;
    vector[0] = x;
    vector[1] = y;
    return vector;
  }

  public String rgbToHex (int r, int g, int b) {
    return "#" + 
      lpad(Integer.toHexString(r)) +  
      lpad(Integer.toHexString(g)) +  
      lpad(Integer.toHexString(b)); 
  }

  private String lpad (String s) {
    return(("00" + s).substring(s.length()));
  }

  private boolean validateColor(String s) {
    int n=0;
    for (int i = 0; i < 6; i++) {
      for (int j = 0; j < 25; j++) {
        if (Character.toLowerCase(s.charAt(i)) == "0123456789abcdef".charAt(j)) {
          n++;
          break;
        }
      }
    }
    if (n == 6)
      return(true);
    return(false);
  }

  public void setClip(Context2d g, int x, int y, int width, int height) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + width, y);
    g.lineTo(x + width, y + height);
    g.lineTo(x, y + height);
    g.lineTo(x, y);
    g.closePath();
    g.clip();
  }

  private void drawButtons(Context2d g) {
    int adj = ((buttonHeight % 2) == 0) ? 1 : 0;
    adj += (int)(dpr+.5) - 1;
    if (buttonBar == 2) { // only clear (rewind) button
      if (buttonPressed == 0 || (scramble > 0 && buttonPressed == 6))
        g.setFillStyle(darker(buttonBgColor));
      else
        g.setFillStyle(buttonBgColor);
      g.fillRect(dph, height - buttonHeight, buttonHeight, buttonHeight);
      g.setLineWidth(lineWidth);
      g.setStrokeStyle(buttonBorderColor); 
      g.beginPath();
      g.rect(dph, height - buttonHeight - dph, buttonHeight, buttonHeight);
      g.stroke();
      drawButton(g, 0, (buttonHeight / 2), height - (buttonHeight + 1) / 2 - adj);
      return;
    }
    if (buttonBar == 1) { // full buttonbar
      int buttonX = 0;
      for (int i = 0; i < 7; i++) {
        int buttonWidth = (width - buttonX) / (7 - i);
        if (buttonPressed == i)
          g.setFillStyle(darker(buttonBgColor));
        else
          g.setFillStyle(buttonBgColor);
        g.fillRect(buttonX, height, buttonWidth, buttonHeight);
        g.setLineWidth(lineWidth);
        g.setStrokeStyle(buttonBorderColor); 
        g.beginPath();
        if (i==0)
          g.rect(buttonX + dph, height - dph, buttonWidth-dpr, buttonHeight);
        else
          g.rect(buttonX - dph, height - dph, buttonWidth, buttonHeight);
        g.stroke();
        g.setStrokeStyle("black"); 
        drawButton(g, i, buttonX + buttonWidth / 2, height + buttonHeight / 2 - adj);
        buttonX += buttonWidth;
      }
      drawButtons = false;
      return;
    }
  }

  double[] ds = new double[10];  // digits 1-9 scaled by dpr

  private void drawButton(Context2d g, int i, double x, double y) {
    switch (i) {
     case 0: // rewind
      drawRect(g, x - ds[4], y - ds[3], ds[3], ds[6] + 1);
      drawArrow(g, x + ds[4], y, -1); // left
      break;
     case 1: // reverse step
      drawRect(g, x + ds[1], y - ds[3], ds[3], ds[6] + 1);
      drawArrow(g, x-ds[1], y, -1); // left
      break;
     case 2: // reverse play
      drawArrow(g, x + ds[1], y, -1); // left
      break;
     case 3: // stop / mirror
      if (animating)
        drawRect(g, x - ds[4], y - ds[3], ds[7], ds[7]);
      else {
        drawRect(g, x - ds[4], y - ds[2], ds[7], ds[5]);
        drawRect(g, x - ds[2], y - ds[4], ds[3], ds[9]);
      }
      break;
     case 4: // play
      drawArrow(g, x - ds[2], y, 1); // right
      break;
     case 5: // step
      drawRect(g, x - ds[4], y - ds[3], ds[3], ds[6] + 1);
      drawArrow(g, x, y, 1); // right
      break;
     case 6: // fast forward
      drawRect(g, x + ds[1], y - ds[3], ds[3], ds[6] + 1);
      drawArrow(g, x - ds[4], y, 1); // right
      break;
     case 7: // next sequence
      if (buttonPressed == 7)
        g.setFillStyle(darker(buttonBgColor));
      else
        g.setFillStyle(buttonBgColor);
      g.fillRect(width - buttonHeight - ds[1] - dph, ds[1] + dph, buttonHeight, buttonHeight);
      g.setLineWidth(lineWidth);
      g.setStrokeStyle(buttonBorderColor); 
      g.beginPath();
      if (dpr%2 == 0) 
        g.rect(width - buttonHeight - ds[1], ds[1], buttonHeight, buttonHeight);
      else
        g.rect(width - buttonHeight - ds[1] - dph, ds[1] + dph, buttonHeight, buttonHeight);
      g.stroke();
      drawArrow(g, x - ds[3], y + ds[1], 1); // right
      break;
    }
  }

  void drawArrow(Context2d g, double x, double y, int dir) {
    double d3 = 3*dpr;
    double[] fillX = new double[5];
    double[] fillY = new double[5];
    fillX[0] = x; 
    fillX[1] = x + dir;
    fillX[2] = x + 4*dpr * dir;
    fillX[3] = x + dir;
    fillX[4] = x;
    fillY[0] = y - d3; 
    fillY[1] = y - d3;
    fillY[2] = y; 
    fillY[3] = y + d3;
    fillY[4] = y + d3;
    drawArrow2(g, fillX, fillY);
  }

  void drawArrow2(Context2d g, double[] x, double[] y) {
    g.beginPath();
    g.moveTo(x[0] + dph, y[0] + dph);
    for (int i=1; i < 5; i++)
      g.lineTo(x[i] + dph, y[i] + dph);
    g.closePath();
    g.setFillStyle("white");
    g.setStrokeStyle("black");
    g.fill();
    g.setLineWidth(lineWidth);
    g.stroke();
  }

  private static void drawRect(Context2d g, double x, double y, double width, double height) {
    g.setLineWidth(lineWidth);
    g.beginPath();
    g.rect(x + dph, y + dph, width - 1, height - 1);
    g.setFillStyle("white");
    g.fill();
    g.setStrokeStyle("black");
    g.stroke();
  }

  void drawPolygon(Context2d g, int[] x, int[] y, String fillColor) {
    g.beginPath();
    g.moveTo(x[0], y[0]);
    g.lineTo(x[1], y[1]);
    g.lineTo(x[2], y[2]);
    g.lineTo(x[3], y[3]);
    g.closePath();
    g.setFillStyle(fillColor);
    g.setStrokeStyle(fillColor);
    g.fill();
    g.setLineWidth(.7);
    g.stroke();
  }

  void drawSuperArrow(Context2d g, int[] xx, int[] yy, int face, int superTwist, String color) {
    int [] x = new int[4];
    int [] y = new int[4];
    final int [][] rot = {{0,1,2,3}, {3,0,1,2}, {2,3,0,1}, {1,2,3,0}}; 
    final double w = .26;  // arrow width
    if (scw == 2 && color == "#ffffff")
      return;
    // scale down so there is a margin around the arrow
    for (int i=0; i < 4; i++) {
      x[i] = (int) (xx[i] + (xx[rot[2][i]] - xx[i]) * .05);
      y[i] = (int) (yy[i] + (yy[rot[2][i]] - yy[i]) * .05);
    }
    if (face == 0)
      superTwist = (superTwist + 1) % 4;
    if (face == 4)
      superTwist = (superTwist + 3) % 4;
    final int a = rot[superTwist][0];
    final int b = rot[superTwist][1];
    final int c = rot[superTwist][2];
    final int d = rot[superTwist][3];
    final double A = (x[c] - x[b])*w;
    final double B = (y[c] - y[b])*w;
    final double C = (x[a] - x[b])/2;
    final double D = y[b] + (y[a] - y[b])/2;
    final double E = y[c] + (y[d] - y[c])/2;
    final double F = (x[d] - x[c])/2;
    int n = superTwist ^ 1;
    g.setFillStyle(color);
    g.beginPath();
    g.moveTo(x[a] + (x[d] - x[a])/2, y[a] + (y[d] - y[a])/2);
    g.lineTo(x[n] + C, D);
    g.lineTo(x[n] + A + C, D + B);
    g.lineTo(x[n] + A, y[n] + B);
    n = (n + 1) % 4;
    g.lineTo(x[n] - A, y[n] - B);
    g.lineTo(x[n] - A + F, E - B);
    g.lineTo(x[n] + F, E);
    g.closePath();
    g.fill();
    g.setLineWidth(.6*dpr);
    g.setStrokeStyle("black");
    g.stroke();
  }

  String colorToHex(String s) {
    if      (s == "white")     return("#FFFFFF"); 
    else if (s == "black")     return("#000000"); 
    else if (s == "gray")      return("#808080"); 
    else return("#808080");
  }
  int colorAverage(String s) {
    if (s.substring(0,1) != "#")
      s = colorToHex(s);
    int r =  Integer.parseInt(s.substring(1,3), 16);  
    int g =  Integer.parseInt(s.substring(3,5), 16);  
    int b =  Integer.parseInt(s.substring(5,7), 16);  
    return ((r * 299 + g * 587 + b * 114) / 1000);
  }
  String brighter(String s) {
    if (s.substring(0,1) != "#")
      s = colorToHex(s);
    int r =  Integer.parseInt(s.substring(1,3), 16);  
    int g =  Integer.parseInt(s.substring(3,5), 16);  
    int b =  Integer.parseInt(s.substring(5,7), 16);  
    r *= 1.3;
    g *= 1.3;
    b *= 1.3;
    return(rgbToHex(r>255?255:r, g>255?255:g, b>255?255:b));
  }
  String darker(String s) {
    if (s.substring(0,1) != "#")
      s = colorToHex(s);
    int r =  Integer.parseInt(s.substring(1,3), 16);  
    int g =  Integer.parseInt(s.substring(3,5), 16);  
    int b =  Integer.parseInt(s.substring(5,7), 16);  
    r *= .7;
    g *= .7;
    b *= .7;
    return(rgbToHex(r, g, b));
  }

  public void echo(String s) {
      System.err.println("echoz: " + s);
  }

  private String df(double d) {
    return(Double.toString(d).substring(0,4));
  }

  void run(final int jobNum, final int dir) {
    if (jobNum > nowServing) {  // reschedule waiters 
      Scheduler.get().scheduleDeferred(new Command() {
        public void execute () {
          run(jobNum, dir);
        }
      });
      return;
    }
    if (jobNum < nowServing) {  // this should not happen
      Window.alert("jobNum " + jobNum + " <  nowServing " + nowServing);
      return;
    }
    if (jobNumber > nowServing + 1) {  // restart if more than one job in que
      restarted = true;
    }
    if (!moveAnimated) {  // fast-forward without using animation scheduler
      int[] mv = move[curMove]; 
      while (movePos < mv.length) { 
        if (mv[movePos] >= 1000) 
          curInfoText = mv[movePos] - 1000;
        else {
          int num = mv[movePos] % 4 + 1;
          int mode = mv[movePos] / 4 % 7;
          int layer = mv[movePos] / 28;
          twistLayers(cube, layer, (num==4)?2:num, mode);
        }
        movePos++;
      }
      animating = false;
      drawButtons = true;
      paint();
      nowServing++;
      return;
    }
    final int moveDir = dir;
    interrupted = false;
    // Timer timer = new Timer() {
    AnimationScheduler.get().requestAnimationFrame(new AnimationCallback() {
      private int layer, num, mode;
      private long sTime, lTime;
      private double d, phis, phit;
      private boolean restart;
      private boolean spin = false;
      private boolean outerLoopTop = true;
      private boolean innerLoopTop = true;
      private boolean innerLoopBot = false;
      private boolean outerLoopBot = false;
      private boolean cont = false;
      private int[] mv = demo ? demoMove[0] : move[curMove]; 
      // public void run() {
      public void execute(double timestamp) { 
        if (outerLoopTop) {
          outerLoopTop = false;
          restart = false;
          if (repeatable) {
            if (moveDir > 0) {
              if (movePos >= mv.length) {
                movePos = 0;
                initInfoText(mv);
              }
            }
            else {
              curInfoText = -1;
              if (movePos == 0)
                movePos = mv.length;
            }
          } 
          else {
            if ((moveDir > 0 && movePos >= mv.length) ||
                (moveDir < 0 && movePos == 0)) {
              restarted = false;
              animating = false;
              nowServing++;
              drawButtons = true;
              paint();
              // cancel();
              return;
            }
          }
          animating = true;
          drawButtons = true;
        }
        if (innerLoopTop) {
          innerLoopTop = false;
          if (moveDir < 0) {
            cont = false;
            if (movePos == 0) {
              cont = true;
              outerLoopBot = true;
            }
            else
              movePos--;
          }
          if (!cont) {
            spin = false;
            if (mv[movePos] == -1) {
              paint();
              // dot in the move sequence means pause 
              if (!moveOne) {
                // sleep(33 * speed);
                // no sleep command available so do a busy wait
                sTime = System.currentTimeMillis();
                while ((System.currentTimeMillis() - sTime) < 1000)
                  ;  // empty loop
              }
            }
            else if (mv[movePos] >= 1000)
              curInfoText = moveDir > 0 ? mv[movePos] - 1000 : -1;
            else 
              spin = true;
            if (spin) {
              num = mv[movePos] % 4 + 1;
              mode = mv[movePos] / 4 % 7;
              boolean clockwise = num < 3;
              if (num == 4)
                num = 2;
              if (moveDir < 0) {
                clockwise = !clockwise;
                num = 4 - num;
              }
              layer = mv[movePos] / 28;
              twisting = false;
              natural = true;
              spinning = true;
              originalAngle = 0;
              if (faceTwistDirs[layer] > 0)
                clockwise = !clockwise;
              if (moveAnimated) {
                phit = Math.PI / 2; // target for currentAngle (default pi/2)
                phis = clockwise ? 1.0 : -1.0; // sign
                int turnTime = 67 * speed; // milliseconds to be used for one turn
                if (num == 2) {
                  phit = Math.PI;
                  turnTime = 67 * doubleSpeed; // double turn is usually faster than two quarter turns
                }
                twisting = true;
                twistedLayer = layer;
                twistedMode = mode;
                splitCube(layer); // start twisting
                sTime = System.currentTimeMillis();
                lTime = sTime;
                d = phis * phit / turnTime;
                currentAngle = 0;
              }
            } // if spin
            else
              innerLoopBot = true;
          } // if cont
        } // if innerLoopTop
        if (!cont) {
          if (spin) {
            if (moveAnimated) {
              if (currentAngle * phis < phit) {
                paint();
                if (interrupted || restarted)
                  innerLoopBot = true;
                lTime = System.currentTimeMillis();
                currentAngle = d * (lTime - sTime);
              }
              else {
                innerLoopBot = true;
                // reduce hesitation between moves on waterwheel
                if (ww && !moveOne) {  
                  currentAngle -= (phis * phit);                      
                  paint();
                  if (movePos > 0 && movePos < mv.length-1) {
                    innerLoopBot = false;
                    movePos += moveDir;
                    sTime = lTime;
                    lTime = System.currentTimeMillis();
                    currentAngle = d * (lTime - sTime);
                  }
                }
              }
            }
            else 
              innerLoopBot = true;
          }
          if (innerLoopBot) {
            innerLoopBot = false;
            innerLoopTop = true;
            if (spin) {
              currentAngle = 0;
              twisting = false;
              natural = true;
              twistLayers(cube, layer, num, mode);
              spinning = false;
              if (moveAnimated)
                paint();
              if (moveOne)
                restart = true;
            }
            if (moveDir > 0) {
              movePos++;
              if (movePos < mv.length && mv[movePos] >= 1000) {
                curInfoText = mv[movePos] - 1000;
                movePos++;
              }
              if (movePos == mv.length) {
                if (!demo)
                  outerLoopBot = true;  
                else {
                  movePos = 0;
                  initInfoText(mv);
                  for (int i = 0; i < 6; i++)
                    for (int j = 0; j < 25; j++) {
                      cube[i][j] = initialCube[i][j];
                      scube[i][j] = initialSCube[i][j];
                    }
                }
              }
            }
            else
              curInfoText = -1;
            if (interrupted || restarted || restart)
              outerLoopBot = true;  
          } // innerLoopBot 
        } // cont
        if (outerLoopBot) {
          outerLoopBot = false;
          outerLoopTop = true;
          if (jobNumber <= nowServing + 1)
            animating = false;
          drawButtons = true;
          if (buttonPressed == 0)  
            clear();
          paint();
          if (demo) {
            clear();
            demo = false;
          }
          restarted = false; // added (from stopAnimation)
          nowServing++;
          // cancel();
          return;
        }
        AnimationScheduler.get().requestAnimationFrame(this);
      } // execute (or run if using timer)
    }); // AnimationCallback (or timer)
    // timer.scheduleRepeating(1);
  } // run 

  public void mouseUp(NativePreviewEvent ne) {
    dragging = false;
    if (pushed) {
      pushed = false;
      drawButtons = true;
      if (! (buttonPressed == 6 && animating) )
        paint();
    }
    else if (twisting && !spinning) {
      twisting = false;
      originalAngle += currentAngle;
      currentAngle = 0.0;
      double angle = originalAngle;
      while (angle < 0.0)
        angle += 32.0 * Math.PI;
      int num = (int)(angle * 8.0 / Math.PI) % 16; // 2pi ~ 16
      if (snap || num % 4 == 0 || num % 4 == 3) { // close enough to a corner
        num = (num + 2) / 4; // 2pi ~ 4
        if (faceTwistDirs[twistedLayer] > 0)
          num = (4 - num) % 4;
        originalAngle = 0;
        natural = true; // the cube in the natural state
        twistLayers(cube, twistedLayer, num, twistedMode); // rotate the facelets
      }
      paint();
    }
  }

  public void mouseDown(NativePreviewEvent npe) {
    NativeEvent e = npe.getNativeEvent();
    if (touchEvent) {
      Touch et =  e.getTouches().get(0); 
      lastDragX = lastX = scaleDPR(et.getClientX());
      lastDragY = lastY = scaleDPR(et.getClientY());
    }
    else {
      lastDragX = lastX = scaleDPR(e.getClientX());
      lastDragY = lastY = scaleDPR(e.getClientY());
    }
    toTwist = false;
    buttonPressed = selectButton(lastX, lastY);
    if (buttonPressed >= 0) {
      pushed = true;
      if (buttonPressed == 3) {
        if (!animating) // special feature
          mirrored = !mirrored;
        else
          stopAnimation();
      }
      else if (buttonPressed == 0) { // clear everything to the initial setup
        if (scramble > 0 && buttonBar == 2) {
          if (scrambleToggle == true) {
            scrambleToggle = false;
            stopAnimation();
            clear();
          }
          else {
            scrambleToggle = true;
            buttonPressed = 6;
            startAnimation(buttonAction[buttonPressed]);
          }
        }
        else {
          stopAnimation();
          clear();
        }
      }
      else if (buttonPressed == 7) { // next sequence
        stopAnimation();
        clear();
        curMove = curMove < move.length - 1 ? curMove + 1 : 0;
      }
      else
        startAnimation(buttonAction[buttonPressed]);
      drawButtons = true;
      paint();
    }
    else if (progressHeight > 0 && move.length > 0 && move[curMove].length > 0 && lastY >= height - progressHeight && lastY < height) {
      if (clickProgress) {
        stopAnimation();
        progress(jobNumber++);
      }
    }
    else {
      if (mirrored)
        lastDragX = lastX = width - lastX;
      if (editable && !animating) {
        if (e.getButton() == 1 && e.getShiftKey() == false)
          toTwist = true;
      }
    }
  }; // mouseDown

  void progress(final int jobNum) {
    if (jobNum > nowServing) {  // reschedule waiters 
      Scheduler.get().scheduleDeferred(new Command() {
        public void execute () {
          progress(jobNum);
        }
      });
      return;
    }
    if (jobNum < nowServing) {  // this should not happen
      Window.alert("jobNum " + jobNum + " <  nowServing " + nowServing);
      return;
    }
    int len = realMoveLength(move[curMove]);
    int pos = ((lastX - 1) * len * 2 / (width - 2) + 1) / 2;
    pos = Math.max(0, Math.min(len, pos));
    if (pos > 0)
      pos = arrayMovePos(move[curMove], pos);
    if (pos > movePos)
      doMove(cube, move[curMove], movePos, pos - movePos, false);
    if (pos < movePos)
      doMove(cube, move[curMove], pos, movePos - pos, true);
    movePos = pos;
    dragging = true;
    paint();
    animating = false;
    nowServing++;
  }

  boolean touchEvent;
  boolean mouseIsDown = false;

  private final NativePreviewHandler nativePreviewHandler = new NativePreviewHandler() {
    public void onPreviewNativeEvent(NativePreviewEvent event) {
      final int eventType = event.getTypeInt();
      touchEvent = false;
      if (eventType == Event.ONTOUCHMOVE) {
        event.getNativeEvent().preventDefault();
        touchEvent = true;
        if (mouseIsDown) {
          mouseMove(event);
        }
      }
      else if (eventType == Event.ONTOUCHEND) {
        event.getNativeEvent().preventDefault();
        touchEvent = true;
        mouseIsDown = false;
        mouseUp(event);
      }
      else if (eventType == Event.ONTOUCHSTART) {
        event.getNativeEvent().preventDefault();
        touchEvent = true;
        mouseIsDown = true;
        mouseDown(event);
      }
      else if (eventType == Event.ONMOUSEMOVE) {
        if (mouseIsDown) {
          mouseMove(event);
        }
      }
      else if (eventType == Event.ONMOUSEUP) {
        mouseIsDown = false;
        mouseUp(event);
      }
      else if (eventType == Event.ONMOUSEDOWN) {
        mouseIsDown = true;
        mouseDown(event);
      }
    }
  };

  public void mouseMove(NativePreviewEvent npe) {
    int x, y;
    if (pushed) {
      return;
    }
    NativeEvent e = npe.getNativeEvent();
    if (dragging) {
      stopAnimation();
      int len = realMoveLength(move[curMove]);
      int pos;
      if (touchEvent) {
        x = scaleDPR(e.getTouches().get(0).getClientX());
        pos = ((x - 1) * len * 2 / (width - 2) + 1) / 2;
      }
      else
        pos = ((scaleDPR(e.getClientX()) - 1) * len * 2 / (width - 2) + 1) / 2;
      pos = Math.max(0, Math.min(len, pos));
      if (pos > 0)
        pos = arrayMovePos(move[curMove], pos);
      if (pos > movePos)
        doMove(cube, move[curMove], movePos, pos - movePos, false);
      if (pos < movePos)
        doMove(cube, move[curMove], pos, movePos - pos, true);
      movePos = pos;
      paint();
      return;
    }
    if (touchEvent) {
      Touch et =  e.getTouches().get(0); 
      x = mirrored ? width - scaleDPR(et.getClientX()) : scaleDPR(et.getClientX());
      y = scaleDPR(et.getClientY());
    }
    else {
      x = mirrored ? width - scaleDPR(e.getClientX()) : scaleDPR(e.getClientX());
      y = scaleDPR(e.getClientY());
    }
    int dx = x - lastX;
    int dy = y - lastY;
    if (editable && toTwist && !twisting && !animating) { // we do not twist but we can
      lastDragX = x;
      lastDragY = y;
      for (int i = 0; i < dragAreas; i++) { // check if inside a drag area
        double d1 = dragCornersX[i][0];
        double x1 = dragCornersX[i][1] - d1;
        double y1 = dragCornersX[i][3] - d1;
        double d2 = dragCornersY[i][0];
        double x2 = dragCornersY[i][1] - d2;
        double y2 = dragCornersY[i][3] - d2;
        double a = (y2 * (lastX - d1) - y1 * (lastY - d2)) / (x1 * y2 - y1 * x2);
        double b = (-x2 * (lastX - d1) + x1 * (lastY - d2)) / (x1 * y2 - y1 * x2);
        if (a > 0 && a < 1 && b > 0 && b < 1) { // we are in
          if (dx * dx + dy * dy < 144) // delay the decision about twisting
            return;
          dragX = dragDirsX[i];
          dragY = dragDirsY[i];
          double d = Math.abs(dragX * dx + dragY * dy) / Math.sqrt((dragX * dragX + dragY * dragY) * (dx * dx + dy * dy));
          if (d > 0.75) {
            twisting = true;
            twistedLayer = dragLayers[i];
            twistedMode = dragModes[i];
            break;
          }
        }
      }
      toTwist = false;
      lastX = lastDragX;
      lastY = lastDragY;
    }
    dx = x - lastX;
    dy = y - lastY;
    dx /= dpr;
    dy /= dpr;
    if (!twisting || animating) { // whole cube rotation
      vNorm(vAdd(eye, vScale(vCopy(eyeD, eyeX), dx * -0.016)));
      vNorm(vMul(eyeX, eyeY, eye));
      vNorm(vAdd(eye, vScale(vCopy(eyeD, eyeY), dy * 0.016)));
      vNorm(vMul(eyeY, eye, eyeX));
      lastX = x;
      lastY = y;
    }
    else {
      if (natural)
        splitCube(twistedLayer);
      currentAngle = 0.03 * (dragX * dx + dragY * dy) / Math.sqrt(dragX * dragX + dragY * dragY); // dv * cos a
    }
    paint();  // mouseMove
  }

  int scaleDPR(int n) {
    return((int)((double)n*dpr));
  }

  Canvas canv = Canvas.createIfSupported();
  Canvas canv2 = Canvas.createIfSupported();
  
  Context2d ctx;
  Context2d graphics;
  static double dpr, dph;
  static double lineWidth;
  int ubuttonHeight;
  int uprogressHeight;
  int utextHeight;

  public void init2 (){
    ctx = canv.getContext2d();
    graphics = canv2.getContext2d();
    ubuttonHeight = buttonHeight;
    uprogressHeight = progressHeight;
    utextHeight = textHeight;
    scaleCanvas();
    RootPanel.get().add(canv);
    Event.addNativePreviewHandler(nativePreviewHandler);

    Window.addResizeHandler(new ResizeHandler() {
      Timer resizeTimer = new Timer() {  
        public void run() {
          scaleCanvas();
          drawButtons = true;
          paint();
        }
      };
      public void onResize(ResizeEvent event) {
        resizeTimer.schedule(250);
      }
    });

    paint();
  }

  void scaleCanvas() {
    height = Window.getClientHeight() - 1;
    width = Window.getClientWidth() - 1;
    setCanvasCssSize();
    MyContext2 mctx = ctx.cast();
    dpr = mctx.devicePixelRatio();
    dph = dpr/2;
    height *= dpr;
    width *= dpr;
    setCanvasSize();
    lineWidth = dpr;
    buttonHeight = (int)((double)ubuttonHeight * dpr);
    progressHeight = (int)((double)uprogressHeight * dpr);
    textHeight = (int)((double)utextHeight * dpr);
    for (int i = 1; i < 10; i++)
      ds[i] = i * dpr;
    for (int i = 0; i < textOffset.length; i++)
      textOffset[i] = textOffsetInit[i]*dpr;
    if (buttonBar == 1)
      height -= buttonHeight;
  }

  void setCanvasCssSize() {
    canv.getElement().getStyle().setWidth(width, Unit.PX);
    canv.getElement().getStyle().setHeight(height, Unit.PX);
    canv2.getElement().getStyle().setWidth(width, Unit.PX);
    canv2.getElement().getStyle().setHeight(height, Unit.PX);
  }

  void setCanvasSize() {
    canv.setCoordinateSpaceWidth(width);
    canv.setCoordinateSpaceHeight(height);
    canv2.setCoordinateSpaceWidth(width);
    canv2.setCoordinateSpaceHeight(height);
  }

  protected static class MyContext2 extends Context2d {
    public final native double devicePixelRatio() /*-{
      if (typeof devicePixelRatio !== 'undefined')
        return devicePixelRatio;
      return 1;
    }-*/;    
  }

  static String randMoves(int s, int n) {
    // param 1 is cube size (3 = 3x3, 4 = 4x4, etc)
    // param 2 is #moves, 0 defaults to 10x cube size
    char[] face = {'R', 'L','F','B','U','D'};
    char[] slice = {' ', 'm', 'n'};
    char[] twist = {' ', '2', '\''};
    int r1 = -1, prev = -1, prev2 = -1, r2, r3;
    String randmoves = "";
    if (n == 0) n = s * 10;
    for (int i=0; i < n; i++) {
      while (r1 == prev || ((int)(r1/2) == (int)(prev/2) && r1 == prev2))
        r1 =  (int)(Math.random()*6);
      prev2 = prev;
      prev = r1;
      r2 = (int)(Math.random()*3);
      if (s <= 3)
        randmoves += "" + face[r1] + twist[r2] + " ";
      else {
        r3 = (int)(Math.random()*((s>4)?3:2));
        if (s == 5 && r3 == 1) r3 = 0;
        randmoves += "" + face[r1] + slice[r3] + twist[r2] + " ";
      }
    }
    return(randmoves);
  }

}
