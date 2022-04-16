<template>
  <div class="k-radio">
    <div @click="Click" class="k-radio-left" :style="bodyStyle">
      <img class="k-radio-img" v-if="selfStatus" src="/img/radio/check.svg" />
    </div>
    <label @click="Click" class="k-radio-right">
      <slot>单选框</slot>
    </label>
  </div>
</template>
<script>
export default {
  name: "k-radio",
  data() {
    return {
      //当前的选中状态
      selfStatus: false
    };
  },
  methods: {
    //单选框被点击事件
    Click() {
      if (this.disable) return;
      //发射状态改变事件
      if (!this.selfStatus) {
        this.$emit("change",this.value);
      }
      this.selfStatus = true;
    }
  },
  mounted() {
    //初始化数据
    this.selfStatus = this.status;
  },
  watch: {
    //观察父组件传值更新子组件
    // status(value) {
    //   this.selfStatus = value;
    // }
  },
  computed: {
    //radio的最外层样式
    bodyStyle() {
      const style = {};
      //背景色计算
      const color = {
        primary: "#007aff",
        success: "#4cd964",
        warning: "#f0ad4e",
        error: "#dd524d",
        info: "rgb(120,120,120)"
      };
      style.backgroundColor = color[this.mainStyle];
      if (!color[this.mainStyle]) style.backgroundColor = this.mainStyle;
      if (!this.selfStatus) {
        style.backgroundColor = "white";
        style.borderStyle = "solid";
        style.borderColor = "rgb(200,200,200)";
        style.borderWidth = "1px";
      } else {
        style.borderStyle = "none";
      }

      //圆角值计算
      style.borderRadius = this.shape == "square" ? "5px" : "100px";

      //是否被禁用
      style.opacity = this.disable ? 0.5 : 1;

      //宽高
      style.width = this.width + "px";
      style.height = this.height + "px";

      return style;
    }
  },
  props: {
    //初始选择状态
    status: {
      type: Boolean,
      default: false
    },
    //形状,默认值circle，可选值circle圆形，square方形
    shape: {
      type: String,
      default: "circle"
    },
    //主题样式，可选值primary，error，warning，success，info，其他颜色传入颜色值即
    mainStyle: {
      type: String,
      default: "primary"
    },
    //是否禁用
    disable: {
      type: Boolean,
      default: false
    },
    //单选框高度，单位px
    height: {
      type: Number,
      default: 20
    },
    //单选框宽度，单位px
    width: {
      type: Number,
      default: 20
    },
    //单选框分组，组名
    group:{
      type:String,
      default:'default'
    },
    //单选框绑定的值
    value:{
      type:String || Number || Object || Array || Boolean,
      default:true
    }
  }
};
</script>
<style scoped>
@import "./radio.css";
</style>
