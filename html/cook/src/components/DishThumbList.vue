<template >
  <div class='list'>
    <DishThumb v-for='dish of dishes' v-bind:key='dish.id' :dish='dish'></DishThumb>
  </div>
</template>

<script>
import DishThumb from './DishThumb.vue'
export default {
  name: 'dish-thumb-list',
  props: {
    dishes: {
      type: Array,
    }
  },
  components: {
    DishThumb,
  }
}
</script>

<style scoped>
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
