// ScheduleComponent.tsx
import React from "react";
import styles from "./ScheduleComponent.module.scss";

interface ScheduleItem {
  time: string;
  date: string;
  title: string;
  location: string;
  description: string;
}

interface ScheduleComponentProps {
  scheduleItems: ScheduleItem[];
  colorPalette: string[];
}

const ScheduleComponent: React.FC<ScheduleComponentProps> = ({
  scheduleItems,
  colorPalette,
}) => {
  return (
    <div className={styles.scheduleWrapper}>
      <div className={styles.scheduleContainer}>
        <h2 className={styles.scheduleHeader}>СВАДЕБНОЕ РАСПИСАНИЕ</h2>

        <div className={styles.timeline}>
          {scheduleItems.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timeDate}>
                <div className={styles.time}>{item.time}</div>
                <div className={styles.date}>{item.date}</div>
              </div>

              <div className={styles.eventContent}>
                <div className={styles.markerContainer}>
                  <div className={styles.eventMarker} />
                  {index < scheduleItems.length - 1 && (
                    <div className={styles.timelineConnector} />
                  )}
                </div>
                <div className={styles.eventDetails}>
                  <h3 className={styles.eventTitle}>{item.title}</h3>
                  <div className={styles.eventLocation}>{item.location}</div>
                  {item.description && (
                    <p className={styles.eventDescription}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
