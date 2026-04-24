import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Belvedere Hill Residence | Apartamento de Luxo no Caminho das Árvores — Salvador" },
      {
        name: "description",
        content:
          "Belvedere Hill Residence — 4 suítes, 210m² com gabinete e 4 vagas no Caminho das Árvores, Salvador. Apenas 2 unidades por andar, nascente total e clube privado completo.",
      },
      {
        name: "keywords",
        content:
          "Apartamento de luxo Salvador, Caminho das Árvores, 4 Suítes Salvador, Belvedere Hill, Alameda das Catabas, alto padrão Salvador",
      },
      { name: "author", content: "Grupo Azinunes" },
      { property: "og:title", content: "Belvedere Hill Residence — A vida a seu Bel-Prazer" },
      {
        property: "og:description",
        content:
          "4 Suítes | 210m² com Gabinete | 4 Vagas | Torre única no bairro mais nobre de Salvador.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
