import styles from "./DataTable.module.css";
import clsx from "clsx";
import Button from "../../atoms/Button/Button";

export default function ({ users, deleteUser }) {
  //
  return (
    <div className={styles.table}>
      <div className={styles.row}>
        <div className={clsx(styles.column, styles.name)}>Nombre</div>
        <div className={clsx(styles.column, styles.color)}>Color</div>
        <div className={clsx(styles.column, styles.actions)}>Acciones</div>
      </div>
      {!users.length?(<p>No existen usuarios</p>):null}
      {users.map((u, i) => {
        return (
          <div className={styles.row} key={i}>
            <div className={clsx(styles.column, styles.name)}>{u.name}</div>
            <div className={clsx(styles.column, styles.color)}>{u.color}</div>
            <div
              className={clsx(styles.column, styles.actions)}
              onClick={() => deleteUser(u.id)}
            >
              <Button text="Delete" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
