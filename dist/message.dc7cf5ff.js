// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"LU1D":[function(require,module,exports) {

},{}],"XHdR":[function(require,module,exports) {
"use strict";

require("../css/message.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Message =
/*#__PURE__*/
function () {
  function Message(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? 'success' : _ref$type,
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? '' : _ref$text;

    _classCallCheck(this, Message);

    this.type = type;
    this.text = text;
    this.render();
    this.bind();
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      var $div = document.createElement('div');
      this.$message = $div;
      $div.classList.add('message');
      $div.classList.add(this.type);
      var $icon = document.createElement('span');
      $icon.classList.add('iconfont');
      $icon.classList.add('icon-' + this.type);
      $div.appendChild($icon);
      var $text = document.createTextNode(this.text);
      $div.appendChild($text);
      document.body.appendChild($div);
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this = this;

      setTimeout(function () {
        return _this.show();
      });
      setTimeout(function () {
        return _this.destory();
      }, 3000);
    }
  }, {
    key: "show",
    value: function show() {
      this.$message.classList.add('show');
    }
  }, {
    key: "destory",
    value: function destory() {
      var _this2 = this;

      this.$message.classList.remove('show');
      setTimeout(function () {
        return _this2.$message.parentNode.removeChild(_this2.$message);
      }, 400);
    }
  }]);

  return Message;
}();

document.querySelector('#btn-success').onclick = function () {
  new Message({
    text: '成功'
  });
};

document.querySelector('#btn-info').onclick = function () {
  new Message({
    text: '我是通知',
    type: 'info'
  });
};

document.querySelector('#btn-danger').onclick = function () {
  new Message({
    text: '危险',
    type: 'danger'
  });
};

document.querySelector('#btn-warning').onclick = function () {
  new Message({
    text: '我是警告',
    type: 'warning'
  });
};
},{"../css/message.css":"LU1D"}]},{},["XHdR"], null)
//# sourceMappingURL=message.dc7cf5ff.js.map