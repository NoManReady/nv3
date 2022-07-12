<template>
  <div>
    <Example />
    <form>
      <label for="locale-select">{{ $t('name') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="zh-cn">zh-cn</option>
      </select>
    </form>
    <NuxtLink href="/">home{{ data }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
})
const { data, refresh } = await useFetch('/api/count')
const { $useStore } = useNuxtApp()
const auth = $useStore('auth')
</script>

<style scoped></style>
