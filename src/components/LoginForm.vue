<template>
  <b-card>
    <b-container>
      <b-row>
        <b-col class="content-center">
          <Logo class="shadow-lg" size="md"></Logo>
        </b-col>
        <b-col>
          <h3 class="text-center">User Login</h3>
          <b-form-input class="mt-4" v-model="userName" placeholder="email"> </b-form-input>
          <b-form-input
            class="mt-2"
            v-model="password"
            type="password"
            placeholder="password"
          ></b-form-input>
          <span v-show="showErr" class="text-danger text-center">Wrong user name or password</span>
          <b-button variant="primary" class="mt-3 mb-2 w-100" @click="doLogin">Login</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useLoadingStore } from '@/stores/loading'
import { AuthApi } from '@/api/authApi'
import { useRouter } from 'vue-router'
import Logo from '@/components/Logo.vue'
const loadingStore = useLoadingStore()
const userName = ref<string>('')
const password = ref<string>('')
const router = useRouter()
const showErr = ref<boolean>(false)

const doLogin = async () => {
  try {
    showErr.value = false
    loadingStore.showLoading()
    await AuthApi.getInstance().login(userName.value, password.value)
    router.push('/home')
  } catch (e) {
    showErr.value = true
  } finally {
    loadingStore.hideLoading()
  }
}
</script>
