import { motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const scrollRef = useRef(null);
  return (
    <section id="about" className="container mx-auto row" ref={scrollRef}>
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: '0' }}
        transition={{ type: 'spring', duration: 1 }}
        viewport={{ once: true, scrollRef }}
        className="d-flex borderalign-items-center text-center justify-content-start flex-column"
      >
        <h2 className="mb-3 title">About</h2>
        <h4>Get to know more about me</h4>
      </motion.div>
      <div className="row" ref={scrollRef}>
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: '0' }}
          transition={{ type: 'spring', duration: 1 }}
          viewport={{ once: true, scrollRef }}
          className="col-md-6 d-flex justify-content-cente align-items-star flex-column py-4"
        >
          <h3 className="text-center">Hello!</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            nobis ad corporis itaque quod suscipit dolorum doloremque sapiente
            perferendis tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            nobis ad corporis itaque quod suscipit dolorum doloremque sapiente
            perferendis tenetur?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: '0' }}
          transition={{ type: 'spring', duration: 1 }}
          viewport={{ once: true, scrollRef }}
          className="col-md-6 p-4"
        >
          <div className="text-center">
            <h3>My Skills</h3>
          </div>
          <div className="icons-grid text-center p-4 h-100">
            <div>
              <i className="devicon devicon-html5-plain"></i>
              <p className="text-uppercase">HTML5</p>
            </div>
            <div>
              <i className="devicon devicon-css3-plain"></i>
              <p className="text-uppercase">Css3</p>
            </div>
            <div>
              <i className="devicon devicon-sass-original"></i>
              <p className="text-uppercase">Sass</p>
            </div>
            <div>
              <i className="devicon devicon-bootstrap-plain"></i>
              <p className="text-uppercase">Bootstrap</p>
            </div>
            <div>
              <i className="devicon devicon-javascript-plain"></i>
              <p className="text-uppercase">Javascript</p>
            </div>
            <div>
              <i className="devicon devicon-react-original"></i>
              <p className="text-uppercase">React Js</p>
            </div>
            <div>
              <i className="devicon devicon-nextjs-original"></i>
              <p className="text-uppercase">Next Js</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
