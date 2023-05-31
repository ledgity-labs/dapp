/**
 * @packageDocumentation
 * Learn more about this configuration file in docs/ui.md
 */
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
import { parseColor } from "tailwindcss/lib/util/color";
const toRGB = val => parseColor(val).color.join(" ");

// Define some CSS variables
const vars = {
  ":root": {
    // Default background (bg) and text-color (fg) applied to <body/>
    "--bg": toRGB(colors.indigo[50]),
    "--fg": toRGB(colors.slate[800]),

    // Accentuated versions of default background and foreground
    // Used for:
    // - <Button variant="outline"/> component hover state
    // - <Card/> component hover glow effect
    "--accent-bg": toRGB(colors.slate[300]),
    "--accent-fg": toRGB(colors.slate[900]),

    // Primary colors 
    // Used for:
    // - <Button variant = "default"/> component
    "--primary-bg": toRGB(colors.indigo[500]),
    "--primary-fg": toRGB(colors.slate[100]),

    // Secondary colors
    // Used for:
    // - <Button variant="secondary"/> component
    "--secondary-bg": toRGB(colors.sky[500]),
    "--secondary-fg": toRGB(colors.slate[800]),

    // Destructive colors (intended to notice a destructive or critical action to the user)
    // Used for:
    // - <Button variant="secondary/> component
    "--destructive-bg": toRGB(colors.red[500]),
    "--destructive-fg": toRGB(colors.slate[200]),

    // Default border color
    "--border": toRGB(colors.slate[800]),

    // Border colors for inputs components (input, select, textarea, ...)
    "--input": toRGB(colors.slate[300]),

    // Focus ring color
    "--ring": toRGB(colors.indigo[300]),

    // Border radius
    "--radius": "0.8rem"
  },
  ".dark": {}
};

/*


        radial-gradient(300px circle at 120% 120%, rgb(var(--primary-bg) / 0.8), transparent),
        radial-gradient(300px circle at -20% -20%, rgb(var(--primary-bg) / 0.8), transparent)

         radial-gradient(600px circle at 50% 80%, white, rgb(var(--primary-bg) / 0.3))
*/
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const darkMode = ["class"];
export const theme = {
  fontFamily: {
    heading: ["var(--font-poppins)"],
    body: ["var(--font-inter)"]
  },
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      hero: "repeating-conic-gradient(black 0%, gray 0.7%), repeating-conic-gradient(gray 0.0000001%, grey 0.000104%)",

      "card-border": `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgb(var(--primary-bg) / 0.8), transparent)`,
      "card-border-default": `
        radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgb(var(--primary-bg) / 0.8), transparent), radial-gradient(300px circle at 50% 100%, rgb(var(--primary-bg) / 0.5), transparent)
        `,

      "card-illustrations": `
        radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgb(var(--primary-bg)), transparent), radial-gradient(300px circle at 50% 60%, rgb(var(--primary-bg) / 0.5), transparent)
        `,

      "card-content": `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgb(var(--primary-bg) / 0.15)`,
      "card-content-default": `
        radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgb(var(--primary-bg) / 0.15), radial-gradient(500px circle at 50% 100%, rgb(var(--primary-bg) / 0.15)`,
    },
    colors: {
      bg: "rgb(var(--bg) / <alpha-value>)",
      fg: "rgb(var(--fg) / <alpha-value>)",
      primary: {
        DEFAULT: "rgb(var(--primary-bg) / <alpha-value>)",
        fg: "rgb(var(--primary-fg) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "rgb(var(--secondary-bg) / <alpha-value>)",
        fg: "rgb(var(--secondary-fg) / <alpha-value>)",
      },
      destructive: {
        DEFAULT: "rgb(var(--destructive-bg) / <alpha-value>)",
        fg: "rgb(var(--destructive-fg) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "rgb(var(--accent-bg) / <alpha-value>)",
        fg: "rgb(var(--accent-fg) / <alpha-value>)",
      },
      border: "rgb(var(--border) / <alpha-value>)",
      input: "rgb(var(--input) / <alpha-value>)",
      ring: "rgb(var(--ring) / <alpha-value>)",
    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: "calc(var(--radius) - 4px)",
    },
  },
  keyframes: {
    // Used by <Scroller/> UI component
    roll: {
      "0%": { opacity: 0 },
      "20%": { marginTop: "0", opacity: 1 },
      "80%": { marginTop: "16px", opacity: 1 },
      "100%": { opacity: 0 }
    }
  },
  animation: {
    // Used by <Scroller/> UI component
    roll: "2s infinite normal roll ease"
  }
};
export const plugins = [
  plugin(({ addBase }) => addBase(vars)),
];
