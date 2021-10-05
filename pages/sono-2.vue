<template>
  <div class="page-sono-2">
    <Title
      :detail="'その２'"
      :url="'https://blog.taniguchi.tech/archives/547'"
    />
    <p class="sono-2">その２</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/view/Title.vue'

export default Vue.extend({
  components: {
    Title
  },
})
</script>

<style lang="sass" scoped>
.page-sono-2
  margin: 50px auto
  width: 600px
  display: flex
  flex-direction: column
  .sono-2
    font-size: 1.5em
    text-align: center
</style>