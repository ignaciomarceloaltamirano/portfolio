import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Loader from './Loader';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required.')
      .matches(
        /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
        'Name field must not contain special characters.'
      )
      .min(3, 'Name must contain at least 3 characters.')
      .max(16, 'Name must contain at less than 16 characters.'),
    message: Yup.string()
      .required('Message is required.')
      .min(1, 'Message must contain at least 1 character.')
      .max(255, 'Message must contain less than 255 characters.'),
    email: Yup.string()
      .required('Email is required.')
      .email('Email is invalid.'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmitForm = async (values) => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const { error } = await res.json();

      if (error) {
        toast.error(`Error: ${error}`);
        return;
      }

      setShowModal(true);
      reset();
    } catch (err) {
      toast.error(`Error: ${err}`);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <section id="contact" className="container mx-auto" ref={scrollRef}>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="modal"
            className="form-modal"
            onClick={() => setShowModal((prev) => !prev)}
          >
            <motion.div
              initial={{
                scale: 0.5,
              }}
              animate={{
                scale: 1,
              }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.4 }}
              key="modal-content"
              className="modal-content d-flex flex-column p-3 text-center justify-content-center align-items-center mx-auto h-50"
            >
              <p className="check-icon text-success">
                <AiOutlineCheckCircle />
              </p>
              <h2 className="mb-4">Thank you!</h2>
              <p className="mb-4">
                Your message has been successfully submitted.
              </p>
              <button className="btn btn-close-modal btn-success mb-4">
                Ok
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.h2
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: '0' }}
        transition={{ type: 'spring', duration: 1 }}
        viewport={{ once: true, scrollRef }}
        className="text-center mb-4 title"
      >
        Contact
      </motion.h2>
      <div className="row">
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: '0' }}
          transition={{ type: 'spring', duration: 1 }}
          viewport={{ once: true, scrollRef }}
          className="col-md-6 px-3 d-flex flex-column"
        >
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <label>Name</label>
            <input
              name="name"
              className="w-100"
              type="text"
              {...register('name')}
            />
            <p className="p-2 text-danger">{errors.name?.message}</p>
            <label>Email</label>
            <input
              name="email"
              className="w-100"
              type="email"
              {...register('email')}
            />
            <p className="p-2 text-danger">{errors.email?.message}</p>
            <label>Message</label>
            <textarea
              name="message"
              className="w-100"
              {...register('message')}
            />
            <p className="p-2 text-danger">{errors.message?.message}</p>
            {loading ? (
              <Loader />
            ) : (
              <button className="btn mt-3 mb-1" type="submit">
                Send
              </button>
            )}
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: '0' }}
          transition={{ type: 'spring', duration: 1 }}
          viewport={{ once: true, scrollRef }}
          className="col-md-6 px-3"
        >
          <p className="form-text">
            Feel free to leave me a message here, send me an email, or you can
            find me on social media!
          </p>
          <div className="d-flex justify-content-evenly my-3">
            <Link href="https://github.com/ignaciomarceloaltamirano/">
              <a target="_blank" rel="noopener" className="icon me-2">
                <AiOutlineGithub />
              </a>
            </Link>
            <Link href="https://github.com/ignaciomarceloaltamirano/">
              <a target="_blank" rel="noopener" className="icon">
                <AiOutlineLinkedin />
              </a>
            </Link>
          </div>
          <div></div>
          <p className="form-email">email: ignacio@altamirano.dev</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
