import { motion, useMotionTemplate } from "framer-motion";
import { memo } from "react";

const MemoryDust = memo(({ color }: {color: any}) => {
  const particles = Array.from({ length: 30 });

  const shadowStyle = useMotionTemplate`0 0 10px ${color}`;


  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 10;
        const blur = Math.random() * 2;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "110vh" }}
            animate={{
              y: "-10vh",
              x: [0, Math.sin(i) * 150, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              backgroundColor: color,
              boxShadow: shadowStyle,
              filter: `blur(${blur}px)`,
              background: "white",
            }}
          />
        );
      })}
    </div>
  );
});
export default MemoryDust;
MemoryDust.displayName = "MemoryDust";