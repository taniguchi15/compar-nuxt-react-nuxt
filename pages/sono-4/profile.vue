<template>
  <div class="page-sono-4">
    <Title
      :detail="'その４'"
      :url="'https://blog.taniguchi.tech/archives/547'"
    />
    <p class="contents">Profile</p>
    <div class="profile">
      <Profile />
      <p class="user-id">User ID</p>
      <p>{{ $store.state.auth.userId }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/view/Title.vue'
import Profile from '@/components/atoms/view/Profile.vue'

export default Vue.extend({
  components: {
    Title,
    Profile
  },
  middleware: 'authed'
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
  .profile
    margin: auto
    width: 380px
    padding: 30px 40px
    border: 10px solid #e6f7ed
    border-radius: 20px
    margin: auto
    text-align: center
    svg
      margin: 10px auto 20px
    .user-id
      margin: 0 auto 15px
      padding: 5px
      width: 5em
      color: #fff
      background-color: #99a4b1
      border-radius: 3px
</style>