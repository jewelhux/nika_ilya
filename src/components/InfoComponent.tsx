import React from "react";
import styles from "./InfoComponent.module.scss";

interface InfoComponentProps {
  weddingDate: string;
  groomName: string;
  brideName: string;
  coordinatorName: string;
  coordinatorPhone: string;
  mainImage: string;
  groomImage: string;
  brideImage: string;
  colorPalette: string[];
  backgroundImage?: string;
  greeting: string;
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  weddingDate,
  groomName,
  brideName,
  coordinatorName,
  coordinatorPhone,
  mainImage,
  groomImage,
  brideImage,
  colorPalette,
  backgroundImage,
  greeting,
}) => {
  return (
    <div
      className={styles.infoWrapper}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className={styles.infoContainer}>
        <h2 className={styles.header}>{greeting}!</h2>
        <p className={styles.description}>
          Мы рады сообщить Вам, что {weddingDate} состоится самое главное
          торжество в нашей жизни - день нашей свадьбы!
        </p>

        <div className={styles.mainPhotoContainer}>
          <img src={mainImage} alt="Илья и Ника" className={styles.mainPhoto} />
        </div>

        <p className={styles.invitationText}>
          Приглашаем Вас разделить с нами радость этого незабываемого дня.
          <br />
          Там, где посеяна любовь, растёт радость.
        </p>

        <div className={styles.coupleContainer}>
          <div className={styles.personContainer}>
            <img src={groomImage} alt="Жених" className={styles.personPhoto} />
            <h3 className={styles.personName}>{groomName}</h3>
          </div>
          <div className={styles.personContainer}>
            <img
              src={brideImage}
              alt="Невеста"
              className={styles.personPhoto}
            />
            <h3 className={styles.personName}>{brideName}</h3>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>НАШИ ПОЖЕЛАНИЯ</h4>
          <p className={styles.sectionText}>
            Ваше присутствие — самый значимый подарок для нас!
            <br />
            <br />
            Мы понимаем, что дарить цветы на свадьбу — это традиция, но, к
            сожалению, не сможем насладиться их красотой в полной мере. Поэтому
            будем рады, если вы воздержитесь от цветочных композиций.
            <br />
            <br />
            Так же будем благодарны, если вы воздержитесь от криков "Горько" на
            празднике, ведь поцелуй — это знак выражения чувств, он не может
            быть по заказу.
          </p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>МЕСТО ТОРЖЕСТВА</h4>
          <p className={styles.sectionText}>
            Наш праздник будет проходить в ЦЭТ "Берхино", который расположен по
            адресу Осетровая ул., 1, д. Берхино. Если Вы заранее нас оповестили
            о необходимости трансфера, то он будет ждать Вас по адресу Советская
            площадь, 2, г. Коломна. до 14:00.
          </p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>ПАЛИТРА ЦВЕТОВ</h4>
          <p className={styles.sectionText}>
            Будем благодарны, если при выборе нарядов на наше торжество вы
            придержитесь следующей палитры
          </p>
          <div className={styles.colorPalette}>
            {colorPalette.map((color, index) => (
              <div
                key={index}
                className={styles.colorCircle}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>ЕСЛИ ВДРУГ ОСТАЛИСЬ ВОПРОСЫ</h4>
          <p className={styles.sectionText}>
            Вы можете задать их нашему координатору - {coordinatorName}, она с
            радостью поможет Вам и сориентирует, связаться с ней можно по
            номеру:
            <br />
            {coordinatorPhone}
          </p>
        </div>
        <p className={styles.finalText}>Ждем Вас на нашей свадьбе!</p>
      </div>
    </div>
  );
};

export default InfoComponent;
