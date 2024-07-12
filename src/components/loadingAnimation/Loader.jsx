import React from 'react';
import { motion } from 'framer-motion';

const loadingContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '150px',
  margin: '0 auto',
};

const loadingCircle = {
  display: 'block',
  width: '20px',
  height: '20px',
  backgroundColor: 'var(--pry-col)',
  borderRadius: '50%',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,  // Ensure the animation repeats infinitely
  repeatType: "mirror",  // To simulate yoyo effect
  ease: 'easeInOut',
};

const LoadingAnimation = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default LoadingAnimation;
