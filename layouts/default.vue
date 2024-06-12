<template lang="pug">
div(class="flex flex-col h-full")
  //- AppHeader
  div(class="flex-1")
    slot
  //- AppFooter
</template>

<script setup>
</script>

<style>
body, html {
  @apply h-full
}
</style>