import { X } from "lucide-react"
import { motion } from "framer-motion"

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  canvaUrl: string
}

const TimeLineDetail = ({ isOpen, setIsOpen, canvaUrl }: Props) => {
  if (!isOpen) return null

  return (
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
          src={canvaUrl}
          className="w-full h-full border-none"
          allowFullScreen
        />
      </motion.div>
    </div>
  )
}

export default TimeLineDetail