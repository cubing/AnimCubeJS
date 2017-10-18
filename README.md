# AnimCube JS Port
Check out the demo and source code to see how the applet works. Make sure to include `animcube.nocache.js`, `AnimCube.cfg`, and all `[long alphanumeric string].cache.js` in the same directories/folders as cube.html. DO NOT CHANGE THE NAMES OF THE NON-CFG FILES.

Next, in the HTML file where you want your cube to be displayed, create an iframe pointing to:

`cube.html?config=[name of cfg file].cfg&[parameters]`

The list of parameters can be found at [the original Java Applet site](http://software.rubikscube.info/AnimCube/) with a few new additions [here](http://cubing.github.io/AnimCubeJS/new_parameters.html). Make sure to declare parameters as follows: `[name]=[value]`, and separate parameter declarations with `&`.

You can add parameters in the .cfg file. Just note that URL parameters are prioritized over .cfg parameters, so if a parameter is declared in both the URL and the .cfg, then the URL parameter value will be read instead of the .cfg parameter value.

NOTE: The original Java applet was made by Josef Jelinek. The port was made by [Michael Feather](https://mfeather1.github.io/3ColorCube/index.html). Here are the [build instructions](http://cubing.github.io/AnimCubeJS/java/build.html) and [unminified code](https://github.com/cubing/AnimCubeJS/tree/gh-pages/unminified).
If you want to change the code, you should be using these resources to modify AnimCube.java before porting to Javascript, as opposed to editing the ported Javascript code directly.
