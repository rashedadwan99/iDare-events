import React from "react";
import { Helmet } from "react-helmet";

function ReactHelmet() {
  return (
    <Helmet>
      <title>iDare</title>
      <meta
        name="description"
        content="idare for showing upcoming events events"
      />
      <meta name="keywords" content="idare event, أنا أتجرأ, idare , events" />
    </Helmet>
  );
}

export default ReactHelmet;
