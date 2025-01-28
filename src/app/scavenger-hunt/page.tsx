import Image from 'next/image';
import mainPicture from './horrizontal_pic.jpg';
import vertical_night from './vertical_night.jpg';
import plan1 from './plan1.jpg';
import plan2 from './plan2.jpg';
import plan3 from './plan3.jpg';
import plan4 from './plan4.jpg';
import plan5 from './plan5.jpg';
import stairs from './stairs_to_future.jpg';
import cascade from './glass_cascade.jpg';
import interior from './interior.jpg';
import album1 from './album1.jpg';
import album2 from './album2.jpg';
import album3 from './album3.jpg';
import album4 from './album4.jpg';
import album5 from './album5.jpg';
import drawing from './drawing.jpg';

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
         <hr className={styles.nomargin}/>
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
         <hr className={styles.nomargin}/>
         <h3 className={styles.header}>Examination of Exterior</h3>
         <div className={styles.sidebyside}>
            <div>
               <br/>
               <br/>
               <h3 className={styles.subtitles}>
                  Stairs to the Future
               </h3>
               <p className={styles.bodytext}>
                  In this shot, we see a set of stairs that start out wide and slowly decrease in size as they reach up to the Education Center. Although at the top there is a gate, likely for security measures laid out by the University of Columbia, the wide open start of the stairs gives of an inviting atmosphere. It shows that there is a low barrier to entry, perhaps that anyone can learn the craft that is taught in this building. However, as with your career, as you move further in your career you will inevitably grow more specialized, just as the stairs lower their scope to become smaller near the top. These stairs, in that sense, represent the journey you will take, should you decide to attend the Irving Medical School.
               </p>
            </div>
            <Image
               className={styles.halfscreenimage}
               src={stairs}
               alt="Stairs leading up to the Education Center."
            />
         </div>
         <div className={styles.sidebyside}>
            <Image
               className={styles.halfscreenimage}
               src={cascade}
               alt="Education Center, photographed from ground level looking up at the cascade portion."
            />
            <div>
               <br/>
               <br/>
               <h3 className={styles.subtitles}>Looking up at the Glass Cascade</h3>
               <p className={styles.bodytext}>
                  In this shot, we see the "cascade" portion of the building. This is the part of the building that was designed to promote collaboration, by creating an interesting layering of spaces. However, from the outside we can see that this combines to create an effect of cascading water, hence the name "cascade". The use of plain glass walls, only lightly framed by aluminum columns, directly mimics the look of water. Additionally, the white glass-reinforced concrete almost mimics light-washed stone that one might see by a seashore. This combination of material choice and design pattern, helps to create a more natural look. This likely goes hand in hand with the buildings location near the Hudson River.
               </p>
            </div>
         </div>
         <hr className={styles.nomargin}/>
         <h3 className={styles.header}>Perspective from Academia</h3>
         <h3 className={styles.subtitles}>In the Heights<Citation id="2"/></h3>
         <p className={styles.bodytext}>
            This article focuses primarily on the design of the "study cascade" that makes up the south side of the Education Center. The cascade's use of large concrete slabs that are seemingly held up by nothing, but thin glass panels, was unsurprisingly difficult to construct structurally. The project's structural engineers, Leslie E. Robertson Associates, had to use a variety of techniques in order to hold up the building. Part of these techniques was a combination of post-tensioning and void formers, the first time these techniques have been combined in America. While these large overhangs alone would make the building somewhat imposing, the architects used warm colors and textures inside to help make the center more inviting. These efforts proved fruitful as students could be seen using all the various parts of the cascade.
         </p>
         <hr className={styles.nomargin}/>
         <h3 className={styles.header}>Assorted Perspectives</h3>
         <div className={styles.sidebyside}>
            <div className={styles.innersidebyside}>
               <div>
                  <h2 className={styles.subtitles}>The Cascades Flow<Citation id="5"/></h2>
                  <p className={styles.bodytext}>In this image we see the broken up floor plan of the cascade. Stairs are going over other stairs that reach over floors that aren't exactly level. However, the warm wood panelling helps to make the chaos of the environment more inviting.</p>
               </div>
               <Image
                  className={styles.quarterscreenimage}
                  src={interior}
                  alt="Picture of the interior of the cascade."
               />
            </div>
            <div>
               <h3 className={styles.subtitles}>Interview<Citation id="3"/></h3>
<div className="padding: 0 0 0;margin-top:1rem;"><iframe src="https://player.vimeo.com/video/239828816?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" className="position:absolute;top:0;left:0;width:100%;height:100%;" title="66 // LIZ DILLER // Vagelos Education Center // ENG"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
               <p className={styles.bodytext}>
                  From this interview with the architect, Elizabeth Diller, we are able to gain a sense of the thought process that went into designing the Education Center. In her interview, Diller primarily focuses on the construction of the cascade portion of the center. She describes how she wanted to create many uniquely sized spaces that are all interconnected, to promote communication. She does this by making a "cascading" patter, from which the space gains its name. Spaces are interconnected by stairs and go around the southern portion of the building, allowing one to look out all around the scenery that surrounds the center from any of it's 14 floors. This separates the Education Center from other buildings that might have a more generic, or simplistic, approach to creating individual spaces.
               </p>
            </div>
            <div>
               <h3 className={styles.subtitles}>Roy and Diana Vagelos Education Center Review<Citation id="4"/></h3>
               <p className={styles.bodytext}>
                  An architectural review, from The Guardian, found the Education Center lived up to it's promise of being state of the art. However, they found that it's futuristic look seemed somewhat dated. They related it to the weird feeling you get when the word "cyber" is used in a sci-fi novel. For the most part I agree with that assessment. While I was researching this building, I enjoyed the overall look but something felt subconsciously "tacky". Stamp's "cyber" assessment perfectly captured what I was feeling. The center looks as though it is straight from a sci-fi movie, and that makes it come off as somewhat melodramatic. While it shines in it's use of space, the aesthetics can't help but feel a little off.
               </p>
            </div>
            <div>
               <h3 className={styles.subtitles}>A Place for Transformational Learning<Citation id="6"/></h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/IlCoT-LTih0?si=WmkdgAph5__O4lsT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               <p className={styles.bodytext}>This video goes more into depth on the classroom spaces of the center and how they help to accelerate and improve learning. One key point was the modularity of the classroom spaces. Classrooms are wide open spaces and workstations aren't closed off at all. This means from one point in the classroom you can see what your classmates are doing and more easily collaborate with them.</p>
            </div>
         </div>
         <hr className={styles.nomargin}/>
         <h2 className={styles.header}>Album</h2>
         <div className={styles.photogrid}>
            <div>
               <Image
                  className={styles.albumimage}
                  src={album1}
                  alt="Photo album"
               />
               <p className={styles.bodytext}>Angle shows how the interior design of the building influences the photography of its space.</p>
            </div>
            <div>
               <Image
                  className={styles.albumimage}
                  src={album2}
                  alt="Photo album"
               />
               <p className={styles.bodytext}>An interesting "liminal" image. Shows how the spaces for movement feel when empty.</p>
            </div>
            <div>
               <Image
                  className={styles.albumimage}
                  src={album3}
                  alt="Photo album"
               />
               <p className={styles.bodytext}>The outside of the building is filled with blocks of warmth from the wood panelling.</p>
            </div>
            <div>
               <Image
                  className={styles.albumimage}
                  src={album4}
                  alt="Photo album"
               />
               <p className={styles.bodytext}>From this perspective, the cascading stairs almost look like a maze.</p>
            </div>
            <div>
               <Image
                  className={styles.albumimage}
                  src={album5}
                  alt="Photo album"
               />
               <p className={styles.bodytext}>The large windows and well lit environment make the interior of the building completely public at night.</p>
            </div>
         </div>
         <h2 className={styles.header}>My Drawing</h2>
         <Image
            className={styles.fullscreenimage}
            src={drawing}
            alt="My drawing of the education center"
         />
      </>
   );
}
