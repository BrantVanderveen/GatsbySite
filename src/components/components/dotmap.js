import React from 'react'
import './dotmap.css'

class DotMap extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  static defaultProps = {
    image: 'https://www.holsterfashion.co.za/wp-content/themes/claue/assets/images/placeholder.png',
    locations: [[50, 50],[100, 50]],
    onDotSelect: (input) => {
      console.log(input)
    },
    dotSize: 30,
    selected: -1
  }
  render() {
    const {locations, image, onDotSelect, dotSize, selected} = this.props;
    function notSelectedStyle(loc, dotSize) {
      return {top: loc[0] + 'px', left: loc[1] + 'px', height: dotSize+'px', width:dotSize+'px'};
    }
    function selectedStyle(loc, height, dotSize) {
      return {top: loc[0] + 'px', left: loc[1] + 'px', height: dotSize+'px', width:dotSize+'px', opacity: 1};
    }
    return (
      <div style={{position: 'relative'}}>
        <img src={image} alt='person'/>
        {locations.map((loc, index) => {
          return (
            <div
              key={index}
              className='dot'
              style={selected === index ? selectedStyle(loc, dotSize) : notSelectedStyle(loc, dotSize)}
              onClick = {() => onDotSelect(index)}
            />
          )
        })}
      </div>
    )
  }
}

export default DotMap
