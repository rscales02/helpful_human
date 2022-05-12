import { Component } from "react";
import { DetailView } from "./DetailView";
import { ListView } from "./ListView";
import { Sidebar } from "./Sidebar";

export interface IMainPageProps {
  data: string[];
}

export interface IMainPageState {
  listView: boolean;
  detailView: string[];
}

class MainPage extends Component<IMainPageProps, IMainPageState> {
  state: IMainPageState = {
    listView: false,
    detailView: this.props.data.slice(0, 6),
  };

  pageStyle: any = {
    minHeight: "100%",
  };

  handleClear = (e: React.SyntheticEvent<HTMLElement>) => {
    // clear state from detail view "Clear Btn"
    this.setState({
      listView: true,
      detailView: this.props.data.slice(0, 6),
    });
  };

  handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
    // Grab id of target card and return detail view data
    const id: string = e.currentTarget.id;
    let i = this.props.data.indexOf(id);
    this.setState({
      listView: false,
      detailView: this.props.data.slice(i, i + 6),
    });
  };

  getRandom = (e: React.SyntheticEvent<HTMLElement>) => {
    // Get random item and neighbors
    const rand = Math.floor(Math.random() * this.props.data.length);
    this.setState({
      listView: false,
      detailView: this.props.data.slice(rand, rand + 6),
    });
  };

  render() {
    return (
      <div style={this.pageStyle} className="d-flex w-100">
        <Sidebar onClick={this.getRandom}></Sidebar>
        {this.state.listView === true ? (
          <ListView data={this.props.data} handleClick={this.handleClick} />
        ) : (
          <DetailView
            handleClear={this.handleClear}
            handleClick={this.handleClick}
            data={this.state.detailView}
          />
        )}
      </div>
    );
  }
}

export default MainPage;
