export interface ThemeProps {
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    card: string;
    nav: string;
    alternate: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  accent: {
    primary: string;
    secondary: string;
    hover: string;
  };
  border: {
    color: string;
    subtle: string;
  };
  shadow: {
    light: string;
    medium: string;
    strong: string;
  };
  status: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

export const lightTheme: ThemeProps = {
  bg: {
    primary: '#ffffff',
    secondary: '#fcfcfd',
    tertiary: '#f8f9fb',
    card: '#ffffff',
    nav: 'rgba(255, 255, 255, 0.98)',
    alternate: '#f0f5fa', // Subtle blue-gray that complements the theme
  },
  text: {
    primary: '#1f2937',
    secondary: '#4b5563',
    muted: '#6b7280',
  },
  accent: {
    primary: '#4338ca',
    secondary: '#6366f1',
    hover: '#3730a3',
  },
  border: {
    color: '#e5e7eb',
    subtle: '#f3f4f6',
  },
  shadow: {
    light: 'rgba(16, 24, 40, 0.05)',
    medium: 'rgba(16, 24, 40, 0.08)',
    strong: 'rgba(16, 24, 40, 0.12)',
  },
  status: {
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#0284c7',
  },
};

export const darkTheme: ThemeProps = {
  bg: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155',
    card: '#1e293b',
    nav: 'rgba(15, 23, 42, 0.98)',
    alternate: '#1a2234', // Subtle darker blue that complements the dark theme
  },
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    muted: '#94a3b8',
  },
  accent: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    hover: '#4f46e5',
  },
  border: {
    color: '#475569',
    subtle: '#334155',
  },
  shadow: {
    light: 'rgba(0, 0, 0, 0.3)',
    medium: 'rgba(0, 0, 0, 0.4)',
    strong: 'rgba(0, 0, 0, 0.5)',
  },
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#0ea5e9',
  },
};
