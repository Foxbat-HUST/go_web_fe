<template>
  <div>
    <b-card class="position-absolute top-50 start-50 translate-middle">
      <b-form-input v-model="userName" placeholder="enter user name">
      </b-form-input>
      <b-form-input v-model="password" type="password" placeholder="enter password"></b-form-input>
      <b-button @click="doLogin">Login</b-button>
  </b-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useLoadingStore } from '@/stores/loading';
import { AuthApi } from '@/api/authApi';
import { useRouter } from 'vue-router';
const loadingStore = useLoadingStore()
const userName = ref<string>('')
const password = ref<string>('')
const router = useRouter()

const doLogin = async () => {
  try{
    loadingStore.showLoading()
    await AuthApi.getInstance().login(userName.value, password.value)
    router.push("/home")
  }catch(e){
    console.log(e)

  }finally{
    loadingStore.hideLoading()
  }

}
</script>
<style scoped lang="scss" >
.login-form{
  width: 500px;
}
</style>
