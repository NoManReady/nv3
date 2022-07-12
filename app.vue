<template>
  <el-config-provider :locale="lang">
    <nuxt-layout name="backend">
      <nuxt-page />
    </nuxt-layout>
  </el-config-provider>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import useConfig from '~/store/useConfig'
const config = useConfig()

const { getLocaleMessage } = useI18n()
const lang = computed(() => getLocaleMessage(config.lang.defaultLang))
</script>
<style lang="scss">
@import '~/style/main.scss';
</style>
