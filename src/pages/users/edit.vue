<template>
  <Header :items="headerItems"></Header>
  <div>
    <b-container>
      <b-row>
        <b-col :cols="2">
          <h4 class="mt-4">Name</h4>
        </b-col>
        <b-col :cols="5">
          <b-form-input class="mt-4" v-model="userStore.name"> </b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col :cols="2">
          <h4 class="mt-4">Email</h4>
        </b-col>
        <b-col :cols="5">
          <b-form-input class="mt-4" v-model="userStore.email"> </b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col :cols="2">
          <h4 class="mt-4">Age</h4>
        </b-col>
        <b-col :cols="5">
          <b-form-input :disabled="true" class="mt-4" v-model="userStore.age"> </b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col :cols="2">
          <h4 class="mt-4">Role</h4>
        </b-col>
        <b-col :cols="5">
          <b-form-input :disabled="true" class="mt-4" v-model="userStore.type"> </b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col :offset="2" :cols="3" class="horizontal-center">
          <FooterButton
            :cancel-button-click="cancelBtnClick"
            ok-button-label="Save"
            :ok-button-click="saveBtnClick"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup lang="ts">
import Header, { type IItem } from '@/components/common/Header.vue'
import FooterButton from '@/components/common/FooterButton.vue'
import { ref, onMounted } from 'vue'
import { UserApi } from '@/api/userApi'
import { useLoadingStore } from '@/stores/loading'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const headerItems = ref<Array<IItem>>([
  {
    name: 'Users',
    path: '/users'
  }
])

const router = useRouter()
const userId = router.currentRoute.value.params.id as string

const loadingStore = useLoadingStore()
const userApi = UserApi.getInstance()
const userStore = useUserStore()
const cancelBtnClick = () => {
  router.push('/users')
}

const saveBtnClick = async () => {
  try {
    loadingStore.showLoading()
    await userApi.update(userId, {
      name: userStore.name,
      email: userStore.email,
      age: userStore.age,
    })
    router.push('/users')
  } catch (e) {
  } finally {
    loadingStore.hideLoading()
  }
}

onMounted(async () => {
  try {
    loadingStore.showLoading()
    const user = await userApi.get(userId)
    headerItems.value.push({
      name: user.name,
      path: `/users/${user.id}/edit`,
      active: true
    })
    userStore.setUser(user)
  } catch (e) {
    console.log(e)
  } finally {
    loadingStore.hideLoading()
  }
})
</script>
