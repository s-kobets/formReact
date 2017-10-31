import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from './ducks'

class Menu extends Component {
  render() {
    const {listForm, activeForm} = this.props

    return (
      <ul>
        {listForm && listForm.map((item, index) => {
          return <li className={activeForm === 1 && 'active'}>
              <button onClick={this.onActive} data-list={index + 1} key={`${index}-button`}>{item}</button>
            </li>
        })}
      </ul>
    )
  }

  onActive = (e) => {
    const value = e.target.getAttribute('data-list')
    this.props.actions.setActiveForm(Number(value))
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu); 