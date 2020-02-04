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
})({"zczX":[function(require,module,exports) {

},{}],"tVIU":[function(require,module,exports) {
"use strict";

require("../css/carousel.css");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Carousel =
/*#__PURE__*/
function () {
  function Carousel($root) {
    _classCallCheck(this, Carousel);

    this.$root = $root;
    this.$pre = $root.querySelector('.arrow-pre');
    this.$next = $root.querySelector('.arrow-next');
    this.$$indicators = $root.querySelectorAll('.indicators > li');
    this.$$panels = $root.querySelectorAll('.panels > a');
    this.bind();
  }

  _createClass(Carousel, [{
    key: "bind",
    value: function bind() {
      var _this = this;

      setInterval(function () {
        // IE浏览器
        if (document.all) {
          document.getElementById('clickMe').click();
        } // 其它浏览器
        else {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);

            _this.$next.dispatchEvent(e);
          }
      }, 3000);

      this.$pre.onclick = function () {
        var index = _this.getPreIndex();

        _this.setPage(index);

        _this.setIndicator(index);
      };

      this.$next.onclick = function () {
        var index = _this.getNextIndex();

        _this.setPage(index);

        _this.setIndicator(index);
      };

      this.$$indicators.forEach(function ($indicator) {
        return $indicator.onclick = function (e) {
          var index = _toConsumableArray(_this.$$indicators).indexOf(e.target);

          _this.setIndicator(index);

          _this.setPage(index);
        };
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return _toConsumableArray(this.$$indicators).indexOf(this.$root.querySelector('.indicators .active'));
    }
  }, {
    key: "getPreIndex",
    value: function getPreIndex() {
      return (this.getIndex() - 1 + this.$$indicators.length) % this.$$indicators.length;
    }
  }, {
    key: "getNextIndex",
    value: function getNextIndex() {
      return (this.getIndex() + 1) % this.$$indicators.length;
    }
  }, {
    key: "setPage",
    value: function setPage(index) {
      this.$$panels.forEach(function ($panel) {
        return $panel.classList.remove('active');
      });
      this.$$panels[index].classList.add('active');
    }
  }, {
    key: "setIndicator",
    value: function setIndicator(index) {
      this.$$indicators.forEach(function ($indicator) {
        return $indicator.classList.remove('active');
      });
      this.$$indicators[index].classList.add('active');
    }
  }]);

  return Carousel;
}();

var $$carousel = document.querySelectorAll('.carousel');
$$carousel.forEach(function ($root) {
  return new Carousel($root);
});
},{"../css/carousel.css":"zczX"}]},{},["tVIU"], null)
//# sourceMappingURL=carousel.d082d1bf.js.map