import React, { Component } from "react";
import { Slide } from "@sambego/diorama";

import "./Multistep.css";

export default class Multistep extends Component {
  constructor(props) {
    super(props);

    let liCount = 0;
    const countLis = (elements) => {
      let arr = [];
      for (var i = 0; i < elements.length; i++) {
        let child = elements[i].props.children;
        if (Array.isArray(child) && child.length > 0) {
          countLis(child);
        }
        if (elements[i].type === "li") {
          liCount++;
        }
      }
      return arr;
    }

    countLis(props.children);

    this.state = {
      liCount,
      currentLi: 0
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    let lis = document.querySelectorAll("li");
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.add("hiddenForNow");
    }
    document.querySelector("#main").focus();
  }

  handleKeyDown(e) {
    if (e.keyCode === 39) {
      if (this.state.currentLi !== this.state.liCount) {
        document.querySelectorAll("li")[this.state.currentLi].classList.remove("hiddenForNow");
        this.setState({currentLi: this.state.currentLi + 1});
        e.stopPropagation();
      }
    }
    if (e.keyCode === 37) {
      if (this.state.currentLi > 0) {
        document.querySelectorAll("li")[this.state.currentLi-1].classList.add("hiddenForNow");
        this.setState({currentLi: this.state.currentLi - 1});
        e.stopPropagation();
      }
    }
  }

  render() {

    return (
      <Slide notes={this.props.notes}>
        <div onKeyUp={this.handleKeyDown} id="main" tabIndex="0">
        {this.props.children}
        </div>
      </Slide>
    );
  }
}