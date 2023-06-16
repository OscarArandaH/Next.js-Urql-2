import '../src/styles/globals.css'

import Head from '../src/components/app/head'
import Header from '../src/components/app/header'
import Footer from '../src/components/app/footer'

import { Navigation } from '../src/components/Navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div className='bg-[#00a499] border-black border'>
          <Header />
        </div>

        <div className='bg-[#ea7600] border-black border'>
          <Navigation />
        </div>
        
        {children}

        <div className='bg-[#00a499] border-black border'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
