"use client";

import InfoCard from "@/components/card";
import Footer from "./_components/footer";

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F] ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 flex-1 px-6 pb-10 ">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
