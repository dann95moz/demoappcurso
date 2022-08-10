import { useState } from "react";
import Button from "../../atoms/Button/Button";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import styles from "./Search.module.css";

export default function ({ onSearch }) {
  const [query, setQuery] = useState('')
  const handleSearch = () => { 
    onSearch(query)
  }
  const handleClear = () => { 
    onSearch("")
    setQuery('')
   }
  return (
    <div className={styles.container}>
      <LabeledInput label="Search:" value={query} onChange={setQuery} />
      <Button text="Search" onClick={handleSearch}/>
      <Button text="Clear"  onClick={handleClear}/>
    </div>
  );
}
