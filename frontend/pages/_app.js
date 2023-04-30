import '@/styles/globals.css'
import { NextUIProvider, createTheme, theme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const darkTheme = createTheme({ type: "dark", theme: "dark" })
const lightTheme = createTheme({ type: "light", theme: "light" })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedCursor
        color={useNextTheme().theme === "dark" ? "0,0,0" : "255,255,255"}
        innerSize={20}
        outerSize={35}
        innerScale={1}
        outerScale={1.4}
        outerAlpha={0}
        trailingSpeed={7}
        outerStyle={{
          border: '1px solid #fff'
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