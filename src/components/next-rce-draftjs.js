import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Editor, EditorState, RichUtils } from 'draft-js';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  toggleInlineStyle(style) {
    let state = RichUtils.toggleInlineStyle(this.state.editorState, style);
    this.onChange(state);
  }

  render() {
    let editorState = this.state.editorState;
    let defaultInlineStyle = [
      { el: <span style={{ fontWeight: "bold" }}>B</span>, style: 'BOLD' },
      { el: <span style={{ fontStyle: "italic" }}>I</span>, style: 'ITALIC' },
      { el: <span style={{ textDecoration: "underline" }}>U</span>, style: 'UNDERLINE' },
      { el: <span><div className="color-show" style={{ backgroundColor: '#e24' }}></div></span>, style: 'RED' },
      { el: <span><div className="color-show" style={{ backgroundColor: '#39f' }}></div></span>, style: 'BLUE' },
      { el: <span><div className="color-show" style={{ backgroundColor: '#f93' }}></div></span>, style: 'ORANGE' },
      { el: <span><div className="color-show" style={{ backgroundColor: '#3a6' }}></div></span>, style: 'GREEN' }
    ];
    let customColorStyleMap = {
      RED: { color: '#e24' },
      BLUE: { color: '#39f' },
      ORANGE: { color: '#f93' },
      GREEN: { color: '#3a6' }
    };
    return (
      <div className="next-rce-editor">
        <div className="editor-btn-group">
          {defaultInlineStyle.map((item) => (
            <span onClick={() => this.toggleInlineStyle(item.style)} key={item.style}>
              {item.el}
            </span>
          ))}
        </div>
        <Editor
          placeholder={'Write what you would say.'}
          editorState={editorState}
          onChange={this.onChange}
          customStyleMap={customColorStyleMap}
        />
      </div>
    );
  }
}