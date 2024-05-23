import styles from "../src/styles/Enunciado.module.css";

interface EnunciadoProps {
  texto: string;
}
export default function Enunciado(props: EnunciadoProps) {
  return (
    <div className={styles.Enunciado}>
      <div className={styles.texto}>{props.texto}</div>
    </div>
  );
}
