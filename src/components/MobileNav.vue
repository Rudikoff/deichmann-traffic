<script setup>
import { ref } from 'vue'
import { slides } from '@/data/slides'

const isOpen = ref(false)

const emit = defineEmits(['goTo'])

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function goToSlide(index) {
  emit('goTo', index)
  close()
}

// Те же SVG-иконки, что в ScrollIndicator
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
  <!-- Кнопка-бургер -->
  <button
    class="mobile-nav__toggle"
    :class="{ 'mobile-nav__toggle--open': isOpen }"
    @click="toggle"
    aria-label="Меню навигации"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- Выезжающая панель -->
  <Transition name="slide-down">
    <div v-if="isOpen" class="mobile-nav__panel">
      <div class="mobile-nav__scroll">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="mobile-nav__item"
          @click="goToSlide(index)"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="getIcon(slide.icon)"
          />
          <span>{{ slide.title }}</span>
        </button>
      </div>
    </div>
  </Transition>

  <!-- Оверлей (затемнение при открытом меню) -->
  <Transition name="fade">
    <div v-if="isOpen" class="mobile-nav__overlay" @click="close"></div>
  </Transition>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

/* === КНОПКА-БУРГЕР === */
.mobile-nav__toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 200;

  width: 31px;
  height: 31px;
  display: none; /* Скрыта на десктопе */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  cursor: pointer;
  padding: 0;

  transition: all 0.3s ease;

  span {
    display: block;
    width: 14px;
    height: 2px;
    background: $color-accent;
    border-radius: 1px;
    transition: all 0.3s ease;
  }

  &--open {
    span:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

/* === ПАНЕЛЬ === */
.mobile-nav__panel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 190;

  height: 20vh;
  min-height: 120px;
  max-height: 160px;

  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(249, 115, 22, 0.2);

  padding: 20px 20px 20px 20px;
  padding-top: 80px; /* Отступ под кнопку-бургер */
}

.mobile-nav__scroll {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100%;
  align-items: center;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
}

.mobile-nav__item {
  flex-shrink: 0;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 16px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);

  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;

  transition: all 0.3s ease;

  &:hover,
  &:active {
    background: $color-accent;
    border-color: $color-accent;
    color: $color-white;
  }

  svg {
    flex-shrink: 0;
  }
}

/* === ОВЕРЛЕЙ === */
.mobile-nav__overlay {
  position: fixed;
  inset: 0;
  z-index: 180;
  background: rgba(0, 0, 0, 0.5);
}

/* === АНИМАЦИИ === */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* === ПОКАЗЫВАЕМ ТОЛЬКО НА МОБИЛЬНЫХ === */
@media (max-width: 768px) {
  .mobile-nav__toggle {
    display: flex;
  }
}
</style>