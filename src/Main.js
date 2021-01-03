import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Nav from './Nav';
import Contact from './Contact';
import Bio from './Bio';
import Github from './Github';
import './glitch.css';

const Main = () => {
  const [selected, setSelected] = useState(null);

  const selectedContent = () => {
    switch (selected) {
      case 'bio':
        return <Bio />;
      case 'github':
        return <Github />;
      case 'contact':
        return <Contact />;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(12, 1fr)',
      }}
    >
      <div
        style={{
          gridRow: '5 / 9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          role='heading'
          aria-level='1'
          style={{
            color: 'white',
            fontSize: '5vh',
            fontWeight: 'lighter',
            letterSpacing: '0.5ch',
            display: 'flex',
            flexWrap: 'wrap',
            overflowY: 'hidden',
          }}
        >
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }}>
            VLADIMIR
          </motion.div>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            style={{
              marginLeft: '1ch',
              fontStyle: 'italic',
            }}
          >
            KOVALSKY
          </motion.div>
        </div>
        <div
          style={{
            transform: 'rotate(-4deg) translateY(-1ch)',
            overflowY: 'hidden',
          }}
        >
          <motion.div
            role='heading'
            aria-level='2'
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            className='glitch'
            data-glitch='creative software engineer'
            style={{
              fontFamily: 'Nothing You Could Do',
              fontSize: '5vh',
            }}
          >
            creative software engineer
          </motion.div>
        </div>
      </div>

      <div
        style={{
          gridRow: '12 / 13',
          alignSelf: 'center',
        }}
      >
        <Nav
          onHoverStart={(target) => setSelected(target)}
          onHoverEnd={() => setSelected(null)}
        />
      </div>
      <div
        style={{
          gridRow: '9 / 12',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AnimatePresence>{selected && selectedContent()}</AnimatePresence>
      </div>
    </div>
  );
};

export default Main;
