type InputTag = 'select' | 'input' | 'textarea';
type InputType =
  | 'text'
  | 'email'
  | 'url'
  | 'tel'
  | 'checkbox'
  | 'radio'
  | 'submit';

export const formFieldsContact = {
  recipientEmail: {
    tag: 'input' as InputTag,
    label: 'Email',
    type: 'email' as InputType,
    hidden: true,
  },
  senderFirstname: {
    tag: 'input' as InputTag,
    label: 'Prénom',
    type: 'text' as InputType,
    fieldErrorMessage: 'Veuillez renseigner votre prénom',
  },
  senderLastname: {
    tag: 'input' as InputTag,
    label: 'Nom',
    type: 'text' as InputType,
    fieldErrorMessage: 'Veuillez renseigner votre nom',
  },
  senderTel: {
    tag: 'input' as InputTag,
    label: 'Téléphone',
    type: 'number' as InputType,
    fieldErrorMessage: 'Veuillez renseigner votre numéro de téléphone',
  },
  senderEmail: {
    tag: 'input' as InputTag,
    label: 'Email',
    type: 'email' as InputType,
    pattern: /\S+@\S+\.\S+/,
    fieldErrorMessage: 'Veuillez renseigner votre email',
  },
  senderMessage: {
    tag: 'textarea' as InputTag,
    label: 'Message',
    type: 'text' as InputType,
    fieldErrorMessage: 'Veuillez renseigner votre message',
  },
};
