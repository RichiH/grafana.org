/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(e,t,n){e.addAsyncTest(function(){var i,r,o=n("indexedDB",window),a="detect-blob-support",s=!1;if(!e.indexeddb||!e.indexeddb.deleteDatabase)return!1;try{o.deleteDatabase(a).onsuccess=function(){i=o.open(a,1),i.onupgradeneeded=function(){i.result.createObjectStore("store")},i.onsuccess=function(){r=i.result;try{r.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),s=!0}catch(e){s=!1}finally{t("indexeddbblob",s),r.close(),o.deleteDatabase(a)}}}}catch(c){t("indexeddbblob",!1)}})});