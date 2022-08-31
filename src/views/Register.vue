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
      <div class="title">欢迎注册创思设备管理系统</div>
      <div class="formbox">
        <!-- 姓名 -->
        <el-form :model="form" ref="form">
          <div class="form_item">
            <div class="lable_name">姓名</div>
            <el-form-item
              prop="name"
              :rules="[
                { required: true, message: '请输入姓名', trigger: 'blur' },
              ]"
            >
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div>

          <!-- 邮箱 -->
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
                  <Icon icon="akar-icons:eye-slashed" class="eye-slashed"
                /></i>
              </el-input>
            </el-form-item>
          </div>
        </el-form>

        <span class="agreeText">密码强度:很强</span>

        <!-- 检验 -->
        <div class="agree">
          <input type="checkbox" />
          <span class="agreeText">我已阅读用户协议并同意</span>
        </div>

        <!-- 注册按钮 -->
        <button class="registerBtn" @click="register">注册</button>

        <div class="englishTips">
          <span
            >您已有平台账号?
            <router-link to="/login">用户登录</router-link>
          </span>
          <router-link to="/ResetPassword">忘记密码</router-link>
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
  name: "Register",
  components: {
    "root-home": Home,
    Icon,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      dynamicValidateForm: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onInputValueChange(value) {
      this.inputValue = value;
    },
    register: debounce(function () {
      // 表单验证
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$axios.post("/user/register", this.form).then((res) => {
            // console.log(res);
            if (res.data.data.code == 200) {
              this.$message({
                message: "注册成功",
                type: "success",
              });
              this.$router.push("/login");
            } else {
              this.$message.error("注册失败");
            }
          });
        } else {
          return false;
        }
      });
    }, 1000),
  },
  watch: {
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
        console.log(this.form.password);
        if (this.dynamicValidateForm.password == "") {
          this.form.password = "";
        }
      },

      deep: true,
    },
  },
};
</script>
<style scoped>
.title {
  position: absolute;
  width: 384px;
  height: 38px;
  left: 878px;
  top: 219px;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
}

.formbox {
  position: absolute;
  left: 847px;
  top: 301px;
  display: flex;
  flex-direction: column;
}

.agree {
  margin-top: 20px;
  margin-bottom: 43px;
  display: flex;
  justify-content: row;
  align-items: center;
}

/* 复选框 */
input[type="checkbox"] {
  width: 27px;
  height: 27px;
  margin-right: 11px;
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
  background-size: contain;
}
.lable_name {
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
  color: #000000;
}
.agreeText {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

.registerBtn {
  width: 446px;
  height: 55px;
  background: #000000;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 45px;
}

.englishTips {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 20px;
}

.frame2 {
  position: absolute;
  left: 96px;
  top: 301px;
  margin-right: 87px;
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
</style>