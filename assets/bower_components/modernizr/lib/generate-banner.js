define(["lodash","package","lib/build-query"],function(e,t,n){var i="modernizr.com";return"undefined"!=typeof location&&"host"in location&&(i=location.host),function(r,o){o=o||{};var a=n(o);if(r&&"compact"!==r){if("full"===r)return"/*!\n * "+t.name+" v"+t.version+"\n * Build http://"+i+"/download"+a+"\n *\n * Copyright (c)\n *  "+e.pluck(t.contributors,"name").join("\n *  ")+"\n\n * "+t.license+" License\n */\n\n/*\n * Modernizr tests which native CSS3 and HTML5 features are available in the\n * current UA and makes the results available to you in two ways: as properties on\n * a global `Modernizr` object, and as classes on the `<html>` element. This\n * information allows you to progressively enhance your pages with a granular level\n * of control over the experience.\n*/\n";throw'banners() must be passed "compact" or "full" as an argument.'}return"/*! "+t.name+" "+t.version+" (Custom Build) | "+t.license+" *\n * http://"+i+"/download/"+a+" !*/\n"}});