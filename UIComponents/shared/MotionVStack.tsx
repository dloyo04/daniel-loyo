"use client";

import { VStack, type StackProps } from "@chakra-ui/react";
import { m, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type MergedProps = Omit<StackProps, keyof HTMLMotionProps<"div">> & HTMLMotionProps<"div">;

const MotionVStackComponent = m(VStack);

export const MotionVStack = forwardRef<HTMLDivElement, MergedProps>((props, ref) => {
  return (
    <MotionVStackComponent
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      {...props}
    />
  );
});

MotionVStack.displayName = "MotionVStack";