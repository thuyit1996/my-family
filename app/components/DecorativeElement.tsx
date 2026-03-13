import { motion, useScroll, useTransform } from "framer-motion";

const DecorativeElement = ({ children, className, delay = 0, speed = 0.1 }: any) => {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 5000], [0, 1000 * speed]);
  return (
    <motion.div
      style={{ y: yTransform }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay, type: "spring" }}
      className={`absolute z-30 pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DecorativeElement;