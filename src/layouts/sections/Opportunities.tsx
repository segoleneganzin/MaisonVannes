import SectionLayout from '../templates/SectionLayout';
import Card from '../../components/Card';
import peoplesIcon from '../../assets/icons/peoples.svg';
import transgenerationIcon from '../../assets/icons/transgeneration.svg';
import proIcon from '../../assets/icons/pro.svg';

const Opportunities = () => {
  return (
    <SectionLayout
      key='opportunities'
      sectionId='opportunities'
      title="Trois façons d'imaginer votre futur dans cette maison"
      className='opportunities'
    >
      <div className='opportunities__cards'>
        <Card
          icon={peoplesIcon}
          title='Pour ceux qui aiment accueillir famille et amis'
          description='Vous souhaitez vous installer à Vannes tout en offrant à vos proches un accueil
          chaleureux et autonome ? Cette propriété est idéale avec ses deux maisons indépendantes et son espace piscine convivial.'
        />
        <Card
          icon={transgenerationIcon}
          title='Un projet transgénérationnel'
          description="Une configuration parfaite pour accueillir plusieurs générations sous le même toit tout en préservant l'indépendance de chacun, idéal pour les seniors ou jeunes adultes."
        />
        <Card
          icon={proIcon}
          title='Pour une profession libérale'
          description='Combinez travail et vie de famille avec une seconde maison transformable en cabinet professionnel, offrant une séparation parfaite entre vie privée et activité.'
        />
      </div>
    </SectionLayout>
  );
};

export default Opportunities;
