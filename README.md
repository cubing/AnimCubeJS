# AnimCube JS Port

AnimCubeJS is a JavaScript (JS) version of Josef Jelinek's excellent Java applet 
[AnimCube](http://software.rubikscube.info/AnimCube).

Check out the demo and source code to see how the applet works. Make sure to include `animcube.nocache.js`, `AnimCube.cfg`, and all `[long alphanumeric string].cache.js` in the directory/folder referenced in the cube.html. DO NOT CHANGE THE NAMES OF THE NON-CFG FILES.

Next, in the HTML file where you want your cube to be displayed, create an iframe pointing to:

`cube.html?config=[name of cfg file].cfg&[parameters]`

New parameters (in addition to those at above link) are [here](http://cubing.github.io/AnimCubeJS/new_parameters.html). 
Make sure to declare parameters as follows: `[name]=[value]`, and separate parameter declarations with `&`.

You can add parameters in the .cfg file. Just note that URL parameters are prioritized over .cfg parameters, so if a parameter is declared in both the URL and the .cfg, then the URL parameter value will be read instead of the .cfg parameter value.

The port was made by [Michael Feather](https://mfeather1.github.io/3ColorCube/index.html). Here are the [build instructions](http://cubing.github.io/AnimCubeJS/java/build.html) and [unminified code](https://github.com/cubing/AnimCubeJS/tree/gh-pages/unminified).
If you want to change the code, you should be using these resources to modify AnimCube.java before porting to Javascript, as opposed to editing the ported Javascript code directly.
