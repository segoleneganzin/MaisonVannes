interface I_CtaProps {
  classname?: string;
}
const Cta: React.FC<I_CtaProps> = ({ classname }) => {
  const handleClick = () => {
    alert('Vous avez cliqué sur le bouton CTA');
  };
  return (
    <>
      <button className={`cta bold ${classname}`} onClick={handleClick}>
        Demander des infos
        <div className='cta__blobs'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </>
  );
};

export default Cta;
