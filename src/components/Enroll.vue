<template>
  <div id="right01">
    <div id="loginregistration">
      <br /><br />
      <div id="title01">欢迎加入CDUp&FS平台</div>
      <br />
      <div>
        <b id="regis">注册 </b>
        已有帐号？
        <a href="/acc/login" id="acc">前往登录&gt;</a>
      </div>
      <br />
      <div
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        class="div01"
        id="trigger01"
      >
        <div class="cell">手机号</div>
        <input
          type="text"
          v-model="cellnum"
          placeholder="请输入本人手机号"
          id="cellnumID"
          :class="cnum"
        />
        <div :class="segm"></div>
        <br />
      </div>
      <div
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        class="div01"
        id="trigger02"
      >
        <div class="cell">短信验证码</div>
        <input
          type="text"
          v-model="codenum"
          placeholder="请输入短信验证码"
          id="codenumID"
          :class="cnum"
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
      <div
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        class="div01"
        id="trigger04"
      >
        <div class="cell">用户名</div>
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
      <a href="/are" id="feedback">关于我们 &gt;</a><br /><br />
      <button id="regter" @click="enroll">&lt;立即注册&gt;</button><br />
      <div id="exegesisdiv">
        <b>提交注册，即同意了 </b> <a href="">CDUpFS协议 ^</a><br />
        <p>
          尊敬的用户，为了营造良好的网络环境，请规范您对本网站的使用,我们将为您提供更方便、优质的服务*
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  data() {
    return {
      cellnum: "",
      codenum: "",
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
        cell: this.cellnum,
        codenum: this.codenum,
        password: this.password,
        userName: this.username,
      };
      axios.defaults.withCredentials = true;
      axios.defaults.baseURL = "http://localhost:8081";
      axios
        .post("/enroll", json)
        .then((response) => {
          console.log(response + "成功");
          const responseJson = response.data;
          if (responseJson.响应 === "1") {
            alert("注册成功");
          } else {
            alert("注册失败");
          }
        })
        .catch((error) => {
          console.error(error + "错误");
        });
    },
  },
  mounted() {
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

#regis {
  font-size: 22px;
  font-weight: 450;
}

a {
  text-decoration: none;
  color: #5766f0;
}
#acc {
  font-size: 14px;
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
#exegesisdiv {
  width: 390px;
  height: 100px;
  b {
    font-size: 14px;
    font-weight: 300;
    margin-left: 70px;
  }
  a {
    font-size: 11px;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    color: #959393;
  }
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