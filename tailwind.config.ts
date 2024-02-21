import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      dropShadow: {
        'about': '-8px 8px 1.5px rgba(0, 0, 0, 0.5)',
        'contact': '-4px 8px 1.5px rgba(0, 0, 0, 0.5)',
        'projects': '-0px 8px 1.5px rgba(0, 0, 0, 0.5)',
        'blog': '4px 8px 1.5px rgba(0, 0, 0, 0.5)',
        'experience': '8px 8px 1.5px rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "featured-image": "url('/featuredProject.png')",
        "photo": "url('/photo.png')",
        "photo-2": "url('/photo2.png')",
      },
      letterSpacing: {
        '12': '12%'
      }
    },
  },
  plugins: [],
};
export default config;
