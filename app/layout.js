import "./globals.css";
import BeehiivForm from "./BeehiivForm";

export const metadata = {
  title: "AWS GTM Strategy | Harry Blakemore",
  description: "Insights on Marketplace, Co-sell, and GTM strategy for Startups & ISVs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans">
        <header className="max-w-6xl mx-auto px-6 pt-10 pb-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-slate-900">
            AWS GTM Strategy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6 font-light">
            Insights on Marketplace, Co-sell, and GTM strategy for Startups & ISVs.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
            <a href="https://www.linkedin.com/newsletters/aws-marketplace-co-sell-7415160724940902400/" target="_blank" rel="noopener noreferrer" className="libutton shadow-lg flex items-center justify-center" style={{ minWidth: '200px', height: '40px' }}>
              Subscribe on LinkedIn
            </a>
            <a href="https://www.linkedin.com/in/harryblakemore/" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 text-slate-600 px-6 py-2 rounded-full font-semibold hover:bg-slate-50 transition h-[40px] flex items-center justify-center text-sm">
              Connect with Harry
            </a>
            <BeehiivForm inline />
            <a href="https://aws.coss.atlasgtm.live/" target="_blank" rel="noopener noreferrer" className="bg-orange-50 text-orange-600 border border-orange-200 px-6 py-2 rounded-full font-bold hover:bg-orange-100 transition text-sm shadow-sm flex items-center gap-2">
              Check your Co-sell Readiness
            </a>
          </div>
          <p className="mt-4 text-slate-400 font-medium text-xs uppercase tracking-[0.3em]">
            By Harry Blakemore
          </p>
        </header>
        <main>{children}</main>
        <footer className="max-w-6xl mx-auto px-6 py-8 text-center border-t border-slate-100">
          <p className="text-slate-400 text-sm">
            &copy; 2026 AWS GTM Strategy. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
