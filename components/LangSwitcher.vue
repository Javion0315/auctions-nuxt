<template>
  <span class="lang-switcher">
    <nuxt-link :to="switchLocalePath('en-us')">{{ $t('langSwitcher.en') }}</nuxt-link> 
    <nuxt-link :to="switchLocalePath('zh-tw')">{{ $t('langSwitcher.tw') }}</nuxt-link> 
    <nuxt-link :to="switchLocalePath('zh-cn')">{{ $t('langSwitcher.cn') }}</nuxt-link> 
  </span>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales () {
      return this.$i18n.locales
      // return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>
