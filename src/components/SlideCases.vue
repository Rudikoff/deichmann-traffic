<script setup>
import { getImage } from '@/utils/images'

defineProps({ data: { type: Object, required: true } })
const emit = defineEmits(['goToSlide'])
</script>

<template>
  <div class="cases">
    <h2 class="cases__title">{{ data.title }}</h2>

    <div class="cases__grid">
      <div v-for="item in data.cases" :key="item.id" class="cases__card">
        <img v-if="item.logo" :src="getImage(item.logo)" :alt="item.title" class="cases__logo" />
        <p class="cases__niche">{{ item.niche }}</p>

        <div class="cases__stats">
          <div v-for="stat in item.stats" :key="stat.label" class="cases__stat">
            <span class="cases__stat-value">{{ stat.value }}</span>
            <span class="cases__stat-label">{{ stat.label }}</span>
          </div>
        </div>

        <button class="cases__cta" @click="emit('goToSlide', 'contacts')">
          {{ item.cta.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.cases {
  width: 100%;
  min-height: 100%;
  padding: clamp(32px, 4vw, 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;

  &__title {
    font-size: clamp(32px, 3.2vw, 56px);
    color: $color-white;
    text-align: center;
    margin-bottom: clamp(20px, 2.5vw, 40px);
    line-height: 1.1;
    font-weight: 700;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(12px, 1.2vw, 20px);
    /* УДАЛЕНО: max-height: 70vh */
  }

  &__card {
    background: $color-white;
    border-radius: 14px;
    padding: clamp(18px, 1.8vw, 32px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(249, 115, 22, 0.15);
    }
  }

  &__logo {
    max-height: clamp(32px, 3vw, 48px);
    max-width: 200px;
    margin-bottom: clamp(8px, 1vw, 14px);
    object-fit: contain;
    object-position: left;
  }

  &__niche {
    font-size: clamp(12px, 0.9vw, 14px);
    color: $color-text-dark;
    opacity: 0.6;
    margin-bottom: clamp(10px, 1.2vw, 18px);
  }

  &__stats {
    display: flex;
    gap: clamp(12px, 1.5vw, 24px);
    margin-bottom: clamp(12px, 1.5vw, 20px);
    flex-wrap: wrap;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__stat-value {
    font-size: clamp(18px, 1.5vw, 26px);
    font-weight: 700;
    color: $color-accent;
    line-height: 1;
  }

  &__stat-label {
    font-size: clamp(10px, 0.8vw, 12px);
    color: $color-text-dark;
    opacity: 0.7;
  }

  &__cta {
    background: transparent;
    color: $color-accent;
    border: 1px solid $color-accent;
    padding: clamp(8px, 0.8vw, 12px) clamp(16px, 1.5vw, 24px);
    font-size: clamp(12px, 0.9vw, 14px);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    border-radius: 6px;
    align-self: flex-start;
    margin-top: auto;

    &:hover {
      background: $color-accent;
      color: $color-white;
    }
  }
}

@media (max-width: 768px) {
  .cases {
    padding: 20px 20px 60px;
    justify-content: flex-start;

    &__title {
      font-size: 28px;
      margin-bottom: 16px;
    }

    &__grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    &__card {
      padding: 16px;
    }

    &__logo {
      max-height: 32px;
    }

    &__stat-value {
      font-size: 18px;
    }

    &__cta {
      width: 100%;
    }
  }
}
</style>