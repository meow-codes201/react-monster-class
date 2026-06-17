import { FaBeer } from "react-icons/fa";
import styles from "./IconComponent.module.css";
function IconComponent() {
  return (
    <>
      <h1 className={styles.title}>
        Let's drink <FaBeer />
      </h1>
    </>
  );
}
export default IconComponent;
