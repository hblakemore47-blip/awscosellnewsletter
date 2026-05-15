import "./globals.css";

export const metadata = {
  title: "AWS GTM Strategy | Harry Blakemore",
  description: "Insights on Marketplace, Co-sell, and GTM strategy for Startups & ISVs.",
  metadataBase: new URL('https://www.awscosellnewsletter.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans">
        <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-slate-900">AWS GTM Strategy</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light">
                Insights on Marketplace, Co-sell, and GTM strategy for Startups & ISVs.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <a className="libutton shadow-lg" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7415160724940902400" target="_blank">
                    Subscribe on LinkedIn
                </a>
                <a href="https://www.linkedin.com/in/harryblakemore/" target="_blank" className="bg-white border border-slate-200 text-slate-600 px-8 py-2 rounded-full font-semibold hover:bg-slate-50 transition h-[40px] flex items-center justify-center w-[200px] text-sm">
                    Connect with Harry
                </a>
            </div>
            <p className="mt-8 text-slate-400 font-medium text-xs uppercase tracking-[0.3em]">By Harry Blakemore</p>
        </header>
        {children}
      </body>
    </html>
  );
}
