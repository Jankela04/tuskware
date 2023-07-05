import React from "react";

function TailwindScreenIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-0 left-0 bg-black px-4 py-2 font-bold text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}

export default TailwindScreenIndicator;
