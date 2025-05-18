import React, { useState, useEffect } from "react";
import styles from "./TitleComponent.module.scss";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TitleComponentProps {
  imageUrl: string;
  names: string;
  description: string;
  targetDate: string | Date;
}

const TitleComponent: React.FC<TitleComponentProps> = ({
  imageUrl,
  names,
  description,
  targetDate,
}) => {
  const [timeLeft, setTimeLeft] = useState<Partial<TimeLeft>>(
    calculateTimeLeft()
  );

  function calculateTimeLeft(): Partial<TimeLeft> {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: Partial<TimeLeft> = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const getRussianIntervalName = (interval: keyof TimeLeft): string => {
    switch (interval) {
      case "days":
        return "дней";
      case "hours":
        return "часов";
      case "minutes":
        return "минут";
      case "seconds":
        return "секунд";
      default:
        return "";
    }
  };

  const timerComponents: any[] = [];

  (Object.keys(timeLeft) as Array<keyof TimeLeft>).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {getRussianIntervalName(interval)}{" "}
      </span>
    );
  });

  return (
    <div className={styles.eventContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Веточка" className={styles.branchImage} />
      </div>
      <h1 className={styles.names}>{names}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.date}>
        {new Date(targetDate).toLocaleDateString("ru-RU")}
      </div>
      <div className={styles.countdown}>
        {timerComponents.length ? timerComponents : <span>Время настало!</span>}
      </div>
    </div>
  );
};

export default TitleComponent;
