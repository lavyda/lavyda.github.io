import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Greeting = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => setTimeout(() => setVisible(false), 1000));

  const variants = {
    idle: {
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        ease: 'easeOut',
      },
    },
    enter: {
      y: '100%',
    },
    leave: {
      y: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg-color',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--text-color)',
          position: 'absolute',
        }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
      ></motion.div>
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--bg-color',
          position: 'absolute',
        }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
      ></motion.div>
      <h1
        style={{
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          fontSize: '20vh',
          color: 'var(--text-color',
          fontWeight: 'lighter',
          mixBlendMode: 'difference',
        }}
      >
        <AnimatePresence>
          {visible && (
            <motion.span
              variants={variants}
              initial='enter'
              animate='idle'
              exit='leave'
              style={{ display: 'inline-block' }}
            >
              Hello
              <span style={{ color: 'var(--accent-color)' }}>.</span>
            </motion.span>
          )}
        </AnimatePresence>
      </h1>
    </div>
  );
};

export default Greeting;
