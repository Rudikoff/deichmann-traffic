<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const phone = ref('')
const phoneError = ref('')
const status = ref('idle') // idle | loading | success | error

// Форматирование телефона в маску +7 (XXX) XXX-XX-XX
function formatPhone(value) {
  // Оставляем только цифры
  let digits = value.replace(/\D/g, '')

  // Если начинается с 8 — заменяем на 7
  if (digits.startsWith('8')) digits = '7' + digits.slice(1)

  // Если начинается не с 7 — добавляем 7
  if (!digits.startsWith('7')) digits = '7' + digits

  // Ограничиваем 11 цифрами (7 + 10)
  digits = digits.slice(0, 11)

  // Собираем маску
  const parts = []
  if (digits.length > 0) parts.push('+7')
  if (digits.length > 1) parts.push(' (' + digits.slice(1, 4))
  if (digits.length >= 5) parts.push(') ' + digits.slice(4, 7))
  if (digits.length >= 8) parts.push('-' + digits.slice(7, 9))
  if (digits.length >= 10) parts.push('-' + digits.slice(9, 11))

  return parts.join('')
}

function handlePhoneInput(event) {
  phone.value = formatPhone(event.target.value)
  if (phoneError.value) phoneError.value = ''
}

// Валидация: +7 (9XX) XXX-XX-XX
function validatePhone() {
  const digits = phone.value.replace(/\D/g, '')

  if (!digits || digits.length < 11) {
    phoneError.value = 'Введите номер полностью'
    return false
  }

  // Проверка: первая цифра после 7 должна быть 9
  if (digits[1] !== '9') {
    phoneError.value = 'Номер должен начинаться с +7 (9...)'
    return false
  }

  phoneError.value = ''
  return true
}

async function handleSubmit() {
  if (!validatePhone()) return

  status.value = 'loading'

  try {
    const response = await fetch('https://api.deichmann-traffic.ru/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Ошибка')
    }

    if (window.ym) {
      window.ym(114271605, 'reachGoal', 'form_send')
    }
    
    status.value = 'success'
    name.value = ''
    phone.value = ''

    setTimeout(() => {
      status.value = 'idle'
    }, 4000)
  } catch (error) {
    console.error(error)
    status.value = 'error'
    setTimeout(() => {
      status.value = 'idle'
    }, 4000)
  }
}

const submitText = computed(() => {
  if (status.value === 'loading') return 'Отправляем...'
  if (status.value === 'success') return 'Заявка отправлена!'
  if (status.value === 'error') return 'Ошибка. Попробуйте ещё раз'
  return 'Обсудить проект'
})
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form__field">
      <label class="form__label" for="contact-name">Имя</label>
      <input
        id="contact-name"
        v-model="name"
        type="text"
        class="form__input"
        placeholder="Как к вам обращаться?"
        autocomplete="name"
      />
    </div>

    <div class="form__field">
      <label class="form__label" for="contact-phone">Телефон *</label>
      <input
        id="contact-phone"
        :value="phone"
        @input="handlePhoneInput"
        @blur="validatePhone"
        type="tel"
        class="form__input"
        :class="{ 'form__input--error': phoneError }"
        placeholder="+7 (___) ___-__-__"
        autocomplete="tel"
      />
      <p v-if="phoneError" class="form__error">{{ phoneError }}</p>
    </div>

    <button
      type="submit"
      class="form__submit"
      :class="{
        'form__submit--loading': status === 'loading',
        'form__submit--success': status === 'success',
        'form__submit--error': status === 'error'
      }"
      :disabled="status === 'loading' || status === 'success'"
    >
      {{ submitText }}
    </button>

    <p class="form__note">
      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
    </p>
  </form>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.form {
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 20px);
  width: 100%;
  max-width: 480px;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__label {
    font-size: clamp(12px, 0.9vw, 14px);
    color: $color-light-gray;
    opacity: 0.7;
  }

  &__input {
    width: 100%;
    padding: clamp(12px, 1.2vw, 16px) clamp(14px, 1.3vw, 18px);

    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    color: $color-white;
    font-family: inherit;
    font-size: clamp(14px, 1vw, 16px);

    transition: border-color 0.3s ease, background 0.3s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }

    &:focus {
      outline: none;
      border-color: $color-accent;
      background: rgba(255, 255, 255, 0.08);
    }

    &--error {
      border-color: #EF4444;

      &:focus {
        border-color: #EF4444;
      }
    }
  }

  &__error {
    font-size: clamp(11px, 0.85vw, 13px);
    color: #EF4444;
    margin-top: 2px;
  }

  &__submit {
    padding: clamp(14px, 1.3vw, 18px) clamp(24px, 2vw, 32px);
    background: $color-accent;
    color: $color-white;
    border: none;
    border-radius: 8px;
    font-family: inherit;
    font-size: clamp(14px, 1vw, 16px);
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }

    &--loading {
      opacity: 0.7;
    }

    &--success {
      background: #10B981;
    }

    &--error {
      background: #EF4444;
    }
  }

  &__note {
    font-size: clamp(10px, 0.8vw, 12px);
    color: $color-light-gray;
    opacity: 0.5;
    text-align: center;
    line-height: 1.4;
  }
}
</style>