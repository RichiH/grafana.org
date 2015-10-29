/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/
define(["Modernizr","createElement","inputElem"],function(e,t,n){var i="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),r={};e.input=function(e){for(var i=0,o=e.length;o>i;i++)r[e[i]]=!!(e[i]in n);return r.list&&(r.list=!(!t("datalist")||!window.HTMLDataListElement)),r}(i)});