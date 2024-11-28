import PropTypes from "prop-types";
import "./card.css";

function Card({ 
  variant = "small" ,
  title,
}) {
  return (
    <div className={`card-container ${variant}`}>
      <div className="text-container">
        <div>
          <h1>{title}</h1>
          <span>22.01.2022</span>
        </div>
        <p>
          PwC&apos;nin Küresel Risk Araştırması 2023, lider şirketlerin fırsat ve
          değer yaratma arayışında teknoloji ve verinin dönüştürücü gücünü
          benimseyerek riske bakış açılarını nasıl değiştirdiklerini ortaya
          koyuyor. PwC&apos;nin Küresel Risk Araştırması 2023, lider şirketlerin
          fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
          gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
          ortaya koyuyor.
        </p>
        <a href="javascript:void(0)">
          Raporu Göster
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              style={{
                stroke: "currentColor",
                strokeWidth: 1.5,
                fill: "none",
              }}
            />
          </svg>
        </a>
      </div>
      <img src={`/${variant}.png`} alt="Energy Solutions" />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["small", "big"]),
};

export default Card;
