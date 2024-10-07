<template>
  <div id="right01">
    <div id="loginregistration">
      <br /><br />
      <div id="title01">欢迎登录CDUp&FS平台</div>
      <br />
      <div id="remo">
        <div id="reg">
          <button href="reg" id="regis" @click="use">用户名登陆</button>
          <div id="imglogenrR"></div>
        </div>
        <b id="bb">/</b>
        <div id="mob">
          <button href="mob" id="mobile" @click="mobi">手机号登录</button>
          <div id="imglogenrM"></div>
        </div>
      </div>
      <br />
      还没帐号？
      <a href="/enr/login" id="enr">前往注册&gt;</a>
      <br /><br />
      <div
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        class="div01"
        id="trigger04"
      >
        <div class="cell">{{ usermobi }}</div>
        <input
          type="text"
          v-model="username"
          placeholder="请输入用户名"
          id="usernameID"
          class="cnum"
        />
        <div :class="segm"></div>
        <br />
      </div>
      <div
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        class="div01"
        id="trigger03"
      >
        <div class="cell">登录密码</div>
        <input
          type="password"
          v-model="password"
          placeholder="请输入密码"
          id="passwordID"
          :class="cnum"
        />
        <div :class="segm"></div>
        <br />
      </div>

      <a href="/are" id="feedback">关于我们 &gt;</a
      ><a href="" id="forgetpass"> 忘记密码？</a><br /><br />
      <button id="regter" @click="enroll">&lt;立即登录&gt;</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  data() {
    return {
      usermobi: "用户名",
      password: "",
      username: "",
      cnum: "cnum",
      segm: "segm",
    };
  },
  methods: {
    handleMouseEnter(event) {
      const dom01 = event.target;
      let $dom01 = $(dom01);
      $dom01.find(".segm").css("background-color", "black");
    },
    handleMouseLeave(event) {
      const dom01 = event.target;
      let $dom01 = $(dom01);
      $dom01.find(".segm").css("background-color", "rgb(128, 128, 128)");
    },
    enroll(event) {
      // 提交注册信息
      const json = {
        userName: this.username,
        password: this.password,
      };
      axios.defaults.withCredentials = true; // 允许携带cookie
      axios.defaults.baseURL = "http://localhost:8081"; // 设置基础URL，根据实际情况修改
      axios
        .post("/username", json)
        .then((response) => {
          console.log(response + "成功");
          const responseJson = response.data;
          if (responseJson.响应 == "1") {
            alert("登录成功");
          } else {
            alert("登录失败");
          }
        })
        .catch((error) => {
          ~console.error(error + "错误");
        });
    },
    mobi(event) {
      this.usermobi = "手机号";
      $("#imglogenrR").css("width", "0px");
      $("#imglogenrM").css("width", "110px");
    },
    use(event) {
      this.usermobi = "用户名";
      $("#imglogenrR").css("width", "110px");
      $("#imglogenrM").css("width", "0px");
    },
  },
  mounted() {
    $("#imglogenrR").css("width", "110px");
    $("#imglogenrM").css("width", "0px");
    $("#loginregistration").css("height", "680px");
  },
};
</script>

<style lang="less" scoped>
#right01 {
  width: 845px;
  height: 880px;
  border-radius: 7px;
  position: relative;
}

#loginregistration {
  width: 390px;
  height: 0px;
  margin: 50px auto;
  background-color: #fff;
  border-left: 3px solid #000;
  padding-left: 40px;
  transition: height 1s ease-out;
  overflow: hidden;
}

#title01 {
  font-size: 32px;
  font-weight: 630;
}

#regis,
#mobile {
  width: 120px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  text-align: left;
  background-color: #fff;
  font-size: 20px;
  font-weight: 450;
  color: #020202;
}

a {
  text-decoration: none;
  color: #5766f0;
}
#enr {
  font-size: 14px;
}
#remo {
  display: flex;
  width: 100%;
  height: 35px;
}
#reg {
  width: 110px;
  height: 30px;
  margin-right: 15px;
}
#mob {
  width: 110px;
  height: 30px;
  margin-left: 15px;
}
#bb {
  font-size: 16px;
  margin-top: 3px;
}
#imglogenrR {
  width: 0px;
  height: 7px;
  background-image: url(../assets/logenr.jpg);
  background-position: center center;
  border-radius: 2px;
  transition: width 0.45s ease-out;
  opacity: 0.55;
}
#imglogenrM {
  width: 110px;
  height: 7px;
  background-image: url(../assets/logenr.jpg);
  background-position: center center;
  border-radius: 2px;
  transition: width 0.45s ease-out;
  opacity: 0.55;
}
.cell {
  color: rgb(75, 75, 75);
  font-size: 17px;
}

.cnum {
  border: none;
  outline: none;
  width: 380px;
  background-color: #fff;
}

.segm {
  width: 380px;
  height: 2px;
  background-color: rgb(128, 128, 128);
  transition: all 0.35s ease-out;
}

.div01 {
  width: 390px;
  height: 77px;
}

#feedback {
  color: rgb(53, 53, 53);
  font-size: 13px;
  opacity: 0.7;
  &:hover {
    color: #000;
  }
}
#forgetpass {
  font-size: 13px;
  float: right;
}

#regter {
  width: 390px;
  height: 50px;
  display: flex;
  justify-content: center;
  border: 0px solid #fff;
  margin: 0px auto;
  background-color: black;
  color: #fff;
  font-size: 18px;
  border-radius: 3px;
  line-height: 47px;
}
</style>