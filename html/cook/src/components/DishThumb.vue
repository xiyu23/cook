<template>
  <div>
    <img v-bind:src="pic" v-bind:alt="name" />
    <div>
      {{ name }} <span>难度: {{ complex }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'dish-thumb',
  props: {
    name: { // 菜品名称
      type: String,
      required: true,
    },
    pic: { // 菜品图片
      type: String,
      required: true,
    },
    complex: { // 菜品难度
      type: Number,
      default: 3,
    }
  },
}
</script>

<style scoped>
  
</style>
