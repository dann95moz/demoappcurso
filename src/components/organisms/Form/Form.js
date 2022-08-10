import { useState } from "react";
import Button from "../../atoms/Button/Button";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";

export default function ({ addUser }) {
  const [name, setName] = useState()
  const [color, setColor] = useState()
  const handleSubmit = () => { 
    console.log(name,color);
    addUser({ name: name, color: color })
    
   }
    
  return (
    <div>
      <LabeledInput label="Name"value={name} onChange={ setName}/>
      <LabeledInput label="Favorite color" value={color} onChange={ setColor} />
         

      <Button text="Submit" onClick={() => handleSubmit()} />
      
    </div>
  );
}
