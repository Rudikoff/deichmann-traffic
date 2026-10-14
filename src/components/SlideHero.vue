<script setup>
import { getImage } from '@/utils/images'

defineProps({ data: { type: Object, required: true } })
const emit = defineEmits(['goToSlide'])
</script>

<template>
  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__title">{{ data.title }}</h1>
      <p class="hero__subtitle">{{ data.subtitle }}</p>
      <p class="hero__description">{{ data.description }}</p>

      <div class="hero__stats-wrapper">
        <span class="hero__corner hero__corner--tl"></span>
        <span class="hero__corner hero__corner--tr"></span>
        <span class="hero__corner hero__corner--bl"></span>
        <span class="hero__corner hero__corner--br"></span>

        <div class="hero__stats">
          <div v-for="stat in data.stats" :key="stat.label" class="hero__stat">
            <span class="hero__stat-value">{{ stat.value }}</span>
            <span class="hero__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <button class="hero__cta" @click="emit('goToSlide', 'contacts')">
        {{ data.cta.text }}
      </button>
    </div>

    <div class="hero__photo">
      <img :src="getImage(data.photo)" :alt="data.title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: clamp(40px, 4vw, 60px) clamp(40px, 5vw, 100px);
  gap: clamp(40px, 5vw, 80px);
  overflow: hidden;

  &__title {
    font-size: clamp(48px, 5.5vw, 96px);
    color: $color-white;
    margin-bottom: clamp(12px, 1.5vw, 24px);
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &__subtitle {
    font-size: clamp(20px, 2vw, 34px);
    color: $color-accent;
    margin-bottom: clamp(16px, 2vw, 32px);
    line-height: 1.2;
  }

  &__description {
    font-size: clamp(15px, 1.2vw, 19px);
    color: $color-light-gray;
    opacity: 0.8;
    margin-bottom: clamp(24px, 3vw, 48px);
    max-width: 600px;
    line-height: 1.5;
  }

  &__stats {
    display: flex;
    gap: clamp(24px, 3vw, 48px);
    flex-wrap: wrap;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: clamp(4px, 0.5vw, 8px);
  }

  &__stat-value {
    font-size: clamp(36px, 3.5vw, 64px);
    font-weight: 700;
    color: $color-accent;
    line-height: 1;
  }

  &__stat-label {
    font-size: clamp(13px, 1vw, 16px);
    color: $color-light-gray;
    opacity: 0.7;
  }

  &__cta {
    background: $color-accent;
    color: $color-white;
    border: none;
    padding: clamp(14px, 1.3vw, 20px) clamp(28px, 2.5vw, 48px);
    font-size: clamp(15px, 1.1vw, 18px);
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease;
    font-family: inherit;
    border-radius: 6px;

    &:hover {
      transform: translateY(-3px);
    }
  }

  &__photo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: 16px;
      object-fit: cover;
    }
  }
  
  &__stats-wrapper {
    position: relative;
    display: inline-block;
    padding: 24px 32px 24px 24px;
    margin-bottom: clamp(24px, 3vw, 48px);
  }

  &__corner {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1.5px solid $color-accent;
    opacity: 0.5;

    &--tl {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }

    &--tr {
      top: 0;
      right: 0;
      border-left: none;
      border-bottom: none;
    }

    &--bl {
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
    }

    &--br {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
    }
  }

}
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 24px;

    &__title {
      font-size: 36px;
    }

    &__subtitle {
      font-size: 18px;
    }

    &__description {
      font-size: 14px;
      margin-bottom: 20px;
    }

    &__stats {
      gap: 20px;
      margin-bottom: 20px;
    }

    &__stat-value {
      font-size: 28px;
    }

    &__cta {
      width: 100%;
      padding: 14px 24px;
    }

    &__photo {
      display: none;
    }
  }
}
</style>