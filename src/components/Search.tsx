import React from "react";
import { Component } from "react";
import { Form } from "react-bootstrap";

export interface ISearchProps {}

export interface ISearchState {
  value: string;
}

class Search extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ value: e.currentTarget.value });
    console.log(this.state.value);
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="justify-content-end align-middle"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter color"
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default Search;
