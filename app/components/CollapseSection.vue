<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

const props = defineProps<{
  title: string
  subtitle?: string
  defaultOpen?: boolean
  id?: string
}>()

const open = ref(props.defaultOpen ?? false)

defineExpose({ open })
</script>

<template>
  <div :id="id" class="border border-border rounded-xl overflow-hidden bg-card">
    <button
      type="button"
      class="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-accent/40 transition-colors"
      @click="open = !open"
    >
      <div class="min-w-0">
        <div class="font-semibold text-foreground leading-snug">{{ title }}</div>
        <div v-if="subtitle" class="text-xs text-muted-foreground mt-0.5">{{ subtitle }}</div>
      </div>
      <ChevronDown
        :class="cn('size-4 text-muted-foreground transition-transform shrink-0', open && 'rotate-180')"
      />
    </button>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="open" class="border-t border-border divide-y divide-border/60">
        <slot />
      </div>
    </Transition>
  </div>
</template>
