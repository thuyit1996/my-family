'use client'


import { useMotionTemplate, useScroll, useTransform } from "framer-motion";
import MusicPlayer from "./components/MusicPlayer";
const MemoryDust = dynamic(() => import("./components/MemoryDust"), { ssr: false });
import { ChevronDown, Cloud, Flower2, Leaf, Sparkles, Heart, Star, Camera, Globe, MapPin, Users } from "lucide-react";
import DecorativeElement from "./components/DecorativeElement";
const TimelineItem = dynamic(() => import("./components/TimeLineItem"), { ssr: false });
import TogetherCounter from "./components/TogetherCounter";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import BlogSection from "./components/BlogSection";

const familyData = [
  {
    id: 1,
    title: "Lần Đầu Gặp Gỡ",
    date: "THÁNG 6, 2014",
    cardBg: "bg-linear-to-br from-rose-100 to-rose-300",
    accent: "text-rose-700",
    dot: "bg-rose-500",
    icon: Heart,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Buổi hẹn đầu tiên tại quán cà phê nhỏ, nơi những rung động đầu đời bắt đầu chớm nở.",
  },
  {
    id: 2,
    title: "Lời Cầu Hôn Bất Ngờ",
    date: "THÁNG 12, 2014",
    cardBg: "bg-linear-to-br from-purple-100 to-purple-300",
    accent: "text-purple-800",
    dot: "bg-purple-500",
    icon: Star,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Dưới ánh đèn lung linh của đêm Giáng Sinh, lời đồng ý đã gắn kết hai tâm hồn làm một.",
  },
  {
    id: 3,
    title: "Ngày Chung Đôi",
    date: "THÁNG 9, 2015",
    cardBg: "bg-linear-to-br from-pink-100 to-pink-300",
    accent: "text-pink-800",
    dot: "bg-pink-500",
    icon: Camera,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Đám cưới cổ tích diễn ra trong sự chúc phúc của gia đình và bạn bè thân thiết.",
  },
  {
    id: 4,
    title: "Trăng Mật Tại Bali",
    date: "THÁNG 10, 2015",
    cardBg: "bg-linear-to-br from-sky-100 to-sky-300",
    accent: "text-sky-800",
    dot: "bg-sky-500",
    icon: Globe,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Những ngày thảnh thơi ngắm bình minh trên biển, tận hưởng khoảnh khắc ngọt ngào nhất.",
  },
  {
    id: 5,
    title: "Tổ Ấm Đầu Tiên",
    date: "THÁNG 5, 2017",
    cardBg: "bg-linear-to-br from-amber-100 to-orange-300",
    accent: "text-orange-800",
    dot: "bg-orange-500",
    icon: Home,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Cầm trên tay chiếc chìa khóa căn hộ đầu tiên, cùng nhau sơn từng mảng tường kỷ niệm.",
  },
  {
    id: 6,
    title: "Thiên Thần Nhỏ Chào Đời",
    date: "THÁNG 1, 2019",
    cardBg: "bg-linear-to-br from-emerald-100 to-teal-300",
    accent: "text-teal-800",
    dot: "bg-teal-500",
    icon: Sparkles,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Tiếng khóc chào đời của con yêu đã khiến cả nhà vỡ òa trong hạnh phúc khôn cùng.",
  },
  {
    id: 7,
    title: "Sinh Nhật 1 Tuổi Của Con",
    date: "THÁNG 1, 2020",
    cardBg: "bg-linear-to-br from-yellow-100 to-yellow-300",
    accent: "text-yellow-800",
    dot: "bg-yellow-500",
    icon: Star,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Bữa tiệc nhỏ ấm cúng đánh dấu cột mốc con chập chững những bước đi đầu đời.",
  },
  {
    id: 8,
    title: "Chuyến Đi Xa Cả Gia Đình",
    date: "THÁNG 7, 2022",
    cardBg: "bg-linear-to-br from-blue-100 to-blue-300",
    accent: "text-blue-800",
    dot: "bg-blue-600",
    icon: MapPin,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Lần đầu tiên con được thấy biển khơi bao la tại Phú Quốc xinh đẹp.",
  },
  {
    id: 9,
    title: "Kỷ Niệm 8 Năm Ngày Cưới",
    date: "THÁNG 9, 2023",
    cardBg: "bg-linear-to-br from-indigo-100 to-indigo-300",
    accent: "text-indigo-800",
    dot: "bg-indigo-500",
    icon: Heart,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Tình yêu vẫn vẹn nguyên như ngày đầu, nhưng sâu sắc và bền chặt hơn bao giờ hết.",
  },
  {
    id: 10,
    title: "Hướng Tới Tương Lai",
    date: "THÁNG 3, 2024",
    cardBg: "bg-linear-to-br from-stone-200 to-stone-400",
    accent: "text-stone-800",
    dot: "bg-stone-600",
    icon: Users,
    canvaUrl: "https://www.canva.com/design/DAHDubzkotc/_jjjTx8eTJQQImsE-Fkq_Q/view?embed",
    desc: "Cùng nhau viết tiếp những chương mới, vẽ thêm những màu sắc hạnh phúc cho gia đình.",
  },
];
{/* <div style="position: relative; width: 100%; height: 0; padding-top: 150.0000%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"    src="https://www.canva.com/design/DAHD5W7pC2g/4NynOah-thoWCCkZ7ASY9Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">  </iframe></div><a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAHD5W7pC2g&#x2F;4NynOah-thoWCCkZ7ASY9Q&#x2F;view?utm_content=DAHD5W7pC2g&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Beige Aesthetic Lovely Family Photo College Portrait</a> của Thủy Vũ Văn */ }
export default function Home() {
  const { scrollYProgress } = useScroll();
  const headerCanvaUrl =
    "https://www.canva.com/design/DAHD4t6zxDM/W2IYqYSzQtE_0PBbUrpujQ/view?embed&autoplay=1&loop=1&muted=1"
  const colorCenter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#fff7ed", "#fff1f2", "#f0f9ff"],
  );
  const colorEdge = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ffedd5", "#ffe4e6", "#e0f2fe"],
  );
  const background = useMotionTemplate`radial-gradient(circle at 50% 50%, ${colorCenter} 0%, ${colorEdge} 100%)`;
  const dustColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f59e0b", "#fb7185", "#38bdf8"],
  );

  return (
    <motion.div
      style={{ background }}
      className="min-h-screen font-sans text-stone-900 relative overflow-x-clip transition-colors duration-700"
    >
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.05) 100%)",
        }}
      />
      <div className="particles" />
      <MusicPlayer />
      <MemoryDust color={dustColor} />
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src={`${headerCanvaUrl}`}
            className="lg:block absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none brightness-[0.7]"
            allow="autoplay; fullscreen; clipboard-write"
            loading="lazy"
          />

          {/* <iframe
            src="https://www.canva.com/design/DAHD5W7pC2g/4NynOah-thoWCCkZ7ASY9Q/view?embed&autoplay=1&loop=1&mute=1"
            className="lg:hidden absolute inset-0 w-[115vw] h-[115vh] border-none brightness-[0.7]"
            allow="autoplay; fullscreen"
          /> */}
           <iframe
      src="https://www.canva.com/design/DAHD5W7pC2g/4NynOah-thoWCCkZ7ASY9Q/view?embed&autoplay=1&loop=1&mute=1"
      className="lg:hidden absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none brightness-[0.7]"
      allow="autoplay; fullscreen"
    />
          <div className="absolute inset-0 bg-linear-to-b from-stone-950/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex justify-center gap-3 mb-6 text-rose-300">
              {[1, 2, 3].map((i) => (
                <Heart key={i} size={28} fill="currentColor" />
              ))}
            </div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="mt-12 text-white/40 flex flex-col items-center gap-2 cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <span className="text-[9px] font-black tracking-widest uppercase italic">
                Cuộn xuống để xem
              </span>
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="relative z-50 -mt-20 px-6">
        <div className="text-center mb-6">
          <span className="text-stone-500 italic font-serif text-lg">
            &quot;Chúng ta đã bên nhau được...&quot;
          </span>
        </div>
        <TogetherCounter startDate="1995-06-15" />{" "}
      </section>
      {/* 2. TIMELINE SECTION */}
      <section className="max-w-6xl mx-auto px-6 relative py-40">
        <DecorativeElement
          className="top-0 left-[5%] text-sky-400"
          speed={-0.1}
        >
          <Cloud size={100} fill="currentColor" />
        </DecorativeElement>
        <DecorativeElement
          className="top-[500px] right-[8%] text-rose-400"
          speed={0.15}
        >
          <Cloud size={150} fill="currentColor" />
        </DecorativeElement>
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-stone-900/10 z-10" />


        <div className="hidden md:block">
          <DecorativeElement
            className="top-[15%] left-[47%] text-emerald-500"
            speed={0.08}
          >
            <Leaf size={50} fill="currentColor" className="-rotate-45" />
          </DecorativeElement>
          <DecorativeElement
            className="top-[25%] left-[51%] text-rose-400"
            speed={-0.05}
          >
            <Flower2 size={40} fill="currentColor" />
          </DecorativeElement>
          <DecorativeElement className="bottom-[10%] left-[48%] text-emerald-600">
            <Leaf size={70} fill="currentColor" className="rotate-90" />
          </DecorativeElement>
        </div>


        <div className="text-center mb-52 relative z-40">
          <h2 className="text-5xl md:text-7xl font-black text-stone-800 tracking-tight italic">
            Memory Garden
          </h2>
          <div className="w-16 h-1.5 bg-stone-900 mx-auto mt-6 rounded-full shadow-lg"></div>
        </div>


        <section className="max-w-6xl mx-auto px-6 relative py-40">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-linear-to-b from-transparent via-stone-200 to-transparent z-10" />

          <div className="absolute top-20 right-0 text-[15rem] font-black text-stone-100 -z-10 select-none">
            FAM
          </div>
          <motion.div
            animate={{
              width: `${2 + 0.5 / 20}px`,
              boxShadow: `0 0 ${0.5 / 5}px rgba(251, 113, 133, 0.4)`,
              opacity: 0.3 + 0.5 / 255,
            }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 h-full bg-linear-to-b from-rose-400 via-sky-400 to-transparent z-10 rounded-full"
          />

          {familyData.map((item, index) => (
            <div key={item.id} className="relative 333">
              {index % 2 === 0 && (
                <DecorativeElement
                  className="right-[-10%] top-0 text-amber-200/50"
                  speed={0.2}
                >
                  <Sparkles size={120} />
                </DecorativeElement>
              )}
              <TimelineItem item={item} index={index} />
            </div>
          ))}
        </section>
      </section>


      <BlogSection />


      <footer className="py-24 text-center border-t border-stone-200 bg-white/20 backdrop-blur-xl">
        <p className="italic text-stone-400 font-serif text-lg">
          &quot;Family: Where life begins and love never ends.&quot;
        </p>
      </footer>
    </motion.div>
  );
}