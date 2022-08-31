<template>
  <div class="content_box">
    <div class="icon">
      <div class="upicon">
        <slot></slot>
      </div>
      <Icon
        icon="akar-icons:circle-fill"
        style="font-size: 52px; color: #ffffff"
      />
    </div>
    <div class="title">{{ all.title }}</div>
    <div class="content">{{ all.content }}</div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "content_box",
  props: {
    all: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {
    Icon,
  },
};
</script>
<style scoped>
.content_box {
  width: 305px;
  height: 193px;
  background: linear-gradient(
    111.31deg,
    rgba(23, 23, 92, 0.7) -16.43%,
    rgba(0, 0, 0, 0.49) 123.22%
  );
  border-radius: 7px;
}
.icon {
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 12px;
}
.upicon {
  position: absolute;
  float: left;
  z-index: 999;
  /* width: 100%s */
}
.title {
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  margin: 12px 0 7px 31px;
}

.content {
  width: 211px;
  height: 28px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-left: 31px;
}
</style>