// services\postsList.js
import { API_URL } from "@/app/config.js";

async function getPosts() {
    const url = `${API_URL}/api/posts?fields=title&fields=slug&fields=date&populate[cover][fields][0]=url&populate[category][fields][0]=name`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    const { data } = await res.json();
    const posts = data.map(post => {
        console.log(post);
        if (post.attributes.cover && post.attributes.cover.data && post.attributes.cover.data.attributes && post.attributes.cover.data.attributes.url) {
            post.attributes.cover.data.attributes.url = `${API_URL}${post.attributes.cover.data.attributes.url}`;
        } else {
            console.error('URL de la imagen no encontrada:', post);
        }
        return post;
    });

    return posts;
}

export { getPosts };
