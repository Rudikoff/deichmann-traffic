<script setup>
import { slides } from '@/data/slides'

defineProps({
  total: { type: Number, required: true },
  current: { type: Number, required: true },
})

const emit = defineEmits(['goTo'])

// SVG-иконки для каждого типа слайда
const iconPaths = {
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
  tools: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  chart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  store: '<path d="M3 9l1-5h16l1 5"/><path d="M4 9v11h16V9"/><path d="M9 13h6"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
  list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
}

function getIcon(name) {
  return iconPaths[name] || iconPaths.chart
}
</script>

<template>
  <div class="nav">
    

    <!-- Иконки слайдов -->
    <div class="nav__dots">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="nav__dot"
        :class="{ 'nav__dot--active': index === current }"
        @click="emit('goTo', index)"
        :aria-label="slide.title"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="getIcon(slide.icon)" />
        <span class="nav__tooltip">{{ slide.title }}</span>
      </button>
    </div>


  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.nav {
  position: fixed;
  right: clamp(16px, 2vw, 32px);
  top: 45%;
  transform: translateY(-50%);
  z-index: 90;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__dot {
    position: relative;
    width: clamp(36px, 2.5vw, 40px);
    height: clamp(36px, 2.5vw, 40px);
    display: flex;
    align-items: center;
    justify-content: center;

    /* Отступ СНИЗУ каждой кнопки, кроме последней */
    margin-bottom: 20px;

    background: rgba(255, 255, 255, 0.08);
    border: none;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.55);
    cursor: pointer;
    padding: 0;

    transition: background 0.35s ease, color 0.35s ease;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      width: 16px;
      height: 16px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.18);
      color: $color-white;

      .nav__tooltip {
        opacity: 1;
        transform: translateX(-6px) translateY(-50%);
        pointer-events: auto;
      }
    }

    &--active {
      background: $color-accent;
      border-color: $color-accent;
      color: $color-white;
      transform: scale(1.2);
      

      &:hover {
        background: $color-accent;
        transform: scale(1.25);
        animation: none;  // ← убираем мерцание при hover
      }
    }
  }

  &__tooltip {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateX(0) translateY(-50%);
    margin-right: 8px;
    padding: 6px 10px;

    background: $color-white;
    color: $color-text-dark;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;

    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 5px solid transparent;
      border-left-color: $color-white;
    }
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>