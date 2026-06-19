<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

const props = defineProps<{
  cbKey: string
  label: string
  note?: string
  who?: 'Mike' | 'Calvin' | 'Both'
  recipeLink?: { label: string; href: string }
  emphasis?: boolean
}>()

const { toggle, isChecked } = useCheckboxes()
const checked = isChecked(props.cbKey)
</script>

<template>
  <div class="flex items-start gap-3 px-4 py-3 hover:bg-accent/40 transition-colors group">
    <button
      type="button"
      class="mt-0.5 shrink-0 size-6 rounded border-2 flex items-center justify-center transition-colors cursor-pointer"
      :class="checked ? 'bg-primary border-primary' : 'border-border bg-background'"
      :aria-label="`Toggle: ${label}`"
      @click="toggle(cbKey)"
    >
      <Check v-if="checked" class="size-3.5 text-primary-foreground" />
    </button>

    <div class="min-w-0 flex-1 pt-0.5">
      <div class="flex items-center gap-2 flex-wrap">
        <span
          class="text-sm leading-snug"
          :class="[
            checked ? 'line-through text-muted-foreground' : 'text-foreground',
            emphasis && !checked ? 'font-semibold' : '',
          ]"
        >{{ label }}</span>

        <span
          v-if="who"
          class="shrink-0 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
          :class="{
            'bg-blue-100 text-blue-700': who === 'Mike',
            'bg-amber-100 text-amber-700': who === 'Calvin',
            'bg-purple-100 text-purple-700': who === 'Both',
          }"
        >{{ who }}</span>
      </div>

      <p v-if="note" class="text-xs text-muted-foreground mt-1 leading-snug">{{ note }}</p>

      <NuxtLink
        v-if="recipeLink"
        :href="recipeLink.href"
        class="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
      >
        → {{ recipeLink.label }}
      </NuxtLink>
    </div>
  </div>
</template>
