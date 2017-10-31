import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from '../ducks'

class Personal extends Component {
    render() {
        return (
            <form>
                <input type='text' />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    listForm: state.reducerForm.listForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(storeActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal); 