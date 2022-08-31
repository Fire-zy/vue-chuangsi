<template>
  <div class="content_box">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="title">{{ companies.title }}</div>
    <div class="content">{{ companies.content }}</div>
  </div>
</template>
<script>
export default {
  name: "content_box",
  props: {
    companies: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.content_box {
  width: 305px;
  height: 193px;
  background: #ffffff;
  border-radius: 7px;
}
.icon {
  width: 55px;
  height: 55px;
  margin: 18px 0 11px 12px;
}

.title {
  /* width: 80px;
  height: 23px; */

  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  margin: 12px 0 7px 31px;
}

.content {
  width: 211px;

  font-size: 14px;
  line-height: 16px;

  margin-left: 31px;
}
</style>