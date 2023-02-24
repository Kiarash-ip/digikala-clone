import React, { Component } from "react";

export default class NavbarMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.anchorRef = React.createRef();
  }

  componentDidMount() {
    this.props.setMenuHeight(
      (prevState) =>
        prevState + this.anchorRef.current.getBoundingClientRect().height
    );
  }

  componentWillUnmount() {
    this.props.setMenuHeight(0);
  }

  render() {
    return (
      <a
        className="w-full flex items-center py-3 px-2 hover:bg-neutral-100 text-neutral-700  hover:text-primary-500 cursor-pointer"
        dir="rtl"
        ref={this.anchorRef}
        onMouseEnter={() => this.props.mouseEnterHandler(this.props.index)}
      >
        <span className="w-full h-full flex items-center">
          <p className="text-xs font-[700] leading-[2.17]">
            {this.props.data.title}
          </p>
        </span>
      </a>
    );
  }
}
