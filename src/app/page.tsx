import home from './home.module.css';

export default function Home() {
  return (
    <>
      <div className={home.fullpagediv}>
         <p className={home.subtitle}>
            THE PROJECTS OF
         </p>
         <h1 className={home.centeredtext}>
            JACK SAENZ
         </h1>
         <p className={home.footer}>
            more to come
         </p>
      </div>
    </>
  );
}
