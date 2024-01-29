// ./app/posts/[id]/page.jsx

import { getPostDetails } from '@/services/getPostDetails'; // Asegúrate de que la ruta sea correcta

export async function loader({ params }) {
    try {
        const post = await getPostDetails(params.id);
        return { props: { post } };
    } catch (error) {
        console.error('Error al cargar el post:', error);
        return { props: { error: error.message } };
    }
}

const ContentRenderer = ({ content }) => {
    // Puedes expandir esta función para manejar diferentes tipos de contenido
    return content.map((item, index) => {
        switch (item.type) {
            case 'paragraph':
                return <p key={index}>{item.text}</p>;
            // Agrega más casos para otros tipos de contenido si es necesario
            default:
                return <span key={index}>{item.text}</span>;
        }
    });
}

export default function Post({ post, error }) {
    if (error) {
        return <p>Error al cargar el post: {error}</p>;
    }

    if (!post || !post.attributes) {
        return <p><br/><br/><br/><br/><br/><br/><br/>Cargando post...<br/><br/><br/><br/><br/><br/><br/></p>;
    }

    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <h1>{post.attributes.title}</h1>
            <p>Publicado el: {post.attributes.date}</p>
            {post.attributes.cover && (
                <img src={post.attributes.cover.data.attributes.url} alt={post.attributes.cover.data.attributes.name} />
            )}
            <div>
                {/* Renderiza el contenido de forma segura */}
                <ContentRenderer content={post.attributes.content} />
            </div>
            {/* Agrega aquí más detalles según sea necesario */}
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
