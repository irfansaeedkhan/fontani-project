import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({ src: "../public/avenir.otf" });

export const metadata = {
  title: "Fontani Studio",
  description: "Fontani Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <main>{children}</main>
        <script async src="/DrawSVGPlugin.min.js"></script>
      </body>
    </html>
  );
}
