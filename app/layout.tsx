import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://itclublnbti.com"),
  title: {
    default: "IT Club of LNBTI",
    template: "%s | IT Club of LNBTI",
  },
  description:
    "The digital home of LNBTI's student-led technology community—events, workshops, resources, connections, and verified achievements.",
  keywords: ["LNBTI", "IT Club", "technology", "students", "Sri Lanka", "coding", "cybersecurity"],
  openGraph: {
    title: "IT Club of LNBTI",
    description: "Build skills, share knowledge, and create what comes next.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Learn. Build. Lead. — IT Club of LNBTI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Club of LNBTI",
    description: "Learn. Build. Lead.",
    images: ["/og.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b17",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <script dangerouslySetInnerHTML={{ __html: 
          "try{var l=localStorage.getItem('itclub-language');if(l==='ja')document.documentElement.lang='ja'}catch(e){}" 
        }} />
        {children}
      </body>
    </html>
  )
}
