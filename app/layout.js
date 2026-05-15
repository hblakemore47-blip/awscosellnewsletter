import "./globals.css";
import Script from "next/script"; // This is the "Next.js safe" way to load scripts

export const metadata = {
  title: "AWS GTM Strategy | Harry Blakemore",
  description: "Insights on Marketplace, Co-sell, and GTM strategy for Startups & ISVs.",
  metadataBase: new URL('https://www.awscosellnewsletter.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans">
        {/* This loads the Beehiiv engine behind the scenes */}
        <Script 
            src="https://subscribe-forms.beehiiv.com/v3/loader.js" 
            strategy="afterInteractive"
        />

        <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-slate-900">AWS GTM Strategy</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light">
                Insights on Marketplace, Co-sell, and GTM strategy for Startups & ISVs.
            </p>
            
            {/* Main Action Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <a className="libutton shadow-lg" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7415160724940902400" target="_blank">
                    Subscribe on LinkedIn
                </a>
                <a href="https://www.linkedin.com/in/harryblakemore/" target="_blank" className="bg-white border border-slate-200 text-slate-600 px-8 py-2 rounded-full font-semibold hover:bg-slate-50 transition h-[40px] flex items-center justify-center w-[200px] text-sm">
                    Connect with Harry
                </a>
            </div>

            {/* AtlasGTM Button */}
            <div className="mt-6 flex justify-center">
                <a href="https://aws.coss.atlasgtm.live/" target="_blank" className="bg-orange-50 text-orange-600 border border-orange-200 px-10 py-2 rounded-full font-bold hover:bg-orange-100 transition text-sm shadow-sm flex items-center gap-2">
                    🚀 Check your Co-sell Readiness
                </a>
            </div>

            {/* Beehiiv Subscription Form Wrapper */}
            <div className="mt-12 max-w-md mx-auto">
                <div 
                    className="beehiiv-embed" 
                    data-beehiiv-form="d69decc8-4dc9-490a-aaf5-7c1cb3c98a14"
                >
                    {/* The Beehiiv script will automatically inject the form here */}
                </div>
                <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest">
                    Direct to your inbox every two weeks
                </p>
            </div>

            <p className="mt-10 text-slate-400 font-medium text-xs uppercase tracking-[0.3em]">By Harry Blakemore</p>
        </header>
        {children}
      </body>
    </html>
  );
}
