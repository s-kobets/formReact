import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from './ducks'

class FinishForm extends Component {
    render() {
        const {listForm, activeForm} = this.props

        return (
            <div>
                Количество форм заполнено: {activeForm} / {listForm.length}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    listForm: state.reducerForm.listForm,
    activeForm: state.reducerForm.activeForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(storeActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishForm); 