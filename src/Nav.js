import { motion } from 'framer-motion';
import { email, githubUrl } from './constants';

const Social = ({ onHoverEnd, onHoverStart }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };

  const itemStyle = {
    textTransform: 'uppercase',
    color: 'white',
    textDecoration: 'none solid var(--accent-color)',
    cursor: 'pointer',
  };

  const hoverStyle = {
    textDecoration: 'line-through solid var(--accent-color)',
    color: 'grey',
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4ch',
      }}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.a
        title='About me'
        aria-label='About me'
        style={itemStyle}
        variants={childVariants}
        whileHover={hoverStyle}
        onHoverStart={() => onHoverStart('bio')}
        onHoverEnd={onHoverEnd}
      >
        bio
      </motion.a>
      <motion.a
        title='Go to my Github'
        aria-label='Go to my Github'
        href={githubUrl}
        target='_blank'
        rel='noreferrer'
        style={itemStyle}
        variants={childVariants}
        whileHover={hoverStyle}
        onHoverStart={() => onHoverStart('github')}
        onHoverEnd={onHoverEnd}
      >
        github
      </motion.a>
      <motion.a
        title='Send me an email'
        aria-label={`Send me an email to ${email}`}
        href={`mailto:${email}`}
        style={itemStyle}
        variants={childVariants}
        whileHover={hoverStyle}
        onHoverStart={() => onHoverStart('contact')}
        onHoverEnd={onHoverEnd}
      >
        contact
      </motion.a>
    </motion.div>
  );
};

export default Social;
