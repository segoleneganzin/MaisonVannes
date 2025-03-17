import { useContactModal } from '../utils/hooks/useContactModal';

interface I_CtaProps {
  classname?: string;
}
const Cta: React.FC<I_CtaProps> = ({ classname }) => {
  const { toggleModal } = useContactModal();

  const toggleContactModal = () => {
    toggleModal();
  };

  return (
    <>
      <button className={`cta bold ${classname}`} onClick={toggleContactModal}>
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
