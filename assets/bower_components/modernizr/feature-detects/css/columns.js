/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){!function(){e.addTest("csscolumns",function(){var e=!1,i=t("columnCount");try{(e=!!i)&&(e=new Boolean(e))}catch(n){}return e});for(var i,n,o=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<o.length;r++)i=o[r].toLowerCase(),n=t("column"+o[r]),("breakbefore"===i||"breakafter"===i||"breakinside"==i)&&(n=n||t(o[r])),e.addTest("csscolumns."+i,n)}()});