import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Привет! Я
        <span className="blue-gradient_text font-semibold drop-shadow ml-3">
          Владимир
        </span>
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Фронтенд разработчик со специализацией в React. Использую Redux,
          Redux-Toolkit, MobX как стейт менеджеры. Способен создавать
          адаптивные, кросс-браузерные приложения. Использую Git - как систему
          контроля версий. SASS, LESS как CSS-препроцессоры, и такие инструменты
          как: NPM, Chrome-, React- and Redux- dev-tools, VS Code, Webpack,
          Babel, Redux-Toolkit, Redux-Saga для лучшей производительности.
          Дополнительно применяю библиотеки React-redux, Reselect. Для лучшего
          качества кода настроен Eslint.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Технологии, которые я использую:</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Опыт работы.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Я работал в немногих компаниях, но в последние 2 года получал опыт,
            совершенствуя свои навыки и объединяясь с умными людьми во
            freelance. Вот краткое изложение:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
