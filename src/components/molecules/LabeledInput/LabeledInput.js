import styles from "./LabeledInput.module.css";

export default function ({ label, onChange, value }) {//recibe los valores de Form(parent)
  const handleChange = (e) => {//función flecha que recibe un parámetro
    onChange(e.target.value)//le pasa a onChange el valor de e.target.value
  }
  return (
    <div className={styles.container}>
      <div>{label}</div>{/*usa el valor label*/}
      <input type="text" value={value} onChange={(e)=>handleChange(e)}/>{/*input que usa el value que viene del padre 
      y la función onChange de este componente*/}
    </div>
  );
}
