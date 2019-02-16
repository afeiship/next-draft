import React from 'react'
import Image from './Image'
import TuCharts from './tu-charts'

export default class MediaBlock extends React.Component {
  render() {
    const { contentState, block } = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const type = entity.getType();
    const { src, description } = entity.getData();
    if (type === 'image') {
      return (
        <Image src={src} description={description} />
      )
    }

    if(type === 'charts'){
      return (
        <TuCharts src={src} description={description}/>
      )
    }
  }
}
