"use client"; // This allows the button to be interactive

import "./globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans">
        <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-slate-900">AWS GTM Strategy</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light">
            Insights on Marketplace, Co-sell, and GTM strategy for Startups & ISVs.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* TOGGLE BUTTON */}
            <button 
              onClick={() => setShowForm(!showForm)}
              className="libutton shadow-lg cursor-pointer flex items-center justify-center border-none"
              style={{ minWidth: '220px', height: '40px' }}
            >
              {showForm ? "Close Form" : "Subscribe to Newsletter"}
            </button>

            <a href="https://www.linkedin.com/in/harryblakemore/" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 text-slate-600 px-8 py-2 rounded-full font-semibold hover:bg-slate-50 transition h-[40px] flex items-center justify-center w-[200px] text-sm">
              Connect with Harry
            </a>
          </div>

          {/* THE REVEALED FORM */}
          {showForm && (
            <div className="mt-8 max-w-md mx-auto animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-2">
                <iframe 
                    src="https://embeds.beehiiv.com/d69decc8-4dc9-490a-aaf5-7c1cb3c98a14?v=final_reveal" 
                    frameBorder="0" 
                    scrolling="no" 
                    style={{ 
                    margin: 0, 
                    borderRadius: '20px', 
                    backgroundColor: 'white', 
                    width: '100%', 
                    height: '180px', 
                    display: 'block' 
                    }}
                ></iframe>
                </div>
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <a href="https://aws.coss.atlasgtm.live/" target="_blank" rel="noopener noreferrer" className="bg-orange-50 text-orange-600 border border-orange-200 px-10 py-2 rounded-full font-bold hover:bg-orange-100 transition text-sm shadow-sm flex items-center gap-2">
              Check your Co-sell Readiness
            </a>
          </div>

          <p className="mt-10 text-slate-400 font-medium text-xs uppercase tracking-[0.3em]">By Harry Blakemore</p>
        </header>

        <main>{children}</main>

        <footer className="max-w-6xl mx-auto px-6 py-12 text-center border-t border-slate-100">
          <p className="text-slate-400 text-sm">
            &copy; 2026 AWS GTM Strategy. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
