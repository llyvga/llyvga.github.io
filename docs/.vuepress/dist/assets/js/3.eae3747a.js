(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{252:function(t,s,a){},274:function(t,s,a){"use strict";a(252)},280:function(t,s,a){"use strict";a.r(s);var n={name:"m-popup",props:{size:{type:String,default:"form"},title:{type:String,default:"warning"},btn:{type:Number,default:3},submitBtn:{type:String,default:"submit"},cancelBtn:{type:String,default:"cancel"},mask:{type:Boolean,default:!0},transition:{type:String,default:"top"},themeColor:{type:String,default:"#cc6699"},showModule:Boolean}},e=(a(274),a(13)),i=Object(e.a)(n,(function(){var t=this,s=t._self._c;return s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showModule,expression:"showModule"}],staticClass:"popup",class:t.transition},[t.mask?s("div",{staticClass:"mask"}):t._e(),t._v(" "),s("div",{staticClass:"p-dialog",style:{"--theme-color":t.themeColor}},[s("div",{staticClass:"p-header"},[s("h4",[t._v(t._s(t.title))]),t._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("cancel")}}},[t._v("x")])]),t._v(" "),s("div",{staticClass:"p-body"},[t._t("body",(function(){return[t._v("content")]}))],2),t._v(" "),s("div",{staticClass:"p-footer"},[1===t.btn?s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("submit")}}},[t._v(t._s(t.submitBtn))]):t._e(),t._v(" "),2===t.btn?s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.cancelBtn))]):t._e(),t._v(" "),3===t.btn?s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("submit")}}},[t._v(t._s(t.submitBtn))]),t._v(" "),s("a",{staticClass:"btn btn-cancel",attrs:{href:"javascript:;"},on:{click:function(s){return t.$emit("cancel")}}},[t._v(t._s(t.cancelBtn))])]):t._e()])])])])}),[],!1,null,"39cd4a28",null);s.default=i.exports}}]);