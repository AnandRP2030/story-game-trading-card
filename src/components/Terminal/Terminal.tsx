import { Filter } from "lucide-react";
import { Card } from "../Card/Card";
import styles from "./Terminal.module.scss";
export const Terminal = () => {
  const data = [
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "long",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "short",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "long",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "long",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "long",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "long",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "short",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "short",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "long",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
    {
      createdOn: "Sep 9, 2022 | 3:31:53 PM",
      currentPrice: "0.0003453 BTC",
      risk: "Low",
      timeFrame: "long",
      entry: "0.000007 - 0.0000075",
      stopLoss: "0.00000234 BTC (-20.83)",
    },
  ];

  return (
    <div className={styles.terminal}>
      <div className={styles.filters}>
        <button>
          <Filter size={14} />
          <span>Filters</span>
        </button>
      </div>
      <div className={styles.cardContainer}>
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
