import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

// MediaItemType defines the structure of a media item
export interface MediaItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  span: string;
}

// MediaItem component renders either a video or image based on item.type
const MediaItem = ({ 
  item, 
  className, 
  onClick 
}: { 
  item: MediaItemType; 
  className?: string; 
  onClick?: () => void; 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Reference for video element
  const [isInView, setIsInView] = useState(false); // To track if video is in the viewport
  const [isBuffering, setIsBuffering] = useState(true); // To track if video is buffering

  // Intersection Observer to detect if video is in view and play/pause accordingly
  useEffect(() => {
    if (item.type !== 'video') return;

    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting); // Set isInView to true if the video is in view
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current); // Start observing the video element
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // Clean up observer when component unmounts
      }
    };
  }, [item.type]);

  // Handle video play/pause based on whether the video is in view or not
  useEffect(() => {
    if (item.type !== 'video') return;
    
    let mounted = true;

    const handleVideoPlay = async () => {
      if (!videoRef.current || !isInView || !mounted) return; // Don't play if video is not in view or component is unmounted

      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false);
          await videoRef.current.play(); // Play the video if it's ready
        } else {
          setIsBuffering(true);
          await new Promise((resolve) => {
            if (videoRef.current) {
              videoRef.current.oncanplay = resolve; // Wait until the video can start playing
            }
          });
          if (mounted) {
            setIsBuffering(false);
            await videoRef.current.play();
          }
        }
      } catch (error) {
        console.warn("Video playback failed:", error);
      }
    };

    if (isInView) {
      handleVideoPlay();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      mounted = false;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    };
  }, [isInView, item.type]);

  if (item.type === 'video') {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: 'opacity 0.2s',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={item.url} // Image source URL
      alt={item.title} // Alt text for the image
      referrerPolicy="no-referrer"
      className={`${className} object-cover cursor-pointer`} // Style the image
      onClick={onClick} // Trigger onClick when the image is clicked
      loading="lazy" // Lazy load the image for performance
      decoding="async" // Decode the image asynchronously
    />
  );
};

// GalleryModal component displays the selected media item in a modal
interface GalleryModalProps {
  selectedItem: MediaItemType;
  isOpen: boolean;
  onClose: () => void;
  setSelectedItem: (item: MediaItemType | null) => void;
  mediaItems: MediaItemType[]; // List of media items to display in the modal
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 }); // Track the position of the dockable panel

  if (!isOpen) return null; // Return null if the modal is not open

  return (
    <>
      {/* Main Modal */}
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[600px] backdrop-blur-lg rounded-none sm:rounded-lg md:rounded-xl overflow-hidden z-[100]"
      >
        {/* Main Content */}
        <div className="h-full flex flex-col">
          <div className="flex-1 p-4 sm:p-6 md:p-8 flex items-center justify-center bg-gray-900/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                className="relative w-full aspect-[16/10] max-w-[95%] sm:max-w-[85%] md:max-w-4xl h-auto max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
                initial={{ y: 20, scale: 0.97 }}
                animate={{
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5
                  }
                }}
                exit={{
                  y: 20,
                  scale: 0.97,
                  transition: { duration: 0.15 }
                }}
              >
                <MediaItem item={selectedItem} className="w-full h-full object-contain bg-black" onClick={onClose} />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-serif font-medium tracking-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1.5 font-light leading-relaxed max-w-2xl">
                    {selectedItem.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md cursor-pointer transition-colors"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          id="btn-close-gallery-modal"
        >
          <X className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Draggable Dock */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => {
          setDockPosition(prev => ({
            x: prev.x + info.offset.x,
            y: prev.y + info.offset.y
          }));
        }}
        className="fixed z-[110] left-1/2 bottom-6 -translate-x-1/2 touch-none cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="relative rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.3)] p-2.5"
        >
          <div className="flex items-center gap-1.5">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(item);
                }}
                className={`
                  relative group
                  w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 
                  rounded-xl overflow-hidden 
                  cursor-pointer transition-all
                  ${selectedItem.id === item.id
                    ? 'ring-2 ring-white shadow-xl scale-110'
                    : 'hover:ring-1 hover:ring-white/40'}
                `}
                animate={{
                  scale: selectedItem.id === item.id ? 1.15 : 1,
                  y: selectedItem.id === item.id ? -4 : 0,
                }}
                whileHover={{
                  scale: 1.25,
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <MediaItem item={item} className="w-full h-full object-cover" onClick={() => setSelectedItem(item)} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                {selectedItem.id === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-2 bg-white/20 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[];
  title: string;
  description: string;
}

export const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ 
  mediaItems, 
  title, 
  description 
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
  const [items, setItems] = useState(mediaItems);
  const [isDragging, setIsDragging] = useState(false);

  // Sync state if initial props change
  useEffect(() => {
    setItems(mediaItems);
  }, [mediaItems]);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16 border-t border-gray-100" id="interactive-bento-gallery">
      <div className="mb-10 text-center space-y-2">
        <motion.h2
          className="text-2xl sm:text-3xl font-serif font-medium text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed uppercase tracking-wider"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[100px] sm:auto-rows-[120px] md:auto-rows-[130px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`media-${item.id}`}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm bg-gray-50 border border-gray-100/40 ${item.span}`}
                onClick={() => !isDragging && setSelectedItem(item)}
                variants={{
                  hidden: { y: 20, scale: 0.98, opacity: 0 },
                  visible: {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25
                    }
                  }
                }}
                whileHover={{ scale: 1.015 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.4}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => {
                  setIsDragging(false);
                  const moveDistance = info.offset.x + info.offset.y;
                  if (Math.abs(moveDistance) > 60) {
                    const newItems = [...items];
                    const draggedItem = newItems[index];
                    const targetIndex = moveDistance > 0 ?
                      Math.min(index + 1, items.length - 1) :
                      Math.max(index - 1, 0);
                    newItems.splice(index, 1);
                    newItems.splice(targetIndex, 0, draggedItem);
                    setItems(newItems);
                  }
                }}
              >
                <MediaItem
                  item={item}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  onClick={() => !isDragging && setSelectedItem(item)}
                />
                
                {/* Visual Overlay containing information */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                  <h3 className="text-white text-xs sm:text-sm font-serif font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[10px] sm:text-xs mt-1 font-light leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBentoGallery;
