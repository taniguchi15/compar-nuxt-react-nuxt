<template>
  <div class="page-sono-3">
    <Title
      :detail="'その３'"
      :url="'https://blog.taniguchi.tech/archives/547'"
    />
    <p class="contents">3種類のAPI</p>
    <div class="buttons">
      <div
        class="button success"
        @click="postSuccess"
      >
        <p class="result">Succsess</p>
        <p>POST</p>
      </div>
      <div
        class="button bad-request"
        @click="postBadRequest"
      >
        <p class="result">Bad Request</p>
        <p>POST</p>
      </div>
      <div
        class="button server-error"
        @click="postServerError"
      >
        <p class="result">Server Error</p>
        <p>POST</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/view/Title.vue'

export default Vue.extend({
  components: {
    Title
  },
  methods: {
    postSuccess() {
      this.$axios.$post('/success').then(() => {
        alert('succsess')
      })
    },
    postBadRequest () {
      this.$axios.$post('/badrequest')
    },
    postServerError () {
      this.$axios.$post('/servererror')
    }
  }
})
</script>

<style lang="sass" scoped>
.page-sono-3
  margin: 50px auto
  width: 600px
  display: flex
  flex-direction: column
  .contents
    text-align: center
    font-size: 1.8em
    margin: 10px 0 50px
  .buttons
    margin: auto
    width: 380px
    padding: 30px 40px
    border: 10px solid #e6f7ed
    border-radius: 20px
    margin: auto
    .button
      width: 150px
      margin: 30px auto
      padding: 15px 30px
      border-radius: 5px
      text-align: center
      cursor: pointer
      p
        margin: 5px
        font-size: 1.3em
      .result
        font-size: 0.8em
    .success
      background-color: #c4d3ff
      &:hover
        background-color: #b3bfe5
    .bad-request
      background-color: #f3e1c2
      &:hover
        background-color: #dfceb1
    .server-error
      background-color: #ffc9c9
      &:hover
        background-color: #e1b9b9
         
</style>