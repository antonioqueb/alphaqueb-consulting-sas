import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import WhyWe from '../components/WhyWe/WhyWe'
import Methodology from '../components/Methodology/Methodology'
import Image from 'next/image'
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




     
        
      <Hero /> 

      

     { blogs.map(blog => (
        <Link href={`/blogs/${blog.slug}`} key={blog.slug} style={{color: 'white',}}>
          <div>
          <h2>{blog.meta.title}</h2>
          <p>{blog.meta.description}</p>
          </div>
        
          
          
        </Link>
      ))}


 
     
      <Testimonials />    
       
      <WhyWe />
        <Methodology />
     

     
      {/*       <LastNews /> */} 
     
    </main>
  )
}
