<template>
  <div class="compo-text">
    <div class="label">
      <p>{{label}}</p>
      <span v-if="required">必須</span>
    </div>
    <input type="text" v-model="val" />
    <span class="error" v-if="viewValidationResult && !valid">入力値が不正です</span>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true
    },
    keyName: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    onChange: {
      type: Function as PropType<(key :string, value: string, isValid: boolean) => void>,
      default: (val: string) => null
    },
    required: {
      type: Boolean,
      default: false
    },
    regex: {
      type: RegExp,
      default: null
    },
    viewValidationResult: {
      type: Boolean,
      default: false
    }
  },
  data() {
    if (!this.required) this.onChange(this.keyName, this.value, true)
    return {
      val: this.value,
      valid: !this.required
    }
  },
  watch: {
    val(val: string) {
      let valid = true
      if (val) {
        valid = this.regex ? this.regex.test(val) : true
      } else if (this.required) {
        valid = false
      }
      this.valid = valid 
      this.onChange(this.keyName, val, valid)
    }
  }
})
</script>

<style lang="sass" scoped>
  .compo-text
    margin: 15px auto 20px
    padding: 35px
    width: 400px
    border: 6px solid #dedede
    border-radius: 5px
    .label
      display: flex
      justify-content: space-between 
      align-items: center
      margin: 0 0 2px
      p
        font-size: 1.2em
        color: #444
        margin: 0
        padding: 3px
      span
        font-size: 0.8em
        padding: 6px 8px
        color: white
        background-color: #7797d2
        border-radius: 5px
    input
      margin: 0
      padding: 15px
      width: 100%
      border: 3px solid #bbb
      border-radius: 5px
      font-size: 1.2em
      box-sizing: border-box
    .error
      margin: 3px 0
      font-size: 0.8em
      display: block
      color: #e46a6a
</style>