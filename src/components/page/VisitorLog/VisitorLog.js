import { useState } from "react";
import DataTable from "../../organisms/DataTable/DataTable";
import Form from "../../organisms/Form/Form";
import Search from "../../organisms/Search/Search";

export default function () {
  const [filteredUsers, setFilteredUsers] = useState(null) //crea un estado vacio para lo que se va a filtrar
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Juan",
      color: "Rojo"
    },
    {
      id: 2,
      name: "Facundo",
      color: "Verde"
    },
    {
      id: 3,
      name: "Daniel",
      color: "Azul"
    }
  ]);//crea un estado que contiene un array de objetos con la informacion de la DB local(quemada)

  const addUser = (user) => { //función que va a agregar usuarios al array
    setUsers(users.concat(user));
      //fija el valor de users para concatenar el valor que ya existía en users + user(que corresponde al dato recibido por parametro)
  };
  const searchUsers = (q) => { //funcion para buscar los usuarios
    if (q!=="") { // si el valor de busqueda q es diferente a vacio
      const fusers = users.filter((user) => { //variable que almacena 
        const name = user.name.trim().toLowerCase();
        const searched = q.trim().toLowerCase();
        console.log(name, searched);
        return name.includes(searched)
        
      })
      setFilteredUsers(fusers)
    } else {
      setFilteredUsers(null)
    }
   }

    const deleteUser = (userId) => {
      setUsers(users.filter(user => user.id !== userId))//recorre los datos y crea un array sin el valor al que es igual
  };

  return (
    <>
      <div>Visitor Log</div>
      <Search onSearch={searchUsers} />
      <DataTable users={filteredUsers||users} deleteUser={deleteUser} />
      <Form addUser={addUser} />
    </>
  );
}
