import style from './politica-cookies.module.css'
import Image from 'next/image'

export default function PoliticaCookies () {
  return (
    <>
      <div className={style.container}>
        
        <div className={style.container__title}>
        <Image src='/svg/cookies.svg' width={230} height={230} alt='cookies image'  
         />
        </div>
        
        <div className={style.container__text}>
          <h2 className={style.heading}>¿Qué cookies podremos utilizar y por qué razón?</h2>
          <p className={style.text}>
          Cuando nosotros utilizamos cookies, las clasificamos en cualquiera de las siguientes categorías:
          </p>

          <p className={style.text}>
          Cuando nosotros utilizamos cookies, las clasificamos en cualquiera de las siguientes categorías:
          </p>

          <p className={style.text}>
          Usted podrá configurar su navegador para bloquear estas cookies, o alertarle sobre las mismas sin embargo, esto dará como resultado que algunas partes del sitio web no funcionen. Estas cookies no almacenan ninguna información de identificación personal.
          </p>

          <p className={style.text}>
          Las cookies de rendimiento nos permiten contar el número de visitas, así como las fuentes de tráfico, para medir y mejorar el rendimiento de nuestro sitio web. Pueden ser implementadas por nosotros o por proveedores externos (por ejemplo, Adobe, Akamai, Brightcove, Qualtrics, entre otros), para ayudarnos a saber qué páginas son las más populares y las menos populares y para entender cómo navegan por el sitio nuestros visitantes.
          </p>

          <h4 className={style.text}>
          Toda la información que recopilan estas cookies es anónima.
          </h4>

          <p className={style.text}>
          Las cookies funcionales permiten que el sitio web le proporcione a usted una funcionalidad mejorada y una mayor personalización, a partir de su interacción con el mismo. Éstas pueden ser configuradas por nosotros o por proveedores externos, como Adobe, cuyos servicios hemos incorporado a nuestras páginas.
          </p>

          <p className={style.text}>
          Las cookies de segmentación y/o publicidad pueden ser implementadas, en este sitio web, por nuestros socios publicitarios, como Adobe, los cuales las utilizan para crear un perfil de sus intereses y mostrarle anuncios publicitarios relevantes en otros sitios. Estas cookies no almacenan de forma directa su información personal, sino que utilizan como base la identificación única de su navegador y dispositivo de Internet.

          </p>

          <p className={style.text}>
          Las cookies de redes sociales son aquellas desarrolladas por los servicios de redes sociales (como Twitter, LinkedIn, Facebook, entre otros), las cuales hemos agregado al sitio web para permitirle que comparta nuestro contenido con sus amigos y conocidos. Estas cookies son capaces de monitorear su navegación en otros sitios web y construir un perfil de sus intereses, y pueden influir en el contenido y en los mensajes que observe en las diferentes páginas que visite.

          </p>

          <p className={style.text}>
          Para conocer las cookies que utiliza este sitio web, por favor dé clic en  Manage cookie preferences  ubicado en la parte superior de este Aviso de manejo de cookies.
          </p>

          <h4 className={style.text}>
          ¿Cuánto tiempo permanecerán las cookies en mi dispostivo? 

          </h4>

          <p className={style.text}>
          El tiempo que una cookie permanecerá en su dispositivo lo determinará la naturaleza de la misma, que puede ser  permanente  o de  sesión .
          </p>

          <p className={style.text}>

          Un navegador web almacenará y validará una cookie permanente hasta su fecha establecida de vencimiento, a menos que usted decida eliminarla antes. Por otro lado, una cookie de sesión caducará cuando usted finalice su sesión web, es decir, cuando cierre su navegador.

          </p>

          <h4 className={style.text}>
          ¿Cómo puedo controlar las cookies?
          </h4>

          <p className={style.text}>
          Usted puede controlar y administrar las cookies de varias formas, pero tenga en cuenta que eliminarlas o deshabilitarlas podría afectar su experiencia de usuario e incluso haría posible que partes de este sitio web no sean completamente funcionales.
          </p>

          <p className={style.text}>
          En caso de que las cookies no sean estrictamente necesarias para el funcionamiento de nuestro sitio web, le pediremos su consentimiento para utilizarlas cuando nos visite por primera vez. Este consentimiento se podrá proporcionar o revocar, dando clic en  Manage cookie preferences  ubicado en la parte superior de esta página.
          </p>

          <p className={style.text}>
          Asimismo, usted puede cambiar la configuración de su navegador, para administrar y controlar las cookies. 

          </p>

          <p className={style.text}>
          Asimismo, usted puede cambiar la configuración de su navegador, para administrar y controlar las cookies. 

          </p>  

          <p className={style.text}>
          Recuerde que la aceptación o el rechazo del uso de cookies se limita al sitio en el que se publica nuestro Aviso de manejo de cookies, por lo que no abarca a otros sitios o páginas que pueden tener hipervínculos a nuestro sitio web.
          </p>

          <p className={style.text}>
          Para obtener más información sobre las cookies utilizadas por esos sitios web, por favor consulte el aviso específico de privacidad o de uso de cookies de los mismos.

          </p>

          <h4 className={style.text}>
          Comunicaciones por correo electrónico 

          </h4>

          <p className={style.text}>
          También podemos utilizar tecnologías de seguimiento que nos ayuden a saber si usted ha leído, dado clic o reenviado ciertas comunicaciones por correo electrónico, con la finalidad de hacer nuestra comunicación más efectiva, útil e interesante.
          </p>

          <p className={style.text}>
          Si usted no desea que confirmemos que ha abierto, dado clic o reenviado nuestras comunicaciones, deberá anular su suscripción a nuestra lista de correos, ya que no nos es posible enviar un correo electrónico sin habilitar este seguimiento.
          </p>

          <p className={style.text}>
          Nuestros suscriptores podrán actualizar sus preferencias de comunicación en cualquier momento, poniéndose en contacto con nosotros a través del sitio web Contáctenos o bien, podrán anular su suscripción siguiendo las instrucciones contenidas en las comunicaciones individuales por correo electrónico que reciban de nuestra parte.
          </p>

          <p className={style.text}>
          Le informamos que podremos realizar modificaciones al presente Aviso de manejo de cookies de manera unilateral cuando lo consideremos necesario.

          </p>

          <p className={style.text}>
          En caso de que estos cambios se lleven a cabo, se actualizará la fecha de  última revisión  que se señala en la parte superior de esta página web. Las modificaciones se harán efectivas a partir de la última fecha de revisión.
          </p>

          <p className={style.text}>
          Por ello, le recomendamos que revise periódicamente este Aviso de manejo de cookies, para que permanezca informado sobre nuestro uso de las mismas.
          </p>

        </div>
      </div>
    </>
  )
}
