import React from "react";
import Typed from "typed.js";
import { language } from "../../locales/language";

export default function Writer({ sentence }) {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [sentence],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [language()]);

  return <span ref={el} />;
}
