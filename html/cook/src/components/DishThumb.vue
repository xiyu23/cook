<template>
  <div class='dish'>
    <img class='pic' v-bind:src="dish.pic" v-bind:alt="dish.name" v-on:click="goToDishDetail" />
    <div class='desc'>
      {{ dish.name }} <span class='difficult'>难度: {{ dish.complex }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'dish-thumb',
  props: {
    dish: {
      type: Object,
    },
  },
  methods: {
    goToDishDetail(event) {
      console.log(event)
      console.log('goToDishDetail, name=', this.dish.name);
    },
  },
}
</script>

<style scoped>
  .dish {
    width: 200px;
  }
  .pic {
    width: 100%;
    height: 200px;
  }
  .desc {
    background-color: aqua;
  }
  .difficult {
    color: red;
    float: right;
  }
</style>
