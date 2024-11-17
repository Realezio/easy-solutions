<template>
  <div class="navbar">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <NuxtLink class="btn btn-link p-2 h-auto drop-shadow-sm" to="/"><img src="/logo/logo-black.svg" alt="Easy Solutions" width="75" height="75" class="block" /></NuxtLink>
    </div>
    <div class="navbar-end"></div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  link: [
    {
      rel: 'preload',
      href: '/logo/logo-black.svg',
      as: 'image',
    }
  ]
})
</script>