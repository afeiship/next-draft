# react-rce-draftjs
> A lite rich editor based on draftJs(React)

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-rce-draftjs --registry=https://registry.npm.taobao.org
```

```js
import ReactRceDraftjs from 'react-rce-draftjs';
```

```scss
// customize your styles:
$react-rce-draftjs-options:(
);

@import 'node_modules/react-rce-draftjs/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-rce-draftjs --save
// import : import ReactRceDraftjs from 'react-rce-draftjs'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-rce-draftjs">
        <ReactRceDraftjs ref='rc' />
      </div>
    );
  }
}

```
