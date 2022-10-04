<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="container">
    <nav class="flex flex-col justify-center  md:flex-row md:gap-3">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/me">Me</RouterLink>
      <RouterLink to="/api">Api</RouterLink>
      <RouterLink to="/alert">Alert</RouterLink>
      <RouterLink to="/handsontable">handsontable</RouterLink>
      <RouterLink to="/mone">mone</RouterLink>
      <RouterLink to="/mtwo">mtwo</RouterLink>
      <RouterLink to="/mtwo/123?age=10">mtwo2</RouterLink>
      <RouterLink to="/demo/land-page">land-page</RouterLink>
    </nav>
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" :duration="300" :name="route.meta.transition as string  || 'fade'">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <!-- <RouterView /> -->
  </div>
</template>