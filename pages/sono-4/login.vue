<template>
  <div class="page-sono-4">
    <Title
      :detail="'その４'"
      :url="'https://blog.taniguchi.tech/archives/547'"
    />
    <p class="contents">ログイン</p>
    <InputText 
      :label="'User ID'"
      :keyName="'userId'"
      :value="inputs.userId"
      :onChange="onChange"
      :required="true"
    />
    <p class="button" @click="login">ログイン</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/view/Title.vue'
import InputText from '@/components/atoms/input/Text.vue'

export default Vue.extend({
  components: {
    Title,
    InputText
  },
  middleware: 'unauthed',
  data() {
    return {
      inputs: {
        userId: ''
      },
      valids: {
        userId: false
      }
    }
  },
  methods: { 
    onChange(key: string, value: string, isValid: boolean) {
      this.inputs = {
        ...this.inputs,
        [key]: value
      }
      this.valids = {
        ...this.valids,
        [key]: isValid
      }
    },
    login() {
      const valid = Object.values(this.valids).every(b => b)
      if (!valid) return
      this.$store.dispatch('auth/login', {
        userId: this.inputs.userId
      })
      this.$router.push('/sono-4')
    }
  }
})
</script>

<style lang="sass" scoped>
.page-sono-4
  margin: 50px auto
  width: 600px
  display: flex
  flex-direction: column
  .contents
    text-align: center
    font-size: 1.8em
    margin: 10px 0 50px
  .button
    width: 450px
    padding: 20px
    margin: 20px auto
    color: #444
    background-color: #c7d8f1
    border-radius: 3px
    text-align: center
    font-size: 1.1em
    &:hover
      background-color: #b6cbe8
</style>