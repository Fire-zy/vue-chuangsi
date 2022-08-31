<template>
  <div class="landingpage">
    <!-- 导航栏 -->
    <div class="NavBar">
      <img src="../assets/page/Navbar.png" width="100%" height="100%" />
      <div class="navbar_inner">
        <!-- 顶部 -->
        <div
          class="navbar_inner_top"
          id="boxFixed"
          :class="{ is_fixed: isFixed }"
        >
          <div class="logoImg">
            <div class="logoImg_img">
              <img
                src="../assets/page/flat-color-icons_search.png"
                width="100%"
                height="100%"
              />
            </div>
            <div class="logoImg_title">创思找工作</div>
          </div>
          <div class="topitems">
            <span>首页</span>
            <span>岗位展示</span>
            <span>工作分类</span>
            <span>关于创思</span>
          </div>
          <span class="login">登录</span>
          <button class="publishbtn">发布岗位</button>
        </div>

        <!-- 中间内容 -->
        <div class="nav_center">
          <div class="need">269+ 岗位需求</div>
          <div class="blessing">预祝你在创思信息找到心仪工作</div>
          <div class="introduce">
            创思信息以“工匠精神”推动产业互联网升级，推动政府事务单位业务处理自动化，助力工业4.0转型升级！
          </div>
          <div>
            <button class="signupbtn">查看岗位</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="popular_search">
      <div class="popular_search_inner">
        <div class="search_inner_top">
          <div class="form_search">输入岗位关键字</div>
          <div class="form_location">位置</div>
          <div class="form_catagory">
            分类
            <img src="../assets/chevron-down.svg" />
          </div>
          <div class="select_experience">
            选择岗位信息
            <img src="../assets/chevron-down.svg" />
          </div>
          <div class="find_job">找工作</div>
        </div>
        <div class="search_inner_bottom">
          <div class="recent">最近热搜词：</div>
          <div class="search_marketing">Java工程师</div>
          <div class="search_telemarketing">web后端工程师</div>
          <div class="search_ui">UI/UX</div>
          <div class="search_progammber">行政管理</div>
        </div>
      </div>
    </div>

    <!-- 创思竞争优势 -->
    <!-- 应用开发 -->
    <div class="popular-category">
      <img
        src="../assets/page/Popular Category.png"
        width="100%"
        height="100%"
      />
      <landing-page class="category_left_top" :all="all">
        <template>
          <Icon
            icon="carbon:application-web"
            style="font-size: 34px; color: #2a2ad1"
          />
        </template>
      </landing-page>
      <!-- 智慧系统 -->
      <landing-page class="category_left_bottom" :all="all2">
        <template>
          <Icon icon="bi:code-slash" style="font-size: 34px; color: #2a2ad1" />
        </template>
      </landing-page>
      <!-- 核心平台 -->
      <landing-page class="category_center_top" :all="all3">
        <template>
          <Icon
            icon="nimbus:marketing"
            style="font-size: 34px; color: #2a2ad1"
          />
        </template>
      </landing-page>
      <!-- IT运维 -->
      <landing-page class="category_center_bottom" :all="all4">
        <template>
          <Icon
            icon="arcticons:tagwriter"
            style="font-size: 34px; color: #2a2ad1"
          />
        </template>
      </landing-page>

      <!-- 竞争优势 -->
      <div class="category_right">
        <div class="category_right_top">创思竞争优势</div>
        <div class="category_right_bottom">
          创思信息科技发展有限公司成立于2000年，是国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商，主要致力于为政企客户、社会团体和个人提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案。
          创思信息注重跟踪最新技术发展趋势，在大数据、云计算、移动互联网、人工智能、云移动设备等领域都已创建了多个具有自主知识产权且处于国内领先地位的核心技术平台。
        </div>
      </div>
    </div>

    <!-- 创思团队建设 -->
    <div class="companies">
      <div class="companies_inner">
        <div class="companies_inner_left">
          <div class="inner_left_title">创思团队建设</div>
          <div class="inner_left_content">
            获得工信部计算机系统集成壹级资质，通过ISO020000
            IT服务管理体系认证，通过软件能力成熟度模型CMMI
            5级认证，通过ISO27001信息安全管理系统认证，通过ISO14001国际环境管理系统认证，通过ITSS信息技术服务运行维护标准认证，获得专利技术1200余项，自有知识产权框架平台8个，获得软件著作权2500多个。创思信息现有员工530余人，其中：博士生100余人，研究生200余人，专业技术人才230余人。公司总部位于湖南长沙，下设杭州分公司、北京分公司、广州分公司、海口分公司、西安分公司、湘潭分公司及办事处。
          </div>
        </div>
        <div class="companies_inner_right">
          <top-companies class="inner_right1" :companies="companies1">
            <template>
              <img
                src="../assets/page/SmallLogo/Naver_Line_Webtoon_logo 1.png"
                width="100%"
                height="100%"
              />
            </template>
          </top-companies>
          <top-companies class="inner_right2" :companies="companies2">
            <template>
              <img
                src="../assets/page/SmallLogo/Dribbble_logo_perple 1.png"
                width="100%"
                height="100%"
              />
            </template>
          </top-companies>
          <top-companies class="inner_right3" :companies="companies3">
            <template>
              <img
                src="../assets/page/SmallLogo/shopee-logo-40482 1.png"
                width="100%"
                height="100%"
              />
            </template>
          </top-companies>
          <top-companies class="inner_right4" :companies="companies4">
            <template>
              <img
                src="../assets/page/SmallLogo/tokopedia-logo-40654CCDD6-seeklogo 1.png"
                width="100%"
                height="100%"
              />
            </template>
          </top-companies>
        </div>
      </div>
    </div>

    <!-- Looking -->
    <div class="looking">
      <img src="../assets/page/Looking.png" width="100%" height="100%" />
      <div class="looking_inner">
        <div class="looking_left">
          <div class="looking_title">你是不是想在创思找工作?</div>
          <div class="looking_content">
            我们在线上为您安排了200多个工作岗位，欢迎你咨询！您可查询本网，可快速了解现有岗位情况。
          </div>
          <div><button class="looking_btn">岗位展示</button></div>
        </div>
        <div class="looking_right">
          <div class="looking_title">你是不是想在平台发布工作?</div>
          <div class="looking_content">
            人力资源部、部门经理、项目经理，都可以在此平台发布工作了哦，欢迎试用！
          </div>
          <div><button class="looking_btn">发布工作</button></div>
        </div>
      </div>
    </div>

    <!-- 用户评价 -->
    <div class="testimoninal">
      <div class="testimoninal_inner">
        <div class="testimoninal_inner_left">
          <img
            src="../assets/page/Image Testitomi.png"
            width="100%"
            height="100%"
          />
        </div>
        <div class="testimoninal_inner_right">
          <div class="testimoninal_title">用户评价</div>
          <div class="testimoninal_content">
            “UI小姐姐在此提示现在正在制作这个页面的各位前端朋友，希望你能顺利通过测试，取得较好的成绩，不要忘记哦，这个页面需要做自适应，请按f12进入开发者模式，适配不同的屏幕大小。这个千万不要忘记哦。另外按钮动作，浮动动画也可以有哦。相信你，加油！”
          </div>
        </div>
      </div>
    </div>

    <footer>
      <img src="../assets/page/Footer.png" width="100%" height="100%" />
      <div class="contact">
        <div class="contact_logo">
          <div class="contact_logo_img">
            <img
              src="../assets/page/flat-color-icons_search.png"
              width="100%"
              height="100%"
            />
          </div>

          <div>创思找工作</div>
        </div>
        <div>祝你的工作能被项目组认同</div>
        <div class="contact_email">chances@gmail.com</div>
        <div class="contact_phone">400-669-0559</div>
        <div>欢迎来电咨询</div>
      </div>
      <!-- 站内导航 -->
      <div class="footer_inner">
        <div class="footer_nav">
          <div class="footer_nav_title">站内导航</div>
          <div class="footer_nav_content">
            <div>关于创思</div>
            <div>常见问题</div>
            <div>岗位展示</div>
            <div>薪资说明</div>
          </div>
        </div>
        <!-- 工作分类 -->
        <div class="footer_atagori">
          <div class="footer_atagori_title">工作分类</div>
          <div class="footer_atagori_content">
            <div>java工程师</div>
            <div>UI/UX工程师</div>
            <div>Web工程师</div>
            <div>行政管理</div>
          </div>
        </div>
      </div>

      <!-- 信息提交 -->
      <div class="footer_submit">
        <div class="footer_submit_title">信息提交</div>
        <div class="footer_submit_box">
          <div>邮箱</div>
          <button class="footer_btn">提交</button>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Companies from "../components/Companies/Companies";
import LandingPage from "../components/LandingPage/LandingPage";
import { Icon } from "@iconify/vue2";
export default {
  components: {
    "landing-page": LandingPage,
    "top-companies": Companies,
    Icon,
  },
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
      all: {
        title: "应用开发",
        content:
          "按照“平台+应用”的研发模式，形成了“智慧政务”、“智慧企业系列解决方案",
      },
      all2: {
        title: "智慧系统",
        content:
          "国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商",
      },
      all3: {
        title: "核心平台",
        content:
          "拥有大数据、云计算、移动互联网、人工智能、云移动设备的核心技术平台",
      },
      all4: {
        title: "IT运维",
        content:
          "提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案",
      },
      companies1: {
        title: "人才培养",
        content:
          "创思信息在湖南、广东设有自己的培训学校，员工可带薪报名参与。公司每年人才培养资金高达1.4个亿。",
      },
      companies2: {
        title: "团建活动",
        content:
          "团建活动有周末团建、下午茶、月团建、大团建、生日派对、一年一个大旅游团建。",
      },
      companies3: {
        title: "职级晋升",
        content:
          "完备的职级晋升机制，公开透明，能力优先，以技术和资质为基础，为员工安排公平公开的职级晋升线路。",
      },
      companies4: {
        title: "项目奖金",
        content:
          "创思80%以上的项目为自研自维护项目，项目开发及运维，提供丰厚的项目奖金，保证团队稳定。",
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  methods: {
    //吸顶
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.landingpage {
  width: 1440px;
  background: #e6e6fa;
}
/* 导航栏 */
.NavBar {
  width: 1440px;
  height: 771.5px;
  /* background: url("../assets/page/Navbar.png") no-repeat; */
}
.navbar_inner {
  position: absolute;
  width: 1302px;
  height: 559px;
  left: 65px;
  top: 23px;
  /* background-color: pink; */
}

.navbar_inner_top {
  display: flex;
  flex-direction: row;
  align-items: center;

  /* width: 1302px; */
  /* width: 100%; */
  height: 95px;
}
.is_fixed {
  /* width: 100%; */
  position: fixed;
  z-index: 99999;
  width: 1302px;
  height: 95px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #cfcccc;
  background-color: #4d4ddb;
  transition: box-shadow 0.5s ease-in 0.3s;
}
.logoImg {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 270px; */
  margin-right: 175px;
}
.logoImg_img {
  width: 95px;
  height: 95px;
}
.logoImg_title {
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-left: 15px;
}
.topitems {
  width: 492px;
  display: flex;
  justify-content: space-between;
  margin-right: 66px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
}
.publishbtn {
  margin-left: 72px;
  width: 177px;
  height: 55px;

  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  background: #000000;
  border-radius: 8px;
}
.login {
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
}
/* nav中间内容 */
.nav_center {
  color: #ffffff;
  position: absolute;
  left: 0;
  top: 218px;
}

.need {
  /* margin-top: 100px; */
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 32px;
}
.blessing {
  font-size: 56px;
  line-height: 66px;
  margin-bottom: 32px;
}
.introduce {
  width: 528px;
  height: 127px;

  font-size: 24px;
  line-height: 28px;
}
.signupbtn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 144px;
  height: 51px;

  background: #000000;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

/* 搜索 */
.popular_search {
  width: 1440px;
  height: 204.5px;
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 20px;
}
.popular_search_inner {
  display: flex;
  flex-direction: column;
  width: 1085px;
  height: 118px;
  margin-top: 32.5px;
}
.search_inner_top {
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
}

.form_search {
  width: 220px;
  height: 55px;
  border: 1px solid #4d4ddb;
  border-radius: 8px;
  margin-right: 27px;
  text-align: center;
  line-height: 55px;
}

.form_location {
  text-align: center;
  line-height: 55px;
  width: 120px;
  height: 55px;
  margin-right: 62px;
  border: 1px solid #4d4ddb;
  border-radius: 8px;
}
.form_catagory {
  text-align: center;
  line-height: 55px;
  width: 154px;
  height: 55px;
  margin-right: 65px;
  border: 1px solid #4d4ddb;
  border-radius: 8px;
}
.select_experience {
  text-align: center;
  line-height: 55px;
  width: 234px;
  height: 55px;
  margin-right: 62px;
  border: 1px solid #4d4ddb;
  border-radius: 8px;
}
.find_job {
  width: 140px;
  height: 55px;
  text-align: center;
  line-height: 55px;
  background: #2a2ad1;
  border-radius: 8px;
  color: #ffffff;
}
.search_inner_bottom {
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 39px;
  font-size: 20px;
  color: #ffffff;
}
.recent {
  margin-right: 38px;
  color: #000000;
}
.search_marketing {
  text-align: center;
  line-height: 39px;
  width: 189px;
  background: #4d4ddb;
  border-radius: 4px;
  margin-right: 8px;
}
.search_telemarketing {
  width: 217px;
  height: 39px;
  background: #4d4ddb;
  border-radius: 4px;
  margin-right: 9px;
}
.search_ui {
  width: 133px;
  height: 39px;

  background: #4d4ddb;
  border-radius: 4px;
  margin-right: 23px;
}
.search_progammber {
  width: 160px;
  height: 39px;

  background: #4d4ddb;
  border-radius: 4px;
}

/* 创思竞争优势 */

.popular-category {
  width: 1440px;
  height: 946px;
}

.category_left_top {
  position: absolute;
  left: 65px;
  top: 1268px;
}
.category_left_bottom {
  position: absolute;
  left: 65px;
  top: 1516px;
}
.category_center_top {
  position: absolute;
  left: 400px;
  top: 1323px;
}
.category_center_bottom {
  position: absolute;
  left: 400px;
  top: 1571px;
}
.category_right {
  color: #ffffff;
}
.category_right_top {
  position: absolute;
  width: 417px;
  height: 70px;
  left: 846px;
  top: 1273px;

  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
}
.category_right_bottom {
  position: absolute;
  width: 575px;
  height: 253px;
  left: 846px;
  top: 1375px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
}

/* 创思团队建设 */
.companies {
  width: 1440px;
  height: 522px;
}
.companies_inner {
  position: absolute;
  width: 1280px;
  height: 496px;
  left: 65px;
  top: 1949px;
  display: flex;
  flex-direction: row;
}

.inner_left_title {
  /* position: absolute;
  left: 65px;
  top: 2033px; */
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 84px 0 32px 0;
}

.inner_left_content {
  width: 575px;
  height: 253px;
  margin-right: 65px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
}
.companies_inner_right {
  /* height: 496px;
  width: 630px; */
  display: flex;
  flex-wrap: wrap;
  /* position: absolute;
  float: left; */
}
.inner_right1 {
  width: 305px;
  height: 193px;
  background: #2a2ad1;
  box-shadow: 0px 10px 30px rgba(42, 42, 209, 0.4);
  border-radius: 7px;
  color: #ffffff;
  /* margin-right: 30px; */
  /* margin: 0 30px 55px 0; */
}
.inner_right2 {
  /* margin-left: 30px; */
  margin: 55px 0 55px 30px;
}
.inner_right3 {
  /* margin-right: 30px; */
  margin: -55px 30px 0 0;
}

/* 找工作岗位展示 */
.looking {
  width: 1440px;
  height: 1122px;
  /* background: url("../assets/page/Looking.png"); */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.looking_inner {
  position: absolute;
  left: 65px;
  top: 2821px;
  width: 1197px;
  height: 244px;
  /* margin: 337px 0 0 65px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
}

.looking_title {
  font-weight: 500;
  font-size: 36px;
  height: 91px;
}
.looking_content {
  font-weight: 400;
  font-size: 20px;
  height: 102px;
}
.looking_left,
.looking_right {
  width: 558px;
  height: 244px;
}

.looking_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 51px;
  background: #000000;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.testimoninal {
  width: 1440px;
  height: 496px;
}
.testimoninal_inner {
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 1358px;
  height: 574px;
  left: 35px;
  top: 3518px;
}
.testimoninal_title {
  font-weight: 500;
  font-size: 48px;
  margin: 80px 0 32px 0;
}

.testimoninal_content {
  font-weight: 400;
  font-size: 20px;
  /* line-height: 23px; */
  width: 650px;
  height: 253px;
}
.testimoninal_inner_left {
  width: 640px;
  height: 574px;
  margin-right: 68px;
}
/* footer */
.footer {
}

.contact {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 63px;
  top: 4303px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
}
.contact_logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 17px;
}
.contact_email {
  margin: 32px 0 24px 0;
}
.contact_phone {
  margin-bottom: 32px;
}

.footer_inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 329px;
  height: 256px;
  left: 623px;
  top: 4343px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
}
.footer_nav_title,
.footer_atagori_title {
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 34px;
}
.footer_nav_content > div,
.footer_atagori_content > div {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 24px;
}
.footer_submit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 345px;
  height: 126px;
  position: absolute;
  left: 1027px;
  top: 4343px;
}
.footer_submit_title {
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
}
.footer_submit_box {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  padding-left: 11px;
  padding: 0 6px 0 11px;
}
.footer_submit_box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  width: 344px;
  height: 55px;

  border: 1px solid #ffffff;
  border-radius: 7px;
}
.footer_btn {
  width: 122px;
  height: 40px;
  background: #4d4ddb;
  border-radius: 4px;

  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
}
.contact_logo_img {
  width: 95px;
  height: 95px;
  margin-right: 15px;
}
</style>