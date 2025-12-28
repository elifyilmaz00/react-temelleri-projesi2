// Bu component'in 3 tane prop almasını bekliyoruz: resim, ad, ve meslek.
// Parametre olarak 'props' yazmak yerine, doğrudan destructuring yapıyoruz.
function ProfilKarti({ resim, ad, meslek }) {
  return (
    <div className="profil-karti">
      <img src={resim} alt={`${ad} profil resmi`} />
      <h2>{ad}</h2>
      <p>{meslek}</p>
    </div>
  );
}

// Bu component'i başka dosyalarda kullanabilmek için export ediyoruz.
export default ProfilKarti;