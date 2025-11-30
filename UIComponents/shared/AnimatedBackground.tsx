"use client";

import { useMemo } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';
import { useScroll, useTransform, m, type HTMLMotionProps } from 'framer-motion';

type MergedProps = Omit<BoxProps, keyof HTMLMotionProps<"div">> & HTMLMotionProps<"div">;

const MotionBox = m(Box);

const random = (min: number, max: number) => Math.random() * (max - min) + min;

function DustMote() {
  const x = useMemo(() => random(0, 100) + "vw", []);
  const y = useMemo(() => random(0, 150) + "vh", []);
  
  const duration = useMemo(() => random(3, 10), []);
  
  const opacity = useMemo(() => random(0.4, 0.7), []);
  const size = useMemo(() => random(1.5, 3), []);

  return (
    <m.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: opacity,
      }}
      animate={{
        x: [0, random(-200, 200), 0],
        y: [0, random(-200, 200), 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  );
}

export const AnimatedBackground = (props: MergedProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const motes = useMemo(() => {
    return Array(100).fill(0).map((_, i) => <DustMote key={i} />);
  }, []);

  return (
    <MotionBox
      position="fixed"
      width="100vw"
      height="150vh" 
      top="-50vh"    
      left={0}
      bgColor="background" 
      zIndex={-1} 
      overflow="hidden" 
      style={{ y }}
      {...props}
    >
      {motes}
    </MotionBox>
  );
};