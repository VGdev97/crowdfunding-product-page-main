import Balance from "./components/Balance";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {
  return (
    <main className="relative">
      <Header />
      <div className="max-w-[350px]  md:max-w-[700px] mx-auto bg-[#fafafa] relative ">
        <Hero />
      </div>
      <div className="max-w-[350px] md:max-w-[700px]  mx-auto bg-[#fafafa]">
        <Balance />
      </div>
      <div className="max-w-[350px] md:max-w-[700px] mx-auto bg-[#fafafa]">
        <Project />
      </div>
    </main>
  );
}

export default App;
