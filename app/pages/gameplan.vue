<script setup lang="ts">
import { gamePlan } from '~/data/content'

definePageMeta({ layout: 'default' })
useHead({ title: 'Game Plan' })

const { load, state } = useCheckboxes()
await useAsyncData('checkboxes', () => load(), { server: false })

const allKeys = gamePlan.flatMap(p => p.steps.map(s => s.key))
const checkedCount = computed(() => allKeys.filter(k => state.value[k]).length)
const total = allKeys.length

const openPhases = ref<Set<string>>(new Set(['pre-prep']))

function togglePhase(id: string) {
  const next = new Set(openPhases.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  openPhases.value = next
}

function phaseCheckedCount(phase: typeof gamePlan[0]) {
  return phase.steps.filter(s => state.value[s.key]).length
}
</script>

<template>
  <main class="mx-auto max-w-2xl px-4 py-6 flex flex-col gap-6">
    <div class="flex items-end justify-between gap-4">
      <div>
        <h1 class="text-2xl font-black tracking-tight">📋 Game Plan Mode</h1>
        <p class="text-muted-foreground text-sm mt-0.5">Who does what, and when — tap to check off</p>
      </div>
      <div class="shrink-0 text-right">
        <div class="text-2xl font-black tabular-nums" :class="checkedCount === total ? 'text-green-600' : 'text-primary'">
          {{ checkedCount }}<span class="text-muted-foreground font-normal text-lg">/{{ total }}</span>
        </div>
        <div class="text-xs text-muted-foreground">steps done</div>
      </div>
    </div>

    <div class="flex gap-3 text-xs flex-wrap">
      <span class="flex items-center gap-1.5">
        <span class="w-3 h-3 rounded bg-blue-100 border border-blue-200 inline-block" />
        <span class="text-muted-foreground">Mike</span>
      </span>
      <span class="flex items-center gap-1.5">
        <span class="w-3 h-3 rounded bg-amber-100 border border-amber-200 inline-block" />
        <span class="text-muted-foreground">Calvin</span>
      </span>
      <span class="flex items-center gap-1.5">
        <span class="w-3 h-3 rounded bg-purple-100 border border-purple-200 inline-block" />
        <span class="text-muted-foreground">Both</span>
      </span>
    </div>

    <div class="flex flex-col gap-3">
      <div
        v-for="phase in gamePlan"
        :key="phase.id"
        class="border border-border rounded-xl overflow-hidden bg-card"
      >
        <button
          type="button"
          class="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-accent/40 transition-colors"
          @click="togglePhase(phase.id)"
        >
          <div class="min-w-0">
            <div class="font-semibold text-foreground leading-snug">{{ phase.title }}</div>
            <div v-if="phase.subtitle" class="text-xs text-muted-foreground mt-0.5">{{ phase.subtitle }}</div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-xs tabular-nums text-muted-foreground">
              {{ phaseCheckedCount(phase) }}/{{ phase.steps.length }}
            </span>
            <svg
              class="size-4 text-muted-foreground transition-transform"
              :class="openPhases.has(phase.id) && 'rotate-180'"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </button>

        <div v-if="openPhases.has(phase.id)" class="border-t border-border divide-y divide-border/60">
          <CheckItem
            v-for="step in phase.steps"
            :key="step.key"
            :cb-key="step.key"
            :label="step.task"
            :note="step.note"
            :who="step.who"
            :recipe-link="step.recipeLink"
          />
        </div>
      </div>
    </div>
  </main>
</template>
