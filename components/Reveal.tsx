"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
export default function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement|null>(null); const [visible,setVisible]=useState(false);
 useEffect(()=>{const node=ref.current;if(!node)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);o.disconnect()}},{threshold:.12});o.observe(node);return()=>o.disconnect()},[]);
 return <div ref={ref} className={`reveal ${visible?"isVisible":""} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>;
}
