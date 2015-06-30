# AnimCube JS Port
Check out the demo and source code to see how the applet works. Make sure to `animcube.nocache.js`, `clean.css`, `AnimCube.cfg`, and `7551EE39E21E6204DAB2374363B779A2.cache.js` in the same directories/folders as cube.html. DO NOT CHANGE THE NAMES OF THE NON-CFG FILES.

Next, in the HTML file where you want your cube to be displayed, create an iframe pointing to:

`cube.html?config=[name of cfg file].cfg&[parameters]`

The full list of parameters can be found at [the original Java Applet site](http://software.rubikscube.info/AnimCube/). Make sure to declare parameters as follows: `[name]=[value]`, and separate parameter declarations with `&`.

You can customize the UI in the .cfg file's parameters.

NOTE: The original Java applet was made by Josef Jelinek. The port was made by Michael Feather.
