import styles from "./LabeledInput.module.css";

export default function ({ label, onChange, value }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <div className={styles.container}>
      <div>{label}</div>
      <input type="text" value={value} onChange={(e)=>handleChange(e)}/>
    </div>
  );
}
