import SectionLayout from '../templates/SectionLayout';
import Card from '../../components/Card';
import bedIcon from '../../assets/icons/bed.svg';
import garageIcon from '../../assets/icons/car.svg';
import treeIcon from '../../assets/icons/tree.svg';
import houseIcon from '../../assets/icons/house.svg';
import dpeIcon from '../../assets/icons/dpe.svg';
// import img2 from '../../assets/images/img2.webp';
// import img3 from '../../assets/images/img3.webp';
// import img4 from '../../assets/images/img4.webp';
import img2 from '../../assets/images/maison1.jpg';
import img3 from '../../assets/images/maison2.jpg';
import img4 from '../../assets/images/maison3.jpg';
import img5 from '../../assets/images/img4.webp';
import Cta from '../../components/Cta';

const Presentation = () => {
  return (
    <SectionLayout
      key='presentation'
      sectionId='presentation'
      className='presentation'
    >
      <p className='presentation__text'>
        Idéalement située en Bretagne Sud, cette propriété rare de 1080 m² de
        terrain paysagé offre{' '}
        <span className='bold'>deux habitations indépendantes</span> et une{' '}
        <span className='bold'>piscine chauffée</span>, garantissant confort et
        intimité. L'espace extérieur, sans vis-à-vis, comprend une{' '}
        <span className='bold'>vaste terrasse avec pergola</span>, parfaite pour
        profiter du climat doux en toute tranquillité. Une opportunité unique
        pour divers projets de vie.
      </p>
      <div className='presentation__cards'>
        <Card icon={bedIcon} title='Chambres' description='7' />
        <Card icon={garageIcon} title='Garage' description='2' />
        <Card icon={treeIcon} title='Terrain' description='1080m2' />
        <Card icon={houseIcon} title='Surface habitable' description='201m2' />
        <Card icon={dpeIcon} title='DPE' description='C' />
      </div>
      <div className='presentation__images'>
        {/* TODO carousel ?? */}

        <img
          src={img2}
          alt='salon chaleureux'
          className='presentation__image'
          loading='lazy'
          width={'568'}
          height={'426'}
        />

        <img
          src={img3}
          alt='grande cuisine ouverte'
          className='presentation__image'
          loading='lazy'
          width={'568'}
          height={'426'}
        />

        <img
          src={img4}
          alt='chambre spacieuse'
          className='presentation__image'
          loading='lazy'
          width={'568'}
          height={'426'}
        />
        <img
          src={img5}
          alt='Jardin arboré'
          className='presentation__image'
          loading='lazy'
          width={'568'}
          height={'426'}
        />
      </div>
      <Cta />
    </SectionLayout>
  );
};

export default Presentation;
