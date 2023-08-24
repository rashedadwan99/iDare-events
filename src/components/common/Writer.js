import React from "react";
import Typed from "typed.js";
import { language } from "../../locales/language";

export default function Writer({ sentence }) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [sentence],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [language()]);

  return <span ref={el} />;
}
