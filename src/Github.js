import { motion } from 'framer-motion';
import { githubUrl } from './constants';

const Github = () => (
  <motion.a
    href={githubUrl}
    target='_blank'
    rel='noreferrer'
    style={{
      display: 'flex',
      color: 'white',
      textDecoration: 'none',
    }}
    whileHover={{
      textDecoration: 'underline',
    }}
  >
    <motion.code
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      &#123;
    </motion.code>
    <div style={{ display: 'flex', overflowX: 'hidden' }}>
      <motion.code
        initial={{
          x: '-100%',
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        See some of my side projects&#125;
      </motion.code>
    </div>
  </motion.a>
);

export default Github;
