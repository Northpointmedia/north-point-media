"use client";
import { useState } from "react";

export type MediaItem = { title:string; category:string; image:string; description:string };

export default function MediaGallery({items}:{items:MediaItem[]}){
  const [selected,setSelected]=useState<MediaItem|null>(null);
  return <>
    <div className="mediaGrid">
      {items.map(item=><button className="mediaTile" key={item.title} onClick={()=>setSelected(item)}>
        <img src={item.image} alt={item.title}/>
        <span><small>{item.category}</small><strong>{item.title}</strong></span>
      </button>)}
    </div>
    {selected&&<div className="mediaOverlay" role="dialog" aria-modal="true">
      <div className="mediaModal">
        <button className="mediaClose" onClick={()=>setSelected(null)}>×</button>
        <img src={selected.image} alt={selected.title}/>
        <div className="mediaModalCopy"><p className="eyebrow">{selected.category}</p><h3>{selected.title}</h3><p>{selected.description}</p><a className="primary" href="#contact" onClick={()=>setSelected(null)}>Request This Solution</a></div>
      </div>
    </div>}
  </>;
}
