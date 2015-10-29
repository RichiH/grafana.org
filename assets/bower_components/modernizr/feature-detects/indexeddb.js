/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
define(["Modernizr","prefixed"],function(e,t){var n=t("indexedDB",window);e.addTest("indexeddb",!!n),n&&e.addTest("indexeddb.deletedatabase","deleteDatabase"in n)});