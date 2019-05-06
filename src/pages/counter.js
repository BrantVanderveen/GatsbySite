import React from "react"

class Counter extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div style={{
        border: "1px solid black",
        padding: '5px',
        marginTop: '10px',
        width: "170px",
        color: this.props.color
      }}>
        <h1> Counter </h1>
        <p> current count: {this.state.count} </p>
        <button onClick = {() => this.setState({count: this.state.count + 1})}> click to increment </button>
        <button onClick = {() => this.setState({count: this.state.count - 1})}> click to decrement </button>
      </div>
    )
  }
}

export default Counter
