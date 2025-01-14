import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            darkMode: useLocalStorage<boolean>('darkMode', false), // Explicitly typed
        }
    },
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        },
    },
})
