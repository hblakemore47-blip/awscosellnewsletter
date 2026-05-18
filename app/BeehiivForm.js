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
    };
    ref.current.appendChild(script);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div ref={ref} data-beehiiv-form="d69decc8-4dc9-490a-aaf5-7c1cb3c98a14" style={{ width: '100%', maxWidth: '480px' }}></div>
    </div>
  );
}
