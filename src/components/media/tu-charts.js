import React from 'react';

export default class extends React.Component {
  render() {
    const { src, description } = this.props;
    console.log(src, description);
    return (
      <figure>
        <iframe frameBorder="0" src="https://v.qq.com/txp/iframe/player.html?vid=g001207s5rg" allowFullScreen></iframe>
        <p>图表/v.qq.com 原理相同</p>
      </figure>
    );
  }
}
