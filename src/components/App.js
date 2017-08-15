// react from react
// prop type from react
import React, {PropTypes} from 'react';
// common header
import Header from './common/Header';

// class app
// extends react component
class App extends React.Component {
	// render
	// return div, header div
	// this props children 
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
// app prop type
// child obj required
App.propTypes = {  
  children: PropTypes.object.isRequired
};

// export app
export default App;
