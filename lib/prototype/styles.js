'use strict';

const prototype = exports.prototype = {};

prototype.prepareStyles = function () {

  var viewsize = viewPortSize();
  Object.assign(this.state, { viewsize });


  var styles = Object.defineProperties({}, {

    height: { get: _=> this.state.viewsize.height },

    width: { get: _=> this.state.viewsize.width },

    innerMax: { get: _=> {
      if (this.width < 575) return this.width - 20;
      if (this.width < 1100) return 555;
      return 600;
    }},

    overlay: { get: _=> ({
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      padding: '10px 0px',
      margin: '0px 0px',
      border: '0',
      height: this.height,
      lineHeight: this.height + 'px',
      textAlign: 'center'
     })},

    inner: { get: _=> ({
      backgroundColor: 'white',
      borderRadius: 3,
      boxShadow: '0px 2px 6px 0 rgba( 0, 0, 0, .44)',
      padding: 0,
      maxWidth: this.innerMax,
      outline: '0',
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: 'normal',
      animation: 'fade-in-pulse-modal .3s forwards cubic-bezier(.8, .02, .45, .91)',
    })},

    button: { get: _=> ({
      position: 'absolute',
      top: -10,
      right: -10,
      width: 30,
      height: 30,
      lineHeight: 30,
      border: 'none',
      cursor: 'pointer',
      background: 'url(//s3.amazonaws.com/icartoonme-cdn/button/close-shadow.png) no-repeat scroll 0 0'
    })}
  });

  Object.defineProperties(this, {
    styles: { get: _=> styles }
  })

  this._onResizeTimer = null;
  this.onResize = this.onResize();

  window.addEventListener('resize', this.onResize);
};


prototype.onResize = function() {
  return _=> {

    clearTimeout(this._onResizeTimer);
    this._onResizeTimer = setTimeout(_=> {
      let viewsize = viewPortSize();
      this.setState({ viewsize })
    }, 50);
  }
};


function viewPortSize() {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return {width, height};
}