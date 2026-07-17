"use client";

import { useEffect, useRef } from "react";

const INIT = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1725042",hash:"7d50db6eef500612d3f2c7e6bb64b14a",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

export function AmoCrmForm() {
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (done.current || !ref.current) return;
    done.current = true;

    const init = document.createElement("script");
    init.text = INIT;
    ref.current.appendChild(init);

    const widget = document.createElement("script");
    widget.id = "amoforms_script_1725042";
    widget.async = true;
    widget.charset = "utf-8";
    widget.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1784278204";
    ref.current.appendChild(widget);
  }, []);

  return <div ref={ref} className="w-full" />;
}
