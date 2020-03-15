<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
    <DishThumb :name="name" :pic="pic" :complex="complex" />
  </div>
</template>

<script>
import DishThumb from './components/DishThumb.vue';
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data: function () {
    return {
      msg: 'Hi Vue Component',
      name: '土豆丝',
      pic: require('./assets/cmb.png'),
      complex: 5,
    }
  },
  components: {
    HelloWorld,
    DishThumb,
  }
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
