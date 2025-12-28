// 1. React kütüphanesinden 'useState' Hook'unu import et.
import { useState } from 'react';
import './App.css';

function App() {
  // 2. Bir 'sayac' state değişkeni oluştur.
  //    Başlangıç değerini 0 olarak ayarlıyoruz.
  //    React bize iki şey döndürüyor:
  //    - 'sayac': Sayacın o anki değeri.
  //    - 'setSayac': 'sayac' değerini GÜNCELLEMEK için kullanacağımız FONKSİYON.
  const [sayac, setSayac] = useState(0);

  console.log("App component'i render edildi. Sayacın değeri:", sayac);

  // 3. Butona tıklandığında çalışacak bir fonksiyon tanımla.
  const handleArtir = () => {
    // State'i doğrudan değiştiremeyiz! (YANLIŞ: sayac = sayac + 1;)
    // State'i güncellemek için HER ZAMAN React'in bize verdiği fonksiyonu kullanmalıyız.
    setSayac(sayac + 1);
  };

  const handleAzalt = () => {
    setSayac(sayac - 1);
  };

  return (
    <div className="sayac-container">
      <h1>React Sayaç</h1>
      <p className="sayac-degeri">{sayac}</p>
      <div className="buton-grup">
        <button onClick={handleAzalt}>- Azalt</button>
        <button onClick={handleArtir}>+ Artır</button>
      </div>
    </div>
  );
}

export default App;