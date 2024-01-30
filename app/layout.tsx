import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apollo IoT | Enerji İzleme, Tasarruf, Enerji Takip Sistemleri',
  description: 'Apollo Enerji IoT enerji izleme, enerji takip sistemi, enerji verimliliği çözümleri ile ev ve işletmelerde enerji tasarrufu yapmak için hemen bilgi alın',
}

export default function RootLayout({
  children, session
}: {
  children: React.ReactNode, session: any
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  )
}
