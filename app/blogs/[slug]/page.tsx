import styles from './page.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CallToAction from '../../../components/CallToAction/CallToAction'
import Image from 'next/image'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'))
    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))
    return paths
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownFile)
    return {
        frontMatter,
        slug,
        content
    }
}

export default function Page({ params }: any) {
    const props = getPost(params)
    return (
        <article className={styles.main}>
            <h1>{props.frontMatter.title}</h1>
            <Image src={props.frontMatter.image} alt={props.frontMatter.title} width={1024} height={1024} className={styles['image-cover']}/>
            <MDXRemote source={props.content}></MDXRemote>
            <CallToAction />
            
        </article>
    )
}
