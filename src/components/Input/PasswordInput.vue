<template>
  <div class="pwdContainer">
    <label for="password">{{ lablename }}</label>
    <div class="pwd">
      <!-- <input type="text" :value="inputValue" @input="getInputValue" /> -->
      <input type="text" :value="inputValue" @keyup="getInputValue" />
      <Icon icon="akar-icons:eye-slashed" class="eye-slashed" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import { debounce } from "../../utils/debounce.js";
export default {
  name: "PasswordInput",
  components: {
    Icon,
  },
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
      password: "", //实际的密码
    };
  },
  methods: {
    getInputValue(e) {
      const event = e || window.event;
      const target = event.srcElement || event.taget;
      this.inputValue = target.value;
      this.$emit("change", this.inputValue);
    },

    // getInputValue(e) {
    //   debounce(() => {
    //     console.log(e.target.value);
    //     this.inputValue = e.target.value;
    //     this.$emit("change", this.inputValue);
    //   }, 1000);
    // },
  },
  watch: {
    inputValue: {
      handler: function (val, oldV) {
        //监听登录的密码输入框，将密文显示为*

        this.inputValue = this.inputValue.replace(/./g, "*");

        if (oldV.length > val.length) {
          //进行删除操作   this.form.password就是定义在data中用来存实际密码的变量

          this.password = this.password.substring(0, this.password.length - 1);
        } else {
          this.password += val.replace(/[*]/g, "");
        }
        // console.log(this.password);
      },

      deep: true,
    },
  },
};
</script>

<style scoped>
.pwdContainer {
  display: flex;
  width: 446px;
  height: 103px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
}
label {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
}
.pwd {
  width: 444px;
  height: 55px;
  border: 1px solid #4d4ddb;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  outline: none;
  border: none;
  width: 374px;
  height: 53px;
  box-sizing: border-box;
  margin-left: 14px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
}

.eye-slashed {
  width: 30px;
  height: 30px;
  margin-right: 19px;
}
</style>

