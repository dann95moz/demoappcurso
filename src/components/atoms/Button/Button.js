import styles from "./Button.module.css";

export default function ({ text , onClick}) {//recibo el texto y el onclick del padre(search)
  
  // recibo el texto a mostrar en el boton
  // en action recibo la funcion que tengo que ejecutar cuando lo aprieten
  return <div className={styles.button} onClick={onClick}>{text}</div>;{/*usa el onclick que viene del padre*/}
}