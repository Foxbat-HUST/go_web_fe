<template>
    <main class="menu">
        <b-card class="shadow" header-tag="header" footer-tag="footer">
            <template #header>
                <img class="menu-img" alt="user" src="@/assets/images/logo.png" />
            </template>
            <div>
                <MenuLink icon="bi-house" to="/home" icon-size="h2"/>
                <MenuLink icon="bi-people" to="/users" icon-size="h2"/>
                <MenuLink icon="bi-file-lock" to="/access" icon-size="h2"/>
            </div>
            <template #footer>
                <i class="bi bi-gear h1"></i>
            </template>
        </b-card>
    </main>
</template>
<script setup lang="ts">
import MenuLink from './sidebar/MenuLink.vue'
</script>
<style lang="scss" scoped>
.menu {
    width: 78px;
    div{
        border-radius: 20px;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
        height: 100%;
    }
}
.menu-img{
    width: 50px;
    height: 50px;
}
</style>