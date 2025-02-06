import styles from "./Card.module.scss";
import { Bookmark } from "lucide-react";
import Logo from "../../assets/edex-logo.png";
type Item = {
  createdOn: String;
  currentPrice: String;
  risk: String;
  timeFrame: String;
  entry: String;
  stopLoss: String;
};
interface CardProps {
  item: Item;
}
export const Card = ({ item }: CardProps) => {
  const { createdOn, currentPrice, risk, timeFrame, entry, stopLoss } = item;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <p>On FXCM</p>
          <p className={styles.ticker}>USD/JPY</p>
        </div>

        <div className={styles.tradeBtn}>
          <button>Trade</button>
          <Bookmark size={16} />
        </div>
      </div>
      <div className={styles.price}>
        <div>
          <span>Created On</span>
          <span>{createdOn}</span>
        </div>
        <div>
          <span>Current Price</span>
          <span>{currentPrice}</span>
        </div>
      </div>

      <div className={styles.risk}>
        <div>
          <p>Risk: {risk}</p>
          <p>Time Frame: {timeFrame}</p>
        </div>
        <div>
          <button>Long </button>
        </div>
      </div>

      <div className={styles.position}>
        <div>
          <span>Entry: </span>
          <span>{entry}</span>
        </div>
        <div>
          <span>Stop Loss: </span>
          <span>{stopLoss}</span>
        </div>
      </div>

      <div className={styles.guage}>
        <div className={styles.guageChart}>Targets: char there</div>

        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
