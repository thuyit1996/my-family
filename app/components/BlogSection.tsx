
export const blogPosts = [
  {
    id: 1,
    category: "Chuyện Bếp Núc",
    title: "Bí mật nồi bánh chưng của Nội",
    excerpt:
      "Năm nào cũng vậy, mùi lá dong và đỗ xanh quyện lại tạo nên cái Tết rất riêng...",
    date: "24 Tháng 12, 2023",
    image: "https://picsum.photos",
    readTime: "4 phút đọc",
  },
  {
    id: 2,
    category: "Hành Trình",
    title: "Vũng Tàu - Sóng vỗ và tiếng cười",
    excerpt:
      "Chuyến đi biển đầu tiên sau 2 năm cách ly, cả nhà ai cũng đen nhẻm nhưng vui...",
    date: "15 Tháng 8, 2023",
    image: "https://picsum.photos",
    readTime: "6 phút đọc",
  },
]
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import { useState } from "react";
import BlogDetail from "./BlogDetail";


const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);


  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-32 relative z-40">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-stone-800 italic mb-4"
          >
            Family Journal
          </motion.h2>
          <p className="text-stone-500 font-serif italic text-lg">
            &quot;Nơi những dòng chữ lưu giữ hơi ấm gia đình&quot;
          </p>
        </div>


        {/* Grid 2 cột hoặc 3 cột tùy bro chọn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>


        <div className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full border border-stone-200 bg-white/20 backdrop-blur-md text-[11px] font-black tracking-[0.4em] uppercase hover:bg-stone-900 hover:text-white transition-all shadow-lg">
            Tất cả bài viết
          </button>
        </div>
      </section>
      <AnimatePresence>
        {selectedPost && (
          <BlogDetail
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default BlogSection;
