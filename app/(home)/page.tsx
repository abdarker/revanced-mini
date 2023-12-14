"use client";
import { Button } from "@nextui-org/react";
import Footer from "./_components/footer";

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <div>
          <Button>Click me</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
