import { API_URL } from '@/app/config.js'

async function getPostDetails (slug) {
  const url = `${API_URL}/api/posts/${slug}/`
    
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const { data } = await res.json()
  const post = data

  // Ajustar la URL de la imagen de portada si existe
  if (post.attributes.cover && post.attributes.cover.data && post.attributes.cover.data.attributes && post.attributes.cover.data.attributes.url) {
    post.attributes.cover.data.attributes.url = `${API_URL}${post.attributes.cover.data.attributes.url}`
  } else {
    console.error('URL de la imagen de portada no encontrada:', post)
  }

  // Ajustar las URLs de los medios si existen
  if (post.attributes.media && Array.isArray(post.attributes.media.data)) {
    post.attributes.media.data = post.attributes.media.data.map(mediaItem => {
      if (mediaItem.attributes && mediaItem.attributes.url) {
        mediaItem.attributes.url = `${API_URL}${mediaItem.attributes.url}`
      } else {
        console.error('URL de medio no encontrada:', mediaItem)
      }
      return mediaItem
    })
  }

  return post
}

export { getPostDetails }
