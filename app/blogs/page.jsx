import styles from './page.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'


export default function Home() {
  const blogDir  = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs =  files.map(filename =>{
    
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')


    const {data: frontMatter} = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }

  })


  return (
    <main className={styles.main}>

      

     { blogs.map(blog => (
        <Link href={`/blogs/${blog.slug}`} key={blog.slug} style={{color: 'white',}}>
          <div>
          <h2>{blog.meta.title}</h2>
          <p>{blog.meta.description}</p>
          </div>
        
          
          
        </Link>
      ))}


 

     
      {/*       <LastNews /> */} 
     
    </main>
  )
}
