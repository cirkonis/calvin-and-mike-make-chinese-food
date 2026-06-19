<script setup lang="ts">
import { recipes } from '~/data/content'

definePageMeta({ layout: 'default' })
useHead({ title: 'Recipes' })

const { load } = useCheckboxes()
await useAsyncData('checkboxes', () => load(), { server: false })

const route = useRoute()
const openRecipes = ref<Set<string>>(new Set())
const openSections = ref<Set<string>>(new Set())

onMounted(() => {
  const hash = route.hash.slice(1)
  if (!hash) return

  for (const recipe of recipes) {
    if (hash === recipe.id) {
      openRecipes.value.add(recipe.id)
    }
    for (const section of recipe.sections) {
      if (hash === section.id) {
        openRecipes.value.add(recipe.id)
        openSections.value.add(section.id)
      }
    }
  }

  nextTick(() => {
    const el = document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

function toggleRecipe(id: string) {
  const next = new Set(openRecipes.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  openRecipes.value = next
}

function toggleSection(id: string) {
  const next = new Set(openSections.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  openSections.value = next
}
</script>

<template>
  <main class="mx-auto max-w-2xl px-4 py-6 flex flex-col gap-6">
    <div>
      <h1 class="text-2xl font-black tracking-tight">📖 Recipe Mode</h1>
      <p class="text-muted-foreground text-sm mt-0.5">
        All five recipes — ingredients and steps. Everything has a checkbox so you can go off-script.
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        :id="recipe.id"
        class="border border-border rounded-xl overflow-hidden bg-card"
      >
        <!-- Recipe Header -->
        <button
          type="button"
          class="w-full flex items-center justify-between gap-3 px-4 py-4 text-left hover:bg-accent/40 transition-colors"
          @click="toggleRecipe(recipe.id)"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ recipe.emoji }}</span>
            <span class="font-bold text-lg text-foreground">{{ recipe.title }}</span>
          </div>
          <svg
            class="size-5 text-muted-foreground transition-transform shrink-0"
            :class="openRecipes.has(recipe.id) && 'rotate-180'"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <!-- Recipe Sections -->
        <div v-if="openRecipes.has(recipe.id)" class="border-t border-border flex flex-col divide-y divide-border/60">
          <div
            v-for="section in recipe.sections"
            :key="section.id"
            :id="section.id"
          >
            <!-- Section Header -->
            <button
              type="button"
              class="w-full flex items-center justify-between gap-2 px-4 py-3 text-left bg-secondary/40 hover:bg-secondary/70 transition-colors"
              @click="toggleSection(section.id)"
            >
              <span class="font-semibold text-sm text-foreground">{{ section.title }}</span>
              <svg
                class="size-4 text-muted-foreground transition-transform shrink-0"
                :class="openSections.has(section.id) && 'rotate-180'"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div v-if="openSections.has(section.id)" class="divide-y divide-border/40">
              <!-- Ingredients -->
              <div v-if="section.ingredients?.length" class="flex flex-col">
                <div class="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold bg-background/60">
                  Ingredients
                </div>
                <div class="divide-y divide-border/40">
                  <CheckItem
                    v-for="ing in section.ingredients"
                    :key="ing.key"
                    :cb-key="ing.key"
                    :label="ing.item"
                  />
                </div>
              </div>

              <!-- Steps -->
              <div v-if="section.steps?.length" class="flex flex-col">
                <div class="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold bg-background/60">
                  Steps
                </div>
                <div class="divide-y divide-border/40">
                  <CheckItem
                    v-for="(step, i) in section.steps"
                    :key="step.key"
                    :cb-key="step.key"
                    :label="`${i + 1}. ${step.text}`"
                    :note="step.note"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
