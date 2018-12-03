<template>
  <div class="demo">
    demo
    <p>{{msg}}</p>
    <p @click="plus">{{num}}</p>
    <table>
      <tr v-for="item in list" :key="item.id">
        <td>{{item.id}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 1,
      list: []
    }
  },

  create() {
    axios.post('http://rap2api.taobao.org/app/mock/19489/api/user/list')
    .then(res => {
      console.log(res);
      this.list = res.data.list;
    })
  },

  methods: {
    plus() {
      this.num++
    }
  }
}
</script>

<style>
.demo{
  background: red
}
</style>


