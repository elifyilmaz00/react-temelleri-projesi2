import './App.css';
// ProfilKarti component'ini import ediyoruz.
import ProfilKarti from './ProfilKarti.jsx';

// Kullanacağımız verileri bir dizi içinde tutalım.
const kullanicilar = [
  {
    ad: 'Lexa Smith',
    meslek: 'Front-End Mimar',
    resim: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500'
  },
  {
    ad: 'Elif Öğrenci',
    meslek: 'React Geliştirici Adayı',
    resim: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500'
  },
  {
    ad: 'John Doe',
    meslek: 'Full-Stack Geliştirici',
    resim: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500'
  }
];

function App() {
  return (
    // <>...</> : Boş Fragment. Gereksiz bir div oluşturmamak için kullanılır.
    <>
      <h1>Ekip Üyeleri</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/*
          JavaScript'in .map() metodunu kullanarak 'kullanicilar' dizisindeki her bir
          eleman için bir 'ProfilKarti' component'i oluşturuyoruz.
          Bu, Faz 1'de öğrendiğimiz en önemli yeteneklerden biriydi!
        */}
        {kullanicilar.map((kullanici, index) => (
          <ProfilKarti
            key={index} // React'in listeleri verimli yönetmesi için gereken özel bir prop.
            ad={kullanici.ad}
            meslek={kullanici.meslek}
            resim={kullanici.resim}
          />
        ))}
      </div>
    </>
  );
}

export default App;