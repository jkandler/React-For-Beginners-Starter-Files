import React from 'react';
import {getFunName} from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  }

  goToStore = (event) => {
    // stop the form from submitting
    event.preventDefault();
    // get text from input
    const storeName = this.myInput.value.value;
    // change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store --></button>
        </form>
    )
  }
}

export default StorePicker;
