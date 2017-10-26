import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions.js'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const labelStyle = {fontSize: '20px'}

const Link = ({ active, children, onClick }) => {
  return active
          ? (<RaisedButton
            className='filter'
            label={children}
            labelStyle={{ fontSize: '20px', color: '#fff' }}
            backgroundColor='#283593'
            />)
          : (<FlatButton className='filter' label={children} labelStyle={labelStyle} onClick={onClick} />)
}

const mapState = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  onClick () { dispatch(setFilter(ownProps.filter)) }
})

export default connect(mapState, mapDispatch)(Link)
