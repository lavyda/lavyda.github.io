import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Nav from './Nav';
import Contact from './Contact';
import Bio from './Bio';
import Github from './Github';
import Reading from './Reading';

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
      case 'reading':
        return <Reading />;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        width: 'calc(100% - (0.5rem * 2))',
        height: 'calc(100% - (0.5rem * 2))',
        padding: '0.5rem',
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
            style={{
              fontFamily: 'Nothing You Could Do',
              fontSize: '5vh',
              color: 'var(--accent-color)'
            }}
          >
            creative software developer
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
          onClick={(target) => setSelected(selected === target ? null : target)}
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
