<script setup lang="ts">
const { data, refresh } = await useFetch(`/api/counter`)

async function increment() {
  await $fetch(`/api/counter`, { method: 'POST' })
  refresh()
}
</script>

<template>
  <div class="container">
    <h1>Server-side Counter</h1>
    <p class="count">{{ data?.count }}</p>
    <button @click="increment">Increment</button>
    <p class="hint">The counter state lives on the server. Refresh the page or open in another tab to verify.</p>
    <p class="hint">This is a test comment</p>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: system-ui, sans-serif;
}

.count {
  font-size: 4rem;
  font-weight: bold;
  margin: 1rem 0;
}

button {
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  background: #00dc82;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-weight: 600;
}

button:hover {
  background: #00b368;
}

.hint {
  margin-top: 2rem;
  color: #666;
  font-size: 0.875rem;
  text-align: center;
  max-width: 300px;
}
</style>
