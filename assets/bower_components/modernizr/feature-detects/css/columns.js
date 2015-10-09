/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){!function(){e.addTest("csscolumns",function(){var e=!1,n=t("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(i){}return e});for(var n,i,o=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<o.length;r++)n=o[r].toLowerCase(),i=t("column"+o[r]),("breakbefore"===n||"breakafter"===n||"breakinside"==n)&&(i=i||t(o[r])),e.addTest("csscolumns."+n,i)}()});