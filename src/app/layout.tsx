import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


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
      <body className="font-roboto">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="max-w-5xl mx-auto p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
