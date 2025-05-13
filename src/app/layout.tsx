import "./globals.css";
import { Astloch, Montserrat, Roboto } from 'next/font/google';

const geist = Astloch({
   weight: ['400'],
   subsets: ['latin']
});

const montserrat = Montserrat({
   subsets: ['latin']
});

const roboto = Roboto({
   subsets: ['latin']
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={
         `${montserrat.className} ${roboto.className} ${geist.className}`
      }>
         <body>
            {children}
         </body>
      </html>
   );
}
