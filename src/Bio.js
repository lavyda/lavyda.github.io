import { motion } from 'framer-motion';

const Bio = () => {
  const containerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
      }}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <motion.span variants={childVariants}>
        Hey, I'm Vladmir and I'm software developer.
      </motion.span>
      <motion.span variants={childVariants}>
        I like problem solving and I'm passionate about user experience and
        design.
      </motion.span>
      <motion.span variants={childVariants}>
        Currently I'm building stuff at Visma Labs.
      </motion.span>
    </motion.div>
  );
};

export default Bio;
