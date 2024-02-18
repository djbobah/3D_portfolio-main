import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Знаете что нужно вашему проекту? <br className="sm:block hidden" />
        Не ждите особого дня! <br className="sm:block hidden" />
        Давайте обсудим проект уже сегодня!
      </p>
      <Link to="/contact" className="btn">
        Свяжитесь со мной
      </Link>
    </section>
  );
};

export default CTA;
