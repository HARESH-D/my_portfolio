import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { useEffect } from 'react';

/**
 * Video Modal Component
 * Displays project demo videos in a modal overlay
 */

export default function VideoModal({ isOpen, onClose, videoUrl, title }) {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!videoUrl) return null;

  // Convert various video URLs to embed format
  const getEmbedUrl = (url) => {
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    
    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    
    // Loom
    if (url.includes('loom.com')) {
      const videoId = url.split('share/')[1]?.split('?')[0];
      return `https://www.loom.com/embed/${videoId}?autoplay=1`;
    }
    
    // Direct video files (mp4, webm, etc.)
    if (url.match(/\.(mp4|webm|ogg)$/i)) {
      return url;
    }
    
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);
  const isDirectVideo = embedUrl.match(/\.(mp4|webm|ogg)$/i);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl bg-dark-800 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-700">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Play size={20} className="text-primary-500" />
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-dark-700 transition-colors text-dark-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative bg-black" style={{ paddingTop: '56.25%' }}>
              {isDirectVideo ? (
                <video
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  src={embedUrl}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={embedUrl}
                  title={title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Footer hint */}
            <div className="p-3 text-center text-sm text-dark-400 bg-dark-900">
              Press <kbd className="px-2 py-1 bg-dark-700 rounded text-white">ESC</kbd> or click outside to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
