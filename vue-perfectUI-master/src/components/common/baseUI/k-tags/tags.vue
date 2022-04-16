<template>
  <div @click.stop="tagClick" class="k-tags" :style="bodyStyle">
    <span><slot></slot></span>
    <img @click.stop="closeClick" class="k-tags-x" v-if="showClose" :src="imgSrc" />
  </div>
</template>

<script>
export default {
  name: "k-tags",
  data() {
    return {};
  },
  computed: {
    //总体的计算样式
    bodyStyle() {
      const style = {};

      //字体大小
      style.fontSize = this.fontSize + 'px'

      //边框样式
      if (this.mode != "dark") style.borderStyle = "solid";
      else {
        style.borderStyle = "none";
      }

      //边框宽度
      style.borderWidth = "1px";

      //颜色对象
      const color = {
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d",
        info: "rgb(120,120,120)"
      };
      //颜色对象2
      const color2 = {
        primary: "rgba(0,122,255,0.1)",
        success: "rgba(76,217,100,0.1)",
        warning: "rgba(240,173,78,0.1)",
        error: "rgba(221,82,77,0.1)",
        info: "rgba(0,0,0,0.1)"
      };
      //边框颜色
      style.borderColor = color[this.mainStyle];
      if (!color[this.mainStyle]) style.borderColor = this.mainStyle;
      //文字颜色
      style.color = color[this.mainStyle];
      if (!color[this.mainStyle]) style.color = this.mainStyle;
      if (this.mode == "dark") style.color = "white";
      //背景颜色
      if (this.mode == "dark") {
        style.backgroundColor = color[this.mainStyle];
        if (!color[this.mainStyle]) style.backgroundColor = this.mainStyle;
      } else if (this.mode == "light") {
        style.backgroundColor = color2[this.mainStyle];
        if (!color2[this.mainStyle]) style.backgroundColor = "white";
      } else {
        style.backgroundColor = "white";
      }

      //边框圆角值计算
      if (this.shape == "square") {
        style["border-top-left-radius"] = "5px";
        style["border-top-right-radius"] = "5px";
        style["border-bottom-left-radius"] = "5px";
        style["border-bottom-right-radius"] = "5px";
      } else if (this.shape == "cirLeft") {
        style["border-top-left-radius"] = "100px";
        style["border-top-right-radius"] = "5px";
        style["border-bottom-left-radius"] = "100px";
        style["border-bottom-right-radius"] = "5px";
      } else if (this.shape == "cirRight") {
        style["border-top-left-radius"] = "5px";
        style["border-top-right-radius"] = "100px";
        style["border-bottom-left-radius"] = "5px";
        style["border-bottom-right-radius"] = "100px";
      } else {
        style["border-top-left-radius"] = "100px";
        style["border-top-right-radius"] = "100px";
        style["border-bottom-left-radius"] = "100px";
        style["border-bottom-right-radius"] = "100px";
      }

      return style;
    },
    //叉号的计算样式
    imgSrc() {
      let src = "";
      const Src = {
        primary: "/img/tags/x_primary.svg",
        success: "/img/tags/x_success.svg",
        warning: "/img/tags/x_warning.svg",
        error: "/img/tags/x_error.svg",
        info: "/img/tags/x_info.svg"
      };
      src = Src[this.mainStyle];
      if (!Src[this.mainStyle] || this.mode == "dark")
        src = "/img/tags/x_white.svg";
      return src;
    }
  },
  methods: {
    //关闭图标被点击事件
    closeClick() {
      //发射关闭图标被点击事件
      this.$emit("close");
    },
    //标签被点击事件
    tagClick() {
      //发射标签被点击事件
      this.$emit("click");
    }
  },
  props: {
    //主题样式，可选值primary，error，warning，success，info，其他颜色传入颜色值即
    mainStyle: {
      type: String,
      default: "primary"
    },
    //模式选择,分为light，dark，plain三种
    mode: {
      type: String,
      default: "light"
    },
    //形状，分为square，circle，cirLeft，cirRight四种
    shape: {
      type: String,
      default: "circle"
    },
    //是否显示关闭图标
    showClose: {
      type: Boolean,
      default: true
    },
    //字体大小，单位px
    fontSize:{
      type:Number,
      default:12
    }
  }
};
</script>

<style scoped>
@import "./tags.css";
</style>

