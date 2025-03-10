import SectionLayout from '../templates/SectionLayout';
import img5 from '../../assets/images/5.png';
import locationIcon from '../../assets/icons/location.svg';
import waveIcon from '../../assets/icons/wave.svg';
import checkIcon from '../../assets/icons/check.svg';

const Location = () => {
  return (
    <SectionLayout
      key='location'
      sectionId='location'
      title='Un emplacement privilégié'
      className='location'
    >
      <div className='location__content'>
        {/* TODO map */}
        <img src={img5} alt='' className='location__map' />
        <div className='location__infos'>
          <div className='location__info'>
            <img src={locationIcon} alt='' className='location__info-icon' />
            <p>À seulement 5 minutes du centre-ville de Vannes</p>
          </div>
          <div className='location__info'>
            <img src={waveIcon} alt='' className='location__info-icon' />
            <p>Proximité immédiate du Golfe du Morbihan</p>
          </div>
          <div className='location__info'>
            <img src={waveIcon} alt='' className='location__info-icon' />
            <p>Sentiers piétons et pistes cyclables à proximité</p>
          </div>
          <p>À 5 minutes de :</p>
          <ul className='location__info--nearby'>
            <li className='location__info'>
              <img src={checkIcon} alt='' className='location__info-icon' />
              Centre ville
            </li>
            <li className='location__info'>
              <img src={checkIcon} alt='' className='location__info-icon' />
              Gare SNCF
            </li>
            <li className='location__info'>
              <img src={checkIcon} alt='' className='location__info-icon' />
              Écoles et universités
            </li>
            <li className='location__info'>
              <img src={checkIcon} alt='' className='location__info-icon' />
              Restaurants et bars
            </li>
            <li className='location__info'>
              <img src={checkIcon} alt='' className='location__info-icon' />
              Hôpital
            </li>
            <li className='location__info'>
              <img src={checkIcon} alt='' className='location__info-icon' />
              Commerces
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Location;
