import style from './politica-privacidad.module.css'
import Image from 'next/image'

export default function PoliticaPrivacidad () {
  return (
    <>
      <div className={style.container}>
        
        <div className="flex flex-col justify-center items-center">
          <Image src='/politicas.svg' width={230} height={230} alt='cover' className='cover justify-center my-10' 
         />
          <h3 className={style.toptitle}>Políticas</h3>
          <h1 className={style.title}>Política de Privacidad</h1>
        </div>
        
        <div className={style.container__text}>
          <h2>Información que recopilamos</h2>
          <p className={style.text}>
          Recopilamos la información proporcionada por los usuarios al momento de registrarse en la plataforma, incluyendo el nombre completo, correo electrónico y en algunos casos, el número telefónico. También podemos recopilar información de seguimiento sobre el uso de la plataforma.
          </p>

          <h2>Uso de la información</h2>
          <p className={style.text}>
          La información recopilada se utiliza para fines de autenticación y para proporcionar acceso a la plataforma. También puede ser utilizada para enviar comunicaciones promocionales, pero los usuarios pueden optar por no recibirlas en cualquier momento.
          </p>

          <h2>Divulgación de la información</h2>
          <p className={style.text}>
          No compartimos la información recopilada con terceros, salvo en los casos previstos por la ley o cuando sea necesario para proporcionar el servicio.

          </p>

          <h2>Seguridad de la información</h2>
          <p className={style.text}>
          Seguridad de la informaciónSeguridad de la informaciónTomamos medidas de seguridad razonables para proteger la información recopilada, incluyendo el uso de tecnologías de encriptación y almacenamiento seguro de la información.
          </p>

          <h2>Cambios a la política de privacidad</h2>
          <p className={style.text}>
          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los usuarios serán notificados de cualquier cambio en la política de privacidad a través de la plataforma.
          </p>

        </div>
      </div>
    </>
  )
}
