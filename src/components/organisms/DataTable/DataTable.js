import styles from "./DataTable.module.css";
import clsx from "clsx";
import Button from "../../atoms/Button/Button";

export default function ({ users, deleteUser }) {//recibe users y deleteUser del padre(datatable)
  //
  return (
    <div className={styles.table}>
      <div className={styles.row}>
        <div className={clsx(styles.column, styles.name)}>Nombre</div>
        <div className={clsx(styles.column, styles.color)}>Color</div>
        <div className={clsx(styles.column, styles.actions)}>Acciones</div>
      </div>
      {!users.length?(<p>No existen usuarios</p>):null}{/*si es diferente a la longitud de los usuarios muestra el texto si no, no muestra nada*/}
      {users.map((u, i) => {{/*recorre los usuarios u=valores i=index y ejecuta el return para cada elemento de users*/}
        return (
          <div className={styles.row} key={i}>{/*key: valor requerido para evitar problemas de renderizado*/}
            <div className={clsx(styles.column, styles.name)}>{u.name}</div>
            <div className={clsx(styles.column, styles.color)}>{u.color}</div>
            <div
              className={clsx(styles.column, styles.actions)}
              onClick={() => deleteUser(u.id)}
            >{/*ejecuta el borrado de usuarios*/}
              <Button text="Delete" />{/*usa el prop text con un valor*/}
            </div>
          </div>
        );
      })}
    </div>
  );
}
