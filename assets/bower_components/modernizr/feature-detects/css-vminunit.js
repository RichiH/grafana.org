Modernizr.addTest("cssvminunit",function(){var t;return Modernizr.testStyles("#modernizr { width: 50vmin; }",function(e){var n=window.innerWidth/100,i=window.innerHeight/100,r=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);t=parseInt(50*Math.min(n,i),10)==r}),t});