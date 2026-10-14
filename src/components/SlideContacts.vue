<script setup>
import { getImage } from '@/utils/images'

defineProps({ data: { type: Object, required: true } })
</script>

<template>
  <div class="contacts">
    <div class="contacts__left">
      <h2 class="contacts__name">{{ data.name }}</h2>
      <p class="contacts__tagline">{{ data.tagline }}</p>
      <a :href="`tel:${data.phone.replace(/\D/g, '')}`" class="contacts__phone">
        {{ data.phone }}
      </a>

      <div class="contacts__qr">
        <p class="contacts__qr-label">Форма появится здесь (Этап 4)</p>
      </div>
    </div>

    <div class="contacts__right">
      <img :src="getImage(data.photo)" :alt="data.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.contacts {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  width: 100%;
  min-height: 100%;
  align-items: center;
  padding: clamp(40px, 5vw, 100px);
  gap: clamp(40px, 5vw, 80px);
  overflow: hidden;

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__name {
    font-size: clamp(40px, 4vw, 72px);
    color: $color-white;
    margin-bottom: clamp(16px, 2vw, 32px);
    line-height: 1.05;
    font-weight: 700;
  }

  &__tagline {
    font-size: clamp(16px, 1.3vw, 22px);
    color: $color-light-gray;
    opacity: 0.8;
    margin-bottom: clamp(24px, 2.5vw, 40px);
    line-height: 1.4;
  }

  &__phone {
    display: inline-block;
    font-size: clamp(28px, 2.5vw, 44px);
    color: $color-accent;
    text-decoration: none;
    font-weight: 700;
    margin-bottom: clamp(32px, 3vw, 56px);
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  &__qr {
    padding: clamp(16px, 1.5vw, 28px);
    border: 1px dashed rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  &__qr-label {
    font-size: clamp(12px, 0.9vw, 15px);
    color: $color-light-gray;
    opacity: 0.5;
  }

  &__right {
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
}
@media (max-width: 768px) {
  .contacts {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 24px;

    &__name {
      font-size: 28px;
    }

    &__tagline {
      font-size: 14px;
    }

    &__phone {
      font-size: 24px;
      margin-bottom: 20px;
    }

    &__right {
      display: none;
    }
  }
}
</style>