const DefaultLayout = ({ children }: any) => {
  return (
    <main className="h-screen min-h-screen  overflow-y-auto lg:overflow-hidden mx-auto">
      {children}
    </main>
  );
};

export default DefaultLayout;
