import React, { useContext } from "react";
import styles from "./JessicaJonesLogo.module.css";
import { ShareText } from "../../components/ShareText";

const JessicaJonesLogo = () => {
  const { text } = useContext(ShareText);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>{text}</h1>
    </div>
  );
};

export default JessicaJonesLogo;
