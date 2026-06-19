<script setup lang="ts">
const route = useRoute()
const links = [
  { href: '/shopping', label: 'Shopping' },
  { href: '/gameplan', label: 'Game Plan' },
  { href: '/recipes', label: 'Recipes' },
]
</script>

<template>
  <div class="min-h-dvh bg-background text-foreground antialiased">
    <header class="sticky top-0 z-40 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div class="mx-auto max-w-2xl flex items-center justify-between gap-2 px-4 py-3">
        <NuxtLink href="/" class="font-bold text-primary text-sm tracking-tight shrink-0">
          🥡 Mike & Calvin
        </NuxtLink>
        <nav class="flex items-center gap-1">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
            :class="route.path === link.href
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>
