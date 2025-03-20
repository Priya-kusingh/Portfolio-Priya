/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
       sm:'200px',
       md:'768px',
       lg:'1024px',
       xl:'1280px',
       '2xl':'1536px',
    },
    colors:{
     
      white: "#f1e1d9",
      blue:  "#00005B",
      lightBlue: "#0000CB",
      darkBlue: "#000020",
      black: "#020202",
      pink: "#C2002D",
      lightPink: "#FF033E" ,
      darkPink: "#83001F",
     cyan: "#00FFFF",
      lightCyan: "#5CFFFF",
      darkCyan: "#00A3A3",
      gray: "#626965",
      lightGray: "#978580",
      darkGray: "#3f4441",
    
    },
    extend: {
      boxShadow:{
        cyanShadow: '0px 0px 20px 0px rgba(94, 206, 220, 0.5)',
        cyanMediumShadow: '10px 10px 200px 150px rgba(94, 206, 220, 0.5)',
        pinkMediumShadow: '10px 10px 200px 150px rgba(200, 20, 70, 0.5)',
      },
    },
    fontFamily: {
      body:["Josefin Sans"],
      specail:["Roboto"],
    },
  },
  plugins: [],
}
