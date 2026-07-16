"use client";
import { useMemo, useState } from "react";
const steps=[
 {key:"service",title:"What are you planning?",options:["OOH / DOOH","Experiential","Retail Media","Digital Marketing","Production"]},
 {key:"market",title:"Which market or markets?",options:["Miami","New York","Los Angeles","Toronto","Multiple Markets"]},
 {key:"budget",title:"Estimated budget?",options:["Under $25K","$25K–$75K","$75K–$150K","$150K+"]},
 {key:"timing",title:"Campaign timing?",options:["ASAP","Within 30 days","1–3 months","Still planning"]}
];
export default function CampaignAssistant(){
 const [open,setOpen]=useState(false),[step,setStep]=useState(0),[answers,setAnswers]=useState<Record<string,string>>({});
 const current=steps[step],complete=step>=steps.length; const summary=useMemo(()=>Object.entries(answers).map(([k,v])=>`${k}: ${v}`).join(" | "),[answers]);
 const choose=(v:string)=>{setAnswers(p=>({...p,[current.key]:v}));setStep(s=>s+1)}; const reset=()=>{setStep(0);setAnswers({})};
 return <><button className="assistantTrigger" onClick={()=>setOpen(true)}><span className="assistantDot"/>Plan a Campaign</button>{open&&<div className="assistantOverlay" role="dialog" aria-modal="true"><div className="assistantPanel"><button className="assistantClose" onClick={()=>setOpen(false)}>×</button><p className="eyebrow">NORTH POINT CAMPAIGN ASSISTANT</p>{!complete?<><h3>{current.title}</h3><div className="assistantOptions">{current.options.map(o=><button key={o} onClick={()=>choose(o)}>{o}</button>)}</div></>:<><h3>Your preliminary brief is ready.</h3><p className="assistantSummary">{summary}</p><a className="primary assistantEmail" href={`mailto:hello@northpointmediagroup.com?subject=New Campaign Inquiry&body=${encodeURIComponent(`Hello North Point Media Group,\n\n${summary}`)}`}>Send Brief</a><button className="assistantReset" onClick={reset}>Start again</button></>}</div></div>}</>;
}
