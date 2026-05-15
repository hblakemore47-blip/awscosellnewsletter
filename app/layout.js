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

          <div className="mt-6 flex justify-center">
            <a href="https://aws.coss.atlasgtm.live/" target="_blank" className="bg-orange-50 text-orange-600 border border-orange-200 px-10 py-2 rounded-full font-bold hover:bg-orange-100 transition text-sm shadow-sm flex items-center gap-2">
              🚀 Check your Co-sell Readiness
            </a>
          </div>

          {/* BEEHIIV IFRAME - CACHE BUSTER VERSION */}
          <div className="mt-12 max-w-md mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl p-6">
            <iframe 
              src="https://embeds.beehiiv.com/d69decc8-4dc9-490a-aaf5-7c1cb3c98a14?slim=1&v=2" 
              data-beehiiv-form="d69decc8-4dc9-490a-aaf5-7c1cb3c98a14" 
              frameBorder="0" 
              scrolling="no" 
              style={{ 
                margin: 0, 
                borderRadius: '0px', 
                backgroundColor: 'transparent', 
                width: '100%', 
                height: '80px', 
                display: 'block'
              }}
            ></iframe>
            <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-[0.2em] font-bold">
              Direct to your inbox every two weeks
            </p>
          </div>

          <p className="mt-10 text-slate-400 font-medium text-xs uppercase tracking-[0.3em]">By Harry Blakemore</p>
        </header>

        {children}

        <footer className="max-w-6xl mx-auto px-6 py-12 text-center border-t border-slate-100">
          <p className="text-slate-400 text-sm">
            &copy; 2026 AWS GTM Strategy. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
