<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail>
        <v-text-field v-model="userName" label="User Name"></v-text-field>
        <v-text-field type="password" v-model="password" label="password"></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>
        <v-btn @click="doLogin" color="primary" block class="mt-2">Login</v-btn>
      </v-form>
      <div v-show="showErrMsg" class="mt-2">
        <p class="text-body-2 text-danger">Incorrect email or password!!!</p>
      </div>
      <div class="mt-2">
        <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { AuthApi } from '@/api/authApi'
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const authApi = AuthApi.getInstance()
const userName = ref<string>('')
const password = ref<string>('')
const showErrMsg = ref<boolean>(false)
const doLogin = async () => {
  try {
    await authApi.login(userName.value, password.value)
    authStore.setIsAuthenticated(true)
    window.location.href = '/home'
  } catch (e) {
    console.log(e)
    showErrMsg.value = true
  }
}
</script>
