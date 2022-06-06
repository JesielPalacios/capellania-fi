import "./StarElements.js";
import useUser from "../../core/hooks/useUser";
import { Main } from "../Dashboard/Components/Main";
import { Widget } from "../Dashboard/Components/Widget/index";
import { Featured } from "../Dashboard/Components/featured/index";
import { List } from "../Dashboard/Components/table/index";
import { Chart } from "../Dashboard/Components/chart/index";
import { Home } from "./StarElements.js";

export const Dashboard = () => {
  const { sidebar } = useUser();

  return (
    <Home>
      <Main title={"Dashboard"} sidebar={sidebar} />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </Home>
  );
};
