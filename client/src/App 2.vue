<script setup lang="ts">
import '@/assets/main.css'
import { useSettingsStore } from '@/stores/settings.ts'
import {computed, ref, watch} from 'vue'

const signedIn = ref(false)
const settingsStore = useSettingsStore()
const isDarkMode = computed(() => settingsStore.darkMode)
const toggleDarkMode = () => {
  settingsStore.toggleDarkMode()
}

watch(isDarkMode, (newVal) => {
  if (newVal) {
    document.body.setAttribute('data-dark', 'true')
  } else {
    document.body.removeAttribute('data-dark')
  }
}, { immediate: true })

</script>

<template>
  <nav v-if="signedIn" :class="{'dark-mode-theme': isDarkMode}" class="py-10 px-8 border-b border-gray-700">
    <div class="max-w-7xl mx-auto" >
      <div class="flex items-center justify-between">
        <div class="menu-left">
        </div>
        <div class="menu-center flex space-x-12">
          <div v-if="signedIn">
            <RouterLink to="WelcomeView" active-class="active-link">
              <q-icon name="mdi-home-outline" size="lg" />
              <q-tooltip>Home</q-tooltip>
            </RouterLink>
            <RouterLink to="CocktailBuilder" active-class="active-link">
              <q-icon name="mdi-glass-cocktail" size="lg" />
              <q-tooltip>King Coil Spirits</q-tooltip>
            </RouterLink>
            <RouterLink to="#" active-class="active-link">
              <q-icon name="mdi-bottle-tonic-plus" size="lg"></q-icon>
              <q-tooltip>Shop</q-tooltip>
            </RouterLink>
            <RouterLink to="#" active-class="active-link">
              <q-icon name="mdi-pizza" size="lg" />
              <q-tooltip>OG ZaZa</q-tooltip>
            </RouterLink>
          </div>
        </div>

        <div class="menu-right">
          <q-btn @click="toggleDarkMode" icon="mdi-theme-light-dark" class="mr-4"></q-btn>

        </div>
      </div>
    </div>
  </nav>

  <main class="main-content">
    <RouterView />
  </main>

  <!--  <Toast />-->
</template>
<style scoped>

.menu-right {
  display: flex;
  flex-direction: row;
  align-items: center; /* This is to ensure items are vertically centered */
}


</style>
