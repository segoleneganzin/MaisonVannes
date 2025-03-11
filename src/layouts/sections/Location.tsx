import SectionLayout from '../templates/SectionLayout';
import locationIcon from '../../assets/icons/location.svg';
import waveIcon from '../../assets/icons/wave.svg';
import cycleIcon from '../../assets/icons/cycle.svg';
import checkIcon from '../../assets/icons/check.svg';
import Icon from '../../components/Icon';

const Location = () => {
  const fiveMinutes = [
    'Centre ville',
    'Gare SNCF',
    'Écoles et universités',
    'Restaurants et bars',
    'Hôpital',
    'Carrefour Express (7j/7 - 8 à 21h)',
    'Boulangerie',
    'Pharmacie',
  ];
  return (
    <SectionLayout
      key='location'
      sectionId='location'
      title='Un emplacement privilégié'
      className='location'
    >
      <div className='location__content'>
        <div>
          <iframe
            width='425'
            height='350'
            src='https://www.openstreetmap.org/export/embed.html?bbox=-2.770700454711914%2C47.652813588135544%2C-2.699031829833985%2C47.67778472750453&amp;layer=mapnik&amp;'
            className='location__map'
          ></iframe>
          <small>
            <a
              href='https://www.openstreetmap.org/?mlat=47.66530&amp;mlon=-2.73487#map=15/47.66530/-2.73487'
              target='_blank'
              rel='noreferrer'
              className='location__map-link'
            >
              Ouvrir la carte
            </a>
          </small>
        </div>
        <div className='location__infos'>
          <div className='location__info'>
            <img
              src={locationIcon}
              alt=''
              className='location__info-icon icon'
            />
            <p>À seulement 5 minutes du centre-ville de Vannes</p>
          </div>
          <div className='location__info'>
            <img src={waveIcon} alt='' className='location__info-icon icon' />
            <p>Proximité immédiate du Golfe du Morbihan</p>
          </div>
          <div className='location__info'>
            <img src={cycleIcon} alt='' className='location__info-icon icon' />
            <p>Sentiers piétons et pistes cyclables à proximité</p>
          </div>
          <p>À 5 minutes de :</p>
          <ul className='location__info--nearby'>
            {fiveMinutes.map((info, index) => (
              <li key={index} className='location__info'>
                <Icon icon={checkIcon} className='location__info-icon' />
                {info}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Location;
