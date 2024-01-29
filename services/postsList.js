// services\postsList.js
// Importación de la variable API_URL desde la configuración de la aplicación.
import { API_URL } from "@/app/config.js";

// Declaración de la función asincrónica 'getPosts' para obtener publicaciones.
async function getPosts() {
    // Construcción de la URL para solicitar los posts, incluyendo parámetros específicos para los campos y relaciones.
    const url = `${API_URL}/api/posts?fields=title&fields=slug&fields=date&populate[cover][fields][0]=url&populate[category][fields][0]=name`;
    
    // Realización de la solicitud HTTP GET a la URL construida anteriormente.
    const res = await fetch(url);

    // Verificación del estado de la respuesta. Si no es satisfactorio, se lanza un error con el texto del estado.
    if (!res.ok) {
        throw new Error(res.statusText);
    }

    // Extracción de la propiedad 'data' del objeto JSON resultante de la respuesta.
    const { data, meta } = await res.json();
    console.log(data);
    
    const { pagination } = meta;
    // Transformación de cada objeto 'post' dentro de 'data' mediante el método map.
    const posts = data.map(post => {
        // Registro en consola de cada 'post' procesado.
        console.log(post);

        // Verificación de la existencia y estructura de la propiedad 'cover' dentro de 'post'.
        // Si existe y tiene la estructura adecuada, se actualiza la URL de la imagen con la base de API_URL.
        if (post.attributes.cover && post.attributes.cover.data && post.attributes.cover.data.attributes && post.attributes.cover.data.attributes.url) {
            post.attributes.cover.data.attributes.url = `${API_URL}${post.attributes.cover.data.attributes.url}`;
        } else {
            // Si no se encuentra la URL de la imagen, se registra un error en consola con el 'post' relacionado.
            console.error('URL de la imagen no encontrada:', post);
        }
        
        // Retorna el 'post' procesado (potencialmente con la URL de la imagen actualizada).
        return post;
    });

    // Devolución de la lista de posts procesados.
    return posts;
}

// Exportación de la función 'getPosts' para su uso en otros módulos.
export { getPosts };
