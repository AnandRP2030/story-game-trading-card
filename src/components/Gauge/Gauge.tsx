import styles from "./Gouge.module.scss";
import { GaugeComponent } from "react-gauge-component";

import Logo from "../../assets/edex-logo.png";
export const MyGauge = () => {
  return (
    <div className={styles.gauge}>
      <p>Targets:</p>
      <GaugeComponent
        type="semicircle"
        arc={{
          subArcs: [
            {
              limit: 25,
              color: "#a3f446",
              showTick: true,
            },
            {
              limit: 50,
              color: "#a3f446",
              showTick: true,
            },
            {
              limit: 75,
              color: "#a3f446",
              showTick: true,
            },
            {
              limit: 100,
              color: "#a3f446",
              showTick: true,
            },
          ],
        }}
        value={50}
      />
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};
