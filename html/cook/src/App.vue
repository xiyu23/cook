<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
    <Search v-model="searchText" />
    <DishThumbList :dishes="dishes" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'
import DishThumbList from './components/DishThumbList.vue'

// config
let recipes = [
  '美味饱满蛋炒饭', '酸辣土豆丝', '西红柿炒西葫芦', '爽口凉皮', '红烧牛肉面', '葱油饼', '香煎杏鲍菇', '黄金小酥肉', '卤鸡腿儿', '泡面',
  '小炒黄牛肉', '清蒸基围虾', '手撕包菜', '煮面片(碎面)', '可乐鸡翅', '拍黄瓜', '孜然牛肉炒拉条', '蒜苗炒鸡蛋','酱牛肉', '肉夹馍',
  '煎饼果子', '凉拌海带丝', '红烧排骨饭', '干锅菜花', '糖醋排骨', '绿色的草', '南瓜粥', '大辣子炒鸡蛋', '三汁焖锅',
  ];

let dishes = recipes.map((name, i) => {
  let id = formatToID(i+1);
  return {
    id,
    name,
    pic: require(`./assets/${id}.jpg`),
    complex: 0,
  }
})

function formatToID(num) {
  if (num < 10) {
    return '00' + num;
  }

  if (num < 100) {
    return '0' + num;
  }

  if (num < 1000) {
    return '' + num;
  }

  console.warn('id reaches limit!');
  return '999';
}

export default {
  name: 'App',
  data: function () {
    return {
      msg: 'Hi Vue Component',
      dishes: dishes,
    }
  },
  components: {
    HelloWorld,
    Search,
    DishThumbList,
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
