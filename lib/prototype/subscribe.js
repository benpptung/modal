'use strict';

const prototype = exports.prototype = {};

prototype.subscribe = function() {

  this.onAnimationEnd = this.onAnimationEnd();
};


prototype.onAnimationEnd = function() {
  return event=> {
    this.setState({rendered: true});
  }
};