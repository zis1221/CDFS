<template>
  <div id="Div01">
    <div id="navDiv">
      <div id="navScrollLeft" ref="scrollLeftRef"></div>
      <div id="navScrollRight" ref="scrollRightRef"></div>
      <div id="navLR">
        <div id="navDivLeft">
          <div
            v-for="(nav, index) in navStyleLeft"
            :key="index"
            :class="'nav' + index"
            @mouseenter="dropDownTer"
          >
            <a href="" class="textALeft">{{ nav }}</a>
          </div>
        </div>
        <div id="navDivRight">
          <div
            v-for="(nav, index) in navStyleRight"
            :key="index"
            :class="'nav' + (index + 4)"
            @mouseenter="dropDownTer"
          >
            <a href="" class="textARight">{{ nav }}</a>
          </div>
        </div>
      </div>
    </div>
    <div
      id="dropDownnav0"
      class="dropDown"
      ref="dropRefnav0"
      @mouseleave="dropDownLea"
    >
      <div id="classify">
        <div ref="colorfulRef" class="colorful">
          <a href="">
            <div id="spring" @mouseenter="progressBar" class="1">春季 .</div>
          </a>
        </div>
        <div class="colorful">
          <a href="">
            <div id="summer" @mouseenter="progressBar" class="2">夏季 .</div>
          </a>
        </div>
        <div class="colorful">
          <a href="">
            <div id="autumn" @mouseenter="progressBar" class="3">秋季 .</div>
          </a>
        </div>
        <div class="colorful">
          <a href="">
            <div id="winter" @mouseenter="progressBar" class="4">冬季 .</div>
          </a>
        </div>
      </div>
      <div id="progressBelow" ref="progressRef"></div>
    </div>
    <div
      id="dropDownnav1"
      class="dropDown"
      ref="dropRefnav1"
      @mouseleave="dropDownLea"
    >
      <div id="lightLuxury">
        <div id="bothSexes">
          <div id="bgDiv">
            <a href="" v-for="(clothing, index) in boysGirls" :key="index"
              ><div>{{ clothing }}</div></a
            >
          </div>
        </div>
        <div id="zone">
          <div id="brandZone">
            <div id="zoneLogo">专区 .》</div>
            <div id="brand">
              <div id="brandLift">
                <a href="" v-for="(brand, index) in lightLuxury1" :key="index"
                  ><div>{{ brand }}</div></a
                >
              </div>
              <div id="brandRight">
                <a href="" v-for="(brand, index) in lightLuxury2" :key="index"
                  ><div>{{ brand }}</div></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="dropDownnav2"
      class="dropDown"
      ref="dropRefnav2"
      @mouseleave="dropDownLea"
    ></div>
    <div
      id="dropDownnav3"
      class="dropDown"
      ref="dropRefnav3"
      @mouseleave="dropDownLea"
    ></div>
    <div
      id="dropDownnav4"
      class="dropDown"
      ref="dropRefnav4"
      @mouseleave="dropDownLea"
    ></div>
    <div
      id="dropDownnav5"
      class="dropDown"
      ref="dropRefnav5"
      @mouseleave="dropDownLea"
    ></div>
    <div
      id="dropDownnav6"
      class="dropDown"
      ref="dropRefnav6"
      @mouseleave="dropDownLea"
    ></div>
    <div
      id="dropDownnav7"
      class="dropDown"
      ref="dropRefnav7"
      @mouseleave="dropDownLea"
    ></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      lightLuxury1: ["蔻驰", "迈克·科尔斯", "托里·伯奇", "凯特·丝蓓"],
      lightLuxury2: ["珑骧", "芙拉", "Rebecca Minkoff", "三宅一生"],
      luxuryBrands1: ["唐纳卡兰", "Chanel",'Louis Vuitton','Dior'],
      luxuryBrands2: ['Gucci','Prada','Valentino','Armani'],
      navStyleLeft: ["春秋冬夏", "轻奢服饰", "奢款大牌", "潮流趋向"],
      navStyleRight: ["个性服饰", "服装面料", "试衣间", "预购库"],
      boysGirls: ["男装", "女装", "童装"],
    };
  },

  methods: {
    dropDownTer(event) {
      $(".dropDown").css("height", "0px");
      $(".textALeft").css("color", "#000");
      $(".textARight").css("color", "#000");
      const dropDom = event.target;
      const dropKey = dropDom.getAttribute("class");
      const dropId = "dropDown" + dropKey;
      document.getElementById(dropId).style.height = "230px";
    },
    dropDownLea(event) {
      $(".dropDown").css("height", "0px");
      $(".textALeft").css("color", "#696969");
      $(".textARight").css("color", "#696969");
      this.$refs.progressRef.style.width = "0";
    },
    progressBar(event) {
      if (event.target.className == "1") {
        this.$refs.progressRef.style.width = "25%";
      } else if (event.target.className == "2") {
        this.$refs.progressRef.style.width = "50%";
      } else if (event.target.className == "3") {
        this.$refs.progressRef.style.width = "75%";
      } else if (event.target.className == "4") {
        this.$refs.progressRef.style.width = "100%";
      }
    },
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #000;
}
#Div01 {
  display: flex;
  flex-direction: column;
  .dropDown {
    width: 100%;
    height: 0px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    z-index: 1;
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    display: flex;
  }
  #dropDownnav1 {
    display: block;
    #lightLuxury {
      width: 100%;
      height: 100%;
      display: flex;
      #zone {
        width: 69%;
        height: 98%;

        #brandZone {
          width: 100%;
          height: 80%;
          margin-top: 57px;
          display: flex;
          position: relative;
          #brand {
            width: 60%;
            height: 100%;
            position: absolute;
            right: 0px;
            display: flex;
            #brandLift,
            #brandRight {
              width: 40%;
              height: 100%;
              margin-right: 10%;
              text-align: center;
              a {
                div {
                  width: 50%;
                  height: 18%;
                  margin-top: 8px;
                  position: relative;
                  border-right: 1px solid #000;
                  &:hover::before {
                    content: "";
                    position: absolute;
                    top: -8px;
                    left: -16px;
                    width: 180%;
                    height: 120%;

                    background: linear-gradient(
                      150deg,
                      rgba(3, 169, 244, 0.2),
                      rgba(244, 65, 165, 0.2),
                      rgba(255, 235, 59, 0.2),
                      rgba(3, 169, 244, 0.2)
                    );
                    filter: blur(25px);
                    animation: colorful2 2s linear infinite, zone2 0.2s linear 1;
                  }
                }
              }
            }
          }
          #zoneLogo {
            width: 80px;
            height: 84px;
            background-image: url("../assets/ssaw.svg");
            background-position: center center;
            background-size: cover;
            font-size: 21px;
            font-weight: 600;
            margin-left: 240px;
            margin-top: 25px;
            position: relative;
            &:hover::before {
              content: "";
              position: absolute;
              top: -30px;
              left: -150px;
              width: 480%;
              height: 180%;

              background: linear-gradient(
                150deg,
                rgba(3, 169, 244, 0.2),
                rgba(244, 65, 165, 0.2),
                rgba(255, 235, 59, 0.2),
                rgba(3, 169, 244, 0.2)
              );
              filter: blur(25px);
              animation: colorful1 3s linear infinite, zone 0.2s linear 1;
            }
          }
        }
      }
      #bothSexes {
        width: 30%;
        height: 98%;

        #bgDiv {
          margin-top: 57px;
          border-right: 2px solid rgba(0, 0, 0, 0.6);
          a {
            div {
              width: 40%;
              height: 40px;
              margin-top: 15px;
              margin-left: 120px;
              text-align: center;
              position: relative;
              color: #292828;
              &:hover::after {
                content: "";
                position: absolute;
                top: -7px;
                width: 100%;
                height: 120%;
                left: 0px;
                background: linear-gradient(
                  150deg,
                  rgba(3, 169, 244, 0.1),
                  rgba(244, 65, 165, 0.1),
                  rgba(255, 235, 59, 0.1),
                  rgba(3, 169, 244, 0.1)
                );
                -webkit-clip-path: polygon(
                  0% 0%,
                  90% 0,
                  100% 50%,
                  89% 100%,
                  0% 100%
                );
                clip-path: polygon(0% 0%, 90% 0, 100% 50%, 89% 100%, 0% 100%);
                filter: blur(20px);
                animation: colorful 2s linear infinite, bg 0.25s linear 1;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
              }
              &:hover::before {
                content: "";
                position: absolute;
                top: -13px;
                left: -20px;
                width: 130%;
                height: 150%;
                animation: bgb 0.25s linear 1;
                background: linear-gradient(
                  150deg,
                  rgba(3, 169, 244, 0.2),
                  rgba(244, 65, 165, 0.2),
                  rgba(255, 235, 59, 0.2),
                  rgba(3, 169, 244, 0.2)
                );
                filter: blur(13px);
              }
            }
          }
        }
      }
    }
  }
  #dropDownnav0 {
    display: block;
    background-color: #ffffff;
    #progressBelow {
      width: 0;
      height: 3%;
      background: linear-gradient(
        150deg,
        rgba(3, 169, 244, 0.2),
        rgba(244, 65, 165, 0.2),
        rgba(255, 235, 59, 0.2),
        rgba(3, 169, 244, 0.2)
      );
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: all 0.3s ease-in-out;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 150%;
        background: linear-gradient(
          150deg,
          rgba(3, 169, 244, 0.2),
          rgba(244, 65, 165, 0.2),
          rgba(255, 235, 59, 0.2),
          rgba(3, 169, 244, 0.2)
        );
        z-index: -1;
        filter: blur(17px);
      }
    }
    #classify {
      width: 100%;
      height: 80%;
      display: flex;

      .colorful {
        width: 25%;
        height: 120px;
        margin-top: 50px;
        transition: background 0.8s ease-in-out;
        background: linear-gradient(150deg, #fff);
        border-radius: 10px;
        #spring,
        #summer,
        #autumn,
        #winter {
          width: 80px;
          height: 80px;
          background-image: url("../assets/ssaw.svg");
          background-position: center center;
          background-size: cover;
          margin: 15px auto;
          font-size: 18px;
          font-weight: 500;
          border-left: 4px solid #878686;
          background: linear-gradient(150deg, #fff);
          filter: blur(0px);
          &:hover::after {
            content: "";
            position: absolute;
            top: -8px;
            left: -25px;
            width: 160%;
            height: 120%;
            background: linear-gradient(
              150deg,
              rgba(3, 169, 244, 0.2),
              rgba(244, 65, 165, 0.2),
              rgba(255, 235, 59, 0.2),
              rgba(3, 169, 244, 0.2)
            );
            z-index: -1;
            filter: blur(15px);
            -webkit-clip-path: polygon(
              50% 0%,
              100% 38%,
              100% 100%,
              0 100%,
              0% 38%
            );
            clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
            animation: backgroundAfter 0.2s linear 1,
              colorful 3.5s linear infinite;
          }
          &:hover::before {
            content: "";
            position: absolute;
            // top: -8px;
            left: -85px;
            width: 300%;
            height: 135%;
            background: linear-gradient(
              150deg,
              rgba(3, 169, 244, 0.2),
              rgba(244, 65, 165, 0.2),
              rgba(255, 235, 59, 0.2),
              rgba(3, 169, 244, 0.2)
            );
            z-index: -1;
            filter: blur(15px);
          }
        }
      }
    }
  }

  #navDiv {
    width: 100%;
    height: 40px;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: space-between;
    #navLR {
      width: 100%;
      position: absolute;
      z-index: 2;
      display: flex;
    }
    #navScrollLeft,
    #navScrollRight {
      // width: 49%;
      height: 40px;
      background-color: rgb(42, 41, 41);
      transition: all 0.8s ease-in-out;
    }
    #navScrollLeft {
      border-top-right-radius: 65px;
    }
    #navScrollRight {
      border-top-left-radius: 65px;
    }
    #navDivLeft,
    #navDivRight {
      width: 49%;
      height: 41px;
      display: flex;
    }
    #navDivLeft {
      border-top-right-radius: 60px;
      div {
        margin-left: 110px;
        margin-top: 7px;
        a {
          color: #696969;
          text-decoration: none;
          font-size: 15px;
          &:hover {
            color: rgb(255, 255, 255);
          }
        }
      }
    }
    #navDivRight {
      margin-left: 33px;
      border-top-left-radius: 60px;
      div {
        margin-left: 120px;
        margin-top: 7px;
        a {
          text-decoration: none;
          color: #696969;
          font-size: 15px;
          &:hover {
            color: rgb(255, 255, 255);
          }
        }
      }
    }
  }
  @keyframes colorful {
    0% {
      filter: hue-rotate(150deg);
    }
    50% {
      filter: hue-rotate(230deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  @keyframes colorful1 {
    0% {
      filter: blur(35px) hue-rotate(150deg);
    }
    50% {
      filter: blur(35px) hue-rotate(230deg);
    }
    100% {
      filter: blur(35px) hue-rotate(360deg);
    }
  }
  @keyframes colorful2 {
    0% {
      filter: blur(6px) hue-rotate(150deg);
    }
    50% {
      filter: blur(6px) hue-rotate(230deg);
    }
    100% {
      filter: blur(6px) hue-rotate(360deg);
    }
  }
  @keyframes zone {
    0% {
      width: 10%;
      height: 10%;
      top: 50%;
      left: 10%;
    }
    100% {
      width: 480%;
      height: 180%;
      top: -30px;
      left: -150px;
    }
  }
  @keyframes zone2 {
    0% {
      width: 0%;
      height: 0%;
      top: 50%;
      left: 10%;
    }
    100% {
      width: 180%;
      height: 120%;
      top: -6px;
      left: -16px;
    }
  }
  @keyframes backgroundAfter {
    0% {
      width: 0%;
      height: 0;
      top: 50%;
      left: 50%;
    }
    100% {
      width: 160%;
      height: 120%;
      top: -8px;
      left: -25px;
    }
  }
  @keyframes bg {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes bgb {
    0% {
      width: 0%;
    }
    100% {
      width: 130%;
    }
  }
}
</style>