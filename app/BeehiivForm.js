"use client";
import { useEffect } from "react";

export default function BeehiivForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", "d69decc8-4dc9-490a-aaf5-7c1cb3c98a14");
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center mb-4">
      <div data-beehiiv-form="d69decc8-4dc9-490a-aaf5-7c1cb3c98a14"></div>
    </div>
  );
}
