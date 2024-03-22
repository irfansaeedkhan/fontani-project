import AboutUs from "../components/about-us";

export default function RootLayout({ children }) {
  return (
    <div>
      <AboutUs textColor={"#9ca3af"} />
      {children}
    </div>
  );
}
