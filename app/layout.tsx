import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Browser Tab Scheduler — Schedule tabs to open at specific times',
  description: 'Browser extension that schedules tabs to open at predetermined times with notifications. Perfect for developers, analysts, traders, and project managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="347ea4af-5646-4536-a365-81f335c1c7a0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
