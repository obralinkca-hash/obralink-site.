"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/inmobiliaria", label: "Inmobiliaria" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-obBlue">{l.label}</Link>
          ))}
          <Link href="/contacto" className="btn">Contáctanos</Link>
        </nav>
        <button aria-label="Abrir menú" onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg ring-1 ring-slate-300">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">{l.label}</Link>
            ))}
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn w-full text-center">Contáctanos</Link>
          </div>
        </div>
      )}
    </header>
  );
}