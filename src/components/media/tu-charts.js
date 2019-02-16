import React from 'react';

export default class extends React.Component {
  render(){
    const { src, description } = this.props;
    console.log(src, description);
    return (
      <figure>
        <img src={'https://via.placeholder.com/200x100'} />
        <p>你可以定制 TuCharts</p>
      </figure>
    )
  }
}
