<template>
  <div class="inputs">
    <label for="lablename">{{ lablename }}</label>
    <div>
      <!-- <input type="text" :value="inputValue" @keyup="getInputValue" /> -->
      <el-input
        v-model="inputValue"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ]"
      ></el-input>
      <!-- <input type="text" :value="inputValue" @keyup="change" /> -->
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
import { debounce } from "../../utils/debounce.js";
export default {
  name: "PaperInput",

  props: {
    /** input框的value值 */
    value: {
      type: [String, undefined],
      default: undefined,
    },
    lablename: {
      type: [String, undefined],
      default: undefined,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    // getInputValue(e) {
    //   const event = e || window.event;
    //   const target = event.srcElement || event.taget;
    //   this.inputValue = target.value;
    //   this.$emit("change", this.inputValue);
    // },
    getInputValue(e) {
      debounce(() => {
        // console.log(e.target.value);
        this.inputValue = e.target.value;
        this.$emit("change", this.inputValue);
      }, 1000);
    },
  },
  watch: {
    inputValue: {
      deep: true,
      handler(newVal, oldVal) {
        debounce(() => {
          console.log(newVal);
        }, 1000);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.inputs {
  display: flex;
  width: 446px;
  height: 103px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
}
label {
  /* width: 48px; */
  height: 28px;
  /* font-family: "Roboto";
  font-style: normal; */
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
}

input {
  outline: none;
  width: 446px;
  height: 55px;
  border: 1px solid #4d4ddb;
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 14px;

  /* font-family: "Roboto";
  font-style: normal; */
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
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
}
</style>

