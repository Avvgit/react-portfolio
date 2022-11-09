import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteSvgr from 'vite-plugin-svgr'

export default defineConfig({
  // OPCIONAL:
  // si deseamos modificar el directorio donde se hace el
  // build final, agregamos el siguiente objeto **build**
  build: {
    outDir: 'build',
  },
  plugins: [
    reactRefresh(),
    viteSvgr({
      svgrOptions: {
        icon: true
      }
    })
  ]
})