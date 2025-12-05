import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "B64 er et teknologiselskap som spesialiserer seg på Salesforce-implementeringer, rådgivning og skreddersydde løsninger.",
};

const values = [
  {
    title: "Skreddersydd tilpasning",
    description:
      "Vi tilpasser løsninger som reflekterer dine unike forretningsbehov og prosesser.",
  },
  {
    title: "Sertifiserte spesialister",
    description:
      "Vårt team består av sertifiserte Salesforce-eksperter med teknisk lidenskap.",
  },
  {
    title: "Langsiktig partnerskap",
    description:
      "Vi er dedikert til å bygge varige relasjoner og støtte din vekst over tid.",
  },
];

const expertise = [
  {
    area: "Salesforce-implementering",
    description:
      "Planlegging, konfigurasjon og utrulling av Salesforce-løsninger tilpasset din bedriftsstørrelse og bransje.",
  },
  {
    area: "Rådgivning",
    description:
      "Våre konsulenter jobber tett med deg for å forstå dine forretningsmål og finne de beste løsningene.",
  },
  {
    area: "Utviklingsprosjekter",
    description:
      "Kontinuerlig støtte og forbedringer for å holde Salesforce-løsningene oppdatert med bransjestandarder.",
  },
];

export default function OmOss() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 cloud-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--primary)] tracking-wide uppercase mb-4">
              Om B64
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)] leading-[1.1]">
              Vi gjør Salesforce
              <br />
              enkelt for deg
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--gray-600)] leading-relaxed">
              B64 AS er et teknologiselskap som spesialiserer seg på
              Salesforce-implementeringer, rådgivning og skreddersydde løsninger.
              Vår misjon er å hjelpe bedrifter med å effektivisere prosesser og
              forbedre kundeopplevelser gjennom Salesforce-plattformen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                Vår erfaring og kompetanse
              </h2>
              <p className="mt-6 text-lg text-[var(--gray-600)] leading-relaxed">
                Med dyp erfaring innen Salesforce-økosystemet har vi hjulpet en
                rekke bedrifter med å transformere måten de jobber på. Fra små
                oppstartsbedrifter til etablerte virksomheter – vi forstår de
                unike utfordringene hver bedrift står overfor.
              </p>
              <p className="mt-4 text-lg text-[var(--gray-600)] leading-relaxed">
                Vårt team kombinerer teknisk ekspertise med forretningsforståelse
                for å levere løsninger som faktisk fungerer i praksis.
              </p>
            </div>

            {/* Decorative element */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[var(--cloud)] to-[var(--cloud-dark)] rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-semibold text-[var(--primary)]">
                    b64
                  </div>
                  <p className="mt-4 text-[var(--gray-600)]">
                    Norges beste miljø for Salesforce-tjenester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 lg:py-32 cloud-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              Hva vi gjør
            </h2>
            <p className="mt-4 text-lg text-[var(--gray-600)]">
              Vi dekker hele spekteret av Salesforce-tjenester for å møte dine
              behov.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={item.area}
                className="p-8 bg-white rounded-2xl border border-[var(--gray-200)]"
              >
                <div className="text-sm text-[var(--primary)] font-medium mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                  {item.area}
                </h3>
                <p className="text-[var(--gray-600)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              Hvorfor velge B64?
            </h2>
            <p className="mt-4 text-lg text-[var(--gray-600)]">
              Når du velger B64, får du mer enn bare teknisk implementering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group">
                <div className="w-12 h-12 rounded-xl bg-[var(--cloud)] text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--gray-600)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                Ta kontakt
              </h2>
              <p className="mt-4 text-lg text-[var(--gray-600)] leading-relaxed">
                Vi vil gjerne høre fra deg. Enten du har spørsmål om våre
                tjenester eller ønsker en uforpliktende prat om mulighetene –
                ikke nøl med å ta kontakt.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--cloud)] text-[var(--primary)] flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--gray-500)]">E-post</p>
                    <a
                      href="mailto:kontakt@b64.no"
                      className="text-[var(--foreground)] font-medium hover:text-[var(--primary)] transition-colors"
                    >
                      kontakt@b64.no
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--cloud)] text-[var(--primary)] flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--gray-500)]">Telefon</p>
                    <a
                      href="tel:+4798065365"
                      className="text-[var(--foreground)] font-medium hover:text-[var(--primary)] transition-colors"
                    >
                      +47 980 65 365
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--cloud)] text-[var(--primary)] flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--gray-500)]">Adresse</p>
                    <p className="text-[var(--foreground)] font-medium">
                      Oscars gate 32, 0258 Oslo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[var(--primary)] rounded-3xl p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Klar for å komme i gang?
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                La oss diskutere hvordan B64 kan hjelpe din virksomhet med å få
                mer ut av Salesforce.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center self-start rounded-full bg-white px-8 py-4 text-base font-medium text-[var(--primary)] hover:bg-[var(--gray-100)] transition-colors duration-200"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-24 lg:py-32 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Bli en del av teamet
          </h2>
          <p className="mt-4 text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
            Vi bygger Norges beste miljø for Salesforce-tjenester. Er du
            lidenskapelig opptatt av teknologi og ønsker å jobbe med spennende
            prosjekter?
          </p>
          <Link
            href="/karriere"
            className="inline-flex items-center gap-2 mt-8 text-[var(--primary)] font-medium hover:gap-3 transition-all duration-200"
          >
            Se ledige stillinger
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
      </section>
    </>
  );
}
