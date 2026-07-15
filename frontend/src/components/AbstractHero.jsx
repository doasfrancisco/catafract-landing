import { motion } from 'framer-motion'

/**
 * Visual abstracto del hero: paneles de vidrio con esqueleto abstracto,
 * un orbe con el gradiente de marca (respira) y bolitas que orbitan los
 * anillos. Sin datos literales — solo tono de marca. Vars con override en
 * html.dark para adaptarse al tema. Respeta prefers-reduced-motion.
 */
export default function AbstractHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
      className="ahero"
    >
      <style>{`
        .ahero{--s:#fff;--s2:#eef0f3;--bd:#d4d4dc;--bds:#e6e6ea;--ac:#2563eb;--acs:rgba(37,99,235,.14);--wr:#cfd3da;--vi:#7c3aed;--mt2:#5a5a6c;--gr:linear-gradient(120deg,#2563eb,#7c3aed,#db2777);--sh:0 24px 70px -42px rgba(15,23,42,.4)}
        html.dark .ahero{--s:#0d0d12;--s2:#1a1a24;--bd:rgba(255,255,255,.10);--bds:rgba(255,255,255,.07);--ac:#60a5fa;--acs:rgba(96,165,250,.18);--wr:rgba(255,255,255,.16);--vi:#c4b5fd;--mt2:#a9a9b6;--gr:linear-gradient(120deg,#93c5fd,#ffffff,#f0abfc);--sh:0 24px 70px -42px rgba(0,0,0,.85)}
        .ahero .astage{position:relative;margin:0 auto;max-width:800px;width:100%;aspect-ratio:900/336}
        .ahero .oring{position:absolute;left:50%;top:50%;width:47%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;border:1px solid var(--bd);opacity:.55}
        .ahero .oring2{position:absolute;left:50%;top:50%;width:66%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;border:1px solid var(--bd);opacity:.3}
        .ahero .orb{position:absolute;left:50%;top:50%;width:30%;aspect-ratio:1;border-radius:50%;background:var(--gr);opacity:.82;filter:blur(1px);box-shadow:0 0 90px -4px color-mix(in srgb,var(--vi) 55%,transparent);animation:ah-breathe 5.5s ease-in-out infinite}
        .ahero .gpanel{position:absolute;border:1px solid var(--bd);border-radius:16px;background:color-mix(in srgb,var(--s) 70%,transparent);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);box-shadow:var(--sh);overflow:hidden}
        .ahero .gpanel::before{content:"";position:absolute;left:0;top:0;width:100%;height:4px;background:var(--gr);opacity:.4}
        .ahero .p1{left:6%;top:14%;width:41%;height:64%;animation:ah-fl1 7s ease-in-out infinite}
        .ahero .p2{right:8%;top:8%;width:34%;height:55%;animation:ah-fl2 7s ease-in-out infinite;animation-delay:-2.3s}
        .ahero .p3{left:35%;bottom:4%;width:30%;height:40%;animation:ah-fl3 7.4s ease-in-out infinite;animation-delay:-4.6s}
        .ahero .skwrap{position:absolute;inset:0;padding:15px 13px 13px;display:flex;flex-direction:column;gap:8px}
        .ahero .skl{height:6px;border-radius:4px;background:var(--wr);opacity:.85}
        .ahero .skrow{display:flex;align-items:center;gap:8px}
        .ahero .skc{width:16px;height:16px;border-radius:50%;background:var(--wr);flex:none}
        .ahero .skchip{align-self:flex-start;height:15px;width:48px;border-radius:5px;background:var(--ac);opacity:.4}
        .ahero .skbars{margin-top:auto;display:flex;align-items:flex-end;gap:5px;height:38%}
        .ahero .skbars i{flex:1;border-radius:3px 3px 0 0;background:var(--bd)}
        .ahero .skbars i.hi{background:var(--ac);opacity:.55}
        .ahero .orbit{position:absolute;left:50%;top:50%}
        .ahero .o1{width:47%;aspect-ratio:1;animation:ah-orbit 22s linear infinite}
        .ahero .o2{width:66%;aspect-ratio:1;animation:ah-orbit 34s linear infinite;animation-direction:reverse}
        .ahero .o3{width:47%;aspect-ratio:1;animation:ah-orbit 22s linear infinite;animation-delay:-11s}
        .ahero .odot{position:absolute;top:-6px;left:50%;margin-left:-6px;width:12px;height:12px;border-radius:50%}
        .ahero .odot.accent{background:var(--ac);box-shadow:0 0 0 5px var(--acs);animation:ah-pulse 3s ease-in-out infinite}
        .ahero .odot.violet{background:var(--vi);width:9px;height:9px;margin-left:-4.5px;top:-4.5px;opacity:.85}
        .ahero .odot.muted{background:var(--mt2);width:8px;height:8px;margin-left:-4px;top:-4px;opacity:.65}
        @keyframes ah-orbit{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}
        @keyframes ah-fl1{0%,100%{transform:rotate(-3deg) translateY(0)}50%{transform:rotate(-3deg) translateY(-8px)}}
        @keyframes ah-fl2{0%,100%{transform:rotate(3deg) translateY(0)}50%{transform:rotate(3deg) translateY(-8px)}}
        @keyframes ah-fl3{0%,100%{transform:rotate(2deg) translateY(0)}50%{transform:rotate(2deg) translateY(-6px)}}
        @keyframes ah-breathe{0%,100%{transform:translate(-50%,-50%) scale(.93);opacity:.72}50%{transform:translate(-50%,-50%) scale(1.03);opacity:.94}}
        @keyframes ah-pulse{0%,100%{transform:scale(.9);opacity:.7}50%{transform:scale(1.18);opacity:1}}
        @media(max-width:600px){.ahero .astage{aspect-ratio:5/4}.ahero .p3,.ahero .oring2{display:none}}
        @media(max-width:767px){.ahero .gpanel{backdrop-filter:none;-webkit-backdrop-filter:none}}
        @media(prefers-reduced-motion:reduce){.ahero .orb,.ahero .gpanel,.ahero .odot,.ahero .orbit{animation:none}}
      `}</style>

      <div className="astage" aria-hidden="true">
        <div className="oring2" />
        <div className="oring" />
        <div className="orb" />
        <div className="orbit o1"><span className="odot accent" /></div>
        <div className="orbit o2"><span className="odot violet" /></div>
        <div className="orbit o3"><span className="odot muted" /></div>
        <div className="gpanel p1">
          <div className="skwrap">
            <div className="skrow"><span className="skc" /><span className="skl" style={{ width: '55%' }} /></div>
            <span className="skl" style={{ width: '82%' }} />
            <span className="skl" style={{ width: '68%' }} />
            <div className="skbars">
              <i style={{ height: '45%' }} /><i className="hi" style={{ height: '78%' }} /><i style={{ height: '58%' }} /><i style={{ height: '88%' }} /><i style={{ height: '66%' }} />
            </div>
          </div>
        </div>
        <div className="gpanel p2">
          <div className="skwrap">
            <span className="skchip" />
            <span className="skl" style={{ width: '88%' }} />
            <span className="skl" style={{ width: '72%' }} />
            <span className="skl" style={{ width: '80%' }} />
          </div>
        </div>
        <div className="gpanel p3">
          <div className="skwrap">
            <div className="skrow"><span className="skc" style={{ width: '12px', height: '12px' }} /><span className="skl" style={{ width: '50%' }} /></div>
            <span className="skl" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
