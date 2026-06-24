"use client";

import { useEffect, useRef } from "react";

type AmoCrmFormProps = {
  formId: string;
  hash: string;
  locale?: string;
};

export function AmoCrmForm({ formId, hash, locale = "ru" }: AmoCrmFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initScript = document.createElement("script");
    initScript.text = `
      !function(a,m,o,c,r,m){a[o+c]=a[o+c]||function(p){this.params=(this.params||[]).concat([p])},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"${formId}",hash:"${hash}",locale:"${locale}"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
    `;
    container.appendChild(initScript);

    const widgetScript = document.createElement("script");
    widgetScript.id = `amoforms_script_${formId}`;
    widgetScript.async = true;
    widgetScript.charset = "utf-8";
    widgetScript.src = `https://forms.amocrm.ru/forms/assets/js/amoforms.js?${Date.now()}`;
    container.appendChild(widgetScript);

    return () => {
      container.innerHTML = "";
    };
  }, [formId, hash, locale]);

  return <div ref={containerRef} className="amo-crm-form w-full" />;
}
