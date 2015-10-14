describe("setClasses",function(){var t,e,n,i,r=function(e,r,o){return function(){var s={_config:r};n=document.createElement("div"),o&&(n.className=o),define("Modernizr",[],function(){return s}),define("docElement",[],function(){return n}),i(["setClasses"],function(n){t=n,e()})}()},o=function(){t=void 0,i.undef("setClasses"),i.undef("docElement"),i.undef("Modernizr")};before(function(t){define("package",[],function(){return{}}),(i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["cleanup"],function(n){e=n,t()})}),describe("cssClasses disabled",function(){before(function(t){r(t,{classPrefix:"fake",enableClasses:!1})}),it("should not add anything",function(t){i(["setClasses"],function(e){e(["detect"]),expect(n.className).to.not.contain("fakedetect"),t()})}),after(o)}),describe("cssClasses enabled, with prefix",function(){before(function(t){r(t,{classPrefix:"fake",enableClasses:!0})}),it("adds a class with a prefix",function(t){i(["setClasses"],function(e){e(["detect"]),expect(n.className).to.contain("fakedetect"),t()})}),after(o)}),describe("cssClasses enabled, without prefix",function(){before(function(t){r(t,{enableClasses:!0})}),after(o),it("adds a class without a prefix",function(t){i(["setClasses"],function(e){e(["detect"]),expect(n.className).to.contain("detect"),t()})})}),describe("enableJSClass enabled, with prefix",function(){before(function(t){r(t,{classPrefix:"fake",enableClasses:!0,enableJSClass:!0}," fakeno-js +fakeno-js fakeno-js- i-has-fakeno-js")}),it("changes the `js` class, and adds a class with a prefix",function(t){i(["setClasses"],function(e){var i=n.className.split(" ");expect(i).to.contain("fakeno-js"),e(["detect"]),i=n.className.split(" "),expect(n.className).to.contain("fakejs"),expect(n.className).to.contain("+fakeno-js"),expect(n.className).to.contain("fakeno-js-"),expect(n.className).to.contain("i-has-fakeno-js"),expect(n.className).to.contain("fakedetect"),t()})}),after(o)}),describe("enableJSClass enabled, without prefix",function(){before(function(t){r(t,{enableJSClass:!0,enableClasses:!0}," no-js +no-js no-js- i-has-no-js")}),after(o),it("changes the `js` class, and adds a class without a prefix",function(t){i(["setClasses"],function(e){var i=n.className.split(" ");expect(i).to.contain("no-js"),e(["detect"]),i=n.className.split(" "),expect(n.className).to.contain("js"),expect(n.className).to.contain("+no-js"),expect(n.className).to.contain("no-js-"),expect(n.className).to.contain("i-has-no-js"),expect(n.className).to.contain("detect"),t()})})}),after(function(){e()})});