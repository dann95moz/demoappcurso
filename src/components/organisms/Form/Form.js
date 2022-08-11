import { useState } from "react";
import Button from "../../atoms/Button/Button";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";

export default function ({ addUser }) {
  const [name, setName] = useState()//estado que guardará el valor del nombre
  const [color, setColor] = useState()// estado que guardará el valor del color
  const handleSubmit = () => { //funcion que usa addUser(recibido de Form y le agrega un objeto con nombre y color)
    addUser({ name: name, color: color })
    
   }
    
  return (
    <div>
      <LabeledInput label="Name"value={name} onChange={ setName}/>{/*envia a LabeledInput las props  */}
      <LabeledInput label="Favorite color" value={color} onChange={ setColor} />{/*envia a LabeledInput las props  */}
         

      <Button text="Submit" onClick={() => handleSubmit()} />{/* boton que usa la función declarada arriba  */}
      
    </div>
  );
}
