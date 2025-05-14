import "./globals.css"
import { Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const roboto = Roboto({ subsets: ["latin"] })

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="max-w-5xl mx-auto p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
