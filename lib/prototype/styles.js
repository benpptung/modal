'use strict';

const bindResize = require('react-util').bindResize;
const prototype = exports.prototype = {};

prototype.prepareStyles = function () {

  bindResize(this);

  var hasAnimation = detectAnimation();

  // inner
  var inner = {
    noAnimationMobile: {
      padding:  0,
      maxWidth: this.innerMax,
      outline: '0',
      display: 'inline-block',
      lineHeight: 'normal'
    }
  };

  inner.normalMobile = Object.assign({
    animation: 'fade-in-pulse-modal .3s forwards cubic-bezier(.8, .02, .45, .91)'
  }, inner.noAnimationMobile);

  inner.normal = Object.assign({verticalAlign: 'middle'}, inner.normalMobile);
  inner.noAnimation = Object.assign({verticalAlign: 'middle'}, inner.noAnimationMobile);

  // button
  var button = {
    normal: {
      position: 'absolute',
      top: -10,
      right: -10,
      width: 30,
      height: 30,
      lineHeight: 30,
      border: 'none',
      cursor: 'pointer',
      background: 'url(//s3.amazonaws.com/icartoonme-cdn/button/close-shadow.png) no-repeat scroll 0 0'
    }
  };
  button.mobile = Object.assign({}, button.normal, {top: 0, right: 0});


  var styles = Object.defineProperties({}, {

    overlay: { get: _=> ({
      //backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      padding: 5,
      margin: '0px 0px',
      border: '0',
      height: this.height,
      lineHeight: this.height + 'px',
      textAlign: 'center'
     })},

    backdrop: {
      value: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 0,
        margin: '0px 0px',
        border: '0',
        height: this.height,
        lineHeight: this.height + 'px',
        zIndex: -1
      }
    },

    inner: { get: _=> {
      if (!hasAnimation || this.state.rendered) {
        return this.width < 575 ? inner.noAnimationMobile : inner.noAnimation;
      }
      return this.width < 575 ? inner.normalMobile : inner.normal;
    }},

    wrapper: { value: {
      position: 'relative'
    }},

    button: { get: _=> this.width > 575 ? button.normal : button.mobile }
  });

  Object.defineProperties(this, {
    styles: { get: _=> styles },

    height: { get: _=> this.state.viewsize.height },

    width: { get: _=> this.state.viewsize.width },

    innerMax: { get: _=> {
      if (this.width < 575) return this.width - 20;
      if (this.width < 1100) return 555;
      return 600;
    }}
  })

};

function detectAnimation() {
  var events = [
    'animation',
    'WebkitAnimation',
    'MozAnimation',
    'OAnimation',
    'msAnimation'
  ];
  var has = false;
  var el = document.createElement('div');
  for(let i = 0, len = events.length; i < len; ++i) {
    let name = events[i];
    if (typeof el.style[name] !== 'undefined') {
      has = true;
      break;
    }
  }

  return has;
}