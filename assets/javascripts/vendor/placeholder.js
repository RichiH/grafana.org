!function(e,t,n){function i(e){var t={},i=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!i.test(n.name)&&(t[n.name]=n.value)}),t}function r(e,i){var r=this,o=n(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),e===!0)return o[0].value=i;o.focus()}else r.value="",o.removeClass("placeholder"),r==t.activeElement&&r.select()}function o(){var e,t=this,o=n(t),a=this.id;if(""==t.value){if("password"==t.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(s){e=n("<input>").attr(n.extend(i(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":a}).bind("focus.placeholder",r),o.data({"placeholder-textinput":e,"placeholder-id":a}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var a,s,u="placeholder"in t.createElement("input"),l="placeholder"in t.createElement("textarea"),c=n.fn,d=n.valHooks;u&&l?(s=c.placeholder=function(){return this},s.input=s.textarea=!0):(s=c.placeholder=function(){var e=this;return e.filter((u?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},s.input=u,s.textarea=l,a={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,i){var a=n(e);return a.data("placeholder-enabled")?(""==i?(e.value=i,e!=t.activeElement&&o.call(e)):a.hasClass("placeholder")?r.call(e,!0,i)||(e.value=i):e.value=i,a):e.value=i}},u||(d.input=a),l||(d.textarea=a),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(r);setTimeout(function(){e.each(o)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);