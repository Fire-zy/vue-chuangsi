<template>
  <root-home>
    <template v-slot:left>
      <div class="frame2">
        <img
          src="../assets/undraw_profile_data_re_v81r 1.png"
          width="100%"
          height="100%"
        />
      </div>
    </template>
    <template v-slot:right>
      <!-- <div class="right"> -->
      <div class="title">用户资料完善</div>
      <!-- 头像 -->
      <div class="photo">
        <img src="../assets/Photo Profile.png" width="100%" height="100%" />
      </div>
      <!-- 输入表单 -->
      <div class="formbox">
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
          <div class="form_item">
            <div class="lable_name">姓名</div>
            <el-form-item
              prop="name"
              :rules="[
                { required: true, message: '请输入姓名', trigger: 'blur' },
              ]"
            >
              <el-input v-model="dynamicValidateForm.name"></el-input>
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
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
          </div>
          <!-- 生日 -->

          <div class="form_item">
            <div class="lable_name">生日</div>
            <el-form-item
              prop="birth"
              :rules="[
                { required: true, message: '请输入生日', trigger: 'blur' },
              ]"
            >
              <el-input v-model="dynamicValidateForm.birth"></el-input>
            </el-form-item>
          </div>
          <!-- 手机号码 -->
          <div class="numberBox">
            <label for="lablename">手机号码</label>
            <div class="number">
              <div class="japan">
                <div class="japan_box">
                  <img
                    src="../assets/emojione_flag-for-japan.png"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
              <input type="text" />
            </div>
          </div>

          <!-- 性别 -->
          <div class="numberBox">
            <label for="gender">性别</label>
            <el-select
              :popper-append-to-body="false"
              v-model="dynamicValidateForm.gender"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 提交按钮 -->
          <button class="submit" @click="submit">提交</button>
        </el-form>
      </div>
    </template>
  </root-home>
</template>

<script>
import { debounce } from "../utils/debounce.js";
import NormalInput from "../components/Input/NormalInput";
import Home from "../components/Home/Home";
export default {
  name: "Login",
  components: {
    "normal-input": NormalInput,
    "root-home": Home,
  },
  data() {
    return {
      dynamicValidateForm: {
        name: "",
        email: "",
        birth: "",
        number: "",
        gender: "",
      },

      options: [
        {
          value: "女",
          label: "女",
        },
        {
          value: "男",
          label: "男",
        },
      ],
    };
  },
  methods: {
    submit: debounce(function () {
      // 表单验证
      this.$refs.dynamicValidateForm.validate((valid) => {
        if (valid) {
          this.$axios
            .post("/user/userinfo", this.dynamicValidateForm)
            .then((res) => {
              // console.log(res);
              if (res.data.code == 200) {
                this.$message.error(res.data.msg);
                this.$router.push("/login");
              } else {
                this.$message.error("添加失败");
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
};
</script>

<style lang="less" scoped>
/* 标题 */
.title {
  position: absolute;
  left: 975px;
  top: 50px;

  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 36px;
}
/* 左边图片位置 */
.frame2 {
  position: absolute;
  left: 18px;
  top: 226px;
  margin-right: 17px;
}

.formbox {
  position: absolute;
  left: 847px;
  top: 301px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo {
  width: 152px;
  height: 152px;
  position: absolute;
  left: 994px;
  top: 124px;
}

.submit {
  width: 177px;
  height: 55px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-top: 16px;
  color: #ffffff;
  background: #000000;
  border-radius: 8px;
}

/* 手机号 */
.numberBox {
  display: flex;
  width: 446px;
  height: 103px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}

.number {
  outline: none;
  width: 446px;
  height: 55px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #4d4ddb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 手机号码input */
input {
  outline: none;
  border: none;
  width: 380px;
  height: 52px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}
/* 手机号码图标位置 */
.japan {
  width: 58px;
  height: 54px;
  border-right: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
}
.japan_box {
  width: 50px;
  height: 50px;
}

/* 修改select样式 */
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
.lable_name {
  height: 28px;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
  color: #000000;
}
/* el-input聚焦的时候 外层的border会有一个样式 */
/deep/ .el-select .el-input.is-focus .el-input__inner {
  border: 1px solid #4d4ddb;
}
/* 修改的是el-input上下的小图标的颜色 */
/deep/ .el-select .el-input .el-select__caret {
  color: #000000;
  font-size: 24px;
  margin-right: 15px;
}
/* el-input聚焦的时候 外层的border会有一个样式 */
/deep/ .el-select .el-input.is-focus .el-input__inner {
  border: 1px solid #4d4ddb;
}
/deep/ .el-select .el-input__inner:focus {
  border-color: #4d4ddb;
}
/deep/.el-input__inner:hover,
.el-select:hover .el-input__inner {
  border-color: #4d4ddb;
}
</style>
