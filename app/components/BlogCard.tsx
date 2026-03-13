import { motion } from "framer-motion";
import type { BlogPost } from "../types";

const BlogCard = ({ post, onClick }: { post: BlogPost; onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ y: -15, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative bg-white/30 backdrop-blur-xl rounded-[2.5rem] p-4 border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500"
    >
      {/* Ảnh bìa bài viết */}
      <div className="relative h-72 w-full rounded-[2rem] overflow-hidden mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-[9px] font-black tracking-[0.2em] px-4 py-2 rounded-full uppercase">
          {post.category}
        </div>
      </div>


      {/* Nội dung chữ */}
      <div className="px-4 pb-4 text-left">
        <div className="flex items-center gap-4 mb-3 opacity-60 text-[10px] font-bold uppercase tracking-widest text-stone-500">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-stone-300 rounded-full" />
          <span>{post.readTime}</span>
        </div>
       
        <h3 className="text-2xl md:text-3xl font-serif italic text-stone-800 mb-4 leading-tight group-hover:text-rose-500 transition-colors">
          {post.title}
        </h3>
       
        <p className="text-stone-600/80 text-sm leading-relaxed line-clamp-3 mb-8 font-medium">
          {post.excerpt}
        </p>


        <motion.button
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-stone-900"
        >
          Đọc câu chuyện <div className="w-8 h-[1px] bg-stone-900 group-hover:w-12 transition-all" />
        </motion.button>
      </div>
    </motion.div>
  );
};
export default BlogCard;