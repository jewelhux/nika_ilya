import React from "react";
import styles from "./FooterComponent.module.scss";

interface FooterComponentProps {
  backgroundImage?: string;
}

const FooterComponent: React.FC<FooterComponentProps> = ({
  backgroundImage,
}) => {
  return (
    <div
      className={styles.footerWrapper}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          Сайт разработан Даниловым И.И. в 2025 году
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
