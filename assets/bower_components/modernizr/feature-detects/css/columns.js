/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){!function(){e.addTest("csscolumns",function(){var e=!1,n=t("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(i){}return e});for(var n,i,r=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],o=0;o<r.length;o++)n=r[o].toLowerCase(),i=t("column"+r[o]),("breakbefore"===n||"breakafter"===n||"breakinside"==n)&&(i=i||t(r[o])),e.addTest("csscolumns."+n,i)}()});