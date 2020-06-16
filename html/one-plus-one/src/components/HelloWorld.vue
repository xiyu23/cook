<template>
  <div class="hello">
    <div id='divDays' class='center'>
        Today is the No.<span class='days'>{{days}}</span>th day we fell in love with each other
    </div>
    <input type='number' v-bind:value='valueA' v-on:input='valueAChanged' />
    <input type='number' v-bind:value='valueB' v-on:input='valueBChanged'/>
    <label>{{valueA+valueB}}</label>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      valueA: 0,
      valueB: 0,
      days: this.getLovingDay(),
    };
  },
  computed: {
    sum: function() {
      return this.valueA + this.valueB;
    }
  },
  methods: {
    valueAChanged: function(e) {
      console.log('valueA changed: ', e);
      console.log('this in arrow function:', this);
      this.valueA = parseInt(e.target.value);
    },
    valueBChanged: function(e) {
      console.log('valueB changed: ', e);
      console.log('this in arrow function:', this); // type of this is vuecomponent
      this.valueB = parseInt(e.target.value);
    },
    getLovingDay: function() {
      const startDay = new Date('2019/05/24');
      startDay.setHours(0);
      startDay.setMinutes(0);
      startDay.setSeconds(0);

      let now = new Date();
      now.setHours(0);
      now.setMinutes(0);
      now.setSeconds(0);

      const daysPassed = Math.floor((now.getTime() - startDay.getTime()) / 1000 / 3600 /24);
      return daysPassed + 1;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.center{
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#divDays{
  background-position: center;
  color:rgb(51, 127, 250);
  font-size: 1.2em;
}
.days{
  display: inline-block;
  height: 100%;
  font-size: 1.5em;
  font-style: italic;
  color:#ffe23b;
  font-weight: bold;
}
</style>
