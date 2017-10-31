import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from './ducks'

class Content extends Component {
    constructor() {
        super()
        this.state = {
            personalForm: null
        }
    }
    async componentDidMount() {
        const {default: Personal} = await import('./forms/Personal');
        this.setState({
            personalForm: <Personal />
        })
    }
    render() {
        return (
            <div>
                {this.props.activeForm === 1 && this.state.personalForm}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    activeForm: state.reducerForm.activeForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(storeActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content); 