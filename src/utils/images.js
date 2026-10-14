// Загружаем все изображения из папки assets/images
const images = import.meta.glob('@/assets/images/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default'
})

// Функция для получения пути к изображению по имени файла
export function getImage(name) {
  const path = `/src/assets/images/${name}`
  return images[path] || ''
}