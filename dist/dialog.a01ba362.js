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
})({"Z6zN":[function(require,module,exports) {

},{}],"TSHq":[function(require,module,exports) {
"use strict";

require("../css/dialog.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dialog =
/*#__PURE__*/
function () {
  function Dialog($root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Dialog);

    this.$root = $root;
    this.options = options;

    this.onCancel = options.onCancel || function () {};

    this.onOk = options.onOk || function () {};

    this.bind();
  }

  _createClass(Dialog, [{
    key: "bind",
    value: function bind() {
      var self = this;

      this.$root.querySelector('.close').onclick = function () {
        self.hide();
        self.onCancel();
      };

      this.$root.querySelector('.btn-cancel').onclick = function () {
        self.hide();
        self.onCancel();
      };

      this.$root.querySelector('.btn-ok').onclick = function () {
        self.hide();
        self.onOk();
      };
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this = this;

      this.$root.classList.remove('appear');
      setTimeout(function () {
        return _this.$root.classList.remove('show');
      }, 400);
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.$root.classList.add('show');
      setTimeout(function () {
        return _this2.$root.classList.add('appear');
      });
    }
  }]);

  return Dialog;
}();

var dialog = new Dialog(document.querySelector('.dialog'), {
  onOk: function onOk() {
    console.log('点了ok');
  },
  onCancel: function onCancel() {
    console.log('点了取消');
  }
});

document.querySelector('.open-dialog').onclick = function () {
  dialog.show();
};
},{"../css/dialog.css":"Z6zN"}]},{},["TSHq"], null)
//# sourceMappingURL=dialog.a01ba362.js.map