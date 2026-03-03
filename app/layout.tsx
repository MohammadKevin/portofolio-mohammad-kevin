import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Mohammad Kevin | Developer Portfolio",
  description: "Backend & Fullstack Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-[#0a192f] text-zinc-200 antialiased">

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[180px] rounded-full" />
        </div>

        <div className="min-h-screen flex flex-col">

          <Navbar />

          <main className="flex-1 pt-[90px]">
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  )
}