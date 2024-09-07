import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import { Content } from "@/lib/content";
import Blog from "@/components/blogs";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] min-h-screen`}>
      <Navbar />
      <div className="py-32 bg-slate-100 px-3 md:px-0">
        <div className="font-bold text-4xl text-center">Curiou-Savant Blogs</div>
        <div className="max-w-lg mx-auto text-base text-contentfons text-center">
          I created this blog website to try something new and to test my skills.
        </div>
      </div>
      <div className="mt-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {Content.map((ctn, index) => (
            <Blog ctn={ctn} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
