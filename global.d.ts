import { ThreeElements } from '@react-three/fiber';
import { HTMLMotionProps } from 'framer-motion';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

// Fix framer-motion types for motion.div, motion.h2, motion.p, etc.
declare module 'framer-motion' {
  export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
    initial?: any;
    animate?: any;
    exit?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
  }
}

export {};
