import SoloPage from "app/layouts/solo-page/SoloPage";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <SoloPage>
      <div className={styles.loader}>
        <svg className={styles.circularLoader} viewBox="25 25 50 50">
          <circle className={styles.loaderPath} cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
    </SoloPage>
  );
}
