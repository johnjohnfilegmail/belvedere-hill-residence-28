import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import fachada from "@/assets/fachada-hero.jpg";
import varanda from "@/assets/varanda.jpg";
import piscinaFachada from "@/assets/piscina-fachada.jpg";
import suite from "@/assets/suite-master.jpg";
import salao from "@/assets/salao-festas.jpg";
import academia from "@/assets/academia.jpg";
import quadraTenis from "@/assets/quadra-tenis.jpg";
import gourmet from "@/assets/espaco-gourmet.jpg";
import brinquedoteca from "@/assets/brinquedoteca.jpg";
import plantaPadrao from "@/assets/planta-padrao.jpg";
import plantaB from "@/assets/planta-b.jpg";
import plantaC from "@/assets/planta-c.jpg";
import lazerMapa from "@/assets/lazer-mapa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="bg-background text-graphite">
      <SiteHeader />
      <Hero />
      <Conceito />
      <Infraestrutura />
      <Perspectivas />
      <Lazer />
      <Plantas />
      <Localizacao />
      <Construtora />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={fachada}
          alt="Fachada do Belvedere Hill Residence — torre única de 31 andares no Caminho das Árvores"
          className="h-full w-full object-cover object-center opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.18 0.035 158 / 0.55) 0%, oklch(0.18 0.035 158 / 0.85) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-24 md:px-10">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Alameda das Catabas — Caminho das Árvores
          </p>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,5.2rem)] font-semibold leading-[1.02] text-balance">
            A vida a seu{" "}
            <span className="italic text-gold">Bel-Prazer</span>
            <br />
            no Caminho das Árvores.
          </h1>
          <p className="mt-7 max-w-xl text-base text-primary-foreground/85 md:text-lg">
            Apartamento de luxo em Salvador. Torre única, apenas 2 unidades por andar e
            arquitetura assinada por Alessandro Grimaldi.
          </p>

          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-y border-white/15 py-5">
            <Stat label="Suítes" value="4" />
            <span className="hidden h-8 w-px bg-white/20 sm:block" />
            <Stat label="Área Privativa" value="210m²" />
            <span className="hidden h-8 w-px bg-white/20 sm:block" />
            <Stat label="Garagem" value="4 vagas" />
            <span className="hidden h-8 w-px bg-white/20 sm:block" />
            <Stat label="Diferencial" value="Gabinete" />
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-forest-deep shadow-gold transition-transform hover:scale-[1.02]"
            >
              Receber Tabela e Book Digital
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#perspectivas"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-7 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-white/10"
            >
              Ver Perspectivas
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-white/60 md:block">
        Role para descobrir
        <div className="mx-auto mt-2 h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-serif text-2xl font-semibold text-gold md:text-3xl">{value}</p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">{label}</p>
    </div>
  );
}

/* ---------------- CONCEITO ---------------- */
function Conceito() {
  return (
    <section id="conceito" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">O Conceito</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest md:text-5xl">
            Você tem o livre arbítrio para{" "}
            <span className="italic">escolher viver bem.</span>
          </h2>
          <div className="my-7 h-px w-20 bg-gold" />
          <p className="text-base leading-relaxed text-graphite md:text-lg">
            Conforto, sofisticação e o prazer de morar no bairro mais nobre de Salvador.
            Uma obra concebida para quem entende que cada detalhe importa — do material
            das esquadrias ao silêncio dos corredores. Aqui, o cotidiano se mistura com a
            natureza do Caminho das Árvores e com a cidade aos seus pés.
          </p>
          <p className="mt-5 text-base leading-relaxed text-graphite/80">
            Bom é acordar num lugar agradável. Melhor é repousar com sua família, com
            todo o conforto. <span className="text-forest font-medium">Perfeito é viver do seu jeito.</span>
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-border/60 pt-8 sm:grid-cols-3">
            <Hallmark label="Imponente" sub="por fora" />
            <Hallmark label="Exuberante" sub="por dentro" />
            <Hallmark label="Nascente" sub="total" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 border border-gold/40" />
            <img
              src={piscinaFachada}
              alt="Fachada e piscina do Belvedere Hill Residence"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Hallmark({ label, sub }: { label: string; sub: string }) {
  return (
    <div>
      <p className="font-serif text-xl font-semibold italic text-forest">{label}</p>
      <p className="text-xs uppercase tracking-[0.18em] text-graphite/60">{sub}</p>
    </div>
  );
}

/* ---------------- INFRAESTRUTURA ---------------- */
function Infraestrutura() {
  const items = [
    {
      title: "Torre Única",
      detail: "31 andares de exclusividade",
      icon: (
        <path d="M9 21V3h6v18M3 21h18M9 7h6M9 11h6M9 15h6" />
      ),
    },
    {
      title: "2 unidades por andar",
      detail: "Privacidade absoluta",
      icon: <path d="M3 9h7v12H3zM14 3h7v18h-7z" />,
    },
    {
      title: "Nascente Total",
      detail: "Bons ares o dia inteiro",
      icon: (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
        </>
      ),
    },
    {
      title: "Vagas para Visitantes",
      detail: "Conveniência sem igual",
      icon: <path d="M5 11h14l-1.5-5h-11zM6 11v6m12-6v6M8 17h2m4 0h2" />,
    },
  ];

  return (
    <section id="infraestrutura" className="bg-forest text-primary-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Infraestrutura Exclusiva
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Nascente total, pra trazer{" "}
            <span className="italic text-gold">bons ares</span> pra você.
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-forest p-8 transition-colors hover:bg-forest-deep md:p-10"
            >
              <svg
                className="h-10 w-10 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {it.icon}
              </svg>
              <h3 className="mt-6 font-serif text-2xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">{it.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-6 border-t border-white/15 pt-10 text-center text-sm sm:grid-cols-3 md:grid-cols-6">
          {[
            ["61", "Unidades"],
            ["3", "Opções de planta"],
            ["3", "Elevadores"],
            ["1", "Cobertura plana"],
            ["✓", "Água, luz e gás individualizados"],
            ["✓", "Carros elétricos · Lava-jato · Bicicletário"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-serif text-2xl font-semibold text-gold">{n}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/70">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PERSPECTIVAS ---------------- */
function Perspectivas() {
  const blocks = [
    {
      img: varanda,
      label: "Living e Varanda Gourmet",
      title: "Espaços integrados para receber com classe.",
      text: "Varanda gourmet de 34,80m² aberta para a paisagem do Caminho das Árvores. Living amplo, cozinha integrada e vista panorâmica até o mar.",
    },
    {
      img: suite,
      label: "Suíte Master",
      title: "O repouso que sua família merece.",
      text: "Suíte master de 20,38m² com closet, banheiro privativo e janelão para a cidade. Acabamentos refinados em cada detalhe.",
    },
    {
      img: salao,
      label: "Salão de Festas",
      title: "Elegância em cada celebração.",
      text: "Pé-direito duplo, vidro do piso ao teto e ambientação assinada para receber com a sofisticação que o seu evento exige.",
    },
  ];

  return (
    <section id="perspectivas" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Galeria de Perspectivas</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest md:text-5xl">
            Imponente por fora,{" "}
            <span className="italic">exuberante por dentro.</span>
          </h2>
          <div className="mt-6 h-px w-20 bg-gold" />
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {blocks.map((b, i) => (
            <div
              key={b.label}
              className={`grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="absolute -inset-2 -z-10 border border-gold/40" />
                  <img
                    src={b.img}
                    alt={b.label}
                    className="aspect-[4/3] w-full rounded-sm object-cover shadow-elegant"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.32em] text-gold">{b.label}</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-snug text-forest md:text-4xl">
                  {b.title}
                </h3>
                <div className="my-5 h-px w-14 bg-forest/40" />
                <p className="text-base leading-relaxed text-graphite">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LAZER ---------------- */
function Lazer() {
  const cards = [
    {
      img: quadraTenis,
      title: "Quadra de Tênis Oficial & Squash",
      text: "Esportes para vários gostos, com quadra poliesportiva e run-up building.",
    },
    {
      img: academia,
      title: "Fitness Center 70m²",
      text: "Espaço completo com Fight Club e Yoga para o seu bem-estar diário.",
    },
    {
      img: gourmet,
      title: "Espaço Gourmet & Piscina",
      text: "Piscina com queda d'água, deck molhado, sauna e ambientes de convivência.",
    },
    {
      img: brinquedoteca,
      title: "Espaço Pet & Brinquedoteca",
      text: "Estrutura completa para os pequenos e seus companheiros de quatro patas.",
    },
  ];

  return (
    <section id="lazer" className="bg-beige-warm py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Clube Privado</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest md:text-5xl">
            Um <span className="italic">oásis de lazer</span> para toda a família.
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-gold" />
          <p className="mt-6 text-base leading-relaxed text-graphite">
            Estrutura completa, fina e rica em opções, projetada como um clube privado
            dentro do seu endereço.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-sm bg-card shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold leading-snug text-forest">
                  {c.title}
                </h3>
                <div className="my-3 h-px w-10 bg-gold" />
                <p className="text-sm leading-relaxed text-graphite/85">{c.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-sm border border-border/60 bg-card shadow-soft">
          <div className="grid gap-0 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <img src={lazerMapa} alt="Implantação do lazer" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-2 md:p-12">
              <p className="text-[11px] uppercase tracking-[0.32em] text-gold">Implantação</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold leading-snug text-forest">
                Estrutura de lazer{" "}
                <span className="italic">completa</span> para toda a família.
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-y-2 text-sm text-graphite sm:grid-cols-2">
                {[
                  "Quadra de Tênis Oficial",
                  "Quadra Poliesportiva",
                  "Quadra de Squash",
                  "Salão de Festas",
                  "Espaço Gourmet",
                  "Piscina + Deck Molhado",
                  "Sauna",
                  "Brinquedoteca",
                  "Espaço Kids",
                  "Espaço Pet",
                  "Salão de Jogos",
                  "Run-up Building",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PLANTAS ---------------- */
function Plantas() {
  const plantas = [
    {
      key: "padrao",
      label: "Opção Padrão",
      img: plantaPadrao,
      highlights: [
        "4 Suítes + Gabinete (7,57m²)",
        "Varanda Gourmet 34,80m²",
        "Estar e Jantar 39,72m²",
        "Suíte Master 20,38m² com closet",
      ],
    },
    {
      key: "b",
      label: "Opção B",
      img: plantaB,
      highlights: [
        "3 Suítes amplas com closet",
        "Estar / Jantar / Gourmet integrados 52,11m²",
        "Suíte Master com duplo closet",
        "Adega + Lavabo",
      ],
    },
    {
      key: "c",
      label: "Opção C",
      img: plantaC,
      highlights: [
        "4 Suítes + Estar/Jantar/Gourmet 42,86m²",
        "Suíte 03 com 15,86m² e closet",
        "Varanda Gourmet integrada",
        "Layout otimizado para receber",
      ],
    },
  ] as const;

  const [active, setActive] = useState<(typeof plantas)[number]["key"]>("padrao");
  const current = plantas.find((p) => p.key === active)!;

  return (
    <section id="plantas" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Plantas Interativas</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest md:text-5xl">
            <span className="italic">Três opções</span> para o seu jeito de morar.
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {plantas.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`rounded-sm border px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                active === p.key
                  ? "border-forest bg-forest text-primary-foreground"
                  : "border-forest/30 text-forest hover:bg-forest/5"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-8">
            <div className="relative rounded-sm border border-border/60 bg-card p-4 shadow-soft md:p-8">
              <img
                src={current.img}
                alt={`Planta ${current.label}`}
                className="mx-auto w-full max-w-3xl"
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">{current.label}</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold leading-snug text-forest">
              210m² pensados nos mínimos detalhes.
            </h3>
            <div className="my-5 h-px w-14 bg-forest/40" />
            <ul className="space-y-3 text-sm text-graphite">
              {current.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-forest px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-forest-deep"
            >
              Solicitar planta detalhada
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCALIZAÇÃO ---------------- */
function Localizacao() {
  const grupos = [
    { titulo: "Educação", itens: ["Escolas de elite", "Faculdades", "Cursos preparatórios"] },
    { titulo: "Conveniência", itens: ["Shoppings", "Supermercados", "Padarias", "Farmácias"] },
    { titulo: "Saúde", itens: ["Hospitais de referência", "Clínicas especializadas"] },
    { titulo: "Negócios", itens: ["Centros empresariais", "Restaurantes premium"] },
  ];

  return (
    <section id="localizacao" className="bg-forest-deep text-primary-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Localização</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Num bairro nobre, com{" "}
              <span className="italic text-gold">tudo às suas ordens.</span>
            </h2>
            <div className="my-7 h-px w-20 bg-gold" />
            <p className="text-base leading-relaxed text-primary-foreground/85">
              Alameda das Catabas, no Caminho das Árvores — o endereço mais desejado de
              Salvador. A poucos minutos do que sua rotina pede e do que sua família merece.
            </p>
            <a
              href="https://www.google.com/maps/search/Alameda+das+Catabas+Caminho+das+%C3%81rvores+Salvador"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border border-gold/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-forest-deep"
            >
              Ver no mapa
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {grupos.map((g) => (
              <div key={g.titulo} className="bg-forest-deep p-7">
                <p className="font-serif text-xl font-semibold text-gold">{g.titulo}</p>
                <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
                  {g.itens.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONSTRUTORA ---------------- */
function Construtora() {
  const sucessos = [
    "Imperial Morro Ipiranga",
    "Solar Riviera",
    "Imperia Lounge Itacimirim",
    "Bora Bora Itacimirim",
    "Belvedere Ville Itacimirim",
    "Palm Ville Eco Residencial",
    "Village Imbassaí Summer Flats",
    "Absolut Ville Itacimirim",
    "Itacimirim Eco Ville",
    "Hotel Riviera Premium",
    "Edif. Varandas do Imbuí",
    "Edif. Côte d'Azur",
  ];

  return (
    <section id="construtora" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Autoridade</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-forest md:text-6xl">
              Grupo <span className="italic">Azinunes</span>
            </h2>
            <div className="my-7 h-px w-20 bg-gold" />
            <p className="text-base leading-relaxed text-graphite">
              Empresa baiana com mais de{" "}
              <span className="font-semibold text-forest">10 anos de mercado</span>, com
              foco em construção de edifícios comerciais e residenciais de alto padrão.
              Nossa busca contínua pelo aperfeiçoamento das obras, fidelidade nos prazos
              de entrega e satisfação dos clientes nos consolidaram como sinônimo de
              excelência e credibilidade.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-8">
              <div>
                <p className="font-serif text-3xl font-semibold text-forest">10+</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-graphite/60">
                  anos de mercado
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-forest">14</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-graphite/60">
                  empreendimentos
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-forest">100%</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-graphite/60">
                  prazos cumpridos
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">
              Conheça nossos sucessos imobiliários
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2">
              {sucessos.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 border-b border-border/60 py-2 text-sm text-graphite"
                >
                  <span className="font-serif text-xs italic text-gold">✦</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTATO ---------------- */
function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contato" className="relative bg-forest text-primary-foreground py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Reserve seu apartamento
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Receba a <span className="italic text-gold">tabela completa</span> e o book
            digital exclusivo.
          </h2>
          <div className="my-7 h-px w-20 bg-gold" />
          <p className="text-base leading-relaxed text-primary-foreground/85">
            Apartamentos com 4 suítes, 210m² e gabinete no Caminho das Árvores. Atendimento
            personalizado para você conhecer cada detalhe do Belvedere Hill Residence.
          </p>

          <div className="mt-8 space-y-3 text-sm text-primary-foreground/85">
            <p className="flex items-center gap-3">
              <span className="font-serif text-gold">✦</span> Alameda das Catabas — Caminho das Árvores
            </p>
            <p className="flex items-center gap-3">
              <span className="font-serif text-gold">✦</span> Atendimento exclusivo via WhatsApp
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-white/15 bg-forest-deep p-7 shadow-elegant md:p-10">
          {enviado ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-forest-deep">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold">Pedido recebido.</h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Em instantes nossa equipe entrará em contato com a tabela e o book digital.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">
                  Nome completo
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-gold"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">
                    E-mail
                  </label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-gold"
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">
                    WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    className="mt-2 w-full rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-gold"
                    placeholder="(71) 9 9999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={3}
                  className="mt-2 w-full rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:border-gold"
                  placeholder="Quero conhecer a tabela e a opção de planta..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-forest-deep shadow-gold transition-transform hover:scale-[1.01]"
              >
                Receber Tabela e Book Digital
              </button>
              <p className="text-center text-[10px] uppercase tracking-[0.18em] text-primary-foreground/50">
                Atendimento exclusivo · Sem compromisso
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-forest-deep text-primary-foreground/80">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl font-semibold text-gold">Belvedere Hill Residence</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
              Alameda das Catabas — Caminho das Árvores · Salvador / BA
            </p>
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
              Em conformidade com a Lei nº 4.591/64, informamos que as fotos, perspectivas,
              equipamentos, móveis, iluminação, vegetação e paisagismo utilizados neste
              material têm caráter meramente ilustrativo. Projeto técnico em estudo e
              exigências legais em tramitação.
            </p>
          </div>

          <div>
            <p className="font-serif text-base font-semibold text-gold">Dados Técnicos</p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              <li>Resp. Técnico: Pedro Neves Azi</li>
              <li>CREA: 40975</li>
              <li>Arquitetura: Alessandro Grimaldi</li>
              <li>CAU/BA: A40123-4</li>
              <li>CRECI/J 1068 — Tavares Júnior</li>
            </ul>
          </div>

          <div>
            <p className="font-serif text-base font-semibold text-gold">Acompanhe</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-gold">Instagram</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">Facebook</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">YouTube</a>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-gold">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/55 md:flex-row">
          <p>© {new Date().getFullYear()} Grupo Azinunes — Construções & Incorporações Ltda.</p>
          <p className="uppercase tracking-[0.25em]">Excelência · Credibilidade · Bel-Prazer</p>
        </div>
      </div>
    </footer>
  );
}
