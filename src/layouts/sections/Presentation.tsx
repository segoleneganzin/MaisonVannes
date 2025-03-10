import SectionLayout from '../templates/SectionLayout';
import Card from '../../components/Card';
import bedIcon from '../../assets/icons/bed.svg';
import garageIcon from '../../assets/icons/car.svg';
import treeIcon from '../../assets/icons/tree.svg';
import houseIcon from '../../assets/icons/house.svg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
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
        terrain paysagé offre deux habitations indépendantes et une piscine
        chauffée, garantissant confort et intimité. L'espace extérieur, sans
        vis-à-vis, comprend une vaste terrasse avec pergola, parfaite pour
        profiter du climat doux en toute tranquillité. Une opportunité unique
        pour divers projets de vie.
      </p>
      <div className='presentation__cards'>
        <Card icon={bedIcon} title='Chambres' description='7' />
        <Card icon={garageIcon} title='Garage' description='2' />
        <Card icon={treeIcon} title='Terrain' description='1080m2' />
        <Card
          icon={houseIcon}
          title='Superficie habitable'
          description='201m2'
        />
        <Card icon={bedIcon} title='DPE' description='C' />
      </div>
      <div className='presentation__images'>
        {/* TODO carousel ?? */}
        <img src={img2} alt='' className='presentation__image' />
        <img src={img3} alt='' className='presentation__image' />
        <img src={img4} alt='' className='presentation__image' />
      </div>
      <Cta />
    </SectionLayout>
  );
};

export default Presentation;
