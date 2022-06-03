import React from "react";
import {
  Counter,
  Left,
  Link,
  Percentage,
  Right,
  Title,
  Widgetconta,
} from "./WidgetElements";
import {
  MdPersonOutline,
  MdOutlineShoppingCart,
  MdOutlineMonetizationOn,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

export const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <MdPersonOutline
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <MdOutlineShoppingCart
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MdOutlineMonetizationOn
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <MdOutlineAccountBalanceWallet
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <Widgetconta>
      <Left>
        <Title>{data.title}</Title>
        <Counter>
          {" "}
          {data.isMoney && "$"} {amount}
        </Counter>
        <Link>{data.link}</Link>
      </Left>
      <Right>
        <Percentage className="positive"> {diff} %</Percentage>
        {data.icon}
      </Right>
    </Widgetconta>
  );
};
