/* =========================================
   Chat Widget - Portfolio Chat Assistant
   Keyword/pattern-matching chatbot for
   Rajiv Srivastava's portfolio.
   ========================================= */

(function () {
  'use strict';

  // -----------------------------------------------
  // Knowledge Base
  // -----------------------------------------------
  const KB = {
    name: 'Rajiv Srivastava',
    title: 'Group Engineering Manager',
    company: 'Microsoft India',
    email: 'rajiv.srivastava01@gmail.com',
    linkedin: 'https://linkedin.com/in/rajiv-srivastava/',
    github: 'https://github.com/raj1vsr1vastava',
    yearsExperience: '19+',
    patents: 4,
    patentTitles: [
      'Add-In Recommendation System',
      'Dynamic AI-Powered Data Hub Transformation',
      'Scalable Multi-Agent Collaboration with Dynamic Ejection',
      'Hierarchical Non-Linear Orchestration for AI with Adaptive Resource Management',
    ],
    productsDelivered: '6+',
    domains: '5+',

    experience: [
      {
        company: 'Microsoft India',
        role: 'Group Engineering Manager',
        period: 'Mar 2022 - Present',
        highlights: [
          'Excel Mobile Copilot with Agent mode capabilities',
          'Outlook Extensibility Add-ins framework',
          'Digital Native initiatives',
        ],
      },
      {
        company: 'PayPal India',
        role: 'Senior Software Development Manager',
        period: 'Nov 2020 - Feb 2022',
        highlights: [
          'Digital Wallet Activity migration',
          'Server Driven UI Widget',
          'Document Center tax portal',
        ],
      },
      {
        company: 'Walmart Labs',
        role: 'Senior Engineering Manager',
        period: 'Aug 2018 - Oct 2020',
        highlights: [
          'Pharmacy COVID initiatives',
          'Azure migration',
          'Global Supplier Management',
          '20% Opex savings',
        ],
      },
      {
        company: 'Amadeus Labs',
        role: 'Development Manager',
        period: 'Jul 2014 - Jul 2018',
        highlights: [
          '30% tech debt reduction',
          'Lufthansa Middleware',
          'Self Service deployment tool',
        ],
      },
      {
        company: 'GE Healthcare',
        role: 'Systems Specialist',
        period: 'Nov 2011 - Jun 2014',
        highlights: [
          'PET-MRI Scanner visualization',
          'GEOCOMM communication model',
        ],
      },
      {
        company: 'Juniper Networks / Infosys',
        role: 'Software Engineer',
        period: 'Oct 2006 - Oct 2011',
        highlights: ['JWEB bug reduction 30%', 'Nordstrom POS suite'],
      },
    ],

    skills: {
      technical: [
        'Python', 'Copilot AI', 'MCP', 'Multi-Agent Frameworks', 'Azure',
        'Git', 'Docker', 'Kubernetes', 'SQL Server', 'JavaScript', 'React',
        'Android', 'iOS', 'React Native', 'Claude Code',
      ],
      domain: [
        'Agile/Scrum', 'Team Leadership', 'Strategic Planning', 'GenAI',
        'Retail POS', 'Healthcare', 'Supply Chain', 'Payment Processing',
      ],
    },

    projects: [
      { name: 'Excel Mobile Copilot', desc: 'Redefining Excel Mobile with Agent mode capabilities and GenAI' },
      { name: 'Outlook Extensibility', desc: 'Modernizing Outlook Extensibility Add-ins framework across devices' },
      { name: 'PayPal Activity Widget', desc: 'Transaction records and account status review' },
      { name: 'Walmart Immunization App', desc: 'COVID-19 vaccine scheduling and oversight' },
      { name: 'Lufthansa Middleware', desc: 'Scaled middleware integration for multiple airlines' },
      { name: 'PET-MRI Scanner Visualization', desc: '2D visualization with live table controls' },
    ],

    bio: 'Engineering Leader with 19+ years of experience in Web, Mobile, and Platform API development across Payments, Retail, Pharmacy, Travel, and Healthcare domains.',
  };

  // -----------------------------------------------
  // Suggested quick-reply questions
  // -----------------------------------------------
  const QUICK_REPLIES = [
    'Who is Rajiv?',
    'What are his skills?',
    'Current role',
    'Patents',
    'View projects',
    'Contact info',
  ];

  // -----------------------------------------------
  // Intent definitions (keyword -> handler)
  // -----------------------------------------------
  // Priority tiers: 0 = generic catch-all, 1 = broad topic, 2 = specific entity/company
  // When multiple intents match a query, the highest priority wins.
  const INTENTS = [
    {
      id: 'greeting',
      priority: 0,
      keywords: ['hi', 'hello', 'hey', 'greetings', 'howdy', 'sup', 'hola', 'good morning', 'good evening', 'good afternoon'],
      handler: () => {
        return `Hey there! I'm Rajiv's portfolio assistant. Ask me anything about his experience, skills, projects, or how to get in touch. What would you like to know?`;
      },
    },
    {
      id: 'help',
      priority: 0,
      keywords: ['help', 'what can'],
      handler: () => {
        return `Here's what I can help you with:
<ul>
<li>Who Rajiv is and his background</li>
<li>Work experience and career journey</li>
<li>Technical and domain skills</li>
<li>Key projects and products</li>
<li>Patents and achievements</li>
<li>Contact information</li>
<li>AI / GenAI related work</li>
</ul>
Just type your question or pick one of the suggestions below!`;
      },
    },
    {
      id: 'bio',
      priority: 0,
      keywords: ['who', 'about', 'introduce', 'name', 'tell me about', 'biography', 'overview'],
      handler: () => {
        return `<strong>${KB.name}</strong> is a ${KB.title} at ${KB.company}.<br><br>${KB.bio}<br><br>With <strong>${KB.yearsExperience} years</strong> of experience, <strong>${KB.patents} patents</strong>, and <strong>${KB.productsDelivered} products</strong> delivered across <strong>${KB.domains} domains</strong>, Rajiv brings deep leadership and technical expertise to everything he builds.`;
      },
    },
    {
      id: 'experience',
      priority: 1,
      keywords: ['experience', 'work', 'career', 'job', 'company', 'companies', 'worked', 'history', 'journey', 'resume'],
      handler: () => {
        let list = KB.experience
          .map((e) => `<li><strong>${e.role}</strong> at ${e.company}<br><em>${e.period}</em></li>`)
          .join('');
        return `Rajiv's career spans ${KB.yearsExperience} years across top-tier companies:<ul>${list}</ul>Want details about a specific company? Just ask!`;
      },
    },
    {
      id: 'skills',
      priority: 1,
      keywords: ['skill', 'tech', 'technology', 'stack', 'know', 'tools', 'proficient', 'expertise'],
      handler: () => {
        let tech = KB.skills.technical.join(', ');
        let domain = KB.skills.domain.join(', ');
        return `<strong>Technical Skills:</strong><br>${tech}<br><br><strong>Domain Expertise:</strong><br>${domain}`;
      },
    },
    {
      id: 'projects',
      priority: 1,
      keywords: ['project', 'built', 'made', 'product', 'portfolio', 'delivered', 'shipped'],
      handler: () => {
        let list = KB.projects
          .map((p) => `<li><strong>${p.name}</strong> &mdash; ${p.desc}</li>`)
          .join('');
        return `Here are some key projects Rajiv has led:<ul>${list}</ul>`;
      },
    },
    {
      id: 'contact',
      priority: 1,
      keywords: ['contact', 'email', 'reach', 'connect', 'linkedin', 'github', 'hire', 'talk'],
      handler: () => {
        return `You can reach Rajiv through:
<ul>
<li>Email: <a href="mailto:${KB.email}" target="_blank">${KB.email}</a></li>
<li>LinkedIn: <a href="${KB.linkedin}" target="_blank" rel="noopener">linkedin.com/in/rajiv-srivastava</a></li>
<li>GitHub: <a href="${KB.github}" target="_blank" rel="noopener">github.com/raj1vsr1vastava</a></li>
</ul>`;
      },
    },
    {
      id: 'current',
      priority: 2,
      keywords: ['current', 'now', 'present', 'microsoft', 'today'],
      handler: () => {
        const ms = KB.experience[0];
        let hl = ms.highlights.map((h) => `<li>${h}</li>`).join('');
        return `Rajiv is currently a <strong>${ms.role}</strong> at <strong>${ms.company}</strong> (${ms.period}).<br><br>Key initiatives:<ul>${hl}</ul>`;
      },
    },
    {
      id: 'paypal',
      priority: 2,
      keywords: ['paypal', 'payment'],
      handler: () => {
        const pp = KB.experience[1];
        let hl = pp.highlights.map((h) => `<li>${h}</li>`).join('');
        return `At <strong>${pp.company}</strong>, Rajiv served as <strong>${pp.role}</strong> (${pp.period}).<br><br>Highlights:<ul>${hl}</ul>`;
      },
    },
    {
      id: 'walmart',
      priority: 2,
      keywords: ['walmart', 'pharmacy'],
      handler: () => {
        const wm = KB.experience[2];
        let hl = wm.highlights.map((h) => `<li>${h}</li>`).join('');
        return `At <strong>${wm.company}</strong>, Rajiv was a <strong>${wm.role}</strong> (${wm.period}).<br><br>Highlights:<ul>${hl}</ul>`;
      },
    },
    {
      id: 'amadeus',
      priority: 2,
      keywords: ['amadeus', 'lufthansa', 'travel', 'airline'],
      handler: () => {
        const am = KB.experience[3];
        let hl = am.highlights.map((h) => `<li>${h}</li>`).join('');
        return `At <strong>${am.company}</strong>, Rajiv was a <strong>${am.role}</strong> (${am.period}).<br><br>Highlights:<ul>${hl}</ul>`;
      },
    },
    {
      id: 'ge',
      priority: 2,
      keywords: ['ge', 'healthcare', 'mri', 'scanner', 'medical'],
      handler: () => {
        const ge = KB.experience[4];
        let hl = ge.highlights.map((h) => `<li>${h}</li>`).join('');
        return `At <strong>${ge.company}</strong>, Rajiv was a <strong>${ge.role}</strong> (${ge.period}).<br><br>Highlights:<ul>${hl}</ul>`;
      },
    },
    {
      id: 'juniper',
      priority: 2,
      keywords: ['juniper', 'infosys', 'early career', 'nordstrom'],
      handler: () => {
        const jn = KB.experience[5];
        let hl = jn.highlights.map((h) => `<li>${h}</li>`).join('');
        return `Rajiv began his career at <strong>${jn.company}</strong> as a <strong>${jn.role}</strong> (${jn.period}).<br><br>Highlights:<ul>${hl}</ul>`;
      },
    },
    {
      id: 'patent',
      priority: 2,
      keywords: ['patent', 'invention', 'ip', 'intellectual property'],
      handler: () => {
        let list = KB.patentTitles
          .map((t) => `<li>${t} <em>(Filed)</em></li>`)
          .join('');
        return `Rajiv has <strong>${KB.patents} patents</strong> filed:<ul>${list}</ul>`;
      },
    },
    {
      id: 'education',
      priority: 2,
      keywords: ['education', 'degree', 'university', 'college', 'school', 'study', 'studied', 'qualification'],
      handler: () => {
        return `For details about Rajiv's educational background, please visit his <a href="${KB.linkedin}" target="_blank" rel="noopener">LinkedIn profile</a>.`;
      },
    },
    {
      id: 'download',
      priority: 2,
      keywords: ['download', 'resume', 'cv', 'pdf'],
      handler: () => {
        return `You can view and download Rajiv's full professional profile on <a href="${KB.linkedin}" target="_blank" rel="noopener">LinkedIn</a>.`;
      },
    },
    {
      id: 'ai',
      priority: 2,
      keywords: ['ai', 'genai', 'agent', 'llm', 'copilot', 'machine learning', 'artificial intelligence', 'mcp', 'multi-agent'],
      handler: () => {
        return `Rajiv is actively working with cutting-edge AI technologies at Microsoft:
<ul>
<li><strong>Excel Mobile Copilot</strong> &mdash; Redefining Excel Mobile with Agent mode capabilities</li>
<li><strong>Copilot AI</strong> &mdash; Working with Microsoft's Copilot platform</li>
<li><strong>MCP & Multi-Agent Frameworks</strong> &mdash; Building multi-agent orchestration systems</li>
<li><strong>Claude Code</strong> &mdash; Leveraging Anthropic's coding tools</li>
</ul>
His technical skills include Copilot AI, MCP, Multi-Agent Frameworks, and Claude Code.`;
      },
    },
  ];

  // -----------------------------------------------
  // Simple fuzzy matching utilities
  // -----------------------------------------------

  /** Compute bigram set for a string */
  function bigrams(str) {
    const s = str.toLowerCase();
    const set = new Set();
    for (let i = 0; i < s.length - 1; i++) {
      set.add(s.substring(i, i + 2));
    }
    return set;
  }

  /** Dice coefficient between two strings (0-1) */
  function similarity(a, b) {
    if (a === b) return 1;
    if (a.length < 2 || b.length < 2) return 0;
    const biA = bigrams(a);
    const biB = bigrams(b);
    let intersection = 0;
    biA.forEach((bg) => {
      if (biB.has(bg)) intersection++;
    });
    return (2 * intersection) / (biA.size + biB.size);
  }

  // -----------------------------------------------
  // Query Processing Engine
  // -----------------------------------------------

  /** Check if keyword exists as a whole word/phrase in the query */
  function matchesWholeWord(query, keyword) {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b${escaped}\\b`).test(query);
  }

  function processQuery(raw) {
    const query = raw.toLowerCase().trim();

    // 1. Exact keyword matching (whole-word boundaries)
    //    Collect ALL matches, then pick the highest-priority intent.
    //    This prevents generic intents (bio: "about") from shadowing
    //    specific ones (paypal: "paypal") in queries like "tell me about paypal".
    const matches = [];
    for (const intent of INTENTS) {
      for (const kw of intent.keywords) {
        if (matchesWholeWord(query, kw)) {
          matches.push(intent);
          break; // one keyword match is enough per intent
        }
      }
    }

    if (matches.length > 0) {
      // Sort by priority descending — most specific intent wins
      matches.sort((a, b) => (b.priority || 0) - (a.priority || 0));
      return matches[0].handler();
    }

    // 2. Fuzzy matching -- compare each word against all keywords
    const words = query.split(/\s+/);
    let bestScore = 0;
    let bestIntent = null;

    for (const intent of INTENTS) {
      for (const kw of intent.keywords) {
        for (const word of words) {
          const score = similarity(word, kw);
          if (score > bestScore) {
            bestScore = score;
            bestIntent = intent;
          }
        }
        // also check multi-word keyword similarity against full query
        if (kw.includes(' ')) {
          const score = similarity(query, kw);
          if (score > bestScore) {
            bestScore = score;
            bestIntent = intent;
          }
        }
      }
    }

    if (bestScore >= 0.55 && bestIntent) {
      return bestIntent.handler();
    }

    // 3. Fallback
    return `I'm not sure about that, but you can ask me about Rajiv's experience, skills, projects, or contact info! Try one of the suggestions below.`;
  }

  // -----------------------------------------------
  // ChatWidget Class
  // -----------------------------------------------
  class ChatWidget {
    constructor() {
      this.isOpen = false;
      this.buildDOM();
      this.bindEvents();
      this.showWelcome();
    }

    // --- DOM Construction ---
    buildDOM() {
      // Container
      this.container = document.createElement('div');
      this.container.className = 'chat-widget-container';

      // Bubble
      this.bubble = document.createElement('button');
      this.bubble.className = 'chat-widget-bubble';
      this.bubble.setAttribute('aria-label', 'Open chat');
      this.bubble.innerHTML = `
        <span class="chat-widget-bubble-icon chat-widget-bubble-icon--chat">\u{1F4AC}</span>
        <span class="chat-widget-bubble-icon chat-widget-bubble-icon--close">\u2715</span>
      `;

      // Window
      this.window = document.createElement('div');
      this.window.className = 'chat-widget-window';
      this.window.setAttribute('role', 'dialog');
      this.window.setAttribute('aria-label', 'Chat with portfolio assistant');

      // Header
      const header = document.createElement('div');
      header.className = 'chat-widget-header';
      header.innerHTML = `
        <div>
          <div class="chat-widget-header-title">Ask about Rajiv</div>
          <div class="chat-widget-header-subtitle">Portfolio Assistant</div>
        </div>
        <button class="chat-widget-header-close" aria-label="Close chat">\u2715</button>
      `;
      this.closeBtn = header.querySelector('.chat-widget-header-close');

      // Messages
      this.messagesEl = document.createElement('div');
      this.messagesEl.className = 'chat-widget-messages';

      // Input area
      const inputArea = document.createElement('div');
      inputArea.className = 'chat-widget-input-area';

      this.input = document.createElement('input');
      this.input.className = 'chat-widget-input';
      this.input.type = 'text';
      this.input.placeholder = 'Ask me anything about Rajiv...';
      this.input.setAttribute('aria-label', 'Type your message');

      this.sendBtn = document.createElement('button');
      this.sendBtn.className = 'chat-widget-send-btn';
      this.sendBtn.setAttribute('aria-label', 'Send message');
      this.sendBtn.innerHTML = '<span class="chat-widget-send-icon"></span>';

      inputArea.appendChild(this.input);
      inputArea.appendChild(this.sendBtn);

      // Assemble window
      this.window.appendChild(header);
      this.window.appendChild(this.messagesEl);
      this.window.appendChild(inputArea);

      // Assemble container
      this.container.appendChild(this.window);
      this.container.appendChild(this.bubble);

      document.body.appendChild(this.container);
    }

    /** Resolve the path to chat.css relative to chat.js */
    _resolvePath(filename) {
      const scripts = document.querySelectorAll('script[src]');
      for (const s of scripts) {
        if (s.src.includes('chat.js')) {
          return s.src.replace('chat.js', filename);
        }
      }
      // Fallback: assume same directory as the current page's JS folder
      return 'js/' + filename;
    }

    // --- Event Binding ---
    bindEvents() {
      this.bubble.addEventListener('click', () => this.toggle());
      this.closeBtn.addEventListener('click', () => this.close());

      this.sendBtn.addEventListener('click', () => this.handleSend());
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleSend();
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) this.close();
      });
    }

    // --- Open / Close ---
    toggle() {
      this.isOpen ? this.close() : this.open();
    }

    open() {
      this.isOpen = true;
      this.window.classList.add('open');
      this.bubble.classList.add('open');
      this.bubble.setAttribute('aria-label', 'Close chat');
      setTimeout(() => this.input.focus(), 350);
    }

    close() {
      this.isOpen = false;
      this.window.classList.remove('open');
      this.bubble.classList.remove('open');
      this.bubble.setAttribute('aria-label', 'Open chat');
    }

    // --- Messaging ---
    handleSend() {
      const text = this.input.value.trim();
      if (!text) return;

      this.addMessage(text, 'user');
      this.input.value = '';

      this.showTyping();

      const delay = 500 + Math.random() * 500;
      setTimeout(() => {
        this.hideTyping();
        const response = processQuery(text);
        this.addMessage(response, 'bot');
        this.addQuickReplies();
      }, delay);
    }

    addMessage(content, sender) {
      const msg = document.createElement('div');
      msg.className = `chat-widget-msg chat-widget-msg--${sender}`;
      if (sender === 'bot') {
        msg.innerHTML = content;
      } else {
        msg.textContent = content;
      }
      this.messagesEl.appendChild(msg);
      this.scrollToBottom();
    }

    showWelcome() {
      const welcome = `Hi! I'm here to help you learn about <strong>Rajiv Srivastava</strong>. Pick a topic below or type your own question!`;
      this.addMessage(welcome, 'bot');
      this.addQuickReplies();
    }

    addQuickReplies() {
      // Remove existing quick-reply buttons
      const existing = this.messagesEl.querySelector('.chat-widget-quick-replies:last-child');
      // We don't remove old ones -- they become part of the history

      const wrapper = document.createElement('div');
      wrapper.className = 'chat-widget-quick-replies';

      QUICK_REPLIES.forEach((text) => {
        const btn = document.createElement('button');
        btn.className = 'chat-widget-quick-btn';
        btn.textContent = text;
        btn.addEventListener('click', () => {
          // Remove this set of quick replies
          wrapper.remove();
          this.input.value = text;
          this.handleSend();
        });
        wrapper.appendChild(btn);
      });

      this.messagesEl.appendChild(wrapper);
      this.scrollToBottom();
    }

    showTyping() {
      this.typingEl = document.createElement('div');
      this.typingEl.className = 'chat-widget-typing';
      this.typingEl.innerHTML = `
        <span class="chat-widget-typing-dot"></span>
        <span class="chat-widget-typing-dot"></span>
        <span class="chat-widget-typing-dot"></span>
      `;
      this.messagesEl.appendChild(this.typingEl);
      this.scrollToBottom();
    }

    hideTyping() {
      if (this.typingEl && this.typingEl.parentNode) {
        this.typingEl.remove();
      }
    }

    scrollToBottom() {
      requestAnimationFrame(() => {
        this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
      });
    }
  }

  // -----------------------------------------------
  // Auto-initialize on DOMContentLoaded
  // -----------------------------------------------
  function initChat() {
    const widget = new ChatWidget();

    // Allow nav chat button to open the widget
    const navChatBtn = document.getElementById('nav-chat-btn');
    if (navChatBtn) {
      navChatBtn.addEventListener('click', () => {
        widget.open();
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        navMenu?.classList.remove('open');
        navToggle?.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChat);
  } else {
    initChat();
  }
})();
