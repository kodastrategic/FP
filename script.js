(function () {

  const FLOWS = {
    aposentadoria: {
      title: 'Quero me Aposentar',
      questions: [
        'Qual seu nome completo?',
        'Qual sua idade?',
        'Qual sua ocupação principal? (rural / urbana)',
        'Já contribuiu para o INSS alguma vez?'
      ]
    },
    bpc: {
      title: 'Quero solicitar o BPC',
      questions: [
        'Qual seu nome completo?',
        'Qual sua idade?',
        'A pessoa tem alguma deficiência física ou mental?',
        'Qual a renda familiar mensal?'
      ]
    },
    'salario-maternidade': {
      title: 'Salário-Maternidade',
      questions: [
        'Qual seu nome completo?',
        'Qual sua idade?',
        'Você ainda está gestante?',
        'Já trabalhou de carteira assinada?'
      ]
    },
    criminal: {
      title: 'Preciso de um Criminalista',
      questions: [
        'Qual seu nome completo?',
        'Qual sua idade?',
        'Qual sua ocupação?',
        'Resuma brevemente sua situação:'
      ]
    },
    civil: {
      title: 'Questões Civis',
      questions: [
        'Qual seu nome completo?',
        'Qual sua idade?',
        'Qual sua ocupação?',
        'Resuma brevemente sua situação:'
      ]
    },
    orientacao: {
      title: 'Orientação Geral',
      questions: [
        'Qual seu nome completo?',
        'Qual sua idade?',
        'Qual sua ocupação?',
        'Qual sua principal dúvida?'
      ]
    }
  };

  const PHONE = '5591987570111';
  const WELCOME_MSG = 'Olá, seja bem-vindo(a)! Responda algumas perguntas rápidas para facilitar o nosso atendimento.';

  // DOM refs
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-links a');
  const cards = document.querySelectorAll('.card-atalho');
  const overlay = document.getElementById('modalOverlay');
  const container = document.getElementById('modalContainer');
  const closeBtn = document.getElementById('modalClose');
  const stepWelcome = document.getElementById('stepWelcome');
  const stepQuestion = document.getElementById('stepQuestion');
  const stepFinish = document.getElementById('stepFinish');
  const btnStart = document.getElementById('btnStart');
  const btnNext = document.getElementById('btnNext');
  const btnPrev = document.getElementById('btnPrev');
  const btnSend = document.getElementById('btnSendWhatsApp');
  const questionLabel = document.getElementById('questionLabel');
  const questionText = document.getElementById('questionText');
  const questionInput = document.getElementById('questionInput');
  const progressFill = document.getElementById('progressFill');
  const formContato = document.getElementById('formContato');

  let currentFlow = null;
  let currentStep = 0;
  let answers = [];

  // ============ NAVBAR SCROLL ============
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ============ HAMBURGER ============
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ============ MODAL ============
  function openModal() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    resetModal();
  }

  function resetModal() {
    currentStep = 0;
    answers = [];
    currentFlow = null;
    showStep('welcome');
    questionInput.value = '';
  }

  function showStep(step) {
    stepWelcome.classList.toggle('active', step === 'welcome');
    stepQuestion.classList.toggle('active', step === 'question');
    stepFinish.classList.toggle('active', step === 'finish');
  }

  function startFlow(flowKey) {
    currentFlow = FLOWS[flowKey];
    if (!currentFlow) return;
    answers = [];
    currentStep = 0;
    showStep('question');
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentFlow.questions[currentStep];
    questionLabel.textContent = 'Pergunta ' + (currentStep + 1) + ' de ' + currentFlow.questions.length;
    questionText.textContent = q;
    questionInput.value = answers[currentStep] || '';
    questionInput.focus();

    // progress
    var pct = ((currentStep) / currentFlow.questions.length) * 100;
    progressFill.style.width = pct + '%';

    // buttons
    btnPrev.style.visibility = currentStep === 0 ? 'hidden' : 'visible';
    var isLast = currentStep === currentFlow.questions.length - 1;
    btnNext.textContent = isLast ? 'Finalizar' : 'Próximo';
  }

  function nextQuestion() {
    var val = questionInput.value.trim();
    if (!val) {
      questionInput.style.borderColor = '#E74C3C';
      questionInput.placeholder = 'Por favor, preencha este campo';
      return;
    }
    questionInput.style.borderColor = '';
    questionInput.placeholder = 'Digite sua resposta...';

    answers[currentStep] = val;

    if (currentStep === currentFlow.questions.length - 1) {
      // finish
      showStep('finish');
      progressFill.style.width = '100%';
    } else {
      currentStep++;
      renderQuestion();
    }
  }

  function prevQuestion() {
    if (currentStep > 0) {
      answers[currentStep] = questionInput.value.trim();
      currentStep--;
      renderQuestion();
    }
  }

  function sendToWhatsApp() {
    var msg = 'Olá, gostaria de mais informações!\n\n';
    msg += 'Assunto: ' + currentFlow.title + '\n\n';
    var qs = currentFlow.questions;
    for (var i = 0; i < qs.length; i++) {
      msg += qs[i] + '\n' + (answers[i] || '(não informado)') + '\n\n';
    }
    msg += 'Aguardo retorno. Obrigado!';

    var url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
    window.open(url, '_blank');
  }

  // Question input: Enter to advance
  questionInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (btnNext.textContent === 'Enviar' || btnNext.textContent === 'Finalizar') {
        // check if we're on last step
        var isLast = currentStep === currentFlow.questions.length - 1;
        if (isLast) {
          nextQuestion();
        } else {
          nextQuestion();
        }
      } else {
        nextQuestion();
      }
    }
  });

  // ============ EVENTOS DOS CARDS ============
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var flow = this.getAttribute('data-flow');
      fbq('trackCustom', 'ClickCard', { flow: flow });
      openModal();
      // small delay for animation, then start
      setTimeout(function () {
        startFlow(flow);
      }, 300);
    });
  });

  // ============ MODAL BUTTONS ============
  btnStart.addEventListener('click', function () {
    // already started via startFlow, but if we're on welcome:
    if (currentFlow) {
      showStep('question');
      renderQuestion();
    }
  });

  btnNext.addEventListener('click', nextQuestion);
  btnPrev.addEventListener('click', prevQuestion);
  btnSend.addEventListener('click', function () {
    fbq('trackCustom', 'ClickWhatsAppModal');
    sendToWhatsApp();
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  document.querySelectorAll('.btn-close-modal').forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  // ============ FORM CONTATO ============
  formContato.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('formNome').value.trim();
    var tel = document.getElementById('formTelefone').value.trim();
    var msg = document.getElementById('formMensagem').value.trim();

    if (!nome || !tel || !msg) {
      alert('Por favor, preencha nome, telefone e mensagem.');
      return;
    }

    var text = 'Olá, meu nome é ' + nome + '. Meu telefone: ' + tel + '. ' + msg;
    fbq('trackCustom', 'ClickWhatsAppForm');
    var url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
  });

  // ============ MAPA (Leaflet) ============
  function loadMap() {
    var mapDiv = document.getElementById('mapa');
    if (!mapDiv) return;

    // Check if Leaflet is available
    if (typeof L !== 'undefined') {
      var map = L.map('mapa').setView([-2.1330085, -47.5601637], 18);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      L.marker([-2.1330085, -47.5601637]).addTo(map)
        .bindPopup('Franco Pantoja Advocacia<br>Rua Sao Francisco, Centro<br>Aurora do Para - PA<br><a href="https://www.google.com/maps/place/Franco+Pantoja+Advocacia/@-2.1330222,-47.5603643,19.95z/data=!4m6!3m5!1s0x92ba9b0068a04f0b:0xa913a1cbeddb3527!8m2!3d-2.1330085!4d-47.5601637!16s%2Fg%2F11lzp25n38" target="_blank" style="color:#CEAE7C;font-weight:600;">Abrir no Google Maps</a>')
        .openPopup();
    } else {
      mapDiv.innerHTML = '<p style="color:var(--text-light);">Mapa carregado via OpenStreetMap</p>';
      // Try loading Leaflet dynamically
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      var script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = function () {
        loadMap();
      };
      document.body.appendChild(script);
    }
  }

  // Try loading map on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMap);
  } else {
    loadMap();
  }

  // ============ KEYBOARD: ESC TO CLOSE MODAL ============
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

})();
