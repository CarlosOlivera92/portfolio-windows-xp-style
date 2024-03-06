import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes() as number; // Convertimos a número
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // El reloj marca las 12 en vez de 0
    minutes = minutes < 10 ? minutes : minutes; // No es necesario convertir aquí
    return hours + ":" + minutes + " " + ampm;
  };

  return (
    <div className={styles.clock}>
      <p>{formatAMPM(time)}</p>
    </div>
  );
};

export default Clock;
