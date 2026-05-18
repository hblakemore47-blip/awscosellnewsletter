"use client";
import { useEffect, useRef } from "react";

export default function BeehiivForm() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", "d69decc8-4dc9-490a-aaf5-7c1cb3c98a14");
    script.onload = () => {
      if (window.beehiiv) window.beehiiv.init();
      setTimeout(() => {
        if (!ref.current) return;
        const inner = ref.current.querySelector("iframe, div, form");
        if (inner) {
          inner.style.margin = "0 auto";
          inner.style.display = "block";
        }
      }, 500);
    };
    ref.current.appendChild(script);
  }, []);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div ref={ref} data-beehiiv-form="d69decc8-4dc9-490a-aaf5-7c1cb3c98a14" style={{ display: 'inline-block', margin: '0 auto' }}></div>
    </div>
  );
}
