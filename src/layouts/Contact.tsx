import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Modal, Form } from 'sg-library';
import { formFieldsContact } from '../utils/formFieldsConfig/formFieldsContact';
import { useContactModal } from '../utils/hooks/useContactModal';

const Contact = () => {
  const { isContactOpen, toggleModal } = useContactModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [btnText, setBtnText] = useState('Annuler');

  const formValues = {
    recipientEmail: 'ericganzin@gmail.com',
  };

  const sendEmail = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_JS_SERVICE_ID,
        import.meta.env.VITE_MAIL_JS_TEMPLATE_ID,
        '#contactForm',
        import.meta.env.VITE_MAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSend(true);
          setBtnText('Fermer');
          setErrorMessage('');
        },
        (error) => {
          console.log(error);
          setErrorMessage("Erreur lors de l'envoi");
        }
      );
  };

  const modalCustomTheme = {
    general: {
      errorColor: 'rgb(100, 0, 0)',
      textColor: '#2c7548',
    },
    modal: {
      border: 'none',
    },
    form: {
      textColor: '#2c7548',
    },
    button: {
      backgroundColor: 'rgb(100, 0, 0)',
    },
    field: {
      border: '1.5px solid #2c7548',
    },
  };
  return (
    <Modal
      isOpen={isContactOpen}
      toggleModal={toggleModal}
      overlayClickClose={false} /* Optionnal, default to true */
      title='Contact' /* Optionnal, default to null */
      btnText={btnText} /* Optionnal, default to null */
      fadeDuration={300} /* Optionnal, default to 0 */
      customTheme={modalCustomTheme}
    >
      {isSend ? (
        <div className='contact__validation'>
          <p className='text'>
            Votre demande de contact a bien été envoyée, nous reviendrons au
            plus vite vers vous.
          </p>
        </div>
      ) : (
        <div className='contact'>
          {isLoading ? (
            <p>Envoi en cours...</p>
          ) : (
            <Form
              formId={'contactForm'}
              fieldsConfig={formFieldsContact}
              btnText={'Envoyer'}
              onSubmitFunction={sendEmail}
              errorMessage={errorMessage}
              fieldNames={[
                'recipientEmail',
                'senderFirstname',
                'senderLastname',
                'senderTel',
                'senderEmail',
                'senderMessage',
              ]}
              fieldValue={formValues}
              customTheme={modalCustomTheme}
            />
          )}
        </div>
      )}
    </Modal>
  );
};

export default Contact;
