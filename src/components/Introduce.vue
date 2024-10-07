<template>
  <div id="ind">
    <div id="boqq">
      <b id="bb">如有疑问请添加&gt;</b>
      <b>3341612612</b>
      <div id="bottomd">
        <div id="qqimge"></div>
        在线咨询^
      </div>
    </div>

    <div id="state">
      <h1>CDUp&FS</h1>
      <div id="stated1">
        <i class="iconfont tb"></i>
        <h4>
          官方热线<br />
          88889999888999
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/c/font_4575586_6a25ero7kt5.css");
#ind {
  width: 100%;
  height: 230px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;
  #boqq {
    width: 80%;
    position: absolute;
    margin-top: 20px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(165, 165, 167);
    b {
      margin-top: 13px;
      margin-left: 20px;
      font-size: 13px;
      opacity: 0.6;
      font-weight: 500;
    }
    #bb {
      margin-top: 11px;
      font-weight: 600;
      font-size: 15px;
      opacity: 1;
    }
    #bottomd {
      width: 130px;
      height: 25px;
      background-color: #000;
      color: #fff;
      text-align: right;
      display: flex;
      margin-left: 30px;
      margin-top: 10px;
      #qqimge {
        width: 15px;
        height: 17px;
        background-image: url(../assets/qqimg.png);
        background-position: center center;
        background-size: cover;
        margin-left: 20px;
        margin-top: 4px;
      }
    }
  }
  #state {
    width: 100%;
    height: 156px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 4px;
    background-color: #000000;
    margin-top: 76px;
    position: absolute;
    display: flex;
    flex-direction: column;
    h1 {
      margin-left: 10px;
      color: #ffffff;
    }
    #stated1 {
      width: 310px;
      height: 80px;
      border-radius: 6px;
      border: 1px solid rgb(85, 85, 85);
      margin-top: 10px;
      margin-left: 12px;
      background-color: #333232;
      color: #fff;
      display: flex;
      .tb:before {
        display: block;
        margin-top: 20px;
        margin-left: 15px;
        content: "\e633";
        font-size: 35px;
        color: #fff;
      }
      h4 {
        margin-top: 15px;
        margin-left: 15px;
      }
    }
  }
}
</style>