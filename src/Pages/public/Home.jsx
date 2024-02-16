import React from "react";
import Hero from "../../components/ui/Hero";
import WithBreadcrumbs from "../../components/ui/WithBreadcrumbs";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

export default WithBreadcrumbs(Home);
