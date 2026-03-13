import { useEffect, useState } from "react";
import FloatingPhoto from "./FloatingPhoto";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, X } from "lucide-react";
const TimelineItem = ({ item, index }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEven = index % 2 === 0;
  // const Icon = item.icon;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative mb-40 flex justify-between items-center w-full flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} ${isOpen ? "z-[100]" : "z-10"}`}
    >
      <div className="hidden md:flex w-5/12 justify-center relative">
        <FloatingPhoto
    
          src={`https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg`}
          className="relative !top-0 !left-auto !right-auto"
          rotate={isEven ? 8 : -8}
          speed={0.03}
        />
      </div>


      <div
        className={`z-50 w-14 h-14 rounded-full border-4 border-white absolute left-2 md:left-1/2 md:-translate-x-1/2 ${item.dot} text-white flex items-center justify-center shadow-xl`}
      >
          {/* <Icon size={20} fill="currentColor" /> */}
      </div>


      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        onClick={() => setIsOpen(true)}
        className={`w-[85%] md:w-5/12 ml-14 md:ml-0 p-5 rounded-[2.5rem] ${item.cardBg} shadow-2xl cursor-pointer border border-white/60 group relative overflow-hidden transition-all`}
      >
        <div className="relative aspect-video mb-4 rounded-[1.5rem] overflow-hidden border-2 border-white shadow-md bg-stone-200">
          <iframe
            src={item.canvaUrl}
            className="w-full h-full border-none pointer-events-none scale-105"
          />
          {/* <img
  src={"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"}
  className="w-full h-full object-cover"
/> */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 backdrop-blur-sm transition-all">
            <Camera size={24} className="text-white" />
          </div>
        </div>
        <div className="px-1 text-left">
          <span
            className={`text-[10px] font-black tracking-widest ${item.accent} opacity-80 uppercase`}
          >
            {item.date}
          </span>
          <h3 className="text-stone-900 text-xl font-bold mt-1 mb-2 tracking-tight">
            {item.title}
          </h3>
          <p className="text-stone-800/70 font-medium text-xs leading-relaxed line-clamp-2">
            {item.desc}
          </p>
          <div
            className={`mt-4 inline-block text-[9px] font-bold px-3 py-1 rounded-full bg-white/60 ${item.accent}`}
          >
            XEM ALBUM 📷
          </div>
        </div>
      </motion.div>


      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full max-w-6xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/80 p-3 rounded-full shadow-lg"
              >
                <X size={20} />
              </button>
              <iframe
                src={item.canvaUrl}
                className="w-full h-full border-none"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TimelineItem;