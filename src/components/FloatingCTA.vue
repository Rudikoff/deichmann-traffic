<script setup>
defineProps({
  visible: { type: Boolean, default: true }
})

const emit = defineEmits(['click'])
</script>

<template>
  <Transition name="fade">
    <button
      v-if="visible"
      class="floating-cta"
      @click="emit('click')"
    >
      <span class="floating-cta__indicator">
        <span class="floating-cta__dot"></span>
        <span class="floating-cta__ring"></span>
      </span>
      <span class="floating-cta__text">Обсудить проект</span>
    </button>
  </Transition>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.floating-cta {
  position: fixed;
  right: clamp(16px, 3vw, 40px);
  bottom: clamp(16px, 3vw, 40px);
  z-index: 100;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: clamp(12px, 1.3vw, 18px) clamp(20px, 2vw, 28px);

  background: $color-accent;
  color: $color-white;
  border: none;
  border-radius: 50px;

  font-family: inherit;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 600;
  cursor: pointer;

  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.4);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(249, 115, 22, 0.6);
  }

  &__indicator {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  &__dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: $color-white;
    border-radius: 50%;
    z-index: 2;
    animation: dot-pulse 2s ease-in-out infinite;
  }

  &__ring {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid $color-white;
    border-radius: 50%;
    opacity: 0;
    z-index: 1;
    animation: ring-pulse 2s ease-out infinite;
  }

  &__text {
    white-space: nowrap;
  }
}

@keyframes dot-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.8;
  }
}

@keyframes ring-pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>