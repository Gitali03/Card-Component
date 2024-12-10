import "./App.css";

import Card from "./components/Card";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Güneş Enerjisi",
      content: [
        {
          id: "para1",
          text: "PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini ortaya koyuyor.",
        },
        {
          id: "para2",
          text: "PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini ortaya koyuyor.",
        },
      ],
      variant: "big",
    },
    {
      id: 2,
      title: "Rüzgar Enerjisi",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: 3,
      title: "Nükleer Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: 4,
      title: "Jeotermal Enerji",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: 5,
      title: "Rüzgar Enerjisi",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: 6,
      title: "Nükleer Enerji",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: 7,
      title: "Jeotermal Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: 8,
      title: "Rüzgar Enerjisi",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: 9,
      title: "Nükleer Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
    {
      id: 10,
      title: "Jeotermal Enerji",
      content: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
      variant: "small",
    },
    {
      id: 11,
      title: "Nükleer Enerji",
      content: `Yenilenebilir enerji yatırımlarının artışı, özellikle rüzgar enerjisi alanında küresel enerji talebinin önemli bir kısmını karşılamaya başladı...`,
      variant: "small",
    },
  ];

  return (
    <>
      <h1 className="page-header">Sektörel Raporlar</h1>
      <div>
        {cardData
          .filter((item) => item.variant === "big")
          .map((item) => (
            <Card
              key={item.id}
              variant={item.variant}
              title={item.title}
              content={item.content.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.text.trim()}</p>
              ))}
            />
          ))}
      </div>

      <div className="grid-container">
        {cardData
          .filter((item) => item.variant === "small")
          .map((item) => (
            <Card
              key={item.id}
              variant={item.variant}
              title={item.title}
              content={item.content}
            />
          ))}
      </div>

      <a href="" className="show-link">
        <button disabled className="show-button">
          Daha Fazla Göster
        </button>
      </a>
    </>
  );
}

export default App;
