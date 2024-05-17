import "./../shared/ui/discription.scss";
import { TopMenu } from "../shared/components/TopMenu";
import { CardList } from "../shared/components/CardList";
import { ScrollArrow } from "../shared/components/ScrollArrow";

const App = () => {
  return (
    <div>
      <ScrollArrow/>
      <nav className="top-container">
        <TopMenu />
      </nav>
      <CardList />
    </div>
  );
};

export default App;
