/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,r){n("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(n){var i=n.childNodes[1],o=n.childNodes[0],s=parseInt((o.offsetWidth-o.clientWidth)/2,10),d=t.clientWidth/100,a=t.clientHeight/100,c=parseInt(50*Math.max(d,a),10),l=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);e.addTest("cssvmaxunit",r(c,l)||r(c,l-s))},2)});