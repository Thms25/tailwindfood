import Navbar from "@/components/Navbar";
import "./globals.scss";

export const metadata = {
  title: "tailwind-food",
  description: "lets learn tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-600 bg-secondary-200 font-avenir">
        <div className="nav">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
