(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(t,n,a){"use strict";var e=a(3),r=a(80)(!0);e(e.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(53)("includes")},148:function(t,n,a){"use strict";var e=a(3),r=a(157);e(e.P+e.F*a(158)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},149:function(t,n,a){var e=a(10),r=a(29),o=a(4)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==r(t))}},156:function(t,n,a){var e=a(15).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(6)&&e(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},157:function(t,n,a){var e=a(149),r=a(28);t.exports=function(t,n,a){if(e(n))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(t))}},158:function(t,n,a){var e=a(4)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(a){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},181:function(t,n,a){},268:function(t,n,a){"use strict";var e=a(181);a.n(e).a},283:function(t,n,a){"use strict";a.r(n);a(156),a(147),a(148),a(82),a(159);var e,r=a(160),o=a(162),s=a.n(o),i={data:function(){return{tagName:"",browserDownloadUrl:""}},mounted:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var n,a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.github.com/repos/inorichi/tachiyomi/releases/latest");case 2:n=t.sent,a=n.data,e=a.assets.find((function(t){return t.name.includes(".apk")})),this.$data.tagName=a.tag_name,this.$data.browserDownloadUrl=e.browser_download_url;case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},c=(a(268),a(1)),l=Object(c.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("ul",{staticClass:"download-list"},[n("li",[n("a",{staticClass:"download-link",attrs:{rel:"noopener noreferrer",href:this.browserDownloadUrl||"https://github.com/inorichi/tachiyomi/releases/latest",title:this.tagName,download:""}},[n("div",{staticClass:"download-button stable"},[n("span",{staticClass:"download-area"},[n("MaterialIcon",{attrs:{name:"download-get_app download-icons","icon-name":"get_app"}}),this._v(" "),n("span",{staticClass:"download-text-stable download-text"},[this._v("Stable release")])],1)])])]),this._v(" "),n("li",[n("a",{staticClass:"download-link",attrs:{href:"http://tachiyomi.kanade.eu/latest"}},[n("div",{staticClass:"download-button dev"},[n("div",{staticClass:"download-area"},[n("MaterialIcon",{attrs:{name:"download-bug_report download-icons","icon-name":"bug_report"}}),this._v(" "),n("span",{staticClass:"download-text-dev download-text"},[this._v("Dev release")])],1)])])])])}),[],!1,null,"2efa765e",null);n.default=l.exports}}]);