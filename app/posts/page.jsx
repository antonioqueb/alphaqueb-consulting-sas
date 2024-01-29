// Posts.js
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '../../services/postsList';

export default async function Posts() {
    const posts = await getPosts();
    console.log(posts);

    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <ul>
                {posts.map(({ attributes }) => (
                    <li key={attributes.slug}>
                        <Link href={`/posts/${attributes.slug}`}>
                            {attributes.title}
                        </Link>
                        <p>{attributes.date}</p>
                        {attributes.cover && attributes.cover.data && attributes.cover.data.attributes && attributes.cover.data.attributes.url && 
                            <Image
                                src={attributes.cover.data.attributes.url}
                                alt={attributes.title}
                                width={1024}
                                height={500}
                            />
                        }
                    </li>
                ))}
            </ul>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
