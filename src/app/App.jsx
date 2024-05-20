import "./../shared/ui/discription.scss";
import { TopMenu } from "../shared/components/TopMenu";
import { CardList } from "../shared/components/CardList";
import { ScrollArrow } from "../shared/components/ScrollArrow";
import { Footer } from "../shared/components/Footer";

const App = () => {
  return (
    <div>
      <ScrollArrow />
      <nav className="top-container">
        <TopMenu />
      </nav>
      <CardList />
      <Footer />
    </div>
  );
};

export default App;
