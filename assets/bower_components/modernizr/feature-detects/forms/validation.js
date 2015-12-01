/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(e,t,n,i){e.addTest("formvalidation",function(){var n=t("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var r,o=!1;return e.formvalidationapi=!0,n.addEventListener("submit",function(e){window.opera||e.preventDefault(),e.stopPropagation()},!1),n.innerHTML='<input name="modTest" required><button></button>',i("#modernizr form{position:absolute;top:-99999em}",function(t){t.appendChild(n),r=n.getElementsByTagName("input")[0],r.addEventListener("invalid",function(e){o=!0,e.preventDefault(),e.stopPropagation()},!1),e.formvalidationmessage=!!r.validationMessage,n.getElementsByTagName("button")[0].click()}),o})});