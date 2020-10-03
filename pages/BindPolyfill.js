import React from 'react';
import Gist from 'react-gist';
import { bind } from '../utils';

export default class BindPolyfill extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    message: null,
  };

  sayHello(preApplied, newArg) {
    const newData = {
      preApplied,
      newArg,
      currentUser: 'Foo',
    };

    this.setState({ message: newData });
  }

  render() {
    return (
      <div>
        <h1>Bind & Promise Polyfill / Implementation in a Class Component</h1>
        <button
          type="button"
          onClick={() =>
            bind(
              this.sayHello,
              this,
              'I am a pre applied string'
            )('I am a new argument')
          }
        >
          Run bind polyfill!!
        </button>

        <h4>Bind Results</h4>
        <pre>{JSON.stringify(this.state.message, null, 2)}</pre>
        <Gist id="8985ab8d1d31181d8c25135e9304cd32" />
      </div>
    );
  }
}
