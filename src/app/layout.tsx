import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '300', subsets: ['latin'] })

export const metadata = {
  title: 'Titles IA',
  description: 'titles generator by OpenIA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
