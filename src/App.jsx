import { useState, useEffect } from "react";
import citaMasterLogo from "./assets/citamaster.png";
import macroScanLogo from "./assets/macroscan.png";

const WHATSAPP_NUMBER = "9211419496";
const WHATSAPP_MSG = encodeURIComponent("Hola, quiero agendar una asesoría gratuita para mi negocio.");

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
            className="md:hidden flex flex-col gap-[5px] justify-center items-center w-9 h-9"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block w-5 h-[2px] bg-[#888] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#888] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#888] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
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
function Hero({ onOpenTTNAG }) {
  return (
    <section className="flex items-center py-[64px] md:pt-[90px] md:pb-[80px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,23,.07)_0%,transparent_65%)]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8 w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/10 border border-[#D4A017]/20 px-4 py-1.5 rounded-full text-[11px] md:text-[12px] text-[#D4A017] font-semibold mb-[20px]">
            <div className="w-[7px] h-[7px] bg-[#D4A017] rounded-full animate-pulse shrink-0" />
            Fábrica de Software · Coatzacoalcos, México 🇲🇽
          </div>
          <h1 className="text-[clamp(30px,4.8vw,56px)] font-black leading-[1.08] tracking-[-1.5px] md:tracking-[-2px] mb-[16px]">
            Creamos el software que hace <span className="text-[#D4A017]">crecer tu negocio.</span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#888] leading-[1.72] mb-[28px] md:mb-[34px]">
            Aplicaciones móviles y plataformas web a la medida que automatizan tus procesos, multiplican tus ventas y organizan tu operación. Tú pones la idea, nosotros nos encargamos de todo lo técnico.
          </p>
          <div className="flex gap-3 flex-wrap mb-[32px] md:mb-[40px]">
            <a href="#contacto" className="bg-[#D4A017] text-black px-[22px] md:px-[28px] py-[12px] md:py-[14px] rounded-[10px] text-[13px] md:text-[14px] font-bold transition-all duration-200 hover:bg-[#F5C842] hover:-translate-y-[2px] inline-block">
              Agendar asesoría gratuita →
            </a>
            <a href="#portafolio" className="bg-transparent text-[#F0F0F0] px-[22px] md:px-[28px] py-[12px] md:py-[14px] rounded-[10px] text-[13px] md:text-[14px] font-semibold border border-[#333] transition-all duration-200 hover:border-[#D4A017] hover:text-[#D4A017] inline-block">
              Ver portafolio
            </a>
          </div>
          <div className="grid grid-cols-3 gap-[1px] bg-[#222] border border-[#222] rounded-[14px] overflow-hidden">
            <div className="bg-[#111] p-[16px_12px] md:p-[20px_16px] text-center">
              <div className="text-[22px] md:text-[26px] font-extrabold text-[#D4A017] tracking-[-1px]">3+</div>
              <div className="text-[11px] text-[#666] mt-[3px]">Apps publicadas</div>
            </div>
            <div className="bg-[#111] p-[16px_12px] md:p-[20px_16px] text-center">
              <div className="text-[22px] md:text-[26px] font-extrabold text-[#D4A017] tracking-[-1px]">iOS</div>
              <div className="text-[11px] text-[#666] mt-[3px]">& Android</div>
            </div>
            <div className="bg-[#111] p-[16px_12px] md:p-[20px_16px] text-center">
              <div className="text-[22px] md:text-[26px] font-extrabold text-[#D4A017] tracking-[-1px]">100%</div>
              <div className="text-[11px] text-[#666] mt-[3px]">Llave en mano</div>
            </div>
          </div>
        </div>

        <div className="bg-[#141414] border border-[#2A2A2A] rounded-[22px] p-[24px] md:p-[28px] relative overflow-hidden transition-all duration-500 hover:border-[#D4A017]/50">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,#D4A017,transparent)]" />
          <div className="text-[11px] font-bold tracking-[2.5px] text-[#444] uppercase mb-[18px]">Desarrollos activos</div>
          {[
            { src: citaMasterLogo, cls: "bg-[#D4A017]/10", name: "CitaMaster", tag: "Gestión de citas · App Store", pill: "Móvil", pillCls: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
            { src: macroScanLogo, cls: "bg-[#22C55E]/10", name: "MacroScan", tag: "Nutrición inteligente · App Store", pill: "Móvil", pillCls: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
            { icon: "T", cls: "bg-[#6366F1]/10 text-[#6366F1]", name: "TTNAG Gantt", tag: "Gestión de proyectos · Web", pill: "Web", pillCls: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
          ].map((a, i, arr) => (
            <div className={`flex items-center gap-[14px] py-[14px] ${i !== arr.length - 1 ? "border-b border-[#1E1E1E]" : "pb-0"}`} key={a.name}>
              <div className={`w-[42px] h-[42px] rounded-[11px] flex items-center justify-center text-[19px] font-extrabold shrink-0 overflow-hidden ${a.cls}`}>
                {a.src ? <img src={a.src} alt={a.name} className="w-full h-full object-cover" /> : <span>{a.icon}</span>}
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
      ico: "📱",
      title: "Apps Móviles iOS y Android",
      desc: "Llevamos tu negocio al bolsillo de tus clientes. Diseñamos apps atractivas, rápidas y fáciles de usar. Nos encargamos de todo para publicarlas en App Store y Google Play.",
    },
    {
      ico: "🖥️",
      title: "Sistemas Web y Páginas a la Medida",
      desc: "Desde una página para dar a conocer tu negocio hasta una plataforma para controlar toda tu empresa en tiempo real. Si se puede hacer en computadora, lo programamos.",
      examples: [
        { label: "Páginas Web Informativas", detail: "Para mostrar tus servicios, conseguir clientes en internet y dar imagen profesional." },
        { label: "Puntos de Venta e Inventarios", detail: "Controla entradas, salidas de mercancía y dinero en caja. Sin pérdidas." },
        { label: "Agendamiento de Citas Online", detail: "Tus clientes reservan solos, ven disponibilidad y reciben confirmación automática." },
        { label: "Gestión de Proyectos (Gantt)", detail: "Cronogramas para constructoras, contratistas y empresas de logística." },
      ],
    },
    {
      ico: "✅",
      title: "Control de Calidad Profesional",
      desc: "Área dedicada exclusivamente a probar tu sistema al límite antes de entregártelo. Registramos y corregimos cada error para que funcione impecable desde el día uno.",
    },
    {
      ico: "🤖",
      title: "Automatización e IA Privada",
      desc: "Configuramos Asistentes de IA privados dentro de tu empresa. Automatizan tareas y analizan datos de forma 100% segura, sin que información confidencial salga de tus servidores.",
    },
  ];

  return (
    <section id="servicios" className="py-[60px] md:py-[100px]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="text-[11px] font-bold tracking-[3px] text-[#D4A017] uppercase mb-[14px]">Nuestras soluciones</div>
        <h2 className="text-[clamp(24px,3.8vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px]">
          Todo lo que tu negocio necesita,<br />
          <span className="text-[#D4A017]">sin que tengas que entender de código.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-[1px] bg-[#1E1E1E] border border-[#1E1E1E] rounded-[20px] overflow-hidden mt-[40px] md:mt-[48px]">
          {svcs.map((s) => (
            <div className="bg-[#0E0E0E] p-[28px] md:p-[36px] transition-colors duration-200 hover:bg-[#151515]" key={s.title}>
              <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] bg-[#D4A017]/10 border border-[#D4A017]/10 rounded-[12px] flex items-center justify-center text-[20px] md:text-[22px] mb-[16px]">{s.ico}</div>
              <h3 className="text-[15px] md:text-[17px] font-bold mb-[8px] tracking-[-0.3px] text-[#EEE]">{s.title}</h3>
              <p className="text-[13px] md:text-[14px] text-[#777] leading-[1.72]">{s.desc}</p>
              {s.examples && (
                <div className="mt-[16px] pt-[16px] border-t border-[#1A1A1A] flex flex-col gap-[10px]">
                  <p className="text-[10px] font-bold tracking-[2px] text-[#D4A017]/60 uppercase">Ejemplos que hacemos</p>
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
function Portfolio({ onOpenTTNAG }) {
  const projects = [
    {
      src: citaMasterLogo,
      icoCls: "bg-[#D4A017]/10 border border-[#D4A017]/20",
      cardCls: "hover:border-[#D4A017]",
      type: "App Móvil · iOS",
      title: "CitaMaster",
      url: "https://apps.apple.com/mx/app/cita-master/id6756986122",
      isExternal: true,
      prob: "❌ Perder horas agendando citas por WhatsApp. Errores de horario, cancelaciones de último minuto y clientes sin respuesta.",
      ben: "✅ Tus clientes reservan sus propias citas las 24 horas, ven disponibilidad en tiempo real y reciben confirmación automática.",
      tags: [
        { l: "Multi-rol", c: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20" },
        { l: "Horarios automáticos", c: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20" },
        { l: "Gestión de empleados", c: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20" },
      ],
      btnCls: "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20 hover:bg-[#D4A017] hover:text-black",
      btnLabel: "Ver en App Store →",
    },
    {
      src: macroScanLogo,
      icoCls: "bg-[#22C55E]/10 border border-[#22C55E]/20",
      cardCls: "hover:border-[#22C55E]",
      type: "App Móvil · iOS",
      title: "MacroScan",
      url: "https://apps.apple.com/mx/app/macro-scan/id6748467443",
      isExternal: true,
      prob: "❌ Registrar lo que comes es tedioso. La mayoría abandona sus planes por falta de seguimiento constante.",
      ben: "✅ Escanea el código de barras de cualquier alimento y tus macros se registran al instante. Con +40 recetas y calculadora personalizada.",
      tags: [
        { l: "Escáner QR/Barras", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
        { l: "+40 Recetas", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
        { l: "Calculadora de macros", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
        { l: "Control de agua", c: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20" },
      ],
      btnCls: "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 hover:bg-[#22C55E] hover:text-black",
      btnLabel: "Ver en App Store →",
    },
    {
      ico: "📊",
      icoCls: "bg-[#6366F1]/10 border border-[#6366F1]/20",
      cardCls: "hover:border-[#6366F1]",
      type: "Plataforma Web Empresarial",
      title: "TTNAG Gantt",
      isTTNAG: true,
      prob: "❌ Hojas de cálculo confusas, reportes retrasados y proyectos que se salen de presupuesto sin que nadie lo note a tiempo.",
      ben: "✅ Cronograma visual interactivo con Gantt profesional. Arrastrar y soltar, control de recursos con costo por hora y alertas en tiempo real.",
      tags: [
        { l: "Gantt interactivo", c: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
        { l: "Control de costos", c: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
        { l: "Alertas de riesgo", c: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20" },
      ],
      btnCls: "bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20 hover:bg-[#6366F1] hover:text-white",
      btnLabel: "No disponible por ahora →",
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
                <div className={`w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-[14px] flex items-center justify-center text-[24px] mb-[12px] md:mb-[14px] overflow-hidden ${p.icoCls}`}>
                  {p.src ? <img src={p.src} alt={p.title} className="w-full h-full object-cover" /> : <span>{p.ico}</span>}
                </div>
                <div className="text-[11px] font-bold tracking-[2px] uppercase text-[#444] mb-[4px]">{p.type}</div>
                <h3 className="text-[18px] md:text-[20px] font-extrabold tracking-[-0.5px] text-[#EEE]">{p.title}</h3>
              </div>
              <div className="p-[16px_22px_22px] md:p-[18px_26px_26px] bg-[#141414]">
                <div className="text-[12px] md:text-[13px] text-[#666] leading-[1.65] mb-[12px] p-[10px_12px] md:p-[12px_14px] bg-white/5 border-l-2 border-[#2A2A2A] rounded-r-[6px]">{p.prob}</div>
                <p className="text-[12px] md:text-[13px] text-[#CCC] leading-[1.68] mb-[16px]">{p.ben}</p>
                <div className="flex flex-wrap gap-[6px] mb-[16px]">
                  {p.tags.map((t) => (
                    <span key={t.l} className={`text-[11px] px-[10px] py-[4px] rounded-full font-semibold ${t.c}`}>{t.l}</span>
                  ))}
                </div>

                {/* ── Botón: TTNAG abre el demo, el resto va a URL externa ── */}
                {p.isTTNAG ? (
                  <button
                    // onClick={onOpenTTNAG}
                    className={`block w-full text-center p-[11px] rounded-[9px] text-[13px] font-bold transition-all duration-200 border cursor-pointer ${p.btnCls}`}
                  >
                    {p.btnLabel}
                  </button>
                ) : (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center p-[11px] rounded-[9px] text-[13px] font-bold transition-all duration-200 border ${p.btnCls}`}
                  >
                    {p.btnLabel}
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

// // ─── GANTT DEMO (sección en landing) ─────────
// function GanttDemo({ onOpenTTNAG }) {
//   const [selectedRow, setSelectedRow] = useState(null);

//   const rangeStart = new Date("2025-01-01").getTime();
//   const rangeEnd   = new Date("2025-08-01").getTime();
//   const totalMs    = rangeEnd - rangeStart;

//   const pct = (dateStr) => ((new Date(dateStr).getTime() - rangeStart) / totalMs) * 100;
//   const wid = (s, e)    => ((new Date(e).getTime() - new Date(s).getTime()) / totalMs) * 100;
//   const todayPct = pct("2025-03-20");

//   const ROW_H = 32;

//   const tasks = [
//     { id:1,  wbs:"1",   n:"Diseño y Planificación",    s:"2025-01-06", e:"2025-02-28", prog:100, isP:true,  dep:0 },
//     { id:2,  wbs:"1.1", n:"Levantamiento topográfico", s:"2025-01-06", e:"2025-01-17", prog:100, dep:1 },
//     { id:3,  wbs:"1.2", n:"Diseño arquitectónico",     s:"2025-01-20", e:"2025-02-07", prog:100, dep:1 },
//     { id:4,  wbs:"1.3", n:"Permisos y licencias",      s:"2025-02-10", e:"2025-02-28", prog:100, dep:1 },
//     { id:5,  wbs:"2",   n:"Construcción",              s:"2025-03-03", e:"2025-06-06", prog:18,  isP:true,  dep:0 },
//     { id:6,  wbs:"2.1", n:"Cimentación",               s:"2025-03-03", e:"2025-03-28", prog:60,  isCr:true, dep:1 },
//     { id:7,  wbs:"2.2", n:"Estructura metálica",       s:"2025-03-31", e:"2025-05-02", prog:0,   isCr:true, dep:1 },
//     { id:8,  wbs:"2.3", n:"Instalaciones eléctricas",  s:"2025-04-07", e:"2025-05-09", prog:0,   dep:1 },
//     { id:9,  wbs:"2.4", n:"Techado y fachada",         s:"2025-05-05", e:"2025-06-06", prog:0,   isCr:true, dep:1 },
//     { id:10, wbs:"3",   n:"Equipamiento",              s:"2025-06-09", e:"2025-07-11", prog:0,   isP:true,  dep:0 },
//     { id:11, wbs:"3.1", n:"Equipos industriales",      s:"2025-06-09", e:"2025-06-27", prog:0,   dep:1 },
//     { id:12, wbs:"3.2", n:"Pruebas y calibración",     s:"2025-06-30", e:"2025-07-11", prog:0,   isCr:true, dep:1 },
//     { id:13, wbs:"4",   n:"Entrega Final",             s:"2025-07-14", e:"2025-07-14", prog:0,   isMil:true, isCr:true, dep:0 },
//   ];

//   const months = [
//     { l:"ENE", d:"2025-01-01" }, { l:"FEB", d:"2025-02-01" }, { l:"MAR", d:"2025-03-01" },
//     { l:"ABR", d:"2025-04-01" }, { l:"MAY", d:"2025-05-01" }, { l:"JUN", d:"2025-06-01" },
//     { l:"JUL", d:"2025-07-01" },
//   ];

//   function TaskBar({ t }) {
//     if (t.isMil) {
//       return (
//         <div style={{
//           position: "absolute", zIndex: 2,
//           left: `${pct(t.s)}%`,
//           top: "50%",
//           width: 14, height: 14,
//           transform: "translate(-7px, -7px) rotate(45deg)",
//           backgroundColor: "#F59E0B",
//           border: "2px solid #D97706",
//         }} />
//       );
//     }
//     if (t.isP) {
//       return (
//         <div style={{
//           position: "absolute", zIndex: 2,
//           left: `${pct(t.s)}%`,
//           width: `${wid(t.s, t.e)}%`,
//           height: 10,
//           top: "50%", transform: "translateY(-50%)",
//           backgroundColor: "#1E293B",
//           borderRadius: 2,
//           overflow: "visible",
//         }}>
//           {t.prog > 0 && (
//             <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${t.prog}%`, backgroundColor: "#475569", borderRadius: 2 }} />
//           )}
//           <div style={{ position: "absolute", left: -1, bottom: -6, width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #1E293B" }} />
//           <div style={{ position: "absolute", right: -1, bottom: -6, width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #1E293B" }} />
//         </div>
//       );
//     }
//     const barColor   = t.isCr ? "#FEE2E2" : "#E0E7FF";
//     const border     = t.isCr ? "#EF4444" : "#6366F1";
//     const fillColor  = t.isCr ? "#EF4444" : "#6366F1";
//     const labelColor = t.prog > 55 ? "white" : t.isCr ? "#B91C1C" : "#4338CA";
//     return (
//       <div
//         title={`${t.n}: ${t.s} → ${t.e} (${t.prog}% completado)`}
//         style={{
//           position: "absolute", zIndex: 2,
//           left: `${pct(t.s)}%`,
//           width: `${wid(t.s, t.e)}%`,
//           height: 18,
//           top: "50%", transform: "translateY(-50%)",
//           backgroundColor: barColor,
//           border: `1.5px solid ${border}`,
//           borderRadius: 4,
//           overflow: "hidden",
//         }}
//       >
//         {t.prog > 0 && (
//           <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${t.prog}%`, backgroundColor: fillColor, opacity: 0.75 }} />
//         )}
//         {t.prog > 0 && (
//           <span style={{ position: "absolute", left: 5, top: "50%", transform: "translateY(-50%)", fontSize: 8, fontWeight: 800, color: labelColor, zIndex: 1, whiteSpace: "nowrap" }}>
//             {t.prog}%
//           </span>
//         )}
//       </div>
//     );
//   }

//   return (
//     <section id="demo" className="py-[60px] md:py-[100px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,.06)_0%,transparent_65%)]">
//       <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
//         <div className="text-[11px] font-bold tracking-[3px] text-[#6366F1] uppercase mb-[14px]">TTNAG Gantt · Demo interactiva</div>
//         <div className="md:flex items-end justify-between mb-[36px] md:mb-[44px] gap-8">
//           <div>
//             <h2 className="text-[clamp(24px,3.8vw,42px)] font-extrabold leading-[1.14] tracking-[-1.5px]">
//               Control total de tus proyectos.<br />
//               <span className="text-[#6366F1]">Sin hojas de cálculo confusas.</span>
//             </h2>
//           </div>
//           <p className="text-[14px] text-[#555] leading-[1.7] max-w-[380px] mt-[12px] md:mt-0 shrink-0">
//             Haz clic en una fila para seleccionarla. Cada barra muestra avance real, ruta crítica en rojo y el hito final en diamante.
//           </p>
//         </div>

//         <div style={{ overflowX: "auto", marginLeft: -1, marginRight: -1 }}>
//           <div style={{ minWidth: 780, borderRadius: 16, overflow: "hidden", border: "1px solid #2A2A2A", boxShadow: "0 32px 80px rgba(0,0,0,0.55)" }}>
//             <div style={{ background: "#111", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #1E1E1E" }}>
//               <div style={{ display: "flex", gap: 6 }}>
//                 {["#EF4444","#F59E0B","#22C55E"].map(c => (
//                   <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: c, opacity: 0.85 }} />
//                 ))}
//               </div>
//               <div style={{ flex: 1, background: "#1A1A1A", borderRadius: 6, padding: "4px 14px", fontSize: 11, color: "#555", marginLeft: 8, display: "flex", alignItems: "center", gap: 6 }}>
//                 <span style={{ color: "#22C55E", fontSize: 9 }}>🔒</span>
//                 ttnag.app/proyectos/planta-industrial-coatzacoalcos-2025
//               </div>
//               <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", background: "#6366F1", color: "white", padding: "4px 12px", borderRadius: 6, textTransform: "uppercase", whiteSpace: "nowrap" }}>
//                 Vista Demo
//               </div>
//             </div>

//             <div style={{ background: "white", height: 468, display: "flex", flexDirection: "column", overflow: "hidden" }}>
//               <div style={{ background: "white", borderBottom: "1px solid #E5E7EB", padding: "8px 16px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
//                 <div style={{ width: 30, height: 30, background: "#6366F1", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14, fontWeight: 900, flexShrink: 0 }}>G</div>
//                 <div style={{ minWidth: 0 }}>
//                   <div style={{ fontSize: 12, fontWeight: 800, color: "#111827", lineHeight: 1.25, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
//                     Planta Industrial · Coatzacoalcos 2025
//                   </div>
//                   <div style={{ fontSize: 9, fontWeight: 700, color: "#6366F1", textTransform: "uppercase", letterSpacing: "0.12em" }}>TTNAG Gantt Profesional</div>
//                 </div>
//                 <div style={{ marginLeft: "auto", display: "flex", gap: 5, flexShrink: 0 }}>
//                   <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 5, padding: "3px 8px", fontSize: 9, fontWeight: 700, color: "#374151", whiteSpace: "nowrap" }}>13 tareas</div>
//                   <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 5, padding: "3px 8px", fontSize: 9, fontWeight: 700, color: "#DC2626", whiteSpace: "nowrap" }}>5 críticas 🔴</div>
//                   <div style={{ background: "#ECFDF5", border: "1px solid #BBF7D0", borderRadius: 5, padding: "3px 8px", fontSize: 9, fontWeight: 700, color: "#059669", whiteSpace: "nowrap" }}>4 completadas ✓</div>
//                 </div>
//               </div>

//               <div style={{ background: "#F9FAFB", borderBottom: "1px solid #E5E7EB", padding: "5px 12px", display: "flex", alignItems: "center", gap: 6, flexShrink: 0, flexWrap: "nowrap" }}>
//                 <div style={{ padding: "3px 9px", background: "#1E1B4B", color: "white", borderRadius: 5, fontSize: 9, fontWeight: 800, whiteSpace: "nowrap" }}>+ Tarea</div>
//                 <div style={{ padding: "3px 9px", background: "#FEF3C7", color: "#92400E", border: "1px solid #FDE68A", borderRadius: 5, fontSize: 9, fontWeight: 800, whiteSpace: "nowrap" }}>⚑ Hito</div>
//                 <div style={{ width: 1, height: 14, background: "#E5E7EB", flexShrink: 0 }} />
//                 <div style={{ padding: "3px 9px", background: "#FEF2F2", color: "#DC2626", border: "1px solid #FECACA", borderRadius: 5, fontSize: 9, fontWeight: 800, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 4 }}>
//                   ⬦ Ruta Crítica
//                   <span style={{ background: "#DC2626", color: "white", borderRadius: 3, padding: "0 4px", fontSize: 8 }}>ON</span>
//                 </div>
//                 <div style={{ marginLeft: "auto", display: "flex", background: "#E5E7EB", borderRadius: 6, padding: 2, gap: 1, flexShrink: 0 }}>
//                   {["Día","Sem","Mes","Trim"].map((v, i) => (
//                     <div key={v} style={{ padding: "2px 8px", borderRadius: 4, fontSize: 8, fontWeight: 800, background: i === 2 ? "white" : "transparent", color: i === 2 ? "#6366F1" : "#9CA3AF", boxShadow: i === 2 ? "0 1px 2px rgba(0,0,0,0.1)" : "none", whiteSpace: "nowrap" }}>{v}</div>
//                   ))}
//                 </div>
//                 <div style={{ padding: "3px 9px", border: "1px solid #E5E7EB", borderRadius: 5, fontSize: 8, fontWeight: 800, color: "#9CA3AF", background: "#F3F4F6", whiteSpace: "nowrap", flexShrink: 0 }}>🔒 Solo lectura</div>
//               </div>

//               <div style={{ flex: 1, display: "flex", overflow: "hidden", minHeight: 0 }}>
//                 <div style={{ width: 286, minWidth: 286, borderRight: "2px solid #D1D5DB", display: "flex", flexDirection: "column", overflow: "hidden" }}>
//                   <div style={{ display: "flex", background: "#F3F4F6", borderBottom: "1px solid #D1D5DB", height: 34, flexShrink: 0 }}>
//                     <div style={{ width: 28, borderRight: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#9CA3AF" }}>#</div>
//                     <div style={{ width: 42, borderRight: "1px solid #E5E7EB", display: "flex", alignItems: "center", padding: "0 6px", fontSize: 9, fontWeight: 700, color: "#374151" }}>WBS</div>
//                     <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 8px", fontSize: 9, fontWeight: 700, color: "#374151" }}>NOMBRE DE LA TAREA</div>
//                     <div style={{ width: 38, borderLeft: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#374151" }}>%</div>
//                   </div>
//                   {tasks.map((t, i) => (
//                     <div
//                       key={t.id}
//                       onClick={() => setSelectedRow(t.id === selectedRow ? null : t.id)}
//                       style={{
//                         display: "flex", height: ROW_H, borderBottom: "1px solid #F1F5F9",
//                         cursor: "pointer", flexShrink: 0,
//                         backgroundColor: selectedRow === t.id ? "#EEF2FF" : t.isCr && !t.isP ? "#FFFAFA" : "white",
//                         transition: "background-color 0.12s",
//                       }}
//                     >
//                       <div style={{ width: 28, borderRight: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: selectedRow === t.id ? "#6366F1" : "#D1D5DB", fontWeight: 600 }}>{i+1}</div>
//                       <div style={{ width: 42, borderRight: "1px solid #F1F5F9", display: "flex", alignItems: "center", padding: "0 6px", fontSize: 10, fontWeight: 700, color: "#6366F1" }}>{t.wbs}</div>
//                       <div style={{ flex: 1, display: "flex", alignItems: "center", paddingLeft: 6 + t.dep * 13, gap: 4, overflow: "hidden" }}>
//                         {t.isP  && <span style={{ color: "#94A3B8", fontSize: 9, flexShrink: 0 }}>▶</span>}
//                         {t.isMil && <span style={{ fontSize: 10, flexShrink: 0 }}>💎</span>}
//                         <span style={{ fontSize: 11, fontWeight: t.isP ? 800 : 500, color: t.isP ? "#111827" : "#374151", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
//                           {t.n}
//                         </span>
//                         {t.isCr && !t.isP && !t.isMil && (
//                           <span style={{ flexShrink: 0, fontSize: 7, fontWeight: 800, color: "#DC2626", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 3, padding: "1px 3px" }}>CR</span>
//                         )}
//                       </div>
//                       <div style={{ width: 38, borderLeft: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: t.prog === 100 ? "#059669" : "#374151" }}>
//                         {t.isMil ? "⬦" : `${t.prog}%`}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
//                   <div style={{ position: "relative", background: "#F3F4F6", borderBottom: "1px solid #D1D5DB", height: 34, flexShrink: 0 }}>
//                     {months.map((m) => (
//                       <div key={m.l} style={{
//                         position: "absolute", left: `${pct(m.d)}%`, top: 0, bottom: 0,
//                         display: "flex", alignItems: "center", paddingLeft: 8,
//                         fontSize: 9, fontWeight: 800, color: "#6B7280", letterSpacing: "0.05em",
//                         borderLeft: "1px solid #E5E7EB",
//                       }}>{m.l}</div>
//                     ))}
//                   </div>
//                   <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
//                     {months.map((m) => (
//                       <div key={m.l} style={{ position: "absolute", left: `${pct(m.d)}%`, top: 0, bottom: 0, borderLeft: "1px solid #F3F4F6", zIndex: 0, pointerEvents: "none" }} />
//                     ))}
//                     <div style={{ position: "absolute", left: `${todayPct}%`, top: 0, bottom: 0, width: 2, background: "#6366F1", zIndex: 4, pointerEvents: "none" }}>
//                       <div style={{ position: "absolute", top: 4, left: 4, fontSize: 7, fontWeight: 800, color: "#6366F1", whiteSpace: "nowrap", letterSpacing: "0.06em" }}>HOY</div>
//                     </div>
//                     {tasks.map((t) => (
//                       <div
//                         key={t.id}
//                         onClick={() => setSelectedRow(t.id === selectedRow ? null : t.id)}
//                         style={{
//                           position: "relative", height: ROW_H,
//                           borderBottom: "1px solid #F9FAFB",
//                           backgroundColor: selectedRow === t.id ? "rgba(99,102,241,0.06)" : "transparent",
//                           cursor: "pointer", flexShrink: 0,
//                           transition: "background-color 0.12s",
//                         }}
//                       >
//                         <TaskBar t={t} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-[16px] mt-[20px] justify-center">
//           {[
//             { color: "#6366F1", fill: "#E0E7FF", label: "Tarea normal" },
//             { color: "#EF4444", fill: "#FEE2E2", label: "Ruta crítica" },
//             { color: "#1E293B", fill: "#1E293B", label: "Tarea resumen" },
//             { color: "#D97706", fill: "#F59E0B", label: "Hito de entrega" },
//           ].map((item) => (
//             <div key={item.label} className="flex items-center gap-[8px]">
//               <div style={{ width: 28, height: 10, backgroundColor: item.fill, border: `1.5px solid ${item.color}`, borderRadius: 3 }} />
//               <span className="text-[11px] text-[#555]">{item.label}</span>
//             </div>
//           ))}
//           <div className="flex items-center gap-[8px]">
//             <div style={{ width: 2, height: 16, backgroundColor: "#6366F1" }} />
//             <span className="text-[11px] text-[#555]">Línea de hoy</span>
//           </div>
//         </div>

//         <div className="text-center mt-[36px] flex flex-col items-center gap-[14px]">
//           <div className="flex gap-[12px] flex-wrap justify-center">
//             {/* ── Botón principal abre el demo completo ── */}
//             <button
//               onClick={onOpenTTNAG}
//               className="bg-[#6366F1] text-white px-[28px] py-[14px] rounded-[10px] text-[14px] font-bold transition-all duration-200 hover:bg-[#4F46E5] hover:-translate-y-[2px] cursor-pointer"
//             >
//               Abrir demo completo →
//             </button>
//             <a href="#contacto" className="bg-transparent text-[#888] px-[28px] py-[14px] rounded-[10px] text-[14px] font-semibold border border-[#333] transition-all duration-200 hover:border-[#6366F1] hover:text-[#6366F1] inline-block">
//               Solicitar demo personalizada
//             </a>
//           </div>
//           <p className="text-[12px] text-[#3A3A3A]">Vista demostrativa con datos de ejemplo · Proyecto real disponible previa consulta sin costo</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// ─── WHY ─────────────────────────────────────
function Why() {
  const reasons = [
    { n: "01", title: "Soluciones Llave en Mano", desc: "Nos encargamos desde el diseño visual hasta la configuración en la nube y el lanzamiento final. Tú solo recibes el sistema listo para usar, sin sorpresas." },
    { n: "02", title: "Infraestructura Multiplataforma", desc: "Configuramos la tecnología de forma tan organizada que si tu equipo crece, todos trabajarán en el mismo sistema sin problemas de compatibilidad." },
    { n: "03", title: "Garantía de Estabilidad", desc: "No hacemos páginas que se caen. Estructuramos sistemas robustos para empresas que buscan crecer en serio, con pruebas exhaustivas antes de cada entrega." },
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

// ─── STACK ───────────────────────────────────
function Stack() {
  const chips = ["React", "React Native", "TypeScript", "Docker", "AWS", "PostgreSQL", "PHP", "Java", "iOS App Store", "Google Play Store"];
  return (
    <div className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-[48px] md:py-[56px]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="text-[11px] font-bold tracking-[3px] text-[#D4A017] uppercase mb-[12px]">Infraestructura tecnológica</div>
        <p className="text-[13px] text-[#666]">Para quienes quieran conocer los detalles técnicos detrás de nuestros sistemas.</p>
        <div className="flex flex-wrap gap-[8px] mt-[14px]">
          {chips.map((c) => (
            <span key={c} className="text-[12px] font-semibold px-[14px] py-[6px] rounded-full bg-[#141414] border border-[#222] text-[#777] transition-all duration-200 hover:border-[#D4A017]/30 hover:text-[#D4A017]">{c}</span>
          ))}
        </div>
      </div>
    </div>
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
                <span className="text-[20px]">📧</span>
                <span className="text-[14px] md:text-[15px] font-bold text-[#EEE]">Escríbenos por correo</span>
              </div>
              <p className="text-[13px] text-[#555] mb-[24px]">Te respondemos en menos de 24 horas hábiles.</p>
              <div className="flex flex-col gap-[12px] mb-[28px]">
                {["Asesoría sin costo inicial","Análisis detallado de tu proyecto","Propuesta técnica personalizada","Respuesta rápida garantizada"].map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <div className="w-[6px] h-[6px] bg-[#D4A017] rounded-full shrink-0" />
                    <span className="text-[13px] text-[#888]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="mailto:cjsoftwarefactory@gmail.com?subject=Asesoría Gratuita"
              className="flex items-center justify-center gap-[10px] bg-[#D4A017] text-black py-[14px] rounded-[10px] text-[14px] font-bold transition-all duration-200 hover:bg-[#b88c14] hover:-translate-y-[1px] w-full"
            >
              Enviar correo electrónico →
            </a>
          </div>

          <div className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-[20px] p-[28px] md:p-[32px] flex flex-col justify-between transition-colors duration-300 hover:border-[#25D366]/30">
            <div>
              <div className="flex items-center gap-[10px] mb-[6px]">
                <span className="text-[20px]">💬</span>
                <span className="text-[14px] md:text-[15px] font-bold text-[#EEE]">Escríbenos por WhatsApp</span>
              </div>
              <p className="text-[13px] text-[#555] mb-[24px]">La forma más rápida. Respuesta inmediata.</p>
              <div className="flex flex-col gap-[12px] mb-[28px]">
                {["Sin formularios complicados","Respuesta en minutos","Consulta completamente gratis","Atención personalizada"].map((item) => (
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
              Abrir WhatsApp →
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
        <div className="text-[12px] md:text-[13px] text-[#444]">© 2026 CJ Factory Software · Coatzacoalcos, México 🇲🇽</div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────
export default function App() {
  const [showTTNAG, setShowTTNAG] = useState(false);

  // Si el demo está activo, renderiza TTNAGDemo a pantalla completa
  if (showTTNAG) {
    return <TTNAGDemo onBack={() => setShowTTNAG(false)} />;
  }

  return (
    <div className="bg-[#0A0A0A] text-[#F0F0F0] font-sans min-h-screen overflow-x-hidden selection:bg-[#D4A017] selection:text-black">
      <Nav />
      <Hero onOpenTTNAG={() => setShowTTNAG(true)} />
      <Services />
      <Portfolio onOpenTTNAG={() => setShowTTNAG(true)} />
      {/* <GanttDemo onOpenTTNAG={() => setShowTTNAG(true)} /> */}
      <Why />
      <Stack />
      <CTA />
      <Footer />
    </div>
  );
}