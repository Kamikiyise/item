(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5effeeaf"],{3328:function(t,e,s){"use strict";s("8613")},8613:function(t,e,s){},f713:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo",attrs:{id:"demo"}},[s("div",{staticClass:"top",attrs:{id:"top"}},[s("div",{staticClass:"top-left"},[s("img",{staticClass:"top-back",attrs:{src:"/img/back.svg"},on:{click:t.clickBack}})]),s("div",{staticClass:"top-title"},[t._v(t._s(t.$route.meta.title))]),s("div",{staticClass:"top-right"})]),s("div",{staticClass:"show-box",attrs:{id:"showBox"}},[s("div",{staticClass:"show-title"},[t._v("演示效果")]),s("div",{staticClass:"show-component",staticStyle:{height:"30px",flex:"auto 0 0",display:"flex","flex-direction":"row","justify-content":"center","align-items":"center"}},[s("k-radio",{staticStyle:{height:"30px",width:"auto"},attrs:{mainStyle:t.mainStyle,status:t.status,value:"香蕉",disable:t.disable,shape:t.shape,height:t.height,width:t.width},on:{change:t.changeStatus}},[t._v("香蕉")])],1),s("div",{staticStyle:{"margin-top":"20px",flex:"auto 0 0",display:"flex","justify-content":"center","align-items":"center",width:"100%",opacity:"0.8"}},[s("span",{staticStyle:{"border-radius":"5px","background-color":"rgb(200,200,200)",padding:"6px","font-size":"14px","border-style":"'dotted'","border-color":"rgb(220,220,220)"}},[t._v("当前选择："+t._s(t.selected))])])]),s("div",{staticClass:"params-head",attrs:{id:"head"}},[t._v("参数配置")]),s("div",{staticClass:"params-body",style:{height:t.paramsHeight+"px"}},[s("div",{staticClass:"params-item"},[t._m(0),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["primary","error","warning","success","info"],index:0},on:{change:t.changeStyle}})],1),s("div",{staticClass:"params-item"},[t._m(1),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["方形","圆形"],index:1},on:{change:t.changeShape}})],1),s("div",{staticClass:"params-item"},[t._m(2),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["20","25","30"],index:0},on:{change:t.changeSize}})],1),s("div",{staticClass:"params-item"},[t._m(3),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["是","否"],index:1},on:{change:t.changeDisable}})],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("主题样式")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("形状")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("大小")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("是否禁用")])])}],n=(s("ac1f"),s("5319"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"k-radio"},[s("div",{staticClass:"k-radio-left",style:t.bodyStyle,on:{click:t.Click}},[t.selfStatus?s("img",{staticClass:"k-radio-img",attrs:{src:"/img/radio/check.svg"}}):t._e()]),s("label",{staticClass:"k-radio-right",on:{click:t.Click}},[t._t("default",(function(){return[t._v("单选框")]}))],2)])}),c=[],l=(s("a9e3"),{name:"k-radio",data:function(){return{selfStatus:!1}},methods:{Click:function(){this.disable||(this.selfStatus||this.$emit("change",this.value),this.selfStatus&&this.$emit("change",""),this.selfStatus=!this.selfStatus)}},mounted:function(){this.selfStatus=this.status},watch:{},computed:{bodyStyle:function(){var t={},e={primary:"#007aff",success:"#4cd964",warning:"#f0ad4e",error:"#dd524d",info:"rgb(120,120,120)"};return t.backgroundColor=e[this.mainStyle],e[this.mainStyle]||(t.backgroundColor=this.mainStyle),this.selfStatus?t.borderStyle="none":(t.backgroundColor="white",t.borderStyle="solid",t.borderColor="rgb(200,200,200)",t.borderWidth="1px"),t.borderRadius="square"==this.shape?"5px":"100px",t.opacity=this.disable?.5:1,t.width=this.width+"px",t.height=this.height+"px",t}},props:{status:{type:Boolean,default:!1},shape:{type:String,default:"circle"},mainStyle:{type:String,default:"primary"},disable:{type:Boolean,default:!1},height:{type:Number,default:20},width:{type:Number,default:20},group:{type:String,default:"default"},value:{type:String||Number||Object||Array||Boolean,default:!0}}}),r=l,o=(s("3328"),s("2877")),d=Object(o["a"])(r,n,c,!1,null,"73910ec7",null),h=d.exports,u={components:{"k-radio":h},data:function(){return{mainStyle:"primary",status:!1,shape:"circle",disable:!1,height:20,width:20,selected:"",paramsHeight:100}},methods:{clickBack:function(){this.$router.replace("/")},changeStatus:function(t){this.selected=t},changeStyle:function(t){var e=["primary","error","warning","success","info"];this.mainStyle=e[t]},changeShape:function(t){var e=["square","circle"];this.shape=e[t]},changeSize:function(t){var e=[{height:20,width:20},{height:25,width:25},{height:30,width:30}];this.height=e[t].height,this.width=e[t].width},changeDisable:function(t){var e=[!0,!1];this.disable=e[t]}},mounted:function(){this.paramsHeight=document.getElementById("demo").clientHeight-document.getElementById("top").clientHeight-document.getElementById("showBox").clientHeight-document.getElementById("head").clientHeight-20-12}},g=u,p=Object(o["a"])(g,a,i,!1,null,"14e163a1",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5effeeaf.71668a6a.js.map