<template>
  <div class="page-sono-4">
    <Title
      :detail="'その４'"
      :url="'https://blog.taniguchi.tech/archives/547'"
    />
    <p class="contents">画面種別共通処理</p>
    <div class="sono-4">
      <div v-if="$store.state.auth.login">
        <p>こんにちは、{{ $store.state.auth.userId }}さん。(ログイン中)</p>
        <p>ログアウトは<a @click="$store.dispatch('auth/logout')">こちら</a>。</p>
      </div>
      <div v-else>
        <p>こんにちは、Guestさん。(未ログイン) </p>
      </div>
      <div class="links">
        <NuxtLink class="login" to="/sono-4/login">
          <p>ログイン</p>
          <p class="detail">（ログイン時はトップ画面遷移）</p>
        </NuxtLink>
        <NuxtLink class="profile" to="/sono-4/profile">
          <p>プロフィール</p>
          <p class="detail">（未ログイン時はログイン画面遷移）</p>
        </NuxtLink>
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
  }
})
</script>

<style lang="sass">
.page-sono-4
  margin: 50px auto
  width: 600px
  display: flex
  flex-direction: column
  .contents
    text-align: center
    font-size: 1.8em
    margin: 10px 0 50px
  .sono-4
    text-align: center
    margin: auto
    width: 380px
    padding: 30px 40px
    border: 10px solid #e6f7ed
    border-radius: 20px
    a
      color: blue
      text-decoration: underline
      cursor: pointer
    .links
      line-height: 1.8em
      a
        display: block
        width: 200px
        margin: 40px auto
        padding: 12px 30px 8px
        border-radius: 5px
        text-align: center
        cursor: pointer
        text-decoration: none
        background-color: #ffc9c9
        &:hover
        p
          font-size: 1.3em
        .detail
          font-size: 0.7em
      .login
        background-color: #ffc9c9
        &:hover
          background-color: #e1b9b9
      .profile
        background-color: #c4d3ff
        &:hover
          background-color: #b3bfe5
</style>