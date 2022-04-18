<template>
  <div id="demo" class="demo">
    <div id="top" class="top">
      <div class="top-left">
        <img @click="clickBack" class="top-back" src="/img/back.svg" />
      </div>
      <div class="top-title">{{$route.meta.title}}</div>
      <div class="top-right"></div>
    </div>
    <div id="showBox" class="show-box">
      <div class="show-title">演示效果</div>
      <!-- checkbox组件展示代码 -->
      <div
        style="height:30px;flex:auto 0 0;display:flex;flex-direction: row;justify-content: space-between; align-items: center;"
        class="show-component"
      >
        <k-checkbox
          style="height:30px;width:auto;"
          @change="changeStatus"
          @change1="changeStatus1"
          :mainStyle="mainStyle"
          :status="status"
          value="苹果"
          :disable="disable"
          :shape="shape"
          :height="height"
          :width="width"
        >苹果</k-checkbox>
        <k-checkbox
          style="height:30px;width:auto;"
          @change="changeStatus"
          @change1="changeStatus1"
          :mainStyle="mainStyle"
          :status="status"
          value="香蕉"
          :disable="disable"
          :shape="shape"
          :height="height"
          :width="width"
        >香蕉</k-checkbox>
        <k-checkbox
          style="height:30px;width:auto;"
          @change="changeStatus"
          @change1="changeStatus1"
          :mainStyle="mainStyle"
          :status="status"
          value="橘子"
          :disable="disable"
          :shape="shape"
          :height="height"
          :width="width"
        >橘子</k-checkbox>
      </div>
      <div
        style="margin-top:20px;flex:auto 0 0;display:flex;justify-content: center; align-items: center;width:100%;opacity:0.8;"
      >
        <span
          style="border-radius:5px;background-color:rgb(200,200,200);padding:6px;font-size:14px;border-style:'dotted';border-color:rgb(220,220,220);"
        >当前选择：{{selected}}</span>
      </div>
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
          <span class="tag-text">形状</span>
        </div>
        <k-subsection class="demo-subsection" :list="['方形','圆形']" @change="changeShape" :index="1"></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">大小</span>
        </div>
        <k-subsection
          class="demo-subsection"
          :list="['20','25','30']"
          @change="changeSize"
          :index="0"
        ></k-subsection>
      </div>
      <div class="params-item">
        <div class="tag-box">
          <div class="tag-line"></div>
          <span class="tag-text">是否禁用</span>
        </div>
        <k-subsection class="demo-subsection" :list="['是','否']" @change="changeDisable" :index="1"></k-subsection>
      </div>
    </div>
  </div>
</template>

<script>
//局部引入组件
import Kcheckbox from "components/common/baseUI/k-checkbox/checkbox.vue";
export default {
  components: {
    "k-checkbox": Kcheckbox
  },
  data() {
    return {
      //主题样式，可选值primary，error，warning，success，info，其他颜色传入颜色值即
      mainStyle: "primary",
      //选择状态
      status: false,
      //形状,默认值circle，可选值circle圆形，square方形
      shape: "circle",
      //是否禁用
      disable: false,
      //高度
      height: 20,
      //宽度
      width: 20,
      //选中复选框
      selected: "",

      //参数配置内容的自适应高度
      paramsHeight: 100
    };
  },
  methods: {
    //返回按键
    clickBack() {
      this.$router.replace("/");
    },
    //状态被改变
    changeStatus(value) {
      this.selected += value;
    },
    changeStatus1(value) {
      this.selected = this.selected.replace(value,"");
    },
    //背景样式改变
    changeStyle(index) {
      const style = ["primary", "error", "warning", "success", "info"];
      this.mainStyle = style[index];
    },
    //改变形状
    changeShape(index) {
      const Shape = ["square", "circle"];
      this.shape = Shape[index];
    },
    //改变大小
    changeSize(index) {
      const size = [
        {
          height: 20,
          width: 20
        },
        {
          height: 25,
          width: 25
        },
        {
          height: 30,
          width: 30
        }
      ];
      this.height = size[index].height;
      this.width = size[index].width;
    },
    //改变禁用状态
    changeDisable(index) {
      const Disable = [true, false];
      this.disable = Disable[index];
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
