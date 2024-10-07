<template>
  <div id="overall01">
    <div id="left01">
      <Promotimg />
      <Introduce />
    </div>
    <router-link to="/"></router-link>
    <router-link to="/enr/*"></router-link>
    <router-link to="/acc/*"></router-link>
    <router-link to="/reg"></router-link>
    <router-view />
  </div>
</template>

<script>
import Promotimg from "@/components/Promotimg.vue";
import Introduce from "@/components/Introduce.vue";
export default {
  components: {
    Promotimg,
    Introduce,
  },
};
</script>

<style lang="less" scoped>
#overall01 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: 0px auto;
  border-radius: 7px;
  display: flex;
  margin: 0px;
  padding: 0px;
}

#left01 {
  width: 845px;
  height: 880px;
  background-color: #b7b5b5;
  border-radius: 7px;
  box-shadow: 7px 0px 20px rgba(0, 0, 0, 0.5);
  animation: revo 0.8s ease-in-out 1;
  margin-top: 3px;
}
@keyframes revo {
  0% {
    transform: translate(0px, -80%);
  }
  100% {
    transform: translate(0px, 0);
  }
}
</style>