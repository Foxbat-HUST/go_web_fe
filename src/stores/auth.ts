import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import type { User } from "@/models";
import { UserType } from "@/models";

export const useAuthStore = defineStore("auth", () => {
    const authUser = ref<User>({
        name: "",
        email: "",
        type: UserType.None
    })
    const name = computed(() => authUser.value.name)
    const email = computed(() => authUser.value.email)
    const isSuper = computed(() => authUser.value.type === UserType.Super)
    const isAdmin = computed(() => authUser.value.type === UserType.Admin)
    const isNormalUser = computed(() => authUser.value.type === UserType.User)
    const isAuthed = computed(()=> authUser.value && authUser.value.type != UserType.None)
    const setAuthUser = (u: User) => {authUser.value = u}

    return { name, email, isAdmin, isSuper, isNormalUser, isAuthed, setAuthUser}
})