"use client";

import { useState } from "react";

export type MediaItem = {
  title: string;
  category: string;
  image: string;
  description: string;
};

export default function MediaGallery({
  items,
}: {
  items: MediaItem[];
}) {
  const [selected, setSelected] = useState<MediaItem | null>(null);

  return (
    <>
      <div className="mediaGrid">
        {items.map((item) => (
          <button
            className="mediaTile"
            key={item.title}
            onClick={() => setSelected(item)}
            type="button"
          >
            <span className="mediaImageFrame">
              <img src={item.image} alt={item.title} />
            </span>

            <span className="mediaTileCopy">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <span>Explore solution →</span>
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="mediaOverlay" role="dialog" aria-modal="true">
          <div className="mediaModal">
            <button
              className="mediaClose"
              onClick={() => setSelected(null)}
              aria-label="Close"
              type="button"
            >
              ×
            </button>

            <span className="mediaModalImage">
              <img src={selected.image} alt={selected.title} />
            </span>

            <div className="mediaModalCopy">
              <p className="eyebrow">{selected.category}</p>
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
              <a
                href="#contact"
                className="primary"
                onClick={() => setSelected(null)}
              >
                Request This Solution
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
