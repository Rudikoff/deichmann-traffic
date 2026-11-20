<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  service: { type: Object, required: true },
  visible: { type: Boolean, default: false },
  legal: { type: String, default: '' }
})
const emit = defineEmits(['close', 'goToCases', 'goToContacts'])

function handleKeydown(event) {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal" @click.self="emit('close')">
        <div class="modal__content">
          <button class="modal__close" @click="emit('close')" aria-label="Закрыть">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <span class="modal__num">{{ service.num }}</span>
          <h2 class="modal__title">{{ service.title }}</h2>
          <p class="modal__subtitle">{{ service.subtitle }}</p>

          <div class="modal__divider"></div>

          <p class="modal__description">{{ service.modal.description }}</p>

          <div class="modal__price-block">
            <span class="modal__price">{{ service.modal.price }}</span>
            <p v-if="service.modal.priceNote" class="modal__note">{{ service.modal.priceNote }}</p>
          </div>
          <p v-if="legal" class="modal__legal">{{ legal }}</p>
          <div class="modal__actions">
            <button
              v-if="service.modal.hasCases"
              class="modal__btn modal__btn--secondary"
              @click="emit('goToCases', service.modal.casesLink)"
            >
              Кейсы
            </button>
            <button
              class="modal__btn modal__btn--primary"
              @click="emit('goToContacts')"
            >
              Обсудить
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;

  /* Фон затенения — отдельный слой через ::before, чтобы не зависеть от скролла */
  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 10, 0.92);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: -1;
  }

  /* Контент — не по центру, а сверху с отступом */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 20px 40px; /* сверху 80px — отступ от бургера, снизу 40px */
}

.modal__content {
  position: relative;
  width: 100%;
  max-width: 560px;
  padding: clamp(28px, 3vw, 48px);

  background: $color-graphite;
  border: 1px solid rgba(249, 115, 22, 0.25);
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: 0 0;
}

.modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: $color-light-gray;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(249, 115, 22, 0.15);
    border-color: $color-accent;
    color: $color-accent;
    transform: rotate(90deg);
  }
}

.modal__num {
  display: inline-block;
  font-family: $font-mono;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: $color-accent;
  margin-bottom: 8px;
}

.modal__title {
  font-size: clamp(24px, 2.4vw, 36px);
  font-weight: 700;
  color: $color-white;
  line-height: 1.15;
  margin-bottom: 6px;
}

.modal__subtitle {
  font-size: clamp(14px, 1.1vw, 17px);
  color: $color-light-gray;
  opacity: 0.7;
  margin-bottom: 20px;
}

.modal__divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, $color-accent, transparent);
  margin-bottom: 20px;
}

.modal__description {
  font-size: clamp(13px, 1vw, 15px);
  line-height: 1.6;
  color: $color-light-gray;
  opacity: 0.9;
  margin-bottom: 24px;
}

.modal__price-block {
  padding: 16px 20px;
  margin-bottom: 28px;
  background: rgba(249, 115, 22, 0.06);
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 10px;
}

.modal__price {
  display: block;
  font-size: clamp(22px, 2vw, 30px);
  font-weight: 700;
  color: $color-accent;
  line-height: 1.1;
  margin-bottom: 6px;
}

.modal__note {
  font-size: clamp(11px, 0.85vw, 13px);
  color: $color-light-gray;
  opacity: 0.7;
  line-height: 1.4;
  margin: 0;
}

.modal__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.modal__btn {
  flex: 1;
  min-width: 140px;
  padding: clamp(12px, 1.1vw, 16px) clamp(20px, 2vw, 28px);

  font-family: inherit;
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background: $color-accent;
    color: $color-white;
    border: 1px solid $color-accent;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35);
    }
  }

  &--secondary {
    background: transparent;
    color: $color-accent;
    border: 1px solid $color-accent;

    &:hover {
      background: rgba(249, 115, 22, 0.1);
      transform: translateY(-2px);
    }
  }
}

.modal__legal {
  margin-top: 20px;
  padding-top: 16px;
   padding-bottom: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: clamp(11px, 0.85vw, 13px);
  color: $color-light-gray;
  opacity: 0.5;
  text-align: center;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .modal {
    padding: 70px 12px 20px; /* сверху 70px — под бургер, снизу 20px */
  }

  .modal__content {
    max-width: 100%;
    padding: 24px 20px 28px;
    border-radius: 16px;
  }

  .modal__close {
    top: 12px;
    right: 12px;
  }

  .modal__description {
    margin-bottom: 20px;
  }

  .modal__price-block {
    padding: 14px 16px;
    margin-bottom: 20px;
  }

  .modal__actions {
    flex-direction: column;
  }

  .modal__btn {
    width: 100%;
  }
}

/* Анимация появления */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal__content,
.modal-leave-active .modal__content {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal__content,
.modal-leave-to .modal__content {
  transform: translateY(-20px) scale(0.96);
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-enter-from .modal__content,
  .modal-leave-to .modal__content {
    transform: translateY(-40px);
    opacity: 0;
  }
}
</style>