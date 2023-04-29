<template>
  <b-nav vertical class="menu">
    <div class="d-flex align-items-center justify-content-center profile-bg-image">
      <div>
        <img class="profile-image" src="/src/assets/images/profile.jpg">
        <h4 class="d-inline text-white font-weight-bold ml-2">Foxbat</h4>
      </div>
    </div>
    <b-nav-item class="menu-item">
      <span>
        <i-material-symbols-home color="white" />
        <router-link class="link-text" to="/home">Home</router-link>
      </span>
    </b-nav-item>
    <b-nav-item class="menu-item">
      <span>
        <i-mdi-user-multiple color="white" />
        <router-link class="link-text" to="/user">User</router-link>
      </span>
    </b-nav-item>
  </b-nav>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.menu {
  background-color: #32373d;
}

.profile-bg-image {
  background-image: url("/src/assets/images/mountain.jpg");
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
  border-bottom: 1px solid rgba(255, 255, 255, .05);

  a {
    height: 3.5em;
  }

  .link-text {
    color: white;
    margin-left: 2em;
  }

  :hover {
    background: #2f89fc;
  }
}</style>
