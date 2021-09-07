<template>
  <div class="compo-title">
    <h1>Nuxt.js VS React.js</h1>
    <p class="compar">実装比較</p>
    <p class="detail" v-if="detail">{{detail}}</p>
    <p class="about" v-if="url">About: <a :href="url">{{url}}</a></p>
    <h2>Nuxt.js</h2>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    detail: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    }
  }
})
</script>

<style lang="sass" scoped>
  .compo-title
    border-radius: 5px
    margin: 10px
    padding: 20px
    a
      color: #d08080
    h1, h2, p
      color: #555
      text-align: center
    h1
      margin: 20px 0 5px
      font-size: 3em
      font-weight: bold
    p.compar
      font-size: 1.8em
      font-weight: bold
      margin: 0 0 20px
    p.detail
      margin: 20px auto
      color: white
      background-color: #555
      width: 4em
      padding: 3px
      border-radius: 10px
    p.about
      font-size: 0.8em
    h2
      margin: 40px auto 20px
      padding: 20px 5px
      width: 200px
      color:  #47c79f
      font-size: 2.2em
      font-weight: bold
      border: 3px solid #47c79f
      border-radius: 5px
</style>   