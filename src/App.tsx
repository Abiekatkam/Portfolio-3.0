import AppRoutes from "./components/routes/Approutes";
import Navbar from "./components/views/navbar";

const App = () => {
  return (
    <div className="pt-3">
      <Navbar />
      <main className="max-w-6xl m-auto min-h-screen">
        <AppRoutes />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
