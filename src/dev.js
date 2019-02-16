import './dev.scss';
import NextRceDraftjs from './main';

/*===example start===*/

// install: npm install afeiship/next-rce-draftjs --save
// import : import NextRceDraftjs from 'next-rce-draftjs'

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
      <div className="hello-next-rce-draftjs">
        <NextRceDraftjs ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
