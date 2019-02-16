import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { INLINE_STYLES, BLOCK_TYPES } from './constant';

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

  undo = () => {
    const { editorState } = this.state;
    this.setState({
      editorState: EditorState.undo(editorState)
    });
  };

  redo = () => {
    const { editorState } = this.state;
    this.setState({
      editorState: EditorState.redo(editorState)
    });
  };

  onInlineAction = (inItem) => {
    console.log(inItem);
    const { editorState } = this.state;
    this.setState({
      editorState: RichUtils.toggleInlineStyle(editorState, inItem.style)
    });
  };

  onBlockAction = (inItem) => {
    console.log(inItem);
    const { editorState } = this.state;
    this.setState({
      editorState: RichUtils.toggleBlockType(editorState, inItem.style)
    });
  };

  render() {
    return (
      <section className="next-rce-draftjs">
        <div className="next-rce-draftjs-control">
          <span className="action action-undo" onClick={this.undo}>
            撤销
          </span>
          <span className="action action-redo" onClick={this.redo}>
            重做
          </span>
          <span className="line" />
          {/* inline styles:  */}
          {INLINE_STYLES.map((item) => {
            return (
              <span
                className="action"
                key={item.label}
                label={item.label}
                onClick={this.onInlineAction.bind(this, item)}
                children={item.label}
              />
            );
          })}
          <span className="line"/>
          {/* block styles:  */}
          {BLOCK_TYPES.map((item) => {
            return (
              <span
                className="action"
                key={item.label}
                label={item.label}
                onClick={this.onBlockAction.bind(this, item)}
                children={item.label}
              />
            );
          })}
        </div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Your content."
        />
      </section>
    );
  }
}
