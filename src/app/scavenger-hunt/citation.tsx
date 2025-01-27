import styles from './citation.module.css';

interface Props {
   id: string,
}

export default function Citation(props: Props) {
   return (
      <span>
         <a className={styles.link} href={"/scavenger-hunt/sources#" + props.id}>
            [{props.id}]
         </a>
      </span>
   );
}
