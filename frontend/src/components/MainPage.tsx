import { Component } from "react";
import { DetailView } from "./DetailView";
import { ListView } from "./ListView";

export interface IMainPageProps {}

export interface IMainPageState {
  listView: boolean;
}

class MainPage extends Component<IMainPageProps, IMainPageState> {
  state: IMainPageState = {
    listView: false,
  };

  pageStyle: any = {
    marginLeft: "20%",
    width: "80%",
    height: "100%",
  };

  handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
    this.setState({ listView: !this.state.listView });
  };

  render() {
    return (
      <div style={this.pageStyle}>
        {this.state.listView === true ? (
          <ListView />
        ) : (
          <DetailView handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default MainPage;
