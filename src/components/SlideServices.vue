<script setup>
import { ref } from 'vue'
import ServiceModal from '@/components/ServiceModal.vue'

const props = defineProps({ data: { type: Object, required: true } })
const emit = defineEmits(['goToSlide'])

const selectedService = ref(null)
const modalVisible = ref(false)

function openModal(service) {
  selectedService.value = service
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
  selectedService.value = null
}

function goToCases(slideId) {
  closeModal()
  emit('goToSlide', slideId)
}

function goToContacts() {
  closeModal()
  emit('goToSlide', 'contacts')
}
</script>

<template>
  <div class="services">
    <h2 class="services__title">{{ data.title }}</h2>

    <div class="services__grid">
      <div v-for="service in data.services" :key="service.num" class="services__item"  @click="openModal(service)">
        <span class="services__num">{{ service.num }}</span>
        <h3 class="services__item-title">{{ service.title }}</h3>
        <p class="services__item-subtitle">{{ service.subtitle }}</p>
        <span class="services__item-arrow" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </div>


    <button class="services__cta" @click="emit('goToSlide', 'contacts')">
      {{ data.cta.text }}
    </button>
  </div>

  <ServiceModal 
      v-if="selectedService"
      :service="selectedService"
      :visible="modalVisible"
      @close="closeModal"
      @go-to-cases="goToCases"
      @go-to-contacts="goToContacts"
    />
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.services {
  width: 100%;
  min-height: 100%;
  padding: clamp(32px, 4vw, 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  &__title {
    font-size: clamp(32px, 3.2vw, 56px);
    color: $color-white;
    margin-bottom: clamp(20px, 2.5vw, 40px);
    line-height: 1.1;
    font-weight: 700;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(10px, 1vw, 16px);
    width: 100%;
    max-width: 1200px;
    margin-bottom: clamp(20px, 2.5vw, 40px);
  }

  &__item {
    position: relative;
    padding: clamp(14px, 1.4vw, 22px) clamp(14px, 1.4vw, 22px) clamp(14px, 1.4vw, 22px) clamp(20px, 1.8vw, 28px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;

    /* Тонкая оранжевая линия слева */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: $color-accent;
      opacity: 0.3;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(249, 115, 22, 0.15);
      border-color: $color-accent;
      background: rgba(249, 115, 22, 0.05);

      &::before {
        opacity: 1;
      }

      .services__item-arrow {
        transform: translateX(4px);
        opacity: 1;
      }
    }
  }

  &__num {
    font-size: clamp(11px, 0.85vw, 14px);
    color: $color-accent;
    font-family: $font-mono;
  }

  &__item-title {
    font-size: clamp(15px, 1.2vw, 20px);
    color: $color-white;
    margin: clamp(4px, 0.5vw, 8px) 0;
    line-height: 1.2;
    font-weight: 600;
  }

  &__item-subtitle {
    font-size: clamp(11px, 0.85vw, 14px);
    color: $color-light-gray;
    opacity: 0.7;
    line-height: 1.3;
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

    &:hover {
      transform: translateY(-3px);
    }
  }
  &__item-arrow {
    position: absolute;
    right: 16px;
    bottom: 16px;
    color: $color-accent;
    opacity: 0.4;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
}

@media (max-width: 768px) {
  .services {
    padding: 20px 20px 60px;
    justify-content: flex-start;

    &__title {
      font-size: 28px;
      margin-bottom: 16px;
    }

    &__grid {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    &__item {
      padding: 12px;
    }

    &__item-title {
      font-size: 15px;
    }

    &__cta {
      width: 100%;
    }
  }
}
</style>