import Nav from "./_components/navbar";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <Nav />
      <main className="h-full pt-10">{children}</main>
    </div>
  );
};

export default HomePageLayout;
