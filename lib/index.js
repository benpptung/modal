'use strict';

/**
 * Module Dependencies
 */
const React = require('react');
const ReactDOM = require('react-dom');
const inherits = require('inherits');
const is = require('prop-types');
const inject = require('inject-css');
const _proto = require('./prototype');

/**
 * inherits and expose module
 */
inherits(Modal, React.Component);
module.exports = Modal;
inject(require('./animation.scss'));
var prototype = Object.assign(Modal.prototype, _proto);

Modal.defaultProps = {
  visible: false,
  onClose: nop
};

Modal.propTypes = {
  visible: is.bool,
  onClose: is.func
};

/**
 * @constructor
 */
function Modal(props) {
  React.Component.call(this, props);
  this.state = {};

  this.prepareStyles();

  this.subscribe();
}

/**
 * @public
 * @return {ReactElement}
 */
prototype.render = function () {

  return null;
};

prototype.componentDidMount = prototype.componentDidUpdate = function () {

  this.renderModal(this.props, this.state);
};

prototype.componentWillReceiveProps = function(new_props) {
  if (!new_props.visible && this.state.rendered) this.setState({rendered: false});
};

prototype.renderModal = function(props, state) {

  var div = document.getElementById('page-overlay');
  if (!div) {
    div = document.createElement('div');
    div.id = 'page-overlay';
    document.body.appendChild(div);
  }

  var modal = !props.visible ? <div></div> : (
    <div>
      <div className="overlay" style={this.styles.overlay}>
        <div style={this.styles.inner} className="inner" onAnimationEnd={this.onAnimationEnd}>
          <div style={this.styles.wrapper}>
            <button onTouchTap={props.onClose} style={this.styles.button}></button>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );

  ReactDOM.render(modal, div);

};

function nop() { }

if (process.env.NODE_ENV !== 'production') {
  Modal.displayName = 'Modal';
}