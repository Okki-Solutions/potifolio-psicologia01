document.addEventListener('DOMContentLoaded', function() {

  // ===== MENU MOBILE =====
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== ACORDEÃO (ACCORDION) =====
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const isOpen = item.classList.contains('open');

      // Fecha todos
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      // Abre o clicado se estava fechado
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===== REDIRECIONAMENTO WHATSAPP =====
  const form = document.getElementById('form-whatsapp');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Número do WhatsApp (substitua pelo número real)
      const numero = '5511999999999'; // formato internacional sem +
      const texto = `Olá! Meu nome é ${nome} (${email}). Gostaria de agendar uma sessão. Mensagem: ${mensagem}`;
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

      window.open(url, '_blank');
    });
  }

  // ===== SMOOTH SCROLL PARA LINKS INTERNOS (já coberto pelo CSS scroll-behavior) =====
  // Adicional: prevenção de comportamento padrão para âncoras com # (caso precise)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});