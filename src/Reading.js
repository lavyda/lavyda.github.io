import { motion } from 'framer-motion';
import { readingUrl } from './constants';

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const childVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  visible: { 
    opacity: 1,
    y: 0,
  },
}

const Reading = () => (
  <div style={{ display: 'flex' }}>
      <motion.a
        href={readingUrl}
        style={{
          fontFamily: 'Nothing You Could Do',
          fontSize: '3.5vh',
          color: 'white',
          textDecoration: 'none',
        }}
        whileHover={{
          textDecoration: 'underline',
        }}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        {'just some books I read'.split('').map((char, i) =>
          <motion.span key={`${char}${i}`} variants={childVariants}>
            {char}
          </motion.span>
        )}
      </motion.a>
  </div>
);

export default Reading;
