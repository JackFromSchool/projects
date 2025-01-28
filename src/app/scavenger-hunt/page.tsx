import Image from 'next/image';
import mainPicture from './horrizontal_pic.jpg';
import vertical_night from './vertical_night.jpg';
import plan1 from './plan1.jpg';
import plan2 from './plan2.jpg';
import plan3 from './plan3.jpg';
import plan4 from './plan4.jpg';
import plan5 from './plan5.jpg';
import stairs from './stairs_to_future.jpg';

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
                  Prior to the construction of the Education Center, Columbia's Irving Medical School was essentially lacking a campus. It taught it's students in hospitals around the New York area however it lacked a central unifying force. The Education center was meant to unify the Medical Center and provide a true campus.<Citation id="1"/> For this reason the building was designed with a multitude of office, classroom, and study spaces. These allow the building to act as a hub for students and faculty that attend the medical school.<br/><br/>
                  In addition to being the hub for those who are directly involved with the Irving Medical school, the building acts, secondarily, as the icon for the school itself. It is immediately apparent how it does this when viewed from google street view. The building, though in place in terms of elevation, stands out at you from the less modern neighborhood it is located in. Immediately upon seeing it, you know that it is something new, something groundbreaking. That plays well with the kind of energy the Irving Medical School wishes to give off. Columbia wants to attract new students and the Medical Center shows that their school is further ahead than the competition. 
               </p>
            </div>
            <div>
               <Image
                  className={styles.halfscreenimage}
                  src={vertical_night}
                  alt="Picture of the Education Center at night."
               />
            </div>
         </div>
         <h3 className={styles.header}>Gallery of Plans</h3>
         <div className={styles.photogrid}>
               <Image
                  className={styles.halfscreenimage}
                  src={plan1}
                  alt="Picture of the Education Center at night."
               />
               <Image
                  className={styles.halfscreenimage}
                  src={plan2}
                  alt="Picture of the Education Center at night."
               />
               <Image
                  className={styles.halfscreenimage}
                  src={plan3}
                  alt="Picture of the Education Center at night."
               />
               <Image
                  className={styles.halfscreenimage}
                  src={plan4}
                  alt="Picture of the Education Center at night."
               />
               <Image
                  className={styles.halfscreenimage}
                  src={plan5}
                  alt="Picture of the Education Center at night."
               />
         </div>
         <h3 className={styles.header}>Examination of Exterior</h3>
         <div className={styles.sidebyside}>
            <div>
               <h3 className={styles.subtitles}>
                  Stairs to the Future
               </h3>
               <p className={styles.bodytext}>
                  In this shot, we see a set of stairs that start out wide and slowly decrease in size as they reach up to the Education Center
               </p>
            </div>
            <Image
               className={styles.halfscreenimage}
               src={stairs}
               alt="Stairs leading up to the Education Center."
            />
         </div>
         <div className={styles.sidebyside}>
            <p>
            </p>
         </div>
      </>
   );
}
