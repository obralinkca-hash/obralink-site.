export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-baseline gap-1 font-extrabold text-2xl ${className}`} aria-label="ObraLink">
      <span>ObraLink</span>
      <span className="text-obBlue">.</span>
    </div>
  );
}