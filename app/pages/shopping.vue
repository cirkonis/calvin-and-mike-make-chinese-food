<script setup lang="ts">
import { shoppingList } from '~/data/content'

definePageMeta({ layout: 'default' })
useHead({ title: 'Shopping' })

const { load, state } = useCheckboxes()
await useAsyncData('checkboxes', () => load(), { server: false })

const allKeys = shoppingList.flatMap(cat => cat.items.map(i => i.key))
const checkedCount = computed(() => allKeys.filter(k => state.value[k]).length)
const total = allKeys.length
</script>

<template>
  <main class="mx-auto max-w-2xl px-4 py-6 flex flex-col gap-6">
    <div class="flex items-end justify-between gap-4">
      <div>
        <h1 class="text-2xl font-black tracking-tight">🛒 Shopping Mode</h1>
        <p class="text-muted-foreground text-sm mt-0.5">Check things off as you grab them</p>
      </div>
      <div class="shrink-0 text-right">
        <div class="text-2xl font-black tabular-nums" :class="checkedCount === total ? 'text-green-600' : 'text-primary'">
          {{ checkedCount }}<span class="text-muted-foreground font-normal text-lg">/{{ total }}</span>
        </div>
        <div class="text-xs text-muted-foreground">items got</div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <div
        v-for="category in shoppingList"
        :key="category.title"
        class="border border-border rounded-xl overflow-hidden bg-card"
      >
        <div class="px-4 py-2.5 bg-secondary/60 border-b border-border">
          <span class="font-semibold text-sm">{{ category.title }}</span>
        </div>
        <div class="divide-y divide-border/60">
          <CheckItem
            v-for="item in category.items"
            :key="item.key"
            :cb-key="item.key"
            :label="item.label"
            :note="item.note"
          />
        </div>
      </div>
    </div>
  </main>
</template>
