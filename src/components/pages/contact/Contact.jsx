import Input from './../../reusables/input/Input';
const Contact = () => {

  return (
    <section className='p-4'>
      <h3>Let{`'`}s talk about everything </h3>
      <p>
        Drop us a message or contact us on any of the social
        media options below the form. We respond within 24
        hours.
      </p>
      <form action="" className='mt-8'>
        <h3 className='text-center'>Contact Form</h3>
        <Input label='Name: '></Input>
        <Input label='Email: '></Input>
        <Input label='Message: '></Input>
      </form>
    </section>
  );
};

export default Contact;