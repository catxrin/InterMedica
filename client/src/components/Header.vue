<script setup></script>

<template>
  <header class="bg-white shadow-lg py-4 sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between px-4">
      <a href="#" class="flex items-center text-primary justify-center hover:text-secondary">
        <span class="text-xl font-light text-shadow-sm text-green-600">InterMedica</span>
      </a>
      <span class="material-symbols-outlined md:hidden! block!"> menu </span>
      <nav class="hidden md:block">
        <ul class="flex gap-5">
          <RouterLink to="/login" class="rounded bg-green-600/5 text-green-700 shadow-sm py-1 px-3 font-base"
            >Login</RouterLink
          >
          <RouterLink to="/register" class="rounded bg-green-600/5 text-green-700 shadow-sm py-1 px-3"
            >Register</RouterLink
          >
        </ul>
      </nav>
    </div>
  </header>
</template>
