<template>
  <root-home>
    <template v-slot:left>
      <div class="frame2">
        <img
          src="../assets/undraw_my_password_re_ydq7 1.png"
          width="100%"
          height="100%"
        />
      </div>
    </template>
    <template v-slot:right>
      <div class="title">重置密码</div>
      <div class="formbox">
        <div class="form_item">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <div class="lable_name">密码</div>
            <el-form-item prop="pass">
              <el-input v-model="ruleForm.pass" autocomplete="off">
                <i slot="suffix" class="suffix">
                  <Icon icon="akar-icons:eye-slashed" class="eye-slashed" />
                </i>
              </el-input>
            </el-form-item>
            <div class="lable_name">重复密码</div>
            <el-form-item prop="checkPass">
              <el-input v-model="ruleForm.checkPass" autocomplete="off">
                <i slot="suffix" class="suffix">
                  <Icon icon="akar-icons:eye-slashed" class="eye-slashed" />
                </i>
              </el-input>
            </el-form-item>
          </el-form>
          <div class="pwdstrength">密码强度:很强</div>

          <!-- 重置密码按钮 -->
          <button class="resetBtn" @click="submitForm">重置密码</button>
        </div>

        <div class="tips">
          <span
            >没有账号?
            <router-link to="/register">用户注册</router-link>
          </span>
          <span
            >已有账号
            <router-link to="/login">用户登录</router-link>
          </span>
        </div>
      </div>
    </template>
  </root-home>
</template>

<script>
import { debounce } from "../utils/debounce.js";
import { pwdstrength } from "../utils/pwdstrength.js";
import Home from "../components/Home/Home";
import { Icon } from "@iconify/vue2";
export default {
  name: "ResetPassword",
  components: {
    "root-home": Home,
    Icon,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        pass: "",
        checkPass: "",
      },
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 表单验证
    submitForm: debounce(function () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$axios.post("/user/rest", this.form).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              this.$router.push("/login");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          return false;
        }
      });
    }, 10),
  },
  watch: {
    "ruleForm.pass": {
      handler: function (val, oldV) {
        //监听登录的密码输入框，将密文显示为*
        this.ruleForm.pass = this.ruleForm.pass.replace(/./g, "*");
        if (oldV.length > val.length) {
          this.form.pass = this.form.pass.substring(
            0,
            this.form.pass.length - 1
          );
        } else {
          this.form.pass += val.replace(/[*]/g, "");
        }
        if (this.ruleForm.pass == "") {
          this.form.pass = "";
        }
      },
      deep: true,
    },
    "ruleForm.checkPass": {
      handler: function (val, oldV) {
        //监听登录的密码输入框，将密文显示为*
        this.ruleForm.checkPass = this.ruleForm.checkPass.replace(/./g, "*");
        if (oldV.length > val.length) {
          this.form.checkPass = this.form.checkPass.substring(
            0,
            this.form.checkPass.length - 1
          );
        } else {
          this.form.checkPass += val.replace(/[*]/g, "");
        }
        if (this.ruleForm.checkPass == "") {
          this.form.checkPass = "";
        }
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
/* 标题 */
.title {
  position: absolute;
  left: 1006px;
  top: 225px;

  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
}

.formbox {
  position: absolute;
  width: 446px;
  /* height: 103px;  */
  left: 847px;
  top: 301px;
}

/* 图片位置 */
.frame2 {
  position: absolute;
  left: 139px;
  top: 301px;
  margin-right: 87.54px;
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

.agreeText {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}
.lable_name {
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
  color: #000000;
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