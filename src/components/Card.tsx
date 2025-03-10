interface I_CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<I_CardProps> = ({ icon, title, description }) => {
  return (
    <article className='card'>
      <div className='card__header'>
        <img src={icon} alt='' className='card__icon' />
        <h3 className='card__title bold'>{title}</h3>
      </div>
      <p className='card__description'>{description}</p>
    </article>
  );
};

export default Card;
