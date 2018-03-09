import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Header from './Header';


export default class  App extends React.Component{
    state={
        pageHeader:'Naming Contests'
    };
    componentDidMount(){
    }
    
    componentWillUnmount(){
    }
    render(){
        return(
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.test}
                </div>
            </div>
    
          
        )
    }
}

