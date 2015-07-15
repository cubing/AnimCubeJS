# AnimCube JS Port
Check out the demo and source code to see how the applet works. Make sure to `animcube.nocache.js`, `clean.css`, `AnimCube.cfg`, and all `[long alphanumeric string].cache.js` in the same directories/folders as cube.html. DO NOT CHANGE THE NAMES OF THE NON-CFG FILES.

Next, in the HTML file where you want your cube to be displayed, create an iframe pointing to:

`cube.html?config=[name of cfg file].cfg&[parameters]`

The full list of parameters can be found at [the original Java Applet site](http://software.rubikscube.info/AnimCube/). Make sure to declare parameters as follows: `[name]=[value]`, and separate parameter declarations with `&`.

You can add parameters in the .cfg file. Just note that URL parameters are prioritized over .cfg parameters, so if a parameter is declared in both the URL and the .cfg, then the URL parameter value will be read instead of the .cfg parameter value.

NOTE: The original Java applet was made by Josef Jelinek. The port was made by Michael Feather. Here are Feather's [build instructions](http://irbsystems.com/test2/rc/build.html) and [unminified code](http://irbsystems.com/test2/rc/AnimCube/animcube/unminified/). If you want to change the code, you should be using these resources to modify the Java code (and then port), as opposed to the ported Javascript code.
