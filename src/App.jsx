import "./App.css";

import Card from "./components/Card";

function App() {
  
  const smallContent = `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`;
  const bigContent = {
    content1: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`,
    content2: `PwC'nin Küresel Risk Araştırması 2023, lider şirketlerin
fırsat ve değer yaratma arayışında teknoloji ve verinin dönüştürücü
gücünü benimseyerek riske bakış açılarını nasıl değiştirdiklerini
ortaya koyuyor.`
  };
  
  
  return (
    <>
      <h1 className="page-header">Sektörel Raporlar</h1>

      <Card 
        title='Güneş Enerjisi' 
        variant="big" 
        content={`${bigContent.content1}\n\n${bigContent.content2}`}
        />

      <div className="grid-container">
        <Card content={smallContent} title="Güneş Enerjisi" />
        <Card content={smallContent} title="Rüzgar Enerjisi" />
        <Card content={smallContent} title="Jeotermal Enerji" />
        <Card content={smallContent} title="Nükleer Enerji"/>
        <Card content={smallContent} title="Güneş Enerjisi" />
        <Card content={smallContent} title="Rüzgar Enerjisi" />
        <Card content={smallContent} title="Jeotermal Enerji" />
        <Card content={smallContent} title="Nükleer Enerji"/>
        <Card content={smallContent} title="Güneş Enerjisi" />
        <Card content={smallContent} title="Rüzgar Enerjisi" />
      </div>
      <a href="" className="show-link">
      <button disabled className="show-button">Daha Fazla Göster</button>
    </a>
    </>
  );
}

export default App;
