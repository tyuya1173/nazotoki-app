<template>
    <div class="overlay" @click.self="emit('close')">
      <div class="dialog">
        <p class="dialog-message">{{ message }}</p>
        <button class="dialog-button" @click="emit('close')">OK</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits<{
    (e: 'close'): void
  }>()
  
  defineProps<{
    message: string
  }>()
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .dialog {
    background-color: white;
    padding: 2rem 3rem;
    border-radius: 12px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    animation: pop-in 0.3s ease;
  }
  
  .dialog-message {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .dialog-button {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .dialog-button:hover {
    background-color: #0056b3;
  }
  
  @keyframes pop-in {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>