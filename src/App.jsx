import { useState } from 'react';
import './App.css';

function App() {
  // 1. başlangıç değeri 0 olan bir state oluştur.
  const [sayac, setSayac] = useState(0);

  //2. artır butonu için fonksiyon.
  const handleArtir = () => {
    setSayac(sayac + 1);
  };

  //3. azalt butonu için fonksiyon.
  const handleAzalt = () => {

    setSayac(sayac - 1);

  };

  //4. sıfırlama butonu için fonksiyon.

  const handleSifirla = () => {
    setSayac(0);
  };

  
  return (
    <div className="sayac-container">
      <h1>React Sayaç</h1>
      <p className="sayac-degeri">{sayac}</p>
      <div className="buton-grup">
        <button onClick={handleAzalt}>- Azalt</button>
        <button onClick={handleSifirla}>0 Sıfırla</button>
        <button onClick={handleArtir}>+ Artır</button>
      </div>
    </div>
    
    
  );
}

export default App;