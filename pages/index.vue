<template>
  <div class="page-index">
    <Title
      :detail="'Top'"
      :url="'https://blog.taniguchi.tech/archives/547'"
      :viewReactTop="true"
    />
    <p class="contents">Contents</p>
    <ul>
      <li><NuxtLink to="/sono-1">その１ たった10項目の入力フォーム</NuxtLink></li>
      <li><NuxtLink to="/sono-2">その２ Page Pathの設定① - 普通のページ遷移</NuxtLink></li>
      <li><NuxtLink to="/sono-2-2">その２ Page Pathの設定② - Not Found Page</NuxtLink></li>
      <li><NuxtLink to="/sono-3">その３ APIアクセス共通エラー画面遷移処理</NuxtLink></li>
      <li>その４ 画面種別共通処理</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/view/Title.vue'

export default Vue.extend({
  components: {
    Title
  }
})
</script>

<style lang="sass" scoped>
.page-index
  margin: 50px auto
  width: 600px
  display: flex
  flex-direction: column
  .contents
    text-align: center
    font-size: 1.8em
    margin: 10px 0 50px
  ul
    margin: auto
    width: 380px
    padding: 30px 40px
    border-radius: 20px
    background-color: #e6f7ed
    li
      line-height: 1.8em
      a
        &:hover
          font-size: 1.05em
</style>