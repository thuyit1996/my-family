
import {
  motion,
} from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
import { BlogPost } from "../types";


const BlogDetail = ({ post, onClose }: { post: BlogPost; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] bg-stone-100/95 backdrop-blur-3xl overflow-y-auto"
    >
      {/* Nút đóng */}
      <button onClick={onClose} className="fixed top-8 right-8 z-[90] bg-stone-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <X size={24} />
      </button>


      {/* Header ảnh lớn */}
      <div className="relative h-[50vh] md:h-[65vh] w-full">
        <img src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg' className="w-full h-full object-cover" alt={post.title} />
        <div className="absolute inset-0 bg-linear-to-t from-stone-100 via-transparent to-transparent" />
      </div>


      {/* Nội dung bài viết */}
      <article className="max-w-3xl mx-auto px-6 -mt-32 relative z-10 pb-40">
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white">
          <div className="flex items-center gap-3 text-rose-500 font-black text-[10px] tracking-[0.3em] uppercase mb-6">
            <span>{post.category}</span>
            <span className="w-1.5 h-1.5 bg-rose-200 rounded-full" />
            <span className="text-stone-400">{post.date}</span>
          </div>


          <h1 className="text-4xl md:text-6xl font-serif italic text-stone-900 leading-tight mb-10">
            {post.title}
          </h1>


          {/* Chèn nội dung chi tiết bài blog ở đây */}
          <div className="text-stone-700 text-lg leading-relaxed font-medium space-y-6 italic">
            <p>{post.excerpt}</p>
            <p>Nội dung chi tiết của câu chuyện gia đình sẽ được viết tiếp tại đây...</p>
            {/* Bro có thể nhúng thêm Iframe Canva Slide ở đây để xem thêm ảnh */}
          </div>
        </div>
      </article>
    </motion.div>
  );
};
export default BlogDetail
