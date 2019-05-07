import React from 'react'

class skinThumb extends React.Component {
  constructor() {
    super()
  }
  static defaultProps = {
    width: 120,
    height: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DZ6ET1hmhXoNt9wNyvv2IXAzIfoievwbHcKAqKuFcvTiWndcLw',
    description: 'description'
  }
  render() {
    const {width, height, image} = this.props;
    return (
      <div style={{width: width = 'px', height: height + 'px'}} className='skinThumb'>
        <img src={image} alt='thumbnail photo of a  face'/>
        <div className="skinThumbTextDiv">
          {description}
        </div>
      </div>
    )
  }
}
