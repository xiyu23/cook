1.启动nginx
$./nginx

2.杀死所有nginx进程
$taskkill /fi "imagename eq nginx.EXE" /f
可以杀死名字为nginx.EXE的所有进程

3.安装vue项目脚手架
$npm install -g @vue/cli

4.创建一个vue项目
$vue create hello-world

5.图片加载不出来？怎么搞路径都不对？
vue-loader了解一下。
原写法：
export default {
  name: 'App',
  data: function () {
    return {
      msg: 'Hi Vue Component',
      name: '土豆丝',
      pic: './assets/cmb.png', // #1
      complex: 5,
    }
  },
  components: {
    HelloWorld,
    DishThumb,
  }
}

#1由
pic: './assets/cmb.png',
修改为：
pic: require('./assets/cmb.png'),

6.vue/no-dupe-keys
.vue在export组件对象时，是不是props中的和data中的重复了：
原写法：
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
	return {
		msg: 'Hi planet' // #1
	};
  },
}

#1重复定义了msg，改为：
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}

7.子组件如何上抛事件给父组件
例1：button在子组件内，button click后需要父组件来响应
  通过在子组件事件的事件中，emit一个事件，来向上抛出；父组件在使用子组件时要传入v-on:click='clickHandler'捕获子组件抛出的事件。
  子组件 <my-custome>
  <button v-on:click='$emit("eat-me")' />
  也可以抛出一个值，
  <button v-on:click='$emit("eat-me", "someValue")' />
  这个值（第二个参数）可以被事件处理函数来捕获，$event就是它的值

  父组件
  <my-custome v-on:eat-me='console.log("eat-me")' />
  捕获子组件抛出的值 
  <my-custome v-on:eat-me='console.log("eat-me," + $event)' />
  如果事件是一个方法，则方法的第一个参数就是抛出的值
  <my-custome v-on:eat-me='eatMeHandler' />

  function eatMeHandler(value) {
    console.log("eat-me," + value)
  }

例2：text改变后想要fire父组件的input事件来响应


8.export default expression
对外输出expression,因为有了default关键字，所以外部在import时不需要知道引入的名称是什么，只管导入就行。
//export.js
export default function () {
  console.log('foo');
}

//import.js
import bar from './export.js'
bar(); // will log 'foo'

9.xxx.vue中export default导出是什么意思
xxx.vue本身是一个局部注册组件，导出的是用于创建其vue实例的选项对象而已，以供外部复用该组件。
see https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9C%A8%E6%A8%A1%E5%9D%97%E7%B3%BB%E7%BB%9F%E4%B8%AD%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C

10.局部注册组件返回的vue选项data为啥必须是function
必须返回一个函数，这个函数返回data的初始化数据
https://cn.vuejs.org/v2/api/index.html?#data

11.