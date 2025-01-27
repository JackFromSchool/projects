import Image from 'next/image';
import mainPicture from './horrizontal_pic.jpg';
import vertical_night from './vertical_night.jpg';

import styles from './scavenger.module.css';
import Citation from './citation';

export default function Home() {
   return (
      <>
         <Image
            className={styles.fullscreenimage}
            src={mainPicture}
            alt="Picture of the Roy and Diana Vagelos Education Center."
         />
         <h1 className={styles.title}>ROY AND DIANA VAGELOS EDUCATION CENTER</h1>
         <h2 className={styles.subtitles}>104 Haven Ave, New York, NY</h2>
         <h2 className={styles.subtitles}>Elizabeth Diller, Diller Scofidio + Renfro</h2>
         <div className={styles.sidebyside}>
            <div>
               <h3 className={styles.header}>PURPOSE</h3>
               <p className={styles.bodytext}>
                  Prior to the construction of the Education Cener, Columbia's Irving Medical School was essentially lacking a campus. It taught it's students in hospitals around the New York area however it lacked a central unifying force. The Education center was meant to unify the Medical Center and provide a true campus.<Citation id="1"/> For this reason the building was designed with a multitude of office, classroom, and study spaces. These allow the building to act as a hub for students and faculty that attend the medical school.<br/><br/>
                  In addition to being the hub for those who are directly involved with the Irving Medical school, the building acts, secondarily, as the icon for the school itself. It is immediately apparent how it does this when viewed from google street view. The building, though in place in terms of elevation, stands out at you from the less modern neighboorhood it is located in. Immediatly upon seeing it, you know that it is something new, something groundbreaking. That plays well with the kind of energy the Irving Medical School wishes to give off. Columbia wants to attract new students and the Medical Center shows that their school is further ahead than the competition. 
               </p>
            </div>
            <p>
               <Image
                  className={styles.halfscreenimage}
                  src={vertical_night}
                  alt="Picture of the Education Center at night."
               />
            </p>
         </div>

      </>
   );
}
