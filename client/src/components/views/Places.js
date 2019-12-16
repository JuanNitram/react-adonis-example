import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../../store/actions/placesActions';

class Places extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.dispatch(fetchPlaces());
  }

  render = () => (
    <div class="container mx-auto h-screen">

    </div>
  );
}

const mapStateToProps = state => ({
  places: state.places.items,
  laoding: state.places.loading,
  error: state.places.errors,
});

export default connect(mapStateToProps)(Places);