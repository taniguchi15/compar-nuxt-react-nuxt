<template>
  <div class="page-error">
    <Title />
    <p class="error">Error</p>
    <p class="code">{{ error.statusCode }}</p>
    <p>{{ message }}</p>
    <nuxt-link v-if="viewBackToTopLink" to="/">トップへ戻る</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/view/Title.vue'

export default Vue.extend({
  components: {
    Title
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    message(): string {
      switch (this.error.statusCode) {
        case 404:
          return "ページが見つかりません。"
        case 500:
          return "サーバーエラーが発生しました。しばらく時間をおいてもう一度実行してください。"
        default:
          return "エラーが発生しました。"
      }
    },
    viewBackToTopLink(): boolean {
      switch (this.error.statusCode) {
        case 404:
          return true
        default:
          return false
      }
    }
  }
})
</script>

<style lang="sass" scoped>
.page-error
  margin: 50px auto
  width: 600px
  display: flex
  flex-direction: column
  p, a
    text-align: center
  .error
    color: #d76565
    font-size: 3em
    margin: 10px 0 30px
  .code
    font-size: 1.4em
    margin: 5px
    background-color: #eee
    width: 100px
    margin: 15px auto
    padding: 5px
  a
    margin-top: 50px
    font-size: 0.9em
</style>