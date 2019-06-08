import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, idx) => <li key={idx}>{band}</li>)

  render() {
    console.log("BandsContainer props: ", this.props);
    return(
      <div>
        <BandInput/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
