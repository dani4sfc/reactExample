import React, { Component } from "react";

class Counter extends Component {
  //We can use bootstrap classes with className="name of bootstrap class"
  //Or we can use css styles using style={styles defined in an object} or manually

  /* styles = {
    fontSize: 16,
    fontWeight: "bold"
  };*/
  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  
          {this.state.tags.length === 0 && "please create a new tag"}
*/

  //For event handler we need to call the super element to bind them, also you can
  //use arrow functions, that inherits binding

  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  //If we use arrow functions, we inherits the binding for this
  /* handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };*/

  render() {
    return (
      //<React.Fragment>
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
      //</React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
