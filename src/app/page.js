import Header from "./components/Header";
import Slider from "./components/Slider";
import Offerings from "./components/Offerings";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Slider />
      <Offerings />
    </div>
  );
}