<script setup>
import { getImage } from '@/utils/images'
defineProps({
  data: { type: Object, required: true },
  isActive: { type: Boolean, default: false }
})
const emit = defineEmits(['goToSlide'])
</script>

<template>
  <div class="content">
    <div class="content__left">
      <h2 class="content__title">{{ data.title }}</h2>
      <div class="content__divider"></div>
      <p class="content__subtitle">{{ data.subtitle }}</p>

      <p v-if="data.quote" class="content__quote">{{ data.quote }}</p>
      <p v-if="data.description" class="content__description">{{ data.description }}</p>

      <ul v-if="data.tools" class="content__tools">
        <li v-for="tool in data.tools" :key="tool.text" class="content__tool">
          {{ tool.text }}
        </li>
      </ul>

      <button v-if="data.cta" class="content__cta" @click="emit('goToSlide', 'contacts')">
        {{ data.cta.text }}
      </button>
    </div>

    <div v-if="data.photo" class="content__right">
      <img :src="getImage(data.photo)" :alt="data.title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  width: 100%;
  min-height: 100%;
  align-items: center;
  padding: clamp(32px, 4vw, 80px);
  gap: clamp(32px, 4vw, 64px);
  overflow-x: hidden;

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* УДАЛЕНО: max-height: 100% */
  }

  &__title {
    font-size: clamp(32px, 3.2vw, 56px);
    color: $color-white;
    margin-bottom: clamp(8px, 1vw, 16px);
    line-height: 1.1;
    font-weight: 700;
  }

  &__subtitle {
    font-size: clamp(14px, 1.1vw, 18px);
    color: $color-light-gray;
    opacity: 0.8;
    margin-bottom: clamp(16px, 1.8vw, 28px);
    line-height: 1.4;
  }

  &__quote {
    font-size: clamp(16px, 1.4vw, 24px);
    color: $color-accent;
    font-style: italic;
    margin-bottom: clamp(16px, 1.8vw, 28px);
    border-left: 4px solid $color-accent;
    padding-left: clamp(12px, 1.5vw, 24px);
    line-height: 1.3;
  }

  &__description {
    font-size: clamp(13px, 0.95vw, 16px);
    color: $color-light-gray;
    opacity: 0.8;
    margin-bottom: clamp(16px, 1.8vw, 28px);
    line-height: 1.5;
  }

  &__tools {
    list-style: none;
    margin-bottom: clamp(20px, 2.5vw, 40px);
  }

  &__tool {
    font-size: clamp(13px, 0.95vw, 16px);
    color: $color-light-gray;
    padding: clamp(6px, 0.7vw, 10px) 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    line-height: 1.3;

    &::before {
      content: '→ ';
      color: $color-accent;
      font-weight: 700;
    }
  }

  &__cta {
    background: $color-accent;
    color: $color-white;
    border: none;
    padding: clamp(12px, 1.2vw, 18px) clamp(24px, 2.5vw, 40px);
    font-size: clamp(14px, 1vw, 16px);
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease;
    font-family: inherit;
    border-radius: 6px;
    align-self: flex-start;

    &:hover {
      transform: translateY(-3px);
    }
  }

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 70vh;
      border-radius: 12px;
      object-fit: contain;  // ← contain, чтобы код не обрезался
      border: 1px solid rgba(249, 115, 22, 0.2);  // тонкая оранжевая рамка
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);  // глубокая тень
    }
  }
  &__divider {
    width: 100px;
    height: 1px;
    background: $color-accent;
    margin-bottom: clamp(12px, 1.5vw, 20px);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: $color-accent;
      box-shadow: 0 0 12px $color-accent;
      opacity: 0.5;
    }
  }
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
    padding: 24px 20px 60px;
    gap: 24px;
    align-items: center;

    &__title {
      font-size: 28px;
    }

    &__subtitle {
      font-size: 14px;
    }

    &__quote {
      font-size: 16px;
      padding-left: 12px;
    }

    &__tool {
      font-size: 13px;
      padding: 8px 0;
    }

    &__cta {
      width: 100%;
    }

    &__right {
      display: none;
    }
  }
}
</style>