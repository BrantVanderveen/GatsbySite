import React from 'React'

class Wrapper extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    const {children} = this.props;
    return (
      <div style={{padding:'20px'}}>{children}</div>
    )

  }
}
export default Wrapper
