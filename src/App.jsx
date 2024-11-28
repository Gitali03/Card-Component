import "./App.css";

import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="page-header">Sektörel Raporlar</h1>

      <Card 
        title='Güneş Enerjisi' 
        variant="big" 
        />

      <div className="grid-container">
        <Card title="Güneş Enerjisi" />
        <Card title="Güneş Enerjisi" />
        <Card title="Güneş Enerjisi" />
      </div>
    </>
  );
}

export default App;
