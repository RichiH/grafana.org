!function(t,e){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.4.7",settings:{use_tallest:!0,before_height_change:t.noop,after_height_change:t.noop,equalize_on_stack:!1},init:function(t,e,n){Foundation.inherit(this,"image_loaded"),this.bindings(e,n),this.reflow()},events:function(){this.S(e).off(".equalizer").on("resize.fndtn.equalizer",function(){this.reflow()}.bind(this))},equalize:function(e){var n=!1,i=e.find("["+this.attr_name()+"-watch]:visible"),r=e.data(this.attr_name(!0)+"-init");if(0!==i.length){var s=i.first().offset().top;if(r.before_height_change(),e.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"),i.height("inherit"),i.each(function(){var e=t(this);e.offset().top!==s&&(n=!0)}),r.equalize_on_stack!==!1||!n){var a=i.map(function(){return t(this).outerHeight(!1)}).get();if(r.use_tallest){var o=Math.max.apply(null,a);i.css("height",o)}else{var l=Math.min.apply(null,a);i.css("height",l)}r.after_height_change(),e.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")}}},reflow:function(){var e=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=t(this);e.image_loaded(e.S("img",this),function(){e.equalize(n)})})}}}(jQuery,window,window.document);