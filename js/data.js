/**
 * Portfolio Data — Single source of truth.
 * Rajiv Srivastava | 2026
 */
var PORTFOLIO = {

  name: 'Rajiv Srivastava',
  role: 'Group Engineering Manager @ Microsoft',
  photo: 'assets/images/Rajiv.jpg',
  email: 'rajiv.srivastava01@gmail.com',
  linkedin: { url: 'https://linkedin.com/in/rajiv-srivastava/', handle: 'rajiv-srivastava' },
  github: { url: 'https://github.com/raj1vsr1vastava', handle: 'raj1vsr1vastava' },
  copyright: 2026,

  hero: {
    headline: 'I build and scale teams that transform ambitious ideas into products trusted by millions.',
    sub: 'Engineering leader with over two decades of experience, I build Products, Platforms & Teams across AI, Healthcare, Payments & Productivity Platforms, focused on scale, impact, and execution',
  },

  beliefs: [
    {
      title: 'Teams over technology.',
      body: 'The best architecture means nothing without the team that can evolve it. I invest in people first, the tech follows.',
    },
    {
      title: 'Ship, Learn, Scale.',
      body: 'Perfection is the enemy of impact. I build cultures where teams ship fast, learn from real users, and scale what works and not what looks good on a slide deck.',
    },
    {
      title: 'Complexity is a leadership failure.',
      body: 'If your engineers need a PhD to understand the system, something went wrong upstream. I obsess over simplicity at every layer - org design, architecture, and product.',
    },
  ],

  impact: [
    { value: '400M+', label: 'Users across products I have led' },
    { value: '5,000+', label: 'Retail locations transformed' },
    { value: '4', label: 'Patents filed in AI & multi-agentic systems' },
    { value: '6', label: 'Products shipped to scale' },
  ],

  themes: [
    {
      title: 'AI & Enterprise Productivity',
      body: 'Shipping agent-mode AI capabilities and extensibility platforms to 400M+ users, fundamentally changing how people interact with data, automate workflows, and extend their tools. This is where AI meets real-world productivity at global scale.',
      scope: 'Artificial Intelligence',
      accent: '#217346',
    },
    {
      title: 'Healthcare & Infrastructure',
      body: 'Built life‑critical systems—from Walmart’s nationwide COVID‑19 vaccination booking platform to GE’s PET‑MRI imaging visualization. When lives are at stake, speed and reliability define the product.',
      scope: 'Healthcare',
      accent: '#FFC220',
    },
    {
      title: 'Payments & Fintech',
      body: 'Reimagined digital wallet transaction history and built a tax document management system serving millions, all delivered with zero downtime during a full platform migration. Payments infrastructure where every millisecond of latency erodes trust.',
      scope: 'Financial Technology',
      accent: '#0070BA',
    },
    {
      title: 'Travel & Integration Middleware',
      body: 'Built airline integration middleware operating across multiple carriers, achieving a 98% reduction in deployment turnaround—hiding the complexity of distributed systems behind a seamless user experience.',
      scope: 'Travel Technology',
      accent: '#8B5CF6',
    },
  ],

  patents: [
    { id: '01', title: 'Add-In Recommendation System' },
    { id: '02', title: 'Dynamic AI-Powered Data Hub Transformation' },
    { id: '03', title: 'Scalable Multi-Agent Collaboration with Dynamic Ejection' },
    { id: '04', title: 'Hierarchical Non-Linear Orchestration for AI with Adaptive Resource Management' },
  ],

  connect: {
    heading: 'Let us talk.',
    text: 'I am always open to conversations about engineering leadership at scale, AI strategy, or building organizations that ship.',
  },

  nav: [
    { href: '#impact', label: 'Impact' },
    { href: '#work', label: 'Work' },
    { href: '#innovation', label: 'Innovation' },
    { href: '#connect', label: 'Connect' },
  ],
};
