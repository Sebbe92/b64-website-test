import Link from "next/link";
import CloudDecoration from "@/components/CloudDecoration";

const services = [
  {
    title: "Kartlegging",
    description:
      "Vi forstår dine utfordringer og finner den beste veien til løsning.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
    ),
  },
  {
    title: "Implementering",
    description:
      "Skreddersydd Salesforce-løsning integrert i din virksomhet.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Support",
    description:
      "Kontinuerlig oppfølging, oppdateringer og vedlikehold over tid.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
        />
      </svg>
    ),
  },
  {
    title: "Forretningsutvikling",
    description: "Langsiktig CRM-strategi tilpasset dine vekstmål.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
];

const solutions = [
  {
    name: "Sales Cloud",
    description: "Optimaliser salgsprosessen fra lead til lukket avtale.",
  },
  {
    name: "Service Cloud",
    description: "Lever eksepsjonell kundeservice i alle kanaler.",
  },
  {
    name: "Marketing Cloud",
    description: "Personalisert markedsføring som engasjerer.",
  },
  {
    name: "Analytics",
    description: "AI-drevne innsikter for bedre beslutninger.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cloud)] via-[var(--background)] to-[var(--background)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-transparent" />

        {/* Animated clouds - spread across the hero */}
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
        <div className="cloud cloud-5" />
        <div className="cloud cloud-6" />
        <div className="cloud cloud-7" />

        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />

        <div className="hero-content relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              Salesforce Partner
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.05]">
              Din nye
              <br />
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">Salesforce-partner</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--gray-600)] leading-relaxed max-w-2xl mx-auto">
              Med CRM i fokus hjelper b64 deg å samle løse tråder. Vi
              implementerer og utvikler Salesforce-løsninger tilpasset din
              virksomhet.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/kontakt"
                className="hero-btn group inline-flex justify-center items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-base font-medium text-white hover:bg-[var(--primary-dark)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
              >
                Kom i gang
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/om-oss"
                className="hero-btn inline-flex justify-center items-center rounded-full border border-[var(--gray-200)] bg-white/70 backdrop-blur-sm px-8 py-4 text-base font-medium text-[var(--foreground)] hover:border-[var(--gray-400)] hover:bg-white transition-all duration-300"
              >
                Les mer om oss
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-[var(--gray-50)] overflow-hidden">
        {/* Cloud cluster - right side */}
        <CloudDecoration size="md" variant="light" className="absolute right-[12%] top-4 cloud-float opacity-30" />
        <CloudDecoration size="sm" variant="medium" className="absolute right-[8%] top-10 cloud-float-delayed opacity-25" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-2">70%</div>
              <p className="text-sm text-[var(--gray-500)]">betaler for mer enn de trenger</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-2">50+</div>
              <p className="text-sm text-[var(--gray-500)]">vellykkede implementeringer</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-2">100%</div>
              <p className="text-sm text-[var(--gray-500)]">sertifiserte konsulenter</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-2">5+</div>
              <p className="text-sm text-[var(--gray-500)]">års erfaring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Cloud cluster - top left */}
        <CloudDecoration size="lg" variant="light" className="absolute left-[8%] top-16 cloud-float-slow opacity-25 hidden md:block" />
        <CloudDecoration size="sm" variant="medium" className="absolute left-[14%] top-24 cloud-float opacity-30 hidden md:block" />
        <CloudDecoration size="md" variant="light" className="absolute left-[5%] top-32 cloud-float-delayed opacity-20 hidden lg:block" />

        {/* Cloud cluster - bottom right */}
        <CloudDecoration size="md" variant="medium" className="absolute right-[8%] bottom-24 cloud-float-delayed opacity-25" />
        <CloudDecoration size="sm" variant="light" className="absolute right-[15%] bottom-32 cloud-float-slow opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              Hvordan vi jobber
            </h2>
            <p className="mt-4 text-lg text-[var(--gray-600)]">
              Fra første kartlegging til langsiktig vekst – vi er med deg hele
              veien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative p-8 bg-[var(--background)] rounded-3xl border border-[var(--gray-200)] hover:border-transparent hover:shadow-2xl hover:shadow-[var(--foreground)]/10 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 text-[var(--primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="text-xs font-medium text-[var(--gray-400)] tracking-wider uppercase mb-3">
                    Steg 0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--gray-500)] leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-16 lg:py-20 bg-[var(--gray-50)] overflow-hidden">
        {/* Cloud cluster - center right */}
        <CloudDecoration size="md" variant="light" className="absolute right-[18%] top-20 cloud-float opacity-25 hidden md:block" />
        <CloudDecoration size="lg" variant="medium" className="absolute right-[10%] top-28 cloud-float-slow opacity-20 hidden lg:block" />
        <CloudDecoration size="sm" variant="light" className="absolute right-[22%] top-36 cloud-float-delayed opacity-30 hidden md:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                Salesforce-løsninger
              </h2>
              <p className="mt-4 text-lg text-[var(--gray-600)] leading-relaxed">
                Vi er sertifiserte spesialister på hele Salesforce-plattformen.
                Uansett behov finner vi løsningen som passer din virksomhet.
              </p>
              <Link
                href="/tjenester"
                className="inline-flex items-center gap-2 mt-8 text-[var(--primary)] font-medium hover:gap-3 transition-all duration-200"
              >
                Se alle tjenester
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((solution) => (
                <div
                  key={solution.name}
                  className="group p-6 bg-[var(--background)] rounded-2xl border border-[var(--gray-200)] hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-white transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-[var(--gray-500)] group-hover:text-white/80 transition-colors">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Cloud cluster - bottom left */}
        <CloudDecoration size="md" variant="light" className="absolute left-[5%] bottom-20 cloud-float opacity-25 hidden md:block" />
        <CloudDecoration size="sm" variant="medium" className="absolute left-[12%] bottom-28 cloud-float-delayed opacity-30 hidden md:block" />
        <CloudDecoration size="lg" variant="light" className="absolute left-[3%] bottom-40 cloud-float-slow opacity-20 hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[var(--background)] rounded-3xl p-10 md:p-16 shadow-xl shadow-[var(--foreground)]/5 border border-[var(--gray-200)]">
              <svg
                className="absolute top-8 left-8 w-16 h-16 text-[var(--primary)]/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="relative text-xl sm:text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-relaxed text-center">
                &ldquo;B64 hjalp oss med å sette opp Salesforce, nå har vi ett verktøy
                som håndterer alt. Det har gjort hverdagen enklere.&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[var(--foreground)]">
                    Morten
                  </p>
                  <p className="text-sm text-[var(--gray-500)]">Cleanit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-20 bg-[var(--primary)] overflow-hidden">
        {/* Cloud cluster - top right */}
        <div className="cloud-decoration w-28 h-10 bg-white/12 absolute right-[15%] top-10 cloud-float hidden md:block" />
        <div className="cloud-decoration w-20 h-8 bg-white/15 absolute right-[22%] top-16 cloud-float-delayed hidden md:block" />
        <div className="cloud-decoration w-24 h-9 bg-white/10 absolute right-[12%] top-20 cloud-float-slow hidden lg:block" />

        {/* Cloud cluster - bottom left */}
        <div className="cloud-decoration w-24 h-9 bg-white/12 absolute left-[8%] bottom-14 cloud-float-slow hidden md:block" />
        <div className="cloud-decoration w-16 h-6 bg-white/15 absolute left-[15%] bottom-20 cloud-float hidden md:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Klar for å ta neste steg?
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            La oss ta en uforpliktende prat om hvordan vi kan hjelpe deg å få
            mer ut av Salesforce.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center justify-center gap-2 mt-10 rounded-full bg-white px-8 py-4 text-base font-medium text-[var(--primary)] hover:bg-[var(--gray-50)] hover:shadow-lg hover:shadow-white/25 transition-all duration-300"
          >
            Ta kontakt
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
