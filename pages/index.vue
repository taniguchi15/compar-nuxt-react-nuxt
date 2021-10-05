<template>
  <div class="page-sono-1">
    <Title 
      :detail="'その1'"
      :url="'https://blog.taniguchi.tech/archives/547'"
    />
    <InputText 
      :label="'名前'"
      :keyName="'name'"
      :value="inputs.name"
      :onChange="onChange"
      :required="true"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'名前(カナ)'"
      :keyName="'nameKana'"
      :value="inputs.nameKana"
      :onChange="onChange"
      :required="true"
      :regex="/^[ァ-ヶー　]+$/"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'E-Mail'"
      :keyName="'email'"
      :value="inputs.email"
      :onChange="onChange"
      :required="true"
      :regex="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'年齢'"
      :keyName="'age'"
      :value="inputs.age"
      :onChange="onChange"
      :regex="/^\d{1,3}$/"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'郵便番号'"
      :keyName="'zipCode'"
      :value="inputs.zipCode"
      :onChange="onChange"
      :required="true"
      :regex="/^\d{7}$/"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'住所'"
      :keyName="'address'"
      :value="inputs.address"
      :onChange="onChange"
      :required="true"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'電話番号'"
      :keyName="'tel'"
      :value="inputs.tel"
      :onChange="onChange"
      :regex="/^\d{10}$/"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'携帯電話番号'"
      :keyName="'mobileNumber'"
      :value="inputs.mobileNumber"
      :onChange="onChange"
      :regex="/^\d{11}$/"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'趣味・特技'"
      :keyName="'hobby'"
      :value="inputs.hobby"
      :onChange="onChange"
      :viewValidationResult="viewValidationResult"
    />
    <InputText
      :label="'勤務先電話番号'"
      :keyName="'workTel'"
      :value="inputs.workTel"
      :onChange="onChange"
      :regex="/^\d{10,11}$/"
      :viewValidationResult="viewValidationResult"
    />
    <div class="errors" v-if="viewValidationResult">
      <p v-if="!isValidTelOrMobile">電話番号、もしくは携帯電話番号のいずれか１つは入力が必要です。</p>
      <p v-if="!isValidNoMobile">携帯電話番号のない方は、勤務先電話番号の入力が必要です。</p>
    </div>
    <p class="button" @click="send">送信</p>
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
  data() {
    return {
      inputs: {
        name: '',
        nameKana: '',
        email: '',
        age: '',
        zipCode: '',
        address: '',
        tel: '',
        mobileNumber: '',
        hobby: '',
        workTel: '',
      },
      valids: {
        name: false,
        nameKana: false,
        email: false,
        age: false,
        zipCode: false,
        address: false,
        tel: false,
        mobileNumber: false,
        hobby: false,
        workTel: false,
      },
      viewValidationResult: false,
    }
  },
  computed: {
      isValidTelOrMobile(): boolean {
        return !!this.inputs.tel || !!this.inputs.mobileNumber
      },
      isValidNoMobile(): boolean {
        return !!this.inputs.mobileNumber || !!this.inputs.workTel
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
    send() {
      this.viewValidationResult = true

      const valid = Object.values(this.valids).every(bool => bool) &&
        this.isValidTelOrMobile &&
        this.isValidNoMobile

      if (!valid) return

      fetch("/api/v1/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...this.inputs,
          age: Number(this.inputs.age),
          zipCode: Number(this.inputs.zipCode),
        })
      }).then(() => {
        alert('succsess')
        this.viewValidationResult = false
      })
    }
  }
})
</script>

<style lang="sass" scoped>
.page-sono-1
  margin: 50px auto
  width: 600px
  display: flex
  flex-direction: column
  .errors
    width: 480px
    margin: 20px auto 10px
    font-size: 0.8em
    display: block
    p
      color: #e46a6a
      margin: 10px 0
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