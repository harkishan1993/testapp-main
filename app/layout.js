import './globals.css'
import { Inter } from 'next/font/google'
import Topnav from '@/components/Topnav'
import Provider from '@/redux/Providers'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto bg-white`}>
        <Provider>
          <Topnav />
          {children}
        </Provider>
      </body>
    </html>
  )
}
