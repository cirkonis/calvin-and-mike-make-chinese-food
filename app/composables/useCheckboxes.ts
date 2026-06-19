export function useCheckboxes() {
  const state = useState<Record<string, boolean>>('checkboxes', () => ({}))
  const loaded = useState<boolean>('checkboxes:loaded', () => false)

  async function load() {
    if (loaded.value) return
    try {
      const data = await $fetch<Record<string, boolean>>('/api/checkboxes')
      state.value = data
    } catch {
      // DB not yet configured — start with empty state
    }
    loaded.value = true
  }

  async function toggle(key: string) {
    const next = !state.value[key]
    state.value = { ...state.value, [key]: next }
    try {
      await $fetch('/api/checkboxes', { method: 'PUT', body: { key, checked: next } })
    } catch {
      state.value = { ...state.value, [key]: !next }
    }
  }

  function isChecked(key: string) {
    return computed(() => state.value[key] ?? false)
  }

  return { state, load, toggle, isChecked }
}
