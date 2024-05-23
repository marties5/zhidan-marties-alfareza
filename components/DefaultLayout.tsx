const DefaultLayout = ({ children }: any) => {
  return (
    <main className="h-screen min-h-screen p-4 max-w-7xl overflow-y-auto mx-auto">
      {children}
    </main>
  );
};

export default DefaultLayout;
