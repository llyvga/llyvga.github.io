<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <button @click="showModule=true">点击弹窗</button> -->
    <m-popup title="新增信息" :btn="1" :showModule="showModule" submitBtn="确定" cancelBtn="取消" @cancel="showModule = false"
      @submit="submit" themeColor="#ff6600">
      <template v-slot:body>
        <div>
          ......
        </div>
      </template>
    </m-popup>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  props: {

  },
  data() {
    return {
      showModule: true,
    }
  },
  mounted() {

  },

  methods: {
    submit(){
      //点击确认触发的事件，写逻辑
      this.showModule=false
    }

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
