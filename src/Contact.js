import { motion } from 'framer-motion';
import { email } from './constants';

const Contact = () => (
  <motion.div
    initial={{ scale: 2 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    style={{
      width: `${email.length}ch`,
      height: `${email.length}ch`,
      borderRadius: '50%',
      backgroundColor: 'var(--accent-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <span
      style={{
        transform: 'rotate(-4deg)',
      }}
    >
      Say <br />
      {email}
    </span>
  </motion.div>
);

export default Contact;
