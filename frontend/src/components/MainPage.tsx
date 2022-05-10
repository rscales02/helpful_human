import { Component } from "react";
import { Card } from "./Card";
import { Button } from "react-bootstrap";

export interface IMainPageProps {}

export interface IMainPageState {}

class MainPage extends Component<IMainPageProps, IMainPageState> {
  state: IMainPageState = {};

  pageStyle: any = {
    marginLeft: "20%",
    width: "80%",
    height: "100%",
  };

  handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
    console.log("clicked");
  };

  render() {
    return (
      <div style={this.pageStyle}>
        <Card color="cffff1"></Card>
        <div className="d-flex flex-row justify-content-center flex-fill">
          <Card color="cffff1"></Card>
          <Card color="cffff1"></Card>
          <Card color="cffff1"></Card>
          <Card color="cffff1"></Card>
          <Card color="cffff1"></Card>
        </div>
        <Button onClick={this.handleClick}>Clear</Button>
      </div>
    );
  }
}

export default MainPage;
