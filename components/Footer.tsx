export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="container py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-3">ObraLink<span className="text-obBlue">.</span></h4>
          <p className="text-sm text-slate-600">Materiales de construcción, alianzas con arquitectos, ingenieros e inmobiliarias.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Email: <a className="underline" href="mailto:obralinkca@gmail.com">obralinkca@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explorar</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><a href="/productos" className="hover:underline">Productos</a></li>
            <li><a href="/servicios" className="hover:underline">Servicios</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} ObraLink. Todos los derechos reservados.</div>
    </footer>
  );
}