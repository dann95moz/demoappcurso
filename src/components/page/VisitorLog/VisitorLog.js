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
      const fusers = users.filter((user) => { //variable que almacena la informacion filtrada
        const name = user.name.trim().toLowerCase();//variable que almacena cambios a user(remueve espacios y pasa todo a minuscula)
        const searched = q.trim().toLowerCase();//variable que almacena cambios al valor buscado(remueve espacios y pasa todo a minuscula)
        return name.includes(searched) //retorna el nombre que incluye el valor buscado
      })
      setFilteredUsers(fusers)//altera el valor de Filtered Users a través de setFilteredUsers con el valor de fusers
    } else {
      setFilteredUsers(null)//si el valor filtrado es vacío altera el valor de users a través de setFilteredUsers a null
    }
   }

    const deleteUser = (userId) => {//funcion que borra el usuario
      setUsers(users.filter(user => user.id !== userId))//recorre los datos y crea un array sin el valor al que es igual
  };

  return (//lo que retorna en html
    <>
      <div>Visitor Log</div>{/* titulo */}
      <Search onSearch={searchUsers} />{/* le envia al componente search la prop onSearch={searchUsers} */}
      <DataTable users={filteredUsers||users} deleteUser={deleteUser} />{/* le envia al componente DataTable la prop filteredUsers, 
      si hay usuarios filtrados los muestra si no muestra users. También envia la prop deleteUser */}
      <Form addUser={addUser} />{/* le envia al componente search la prop addUser={addUser} */}
    </>
  );
}
