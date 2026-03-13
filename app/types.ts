import type { MotionValue } from "framer-motion";
import type { ReactNode } from "react";

export type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
};

export type TimelineEntry = {
  id: number;
  title: string;
  date: string;
  cardBg: string;
  accent: string;
  dot: string;
  icon: ReactNode;
  canvaUrl: string;
  desc: string;
};

export type MemoryDustProps = {
  color: string | MotionValue<string>;
};
