(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04305c4f"],{5592:function(t,e,i){"use strict";i("c8a1")},"6d9e":function(t,e,i){},"7abe":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("k-cell",{staticStyle:{width:"100%",height:"100%"},attrs:{list:t.list},on:{itemClick:t.itemClick}})],1)},c=[],n=(i("ac1f"),i("5319"),[{head:"base组件",body:[{name:"button 按钮",icon:"/img/list/button.svg",route:"/components/button",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"radio 单选框",icon:"/img/list/radio.svg",route:"/components/radio",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"checkbox 复选框",icon:"/img/list/checkbox.svg",route:"/components/checkbox",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"switch 开关",icon:"/img/list/switch.svg",route:"/components/switch",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"tags 标签",icon:"/img/list/tags.svg",route:"/components/tags",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"toast 弹出提示",icon:"/img/list/toast.svg",route:"/components/toast",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"progress 进度条",icon:"/img/list/progress.svg",route:"/components/progress",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"slider 滑动选择器",icon:"/img/list/slider.svg",route:"/components/slider",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}}]},{head:"high组件",body:[{name:"noticebar 滚动提示",icon:"/img/list/noticebar.svg",route:"/components/noticebar",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"search 搜索框",icon:"/img/list/search.svg",route:"/components/search",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"subsection 分段器",icon:"/img/list/subsection.svg",route:"/components/subsection",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"cell 单元格列表",icon:"/img/list/cell.svg",route:"/components/cell",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"grid 宫格布局",icon:"/img/list/grid.svg",route:"/components/grid",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}}]},{head:"super组件",body:[{name:"popup 弹窗对话框",icon:"/img/list/popup.svg",route:"/components/popup",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"swiper 轮播图",icon:"/img/list/swiper.svg",route:"/components/swiper",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}},{name:"steps 步骤条",icon:"/img/list/steps.svg",route:"/components/steps",describe:"",rightText:"",rightIcon:{type:0,count:1e3,src:""}}]}]),o=n,r=i("ff17"),a={name:"home",components:{"k-cell":r["a"]},data:function(){return{list:o}},methods:{itemClick:function(t){this.$router.replace({path:t.route})}}},l=a,h=(i("fa1f"),i("2877")),u=Object(h["a"])(l,s,c,!1,null,"3538a7f8",null);e["default"]=u.exports},"8fbb":function(t,e,i){"use strict";i("c8dd")},af2b:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"switch",staticClass:"k-switch",style:t.switchStyle,on:{touchstart:function(t){t.stopPropagation()},click:function(e){e.stopPropagation(),t.active=t.disable?t.active:!t.active}}},[i("div",{ref:"circle",staticClass:"k-switch-circle",style:[t.circleStyle,{width:t.height-.8+"px",height:t.height-.8+"px"}]})])},c=[],n=(i("a9e3"),{name:"k-switch",data:function(){return{active:!1,left:0}},updated:function(){this.adjustStyle()},methods:{adjustStyle:function(){this.active?this.left=this.width-this.height:this.left=0}},watch:{active:function(t){this.$emit("change",t),this.adjustStyle()},status:function(t){this.active=t}},computed:{circleStyle:function(){var t={};return t.marginLeft=this.left+"px",t},switchStyle:function(){var t={};t.width=this.width+"px",t.height=this.height+"px",t.opacity=this.disable?.5:1;var e={primary:"#007aff",success:"#4cd964",warning:"#f0ad4e",error:"#dd524d"};return t.backgroundColor=this.active?e[this.bgColor]:"white",e[this.bgColor]||(t.backgroundColor=this.active?this.bgColor:"white"),t}},mounted:function(){this.active=this.status,this.adjustStyle()},props:{bgColor:{type:String,default:"primary"},disable:{type:Boolean,default:!1},status:{type:Boolean,default:!1},width:{type:Number,default:40},height:{type:Number,default:20}}}),o=n,r=(i("8fbb"),i("2877")),a=Object(r["a"])(o,s,c,!1,null,"23309a92",null);e["a"]=a.exports},c8a1:function(t,e,i){},c8dd:function(t,e,i){},fa1f:function(t,e,i){"use strict";i("6d9e")},ff17:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"k-cell"},t._l(t.list,(function(e,s){return i("div",{key:s,staticClass:"k-cell-piece"},[i("div",{staticClass:"k-cell-head"},[i("span",{staticClass:"k-cell-head-text"},[t._v(t._s(e.head))])]),i("div",{staticClass:"k-cell-body"},t._l(e.body,(function(e,c){return i("div",{key:c,staticClass:"k-cell-item",style:{"border-top-style":0==c?"solid":"none",transitionDuration:t.transitionTime+"ms",backgroundColor:s==t.headIndex&&c==t.touchIndex?"rgb(242,242,242)":"white",height:""!=e.describe?t.height+20+"px":t.height+"px"},on:{touchstart:function(e){return e.stopPropagation(),t.touchStart(s,c)},touchend:function(e){return e.stopPropagation(),t.touchEnd.apply(null,arguments)},click:function(i){return i.stopPropagation(),t.itemClick(e)}}},[i("div",{staticClass:"k-cell-left",style:{opacity:e.disable||e.loading?.5:1}},[i("img",{staticClass:"k-cell-icon1",attrs:{src:e.icon}}),i("div",{staticClass:"k-cell-left-text-box"},[i("div",{staticClass:"k-cell-name"},[t._v(t._s(e.name))]),""!=e.describe?i("div",{staticClass:"k-cell-describe"},[t._v(t._s(e.describe))]):t._e()])]),i("div",{staticClass:"k-cell-right",style:{opacity:e.disable||e.loading?.5:1}},[i("div",{staticClass:"k-cell-right-text"},[t._v(t._s(e.rightText))]),"arrow"!=e.rightIcon.type||e.loading?t._e():i("img",{staticClass:"k-cell-arrow",attrs:{src:"/img/cell/arrow.svg"}}),"switch"!=e.rightIcon.type||e.loading?t._e():i("div",{staticClass:"k-cell-switch"},[i("k-switch",{attrs:{width:40,height:20,bgColor:"primary",disable:e.disable},on:{change:t.switchChange}})],1),"badge"!=e.rightIcon.type||e.loading?t._e():i("div",{staticClass:"k-cell-badge"},[t._v(t._s(e.rightIcon.count>99?"99+":e.rightIcon.count))]),"custom"!=e.rightIcon.type||e.loading?t._e():i("img",{staticClass:"k-cell-icon2",attrs:{src:e.rightIcon.src}}),e.loading?i("img",{staticClass:"k-cell-loading",attrs:{src:"/img/cell/loading.svg"}}):t._e()])])})),0)])})),0)},c=[],n=(i("a9e3"),i("af2b")),o={name:"k-cell",components:{"k-switch":n["a"]},data:function(){return{transitionTime:0,touchIndex:-1,headIndex:-1}},methods:{itemClick:function(t){t.disable||this.$emit("itemClick",t)},touchStart:function(t,e){this.list[t].body[e].disable||(this.touchIndex=e,this.headIndex=t,this.transitionTime=0)},touchEnd:function(){this.touchIndex=-1,this.headIndex=-1,this.transitionTime=300},switchChange:function(t){this.$emit("switchStatus",t)}},props:{list:{type:Array,required:!0},height:{type:Number,default:50}}},r=o,a=(i("5592"),i("2877")),l=Object(a["a"])(r,s,c,!1,null,"d10fd0b2",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-04305c4f.8dd4bcfb.js.map