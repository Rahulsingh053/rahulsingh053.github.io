import About from "./components/about";
import Header from "./components/header";
import data from "./data.json";

export default function ThemeOne() {
  const { header, about } = data;
  return (
    <div>
      <Header data={header}></Header>
      <About data={about}></About>
    </div>
  );
}
