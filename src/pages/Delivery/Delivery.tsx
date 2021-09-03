/* eslint-disable max-len */
import styles from './Delivery.module.scss';

const imgsPath = `${process.env.PUBLIC_URL}/assets/images/`;

function Delivery() {
  return (
    <div className={styles.delivery}>
      <div className={styles.deliveryTitle}>Delivery</div>
      <div className={styles.deliveryVars}>
        <div className={styles.deliveryVarsItem}>
          <img className={styles.deliveryVarsItemImg} src={`${imgsPath}meest.png`} alt="Meest" />
          <div className={styles.deliveryVarsItemTitle}>Meest Express</div>
          <div className={styles.deliveryVarsItemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.deliveryVarsItem}>
          <img className={styles.deliveryVarsItemImg} src={`${imgsPath}np.jpg`} alt="Nova Poshta" />
          <div className={styles.deliveryVarsItemTitle}>Nova Poshta</div>
          <div className={styles.deliveryVarsItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className={styles.deliveryVarsItem}>
          <img className={styles.deliveryVarsItemImg} src={`${imgsPath}ukrposhta.jpg`} alt="Ukrposhta" />
          <div className={styles.deliveryVarsItemTitle}>Ukrposhta</div>
          <div className={styles.deliveryVarsItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className={styles.deliveryVarsItem}>
          <img className={styles.deliveryVarsItemImg} src={`${imgsPath}self-pickup.jpg`} alt="Selt Pickup" />
          <div className={styles.deliveryVarsItemTitle}>Self Pickup</div>
          <div className={styles.deliveryVarsItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
