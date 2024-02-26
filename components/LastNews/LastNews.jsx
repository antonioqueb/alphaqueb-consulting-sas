// LastNews
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

  const blogs =  files.map(filename => {
    
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')


    const { data: frontMatter } = matter(fileContent)
    return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
           }
  })

return (
    <>
    
      <div className={styles.LastNews__container__title}>
        <h3 className={styles.LastNews__title}>Últimos Artículos</h3>
      
      </div>
      <div className={styles.LastNews__container}>
      { blogs.map(blog => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug} style={{ color: 'white', textDecoration: 'none' }}>
            <CardPost Titulo={blog.meta.title} Description={blog.meta.description} ImagePost={blog.meta.image}  />
          </Link>
        ))}
      

        
      </div>
    </>
  )
}
