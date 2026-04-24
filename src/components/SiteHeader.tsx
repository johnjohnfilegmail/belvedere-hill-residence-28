import { useState } from "react";
import logo from "@/assets/logo-belvedere.jpg";

const links = [
  { href: "#conceito", label: "O Conceito" },
  { href: "#infraestrutura", label: "Infraestrutura" },
  { href: "#perspectivas", label: "Perspectivas" },
  { href: "#lazer", label: "Clube" },
  { href: "#plantas", label: "Plantas" },
  { href: "#localizacao", label: "Localização" },
  { href: "#construtora", label: "Construtora" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Belvedere Hill Residence" className="h-10 w-auto rounded-sm md:h-12" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-[15px] font-semibold text-forest md:text-base">
              Belvedere Hill
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-graphite/70">
              Residence
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.18em] text-graphite transition-colors hover:text-forest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-sm bg-forest px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-forest-deep md:inline-flex"
        >
          Receber Tabela
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden"
        >
          <svg className="h-7 w-7 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm uppercase tracking-[0.15em] text-graphite"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-forest px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            >
              Receber Tabela e Book
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
