/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(e,t,n){e.addAsyncTest(function(){var i,r,o=n("indexedDB",window),s="detect-blob-support",a=!1;if(!e.indexeddb||!e.indexeddb.deleteDatabase)return!1;try{o.deleteDatabase(s).onsuccess=function(){i=o.open(s,1),i.onupgradeneeded=function(){i.result.createObjectStore("store")},i.onsuccess=function(){r=i.result;try{r.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),a=!0}catch(e){a=!1}finally{t("indexeddbblob",a),r.close(),o.deleteDatabase(s)}}}}catch(c){t("indexeddbblob",!1)}})});