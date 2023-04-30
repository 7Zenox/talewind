import '@/styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const darkTheme = createTheme({ type: "dark", theme: "dark" })
const lightTheme = createTheme({ type: "light", theme: "light" })

function MyApp({ Component, pageProps }) {
  const { resolvedTheme } = useNextTheme();
  // if the theme is dark, set the color to white, else set it to black
  const color = "255, 255, 255";
  
  return (
    <>
      <AnimatedCursor
        color={`${color}`}
        innerSize={20}
        outerSize={35}
        innerScale={1}
        outerScale={1.4}
        outerAlpha={0}
        trailingSpeed={7}
        outerStyle={{
          border: `1px solid rgba(${color}, 0.8)`
        }} />

      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  )
}

export default MyApp
