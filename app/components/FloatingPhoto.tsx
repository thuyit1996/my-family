import { motion, useScroll, useTransform } from "framer-motion";


const FloatingPhoto = ({
  src,
  className,
  delay = 0,
  rotate = 5,
  speed = 0.05,
}: any) => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 5000], [0, -1000 * speed]);
  return (
    <motion.div
      style={{ y: yParallax }}
      animate={{ rotate: [rotate, -rotate, rotate], y: [0, -15, 0] }}
      transition={{
        rotate: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-20 w-28 h-36 md:w-44 md:h-56 bg-white p-2 md:p-3 shadow-2xl border border-stone-100 hidden xl:block overflow-hidden ${className}`}
    >
      <div className="w-full h-[85%] bg-stone-100 overflow-hidden">
        <img
          src={src}
          className="w-full h-full object-cover grayscale opacity-80"
          alt="Memory"
        />
      </div>
      <div className="mt-2 text-center italic text-[9px] text-stone-400 font-serif uppercase tracking-tighter">
        Memory
      </div>
    </motion.div>
  );
};
export default FloatingPhoto;