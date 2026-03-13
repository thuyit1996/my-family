
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';


const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);
  const audioPath = "/audio/bg-audio.mp3";


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);


  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err: any) => console.log("Trình duyệt chặn autoplay:", err));
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <div className="fixed bottom-8 left-8 z-[100] flex items-center gap-4 font-sans">
      <audio ref={audioRef} src={audioPath} loop />


      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-4 bg-white/60 backdrop-blur-2xl border border-white/50 p-2 pr-6 rounded-full shadow-2xl shadow-rose-200/30 group cursor-pointer"
        onClick={togglePlay}
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ${isPlaying ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40 rotate-[360deg]' : 'bg-stone-100 text-stone-500'}`}>
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </div>


        <div className="flex flex-col select-none">
          <span className="text-[9px] font-black tracking-[0.2em] text-stone-400 uppercase leading-none mb-1">Atmospheric</span>
          <div className="flex items-center gap-2">
             <span className="text-sm font-serif italic font-bold text-stone-800 leading-none">Family Memories</span>
             
             <div className="flex gap-[3px] h-3 items-end mb-1">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: isPlaying ? [4, 12, 6, 14, 4] : 3 }}
                    transition={{ repeat: Infinity, duration: 0.6 + i * 0.1, ease: "easeInOut" }}
                    className="w-[2px] bg-rose-400/80 rounded-full"
                  />
                ))}
             </div>
          </div>
        </div>
      </motion.div>


      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-14 left-0 bg-stone-900 text-white text-[10px] font-bold py-2.5 px-4 rounded-2xl shadow-xl whitespace-nowrap"
          >
            Chạm để lắng nghe kỷ niệm ✨
            <div className="absolute -bottom-1 left-6 w-2 h-2 bg-stone-900 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default MusicPlayer;

