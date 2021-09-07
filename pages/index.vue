<template>
  <div class="page-sono-1">
    <Title 
      :detail="'その1'"
      :url="'https://blog.taniguchi.tech/archives/547'"
    />
    <InputText 
      :label="'名前'"
      :value="name"
      :changeValue="s => name = s"
      :required="true"
      :viewValidationResult="viewValidationResult"
      :isValid="valid => isValidName = valid"
    />
    <InputText
      :label="'名前(カナ)'"
      :value="nameKana"
      :changeValue="s => nameKana = s"
      :required="true"
      :regex="/^[ァ-ヶー　]+$/"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidNameKana = result"
    />
    <InputText
      :label="'E-Mail'"
      :value="email"
      :changeValue="s => email = s"
      :required="true"
      :regex="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidEmail = result"
    />
    <InputText
      :label="'年齢'"
      :value="age"
      :changeValue="s => age = s"
      :regex="/^\d{1,3}$/"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidAge = result"
    />
    <InputText
      :label="'郵便番号'"
      :value="zipCode"
      :changeValue="s => zipCode = s"
      :required="true"
      :regex="/^\d{7}$/"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidZipCode = result"
    />
    <InputText
      :label="'住所'"
      :value="address"
      :changeValue="s => address = s"
      :required="true"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidAddress = result"
    />
    <InputText
      :label="'電話番号'"
      :value="tel"
      :changeValue="s => tel = s"
      :regex="/^\d{10}$/"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidTel = result"
    />
    <InputText
      :label="'携帯電話番号'"
      :value="mobileNumber"
      :changeValue="s => mobileNumber = s"
      :regex="/^\d{11}$/"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidMobileNumber = result"
    />
    <InputText
      :label="'趣味・特技'"
      :value="hobby"
      :changeValue="s => hobby = s"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidHobby = result"
    />
    <InputText
      :label="'勤務先電話番号'"
      :value="workTel"
      :changeValue="s => workTel = s"
      :regex="/^\d{10,11}$/"
      :viewValidationResult="viewValidationResult"
      :isValid="result => isValidWorkTel = result"
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
      viewValidationResult: false,
      isValidName: false,
      isValidNameKana: false,
      isValidEmail: false,
      isValidAge: false,
      isValidZipCode: false,
      isValidAddress: false,
      isValidTel: false,
      isValidMobileNumber: false,
      isValidHobby: false,
      isValidWorkTel: false
    }
  },
  computed: {
      isValidTelOrMobile(): boolean {
        return !!this.tel || !!this.mobileNumber
      },
      isValidNoMobile(): boolean {
        return !!this.mobileNumber || !!this.workTel
      }
  },
  methods: {
    send() {
      this.viewValidationResult = true

      const valid = this.isValidName &&
        this.isValidNameKana &&
        this.isValidEmail &&
        this.isValidAge &&
        this.isValidZipCode &&
        this.isValidAddress &&
        this.isValidTel &&
        this.isValidMobileNumber &&
        this.isValidHobby &&
        this.isValidWorkTel &&
        this.isValidTelOrMobile &&
        this.isValidNoMobile

      if (!valid) return

      fetch("/api/v1/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          nameKana: this.nameKana,
          email: this.email,
          age: Number(this.age),
          zipCode: Number(this.zipCode),
          address: this.address,
          tel: this.tel,
          mobileNumber: this.mobileNumber,
          hobby: this.hobby,
          workTel: this.workTel,
        })
      }).then((val: Response) => {
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