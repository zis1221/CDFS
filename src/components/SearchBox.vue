<template>
  <div id="topNav">
    <div id="loSer" @mouseenter="dropDownLea1">
      <div id="logo"></div>
      <div id="intr">
        <i class="iconfont ds"></i>
        <div id="naIn">
          <div id="intrName">CDUp&FS平台</div>
          <div id="intrIntr">专注于线上试衣&潮流路线的示范平台</div>
        </div>
      </div>
      <div id="searDid" ref="seasRef">
        <div id="div1">
          <div id="textSear" ref="textRef">
            <i class="iconfont ts" ref="tsRef">&nbsp;搜索</i>
          </div>
          <div id="inpDiv" ref="inpRef">
            <div>
              <input
                type="text"
                v-model="inputText"
                placeholder=" / 春季、潮流款式"
                @focus="dynamicFoc"
                @blur="dynamicBlu"
                ref="textinputRef"
              />
            </div>
            <div id="dynLin" ref="inputRef"></div>
          </div>
        </div>
        <div id="dropSearch">
          <div id="hotDiv">
            <div id="hotFlex">
              <p id="hotP">热门搜索</p>
              <i class="iconfont hotIcon"> </i>
            </div>
            <div id="popCloDiv">
              <button
                v-for="(pop, index) in popClo"
                :key="index"
                :class="'pop' + index"
              >
                {{ pop }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="photo"
        ref="phoRef"
        @mouseenter="sbyImageTer"
        @mouseleave="sbyImageLea"
      >
        <div id="divA">
          <a href=""><i class="iconfont ph" ref="phRef"></i></a>
        </div>
        <div id="sbyDiv" ref="sbyRef">搜索图片</div>
      </div>
      <div id="loginEnroll">
        <h2>CDUp&FS</h2>
        <div id="loginDiv">
          <a
            href="/acc/login"
            id="loginA"
            @mouseenter="loginTer"
            @mouseleave="loginLea"
            >登陆 /</a
          >
          <div id="divLogin" ref="loginRef"></div>
        </div>
        <div id="enrollDiv">
          <a
            href="/enr/login"
            id="enrollA"
            @mouseenter="enrollTerA"
            @mouseleave="enrollLeaA"
            >/ 注册</a
          >
          <div id="divEnroll" ref="enrollRef"></div>
        </div>
        <div id="personDiv">
          <a href="">
            <i class="iconfont gr"></i>
          </a>
          <b>个人信息</b>
        </div>
      </div>
    </div>
    <div>
      <Navigation ref="navigation" />
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      inputText: "",
      popClo: [
        "春季新品",
        "国风",
        "户外服装",
        "西服",
        "高街",
        "礼服定制",
        "高定风衣",
        "潮流新品",
      ],
    };
  },
  methods: {
    dynamicFoc(event) {
      this.$refs.inputRef.style.width = "100%";
      this.$refs.seasRef.style.height = "200px";
      this.$refs.seasRef.style.backgroundColor = "#fff";
      this.$refs.textRef.style.backgroundColor = "#eaeaea";
      this.$refs.tsRef.style.color = "#000";
      this.$refs.inpRef.style.backgroundColor = "#eaeaea";
      this.$refs.textinputRef.style.backgroundColor = "#eaeaea";
      this.$refs.textinputRef.style.color = "#000";
      this.$refs.phoRef.style.backgroundColor = "#fff";
      this.$refs.phRef.style.color = "#686767";
    },
    dynamicBlu(event) {
      this.$refs.inputRef.style.width = "0%";
      this.$refs.seasRef.style.height = "55px";
      this.$refs.seasRef.style.backgroundColor = "#656363";
      this.$refs.textRef.style.backgroundColor = "#656363";
      this.$refs.tsRef.style.color = "#fff";
      this.$refs.inpRef.style.backgroundColor = "#656363";
      this.$refs.textinputRef.style.backgroundColor = "#656363";
      this.$refs.textinputRef.style.color = "#fff";
      this.$refs.phoRef.style.backgroundColor = "#656363";
      this.$refs.phRef.style.color = "#fff";
    },
    sbyImageTer(event) {
      this.$refs.sbyRef.style.display = "block";
    },
    sbyImageLea(event) {
      this.$refs.sbyRef.style.display = "none";
    },
    loginTer(event) {
      this.$refs.loginRef.style.width = "38px";
    },
    loginLea(event) {
      this.$refs.loginRef.style.width = "0";
    },
    enrollTerA(event) {
      this.$refs.enrollRef.style.width = "38px";
    },
    enrollLeaA(event) {
      this.$refs.enrollRef.style.width = "0";
    },
    dropDownLea1(event) {
      this.$refs.navigation.dropDownLea();
    },
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/c/font_4575586_tdnafy97p5q.css");
a {
  text-decoration: none;
}
#topNav {
  width: 100%;
  height: 116px;
  background-color: rgb(0, 0, 0);
  #loSer {
    width: 98vw;
    height: 75px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    #loginEnroll {
      margin-top: 4px;
      display: flex;
      color: #fff;
      #personDiv {
        margin-top: 3px;
        margin-left: 15px;
        a {
          color: #686767;
          margin-left: 5px;
          .gr::before {
            content: "\e6bc";
            font-size: 40px;
          }
          i:hover {
            color: #aba9a9;
          }
        }
        b {
          display: block;
          font-size: 13px;
          font-weight: 400;
        }
      }

      h2 {
        height: 38px;
        color: #fff;
        margin-top: 10px;
        margin-left: 14px;
        border-bottom: 1px solid #fff;
      }

      #loginDiv,
      #enrollDiv {
        margin-top: 20px;
        margin-left: 6px;
        a {
          color: #fff;
        }
      }
      #loginDiv {
        margin-left: 12px;
      }
      #divLogin,
      #divEnroll {
        width: 0;
        height: 1px;
        background-color: #ffffff;
        margin-top: 4px;
        transition: all 0.3s ease-in-out;
      }
    }
    #photo {
      height: 55px;
      background-color: #656363;
      margin-top: 8px;
      margin-left: 4px;
      border-radius: 6px;
      transition: all 0.4s ease-in-out;
      #divA {
        margin-top: 8px;
        margin-left: 15px;
        margin-right: 15px;
        a {
          display: block;
          width: 100%;
          height: 100%;
          i {
            width: 100%;
            height: 100%;
            font-size: 37px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgb(255, 255, 255);
          }
          .ph::before {
            content: "\e602";
          }
        }
      }

      #sbyDiv {
        color: #656363;
        background-color: #ffffff;
        border-radius: 3px;
        display: none;
        font-size: 14px;
        text-align: center;
        height: 22px;
        border: 1px solid #616161;
      }
    }
    #logo {
      width: 150px;
      height: 50px;
      margin-top: 2px;
      margin-left: 1px;
      background-image: url(../assets/logo.png);
      background-size: cover;
      border-bottom: 1px solid #ffffff;
    }
    #intr {
      height: 50px;
      margin-top: 7px;
      margin-left: 55px;
      display: flex;
      #naIn {
        margin-left: 40px;
        #intrName {
          color: #f3f0f0;
          font-size: 13px;
        }
        #intrIntr {
          color: #cdcaca;
          font-size: 12px;
          margin-right: 10px;
          margin-top: 3px;
        }
      }

      i {
        display: block;
        width: 50px;
        height: 40px;
        color: #91dfe1;
        transition: color 1s ease-in-out;
        border-left: 2px solid #fff;
        animation: dst 4s linear infinite;
      }
      .ds::before {
        display: block;
        font-size: 39px;
        content: "\e650";
      }
    }
    #searDid {
      width: 720px;
      height: 55px;
      margin-top: 8px;
      background-color: #656363;
      border-radius: 6px;
      display: flex;
      transition: all 0.4s ease-in-out;
      overflow: hidden;
      flex-direction: column;
      position: relative;
      z-index: 3;
    }
    #textSear {
      width: 80px;
      height: 34px;
      margin-top: 2px;
      background-color: #656363;
      position: relative;
      margin-top: 12px;
      margin-left: 5px;
      border-radius: 6px;
      transition: all 0.4s ease-in-out;
      i {
        display: inline-block;
        width: 80px;
        height: 30px;
        font-size: 17px;
        color: #fff;
        // vertical-align: middle;
        padding-top: 2px;
        margin-top: 2px;
        font-weight: 500;
      }
      .ts::before {
        font-size: 23px;
        content: "\e60d";
      }
    }
    #inpDiv {
      width: 580px;
      height: 34px;
      margin-top: 12px;
      border-radius: 6px;
      background-color: #656363;
      transition: all 0.4s ease-in-out;
      margin-left: 3px;
      input {
        width: 99%;
        height: 34px;
        margin: 0px;
        border: 0px;
        outline: none;
        padding: 0px;
        margin-left: 5px;
        background-color: #656363;
        color: #ece8e8;
        font-size: 14px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
      #dynLin {
        width: 0;
        height: 3px;
        border-radius: 5px;
        background-color: #000000;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  #dropSearch {
    width: 100%;
    height: 280px;
    background-color: #ffffff;
    margin: 12px auto;
    border-radius: 4px;
    #hotDiv {
      margin-top: 7px;
      margin-left: 40px;
      #hotFlex {
        display: flex;
        #hotP {
          color: #616161;
          font-size: 16px;
        }
        i {
          margin-left: 10px;
          margin-top: 3px;
          color: #f73838;
        }
        .hotIcon::before {
          content: "\e643";
        }
      }

      #popCloDiv {
        width: 500px;
        button {
          background-color: #cdcaca;
          margin: 0px;
          border: 0px;
          margin-left: 10px;
          margin-top: 8px;
          border-radius: 5px;
          font-size: 16px;
          color: #616161;
          height: 35px;
        }
        .pop0 {
          background-color: #ace0e2;
        }
        .pop1 {
          background-color: #c0cf5f;
        }
        .pop2 {
          background-color: #baf1e1;
        }
      }
    }
  }
}
@keyframes dst {
  0% {
    color: #91dfe1;
  }
  25% {
    color: #e0aa45;
  }
  50% {
    color: #e57fde;
  }
  75% {
    color: rgb(229, 116, 24);
  }
  100% {
    color: #91dfe1;
  }
}
#div1 {
  display: flex;
}
</style>