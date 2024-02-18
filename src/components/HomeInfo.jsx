import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Приветствую, я
        <span className="font-semibold mx-2 text-white">Кирпичев Владимир</span>
        👋
        <br />
        Фронтенд разработчик со специализацией React
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Работал с разными компаниями получил разнообразные навыки
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Узнать больше
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Привёл к успеху множество проектов за годы работы. Хотите узнать
          подробности?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Посмотреть мое портфолио
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Знаю, что нужно вашему проекту! Не ждите особого дня! Давайте обсудим
          проект уже сегодня!
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Свяжитесь со мной
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
