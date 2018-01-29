import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleDirectionsInputs, updateOrigin, updateDestination, fetchTripTime } from '../actions/index'
import { bindActionCreators } from 'redux'

class TripTime extends Component {


  directions() {
    if(!this.props.directions.showDirectionsInputs) {
      console.log(this.props.directions.showDirectionsInputs)
      return <button className="btn btn-primary" onClick={this.props.toggleDirectionsInputs}>Calculate trip time</button>
    } else {
      return (
        <div className="directions-inputs">
          <input className="form-control origin-input" onChange={e=>this.props.updateOrigin(e.target.value)} placeholder="Origin" />
          <input className="form-control destination-input" onChange={e=>this.props.updateDestination(e.target.value)} placeholder="Destination" />
          <button onClick={()=>{
            this.props.fetchTripTime(this.props.directions.origin, this.props.directions.destination)
            document.querySelector('.origin-input').value=""
            document.querySelector('.destination-input').value=""}
          }>Calculate</button>
          <h4>Origin: {this.props.directions.origin}</h4>
          <h4>Destination: {this.props.directions.destination}</h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.directions()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    directions: state.directions
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleDirectionsInputs,
    updateOrigin,
    updateDestination,
    fetchTripTime
  }, dispatch)
}

// first is mapStateToProps, second is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(TripTime)
