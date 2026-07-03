import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  FileText,
  Menu,
  X,
  Sparkles,
  PlayCircle,
  Mic,
  Radio,
  Calculator,
  Rocket,
  Briefcase,
  MessageCircle,
  Globe,
} from "lucide-react";



import certificadoAegro from "../assets/certificado-aegro-bootcamp.jpeg.asset.json";
import palestraSeagro from "../assets/palestra-seagro.jpeg.asset.json";
import palestraReformaRS from "../assets/palestra-reforma-rs.jpeg.asset.json";
import liveIrWarren from "../assets/live-ir-warren-2020.png.asset.json";
import warrenSocia from "../assets/warren-socia-merito-2021.png.asset.json";
import aegerValor1 from "../assets/aeger-valor-1.png.asset.json";
import aegerValor2 from "../assets/aeger-valor-2.png.asset.json";
import aegerValor3 from "../assets/aeger-valor-3.png.asset.json";
import maosNaMassa from "../assets/maos-na-massa.jpg.asset.json";
import petMamae from "../assets/pet-mamae.jpg.asset.json";
import liverpool from "../assets/liverpool.jpg.asset.json";


export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cases", label: "Cases" },
  { href: "#reconhecimentos", label: "Reconhecimentos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#pessoal", label: "Pessoal" },
  { href: "#palestras", label: "Palestras" },
  { href: "#contabil", label: "Contábil" },
  { href: "#contato", label: "Contato" },
];

type Metric = { value: string; label: string };
type Case = {
  tag: string;
  title: string;
  company: string;
  body: string;
  stack: string[];
  href?: string;
  metrics?: Metric[];
};

const CASES: Case[] = [
  {
    tag: "Agritech · Marketplace / Pricing",
    title: "Compare Preços no Aegro Negócios",
    company: "Aegro",
    body: "Conduzi a construção do Compare Preços do zero, mobile-first, usando dados regionais proprietários de preços de insumos como benchmark para o produtor negociar melhor com fornecedores.",
    stack: ["Pricing", "Marketplace", "Mobile", "Agritech"],
    href: "https://compare.aegro.com.br/",
    metrics: [
      { value: "30%", label: "adoção ativa na base de clientes" },
      { value: "0 → 1", label: "construção do zero, mobile-first" },
    ],
  },
  {
    tag: "Agritech · Emissão fiscal",
    title: "Novo emissor de notas do Aegro",
    company: "Aegro",
    body: "PM responsável pela construção do zero do novo emissor de notas fiscais, unificando NF-e, NFC-e e NFS-e em uma experiência voltada para produtores rurais e contadores parceiros.",
    stack: ["NF-e", "NFC-e", "NFS-e", "Reconstrução de produto"],
    href: "https://www.youtube.com/watch?v=h0LSin68kJI",
    metrics: [
      { value: "3 em 1", label: "NF-e, NFC-e e NFS-e unificadas" },
      { value: "0 → 1", label: "produto reconstruído do zero" },
    ],
  },
  {
    tag: "Agritech · Gestão Fiscal",
    title: "Produto de Gestão Fiscal (entrada)",
    company: "Aegro",
    body: "Liderei do zero o produto de entrada para gestão fiscal do produtor rural. Baixo esforço, dor específica, upsell claro no funil — a porta para o ecossistema fiscal da Aegro.",
    stack: ["Discovery", "Funil", "PLG fiscal"],
    metrics: [
      { value: "+100", label: "usuários ativos em menos de 1 mês" },
      { value: "+20%", label: "conversão do funil" },
      { value: "−30%", label: "custo por lead qualificado" },
    ],
  },
  {
    tag: "IA · Fiscal",
    title: "Mini-apps de IA para obrigações fiscais",
    company: "Aegro",
    body: "Criei e lancei três mini-apps com LLMs automatizando Funrural, IRRF e SPED ICMS/IPI — obrigações que antes os contadores dos produtores faziam à mão.",
    stack: ["LLM", "Continuous Discovery", "Reforma Tributária"],
    metrics: [
      { value: "3", label: "mini-apps em produção" },
      { value: "↓↓", label: "volume de tickets de suporte" },
      { value: "+", label: "engajamento com o produto principal" },
    ],
  },
  {
    tag: "PLG · Growth",
    title: "Self-checkout Product-Led Growth",
    company: "Aegro",
    body: "Lancei o fluxo de auto-aquisição do plano básico, eliminando a dependência de representante comercial para tickets menores e liberando o time para contas de maior complexidade.",
    stack: ["PLG", "Pricing", "Ativação"],
    metrics: [
      { value: "−30%", label: "CAC no plano básico" },
      { value: "↑↑", label: "velocidade de experimentação de pricing" },
    ],
  },
  {
    tag: "Fintech · Compliance",
    title: "Informes de Rendimento (PF e PJ)",
    company: "Warren",
    body: "Liderei o ciclo completo dos informes anuais em uma corretora com 250 mil clientes e R$20 bi sob custódia — equilibrando exigência da Receita Federal com experiência clara para o investidor.",
    stack: ["Fintech", "Compliance", "CVM · Bacen · B3"],
    metrics: [
      { value: "0", label: "incidentes de compliance" },
      { value: "250k", label: "clientes atendidos no ciclo" },
      { value: "R$20bi", label: "em ativos sob custódia" },
    ],
  },
];
type Projeto = {
  tag: string;
  title: string;
  body: string;
  href: string | null;
  cta: string;
  image?: string;
};

const PROJETOS: Projeto[] = [
  {
    tag: "Vibe coding · Família",
    title: "Jogo da velha da Isadora",
    body: "Construído no Lovable como presente para minha sobrinha. Interação tátil, tema custom e IA leve rodando 100% no cliente.",
    href: "https://carousel-isadora-tic-tac-toe.lovable.app/",
    cta: "Jogar",
  },
  {
    tag: "Agritech · Cálculo",
    title: "Simulador Funrural 2026",
    body: "Ferramenta pública para produtores estimarem o Funrural sob as novas regras. Interface direta, sem cadastro, com fórmulas auditáveis.",
    href: "https://jessicajunker-hub.github.io/Simuladorfunrural2026/",
    cta: "Abrir simulador",
  },
  {
    tag: "ERP · Em breve",
    title: "ERP para Equoterapia",
    body: "Sistema em construção no Lovable dedicado a centros de equoterapia — prontuário, agenda e faturamento. Lançamento amanhã.",
    href: null,
    cta: "Aguarde",
  },
];

type PalestraItem =
  | {
      kind: "presencial";
      title: string;
      subtitle: string;
      meta: string;
      image: string;
    }
  | {
      kind: "live";
      title: string;
      subtitle: string;
      meta: string;
      image: string;
    }
  | {
      kind: "video";
      title: string;
      subtitle: string;
      videoId: string;
    }
  | {
      kind: "curso";
      title: string;
      subtitle: string;
      meta: string;
      href: string;
    }
  | {
      kind: "webinar";
      title: string;
      subtitle: string;
      meta: string;
      href?: string;
      videoId?: string;
    };


const PALESTRAS: PalestraItem[] = [
  {
    kind: "live",
    title: "Declaração dos investimentos no Imposto de Renda",
    subtitle: "Live com Jéssica Junker e Felipe Beys · Warren",
    meta: "Live · 2020",
    image: liveIrWarren.url,
  },
  {
    kind: "presencial",
    title: "3º Bootcamp de Relacionamento da Aegro",
    subtitle: "Reforma Tributária, NFe, MDF-e e o Produtor: O Lado Burocrático do Agro",
    meta: "2h · Certificado emitido",
    image: certificadoAegro.url,
  },
  {
    kind: "presencial",
    title: "7ª SEAGRO — Semana Acadêmica de Agronomia",
    subtitle: "Contabilidade do Agronegócio · São Vicente do Sul",
    meta: "Palestra convidada",
    image: palestraSeagro.url,
  },
  {
    kind: "presencial",
    title: "Roadshow Reforma Tributária no RS",
    subtitle: "Palestras presenciais em 3 cidades do Rio Grande do Sul",
    meta: "Circuito de palestras · Aegro",
    image: palestraReformaRS.url,
  },
  {
    kind: "video",
    title: "Aula: Do papel ao digital — Emissão de NF-e",
    subtitle: "YouTube",
    videoId: "86nFPbSs_HU",
  },
  {
    kind: "video",
    title: "Aula: Reforma Tributária no Agro",
    subtitle: "YouTube",
    videoId: "c16FZkBumgs",
  },
  {
    kind: "video",
    title: "Aula: NF-e e MDF-e na prática",
    subtitle: "YouTube",
    videoId: "auV6dNn-znM",
  },
  {
    kind: "video",
    title: "Aula: Burocracia do produtor rural",
    subtitle: "YouTube",
    videoId: "l8flwPq4PTk",
  },
  {
    kind: "webinar",
    title: "Missão Safra 2025 | Impactos da Reforma Tributária e NFP-e para o produtor",
    subtitle: "LinkedIn Live",
    meta: "Webinar · 2025",
    href: "https://www.linkedin.com/events/miss-osafra2025-impactosdarefor7365788640234369025/theater/",
  },
  {
    kind: "webinar",
    title: "Reforma Tributária 2026: impactos reais no bolso do produtor rural",
    subtitle: "YouTube",
    meta: "Webinar · 2026",
    videoId: "qWzOmuUyDqw",
  },
];


const DEMONSTRACOES = [
  {
    label: "Demonstração financeira — Fundo I",
    year: "2020",
    href: "https://sistemas.cvm.gov.br/docsrecebidos/20200731192912UP56c63e1d5a284e9ba1c86b1576ebf66e.pdf",
  },
  {
    label: "Demonstração financeira — Fundo II",
    year: "2021",
    href: "https://sistemas.cvm.gov.br/docsrecebidos/20210131215045UP86d82af3d2c14614803c16d13272bcc6.pdf",
  },
];

const SKILLS = [
  {
    group: "Discovery & Estratégia",
    items: ["Continuous Discovery", "JTBD", "OKRs", "North Star", "Pesquisa qualitativa"],
  },
  {
    group: "Delivery",
    items: ["Dual Track", "Roadmapping", "Experimentação", "Métricas de produto"],
  },
  {
    group: "IA Generativa",
    items: ["LLM apps", "Prompt design", "RAG", "Vibe coding (Lovable)"],
  },
  {
    group: "Contábil & Fiscal",
    items: ["CRC ativa", "Reforma Tributária", "NF-e / MDF-e", "Fundos CVM", "Agronegócio"],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Cases />
        <Reconhecimentos />
        <Projetos />
        <MaosNaMassa />
        <Palestras />
        <Contabil />
        <Skills />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="flex items-center gap-2 font-display text-xl">
          <span className="grid size-8 place-items-center rounded-full bg-amber text-ink">
            <span className="text-sm font-semibold">JJ</span>
          </span>
          <span className="font-medium tracking-tight">Jéssica Junker</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink/70 transition hover:text-amber"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink transition hover:bg-amber-soft md:inline-flex"
        >
          Falar comigo
        </a>
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-ink/20 p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-ink px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="rounded-full bg-amber px-5 py-2 text-center text-sm font-medium text-ink"
            >
              Falar comigo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--amber) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink/70">
            <Sparkles className="size-3.5 text-amber" />
            Senior Product Manager · Fintech × Agritech × IA
          </div>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
            Produtos que tornam a{" "}
            <span className="italic text-amber">burocracia</span> invisível para
            quem constrói o mundo real.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/70 md:text-xl">
            Uma década traduzindo domínios densos — contabilidade, fiscal, mercado
            financeiro e agronegócio — em produtos digitais que as pessoas
            realmente usam. Hoje, com IA generativa no core da minha caixa de
            ferramentas.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cases"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition hover:bg-amber-soft"
            >
              Ver cases <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition hover:border-amber hover:text-amber"
            >
              Projetos com IA
            </a>
          </div>
        </div>
        <aside className="md:col-span-4">
          <div className="rounded-2xl border border-ink/10 bg-ink/[3%] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Passagens</p>
            <ul className="mt-4 space-y-3 font-display text-2xl">
              <li>PwC</li>
              <li>Warren</li>
              <li>Aegro</li>
            </ul>
            <div className="mt-6 border-t border-ink/10 pt-4 text-sm text-ink/60">
              Formação em Ciências Contábeis · CRC ativa
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-ink/70">{description}</p>
      )}
    </div>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Sobre"
          title="Contadora de formação, PM por vocação, construtora por curiosidade."
        />
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6 text-lg text-ink/80">
            <p>
              Comecei na auditoria da PwC, migrei para produto na Warren
              redesenhando a experiência de investidores e liderei produtos
              na Aegro cruzando dois universos que aprendi a amar: fintech e
              agritech.
            </p>
            <p>
              Uso IA generativa não como enfeite de roadmap, mas como matéria-prima:
              prototipagem em Lovable, mini-apps de LLM entregues em semanas e
              descoberta contínua ancorada em conversas reais com produtores,
              contadores e investidores.
            </p>
            <p>
              Também dou aulas e palestras — porque explicar em voz alta é a
              melhor forma de descobrir o que ainda não está claro.
            </p>
          </div>
          <div className="space-y-4">
            <StatCard label="Anos em produto" value="8+" />
            <StatCard label="Domínios" value="Fintech · Agritech · Fiscal" />
            <StatCard label="Superpoder" value="Traduzir complexidade regulatória" />
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-ink/10">
            <img
              src={liverpool.url}
              alt="Jéssica com colegas em sala de aula em Liverpool"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber">
              <Globe className="size-4" />
              Inglês
            </div>
            <h3 className="font-display text-2xl text-ink">
              Intercâmbio em Liverpool
            </h3>
            <p className="text-lg text-ink/80">
              Fiz intercâmbio na Eurocentres, em Liverpool, e avancei até o nível B2.
              Hoje estudo para alcançar o C1 — porque aprender a se comunicar em outro
              idioma é treinar outra forma de pensar, negociar e construir confiança.
            </p>
            <p className="text-ink/60">
              A experiência reforçou uma habilidade que levo para o produto: ouvir
              pessoas de contextos diferentes e traduzir ideias de um lugar para outro.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-ink/[3%] p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-ink/50">{label}</p>
      <p className="mt-2 font-display text-2xl text-ink">{value}</p>
    </div>
  );
}

function Cases() {
  return (
    <section id="cases" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Cases de produto"
          title="Recortes de como eu trabalho."
          description="Contexto denso, decisão de escopo dura e o impacto que dá para medir."
        />
        <div className="space-y-6">
          {CASES.map((c, i) => (
            <article
              key={c.title}
              className="group grid gap-6 rounded-2xl border border-ink/10 bg-ink/[3%] p-8 transition hover:border-amber/50 md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-3">
                <p className="font-display text-6xl text-amber/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/50">
                  {c.tag}
                </p>
              </div>
              <div className="md:col-span-9">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl text-ink md:text-3xl">
                    {c.title}
                  </h3>
                  <span className="text-sm text-ink/50">@ {c.company}</span>
                </div>
                <p className="mt-4 text-ink/70">{c.body}</p>
                {c.metrics ? (
                  <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-amber/40 bg-amber/10 p-4"
                      >
                        <dt className="font-display text-2xl text-ink">{m.value}</dt>
                        <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-ink/60">
                          {m.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-amber px-4 py-2 text-sm font-medium text-ink transition hover:bg-amber-soft"
                    >
                      {c.href.includes("youtube.com") ? (
                        <>
                          <PlayCircle className="size-4" /> Ver o case no YouTube
                        </>
                      ) : (
                        <>
                          <ArrowUpRight className="size-4" /> Abrir site
                        </>
                      )}
                    </a>
                  ) : null}
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


const WARREN_SOCIO = {
  image: warrenSocia.url,
  title: "Sócia da Warren por mérito",
  year: "2021",
  body: "Tornei-me sócia da Warren por mérito em 2021, reconhecimento pela contribuição na construção de produtos, compliance fiscal e operações que escalawam o time de contabilidade."
};

const AEGER_VALOR = [
  {
    image: aegerValor1.url,
    valor: "1% todo dia",
    quote:
      "A Jé é a minha mentora do produto NF-e aqui na Aegro kkkk. É muito bom poder contar com todo o conhecimento dela. Sempre disposta a ajudar e a explicar os inúmeros aspectos fiscais! Além disso, acho incrível como, além de solícita, ela é uma máquina de produtividade.",
  },
  {
    image: aegerValor2.url,
    valor: "Um só time",
    quote:
      "Jéssica tem se destacado à frente nos novos lançamentos de produtos. É admirável o cuidado que ela tem com o impacto das novas funcionalidades em outros times, principalmente nas equipes de atendimento. Nos sentimos bem amparados com o apoio dela para tratar as questões fiscais que surgem no dia a dia.",
  },
  {
    image: aegerValor3.url,
    valor: "1% todo dia",
    quote:
      "Sempre busca atualizar documentações e auxiliar nas demandas dos clientes, recentemente fez um trabalho em conjunto com o suporte a respeito dos prazos de cancelamento dos estados com emissão dentro do Aegro, documentou os processos de cancelamento extemporâneo, gerando um material rico para apoio e construção de um fluxo de trabalho no Intercom.",
  },
];

function Reconhecimentos() {
  return (
    <section id="reconhecimentos" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Reconhecimentos"
          title="Reconhecimentos & marcos de carreira"
          description="3× Aeger de Valor na Aegro e sociedade por mérito na Warren."
        />

        <article className="mb-10 overflow-hidden rounded-2xl border border-ink/10 bg-ink/[3%] md:flex">
          <div className="md:w-1/2">
            <img
              src={WARREN_SOCIO.image}
              alt={WARREN_SOCIO.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-amber">Warren · {WARREN_SOCIO.year}</p>
            <h3 className="font-display text-3xl text-ink">{WARREN_SOCIO.title}</h3>
            <p className="mt-4 text-ink/70">{WARREN_SOCIO.body}</p>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-3">
          {AEGER_VALOR.map((a, i) => (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ink/[3%]"
            >
              <div className="aspect-video overflow-hidden bg-ink/[3%]">
                <img
                  src={a.image}
                  alt={`Prêmio Aeger de Valor — ${a.valor}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-amber">
                  Valor · {a.valor}
                </p>
                <blockquote className="text-sm italic leading-relaxed text-ink/80">
                  “{a.quote}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projetos() {
  return (
    <section id="projetos" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Projetos autorais"
          title="Feitos com IA, publicados sem cerimônia."
          description="Small bets fora do horário comercial — presente para sobrinha, ferramenta pública para o agro e um ERP nascendo."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJETOS.map((p) => {
            const isDisabled = !p.href;
            return (
              <article
                key={p.title}
                className="flex flex-col rounded-2xl border border-ink/10 bg-ink/[3%] p-6 transition hover:border-amber/50"
              >
                {p.image && (
                  <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl border-b border-ink/10">
                    <img
                      src={p.image}
                      alt={`Preview do ${p.title}`}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber">
                  <Rocket className="size-3.5" />
                  {p.tag}
                </div>
                <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 flex-1 text-ink/70">{p.body}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber hover:text-amber-soft"
                  >
                    {p.cta} <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-ink/50">
                    {p.cta}
                  </span>
                )}
                {isDisabled && (
                  <span className="mt-2 inline-block w-fit rounded-full bg-amber/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-amber">
                    Lançamento amanhã
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MaosNaMassa() {
  return (
    <section id="pessoal" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 space-y-20 md:space-y-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber">Fora do horário de produto</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
              Mãos na massa.
            </h2>
            <p className="mt-6 text-lg text-ink/70">
              Fora do código e dos decks, também gosto de construir e montar coisas — medir,
              cortar, fixar e ver o resultado tomando forma. A mesma curiosidade que me move
              em produto me leva a transformar espaços e objetos na vida real.
            </p>
            <p className="mt-4 text-ink/50">E sim, geralmente tem um cachorro supervisionando tudo.</p>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-ink/10 md:order-2">
            <img
              src={maosNaMassa.url}
              alt="Jéssica medindo uma parede em reforma, com um cachorro ao lado, mostrando o gosto por construir e montar coisas"
              className="h-80 w-full object-cover md:h-[28rem]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="order-1 overflow-hidden rounded-2xl border border-ink/10">
            <img
              src={petMamae.url}
              alt="Cachorro de estimação da Jéssica usando uma gola de tricô verde, ilustrando o lado mãe de pet"
              className="h-80 w-full object-cover md:h-[28rem]"
              loading="lazy"
            />
          </div>
          <div className="order-2">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber">Mãe de pet</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
              Tutora de primeira viagem.
            </h2>
            <p className="mt-6 text-lg text-ink/70">
              Sou mãe de pet e levo essa responsabilidade a sério: passeios, roupinhas de tricô e
              muitas negociações sobre quem manda no sofá. A rotina com ele me lembra todo dia que
              cuidar é também projetar — previsibilidade, carinho e ajustes finos.
            </p>
            <p className="mt-4 text-ink/50">Ele aprova os protótipos? Ainda não. Mas supervisiona com rigor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Palestras() {
  return (
    <section id="palestras" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Palestras & Cursos"
          title="Conteúdo que preparei, apresentei e assinei."
          description="Do palco universitário ao LinkedIn Live e YouTube."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PALESTRAS.map((p) => (
            <PalestraCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}



function PalestraCard({ p }: { p: PalestraItem }) {
  const thumb =
    "image" in p && p.image
      ? p.image
      : "videoId" in p && p.videoId
        ? `https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg`
        : null;

  const href =
    "href" in p && p.href
      ? p.href
      : "videoId" in p && p.videoId
        ? `https://www.youtube.com/watch?v=${p.videoId}`
        : null;

  const Icon =
    p.kind === "video"
      ? PlayCircle
      : p.kind === "live"
        ? Radio
        : p.kind === "curso" || p.kind === "webinar"
          ? Sparkles
          : Mic;

  const cardBody = (
    <>
      {thumb && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/10">
          <img
            src={thumb}
            alt={p.title}
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
          {p.kind === "video" && (
            <div className="absolute inset-0 grid place-items-center bg-ink/50">
              <PlayCircle className="size-14 text-ink drop-shadow-lg" />
            </div>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber">
          <Icon className="size-3.5" />
          {p.kind === "video"
            ? "Vídeo-aula"
            : p.kind === "curso"
              ? "Curso"
              : p.kind === "webinar"
                ? "Webinar"
                : p.kind === "live"
                  ? "Live"
                  : "Palestra"}
        </div>
        <h3 className="font-display text-xl leading-snug text-ink">{p.title}</h3>
        <p className="mt-2 text-sm text-ink/70">{p.subtitle}</p>
        {"meta" in p && p.meta && (
          <p className="mt-3 text-xs text-ink/50">{p.meta}</p>
        )}
        {href && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber">
            Assistir <ArrowUpRight className="size-4" />
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ink/[3%] transition hover:border-amber/50";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {cardBody}
    </a>
  ) : (
    <div className={className}>{cardBody}</div>
  );
}

function Contabil() {
  return (
    <section id="contabil" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Atuação como Contadora"
          title="Assinatura técnica em documentos públicos."
          description="Demonstrações financeiras de fundos assinadas por mim e publicadas no sistema oficial da CVM."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {DEMONSTRACOES.map((d) => (
            <a
              key={d.href}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-ink/10 bg-ink/[3%] p-6 transition hover:border-amber/50"
            >
              <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-amber/15 text-amber">
                <FileText className="size-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/50">
                  <Calculator className="size-3" />
                  Documento oficial · CVM · {d.year}
                </div>
                <h3 className="mt-2 font-display text-xl text-ink">{d.label}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-amber">
                  Abrir PDF <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Caixa de ferramentas"
          title="Como eu trabalho na prática."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s) => (
            <div
              key={s.group}
              className="rounded-2xl border border-ink/10 bg-ink/[3%] p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-amber">
                <Briefcase className="size-4" />
                <p className="text-xs font-medium uppercase tracking-[0.2em]">
                  {s.group}
                </p>
              </div>
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="text-sm text-ink/80">
                    · {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber">Contato</p>
        <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">
          Vamos conversar sobre produto,{" "}
          <span className="italic text-amber">IA</span> ou reforma tributária?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
          Aberta para trocas, mentorias e novos desafios em fintech, agritech e
          produtos com IA generativa.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jessicacljunker@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition hover:bg-amber-soft"
          >
            Enviar e-mail
          </a>
          <a
            href="https://wa.me/5551999037380"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition hover:border-amber hover:text-amber"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/jessicajunker/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition hover:border-amber hover:text-amber"
          >
            LinkedIn <ArrowUpRight className="size-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10 text-center text-sm text-ink/50">
      © {new Date().getFullYear()} Jéssica Junker · Feito com Lovable e uma boa dose
      de café.
    </footer>
  );
}
