import { motion } from 'framer-motion';

const Social = ({ onClick }) => {
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
    backgroundColor: 'transparent',
    border: 'none'
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
        flexWrap: 'wrap',
      }}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.button
        style={itemStyle}
        variants={childVariants}
        whileHover={hoverStyle}
        onClick={() => onClick('bio')}
      >
        bio
      </motion.button>
      <motion.button
        style={itemStyle}
        variants={childVariants}
        whileHover={hoverStyle}
        onClick={() => onClick('github')}
      >
        github
      </motion.button>
      <motion.button
        style={itemStyle}
        variants={childVariants}
        whileHover={hoverStyle}
        onClick={() => onClick('reading')}
      >
        reading
      </motion.button>
      <motion.button
        style={itemStyle}
        variants={childVariants}
        whileHover={hoverStyle}
        onClick={() => onClick('contact')}
      >
        contact
      </motion.button>
    </motion.div>
  );
};

export default Social;
