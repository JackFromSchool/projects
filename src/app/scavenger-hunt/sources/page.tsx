import styles from '../scavenger.module.css';

export default function Home() {
   return (
      <>
         <h1 className={styles.title}>CITATIONS</h1>
         <div className={styles.flex} id="1">
            <h2 className={styles.subtitles}>[1]:</h2>
            <p className={styles.citationtext}>
               citation blah blah blah
            </p>
         </div>
         <div className={styles.flex} id="2">
            <h2 className={styles.subtitles}>[2]:</h2>
            <p className={styles.citationtext}>
  Gonchar, J. (2016). In the Heights. Architectural Record, 204(11), 129-.
            </p>
         </div>
      </>
   )
}
