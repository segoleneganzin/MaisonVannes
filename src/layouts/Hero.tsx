import Cta from '../components/Cta';
import HeroImage from '../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__text'>
        <h1 className='hero__title bold'>
          Maison familiale avec piscine et grand jardin à vendre à Vannes -
          Morbihan
        </h1>
        <h2 className='hero__subtitle bold'>
          Propriété rare dans un quartier recherché à Vannes
        </h2>
        <p className='hero__description'>
          Vous rêvez de vous installer à Vannes, à deux pas du Golfe du
          Morbihan, tout en offrant à vos proches un accueil confortable et
          indépendant ? Cette propriété unique sera votre havre de paix !
        </p>
        <Cta />
        <p className='hero__price bold'>VENDU</p>
      </div>
      <div className='hero__img-container'>
        <img
          src={HeroImage}
          alt='Maison avec piscine et jardin à vendre à Vannes'
          className='hero__img'
          width={'832'}
          height={'624'}
        />
      </div>
    </section>
  );
};

export default Hero;
