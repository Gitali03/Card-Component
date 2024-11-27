import styles from './card.module.css'

function Card({ variant }) {

  return (
    <div className={styles.asd}>
      <div className="maincard-container">
        <div className="maintitle-container">
          <h1>Güneş Enerjisi</h1>
          <span>22.01.2022</span>
        </div>
        <p className="card-exp">
          PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin fırsat ve
          değer yaratma arayışında teknoloji ve verinin dönüştürücü gücünü
          benimseyerek riske bakış açılarını nasıl değiştirdiklerini ortaya
          koyuyor. PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
          fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
          gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
          ortaya koyuyor.
        </p>
        <a href="" className="mainreport-link"
          >Raporu Göster
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              style="stroke: currentColor; stroke-width: 1.5; fill: none"
            />
          </svg>
        </a>
      </div>
      <img src="mainimage.png" alt="Energy Solutions" className="maincard-img" />
    </div>
  )
}



export default Card