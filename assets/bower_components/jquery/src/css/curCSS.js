define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","../selector"],function(e,t,n,i){function r(r,o,a){var s,c,l,u,d=r.style;return a=a||i(r),a&&(u=a.getPropertyValue(o)||a[o]),a&&(""!==u||e.contains(r.ownerDocument,r)||(u=e.style(r,o)),t.test(u)&&n.test(o)&&(s=d.width,c=d.minWidth,l=d.maxWidth,d.minWidth=d.maxWidth=d.width=u,u=a.width,d.width=s,d.minWidth=c,d.maxWidth=l)),void 0!==u?u+"":u}return r});