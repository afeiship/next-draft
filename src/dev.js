import './dev.scss';
import ReactRceDraftjs from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
