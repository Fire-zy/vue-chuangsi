<template >
  <div>
    <input type="checkbox" />
  </div>
</template>
<style scoped>
/* 复选框 */
input[type="checkbox"] {
  width: 27px;
  height: 27px;
  margin-right: 12px;
}

input[type="checkbox"]:after {
  position: absolute;
  width: 27px;
  height: 27px;
  content: " ";
  background-color: #d9d9d9;
  visibility: visible;
}

input[type="checkbox"]:checked:after {
  background-color: #2a2ad1;
  background-image: url("../assets/check.png");
}
</style>