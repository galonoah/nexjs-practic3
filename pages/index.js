import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error
        earum necessitatibus nobis ab est dolor natus. Velit maxime, dicta
        accusantium repellat hic nesciunt itaque minima quas atque possimus.
        Necessitatibus.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure error
        earum necessitatibus nobis ab est dolor natus. Velit maxime, dicta
        accusantium repellat hic nesciunt itaque minima quas atque possimus.
        Necessitatibus.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas List</a>
      </Link>
    </div>
  );
}
