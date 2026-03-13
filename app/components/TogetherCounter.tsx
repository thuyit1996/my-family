
import { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';


  const TimeUnit = ({ value, label }: any) => (
    <div className="flex flex-col items-center px-3 md:px-6">
      <motion.span
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-5xl font-black text-stone-800 tabular-nums"
      >
        {value.toString().padStart(2, '0')}
      </motion.span>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mt-2">
        {label}
      </span>
    </div>
  );


const TogetherCounter = ({ startDate }: any) => {
  const [timeLeft, setTimeLeft] = useState<any>({
    years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0
  });


  useEffect(() => {
    const start = new Date(startDate);
   
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now as any - (start as any);


      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365.25);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);


      setTimeLeft({ years, days, hours, minutes, seconds });
    }, 1000);


    return () => clearInterval(timer);
  }, [startDate]);



  return (
    <div className="flex items-center justify-center divide-x divide-stone-200 bg-white/40 backdrop-blur-md py-8 rounded-[2rem] shadow-xl border border-white/60 max-w-3xl mx-auto">
      {timeLeft.years > 0 && <TimeUnit value={timeLeft.years} label="Năm" />}
      <TimeUnit value={timeLeft.days} label="Ngày" />
      <TimeUnit value={timeLeft.hours} label="Giờ" />
      <TimeUnit value={timeLeft.minutes} label="Phút" />
      <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  );
};


export default TogetherCounter;
