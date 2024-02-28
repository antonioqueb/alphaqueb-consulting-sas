import styles from './page.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CallToAction from '../../../components/CallToAction/CallToAction'
import Image from 'next/image'
import Plans from '../../../components/Plans/Plans'



export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'))
    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))
    return paths
}

function getPost({ slug }) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownFile)
    return {
        frontMatter,
        slug,
        content
    }
}


export default function Page({ params }) {
    const props = getPost(params)

    return (
        <>
             <head>
            
            {props.frontMatter.title ? (
            <title>{props.frontMatter.title}</title>
            ) : (
            <title>Desarrollo Apps Odoo</title>
            )}
            <meta name="description" content={props.frontMatter.description} />
            <meta property="og:image" content={props.frontMatter.image} />
        </head>
            <article className={styles.main}>
                <h1>{props.frontMatter.title}</h1>
                <Image src={props.frontMatter.image} alt={props.frontMatter.title} width={1024} height={1024} className={styles['image-cover']} />
                <MDXRemote source={props.content}></MDXRemote>
            </article>
            <Plans />
            <CallToAction />
        </>
    )

}


