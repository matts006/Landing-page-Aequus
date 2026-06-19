import "./App.css";
import { useEffect, useState, useRef } from "react";
import imagem1 from "./assets/images/Captura de tela 2026-06-18 184038.png";
import imagem2 from "./assets/images/Captura de tela 2026-06-18 184045.png";
import imagem3 from "./assets/images/Captura de tela 2026-06-18 184050.png";
import imagem4 from "./assets/images/Captura de tela 2026-06-18 184055.png";
import imagem5 from "./assets/images/Captura de tela 2026-06-18 184103.png";

export default function App() {
  const registroRef = useRef(null);
  const images = [
    { src: imagem1, alt: "IA Lumo", caption: "Página Inicial do App" },
    { src: imagem2, alt: "Termômetro", caption: "Barra Lateral de Ferramentas" },
    { src: imagem3, alt: "Registro de insulina", caption: "Registro de insulina" },
    { src: imagem4, alt: "Barra lateral de ferramentas", caption: "Termômetro" },
    { src: imagem5, alt: "Página inicial do app", caption: "IA Lumo" },
  ];

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % images.length;
      });
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className="container">
      {/* ANIMATED BACKGROUND */}
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
          <div className="element element-4"></div>
          <div className="element element-5"></div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.png" className="logo" alt="Aequus Logo" />
          <h1 className="hero-title">Aequus</h1>
          <p className="tagline">
            Entenda sua rotina glicêmica no seu ritmo.
          </p>
          <p className="hero-subtitle">
            Tecnologia inteligente para acompanhar sua saúde glicêmica com facilidade
          </p>
          <button
            type="button"
            className="cta cta-primary"
            
            
            onClick={() => {
  const el = document.getElementById("registro");

  if (!el) return;

  const yOffset = -80; // ajuste esse valor
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}}


          >
            Faça seu registro →
          </button>
          <p className="cta-secondary">Versão demonstrativa</p>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* APP SHOWCASE (single-image carousel) */}
      <section className="showcase-carousel" aria-label="Vitrine Aequus">
        <div className="carousel-inner" role="region" aria-roledescription="carousel">
          {images.map((img, idx) => (
            <figure
              key={idx}
              className={`carousel-item ${idx === current ? "active" : idx === prev ? "leaving" : ""}`}
              aria-hidden={idx === current ? "false" : "true"}
            >
              <img src={img.src} alt={img.alt} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="showcase">
        <div className="section-header">
          <h2 className="fade-in-text">Como o Aequus funciona</h2>
          <p className="fade-in-text">Três pilares para uma saúde glicêmica melhor</p>
        </div>

        <div className="grid grid-3">
          <div className="card card-feature card-slide-in-left">
            <div className="card-icon icon-bounce">💉</div>
            <h3>Registro de insulina</h3>
            <p>Registre suas aplicações de insulina em segundos e organize seu histórico completo.</p>
          </div>
          <div className="card card-feature card-slide-in-center">
            <div className="card-icon icon-bounce">🧠</div>
            <h3>IA Lumo</h3>
            <p>Inteligência artificial que aprende com seus dados e oferece insights personalizados.</p>
          </div>
          <div className="card card-feature card-slide-in-right">
            <div className="card-icon icon-bounce">💍</div>
            <h3>Dispositivo Físico</h3>
            <p>Smart Ring que fornece dados climáticos, de rotina e fisiológicos do usuário.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-content about-fade-in">
          <h2 className="text-reveal">O que é o Aequus?</h2>
          <p className="text-fade-in">
            O Aequus é uma plataforma inovadora que integra um aplicativo móvel intuitivo, 
            inteligência artificial avançada e tecnologia de dispositivo físico para revolucionar 
            o acompanhamento da saúde glicêmica.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
        <section id="registro" className="cta-section cta-fade-in">
        <h2 className="text-reveal-white">Coloque o seu e-mail para contato</h2>
        <form className="registro-form" onSubmit={(e) => { e.preventDefault(); const mail = e.target.email?.value; if(mail) { alert(`Obrigado! Recebemos: ${mail}`); e.target.reset(); } }}>
          <input name="email" type="email" placeholder="seu@exemplo.com" aria-label="Email" required />
          <button type="submit" className="cta cta-large button-pulse">Enviar</button>
        </form>
      </section>
    </div>
  );

}
