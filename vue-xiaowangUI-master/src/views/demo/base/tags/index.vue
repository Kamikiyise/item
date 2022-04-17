<template>
  <div id="demo" class="demo">
    <k-toast
      @close="toastClose"
      :text="toastText"
      :show="toastShow"
      position="top"
      bgColor="success"
    ></k-toast>
    <div id="top" class="top">
      <div class="top-left">
        <img @click="clickBack" class="top-back" src="/img/back.svg" />
      </div>
      <div class="top-title">{{$route.meta.title}}</div>
      <div class="top-right"></div>
    </div>
    <div id="showBox" class="show-box">
      <div class="show-title">演示效果</div>
      <!-- tags组件展示代码 -->
      <k-tags
        class="show-component"
        :style="[{flex:'auto 0 0'}]"
        :mainStyle="mainStyle"
        :mode="mode"
        :shape="shape"
        :showClose="showClose"
        @close="closeClick"
        @click="tagClick"
      >{{text}}</k-tags>
    </div>
    <div id="head" class="params-head">参数配置</div>
    <div class="params-body" :style="{height:paramsHeight + 'px'}">
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">主题样式</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['primary','error','warning','success','info']"
          @change="changeStyle"
          :index="0"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">模式选择</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['light','dark','plain']"
          @change="changeMode"
          :index="0"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">显示内容</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['蒹葭苍苍','白露为霜','在水一方']"
          @change="changeText"
          :index="0"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">形状</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['直角','圆角','左圆右方','右圆左方']"
          @change="changeShape"
          :index="1"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">关闭图标</span>
        </div>
        <k-subsection class="demo-subsection" :list="['是','否']" @change="changeIcon" :index="0"></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Ktags from "components/common/baseUI/k-tags/tags.vue";
export default {
  components: {
    "k-tags": Ktags
  },
  data() {
    return {
      //主题样式，可选值primary，error，warning，success，info，其他颜色传入颜色值即
      mainStyle: "primary",
      //模式选择,分为light，dark，plain三种
      mode: "light",
      //形状，分为square，circle，cirLeft，cirRight四种
      shape: "circle",
      //是否显示关闭图标
      showClose: true,
      //标签显示的内容
      text: "蒹葭苍苍",
      //提示框显示文字
      toastText: "",
      //控制提示框是否显示
      toastShow: false,

      //参数配置内容的自适应高度
      paramsHeight: 100
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //关闭图标被点击事件
    closeClick() {
      this.toastShow = true;
      this.toastText = "关闭图标被点击";
    },
    //标签被点击事件
    tagClick() {
      this.toastShow = true;
      this.toastText = "标签被点击";
    },
    //提示框关闭事件
    toastClose() {
      this.toastShow = false;
    },
    //背景样式改变
    changeStyle(index) {
      const style = ["primary", "error", "warning", "success", "info"];
      this.mainStyle = style[index];
    },
    //改变模式选择,分为light，dark，plain三种
    changeMode(index) {
      const Mode = ["light", "dark", "plain"];
      this.mode = Mode[index];
    },
    //改变标签内容
    changeText(index) {
      const Text = ["蒹葭苍苍", "白露为霜", "在水一方"];
      this.text = Text[index];
    },
    //改变形状，分为square，circle，cirLeft，cirRight四种
    changeShape(index) {
      const Shape = ["square", "circle", "cirLeft", "cirRight"];
      this.shape = Shape[index];
    },
    //改变是否显示关闭图标
    changeIcon(index) {
      const close = [true, false];
      this.showClose = close[index];
    }
  },
  mounted() {
    //计算参数配置盒子的自适应高度
    this.paramsHeight =
      document.getElementById("demo").clientHeight -
      document.getElementById("top").clientHeight -
      document.getElementById("showBox").clientHeight -
      document.getElementById("head").clientHeight -
      20 -
      12;
  }
};
</script>

<style scoped>
</style>
