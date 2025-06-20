import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.7875rem", // 12.6px (0.875 * 0.9)
        base: "0.9rem", // 14.4px (1 * 0.9)
        lg: "1.0125rem", // 16.2px (1.125 * 0.9)
        xl: "1.125rem", // 18.0px (1.25 * 0.9)
        "2xl": "1.35rem", // 21.6px (1.5 * 0.9)
        "3xl": "1.6875rem", // 27.0px (1.875 * 0.9)
        "4xl": "2.025rem", // 32.4px (2.25 * 0.9)
        "5xl": "2.7rem", // 43.2px (3 * 0.9)
        "6xl": "3.375rem", // 54.0px (3.75 * 0.9)
        "7xl": "4.05rem", // 64.8px (4.5 * 0.9)
        "8xl": "5.4rem", // 86.4px (6 * 0.9)
        "9xl": "7.2rem", // 115.2px (8 * 0.9)
      },
      fontFamily: {
        sans: ["var(--font-open-sans)" /* ...fallbacks */],
        poppins: ["var(--font-poppins)" /* ...fallbacks */], // Garanta que isso esteja definido
      },
      fontWeight: {
        light: "200",
        normal: "300",
        medium: "400",
        semibold: "500",
        bold: "600",
        extrabold: "800", // Se sua fonte suportar o peso 650
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        digitalx: {
          "50": "#e3f2fd",
          "100": "#bbdefb",
          "200": "#90caf9",
          "300": "#64b5f6",
          "400": "#42a5f5",
          "500": "#1e88e5",
          "600": "#1976d2",
          "700": "#1565c0",
          "800": "#0d47a1",
          "900": "#0a2351",
          transp: "#bcd5e742",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-delay": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "50%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-light": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        flip: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(10)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-delay": "fade-in-delay 1s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out",
        "pulse-light": "pulse-light 2s infinite ease-in-out",
        flip: "flip 0.6s ease-out",
        ripple: "ripple 1s linear",
      },
      boxShadow: {
        hover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
