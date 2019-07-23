import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import  StreamFrom  from './StreamForm';

class StreamCreate extends React.Component {

    //formValues the value of this.props.handleSubmit(this.onSubmit) inside the form
    //pass to Streamform as parent function
    onSubmit = (formValues)=> {
       // console.log(formValues)
        this.props.createStream(formValues);
    }

    render() {
        return (
          <div>
              <h3>Create Stream</h3>
              <StreamFrom onSubmit={this.onSubmit}></StreamFrom>
          </div>
        );
    }
};



export default connect(null,{createStream})(StreamCreate);