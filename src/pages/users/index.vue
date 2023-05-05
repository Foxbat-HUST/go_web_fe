<template>
  <Header :items="headerItems"></Header>
  <div>
    <b-table :fields="tableFields" :items="users">
      <template #cell(edit)="{ item }">
        <b-button variant="primary" class="mr-2">
          <i-material-symbols-edit-square-outline-rounded class="icon mr-1" />
          <span>Edit</span>
        </b-button>
        <b-button variant="danger" @click="deleteBtnCLick(item.id)">
          <i-material-symbols-delete-forever class="icon mr-1" />
          <span>Delete</span>
        </b-button>
      </template>
    </b-table>
  </div>
</template>
<script setup lang="ts">
import Header, { type IItem } from '@/components/common/Header.vue'
import type { User } from '@/model/user'
import { ref, onMounted, inject } from 'vue'
import { UserApi } from '@/api/userApi'
import { useLoadingStore } from '@/stores/loading'
import { type TableField } from 'bootstrap-vue-next'
import { ConfirmSymbol, type ConfirmFunctionType } from '@/util/confirm'
const headerItems = ref<Array<IItem>>([
  {
    name: 'Users',
    path: '/users',
    active: true
  }
])
const tableFields: Array<TableField> = [
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'type',
    label: 'Role'
  },
  {
    key: 'email',
    label: 'Email'
  },
  {
    key: 'age',
    label: 'Age'
  },
  {
    key: 'edit',
    label: ''
  }
]
const loadingStore = useLoadingStore()
const userApi = UserApi.getInstance()
const users = ref<Array<User>>([])
const userCount = ref<number>(0)
const loadUser = async () => {
  const res = await userApi.list({
    pageIndex: 1,
    itemPerPage: 20
  })
  users.value = res.users
  userCount.value = res.count
}
const confirm = inject<ConfirmFunctionType>(ConfirmSymbol)
const deleteBtnCLick = async (id: number) => {
  if (!confirm) {
    return
  }
  const ok = await confirm('Warning', 'Are you sure to delete this user?')
  if (!ok) {
    return
  }
  try {
    loadingStore.showLoading()
    await userApi.delete(id)
    await loadUser()
  } catch (e) {
    console.log(e)
  } finally {
    loadingStore.hideLoading()
  }
}
onMounted(async () => {
  try {
    loadingStore.showLoading()
    await loadUser()
  } catch (e) {
    console.log(e)
  } finally {
    loadingStore.hideLoading()
  }
})
</script>
