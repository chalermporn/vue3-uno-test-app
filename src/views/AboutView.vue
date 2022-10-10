<template>
  <transition name="slide-left">
    <div class="about">
      <h1 class="custom-shortcut">This is an about page</h1>
    </div>
  </transition>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
