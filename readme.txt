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

7.