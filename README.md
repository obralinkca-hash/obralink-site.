# ObraLink — Sitio Web (Next.js + Tailwind + CMS + Email)

Este proyecto implementa el sitio de **ObraLink.** con:
- Next.js App Router + Tailwind CSS
- SEO: meta tags, Open Graph, `app/sitemap.ts` y `app/robots.ts`
- Blog dinámico editable con **Decap (Netlify) CMS** (backend GitHub)
- Formularios (contacto + servicios) con envío por **SMTP/Nodemailer**
- Despliegue recomendado en **Vercel**

---

## 1) Requisitos

- Node.js 18+
- Cuenta en GitHub (repo privado o público)
- Vercel (staging + producción opcional)
- Credenciales SMTP para el envío de correos (p. ej., Mailersend, SendGrid, Resend SMTP, o tu servidor de correo)

---

## 2) Configuración local

```bash
pnpm i      # o npm i / yarn
pnpm dev    # http://localhost:3000
```

Copia `.env.example` a `.env.local` y rellena los valores.

---

## 3) Variables de entorno

Crea un fichero `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000

MAIL_TO=obralinkca@gmail.com
MAIL_FROM="ObraLink <no-reply@tudominio.com>"

SMTP_HOST=smtp.tuproveedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario
SMTP_PASS=contraseña
```

> **Importante:** Si usas Gmail, activa *App Passwords* o usa un proveedor SMTP transaccional.

---

## 4) CMS (Decap / Netlify CMS)

- El CMS vive en `/public/admin`. Con backend GitHub, necesitas un **OAuth App** o un proxy OAuth para autenticar.
- Edita `public/admin/config.yml` con tu `repo`, `branch` y `base_url`/`auth_endpoint`.
- Alternativa: hospedar en Netlify y usar *git-gateway* (requiere Identity).

### Flujo
1. Accede a `/admin` en tu dominio.
2. Inicia sesión con GitHub.
3. Crea/edita post en **Blog** → se hace *commit* al repo → Vercel reconstruye.

---

## 5) Despliegue en Vercel

1. Sube el repo a GitHub.
2. Importa el repo en Vercel.
3. Añade variables de entorno en **Project Settings → Environment Variables** (usa las de `.env.example`).
4. Asigna dominio: `staging` (automático con *Preview*) y `producción` (tu dominio final).
5. Activa *GitHub integration* para despliegues automáticos.

---

## 6) Estructura

```
app/
  (site)/
    page.tsx           # Home
  productos/
    page.tsx
  servicios/
    page.tsx
  inmobiliaria/
    page.tsx
  portafolio/
    page.tsx
  blog/
    page.tsx
    [slug]/page.tsx
  contacto/
    page.tsx
  api/
    contact/route.ts   # Email contacto
    lead/route.ts      # Email leads servicios
  sitemap.ts
  robots.ts
components/
  ...                  # UI reusable
content/blog/
  ...                  # MD posts
public/images/
  ...                  # Hero, categorías, aliados
public/admin/
  index.html, config.yml
```

---

## 7) Reemplazo de imágenes (SEO)

- Coloca tus imágenes en `public/images/...` con nombres descriptivos: `revestimientos-porcelanato-rectificado-marfil.jpg`
- Actualiza los `alt` en componentes/data.

---

## 8) Formularios y pruebas

- Contacto: `/contacto` → envía a `MAIL_TO` usando SMTP.
- Servicios: `/servicios` → cada formulario manda a `/api/lead` con un `serviceType` distinto.
- Revisa logs en Vercel (*Functions*) si hay errores.

---

## 9) Accesibilidad y SEO

- `alt` en imágenes, `aria-label` en botones y navegación semántica.
- `metadata` en `app/layout.tsx` con Open Graph y `og-default.jpg`.
- `sitemap.ts` y `robots.ts` generados.

---

## 10) Personalización rápida

- Colores principales en `tailwind.config.ts` (`obBlue`, `obDark`).
- Botones/estilos en `app/globals.css`.
- Navegación en `components/NavBar.tsx`.

¡Listo! 💙
