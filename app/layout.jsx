import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Fontani Studio",
  description: "Fontani Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script async src="/public/DrawSVGPlugin.min.js"></script>
      </body>
    </html>
  );
}
