import { useState } from "react";
import Button from "../../atoms/Button/Button";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import styles from "./Search.module.css";

export default function ({ onSearch }) {//función que recibe onSearch de VisitorLog
  const [query, setQuery] = useState('')//creación de hook query que inicializa en string vacío
  const handleSearch = () => { //función flecha que usa el onSearch(que viene de VisitorLog)
    // y le pasa como parámetro la data que tiene query
    onSearch(query)
  }
  const handleClear = () => { //función que sirve para borrar la búsqueda con el botón clear
    onSearch("") //limpia la busqueda en la tabla
    setQuery('')//limpia la busqueda en el input
   }
  return (
    <div className={styles.container}>
      <LabeledInput label="Search:" value={query} onChange={setQuery} />{/*le envia al hijo las props*/}
      <Button text="Search" onClick={handleSearch}/>{/*le envia al hijo las props*/}
      <Button text="Clear"  onClick={handleClear}/>{/*le envia al hijo las props*/}
    </div>
  );
}
