<template>
  <div class='search-container'>
    <input class='serach-input' type="text" placeholder="" v-bind:value="value" v-on:input='startSearch'>
    <span class='search-btn' v-on:click="startSearch">Search</span>
  </div>
</template>

<script>
export default {
  name: 'search',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
    }
  },
  methods: {
    startSearch(event) {
      // event是原生DOM事件
      // this指向当前vue实例
      console.log(`[startSearch]开始用'${this.value}'搜索`);
      console.log(`[startSearch]fire event to parent...`);

      this.$emit('input', this.value);
    }
  },
}
</script>

<style scoped>

</style>
