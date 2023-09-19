import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '0xNunana | Portfolio',
  description: 'Software Developer',
//   openGraph: {
// 		title: "0xnunana.lol",
// 		description:
// 			"Software engineer at upstash.com and founder of planetfall.io",
// 		url: "https://0xnunana.lol",
// 		siteName: "0xnunana.lol",
// 		locale: "en-US",
// 		type: "website",
// 	},
  robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
    // twitter: {
    //   title: "0xNunana",
    //   card: "summary_large_image",
    // },
	},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}
