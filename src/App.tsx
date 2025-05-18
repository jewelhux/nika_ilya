import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import TitleComponent from "./components/TitleComponent";
import InfoComponent from "./components/InfoComponent";
import branchImage from "./branch.png";
import coupleImage from "./duet.jpg";
import groomImage from "./man.jpg";
import brideImage from "./woman.jpg";
import backgroundPattern from "./flowers_bg.png";
import ScheduleComponent from "./components/ScheduleComponent";
import FooterComponent from "./components/FooterComponent";

// Словарь гостей с уникальными кодами
const guestCodes: Record<string, string> = {
  vika_clara: "Виктория и Клара Константиновна",
  igor_lara: "Игорь и Лариса",
  valya_svet_artem: "Валентин, Светлана и Артём",
  denis: "Денис",
  vlad_alina: "Владислав и Алина",
  elena: "Елена",
  leonid: "Леонид",
  viktor_marina: "Виктор и Марина",
  artem_kate: "Артем и Катя",
  oleg_lusia: "Олег и Люся",
  roman_alina: "Роман и Алина",
  amalia: "Амалия",
  kamila: "Камила",
  igor_julia: "Игорь и Юлия",
  misha_simona: "Михаил и Симона",
  vlad_elena: "Владислав и Елена",
  vladimir: "Владимир",
  marina_borya_nikita: "Марина, Боря и Никита",
  vitalya_lena: "Виталя и Лена",
  olga_igor_sasha_zhak_nastya: "Ольга, Игорь, Саша, Жак и Настя",
  rashid_vika: "Рашид и Вика",
  nikita_anya: "Никита и Аня",
  pasha_olesya: "Паша и Олеся",
};

// Функция для генерации приветствия
const generateGreeting = (names: string): string => {
  const nameList = names.split(/, | и /);

  if (nameList.length === 1) {
    const name = nameList[0];
    const isFemale =
      name.endsWith("а") ||
      name.endsWith("я") ||
      [
        "Виктория",
        "Клара",
        "Лариса",
        "Алина",
        "Елена",
        "Марина",
        "Люся",
        "Юлия",
        "Симона",
        "Камила",
        "Амалия",
      ].includes(name);
    return isFemale ? `Дорогая ${name}` : `Дорогой ${name}`;
  } else if (nameList.length === 2) {
    return `Дорогие ${nameList[0]} и ${nameList[1]}`;
  } else {
    const allButLast = nameList.slice(0, -1).join(", ");
    const last = nameList[nameList.length - 1];
    return `Дорогие ${allButLast} и ${last}`;
  }
};

const AppContent: React.FC = () => {
  const colorPalette = [
    "#5c4533",
    "#856a57",
    "#dacbb4",
    "#476a30",
    "#718838",
    "#aebea4",
  ];

  const scheduleItems = [
    {
      time: "14:00",
      date: "15.08.2025",
      title: "Трансфер",
      location: `Гостиница "Коломна"`,
      description:
        "Встреча гостей, которым необходим трансфер до места проведения события.",
    },
    {
      time: "15:00",
      date: "15.08.2025",
      title: "Фуршет",
      location: "Банкетный зал",
      description:
        "По приезду вас ждет небольшой фуршет перед основным мероприятием.",
    },
    {
      time: "16:00",
      date: "15.08.2025",
      title: "Свадебная церемония",
      location: "Площадка перед шатром",
      description: "Торжественная церемония на которой мы ждем всех гостей.",
    },
    {
      time: "17:00",
      date: "15.08.2025",
      title: "Банкет",
      location: "Банкетный зал",
      description: "Основное мероприятие нашего дня в прекрасном месте.",
    },
  ];

  // Получаем guestCode из URL
  const path = window.location.pathname;
  const guestCode = path.replace(/^\/|\/$/g, '') || "";
  const guestNames = guestCodes[guestCode] || "Гость";
  const greeting = generateGreeting(guestNames);

  return (
    <div className={styles.app}>
      <TitleComponent
        imageUrl={branchImage}
        names="ИЛЬЯ & НИКА"
        description="Мы приглашаем Вас разделить с нами самый незабываемый день в жизни"
        targetDate="2025-08-15T00:00:00"
      />
      <InfoComponent
        weddingDate="15.08.2025"
        groomName="Илья"
        brideName="Ника"
        coordinatorName="Варе"
        coordinatorPhone="+7 910 624-31-09"
        mainImage={coupleImage}
        groomImage={groomImage}
        brideImage={brideImage}
        colorPalette={colorPalette}
        backgroundImage={backgroundPattern}
        greeting={greeting} // Передаем сформированное приветствие
      />
      <ScheduleComponent
        scheduleItems={scheduleItems}
        colorPalette={colorPalette}
      />
      <FooterComponent backgroundImage={backgroundPattern} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:guestCode" element={<AppContent />} />
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
};

export default App;
