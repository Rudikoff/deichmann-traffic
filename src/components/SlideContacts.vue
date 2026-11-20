<script setup>
import { getImage } from '@/utils/images'
import ContactForm from '@/components/ContactForm.vue'

defineProps({
  data: { type: Object, required: true },
  isActive: { type: Boolean, default: false }
})
</script>

<template>
  <div class="contacts">
    <div class="contacts__left">
      <h2 class="contacts__name">{{ data.name }}</h2>
      <div class="contacts__divider"></div>
      <p class="contacts__tagline">{{ data.tagline }}</p>
      <p v-if="data.legal" class="contacts__legal">{{ data.legal }}</p>

      <!-- Телефон — крупный, оранжевый -->
      <a
        :href="`tel:${data.phone.replace(/\D/g, '')}`"
        class="contacts__phone"
      >
        {{ data.phone }}
      </a>

      <!-- Email и ВК — в одну линию -->
      <div class="contacts__links">
        <a
          v-if="data.email"
          :href="`mailto:${data.email}`"
          class="contacts__link"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>Email</span>
        </a>

        <a
          v-if="data.vk"
          :href="data.vk"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts__link"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.785 16.241s.288-.032.436-.192c.136-.148.132-.427.132-.427s-.02-1.304.585-1.496c.596-.19 1.362 1.26 2.174 1.818.613.422 1.08.33 1.08.33l2.17-.03s1.136-.07.597-.963c-.044-.073-.314-.66-1.617-1.868-1.363-1.264-1.18-1.06.462-3.245.998-1.328 1.398-2.14 1.273-2.487-.12-.331-.858-.244-.858-.244l-2.442.015s-.181-.025-.315.055c-.132.079-.216.263-.216.263s-.387 1.03-.903 1.905c-1.089 1.86-1.524 1.958-1.702 1.843-.415-.268-.311-1.078-.311-1.078s.534-3.24.766-4.75c.17-.88.325-1.345-.185-1.626-.155-.085-.42-.132-.59-.14-.353-.013-.675-.013-.973-.013-.6.012-1.156.06-1.462.325-.226.196-.408.572-.289.9.09.266.28.485.42.485.186 0 .455-.05.455-.05s.42-.096.66-.14c.198-.037.42.037.42.037.46.234.33 1.46.33 1.46s-.348 2.532-.61 3.44c-.132.46-.248.602-.508.46-.417-.234-1.07-1.19-1.515-2.153-.238-.512-.407-.93-.412-1.442 0 0 .032-.894.145-1.384.14-.596-.238-.896-.238-.896s-.61-.04-1.442-.04c-.72 0-1.61.02-2.06.59-.36.455-.348.86-.348.86s.126.34.468.34c.262 0 .4-.085.4-.085s.72-.176 1.35-.176c.39 0 .54.13.64.36.08.185.06 1.148.06 1.148l-.11 1.98s-.078.393-.36.393c-.402 0-.83-.59-1.18-1.12-.6-.9-1.05-2.1-1.05-2.1s-.13-.55-.31-.75c-.13-.14-.39-.19-.57-.19l-1.81.02s-.44-.04-.62.13c-.16.15-.13.4-.13.4s.03.28.4.78c.36.5.96 1.42.96 1.42l.85 2.11s.53 1.26 1.06 1.8c.48.51.93.47.93.47l3.32.03s.44.04.72-.18c.28-.22.27-.62.27-.62z"/>
          </svg>
          <span>Написать в ВК</span>
        </a>
      </div>

      <ContactForm />
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
  height: 100%;
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
    margin-bottom: clamp(8px, 1vw, 14px);
    line-height: 1.05;
    font-weight: 700;
  }

  &__tagline {
    font-size: clamp(16px, 1.3vw, 22px);
    color: $color-light-gray;
    opacity: 0.8;
    margin-bottom: clamp(8px, 1vw, 14px);
    line-height: 1.4;
  }

  &__phone {
    display: inline-block;
    font-size: clamp(24px, 2.2vw, 38px);
    color: $color-accent;
    text-decoration: none;
    font-weight: 700;
    margin-bottom: clamp(8px, 1vw, 14px);
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  &__links {
    display: flex;
    gap: clamp(10px, 1vw, 14px);
    margin-bottom: clamp(24px, 3vw, 40px);
    flex-wrap: wrap;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: clamp(10px, 1vw, 14px) clamp(14px, 1.3vw, 20px);

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;

    color: $color-light-gray;
    text-decoration: none;
    font-size: clamp(13px, 1vw, 15px);
    font-weight: 500;

    transition: all 0.3s ease;

    svg {
      flex-shrink: 0;
      color: $color-accent;
    }

    &:hover {
      background: rgba(249, 115, 22, 0.08);
      border-color: $color-accent;
      color: $color-white;
      transform: translateX(4px);
    }
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
  &__divider {
    width: 100px;
    height: 1px;
    background: $color-accent;
    margin-bottom: clamp(8px, 1vw, 14px);
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
  &__legal {
    font-size: clamp(11px, 0.85vw, 13px);
    color: $color-light-gray;
    opacity: 0.6;
    line-height: 1.4;
    margin-top: clamp(4px, 0.5vw, 8px);    /* маленький отступ сверху */
    margin-bottom: clamp(8px, 1vw, 14px); /* маленький отступ снизу */
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
  .contacts__phone {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .contacts__links {
    gap: 8px;
    margin-bottom: 20px;
  }

  .contacts__link {
    padding: 10px 12px;
    font-size: 12px;
    flex: 1;
    justify-content: center;
  }
}
</style>