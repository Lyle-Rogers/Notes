import React, { Component } from "react";
export default class Workflow extends Component {
  // First
  constructor() {
    super();
    this.state = { pageTitle: "Workflow" };
    console.log("constructor");
  }
  // Second
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  // Fourth
  componentDidMount() {
    this.state = { pageTitle: 'workflow'};
    console.log("componentDidMount");
  }
  // Fith (after update)
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  // Seventh (after update)
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return true;
  }
  // Eighth (after update)
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // Last
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleClick = () => {
    console.log("button clicked");
    this.setState({ pageTitle: "Workflow" });
  };
  handleKeyUp = e => {
    this.setState({ inputDetails: e.target.value });
  };
  // Third
  // Sixth (after update)
  render() {
    console.log("render");
    return (
      <div>
        <h1>Workflow</h1>

        <p>{this.state.pageTitle}</p>
        <input type="text" onKeyUp={e => this.handleKeyUp(e)} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}


// How to use handlepagetitleupdate to update a pages title
import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio", // This is the original title
            data: [
                {title: "Quip" },
                {title: "Eventbright" },
                {title: "Ministry safe" },
                {title: "SwingAway" }
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this); // You have to do this in order to tie this component to the content
    }

    PortfolioItems() {
        const data = ["Quip", "Eventbright", "Ministry safe", "SwingAway"];

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url="Google.com" />;
        })
    }

    handlePageTitleUpdate() { // this component is what updates the page title using this.setState then tags page title
        this.setState({
            pageTitle: "Something Else"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}

                <hr />
                <hr />
                <hr />
                    
                <button onClick={this.handlePageTitleUpdate}>Change Title</button> {/* This button activates handlePageTitleUpdate when clicked which updates the state */}
            </div>
        );
    }
}