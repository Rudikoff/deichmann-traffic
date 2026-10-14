<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { slides } from '@/data/slides'


import ScrollIndicator from '@/components/ScrollIndicator.vue'
import FloatingCTA from '@/components/FloatingCTA.vue'
import SlideHero from '@/components/SlideHero.vue'
import SlideContent from '@/components/SlideContent.vue'
import SlideCases from '@/components/SlideCases.vue'
import SlideServices from '@/components/SlideServices.vue'
import SlideContacts from '@/components/SlideContacts.vue'

const currentSlide = ref(0)
const isAnimating = ref(false)
const slidesRefs = ref([])

const componentMap = {
  hero: SlideHero,
  content: SlideContent,
  cases: SlideCases,
  services: SlideServices,
  contacts: SlideContacts
}

function getComponent(type) {
  return componentMap[type] || SlideContent
}

function goToSlide(id) {
  const index = slides.findIndex(s => s.id === id)
  if (index !== -1 && index !== currentSlide.value) {
    animateTo(index)
  }
}

function animateTo(index) {
  if (isAnimating.value) return
  isAnimating.value = true
  currentSlide.value = index
  setTimeout(() => {
    isAnimating.value = false
  }, 900)
}

// Проверка: докручен ли слайд до низа / верха
function isAtBottom(el) {
  if (!el) return true
  return el.scrollTop + el.clientHeight >= el.scrollHeight - 2
}

function isAtTop(el) {
  if (!el) return true
  return el.scrollTop <= 2
}

// === КОЛЁСИКО (десктоп) ===
function handleWheel(event) {
  if (isAnimating.value) return

  const activeSlide = slidesRefs.value[currentSlide.value]
  if (!activeSlide) return

  // Вниз
  if (event.deltaY > 0) {
    if (isAtBottom(activeSlide) && currentSlide.value < slides.length - 1) {
      animateTo(currentSlide.value + 1)
    }
  }
  // Вверх
  else if (event.deltaY < 0) {
    if (isAtTop(activeSlide) && currentSlide.value > 0) {
      animateTo(currentSlide.value - 1)
    }
  }
}

// === КЛАВИАТУРА ===
function handleKeydown(event) {
  const activeSlide = slidesRefs.value[currentSlide.value]
  if (!activeSlide) return

  if (event.key === 'ArrowDown' && isAtBottom(activeSlide) && currentSlide.value < slides.length - 1) {
    animateTo(currentSlide.value + 1)
  } else if (event.key === 'ArrowUp' && isAtTop(activeSlide) && currentSlide.value > 0) {
    animateTo(currentSlide.value - 1)
  }
}

// === СВАЙПЫ (мобильные) ===
let touchStartX = 0
let touchStartY = 0
let touchStartTime = 0
let wasAtBottomOnStart = false
let wasAtTopOnStart = false

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX
  touchStartY = event.touches[0].clientY
  touchStartTime = Date.now()

  // Запоминаем, был ли слайд в крайней точке НА МОМЕНТ СТАРТА свайпа
  const activeSlide = slidesRefs.value[currentSlide.value]
  wasAtBottomOnStart = activeSlide ? isAtBottom(activeSlide) : false
  wasAtTopOnStart = activeSlide ? isAtTop(activeSlide) : false
}

function handleTouchEnd(event) {
  if (isAnimating.value) return

  const touchEndX = event.changedTouches[0].clientX
  const touchEndY = event.changedTouches[0].clientY
  const touchEndTime = Date.now()

  const deltaX = touchStartX - touchEndX
  const deltaY = touchStartY - touchEndY
  const deltaTime = touchEndTime - touchStartTime

  const absX = Math.abs(deltaX)
  const absY = Math.abs(deltaY)
  const velocity = Math.max(absX, absY) / deltaTime

  // === ГОРИЗОНТАЛЬНЫЙ СВАЙП ===
  const isHorizontal = absX > absY * 1.5
  const isFastEnough = velocity > 0.3 || absX > 80

  if (isHorizontal && isFastEnough) {
    if (deltaX > 0 && currentSlide.value < slides.length - 1) {
      animateTo(currentSlide.value + 1)
    } else if (deltaX < 0 && currentSlide.value > 0) {
      animateTo(currentSlide.value - 1)
    }
    return
  }

  // === ВЕРТИКАЛЬНЫЙ СВАЙП ===
  const isVertical = absY > absX * 1.5
  if (!isVertical) return

  // Свайп вверх (deltaY > 0) → следующий слайд
  // Только если НА СТАРТЕ свайпа слайд был внизу
  if (deltaY > 30 && currentSlide.value < slides.length - 1) {
    if (wasAtBottomOnStart) {
      animateTo(currentSlide.value + 1)
    }
  }
  // Свайп вниз (deltaY < 0) → предыдущий слайд
  // Только если НА СТАРТЕ свайпа слайд был вверху
  else if (deltaY < -30 && currentSlide.value > 0) {
    if (wasAtTopOnStart) {
      animateTo(currentSlide.value - 1)
    }
  }
}
const showFloatingCTA = computed(() => {
  const current = slides[currentSlide.value]
  return current && current.id !== 'contacts'
})

const slideNumber = computed(() => {
  return String(currentSlide.value + 1).padStart(2, '0')
})

const totalSlides = computed(() => {
  return String(slides.length).padStart(2, '0')
})

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchend', handleTouchEnd, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchend', handleTouchEnd)
})
</script>

<template>
  <div class="slides-container">
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      :ref="el => slidesRefs[index] = el"
      class="slide"
      :class="{
        'slide--active': index === currentSlide,
        'slide--prev': index < currentSlide,
        'slide--next': index > currentSlide
      }"
    >
      <component :is="getComponent(slide.type)" :data="slide" @go-to-slide="goToSlide" />
    </div>

    <FloatingCTA
      :visible="showFloatingCTA"
      @click="goToSlide('contacts')"
    />
    <ScrollIndicator
      :total="slides.length"
      :current="currentSlide"
      @go-to="animateTo"
    />
  </div>
  <div class="frame">
    <span class="frame__corner frame__corner--tl"></span>
    <span class="frame__corner frame__corner--tr"></span>
    <span class="frame__corner frame__corner--bl"></span>
    <span class="frame__corner frame__corner--br"></span>
  </div>
  <div class="brand-label">
    <span class="brand-label__text">ДАЙХМАНН ТРАФИК</span>
    <span class="brand-label__counter">{{ slideNumber }} / {{ totalSlides }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.slides-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: $color-graphite;

  /* Сетка на фоне */
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: 0 0;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  will-change: transform, opacity;
  transition:
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1);

  &--active {
    transform: translateX(0);
    opacity: 1;
    z-index: 2;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  &--prev {
    transform: translateX(-100%) scale(0.95);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }

  &--next {
    transform: translateX(100%) scale(0.95);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }

}
.frame {
  position: fixed;
  inset: 20px;
  pointer-events: none;
  z-index: 80;

  /* Тонкая рамка */
  border: 1px solid rgba(249, 115, 22, 0.15);

  &__corner {
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid $color-accent;

    &--tl {
      top: -1px;
      left: -1px;
      border-right: none;
      border-bottom: none;
    }

    &--tr {
      top: -1px;
      right: -1px;
      border-left: none;
      border-bottom: none;
    }

    &--bl {
      bottom: -1px;
      left: -1px;
      border-right: none;
      border-top: none;
    }

    &--br {
      bottom: -1px;
      right: -1px;
      border-left: none;
      border-top: none;
    }
  }
}
.brand-label {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 85;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 4px;

  font-family: $font-mono;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  &__text {
    color: rgba(255, 255, 255, 0.4);
  }

  &__counter {
    color: $color-accent;
  }
}

@media (max-width: 768px) {
  .brand-label {
    top: 24px;
    left: 24px;
    font-size: 9px;

    &__text {
      display: none;
    }
  }
}
@media (max-width: 768px) {
  .frame {
    inset: 12px;
    border-color: rgba(249, 115, 22, 0.1);

    &__corner {
      width: 12px;
      height: 12px;
      border-width: 1.5px;
    }
  }
}
</style>