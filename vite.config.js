import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
 
export default defineConfig({
  plugins: [react()],
  // define: {
  //   'process.env.SOME_ENV': `"${process.env.REACT_APP_URL}"`
  // }
})
