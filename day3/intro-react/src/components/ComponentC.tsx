import { FC } from "react";
import styles from "./ComponentC.module.css";

interface ComponentCProps {
  name: string;
}

const ComponentC: FC<ComponentCProps> = ({ name }) => {
  return <div className={styles.biru}>Selamat Datang, {name} </div>;
};

export default ComponentC;
