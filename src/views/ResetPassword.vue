<template>
  <root-home>
    <template v-slot:left>
      <div class="frame2">
        <img
          src="../assets/undraw_forgot_password_re_hxwm 1.png"
          width="100%"
          height="100%"
        />
      </div>
    </template>
    <template v-slot:right>
      <div class="title">重置密码</div>
      <div class="formbox">
        <div class="form_item">
          <div class="lable_name">邮箱</div>
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
            <el-form-item
              prop="email"
              :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <!-- 发送按钮 -->
        <button class="resetBtn" @click="toReset">发送</button>

        <div class="tips">
          <span
            >您已有账号?
            <router-link to="/login">用户登录</router-link>
          </span>
          <span
            >建立新账号?
            <router-link to="/register">用户注册</router-link>
          </span>
        </div>
      </div>
    </template>
  </root-home>
</template>

<script>
import { debounce } from "../utils/debounce.js";
import Home from "../components/Home/Home";
export default {
  name: "ResetPassword",
  components: {
    "root-home": Home,
  },
  data() {
    return {
      dynamicValidateForm: {
        email: "",
      },
    };
  },
  methods: {
    onInputValueChange(value) {
      this.inputValue = value;
    },
    toReset: debounce(function () {
      // 表单验证
      this.$refs.dynamicValidateForm.validate((valid) => {
        if (valid) {
          this.$axios
            .post("/user/restpwd", this.dynamicValidateForm)
            .then((res) => {
              // console.log(res);
              if (res.data.code == 200) {
                this.$router.push("/reset");
              } else {
                this.$message.error(res.data.msg);
              }
            });
        } else {
          return false;
        }
      });
    }, 1000),
  },
};
</script>
<style scoped>
/* 标题 */
.title {
  position: absolute;
  height: 38px;
  left: 1006px;
  top: 297px;

  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
}

.formbox {
  position: absolute;
  width: 446px;
  height: 103px;
  left: 847px;
  top: 378px;
}

/* 图片位置 */
.frame2 {
  position: absolute;
  margin-right: 0;
  left: 47px;
  top: 271px;
}

/* 重置按钮 */
.resetBtn {
  width: 446px;
  height: 55px;

  background: #000000;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 45px;
  margin-top: 24px;
}

.tips {
  display: flex;

  justify-content: space-between;
  font-weight: 400;
  font-size: 20px;
}
</style>