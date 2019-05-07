import React from 'react'
import './skintypeThumb.css'

class skinThumb extends React.Component {
  constructor() {
    super()
  }
  static defaultProps = {
    width: 329,
    height: 281,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DZ6ET1hmhXoNt9wNyvv2IXAzIfoievwbHcKAqKuFcvTiWndcLw',
    description: 'description',
    onClick: () => {console.log('hello');},
  }
  render() {
    const {width, height, image, description} = this.props;
    return (
      <div style={{width: width + 'px', height: height + 'px'}} className='skinThumb'>
        <img src={image} alt='thumbnail photo of a  face' style={{height: height + 'px'}}/>
        <div className="skinThumbTextDiv">
          {description}
        </div>
      </div>
    )
  }
}

export default skinThumb
