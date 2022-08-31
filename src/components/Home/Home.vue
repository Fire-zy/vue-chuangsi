<template>
  <div class="container">
    <div class="left">
      <div class="leftImg">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
/* 登录页空 */
.container {
  position: relative;
  width: 1440px;
  height: 1024px;
  background: #ffffff;

  /* font-family: "Roboto";
  font-style: normal; */
  color: #000000;
}
.left {
  position: absolute;
  width: 720px;
  height: 1024px;
  left: 0px;
  top: 0px;
  background: rgba(154, 154, 235, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 127px; */
}

a {
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #4d4ddb;
}

/deep/ .el-input__inner {
  width: 446px;
  height: 55px;
  border: 1px solid #4d4ddb;
  // font-family: "Roboto";
  // font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  padding: 0 14px;
  display: flex;
  align-items: center;
}
/deep/ .el-input__suffix-inner,
.el-input__prefix-inner {
  pointer-events: none;
}
/deep/ span.el-input__suffix {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

/* 图标大小 */
.eye-slashed {
  width: 30px;
  height: 30px;
  margin-right: 19px;
  color: #000000;
  margin-left: 394px;
  line-height: 55px;
}
.form_item {
  margin-bottom: 2px;
}
.lable_name {
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
  color: #000000;
}
</style>
