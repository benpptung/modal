'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('./lib/');
const inherits = require('inherits');
const is = require('prop-types');


inherits(Demo, React.Component);
var prototype = Demo.prototype;

function Demo(props) {
  React.Component.call(this, props);

  this.state = {
    showModal: false
  };

  this.toggle = _=> this.setState({showModal: !this.state.showModal});
  this.onClose = _=> this.setState({showModal: false});

  var styles = Object.defineProperties({}, {
    header: { get: _=> ({
      margin: 0,
      backgroundColor: '#f0f0f0',
      padding: '24px 24px 24px',
      fontSize: 18
    })},
    section: { get: _=> ({})},
    footer: {get: _=> ({})}
  });

  Object.defineProperties(this, {
    styles: { get: _=> styles }
  })
}

// jshint ignore:start
prototype.render = function() {

  return (
    <div>

      <button onClick={this.toggle}>Toggle</button>

      <Modal visible={this.state.showModal} onClose={this.onClose}>
        <header style={{width: '300px'}}>this is header</header>
        <section>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>
          <p>this is content this is content this is content this is content this is content this is content this is content this is content </p>


        </section>
        <footer>this is footer</footer>
      </Modal>
    </div>
  )
};

Demo.displayName = 'Demo';

ReactDOM.render(<Demo />, document.getElementById('mountnode'));
// jshint ignore:end