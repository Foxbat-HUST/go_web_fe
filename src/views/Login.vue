<template>
  <main class="home-content content shadow">
    <b-container fluid="sm" class="h-100">
      <b-row>
        <b-col sm="6">
          <b-container>
            <b-row class="sign-up-image">
              <img class="" alt="user" src="@/assets/images/signup-image.jpg"/>
            </b-row>
            <b-row class="content-center">
              <b-link>Create account</b-link>
            </b-row>
          </b-container>
        </b-col>
        <b-col sm="6">
          <b-card title="Login:" class="login-card">
            <b-card-body class="login-card-body">
              <div class="login-card-element">
                <b-input-group class="mb-20">
                  <b-input-group-prepend is-text>
                    <i class="bi bi-person-fill"></i>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model="userName" placeholder="Email address"></b-form-input>
                </b-input-group>
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <i class="bi bi-lock-fill"></i>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model="password" placeholder="Your password"></b-form-input>
                </b-input-group>
                <div class="mb-30">
                  <div class="float-right">
                    <b-link>Forgot password?</b-link>
                  </div>
                </div>
                <b-button variant="outline-primary" @click="login">
                  <span>
                    <i class="bi bi-box-arrow-in-right"></i>
                  </span>
                  Login
                </b-button>
              </div>
              <div class="login-card-element other-login">
                <span>Login with:</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { UserType } from '@/models';
import {useRouter } from 'vue-router'
const router = useRouter()
const userName = ref("")
const password = ref("")
const authStore = useAuthStore()
const login = () => {
  console.log(userName.value)
  console.log(password.value)
  authStore.setAuthUser({
    id: 1,
    name: "pham quoc an",
    email: userName.value,
    type: UserType.Super,
  })
  router.push("/home")
}
</script>
<style lang="scss" scoped>
.home-content {
  border-radius: 50px;
  margin: 40px 230px;
}

.sign-up-image {
  padding-top: 50px;
  padding-right: 30px;
  padding-left: 20px;
}

.login-card {
  margin-top: 44px;
  margin-right: 40px;
  height: 100%;
  border: none;
}

.login-card-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0;
  padding-bottom: 26px;

  .login-card-element {
    flex: 1;
    width: 100%
  }
}

.other-login {
  max-height: 80px;
  display: flex;
}
</style>