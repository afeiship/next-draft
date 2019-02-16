import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Editor, EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import { INLINE_STYLES, BLOCK_TYPES, myMediaBlockRenderer } from './constant';

const addImage = (editorState, data) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', data);
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
  return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
};




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

  onInsertImage = () => {
    const data = {
      src: 'http://www.xlzx.cn/newsite/upimg/allimg/1011/48_29105448.jpg',
      description: '白鸟之死'
    };
    this.setState({
      editorState: addImage(this.state.editorState, data)
    })
    console.log('insert image');
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
          <span className="line" />
          {/* block styles:  */}
          {BLOCK_TYPES.map((item) => {
            return (
              <span
                className="action"
                key={item.label}
                onClick={this.onBlockAction.bind(this, item)}
                children={item.label}
              />
            );
          })}
          {/* Customize Image */}
          <span className="action action-insert-image" onClick={this.onInsertImage}>
            图片
          </span>
        </div>
        <Editor
          editorState={this.state.editorState}
          blockRendererFn={myMediaBlockRenderer}
          onChange={this.onChange}
          placeholder="Your content."
        />
      </section>
    );
  }
}
