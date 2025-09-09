"use client";
export default function LogoMarquee() {
  const logos = Array.from({ length: 6 }).map((_, i) => `/images/aliados/logo-${i+1}.svg`);
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-12 animate-[marquee_30s_linear_infinite] opacity-70"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        {[...logos, ...logos].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="Aliado de ObraLink" className="h-12 w-auto object-contain" />
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
