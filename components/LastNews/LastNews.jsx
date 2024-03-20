import React from 'react'
import styles from './LastNews.module.css'
import { CardPost } from '../CardPost/CardPost'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function LastNews() {
  const blogDir  = 'blogs'

  const files = fs.readdirSync(path.join(blogDir))

  // Función auxiliar para parsear la fecha
  const parseDate = dateString => {
    const parts = dateString.match(/(\d+) de (\w+) de (\d+)/)
    if (!parts) return new Date(0) // Devuelve una fecha inválida si no se puede parsear

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const day = parseInt(parts[1], 10)
    const month = months.indexOf(parts[2])
    const year = parseInt(parts[3], 10)

    return new Date(year, month, day)
  }

  const blogs = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const { data: frontMatter } = matter(fileContent)
    return {
            meta: frontMatter,
            slug: filename.replace('.mdx', ''),
            date: parseDate(frontMatter.date) // Almacenamos la fecha parseada
           }
  }).sort((a, b) => b.date - a.date) // Ordenamos por fecha

  return (
    <>
      <div className={styles.LastNews__container__title}>
        <h1 className={styles.LastNews__title}>Últimos Artículos</h1>
      </div>
      <div className={styles.LastNews__container}>
        {blogs.map(blog => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug} style={{ color: 'white', textDecoration: 'none' }}>
            <CardPost Titulo={blog.meta.title} Description={blog.meta.description} ImagePost={blog.meta.image} />
          </Link>
        ))}
      </div>
    </>
  )
}
