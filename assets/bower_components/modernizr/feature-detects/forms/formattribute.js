/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("formattribute",function(){var e,i=t("form"),r=t("input"),o=t("div"),s="formtest"+(new Date).getTime(),a=!1;i.id=s;try{r.setAttribute("form",s)}catch(c){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=s,r.setAttributeNode(e))}return o.appendChild(i),o.appendChild(r),n.appendChild(o),a=i.elements&&1===i.elements.length&&r.form==i,o.parentNode.removeChild(o),a})});