import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import { GrMoreVertical } from "react-icons/gr";

const links = [
  { href: "/", label: "¿Nosotros", key: "nosotros" },
  { href: "/tienda", label: "Servicios", key: "tienda" },
  { href: "/colaborar", label: "Herramientas", key: "colaborar" },
  { href: "/blog", label: "Blog", key: "blog" },
];

const NavbarComponent = () => (
  <nav className={styles.navbar} > {/* Borde de referencia*/}
    <div className={styles['navbar__logo']}>
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </Link>
    </div>

    <div className={styles['navbar__navigation']}>
    {links.map(({ href, label, key }) => (
        <Link href={href} key={key}  style={{ textDecoration: 'none' }}>
            <span className={styles['navbar__item']}>{label}</span>
        </Link>
    ))}

    </div>

    <div className={styles['navbar__icons']}>
      <Link href="/usuario"  style={{ textDecoration: 'none' }}>
        <GrMoreVertical className={styles['navbar__icon']} />
      </Link>
    </div>
  </nav>
);

export default NavbarComponent;
