import InfoCard from "@/components/card";
import Footer from "./_components/footer";
// https://api.github.com/repos/abdarker/revanced-magisk-module/releases/latest
export default async function Page() {
  const res = await fetch(
    "https://api.github.com/repos/revanced-apks/build-apps/releases/latest"
  );
  const data: any = await res.json();
  console.log("My Log: ", data);
  return (
    <div className="min-h-full flex flex-col  ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 flex-1 px-6 pb-6 ">
          {data?.assets?.reverse().map((item: any, index: number) => (
            <InfoCard key={index} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
