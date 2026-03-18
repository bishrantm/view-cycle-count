import { useState, useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const font = "var(--font-family)";

/* ═════════════════════════════════════════════════════════════════════════════
 * Item Image Preview Modal
 *
 * Adapted for cycle count nested row items. Shows item image with zoom,
 * navigation (if multiple images), and item details panel.
 * ═════════════════════════════════════════════════════════════════════════════ */

export interface PreviewItem {
  id: string;
  name: string;
  image: string;
  description: string;
  type?: string;
}

interface ItemImagePreviewModalProps {
  item: PreviewItem;
  onClose: () => void;
}

export function ItemImagePreviewModal({ item, onClose }: ItemImagePreviewModalProps) {
  const images = [item.image];
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
    setIsZoomed(false);
  }, [totalImages]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    setIsZoomed(false);
  }, [totalImages]);

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, goNext, goPrev]);

  /* Prevent body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* Scroll description back to top when switching images */
  useEffect(() => {
    descRef.current?.scrollTo({ top: 0 });
  }, [currentIndex]);

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "var(--lightbox-backdrop)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview for ${item.id}`}
    >
      {/* ── Modal container ── */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: "min(560px, calc(100vw - 48px))",
          maxHeight: "calc(100vh - 64px)",
          borderRadius: "var(--radius)",
          background: "var(--card)",
          boxShadow: "var(--lightbox-shadow)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ════════════════════════════════════════════════════════════════════
         * IMAGE AREA — dark background with navigation & controls
         * ════════════════════════════════════════════════════════════════════ */}
        <div
          className="relative flex items-center justify-center shrink-0"
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            background: "var(--foreground)",
            overflow: "hidden",
          }}
        >
          {/* Close button (top-right) */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 flex items-center justify-center transition-colors hover:bg-[var(--lightbox-hover-danger)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--lightbox-control-bg)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--lightbox-control-border)",
              cursor: "pointer",
            }}
            aria-label="Close preview"
          >
            <X size={18} style={{ color: "var(--primary-foreground)" }} />
          </button>

          {/* Slide counter pill (bottom-center, only when >1 image) */}
          {totalImages > 1 && (
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center"
              style={{
                padding: "var(--spacing-1) var(--spacing-2-5)",
                borderRadius: "100px",
                background: "var(--lightbox-pill-bg)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--lightbox-control-border-subtle)",
              }}
            >
              <span
                style={{
                  fontFamily: font,
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary-foreground)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                {currentIndex + 1}
              </span>
              <span
                style={{
                  fontFamily: font,
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--lightbox-text-muted)",
                  lineHeight: 1,
                  margin: "0 var(--spacing-0-5)",
                }}
              >
                /
              </span>
              <span
                style={{
                  fontFamily: font,
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--lightbox-text-secondary)",
                  lineHeight: 1,
                }}
              >
                {totalImages}
              </span>
            </div>
          )}

          {/* Image */}
          <ImageWithFallback
            src={images[currentIndex]}
            alt={`${item.id} - image ${currentIndex + 1} of ${totalImages}`}
            className="select-none"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: isZoomed ? "scale(1.6)" : "scale(1)",
              cursor: isZoomed ? "zoom-out" : "zoom-in",
            }}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Prev / Next arrows */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:bg-white/25 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--lightbox-control-bg-active)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--lightbox-control-border-subtle)",
                  cursor: "pointer",
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} style={{ color: "var(--primary-foreground)" }} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:bg-white/25 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--lightbox-control-bg-active)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--lightbox-control-border-subtle)",
                  cursor: "pointer",
                }}
                aria-label="Next image"
              >
                <ChevronRight size={20} style={{ color: "var(--primary-foreground)" }} />
              </button>
            </>
          )}

          {/* Zoom controls (bottom-right) */}
          <div
            className="absolute bottom-3 right-3 z-10 flex items-center"
            style={{ gap: "var(--spacing-1)" }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
              className="flex items-center justify-center transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "var(--radius-sm)",
                background: isZoomed ? "var(--lightbox-control-bg-active)" : "var(--lightbox-control-bg-inactive)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--lightbox-control-border-subtle)",
                cursor: "pointer",
                opacity: isZoomed ? 1 : 0.5,
              }}
              aria-label="Zoom out"
            >
              <ZoomOut size={15} style={{ color: "var(--primary-foreground)" }} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }}
              className="flex items-center justify-center transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "var(--radius-sm)",
                background: !isZoomed ? "var(--lightbox-control-bg-inactive)" : "var(--lightbox-control-bg-active)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--lightbox-control-border-subtle)",
                cursor: "pointer",
                opacity: isZoomed ? 0.5 : 1,
              }}
              aria-label="Zoom in"
            >
              <ZoomIn size={15} style={{ color: "var(--primary-foreground)" }} />
            </button>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
         * INFO PANEL — white background, part number + type badge, then description
         * ════════════════════════════════════════════════════════════════════ */}
        <div
          className="flex flex-col"
          style={{
            padding: "var(--spacing-5) var(--spacing-5) var(--spacing-6)",
            background: "var(--card)",
            minHeight: 0,
          }}
        >
          {/* Part Number + Type badge */}
          <div className="flex items-center" style={{ gap: "var(--spacing-2-5)" }}>
            <span
              style={{
                fontFamily: font,
                fontSize: "var(--text-h5)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                lineHeight: 1.3,
              }}
            >
              {item.id}
            </span>
            {item.type && (
              <span
                className="chip"
                style={{
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-semibold)",
                  fontFamily: font,
                }}
              >
                {item.type}
              </span>
            )}
          </div>

          {/* Item name */}
          <span
            style={{
              fontFamily: font,
              fontSize: "var(--text-body)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-secondary)",
              lineHeight: 1.4,
              marginTop: "var(--spacing-1)",
            }}
          >
            {item.name}
          </span>

          {/* Description — scrollable area for long text */}
          <div
            ref={descRef}
            className="scroll-auto-hide"
            style={{
              maxHeight: "160px",
              overflowY: "scroll",
              marginTop: "var(--spacing-3)",
            }}
          >
            <p
              style={{
                fontFamily: font,
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}