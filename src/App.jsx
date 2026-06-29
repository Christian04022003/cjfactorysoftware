import { useState, useEffect } from "react";
import {
  Smartphone,
  Monitor,
  ShieldCheck,
  BrainCircuit,
  Mail,
  MessageCircle,
  BarChart3,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import citaMasterLogo from "./assets/citamaster.png";
import macroScanLogo from "./assets/macroscan.png";

const CONTACT_EMAIL = "cjfactorysoftware@gmail.com";
const WHATSAPP_NUMBER = "9211419496";
const WHATSAPP_MSG = encodeURIComponent("Hola, quiero agendar una asesoría para mi negocio.");

function LogoIcon() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-[10px] bg-[#0F1115] border border-[#1E293B] flex items-center justify-center shrink-0 shadow-lg">
        <svg className="w-6 h-6 text-[#D4A017]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-bold text-[#F8FAFC] tracking-tight">CJ Factory</span>
        <span className="text-[11px] font-medium text-[#D4A017] uppercase tracking-[0.2em]">Software</span>
      </div>
    </div>
  );
}

// ─── NAV ────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#metodo", label: "Método" },
  ];

  return (
    <nav className={`sticky top-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-xl transition-colors duration-300 border-b ${scrolled ? "border-[#2A2A2A]" : "border-transparent"}`}>
      <div className="w-full max-w-[1350px] mx-auto px-5 lg:px-8 flex items-center justify-between h-[64px]">
        <div className="text-[22px] md:text-[26px] font-bold tracking-tight text-[#F0F0F0]">
          CJ Factory <span className="text-[#D4A017]">Software</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="bg-[#D4A017] text-black px-[18px] md:px-[22px] py-2.5 rounded-[9px] text-[12px] md:text-[13px] font-bold transition-all duration-200 hover:bg-[#F5C842] hover:-translate-y-[1px]">
            Asesoría Gratuita
          </a>
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 text-[#888]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#1E1E1E] px-5 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] text-[#888] hover:text-[#F0F0F0] py-3 border-b border-[#1A1A1A] last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── HERO ────────────────────────────────────
function Hero() {
  return (
    <section className="flex items-center py-[64px] md:pt-[90px] md:pb-[80px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,23,.07)_0%,transparent_65%)]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8 w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/10 border border-[#D4A017]/20 px-4 py-1.5 rounded-full text-[11px] md:text-[12px] text-[#D4A017] font-semibold mb-[20px]">
            <div className="w-[7px] h-[7px] bg-[#D4A017] rounded-full animate-pulse shrink-0" />
            Fábrica de Software · Coatzacoalcos, México
          </div>
          <h1 className="text-[clamp(30px,4.8vw,56px)] font-black leading-[1.08] tracking-[-1.5px] md:tracking-[-2px] mb-[16px]">
            Desarrollamos el software que hace{" "}
            <span className="text-[#D4A017]">crecer tu empresa.</span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#888] leading-[1.72] mb-[28px] md:mb-[34px]">
            Convertimos procesos manuales en sistemas digitales que ahorran tiempo y generan resultados. Aplicaciones móviles y plataformas web a la medida, desde el diseño hasta la implementación final.
          </p>
          <div className="flex gap-3 flex-wrap mb-[32px] md:mb-[40px]">
            <a href="#contacto" className="bg-[#D4A017] text-black px-[22px] md:px-[28px] py-[12px] md:py-[14px] rounded-[10px] text-[13px] md:text-[14px] font-bold transition-all duration-200 hover:bg-[#F5C842] hover:-translate-y-[2px] inline-flex items-center gap-2">
              Agendar asesoría gratuita <ChevronRight size={16} />
            </a>
            <a href="#portafolio" className="bg-transparent text-[#F0F0F0] px-[22px] md:px-[28px] py-[12px] md:py-[14px] rounded-[10px] text-[13px] md:text-[14px] font-semibold border border-[#333] transition-all duration-200 hover:border-[#D4A017] hover:text-[#D4A017] inline-block">
              Ver portafolio
            </a>
          </div>
          <div className="grid grid-cols-3 gap-[1px] bg-[#222] border border-[#222] rounded-[14px] overflow-hidden">
            <div className="bg-[#111] p-[16px_12px] md:p-[20px_16px] text-center">
              <div className="text-[22px] md:text-[26px] font-extrabold text-[#D4A017] tracking-[-1px]">3+</div>
              <div className="text-[11px] text-[#666] mt-[3px]">Productos desarrollados</div>
            </div>
            <div className="bg-[#111] p-[16px_12px] md:p-[20px_16px] text-center">
              <div className="text-[22px] md:text-[26px] font-extrabold text-[#D4A017] tracking-[-1px]">iOS · Web</div>
              <div className="text-[11px] text-[#666] mt-[3px]">& Android</div>
            </div>
            <div className="bg-[#111] p-[16px_12px] md:p-[20px_16px] text-center">
              <div className="text-[22px] md:text-[26px] font-extrabold text-[#D4A017] tracking-[-1px]">100%</div>
              <div className="text-[11px] text-[#666] mt-[3px]">Implementación completa</div>
            </div>
          </div>
        </div>

        <div className="bg-[#141414] border border-[#2A2A2A] rounded-[22px] p-[24px] md:p-[28px] relative overflow-hidden transition-all duration-500 hover:border-[#D4A017]/50">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,#D4A017,transparent)]" />
          <div className="text-[11px] font-bold tracking-[2.5px] text-[#444] uppercase mb-[18px]">Desarrollos activos</div>
          {[
            { src: citaMasterLogo, cls: "bg-[#D4A017]/10", name: "CitaMaster", tag: "Gestión de citas · App Store", pill: "Móvil", pillCls: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
            { src: macroScanLogo, cls: "bg-[#22C55E]/10", name: "MacroScan", tag: "Nutrición inteligente · App Store", pill: "Móvil", pillCls: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
            { icon: <BarChart3 size={20} className="text-[#6366F1]" />, cls: "bg-[#6366F1]/10", name: "TTNAG Gantt", tag: "Gestión de proyectos · Web", pill: "Web", pillCls: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
          ].map((a, i, arr) => (
            <div className={`flex items-center gap-[14px] py-[14px] ${i !== arr.length - 1 ? "border-b border-[#1E1E1E]" : "pb-0"}`} key={a.name}>
              <div className={`w-[42px] h-[42px] rounded-[11px] flex items-center justify-center shrink-0 overflow-hidden ${a.cls}`}>
                {a.src ? <img src={a.src} alt={a.name} className="w-full h-full object-cover" /> : a.icon}
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#F0F0F0]">{a.name}</div>
                <div className="text-[11px] text-[#666] mt-[1px]">{a.tag}</div>
              </div>
              <span className={`text-[10px] font-bold px-[11px] py-[4px] rounded-full ml-auto shrink-0 ${a.pillCls}`}>{a.pill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────
function Services() {
  const svcs = [
    {
      icon: <Smartphone size={22} className="text-[#D4A017]" />,
      title: "Aplicaciones Móviles iOS y Android",
      desc: "Diseñamos aplicaciones móviles para iPhone y Android que mejoran la experiencia de tus clientes y optimizan la operación de tu negocio. Nos encargamos de todo: diseño, desarrollo y publicación en App Store y Google Play.",
    },
    {
      icon: <Monitor size={22} className="text-[#D4A017]" />,
      title: "Plataformas Web Empresariales",
      desc: "Desarrollamos plataformas web adaptadas a tus procesos, desde sistemas administrativos hasta herramientas de gestión especializada. Si tu operación lo requiere, lo construimos.",
      examples: [
        { label: "Páginas Web Informativas", detail: "Para mostrar tus servicios, atraer clientes en internet y proyectar imagen profesional." },
        { label: "Puntos de Venta e Inventarios", detail: "Control de entradas y salidas de mercancía, caja y reportes en tiempo real." },
        { label: "Agendamiento de Citas Online", detail: "Tus clientes reservan solos, con disponibilidad en tiempo real y confirmación automática." },
        { label: "Gestión de Proyectos (Gantt)", detail: "Cronogramas interactivos para constructoras, contratistas y empresas de logística." },
      ],
    },
    {
      icon: <ShieldCheck size={22} className="text-[#D4A017]" />,
      title: "Control de Calidad Profesional",
      desc: "Aplicamos pruebas funcionales y de calidad para garantizar estabilidad, rendimiento y una experiencia confiable para tus usuarios. Registramos y resolvemos cada error antes de la entrega.",
    },
    {
      icon: <BrainCircuit size={22} className="text-[#D4A017]" />,
      title: "Automatización e Inteligencia Artificial",
      desc: "Integramos soluciones de inteligencia artificial para automatizar procesos, analizar información y mejorar la productividad de tu empresa. Todo operando de forma privada y segura dentro de tus propios servidores.",
    },
  ];

  return (
    <section id="servicios" className="py-[60px] md:py-[100px]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="text-[11px] font-bold tracking-[3px] text-[#D4A017] uppercase mb-[14px]">Nuestras soluciones</div>
        <h2 className="text-[clamp(24px,3.8vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px]">
          Todo lo que tu empresa necesita,<br />
          <span className="text-[#D4A017]">desarrollado a la medida.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-[1px] bg-[#1E1E1E] border border-[#1E1E1E] rounded-[20px] overflow-hidden mt-[40px] md:mt-[48px]">
          {svcs.map((s) => (
            <div className="bg-[#0E0E0E] p-[28px] md:p-[36px] transition-colors duration-200 hover:bg-[#151515]" key={s.title}>
              <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] bg-[#D4A017]/10 border border-[#D4A017]/10 rounded-[12px] flex items-center justify-center mb-[16px]">
                {s.icon}
              </div>
              <h3 className="text-[15px] md:text-[17px] font-bold mb-[8px] tracking-[-0.3px] text-[#EEE]">{s.title}</h3>
              <p className="text-[13px] md:text-[14px] text-[#777] leading-[1.72]">{s.desc}</p>
              {s.examples && (
                <div className="mt-[16px] pt-[16px] border-t border-[#1A1A1A] flex flex-col gap-[10px]">
                  <p className="text-[10px] font-bold tracking-[2px] text-[#D4A017]/60 uppercase">Ejemplos que desarrollamos</p>
                  {s.examples.map((ex) => (
                    <div key={ex.label} className="flex items-start gap-[10px]">
                      <div className="w-[5px] h-[5px] bg-[#D4A017] rounded-full mt-[5px] shrink-0" />
                      <p className="text-[12px] text-[#666] leading-[1.6]">
                        <span className="text-[#D4A017]/90 font-semibold">{ex.label}: </span>
                        {ex.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ───────────────────────────────
function Portfolio() {
  const projects = [
    {
      src: citaMasterLogo,
      icoCls: "bg-[#D4A017]/10 border border-[#D4A017]/20",
      cardCls: "hover:border-[#D4A017]",
      type: "App Móvil · iOS",
      title: "CitaMaster",
      url: "https://apps.apple.com/mx/app/cita-master/id6756986122",
      isExternal: true,
      prob: "Horas perdidas agendando citas por WhatsApp, errores de horario y clientes sin respuesta oportuna.",
      ben: "Los clientes reservan sus propias citas las 24 horas, con disponibilidad en tiempo real y confirmación automática.",
      tags: [
        { l: "Multi-rol", c: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20" },
        { l: "Horarios automáticos", c: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20" },
        { l: "Gestión de empleados", c: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20" },
      ],
      btnCls: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20 hover:bg-[#D4A017] hover:text-black",
      btnLabel: "Ver en App Store",
    },
    {
      src: macroScanLogo,
      icoCls: "bg-[#22C55E]/10 border border-[#22C55E]/20",
      cardCls: "hover:border-[#22C55E]",
      type: "App Móvil · iOS",
      title: "MacroScan",
      url: "https://apps.apple.com/mx/app/macro-scan/id6748467443",
      isExternal: true,
      prob: "Registrar lo que se come es tedioso. La mayoría abandona sus planes por falta de seguimiento constante.",
      ben: "Escanea el código de barras de cualquier alimento y los macros se registran al instante. Con más de 40 recetas y calculadora personalizada.",
      tags: [
        { l: "Escáner de código de barras", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
        { l: "+40 Recetas", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
        { l: "Calculadora de macros", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
        { l: "Control de hidratación", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
      ],
      btnCls: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 hover:bg-[#22C55E] hover:text-black",
      btnLabel: "Ver en App Store",
    },
    {
      icon: <BarChart3 size={24} className="text-[#6366F1]" />,
      icoCls: "bg-[#6366F1]/10 border border-[#6366F1]/20",
      cardCls: "hover:border-[#6366F1]",
      type: "Plataforma Web Empresarial",
      title: "TTNAG Gantt",
      isTTNAG: true,
      prob: "Hojas de cálculo confusas, reportes tardíos y proyectos que se salen de presupuesto sin que nadie lo detecte a tiempo.",
      ben: "Cronograma visual interactivo con Gantt profesional. Arrastrar y soltar, control de recursos con costo por hora y alertas en tiempo real.",
      tags: [
        { l: "Gantt interactivo", c: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
        { l: "Control de costos", c: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
        { l: "Alertas de riesgo", c: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
      ],
      btnCls: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20 hover:bg-[#6366F1] hover:text-white",
      btnLabel: "Próximamente disponible",
    },
  ];

  return (
    <section id="portafolio" className="py-[60px] md:py-[100px] bg-[#0D0D0D] border-y border-[#1A1A1A]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="text-[11px] font-bold tracking-[3px] text-[#D4A017] uppercase mb-[14px]">Soluciones en acción</div>
        <h2 className="text-[clamp(24px,3.8vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px]">
          Tres desarrollos reales.<br />
          <span className="text-[#D4A017]">Tres problemas resueltos.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-[16px] md:gap-[20px] mt-[40px] md:mt-[48px]">
          {projects.map((p) => (
            <div
              className={`rounded-[20px] overflow-hidden border border-[#222] transition-all duration-300 hover:-translate-y-[6px] ${p.cardCls}`}
              key={p.title}
            >
              <div className="p-[22px_22px_16px] md:p-[26px_26px_18px] bg-[#101010]">
                <div className={`w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-[14px] flex items-center justify-center mb-[12px] md:mb-[14px] overflow-hidden ${p.icoCls}`}>
                  {p.src ? <img src={p.src} alt={p.title} className="w-full h-full object-cover" /> : p.icon}
                </div>
                <div className="text-[11px] font-bold tracking-[2px] uppercase text-[#444] mb-[4px]">{p.type}</div>
                <h3 className="text-[18px] md:text-[20px] font-extrabold tracking-[-0.5px] text-[#EEE]">{p.title}</h3>
              </div>
              <div className="p-[16px_22px_22px] md:p-[18px_26px_26px] bg-[#141414]">
                <div className="text-[12px] md:text-[13px] text-[#666] leading-[1.65] mb-[12px] p-[10px_12px] md:p-[12px_14px] bg-white/5 border-l-2 border-[#EF4444]/40 rounded-r-[6px]">
                  <span className="font-semibold text-[#EF4444]/70">Problema: </span>{p.prob}
                </div>
                <div className="text-[12px] md:text-[13px] text-[#666] leading-[1.65] mb-[16px] p-[10px_12px] md:p-[12px_14px] bg-white/5 border-l-2 border-[#22C55E]/40 rounded-r-[6px]">
                  <span className="font-semibold text-[#22C55E]/70">Solución: </span>{p.ben}
                </div>
                <div className="flex flex-wrap gap-[6px] mb-[16px]">
                  {p.tags.map((t) => (
                    <span key={t.l} className={`text-[11px] px-[10px] py-[4px] rounded-full font-semibold ${t.c}`}>{t.l}</span>
                  ))}
                </div>

                {p.isTTNAG ? (
                  <div className={`block w-full text-center p-[11px] rounded-[9px] text-[13px] font-bold border opacity-60 cursor-not-allowed ${p.btnCls}`}>
                    {p.btnLabel}
                  </div>
                ) : (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 text-center p-[11px] rounded-[9px] text-[13px] font-bold transition-all duration-200 border ${p.btnCls}`}
                  >
                    {p.btnLabel} <ChevronRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY ─────────────────────────────────────
function Why() {
  const reasons = [
    { n: "01", title: "Implementación Llave en Mano", desc: "Nos hacemos cargo desde el diseño visual hasta la configuración en la nube y el lanzamiento. Tú recibes el sistema listo para operar, sin sorpresas ni costos ocultos." },
    { n: "02", title: "Arquitectura Multiplataforma", desc: "Construimos con tecnología organizada y escalable. Si tu equipo crece o tus necesidades cambian, el sistema crece contigo sin fricciones de compatibilidad." },
    { n: "03", title: "Garantía de Estabilidad", desc: "Construimos para la operación real de tu empresa. Aplicamos pruebas exhaustivas antes de cada entrega para que funcione desde el primer día, sin interrupciones." },
  ];

  return (
    <section id="metodo" className="py-[60px] md:py-[100px]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="text-[11px] font-bold tracking-[3px] text-[#D4A017] uppercase mb-[14px]">El método CJ Factory</div>
        <h2 className="text-[clamp(24px,3.8vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px]">
          Por qué los negocios que nos eligen<br />
          <span className="text-[#D4A017]">nunca vuelven a trabajar con freelancers.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-[16px] md:gap-[20px] mt-[40px] md:mt-[48px]">
          {reasons.map((r) => (
            <div className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-[20px] p-[28px] md:p-[32px] transition-colors duration-300 hover:border-[#D4A017]/30" key={r.n}>
              <div className="text-[38px] md:text-[42px] font-black text-[#242424] tracking-[-2px] leading-none mb-[14px]">{r.n}</div>
              <h3 className="text-[15px] md:text-[16px] font-bold mb-[8px] text-[#EEE]">{r.title}</h3>
              <p className="text-[13px] text-[#666] leading-[1.72]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ─────────────────────────────────
function Process() {
  const steps = [
    {
      n: "1",
      title: "Descubrimiento",
      desc: "Analizamos tu operación, tus objetivos y las necesidades reales de tu negocio. Sin tecnicismos, sin compromisos.",
    },
    {
      n: "2",
      title: "Diseño",
      desc: "Creamos la arquitectura y la experiencia visual del sistema. Tú apruebas cada pantalla antes de que escribamos la primera línea de código.",
    },
    {
      n: "3",
      title: "Desarrollo",
      desc: "Construimos tu sistema con las tecnologías más adecuadas para tu caso, manteniendo comunicación constante durante todo el proceso.",
    },
    {
      n: "4",
      title: "Pruebas",
      desc: "Probamos cada función, flujo y escenario posible. Detectamos y corregimos cualquier error antes de la entrega.",
    },
    {
      n: "5",
      title: "Implementación",
      desc: "Ponemos en marcha el sistema en tu entorno real, capacitamos a tu equipo y te acompañamos en los primeros días de operación.",
    },
  ];

  return (
    <section className="py-[60px] md:py-[100px] bg-[#0D0D0D] border-y border-[#1A1A1A]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="text-[11px] font-bold tracking-[3px] text-[#D4A017] uppercase mb-[14px]">Cómo trabajamos</div>
        <h2 className="text-[clamp(24px,3.8vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px] mb-[40px] md:mb-[52px]">
          Un proceso claro,<br />
          <span className="text-[#D4A017]">de principio a fin.</span>
        </h2>
        <div className="relative">
          {/* Línea conectora solo en desktop */}
          <div className="hidden md:block absolute top-[28px] left-[28px] right-[28px] h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
          <div className="grid md:grid-cols-5 gap-[12px] md:gap-[16px]">
            {steps.map((s) => (
              <div key={s.n} className="relative bg-[#0E0E0E] border border-[#1E1E1E] rounded-[16px] p-[22px] md:p-[24px] transition-colors duration-300 hover:border-[#D4A017]/30">
                <div className="w-[40px] h-[40px] rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center text-[14px] font-extrabold text-[#D4A017] mb-[14px]">
                  {s.n}
                </div>
                <h3 className="text-[14px] font-bold text-[#EEE] mb-[8px]">{s.title}</h3>
                <p className="text-[12px] text-[#666] leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────
function CTA() {
  return (
    <section id="contacto" className="py-[60px] md:py-[110px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,160,23,0.06)_0%,transparent_60%)]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="text-center mb-[40px] md:mb-[52px]">
          <div className="text-[11px] font-bold tracking-[3px] text-[#D4A017] uppercase mb-[14px]">¿Listo para empezar?</div>
          <h2 className="text-[clamp(24px,3.8vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px]">
            Agenda tu diagnóstico gratuito.<br />
            <span className="text-[#D4A017]">Sin tecnicismos. Sin compromisos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-[16px] md:gap-[20px] max-w-[950px] mx-auto">
          <div className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-[20px] p-[28px] md:p-[32px] flex flex-col justify-between transition-colors duration-300 hover:border-[#D4A017]/30">
            <div>
              <div className="flex items-center gap-[10px] mb-[6px]">
                <Mail size={20} className="text-[#D4A017] shrink-0" />
                <span className="text-[14px] md:text-[15px] font-bold text-[#EEE]">Correo electrónico</span>
              </div>
              <p className="text-[13px] text-[#555] mb-[4px]">{CONTACT_EMAIL}</p>
              <p className="text-[13px] text-[#555] mb-[24px]">Respondemos en menos de 24 horas hábiles.</p>
              <div className="flex flex-col gap-[12px] mb-[28px]">
                {["Asesoría inicial sin costo", "Análisis detallado de tu proyecto", "Propuesta técnica personalizada", "Respuesta garantizada"].map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <div className="w-[6px] h-[6px] bg-[#D4A017] rounded-full shrink-0" />
                    <span className="text-[13px] text-[#888]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Asesoría Gratuita`}
              className="flex items-center justify-center gap-[10px] bg-[#D4A017] text-black py-[14px] rounded-[10px] text-[14px] font-bold transition-all duration-200 hover:bg-[#b88c14] hover:-translate-y-[1px] w-full"
            >
              <Mail size={16} />
              Enviar correo electrónico
            </a>
          </div>

          <div className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-[20px] p-[28px] md:p-[32px] flex flex-col justify-between transition-colors duration-300 hover:border-[#25D366]/30">
            <div>
              <div className="flex items-center gap-[10px] mb-[6px]">
                <MessageCircle size={20} className="text-[#25D366] shrink-0" />
                <span className="text-[14px] md:text-[15px] font-bold text-[#EEE]">WhatsApp</span>
              </div>
              <p className="text-[13px] text-[#555] mb-[24px]">La forma más rápida de contactarnos. Respuesta inmediata.</p>
              <div className="flex flex-col gap-[12px] mb-[28px]">
                {["Sin formularios", "Respuesta en minutos", "Consulta completamente gratuita", "Atención personalizada"].map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <div className="w-[6px] h-[6px] bg-[#25D366] rounded-full shrink-0" />
                    <span className="text-[13px] text-[#888]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[10px] bg-[#25D366] text-white py-[14px] rounded-[10px] text-[14px] font-bold transition-all duration-200 hover:bg-[#1ebe57] hover:-translate-y-[1px] w-full"
            >
              <svg className="w-[18px] h-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────
function Footer() {
  return (
    <footer className="py-[32px] md:py-[36px] border-t border-[#1A1A1A]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-[12px] text-center sm:text-left">
        <LogoIcon />
        <div className="text-[12px] md:text-[13px] text-[#444]">© 2026 CJ Factory Software · Coatzacoalcos, México</div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-[#F0F0F0] font-sans min-h-screen overflow-x-hidden selection:bg-[#D4A017] selection:text-black">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Why />
      <CTA />
      <Footer />
    </div>
  );
}