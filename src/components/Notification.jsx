import { useCallback, useEffect } from "react";

import styles from "./Notification.module.css";

export const Notification = ({ alertlist, position, setList }) => {
  const deleteAlert = useCallback(
    id => {
      const alertListItem = alertlist.filter(e => e.id !== id);
      setList(alertListItem);
    },
    [alertlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (alertlist.length) {
        deleteAlert(alertlist[0].id);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [alertlist, deleteAlert]);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {alertlist.map((alert, i) => (
        <div
          key={i}
          className={`${styles.notification} ${styles.alert} ${styles[position]} `}
          style={{ backgroundColor: alert.backgroundColor }}
        >
          <button onClick={() => deleteAlert(alert.id)}>X</button>
          <div>
            <p className={styles.description}>{alert.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
