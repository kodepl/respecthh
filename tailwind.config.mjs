import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: { extend: { fontFamily: { display: ["Anton", "serif"], sans: ["IBM Plex Sans", "sans-serif"] } } },
  plugins: [typography],
};
