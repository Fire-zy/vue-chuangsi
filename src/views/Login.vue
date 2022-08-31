<template>
  <root-home>
    <template v-slot:left>
      <div class="frame2">
        <img
          src="../assets/undraw_login_re_4vu2 1.png"
          width="100%"
          height="100%"
        />
      </div>
    </template>
    <template v-slot:right>
      <!-- <div class="right"> -->
      <div class="title">欢迎登录创思设备管理系统</div>

      <!-- 输入表单 -->
      <div class="formbox">
        <el-form :model="form" ref="form">
          <div class="form_item">
            <div class="lable_name">邮箱</div>
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
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>

          <!-- 密码 -->
          <div class="form_item">
            <div class="lable_name">密码</div>
            <el-form-item
              prop="password"
              :rules="[
                { required: true, message: '请输入密码', trigger: 'blur' },
              ]"
            >
              <el-input v-model="dynamicValidateForm.password">
                <i slot="suffix" class="suffix">
                  <Icon icon="akar-icons:eye-slashed" class="eye-slashed" />
                </i>
              </el-input>
            </el-form-item>
          </div>
        </el-form>

        <!-- 检验 -->
        <div class="remember">
          <div class="checks">
            <input type="checkbox" />
            <span>记住我</span>
          </div>

          <router-link to="/ResetPassword">
            <span>忘记密码</span>
          </router-link>
        </div>

        <!-- 登录按钮 -->
        <div class="test">
          <button class="loginBtn" @click="login">登录</button>
        </div>
        <div class="registerBtn">
          <span>你还没有账号? </span>
          <router-link to="/register">注册账号?</router-link>
        </div>
      </div>
    </template>
  </root-home>
</template>

<script>
import { debounce } from "../utils/debounce.js";
import Home from "../components/Home/Home";
import { Icon } from "@iconify/vue2";
export default {
  name: "Login",
  components: {
    "root-home": Home,
    Icon,
  },
  data() {
    return {
      checked: "",
      form: {
        email: "",
        password: "",
      },
      dynamicValidateForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // 登录+防抖
    login: debounce(function () {
      // 表单验证
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$axios.post("/user/login", this.form).then((res) => {
            // console.log(res);
            if (res.data.code == 200) {
              this.$router.push("/landingpage");
            } else {
              this.$message.error("邮箱或密码错误");
            }
          });
        } else {
          return false;
        }
      });
    }, 1000),

    onInputValueChange(value) {
      this.inputValue = value;
      // console.log(value);
    },
    jumpTo() {
      this.$router.push("/register");
    },
  },
  watch: {
    "form.email": {
      deep: true,
      handler(newVal, oldVal) {
        debounce(() => {
          // console.log("sads");
          this.login;
        }, 3000);
      },
    },

    // 密码加密成*
    "dynamicValidateForm.password": {
      handler: function (val, oldV) {
        //监听登录的密码输入框，将密文显示为*
        this.dynamicValidateForm.password =
          this.dynamicValidateForm.password.replace(/./g, "*");

        if (oldV.length > val.length) {
          //进行删除操作   this.form.password就是定义在data中用来存实际密码的变量

          this.form.password = this.form.password.substring(
            0,
            this.form.password.length - 1
          );
        } else {
          this.form.password += val.replace(/[*]/g, "");
        }
        if (this.dynamicValidateForm.password == "") {
          this.form.password = "";
        }
      },

      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  position: absolute;
  left: 907px;
  top: 224px;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 39px;
  margin-left: auto;
}
.frame2 {
  position: absolute;
  left: 96px;
  top: 301px;
  margin-right: 57px;
}
.formbox {
  position: absolute;
  left: 847px;
  top: 301px;
  display: flex;
  flex-direction: column;
}

.lable_name {
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
  color: #000000;
}
.remember {
  width: 446px;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

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
  width: 27px;
  height: 27px;
  background-image: url("../assets/check.png");
  background-size: contain;
}
.checks {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginBtn {
  width: 446px;
  height: 55px;
  margin-bottom: 68px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;

  background: #1e1e1e;
  border-radius: 8px;
}

.registerBtn {
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
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
.lable_name {
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
  color: #000000;
}
</style>
