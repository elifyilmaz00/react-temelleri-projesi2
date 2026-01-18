import { useState, useEffect} from 'react';
import "./App.css";

function App(){
  const [sayac, setSayac] = useState(0);
  const [adim, setAdim] = useState(1);

  //1. boş dizi, sadece ilk render'da çalışır

  useEffect(() => {
    console.log("useEffect [boş dizi]: component ilk kez ekrana çizildi (Mount).");
    
  }, []); //bağımlılık dizisi boş

  //2. değer içeren dizi, ilk renderda ve sayac her değiştiğinde çalışır

  useEffect(() => {
    console.log("useEffect [sayac]: sayac state'i değişti. ");
    //tarayıcının başlığını güncelle
    document.title = "Sayaç: ${sayac}";
  }, [sayac]); //bağımlılık dizisine sayaç var

  //adım state değişirse bu efekt çalışmaz
  useEffect(() => {
    console.log("useEffect [adim]: adim state'i değişti. ");
  }, [adim]); //bağımlılık dizisine adım var

  const handleArtir = () => {
    setSayac(mevcutsayac => mevcutsayac + adim);
  };

  const handleAzalt = () => {
    setSayac(mevcutSayac => mevcutSayac - adim);
  };

  return (
    <div className="sayac-container">
      <h1>useEffect Hook'u</h1>
      <p className="sayac-degeri">{sayac}</p>

      <div className="buton-grup">
        <button onClick={handleAzalt}>- Azalt</button>
        <button onclick={handleArtir}>+ Artır</button>
      </div>

      <div style ={{marginTop: "20px"}}>
        <p>Artış Miktarı: {adim}</p>
        <button onClick={()=> setAdim(1)}>1</button>
        <button onClick={()=> setAdim(5)}>5</button>
        <button onClick={()=> setAdim(10)}>10</button>
      </div>
    </div>
  );
}

export default App;