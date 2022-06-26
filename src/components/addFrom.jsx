import React, { Component } from "react";

class AddFrom extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
    this.props.handleSubmit(this.inputRef.current.value);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form action="" method="get" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" name="" id="" />
        <button value="ok">OK</button>
      </form>
    );
  }
}

export default AddFrom;
