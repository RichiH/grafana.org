define(["./core","./var/slice","./callbacks"],function(n,e){return n.extend({Deferred:function(e){var t=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],r="pending",a={state:function(){return r},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n.Deferred(function(r){n.each(t,function(t,o){var s=n.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&n.isFunction(e.promise)?e.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[o[0]+"With"](this===a?r.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?n.extend(e,a):a}},i={};return a.pipe=a.then,n.each(t,function(n,e){var o=e[2],s=e[3];a[e[1]]=o.add,s&&o.add(function(){r=s},t[1^n][2].disable,t[2][2].lock),i[e[0]]=function(){return i[e[0]+"With"](this===i?a:this,arguments),this},i[e[0]+"With"]=o.fireWith}),a.promise(i),e&&e.call(i,i),i},when:function(t){var r,a,i,o=0,s=e.call(arguments),c=s.length,p=1!==c||t&&n.isFunction(t.promise)?c:0,l=1===p?t:n.Deferred(),u=function(n,t,a){return function(i){t[n]=this,a[n]=arguments.length>1?e.call(arguments):i,a===r?l.notifyWith(t,a):--p||l.resolveWith(t,a)}};if(c>1)for(r=new Array(c),a=new Array(c),i=new Array(c);c>o;o++)s[o]&&n.isFunction(s[o].promise)?s[o].promise().done(u(o,i,s)).fail(l.reject).progress(u(o,a,r)):--p;return p||l.resolveWith(i,s),l.promise()}}),n});