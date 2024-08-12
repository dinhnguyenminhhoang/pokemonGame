<template>
  <div class="wrapper">
    <RouterLink to="/" />
    <RouterLink to="/interact/:level" />
    <RouterLink to="/resualt/:time" />
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
