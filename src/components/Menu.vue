<template>
  <b-nav vertical class="menu">
    <div class="d-flex align-items-center justify-content-center profile-bg-image">
      <div>
        <Logo></Logo>
        <h4 class="d-inline text-white font-weight-bold ml-2">Foxbat</h4>
      </div>
    </div>
    <b-nav-item class="menu-item" :class="{ active: isActive('/home') }">
      <span class="link">
        <i-material-symbols-home class="icon" />
        <router-link class="link-text" to="/home">Home</router-link>
      </span>
    </b-nav-item>
    <b-nav-item class="menu-item" :class="{ active: isActive('/users') }">
      <span class="link">
        <i-material-symbols-person class="icon" />
        <router-link class="link-text" to="/users">User</router-link>
      </span>
    </b-nav-item>
  </b-nav>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import Logo from '@/components/Logo.vue'

const isActive = (url: string): boolean => {
  const router = useRouter()
  const path = router.currentRoute.value.path
  return path.startsWith(url)
}
</script>

<style scoped lang="scss">
.menu {
  background-color: #32373d;
}
.profile-bg-image {
  background-image: url('/src/assets/images/mountain.jpg');
  min-height: 200px;
  background-size: cover;

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-style: solid;
    border-color: white;
    margin-right: 0.5rem;
  }
}

.menu-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  a {
    height: 3.5em;
  }
  .link {
    color: var(--bs-link-color);
    .link-text {
      margin-left: 2em;
    }
  }

  :hover {
    background: var(--bs-body-bg);
  }
}
.active {
  background-color: var(--bs-body-bg);
}
</style>
