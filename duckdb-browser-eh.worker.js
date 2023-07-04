var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports2, module2) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root2 = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports3) {
          factory(createExporter(root2, createExporter(exports3)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports3, previous) {
        if (exports3 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports3, "__esModule", { value: true });
          } else {
            exports3.__esModule = true;
          }
        }
        return function(id, v) {
          return exports3[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// (disabled):path
var require_path = __commonJS({
  "(disabled):path"() {
  }
});

// (disabled):fs
var require_fs = __commonJS({
  "(disabled):fs"() {
  }
});

// ../../node_modules/js-sha256/src/sha256.js
var require_sha256 = __commonJS({
  "../../node_modules/js-sha256/src/sha256.js"(exports, module) {
    (function() {
      "use strict";
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [-2147483648, 8388608, 32768, 128];
      var SHIFT = [24, 16, 8, 0];
      var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
      var blocks = [];
      if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType, is2242) {
        return function(message) {
          return new Sha256(is2242, true).update(message)[outputType]();
        };
      };
      var createMethod = function(is2242) {
        var method2 = createOutputMethod("hex", is2242);
        if (NODE_JS) {
          method2 = nodeWrap(method2, is2242);
        }
        method2.create = function() {
          return new Sha256(is2242);
        };
        method2.update = function(message) {
          return method2.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method2[type] = createOutputMethod(type, is2242);
        }
        return method2;
      };
      var nodeWrap = function(method, is224) {
        var crypto = eval("require('crypto')");
        var Buffer = eval("require('buffer').Buffer");
        var algorithm = is224 ? "sha224" : "sha256";
        var nodeMethod = function(message) {
          if (typeof message === "string") {
            return crypto.createHash(algorithm).update(message, "utf8").digest("hex");
          } else {
            if (message === null || message === void 0) {
              throw new Error(ERROR);
            } else if (message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            }
          }
          if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
            return crypto.createHash(algorithm).update(new Buffer(message)).digest("hex");
          } else {
            return method(message);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType, is2242) {
        return function(key, message) {
          return new HmacSha256(key, is2242, true).update(message)[outputType]();
        };
      };
      var createHmacMethod = function(is2242) {
        var method2 = createHmacOutputMethod("hex", is2242);
        method2.create = function(key) {
          return new HmacSha256(key, is2242);
        };
        method2.update = function(key, message) {
          return method2.create(key).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method2[type] = createHmacOutputMethod(type, is2242);
        }
        return method2;
      };
      function Sha256(is2242, sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is2242) {
          this.h0 = 3238371032;
          this.h1 = 914150663;
          this.h2 = 812702999;
          this.h3 = 4144912697;
          this.h4 = 4290775857;
          this.h5 = 1750603025;
          this.h6 = 1694076839;
          this.h7 = 3204075428;
        } else {
          this.h0 = 1779033703;
          this.h1 = 3144134277;
          this.h2 = 1013904242;
          this.h3 = 2773480762;
          this.h4 = 1359893119;
          this.h5 = 2600822924;
          this.h6 = 528734635;
          this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is2242;
      }
      Sha256.prototype.update = function(message) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
          notString = true;
        }
        var code, index = 0, i, length = message.length, blocks2 = this.blocks;
        while (index < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = this.block;
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
              blocks2[i >> 2] |= message[index] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index < length && i < 64; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) {
                blocks2[i >> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                blocks2[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.block = blocks2[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Sha256.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[16] = this.block;
        blocks2[i >> 2] |= EXTRA[i & 3];
        this.block = blocks2[16];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = this.block;
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks2[15] = this.bytes << 3;
        this.hash();
      };
      Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for (j = 16; j < 64; ++j) {
          t1 = blocks2[j - 15];
          s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
          t1 = blocks2[j - 2];
          s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
          blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
        }
        bc = b & c;
        for (j = 0; j < 64; j += 4) {
          if (this.first) {
            if (this.is224) {
              ab = 300032;
              t1 = blocks2[0] - 1413257819;
              h = t1 - 150054599 << 0;
              d = t1 + 24177077 << 0;
            } else {
              ab = 704751109;
              t1 = blocks2[0] - 210244248;
              h = t1 - 1521486534 << 0;
              d = t1 + 143694565 << 0;
            }
            this.first = false;
          } else {
            s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            ab = a & b;
            maj = ab ^ a & c ^ bc;
            ch = e & f ^ ~e & g;
            t1 = h + s1 + ch + K[j] + blocks2[j];
            t2 = s0 + maj;
            h = d + t1 << 0;
            d = t1 + t2 << 0;
          }
          s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
          s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
          da = d & a;
          maj = da ^ d & b ^ ab;
          ch = h & e ^ ~h & f;
          t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
          t2 = s0 + maj;
          g = c + t1 << 0;
          c = t1 + t2 << 0;
          s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
          s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
          cd = c & d;
          maj = cd ^ c & a ^ da;
          ch = g & h ^ ~g & e;
          t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
          t2 = s0 + maj;
          f = b + t1 << 0;
          b = t1 + t2 << 0;
          s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
          s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
          bc = b & c;
          maj = bc ^ b & d ^ cd;
          ch = f & g ^ ~f & h;
          t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
          t2 = s0 + maj;
          e = a + t1 << 0;
          a = t1 + t2 << 0;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
      };
      Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) {
          hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
      };
      Sha256.prototype.toString = Sha256.prototype.hex;
      Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
          h0 >> 24 & 255,
          h0 >> 16 & 255,
          h0 >> 8 & 255,
          h0 & 255,
          h1 >> 24 & 255,
          h1 >> 16 & 255,
          h1 >> 8 & 255,
          h1 & 255,
          h2 >> 24 & 255,
          h2 >> 16 & 255,
          h2 >> 8 & 255,
          h2 & 255,
          h3 >> 24 & 255,
          h3 >> 16 & 255,
          h3 >> 8 & 255,
          h3 & 255,
          h4 >> 24 & 255,
          h4 >> 16 & 255,
          h4 >> 8 & 255,
          h4 & 255,
          h5 >> 24 & 255,
          h5 >> 16 & 255,
          h5 >> 8 & 255,
          h5 & 255,
          h6 >> 24 & 255,
          h6 >> 16 & 255,
          h6 >> 8 & 255,
          h6 & 255
        ];
        if (!this.is224) {
          arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255);
        }
        return arr;
      };
      Sha256.prototype.array = Sha256.prototype.digest;
      Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
          dataView.setUint32(28, this.h7);
        }
        return buffer;
      };
      function HmacSha256(key, is2242, sharedMemory) {
        var i, type = typeof key;
        if (type === "string") {
          var bytes = [], length = key.length, index = 0, code;
          for (i = 0; i < length; ++i) {
            code = key.charCodeAt(i);
            if (code < 128) {
              bytes[index++] = code;
            } else if (code < 2048) {
              bytes[index++] = 192 | code >> 6;
              bytes[index++] = 128 | code & 63;
            } else if (code < 55296 || code >= 57344) {
              bytes[index++] = 224 | code >> 12;
              bytes[index++] = 128 | code >> 6 & 63;
              bytes[index++] = 128 | code & 63;
            } else {
              code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
              bytes[index++] = 240 | code >> 18;
              bytes[index++] = 128 | code >> 12 & 63;
              bytes[index++] = 128 | code >> 6 & 63;
              bytes[index++] = 128 | code & 63;
            }
          }
          key = bytes;
        } else {
          if (type === "object") {
            if (key === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
              key = new Uint8Array(key);
            } else if (!Array.isArray(key)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
        }
        if (key.length > 64) {
          key = new Sha256(is2242, true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
          var b = key[i] || 0;
          oKeyPad[i] = 92 ^ b;
          iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is2242, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
      }
      HmacSha256.prototype = new Sha256();
      HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var innerHash = this.array();
          Sha256.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(innerHash);
          Sha256.prototype.finalize.call(this);
        }
      };
      var exports = createMethod();
      exports.sha256 = exports;
      exports.sha224 = createMethod(true);
      exports.sha256.hmac = createHmacMethod();
      exports.sha224.hmac = createHmacMethod(true);
      if (COMMON_JS) {
        module.exports = exports;
      } else {
        root.sha256 = exports.sha256;
        root.sha224 = exports.sha224;
        if (AMD) {
          define(function() {
            return exports;
          });
        }
      }
    })();
  }
});

// ../../node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// ../../node_modules/apache-arrow/util/buffer.mjs
var buffer_exports = {};
__export(buffer_exports, {
  compareArrayLike: () => compareArrayLike,
  joinUint8Arrays: () => joinUint8Arrays,
  memcpy: () => memcpy,
  rebaseValueOffsets: () => rebaseValueOffsets,
  toArrayBufferView: () => toArrayBufferView,
  toArrayBufferViewAsyncIterator: () => toArrayBufferViewAsyncIterator,
  toArrayBufferViewIterator: () => toArrayBufferViewIterator,
  toBigInt64Array: () => toBigInt64Array,
  toBigUint64Array: () => toBigUint64Array,
  toFloat32Array: () => toFloat32Array,
  toFloat32ArrayAsyncIterator: () => toFloat32ArrayAsyncIterator,
  toFloat32ArrayIterator: () => toFloat32ArrayIterator,
  toFloat64Array: () => toFloat64Array,
  toFloat64ArrayAsyncIterator: () => toFloat64ArrayAsyncIterator,
  toFloat64ArrayIterator: () => toFloat64ArrayIterator,
  toInt16Array: () => toInt16Array,
  toInt16ArrayAsyncIterator: () => toInt16ArrayAsyncIterator,
  toInt16ArrayIterator: () => toInt16ArrayIterator,
  toInt32Array: () => toInt32Array,
  toInt32ArrayAsyncIterator: () => toInt32ArrayAsyncIterator,
  toInt32ArrayIterator: () => toInt32ArrayIterator,
  toInt8Array: () => toInt8Array,
  toInt8ArrayAsyncIterator: () => toInt8ArrayAsyncIterator,
  toInt8ArrayIterator: () => toInt8ArrayIterator,
  toUint16Array: () => toUint16Array,
  toUint16ArrayAsyncIterator: () => toUint16ArrayAsyncIterator,
  toUint16ArrayIterator: () => toUint16ArrayIterator,
  toUint32Array: () => toUint32Array,
  toUint32ArrayAsyncIterator: () => toUint32ArrayAsyncIterator,
  toUint32ArrayIterator: () => toUint32ArrayIterator,
  toUint8Array: () => toUint8Array,
  toUint8ArrayAsyncIterator: () => toUint8ArrayAsyncIterator,
  toUint8ArrayIterator: () => toUint8ArrayIterator,
  toUint8ClampedArray: () => toUint8ClampedArray,
  toUint8ClampedArrayAsyncIterator: () => toUint8ClampedArrayAsyncIterator,
  toUint8ClampedArrayIterator: () => toUint8ClampedArrayIterator
});

// ../../node_modules/apache-arrow/util/utf8.mjs
var decoder = new TextDecoder("utf-8");
var decodeUtf8 = (buffer) => decoder.decode(buffer);
var encoder = new TextEncoder();
var encodeUtf8 = (value) => encoder.encode(value);

// ../../node_modules/apache-arrow/util/compat.mjs
var [BigIntCtor, BigIntAvailable] = (() => {
  const BigIntUnavailableError = () => {
    throw new Error("BigInt is not available in this environment");
  };
  function BigIntUnavailable() {
    throw BigIntUnavailableError();
  }
  BigIntUnavailable.asIntN = () => {
    throw BigIntUnavailableError();
  };
  BigIntUnavailable.asUintN = () => {
    throw BigIntUnavailableError();
  };
  return typeof BigInt !== "undefined" ? [BigInt, true] : [BigIntUnavailable, false];
})();
var [BigInt64ArrayCtor, BigInt64ArrayAvailable] = (() => {
  const BigInt64ArrayUnavailableError = () => {
    throw new Error("BigInt64Array is not available in this environment");
  };
  class BigInt64ArrayUnavailable {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw BigInt64ArrayUnavailableError();
    }
    static from() {
      throw BigInt64ArrayUnavailableError();
    }
    constructor() {
      throw BigInt64ArrayUnavailableError();
    }
  }
  return typeof BigInt64Array !== "undefined" ? [BigInt64Array, true] : [BigInt64ArrayUnavailable, false];
})();
var [BigUint64ArrayCtor, BigUint64ArrayAvailable] = (() => {
  const BigUint64ArrayUnavailableError = () => {
    throw new Error("BigUint64Array is not available in this environment");
  };
  class BigUint64ArrayUnavailable {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw BigUint64ArrayUnavailableError();
    }
    static from() {
      throw BigUint64ArrayUnavailableError();
    }
    constructor() {
      throw BigUint64ArrayUnavailableError();
    }
  }
  return typeof BigUint64Array !== "undefined" ? [BigUint64Array, true] : [BigUint64ArrayUnavailable, false];
})();
var isNumber = (x) => typeof x === "number";
var isBoolean = (x) => typeof x === "boolean";
var isFunction = (x) => typeof x === "function";
var isObject = (x) => x != null && Object(x) === x;
var isPromise = (x) => {
  return isObject(x) && isFunction(x.then);
};
var isIterable = (x) => {
  return isObject(x) && isFunction(x[Symbol.iterator]);
};
var isAsyncIterable = (x) => {
  return isObject(x) && isFunction(x[Symbol.asyncIterator]);
};
var isArrowJSON = (x) => {
  return isObject(x) && isObject(x["schema"]);
};
var isIteratorResult = (x) => {
  return isObject(x) && "done" in x && "value" in x;
};
var isFileHandle = (x) => {
  return isObject(x) && isFunction(x["stat"]) && isNumber(x["fd"]);
};
var isFetchResponse = (x) => {
  return isObject(x) && isReadableDOMStream(x["body"]);
};
var isReadableInterop = (x) => "_getDOMStream" in x && "_getNodeStream" in x;
var isWritableDOMStream = (x) => {
  return isObject(x) && isFunction(x["abort"]) && isFunction(x["getWriter"]) && !isReadableInterop(x);
};
var isReadableDOMStream = (x) => {
  return isObject(x) && isFunction(x["cancel"]) && isFunction(x["getReader"]) && !isReadableInterop(x);
};
var isWritableNodeStream = (x) => {
  return isObject(x) && isFunction(x["end"]) && isFunction(x["write"]) && isBoolean(x["writable"]) && !isReadableInterop(x);
};
var isReadableNodeStream = (x) => {
  return isObject(x) && isFunction(x["read"]) && isFunction(x["pipe"]) && isBoolean(x["readable"]) && !isReadableInterop(x);
};
var isFlatbuffersByteBuffer = (x) => {
  return isObject(x) && isFunction(x["clear"]) && isFunction(x["bytes"]) && isFunction(x["position"]) && isFunction(x["setPosition"]) && isFunction(x["capacity"]) && isFunction(x["getBufferIdentifier"]) && isFunction(x["createLong"]);
};

// ../../node_modules/apache-arrow/util/buffer.mjs
var SharedArrayBuf = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : ArrayBuffer;
function collapseContiguousByteRanges(chunks) {
  const result = chunks[0] ? [chunks[0]] : [];
  let xOffset, yOffset, xLen, yLen;
  for (let x, y, i = 0, j = 0, n = chunks.length; ++i < n; ) {
    x = result[j];
    y = chunks[i];
    if (!x || !y || x.buffer !== y.buffer || y.byteOffset < x.byteOffset) {
      y && (result[++j] = y);
      continue;
    }
    ({ byteOffset: xOffset, byteLength: xLen } = x);
    ({ byteOffset: yOffset, byteLength: yLen } = y);
    if (xOffset + xLen < yOffset || yOffset + yLen < xOffset) {
      y && (result[++j] = y);
      continue;
    }
    result[j] = new Uint8Array(x.buffer, xOffset, yOffset - xOffset + yLen);
  }
  return result;
}
function memcpy(target, source, targetByteOffset = 0, sourceByteLength = source.byteLength) {
  const targetByteLength = target.byteLength;
  const dst = new Uint8Array(target.buffer, target.byteOffset, targetByteLength);
  const src = new Uint8Array(source.buffer, source.byteOffset, Math.min(sourceByteLength, targetByteLength));
  dst.set(src, targetByteOffset);
  return target;
}
function joinUint8Arrays(chunks, size) {
  const result = collapseContiguousByteRanges(chunks);
  const byteLength = result.reduce((x, b) => x + b.byteLength, 0);
  let source, sliced, buffer;
  let offset = 0, index = -1;
  const length = Math.min(size || Number.POSITIVE_INFINITY, byteLength);
  for (const n = result.length; ++index < n; ) {
    source = result[index];
    sliced = source.subarray(0, Math.min(source.length, length - offset));
    if (length <= offset + sliced.length) {
      if (sliced.length < source.length) {
        result[index] = source.subarray(sliced.length);
      } else if (sliced.length === source.length) {
        index++;
      }
      buffer ? memcpy(buffer, sliced, offset) : buffer = sliced;
      break;
    }
    memcpy(buffer || (buffer = new Uint8Array(length)), sliced, offset);
    offset += sliced.length;
  }
  return [buffer || new Uint8Array(0), result.slice(index), byteLength - (buffer ? buffer.byteLength : 0)];
}
function toArrayBufferView(ArrayBufferViewCtor, input) {
  let value = isIteratorResult(input) ? input.value : input;
  if (value instanceof ArrayBufferViewCtor) {
    if (ArrayBufferViewCtor === Uint8Array) {
      return new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength);
    }
    return value;
  }
  if (!value) {
    return new ArrayBufferViewCtor(0);
  }
  if (typeof value === "string") {
    value = encodeUtf8(value);
  }
  if (value instanceof ArrayBuffer) {
    return new ArrayBufferViewCtor(value);
  }
  if (value instanceof SharedArrayBuf) {
    return new ArrayBufferViewCtor(value);
  }
  if (isFlatbuffersByteBuffer(value)) {
    return toArrayBufferView(ArrayBufferViewCtor, value.bytes());
  }
  return !ArrayBuffer.isView(value) ? ArrayBufferViewCtor.from(value) : value.byteLength <= 0 ? new ArrayBufferViewCtor(0) : new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength / ArrayBufferViewCtor.BYTES_PER_ELEMENT);
}
var toInt8Array = (input) => toArrayBufferView(Int8Array, input);
var toInt16Array = (input) => toArrayBufferView(Int16Array, input);
var toInt32Array = (input) => toArrayBufferView(Int32Array, input);
var toBigInt64Array = (input) => toArrayBufferView(BigInt64ArrayCtor, input);
var toUint8Array = (input) => toArrayBufferView(Uint8Array, input);
var toUint16Array = (input) => toArrayBufferView(Uint16Array, input);
var toUint32Array = (input) => toArrayBufferView(Uint32Array, input);
var toBigUint64Array = (input) => toArrayBufferView(BigUint64ArrayCtor, input);
var toFloat32Array = (input) => toArrayBufferView(Float32Array, input);
var toFloat64Array = (input) => toArrayBufferView(Float64Array, input);
var toUint8ClampedArray = (input) => toArrayBufferView(Uint8ClampedArray, input);
var pump = (iterator) => {
  iterator.next();
  return iterator;
};
function* toArrayBufferViewIterator(ArrayCtor, source) {
  const wrap = function* (x) {
    yield x;
  };
  const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : !isIterable(source) ? wrap(source) : source;
  yield* pump(function* (it) {
    let r = null;
    do {
      r = it.next(yield toArrayBufferView(ArrayCtor, r));
    } while (!r.done);
  }(buffers[Symbol.iterator]()));
  return new ArrayCtor();
}
var toInt8ArrayIterator = (input) => toArrayBufferViewIterator(Int8Array, input);
var toInt16ArrayIterator = (input) => toArrayBufferViewIterator(Int16Array, input);
var toInt32ArrayIterator = (input) => toArrayBufferViewIterator(Int32Array, input);
var toUint8ArrayIterator = (input) => toArrayBufferViewIterator(Uint8Array, input);
var toUint16ArrayIterator = (input) => toArrayBufferViewIterator(Uint16Array, input);
var toUint32ArrayIterator = (input) => toArrayBufferViewIterator(Uint32Array, input);
var toFloat32ArrayIterator = (input) => toArrayBufferViewIterator(Float32Array, input);
var toFloat64ArrayIterator = (input) => toArrayBufferViewIterator(Float64Array, input);
var toUint8ClampedArrayIterator = (input) => toArrayBufferViewIterator(Uint8ClampedArray, input);
function toArrayBufferViewAsyncIterator(ArrayCtor, source) {
  return __asyncGenerator(this, arguments, function* toArrayBufferViewAsyncIterator_1() {
    if (isPromise(source)) {
      return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(toArrayBufferViewAsyncIterator(ArrayCtor, yield __await(source))))));
    }
    const wrap = function(x) {
      return __asyncGenerator(this, arguments, function* () {
        yield yield __await(yield __await(x));
      });
    };
    const emit = function(source2) {
      return __asyncGenerator(this, arguments, function* () {
        yield __await(yield* __asyncDelegator(__asyncValues(pump(function* (it) {
          let r = null;
          do {
            r = it.next(yield r === null || r === void 0 ? void 0 : r.value);
          } while (!r.done);
        }(source2[Symbol.iterator]())))));
      });
    };
    const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : isIterable(source) ? emit(source) : !isAsyncIterable(source) ? wrap(source) : source;
    yield __await(
      yield* __asyncDelegator(__asyncValues(pump(function(it) {
        return __asyncGenerator(this, arguments, function* () {
          let r = null;
          do {
            r = yield __await(it.next(yield yield __await(toArrayBufferView(ArrayCtor, r))));
          } while (!r.done);
        });
      }(buffers[Symbol.asyncIterator]()))))
    );
    return yield __await(new ArrayCtor());
  });
}
var toInt8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int8Array, input);
var toInt16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int16Array, input);
var toInt32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int32Array, input);
var toUint8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8Array, input);
var toUint16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint16Array, input);
var toUint32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint32Array, input);
var toFloat32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float32Array, input);
var toFloat64ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float64Array, input);
var toUint8ClampedArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8ClampedArray, input);
function rebaseValueOffsets(offset, length, valueOffsets) {
  if (offset !== 0) {
    valueOffsets = valueOffsets.slice(0, length + 1);
    for (let i = -1; ++i <= length; ) {
      valueOffsets[i] += offset;
    }
  }
  return valueOffsets;
}
function compareArrayLike(a, b) {
  let i = 0;
  const n = a.length;
  if (n !== b.length) {
    return false;
  }
  if (n > 0) {
    do {
      if (a[i] !== b[i]) {
        return false;
      }
    } while (++i < n);
  }
  return true;
}

// ../../node_modules/apache-arrow/io/adapters.mjs
var adapters_default = {
  fromIterable(source) {
    return pump2(fromIterable(source));
  },
  fromAsyncIterable(source) {
    return pump2(fromAsyncIterable(source));
  },
  fromDOMStream(source) {
    return pump2(fromDOMStream(source));
  },
  fromNodeStream(stream) {
    return pump2(fromNodeStream(stream));
  },
  toDOMStream(source, options) {
    throw new Error(`"toDOMStream" not available in this environment`);
  },
  toNodeStream(source, options) {
    throw new Error(`"toNodeStream" not available in this environment`);
  }
};
var pump2 = (iterator) => {
  iterator.next();
  return iterator;
};
function* fromIterable(source) {
  let done, threw = false;
  let buffers = [], buffer;
  let cmd, size, bufferLength = 0;
  function byteRange() {
    if (cmd === "peek") {
      return joinUint8Arrays(buffers, size)[0];
    }
    [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
    return buffer;
  }
  ({ cmd, size } = yield null);
  const it = toUint8ArrayIterator(source)[Symbol.iterator]();
  try {
    do {
      ({ done, value: buffer } = Number.isNaN(size - bufferLength) ? it.next() : it.next(size - bufferLength));
      if (!done && buffer.byteLength > 0) {
        buffers.push(buffer);
        bufferLength += buffer.byteLength;
      }
      if (done || size <= bufferLength) {
        do {
          ({ cmd, size } = yield byteRange());
        } while (size < bufferLength);
      }
    } while (!done);
  } catch (e) {
    (threw = true) && typeof it.throw === "function" && it.throw(e);
  } finally {
    threw === false && typeof it.return === "function" && it.return(null);
  }
  return null;
}
function fromAsyncIterable(source) {
  return __asyncGenerator(this, arguments, function* fromAsyncIterable_1() {
    let done, threw = false;
    let buffers = [], buffer;
    let cmd, size, bufferLength = 0;
    function byteRange() {
      if (cmd === "peek") {
        return joinUint8Arrays(buffers, size)[0];
      }
      [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
      return buffer;
    }
    ({ cmd, size } = yield yield __await(null));
    const it = toUint8ArrayAsyncIterator(source)[Symbol.asyncIterator]();
    try {
      do {
        ({ done, value: buffer } = Number.isNaN(size - bufferLength) ? yield __await(it.next()) : yield __await(it.next(size - bufferLength)));
        if (!done && buffer.byteLength > 0) {
          buffers.push(buffer);
          bufferLength += buffer.byteLength;
        }
        if (done || size <= bufferLength) {
          do {
            ({ cmd, size } = yield yield __await(byteRange()));
          } while (size < bufferLength);
        }
      } while (!done);
    } catch (e) {
      (threw = true) && typeof it.throw === "function" && (yield __await(it.throw(e)));
    } finally {
      threw === false && typeof it.return === "function" && (yield __await(it.return(new Uint8Array(0))));
    }
    return yield __await(null);
  });
}
function fromDOMStream(source) {
  return __asyncGenerator(this, arguments, function* fromDOMStream_1() {
    let done = false, threw = false;
    let buffers = [], buffer;
    let cmd, size, bufferLength = 0;
    function byteRange() {
      if (cmd === "peek") {
        return joinUint8Arrays(buffers, size)[0];
      }
      [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
      return buffer;
    }
    ({ cmd, size } = yield yield __await(null));
    const it = new AdaptiveByteReader(source);
    try {
      do {
        ({ done, value: buffer } = Number.isNaN(size - bufferLength) ? yield __await(it["read"]()) : yield __await(it["read"](size - bufferLength)));
        if (!done && buffer.byteLength > 0) {
          buffers.push(toUint8Array(buffer));
          bufferLength += buffer.byteLength;
        }
        if (done || size <= bufferLength) {
          do {
            ({ cmd, size } = yield yield __await(byteRange()));
          } while (size < bufferLength);
        }
      } while (!done);
    } catch (e) {
      (threw = true) && (yield __await(it["cancel"](e)));
    } finally {
      threw === false ? yield __await(it["cancel"]()) : source["locked"] && it.releaseLock();
    }
    return yield __await(null);
  });
}
var AdaptiveByteReader = class {
  constructor(source) {
    this.source = source;
    this.reader = null;
    this.reader = this.source["getReader"]();
    this.reader["closed"].catch(() => {
    });
  }
  get closed() {
    return this.reader ? this.reader["closed"].catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    if (this.reader) {
      this.reader.releaseLock();
    }
    this.reader = null;
  }
  cancel(reason) {
    return __awaiter(this, void 0, void 0, function* () {
      const { reader, source } = this;
      reader && (yield reader["cancel"](reason).catch(() => {
      }));
      source && (source["locked"] && this.releaseLock());
    });
  }
  read(size) {
    return __awaiter(this, void 0, void 0, function* () {
      if (size === 0) {
        return { done: this.reader == null, value: new Uint8Array(0) };
      }
      const result = yield this.reader.read();
      !result.done && (result.value = toUint8Array(result));
      return result;
    });
  }
};
var onEvent = (stream, event) => {
  const handler = (_) => resolve([event, _]);
  let resolve;
  return [event, handler, new Promise((r) => (resolve = r) && stream["once"](event, handler))];
};
function fromNodeStream(stream) {
  return __asyncGenerator(this, arguments, function* fromNodeStream_1() {
    const events = [];
    let event = "error";
    let done = false, err = null;
    let cmd, size, bufferLength = 0;
    let buffers = [], buffer;
    function byteRange() {
      if (cmd === "peek") {
        return joinUint8Arrays(buffers, size)[0];
      }
      [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
      return buffer;
    }
    ({ cmd, size } = yield yield __await(null));
    if (stream["isTTY"]) {
      yield yield __await(new Uint8Array(0));
      return yield __await(null);
    }
    try {
      events[0] = onEvent(stream, "end");
      events[1] = onEvent(stream, "error");
      do {
        events[2] = onEvent(stream, "readable");
        [event, err] = yield __await(Promise.race(events.map((x) => x[2])));
        if (event === "error") {
          break;
        }
        if (!(done = event === "end")) {
          if (!Number.isFinite(size - bufferLength)) {
            buffer = toUint8Array(stream["read"]());
          } else {
            buffer = toUint8Array(stream["read"](size - bufferLength));
            if (buffer.byteLength < size - bufferLength) {
              buffer = toUint8Array(stream["read"]());
            }
          }
          if (buffer.byteLength > 0) {
            buffers.push(buffer);
            bufferLength += buffer.byteLength;
          }
        }
        if (done || size <= bufferLength) {
          do {
            ({ cmd, size } = yield yield __await(byteRange()));
          } while (size < bufferLength);
        }
      } while (!done);
    } finally {
      yield __await(cleanup(events, event === "error" ? err : null));
    }
    return yield __await(null);
    function cleanup(events2, err2) {
      buffer = buffers = null;
      return new Promise((resolve, reject) => {
        for (const [evt, fn] of events2) {
          stream["off"](evt, fn);
        }
        try {
          const destroy = stream["destroy"];
          destroy && destroy.call(stream, err2);
          err2 = void 0;
        } catch (e) {
          err2 = e || err2;
        } finally {
          err2 != null ? reject(err2) : resolve();
        }
      });
    }
  });
}

// ../../node_modules/apache-arrow/enum.mjs
var MetadataVersion;
(function(MetadataVersion3) {
  MetadataVersion3[MetadataVersion3["V1"] = 0] = "V1";
  MetadataVersion3[MetadataVersion3["V2"] = 1] = "V2";
  MetadataVersion3[MetadataVersion3["V3"] = 2] = "V3";
  MetadataVersion3[MetadataVersion3["V4"] = 3] = "V4";
  MetadataVersion3[MetadataVersion3["V5"] = 4] = "V5";
})(MetadataVersion || (MetadataVersion = {}));
var UnionMode;
(function(UnionMode3) {
  UnionMode3[UnionMode3["Sparse"] = 0] = "Sparse";
  UnionMode3[UnionMode3["Dense"] = 1] = "Dense";
})(UnionMode || (UnionMode = {}));
var Precision;
(function(Precision3) {
  Precision3[Precision3["HALF"] = 0] = "HALF";
  Precision3[Precision3["SINGLE"] = 1] = "SINGLE";
  Precision3[Precision3["DOUBLE"] = 2] = "DOUBLE";
})(Precision || (Precision = {}));
var DateUnit;
(function(DateUnit3) {
  DateUnit3[DateUnit3["DAY"] = 0] = "DAY";
  DateUnit3[DateUnit3["MILLISECOND"] = 1] = "MILLISECOND";
})(DateUnit || (DateUnit = {}));
var TimeUnit;
(function(TimeUnit3) {
  TimeUnit3[TimeUnit3["SECOND"] = 0] = "SECOND";
  TimeUnit3[TimeUnit3["MILLISECOND"] = 1] = "MILLISECOND";
  TimeUnit3[TimeUnit3["MICROSECOND"] = 2] = "MICROSECOND";
  TimeUnit3[TimeUnit3["NANOSECOND"] = 3] = "NANOSECOND";
})(TimeUnit || (TimeUnit = {}));
var IntervalUnit;
(function(IntervalUnit3) {
  IntervalUnit3[IntervalUnit3["YEAR_MONTH"] = 0] = "YEAR_MONTH";
  IntervalUnit3[IntervalUnit3["DAY_TIME"] = 1] = "DAY_TIME";
  IntervalUnit3[IntervalUnit3["MONTH_DAY_NANO"] = 2] = "MONTH_DAY_NANO";
})(IntervalUnit || (IntervalUnit = {}));
var MessageHeader;
(function(MessageHeader3) {
  MessageHeader3[MessageHeader3["NONE"] = 0] = "NONE";
  MessageHeader3[MessageHeader3["Schema"] = 1] = "Schema";
  MessageHeader3[MessageHeader3["DictionaryBatch"] = 2] = "DictionaryBatch";
  MessageHeader3[MessageHeader3["RecordBatch"] = 3] = "RecordBatch";
  MessageHeader3[MessageHeader3["Tensor"] = 4] = "Tensor";
  MessageHeader3[MessageHeader3["SparseTensor"] = 5] = "SparseTensor";
})(MessageHeader || (MessageHeader = {}));
var Type;
(function(Type3) {
  Type3[Type3["NONE"] = 0] = "NONE";
  Type3[Type3["Null"] = 1] = "Null";
  Type3[Type3["Int"] = 2] = "Int";
  Type3[Type3["Float"] = 3] = "Float";
  Type3[Type3["Binary"] = 4] = "Binary";
  Type3[Type3["Utf8"] = 5] = "Utf8";
  Type3[Type3["Bool"] = 6] = "Bool";
  Type3[Type3["Decimal"] = 7] = "Decimal";
  Type3[Type3["Date"] = 8] = "Date";
  Type3[Type3["Time"] = 9] = "Time";
  Type3[Type3["Timestamp"] = 10] = "Timestamp";
  Type3[Type3["Interval"] = 11] = "Interval";
  Type3[Type3["List"] = 12] = "List";
  Type3[Type3["Struct"] = 13] = "Struct";
  Type3[Type3["Union"] = 14] = "Union";
  Type3[Type3["FixedSizeBinary"] = 15] = "FixedSizeBinary";
  Type3[Type3["FixedSizeList"] = 16] = "FixedSizeList";
  Type3[Type3["Map"] = 17] = "Map";
  Type3[Type3["Dictionary"] = -1] = "Dictionary";
  Type3[Type3["Int8"] = -2] = "Int8";
  Type3[Type3["Int16"] = -3] = "Int16";
  Type3[Type3["Int32"] = -4] = "Int32";
  Type3[Type3["Int64"] = -5] = "Int64";
  Type3[Type3["Uint8"] = -6] = "Uint8";
  Type3[Type3["Uint16"] = -7] = "Uint16";
  Type3[Type3["Uint32"] = -8] = "Uint32";
  Type3[Type3["Uint64"] = -9] = "Uint64";
  Type3[Type3["Float16"] = -10] = "Float16";
  Type3[Type3["Float32"] = -11] = "Float32";
  Type3[Type3["Float64"] = -12] = "Float64";
  Type3[Type3["DateDay"] = -13] = "DateDay";
  Type3[Type3["DateMillisecond"] = -14] = "DateMillisecond";
  Type3[Type3["TimestampSecond"] = -15] = "TimestampSecond";
  Type3[Type3["TimestampMillisecond"] = -16] = "TimestampMillisecond";
  Type3[Type3["TimestampMicrosecond"] = -17] = "TimestampMicrosecond";
  Type3[Type3["TimestampNanosecond"] = -18] = "TimestampNanosecond";
  Type3[Type3["TimeSecond"] = -19] = "TimeSecond";
  Type3[Type3["TimeMillisecond"] = -20] = "TimeMillisecond";
  Type3[Type3["TimeMicrosecond"] = -21] = "TimeMicrosecond";
  Type3[Type3["TimeNanosecond"] = -22] = "TimeNanosecond";
  Type3[Type3["DenseUnion"] = -23] = "DenseUnion";
  Type3[Type3["SparseUnion"] = -24] = "SparseUnion";
  Type3[Type3["IntervalDayTime"] = -25] = "IntervalDayTime";
  Type3[Type3["IntervalYearMonth"] = -26] = "IntervalYearMonth";
})(Type || (Type = {}));
var BufferType;
(function(BufferType2) {
  BufferType2[BufferType2["OFFSET"] = 0] = "OFFSET";
  BufferType2[BufferType2["DATA"] = 1] = "DATA";
  BufferType2[BufferType2["VALIDITY"] = 2] = "VALIDITY";
  BufferType2[BufferType2["TYPE"] = 3] = "TYPE";
})(BufferType || (BufferType = {}));

// ../../node_modules/apache-arrow/util/vector.mjs
var vector_exports = {};
__export(vector_exports, {
  clampIndex: () => clampIndex,
  clampRange: () => clampRange,
  createElementComparator: () => createElementComparator
});

// ../../node_modules/apache-arrow/util/pretty.mjs
var undf = void 0;
function valueToString(x) {
  if (x === null) {
    return "null";
  }
  if (x === undf) {
    return "undefined";
  }
  switch (typeof x) {
    case "number":
      return `${x}`;
    case "bigint":
      return `${x}`;
    case "string":
      return `"${x}"`;
  }
  if (typeof x[Symbol.toPrimitive] === "function") {
    return x[Symbol.toPrimitive]("string");
  }
  if (ArrayBuffer.isView(x)) {
    if (x instanceof BigInt64ArrayCtor || x instanceof BigUint64ArrayCtor) {
      return `[${[...x].map((x2) => valueToString(x2))}]`;
    }
    return `[${x}]`;
  }
  return ArrayBuffer.isView(x) ? `[${x}]` : JSON.stringify(x, (_, y) => typeof y === "bigint" ? `${y}` : y);
}

// ../../node_modules/apache-arrow/util/bn.mjs
var bn_exports = {};
__export(bn_exports, {
  BN: () => BN,
  bignumToBigInt: () => bignumToBigInt,
  bignumToString: () => bignumToString,
  isArrowBigNumSymbol: () => isArrowBigNumSymbol
});
var isArrowBigNumSymbol = Symbol.for("isArrowBigNum");
function BigNum(x, ...xs) {
  if (xs.length === 0) {
    return Object.setPrototypeOf(toArrayBufferView(this["TypedArray"], x), this.constructor.prototype);
  }
  return Object.setPrototypeOf(new this["TypedArray"](x, ...xs), this.constructor.prototype);
}
BigNum.prototype[isArrowBigNumSymbol] = true;
BigNum.prototype.toJSON = function() {
  return `"${bignumToString(this)}"`;
};
BigNum.prototype.valueOf = function() {
  return bignumToNumber(this);
};
BigNum.prototype.toString = function() {
  return bignumToString(this);
};
BigNum.prototype[Symbol.toPrimitive] = function(hint = "default") {
  switch (hint) {
    case "number":
      return bignumToNumber(this);
    case "string":
      return bignumToString(this);
    case "default":
      return bignumToBigInt(this);
  }
  return bignumToString(this);
};
function SignedBigNum(...args) {
  return BigNum.apply(this, args);
}
function UnsignedBigNum(...args) {
  return BigNum.apply(this, args);
}
function DecimalBigNum(...args) {
  return BigNum.apply(this, args);
}
Object.setPrototypeOf(SignedBigNum.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(UnsignedBigNum.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(DecimalBigNum.prototype, Object.create(Uint32Array.prototype));
Object.assign(SignedBigNum.prototype, BigNum.prototype, { "constructor": SignedBigNum, "signed": true, "TypedArray": Int32Array, "BigIntArray": BigInt64ArrayCtor });
Object.assign(UnsignedBigNum.prototype, BigNum.prototype, { "constructor": UnsignedBigNum, "signed": false, "TypedArray": Uint32Array, "BigIntArray": BigUint64ArrayCtor });
Object.assign(DecimalBigNum.prototype, BigNum.prototype, { "constructor": DecimalBigNum, "signed": true, "TypedArray": Uint32Array, "BigIntArray": BigUint64ArrayCtor });
function bignumToNumber(bn) {
  const { buffer, byteOffset, length, "signed": signed } = bn;
  const words = new BigUint64ArrayCtor(buffer, byteOffset, length);
  const negative = signed && words[words.length - 1] & BigInt(1) << BigInt(63);
  let number = negative ? BigInt(1) : BigInt(0);
  let i = BigInt(0);
  if (!negative) {
    for (const word of words) {
      number += word * (BigInt(1) << BigInt(32) * i++);
    }
  } else {
    for (const word of words) {
      number += ~word * (BigInt(1) << BigInt(32) * i++);
    }
    number *= BigInt(-1);
  }
  return number;
}
var bignumToString;
var bignumToBigInt;
if (!BigIntAvailable) {
  bignumToString = decimalToString;
  bignumToBigInt = bignumToString;
} else {
  bignumToBigInt = (a) => a.byteLength === 8 ? new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0] : decimalToString(a);
  bignumToString = (a) => a.byteLength === 8 ? `${new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0]}` : decimalToString(a);
}
function decimalToString(a) {
  let digits = "";
  const base64 = new Uint32Array(2);
  let base32 = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
  const checks = new Uint32Array((base32 = new Uint16Array(base32).reverse()).buffer);
  let i = -1;
  const n = base32.length - 1;
  do {
    for (base64[0] = base32[i = 0]; i < n; ) {
      base32[i++] = base64[1] = base64[0] / 10;
      base64[0] = (base64[0] - base64[1] * 10 << 16) + base32[i];
    }
    base32[i] = base64[1] = base64[0] / 10;
    base64[0] = base64[0] - base64[1] * 10;
    digits = `${base64[0]}${digits}`;
  } while (checks[0] || checks[1] || checks[2] || checks[3]);
  return digits !== null && digits !== void 0 ? digits : `0`;
}
var BN = class {
  static new(num, isSigned) {
    switch (isSigned) {
      case true:
        return new SignedBigNum(num);
      case false:
        return new UnsignedBigNum(num);
    }
    switch (num.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64ArrayCtor:
        return new SignedBigNum(num);
    }
    if (num.byteLength === 16) {
      return new DecimalBigNum(num);
    }
    return new UnsignedBigNum(num);
  }
  static signed(num) {
    return new SignedBigNum(num);
  }
  static unsigned(num) {
    return new UnsignedBigNum(num);
  }
  static decimal(num) {
    return new DecimalBigNum(num);
  }
  constructor(num, isSigned) {
    return BN.new(num, isSigned);
  }
};

// ../../node_modules/apache-arrow/type.mjs
var _a;
var _b;
var _c;
var _d;
var _e;
var _f;
var _g;
var _h;
var _j;
var _k;
var _l;
var _m;
var _o;
var _p;
var _q;
var _r;
var _s;
var _t;
var _u;
var DataType = class {
  static isNull(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Null;
  }
  static isInt(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Int;
  }
  static isFloat(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Float;
  }
  static isBinary(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Binary;
  }
  static isUtf8(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Utf8;
  }
  static isBool(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Bool;
  }
  static isDecimal(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Decimal;
  }
  static isDate(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Date;
  }
  static isTime(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Time;
  }
  static isTimestamp(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Timestamp;
  }
  static isInterval(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Interval;
  }
  static isList(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.List;
  }
  static isStruct(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Struct;
  }
  static isUnion(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Union;
  }
  static isFixedSizeBinary(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.FixedSizeBinary;
  }
  static isFixedSizeList(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.FixedSizeList;
  }
  static isMap(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Map;
  }
  static isDictionary(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Dictionary;
  }
  static isDenseUnion(x) {
    return DataType.isUnion(x) && x.mode === UnionMode.Dense;
  }
  static isSparseUnion(x) {
    return DataType.isUnion(x) && x.mode === UnionMode.Sparse;
  }
  get typeId() {
    return Type.NONE;
  }
};
_a = Symbol.toStringTag;
DataType[_a] = ((proto) => {
  proto.children = null;
  proto.ArrayType = Array;
  return proto[Symbol.toStringTag] = "DataType";
})(DataType.prototype);
var Null = class extends DataType {
  toString() {
    return `Null`;
  }
  get typeId() {
    return Type.Null;
  }
};
_b = Symbol.toStringTag;
Null[_b] = ((proto) => proto[Symbol.toStringTag] = "Null")(Null.prototype);
var Int_ = class extends DataType {
  constructor(isSigned, bitWidth) {
    super();
    this.isSigned = isSigned;
    this.bitWidth = bitWidth;
  }
  get typeId() {
    return Type.Int;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? BigInt64ArrayCtor : BigUint64ArrayCtor;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? `I` : `Ui`}nt${this.bitWidth}`;
  }
};
_c = Symbol.toStringTag;
Int_[_c] = ((proto) => {
  proto.isSigned = null;
  proto.bitWidth = null;
  return proto[Symbol.toStringTag] = "Int";
})(Int_.prototype);
var Int8 = class extends Int_ {
  constructor() {
    super(true, 8);
  }
  get ArrayType() {
    return Int8Array;
  }
};
var Int16 = class extends Int_ {
  constructor() {
    super(true, 16);
  }
  get ArrayType() {
    return Int16Array;
  }
};
var Int32 = class extends Int_ {
  constructor() {
    super(true, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
};
var Int64 = class extends Int_ {
  constructor() {
    super(true, 64);
  }
  get ArrayType() {
    return BigInt64ArrayCtor;
  }
};
var Uint8 = class extends Int_ {
  constructor() {
    super(false, 8);
  }
  get ArrayType() {
    return Uint8Array;
  }
};
var Uint16 = class extends Int_ {
  constructor() {
    super(false, 16);
  }
  get ArrayType() {
    return Uint16Array;
  }
};
var Uint32 = class extends Int_ {
  constructor() {
    super(false, 32);
  }
  get ArrayType() {
    return Uint32Array;
  }
};
var Uint64 = class extends Int_ {
  constructor() {
    super(false, 64);
  }
  get ArrayType() {
    return BigUint64ArrayCtor;
  }
};
Object.defineProperty(Int8.prototype, "ArrayType", { value: Int8Array });
Object.defineProperty(Int16.prototype, "ArrayType", { value: Int16Array });
Object.defineProperty(Int32.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(Int64.prototype, "ArrayType", { value: BigInt64ArrayCtor });
Object.defineProperty(Uint8.prototype, "ArrayType", { value: Uint8Array });
Object.defineProperty(Uint16.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(Uint32.prototype, "ArrayType", { value: Uint32Array });
Object.defineProperty(Uint64.prototype, "ArrayType", { value: BigUint64ArrayCtor });
var Float = class extends DataType {
  constructor(precision) {
    super();
    this.precision = precision;
  }
  get typeId() {
    return Type.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case Precision.HALF:
        return Uint16Array;
      case Precision.SINGLE:
        return Float32Array;
      case Precision.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
};
_d = Symbol.toStringTag;
Float[_d] = ((proto) => {
  proto.precision = null;
  return proto[Symbol.toStringTag] = "Float";
})(Float.prototype);
var Float16 = class extends Float {
  constructor() {
    super(Precision.HALF);
  }
};
var Float32 = class extends Float {
  constructor() {
    super(Precision.SINGLE);
  }
};
var Float64 = class extends Float {
  constructor() {
    super(Precision.DOUBLE);
  }
};
Object.defineProperty(Float16.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(Float32.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(Float64.prototype, "ArrayType", { value: Float64Array });
var Binary = class extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type.Binary;
  }
  toString() {
    return `Binary`;
  }
};
_e = Symbol.toStringTag;
Binary[_e] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Binary";
})(Binary.prototype);
var Utf8 = class extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type.Utf8;
  }
  toString() {
    return `Utf8`;
  }
};
_f = Symbol.toStringTag;
Utf8[_f] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Utf8";
})(Utf8.prototype);
var Bool = class extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type.Bool;
  }
  toString() {
    return `Bool`;
  }
};
_g = Symbol.toStringTag;
Bool[_g] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Bool";
})(Bool.prototype);
var Decimal = class extends DataType {
  constructor(scale, precision, bitWidth = 128) {
    super();
    this.scale = scale;
    this.precision = precision;
    this.bitWidth = bitWidth;
  }
  get typeId() {
    return Type.Decimal;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`;
  }
};
_h = Symbol.toStringTag;
Decimal[_h] = ((proto) => {
  proto.scale = null;
  proto.precision = null;
  proto.ArrayType = Uint32Array;
  return proto[Symbol.toStringTag] = "Decimal";
})(Decimal.prototype);
var Date_ = class extends DataType {
  constructor(unit) {
    super();
    this.unit = unit;
  }
  get typeId() {
    return Type.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${DateUnit[this.unit]}>`;
  }
};
_j = Symbol.toStringTag;
Date_[_j] = ((proto) => {
  proto.unit = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Date";
})(Date_.prototype);
var Time_ = class extends DataType {
  constructor(unit, bitWidth) {
    super();
    this.unit = unit;
    this.bitWidth = bitWidth;
  }
  get typeId() {
    return Type.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${TimeUnit[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return BigInt64ArrayCtor;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
};
_k = Symbol.toStringTag;
Time_[_k] = ((proto) => {
  proto.unit = null;
  proto.bitWidth = null;
  return proto[Symbol.toStringTag] = "Time";
})(Time_.prototype);
var Timestamp_ = class extends DataType {
  constructor(unit, timezone) {
    super();
    this.unit = unit;
    this.timezone = timezone;
  }
  get typeId() {
    return Type.Timestamp;
  }
  toString() {
    return `Timestamp<${TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ``}>`;
  }
};
_l = Symbol.toStringTag;
Timestamp_[_l] = ((proto) => {
  proto.unit = null;
  proto.timezone = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Timestamp";
})(Timestamp_.prototype);
var Interval_ = class extends DataType {
  constructor(unit) {
    super();
    this.unit = unit;
  }
  get typeId() {
    return Type.Interval;
  }
  toString() {
    return `Interval<${IntervalUnit[this.unit]}>`;
  }
};
_m = Symbol.toStringTag;
Interval_[_m] = ((proto) => {
  proto.unit = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Interval";
})(Interval_.prototype);
var List = class extends DataType {
  constructor(child) {
    super();
    this.children = [child];
  }
  get typeId() {
    return Type.List;
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
};
_o = Symbol.toStringTag;
List[_o] = ((proto) => {
  proto.children = null;
  return proto[Symbol.toStringTag] = "List";
})(List.prototype);
var Struct = class extends DataType {
  constructor(children) {
    super();
    this.children = children;
  }
  get typeId() {
    return Type.Struct;
  }
  toString() {
    return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
  }
};
_p = Symbol.toStringTag;
Struct[_p] = ((proto) => {
  proto.children = null;
  return proto[Symbol.toStringTag] = "Struct";
})(Struct.prototype);
var Union_ = class extends DataType {
  constructor(mode, typeIds, children) {
    super();
    this.mode = mode;
    this.children = children;
    this.typeIds = typeIds = Int32Array.from(typeIds);
    this.typeIdToChildIndex = typeIds.reduce((typeIdToChildIndex, typeId, idx) => (typeIdToChildIndex[typeId] = idx) && typeIdToChildIndex || typeIdToChildIndex, /* @__PURE__ */ Object.create(null));
  }
  get typeId() {
    return Type.Union;
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((x) => `${x.type}`).join(` | `)}>`;
  }
};
_q = Symbol.toStringTag;
Union_[_q] = ((proto) => {
  proto.mode = null;
  proto.typeIds = null;
  proto.children = null;
  proto.typeIdToChildIndex = null;
  proto.ArrayType = Int8Array;
  return proto[Symbol.toStringTag] = "Union";
})(Union_.prototype);
var FixedSizeBinary = class extends DataType {
  constructor(byteWidth) {
    super();
    this.byteWidth = byteWidth;
  }
  get typeId() {
    return Type.FixedSizeBinary;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
};
_r = Symbol.toStringTag;
FixedSizeBinary[_r] = ((proto) => {
  proto.byteWidth = null;
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "FixedSizeBinary";
})(FixedSizeBinary.prototype);
var FixedSizeList = class extends DataType {
  constructor(listSize, child) {
    super();
    this.listSize = listSize;
    this.children = [child];
  }
  get typeId() {
    return Type.FixedSizeList;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
};
_s = Symbol.toStringTag;
FixedSizeList[_s] = ((proto) => {
  proto.children = null;
  proto.listSize = null;
  return proto[Symbol.toStringTag] = "FixedSizeList";
})(FixedSizeList.prototype);
var Map_ = class extends DataType {
  constructor(child, keysSorted = false) {
    super();
    this.children = [child];
    this.keysSorted = keysSorted;
  }
  get typeId() {
    return Type.Map;
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
  }
};
_t = Symbol.toStringTag;
Map_[_t] = ((proto) => {
  proto.children = null;
  proto.keysSorted = null;
  return proto[Symbol.toStringTag] = "Map_";
})(Map_.prototype);
var getId = ((atomicDictionaryId) => () => ++atomicDictionaryId)(-1);
var Dictionary = class extends DataType {
  constructor(dictionary, indices, id, isOrdered) {
    super();
    this.indices = indices;
    this.dictionary = dictionary;
    this.isOrdered = isOrdered || false;
    this.id = id == null ? getId() : typeof id === "number" ? id : id.low;
  }
  get typeId() {
    return Type.Dictionary;
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
};
_u = Symbol.toStringTag;
Dictionary[_u] = ((proto) => {
  proto.id = null;
  proto.indices = null;
  proto.isOrdered = null;
  proto.dictionary = null;
  return proto[Symbol.toStringTag] = "Dictionary";
})(Dictionary.prototype);
function strideForType(type) {
  const t = type;
  switch (type.typeId) {
    case Type.Decimal:
      return type.bitWidth / 32;
    case Type.Timestamp:
      return 2;
    case Type.Date:
      return 1 + t.unit;
    case Type.Interval:
      return 1 + t.unit;
    case Type.FixedSizeList:
      return t.listSize;
    case Type.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}

// ../../node_modules/apache-arrow/visitor.mjs
var Visitor = class {
  visitMany(nodes, ...args) {
    return nodes.map((node, i) => this.visit(node, ...args.map((x) => x[i])));
  }
  visit(...args) {
    return this.getVisitFn(args[0], false).apply(this, args);
  }
  getVisitFn(node, throwIfNotFound = true) {
    return getVisitFn(this, node, throwIfNotFound);
  }
  getVisitFnByTypeId(typeId, throwIfNotFound = true) {
    return getVisitFnByTypeId(this, typeId, throwIfNotFound);
  }
  visitNull(_node, ..._args) {
    return null;
  }
  visitBool(_node, ..._args) {
    return null;
  }
  visitInt(_node, ..._args) {
    return null;
  }
  visitFloat(_node, ..._args) {
    return null;
  }
  visitUtf8(_node, ..._args) {
    return null;
  }
  visitBinary(_node, ..._args) {
    return null;
  }
  visitFixedSizeBinary(_node, ..._args) {
    return null;
  }
  visitDate(_node, ..._args) {
    return null;
  }
  visitTimestamp(_node, ..._args) {
    return null;
  }
  visitTime(_node, ..._args) {
    return null;
  }
  visitDecimal(_node, ..._args) {
    return null;
  }
  visitList(_node, ..._args) {
    return null;
  }
  visitStruct(_node, ..._args) {
    return null;
  }
  visitUnion(_node, ..._args) {
    return null;
  }
  visitDictionary(_node, ..._args) {
    return null;
  }
  visitInterval(_node, ..._args) {
    return null;
  }
  visitFixedSizeList(_node, ..._args) {
    return null;
  }
  visitMap(_node, ..._args) {
    return null;
  }
};
function getVisitFn(visitor, node, throwIfNotFound = true) {
  if (typeof node === "number") {
    return getVisitFnByTypeId(visitor, node, throwIfNotFound);
  }
  if (typeof node === "string" && node in Type) {
    return getVisitFnByTypeId(visitor, Type[node], throwIfNotFound);
  }
  if (node && node instanceof DataType) {
    return getVisitFnByTypeId(visitor, inferDType(node), throwIfNotFound);
  }
  if ((node === null || node === void 0 ? void 0 : node.type) && node.type instanceof DataType) {
    return getVisitFnByTypeId(visitor, inferDType(node.type), throwIfNotFound);
  }
  return getVisitFnByTypeId(visitor, Type.NONE, throwIfNotFound);
}
function getVisitFnByTypeId(visitor, dtype, throwIfNotFound = true) {
  let fn = null;
  switch (dtype) {
    case Type.Null:
      fn = visitor.visitNull;
      break;
    case Type.Bool:
      fn = visitor.visitBool;
      break;
    case Type.Int:
      fn = visitor.visitInt;
      break;
    case Type.Int8:
      fn = visitor.visitInt8 || visitor.visitInt;
      break;
    case Type.Int16:
      fn = visitor.visitInt16 || visitor.visitInt;
      break;
    case Type.Int32:
      fn = visitor.visitInt32 || visitor.visitInt;
      break;
    case Type.Int64:
      fn = visitor.visitInt64 || visitor.visitInt;
      break;
    case Type.Uint8:
      fn = visitor.visitUint8 || visitor.visitInt;
      break;
    case Type.Uint16:
      fn = visitor.visitUint16 || visitor.visitInt;
      break;
    case Type.Uint32:
      fn = visitor.visitUint32 || visitor.visitInt;
      break;
    case Type.Uint64:
      fn = visitor.visitUint64 || visitor.visitInt;
      break;
    case Type.Float:
      fn = visitor.visitFloat;
      break;
    case Type.Float16:
      fn = visitor.visitFloat16 || visitor.visitFloat;
      break;
    case Type.Float32:
      fn = visitor.visitFloat32 || visitor.visitFloat;
      break;
    case Type.Float64:
      fn = visitor.visitFloat64 || visitor.visitFloat;
      break;
    case Type.Utf8:
      fn = visitor.visitUtf8;
      break;
    case Type.Binary:
      fn = visitor.visitBinary;
      break;
    case Type.FixedSizeBinary:
      fn = visitor.visitFixedSizeBinary;
      break;
    case Type.Date:
      fn = visitor.visitDate;
      break;
    case Type.DateDay:
      fn = visitor.visitDateDay || visitor.visitDate;
      break;
    case Type.DateMillisecond:
      fn = visitor.visitDateMillisecond || visitor.visitDate;
      break;
    case Type.Timestamp:
      fn = visitor.visitTimestamp;
      break;
    case Type.TimestampSecond:
      fn = visitor.visitTimestampSecond || visitor.visitTimestamp;
      break;
    case Type.TimestampMillisecond:
      fn = visitor.visitTimestampMillisecond || visitor.visitTimestamp;
      break;
    case Type.TimestampMicrosecond:
      fn = visitor.visitTimestampMicrosecond || visitor.visitTimestamp;
      break;
    case Type.TimestampNanosecond:
      fn = visitor.visitTimestampNanosecond || visitor.visitTimestamp;
      break;
    case Type.Time:
      fn = visitor.visitTime;
      break;
    case Type.TimeSecond:
      fn = visitor.visitTimeSecond || visitor.visitTime;
      break;
    case Type.TimeMillisecond:
      fn = visitor.visitTimeMillisecond || visitor.visitTime;
      break;
    case Type.TimeMicrosecond:
      fn = visitor.visitTimeMicrosecond || visitor.visitTime;
      break;
    case Type.TimeNanosecond:
      fn = visitor.visitTimeNanosecond || visitor.visitTime;
      break;
    case Type.Decimal:
      fn = visitor.visitDecimal;
      break;
    case Type.List:
      fn = visitor.visitList;
      break;
    case Type.Struct:
      fn = visitor.visitStruct;
      break;
    case Type.Union:
      fn = visitor.visitUnion;
      break;
    case Type.DenseUnion:
      fn = visitor.visitDenseUnion || visitor.visitUnion;
      break;
    case Type.SparseUnion:
      fn = visitor.visitSparseUnion || visitor.visitUnion;
      break;
    case Type.Dictionary:
      fn = visitor.visitDictionary;
      break;
    case Type.Interval:
      fn = visitor.visitInterval;
      break;
    case Type.IntervalDayTime:
      fn = visitor.visitIntervalDayTime || visitor.visitInterval;
      break;
    case Type.IntervalYearMonth:
      fn = visitor.visitIntervalYearMonth || visitor.visitInterval;
      break;
    case Type.FixedSizeList:
      fn = visitor.visitFixedSizeList;
      break;
    case Type.Map:
      fn = visitor.visitMap;
      break;
  }
  if (typeof fn === "function")
    return fn;
  if (!throwIfNotFound)
    return () => null;
  throw new Error(`Unrecognized type '${Type[dtype]}'`);
}
function inferDType(type) {
  switch (type.typeId) {
    case Type.Null:
      return Type.Null;
    case Type.Int: {
      const { bitWidth, isSigned } = type;
      switch (bitWidth) {
        case 8:
          return isSigned ? Type.Int8 : Type.Uint8;
        case 16:
          return isSigned ? Type.Int16 : Type.Uint16;
        case 32:
          return isSigned ? Type.Int32 : Type.Uint32;
        case 64:
          return isSigned ? Type.Int64 : Type.Uint64;
      }
      return Type.Int;
    }
    case Type.Float:
      switch (type.precision) {
        case Precision.HALF:
          return Type.Float16;
        case Precision.SINGLE:
          return Type.Float32;
        case Precision.DOUBLE:
          return Type.Float64;
      }
      return Type.Float;
    case Type.Binary:
      return Type.Binary;
    case Type.Utf8:
      return Type.Utf8;
    case Type.Bool:
      return Type.Bool;
    case Type.Decimal:
      return Type.Decimal;
    case Type.Time:
      switch (type.unit) {
        case TimeUnit.SECOND:
          return Type.TimeSecond;
        case TimeUnit.MILLISECOND:
          return Type.TimeMillisecond;
        case TimeUnit.MICROSECOND:
          return Type.TimeMicrosecond;
        case TimeUnit.NANOSECOND:
          return Type.TimeNanosecond;
      }
      return Type.Time;
    case Type.Timestamp:
      switch (type.unit) {
        case TimeUnit.SECOND:
          return Type.TimestampSecond;
        case TimeUnit.MILLISECOND:
          return Type.TimestampMillisecond;
        case TimeUnit.MICROSECOND:
          return Type.TimestampMicrosecond;
        case TimeUnit.NANOSECOND:
          return Type.TimestampNanosecond;
      }
      return Type.Timestamp;
    case Type.Date:
      switch (type.unit) {
        case DateUnit.DAY:
          return Type.DateDay;
        case DateUnit.MILLISECOND:
          return Type.DateMillisecond;
      }
      return Type.Date;
    case Type.Interval:
      switch (type.unit) {
        case IntervalUnit.DAY_TIME:
          return Type.IntervalDayTime;
        case IntervalUnit.YEAR_MONTH:
          return Type.IntervalYearMonth;
      }
      return Type.Interval;
    case Type.Map:
      return Type.Map;
    case Type.List:
      return Type.List;
    case Type.Struct:
      return Type.Struct;
    case Type.Union:
      switch (type.mode) {
        case UnionMode.Dense:
          return Type.DenseUnion;
        case UnionMode.Sparse:
          return Type.SparseUnion;
      }
      return Type.Union;
    case Type.FixedSizeBinary:
      return Type.FixedSizeBinary;
    case Type.FixedSizeList:
      return Type.FixedSizeList;
    case Type.Dictionary:
      return Type.Dictionary;
  }
  throw new Error(`Unrecognized type '${Type[type.typeId]}'`);
}
Visitor.prototype.visitInt8 = null;
Visitor.prototype.visitInt16 = null;
Visitor.prototype.visitInt32 = null;
Visitor.prototype.visitInt64 = null;
Visitor.prototype.visitUint8 = null;
Visitor.prototype.visitUint16 = null;
Visitor.prototype.visitUint32 = null;
Visitor.prototype.visitUint64 = null;
Visitor.prototype.visitFloat16 = null;
Visitor.prototype.visitFloat32 = null;
Visitor.prototype.visitFloat64 = null;
Visitor.prototype.visitDateDay = null;
Visitor.prototype.visitDateMillisecond = null;
Visitor.prototype.visitTimestampSecond = null;
Visitor.prototype.visitTimestampMillisecond = null;
Visitor.prototype.visitTimestampMicrosecond = null;
Visitor.prototype.visitTimestampNanosecond = null;
Visitor.prototype.visitTimeSecond = null;
Visitor.prototype.visitTimeMillisecond = null;
Visitor.prototype.visitTimeMicrosecond = null;
Visitor.prototype.visitTimeNanosecond = null;
Visitor.prototype.visitDenseUnion = null;
Visitor.prototype.visitSparseUnion = null;
Visitor.prototype.visitIntervalDayTime = null;
Visitor.prototype.visitIntervalYearMonth = null;

// ../../node_modules/apache-arrow/util/math.mjs
var math_exports = {};
__export(math_exports, {
  float64ToUint16: () => float64ToUint16,
  uint16ToFloat64: () => uint16ToFloat64
});
var f64 = new Float64Array(1);
var u32 = new Uint32Array(f64.buffer);
function uint16ToFloat64(h) {
  const expo = (h & 31744) >> 10;
  const sigf = (h & 1023) / 1024;
  const sign = Math.pow(-1, (h & 32768) >> 15);
  switch (expo) {
    case 31:
      return sign * (sigf ? Number.NaN : 1 / 0);
    case 0:
      return sign * (sigf ? 6103515625e-14 * sigf : 0);
  }
  return sign * Math.pow(2, expo - 15) * (1 + sigf);
}
function float64ToUint16(d) {
  if (d !== d) {
    return 32256;
  }
  f64[0] = d;
  const sign = (u32[1] & 2147483648) >> 16 & 65535;
  let expo = u32[1] & 2146435072, sigf = 0;
  if (expo >= 1089470464) {
    if (u32[0] > 0) {
      expo = 31744;
    } else {
      expo = (expo & 2080374784) >> 16;
      sigf = (u32[1] & 1048575) >> 10;
    }
  } else if (expo <= 1056964608) {
    sigf = 1048576 + (u32[1] & 1048575);
    sigf = 1048576 + (sigf << (expo >> 20) - 998) >> 21;
    expo = 0;
  } else {
    expo = expo - 1056964608 >> 10;
    sigf = (u32[1] & 1048575) + 512 >> 10;
  }
  return sign | expo | sigf & 65535;
}

// ../../node_modules/apache-arrow/visitor/set.mjs
var SetVisitor = class extends Visitor {
};
function wrapSet(fn) {
  return (data, _1, _2) => {
    if (data.setValid(_1, _2 != null)) {
      return fn(data, _1, _2);
    }
  };
}
var setEpochMsToDays = (data, index, epochMs) => {
  data[index] = Math.trunc(epochMs / 864e5);
};
var setEpochMsToMillisecondsLong = (data, index, epochMs) => {
  data[index] = Math.trunc(epochMs % 4294967296);
  data[index + 1] = Math.trunc(epochMs / 4294967296);
};
var setEpochMsToMicrosecondsLong = (data, index, epochMs) => {
  data[index] = Math.trunc(epochMs * 1e3 % 4294967296);
  data[index + 1] = Math.trunc(epochMs * 1e3 / 4294967296);
};
var setEpochMsToNanosecondsLong = (data, index, epochMs) => {
  data[index] = Math.trunc(epochMs * 1e6 % 4294967296);
  data[index + 1] = Math.trunc(epochMs * 1e6 / 4294967296);
};
var setVariableWidthBytes = (values, valueOffsets, index, value) => {
  if (index + 1 < valueOffsets.length) {
    const { [index]: x, [index + 1]: y } = valueOffsets;
    values.set(value.subarray(0, y - x), x);
  }
};
var setBool = ({ offset, values }, index, val) => {
  const idx = offset + index;
  val ? values[idx >> 3] |= 1 << idx % 8 : values[idx >> 3] &= ~(1 << idx % 8);
};
var setInt = ({ values }, index, value) => {
  values[index] = value;
};
var setFloat = ({ values }, index, value) => {
  values[index] = value;
};
var setFloat16 = ({ values }, index, value) => {
  values[index] = float64ToUint16(value);
};
var setAnyFloat = (data, index, value) => {
  switch (data.type.precision) {
    case Precision.HALF:
      return setFloat16(data, index, value);
    case Precision.SINGLE:
    case Precision.DOUBLE:
      return setFloat(data, index, value);
  }
};
var setDateDay = ({ values }, index, value) => {
  setEpochMsToDays(values, index, value.valueOf());
};
var setDateMillisecond = ({ values }, index, value) => {
  setEpochMsToMillisecondsLong(values, index * 2, value.valueOf());
};
var setFixedSizeBinary = ({ stride, values }, index, value) => {
  values.set(value.subarray(0, stride), stride * index);
};
var setBinary = ({ values, valueOffsets }, index, value) => setVariableWidthBytes(values, valueOffsets, index, value);
var setUtf8 = ({ values, valueOffsets }, index, value) => {
  setVariableWidthBytes(values, valueOffsets, index, encodeUtf8(value));
};
var setDate = (data, index, value) => {
  data.type.unit === DateUnit.DAY ? setDateDay(data, index, value) : setDateMillisecond(data, index, value);
};
var setTimestampSecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value / 1e3);
var setTimestampMillisecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value);
var setTimestampMicrosecond = ({ values }, index, value) => setEpochMsToMicrosecondsLong(values, index * 2, value);
var setTimestampNanosecond = ({ values }, index, value) => setEpochMsToNanosecondsLong(values, index * 2, value);
var setTimestamp = (data, index, value) => {
  switch (data.type.unit) {
    case TimeUnit.SECOND:
      return setTimestampSecond(data, index, value);
    case TimeUnit.MILLISECOND:
      return setTimestampMillisecond(data, index, value);
    case TimeUnit.MICROSECOND:
      return setTimestampMicrosecond(data, index, value);
    case TimeUnit.NANOSECOND:
      return setTimestampNanosecond(data, index, value);
  }
};
var setTimeSecond = ({ values }, index, value) => {
  values[index] = value;
};
var setTimeMillisecond = ({ values }, index, value) => {
  values[index] = value;
};
var setTimeMicrosecond = ({ values }, index, value) => {
  values[index] = value;
};
var setTimeNanosecond = ({ values }, index, value) => {
  values[index] = value;
};
var setTime = (data, index, value) => {
  switch (data.type.unit) {
    case TimeUnit.SECOND:
      return setTimeSecond(data, index, value);
    case TimeUnit.MILLISECOND:
      return setTimeMillisecond(data, index, value);
    case TimeUnit.MICROSECOND:
      return setTimeMicrosecond(data, index, value);
    case TimeUnit.NANOSECOND:
      return setTimeNanosecond(data, index, value);
  }
};
var setDecimal = ({ values, stride }, index, value) => {
  values.set(value.subarray(0, stride), stride * index);
};
var setList = (data, index, value) => {
  const values = data.children[0];
  const valueOffsets = data.valueOffsets;
  const set = instance.getVisitFn(values);
  if (Array.isArray(value)) {
    for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
      set(values, itr++, value[++idx]);
    }
  } else {
    for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
      set(values, itr++, value.get(++idx));
    }
  }
};
var setMap = (data, index, value) => {
  const values = data.children[0];
  const { valueOffsets } = data;
  const set = instance.getVisitFn(values);
  let { [index]: idx, [index + 1]: end } = valueOffsets;
  const entries = value instanceof Map ? value.entries() : Object.entries(value);
  for (const val of entries) {
    set(values, idx, val);
    if (++idx >= end)
      break;
  }
};
var _setStructArrayValue = (o, v) => (set, c, _, i) => c && set(c, o, v[i]);
var _setStructVectorValue = (o, v) => (set, c, _, i) => c && set(c, o, v.get(i));
var _setStructMapValue = (o, v) => (set, c, f, _) => c && set(c, o, v.get(f.name));
var _setStructObjectValue = (o, v) => (set, c, f, _) => c && set(c, o, v[f.name]);
var setStruct = (data, index, value) => {
  const childSetters = data.type.children.map((f) => instance.getVisitFn(f.type));
  const set = value instanceof Map ? _setStructMapValue(index, value) : value instanceof Vector ? _setStructVectorValue(index, value) : Array.isArray(value) ? _setStructArrayValue(index, value) : _setStructObjectValue(index, value);
  data.type.children.forEach((f, i) => set(childSetters[i], data.children[i], f, i));
};
var setUnion = (data, index, value) => {
  data.type.mode === UnionMode.Dense ? setDenseUnion(data, index, value) : setSparseUnion(data, index, value);
};
var setDenseUnion = (data, index, value) => {
  const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
  const child = data.children[childIndex];
  instance.visit(child, data.valueOffsets[index], value);
};
var setSparseUnion = (data, index, value) => {
  const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
  const child = data.children[childIndex];
  instance.visit(child, index, value);
};
var setDictionary = (data, index, value) => {
  var _a5;
  (_a5 = data.dictionary) === null || _a5 === void 0 ? void 0 : _a5.set(data.values[index], value);
};
var setIntervalValue = (data, index, value) => {
  data.type.unit === IntervalUnit.DAY_TIME ? setIntervalDayTime(data, index, value) : setIntervalYearMonth(data, index, value);
};
var setIntervalDayTime = ({ values }, index, value) => {
  values.set(value.subarray(0, 2), 2 * index);
};
var setIntervalYearMonth = ({ values }, index, value) => {
  values[index] = value[0] * 12 + value[1] % 12;
};
var setFixedSizeList = (data, index, value) => {
  const { stride } = data;
  const child = data.children[0];
  const set = instance.getVisitFn(child);
  if (Array.isArray(value)) {
    for (let idx = -1, offset = index * stride; ++idx < stride; ) {
      set(child, offset + idx, value[idx]);
    }
  } else {
    for (let idx = -1, offset = index * stride; ++idx < stride; ) {
      set(child, offset + idx, value.get(idx));
    }
  }
};
SetVisitor.prototype.visitBool = wrapSet(setBool);
SetVisitor.prototype.visitInt = wrapSet(setInt);
SetVisitor.prototype.visitInt8 = wrapSet(setInt);
SetVisitor.prototype.visitInt16 = wrapSet(setInt);
SetVisitor.prototype.visitInt32 = wrapSet(setInt);
SetVisitor.prototype.visitInt64 = wrapSet(setInt);
SetVisitor.prototype.visitUint8 = wrapSet(setInt);
SetVisitor.prototype.visitUint16 = wrapSet(setInt);
SetVisitor.prototype.visitUint32 = wrapSet(setInt);
SetVisitor.prototype.visitUint64 = wrapSet(setInt);
SetVisitor.prototype.visitFloat = wrapSet(setAnyFloat);
SetVisitor.prototype.visitFloat16 = wrapSet(setFloat16);
SetVisitor.prototype.visitFloat32 = wrapSet(setFloat);
SetVisitor.prototype.visitFloat64 = wrapSet(setFloat);
SetVisitor.prototype.visitUtf8 = wrapSet(setUtf8);
SetVisitor.prototype.visitBinary = wrapSet(setBinary);
SetVisitor.prototype.visitFixedSizeBinary = wrapSet(setFixedSizeBinary);
SetVisitor.prototype.visitDate = wrapSet(setDate);
SetVisitor.prototype.visitDateDay = wrapSet(setDateDay);
SetVisitor.prototype.visitDateMillisecond = wrapSet(setDateMillisecond);
SetVisitor.prototype.visitTimestamp = wrapSet(setTimestamp);
SetVisitor.prototype.visitTimestampSecond = wrapSet(setTimestampSecond);
SetVisitor.prototype.visitTimestampMillisecond = wrapSet(setTimestampMillisecond);
SetVisitor.prototype.visitTimestampMicrosecond = wrapSet(setTimestampMicrosecond);
SetVisitor.prototype.visitTimestampNanosecond = wrapSet(setTimestampNanosecond);
SetVisitor.prototype.visitTime = wrapSet(setTime);
SetVisitor.prototype.visitTimeSecond = wrapSet(setTimeSecond);
SetVisitor.prototype.visitTimeMillisecond = wrapSet(setTimeMillisecond);
SetVisitor.prototype.visitTimeMicrosecond = wrapSet(setTimeMicrosecond);
SetVisitor.prototype.visitTimeNanosecond = wrapSet(setTimeNanosecond);
SetVisitor.prototype.visitDecimal = wrapSet(setDecimal);
SetVisitor.prototype.visitList = wrapSet(setList);
SetVisitor.prototype.visitStruct = wrapSet(setStruct);
SetVisitor.prototype.visitUnion = wrapSet(setUnion);
SetVisitor.prototype.visitDenseUnion = wrapSet(setDenseUnion);
SetVisitor.prototype.visitSparseUnion = wrapSet(setSparseUnion);
SetVisitor.prototype.visitDictionary = wrapSet(setDictionary);
SetVisitor.prototype.visitInterval = wrapSet(setIntervalValue);
SetVisitor.prototype.visitIntervalDayTime = wrapSet(setIntervalDayTime);
SetVisitor.prototype.visitIntervalYearMonth = wrapSet(setIntervalYearMonth);
SetVisitor.prototype.visitFixedSizeList = wrapSet(setFixedSizeList);
SetVisitor.prototype.visitMap = wrapSet(setMap);
var instance = new SetVisitor();

// ../../node_modules/apache-arrow/row/struct.mjs
var kParent = Symbol.for("parent");
var kRowIndex = Symbol.for("rowIndex");
var StructRow = class {
  constructor(parent, rowIndex) {
    this[kParent] = parent;
    this[kRowIndex] = rowIndex;
    return new Proxy(this, new StructRowProxyHandler());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const i = this[kRowIndex];
    const parent = this[kParent];
    const keys = parent.type.children;
    const json = {};
    for (let j = -1, n = keys.length; ++j < n; ) {
      json[keys[j].name] = instance2.visit(parent.children[j], i);
    }
    return json;
  }
  toString() {
    return `{${[...this].map(([key, val]) => `${valueToString(key)}: ${valueToString(val)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new StructRowIterator(this[kParent], this[kRowIndex]);
  }
};
var StructRowIterator = class {
  constructor(data, rowIndex) {
    this.childIndex = 0;
    this.children = data.children;
    this.rowIndex = rowIndex;
    this.childFields = data.type.children;
    this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const i = this.childIndex;
    if (i < this.numChildren) {
      this.childIndex = i + 1;
      return {
        done: false,
        value: [
          this.childFields[i].name,
          instance2.visit(this.children[i], this.rowIndex)
        ]
      };
    }
    return { done: true, value: null };
  }
};
Object.defineProperties(StructRow.prototype, {
  [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" },
  [kParent]: { writable: true, enumerable: false, configurable: false, value: null },
  [kRowIndex]: { writable: true, enumerable: false, configurable: false, value: -1 }
});
var StructRowProxyHandler = class {
  isExtensible() {
    return false;
  }
  deleteProperty() {
    return false;
  }
  preventExtensions() {
    return true;
  }
  ownKeys(row) {
    return row[kParent].type.children.map((f) => f.name);
  }
  has(row, key) {
    return row[kParent].type.children.findIndex((f) => f.name === key) !== -1;
  }
  getOwnPropertyDescriptor(row, key) {
    if (row[kParent].type.children.findIndex((f) => f.name === key) !== -1) {
      return { writable: true, enumerable: true, configurable: true };
    }
    return;
  }
  get(row, key) {
    if (Reflect.has(row, key)) {
      return row[key];
    }
    const idx = row[kParent].type.children.findIndex((f) => f.name === key);
    if (idx !== -1) {
      const val = instance2.visit(row[kParent].children[idx], row[kRowIndex]);
      Reflect.set(row, key, val);
      return val;
    }
  }
  set(row, key, val) {
    const idx = row[kParent].type.children.findIndex((f) => f.name === key);
    if (idx !== -1) {
      instance.visit(row[kParent].children[idx], row[kRowIndex], val);
      return Reflect.set(row, key, val);
    } else if (Reflect.has(row, key) || typeof key === "symbol") {
      return Reflect.set(row, key, val);
    }
    return false;
  }
};

// ../../node_modules/apache-arrow/visitor/get.mjs
var GetVisitor = class extends Visitor {
};
function wrapGet(fn) {
  return (data, _1) => data.getValid(_1) ? fn(data, _1) : null;
}
var epochDaysToMs = (data, index) => 864e5 * data[index];
var epochMillisecondsLongToMs = (data, index) => 4294967296 * data[index + 1] + (data[index] >>> 0);
var epochMicrosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e3) + (data[index] >>> 0) / 1e3;
var epochNanosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e6) + (data[index] >>> 0) / 1e6;
var epochMillisecondsToDate = (epochMs) => new Date(epochMs);
var epochDaysToDate = (data, index) => epochMillisecondsToDate(epochDaysToMs(data, index));
var epochMillisecondsLongToDate = (data, index) => epochMillisecondsToDate(epochMillisecondsLongToMs(data, index));
var getNull = (_data, _index) => null;
var getVariableWidthBytes = (values, valueOffsets, index) => {
  if (index + 1 >= valueOffsets.length) {
    return null;
  }
  const x = valueOffsets[index];
  const y = valueOffsets[index + 1];
  return values.subarray(x, y);
};
var getBool = ({ offset, values }, index) => {
  const idx = offset + index;
  const byte = values[idx >> 3];
  return (byte & 1 << idx % 8) !== 0;
};
var getDateDay = ({ values }, index) => epochDaysToDate(values, index);
var getDateMillisecond = ({ values }, index) => epochMillisecondsLongToDate(values, index * 2);
var getNumeric = ({ stride, values }, index) => values[stride * index];
var getFloat16 = ({ stride, values }, index) => uint16ToFloat64(values[stride * index]);
var getBigInts = ({ values }, index) => values[index];
var getFixedSizeBinary = ({ stride, values }, index) => values.subarray(stride * index, stride * (index + 1));
var getBinary = ({ values, valueOffsets }, index) => getVariableWidthBytes(values, valueOffsets, index);
var getUtf8 = ({ values, valueOffsets }, index) => {
  const bytes = getVariableWidthBytes(values, valueOffsets, index);
  return bytes !== null ? decodeUtf8(bytes) : null;
};
var getInt = ({ values }, index) => values[index];
var getFloat = ({ type, values }, index) => type.precision !== Precision.HALF ? values[index] : uint16ToFloat64(values[index]);
var getDate = (data, index) => data.type.unit === DateUnit.DAY ? getDateDay(data, index) : getDateMillisecond(data, index);
var getTimestampSecond = ({ values }, index) => 1e3 * epochMillisecondsLongToMs(values, index * 2);
var getTimestampMillisecond = ({ values }, index) => epochMillisecondsLongToMs(values, index * 2);
var getTimestampMicrosecond = ({ values }, index) => epochMicrosecondsLongToMs(values, index * 2);
var getTimestampNanosecond = ({ values }, index) => epochNanosecondsLongToMs(values, index * 2);
var getTimestamp = (data, index) => {
  switch (data.type.unit) {
    case TimeUnit.SECOND:
      return getTimestampSecond(data, index);
    case TimeUnit.MILLISECOND:
      return getTimestampMillisecond(data, index);
    case TimeUnit.MICROSECOND:
      return getTimestampMicrosecond(data, index);
    case TimeUnit.NANOSECOND:
      return getTimestampNanosecond(data, index);
  }
};
var getTimeSecond = ({ values }, index) => values[index];
var getTimeMillisecond = ({ values }, index) => values[index];
var getTimeMicrosecond = ({ values }, index) => values[index];
var getTimeNanosecond = ({ values }, index) => values[index];
var getTime = (data, index) => {
  switch (data.type.unit) {
    case TimeUnit.SECOND:
      return getTimeSecond(data, index);
    case TimeUnit.MILLISECOND:
      return getTimeMillisecond(data, index);
    case TimeUnit.MICROSECOND:
      return getTimeMicrosecond(data, index);
    case TimeUnit.NANOSECOND:
      return getTimeNanosecond(data, index);
  }
};
var getDecimal = ({ values, stride }, index) => BN.decimal(values.subarray(stride * index, stride * (index + 1)));
var getList = (data, index) => {
  const { valueOffsets, stride, children } = data;
  const { [index * stride]: begin, [index * stride + 1]: end } = valueOffsets;
  const child = children[0];
  const slice = child.slice(begin, end - begin);
  return new Vector([slice]);
};
var getMap = (data, index) => {
  const { valueOffsets, children } = data;
  const { [index]: begin, [index + 1]: end } = valueOffsets;
  const child = children[0];
  return new MapRow(child.slice(begin, end - begin));
};
var getStruct = (data, index) => {
  return new StructRow(data, index);
};
var getUnion = (data, index) => {
  return data.type.mode === UnionMode.Dense ? getDenseUnion(data, index) : getSparseUnion(data, index);
};
var getDenseUnion = (data, index) => {
  const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
  const child = data.children[childIndex];
  return instance2.visit(child, data.valueOffsets[index]);
};
var getSparseUnion = (data, index) => {
  const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
  const child = data.children[childIndex];
  return instance2.visit(child, index);
};
var getDictionary = (data, index) => {
  var _a5;
  return (_a5 = data.dictionary) === null || _a5 === void 0 ? void 0 : _a5.get(data.values[index]);
};
var getInterval = (data, index) => data.type.unit === IntervalUnit.DAY_TIME ? getIntervalDayTime(data, index) : getIntervalYearMonth(data, index);
var getIntervalDayTime = ({ values }, index) => values.subarray(2 * index, 2 * (index + 1));
var getIntervalYearMonth = ({ values }, index) => {
  const interval = values[index];
  const int32s = new Int32Array(2);
  int32s[0] = Math.trunc(interval / 12);
  int32s[1] = Math.trunc(interval % 12);
  return int32s;
};
var getFixedSizeList = (data, index) => {
  const { stride, children } = data;
  const child = children[0];
  const slice = child.slice(index * stride, stride);
  return new Vector([slice]);
};
GetVisitor.prototype.visitNull = wrapGet(getNull);
GetVisitor.prototype.visitBool = wrapGet(getBool);
GetVisitor.prototype.visitInt = wrapGet(getInt);
GetVisitor.prototype.visitInt8 = wrapGet(getNumeric);
GetVisitor.prototype.visitInt16 = wrapGet(getNumeric);
GetVisitor.prototype.visitInt32 = wrapGet(getNumeric);
GetVisitor.prototype.visitInt64 = wrapGet(getBigInts);
GetVisitor.prototype.visitUint8 = wrapGet(getNumeric);
GetVisitor.prototype.visitUint16 = wrapGet(getNumeric);
GetVisitor.prototype.visitUint32 = wrapGet(getNumeric);
GetVisitor.prototype.visitUint64 = wrapGet(getBigInts);
GetVisitor.prototype.visitFloat = wrapGet(getFloat);
GetVisitor.prototype.visitFloat16 = wrapGet(getFloat16);
GetVisitor.prototype.visitFloat32 = wrapGet(getNumeric);
GetVisitor.prototype.visitFloat64 = wrapGet(getNumeric);
GetVisitor.prototype.visitUtf8 = wrapGet(getUtf8);
GetVisitor.prototype.visitBinary = wrapGet(getBinary);
GetVisitor.prototype.visitFixedSizeBinary = wrapGet(getFixedSizeBinary);
GetVisitor.prototype.visitDate = wrapGet(getDate);
GetVisitor.prototype.visitDateDay = wrapGet(getDateDay);
GetVisitor.prototype.visitDateMillisecond = wrapGet(getDateMillisecond);
GetVisitor.prototype.visitTimestamp = wrapGet(getTimestamp);
GetVisitor.prototype.visitTimestampSecond = wrapGet(getTimestampSecond);
GetVisitor.prototype.visitTimestampMillisecond = wrapGet(getTimestampMillisecond);
GetVisitor.prototype.visitTimestampMicrosecond = wrapGet(getTimestampMicrosecond);
GetVisitor.prototype.visitTimestampNanosecond = wrapGet(getTimestampNanosecond);
GetVisitor.prototype.visitTime = wrapGet(getTime);
GetVisitor.prototype.visitTimeSecond = wrapGet(getTimeSecond);
GetVisitor.prototype.visitTimeMillisecond = wrapGet(getTimeMillisecond);
GetVisitor.prototype.visitTimeMicrosecond = wrapGet(getTimeMicrosecond);
GetVisitor.prototype.visitTimeNanosecond = wrapGet(getTimeNanosecond);
GetVisitor.prototype.visitDecimal = wrapGet(getDecimal);
GetVisitor.prototype.visitList = wrapGet(getList);
GetVisitor.prototype.visitStruct = wrapGet(getStruct);
GetVisitor.prototype.visitUnion = wrapGet(getUnion);
GetVisitor.prototype.visitDenseUnion = wrapGet(getDenseUnion);
GetVisitor.prototype.visitSparseUnion = wrapGet(getSparseUnion);
GetVisitor.prototype.visitDictionary = wrapGet(getDictionary);
GetVisitor.prototype.visitInterval = wrapGet(getInterval);
GetVisitor.prototype.visitIntervalDayTime = wrapGet(getIntervalDayTime);
GetVisitor.prototype.visitIntervalYearMonth = wrapGet(getIntervalYearMonth);
GetVisitor.prototype.visitFixedSizeList = wrapGet(getFixedSizeList);
GetVisitor.prototype.visitMap = wrapGet(getMap);
var instance2 = new GetVisitor();

// ../../node_modules/apache-arrow/row/map.mjs
var kKeys = Symbol.for("keys");
var kVals = Symbol.for("vals");
var MapRow = class {
  constructor(slice) {
    this[kKeys] = new Vector([slice.children[0]]).memoize();
    this[kVals] = slice.children[1];
    return new Proxy(this, new MapRowProxyHandler());
  }
  [Symbol.iterator]() {
    return new MapRowIterator(this[kKeys], this[kVals]);
  }
  get size() {
    return this[kKeys].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const keys = this[kKeys];
    const vals = this[kVals];
    const json = {};
    for (let i = -1, n = keys.length; ++i < n; ) {
      json[keys.get(i)] = instance2.visit(vals, i);
    }
    return json;
  }
  toString() {
    return `{${[...this].map(([key, val]) => `${valueToString(key)}: ${valueToString(val)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
};
var MapRowIterator = class {
  constructor(keys, vals) {
    this.keys = keys;
    this.vals = vals;
    this.keyIndex = 0;
    this.numKeys = keys.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const i = this.keyIndex;
    if (i === this.numKeys) {
      return { done: true, value: null };
    }
    this.keyIndex++;
    return {
      done: false,
      value: [
        this.keys.get(i),
        instance2.visit(this.vals, i)
      ]
    };
  }
};
var MapRowProxyHandler = class {
  isExtensible() {
    return false;
  }
  deleteProperty() {
    return false;
  }
  preventExtensions() {
    return true;
  }
  ownKeys(row) {
    return row[kKeys].toArray().map(String);
  }
  has(row, key) {
    return row[kKeys].includes(key);
  }
  getOwnPropertyDescriptor(row, key) {
    const idx = row[kKeys].indexOf(key);
    if (idx !== -1) {
      return { writable: true, enumerable: true, configurable: true };
    }
    return;
  }
  get(row, key) {
    if (Reflect.has(row, key)) {
      return row[key];
    }
    const idx = row[kKeys].indexOf(key);
    if (idx !== -1) {
      const val = instance2.visit(Reflect.get(row, kVals), idx);
      Reflect.set(row, key, val);
      return val;
    }
  }
  set(row, key, val) {
    const idx = row[kKeys].indexOf(key);
    if (idx !== -1) {
      instance.visit(Reflect.get(row, kVals), idx, val);
      return Reflect.set(row, key, val);
    } else if (Reflect.has(row, key)) {
      return Reflect.set(row, key, val);
    }
    return false;
  }
};
Object.defineProperties(MapRow.prototype, {
  [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" },
  [kKeys]: { writable: true, enumerable: false, configurable: false, value: null },
  [kVals]: { writable: true, enumerable: false, configurable: false, value: null }
});

// ../../node_modules/apache-arrow/util/vector.mjs
function clampIndex(source, index, then) {
  const length = source.length;
  const adjust = index > -1 ? index : length + index % length;
  return then ? then(source, adjust) : adjust;
}
var tmp;
function clampRange(source, begin, end, then) {
  const { length: len = 0 } = source;
  let lhs = typeof begin !== "number" ? 0 : begin;
  let rhs = typeof end !== "number" ? len : end;
  lhs < 0 && (lhs = (lhs % len + len) % len);
  rhs < 0 && (rhs = (rhs % len + len) % len);
  rhs < lhs && (tmp = lhs, lhs = rhs, rhs = tmp);
  rhs > len && (rhs = len);
  return then ? then(source, lhs, rhs) : [lhs, rhs];
}
var isNaNFast = (value) => value !== value;
function createElementComparator(search) {
  const typeofSearch = typeof search;
  if (typeofSearch !== "object" || search === null) {
    if (isNaNFast(search)) {
      return isNaNFast;
    }
    return (value) => value === search;
  }
  if (search instanceof Date) {
    const valueOfSearch = search.valueOf();
    return (value) => value instanceof Date ? value.valueOf() === valueOfSearch : false;
  }
  if (ArrayBuffer.isView(search)) {
    return (value) => value ? compareArrayLike(search, value) : false;
  }
  if (search instanceof Map) {
    return createMapComparator(search);
  }
  if (Array.isArray(search)) {
    return createArrayLikeComparator(search);
  }
  if (search instanceof Vector) {
    return createVectorComparator(search);
  }
  return createObjectComparator(search, true);
}
function createArrayLikeComparator(lhs) {
  const comparators = [];
  for (let i = -1, n = lhs.length; ++i < n; ) {
    comparators[i] = createElementComparator(lhs[i]);
  }
  return createSubElementsComparator(comparators);
}
function createMapComparator(lhs) {
  let i = -1;
  const comparators = [];
  for (const v of lhs.values())
    comparators[++i] = createElementComparator(v);
  return createSubElementsComparator(comparators);
}
function createVectorComparator(lhs) {
  const comparators = [];
  for (let i = -1, n = lhs.length; ++i < n; ) {
    comparators[i] = createElementComparator(lhs.get(i));
  }
  return createSubElementsComparator(comparators);
}
function createObjectComparator(lhs, allowEmpty = false) {
  const keys = Object.keys(lhs);
  if (!allowEmpty && keys.length === 0) {
    return () => false;
  }
  const comparators = [];
  for (let i = -1, n = keys.length; ++i < n; ) {
    comparators[i] = createElementComparator(lhs[keys[i]]);
  }
  return createSubElementsComparator(comparators, keys);
}
function createSubElementsComparator(comparators, keys) {
  return (rhs) => {
    if (!rhs || typeof rhs !== "object") {
      return false;
    }
    switch (rhs.constructor) {
      case Array:
        return compareArray(comparators, rhs);
      case Map:
        return compareObject(comparators, rhs, rhs.keys());
      case MapRow:
      case StructRow:
      case Object:
      case void 0:
        return compareObject(comparators, rhs, keys || Object.keys(rhs));
    }
    return rhs instanceof Vector ? compareVector(comparators, rhs) : false;
  };
}
function compareArray(comparators, arr) {
  const n = comparators.length;
  if (arr.length !== n) {
    return false;
  }
  for (let i = -1; ++i < n; ) {
    if (!comparators[i](arr[i])) {
      return false;
    }
  }
  return true;
}
function compareVector(comparators, vec) {
  const n = comparators.length;
  if (vec.length !== n) {
    return false;
  }
  for (let i = -1; ++i < n; ) {
    if (!comparators[i](vec.get(i))) {
      return false;
    }
  }
  return true;
}
function compareObject(comparators, obj, keys) {
  const lKeyItr = keys[Symbol.iterator]();
  const rKeyItr = obj instanceof Map ? obj.keys() : Object.keys(obj)[Symbol.iterator]();
  const rValItr = obj instanceof Map ? obj.values() : Object.values(obj)[Symbol.iterator]();
  let i = 0;
  const n = comparators.length;
  let rVal = rValItr.next();
  let lKey = lKeyItr.next();
  let rKey = rKeyItr.next();
  for (; i < n && !lKey.done && !rKey.done && !rVal.done; ++i, lKey = lKeyItr.next(), rKey = rKeyItr.next(), rVal = rValItr.next()) {
    if (lKey.value !== rKey.value || !comparators[i](rVal.value)) {
      break;
    }
  }
  if (i === n && lKey.done && rKey.done && rVal.done) {
    return true;
  }
  lKeyItr.return && lKeyItr.return();
  rKeyItr.return && rKeyItr.return();
  rValItr.return && rValItr.return();
  return false;
}

// ../../node_modules/apache-arrow/util/bit.mjs
var bit_exports = {};
__export(bit_exports, {
  BitIterator: () => BitIterator,
  getBit: () => getBit,
  getBool: () => getBool2,
  packBools: () => packBools,
  popcnt_array: () => popcnt_array,
  popcnt_bit_range: () => popcnt_bit_range,
  popcnt_uint32: () => popcnt_uint32,
  setBool: () => setBool2,
  truncateBitmap: () => truncateBitmap
});
function getBool2(_data, _index, byte, bit) {
  return (byte & 1 << bit) !== 0;
}
function getBit(_data, _index, byte, bit) {
  return (byte & 1 << bit) >> bit;
}
function setBool2(bytes, index, value) {
  return value ? !!(bytes[index >> 3] |= 1 << index % 8) || true : !(bytes[index >> 3] &= ~(1 << index % 8)) && false;
}
function truncateBitmap(offset, length, bitmap) {
  const alignedSize = bitmap.byteLength + 7 & ~7;
  if (offset > 0 || bitmap.byteLength < alignedSize) {
    const bytes = new Uint8Array(alignedSize);
    bytes.set(offset % 8 === 0 ? bitmap.subarray(offset >> 3) : packBools(new BitIterator(bitmap, offset, length, null, getBool2)).subarray(0, alignedSize));
    return bytes;
  }
  return bitmap;
}
function packBools(values) {
  const xs = [];
  let i = 0, bit = 0, byte = 0;
  for (const value of values) {
    value && (byte |= 1 << bit);
    if (++bit === 8) {
      xs[i++] = byte;
      byte = bit = 0;
    }
  }
  if (i === 0 || bit > 0) {
    xs[i++] = byte;
  }
  const b = new Uint8Array(xs.length + 7 & ~7);
  b.set(xs);
  return b;
}
var BitIterator = class {
  constructor(bytes, begin, length, context, get) {
    this.bytes = bytes;
    this.length = length;
    this.context = context;
    this.get = get;
    this.bit = begin % 8;
    this.byteIndex = begin >> 3;
    this.byte = bytes[this.byteIndex++];
    this.index = 0;
  }
  next() {
    if (this.index < this.length) {
      if (this.bit === 8) {
        this.bit = 0;
        this.byte = this.bytes[this.byteIndex++];
      }
      return {
        value: this.get(this.context, this.index++, this.byte, this.bit++)
      };
    }
    return { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
};
function popcnt_bit_range(data, lhs, rhs) {
  if (rhs - lhs <= 0) {
    return 0;
  }
  if (rhs - lhs < 8) {
    let sum2 = 0;
    for (const bit of new BitIterator(data, lhs, rhs - lhs, data, getBit)) {
      sum2 += bit;
    }
    return sum2;
  }
  const rhsInside = rhs >> 3 << 3;
  const lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - lhs % 8);
  return popcnt_bit_range(data, lhs, lhsInside) + popcnt_bit_range(data, rhsInside, rhs) + popcnt_array(data, lhsInside >> 3, rhsInside - lhsInside >> 3);
}
function popcnt_array(arr, byteOffset, byteLength) {
  let cnt = 0, pos = Math.trunc(byteOffset);
  const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  const len = byteLength === void 0 ? arr.byteLength : pos + byteLength;
  while (len - pos >= 4) {
    cnt += popcnt_uint32(view.getUint32(pos));
    pos += 4;
  }
  while (len - pos >= 2) {
    cnt += popcnt_uint32(view.getUint16(pos));
    pos += 2;
  }
  while (len - pos >= 1) {
    cnt += popcnt_uint32(view.getUint8(pos));
    pos += 1;
  }
  return cnt;
}
function popcnt_uint32(uint32) {
  let i = Math.trunc(uint32);
  i = i - (i >>> 1 & 1431655765);
  i = (i & 858993459) + (i >>> 2 & 858993459);
  return (i + (i >>> 4) & 252645135) * 16843009 >>> 24;
}

// ../../node_modules/apache-arrow/data.mjs
var kUnknownNullCount = -1;
var Data = class {
  constructor(type, offset, length, nullCount, buffers, children = [], dictionary) {
    this.type = type;
    this.children = children;
    this.dictionary = dictionary;
    this.offset = Math.floor(Math.max(offset || 0, 0));
    this.length = Math.floor(Math.max(length || 0, 0));
    this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
    let buffer;
    if (buffers instanceof Data) {
      this.stride = buffers.stride;
      this.values = buffers.values;
      this.typeIds = buffers.typeIds;
      this.nullBitmap = buffers.nullBitmap;
      this.valueOffsets = buffers.valueOffsets;
    } else {
      this.stride = strideForType(type);
      if (buffers) {
        (buffer = buffers[0]) && (this.valueOffsets = buffer);
        (buffer = buffers[1]) && (this.values = buffer);
        (buffer = buffers[2]) && (this.nullBitmap = buffer);
        (buffer = buffers[3]) && (this.typeIds = buffer);
      }
    }
    this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0;
  }
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get byteLength() {
    let byteLength = 0;
    const { valueOffsets, values, nullBitmap, typeIds } = this;
    valueOffsets && (byteLength += valueOffsets.byteLength);
    values && (byteLength += values.byteLength);
    nullBitmap && (byteLength += nullBitmap.byteLength);
    typeIds && (byteLength += typeIds.byteLength);
    return this.children.reduce((byteLength2, child) => byteLength2 + child.byteLength, byteLength);
  }
  get nullCount() {
    let nullCount = this._nullCount;
    let nullBitmap;
    if (nullCount <= kUnknownNullCount && (nullBitmap = this.nullBitmap)) {
      this._nullCount = nullCount = this.length - popcnt_bit_range(nullBitmap, this.offset, this.offset + this.length);
    }
    return nullCount;
  }
  getValid(index) {
    if (this.nullable && this.nullCount > 0) {
      const pos = this.offset + index;
      const val = this.nullBitmap[pos >> 3];
      return (val & 1 << pos % 8) !== 0;
    }
    return true;
  }
  setValid(index, value) {
    if (!this.nullable) {
      return value;
    }
    if (!this.nullBitmap || this.nullBitmap.byteLength <= index >> 3) {
      const { nullBitmap: nullBitmap2 } = this._changeLengthAndBackfillNullBitmap(this.length);
      Object.assign(this, { nullBitmap: nullBitmap2, _nullCount: 0 });
    }
    const { nullBitmap, offset } = this;
    const pos = offset + index >> 3;
    const bit = (offset + index) % 8;
    const val = nullBitmap[pos] >> bit & 1;
    value ? val === 0 && (nullBitmap[pos] |= 1 << bit, this._nullCount = this.nullCount + 1) : val === 1 && (nullBitmap[pos] &= ~(1 << bit), this._nullCount = this.nullCount - 1);
    return value;
  }
  clone(type = this.type, offset = this.offset, length = this.length, nullCount = this._nullCount, buffers = this, children = this.children) {
    return new Data(type, offset, length, nullCount, buffers, children, this.dictionary);
  }
  slice(offset, length) {
    const { stride, typeId, children } = this;
    const nullCount = +(this._nullCount === 0) - 1;
    const childStride = typeId === 16 ? stride : 1;
    const buffers = this._sliceBuffers(offset, length, stride, typeId);
    return this.clone(
      this.type,
      this.offset + offset,
      length,
      nullCount,
      buffers,
      children.length === 0 || this.valueOffsets ? children : this._sliceChildren(children, childStride * offset, childStride * length)
    );
  }
  _changeLengthAndBackfillNullBitmap(newLength) {
    if (this.typeId === Type.Null) {
      return this.clone(this.type, 0, newLength, 0);
    }
    const { length, nullCount } = this;
    const bitmap = new Uint8Array((newLength + 63 & ~63) >> 3).fill(255, 0, length >> 3);
    bitmap[length >> 3] = (1 << length - (length & ~7)) - 1;
    if (nullCount > 0) {
      bitmap.set(truncateBitmap(this.offset, length, this.nullBitmap), 0);
    }
    const buffers = this.buffers;
    buffers[BufferType.VALIDITY] = bitmap;
    return this.clone(this.type, 0, newLength, nullCount + (newLength - length), buffers);
  }
  _sliceBuffers(offset, length, stride, typeId) {
    let arr;
    const { buffers } = this;
    (arr = buffers[BufferType.TYPE]) && (buffers[BufferType.TYPE] = arr.subarray(offset, offset + length));
    (arr = buffers[BufferType.OFFSET]) && (buffers[BufferType.OFFSET] = arr.subarray(offset, offset + length + 1)) || (arr = buffers[BufferType.DATA]) && (buffers[BufferType.DATA] = typeId === 6 ? arr : arr.subarray(stride * offset, stride * (offset + length)));
    return buffers;
  }
  _sliceChildren(children, offset, length) {
    return children.map((child) => child.slice(offset, length));
  }
};
Data.prototype.children = Object.freeze([]);
var MakeDataVisitor = class extends Visitor {
  visit(props) {
    return this.getVisitFn(props["type"]).call(this, props);
  }
  visitNull(props) {
    const { ["type"]: type, ["offset"]: offset = 0, ["length"]: length = 0 } = props;
    return new Data(type, offset, length, 0);
  }
  visitBool(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length >> 3, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitInt(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitFloat(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitUtf8(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const data = toUint8Array(props["data"]);
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const valueOffsets = toInt32Array(props["valueOffsets"]);
    const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [valueOffsets, data, nullBitmap]);
  }
  visitBinary(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const data = toUint8Array(props["data"]);
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const valueOffsets = toInt32Array(props["valueOffsets"]);
    const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [valueOffsets, data, nullBitmap]);
  }
  visitFixedSizeBinary(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length / strideForType(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitDate(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length / strideForType(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitTimestamp(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length / strideForType(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitTime(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length / strideForType(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitDecimal(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length / strideForType(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitList(props) {
    const { ["type"]: type, ["offset"]: offset = 0, ["child"]: child } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const valueOffsets = toInt32Array(props["valueOffsets"]);
    const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [valueOffsets, void 0, nullBitmap], [child]);
  }
  visitStruct(props) {
    const { ["type"]: type, ["offset"]: offset = 0, ["children"]: children = [] } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const { length = children.reduce((len, { length: length2 }) => Math.max(len, length2), 0), nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, void 0, nullBitmap], children);
  }
  visitUnion(props) {
    const { ["type"]: type, ["offset"]: offset = 0, ["children"]: children = [] } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const typeIds = toArrayBufferView(type.ArrayType, props["typeIds"]);
    const { ["length"]: length = typeIds.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    if (DataType.isSparseUnion(type)) {
      return new Data(type, offset, length, nullCount, [void 0, void 0, nullBitmap, typeIds], children);
    }
    const valueOffsets = toInt32Array(props["valueOffsets"]);
    return new Data(type, offset, length, nullCount, [valueOffsets, void 0, nullBitmap, typeIds], children);
  }
  visitDictionary(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.indices.ArrayType, props["data"]);
    const { ["dictionary"]: dictionary = new Vector([new MakeDataVisitor().visit({ type: type.dictionary })]) } = props;
    const { ["length"]: length = data.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap], [], dictionary);
  }
  visitInterval(props) {
    const { ["type"]: type, ["offset"]: offset = 0 } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const data = toArrayBufferView(type.ArrayType, props["data"]);
    const { ["length"]: length = data.length / strideForType(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, data, nullBitmap]);
  }
  visitFixedSizeList(props) {
    const { ["type"]: type, ["offset"]: offset = 0, ["child"]: child = new MakeDataVisitor().visit({ type: type.valueType }) } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const { ["length"]: length = child.length / strideForType(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [void 0, void 0, nullBitmap], [child]);
  }
  visitMap(props) {
    const { ["type"]: type, ["offset"]: offset = 0, ["child"]: child = new MakeDataVisitor().visit({ type: type.childType }) } = props;
    const nullBitmap = toUint8Array(props["nullBitmap"]);
    const valueOffsets = toInt32Array(props["valueOffsets"]);
    const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
    return new Data(type, offset, length, nullCount, [valueOffsets, void 0, nullBitmap], [child]);
  }
};
function makeData(props) {
  return new MakeDataVisitor().visit(props);
}

// ../../node_modules/apache-arrow/util/chunk.mjs
var ChunkedIterator = class {
  constructor(numChunks = 0, getChunkIterator) {
    this.numChunks = numChunks;
    this.getChunkIterator = getChunkIterator;
    this.chunkIndex = 0;
    this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    while (this.chunkIndex < this.numChunks) {
      const next = this.chunkIterator.next();
      if (!next.done) {
        return next;
      }
      if (++this.chunkIndex < this.numChunks) {
        this.chunkIterator = this.getChunkIterator(this.chunkIndex);
      }
    }
    return { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
};
function computeChunkNullCounts(chunks) {
  return chunks.reduce((nullCount, chunk) => nullCount + chunk.nullCount, 0);
}
function computeChunkOffsets(chunks) {
  return chunks.reduce((offsets, chunk, index) => {
    offsets[index + 1] = offsets[index] + chunk.length;
    return offsets;
  }, new Uint32Array(chunks.length + 1));
}
function sliceChunks(chunks, offsets, begin, end) {
  const slices = [];
  for (let i = -1, n = chunks.length; ++i < n; ) {
    const chunk = chunks[i];
    const offset = offsets[i];
    const { length } = chunk;
    if (offset >= end) {
      break;
    }
    if (begin >= offset + length) {
      continue;
    }
    if (offset >= begin && offset + length <= end) {
      slices.push(chunk);
      continue;
    }
    const from = Math.max(0, begin - offset);
    const to = Math.min(end - offset, length);
    slices.push(chunk.slice(from, to - from));
  }
  if (slices.length === 0) {
    slices.push(chunks[0].slice(0, 0));
  }
  return slices;
}
function binarySearch(chunks, offsets, idx, fn) {
  let lhs = 0, mid = 0, rhs = offsets.length - 1;
  do {
    if (lhs >= rhs - 1) {
      return idx < offsets[rhs] ? fn(chunks, lhs, idx - offsets[lhs]) : null;
    }
    mid = lhs + Math.trunc((rhs - lhs) * 0.5);
    idx < offsets[mid] ? rhs = mid : lhs = mid;
  } while (lhs < rhs);
}
function isChunkedValid(data, index) {
  return data.getValid(index);
}
function wrapChunkedCall1(fn) {
  function chunkedFn(chunks, i, j) {
    return fn(chunks[i], j);
  }
  return function(index) {
    const data = this.data;
    return binarySearch(data, this._offsets, index, chunkedFn);
  };
}
function wrapChunkedCall2(fn) {
  let _2;
  function chunkedFn(chunks, i, j) {
    return fn(chunks[i], j, _2);
  }
  return function(index, value) {
    const data = this.data;
    _2 = value;
    const result = binarySearch(data, this._offsets, index, chunkedFn);
    _2 = void 0;
    return result;
  };
}
function wrapChunkedIndexOf(indexOf) {
  let _1;
  function chunkedIndexOf(data, chunkIndex, fromIndex) {
    let begin = fromIndex, index = 0, total = 0;
    for (let i = chunkIndex - 1, n = data.length; ++i < n; ) {
      const chunk = data[i];
      if (~(index = indexOf(chunk, _1, begin))) {
        return total + index;
      }
      begin = 0;
      total += chunk.length;
    }
    return -1;
  }
  return function(element, offset) {
    _1 = element;
    const data = this.data;
    const result = typeof offset !== "number" ? chunkedIndexOf(data, 0, 0) : binarySearch(data, this._offsets, offset, chunkedIndexOf);
    _1 = void 0;
    return result;
  };
}

// ../../node_modules/apache-arrow/visitor/indexof.mjs
var IndexOfVisitor = class extends Visitor {
};
function nullIndexOf(data, searchElement) {
  return searchElement === null && data.length > 0 ? 0 : -1;
}
function indexOfNull(data, fromIndex) {
  const { nullBitmap } = data;
  if (!nullBitmap || data.nullCount <= 0) {
    return -1;
  }
  let i = 0;
  for (const isValid of new BitIterator(nullBitmap, data.offset + (fromIndex || 0), data.length, nullBitmap, getBool2)) {
    if (!isValid) {
      return i;
    }
    ++i;
  }
  return -1;
}
function indexOfValue(data, searchElement, fromIndex) {
  if (searchElement === void 0) {
    return -1;
  }
  if (searchElement === null) {
    return indexOfNull(data, fromIndex);
  }
  const get = instance2.getVisitFn(data);
  const compare = createElementComparator(searchElement);
  for (let i = (fromIndex || 0) - 1, n = data.length; ++i < n; ) {
    if (compare(get(data, i))) {
      return i;
    }
  }
  return -1;
}
function indexOfUnion(data, searchElement, fromIndex) {
  const get = instance2.getVisitFn(data);
  const compare = createElementComparator(searchElement);
  for (let i = (fromIndex || 0) - 1, n = data.length; ++i < n; ) {
    if (compare(get(data, i))) {
      return i;
    }
  }
  return -1;
}
IndexOfVisitor.prototype.visitNull = nullIndexOf;
IndexOfVisitor.prototype.visitBool = indexOfValue;
IndexOfVisitor.prototype.visitInt = indexOfValue;
IndexOfVisitor.prototype.visitInt8 = indexOfValue;
IndexOfVisitor.prototype.visitInt16 = indexOfValue;
IndexOfVisitor.prototype.visitInt32 = indexOfValue;
IndexOfVisitor.prototype.visitInt64 = indexOfValue;
IndexOfVisitor.prototype.visitUint8 = indexOfValue;
IndexOfVisitor.prototype.visitUint16 = indexOfValue;
IndexOfVisitor.prototype.visitUint32 = indexOfValue;
IndexOfVisitor.prototype.visitUint64 = indexOfValue;
IndexOfVisitor.prototype.visitFloat = indexOfValue;
IndexOfVisitor.prototype.visitFloat16 = indexOfValue;
IndexOfVisitor.prototype.visitFloat32 = indexOfValue;
IndexOfVisitor.prototype.visitFloat64 = indexOfValue;
IndexOfVisitor.prototype.visitUtf8 = indexOfValue;
IndexOfVisitor.prototype.visitBinary = indexOfValue;
IndexOfVisitor.prototype.visitFixedSizeBinary = indexOfValue;
IndexOfVisitor.prototype.visitDate = indexOfValue;
IndexOfVisitor.prototype.visitDateDay = indexOfValue;
IndexOfVisitor.prototype.visitDateMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestamp = indexOfValue;
IndexOfVisitor.prototype.visitTimestampSecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampMicrosecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampNanosecond = indexOfValue;
IndexOfVisitor.prototype.visitTime = indexOfValue;
IndexOfVisitor.prototype.visitTimeSecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeMicrosecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeNanosecond = indexOfValue;
IndexOfVisitor.prototype.visitDecimal = indexOfValue;
IndexOfVisitor.prototype.visitList = indexOfValue;
IndexOfVisitor.prototype.visitStruct = indexOfValue;
IndexOfVisitor.prototype.visitUnion = indexOfValue;
IndexOfVisitor.prototype.visitDenseUnion = indexOfUnion;
IndexOfVisitor.prototype.visitSparseUnion = indexOfUnion;
IndexOfVisitor.prototype.visitDictionary = indexOfValue;
IndexOfVisitor.prototype.visitInterval = indexOfValue;
IndexOfVisitor.prototype.visitIntervalDayTime = indexOfValue;
IndexOfVisitor.prototype.visitIntervalYearMonth = indexOfValue;
IndexOfVisitor.prototype.visitFixedSizeList = indexOfValue;
IndexOfVisitor.prototype.visitMap = indexOfValue;
var instance3 = new IndexOfVisitor();

// ../../node_modules/apache-arrow/visitor/iterator.mjs
var IteratorVisitor = class extends Visitor {
};
function vectorIterator(vector) {
  const { type } = vector;
  if (vector.nullCount === 0 && vector.stride === 1 && (type.typeId === Type.Timestamp || type instanceof Int_ && type.bitWidth !== 64 || type instanceof Time_ && type.bitWidth !== 64 || type instanceof Float && type.precision !== Precision.HALF)) {
    return new ChunkedIterator(vector.data.length, (chunkIndex) => {
      const data = vector.data[chunkIndex];
      return data.values.subarray(0, data.length)[Symbol.iterator]();
    });
  }
  let offset = 0;
  return new ChunkedIterator(vector.data.length, (chunkIndex) => {
    const data = vector.data[chunkIndex];
    const length = data.length;
    const inner = vector.slice(offset, offset + length);
    offset += length;
    return new VectorIterator(inner);
  });
}
var VectorIterator = class {
  constructor(vector) {
    this.vector = vector;
    this.index = 0;
  }
  next() {
    if (this.index < this.vector.length) {
      return {
        value: this.vector.get(this.index++)
      };
    }
    return { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
};
IteratorVisitor.prototype.visitNull = vectorIterator;
IteratorVisitor.prototype.visitBool = vectorIterator;
IteratorVisitor.prototype.visitInt = vectorIterator;
IteratorVisitor.prototype.visitInt8 = vectorIterator;
IteratorVisitor.prototype.visitInt16 = vectorIterator;
IteratorVisitor.prototype.visitInt32 = vectorIterator;
IteratorVisitor.prototype.visitInt64 = vectorIterator;
IteratorVisitor.prototype.visitUint8 = vectorIterator;
IteratorVisitor.prototype.visitUint16 = vectorIterator;
IteratorVisitor.prototype.visitUint32 = vectorIterator;
IteratorVisitor.prototype.visitUint64 = vectorIterator;
IteratorVisitor.prototype.visitFloat = vectorIterator;
IteratorVisitor.prototype.visitFloat16 = vectorIterator;
IteratorVisitor.prototype.visitFloat32 = vectorIterator;
IteratorVisitor.prototype.visitFloat64 = vectorIterator;
IteratorVisitor.prototype.visitUtf8 = vectorIterator;
IteratorVisitor.prototype.visitBinary = vectorIterator;
IteratorVisitor.prototype.visitFixedSizeBinary = vectorIterator;
IteratorVisitor.prototype.visitDate = vectorIterator;
IteratorVisitor.prototype.visitDateDay = vectorIterator;
IteratorVisitor.prototype.visitDateMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimestamp = vectorIterator;
IteratorVisitor.prototype.visitTimestampSecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampMicrosecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampNanosecond = vectorIterator;
IteratorVisitor.prototype.visitTime = vectorIterator;
IteratorVisitor.prototype.visitTimeSecond = vectorIterator;
IteratorVisitor.prototype.visitTimeMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimeMicrosecond = vectorIterator;
IteratorVisitor.prototype.visitTimeNanosecond = vectorIterator;
IteratorVisitor.prototype.visitDecimal = vectorIterator;
IteratorVisitor.prototype.visitList = vectorIterator;
IteratorVisitor.prototype.visitStruct = vectorIterator;
IteratorVisitor.prototype.visitUnion = vectorIterator;
IteratorVisitor.prototype.visitDenseUnion = vectorIterator;
IteratorVisitor.prototype.visitSparseUnion = vectorIterator;
IteratorVisitor.prototype.visitDictionary = vectorIterator;
IteratorVisitor.prototype.visitInterval = vectorIterator;
IteratorVisitor.prototype.visitIntervalDayTime = vectorIterator;
IteratorVisitor.prototype.visitIntervalYearMonth = vectorIterator;
IteratorVisitor.prototype.visitFixedSizeList = vectorIterator;
IteratorVisitor.prototype.visitMap = vectorIterator;
var instance4 = new IteratorVisitor();

// ../../node_modules/apache-arrow/visitor/bytelength.mjs
var sum = (x, y) => x + y;
var GetByteLengthVisitor = class extends Visitor {
  visitNull(____, _) {
    return 0;
  }
  visitInt(data, _) {
    return data.type.bitWidth / 8;
  }
  visitFloat(data, _) {
    return data.type.ArrayType.BYTES_PER_ELEMENT;
  }
  visitBool(____, _) {
    return 1 / 8;
  }
  visitDecimal(data, _) {
    return data.type.bitWidth / 8;
  }
  visitDate(data, _) {
    return (data.type.unit + 1) * 4;
  }
  visitTime(data, _) {
    return data.type.bitWidth / 8;
  }
  visitTimestamp(data, _) {
    return data.type.unit === TimeUnit.SECOND ? 4 : 8;
  }
  visitInterval(data, _) {
    return (data.type.unit + 1) * 4;
  }
  visitStruct(data, i) {
    return data.children.reduce((total, child) => total + instance5.visit(child, i), 0);
  }
  visitFixedSizeBinary(data, _) {
    return data.type.byteWidth;
  }
  visitMap(data, i) {
    return 8 + data.children.reduce((total, child) => total + instance5.visit(child, i), 0);
  }
  visitDictionary(data, i) {
    var _a5;
    return data.type.indices.bitWidth / 8 + (((_a5 = data.dictionary) === null || _a5 === void 0 ? void 0 : _a5.getByteLength(data.values[i])) || 0);
  }
};
var getUtf8ByteLength = ({ valueOffsets }, index) => {
  return 8 + (valueOffsets[index + 1] - valueOffsets[index]);
};
var getBinaryByteLength = ({ valueOffsets }, index) => {
  return 8 + (valueOffsets[index + 1] - valueOffsets[index]);
};
var getListByteLength = ({ valueOffsets, stride, children }, index) => {
  const child = children[0];
  const { [index * stride]: start } = valueOffsets;
  const { [index * stride + 1]: end } = valueOffsets;
  const visit = instance5.getVisitFn(child.type);
  const slice = child.slice(start, end - start);
  let size = 8;
  for (let idx = -1, len = end - start; ++idx < len; ) {
    size += visit(slice, idx);
  }
  return size;
};
var getFixedSizeListByteLength = ({ stride, children }, index) => {
  const child = children[0];
  const slice = child.slice(index * stride, stride);
  const visit = instance5.getVisitFn(child.type);
  let size = 0;
  for (let idx = -1, len = slice.length; ++idx < len; ) {
    size += visit(slice, idx);
  }
  return size;
};
var getUnionByteLength = (data, index) => {
  return data.type.mode === UnionMode.Dense ? getDenseUnionByteLength(data, index) : getSparseUnionByteLength(data, index);
};
var getDenseUnionByteLength = ({ type, children, typeIds, valueOffsets }, index) => {
  const childIndex = type.typeIdToChildIndex[typeIds[index]];
  return 8 + instance5.visit(children[childIndex], valueOffsets[index]);
};
var getSparseUnionByteLength = ({ children }, index) => {
  return 4 + instance5.visitMany(children, children.map(() => index)).reduce(sum, 0);
};
GetByteLengthVisitor.prototype.visitUtf8 = getUtf8ByteLength;
GetByteLengthVisitor.prototype.visitBinary = getBinaryByteLength;
GetByteLengthVisitor.prototype.visitList = getListByteLength;
GetByteLengthVisitor.prototype.visitFixedSizeList = getFixedSizeListByteLength;
GetByteLengthVisitor.prototype.visitUnion = getUnionByteLength;
GetByteLengthVisitor.prototype.visitDenseUnion = getDenseUnionByteLength;
GetByteLengthVisitor.prototype.visitSparseUnion = getSparseUnionByteLength;
var instance5 = new GetByteLengthVisitor();

// ../../node_modules/apache-arrow/vector.mjs
var _a2;
var visitorsByTypeId = {};
var vectorPrototypesByTypeId = {};
var Vector = class {
  constructor(input) {
    var _b2, _c2, _d2;
    const data = input[0] instanceof Vector ? input.flatMap((x) => x.data) : input;
    if (data.length === 0 || data.some((x) => !(x instanceof Data))) {
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    }
    const type = (_b2 = data[0]) === null || _b2 === void 0 ? void 0 : _b2.type;
    switch (data.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get, set, indexOf, byteLength } = visitorsByTypeId[type.typeId];
        const unchunkedData = data[0];
        this.isValid = (index) => isChunkedValid(unchunkedData, index);
        this.get = (index) => get(unchunkedData, index);
        this.set = (index, value) => set(unchunkedData, index, value);
        this.indexOf = (index) => indexOf(unchunkedData, index);
        this.getByteLength = (index) => byteLength(unchunkedData, index);
        this._offsets = [0, unchunkedData.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, vectorPrototypesByTypeId[type.typeId]);
        this._offsets = computeChunkOffsets(data);
        break;
    }
    this.data = data;
    this.type = type;
    this.stride = strideForType(type);
    this.numChildren = (_d2 = (_c2 = type.children) === null || _c2 === void 0 ? void 0 : _c2.length) !== null && _d2 !== void 0 ? _d2 : 0;
    this.length = this._offsets[this._offsets.length - 1];
  }
  get byteLength() {
    if (this._byteLength === -1) {
      this._byteLength = this.data.reduce((byteLength, data) => byteLength + data.byteLength, 0);
    }
    return this._byteLength;
  }
  get nullCount() {
    if (this._nullCount === -1) {
      this._nullCount = computeChunkNullCounts(this.data);
    }
    return this._nullCount;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  get VectorName() {
    return `${Type[this.type.typeId]}Vector`;
  }
  isValid(index) {
    return false;
  }
  get(index) {
    return null;
  }
  set(index, value) {
    return;
  }
  indexOf(element, offset) {
    return -1;
  }
  includes(element, offset) {
    return this.indexOf(element, offset) > 0;
  }
  getByteLength(index) {
    return 0;
  }
  [Symbol.iterator]() {
    return instance4.visit(this);
  }
  concat(...others) {
    return new Vector(this.data.concat(others.flatMap((x) => x.data).flat(Number.POSITIVE_INFINITY)));
  }
  slice(begin, end) {
    return new Vector(clampRange(this, begin, end, ({ data, _offsets }, begin2, end2) => sliceChunks(data, _offsets, begin2, end2)));
  }
  toJSON() {
    return [...this];
  }
  toArray() {
    const { type, data, length, stride, ArrayType } = this;
    switch (type.typeId) {
      case Type.Int:
      case Type.Float:
      case Type.Decimal:
      case Type.Time:
      case Type.Timestamp:
        switch (data.length) {
          case 0:
            return new ArrayType();
          case 1:
            return data[0].values.subarray(0, length * stride);
          default:
            return data.reduce((memo, { values, length: chunk_length }) => {
              memo.array.set(values.subarray(0, chunk_length * stride), memo.offset);
              memo.offset += chunk_length * stride;
              return memo;
            }, { array: new ArrayType(length * stride), offset: 0 }).array;
        }
    }
    return [...this];
  }
  toString() {
    return `[${[...this].join(",")}]`;
  }
  getChild(name) {
    var _b2;
    return this.getChildAt((_b2 = this.type.children) === null || _b2 === void 0 ? void 0 : _b2.findIndex((f) => f.name === name));
  }
  getChildAt(index) {
    if (index > -1 && index < this.numChildren) {
      return new Vector(this.data.map(({ children }) => children[index]));
    }
    return null;
  }
  get isMemoized() {
    if (DataType.isDictionary(this.type)) {
      return this.data[0].dictionary.isMemoized;
    }
    return false;
  }
  memoize() {
    if (DataType.isDictionary(this.type)) {
      const dictionary = new MemoizedVector(this.data[0].dictionary);
      const newData = this.data.map((data) => {
        const cloned = data.clone();
        cloned.dictionary = dictionary;
        return cloned;
      });
      return new Vector(newData);
    }
    return new MemoizedVector(this);
  }
  unmemoize() {
    if (DataType.isDictionary(this.type) && this.isMemoized) {
      const dictionary = this.data[0].dictionary.unmemoize();
      const newData = this.data.map((data) => {
        const newData2 = data.clone();
        newData2.dictionary = dictionary;
        return newData2;
      });
      return new Vector(newData);
    }
    return this;
  }
};
_a2 = Symbol.toStringTag;
Vector[_a2] = ((proto) => {
  proto.type = DataType.prototype;
  proto.data = [];
  proto.length = 0;
  proto.stride = 1;
  proto.numChildren = 0;
  proto._nullCount = -1;
  proto._byteLength = -1;
  proto._offsets = new Uint32Array([0]);
  proto[Symbol.isConcatSpreadable] = true;
  const typeIds = Object.keys(Type).map((T) => Type[T]).filter((T) => typeof T === "number" && T !== Type.NONE);
  for (const typeId of typeIds) {
    const get = instance2.getVisitFnByTypeId(typeId);
    const set = instance.getVisitFnByTypeId(typeId);
    const indexOf = instance3.getVisitFnByTypeId(typeId);
    const byteLength = instance5.getVisitFnByTypeId(typeId);
    visitorsByTypeId[typeId] = { get, set, indexOf, byteLength };
    vectorPrototypesByTypeId[typeId] = Object.create(proto, {
      ["isValid"]: { value: wrapChunkedCall1(isChunkedValid) },
      ["get"]: { value: wrapChunkedCall1(instance2.getVisitFnByTypeId(typeId)) },
      ["set"]: { value: wrapChunkedCall2(instance.getVisitFnByTypeId(typeId)) },
      ["indexOf"]: { value: wrapChunkedIndexOf(instance3.getVisitFnByTypeId(typeId)) },
      ["getByteLength"]: { value: wrapChunkedCall1(instance5.getVisitFnByTypeId(typeId)) }
    });
  }
  return "Vector";
})(Vector.prototype);
var MemoizedVector = class extends Vector {
  constructor(vector) {
    super(vector.data);
    const get = this.get;
    const set = this.set;
    const slice = this.slice;
    const cache = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(index) {
        const cachedValue = cache[index];
        if (cachedValue !== void 0) {
          return cachedValue;
        }
        const value = get.call(this, index);
        cache[index] = value;
        return value;
      }
    });
    Object.defineProperty(this, "set", {
      value(index, value) {
        set.call(this, index, value);
        cache[index] = value;
      }
    });
    Object.defineProperty(this, "slice", {
      value: (begin, end) => new MemoizedVector(slice.call(this, begin, end))
    });
    Object.defineProperty(this, "isMemoized", { value: true });
    Object.defineProperty(this, "unmemoize", {
      value: () => new Vector(this.data)
    });
    Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
};

// ../../node_modules/apache-arrow/builder/valid.mjs
function createIsValidFunction(nullValues) {
  if (!nullValues || nullValues.length <= 0) {
    return function isValid(value) {
      return true;
    };
  }
  let fnBody = "";
  const noNaNs = nullValues.filter((x) => x === x);
  if (noNaNs.length > 0) {
    fnBody = `
    switch (x) {${noNaNs.map((x) => `
        case ${valueToCase(x)}:`).join("")}
            return false;
    }`;
  }
  if (nullValues.length !== noNaNs.length) {
    fnBody = `if (x !== x) return false;
${fnBody}`;
  }
  return new Function(`x`, `${fnBody}
return true;`);
}
function valueToCase(x) {
  if (typeof x !== "bigint") {
    return valueToString(x);
  } else if (BigIntAvailable) {
    return `${valueToString(x)}n`;
  }
  return `"${valueToString(x)}"`;
}

// ../../node_modules/apache-arrow/builder/buffer.mjs
var roundLengthUpToNearest64Bytes = (len, BPE) => (Math.ceil(len) * BPE + 63 & ~63 || 64) / BPE;
var sliceOrExtendArray = (arr, len = 0) => arr.length >= len ? arr.subarray(0, len) : memcpy(new arr.constructor(len), arr, 0);
var BufferBuilder = class {
  constructor(buffer, stride = 1) {
    this.buffer = buffer;
    this.stride = stride;
    this.BYTES_PER_ELEMENT = buffer.BYTES_PER_ELEMENT;
    this.ArrayType = buffer.constructor;
    this._resize(this.length = Math.ceil(buffer.length / stride));
  }
  get byteLength() {
    return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT;
  }
  get reservedLength() {
    return this.buffer.length / this.stride;
  }
  get reservedByteLength() {
    return this.buffer.byteLength;
  }
  set(index, value) {
    return this;
  }
  append(value) {
    return this.set(this.length, value);
  }
  reserve(extra) {
    if (extra > 0) {
      this.length += extra;
      const stride = this.stride;
      const length = this.length * stride;
      const reserved = this.buffer.length;
      if (length >= reserved) {
        this._resize(reserved === 0 ? roundLengthUpToNearest64Bytes(length * 1, this.BYTES_PER_ELEMENT) : roundLengthUpToNearest64Bytes(length * 2, this.BYTES_PER_ELEMENT));
      }
    }
    return this;
  }
  flush(length = this.length) {
    length = roundLengthUpToNearest64Bytes(length * this.stride, this.BYTES_PER_ELEMENT);
    const array = sliceOrExtendArray(this.buffer, length);
    this.clear();
    return array;
  }
  clear() {
    this.length = 0;
    this._resize(0);
    return this;
  }
  _resize(newLength) {
    return this.buffer = memcpy(new this.ArrayType(newLength), this.buffer);
  }
};
BufferBuilder.prototype.offset = 0;
var DataBufferBuilder = class extends BufferBuilder {
  last() {
    return this.get(this.length - 1);
  }
  get(index) {
    return this.buffer[index];
  }
  set(index, value) {
    this.reserve(index - this.length + 1);
    this.buffer[index * this.stride] = value;
    return this;
  }
};
var BitmapBufferBuilder = class extends DataBufferBuilder {
  constructor(data = new Uint8Array(0)) {
    super(data, 1 / 8);
    this.numValid = 0;
  }
  get numInvalid() {
    return this.length - this.numValid;
  }
  get(idx) {
    return this.buffer[idx >> 3] >> idx % 8 & 1;
  }
  set(idx, val) {
    const { buffer } = this.reserve(idx - this.length + 1);
    const byte = idx >> 3, bit = idx % 8, cur = buffer[byte] >> bit & 1;
    val ? cur === 0 && (buffer[byte] |= 1 << bit, ++this.numValid) : cur === 1 && (buffer[byte] &= ~(1 << bit), --this.numValid);
    return this;
  }
  clear() {
    this.numValid = 0;
    return super.clear();
  }
};
var OffsetsBufferBuilder = class extends DataBufferBuilder {
  constructor(data = new Int32Array(1)) {
    super(data, 1);
  }
  append(value) {
    return this.set(this.length - 1, value);
  }
  set(index, value) {
    const offset = this.length - 1;
    const buffer = this.reserve(index - offset + 1).buffer;
    if (offset < index++) {
      buffer.fill(buffer[offset], offset, index);
    }
    buffer[index] = buffer[index - 1] + value;
    return this;
  }
  flush(length = this.length - 1) {
    if (length > this.length) {
      this.set(length - 1, 0);
    }
    return super.flush(length + 1);
  }
};

// ../../node_modules/apache-arrow/builder.mjs
var Builder = class {
  constructor({ "type": type, "nullValues": nulls }) {
    this.length = 0;
    this.finished = false;
    this.type = type;
    this.children = [];
    this.nullValues = nulls;
    this.stride = strideForType(type);
    this._nulls = new BitmapBufferBuilder();
    if (nulls && nulls.length > 0) {
      this._isValid = createIsValidFunction(nulls);
    }
  }
  static throughNode(options) {
    throw new Error(`"throughNode" not available in this environment`);
  }
  static throughDOM(options) {
    throw new Error(`"throughDOM" not available in this environment`);
  }
  toVector() {
    return new Vector([this.flush()]);
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get nullCount() {
    return this._nulls.numInvalid;
  }
  get numChildren() {
    return this.children.length;
  }
  get byteLength() {
    let size = 0;
    const { _offsets, _values, _nulls, _typeIds, children } = this;
    _offsets && (size += _offsets.byteLength);
    _values && (size += _values.byteLength);
    _nulls && (size += _nulls.byteLength);
    _typeIds && (size += _typeIds.byteLength);
    return children.reduce((size2, child) => size2 + child.byteLength, size);
  }
  get reservedLength() {
    return this._nulls.reservedLength;
  }
  get reservedByteLength() {
    let size = 0;
    this._offsets && (size += this._offsets.reservedByteLength);
    this._values && (size += this._values.reservedByteLength);
    this._nulls && (size += this._nulls.reservedByteLength);
    this._typeIds && (size += this._typeIds.reservedByteLength);
    return this.children.reduce((size2, child) => size2 + child.reservedByteLength, size);
  }
  get valueOffsets() {
    return this._offsets ? this._offsets.buffer : null;
  }
  get values() {
    return this._values ? this._values.buffer : null;
  }
  get nullBitmap() {
    return this._nulls ? this._nulls.buffer : null;
  }
  get typeIds() {
    return this._typeIds ? this._typeIds.buffer : null;
  }
  append(value) {
    return this.set(this.length, value);
  }
  isValid(value) {
    return this._isValid(value);
  }
  set(index, value) {
    if (this.setValid(index, this.isValid(value))) {
      this.setValue(index, value);
    }
    return this;
  }
  setValue(index, value) {
    this._setValue(this, index, value);
  }
  setValid(index, valid) {
    this.length = this._nulls.set(index, +valid).length;
    return valid;
  }
  addChild(child, name = `${this.numChildren}`) {
    throw new Error(`Cannot append children to non-nested type "${this.type}"`);
  }
  getChildAt(index) {
    return this.children[index] || null;
  }
  flush() {
    let data;
    let typeIds;
    let nullBitmap;
    let valueOffsets;
    const { type, length, nullCount, _typeIds, _offsets, _values, _nulls } = this;
    if (typeIds = _typeIds === null || _typeIds === void 0 ? void 0 : _typeIds.flush(length)) {
      valueOffsets = _offsets === null || _offsets === void 0 ? void 0 : _offsets.flush(length);
    } else if (valueOffsets = _offsets === null || _offsets === void 0 ? void 0 : _offsets.flush(length)) {
      data = _values === null || _values === void 0 ? void 0 : _values.flush(_offsets.last());
    } else {
      data = _values === null || _values === void 0 ? void 0 : _values.flush(length);
    }
    if (nullCount > 0) {
      nullBitmap = _nulls === null || _nulls === void 0 ? void 0 : _nulls.flush(length);
    }
    const children = this.children.map((child) => child.flush());
    this.clear();
    return makeData({
      type,
      length,
      nullCount,
      children,
      "child": children[0],
      data,
      typeIds,
      nullBitmap,
      valueOffsets
    });
  }
  finish() {
    this.finished = true;
    for (const child of this.children)
      child.finish();
    return this;
  }
  clear() {
    var _a5, _b2, _c2, _d2;
    this.length = 0;
    (_a5 = this._nulls) === null || _a5 === void 0 ? void 0 : _a5.clear();
    (_b2 = this._values) === null || _b2 === void 0 ? void 0 : _b2.clear();
    (_c2 = this._offsets) === null || _c2 === void 0 ? void 0 : _c2.clear();
    (_d2 = this._typeIds) === null || _d2 === void 0 ? void 0 : _d2.clear();
    for (const child of this.children)
      child.clear();
    return this;
  }
};
Builder.prototype.length = 1;
Builder.prototype.stride = 1;
Builder.prototype.children = null;
Builder.prototype.finished = false;
Builder.prototype.nullValues = null;
Builder.prototype._isValid = () => true;
var FixedWidthBuilder = class extends Builder {
  constructor(opts) {
    super(opts);
    this._values = new DataBufferBuilder(new this.ArrayType(0), this.stride);
  }
  setValue(index, value) {
    const values = this._values;
    values.reserve(index - values.length + 1);
    return super.setValue(index, value);
  }
};
var VariableWidthBuilder = class extends Builder {
  constructor(opts) {
    super(opts);
    this._pendingLength = 0;
    this._offsets = new OffsetsBufferBuilder();
  }
  setValue(index, value) {
    const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
    const current = pending.get(index);
    current && (this._pendingLength -= current.length);
    this._pendingLength += value instanceof MapRow ? value[kKeys].length : value.length;
    pending.set(index, value);
  }
  setValid(index, isValid) {
    if (!super.setValid(index, isValid)) {
      (this._pending || (this._pending = /* @__PURE__ */ new Map())).set(index, void 0);
      return false;
    }
    return true;
  }
  clear() {
    this._pendingLength = 0;
    this._pending = void 0;
    return super.clear();
  }
  flush() {
    this._flush();
    return super.flush();
  }
  finish() {
    this._flush();
    return super.finish();
  }
  _flush() {
    const pending = this._pending;
    const pendingLength = this._pendingLength;
    this._pendingLength = 0;
    this._pending = void 0;
    if (pending && pending.size > 0) {
      this._flushPending(pending, pendingLength);
    }
    return this;
  }
};

// ../../node_modules/apache-arrow/fb/block.mjs
var Block = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static sizeOf() {
    return 24;
  }
  static createBlock(builder, offset, metaDataLength, bodyLength) {
    builder.prep(8, 24);
    builder.writeInt64(bodyLength);
    builder.pad(4);
    builder.writeInt32(metaDataLength);
    builder.writeInt64(offset);
    return builder.offset();
  }
};

// ../../node_modules/flatbuffers/mjs/constants.js
var SIZEOF_SHORT = 2;
var SIZEOF_INT = 4;
var FILE_IDENTIFIER_LENGTH = 4;
var SIZE_PREFIX_LENGTH = 4;

// ../../node_modules/flatbuffers/mjs/utils.js
var int32 = new Int32Array(2);
var float32 = new Float32Array(int32.buffer);
var float64 = new Float64Array(int32.buffer);
var isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;

// ../../node_modules/flatbuffers/mjs/long.js
var Long = class {
  constructor(low, high) {
    this.low = low | 0;
    this.high = high | 0;
  }
  static create(low, high) {
    return low == 0 && high == 0 ? Long.ZERO : new Long(low, high);
  }
  toFloat64() {
    return (this.low >>> 0) + this.high * 4294967296;
  }
  equals(other) {
    return this.low == other.low && this.high == other.high;
  }
};
Long.ZERO = new Long(0, 0);

// ../../node_modules/flatbuffers/mjs/encoding.js
var Encoding;
(function(Encoding2) {
  Encoding2[Encoding2["UTF8_BYTES"] = 1] = "UTF8_BYTES";
  Encoding2[Encoding2["UTF16_STRING"] = 2] = "UTF16_STRING";
})(Encoding || (Encoding = {}));

// ../../node_modules/flatbuffers/mjs/byte-buffer.js
var ByteBuffer = class {
  constructor(bytes_) {
    this.bytes_ = bytes_;
    this.position_ = 0;
  }
  static allocate(byte_size) {
    return new ByteBuffer(new Uint8Array(byte_size));
  }
  clear() {
    this.position_ = 0;
  }
  bytes() {
    return this.bytes_;
  }
  position() {
    return this.position_;
  }
  setPosition(position) {
    this.position_ = position;
  }
  capacity() {
    return this.bytes_.length;
  }
  readInt8(offset) {
    return this.readUint8(offset) << 24 >> 24;
  }
  readUint8(offset) {
    return this.bytes_[offset];
  }
  readInt16(offset) {
    return this.readUint16(offset) << 16 >> 16;
  }
  readUint16(offset) {
    return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
  }
  readInt32(offset) {
    return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
  }
  readUint32(offset) {
    return this.readInt32(offset) >>> 0;
  }
  readInt64(offset) {
    return new Long(this.readInt32(offset), this.readInt32(offset + 4));
  }
  readUint64(offset) {
    return new Long(this.readUint32(offset), this.readUint32(offset + 4));
  }
  readFloat32(offset) {
    int32[0] = this.readInt32(offset);
    return float32[0];
  }
  readFloat64(offset) {
    int32[isLittleEndian ? 0 : 1] = this.readInt32(offset);
    int32[isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
    return float64[0];
  }
  writeInt8(offset, value) {
    this.bytes_[offset] = value;
  }
  writeUint8(offset, value) {
    this.bytes_[offset] = value;
  }
  writeInt16(offset, value) {
    this.bytes_[offset] = value;
    this.bytes_[offset + 1] = value >> 8;
  }
  writeUint16(offset, value) {
    this.bytes_[offset] = value;
    this.bytes_[offset + 1] = value >> 8;
  }
  writeInt32(offset, value) {
    this.bytes_[offset] = value;
    this.bytes_[offset + 1] = value >> 8;
    this.bytes_[offset + 2] = value >> 16;
    this.bytes_[offset + 3] = value >> 24;
  }
  writeUint32(offset, value) {
    this.bytes_[offset] = value;
    this.bytes_[offset + 1] = value >> 8;
    this.bytes_[offset + 2] = value >> 16;
    this.bytes_[offset + 3] = value >> 24;
  }
  writeInt64(offset, value) {
    this.writeInt32(offset, value.low);
    this.writeInt32(offset + 4, value.high);
  }
  writeUint64(offset, value) {
    this.writeUint32(offset, value.low);
    this.writeUint32(offset + 4, value.high);
  }
  writeFloat32(offset, value) {
    float32[0] = value;
    this.writeInt32(offset, int32[0]);
  }
  writeFloat64(offset, value) {
    float64[0] = value;
    this.writeInt32(offset, int32[isLittleEndian ? 0 : 1]);
    this.writeInt32(offset + 4, int32[isLittleEndian ? 1 : 0]);
  }
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + SIZEOF_INT + FILE_IDENTIFIER_LENGTH) {
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    }
    let result = "";
    for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
      result += String.fromCharCode(this.readInt8(this.position_ + SIZEOF_INT + i));
    }
    return result;
  }
  __offset(bb_pos, vtable_offset) {
    const vtable = bb_pos - this.readInt32(bb_pos);
    return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
  }
  __union(t, offset) {
    t.bb_pos = offset + this.readInt32(offset);
    t.bb = this;
    return t;
  }
  __string(offset, opt_encoding) {
    offset += this.readInt32(offset);
    const length = this.readInt32(offset);
    let result = "";
    let i = 0;
    offset += SIZEOF_INT;
    if (opt_encoding === Encoding.UTF8_BYTES) {
      return this.bytes_.subarray(offset, offset + length);
    }
    while (i < length) {
      let codePoint;
      const a = this.readUint8(offset + i++);
      if (a < 192) {
        codePoint = a;
      } else {
        const b = this.readUint8(offset + i++);
        if (a < 224) {
          codePoint = (a & 31) << 6 | b & 63;
        } else {
          const c = this.readUint8(offset + i++);
          if (a < 240) {
            codePoint = (a & 15) << 12 | (b & 63) << 6 | c & 63;
          } else {
            const d = this.readUint8(offset + i++);
            codePoint = (a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63;
          }
        }
      }
      if (codePoint < 65536) {
        result += String.fromCharCode(codePoint);
      } else {
        codePoint -= 65536;
        result += String.fromCharCode((codePoint >> 10) + 55296, (codePoint & (1 << 10) - 1) + 56320);
      }
    }
    return result;
  }
  __union_with_string(o, offset) {
    if (typeof o === "string") {
      return this.__string(offset);
    }
    return this.__union(o, offset);
  }
  __indirect(offset) {
    return offset + this.readInt32(offset);
  }
  __vector(offset) {
    return offset + this.readInt32(offset) + SIZEOF_INT;
  }
  __vector_len(offset) {
    return this.readInt32(offset + this.readInt32(offset));
  }
  __has_identifier(ident) {
    if (ident.length != FILE_IDENTIFIER_LENGTH) {
      throw new Error("FlatBuffers: file identifier must be length " + FILE_IDENTIFIER_LENGTH);
    }
    for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
      if (ident.charCodeAt(i) != this.readInt8(this.position() + SIZEOF_INT + i)) {
        return false;
      }
    }
    return true;
  }
  createLong(low, high) {
    return Long.create(low, high);
  }
  createScalarList(listAccessor, listLength) {
    const ret = [];
    for (let i = 0; i < listLength; ++i) {
      if (listAccessor(i) !== null) {
        ret.push(listAccessor(i));
      }
    }
    return ret;
  }
  createObjList(listAccessor, listLength) {
    const ret = [];
    for (let i = 0; i < listLength; ++i) {
      const val = listAccessor(i);
      if (val !== null) {
        ret.push(val.unpack());
      }
    }
    return ret;
  }
};

// ../../node_modules/flatbuffers/mjs/builder.js
var Builder2 = class {
  constructor(opt_initial_size) {
    this.minalign = 1;
    this.vtable = null;
    this.vtable_in_use = 0;
    this.isNested = false;
    this.object_start = 0;
    this.vtables = [];
    this.vector_num_elems = 0;
    this.force_defaults = false;
    this.string_maps = null;
    let initial_size;
    if (!opt_initial_size) {
      initial_size = 1024;
    } else {
      initial_size = opt_initial_size;
    }
    this.bb = ByteBuffer.allocate(initial_size);
    this.space = initial_size;
  }
  clear() {
    this.bb.clear();
    this.space = this.bb.capacity();
    this.minalign = 1;
    this.vtable = null;
    this.vtable_in_use = 0;
    this.isNested = false;
    this.object_start = 0;
    this.vtables = [];
    this.vector_num_elems = 0;
    this.force_defaults = false;
    this.string_maps = null;
  }
  forceDefaults(forceDefaults) {
    this.force_defaults = forceDefaults;
  }
  dataBuffer() {
    return this.bb;
  }
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  prep(size, additional_bytes) {
    if (size > this.minalign) {
      this.minalign = size;
    }
    const align_size = ~(this.bb.capacity() - this.space + additional_bytes) + 1 & size - 1;
    while (this.space < align_size + size + additional_bytes) {
      const old_buf_size = this.bb.capacity();
      this.bb = Builder2.growByteBuffer(this.bb);
      this.space += this.bb.capacity() - old_buf_size;
    }
    this.pad(align_size);
  }
  pad(byte_size) {
    for (let i = 0; i < byte_size; i++) {
      this.bb.writeInt8(--this.space, 0);
    }
  }
  writeInt8(value) {
    this.bb.writeInt8(this.space -= 1, value);
  }
  writeInt16(value) {
    this.bb.writeInt16(this.space -= 2, value);
  }
  writeInt32(value) {
    this.bb.writeInt32(this.space -= 4, value);
  }
  writeInt64(value) {
    this.bb.writeInt64(this.space -= 8, value);
  }
  writeFloat32(value) {
    this.bb.writeFloat32(this.space -= 4, value);
  }
  writeFloat64(value) {
    this.bb.writeFloat64(this.space -= 8, value);
  }
  addInt8(value) {
    this.prep(1, 0);
    this.writeInt8(value);
  }
  addInt16(value) {
    this.prep(2, 0);
    this.writeInt16(value);
  }
  addInt32(value) {
    this.prep(4, 0);
    this.writeInt32(value);
  }
  addInt64(value) {
    this.prep(8, 0);
    this.writeInt64(value);
  }
  addFloat32(value) {
    this.prep(4, 0);
    this.writeFloat32(value);
  }
  addFloat64(value) {
    this.prep(8, 0);
    this.writeFloat64(value);
  }
  addFieldInt8(voffset, value, defaultValue) {
    if (this.force_defaults || value != defaultValue) {
      this.addInt8(value);
      this.slot(voffset);
    }
  }
  addFieldInt16(voffset, value, defaultValue) {
    if (this.force_defaults || value != defaultValue) {
      this.addInt16(value);
      this.slot(voffset);
    }
  }
  addFieldInt32(voffset, value, defaultValue) {
    if (this.force_defaults || value != defaultValue) {
      this.addInt32(value);
      this.slot(voffset);
    }
  }
  addFieldInt64(voffset, value, defaultValue) {
    if (this.force_defaults || !value.equals(defaultValue)) {
      this.addInt64(value);
      this.slot(voffset);
    }
  }
  addFieldFloat32(voffset, value, defaultValue) {
    if (this.force_defaults || value != defaultValue) {
      this.addFloat32(value);
      this.slot(voffset);
    }
  }
  addFieldFloat64(voffset, value, defaultValue) {
    if (this.force_defaults || value != defaultValue) {
      this.addFloat64(value);
      this.slot(voffset);
    }
  }
  addFieldOffset(voffset, value, defaultValue) {
    if (this.force_defaults || value != defaultValue) {
      this.addOffset(value);
      this.slot(voffset);
    }
  }
  addFieldStruct(voffset, value, defaultValue) {
    if (value != defaultValue) {
      this.nested(value);
      this.slot(voffset);
    }
  }
  nested(obj) {
    if (obj != this.offset()) {
      throw new Error("FlatBuffers: struct must be serialized inline.");
    }
  }
  notNested() {
    if (this.isNested) {
      throw new Error("FlatBuffers: object serialization must not be nested.");
    }
  }
  slot(voffset) {
    if (this.vtable !== null)
      this.vtable[voffset] = this.offset();
  }
  offset() {
    return this.bb.capacity() - this.space;
  }
  static growByteBuffer(bb) {
    const old_buf_size = bb.capacity();
    if (old_buf_size & 3221225472) {
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    }
    const new_buf_size = old_buf_size << 1;
    const nbb = ByteBuffer.allocate(new_buf_size);
    nbb.setPosition(new_buf_size - old_buf_size);
    nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
    return nbb;
  }
  addOffset(offset) {
    this.prep(SIZEOF_INT, 0);
    this.writeInt32(this.offset() - offset + SIZEOF_INT);
  }
  startObject(numfields) {
    this.notNested();
    if (this.vtable == null) {
      this.vtable = [];
    }
    this.vtable_in_use = numfields;
    for (let i = 0; i < numfields; i++) {
      this.vtable[i] = 0;
    }
    this.isNested = true;
    this.object_start = this.offset();
  }
  endObject() {
    if (this.vtable == null || !this.isNested) {
      throw new Error("FlatBuffers: endObject called without startObject");
    }
    this.addInt32(0);
    const vtableloc = this.offset();
    let i = this.vtable_in_use - 1;
    for (; i >= 0 && this.vtable[i] == 0; i--) {
    }
    const trimmed_size = i + 1;
    for (; i >= 0; i--) {
      this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
    }
    const standard_fields = 2;
    this.addInt16(vtableloc - this.object_start);
    const len = (trimmed_size + standard_fields) * SIZEOF_SHORT;
    this.addInt16(len);
    let existing_vtable = 0;
    const vt1 = this.space;
    outer_loop:
      for (i = 0; i < this.vtables.length; i++) {
        const vt2 = this.bb.capacity() - this.vtables[i];
        if (len == this.bb.readInt16(vt2)) {
          for (let j = SIZEOF_SHORT; j < len; j += SIZEOF_SHORT) {
            if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
              continue outer_loop;
            }
          }
          existing_vtable = this.vtables[i];
          break;
        }
      }
    if (existing_vtable) {
      this.space = this.bb.capacity() - vtableloc;
      this.bb.writeInt32(this.space, existing_vtable - vtableloc);
    } else {
      this.vtables.push(this.offset());
      this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
    }
    this.isNested = false;
    return vtableloc;
  }
  finish(root_table, opt_file_identifier, opt_size_prefix) {
    const size_prefix = opt_size_prefix ? SIZE_PREFIX_LENGTH : 0;
    if (opt_file_identifier) {
      const file_identifier = opt_file_identifier;
      this.prep(this.minalign, SIZEOF_INT + FILE_IDENTIFIER_LENGTH + size_prefix);
      if (file_identifier.length != FILE_IDENTIFIER_LENGTH) {
        throw new Error("FlatBuffers: file identifier must be length " + FILE_IDENTIFIER_LENGTH);
      }
      for (let i = FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
        this.writeInt8(file_identifier.charCodeAt(i));
      }
    }
    this.prep(this.minalign, SIZEOF_INT + size_prefix);
    this.addOffset(root_table);
    if (size_prefix) {
      this.addInt32(this.bb.capacity() - this.space);
    }
    this.bb.setPosition(this.space);
  }
  finishSizePrefixed(root_table, opt_file_identifier) {
    this.finish(root_table, opt_file_identifier, true);
  }
  requiredField(table, field) {
    const table_start = this.bb.capacity() - table;
    const vtable_start = table_start - this.bb.readInt32(table_start);
    const ok = this.bb.readInt16(vtable_start + field) != 0;
    if (!ok) {
      throw new Error("FlatBuffers: field " + field + " must be set");
    }
  }
  startVector(elem_size, num_elems, alignment) {
    this.notNested();
    this.vector_num_elems = num_elems;
    this.prep(SIZEOF_INT, elem_size * num_elems);
    this.prep(alignment, elem_size * num_elems);
  }
  endVector() {
    this.writeInt32(this.vector_num_elems);
    return this.offset();
  }
  createSharedString(s) {
    if (!s) {
      return 0;
    }
    if (!this.string_maps) {
      this.string_maps = /* @__PURE__ */ new Map();
    }
    if (this.string_maps.has(s)) {
      return this.string_maps.get(s);
    }
    const offset = this.createString(s);
    this.string_maps.set(s, offset);
    return offset;
  }
  createString(s) {
    if (!s) {
      return 0;
    }
    let utf8;
    if (s instanceof Uint8Array) {
      utf8 = s;
    } else {
      utf8 = [];
      let i = 0;
      while (i < s.length) {
        let codePoint;
        const a = s.charCodeAt(i++);
        if (a < 55296 || a >= 56320) {
          codePoint = a;
        } else {
          const b = s.charCodeAt(i++);
          codePoint = (a << 10) + b + (65536 - (55296 << 10) - 56320);
        }
        if (codePoint < 128) {
          utf8.push(codePoint);
        } else {
          if (codePoint < 2048) {
            utf8.push(codePoint >> 6 & 31 | 192);
          } else {
            if (codePoint < 65536) {
              utf8.push(codePoint >> 12 & 15 | 224);
            } else {
              utf8.push(codePoint >> 18 & 7 | 240, codePoint >> 12 & 63 | 128);
            }
            utf8.push(codePoint >> 6 & 63 | 128);
          }
          utf8.push(codePoint & 63 | 128);
        }
      }
    }
    this.addInt8(0);
    this.startVector(1, utf8.length, 1);
    this.bb.setPosition(this.space -= utf8.length);
    for (let i = 0, offset = this.space, bytes = this.bb.bytes(); i < utf8.length; i++) {
      bytes[offset++] = utf8[i];
    }
    return this.endVector();
  }
  createLong(low, high) {
    return Long.create(low, high);
  }
  createObjectOffset(obj) {
    if (obj === null) {
      return 0;
    }
    if (typeof obj === "string") {
      return this.createString(obj);
    } else {
      return obj.pack(this);
    }
  }
  createObjectOffsetList(list) {
    const ret = [];
    for (let i = 0; i < list.length; ++i) {
      const val = list[i];
      if (val !== null) {
        ret.push(this.createObjectOffset(val));
      } else {
        throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
      }
    }
    return ret;
  }
  createStructOffsetList(list, startFunc) {
    startFunc(this, list.length);
    this.createObjectOffsetList(list);
    return this.endVector();
  }
};

// ../../node_modules/apache-arrow/fb/key-value.mjs
var KeyValue = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsKeyValue(bb, obj) {
    return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsKeyValue(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  key(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  value(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startKeyValue(builder) {
    builder.startObject(2);
  }
  static addKey(builder, keyOffset) {
    builder.addFieldOffset(0, keyOffset, 0);
  }
  static addValue(builder, valueOffset) {
    builder.addFieldOffset(1, valueOffset, 0);
  }
  static endKeyValue(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createKeyValue(builder, keyOffset, valueOffset) {
    KeyValue.startKeyValue(builder);
    KeyValue.addKey(builder, keyOffset);
    KeyValue.addValue(builder, valueOffset);
    return KeyValue.endKeyValue(builder);
  }
};

// ../../node_modules/apache-arrow/fb/metadata-version.mjs
var MetadataVersion2;
(function(MetadataVersion3) {
  MetadataVersion3[MetadataVersion3["V1"] = 0] = "V1";
  MetadataVersion3[MetadataVersion3["V2"] = 1] = "V2";
  MetadataVersion3[MetadataVersion3["V3"] = 2] = "V3";
  MetadataVersion3[MetadataVersion3["V4"] = 3] = "V4";
  MetadataVersion3[MetadataVersion3["V5"] = 4] = "V5";
})(MetadataVersion2 || (MetadataVersion2 = {}));

// ../../node_modules/apache-arrow/fb/endianness.mjs
var Endianness;
(function(Endianness2) {
  Endianness2[Endianness2["Little"] = 0] = "Little";
  Endianness2[Endianness2["Big"] = 1] = "Big";
})(Endianness || (Endianness = {}));

// ../../node_modules/apache-arrow/fb/dictionary-kind.mjs
var DictionaryKind;
(function(DictionaryKind2) {
  DictionaryKind2[DictionaryKind2["DenseArray"] = 0] = "DenseArray";
})(DictionaryKind || (DictionaryKind = {}));

// ../../node_modules/apache-arrow/fb/int.mjs
var Int = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsInt(bb, obj) {
    return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsInt(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  bitWidth() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  isSigned() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startInt(builder) {
    builder.startObject(2);
  }
  static addBitWidth(builder, bitWidth) {
    builder.addFieldInt32(0, bitWidth, 0);
  }
  static addIsSigned(builder, isSigned) {
    builder.addFieldInt8(1, +isSigned, 0);
  }
  static endInt(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createInt(builder, bitWidth, isSigned) {
    Int.startInt(builder);
    Int.addBitWidth(builder, bitWidth);
    Int.addIsSigned(builder, isSigned);
    return Int.endInt(builder);
  }
};

// ../../node_modules/apache-arrow/fb/dictionary-encoding.mjs
var DictionaryEncoding = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDictionaryEncoding(bb, obj) {
    return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDictionaryEncoding(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  id() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  indexType(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  isOrdered() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  dictionaryKind() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : DictionaryKind.DenseArray;
  }
  static startDictionaryEncoding(builder) {
    builder.startObject(4);
  }
  static addId(builder, id) {
    builder.addFieldInt64(0, id, builder.createLong(0, 0));
  }
  static addIndexType(builder, indexTypeOffset) {
    builder.addFieldOffset(1, indexTypeOffset, 0);
  }
  static addIsOrdered(builder, isOrdered) {
    builder.addFieldInt8(2, +isOrdered, 0);
  }
  static addDictionaryKind(builder, dictionaryKind) {
    builder.addFieldInt16(3, dictionaryKind, DictionaryKind.DenseArray);
  }
  static endDictionaryEncoding(builder) {
    const offset = builder.endObject();
    return offset;
  }
};

// ../../node_modules/apache-arrow/fb/binary.mjs
var Binary2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBinary(bb, obj) {
    return (obj || new Binary2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBinary(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Binary2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startBinary(builder) {
    builder.startObject(0);
  }
  static endBinary(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBinary(builder) {
    Binary2.startBinary(builder);
    return Binary2.endBinary(builder);
  }
};

// ../../node_modules/apache-arrow/fb/bool.mjs
var Bool2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBool(bb, obj) {
    return (obj || new Bool2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBool(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Bool2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startBool(builder) {
    builder.startObject(0);
  }
  static endBool(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBool(builder) {
    Bool2.startBool(builder);
    return Bool2.endBool(builder);
  }
};

// ../../node_modules/apache-arrow/fb/date-unit.mjs
var DateUnit2;
(function(DateUnit3) {
  DateUnit3[DateUnit3["DAY"] = 0] = "DAY";
  DateUnit3[DateUnit3["MILLISECOND"] = 1] = "MILLISECOND";
})(DateUnit2 || (DateUnit2 = {}));

// ../../node_modules/apache-arrow/fb/date.mjs
var Date2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDate(bb, obj) {
    return (obj || new Date2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDate(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Date2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : DateUnit2.MILLISECOND;
  }
  static startDate(builder) {
    builder.startObject(1);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, DateUnit2.MILLISECOND);
  }
  static endDate(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDate(builder, unit) {
    Date2.startDate(builder);
    Date2.addUnit(builder, unit);
    return Date2.endDate(builder);
  }
};

// ../../node_modules/apache-arrow/fb/decimal.mjs
var Decimal2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDecimal(bb, obj) {
    return (obj || new Decimal2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDecimal(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Decimal2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  precision() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  scale() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  bitWidth() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 128;
  }
  static startDecimal(builder) {
    builder.startObject(3);
  }
  static addPrecision(builder, precision) {
    builder.addFieldInt32(0, precision, 0);
  }
  static addScale(builder, scale) {
    builder.addFieldInt32(1, scale, 0);
  }
  static addBitWidth(builder, bitWidth) {
    builder.addFieldInt32(2, bitWidth, 128);
  }
  static endDecimal(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDecimal(builder, precision, scale, bitWidth) {
    Decimal2.startDecimal(builder);
    Decimal2.addPrecision(builder, precision);
    Decimal2.addScale(builder, scale);
    Decimal2.addBitWidth(builder, bitWidth);
    return Decimal2.endDecimal(builder);
  }
};

// ../../node_modules/apache-arrow/fb/time-unit.mjs
var TimeUnit2;
(function(TimeUnit3) {
  TimeUnit3[TimeUnit3["SECOND"] = 0] = "SECOND";
  TimeUnit3[TimeUnit3["MILLISECOND"] = 1] = "MILLISECOND";
  TimeUnit3[TimeUnit3["MICROSECOND"] = 2] = "MICROSECOND";
  TimeUnit3[TimeUnit3["NANOSECOND"] = 3] = "NANOSECOND";
})(TimeUnit2 || (TimeUnit2 = {}));

// ../../node_modules/apache-arrow/fb/fixed-size-binary.mjs
var FixedSizeBinary2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFixedSizeBinary(bb, obj) {
    return (obj || new FixedSizeBinary2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFixedSizeBinary(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new FixedSizeBinary2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  byteWidth() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startFixedSizeBinary(builder) {
    builder.startObject(1);
  }
  static addByteWidth(builder, byteWidth) {
    builder.addFieldInt32(0, byteWidth, 0);
  }
  static endFixedSizeBinary(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createFixedSizeBinary(builder, byteWidth) {
    FixedSizeBinary2.startFixedSizeBinary(builder);
    FixedSizeBinary2.addByteWidth(builder, byteWidth);
    return FixedSizeBinary2.endFixedSizeBinary(builder);
  }
};

// ../../node_modules/apache-arrow/fb/fixed-size-list.mjs
var FixedSizeList2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFixedSizeList(bb, obj) {
    return (obj || new FixedSizeList2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFixedSizeList(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new FixedSizeList2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  listSize() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startFixedSizeList(builder) {
    builder.startObject(1);
  }
  static addListSize(builder, listSize) {
    builder.addFieldInt32(0, listSize, 0);
  }
  static endFixedSizeList(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createFixedSizeList(builder, listSize) {
    FixedSizeList2.startFixedSizeList(builder);
    FixedSizeList2.addListSize(builder, listSize);
    return FixedSizeList2.endFixedSizeList(builder);
  }
};

// ../../node_modules/apache-arrow/fb/precision.mjs
var Precision2;
(function(Precision3) {
  Precision3[Precision3["HALF"] = 0] = "HALF";
  Precision3[Precision3["SINGLE"] = 1] = "SINGLE";
  Precision3[Precision3["DOUBLE"] = 2] = "DOUBLE";
})(Precision2 || (Precision2 = {}));

// ../../node_modules/apache-arrow/fb/floating-point.mjs
var FloatingPoint = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFloatingPoint(bb, obj) {
    return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFloatingPoint(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  precision() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : Precision2.HALF;
  }
  static startFloatingPoint(builder) {
    builder.startObject(1);
  }
  static addPrecision(builder, precision) {
    builder.addFieldInt16(0, precision, Precision2.HALF);
  }
  static endFloatingPoint(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createFloatingPoint(builder, precision) {
    FloatingPoint.startFloatingPoint(builder);
    FloatingPoint.addPrecision(builder, precision);
    return FloatingPoint.endFloatingPoint(builder);
  }
};

// ../../node_modules/apache-arrow/fb/interval-unit.mjs
var IntervalUnit2;
(function(IntervalUnit3) {
  IntervalUnit3[IntervalUnit3["YEAR_MONTH"] = 0] = "YEAR_MONTH";
  IntervalUnit3[IntervalUnit3["DAY_TIME"] = 1] = "DAY_TIME";
  IntervalUnit3[IntervalUnit3["MONTH_DAY_NANO"] = 2] = "MONTH_DAY_NANO";
})(IntervalUnit2 || (IntervalUnit2 = {}));

// ../../node_modules/apache-arrow/fb/interval.mjs
var Interval = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsInterval(bb, obj) {
    return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsInterval(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : IntervalUnit2.YEAR_MONTH;
  }
  static startInterval(builder) {
    builder.startObject(1);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, IntervalUnit2.YEAR_MONTH);
  }
  static endInterval(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createInterval(builder, unit) {
    Interval.startInterval(builder);
    Interval.addUnit(builder, unit);
    return Interval.endInterval(builder);
  }
};

// ../../node_modules/apache-arrow/fb/list.mjs
var List2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsList(bb, obj) {
    return (obj || new List2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsList(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new List2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startList(builder) {
    builder.startObject(0);
  }
  static endList(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createList(builder) {
    List2.startList(builder);
    return List2.endList(builder);
  }
};

// ../../node_modules/apache-arrow/fb/map.mjs
var Map2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMap(bb, obj) {
    return (obj || new Map2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMap(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Map2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  keysSorted() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startMap(builder) {
    builder.startObject(1);
  }
  static addKeysSorted(builder, keysSorted) {
    builder.addFieldInt8(0, +keysSorted, 0);
  }
  static endMap(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createMap(builder, keysSorted) {
    Map2.startMap(builder);
    Map2.addKeysSorted(builder, keysSorted);
    return Map2.endMap(builder);
  }
};

// ../../node_modules/apache-arrow/fb/null.mjs
var Null2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsNull(bb, obj) {
    return (obj || new Null2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsNull(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Null2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startNull(builder) {
    builder.startObject(0);
  }
  static endNull(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createNull(builder) {
    Null2.startNull(builder);
    return Null2.endNull(builder);
  }
};

// ../../node_modules/apache-arrow/fb/struct_.mjs
var Struct_ = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsStruct_(bb, obj) {
    return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsStruct_(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startStruct_(builder) {
    builder.startObject(0);
  }
  static endStruct_(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createStruct_(builder) {
    Struct_.startStruct_(builder);
    return Struct_.endStruct_(builder);
  }
};

// ../../node_modules/apache-arrow/fb/time.mjs
var Time = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTime(bb, obj) {
    return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTime(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit2.MILLISECOND;
  }
  bitWidth() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
  }
  static startTime(builder) {
    builder.startObject(2);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, TimeUnit2.MILLISECOND);
  }
  static addBitWidth(builder, bitWidth) {
    builder.addFieldInt32(1, bitWidth, 32);
  }
  static endTime(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createTime(builder, unit, bitWidth) {
    Time.startTime(builder);
    Time.addUnit(builder, unit);
    Time.addBitWidth(builder, bitWidth);
    return Time.endTime(builder);
  }
};

// ../../node_modules/apache-arrow/fb/timestamp.mjs
var Timestamp = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTimestamp(bb, obj) {
    return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTimestamp(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit2.SECOND;
  }
  timezone(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startTimestamp(builder) {
    builder.startObject(2);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, TimeUnit2.SECOND);
  }
  static addTimezone(builder, timezoneOffset) {
    builder.addFieldOffset(1, timezoneOffset, 0);
  }
  static endTimestamp(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createTimestamp(builder, unit, timezoneOffset) {
    Timestamp.startTimestamp(builder);
    Timestamp.addUnit(builder, unit);
    Timestamp.addTimezone(builder, timezoneOffset);
    return Timestamp.endTimestamp(builder);
  }
};

// ../../node_modules/apache-arrow/fb/union-mode.mjs
var UnionMode2;
(function(UnionMode3) {
  UnionMode3[UnionMode3["Sparse"] = 0] = "Sparse";
  UnionMode3[UnionMode3["Dense"] = 1] = "Dense";
})(UnionMode2 || (UnionMode2 = {}));

// ../../node_modules/apache-arrow/fb/union.mjs
var Union = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsUnion(bb, obj) {
    return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsUnion(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  mode() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : UnionMode2.Sparse;
  }
  typeIds(index) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
  }
  typeIdsLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  typeIdsArray() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  static startUnion(builder) {
    builder.startObject(2);
  }
  static addMode(builder, mode) {
    builder.addFieldInt16(0, mode, UnionMode2.Sparse);
  }
  static addTypeIds(builder, typeIdsOffset) {
    builder.addFieldOffset(1, typeIdsOffset, 0);
  }
  static createTypeIdsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]);
    }
    return builder.endVector();
  }
  static startTypeIdsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endUnion(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createUnion(builder, mode, typeIdsOffset) {
    Union.startUnion(builder);
    Union.addMode(builder, mode);
    Union.addTypeIds(builder, typeIdsOffset);
    return Union.endUnion(builder);
  }
};

// ../../node_modules/apache-arrow/fb/utf8.mjs
var Utf82 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsUtf8(bb, obj) {
    return (obj || new Utf82()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsUtf8(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Utf82()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startUtf8(builder) {
    builder.startObject(0);
  }
  static endUtf8(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createUtf8(builder) {
    Utf82.startUtf8(builder);
    return Utf82.endUtf8(builder);
  }
};

// ../../node_modules/apache-arrow/fb/type.mjs
var Type2;
(function(Type3) {
  Type3[Type3["NONE"] = 0] = "NONE";
  Type3[Type3["Null"] = 1] = "Null";
  Type3[Type3["Int"] = 2] = "Int";
  Type3[Type3["FloatingPoint"] = 3] = "FloatingPoint";
  Type3[Type3["Binary"] = 4] = "Binary";
  Type3[Type3["Utf8"] = 5] = "Utf8";
  Type3[Type3["Bool"] = 6] = "Bool";
  Type3[Type3["Decimal"] = 7] = "Decimal";
  Type3[Type3["Date"] = 8] = "Date";
  Type3[Type3["Time"] = 9] = "Time";
  Type3[Type3["Timestamp"] = 10] = "Timestamp";
  Type3[Type3["Interval"] = 11] = "Interval";
  Type3[Type3["List"] = 12] = "List";
  Type3[Type3["Struct_"] = 13] = "Struct_";
  Type3[Type3["Union"] = 14] = "Union";
  Type3[Type3["FixedSizeBinary"] = 15] = "FixedSizeBinary";
  Type3[Type3["FixedSizeList"] = 16] = "FixedSizeList";
  Type3[Type3["Map"] = 17] = "Map";
  Type3[Type3["Duration"] = 18] = "Duration";
  Type3[Type3["LargeBinary"] = 19] = "LargeBinary";
  Type3[Type3["LargeUtf8"] = 20] = "LargeUtf8";
  Type3[Type3["LargeList"] = 21] = "LargeList";
})(Type2 || (Type2 = {}));

// ../../node_modules/apache-arrow/fb/field.mjs
var Field = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsField(bb, obj) {
    return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsField(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  name(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  nullable() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  typeType() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : Type2.NONE;
  }
  type(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }
  dictionary(obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new DictionaryEncoding()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  children(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? (obj || new Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  childrenLength() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startField(builder) {
    builder.startObject(7);
  }
  static addName(builder, nameOffset) {
    builder.addFieldOffset(0, nameOffset, 0);
  }
  static addNullable(builder, nullable) {
    builder.addFieldInt8(1, +nullable, 0);
  }
  static addTypeType(builder, typeType) {
    builder.addFieldInt8(2, typeType, Type2.NONE);
  }
  static addType(builder, typeOffset) {
    builder.addFieldOffset(3, typeOffset, 0);
  }
  static addDictionary(builder, dictionaryOffset) {
    builder.addFieldOffset(4, dictionaryOffset, 0);
  }
  static addChildren(builder, childrenOffset) {
    builder.addFieldOffset(5, childrenOffset, 0);
  }
  static createChildrenVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startChildrenVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(6, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endField(builder) {
    const offset = builder.endObject();
    return offset;
  }
};

// ../../node_modules/apache-arrow/fb/schema.mjs
var Schema = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsSchema(bb, obj) {
    return (obj || new Schema()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsSchema(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Schema()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  endianness() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : Endianness.Little;
  }
  fields(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  fieldsLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  features(index) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
  }
  featuresLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startSchema(builder) {
    builder.startObject(4);
  }
  static addEndianness(builder, endianness) {
    builder.addFieldInt16(0, endianness, Endianness.Little);
  }
  static addFields(builder, fieldsOffset) {
    builder.addFieldOffset(1, fieldsOffset, 0);
  }
  static createFieldsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startFieldsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(2, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addFeatures(builder, featuresOffset) {
    builder.addFieldOffset(3, featuresOffset, 0);
  }
  static createFeaturesVector(builder, data) {
    builder.startVector(8, data.length, 8);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt64(data[i]);
    }
    return builder.endVector();
  }
  static startFeaturesVector(builder, numElems) {
    builder.startVector(8, numElems, 8);
  }
  static endSchema(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishSchemaBuffer(builder, offset) {
    builder.finish(offset);
  }
  static finishSizePrefixedSchemaBuffer(builder, offset) {
    builder.finish(offset, void 0, true);
  }
  static createSchema(builder, endianness, fieldsOffset, customMetadataOffset, featuresOffset) {
    Schema.startSchema(builder);
    Schema.addEndianness(builder, endianness);
    Schema.addFields(builder, fieldsOffset);
    Schema.addCustomMetadata(builder, customMetadataOffset);
    Schema.addFeatures(builder, featuresOffset);
    return Schema.endSchema(builder);
  }
};

// ../../node_modules/apache-arrow/fb/footer.mjs
var Footer = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFooter(bb, obj) {
    return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFooter(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  version() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : MetadataVersion2.V1;
  }
  schema(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Schema()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  dictionaries(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
  }
  dictionariesLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  recordBatches(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startFooter(builder) {
    builder.startObject(5);
  }
  static addVersion(builder, version) {
    builder.addFieldInt16(0, version, MetadataVersion2.V1);
  }
  static addSchema(builder, schemaOffset) {
    builder.addFieldOffset(1, schemaOffset, 0);
  }
  static addDictionaries(builder, dictionariesOffset) {
    builder.addFieldOffset(2, dictionariesOffset, 0);
  }
  static startDictionariesVector(builder, numElems) {
    builder.startVector(24, numElems, 8);
  }
  static addRecordBatches(builder, recordBatchesOffset) {
    builder.addFieldOffset(3, recordBatchesOffset, 0);
  }
  static startRecordBatchesVector(builder, numElems) {
    builder.startVector(24, numElems, 8);
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(4, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endFooter(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishFooterBuffer(builder, offset) {
    builder.finish(offset);
  }
  static finishSizePrefixedFooterBuffer(builder, offset) {
    builder.finish(offset, void 0, true);
  }
};

// ../../node_modules/apache-arrow/schema.mjs
var Schema2 = class {
  constructor(fields = [], metadata, dictionaries) {
    this.fields = fields || [];
    this.metadata = metadata || /* @__PURE__ */ new Map();
    if (!dictionaries) {
      dictionaries = generateDictionaryMap(fields);
    }
    this.dictionaries = dictionaries;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((f) => f.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((f, i) => `${i}: ${f}`).join(", ")} }>`;
  }
  select(fieldNames) {
    const names = new Set(fieldNames);
    const fields = this.fields.filter((f) => names.has(f.name));
    return new Schema2(fields, this.metadata);
  }
  selectAt(fieldIndices) {
    const fields = fieldIndices.map((i) => this.fields[i]).filter(Boolean);
    return new Schema2(fields, this.metadata);
  }
  assign(...args) {
    const other = args[0] instanceof Schema2 ? args[0] : Array.isArray(args[0]) ? new Schema2(args[0]) : new Schema2(args);
    const curFields = [...this.fields];
    const metadata = mergeMaps(mergeMaps(/* @__PURE__ */ new Map(), this.metadata), other.metadata);
    const newFields = other.fields.filter((f2) => {
      const i = curFields.findIndex((f) => f.name === f2.name);
      return ~i ? (curFields[i] = f2.clone({
        metadata: mergeMaps(mergeMaps(/* @__PURE__ */ new Map(), curFields[i].metadata), f2.metadata)
      })) && false : true;
    });
    const newDictionaries = generateDictionaryMap(newFields, /* @__PURE__ */ new Map());
    return new Schema2([...curFields, ...newFields], metadata, new Map([...this.dictionaries, ...newDictionaries]));
  }
};
Schema2.prototype.fields = null;
Schema2.prototype.metadata = null;
Schema2.prototype.dictionaries = null;
var Field2 = class {
  constructor(name, type, nullable = false, metadata) {
    this.name = name;
    this.type = type;
    this.nullable = nullable;
    this.metadata = metadata || /* @__PURE__ */ new Map();
  }
  static new(...args) {
    let [name, type, nullable, metadata] = args;
    if (args[0] && typeof args[0] === "object") {
      ({ name } = args[0]);
      type === void 0 && (type = args[0].type);
      nullable === void 0 && (nullable = args[0].nullable);
      metadata === void 0 && (metadata = args[0].metadata);
    }
    return new Field2(`${name}`, type, nullable, metadata);
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...args) {
    let [name, type, nullable, metadata] = args;
    !args[0] || typeof args[0] !== "object" ? [name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata] = args : { name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata } = args[0];
    return Field2.new(name, type, nullable, metadata);
  }
};
Field2.prototype.type = null;
Field2.prototype.name = null;
Field2.prototype.nullable = null;
Field2.prototype.metadata = null;
function mergeMaps(m1, m2) {
  return new Map([...m1 || /* @__PURE__ */ new Map(), ...m2 || /* @__PURE__ */ new Map()]);
}
function generateDictionaryMap(fields, dictionaries = /* @__PURE__ */ new Map()) {
  for (let i = -1, n = fields.length; ++i < n; ) {
    const field = fields[i];
    const type = field.type;
    if (DataType.isDictionary(type)) {
      if (!dictionaries.has(type.id)) {
        dictionaries.set(type.id, type.dictionary);
      } else if (dictionaries.get(type.id) !== type.dictionary) {
        throw new Error(`Cannot create Schema containing two different dictionaries with the same Id`);
      }
    }
    if (type.children && type.children.length > 0) {
      generateDictionaryMap(type.children, dictionaries);
    }
  }
  return dictionaries;
}

// ../../node_modules/apache-arrow/ipc/metadata/file.mjs
var Long2 = Long;
var Builder3 = Builder2;
var ByteBuffer2 = ByteBuffer;
var Footer_ = class {
  constructor(schema, version = MetadataVersion.V4, recordBatches, dictionaryBatches) {
    this.schema = schema;
    this.version = version;
    recordBatches && (this._recordBatches = recordBatches);
    dictionaryBatches && (this._dictionaryBatches = dictionaryBatches);
  }
  static decode(buf) {
    buf = new ByteBuffer2(toUint8Array(buf));
    const footer = Footer.getRootAsFooter(buf);
    const schema = Schema2.decode(footer.schema());
    return new OffHeapFooter(schema, footer);
  }
  static encode(footer) {
    const b = new Builder3();
    const schemaOffset = Schema2.encode(b, footer.schema);
    Footer.startRecordBatchesVector(b, footer.numRecordBatches);
    for (const rb of [...footer.recordBatches()].slice().reverse()) {
      FileBlock.encode(b, rb);
    }
    const recordBatchesOffset = b.endVector();
    Footer.startDictionariesVector(b, footer.numDictionaries);
    for (const db of [...footer.dictionaryBatches()].slice().reverse()) {
      FileBlock.encode(b, db);
    }
    const dictionaryBatchesOffset = b.endVector();
    Footer.startFooter(b);
    Footer.addSchema(b, schemaOffset);
    Footer.addVersion(b, MetadataVersion.V4);
    Footer.addRecordBatches(b, recordBatchesOffset);
    Footer.addDictionaries(b, dictionaryBatchesOffset);
    Footer.finishFooterBuffer(b, Footer.endFooter(b));
    return b.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  *recordBatches() {
    for (let block, i = -1, n = this.numRecordBatches; ++i < n; ) {
      if (block = this.getRecordBatch(i)) {
        yield block;
      }
    }
  }
  *dictionaryBatches() {
    for (let block, i = -1, n = this.numDictionaries; ++i < n; ) {
      if (block = this.getDictionaryBatch(i)) {
        yield block;
      }
    }
  }
  getRecordBatch(index) {
    return index >= 0 && index < this.numRecordBatches && this._recordBatches[index] || null;
  }
  getDictionaryBatch(index) {
    return index >= 0 && index < this.numDictionaries && this._dictionaryBatches[index] || null;
  }
};
var OffHeapFooter = class extends Footer_ {
  constructor(schema, _footer) {
    super(schema, _footer.version());
    this._footer = _footer;
  }
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  getRecordBatch(index) {
    if (index >= 0 && index < this.numRecordBatches) {
      const fileBlock = this._footer.recordBatches(index);
      if (fileBlock) {
        return FileBlock.decode(fileBlock);
      }
    }
    return null;
  }
  getDictionaryBatch(index) {
    if (index >= 0 && index < this.numDictionaries) {
      const fileBlock = this._footer.dictionaries(index);
      if (fileBlock) {
        return FileBlock.decode(fileBlock);
      }
    }
    return null;
  }
};
var FileBlock = class {
  constructor(metaDataLength, bodyLength, offset) {
    this.metaDataLength = metaDataLength;
    this.offset = typeof offset === "number" ? offset : offset.low;
    this.bodyLength = typeof bodyLength === "number" ? bodyLength : bodyLength.low;
  }
  static decode(block) {
    return new FileBlock(block.metaDataLength(), block.bodyLength(), block.offset());
  }
  static encode(b, fileBlock) {
    const { metaDataLength } = fileBlock;
    const offset = new Long2(fileBlock.offset, 0);
    const bodyLength = new Long2(fileBlock.bodyLength, 0);
    return Block.createBlock(b, offset, metaDataLength, bodyLength);
  }
};

// ../../node_modules/apache-arrow/io/interfaces.mjs
var ITERATOR_DONE = Object.freeze({ done: true, value: void 0 });
var ArrowJSON = class {
  constructor(_json) {
    this._json = _json;
  }
  get schema() {
    return this._json["schema"];
  }
  get batches() {
    return this._json["batches"] || [];
  }
  get dictionaries() {
    return this._json["dictionaries"] || [];
  }
};
var ReadableInterop = class {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(writable, options) {
    return this._getNodeStream().pipe(writable, options);
  }
  pipeTo(writable, options) {
    return this._getDOMStream().pipeTo(writable, options);
  }
  pipeThrough(duplex, options) {
    return this._getDOMStream().pipeThrough(duplex, options);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
};
var AsyncQueue = class extends ReadableInterop {
  constructor() {
    super();
    this._values = [];
    this.resolvers = [];
    this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(reason) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.return(reason);
    });
  }
  write(value) {
    if (this._ensureOpen()) {
      this.resolvers.length <= 0 ? this._values.push(value) : this.resolvers.shift().resolve({ done: false, value });
    }
  }
  abort(value) {
    if (this._closedPromiseResolve) {
      this.resolvers.length <= 0 ? this._error = { error: value } : this.resolvers.shift().reject({ done: true, value });
    }
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers } = this;
      while (resolvers.length > 0) {
        resolvers.shift().resolve(ITERATOR_DONE);
      }
      this._closedPromiseResolve();
      this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(options) {
    return adapters_default.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, options);
  }
  toNodeStream(options) {
    return adapters_default.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, options);
  }
  throw(_) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.abort(_);
      return ITERATOR_DONE;
    });
  }
  return(_) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.close();
      return ITERATOR_DONE;
    });
  }
  read(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "read")).value;
    });
  }
  peek(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "peek")).value;
    });
  }
  next(..._args) {
    if (this._values.length > 0) {
      return Promise.resolve({ done: false, value: this._values.shift() });
    } else if (this._error) {
      return Promise.reject({ done: true, value: this._error.error });
    } else if (!this._closedPromiseResolve) {
      return Promise.resolve(ITERATOR_DONE);
    } else {
      return new Promise((resolve, reject) => {
        this.resolvers.push({ resolve, reject });
      });
    }
  }
  _ensureOpen() {
    if (this._closedPromiseResolve) {
      return true;
    }
    throw new Error(`AsyncQueue is closed`);
  }
};

// ../../node_modules/apache-arrow/io/stream.mjs
var AsyncByteQueue = class extends AsyncQueue {
  write(value) {
    if ((value = toUint8Array(value)).byteLength > 0) {
      return super.write(value);
    }
  }
  toString(sync = false) {
    return sync ? decodeUtf8(this.toUint8Array(true)) : this.toUint8Array(false).then(decodeUtf8);
  }
  toUint8Array(sync = false) {
    return sync ? joinUint8Arrays(this._values)[0] : (() => __awaiter(this, void 0, void 0, function* () {
      var e_1, _a5;
      const buffers = [];
      let byteLength = 0;
      try {
        for (var _b2 = __asyncValues(this), _c2; _c2 = yield _b2.next(), !_c2.done; ) {
          const chunk = _c2.value;
          buffers.push(chunk);
          byteLength += chunk.byteLength;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a5 = _b2.return))
            yield _a5.call(_b2);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return joinUint8Arrays(buffers, byteLength)[0];
    }))();
  }
};
var ByteStream = class {
  constructor(source) {
    if (source) {
      this.source = new ByteStreamSource(adapters_default.fromIterable(source));
    }
  }
  [Symbol.iterator]() {
    return this;
  }
  next(value) {
    return this.source.next(value);
  }
  throw(value) {
    return this.source.throw(value);
  }
  return(value) {
    return this.source.return(value);
  }
  peek(size) {
    return this.source.peek(size);
  }
  read(size) {
    return this.source.read(size);
  }
};
var AsyncByteStream = class {
  constructor(source) {
    if (source instanceof AsyncByteStream) {
      this.source = source.source;
    } else if (source instanceof AsyncByteQueue) {
      this.source = new AsyncByteStreamSource(adapters_default.fromAsyncIterable(source));
    } else if (isReadableNodeStream(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromNodeStream(source));
    } else if (isReadableDOMStream(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromDOMStream(source));
    } else if (isFetchResponse(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromDOMStream(source.body));
    } else if (isIterable(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromIterable(source));
    } else if (isPromise(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromAsyncIterable(source));
    } else if (isAsyncIterable(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromAsyncIterable(source));
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(value) {
    return this.source.next(value);
  }
  throw(value) {
    return this.source.throw(value);
  }
  return(value) {
    return this.source.return(value);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(reason) {
    return this.source.cancel(reason);
  }
  peek(size) {
    return this.source.peek(size);
  }
  read(size) {
    return this.source.read(size);
  }
};
var ByteStreamSource = class {
  constructor(source) {
    this.source = source;
  }
  cancel(reason) {
    this.return(reason);
  }
  peek(size) {
    return this.next(size, "peek").value;
  }
  read(size) {
    return this.next(size, "read").value;
  }
  next(size, cmd = "read") {
    return this.source.next({ cmd, size });
  }
  throw(value) {
    return Object.create(this.source.throw && this.source.throw(value) || ITERATOR_DONE);
  }
  return(value) {
    return Object.create(this.source.return && this.source.return(value) || ITERATOR_DONE);
  }
};
var AsyncByteStreamSource = class {
  constructor(source) {
    this.source = source;
    this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
  }
  cancel(reason) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.return(reason);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "read")).value;
    });
  }
  peek(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "peek")).value;
    });
  }
  next(size, cmd = "read") {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.source.next({ cmd, size });
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = this.source.throw && (yield this.source.throw(value)) || ITERATOR_DONE;
      this._closedPromiseResolve && this._closedPromiseResolve();
      this._closedPromiseResolve = void 0;
      return Object.create(result);
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = this.source.return && (yield this.source.return(value)) || ITERATOR_DONE;
      this._closedPromiseResolve && this._closedPromiseResolve();
      this._closedPromiseResolve = void 0;
      return Object.create(result);
    });
  }
};

// ../../node_modules/apache-arrow/io/file.mjs
var RandomAccessFile = class extends ByteStream {
  constructor(buffer, byteLength) {
    super();
    this.position = 0;
    this.buffer = toUint8Array(buffer);
    this.size = typeof byteLength === "undefined" ? this.buffer.byteLength : byteLength;
  }
  readInt32(position) {
    const { buffer, byteOffset } = this.readAt(position, 4);
    return new DataView(buffer, byteOffset).getInt32(0, true);
  }
  seek(position) {
    this.position = Math.min(position, this.size);
    return position < this.size;
  }
  read(nBytes) {
    const { buffer, size, position } = this;
    if (buffer && position < size) {
      if (typeof nBytes !== "number") {
        nBytes = Number.POSITIVE_INFINITY;
      }
      this.position = Math.min(size, position + Math.min(size - position, nBytes));
      return buffer.subarray(position, this.position);
    }
    return null;
  }
  readAt(position, nBytes) {
    const buf = this.buffer;
    const end = Math.min(this.size, position + nBytes);
    return buf ? buf.subarray(position, end) : new Uint8Array(nBytes);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(value) {
    this.close();
    return { done: true, value };
  }
  return(value) {
    this.close();
    return { done: true, value };
  }
};
var AsyncRandomAccessFile = class extends AsyncByteStream {
  constructor(file, byteLength) {
    super();
    this.position = 0;
    this._handle = file;
    if (typeof byteLength === "number") {
      this.size = byteLength;
    } else {
      this._pending = (() => __awaiter(this, void 0, void 0, function* () {
        this.size = (yield file.stat()).size;
        delete this._pending;
      }))();
    }
  }
  readInt32(position) {
    return __awaiter(this, void 0, void 0, function* () {
      const { buffer, byteOffset } = yield this.readAt(position, 4);
      return new DataView(buffer, byteOffset).getInt32(0, true);
    });
  }
  seek(position) {
    return __awaiter(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      this.position = Math.min(position, this.size);
      return position < this.size;
    });
  }
  read(nBytes) {
    return __awaiter(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: file, size, position } = this;
      if (file && position < size) {
        if (typeof nBytes !== "number") {
          nBytes = Number.POSITIVE_INFINITY;
        }
        let pos = position, offset = 0, bytesRead = 0;
        const end = Math.min(size, pos + Math.min(size - pos, nBytes));
        const buffer = new Uint8Array(Math.max(0, (this.position = end) - pos));
        while ((pos += bytesRead) < end && (offset += bytesRead) < buffer.byteLength) {
          ({ bytesRead } = yield file.read(buffer, offset, buffer.byteLength - offset, pos));
        }
        return buffer;
      }
      return null;
    });
  }
  readAt(position, nBytes) {
    return __awaiter(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: file, size } = this;
      if (file && position + nBytes < size) {
        const end = Math.min(size, position + nBytes);
        const buffer = new Uint8Array(end - position);
        return (yield file.read(buffer, 0, nBytes, position)).buffer;
      }
      return new Uint8Array(nBytes);
    });
  }
  close() {
    return __awaiter(this, void 0, void 0, function* () {
      const f = this._handle;
      this._handle = null;
      f && (yield f.close());
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.close();
      return { done: true, value };
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.close();
      return { done: true, value };
    });
  }
};

// ../../node_modules/apache-arrow/util/int.mjs
var int_exports = {};
__export(int_exports, {
  BaseInt64: () => BaseInt64,
  Int128: () => Int128,
  Int64: () => Int642,
  Uint64: () => Uint642
});
var carryBit16 = 1 << 16;
function intAsHex(value) {
  if (value < 0) {
    value = 4294967295 + value + 1;
  }
  return `0x${value.toString(16)}`;
}
var kInt32DecimalDigits = 8;
var kPowersOfTen = [
  1,
  10,
  100,
  1e3,
  1e4,
  1e5,
  1e6,
  1e7,
  1e8
];
var BaseInt64 = class {
  constructor(buffer) {
    this.buffer = buffer;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(other) {
    const L = new Uint32Array([
      this.buffer[1] >>> 16,
      this.buffer[1] & 65535,
      this.buffer[0] >>> 16,
      this.buffer[0] & 65535
    ]);
    const R = new Uint32Array([
      other.buffer[1] >>> 16,
      other.buffer[1] & 65535,
      other.buffer[0] >>> 16,
      other.buffer[0] & 65535
    ]);
    let product = L[3] * R[3];
    this.buffer[0] = product & 65535;
    let sum2 = product >>> 16;
    product = L[2] * R[3];
    sum2 += product;
    product = L[3] * R[2] >>> 0;
    sum2 += product;
    this.buffer[0] += sum2 << 16;
    this.buffer[1] = sum2 >>> 0 < product ? carryBit16 : 0;
    this.buffer[1] += sum2 >>> 16;
    this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
    this.buffer[1] += L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0] << 16;
    return this;
  }
  _plus(other) {
    const sum2 = this.buffer[0] + other.buffer[0] >>> 0;
    this.buffer[1] += other.buffer[1];
    if (sum2 < this.buffer[0] >>> 0) {
      ++this.buffer[1];
    }
    this.buffer[0] = sum2;
  }
  lessThan(other) {
    return this.buffer[1] < other.buffer[1] || this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0];
  }
  equals(other) {
    return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0];
  }
  greaterThan(other) {
    return other.lessThan(this);
  }
  hex() {
    return `${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
  }
};
var Uint642 = class extends BaseInt64 {
  times(other) {
    this._times(other);
    return this;
  }
  plus(other) {
    this._plus(other);
    return this;
  }
  static from(val, out_buffer = new Uint32Array(2)) {
    return Uint642.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(2)) {
    return Uint642.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(2)) {
    const length = str.length;
    const out = new Uint642(out_buffer);
    for (let posn = 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Uint642(new Uint32Array([Number.parseInt(str.slice(posn, posn + group), 10), 0]));
      const multiple = new Uint642(new Uint32Array([kPowersOfTen[group], 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 2);
    for (let i = -1, n = values.length; ++i < n; ) {
      Uint642.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
    }
    return data;
  }
  static multiply(left, right) {
    const rtrn = new Uint642(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Uint642(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
};
var Int642 = class extends BaseInt64 {
  negate() {
    this.buffer[0] = ~this.buffer[0] + 1;
    this.buffer[1] = ~this.buffer[1];
    if (this.buffer[0] == 0) {
      ++this.buffer[1];
    }
    return this;
  }
  times(other) {
    this._times(other);
    return this;
  }
  plus(other) {
    this._plus(other);
    return this;
  }
  lessThan(other) {
    const this_high = this.buffer[1] << 0;
    const other_high = other.buffer[1] << 0;
    return this_high < other_high || this_high === other_high && this.buffer[0] < other.buffer[0];
  }
  static from(val, out_buffer = new Uint32Array(2)) {
    return Int642.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(2)) {
    return Int642.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(2)) {
    const negate = str.startsWith("-");
    const length = str.length;
    const out = new Int642(out_buffer);
    for (let posn = negate ? 1 : 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Int642(new Uint32Array([Number.parseInt(str.slice(posn, posn + group), 10), 0]));
      const multiple = new Int642(new Uint32Array([kPowersOfTen[group], 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return negate ? out.negate() : out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 2);
    for (let i = -1, n = values.length; ++i < n; ) {
      Int642.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
    }
    return data;
  }
  static multiply(left, right) {
    const rtrn = new Int642(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Int642(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
};
var Int128 = class {
  constructor(buffer) {
    this.buffer = buffer;
  }
  high() {
    return new Int642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new Int642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    this.buffer[0] = ~this.buffer[0] + 1;
    this.buffer[1] = ~this.buffer[1];
    this.buffer[2] = ~this.buffer[2];
    this.buffer[3] = ~this.buffer[3];
    if (this.buffer[0] == 0) {
      ++this.buffer[1];
    }
    if (this.buffer[1] == 0) {
      ++this.buffer[2];
    }
    if (this.buffer[2] == 0) {
      ++this.buffer[3];
    }
    return this;
  }
  times(other) {
    const L0 = new Uint642(new Uint32Array([this.buffer[3], 0]));
    const L1 = new Uint642(new Uint32Array([this.buffer[2], 0]));
    const L2 = new Uint642(new Uint32Array([this.buffer[1], 0]));
    const L3 = new Uint642(new Uint32Array([this.buffer[0], 0]));
    const R0 = new Uint642(new Uint32Array([other.buffer[3], 0]));
    const R1 = new Uint642(new Uint32Array([other.buffer[2], 0]));
    const R2 = new Uint642(new Uint32Array([other.buffer[1], 0]));
    const R3 = new Uint642(new Uint32Array([other.buffer[0], 0]));
    let product = Uint642.multiply(L3, R3);
    this.buffer[0] = product.low();
    const sum2 = new Uint642(new Uint32Array([product.high(), 0]));
    product = Uint642.multiply(L2, R3);
    sum2.plus(product);
    product = Uint642.multiply(L3, R2);
    sum2.plus(product);
    this.buffer[1] = sum2.low();
    this.buffer[3] = sum2.lessThan(product) ? 1 : 0;
    this.buffer[2] = sum2.high();
    const high = new Uint642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
    high.plus(Uint642.multiply(L1, R3)).plus(Uint642.multiply(L2, R2)).plus(Uint642.multiply(L3, R1));
    this.buffer[3] += Uint642.multiply(L0, R3).plus(Uint642.multiply(L1, R2)).plus(Uint642.multiply(L2, R1)).plus(Uint642.multiply(L3, R0)).low();
    return this;
  }
  plus(other) {
    const sums = new Uint32Array(4);
    sums[3] = this.buffer[3] + other.buffer[3] >>> 0;
    sums[2] = this.buffer[2] + other.buffer[2] >>> 0;
    sums[1] = this.buffer[1] + other.buffer[1] >>> 0;
    sums[0] = this.buffer[0] + other.buffer[0] >>> 0;
    if (sums[0] < this.buffer[0] >>> 0) {
      ++sums[1];
    }
    if (sums[1] < this.buffer[1] >>> 0) {
      ++sums[2];
    }
    if (sums[2] < this.buffer[2] >>> 0) {
      ++sums[3];
    }
    this.buffer[3] = sums[3];
    this.buffer[2] = sums[2];
    this.buffer[1] = sums[1];
    this.buffer[0] = sums[0];
    return this;
  }
  hex() {
    return `${intAsHex(this.buffer[3])} ${intAsHex(this.buffer[2])} ${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
  }
  static multiply(left, right) {
    const rtrn = new Int128(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Int128(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
  static from(val, out_buffer = new Uint32Array(4)) {
    return Int128.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(4)) {
    return Int128.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(4)) {
    const negate = str.startsWith("-");
    const length = str.length;
    const out = new Int128(out_buffer);
    for (let posn = negate ? 1 : 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Int128(new Uint32Array([Number.parseInt(str.slice(posn, posn + group), 10), 0, 0, 0]));
      const multiple = new Int128(new Uint32Array([kPowersOfTen[group], 0, 0, 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return negate ? out.negate() : out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 4);
    for (let i = -1, n = values.length; ++i < n; ) {
      Int128.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 4 * 4 * i, 4));
    }
    return data;
  }
};

// ../../node_modules/apache-arrow/visitor/vectorloader.mjs
var VectorLoader = class extends Visitor {
  constructor(bytes, nodes, buffers, dictionaries) {
    super();
    this.nodesIndex = -1;
    this.buffersIndex = -1;
    this.bytes = bytes;
    this.nodes = nodes;
    this.buffers = buffers;
    this.dictionaries = dictionaries;
  }
  visit(node) {
    return super.visit(node instanceof Field2 ? node.type : node);
  }
  visitNull(type, { length } = this.nextFieldNode()) {
    return makeData({ type, length });
  }
  visitBool(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitInt(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitFloat(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitUtf8(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), valueOffsets: this.readOffsets(type), data: this.readData(type) });
  }
  visitBinary(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), valueOffsets: this.readOffsets(type), data: this.readData(type) });
  }
  visitFixedSizeBinary(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitDate(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitTimestamp(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitTime(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitDecimal(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitList(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), valueOffsets: this.readOffsets(type), "child": this.visit(type.children[0]) });
  }
  visitStruct(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), children: this.visitMany(type.children) });
  }
  visitUnion(type) {
    return type.mode === UnionMode.Sparse ? this.visitSparseUnion(type) : this.visitDenseUnion(type);
  }
  visitDenseUnion(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), typeIds: this.readTypeIds(type), valueOffsets: this.readOffsets(type), children: this.visitMany(type.children) });
  }
  visitSparseUnion(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), typeIds: this.readTypeIds(type), children: this.visitMany(type.children) });
  }
  visitDictionary(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type.indices), dictionary: this.readDictionary(type) });
  }
  visitInterval(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), data: this.readData(type) });
  }
  visitFixedSizeList(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), "child": this.visit(type.children[0]) });
  }
  visitMap(type, { length, nullCount } = this.nextFieldNode()) {
    return makeData({ type, length, nullCount, nullBitmap: this.readNullBitmap(type, nullCount), valueOffsets: this.readOffsets(type), "child": this.visit(type.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(type, nullCount, buffer = this.nextBufferRange()) {
    return nullCount > 0 && this.readData(type, buffer) || new Uint8Array(0);
  }
  readOffsets(type, buffer) {
    return this.readData(type, buffer);
  }
  readTypeIds(type, buffer) {
    return this.readData(type, buffer);
  }
  readData(_type, { length, offset } = this.nextBufferRange()) {
    return this.bytes.subarray(offset, offset + length);
  }
  readDictionary(type) {
    return this.dictionaries.get(type.id);
  }
};
var JSONVectorLoader = class extends VectorLoader {
  constructor(sources, nodes, buffers, dictionaries) {
    super(new Uint8Array(0), nodes, buffers, dictionaries);
    this.sources = sources;
  }
  readNullBitmap(_type, nullCount, { offset } = this.nextBufferRange()) {
    return nullCount <= 0 ? new Uint8Array(0) : packBools(this.sources[offset]);
  }
  readOffsets(_type, { offset } = this.nextBufferRange()) {
    return toArrayBufferView(Uint8Array, toArrayBufferView(Int32Array, this.sources[offset]));
  }
  readTypeIds(type, { offset } = this.nextBufferRange()) {
    return toArrayBufferView(Uint8Array, toArrayBufferView(type.ArrayType, this.sources[offset]));
  }
  readData(type, { offset } = this.nextBufferRange()) {
    const { sources } = this;
    if (DataType.isTimestamp(type)) {
      return toArrayBufferView(Uint8Array, Int642.convertArray(sources[offset]));
    } else if ((DataType.isInt(type) || DataType.isTime(type)) && type.bitWidth === 64) {
      return toArrayBufferView(Uint8Array, Int642.convertArray(sources[offset]));
    } else if (DataType.isDate(type) && type.unit === DateUnit.MILLISECOND) {
      return toArrayBufferView(Uint8Array, Int642.convertArray(sources[offset]));
    } else if (DataType.isDecimal(type)) {
      return toArrayBufferView(Uint8Array, Int128.convertArray(sources[offset]));
    } else if (DataType.isBinary(type) || DataType.isFixedSizeBinary(type)) {
      return binaryDataFromJSON(sources[offset]);
    } else if (DataType.isBool(type)) {
      return packBools(sources[offset]);
    } else if (DataType.isUtf8(type)) {
      return encodeUtf8(sources[offset].join(""));
    }
    return toArrayBufferView(Uint8Array, toArrayBufferView(type.ArrayType, sources[offset].map((x) => +x)));
  }
};
function binaryDataFromJSON(values) {
  const joined = values.join("");
  const data = new Uint8Array(joined.length / 2);
  for (let i = 0; i < joined.length; i += 2) {
    data[i >> 1] = Number.parseInt(joined.slice(i, i + 2), 16);
  }
  return data;
}

// ../../node_modules/apache-arrow/builder/binary.mjs
var BinaryBuilder = class extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._values = new BufferBuilder(new Uint8Array(0));
  }
  get byteLength() {
    let size = this._pendingLength + this.length * 4;
    this._offsets && (size += this._offsets.byteLength);
    this._values && (size += this._values.byteLength);
    this._nulls && (size += this._nulls.byteLength);
    return size;
  }
  setValue(index, value) {
    return super.setValue(index, toUint8Array(value));
  }
  _flushPending(pending, pendingLength) {
    const offsets = this._offsets;
    const data = this._values.reserve(pendingLength).buffer;
    let offset = 0;
    for (const [index, value] of pending) {
      if (value === void 0) {
        offsets.set(index, 0);
      } else {
        const length = value.length;
        data.set(value, offset);
        offsets.set(index, length);
        offset += length;
      }
    }
  }
};

// ../../node_modules/apache-arrow/builder/bool.mjs
var BoolBuilder = class extends Builder {
  constructor(options) {
    super(options);
    this._values = new BitmapBufferBuilder();
  }
  setValue(index, value) {
    this._values.set(index, +value);
  }
};

// ../../node_modules/apache-arrow/builder/date.mjs
var DateBuilder = class extends FixedWidthBuilder {
};
DateBuilder.prototype._setValue = setDate;
var DateDayBuilder = class extends DateBuilder {
};
DateDayBuilder.prototype._setValue = setDateDay;
var DateMillisecondBuilder = class extends DateBuilder {
};
DateMillisecondBuilder.prototype._setValue = setDateMillisecond;

// ../../node_modules/apache-arrow/builder/decimal.mjs
var DecimalBuilder = class extends FixedWidthBuilder {
};
DecimalBuilder.prototype._setValue = setDecimal;

// ../../node_modules/apache-arrow/builder/dictionary.mjs
var DictionaryBuilder = class extends Builder {
  constructor({ "type": type, "nullValues": nulls, "dictionaryHashFunction": hashFn }) {
    super({ type: new Dictionary(type.dictionary, type.indices, type.id, type.isOrdered) });
    this._nulls = null;
    this._dictionaryOffset = 0;
    this._keysToIndices = /* @__PURE__ */ Object.create(null);
    this.indices = makeBuilder({ "type": this.type.indices, "nullValues": nulls });
    this.dictionary = makeBuilder({ "type": this.type.dictionary, "nullValues": null });
    if (typeof hashFn === "function") {
      this.valueToKey = hashFn;
    }
  }
  get values() {
    return this.indices.values;
  }
  get nullCount() {
    return this.indices.nullCount;
  }
  get nullBitmap() {
    return this.indices.nullBitmap;
  }
  get byteLength() {
    return this.indices.byteLength + this.dictionary.byteLength;
  }
  get reservedLength() {
    return this.indices.reservedLength + this.dictionary.reservedLength;
  }
  get reservedByteLength() {
    return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
  }
  isValid(value) {
    return this.indices.isValid(value);
  }
  setValid(index, valid) {
    const indices = this.indices;
    valid = indices.setValid(index, valid);
    this.length = indices.length;
    return valid;
  }
  setValue(index, value) {
    const keysToIndices = this._keysToIndices;
    const key = this.valueToKey(value);
    let idx = keysToIndices[key];
    if (idx === void 0) {
      keysToIndices[key] = idx = this._dictionaryOffset + this.dictionary.append(value).length - 1;
    }
    return this.indices.setValue(index, idx);
  }
  flush() {
    const type = this.type;
    const prev = this._dictionary;
    const curr = this.dictionary.toVector();
    const data = this.indices.flush().clone(type);
    data.dictionary = prev ? prev.concat(curr) : curr;
    this.finished || (this._dictionaryOffset += curr.length);
    this._dictionary = data.dictionary;
    this.clear();
    return data;
  }
  finish() {
    this.indices.finish();
    this.dictionary.finish();
    this._dictionaryOffset = 0;
    this._keysToIndices = /* @__PURE__ */ Object.create(null);
    return super.finish();
  }
  clear() {
    this.indices.clear();
    this.dictionary.clear();
    return super.clear();
  }
  valueToKey(val) {
    return typeof val === "string" ? val : `${val}`;
  }
};

// ../../node_modules/apache-arrow/builder/fixedsizebinary.mjs
var FixedSizeBinaryBuilder = class extends FixedWidthBuilder {
};
FixedSizeBinaryBuilder.prototype._setValue = setFixedSizeBinary;

// ../../node_modules/apache-arrow/builder/fixedsizelist.mjs
var FixedSizeListBuilder = class extends Builder {
  setValue(index, value) {
    const [child] = this.children;
    const start = index * this.stride;
    for (let i = -1, n = value.length; ++i < n; ) {
      child.set(start + i, value[i]);
    }
  }
  addChild(child, name = "0") {
    if (this.numChildren > 0) {
      throw new Error("FixedSizeListBuilder can only have one child.");
    }
    const childIndex = this.children.push(child);
    this.type = new FixedSizeList(this.type.listSize, new Field2(name, child.type, true));
    return childIndex;
  }
};

// ../../node_modules/apache-arrow/builder/float.mjs
var FloatBuilder = class extends FixedWidthBuilder {
  setValue(index, value) {
    this._values.set(index, value);
  }
};
var Float16Builder = class extends FloatBuilder {
  setValue(index, value) {
    super.setValue(index, float64ToUint16(value));
  }
};
var Float32Builder = class extends FloatBuilder {
};
var Float64Builder = class extends FloatBuilder {
};

// ../../node_modules/apache-arrow/builder/interval.mjs
var IntervalBuilder = class extends FixedWidthBuilder {
};
IntervalBuilder.prototype._setValue = setIntervalValue;
var IntervalDayTimeBuilder = class extends IntervalBuilder {
};
IntervalDayTimeBuilder.prototype._setValue = setIntervalDayTime;
var IntervalYearMonthBuilder = class extends IntervalBuilder {
};
IntervalYearMonthBuilder.prototype._setValue = setIntervalYearMonth;

// ../../node_modules/apache-arrow/builder/int.mjs
var IntBuilder = class extends FixedWidthBuilder {
  setValue(index, value) {
    this._values.set(index, value);
  }
};
var Int8Builder = class extends IntBuilder {
};
var Int16Builder = class extends IntBuilder {
};
var Int32Builder = class extends IntBuilder {
};
var Int64Builder = class extends IntBuilder {
};
var Uint8Builder = class extends IntBuilder {
};
var Uint16Builder = class extends IntBuilder {
};
var Uint32Builder = class extends IntBuilder {
};
var Uint64Builder = class extends IntBuilder {
};

// ../../node_modules/apache-arrow/builder/list.mjs
var ListBuilder = class extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._offsets = new OffsetsBufferBuilder();
  }
  addChild(child, name = "0") {
    if (this.numChildren > 0) {
      throw new Error("ListBuilder can only have one child.");
    }
    this.children[this.numChildren] = child;
    this.type = new List(new Field2(name, child.type, true));
    return this.numChildren - 1;
  }
  _flushPending(pending) {
    const offsets = this._offsets;
    const [child] = this.children;
    for (const [index, value] of pending) {
      if (typeof value === "undefined") {
        offsets.set(index, 0);
      } else {
        const n = value.length;
        const start = offsets.set(index, n).buffer[index];
        for (let i = -1; ++i < n; ) {
          child.set(start + i, value[i]);
        }
      }
    }
  }
};

// ../../node_modules/apache-arrow/builder/map.mjs
var MapBuilder = class extends VariableWidthBuilder {
  set(index, value) {
    return super.set(index, value);
  }
  setValue(index, value) {
    const row = value instanceof Map ? value : new Map(Object.entries(value));
    const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
    const current = pending.get(index);
    current && (this._pendingLength -= current.size);
    this._pendingLength += row.size;
    pending.set(index, row);
  }
  addChild(child, name = `${this.numChildren}`) {
    if (this.numChildren > 0) {
      throw new Error("ListBuilder can only have one child.");
    }
    this.children[this.numChildren] = child;
    this.type = new Map_(new Field2(name, child.type, true), this.type.keysSorted);
    return this.numChildren - 1;
  }
  _flushPending(pending) {
    const offsets = this._offsets;
    const [child] = this.children;
    for (const [index, value] of pending) {
      if (value === void 0) {
        offsets.set(index, 0);
      } else {
        let { [index]: idx, [index + 1]: end } = offsets.set(index, value.size).buffer;
        for (const val of value.entries()) {
          child.set(idx, val);
          if (++idx >= end)
            break;
        }
      }
    }
  }
};

// ../../node_modules/apache-arrow/builder/null.mjs
var NullBuilder = class extends Builder {
  setValue(index, value) {
  }
  setValid(index, valid) {
    this.length = Math.max(index + 1, this.length);
    return valid;
  }
};

// ../../node_modules/apache-arrow/builder/struct.mjs
var StructBuilder = class extends Builder {
  setValue(index, value) {
    const { children, type } = this;
    switch (Array.isArray(value) || value.constructor) {
      case true:
        return type.children.forEach((_, i) => children[i].set(index, value[i]));
      case Map:
        return type.children.forEach((f, i) => children[i].set(index, value.get(f.name)));
      default:
        return type.children.forEach((f, i) => children[i].set(index, value[f.name]));
    }
  }
  setValid(index, valid) {
    if (!super.setValid(index, valid)) {
      this.children.forEach((child) => child.setValid(index, valid));
    }
    return valid;
  }
  addChild(child, name = `${this.numChildren}`) {
    const childIndex = this.children.push(child);
    this.type = new Struct([...this.type.children, new Field2(name, child.type, true)]);
    return childIndex;
  }
};

// ../../node_modules/apache-arrow/builder/timestamp.mjs
var TimestampBuilder = class extends FixedWidthBuilder {
};
TimestampBuilder.prototype._setValue = setTimestamp;
var TimestampSecondBuilder = class extends TimestampBuilder {
};
TimestampSecondBuilder.prototype._setValue = setTimestampSecond;
var TimestampMillisecondBuilder = class extends TimestampBuilder {
};
TimestampMillisecondBuilder.prototype._setValue = setTimestampMillisecond;
var TimestampMicrosecondBuilder = class extends TimestampBuilder {
};
TimestampMicrosecondBuilder.prototype._setValue = setTimestampMicrosecond;
var TimestampNanosecondBuilder = class extends TimestampBuilder {
};
TimestampNanosecondBuilder.prototype._setValue = setTimestampNanosecond;

// ../../node_modules/apache-arrow/builder/time.mjs
var TimeBuilder = class extends FixedWidthBuilder {
};
TimeBuilder.prototype._setValue = setTime;
var TimeSecondBuilder = class extends TimeBuilder {
};
TimeSecondBuilder.prototype._setValue = setTimeSecond;
var TimeMillisecondBuilder = class extends TimeBuilder {
};
TimeMillisecondBuilder.prototype._setValue = setTimeMillisecond;
var TimeMicrosecondBuilder = class extends TimeBuilder {
};
TimeMicrosecondBuilder.prototype._setValue = setTimeMicrosecond;
var TimeNanosecondBuilder = class extends TimeBuilder {
};
TimeNanosecondBuilder.prototype._setValue = setTimeNanosecond;

// ../../node_modules/apache-arrow/builder/union.mjs
var UnionBuilder = class extends Builder {
  constructor(options) {
    super(options);
    this._typeIds = new DataBufferBuilder(new Int8Array(0), 1);
    if (typeof options["valueToChildTypeId"] === "function") {
      this._valueToChildTypeId = options["valueToChildTypeId"];
    }
  }
  get typeIdToChildIndex() {
    return this.type.typeIdToChildIndex;
  }
  append(value, childTypeId) {
    return this.set(this.length, value, childTypeId);
  }
  set(index, value, childTypeId) {
    if (childTypeId === void 0) {
      childTypeId = this._valueToChildTypeId(this, value, index);
    }
    if (this.setValid(index, this.isValid(value))) {
      this.setValue(index, value, childTypeId);
    }
    return this;
  }
  setValue(index, value, childTypeId) {
    this._typeIds.set(index, childTypeId);
    const childIndex = this.type.typeIdToChildIndex[childTypeId];
    const child = this.children[childIndex];
    child === null || child === void 0 ? void 0 : child.set(index, value);
  }
  addChild(child, name = `${this.children.length}`) {
    const childTypeId = this.children.push(child);
    const { type: { children, mode, typeIds } } = this;
    const fields = [...children, new Field2(name, child.type)];
    this.type = new Union_(mode, [...typeIds, childTypeId], fields);
    return childTypeId;
  }
  _valueToChildTypeId(builder, value, offset) {
    throw new Error(`Cannot map UnionBuilder value to child typeId. Pass the \`childTypeId\` as the second argument to unionBuilder.append(), or supply a \`valueToChildTypeId\` function as part of the UnionBuilder constructor options.`);
  }
};
var SparseUnionBuilder = class extends UnionBuilder {
};
var DenseUnionBuilder = class extends UnionBuilder {
  constructor(options) {
    super(options);
    this._offsets = new DataBufferBuilder(new Int32Array(0));
  }
  setValue(index, value, childTypeId) {
    const id = this._typeIds.set(index, childTypeId).buffer[index];
    const child = this.getChildAt(this.type.typeIdToChildIndex[id]);
    const denseIndex = this._offsets.set(index, child.length).buffer[index];
    child === null || child === void 0 ? void 0 : child.set(denseIndex, value);
  }
};

// ../../node_modules/apache-arrow/builder/utf8.mjs
var Utf8Builder = class extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._values = new BufferBuilder(new Uint8Array(0));
  }
  get byteLength() {
    let size = this._pendingLength + this.length * 4;
    this._offsets && (size += this._offsets.byteLength);
    this._values && (size += this._values.byteLength);
    this._nulls && (size += this._nulls.byteLength);
    return size;
  }
  setValue(index, value) {
    return super.setValue(index, encodeUtf8(value));
  }
  _flushPending(pending, pendingLength) {
  }
};
Utf8Builder.prototype._flushPending = BinaryBuilder.prototype._flushPending;

// ../../node_modules/apache-arrow/visitor/builderctor.mjs
var GetBuilderCtor = class extends Visitor {
  visitNull() {
    return NullBuilder;
  }
  visitBool() {
    return BoolBuilder;
  }
  visitInt() {
    return IntBuilder;
  }
  visitInt8() {
    return Int8Builder;
  }
  visitInt16() {
    return Int16Builder;
  }
  visitInt32() {
    return Int32Builder;
  }
  visitInt64() {
    return Int64Builder;
  }
  visitUint8() {
    return Uint8Builder;
  }
  visitUint16() {
    return Uint16Builder;
  }
  visitUint32() {
    return Uint32Builder;
  }
  visitUint64() {
    return Uint64Builder;
  }
  visitFloat() {
    return FloatBuilder;
  }
  visitFloat16() {
    return Float16Builder;
  }
  visitFloat32() {
    return Float32Builder;
  }
  visitFloat64() {
    return Float64Builder;
  }
  visitUtf8() {
    return Utf8Builder;
  }
  visitBinary() {
    return BinaryBuilder;
  }
  visitFixedSizeBinary() {
    return FixedSizeBinaryBuilder;
  }
  visitDate() {
    return DateBuilder;
  }
  visitDateDay() {
    return DateDayBuilder;
  }
  visitDateMillisecond() {
    return DateMillisecondBuilder;
  }
  visitTimestamp() {
    return TimestampBuilder;
  }
  visitTimestampSecond() {
    return TimestampSecondBuilder;
  }
  visitTimestampMillisecond() {
    return TimestampMillisecondBuilder;
  }
  visitTimestampMicrosecond() {
    return TimestampMicrosecondBuilder;
  }
  visitTimestampNanosecond() {
    return TimestampNanosecondBuilder;
  }
  visitTime() {
    return TimeBuilder;
  }
  visitTimeSecond() {
    return TimeSecondBuilder;
  }
  visitTimeMillisecond() {
    return TimeMillisecondBuilder;
  }
  visitTimeMicrosecond() {
    return TimeMicrosecondBuilder;
  }
  visitTimeNanosecond() {
    return TimeNanosecondBuilder;
  }
  visitDecimal() {
    return DecimalBuilder;
  }
  visitList() {
    return ListBuilder;
  }
  visitStruct() {
    return StructBuilder;
  }
  visitUnion() {
    return UnionBuilder;
  }
  visitDenseUnion() {
    return DenseUnionBuilder;
  }
  visitSparseUnion() {
    return SparseUnionBuilder;
  }
  visitDictionary() {
    return DictionaryBuilder;
  }
  visitInterval() {
    return IntervalBuilder;
  }
  visitIntervalDayTime() {
    return IntervalDayTimeBuilder;
  }
  visitIntervalYearMonth() {
    return IntervalYearMonthBuilder;
  }
  visitFixedSizeList() {
    return FixedSizeListBuilder;
  }
  visitMap() {
    return MapBuilder;
  }
};
var instance6 = new GetBuilderCtor();

// ../../node_modules/apache-arrow/visitor/typecomparator.mjs
var TypeComparator = class extends Visitor {
  compareSchemas(schema, other) {
    return schema === other || other instanceof schema.constructor && this.compareManyFields(schema.fields, other.fields);
  }
  compareManyFields(fields, others) {
    return fields === others || Array.isArray(fields) && Array.isArray(others) && fields.length === others.length && fields.every((f, i) => this.compareFields(f, others[i]));
  }
  compareFields(field, other) {
    return field === other || other instanceof field.constructor && field.name === other.name && field.nullable === other.nullable && this.visit(field.type, other.type);
  }
};
function compareConstructor(type, other) {
  return other instanceof type.constructor;
}
function compareAny(type, other) {
  return type === other || compareConstructor(type, other);
}
function compareInt(type, other) {
  return type === other || compareConstructor(type, other) && type.bitWidth === other.bitWidth && type.isSigned === other.isSigned;
}
function compareFloat(type, other) {
  return type === other || compareConstructor(type, other) && type.precision === other.precision;
}
function compareFixedSizeBinary(type, other) {
  return type === other || compareConstructor(type, other) && type.byteWidth === other.byteWidth;
}
function compareDate(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit;
}
function compareTimestamp(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit && type.timezone === other.timezone;
}
function compareTime(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit && type.bitWidth === other.bitWidth;
}
function compareList(type, other) {
  return type === other || compareConstructor(type, other) && type.children.length === other.children.length && instance7.compareManyFields(type.children, other.children);
}
function compareStruct(type, other) {
  return type === other || compareConstructor(type, other) && type.children.length === other.children.length && instance7.compareManyFields(type.children, other.children);
}
function compareUnion(type, other) {
  return type === other || compareConstructor(type, other) && type.mode === other.mode && type.typeIds.every((x, i) => x === other.typeIds[i]) && instance7.compareManyFields(type.children, other.children);
}
function compareDictionary(type, other) {
  return type === other || compareConstructor(type, other) && type.id === other.id && type.isOrdered === other.isOrdered && instance7.visit(type.indices, other.indices) && instance7.visit(type.dictionary, other.dictionary);
}
function compareInterval(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit;
}
function compareFixedSizeList(type, other) {
  return type === other || compareConstructor(type, other) && type.listSize === other.listSize && type.children.length === other.children.length && instance7.compareManyFields(type.children, other.children);
}
function compareMap(type, other) {
  return type === other || compareConstructor(type, other) && type.keysSorted === other.keysSorted && type.children.length === other.children.length && instance7.compareManyFields(type.children, other.children);
}
TypeComparator.prototype.visitNull = compareAny;
TypeComparator.prototype.visitBool = compareAny;
TypeComparator.prototype.visitInt = compareInt;
TypeComparator.prototype.visitInt8 = compareInt;
TypeComparator.prototype.visitInt16 = compareInt;
TypeComparator.prototype.visitInt32 = compareInt;
TypeComparator.prototype.visitInt64 = compareInt;
TypeComparator.prototype.visitUint8 = compareInt;
TypeComparator.prototype.visitUint16 = compareInt;
TypeComparator.prototype.visitUint32 = compareInt;
TypeComparator.prototype.visitUint64 = compareInt;
TypeComparator.prototype.visitFloat = compareFloat;
TypeComparator.prototype.visitFloat16 = compareFloat;
TypeComparator.prototype.visitFloat32 = compareFloat;
TypeComparator.prototype.visitFloat64 = compareFloat;
TypeComparator.prototype.visitUtf8 = compareAny;
TypeComparator.prototype.visitBinary = compareAny;
TypeComparator.prototype.visitFixedSizeBinary = compareFixedSizeBinary;
TypeComparator.prototype.visitDate = compareDate;
TypeComparator.prototype.visitDateDay = compareDate;
TypeComparator.prototype.visitDateMillisecond = compareDate;
TypeComparator.prototype.visitTimestamp = compareTimestamp;
TypeComparator.prototype.visitTimestampSecond = compareTimestamp;
TypeComparator.prototype.visitTimestampMillisecond = compareTimestamp;
TypeComparator.prototype.visitTimestampMicrosecond = compareTimestamp;
TypeComparator.prototype.visitTimestampNanosecond = compareTimestamp;
TypeComparator.prototype.visitTime = compareTime;
TypeComparator.prototype.visitTimeSecond = compareTime;
TypeComparator.prototype.visitTimeMillisecond = compareTime;
TypeComparator.prototype.visitTimeMicrosecond = compareTime;
TypeComparator.prototype.visitTimeNanosecond = compareTime;
TypeComparator.prototype.visitDecimal = compareAny;
TypeComparator.prototype.visitList = compareList;
TypeComparator.prototype.visitStruct = compareStruct;
TypeComparator.prototype.visitUnion = compareUnion;
TypeComparator.prototype.visitDenseUnion = compareUnion;
TypeComparator.prototype.visitSparseUnion = compareUnion;
TypeComparator.prototype.visitDictionary = compareDictionary;
TypeComparator.prototype.visitInterval = compareInterval;
TypeComparator.prototype.visitIntervalDayTime = compareInterval;
TypeComparator.prototype.visitIntervalYearMonth = compareInterval;
TypeComparator.prototype.visitFixedSizeList = compareFixedSizeList;
TypeComparator.prototype.visitMap = compareMap;
var instance7 = new TypeComparator();
function compareSchemas(schema, other) {
  return instance7.compareSchemas(schema, other);
}
function compareFields(field, other) {
  return instance7.compareFields(field, other);
}
function compareTypes(type, other) {
  return instance7.visit(type, other);
}

// ../../node_modules/apache-arrow/factories.mjs
function makeBuilder(options) {
  const type = options.type;
  const builder = new (instance6.getVisitFn(type)())(options);
  if (type.children && type.children.length > 0) {
    const children = options["children"] || [];
    const defaultOptions = { "nullValues": options["nullValues"] };
    const getChildOptions = Array.isArray(children) ? (_, i) => children[i] || defaultOptions : ({ name }) => children[name] || defaultOptions;
    for (const [index, field] of type.children.entries()) {
      const { type: type2 } = field;
      const opts = getChildOptions(field, index);
      builder.children.push(makeBuilder(Object.assign(Object.assign({}, opts), { type: type2 })));
    }
  }
  return builder;
}

// ../../node_modules/apache-arrow/util/recordbatch.mjs
function distributeVectorsIntoRecordBatches(schema, vecs) {
  return uniformlyDistributeChunksAcrossRecordBatches(schema, vecs.map((v) => v.data.concat()));
}
function uniformlyDistributeChunksAcrossRecordBatches(schema, cols) {
  const fields = [...schema.fields];
  const batches = [];
  const memo = { numBatches: cols.reduce((n, c) => Math.max(n, c.length), 0) };
  let numBatches = 0, batchLength = 0;
  let i = -1;
  const numColumns = cols.length;
  let child, children = [];
  while (memo.numBatches-- > 0) {
    for (batchLength = Number.POSITIVE_INFINITY, i = -1; ++i < numColumns; ) {
      children[i] = child = cols[i].shift();
      batchLength = Math.min(batchLength, child ? child.length : batchLength);
    }
    if (Number.isFinite(batchLength)) {
      children = distributeChildren(fields, batchLength, children, cols, memo);
      if (batchLength > 0) {
        batches[numBatches++] = makeData({
          type: new Struct(fields),
          length: batchLength,
          nullCount: 0,
          children: children.slice()
        });
      }
    }
  }
  return [
    schema = schema.assign(fields),
    batches.map((data) => new RecordBatch(schema, data))
  ];
}
function distributeChildren(fields, batchLength, children, columns, memo) {
  var _a5;
  const nullBitmapSize = (batchLength + 63 & ~63) >> 3;
  for (let i = -1, n = columns.length; ++i < n; ) {
    const child = children[i];
    const length = child === null || child === void 0 ? void 0 : child.length;
    if (length >= batchLength) {
      if (length === batchLength) {
        children[i] = child;
      } else {
        children[i] = child.slice(0, batchLength);
        memo.numBatches = Math.max(memo.numBatches, columns[i].unshift(child.slice(batchLength, length - batchLength)));
      }
    } else {
      const field = fields[i];
      fields[i] = field.clone({ nullable: true });
      children[i] = (_a5 = child === null || child === void 0 ? void 0 : child._changeLengthAndBackfillNullBitmap(batchLength)) !== null && _a5 !== void 0 ? _a5 : makeData({
        type: field.type,
        length: batchLength,
        nullCount: batchLength,
        nullBitmap: new Uint8Array(nullBitmapSize)
      });
    }
  }
  return children;
}

// ../../node_modules/apache-arrow/table.mjs
var _a3;
var Table = class {
  constructor(...args) {
    var _b2, _c2;
    if (args.length === 0) {
      this.batches = [];
      this.schema = new Schema2([]);
      this._offsets = [0];
      return this;
    }
    let schema;
    let offsets;
    if (args[0] instanceof Schema2) {
      schema = args.shift();
    }
    if (args[args.length - 1] instanceof Uint32Array) {
      offsets = args.pop();
    }
    const unwrap = (x) => {
      if (x) {
        if (x instanceof RecordBatch) {
          return [x];
        } else if (x instanceof Table) {
          return x.batches;
        } else if (x instanceof Data) {
          if (x.type instanceof Struct) {
            return [new RecordBatch(new Schema2(x.type.children), x)];
          }
        } else if (Array.isArray(x)) {
          return x.flatMap((v) => unwrap(v));
        } else if (typeof x[Symbol.iterator] === "function") {
          return [...x].flatMap((v) => unwrap(v));
        } else if (typeof x === "object") {
          const keys = Object.keys(x);
          const vecs = keys.map((k) => new Vector([x[k]]));
          const schema2 = new Schema2(keys.map((k, i) => new Field2(String(k), vecs[i].type)));
          const [, batches2] = distributeVectorsIntoRecordBatches(schema2, vecs);
          return batches2.length === 0 ? [new RecordBatch(x)] : batches2;
        }
      }
      return [];
    };
    const batches = args.flatMap((v) => unwrap(v));
    schema = (_c2 = schema !== null && schema !== void 0 ? schema : (_b2 = batches[0]) === null || _b2 === void 0 ? void 0 : _b2.schema) !== null && _c2 !== void 0 ? _c2 : new Schema2([]);
    if (!(schema instanceof Schema2)) {
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    }
    for (const batch of batches) {
      if (!(batch instanceof RecordBatch)) {
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      }
      if (!compareSchemas(schema, batch.schema)) {
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
      }
    }
    this.schema = schema;
    this.batches = batches;
    this._offsets = offsets !== null && offsets !== void 0 ? offsets : computeChunkOffsets(this.data);
  }
  get data() {
    return this.batches.map(({ data }) => data);
  }
  get numCols() {
    return this.schema.fields.length;
  }
  get numRows() {
    return this.data.reduce((numRows, data) => numRows + data.length, 0);
  }
  get nullCount() {
    if (this._nullCount === -1) {
      this._nullCount = computeChunkNullCounts(this.data);
    }
    return this._nullCount;
  }
  isValid(index) {
    return false;
  }
  get(index) {
    return null;
  }
  set(index, value) {
    return;
  }
  indexOf(element, offset) {
    return -1;
  }
  getByteLength(index) {
    return 0;
  }
  [Symbol.iterator]() {
    if (this.batches.length > 0) {
      return instance4.visit(new Vector(this.data));
    }
    return new Array(0)[Symbol.iterator]();
  }
  toArray() {
    return [...this];
  }
  toString() {
    return `[
  ${this.toArray().join(",\n  ")}
]`;
  }
  concat(...others) {
    const schema = this.schema;
    const data = this.data.concat(others.flatMap(({ data: data2 }) => data2));
    return new Table(schema, data.map((data2) => new RecordBatch(schema, data2)));
  }
  slice(begin, end) {
    const schema = this.schema;
    [begin, end] = clampRange({ length: this.numRows }, begin, end);
    const data = sliceChunks(this.data, this._offsets, begin, end);
    return new Table(schema, data.map((chunk) => new RecordBatch(schema, chunk)));
  }
  getChild(name) {
    return this.getChildAt(this.schema.fields.findIndex((f) => f.name === name));
  }
  getChildAt(index) {
    if (index > -1 && index < this.schema.fields.length) {
      const data = this.data.map((data2) => data2.children[index]);
      if (data.length === 0) {
        const { type } = this.schema.fields[index];
        const empty = makeData({ type, length: 0, nullCount: 0 });
        data.push(empty._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new Vector(data);
    }
    return null;
  }
  setChild(name, child) {
    var _b2;
    return this.setChildAt((_b2 = this.schema.fields) === null || _b2 === void 0 ? void 0 : _b2.findIndex((f) => f.name === name), child);
  }
  setChildAt(index, child) {
    let schema = this.schema;
    let batches = [...this.batches];
    if (index > -1 && index < this.numCols) {
      if (!child) {
        child = new Vector([makeData({ type: new Null(), length: this.numRows })]);
      }
      const fields = schema.fields.slice();
      const field = fields[index].clone({ type: child.type });
      const children = this.schema.fields.map((_, i) => this.getChildAt(i));
      [fields[index], children[index]] = [field, child];
      [schema, batches] = distributeVectorsIntoRecordBatches(schema, children);
    }
    return new Table(schema, batches);
  }
  select(columnNames) {
    const nameToIndex = this.schema.fields.reduce((m, f, i) => m.set(f.name, i), /* @__PURE__ */ new Map());
    return this.selectAt(columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
  }
  selectAt(columnIndices) {
    const schema = this.schema.selectAt(columnIndices);
    const data = this.batches.map((batch) => batch.selectAt(columnIndices));
    return new Table(schema, data);
  }
  assign(other) {
    const fields = this.schema.fields;
    const [indices, oldToNew] = other.schema.fields.reduce((memo, f2, newIdx) => {
      const [indices2, oldToNew2] = memo;
      const i = fields.findIndex((f) => f.name === f2.name);
      ~i ? oldToNew2[i] = newIdx : indices2.push(newIdx);
      return memo;
    }, [[], []]);
    const schema = this.schema.assign(other.schema);
    const columns = [
      ...fields.map((_, i) => [i, oldToNew[i]]).map(([i, j]) => j === void 0 ? this.getChildAt(i) : other.getChildAt(j)),
      ...indices.map((i) => other.getChildAt(i))
    ].filter(Boolean);
    return new Table(...distributeVectorsIntoRecordBatches(schema, columns));
  }
};
_a3 = Symbol.toStringTag;
Table[_a3] = ((proto) => {
  proto.schema = null;
  proto.batches = [];
  proto._offsets = new Uint32Array([0]);
  proto._nullCount = -1;
  proto[Symbol.isConcatSpreadable] = true;
  proto["isValid"] = wrapChunkedCall1(isChunkedValid);
  proto["get"] = wrapChunkedCall1(instance2.getVisitFn(Type.Struct));
  proto["set"] = wrapChunkedCall2(instance.getVisitFn(Type.Struct));
  proto["indexOf"] = wrapChunkedIndexOf(instance3.getVisitFn(Type.Struct));
  proto["getByteLength"] = wrapChunkedCall1(instance5.getVisitFn(Type.Struct));
  return "Table";
})(Table.prototype);

// ../../node_modules/apache-arrow/recordbatch.mjs
var _a4;
var RecordBatch = class {
  constructor(...args) {
    switch (args.length) {
      case 2: {
        [this.schema] = args;
        if (!(this.schema instanceof Schema2)) {
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        }
        [
          ,
          this.data = makeData({
            nullCount: 0,
            type: new Struct(this.schema.fields),
            children: this.schema.fields.map((f) => makeData({ type: f.type, nullCount: 0 }))
          })
        ] = args;
        if (!(this.data instanceof Data)) {
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        }
        [this.schema, this.data] = ensureSameLengthData(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [obj] = args;
        const { fields, children, length } = Object.keys(obj).reduce((memo, name, i) => {
          memo.children[i] = obj[name];
          memo.length = Math.max(memo.length, obj[name].length);
          memo.fields[i] = Field2.new({ name, type: obj[name].type, nullable: true });
          return memo;
        }, {
          length: 0,
          fields: new Array(),
          children: new Array()
        });
        const schema = new Schema2(fields);
        const data = makeData({ type: new Struct(fields), length, children, nullCount: 0 });
        [this.schema, this.data] = ensureSameLengthData(schema, data.children, length);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = collectDictionaries(this.schema.fields, this.data.children));
  }
  get numCols() {
    return this.schema.fields.length;
  }
  get numRows() {
    return this.data.length;
  }
  get nullCount() {
    return this.data.nullCount;
  }
  isValid(index) {
    return this.data.getValid(index);
  }
  get(index) {
    return instance2.visit(this.data, index);
  }
  set(index, value) {
    return instance.visit(this.data, index, value);
  }
  indexOf(element, offset) {
    return instance3.visit(this.data, element, offset);
  }
  getByteLength(index) {
    return instance5.visit(this.data, index);
  }
  [Symbol.iterator]() {
    return instance4.visit(new Vector([this.data]));
  }
  toArray() {
    return [...this];
  }
  concat(...others) {
    return new Table(this.schema, [this, ...others]);
  }
  slice(begin, end) {
    const [slice] = new Vector([this.data]).slice(begin, end).data;
    return new RecordBatch(this.schema, slice);
  }
  getChild(name) {
    var _b2;
    return this.getChildAt((_b2 = this.schema.fields) === null || _b2 === void 0 ? void 0 : _b2.findIndex((f) => f.name === name));
  }
  getChildAt(index) {
    if (index > -1 && index < this.schema.fields.length) {
      return new Vector([this.data.children[index]]);
    }
    return null;
  }
  setChild(name, child) {
    var _b2;
    return this.setChildAt((_b2 = this.schema.fields) === null || _b2 === void 0 ? void 0 : _b2.findIndex((f) => f.name === name), child);
  }
  setChildAt(index, child) {
    let schema = this.schema;
    let data = this.data;
    if (index > -1 && index < this.numCols) {
      if (!child) {
        child = new Vector([makeData({ type: new Null(), length: this.numRows })]);
      }
      const fields = schema.fields.slice();
      const children = data.children.slice();
      const field = fields[index].clone({ type: child.type });
      [fields[index], children[index]] = [field, child.data[0]];
      schema = new Schema2(fields, new Map(this.schema.metadata));
      data = makeData({ type: new Struct(fields), children });
    }
    return new RecordBatch(schema, data);
  }
  select(columnNames) {
    const schema = this.schema.select(columnNames);
    const type = new Struct(schema.fields);
    const children = [];
    for (const name of columnNames) {
      const index = this.schema.fields.findIndex((f) => f.name === name);
      if (~index) {
        children[index] = this.data.children[index];
      }
    }
    return new RecordBatch(schema, makeData({ type, length: this.numRows, children }));
  }
  selectAt(columnIndices) {
    const schema = this.schema.selectAt(columnIndices);
    const children = columnIndices.map((i) => this.data.children[i]).filter(Boolean);
    const subset = makeData({ type: new Struct(schema.fields), length: this.numRows, children });
    return new RecordBatch(schema, subset);
  }
};
_a4 = Symbol.toStringTag;
RecordBatch[_a4] = ((proto) => {
  proto._nullCount = -1;
  proto[Symbol.isConcatSpreadable] = true;
  return "RecordBatch";
})(RecordBatch.prototype);
function ensureSameLengthData(schema, chunks, maxLength = chunks.reduce((max, col) => Math.max(max, col.length), 0)) {
  var _b2;
  const fields = [...schema.fields];
  const children = [...chunks];
  const nullBitmapSize = (maxLength + 63 & ~63) >> 3;
  for (const [idx, field] of schema.fields.entries()) {
    const chunk = chunks[idx];
    if (!chunk || chunk.length !== maxLength) {
      fields[idx] = field.clone({ nullable: true });
      children[idx] = (_b2 = chunk === null || chunk === void 0 ? void 0 : chunk._changeLengthAndBackfillNullBitmap(maxLength)) !== null && _b2 !== void 0 ? _b2 : makeData({
        type: field.type,
        length: maxLength,
        nullCount: maxLength,
        nullBitmap: new Uint8Array(nullBitmapSize)
      });
    }
  }
  return [
    schema.assign(fields),
    makeData({ type: new Struct(fields), length: maxLength, children })
  ];
}
function collectDictionaries(fields, children, dictionaries = /* @__PURE__ */ new Map()) {
  for (let i = -1, n = fields.length; ++i < n; ) {
    const field = fields[i];
    const type = field.type;
    const data = children[i];
    if (DataType.isDictionary(type)) {
      if (!dictionaries.has(type.id)) {
        if (data.dictionary) {
          dictionaries.set(type.id, data.dictionary);
        }
      } else if (dictionaries.get(type.id) !== data.dictionary) {
        throw new Error(`Cannot create Schema containing two different dictionaries with the same Id`);
      }
    }
    if (type.children && type.children.length > 0) {
      collectDictionaries(type.children, data.children, dictionaries);
    }
  }
  return dictionaries;
}
var _InternalEmptyPlaceholderRecordBatch = class extends RecordBatch {
  constructor(schema) {
    const children = schema.fields.map((f) => makeData({ type: f.type }));
    const data = makeData({ type: new Struct(schema.fields), nullCount: 0, children });
    super(schema, data);
  }
};

// ../../node_modules/apache-arrow/fb/body-compression-method.mjs
var BodyCompressionMethod;
(function(BodyCompressionMethod2) {
  BodyCompressionMethod2[BodyCompressionMethod2["BUFFER"] = 0] = "BUFFER";
})(BodyCompressionMethod || (BodyCompressionMethod = {}));

// ../../node_modules/apache-arrow/fb/compression-type.mjs
var CompressionType;
(function(CompressionType2) {
  CompressionType2[CompressionType2["LZ4_FRAME"] = 0] = "LZ4_FRAME";
  CompressionType2[CompressionType2["ZSTD"] = 1] = "ZSTD";
})(CompressionType || (CompressionType = {}));

// ../../node_modules/apache-arrow/fb/body-compression.mjs
var BodyCompression = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBodyCompression(bb, obj) {
    return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBodyCompression(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  codec() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : CompressionType.LZ4_FRAME;
  }
  method() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : BodyCompressionMethod.BUFFER;
  }
  static startBodyCompression(builder) {
    builder.startObject(2);
  }
  static addCodec(builder, codec) {
    builder.addFieldInt8(0, codec, CompressionType.LZ4_FRAME);
  }
  static addMethod(builder, method2) {
    builder.addFieldInt8(1, method2, BodyCompressionMethod.BUFFER);
  }
  static endBodyCompression(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBodyCompression(builder, codec, method2) {
    BodyCompression.startBodyCompression(builder);
    BodyCompression.addCodec(builder, codec);
    BodyCompression.addMethod(builder, method2);
    return BodyCompression.endBodyCompression(builder);
  }
};

// ../../node_modules/apache-arrow/fb/buffer.mjs
var Buffer2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(builder, offset, length) {
    builder.prep(8, 16);
    builder.writeInt64(length);
    builder.writeInt64(offset);
    return builder.offset();
  }
};

// ../../node_modules/apache-arrow/fb/field-node.mjs
var FieldNode = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createFieldNode(builder, length, null_count) {
    builder.prep(8, 16);
    builder.writeInt64(null_count);
    builder.writeInt64(length);
    return builder.offset();
  }
};

// ../../node_modules/apache-arrow/fb/record-batch.mjs
var RecordBatch2 = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRecordBatch(bb, obj) {
    return (obj || new RecordBatch2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRecordBatch(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new RecordBatch2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  length() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  nodes(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new FieldNode()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
  }
  nodesLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  buffers(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Buffer2()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
  }
  buffersLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  compression(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new BodyCompression()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startRecordBatch(builder) {
    builder.startObject(4);
  }
  static addLength(builder, length) {
    builder.addFieldInt64(0, length, builder.createLong(0, 0));
  }
  static addNodes(builder, nodesOffset) {
    builder.addFieldOffset(1, nodesOffset, 0);
  }
  static startNodesVector(builder, numElems) {
    builder.startVector(16, numElems, 8);
  }
  static addBuffers(builder, buffersOffset) {
    builder.addFieldOffset(2, buffersOffset, 0);
  }
  static startBuffersVector(builder, numElems) {
    builder.startVector(16, numElems, 8);
  }
  static addCompression(builder, compressionOffset) {
    builder.addFieldOffset(3, compressionOffset, 0);
  }
  static endRecordBatch(builder) {
    const offset = builder.endObject();
    return offset;
  }
};

// ../../node_modules/apache-arrow/fb/dictionary-batch.mjs
var DictionaryBatch = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDictionaryBatch(bb, obj) {
    return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDictionaryBatch(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  id() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  data(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new RecordBatch2()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  isDelta() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startDictionaryBatch(builder) {
    builder.startObject(3);
  }
  static addId(builder, id) {
    builder.addFieldInt64(0, id, builder.createLong(0, 0));
  }
  static addData(builder, dataOffset) {
    builder.addFieldOffset(1, dataOffset, 0);
  }
  static addIsDelta(builder, isDelta) {
    builder.addFieldInt8(2, +isDelta, 0);
  }
  static endDictionaryBatch(builder) {
    const offset = builder.endObject();
    return offset;
  }
};

// ../../node_modules/apache-arrow/fb/message-header.mjs
var MessageHeader2;
(function(MessageHeader3) {
  MessageHeader3[MessageHeader3["NONE"] = 0] = "NONE";
  MessageHeader3[MessageHeader3["Schema"] = 1] = "Schema";
  MessageHeader3[MessageHeader3["DictionaryBatch"] = 2] = "DictionaryBatch";
  MessageHeader3[MessageHeader3["RecordBatch"] = 3] = "RecordBatch";
  MessageHeader3[MessageHeader3["Tensor"] = 4] = "Tensor";
  MessageHeader3[MessageHeader3["SparseTensor"] = 5] = "SparseTensor";
})(MessageHeader2 || (MessageHeader2 = {}));

// ../../node_modules/apache-arrow/fb/message.mjs
var Message = class {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMessage(bb, obj) {
    return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMessage(bb, obj) {
    bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
    return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  version() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : MetadataVersion2.V1;
  }
  headerType() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : MessageHeader2.NONE;
  }
  header(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }
  bodyLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startMessage(builder) {
    builder.startObject(5);
  }
  static addVersion(builder, version) {
    builder.addFieldInt16(0, version, MetadataVersion2.V1);
  }
  static addHeaderType(builder, headerType) {
    builder.addFieldInt8(1, headerType, MessageHeader2.NONE);
  }
  static addHeader(builder, headerOffset) {
    builder.addFieldOffset(2, headerOffset, 0);
  }
  static addBodyLength(builder, bodyLength) {
    builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0));
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(4, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endMessage(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishMessageBuffer(builder, offset) {
    builder.finish(offset);
  }
  static finishSizePrefixedMessageBuffer(builder, offset) {
    builder.finish(offset, void 0, true);
  }
  static createMessage(builder, version, headerType, headerOffset, bodyLength, customMetadataOffset) {
    Message.startMessage(builder);
    Message.addVersion(builder, version);
    Message.addHeaderType(builder, headerType);
    Message.addHeader(builder, headerOffset);
    Message.addBodyLength(builder, bodyLength);
    Message.addCustomMetadata(builder, customMetadataOffset);
    return Message.endMessage(builder);
  }
};

// ../../node_modules/apache-arrow/visitor/typeassembler.mjs
var Long3 = Long;
var TypeAssembler = class extends Visitor {
  visit(node, builder) {
    return node == null || builder == null ? void 0 : super.visit(node, builder);
  }
  visitNull(_node, b) {
    Null2.startNull(b);
    return Null2.endNull(b);
  }
  visitInt(node, b) {
    Int.startInt(b);
    Int.addBitWidth(b, node.bitWidth);
    Int.addIsSigned(b, node.isSigned);
    return Int.endInt(b);
  }
  visitFloat(node, b) {
    FloatingPoint.startFloatingPoint(b);
    FloatingPoint.addPrecision(b, node.precision);
    return FloatingPoint.endFloatingPoint(b);
  }
  visitBinary(_node, b) {
    Binary2.startBinary(b);
    return Binary2.endBinary(b);
  }
  visitBool(_node, b) {
    Bool2.startBool(b);
    return Bool2.endBool(b);
  }
  visitUtf8(_node, b) {
    Utf82.startUtf8(b);
    return Utf82.endUtf8(b);
  }
  visitDecimal(node, b) {
    Decimal2.startDecimal(b);
    Decimal2.addScale(b, node.scale);
    Decimal2.addPrecision(b, node.precision);
    Decimal2.addBitWidth(b, node.bitWidth);
    return Decimal2.endDecimal(b);
  }
  visitDate(node, b) {
    Date2.startDate(b);
    Date2.addUnit(b, node.unit);
    return Date2.endDate(b);
  }
  visitTime(node, b) {
    Time.startTime(b);
    Time.addUnit(b, node.unit);
    Time.addBitWidth(b, node.bitWidth);
    return Time.endTime(b);
  }
  visitTimestamp(node, b) {
    const timezone = node.timezone && b.createString(node.timezone) || void 0;
    Timestamp.startTimestamp(b);
    Timestamp.addUnit(b, node.unit);
    if (timezone !== void 0) {
      Timestamp.addTimezone(b, timezone);
    }
    return Timestamp.endTimestamp(b);
  }
  visitInterval(node, b) {
    Interval.startInterval(b);
    Interval.addUnit(b, node.unit);
    return Interval.endInterval(b);
  }
  visitList(_node, b) {
    List2.startList(b);
    return List2.endList(b);
  }
  visitStruct(_node, b) {
    Struct_.startStruct_(b);
    return Struct_.endStruct_(b);
  }
  visitUnion(node, b) {
    Union.startTypeIdsVector(b, node.typeIds.length);
    const typeIds = Union.createTypeIdsVector(b, node.typeIds);
    Union.startUnion(b);
    Union.addMode(b, node.mode);
    Union.addTypeIds(b, typeIds);
    return Union.endUnion(b);
  }
  visitDictionary(node, b) {
    const indexType = this.visit(node.indices, b);
    DictionaryEncoding.startDictionaryEncoding(b);
    DictionaryEncoding.addId(b, new Long3(node.id, 0));
    DictionaryEncoding.addIsOrdered(b, node.isOrdered);
    if (indexType !== void 0) {
      DictionaryEncoding.addIndexType(b, indexType);
    }
    return DictionaryEncoding.endDictionaryEncoding(b);
  }
  visitFixedSizeBinary(node, b) {
    FixedSizeBinary2.startFixedSizeBinary(b);
    FixedSizeBinary2.addByteWidth(b, node.byteWidth);
    return FixedSizeBinary2.endFixedSizeBinary(b);
  }
  visitFixedSizeList(node, b) {
    FixedSizeList2.startFixedSizeList(b);
    FixedSizeList2.addListSize(b, node.listSize);
    return FixedSizeList2.endFixedSizeList(b);
  }
  visitMap(node, b) {
    Map2.startMap(b);
    Map2.addKeysSorted(b, node.keysSorted);
    return Map2.endMap(b);
  }
};
var instance8 = new TypeAssembler();

// ../../node_modules/apache-arrow/ipc/metadata/json.mjs
function schemaFromJSON(_schema, dictionaries = /* @__PURE__ */ new Map()) {
  return new Schema2(schemaFieldsFromJSON(_schema, dictionaries), customMetadataFromJSON(_schema["customMetadata"]), dictionaries);
}
function recordBatchFromJSON(b) {
  return new RecordBatch3(b["count"], fieldNodesFromJSON(b["columns"]), buffersFromJSON(b["columns"]));
}
function dictionaryBatchFromJSON(b) {
  return new DictionaryBatch2(recordBatchFromJSON(b["data"]), b["id"], b["isDelta"]);
}
function schemaFieldsFromJSON(_schema, dictionaries) {
  return (_schema["fields"] || []).filter(Boolean).map((f) => Field2.fromJSON(f, dictionaries));
}
function fieldChildrenFromJSON(_field, dictionaries) {
  return (_field["children"] || []).filter(Boolean).map((f) => Field2.fromJSON(f, dictionaries));
}
function fieldNodesFromJSON(xs) {
  return (xs || []).reduce((fieldNodes, column) => [
    ...fieldNodes,
    new FieldNode2(column["count"], nullCountFromJSON(column["VALIDITY"])),
    ...fieldNodesFromJSON(column["children"])
  ], []);
}
function buffersFromJSON(xs, buffers = []) {
  for (let i = -1, n = (xs || []).length; ++i < n; ) {
    const column = xs[i];
    column["VALIDITY"] && buffers.push(new BufferRegion(buffers.length, column["VALIDITY"].length));
    column["TYPE"] && buffers.push(new BufferRegion(buffers.length, column["TYPE"].length));
    column["OFFSET"] && buffers.push(new BufferRegion(buffers.length, column["OFFSET"].length));
    column["DATA"] && buffers.push(new BufferRegion(buffers.length, column["DATA"].length));
    buffers = buffersFromJSON(column["children"], buffers);
  }
  return buffers;
}
function nullCountFromJSON(validity) {
  return (validity || []).reduce((sum2, val) => sum2 + +(val === 0), 0);
}
function fieldFromJSON(_field, dictionaries) {
  let id;
  let keys;
  let field;
  let dictMeta;
  let type;
  let dictType;
  if (!dictionaries || !(dictMeta = _field["dictionary"])) {
    type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries));
    field = new Field2(_field["name"], type, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  } else if (!dictionaries.has(id = dictMeta["id"])) {
    keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new Int32();
    dictionaries.set(id, type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries)));
    dictType = new Dictionary(type, keys, id, dictMeta["isOrdered"]);
    field = new Field2(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  } else {
    keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new Int32();
    dictType = new Dictionary(dictionaries.get(id), keys, id, dictMeta["isOrdered"]);
    field = new Field2(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  }
  return field || null;
}
function customMetadataFromJSON(_metadata) {
  return new Map(Object.entries(_metadata || {}));
}
function indexTypeFromJSON(_type) {
  return new Int_(_type["isSigned"], _type["bitWidth"]);
}
function typeFromJSON(f, children) {
  const typeId = f["type"]["name"];
  switch (typeId) {
    case "NONE":
      return new Null();
    case "null":
      return new Null();
    case "binary":
      return new Binary();
    case "utf8":
      return new Utf8();
    case "bool":
      return new Bool();
    case "list":
      return new List((children || [])[0]);
    case "struct":
      return new Struct(children || []);
    case "struct_":
      return new Struct(children || []);
  }
  switch (typeId) {
    case "int": {
      const t = f["type"];
      return new Int_(t["isSigned"], t["bitWidth"]);
    }
    case "floatingpoint": {
      const t = f["type"];
      return new Float(Precision[t["precision"]]);
    }
    case "decimal": {
      const t = f["type"];
      return new Decimal(t["scale"], t["precision"], t["bitWidth"]);
    }
    case "date": {
      const t = f["type"];
      return new Date_(DateUnit[t["unit"]]);
    }
    case "time": {
      const t = f["type"];
      return new Time_(TimeUnit[t["unit"]], t["bitWidth"]);
    }
    case "timestamp": {
      const t = f["type"];
      return new Timestamp_(TimeUnit[t["unit"]], t["timezone"]);
    }
    case "interval": {
      const t = f["type"];
      return new Interval_(IntervalUnit[t["unit"]]);
    }
    case "union": {
      const t = f["type"];
      return new Union_(UnionMode[t["mode"]], t["typeIds"] || [], children || []);
    }
    case "fixedsizebinary": {
      const t = f["type"];
      return new FixedSizeBinary(t["byteWidth"]);
    }
    case "fixedsizelist": {
      const t = f["type"];
      return new FixedSizeList(t["listSize"], (children || [])[0]);
    }
    case "map": {
      const t = f["type"];
      return new Map_((children || [])[0], t["keysSorted"]);
    }
  }
  throw new Error(`Unrecognized type: "${typeId}"`);
}

// ../../node_modules/apache-arrow/ipc/metadata/message.mjs
var Long4 = Long;
var Builder4 = Builder2;
var ByteBuffer3 = ByteBuffer;
var Message2 = class {
  constructor(bodyLength, version, headerType, header) {
    this._version = version;
    this._headerType = headerType;
    this.body = new Uint8Array(0);
    header && (this._createHeader = () => header);
    this._bodyLength = typeof bodyLength === "number" ? bodyLength : bodyLength.low;
  }
  static fromJSON(msg, headerType) {
    const message = new Message2(0, MetadataVersion.V4, headerType);
    message._createHeader = messageHeaderFromJSON(msg, headerType);
    return message;
  }
  static decode(buf) {
    buf = new ByteBuffer3(toUint8Array(buf));
    const _message = Message.getRootAsMessage(buf);
    const bodyLength = _message.bodyLength();
    const version = _message.version();
    const headerType = _message.headerType();
    const message = new Message2(bodyLength, version, headerType);
    message._createHeader = decodeMessageHeader(_message, headerType);
    return message;
  }
  static encode(message) {
    const b = new Builder4();
    let headerOffset = -1;
    if (message.isSchema()) {
      headerOffset = Schema2.encode(b, message.header());
    } else if (message.isRecordBatch()) {
      headerOffset = RecordBatch3.encode(b, message.header());
    } else if (message.isDictionaryBatch()) {
      headerOffset = DictionaryBatch2.encode(b, message.header());
    }
    Message.startMessage(b);
    Message.addVersion(b, MetadataVersion.V4);
    Message.addHeader(b, headerOffset);
    Message.addHeaderType(b, message.headerType);
    Message.addBodyLength(b, new Long4(message.bodyLength, 0));
    Message.finishMessageBuffer(b, Message.endMessage(b));
    return b.asUint8Array();
  }
  static from(header, bodyLength = 0) {
    if (header instanceof Schema2) {
      return new Message2(0, MetadataVersion.V4, MessageHeader.Schema, header);
    }
    if (header instanceof RecordBatch3) {
      return new Message2(bodyLength, MetadataVersion.V4, MessageHeader.RecordBatch, header);
    }
    if (header instanceof DictionaryBatch2) {
      return new Message2(bodyLength, MetadataVersion.V4, MessageHeader.DictionaryBatch, header);
    }
    throw new Error(`Unrecognized Message header: ${header}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === MessageHeader.Schema;
  }
  isRecordBatch() {
    return this.headerType === MessageHeader.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === MessageHeader.DictionaryBatch;
  }
};
var RecordBatch3 = class {
  constructor(length, nodes, buffers) {
    this._nodes = nodes;
    this._buffers = buffers;
    this._length = typeof length === "number" ? length : length.low;
  }
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
};
var DictionaryBatch2 = class {
  constructor(data, id, isDelta = false) {
    this._data = data;
    this._isDelta = isDelta;
    this._id = typeof id === "number" ? id : id.low;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
};
var BufferRegion = class {
  constructor(offset, length) {
    this.offset = typeof offset === "number" ? offset : offset.low;
    this.length = typeof length === "number" ? length : length.low;
  }
};
var FieldNode2 = class {
  constructor(length, nullCount) {
    this.length = typeof length === "number" ? length : length.low;
    this.nullCount = typeof nullCount === "number" ? nullCount : nullCount.low;
  }
};
function messageHeaderFromJSON(message, type) {
  return () => {
    switch (type) {
      case MessageHeader.Schema:
        return Schema2.fromJSON(message);
      case MessageHeader.RecordBatch:
        return RecordBatch3.fromJSON(message);
      case MessageHeader.DictionaryBatch:
        return DictionaryBatch2.fromJSON(message);
    }
    throw new Error(`Unrecognized Message type: { name: ${MessageHeader[type]}, type: ${type} }`);
  };
}
function decodeMessageHeader(message, type) {
  return () => {
    switch (type) {
      case MessageHeader.Schema:
        return Schema2.decode(message.header(new Schema()));
      case MessageHeader.RecordBatch:
        return RecordBatch3.decode(message.header(new RecordBatch2()), message.version());
      case MessageHeader.DictionaryBatch:
        return DictionaryBatch2.decode(message.header(new DictionaryBatch()), message.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${MessageHeader[type]}, type: ${type} }`);
  };
}
Field2["encode"] = encodeField;
Field2["decode"] = decodeField;
Field2["fromJSON"] = fieldFromJSON;
Schema2["encode"] = encodeSchema;
Schema2["decode"] = decodeSchema;
Schema2["fromJSON"] = schemaFromJSON;
RecordBatch3["encode"] = encodeRecordBatch;
RecordBatch3["decode"] = decodeRecordBatch;
RecordBatch3["fromJSON"] = recordBatchFromJSON;
DictionaryBatch2["encode"] = encodeDictionaryBatch;
DictionaryBatch2["decode"] = decodeDictionaryBatch;
DictionaryBatch2["fromJSON"] = dictionaryBatchFromJSON;
FieldNode2["encode"] = encodeFieldNode;
FieldNode2["decode"] = decodeFieldNode;
BufferRegion["encode"] = encodeBufferRegion;
BufferRegion["decode"] = decodeBufferRegion;
function decodeSchema(_schema, dictionaries = /* @__PURE__ */ new Map()) {
  const fields = decodeSchemaFields(_schema, dictionaries);
  return new Schema2(fields, decodeCustomMetadata(_schema), dictionaries);
}
function decodeRecordBatch(batch, version = MetadataVersion.V4) {
  if (batch.compression() !== null) {
    throw new Error("Record batch compression not implemented");
  }
  return new RecordBatch3(batch.length(), decodeFieldNodes(batch), decodeBuffers(batch, version));
}
function decodeDictionaryBatch(batch, version = MetadataVersion.V4) {
  return new DictionaryBatch2(RecordBatch3.decode(batch.data(), version), batch.id(), batch.isDelta());
}
function decodeBufferRegion(b) {
  return new BufferRegion(b.offset(), b.length());
}
function decodeFieldNode(f) {
  return new FieldNode2(f.length(), f.nullCount());
}
function decodeFieldNodes(batch) {
  const nodes = [];
  for (let f, i = -1, j = -1, n = batch.nodesLength(); ++i < n; ) {
    if (f = batch.nodes(i)) {
      nodes[++j] = FieldNode2.decode(f);
    }
  }
  return nodes;
}
function decodeBuffers(batch, version) {
  const bufferRegions = [];
  for (let b, i = -1, j = -1, n = batch.buffersLength(); ++i < n; ) {
    if (b = batch.buffers(i)) {
      if (version < MetadataVersion.V4) {
        b.bb_pos += 8 * (i + 1);
      }
      bufferRegions[++j] = BufferRegion.decode(b);
    }
  }
  return bufferRegions;
}
function decodeSchemaFields(schema, dictionaries) {
  const fields = [];
  for (let f, i = -1, j = -1, n = schema.fieldsLength(); ++i < n; ) {
    if (f = schema.fields(i)) {
      fields[++j] = Field2.decode(f, dictionaries);
    }
  }
  return fields;
}
function decodeFieldChildren(field, dictionaries) {
  const children = [];
  for (let f, i = -1, j = -1, n = field.childrenLength(); ++i < n; ) {
    if (f = field.children(i)) {
      children[++j] = Field2.decode(f, dictionaries);
    }
  }
  return children;
}
function decodeField(f, dictionaries) {
  let id;
  let field;
  let type;
  let keys;
  let dictType;
  let dictMeta;
  if (!dictionaries || !(dictMeta = f.dictionary())) {
    type = decodeFieldType(f, decodeFieldChildren(f, dictionaries));
    field = new Field2(f.name(), type, f.nullable(), decodeCustomMetadata(f));
  } else if (!dictionaries.has(id = dictMeta.id().low)) {
    keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new Int32();
    dictionaries.set(id, type = decodeFieldType(f, decodeFieldChildren(f, dictionaries)));
    dictType = new Dictionary(type, keys, id, dictMeta.isOrdered());
    field = new Field2(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
  } else {
    keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new Int32();
    dictType = new Dictionary(dictionaries.get(id), keys, id, dictMeta.isOrdered());
    field = new Field2(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
  }
  return field || null;
}
function decodeCustomMetadata(parent) {
  const data = /* @__PURE__ */ new Map();
  if (parent) {
    for (let entry, key, i = -1, n = Math.trunc(parent.customMetadataLength()); ++i < n; ) {
      if ((entry = parent.customMetadata(i)) && (key = entry.key()) != null) {
        data.set(key, entry.value());
      }
    }
  }
  return data;
}
function decodeIndexType(_type) {
  return new Int_(_type.isSigned(), _type.bitWidth());
}
function decodeFieldType(f, children) {
  const typeId = f.typeType();
  switch (typeId) {
    case Type2["NONE"]:
      return new Null();
    case Type2["Null"]:
      return new Null();
    case Type2["Binary"]:
      return new Binary();
    case Type2["Utf8"]:
      return new Utf8();
    case Type2["Bool"]:
      return new Bool();
    case Type2["List"]:
      return new List((children || [])[0]);
    case Type2["Struct_"]:
      return new Struct(children || []);
  }
  switch (typeId) {
    case Type2["Int"]: {
      const t = f.type(new Int());
      return new Int_(t.isSigned(), t.bitWidth());
    }
    case Type2["FloatingPoint"]: {
      const t = f.type(new FloatingPoint());
      return new Float(t.precision());
    }
    case Type2["Decimal"]: {
      const t = f.type(new Decimal2());
      return new Decimal(t.scale(), t.precision(), t.bitWidth());
    }
    case Type2["Date"]: {
      const t = f.type(new Date2());
      return new Date_(t.unit());
    }
    case Type2["Time"]: {
      const t = f.type(new Time());
      return new Time_(t.unit(), t.bitWidth());
    }
    case Type2["Timestamp"]: {
      const t = f.type(new Timestamp());
      return new Timestamp_(t.unit(), t.timezone());
    }
    case Type2["Interval"]: {
      const t = f.type(new Interval());
      return new Interval_(t.unit());
    }
    case Type2["Union"]: {
      const t = f.type(new Union());
      return new Union_(t.mode(), t.typeIdsArray() || [], children || []);
    }
    case Type2["FixedSizeBinary"]: {
      const t = f.type(new FixedSizeBinary2());
      return new FixedSizeBinary(t.byteWidth());
    }
    case Type2["FixedSizeList"]: {
      const t = f.type(new FixedSizeList2());
      return new FixedSizeList(t.listSize(), (children || [])[0]);
    }
    case Type2["Map"]: {
      const t = f.type(new Map2());
      return new Map_((children || [])[0], t.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Type2[typeId]}" (${typeId})`);
}
function encodeSchema(b, schema) {
  const fieldOffsets = schema.fields.map((f) => Field2.encode(b, f));
  Schema.startFieldsVector(b, fieldOffsets.length);
  const fieldsVectorOffset = Schema.createFieldsVector(b, fieldOffsets);
  const metadataOffset = !(schema.metadata && schema.metadata.size > 0) ? -1 : Schema.createCustomMetadataVector(b, [...schema.metadata].map(([k, v]) => {
    const key = b.createString(`${k}`);
    const val = b.createString(`${v}`);
    KeyValue.startKeyValue(b);
    KeyValue.addKey(b, key);
    KeyValue.addValue(b, val);
    return KeyValue.endKeyValue(b);
  }));
  Schema.startSchema(b);
  Schema.addFields(b, fieldsVectorOffset);
  Schema.addEndianness(b, platformIsLittleEndian ? Endianness.Little : Endianness.Big);
  if (metadataOffset !== -1) {
    Schema.addCustomMetadata(b, metadataOffset);
  }
  return Schema.endSchema(b);
}
function encodeField(b, field) {
  let nameOffset = -1;
  let typeOffset = -1;
  let dictionaryOffset = -1;
  const type = field.type;
  let typeId = field.typeId;
  if (!DataType.isDictionary(type)) {
    typeOffset = instance8.visit(type, b);
  } else {
    typeId = type.dictionary.typeId;
    dictionaryOffset = instance8.visit(type, b);
    typeOffset = instance8.visit(type.dictionary, b);
  }
  const childOffsets = (type.children || []).map((f) => Field2.encode(b, f));
  const childrenVectorOffset = Field.createChildrenVector(b, childOffsets);
  const metadataOffset = !(field.metadata && field.metadata.size > 0) ? -1 : Field.createCustomMetadataVector(b, [...field.metadata].map(([k, v]) => {
    const key = b.createString(`${k}`);
    const val = b.createString(`${v}`);
    KeyValue.startKeyValue(b);
    KeyValue.addKey(b, key);
    KeyValue.addValue(b, val);
    return KeyValue.endKeyValue(b);
  }));
  if (field.name) {
    nameOffset = b.createString(field.name);
  }
  Field.startField(b);
  Field.addType(b, typeOffset);
  Field.addTypeType(b, typeId);
  Field.addChildren(b, childrenVectorOffset);
  Field.addNullable(b, !!field.nullable);
  if (nameOffset !== -1) {
    Field.addName(b, nameOffset);
  }
  if (dictionaryOffset !== -1) {
    Field.addDictionary(b, dictionaryOffset);
  }
  if (metadataOffset !== -1) {
    Field.addCustomMetadata(b, metadataOffset);
  }
  return Field.endField(b);
}
function encodeRecordBatch(b, recordBatch) {
  const nodes = recordBatch.nodes || [];
  const buffers = recordBatch.buffers || [];
  RecordBatch2.startNodesVector(b, nodes.length);
  for (const n of nodes.slice().reverse())
    FieldNode2.encode(b, n);
  const nodesVectorOffset = b.endVector();
  RecordBatch2.startBuffersVector(b, buffers.length);
  for (const b_ of buffers.slice().reverse())
    BufferRegion.encode(b, b_);
  const buffersVectorOffset = b.endVector();
  RecordBatch2.startRecordBatch(b);
  RecordBatch2.addLength(b, new Long4(recordBatch.length, 0));
  RecordBatch2.addNodes(b, nodesVectorOffset);
  RecordBatch2.addBuffers(b, buffersVectorOffset);
  return RecordBatch2.endRecordBatch(b);
}
function encodeDictionaryBatch(b, dictionaryBatch) {
  const dataOffset = RecordBatch3.encode(b, dictionaryBatch.data);
  DictionaryBatch.startDictionaryBatch(b);
  DictionaryBatch.addId(b, new Long4(dictionaryBatch.id, 0));
  DictionaryBatch.addIsDelta(b, dictionaryBatch.isDelta);
  DictionaryBatch.addData(b, dataOffset);
  return DictionaryBatch.endDictionaryBatch(b);
}
function encodeFieldNode(b, node) {
  return FieldNode.createFieldNode(b, new Long4(node.length, 0), new Long4(node.nullCount, 0));
}
function encodeBufferRegion(b, node) {
  return Buffer2.createBuffer(b, new Long4(node.offset, 0), new Long4(node.length, 0));
}
var platformIsLittleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
})();

// ../../node_modules/apache-arrow/ipc/message.mjs
var invalidMessageType = (type) => `Expected ${MessageHeader[type]} Message in stream, but was null or length 0.`;
var nullMessage = (type) => `Header pointer of flatbuffer-encoded ${MessageHeader[type]} Message is null or length 0.`;
var invalidMessageMetadata = (expected, actual) => `Expected to read ${expected} metadata bytes, but only read ${actual}.`;
var invalidMessageBodyLength = (expected, actual) => `Expected to read ${expected} bytes for message body, but only read ${actual}.`;
var MessageReader = class {
  constructor(source) {
    this.source = source instanceof ByteStream ? source : new ByteStream(source);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let r;
    if ((r = this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if (r.value === -1 && (r = this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if ((r = this.readMetadata(r.value)).done) {
      return ITERATOR_DONE;
    }
    return r;
  }
  throw(value) {
    return this.source.throw(value);
  }
  return(value) {
    return this.source.return(value);
  }
  readMessage(type) {
    let r;
    if ((r = this.next()).done) {
      return null;
    }
    if (type != null && r.value.headerType !== type) {
      throw new Error(invalidMessageType(type));
    }
    return r.value;
  }
  readMessageBody(bodyLength) {
    if (bodyLength <= 0) {
      return new Uint8Array(0);
    }
    const buf = toUint8Array(this.source.read(bodyLength));
    if (buf.byteLength < bodyLength) {
      throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
    }
    return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
  }
  readSchema(throwIfNull = false) {
    const type = MessageHeader.Schema;
    const message = this.readMessage(type);
    const schema = message === null || message === void 0 ? void 0 : message.header();
    if (throwIfNull && !schema) {
      throw new Error(nullMessage(type));
    }
    return schema;
  }
  readMetadataLength() {
    const buf = this.source.read(PADDING);
    const bb = buf && new ByteBuffer(buf);
    const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
    return { done: len === 0, value: len };
  }
  readMetadata(metadataLength) {
    const buf = this.source.read(metadataLength);
    if (!buf) {
      return ITERATOR_DONE;
    }
    if (buf.byteLength < metadataLength) {
      throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
    }
    return { done: false, value: Message2.decode(buf) };
  }
};
var AsyncMessageReader = class {
  constructor(source, byteLength) {
    this.source = source instanceof AsyncByteStream ? source : isFileHandle(source) ? new AsyncRandomAccessFile(source, byteLength) : new AsyncByteStream(source);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return __awaiter(this, void 0, void 0, function* () {
      let r;
      if ((r = yield this.readMetadataLength()).done) {
        return ITERATOR_DONE;
      }
      if (r.value === -1 && (r = yield this.readMetadataLength()).done) {
        return ITERATOR_DONE;
      }
      if ((r = yield this.readMetadata(r.value)).done) {
        return ITERATOR_DONE;
      }
      return r;
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.source.throw(value);
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.source.return(value);
    });
  }
  readMessage(type) {
    return __awaiter(this, void 0, void 0, function* () {
      let r;
      if ((r = yield this.next()).done) {
        return null;
      }
      if (type != null && r.value.headerType !== type) {
        throw new Error(invalidMessageType(type));
      }
      return r.value;
    });
  }
  readMessageBody(bodyLength) {
    return __awaiter(this, void 0, void 0, function* () {
      if (bodyLength <= 0) {
        return new Uint8Array(0);
      }
      const buf = toUint8Array(yield this.source.read(bodyLength));
      if (buf.byteLength < bodyLength) {
        throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
      }
      return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
    });
  }
  readSchema(throwIfNull = false) {
    return __awaiter(this, void 0, void 0, function* () {
      const type = MessageHeader.Schema;
      const message = yield this.readMessage(type);
      const schema = message === null || message === void 0 ? void 0 : message.header();
      if (throwIfNull && !schema) {
        throw new Error(nullMessage(type));
      }
      return schema;
    });
  }
  readMetadataLength() {
    return __awaiter(this, void 0, void 0, function* () {
      const buf = yield this.source.read(PADDING);
      const bb = buf && new ByteBuffer(buf);
      const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
      return { done: len === 0, value: len };
    });
  }
  readMetadata(metadataLength) {
    return __awaiter(this, void 0, void 0, function* () {
      const buf = yield this.source.read(metadataLength);
      if (!buf) {
        return ITERATOR_DONE;
      }
      if (buf.byteLength < metadataLength) {
        throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
      }
      return { done: false, value: Message2.decode(buf) };
    });
  }
};
var JSONMessageReader = class extends MessageReader {
  constructor(source) {
    super(new Uint8Array(0));
    this._schema = false;
    this._body = [];
    this._batchIndex = 0;
    this._dictionaryIndex = 0;
    this._json = source instanceof ArrowJSON ? source : new ArrowJSON(source);
  }
  next() {
    const { _json } = this;
    if (!this._schema) {
      this._schema = true;
      const message = Message2.fromJSON(_json.schema, MessageHeader.Schema);
      return { done: false, value: message };
    }
    if (this._dictionaryIndex < _json.dictionaries.length) {
      const batch = _json.dictionaries[this._dictionaryIndex++];
      this._body = batch["data"]["columns"];
      const message = Message2.fromJSON(batch, MessageHeader.DictionaryBatch);
      return { done: false, value: message };
    }
    if (this._batchIndex < _json.batches.length) {
      const batch = _json.batches[this._batchIndex++];
      this._body = batch["columns"];
      const message = Message2.fromJSON(batch, MessageHeader.RecordBatch);
      return { done: false, value: message };
    }
    this._body = [];
    return ITERATOR_DONE;
  }
  readMessageBody(_bodyLength) {
    return flattenDataSources(this._body);
    function flattenDataSources(xs) {
      return (xs || []).reduce((buffers, column) => [
        ...buffers,
        ...column["VALIDITY"] && [column["VALIDITY"]] || [],
        ...column["TYPE"] && [column["TYPE"]] || [],
        ...column["OFFSET"] && [column["OFFSET"]] || [],
        ...column["DATA"] && [column["DATA"]] || [],
        ...flattenDataSources(column["children"])
      ], []);
    }
  }
  readMessage(type) {
    let r;
    if ((r = this.next()).done) {
      return null;
    }
    if (type != null && r.value.headerType !== type) {
      throw new Error(invalidMessageType(type));
    }
    return r.value;
  }
  readSchema() {
    const type = MessageHeader.Schema;
    const message = this.readMessage(type);
    const schema = message === null || message === void 0 ? void 0 : message.header();
    if (!message || !schema) {
      throw new Error(nullMessage(type));
    }
    return schema;
  }
};
var PADDING = 4;
var MAGIC_STR = "ARROW1";
var MAGIC = new Uint8Array(MAGIC_STR.length);
for (let i = 0; i < MAGIC_STR.length; i += 1) {
  MAGIC[i] = MAGIC_STR.codePointAt(i);
}
function checkForMagicArrowString(buffer, index = 0) {
  for (let i = -1, n = MAGIC.length; ++i < n; ) {
    if (MAGIC[i] !== buffer[index + i]) {
      return false;
    }
  }
  return true;
}
var magicLength = MAGIC.length;
var magicAndPadding = magicLength + PADDING;
var magicX2AndPadding = magicLength * 2 + PADDING;

// ../../node_modules/apache-arrow/ipc/reader.mjs
var RecordBatchReader = class extends ReadableInterop {
  constructor(impl) {
    super();
    this._impl = impl;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(value) {
    return this._impl.throw(value);
  }
  return(value) {
    return this._impl.return(value);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(schema) {
    this._impl.reset(schema);
    this._DOMStream = void 0;
    this._nodeStream = void 0;
    return this;
  }
  open(options) {
    const opening = this._impl.open(options);
    return isPromise(opening) ? opening.then(() => this) : this;
  }
  readRecordBatch(index) {
    return this._impl.isFile() ? this._impl.readRecordBatch(index) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return adapters_default.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return adapters_default.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: true });
  }
  static throughNode(options) {
    throw new Error(`"throughNode" not available in this environment`);
  }
  static throughDOM(writableStrategy, readableStrategy) {
    throw new Error(`"throughDOM" not available in this environment`);
  }
  static from(source) {
    if (source instanceof RecordBatchReader) {
      return source;
    } else if (isArrowJSON(source)) {
      return fromArrowJSON(source);
    } else if (isFileHandle(source)) {
      return fromFileHandle(source);
    } else if (isPromise(source)) {
      return (() => __awaiter(this, void 0, void 0, function* () {
        return yield RecordBatchReader.from(yield source);
      }))();
    } else if (isFetchResponse(source) || isReadableDOMStream(source) || isReadableNodeStream(source) || isAsyncIterable(source)) {
      return fromAsyncByteStream(new AsyncByteStream(source));
    }
    return fromByteStream(new ByteStream(source));
  }
  static readAll(source) {
    if (source instanceof RecordBatchReader) {
      return source.isSync() ? readAllSync(source) : readAllAsync(source);
    } else if (isArrowJSON(source) || ArrayBuffer.isView(source) || isIterable(source) || isIteratorResult(source)) {
      return readAllSync(source);
    }
    return readAllAsync(source);
  }
};
var RecordBatchStreamReader = class extends RecordBatchReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
  readAll() {
    return [...this];
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return __asyncGenerator(this, arguments, function* _a5() {
      yield __await(yield* __asyncDelegator(__asyncValues(this[Symbol.iterator]())));
    });
  }
};
var AsyncRecordBatchStreamReader = class extends RecordBatchReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
  readAll() {
    var e_1, _a5;
    return __awaiter(this, void 0, void 0, function* () {
      const batches = new Array();
      try {
        for (var _b2 = __asyncValues(this), _c2; _c2 = yield _b2.next(), !_c2.done; ) {
          const batch = _c2.value;
          batches.push(batch);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a5 = _b2.return))
            yield _a5.call(_b2);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return batches;
    });
  }
  [Symbol.iterator]() {
    throw new Error(`AsyncRecordBatchStreamReader is not Iterable`);
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
};
var RecordBatchFileReader = class extends RecordBatchStreamReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
};
var AsyncRecordBatchFileReader = class extends AsyncRecordBatchStreamReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
};
var RecordBatchReaderImpl = class {
  constructor(dictionaries = /* @__PURE__ */ new Map()) {
    this.closed = false;
    this.autoDestroy = true;
    this._dictionaryIndex = 0;
    this._recordBatchIndex = 0;
    this.dictionaries = dictionaries;
  }
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  isSync() {
    return false;
  }
  isAsync() {
    return false;
  }
  isFile() {
    return false;
  }
  isStream() {
    return false;
  }
  reset(schema) {
    this._dictionaryIndex = 0;
    this._recordBatchIndex = 0;
    this.schema = schema;
    this.dictionaries = /* @__PURE__ */ new Map();
    return this;
  }
  _loadRecordBatch(header, body) {
    const children = this._loadVectors(header, body, this.schema.fields);
    const data = makeData({ type: new Struct(this.schema.fields), length: header.length, children });
    return new RecordBatch(this.schema, data);
  }
  _loadDictionaryBatch(header, body) {
    const { id, isDelta } = header;
    const { dictionaries, schema } = this;
    const dictionary = dictionaries.get(id);
    if (isDelta || !dictionary) {
      const type = schema.dictionaries.get(id);
      const data = this._loadVectors(header.data, body, [type]);
      return (dictionary && isDelta ? dictionary.concat(new Vector(data)) : new Vector(data)).memoize();
    }
    return dictionary.memoize();
  }
  _loadVectors(header, body, types) {
    return new VectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
  }
};
var RecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
  constructor(source, dictionaries) {
    super(dictionaries);
    this._reader = !isArrowJSON(source) ? new MessageReader(this._handle = source) : new JSONMessageReader(this._handle = source);
  }
  isSync() {
    return true;
  }
  isStream() {
    return true;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    if (!this.closed && (this.closed = true)) {
      this.reset()._reader.return();
      this._reader = null;
      this.dictionaries = null;
    }
  }
  open(options) {
    if (!this.closed) {
      this.autoDestroy = shouldAutoDestroy(this, options);
      if (!(this.schema || (this.schema = this._reader.readSchema()))) {
        this.cancel();
      }
    }
    return this;
  }
  throw(value) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return this.reset()._reader.throw(value);
    }
    return ITERATOR_DONE;
  }
  return(value) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return this.reset()._reader.return(value);
    }
    return ITERATOR_DONE;
  }
  next() {
    if (this.closed) {
      return ITERATOR_DONE;
    }
    let message;
    const { _reader: reader } = this;
    while (message = this._readNextMessageAndValidate()) {
      if (message.isSchema()) {
        this.reset(message.header());
      } else if (message.isRecordBatch()) {
        this._recordBatchIndex++;
        const header = message.header();
        const buffer = reader.readMessageBody(message.bodyLength);
        const recordBatch = this._loadRecordBatch(header, buffer);
        return { done: false, value: recordBatch };
      } else if (message.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const header = message.header();
        const buffer = reader.readMessageBody(message.bodyLength);
        const vector = this._loadDictionaryBatch(header, buffer);
        this.dictionaries.set(header.id, vector);
      }
    }
    if (this.schema && this._recordBatchIndex === 0) {
      this._recordBatchIndex++;
      return { done: false, value: new _InternalEmptyPlaceholderRecordBatch(this.schema) };
    }
    return this.return();
  }
  _readNextMessageAndValidate(type) {
    return this._reader.readMessage(type);
  }
};
var AsyncRecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
  constructor(source, dictionaries) {
    super(dictionaries);
    this._reader = new AsyncMessageReader(this._handle = source);
  }
  isAsync() {
    return true;
  }
  isStream() {
    return true;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && (this.closed = true)) {
        yield this.reset()._reader.return();
        this._reader = null;
        this.dictionaries = null;
      }
    });
  }
  open(options) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed) {
        this.autoDestroy = shouldAutoDestroy(this, options);
        if (!(this.schema || (this.schema = yield this._reader.readSchema()))) {
          yield this.cancel();
        }
      }
      return this;
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && this.autoDestroy && (this.closed = true)) {
        return yield this.reset()._reader.throw(value);
      }
      return ITERATOR_DONE;
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && this.autoDestroy && (this.closed = true)) {
        return yield this.reset()._reader.return(value);
      }
      return ITERATOR_DONE;
    });
  }
  next() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.closed) {
        return ITERATOR_DONE;
      }
      let message;
      const { _reader: reader } = this;
      while (message = yield this._readNextMessageAndValidate()) {
        if (message.isSchema()) {
          yield this.reset(message.header());
        } else if (message.isRecordBatch()) {
          this._recordBatchIndex++;
          const header = message.header();
          const buffer = yield reader.readMessageBody(message.bodyLength);
          const recordBatch = this._loadRecordBatch(header, buffer);
          return { done: false, value: recordBatch };
        } else if (message.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const header = message.header();
          const buffer = yield reader.readMessageBody(message.bodyLength);
          const vector = this._loadDictionaryBatch(header, buffer);
          this.dictionaries.set(header.id, vector);
        }
      }
      if (this.schema && this._recordBatchIndex === 0) {
        this._recordBatchIndex++;
        return { done: false, value: new _InternalEmptyPlaceholderRecordBatch(this.schema) };
      }
      return yield this.return();
    });
  }
  _readNextMessageAndValidate(type) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(type);
    });
  }
};
var RecordBatchFileReaderImpl = class extends RecordBatchStreamReaderImpl {
  constructor(source, dictionaries) {
    super(source instanceof RandomAccessFile ? source : new RandomAccessFile(source), dictionaries);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isSync() {
    return true;
  }
  isFile() {
    return true;
  }
  open(options) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (const block of this._footer.dictionaryBatches()) {
        block && this._readDictionaryBatch(this._dictionaryIndex++);
      }
    }
    return super.open(options);
  }
  readRecordBatch(index) {
    var _a5;
    if (this.closed) {
      return null;
    }
    if (!this._footer) {
      this.open();
    }
    const block = (_a5 = this._footer) === null || _a5 === void 0 ? void 0 : _a5.getRecordBatch(index);
    if (block && this._handle.seek(block.offset)) {
      const message = this._reader.readMessage(MessageHeader.RecordBatch);
      if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
        const header = message.header();
        const buffer = this._reader.readMessageBody(message.bodyLength);
        const recordBatch = this._loadRecordBatch(header, buffer);
        return recordBatch;
      }
    }
    return null;
  }
  _readDictionaryBatch(index) {
    var _a5;
    const block = (_a5 = this._footer) === null || _a5 === void 0 ? void 0 : _a5.getDictionaryBatch(index);
    if (block && this._handle.seek(block.offset)) {
      const message = this._reader.readMessage(MessageHeader.DictionaryBatch);
      if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
        const header = message.header();
        const buffer = this._reader.readMessageBody(message.bodyLength);
        const vector = this._loadDictionaryBatch(header, buffer);
        this.dictionaries.set(header.id, vector);
      }
    }
  }
  _readFooter() {
    const { _handle } = this;
    const offset = _handle.size - magicAndPadding;
    const length = _handle.readInt32(offset);
    const buffer = _handle.readAt(offset - length, length);
    return Footer_.decode(buffer);
  }
  _readNextMessageAndValidate(type) {
    var _a5;
    if (!this._footer) {
      this.open();
    }
    if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const block = (_a5 = this._footer) === null || _a5 === void 0 ? void 0 : _a5.getRecordBatch(this._recordBatchIndex);
      if (block && this._handle.seek(block.offset)) {
        return this._reader.readMessage(type);
      }
    }
    return null;
  }
};
var AsyncRecordBatchFileReaderImpl = class extends AsyncRecordBatchStreamReaderImpl {
  constructor(source, ...rest) {
    const byteLength = typeof rest[0] !== "number" ? rest.shift() : void 0;
    const dictionaries = rest[0] instanceof Map ? rest.shift() : void 0;
    super(source instanceof AsyncRandomAccessFile ? source : new AsyncRandomAccessFile(source, byteLength), dictionaries);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isFile() {
    return true;
  }
  isAsync() {
    return true;
  }
  open(options) {
    const _super = Object.create(null, {
      open: { get: () => super.open }
    });
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const block of this._footer.dictionaryBatches()) {
          block && (yield this._readDictionaryBatch(this._dictionaryIndex++));
        }
      }
      return yield _super.open.call(this, options);
    });
  }
  readRecordBatch(index) {
    var _a5;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.closed) {
        return null;
      }
      if (!this._footer) {
        yield this.open();
      }
      const block = (_a5 = this._footer) === null || _a5 === void 0 ? void 0 : _a5.getRecordBatch(index);
      if (block && (yield this._handle.seek(block.offset))) {
        const message = yield this._reader.readMessage(MessageHeader.RecordBatch);
        if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
          const header = message.header();
          const buffer = yield this._reader.readMessageBody(message.bodyLength);
          const recordBatch = this._loadRecordBatch(header, buffer);
          return recordBatch;
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(index) {
    var _a5;
    return __awaiter(this, void 0, void 0, function* () {
      const block = (_a5 = this._footer) === null || _a5 === void 0 ? void 0 : _a5.getDictionaryBatch(index);
      if (block && (yield this._handle.seek(block.offset))) {
        const message = yield this._reader.readMessage(MessageHeader.DictionaryBatch);
        if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
          const header = message.header();
          const buffer = yield this._reader.readMessageBody(message.bodyLength);
          const vector = this._loadDictionaryBatch(header, buffer);
          this.dictionaries.set(header.id, vector);
        }
      }
    });
  }
  _readFooter() {
    return __awaiter(this, void 0, void 0, function* () {
      const { _handle } = this;
      _handle._pending && (yield _handle._pending);
      const offset = _handle.size - magicAndPadding;
      const length = yield _handle.readInt32(offset);
      const buffer = yield _handle.readAt(offset - length, length);
      return Footer_.decode(buffer);
    });
  }
  _readNextMessageAndValidate(type) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._footer) {
        yield this.open();
      }
      if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const block = this._footer.getRecordBatch(this._recordBatchIndex);
        if (block && (yield this._handle.seek(block.offset))) {
          return yield this._reader.readMessage(type);
        }
      }
      return null;
    });
  }
};
var RecordBatchJSONReaderImpl = class extends RecordBatchStreamReaderImpl {
  constructor(source, dictionaries) {
    super(source, dictionaries);
  }
  _loadVectors(header, body, types) {
    return new JSONVectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
  }
};
function shouldAutoDestroy(self2, options) {
  return options && typeof options["autoDestroy"] === "boolean" ? options["autoDestroy"] : self2["autoDestroy"];
}
function* readAllSync(source) {
  const reader = RecordBatchReader.from(source);
  try {
    if (!reader.open({ autoDestroy: false }).closed) {
      do {
        yield reader;
      } while (!reader.reset().open().closed);
    }
  } finally {
    reader.cancel();
  }
}
function readAllAsync(source) {
  return __asyncGenerator(this, arguments, function* readAllAsync_1() {
    const reader = yield __await(RecordBatchReader.from(source));
    try {
      if (!(yield __await(reader.open({ autoDestroy: false }))).closed) {
        do {
          yield yield __await(reader);
        } while (!(yield __await(reader.reset().open())).closed);
      }
    } finally {
      yield __await(reader.cancel());
    }
  });
}
function fromArrowJSON(source) {
  return new RecordBatchStreamReader(new RecordBatchJSONReaderImpl(source));
}
function fromByteStream(source) {
  const bytes = source.peek(magicLength + 7 & ~7);
  return bytes && bytes.byteLength >= 4 ? !checkForMagicArrowString(bytes) ? new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(source.read())) : new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(function* () {
  }()));
}
function fromAsyncByteStream(source) {
  return __awaiter(this, void 0, void 0, function* () {
    const bytes = yield source.peek(magicLength + 7 & ~7);
    return bytes && bytes.byteLength >= 4 ? !checkForMagicArrowString(bytes) ? new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(yield source.read())) : new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(function() {
      return __asyncGenerator(this, arguments, function* () {
      });
    }()));
  });
}
function fromFileHandle(source) {
  return __awaiter(this, void 0, void 0, function* () {
    const { size } = yield source.stat();
    const file = new AsyncRandomAccessFile(source, size);
    if (size >= magicX2AndPadding && checkForMagicArrowString(yield file.readAt(0, magicLength + 7 & ~7))) {
      return new AsyncRecordBatchFileReader(new AsyncRecordBatchFileReaderImpl(file));
    }
    return new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(file));
  });
}

// ../../node_modules/apache-arrow/visitor/vectorassembler.mjs
var VectorAssembler = class extends Visitor {
  constructor() {
    super();
    this._byteLength = 0;
    this._nodes = [];
    this._buffers = [];
    this._bufferRegions = [];
  }
  static assemble(...args) {
    const unwrap = (nodes) => nodes.flatMap((node) => Array.isArray(node) ? unwrap(node) : node instanceof RecordBatch ? node.data.children : node.data);
    const assembler = new VectorAssembler();
    assembler.visitMany(unwrap(args));
    return assembler;
  }
  visit(data) {
    if (data instanceof Vector) {
      this.visitMany(data.data);
      return this;
    }
    const { type } = data;
    if (!DataType.isDictionary(type)) {
      const { length, nullCount } = data;
      if (length > 2147483647) {
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      }
      if (!DataType.isNull(type)) {
        addBuffer.call(this, nullCount <= 0 ? new Uint8Array(0) : truncateBitmap(data.offset, length, data.nullBitmap));
      }
      this.nodes.push(new FieldNode2(length, nullCount));
    }
    return super.visit(data);
  }
  visitNull(_null) {
    return this;
  }
  visitDictionary(data) {
    return this.visit(data.clone(data.type.indices));
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
};
function addBuffer(values) {
  const byteLength = values.byteLength + 7 & ~7;
  this.buffers.push(values);
  this.bufferRegions.push(new BufferRegion(this._byteLength, byteLength));
  this._byteLength += byteLength;
  return this;
}
function assembleUnion(data) {
  const { type, length, typeIds, valueOffsets } = data;
  addBuffer.call(this, typeIds);
  if (type.mode === UnionMode.Sparse) {
    return assembleNestedVector.call(this, data);
  } else if (type.mode === UnionMode.Dense) {
    if (data.offset <= 0) {
      addBuffer.call(this, valueOffsets);
      return assembleNestedVector.call(this, data);
    } else {
      const maxChildTypeId = typeIds.reduce((x, y) => Math.max(x, y), typeIds[0]);
      const childLengths = new Int32Array(maxChildTypeId + 1);
      const childOffsets = new Int32Array(maxChildTypeId + 1).fill(-1);
      const shiftedOffsets = new Int32Array(length);
      const unshiftedOffsets = rebaseValueOffsets(-valueOffsets[0], length, valueOffsets);
      for (let typeId, shift, index = -1; ++index < length; ) {
        if ((shift = childOffsets[typeId = typeIds[index]]) === -1) {
          shift = childOffsets[typeId] = unshiftedOffsets[typeId];
        }
        shiftedOffsets[index] = unshiftedOffsets[index] - shift;
        ++childLengths[typeId];
      }
      addBuffer.call(this, shiftedOffsets);
      for (let child, childIndex = -1, numChildren = type.children.length; ++childIndex < numChildren; ) {
        if (child = data.children[childIndex]) {
          const typeId = type.typeIds[childIndex];
          const childLength = Math.min(length, childLengths[typeId]);
          this.visit(child.slice(childOffsets[typeId], childLength));
        }
      }
    }
  }
  return this;
}
function assembleBoolVector(data) {
  let values;
  if (data.nullCount >= data.length) {
    return addBuffer.call(this, new Uint8Array(0));
  } else if ((values = data.values) instanceof Uint8Array) {
    return addBuffer.call(this, truncateBitmap(data.offset, data.length, values));
  }
  return addBuffer.call(this, packBools(data.values));
}
function assembleFlatVector(data) {
  return addBuffer.call(this, data.values.subarray(0, data.length * data.stride));
}
function assembleFlatListVector(data) {
  const { length, values, valueOffsets } = data;
  const firstOffset = valueOffsets[0];
  const lastOffset = valueOffsets[length];
  const byteLength = Math.min(lastOffset - firstOffset, values.byteLength - firstOffset);
  addBuffer.call(this, rebaseValueOffsets(-valueOffsets[0], length, valueOffsets));
  addBuffer.call(this, values.subarray(firstOffset, firstOffset + byteLength));
  return this;
}
function assembleListVector(data) {
  const { length, valueOffsets } = data;
  if (valueOffsets) {
    addBuffer.call(this, rebaseValueOffsets(valueOffsets[0], length, valueOffsets));
  }
  return this.visit(data.children[0]);
}
function assembleNestedVector(data) {
  return this.visitMany(data.type.children.map((_, i) => data.children[i]).filter(Boolean))[0];
}
VectorAssembler.prototype.visitBool = assembleBoolVector;
VectorAssembler.prototype.visitInt = assembleFlatVector;
VectorAssembler.prototype.visitFloat = assembleFlatVector;
VectorAssembler.prototype.visitUtf8 = assembleFlatListVector;
VectorAssembler.prototype.visitBinary = assembleFlatListVector;
VectorAssembler.prototype.visitFixedSizeBinary = assembleFlatVector;
VectorAssembler.prototype.visitDate = assembleFlatVector;
VectorAssembler.prototype.visitTimestamp = assembleFlatVector;
VectorAssembler.prototype.visitTime = assembleFlatVector;
VectorAssembler.prototype.visitDecimal = assembleFlatVector;
VectorAssembler.prototype.visitList = assembleListVector;
VectorAssembler.prototype.visitStruct = assembleNestedVector;
VectorAssembler.prototype.visitUnion = assembleUnion;
VectorAssembler.prototype.visitInterval = assembleFlatVector;
VectorAssembler.prototype.visitFixedSizeList = assembleListVector;
VectorAssembler.prototype.visitMap = assembleListVector;

// ../../node_modules/apache-arrow/ipc/writer.mjs
var RecordBatchWriter = class extends ReadableInterop {
  constructor(options) {
    super();
    this._position = 0;
    this._started = false;
    this._sink = new AsyncByteQueue();
    this._schema = null;
    this._dictionaryBlocks = [];
    this._recordBatchBlocks = [];
    this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
    isObject(options) || (options = { autoDestroy: true, writeLegacyIpcFormat: false });
    this._autoDestroy = typeof options.autoDestroy === "boolean" ? options.autoDestroy : true;
    this._writeLegacyIpcFormat = typeof options.writeLegacyIpcFormat === "boolean" ? options.writeLegacyIpcFormat : false;
  }
  static throughNode(options) {
    throw new Error(`"throughNode" not available in this environment`);
  }
  static throughDOM(writableStrategy, readableStrategy) {
    throw new Error(`"throughDOM" not available in this environment`);
  }
  toString(sync = false) {
    return this._sink.toString(sync);
  }
  toUint8Array(sync = false) {
    return this._sink.toUint8Array(sync);
  }
  writeAll(input) {
    if (isPromise(input)) {
      return input.then((x) => this.writeAll(x));
    } else if (isAsyncIterable(input)) {
      return writeAllAsync(this, input);
    }
    return writeAll(this, input);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(options) {
    return this._sink.toDOMStream(options);
  }
  toNodeStream(options) {
    return this._sink.toNodeStream(options);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(reason) {
    return this.reset()._sink.abort(reason);
  }
  finish() {
    this._autoDestroy ? this.close() : this.reset(this._sink, this._schema);
    return this;
  }
  reset(sink = this._sink, schema = null) {
    if (sink === this._sink || sink instanceof AsyncByteQueue) {
      this._sink = sink;
    } else {
      this._sink = new AsyncByteQueue();
      if (sink && isWritableDOMStream(sink)) {
        this.toDOMStream({ type: "bytes" }).pipeTo(sink);
      } else if (sink && isWritableNodeStream(sink)) {
        this.toNodeStream({ objectMode: false }).pipe(sink);
      }
    }
    if (this._started && this._schema) {
      this._writeFooter(this._schema);
    }
    this._started = false;
    this._dictionaryBlocks = [];
    this._recordBatchBlocks = [];
    this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
    if (!schema || !compareSchemas(schema, this._schema)) {
      if (schema == null) {
        this._position = 0;
        this._schema = null;
      } else {
        this._started = true;
        this._schema = schema;
        this._writeSchema(schema);
      }
    }
    return this;
  }
  write(payload) {
    let schema = null;
    if (!this._sink) {
      throw new Error(`RecordBatchWriter is closed`);
    } else if (payload == null) {
      return this.finish() && void 0;
    } else if (payload instanceof Table && !(schema = payload.schema)) {
      return this.finish() && void 0;
    } else if (payload instanceof RecordBatch && !(schema = payload.schema)) {
      return this.finish() && void 0;
    }
    if (schema && !compareSchemas(schema, this._schema)) {
      if (this._started && this._autoDestroy) {
        return this.close();
      }
      this.reset(this._sink, schema);
    }
    if (payload instanceof RecordBatch) {
      if (!(payload instanceof _InternalEmptyPlaceholderRecordBatch)) {
        this._writeRecordBatch(payload);
      }
    } else if (payload instanceof Table) {
      this.writeAll(payload.batches);
    } else if (isIterable(payload)) {
      this.writeAll(payload);
    }
  }
  _writeMessage(message, alignment = 8) {
    const a = alignment - 1;
    const buffer = Message2.encode(message);
    const flatbufferSize = buffer.byteLength;
    const prefixSize = !this._writeLegacyIpcFormat ? 8 : 4;
    const alignedSize = flatbufferSize + prefixSize + a & ~a;
    const nPaddingBytes = alignedSize - flatbufferSize - prefixSize;
    if (message.headerType === MessageHeader.RecordBatch) {
      this._recordBatchBlocks.push(new FileBlock(alignedSize, message.bodyLength, this._position));
    } else if (message.headerType === MessageHeader.DictionaryBatch) {
      this._dictionaryBlocks.push(new FileBlock(alignedSize, message.bodyLength, this._position));
    }
    if (!this._writeLegacyIpcFormat) {
      this._write(Int32Array.of(-1));
    }
    this._write(Int32Array.of(alignedSize - prefixSize));
    if (flatbufferSize > 0) {
      this._write(buffer);
    }
    return this._writePadding(nPaddingBytes);
  }
  _write(chunk) {
    if (this._started) {
      const buffer = toUint8Array(chunk);
      if (buffer && buffer.byteLength > 0) {
        this._sink.write(buffer);
        this._position += buffer.byteLength;
      }
    }
    return this;
  }
  _writeSchema(schema) {
    return this._writeMessage(Message2.from(schema));
  }
  _writeFooter(schema) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(MAGIC);
  }
  _writePadding(nBytes) {
    return nBytes > 0 ? this._write(new Uint8Array(nBytes)) : this;
  }
  _writeRecordBatch(batch) {
    const { byteLength, nodes, bufferRegions, buffers } = VectorAssembler.assemble(batch);
    const recordBatch = new RecordBatch3(batch.numRows, nodes, bufferRegions);
    const message = Message2.from(recordBatch, byteLength);
    return this._writeDictionaries(batch)._writeMessage(message)._writeBodyBuffers(buffers);
  }
  _writeDictionaryBatch(dictionary, id, isDelta = false) {
    this._dictionaryDeltaOffsets.set(id, dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0));
    const { byteLength, nodes, bufferRegions, buffers } = VectorAssembler.assemble(new Vector([dictionary]));
    const recordBatch = new RecordBatch3(dictionary.length, nodes, bufferRegions);
    const dictionaryBatch = new DictionaryBatch2(recordBatch, id, isDelta);
    const message = Message2.from(dictionaryBatch, byteLength);
    return this._writeMessage(message)._writeBodyBuffers(buffers);
  }
  _writeBodyBuffers(buffers) {
    let buffer;
    let size, padding;
    for (let i = -1, n = buffers.length; ++i < n; ) {
      if ((buffer = buffers[i]) && (size = buffer.byteLength) > 0) {
        this._write(buffer);
        if ((padding = (size + 7 & ~7) - size) > 0) {
          this._writePadding(padding);
        }
      }
    }
    return this;
  }
  _writeDictionaries(batch) {
    for (let [id, dictionary] of batch.dictionaries) {
      let offset = this._dictionaryDeltaOffsets.get(id) || 0;
      if (offset === 0 || (dictionary = dictionary === null || dictionary === void 0 ? void 0 : dictionary.slice(offset)).length > 0) {
        for (const data of dictionary.data) {
          this._writeDictionaryBatch(data, id, offset > 0);
          offset += data.length;
        }
      }
    }
    return this;
  }
};
var RecordBatchStreamWriter = class extends RecordBatchWriter {
  static writeAll(input, options) {
    const writer = new RecordBatchStreamWriter(options);
    if (isPromise(input)) {
      return input.then((x) => writer.writeAll(x));
    } else if (isAsyncIterable(input)) {
      return writeAllAsync(writer, input);
    }
    return writeAll(writer, input);
  }
};
var RecordBatchFileWriter = class extends RecordBatchWriter {
  static writeAll(input) {
    const writer = new RecordBatchFileWriter();
    if (isPromise(input)) {
      return input.then((x) => writer.writeAll(x));
    } else if (isAsyncIterable(input)) {
      return writeAllAsync(writer, input);
    }
    return writeAll(writer, input);
  }
  constructor() {
    super();
    this._autoDestroy = true;
  }
  _writeSchema(schema) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(schema) {
    const buffer = Footer_.encode(new Footer_(schema, MetadataVersion.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(schema)._write(buffer)._write(Int32Array.of(buffer.byteLength))._writeMagic();
  }
};
function writeAll(writer, input) {
  let chunks = input;
  if (input instanceof Table) {
    chunks = input.batches;
    writer.reset(void 0, input.schema);
  }
  for (const batch of chunks) {
    writer.write(batch);
  }
  return writer.finish();
}
function writeAllAsync(writer, batches) {
  var batches_1, batches_1_1;
  var e_1, _a5;
  return __awaiter(this, void 0, void 0, function* () {
    try {
      for (batches_1 = __asyncValues(batches); batches_1_1 = yield batches_1.next(), !batches_1_1.done; ) {
        const batch = batches_1_1.value;
        writer.write(batch);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (batches_1_1 && !batches_1_1.done && (_a5 = batches_1.return))
          yield _a5.call(batches_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return writer.finish();
  });
}

// ../../node_modules/apache-arrow/io/whatwg/iterable.mjs
function toDOMStream(source, options) {
  if (isAsyncIterable(source)) {
    return asyncIterableAsReadableDOMStream(source, options);
  }
  if (isIterable(source)) {
    return iterableAsReadableDOMStream(source, options);
  }
  throw new Error(`toDOMStream() must be called with an Iterable or AsyncIterable`);
}
function iterableAsReadableDOMStream(source, options) {
  let it = null;
  const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
  const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, options), {
    start(controller) {
      next(controller, it || (it = source[Symbol.iterator]()));
    },
    pull(controller) {
      it ? next(controller, it) : controller.close();
    },
    cancel() {
      ((it === null || it === void 0 ? void 0 : it.return) && it.return() || true) && (it = null);
    }
  }), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
  function next(controller, it2) {
    let buf;
    let r = null;
    let size = controller.desiredSize || null;
    while (!(r = it2.next(bm ? size : null)).done) {
      if (ArrayBuffer.isView(r.value) && (buf = toUint8Array(r.value))) {
        size != null && bm && (size = size - buf.byteLength + 1);
        r.value = buf;
      }
      controller.enqueue(r.value);
      if (size != null && --size <= 0) {
        return;
      }
    }
    controller.close();
  }
}
function asyncIterableAsReadableDOMStream(source, options) {
  let it = null;
  const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
  const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, options), {
    start(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller, it || (it = source[Symbol.asyncIterator]()));
      });
    },
    pull(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        it ? yield next(controller, it) : controller.close();
      });
    },
    cancel() {
      return __awaiter(this, void 0, void 0, function* () {
        ((it === null || it === void 0 ? void 0 : it.return) && (yield it.return()) || true) && (it = null);
      });
    }
  }), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
  function next(controller, it2) {
    return __awaiter(this, void 0, void 0, function* () {
      let buf;
      let r = null;
      let size = controller.desiredSize || null;
      while (!(r = yield it2.next(bm ? size : null)).done) {
        if (ArrayBuffer.isView(r.value) && (buf = toUint8Array(r.value))) {
          size != null && bm && (size = size - buf.byteLength + 1);
          r.value = buf;
        }
        controller.enqueue(r.value);
        if (size != null && --size <= 0) {
          return;
        }
      }
      controller.close();
    });
  }
}

// ../../node_modules/apache-arrow/io/whatwg/builder.mjs
function builderThroughDOMStream(options) {
  return new BuilderTransform(options);
}
var BuilderTransform = class {
  constructor(options) {
    this._numChunks = 0;
    this._finished = false;
    this._bufferedSize = 0;
    const { ["readableStrategy"]: readableStrategy, ["writableStrategy"]: writableStrategy, ["queueingStrategy"]: queueingStrategy = "count" } = options, builderOptions = __rest(options, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
    this._controller = null;
    this._builder = makeBuilder(builderOptions);
    this._getSize = queueingStrategy !== "bytes" ? chunkLength : chunkByteLength;
    const { ["highWaterMark"]: readableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, readableStrategy);
    const { ["highWaterMark"]: writableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, writableStrategy);
    this["readable"] = new ReadableStream({
      ["cancel"]: () => {
        this._builder.clear();
      },
      ["pull"]: (c) => {
        this._maybeFlush(this._builder, this._controller = c);
      },
      ["start"]: (c) => {
        this._maybeFlush(this._builder, this._controller = c);
      }
    }, {
      "highWaterMark": readableHighWaterMark,
      "size": queueingStrategy !== "bytes" ? chunkLength : chunkByteLength
    });
    this["writable"] = new WritableStream({
      ["abort"]: () => {
        this._builder.clear();
      },
      ["write"]: () => {
        this._maybeFlush(this._builder, this._controller);
      },
      ["close"]: () => {
        this._maybeFlush(this._builder.finish(), this._controller);
      }
    }, {
      "highWaterMark": writableHighWaterMark,
      "size": (value) => this._writeValueAndReturnChunkSize(value)
    });
  }
  _writeValueAndReturnChunkSize(value) {
    const bufferedSize = this._bufferedSize;
    this._bufferedSize = this._getSize(this._builder.append(value));
    return this._bufferedSize - bufferedSize;
  }
  _maybeFlush(builder, controller) {
    if (controller == null) {
      return;
    }
    if (this._bufferedSize >= controller.desiredSize) {
      ++this._numChunks && this._enqueue(controller, builder.toVector());
    }
    if (builder.finished) {
      if (builder.length > 0 || this._numChunks === 0) {
        ++this._numChunks && this._enqueue(controller, builder.toVector());
      }
      if (!this._finished && (this._finished = true)) {
        this._enqueue(controller, null);
      }
    }
  }
  _enqueue(controller, chunk) {
    this._bufferedSize = 0;
    this._controller = null;
    chunk == null ? controller.close() : controller.enqueue(chunk);
  }
};
var chunkLength = (chunk) => {
  var _a5;
  return (_a5 = chunk === null || chunk === void 0 ? void 0 : chunk.length) !== null && _a5 !== void 0 ? _a5 : 0;
};
var chunkByteLength = (chunk) => {
  var _a5;
  return (_a5 = chunk === null || chunk === void 0 ? void 0 : chunk.byteLength) !== null && _a5 !== void 0 ? _a5 : 0;
};

// ../../node_modules/apache-arrow/io/whatwg/reader.mjs
function recordBatchReaderThroughDOMStream(writableStrategy, readableStrategy) {
  const queue = new AsyncByteQueue();
  let reader = null;
  const readable = new ReadableStream({
    cancel() {
      return __awaiter(this, void 0, void 0, function* () {
        yield queue.close();
      });
    },
    start(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller, reader || (reader = yield open()));
      });
    },
    pull(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        reader ? yield next(controller, reader) : controller.close();
      });
    }
  });
  return { writable: new WritableStream(queue, Object.assign({ "highWaterMark": Math.pow(2, 14) }, writableStrategy)), readable };
  function open() {
    return __awaiter(this, void 0, void 0, function* () {
      return yield (yield RecordBatchReader.from(queue)).open(readableStrategy);
    });
  }
  function next(controller, reader2) {
    return __awaiter(this, void 0, void 0, function* () {
      let size = controller.desiredSize;
      let r = null;
      while (!(r = yield reader2.next()).done) {
        controller.enqueue(r.value);
        if (size != null && --size <= 0) {
          return;
        }
      }
      controller.close();
    });
  }
}

// ../../node_modules/apache-arrow/io/whatwg/writer.mjs
function recordBatchWriterThroughDOMStream(writableStrategy, readableStrategy) {
  const writer = new this(writableStrategy);
  const reader = new AsyncByteStream(writer);
  const readable = new ReadableStream({
    cancel() {
      return __awaiter(this, void 0, void 0, function* () {
        yield reader.cancel();
      });
    },
    pull(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller);
      });
    },
    start(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller);
      });
    }
  }, Object.assign({ "highWaterMark": Math.pow(2, 14) }, readableStrategy));
  return { writable: new WritableStream(writer, writableStrategy), readable };
  function next(controller) {
    return __awaiter(this, void 0, void 0, function* () {
      let buf = null;
      let size = controller.desiredSize;
      while (buf = yield reader.read(size || null)) {
        controller.enqueue(buf);
        if (size != null && (size -= buf.byteLength) <= 0) {
          return;
        }
      }
      controller.close();
    });
  }
}

// ../../node_modules/apache-arrow/ipc/serialization.mjs
function tableToIPC(table, type = "stream") {
  return (type === "stream" ? RecordBatchStreamWriter : RecordBatchFileWriter).writeAll(table).toUint8Array(true);
}

// ../../node_modules/apache-arrow/Arrow.mjs
var util = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bn_exports), int_exports), bit_exports), math_exports), buffer_exports), vector_exports), {
  compareSchemas,
  compareFields,
  compareTypes
});

// ../../node_modules/apache-arrow/Arrow.dom.mjs
adapters_default.toDOMStream = toDOMStream;
Builder["throughDOM"] = builderThroughDOMStream;
RecordBatchReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchFileReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchStreamReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchWriter["throughDOM"] = recordBatchWriterThroughDOMStream;
RecordBatchFileWriter["throughDOM"] = recordBatchWriterThroughDOMStream;
RecordBatchStreamWriter["throughDOM"] = recordBatchWriterThroughDOMStream;

// src/json_typedef.ts
function arrowToSQLType(type) {
  switch (type.typeId) {
    case Type.Binary:
      return { sqlType: "binary" };
    case Type.Bool:
      return { sqlType: "bool" };
    case Type.Date:
      return { sqlType: "date" };
    case Type.DateDay:
      return { sqlType: "date32[d]" };
    case Type.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case Type.Decimal: {
      const dec = type;
      return { sqlType: "decimal", precision: dec.precision, scale: dec.scale };
    }
    case Type.Float:
      return { sqlType: "float" };
    case Type.Float16:
      return { sqlType: "float16" };
    case Type.Float32:
      return { sqlType: "float32" };
    case Type.Float64:
      return { sqlType: "float64" };
    case Type.Int:
      return { sqlType: "int32" };
    case Type.Int16:
      return { sqlType: "int16" };
    case Type.Int32:
      return { sqlType: "int32" };
    case Type.Int64:
      return { sqlType: "int64" };
    case Type.Uint16:
      return { sqlType: "uint16" };
    case Type.Uint32:
      return { sqlType: "uint32" };
    case Type.Uint64:
      return { sqlType: "uint64" };
    case Type.Uint8:
      return { sqlType: "uint8" };
    case Type.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case Type.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case Type.List: {
      const list = type;
      return {
        sqlType: "list",
        valueType: arrowToSQLType(list.valueType)
      };
    }
    case Type.FixedSizeBinary: {
      const bin = type;
      return { sqlType: "fixedsizebinary", byteWidth: bin.byteWidth };
    }
    case Type.Null:
      return { sqlType: "null" };
    case Type.Utf8:
      return { sqlType: "utf8" };
    case Type.Struct: {
      const struct_ = type;
      return {
        sqlType: "struct",
        fields: struct_.children.map((c) => arrowToSQLField(c.name, c.type))
      };
    }
    case Type.Map: {
      const map_ = type;
      return {
        sqlType: "map",
        keyType: arrowToSQLType(map_.keyType),
        valueType: arrowToSQLType(map_.valueType)
      };
    }
    case Type.Time:
      return { sqlType: "time[s]" };
    case Type.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case Type.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case Type.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case Type.TimeSecond:
      return { sqlType: "time[s]" };
    case Type.Timestamp: {
      const ts = type;
      return { sqlType: "timestamp", timezone: ts.timezone || void 0 };
    }
    case Type.TimestampSecond: {
      const ts = type;
      return { sqlType: "timestamp[s]", timezone: ts.timezone || void 0 };
    }
    case Type.TimestampMicrosecond: {
      const ts = type;
      return { sqlType: "timestamp[us]", timezone: ts.timezone || void 0 };
    }
    case Type.TimestampNanosecond: {
      const ts = type;
      return { sqlType: "timestamp[ns]", timezone: ts.timezone || void 0 };
    }
    case Type.TimestampMillisecond: {
      const ts = type;
      return { sqlType: "timestamp[ms]", timezone: ts.timezone || void 0 };
    }
  }
  throw new Error(`unsupported arrow type: ${type.toString()}`);
}
function arrowToSQLField(name, type) {
  const t = arrowToSQLType(type);
  t.name = name;
  return t;
}

// src/parallel/worker_dispatcher.ts
var AsyncDuckDBDispatcher = class {
  constructor() {
    this._bindings = null;
    this._nextMessageId = 0;
  }
  log(entry) {
    this.postMessage(
      {
        messageId: this._nextMessageId++,
        requestId: 0,
        type: "LOG" /* LOG */,
        data: entry
      },
      []
    );
  }
  sendOK(request) {
    this.postMessage(
      {
        messageId: this._nextMessageId++,
        requestId: request.messageId,
        type: "OK" /* OK */,
        data: null
      },
      []
    );
  }
  failWith(request, e) {
    const obj = {
      name: e.name,
      message: e.message,
      stack: e.stack || void 0
    };
    this.postMessage(
      {
        messageId: this._nextMessageId++,
        requestId: request.messageId,
        type: "ERROR" /* ERROR */,
        data: obj
      },
      []
    );
    return;
  }
  async onMessage(request) {
    switch (request.type) {
      case "PING" /* PING */:
        this.sendOK(request);
        return;
      case "INSTANTIATE" /* INSTANTIATE */:
        if (this._bindings != null) {
          this.failWith(request, new Error("duckdb already initialized"));
        }
        try {
          this._bindings = await this.instantiate(request.data[0], request.data[1], (p) => {
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: request.messageId,
                type: "INSTANTIATE_PROGRESS" /* INSTANTIATE_PROGRESS */,
                data: p
              },
              []
            );
          });
          this.sendOK(request);
        } catch (e) {
          this._bindings = null;
          this.failWith(request, e);
        }
        return;
      default:
        break;
    }
    if (!this._bindings) {
      return this.failWith(request, new Error("duckdb is not initialized"));
    }
    try {
      switch (request.type) {
        case "GET_VERSION" /* GET_VERSION */:
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "VERSION_STRING" /* VERSION_STRING */,
              data: this._bindings.getVersion()
            },
            []
          );
          break;
        case "GET_FEATURE_FLAGS" /* GET_FEATURE_FLAGS */:
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "FEATURE_FLAGS" /* FEATURE_FLAGS */,
              data: this._bindings.getFeatureFlags()
            },
            []
          );
          break;
        case "RESET" /* RESET */:
          this._bindings.reset();
          this.sendOK(request);
          break;
        case "OPEN" /* OPEN */:
          this._bindings.open(request.data);
          this.sendOK(request);
          break;
        case "DROP_FILE" /* DROP_FILE */:
          this._bindings.dropFile(request.data);
          this.sendOK(request);
          break;
        case "DROP_FILES" /* DROP_FILES */:
          this._bindings.dropFiles();
          this.sendOK(request);
          break;
        case "FLUSH_FILES" /* FLUSH_FILES */:
          this._bindings.flushFiles();
          this.sendOK(request);
          break;
        case "CONNECT" /* CONNECT */: {
          const conn = this._bindings.connect();
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "CONNECTION_INFO" /* CONNECTION_INFO */,
              data: conn.useUnsafe((_, c) => c)
            },
            []
          );
          break;
        }
        case "DISCONNECT" /* DISCONNECT */:
          this._bindings.disconnect(request.data);
          this.sendOK(request);
          break;
        case "CREATE_PREPARED" /* CREATE_PREPARED */: {
          const result = this._bindings.createPrepared(request.data[0], request.data[1]);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "PREPARED_STATEMENT_ID" /* PREPARED_STATEMENT_ID */,
              data: result
            },
            []
          );
          break;
        }
        case "CLOSE_PREPARED" /* CLOSE_PREPARED */: {
          this._bindings.closePrepared(request.data[0], request.data[1]);
          this.sendOK(request);
          break;
        }
        case "RUN_PREPARED" /* RUN_PREPARED */: {
          const result = this._bindings.runPrepared(request.data[0], request.data[1], request.data[2]);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "QUERY_RESULT" /* QUERY_RESULT */,
              data: result
            },
            [result.buffer]
          );
          break;
        }
        case "RUN_QUERY" /* RUN_QUERY */: {
          const result = this._bindings.runQuery(request.data[0], request.data[1]);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "QUERY_RESULT" /* QUERY_RESULT */,
              data: result
            },
            [result.buffer]
          );
          break;
        }
        case "SEND_PREPARED" /* SEND_PREPARED */: {
          const result = this._bindings.sendPrepared(request.data[0], request.data[1], request.data[2]);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "QUERY_RESULT_HEADER" /* QUERY_RESULT_HEADER */,
              data: result
            },
            [result.buffer]
          );
          break;
        }
        case "START_PENDING_QUERY" /* START_PENDING_QUERY */: {
          const result = this._bindings.startPendingQuery(request.data[0], request.data[1]);
          const transfer = [];
          if (result) {
            transfer.push(result.buffer);
          }
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "QUERY_RESULT_HEADER_OR_NULL" /* QUERY_RESULT_HEADER_OR_NULL */,
              data: result
            },
            transfer
          );
          break;
        }
        case "POLL_PENDING_QUERY" /* POLL_PENDING_QUERY */: {
          const result = this._bindings.pollPendingQuery(request.data);
          const transfer = [];
          if (result) {
            transfer.push(result.buffer);
          }
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "QUERY_RESULT_HEADER_OR_NULL" /* QUERY_RESULT_HEADER_OR_NULL */,
              data: result
            },
            transfer
          );
          break;
        }
        case "CANCEL_PENDING_QUERY" /* CANCEL_PENDING_QUERY */: {
          const result = this._bindings.cancelPendingQuery(request.data);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "SUCCESS" /* SUCCESS */,
              data: result
            },
            []
          );
          break;
        }
        case "FETCH_QUERY_RESULTS" /* FETCH_QUERY_RESULTS */: {
          const result = this._bindings.fetchQueryResults(request.data);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "QUERY_RESULT_CHUNK" /* QUERY_RESULT_CHUNK */,
              data: result
            },
            [result.buffer]
          );
          break;
        }
        case "GET_TABLE_NAMES" /* GET_TABLE_NAMES */: {
          const result = this._bindings.getTableNames(request.data[0], request.data[1]);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "TABLE_NAMES" /* TABLE_NAMES */,
              data: result
            },
            []
          );
          break;
        }
        case "GLOB_FILE_INFOS" /* GLOB_FILE_INFOS */: {
          const infos = this._bindings.globFiles(request.data);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "FILE_INFOS" /* FILE_INFOS */,
              data: infos
            },
            []
          );
          break;
        }
        case "REGISTER_FILE_URL" /* REGISTER_FILE_URL */:
          this._bindings.registerFileURL(request.data[0], request.data[1], request.data[2], request.data[3]);
          this.sendOK(request);
          break;
        case "REGISTER_FILE_BUFFER" /* REGISTER_FILE_BUFFER */:
          this._bindings.registerFileBuffer(request.data[0], request.data[1]);
          this.sendOK(request);
          break;
        case "REGISTER_FILE_HANDLE" /* REGISTER_FILE_HANDLE */:
          this._bindings.registerFileHandle(
            request.data[0],
            request.data[1],
            request.data[2],
            request.data[3]
          );
          this.sendOK(request);
          break;
        case "COPY_FILE_TO_PATH" /* COPY_FILE_TO_PATH */:
          this._bindings.copyFileToPath(request.data[0], request.data[1]);
          this.sendOK(request);
          break;
        case "COPY_FILE_TO_BUFFER" /* COPY_FILE_TO_BUFFER */: {
          const buffer = this._bindings.copyFileToBuffer(request.data);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "FILE_BUFFER" /* FILE_BUFFER */,
              data: buffer
            },
            []
          );
          break;
        }
        case "COLLECT_FILE_STATISTICS" /* COLLECT_FILE_STATISTICS */:
          this._bindings.collectFileStatistics(request.data[0], request.data[1]);
          this.sendOK(request);
          break;
        case "EXPORT_FILE_STATISTICS" /* EXPORT_FILE_STATISTICS */: {
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "FILE_STATISTICS" /* FILE_STATISTICS */,
              data: this._bindings.exportFileStatistics(request.data)
            },
            []
          );
          break;
        }
        case "INSERT_ARROW_FROM_IPC_STREAM" /* INSERT_ARROW_FROM_IPC_STREAM */: {
          this._bindings.insertArrowFromIPCStream(request.data[0], request.data[1], request.data[2]);
          this.sendOK(request);
          break;
        }
        case "IMPORT_CSV_FROM_PATH" /* INSERT_CSV_FROM_PATH */: {
          this._bindings.insertCSVFromPath(request.data[0], request.data[1], request.data[2]);
          this.sendOK(request);
          break;
        }
        case "IMPORT_JSON_FROM_PATH" /* INSERT_JSON_FROM_PATH */: {
          this._bindings.insertJSONFromPath(request.data[0], request.data[1], request.data[2]);
          this.sendOK(request);
          break;
        }
        case "TOKENIZE" /* TOKENIZE */: {
          const result = this._bindings.tokenize(request.data);
          this.postMessage(
            {
              messageId: this._nextMessageId++,
              requestId: request.messageId,
              type: "SCRIPT_TOKENS" /* SCRIPT_TOKENS */,
              data: result
            },
            []
          );
          break;
        }
      }
    } catch (e) {
      return this.failWith(request, e);
    }
  }
};

// src/bindings/duckdb-eh.js
var DuckDB = (() => {
  var _scriptDir = import.meta.url;
  return function(DuckDB3) {
    DuckDB3 = DuckDB3 || {};
    var Module = typeof DuckDB3 != "undefined" ? DuckDB3 : {};
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise(function(resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var moduleOverrides = Object.assign({}, Module);
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = typeof window == "object";
    var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
    var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    function logExceptionOnExit(e) {
      if (e instanceof ExitStatus)
        return;
      let toLog = e;
      err("exiting due to exception: " + toLog);
    }
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require_path().dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      var fs, nodePath;
      if (typeof __require === "function") {
        fs = require_fs();
        nodePath = require_path();
      }
      read_ = (filename, binary) => {
        filename = nodePath["normalize"](filename);
        return fs.readFileSync(filename, binary ? void 0 : "utf8");
      };
      readBinary = (filename) => {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        return ret;
      };
      readAsync = (filename, onload, onerror) => {
        filename = nodePath["normalize"](filename);
        fs.readFile(filename, function(err2, data) {
          if (err2)
            onerror(err2);
          else
            onload(data.buffer);
        });
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }
      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", function(reason) {
        throw reason;
      });
      quit_ = (status, toThrow) => {
        if (keepRuntimeAlive()) {
          process["exitCode"] = status;
          throw toThrow;
        }
        logExceptionOnExit(toThrow);
        process["exit"](status);
      };
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = (url) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = (url) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = (url, onload, onerror) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = () => {
            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = (title) => document.title = title;
    } else {
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    Object.assign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"])
      arguments_ = Module["arguments"];
    if (Module["thisProgram"])
      thisProgram = Module["thisProgram"];
    if (Module["quit"])
      quit_ = Module["quit"];
    var wasmBinary;
    if (Module["wasmBinary"])
      wasmBinary = Module["wasmBinary"];
    var noExitRuntime = Module["noExitRuntime"] || true;
    if (typeof WebAssembly != "object") {
      abort("no native wasm support detected");
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort(text);
      }
    }
    var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
      idx >>>= 0;
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heapOrArray[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = "";
      while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      ptr >>>= 0;
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      outIdx >>>= 0;
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx)
            break;
          heap[outIdx++ >>> 0] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx)
            break;
          heap[outIdx++ >>> 0] = 192 | u >> 6;
          heap[outIdx++ >>> 0] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx)
            break;
          heap[outIdx++ >>> 0] = 224 | u >> 12;
          heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
          heap[outIdx++ >>> 0] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx)
            break;
          heap[outIdx++ >>> 0] = 240 | u >> 18;
          heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
          heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
          heap[outIdx++ >>> 0] = 128 | u & 63;
        }
      }
      heap[outIdx >>> 0] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
          len++;
        } else if (c <= 2047) {
          len += 2;
        } else if (c >= 55296 && c <= 57343) {
          len += 4;
          ++i;
        } else {
          len += 3;
        }
      }
      return len;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    var wasmTable;
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    function keepRuntimeAlive() {
      return noExitRuntime;
    }
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    function abort(what) {
      {
        if (Module["onAbort"]) {
          Module["onAbort"](what);
        }
      }
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += ". Build with -sASSERTIONS for more info.";
      ___trap();
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return filename.startsWith(dataURIPrefix);
    }
    var wasmBinaryFile;
    if (Module["locateFile"]) {
      wasmBinaryFile = "./duckdb-eh.wasm";
      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = locateFile(wasmBinaryFile);
      }
    } else {
      wasmBinaryFile = new URL("./duckdb-eh.wasm", import.meta.url).toString();
    }
    function getBinary2(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        }
        throw "both async and sync fetching of the wasm failed";
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            if (!response["ok"]) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            }
            return response["arrayBuffer"]();
          }).catch(function() {
            return getBinary2(wasmBinaryFile);
          });
        }
      }
      return Promise.resolve().then(function() {
        return getBinary2(wasmBinaryFile);
      });
    }
    function createWasm() {
      var info = { "a": asmLibraryArg };
      function receiveInstance(instance9, module2) {
        var exports3 = instance9.exports;
        Module["asm"] = exports3;
        wasmMemory = Module["asm"]["ia"];
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["la"];
        addOnInit(Module["asm"]["ja"]);
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiationResult(result) {
        receiveInstance(result["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(function(instance9) {
          return instance9;
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiationResult, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(receiveInstantiationResult);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiationResult);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports2 = Module["instantiateWasm"](info, receiveInstance);
          return exports2;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          readyPromiseReject(e);
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        callbacks.shift()(Module);
      }
    }
    var SYSCALLS = { varargs: void 0, get: function() {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >>> 2];
      return ret;
    }, getStr: function(ptr) {
      var ret = UTF8ToString(ptr);
      return ret;
    } };
    function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
      var total = 0;
      var srcReadLow = readfds ? HEAP32[readfds >>> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >>> 2] : 0;
      var srcWriteLow = writefds ? HEAP32[writefds >>> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >>> 2] : 0;
      var srcExceptLow = exceptfds ? HEAP32[exceptfds >>> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0;
      var dstReadLow = 0, dstReadHigh = 0;
      var dstWriteLow = 0, dstWriteHigh = 0;
      var dstExceptLow = 0, dstExceptHigh = 0;
      var allLow = (readfds ? HEAP32[readfds >>> 2] : 0) | (writefds ? HEAP32[writefds >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds >>> 2] : 0);
      var allHigh = (readfds ? HEAP32[readfds + 4 >>> 2] : 0) | (writefds ? HEAP32[writefds + 4 >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0);
      var check = function(fd2, low, high, val) {
        return fd2 < 32 ? low & val : high & val;
      };
      for (var fd = 0; fd < nfds; fd++) {
        var mask = 1 << fd % 32;
        if (!check(fd, allLow, allHigh, mask)) {
          continue;
        }
        var stream = SYSCALLS.getStreamFromFD(fd);
        var flags = SYSCALLS.DEFAULT_POLLMASK;
        if (stream.stream_ops.poll) {
          flags = stream.stream_ops.poll(stream);
        }
        if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
          fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
          total++;
        }
        if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
          fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
          total++;
        }
        if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
          fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
          total++;
        }
      }
      if (readfds) {
        HEAP32[readfds >>> 2] = dstReadLow;
        HEAP32[readfds + 4 >>> 2] = dstReadHigh;
      }
      if (writefds) {
        HEAP32[writefds >>> 2] = dstWriteLow;
        HEAP32[writefds + 4 >>> 2] = dstWriteHigh;
      }
      if (exceptfds) {
        HEAP32[exceptfds >>> 2] = dstExceptLow;
        HEAP32[exceptfds + 4 >>> 2] = dstExceptHigh;
      }
      return total;
    }
    function SOCKFS() {
      err("missing function: $SOCKFS");
      abort(-1);
    }
    function FS() {
      err("missing function: $FS");
      abort(-1);
    }
    function getSocketFromFD(fd) {
      var socket = SOCKFS.getSocket(fd);
      if (!socket)
        throw new FS.ErrnoError(8);
      return socket;
    }
    function inetNtop4(addr) {
      return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
    }
    function inetNtop6(ints) {
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
      var hasipv4 = true;
      var v4part = "";
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
          hasipv4 = false;
          break;
        }
      }
      if (hasipv4) {
        v4part = inetNtop4(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        if (parts[5] === 0) {
          str = "::";
          if (v4part === "0.0.0.0")
            v4part = "";
          if (v4part === "0.0.0.1")
            v4part = "1";
          str += v4part;
          return str;
        }
      }
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0)
                str += ":";
            }
            continue;
          }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
    function readSockaddr(sa, salen) {
      var family = HEAP16[sa >>> 1];
      var port = _ntohs(HEAPU16[sa + 2 >>> 1]);
      var addr;
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[sa + 4 >>> 2];
          addr = inetNtop4(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [HEAP32[sa + 8 >>> 2], HEAP32[sa + 12 >>> 2], HEAP32[sa + 16 >>> 2], HEAP32[sa + 20 >>> 2]];
          addr = inetNtop6(addr);
          break;
        default:
          return { errno: 5 };
      }
      return { family, addr, port };
    }
    function inetPton4(str) {
      var b = str.split(".");
      for (var i = 0; i < 4; i++) {
        var tmp2 = Number(b[i]);
        if (isNaN(tmp2))
          return null;
        b[i] = tmp2;
      }
      return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    }
    function jstoi_q(str) {
      return parseInt(str);
    }
    function inetPton6(str) {
      var words;
      var w, offset, z;
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (str.startsWith("::")) {
        str = str.replace("::", "Z:");
      } else {
        str = str.replace("::", ":Z:");
      }
      if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2);
      } else {
        words = str.split(":");
      }
      offset = 0;
      z = 0;
      for (w = 0; w < words.length; w++) {
        if (typeof words[w] == "string") {
          if (words[w] === "Z") {
            for (z = 0; z < 8 - words.length + 1; z++) {
              parts[w + z] = 0;
            }
            offset = z - 1;
          } else {
            parts[w + offset] = _htons(parseInt(words[w], 16));
          }
        } else {
          parts[w + offset] = words[w];
        }
      }
      return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]];
    }
    var DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(name) {
      var res = inetPton4(name);
      if (res !== null) {
        return name;
      }
      res = inetPton6(name);
      if (res !== null) {
        return name;
      }
      var addr;
      if (DNS.address_map.addrs[name]) {
        addr = DNS.address_map.addrs[name];
      } else {
        var id = DNS.address_map.id++;
        assert(id < 65535, "exceeded max address mappings of 65535");
        addr = "172.29." + (id & 255) + "." + (id & 65280);
        DNS.address_map.names[addr] = name;
        DNS.address_map.addrs[name] = addr;
      }
      return addr;
    }, lookup_addr: function(addr) {
      if (DNS.address_map.names[addr]) {
        return DNS.address_map.names[addr];
      }
      return null;
    } };
    function getSocketAddress(addrp, addrlen, allowNull) {
      if (allowNull && addrp === 0)
        return null;
      var info = readSockaddr(addrp, addrlen);
      if (info.errno)
        throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    }
    function ___syscall_bind(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    }
    function ___syscall_connect(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    }
    function ___syscall_faccessat(dirfd, path, amode, flags) {
    }
    function ___syscall_fcntl64(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      return 0;
    }
    function ___syscall_fstat64(fd, buf) {
    }
    function ___syscall_ftruncate64(fd, length_low, length_high) {
    }
    function ___syscall_getdents64(fd, dirp, count) {
    }
    function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
      return address;
    }
    function writeSockaddr(sa, family, addr, port, addrlen) {
      switch (family) {
        case 2:
          addr = inetPton4(addr);
          zeroMemory(sa, 16);
          if (addrlen) {
            HEAP32[addrlen >>> 2] = 16;
          }
          HEAP16[sa >>> 1] = family;
          HEAP32[sa + 4 >>> 2] = addr;
          HEAP16[sa + 2 >>> 1] = _htons(port);
          break;
        case 10:
          addr = inetPton6(addr);
          zeroMemory(sa, 28);
          if (addrlen) {
            HEAP32[addrlen >>> 2] = 28;
          }
          HEAP32[sa >>> 2] = family;
          HEAP32[sa + 8 >>> 2] = addr[0];
          HEAP32[sa + 12 >>> 2] = addr[1];
          HEAP32[sa + 16 >>> 2] = addr[2];
          HEAP32[sa + 20 >>> 2] = addr[3];
          HEAP16[sa + 2 >>> 1] = _htons(port);
          break;
        default:
          return 5;
      }
      return 0;
    }
    function ___syscall_getpeername(fd, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      if (!sock.daddr) {
        return -53;
      }
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
      return 0;
    }
    function ___syscall_getsockopt(fd, level, optname, optval, optlen) {
      var sock = getSocketFromFD(fd);
      if (level === 1) {
        if (optname === 4) {
          HEAP32[optval >>> 2] = sock.error;
          HEAP32[optlen >>> 2] = 4;
          sock.error = null;
          return 0;
        }
      }
      return -50;
    }
    function ___syscall_ioctl(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      return 0;
    }
    function ___syscall_lstat64(path, buf) {
    }
    function ___syscall_mkdirat(dirfd, path, mode) {
    }
    function ___syscall_newfstatat(dirfd, path, buf, flags) {
    }
    function ___syscall_openat(dirfd, path, flags, varargs) {
      SYSCALLS.varargs = varargs;
    }
    function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg)
        return 0;
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
      }
      HEAPU8.set(msg.buffer, buf >>> 0);
      return msg.buffer.byteLength;
    }
    function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
    }
    function ___syscall_rmdir(path) {
    }
    function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
    }
    function ___syscall_socket(domain, type, protocol) {
    }
    function ___syscall_stat64(path, buf) {
    }
    function ___syscall_unlinkat(dirfd, path, flags) {
    }
    function __dlinit(main_dso_handle) {
    }
    var dlopenMissingError = "To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";
    function __dlopen_js(filename, flag) {
      abort(dlopenMissingError);
    }
    function __dlsym_js(handle, symbol) {
      abort(dlopenMissingError);
    }
    var nowIsMonotonic = true;
    function __emscripten_get_now_is_monotonic() {
      return nowIsMonotonic;
    }
    function _abort() {
      abort("");
    }
    function _duckdb_web_fs_directory_create(path, pathLen) {
      return globalThis.DUCKDB_RUNTIME.createDirectory(Module, path, pathLen);
    }
    function _duckdb_web_fs_directory_exists(path, pathLen) {
      return globalThis.DUCKDB_RUNTIME.checkDirectory(Module, path, pathLen);
    }
    function _duckdb_web_fs_directory_list_files(path, pathLen) {
      return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(Module, path, pathLen);
    }
    function _duckdb_web_fs_directory_remove(path, pathLen) {
      return globalThis.DUCKDB_RUNTIME.removeDirectory(Module, path, pathLen);
    }
    function _duckdb_web_fs_file_close(fileId) {
      return globalThis.DUCKDB_RUNTIME.closeFile(Module, fileId);
    }
    function _duckdb_web_fs_file_exists(path, pathLen) {
      return globalThis.DUCKDB_RUNTIME.checkFile(Module, path, pathLen);
    }
    function _duckdb_web_fs_file_get_last_modified_time(fileId) {
      return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(Module, fileId);
    }
    function _duckdb_web_fs_file_move(from, fromLen, to, toLen) {
      return globalThis.DUCKDB_RUNTIME.moveFile(Module, from, fromLen, to, toLen);
    }
    function _duckdb_web_fs_file_open(fileId, flags) {
      return globalThis.DUCKDB_RUNTIME.openFile(Module, fileId, flags);
    }
    function _duckdb_web_fs_file_read(fileId, buf, size, location) {
      return globalThis.DUCKDB_RUNTIME.readFile(Module, fileId, buf, size, location);
    }
    function _duckdb_web_fs_file_truncate(fileId, newSize) {
      return globalThis.DUCKDB_RUNTIME.truncateFile(Module, fileId, newSize);
    }
    function _duckdb_web_fs_file_write(fileId, buf, size, location) {
      return globalThis.DUCKDB_RUNTIME.writeFile(Module, fileId, buf, size, location);
    }
    function _duckdb_web_fs_get_default_data_protocol(Module2) {
      return globalThis.DUCKDB_RUNTIME.getDefaultDataProtocol(Module2);
    }
    function _duckdb_web_fs_glob(path, pathLen) {
      return globalThis.DUCKDB_RUNTIME.glob(Module, path, pathLen);
    }
    function _duckdb_web_test_platform_feature(feature) {
      return globalThis.DUCKDB_RUNTIME.testPlatformFeature(Module, feature);
    }
    function _duckdb_web_udf_scalar_call(funcId, descPtr, descSize, ptrsPtr, ptrsSize, response) {
      return globalThis.DUCKDB_RUNTIME.callScalarUDF(Module, funcId, descPtr, descSize, ptrsPtr, ptrsSize, response);
    }
    function _emscripten_date_now() {
      return Date.now();
    }
    function getHeapMax() {
      return 4294901760;
    }
    function _emscripten_get_heap_max() {
      return getHeapMax();
    }
    var _emscripten_get_now;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = () => {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else
      _emscripten_get_now = () => performance.now();
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    }
    var ENV = {};
    function getExecutableName() {
      return thisProgram || "./this.program";
    }
    function getEnvStrings() {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
        for (var x in ENV) {
          if (ENV[x] === void 0)
            delete env[x];
          else
            env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer2++ >>> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull)
        HEAP8[buffer2 >>> 0] = 0;
    }
    function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAPU32[__environ + i * 4 >>> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >>> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAPU32[penviron_buf_size >>> 2] = bufSize;
      return 0;
    }
    function _fd_close(fd) {
      return 52;
    }
    function _fd_fdstat_get(fd, pbuf) {
      var type = fd == 1 || fd == 2 ? 2 : abort();
      HEAP8[pbuf >>> 0] = type;
      return 0;
    }
    function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      return 52;
    }
    function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      return 52;
    }
    function _fd_read(fd, iov, iovcnt, pnum) {
      return 52;
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      return 70;
    }
    function _fd_sync(fd) {
      return 52;
    }
    var printCharBuffers = [null, [], []];
    function printChar(stream, curr) {
      var buffer2 = printCharBuffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
        buffer2.length = 0;
      } else {
        buffer2.push(curr);
      }
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >>> 2];
        var len = HEAPU32[iov + 4 >>> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr + j >>> 0]);
        }
        num += len;
      }
      HEAPU32[pnum >>> 2] = num;
      return 0;
    }
    function _getaddrinfo(node, service, hint, out2) {
      var addr = 0;
      var port = 0;
      var flags = 0;
      var family = 0;
      var type = 0;
      var proto = 0;
      var ai;
      function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
        var sa, salen, ai2;
        var errno;
        salen = family2 === 10 ? 28 : 16;
        addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
        sa = _malloc(salen);
        errno = writeSockaddr(sa, family2, addr2, port2);
        assert(!errno);
        ai2 = _malloc(32);
        HEAP32[ai2 + 4 >>> 2] = family2;
        HEAP32[ai2 + 8 >>> 2] = type2;
        HEAP32[ai2 + 12 >>> 2] = proto2;
        HEAP32[ai2 + 24 >>> 2] = canon;
        HEAPU32[ai2 + 20 >>> 2] = sa;
        if (family2 === 10) {
          HEAP32[ai2 + 16 >>> 2] = 28;
        } else {
          HEAP32[ai2 + 16 >>> 2] = 16;
        }
        HEAP32[ai2 + 28 >>> 2] = 0;
        return ai2;
      }
      if (hint) {
        flags = HEAP32[hint >>> 2];
        family = HEAP32[hint + 4 >>> 2];
        type = HEAP32[hint + 8 >>> 2];
        proto = HEAP32[hint + 12 >>> 2];
      }
      if (type && !proto) {
        proto = type === 2 ? 17 : 6;
      }
      if (!type && proto) {
        type = proto === 17 ? 2 : 1;
      }
      if (proto === 0) {
        proto = 6;
      }
      if (type === 0) {
        type = 1;
      }
      if (!node && !service) {
        return -2;
      }
      if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
        return -1;
      }
      if (hint !== 0 && HEAP32[hint >>> 2] & 2 && !node) {
        return -1;
      }
      if (flags & 32) {
        return -2;
      }
      if (type !== 0 && type !== 1 && type !== 2) {
        return -7;
      }
      if (family !== 0 && family !== 2 && family !== 10) {
        return -6;
      }
      if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
        if (isNaN(port)) {
          if (flags & 1024) {
            return -2;
          }
          return -8;
        }
      }
      if (!node) {
        if (family === 0) {
          family = 2;
        }
        if ((flags & 1) === 0) {
          if (family === 2) {
            addr = _htonl(2130706433);
          } else {
            addr = [0, 0, 0, 1];
          }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAPU32[out2 >>> 2] = ai;
        return 0;
      }
      node = UTF8ToString(node);
      addr = inetPton4(node);
      if (addr !== null) {
        if (family === 0 || family === 2) {
          family = 2;
        } else if (family === 10 && flags & 8) {
          addr = [0, 0, _htonl(65535), addr];
          family = 10;
        } else {
          return -2;
        }
      } else {
        addr = inetPton6(node);
        if (addr !== null) {
          if (family === 0 || family === 10) {
            family = 10;
          } else {
            return -2;
          }
        }
      }
      if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAPU32[out2 >>> 2] = ai;
        return 0;
      }
      if (flags & 4) {
        return -2;
      }
      node = DNS.lookup_name(node);
      addr = inetPton4(node);
      if (family === 0) {
        family = 2;
      } else if (family === 10) {
        addr = [0, 0, _htonl(65535), addr];
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAPU32[out2 >>> 2] = ai;
      return 0;
    }
    function getRandomDevice() {
      if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        var randomBuffer = new Uint8Array(1);
        return () => {
          crypto.getRandomValues(randomBuffer);
          return randomBuffer[0];
        };
      } else if (ENVIRONMENT_IS_NODE) {
        try {
          var crypto_module = __require("crypto");
          return () => crypto_module["randomBytes"](1)[0];
        } catch (e) {
        }
      }
      return () => abort("randomDevice");
    }
    function _getentropy(buffer2, size) {
      if (!_getentropy.randomDevice) {
        _getentropy.randomDevice = getRandomDevice();
      }
      for (var i = 0; i < size; i++) {
        HEAP8[buffer2 + i >>> 0] = _getentropy.randomDevice();
      }
      return 0;
    }
    function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
      var info = readSockaddr(sa, salen);
      if (info.errno) {
        return -6;
      }
      var port = info.port;
      var addr = info.addr;
      var overflowed = false;
      if (node && nodelen) {
        var lookup;
        if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
          if (flags & 8) {
            return -2;
          }
        } else {
          addr = lookup;
        }
        var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
        if (numBytesWrittenExclNull + 1 >= nodelen) {
          overflowed = true;
        }
      }
      if (serv && servlen) {
        port = "" + port;
        var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
        if (numBytesWrittenExclNull + 1 >= servlen) {
          overflowed = true;
        }
      }
      if (overflowed) {
        return -12;
      }
      return 0;
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum2 = 0;
      for (var i = 0; i <= index; sum2 += array[i++]) {
      }
      return sum2;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull)
        u8array.length = numBytesWritten;
      return u8array;
    }
    function writeArrayToMemory(array, buffer2) {
      HEAP8.set(array, buffer2 >>> 0);
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[tm + 40 >>> 2];
      var date = { tm_sec: HEAP32[tm >>> 2], tm_min: HEAP32[tm + 4 >>> 2], tm_hour: HEAP32[tm + 8 >>> 2], tm_mday: HEAP32[tm + 12 >>> 2], tm_mon: HEAP32[tm + 16 >>> 2], tm_year: HEAP32[tm + 20 >>> 2], tm_wday: HEAP32[tm + 24 >>> 2], tm_yday: HEAP32[tm + 28 >>> 2], tm_isdst: HEAP32[tm + 32 >>> 2], tm_gmtoff: HEAP32[tm + 36 >>> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function leadingSomething(value, digits, character) {
        var str = typeof value == "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date2) {
        var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          }
          return thisDate.getFullYear();
        }
        return thisDate.getFullYear() - 1;
      }
      var EXPANSION_RULES_2 = { "%a": function(date2) {
        return WEEKDAYS[date2.tm_wday].substring(0, 3);
      }, "%A": function(date2) {
        return WEEKDAYS[date2.tm_wday];
      }, "%b": function(date2) {
        return MONTHS[date2.tm_mon].substring(0, 3);
      }, "%B": function(date2) {
        return MONTHS[date2.tm_mon];
      }, "%C": function(date2) {
        var year = date2.tm_year + 1900;
        return leadingNulls(year / 100 | 0, 2);
      }, "%d": function(date2) {
        return leadingNulls(date2.tm_mday, 2);
      }, "%e": function(date2) {
        return leadingSomething(date2.tm_mday, 2, " ");
      }, "%g": function(date2) {
        return getWeekBasedYear(date2).toString().substring(2);
      }, "%G": function(date2) {
        return getWeekBasedYear(date2);
      }, "%H": function(date2) {
        return leadingNulls(date2.tm_hour, 2);
      }, "%I": function(date2) {
        var twelveHour = date2.tm_hour;
        if (twelveHour == 0)
          twelveHour = 12;
        else if (twelveHour > 12)
          twelveHour -= 12;
        return leadingNulls(twelveHour, 2);
      }, "%j": function(date2) {
        return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
      }, "%m": function(date2) {
        return leadingNulls(date2.tm_mon + 1, 2);
      }, "%M": function(date2) {
        return leadingNulls(date2.tm_min, 2);
      }, "%n": function() {
        return "\n";
      }, "%p": function(date2) {
        if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
          return "AM";
        }
        return "PM";
      }, "%S": function(date2) {
        return leadingNulls(date2.tm_sec, 2);
      }, "%t": function() {
        return "	";
      }, "%u": function(date2) {
        return date2.tm_wday || 7;
      }, "%U": function(date2) {
        var days = date2.tm_yday + 7 - date2.tm_wday;
        return leadingNulls(Math.floor(days / 7), 2);
      }, "%V": function(date2) {
        var val = Math.floor((date2.tm_yday + 7 - (date2.tm_wday + 6) % 7) / 7);
        if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
          val++;
        }
        if (!val) {
          val = 52;
          var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
          if (dec31 == 4 || dec31 == 5 && __isLeapYear(date2.tm_year % 400 - 1)) {
            val++;
          }
        } else if (val == 53) {
          var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
          if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date2.tm_year)))
            val = 1;
        }
        return leadingNulls(val, 2);
      }, "%w": function(date2) {
        return date2.tm_wday;
      }, "%W": function(date2) {
        var days = date2.tm_yday + 7 - (date2.tm_wday + 6) % 7;
        return leadingNulls(Math.floor(days / 7), 2);
      }, "%y": function(date2) {
        return (date2.tm_year + 1900).toString().substring(2);
      }, "%Y": function(date2) {
        return date2.tm_year + 1900;
      }, "%z": function(date2) {
        var off = date2.tm_gmtoff;
        var ahead = off >= 0;
        off = Math.abs(off) / 60;
        off = off / 60 * 100 + off % 60;
        return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
      }, "%Z": function(date2) {
        return date2.tm_zone;
      }, "%%": function() {
        return "%";
      } };
      pattern = pattern.replace(/%%/g, "\0\0");
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, "%");
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm, loc) {
      return _strftime(s, maxsize, format, tm);
    }
    function _proc_exit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module["onExit"])
          Module["onExit"](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
    function exitJS(status, implicit) {
      EXITSTATUS = status;
      _proc_exit(status);
    }
    function handleException(e) {
      if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS;
      }
      quit_(1, e);
    }
    function getCFunc(ident) {
      var func = Module["_" + ident];
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = { "string": (str) => {
        var ret2 = 0;
        if (str !== null && str !== void 0 && str !== 0) {
          var len = (str.length << 2) + 1;
          ret2 = stackAlloc(len);
          stringToUTF8(str, ret2, len);
        }
        return ret2;
      }, "array": (arr) => {
        var ret2 = stackAlloc(arr.length);
        writeArrayToMemory(arr, ret2);
        return ret2;
      } };
      function convertReturnValue(ret2) {
        if (returnType === "string") {
          return UTF8ToString(ret2);
        }
        if (returnType === "boolean")
          return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0)
              stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      function onDone(ret2) {
        if (stack !== 0)
          stackRestore(stack);
        return convertReturnValue(ret2);
      }
      ret = onDone(ret);
      return ret;
    }
    var asmLibraryArg = { "Z": ___syscall__newselect, "ba": ___syscall_bind, "aa": ___syscall_connect, "U": ___syscall_faccessat, "a": ___syscall_fcntl64, "T": ___syscall_fstat64, "t": ___syscall_ftruncate64, "O": ___syscall_getdents64, "X": ___syscall_getpeername, "Y": ___syscall_getsockopt, "n": ___syscall_ioctl, "Q": ___syscall_lstat64, "P": ___syscall_mkdirat, "R": ___syscall_newfstatat, "o": ___syscall_openat, "_": ___syscall_recvfrom, "L": ___syscall_renameat, "i": ___syscall_rmdir, "$": ___syscall_sendto, "k": ___syscall_socket, "S": ___syscall_stat64, "j": ___syscall_unlinkat, "ca": __dlinit, "ea": __dlopen_js, "da": __dlsym_js, "p": __emscripten_get_now_is_monotonic, "c": _abort, "D": _duckdb_web_fs_directory_create, "F": _duckdb_web_fs_directory_exists, "B": _duckdb_web_fs_directory_list_files, "C": _duckdb_web_fs_directory_remove, "g": _duckdb_web_fs_file_close, "z": _duckdb_web_fs_file_exists, "s": _duckdb_web_fs_file_get_last_modified_time, "A": _duckdb_web_fs_file_move, "H": _duckdb_web_fs_file_open, "d": _duckdb_web_fs_file_read, "G": _duckdb_web_fs_file_truncate, "h": _duckdb_web_fs_file_write, "I": _duckdb_web_fs_get_default_data_protocol, "y": _duckdb_web_fs_glob, "f": _duckdb_web_test_platform_feature, "J": _duckdb_web_udf_scalar_call, "q": _emscripten_date_now, "r": _emscripten_get_heap_max, "V": _emscripten_get_now, "ga": _emscripten_memcpy_big, "ha": _emscripten_resize_heap, "E": _environ_get, "M": _environ_sizes_get, "b": _fd_close, "fa": _fd_fdstat_get, "w": _fd_pread, "v": _fd_pwrite, "m": _fd_read, "x": _fd_seek, "N": _fd_sync, "e": _fd_write, "l": _getaddrinfo, "K": _getentropy, "W": _getnameinfo, "u": _strftime_l };
    var asm = createWasm();
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["ja"]).apply(null, arguments);
    };
    var _main = Module["_main"] = function() {
      return (_main = Module["_main"] = Module["asm"]["ka"]).apply(null, arguments);
    };
    var _duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = function() {
      return (_duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = Module["asm"]["ma"]).apply(null, arguments);
    };
    var _duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = function() {
      return (_duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = Module["asm"]["na"]).apply(null, arguments);
    };
    var _duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = function() {
      return (_duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = Module["asm"]["oa"]).apply(null, arguments);
    };
    var _duckdb_web_reset = Module["_duckdb_web_reset"] = function() {
      return (_duckdb_web_reset = Module["_duckdb_web_reset"] = Module["asm"]["pa"]).apply(null, arguments);
    };
    var _duckdb_web_connect = Module["_duckdb_web_connect"] = function() {
      return (_duckdb_web_connect = Module["_duckdb_web_connect"] = Module["asm"]["qa"]).apply(null, arguments);
    };
    var _duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = function() {
      return (_duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = Module["asm"]["ra"]).apply(null, arguments);
    };
    var _duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = function() {
      return (_duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = Module["asm"]["sa"]).apply(null, arguments);
    };
    var _duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = function() {
      return (_duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = Module["asm"]["ta"]).apply(null, arguments);
    };
    var _duckdb_web_open = Module["_duckdb_web_open"] = function() {
      return (_duckdb_web_open = Module["_duckdb_web_open"] = Module["asm"]["ua"]).apply(null, arguments);
    };
    var _duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = function() {
      return (_duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = Module["asm"]["va"]).apply(null, arguments);
    };
    var _duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = function() {
      return (_duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = Module["asm"]["wa"]).apply(null, arguments);
    };
    var _duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = function() {
      return (_duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = Module["asm"]["xa"]).apply(null, arguments);
    };
    var _duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = function() {
      return (_duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = Module["asm"]["ya"]).apply(null, arguments);
    };
    var _duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = function() {
      return (_duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = Module["asm"]["za"]).apply(null, arguments);
    };
    var _duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = function() {
      return (_duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = Module["asm"]["Aa"]).apply(null, arguments);
    };
    var _duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = function() {
      return (_duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = Module["asm"]["Ba"]).apply(null, arguments);
    };
    var _duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = function() {
      return (_duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = Module["asm"]["Ca"]).apply(null, arguments);
    };
    var _duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = function() {
      return (_duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = Module["asm"]["Da"]).apply(null, arguments);
    };
    var _duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = function() {
      return (_duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = Module["asm"]["Ea"]).apply(null, arguments);
    };
    var _duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = function() {
      return (_duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = Module["asm"]["Fa"]).apply(null, arguments);
    };
    var _duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = function() {
      return (_duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = Module["asm"]["Ga"]).apply(null, arguments);
    };
    var _duckdb_web_get_version = Module["_duckdb_web_get_version"] = function() {
      return (_duckdb_web_get_version = Module["_duckdb_web_get_version"] = Module["asm"]["Ha"]).apply(null, arguments);
    };
    var _duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = function() {
      return (_duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = Module["asm"]["Ia"]).apply(null, arguments);
    };
    var _duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = function() {
      return (_duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = Module["asm"]["Ja"]).apply(null, arguments);
    };
    var _duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = function() {
      return (_duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = Module["asm"]["Ka"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = function() {
      return (_duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = Module["asm"]["La"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = function() {
      return (_duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = Module["asm"]["Ma"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = function() {
      return (_duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = Module["asm"]["Na"]).apply(null, arguments);
    };
    var _duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = function() {
      return (_duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = Module["asm"]["Oa"]).apply(null, arguments);
    };
    var _duckdb_web_query_run = Module["_duckdb_web_query_run"] = function() {
      return (_duckdb_web_query_run = Module["_duckdb_web_query_run"] = Module["asm"]["Pa"]).apply(null, arguments);
    };
    var _duckdb_web_pending_query_start = Module["_duckdb_web_pending_query_start"] = function() {
      return (_duckdb_web_pending_query_start = Module["_duckdb_web_pending_query_start"] = Module["asm"]["Qa"]).apply(null, arguments);
    };
    var _duckdb_web_pending_query_poll = Module["_duckdb_web_pending_query_poll"] = function() {
      return (_duckdb_web_pending_query_poll = Module["_duckdb_web_pending_query_poll"] = Module["asm"]["Ra"]).apply(null, arguments);
    };
    var _duckdb_web_pending_query_cancel = Module["_duckdb_web_pending_query_cancel"] = function() {
      return (_duckdb_web_pending_query_cancel = Module["_duckdb_web_pending_query_cancel"] = Module["asm"]["Sa"]).apply(null, arguments);
    };
    var _duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = function() {
      return (_duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = Module["asm"]["Ta"]).apply(null, arguments);
    };
    var _duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = function() {
      return (_duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = Module["asm"]["Ua"]).apply(null, arguments);
    };
    var _duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = function() {
      return (_duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = Module["asm"]["Va"]).apply(null, arguments);
    };
    var _duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = function() {
      return (_duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = Module["asm"]["Wa"]).apply(null, arguments);
    };
    var _duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = function() {
      return (_duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = Module["asm"]["Xa"]).apply(null, arguments);
    };
    var _htonl = Module["_htonl"] = function() {
      return (_htonl = Module["_htonl"] = Module["asm"]["Ya"]).apply(null, arguments);
    };
    var _htons = Module["_htons"] = function() {
      return (_htons = Module["_htons"] = Module["asm"]["Za"]).apply(null, arguments);
    };
    var _ntohs = Module["_ntohs"] = function() {
      return (_ntohs = Module["_ntohs"] = Module["asm"]["_a"]).apply(null, arguments);
    };
    var _malloc = Module["_malloc"] = function() {
      return (_malloc = Module["_malloc"] = Module["asm"]["$a"]).apply(null, arguments);
    };
    var _free = Module["_free"] = function() {
      return (_free = Module["_free"] = Module["asm"]["ab"]).apply(null, arguments);
    };
    var ___trap = Module["___trap"] = function() {
      return (___trap = Module["___trap"] = Module["asm"]["bb"]).apply(null, arguments);
    };
    var stackSave = Module["stackSave"] = function() {
      return (stackSave = Module["stackSave"] = Module["asm"]["cb"]).apply(null, arguments);
    };
    var stackRestore = Module["stackRestore"] = function() {
      return (stackRestore = Module["stackRestore"] = Module["asm"]["db"]).apply(null, arguments);
    };
    var stackAlloc = Module["stackAlloc"] = function() {
      return (stackAlloc = Module["stackAlloc"] = Module["asm"]["eb"]).apply(null, arguments);
    };
    Module["stackAlloc"] = stackAlloc;
    Module["stackSave"] = stackSave;
    Module["stackRestore"] = stackRestore;
    Module["ccall"] = ccall;
    var calledRun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun)
        run();
      if (!calledRun)
        dependenciesFulfilled = runCaller;
    };
    function callMain(args) {
      var entryFunction = Module["_main"];
      var argc = 0;
      var argv = 0;
      try {
        var ret = entryFunction(argc, argv);
        exitJS(ret, true);
        return ret;
      } catch (e) {
        return handleException(e);
      }
    }
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun)
          return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
          return;
        initRuntime();
        preMain();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"])
          Module["onRuntimeInitialized"]();
        if (shouldRunNow)
          callMain(args);
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    var shouldRunNow = true;
    if (Module["noInitialRun"])
      shouldRunNow = false;
    run();
    return DuckDB3.ready;
  };
})();
var duckdb_eh_default = DuckDB;

// src/bindings/connection.ts
var DuckDBConnection = class {
  constructor(bindings, conn) {
    this._bindings = bindings;
    this._conn = conn;
  }
  close() {
    this._bindings.disconnect(this._conn);
  }
  useUnsafe(callback) {
    return callback(this._bindings, this._conn);
  }
  query(text) {
    const buffer = this._bindings.runQuery(this._conn, text);
    const reader = RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new Table(reader);
  }
  async send(text) {
    let header = this._bindings.startPendingQuery(this._conn, text);
    while (header == null) {
      header = await new Promise((resolve, reject) => {
        try {
          resolve(this._bindings.pollPendingQuery(this._conn));
        } catch (e) {
          reject(e);
        }
      });
    }
    const iter = new ResultStreamIterator(this._bindings, this._conn, header);
    const reader = RecordBatchReader.from(iter);
    console.assert(reader.isSync());
    console.assert(reader.isStream());
    return reader;
  }
  cancelSent() {
    return this._bindings.cancelPendingQuery(this._conn);
  }
  getTableNames(query) {
    return this._bindings.getTableNames(this._conn, query);
  }
  prepare(text) {
    const stmt = this._bindings.createPrepared(this._conn, text);
    return new PreparedStatement(this._bindings, this._conn, stmt);
  }
  createScalarFunction(name, returns, func) {
    this._bindings.createScalarFunction(this._conn, name, returns, func);
  }
  insertArrowTable(table, options) {
    const buffer = tableToIPC(table, "stream");
    this.insertArrowFromIPCStream(buffer, options);
  }
  insertArrowFromIPCStream(buffer, options) {
    this._bindings.insertArrowFromIPCStream(this._conn, buffer, options);
  }
  insertCSVFromPath(path, options) {
    this._bindings.insertCSVFromPath(this._conn, path, options);
  }
  insertJSONFromPath(path, options) {
    this._bindings.insertJSONFromPath(this._conn, path, options);
  }
};
var ResultStreamIterator = class {
  constructor(bindings, conn, header) {
    this.bindings = bindings;
    this.conn = conn;
    this.header = header;
    this._first = true;
    this._depleted = false;
  }
  next() {
    if (this._first) {
      this._first = false;
      return { done: false, value: this.header };
    }
    if (this._depleted) {
      return { done: true, value: null };
    }
    const bufferI8 = this.bindings.fetchQueryResults(this.conn);
    this._depleted = bufferI8.length == 0;
    return {
      done: this._depleted,
      value: bufferI8
    };
  }
  [Symbol.iterator]() {
    return this;
  }
};
var PreparedStatement = class {
  constructor(bindings, connectionId, statementId) {
    this.bindings = bindings;
    this.connectionId = connectionId;
    this.statementId = statementId;
  }
  close() {
    this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  query(...params) {
    const buffer = this.bindings.runPrepared(this.connectionId, this.statementId, params);
    const reader = RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new Table(reader);
  }
  send(...params) {
    const header = this.bindings.sendPrepared(this.connectionId, this.statementId, params);
    const iter = new ResultStreamIterator(this.bindings, this.connectionId, header);
    const reader = RecordBatchReader.from(iter);
    console.assert(reader.isSync());
    console.assert(reader.isStream());
    return reader;
  }
};

// src/bindings/udf_runtime.ts
var TEXT_ENCODER = new TextEncoder();
var TEXT_DECODER = new TextDecoder("utf-8");
function storeError(mod, response, message) {
  const msgBuffer = TEXT_ENCODER.encode(message);
  const heapAddr = mod._malloc(msgBuffer.byteLength);
  const heapArray = mod.HEAPU8.subarray(heapAddr, heapAddr + msgBuffer.byteLength);
  heapArray.set(msgBuffer);
  mod.HEAPF64[(response >> 3) + 0] = 1;
  mod.HEAPF64[(response >> 3) + 1] = heapAddr;
  mod.HEAPF64[(response >> 3) + 2] = heapArray.byteLength;
}
function getTypeSize(ptype) {
  switch (ptype) {
    case "UINT8":
    case "INT8":
      return 1;
    case "INT32":
    case "FLOAT":
      return 4;
    case "INT64":
    case "UINT64":
    case "DOUBLE":
    case "VARCHAR":
      return 8;
    default:
      return 0;
  }
}
function ptrToArray(mod, ptr, ptype, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n * getTypeSize(ptype));
  switch (ptype) {
    case "UINT8":
      return new Uint8Array(heap.buffer, heap.byteOffset, n);
    case "INT8":
      return new Int8Array(heap.buffer, heap.byteOffset, n);
    case "INT32":
      return new Int32Array(heap.buffer, heap.byteOffset, n);
    case "FLOAT":
      return new Float32Array(heap.buffer, heap.byteOffset, n);
    case "DOUBLE":
      return new Float64Array(heap.buffer, heap.byteOffset, n);
    case "VARCHAR":
      return new Float64Array(heap.buffer, heap.byteOffset, n);
    default:
      return new Array(0);
  }
}
function ptrToUint8Array(mod, ptr, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n);
  return new Uint8Array(heap.buffer, heap.byteOffset, n);
}
function ptrToFloat64Array(mod, ptr, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n * 8);
  return new Float64Array(heap.buffer, heap.byteOffset, n);
}
function callScalarUDF(runtime, mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize) {
  try {
    const udf = runtime._udfFunctions.get(funcId);
    if (!udf) {
      storeError(mod, response, "Unknown UDF with id: " + funcId);
      return;
    }
    const rawDesc = TEXT_DECODER.decode(mod.HEAPU8.subarray(descPtr, descPtr + descSize));
    const desc = JSON.parse(rawDesc);
    const ptrs = ptrToFloat64Array(mod, ptrsPtr, ptrsSize / 8);
    const buildResolver = (arg) => {
      let validity = null;
      if (arg.validityBuffer !== void 0) {
        validity = ptrToUint8Array(mod, ptrs[arg.validityBuffer], desc.rows);
      }
      switch (arg.physicalType) {
        case "VARCHAR": {
          if (arg.dataBuffer === null || arg.dataBuffer === void 0) {
            throw new Error("malformed data view, expected data buffer for VARCHAR argument");
          }
          if (arg.lengthBuffer === null || arg.lengthBuffer === void 0) {
            throw new Error("malformed data view, expected data length buffer for VARCHAR argument");
          }
          const raw = ptrToArray(mod, ptrs[arg.dataBuffer], arg.physicalType, desc.rows);
          const strings = [];
          const stringLengths = ptrToFloat64Array(mod, ptrs[arg.lengthBuffer], desc.rows);
          for (let j = 0; j < desc.rows; ++j) {
            if (validity != null && !validity[j]) {
              strings.push(null);
              continue;
            }
            const subarray = mod.HEAPU8.subarray(
              raw[j],
              raw[j] + stringLengths[j]
            );
            const str = TEXT_DECODER.decode(subarray);
            strings.push(str);
          }
          return (row) => strings[row];
        }
        case "STRUCT": {
          const tmp2 = {};
          const children = [];
          for (let j = 0; j < (arg.children?.length || 0); ++j) {
            const attr = arg.children[j];
            const child = buildResolver(attr);
            children.push((row) => {
              tmp2[attr.name] = child(row);
            });
          }
          if (validity != null) {
            return (row) => {
              if (!validity[row]) {
                return null;
              }
              for (const resolver of children) {
                resolver(row);
              }
              return tmp2;
            };
          } else {
            return (row) => {
              for (const resolver of children) {
                resolver(row);
              }
              return tmp2;
            };
          }
        }
        default: {
          if (arg.dataBuffer === void 0) {
            throw new Error(
              "malformed data view, expected data buffer for argument of type: " + arg.physicalType
            );
          }
          const data = ptrToArray(mod, ptrs[arg.dataBuffer], arg.physicalType, desc.rows);
          if (validity != null) {
            return (row) => !validity[row] ? null : data[row];
          } else {
            return (row) => data[row];
          }
        }
      }
    };
    const argResolvers = [];
    for (let i = 0; i < desc.args.length; ++i) {
      argResolvers.push(buildResolver(desc.args[i]));
    }
    const resultDataLen = desc.rows * getTypeSize(desc.ret.physicalType);
    const resultDataPtr = mod._malloc(resultDataLen);
    const resultData = ptrToArray(mod, resultDataPtr, desc.ret.physicalType, desc.rows);
    const resultValidityPtr = mod._malloc(desc.rows);
    const resultValidity = ptrToUint8Array(mod, resultValidityPtr, desc.rows);
    if (resultData.length == 0 || resultValidity.length == 0) {
      storeError(mod, response, "Can't create physical arrays for result");
      return;
    }
    let rawResultData = resultData;
    if (desc.ret.physicalType == "VARCHAR") {
      rawResultData = new Array(desc.rows);
    }
    const args = [];
    for (let i = 0; i < desc.args.length; ++i) {
      args.push(null);
    }
    for (let i = 0; i < desc.rows; ++i) {
      for (let j = 0; j < desc.args.length; ++j) {
        args[j] = argResolvers[j](i);
      }
      const res = udf.func(...args);
      rawResultData[i] = res;
      resultValidity[i] = res === void 0 || res === null ? 0 : 1;
    }
    let resultLengthsPtr = 0;
    switch (desc.ret.physicalType) {
      case "VARCHAR": {
        const resultDataUTF8 = new Array(0);
        resultLengthsPtr = mod._malloc(desc.rows * getTypeSize("DOUBLE"));
        const resultLengths = ptrToFloat64Array(mod, resultLengthsPtr, desc.rows);
        let totalLength = 0;
        for (let row = 0; row < desc.rows; ++row) {
          const utf8 = TEXT_ENCODER.encode(rawResultData[row] || "");
          resultDataUTF8.push(utf8);
          resultLengths[row] = utf8.length;
          totalLength += utf8.length;
        }
        const resultStringPtr = mod._malloc(totalLength);
        const resultStringBuf = mod.HEAPU8.subarray(resultStringPtr, resultStringPtr + totalLength);
        let writerOffset = 0;
        for (let row = 0; row < desc.rows; ++row) {
          resultData[row] = writerOffset;
          const resultUTF8 = resultDataUTF8[row];
          const writer = resultStringBuf.subarray(writerOffset, writerOffset + resultUTF8.length);
          writer.set(resultUTF8);
          writerOffset += resultUTF8.length;
        }
      }
    }
    const retLen = 3 * 8;
    const retPtr = mod._malloc(retLen);
    const retBuffer = ptrToFloat64Array(mod, retPtr, 3);
    retBuffer[0] = resultDataPtr;
    retBuffer[1] = resultValidityPtr;
    retBuffer[2] = resultLengthsPtr;
    mod.HEAPF64[(response >> 3) + 0] = 0;
    mod.HEAPF64[(response >> 3) + 1] = retPtr;
    mod.HEAPF64[(response >> 3) + 2] = 0;
  } catch (e) {
    storeError(mod, response, e.toString());
  }
}

// src/bindings/runtime.ts
function TextDecoderWrapper() {
  const decoder2 = new TextDecoder();
  return (data) => {
    if (typeof SharedArrayBuffer !== "undefined" && data.buffer instanceof SharedArrayBuffer) {
      data = new Uint8Array(data);
    }
    return decoder2.decode(data);
  };
}
var decodeText = TextDecoderWrapper();
function failWith(mod, msg) {
  console.error(`FAIL WITH: ${msg}`);
  mod.ccall("duckdb_web_fail_with", null, ["string"], [msg]);
}
function copyBuffer(mod, begin, length) {
  const buffer = mod.HEAPU8.subarray(begin, begin + length);
  const copy = new Uint8Array(new ArrayBuffer(buffer.byteLength));
  copy.set(buffer);
  return copy;
}
function readString(mod, begin, length) {
  return decodeText(mod.HEAPU8.subarray(begin, begin + length));
}
function callSRet(mod, funcName, argTypes, args) {
  const stackPointer = mod.stackSave();
  const response = mod.stackAlloc(3 * 8);
  argTypes.unshift("number");
  args.unshift(response);
  mod.ccall(funcName, null, argTypes, args);
  const status = mod.HEAPF64[(response >> 3) + 0];
  const data = mod.HEAPF64[(response >> 3) + 1];
  const dataSize = mod.HEAPF64[(response >> 3) + 2];
  mod.stackRestore(stackPointer);
  return [status, data, dataSize];
}
function dropResponseBuffers(mod) {
  mod.ccall("duckdb_web_clear_response", null, [], []);
}

// src/bindings/file_stats.ts
var FileStatistics = class {
  constructor(u8array) {
    const f642 = new Float64Array(u8array.buffer, u8array.byteOffset, u8array.byteLength / 8);
    const blocks2 = new Uint8Array(new ArrayBuffer(u8array.byteLength));
    blocks2.set(u8array.subarray(7 * 8));
    this.totalFileReadsCold = f642[0];
    this.totalFileReadsAhead = f642[1];
    this.totalFileReadsCached = f642[2];
    this.totalFileWrites = f642[3];
    this.totalPageAccesses = f642[4];
    this.totalPageLoads = f642[5];
    this.blockSize = f642[6];
    this.blockStats = blocks2;
  }
  getBlockStats(index, out) {
    out = out || {
      file_reads_cold: 0,
      file_reads_ahead: 0,
      file_reads_cached: 0,
      file_writes: 0,
      page_accesses: 0,
      page_loads: 0
    };
    out.file_writes = this.blockStats[index * 3 + 0] & 15;
    out.file_reads_cold = this.blockStats[index * 3 + 0] >> 4;
    out.file_reads_ahead = this.blockStats[index * 3 + 1] & 15;
    out.file_reads_cached = this.blockStats[index * 3 + 1] >> 4;
    out.page_accesses = this.blockStats[index * 3 + 1] & 15;
    out.page_loads = this.blockStats[index * 3 + 1] >> 4;
    return out;
  }
};

// src/bindings/bindings_base.ts
var TEXT_ENCODER2 = new TextEncoder();
var DuckDBBindingsBase = class {
  constructor(logger, runtime) {
    this._instance = null;
    this._initPromise = null;
    this._initPromiseResolver = () => {
    };
    this.onInstantiationProgress = [];
    this._logger = logger;
    this._runtime = runtime;
    this._nextUDFId = 1;
  }
  get logger() {
    return this._logger;
  }
  get mod() {
    return this._instance;
  }
  get pthread() {
    return this.mod.PThread || null;
  }
  async instantiate(onProgress = (_) => {
  }) {
    if (this._instance != null) {
      return this;
    }
    if (this._initPromise != null) {
      this.onInstantiationProgress.push(onProgress);
      await this._initPromise;
    }
    this._initPromise = new Promise((resolve) => {
      this._initPromiseResolver = resolve;
    });
    this.onInstantiationProgress = [onProgress];
    this._instance = await this.instantiateImpl({
      print: console.log.bind(console),
      printErr: console.log.bind(console),
      onRuntimeInitialized: this._initPromiseResolver
    });
    await this._initPromise;
    this._initPromise = null;
    this.onInstantiationProgress = this.onInstantiationProgress.filter((x) => x != onProgress);
    return this;
  }
  open(config) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_open", ["string"], [JSON.stringify(config)]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  reset() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_reset", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  getVersion() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_get_version", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const version = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return version;
  }
  getFeatureFlags() {
    return this.mod.ccall("duckdb_web_get_feature_flags", "number", [], []);
  }
  tokenize(text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_tokenize", ["string"], [text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return JSON.parse(res);
  }
  connect() {
    const conn = this.mod.ccall("duckdb_web_connect", "number", [], []);
    return new DuckDBConnection(this, conn);
  }
  disconnect(conn) {
    this.mod.ccall("duckdb_web_disconnect", null, ["number"], [conn]);
    if (this.pthread) {
      for (const worker of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) {
        worker.postMessage({
          cmd: "dropUDFFunctions",
          connectionId: conn
        });
      }
    }
  }
  runQuery(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_query_run", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  startPendingQuery(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_pending_query_start", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    if (d == 0) {
      return null;
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  pollPendingQuery(conn) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_pending_query_poll", ["number"], [conn]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    if (d == 0) {
      return null;
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  cancelPendingQuery(conn) {
    return this.mod.ccall("duckdb_web_pending_query_cancel", "boolean", ["number"], [conn]);
  }
  fetchQueryResults(conn) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_query_fetch_results", ["number"], [conn]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  getTableNames(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_get_tablenames", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return JSON.parse(res);
  }
  createScalarFunction(conn, name, returns, func) {
    const decl = {
      functionId: this._nextUDFId,
      name,
      returnType: arrowToSQLType(returns)
    };
    const def = {
      functionId: decl.functionId,
      connectionId: conn,
      name,
      returnType: returns,
      func
    };
    this._nextUDFId += 1;
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_udf_scalar_create",
      ["number", "string"],
      [conn, JSON.stringify(decl)]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    globalThis.DUCKDB_RUNTIME._udfFunctions = (globalThis.DUCKDB_RUNTIME._udfFunctions || /* @__PURE__ */ new Map()).set(
      def.functionId,
      def
    );
    if (this.pthread) {
      for (const worker of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) {
        worker.postMessage({
          cmd: "registerUDFFunction",
          udf: def
        });
      }
    }
  }
  createPrepared(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_create", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    return d;
  }
  closePrepared(conn, statement) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_close", ["number", "number"], [conn, statement]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  runPrepared(conn, statement, params) {
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_prepared_run",
      ["number", "number", "string"],
      [conn, statement, JSON.stringify(params)]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  sendPrepared(conn, statement, params) {
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_prepared_send",
      ["number", "number", "string"],
      [conn, statement, JSON.stringify(params)]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  insertArrowFromIPCStream(conn, buffer, options) {
    if (buffer.length == 0)
      return;
    const bufferPtr = this.mod._malloc(buffer.length);
    const bufferOfs = this.mod.HEAPU8.subarray(bufferPtr, bufferPtr + buffer.length);
    bufferOfs.set(buffer);
    const optJSON = options ? JSON.stringify(options) : "";
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_insert_arrow_from_ipc_stream",
      ["number", "number", "number", "string"],
      [conn, bufferPtr, buffer.length, optJSON]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  insertCSVFromPath(conn, path, options) {
    if (options.columns !== void 0) {
      options.columnsFlat = [];
      for (const k in options.columns) {
        options.columnsFlat.push(arrowToSQLField(k, options.columns[k]));
      }
    }
    const opt = { ...options };
    opt.columns = opt.columnsFlat;
    delete opt.columnsFlat;
    const optJSON = JSON.stringify(opt);
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_insert_csv_from_path",
      ["number", "string", "string"],
      [conn, path, optJSON]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  insertJSONFromPath(conn, path, options) {
    if (options.columns !== void 0) {
      options.columnsFlat = [];
      for (const k in options.columns) {
        options.columnsFlat.push(arrowToSQLField(k, options.columns[k]));
      }
    }
    const opt = { ...options };
    opt.columns = opt.columnsFlat;
    delete opt.columnsFlat;
    const optJSON = JSON.stringify(opt);
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_insert_json_from_path",
      ["number", "string", "string"],
      [conn, path, optJSON]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  globFiles(path) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_glob_file_infos", ["string"], [path]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const infoStr = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    const info = JSON.parse(infoStr);
    if (info == null) {
      return [];
    }
    return info;
  }
  registerFileURL(name, url, proto, directIO = false) {
    if (url === void 0) {
      url = name;
    }
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_fs_register_file_url",
      ["string", "string"],
      [name, url, proto, directIO]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  registerFileText(name, text) {
    const buffer = TEXT_ENCODER2.encode(text);
    this.registerFileBuffer(name, buffer);
  }
  registerFileBuffer(name, buffer) {
    const ptr = this.mod._malloc(buffer.length);
    const dst = this.mod.HEAPU8.subarray(ptr, ptr + buffer.length);
    dst.set(buffer);
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_fs_register_file_buffer",
      ["string", "number", "number"],
      [name, ptr, buffer.length]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  registerFileHandle(name, handle, protocol, directIO) {
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_fs_register_file_url",
      ["string", "string", "number", "boolean"],
      [name, name, protocol, directIO]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    globalThis.DUCKDB_RUNTIME._files = (globalThis.DUCKDB_RUNTIME._files || /* @__PURE__ */ new Map()).set(name, handle);
    if (this.pthread) {
      for (const worker of this.pthread.runningWorkers) {
        worker.postMessage({
          cmd: "registerFileHandle",
          fileName: name,
          fileHandle: handle
        });
      }
      for (const worker of this.pthread.unusedWorkers) {
        worker.postMessage({
          cmd: "dropFileHandle",
          fileName: name
        });
      }
    }
  }
  dropFile(name) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_drop_file", ["string"], [name]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  dropFiles() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_drop_files", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  flushFiles() {
    this.mod.ccall("duckdb_web_flush_files", null, [], []);
  }
  copyFileToPath(name, path) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_copy_file_to_path", ["string", "string"], [name, path]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  copyFileToBuffer(name) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_copy_file_to_buffer", ["string"], [name]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const buffer = this.mod.HEAPU8.subarray(d, d + n);
    const copy = new Uint8Array(buffer.length);
    copy.set(buffer);
    dropResponseBuffers(this.mod);
    return copy;
  }
  collectFileStatistics(file, enable) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_collect_file_stats", ["string", "boolean"], [file, enable]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  exportFileStatistics(file) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_export_file_stats", ["string"], [file]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    return new FileStatistics(this.mod.HEAPU8.subarray(d, d + n));
  }
};

// src/bindings/bindings_browser_base.ts
var DuckDBBrowserBindings = class extends DuckDBBindingsBase {
  constructor(logger, runtime, mainModuleURL, pthreadWorkerURL) {
    super(logger, runtime);
    this.mainModuleURL = mainModuleURL;
    this.pthreadWorkerURL = pthreadWorkerURL;
  }
  locateFile(path, prefix) {
    if (path.endsWith(".wasm")) {
      return this.mainModuleURL;
    }
    if (path.endsWith(".worker.js")) {
      if (!this.pthreadWorkerURL) {
        throw new Error("Missing DuckDB worker URL!");
      }
      return this.pthreadWorkerURL;
    }
    throw new Error(`WASM instantiation requested unexpected file: prefix=${prefix} path=${path}`);
  }
  instantiateWasm(imports, success) {
    globalThis.DUCKDB_RUNTIME = this._runtime;
    const handlers = this.onInstantiationProgress;
    if (WebAssembly.instantiateStreaming) {
      if (typeof TransformStream === "function") {
        const fetchWithProgress = async () => {
          const request = new Request(this.mainModuleURL);
          const response2 = await fetch(request);
          const contentLengthHdr = response2.headers.get("content-length");
          const contentLength = contentLengthHdr ? parseInt(contentLengthHdr, 10) || 0 : 0;
          const start = new Date();
          const progress = {
            startedAt: start,
            updatedAt: start,
            bytesTotal: contentLength || 0,
            bytesLoaded: 0
          };
          const tracker = {
            transform(chunk, ctrl) {
              progress.bytesLoaded += chunk.byteLength;
              const now = new Date();
              if (now.getTime() - progress.updatedAt.getTime() < 20) {
                progress.updatedAt = now;
                ctrl.enqueue(chunk);
                return;
              }
              for (const p of handlers) {
                p(progress);
              }
              ctrl.enqueue(chunk);
            }
          };
          const ts = new TransformStream(tracker);
          return new Response(response2.body?.pipeThrough(ts), response2);
        };
        const response = fetchWithProgress();
        WebAssembly.instantiateStreaming(response, imports).then((output) => {
          success(output.instance, output.module);
        });
      } else {
        console.warn("instantiating without progress handler since transform streams are unavailable");
        const request = new Request(this.mainModuleURL);
        WebAssembly.instantiateStreaming(fetch(request), imports).then((output) => {
          success(output.instance, output.module);
        });
      }
    } else if (typeof XMLHttpRequest == "function") {
      const xhr = new XMLHttpRequest();
      const url = this.mainModuleURL;
      const start = new Date();
      const progress = {
        startedAt: start,
        updatedAt: start,
        bytesTotal: 0,
        bytesLoaded: 0
      };
      xhr.open("GET", url);
      xhr.responseType = "arraybuffer";
      xhr.onerror = (error) => {
        this.logger.log({
          timestamp: new Date(),
          level: 4 /* ERROR */,
          origin: 3 /* BINDINGS */,
          topic: 5 /* INSTANTIATE */,
          event: 2 /* ERROR */,
          value: "Failed to load WASM: " + error
        });
        throw new Error(error.toString());
      };
      xhr.onprogress = (e) => {
        progress.bytesTotal = e.total;
        progress.bytesLoaded = e.loaded;
        const now = new Date();
        if (now.getTime() - progress.updatedAt.getTime() < 20) {
          progress.updatedAt = now;
          return;
        }
        for (const p of handlers) {
          p(progress);
        }
      };
      xhr.onload = () => {
        WebAssembly.instantiate(xhr.response, imports).then((output) => {
          success(output.instance, output.module);
        }).catch((error) => {
          this.logger.log({
            timestamp: new Date(),
            level: 4 /* ERROR */,
            origin: 3 /* BINDINGS */,
            topic: 5 /* INSTANTIATE */,
            event: 2 /* ERROR */,
            value: "Failed to instantiate WASM: " + error
          });
          throw new Error(error);
        });
      };
      xhr.send();
    } else {
      console.warn("instantiating with manual fetch since streaming instantiation and xhrs are unavailable");
      const run = async () => {
        const request = new Request(this.mainModuleURL);
        const response = await fetch(request);
        const buffer = await response.arrayBuffer();
        WebAssembly.instantiate(buffer, imports).then((output) => {
          success(output.instance, output.module);
        });
      };
      run();
    }
    return [];
  }
};

// src/bindings/bindings_browser_eh.ts
var DuckDB2 = class extends DuckDBBrowserBindings {
  constructor(logger, runtime, mainModuleURL, pthreadWorkerURL = null) {
    super(logger, runtime, mainModuleURL, pthreadWorkerURL);
  }
  instantiateImpl(moduleOverrides) {
    return duckdb_eh_default({
      ...moduleOverrides,
      instantiateWasm: this.instantiateWasm.bind(this),
      locateFile: this.locateFile.bind(this)
    });
  }
};

// src/utils/s3_helper.ts
var import_js_sha256 = __toESM(require_sha256());
var getHTTPHost = function(config, url, bucket) {
  if (config?.endpoint?.startsWith("http")) {
    const httpHost = `${config?.endpoint}`;
    const offset = httpHost.indexOf("://") + 3;
    return httpHost.substring(offset);
  } else if (config?.endpoint) {
    return `${bucket}.${config?.endpoint}`;
  } else {
    return `${bucket}.s3.amazonaws.com`;
  }
};
function getS3Params(config, url, method2) {
  const parsedS3Url = parseS3Url(url);
  let path = parsedS3Url.path;
  if (isPathStyleAccess(config)) {
    path = `/${parsedS3Url.bucket}${path}`;
  }
  return {
    url: path,
    query: "",
    host: getHTTPHost(config, url, parsedS3Url.bucket),
    region: config?.region ?? "",
    service: "s3",
    method: method2,
    accessKeyId: config?.accessKeyId ?? "",
    secretAccessKey: config?.secretAccessKey ?? "",
    sessionToken: config?.sessionToken ?? "",
    dateNow: new Date().toISOString().replace(/-/g, "").split("T")[0],
    datetimeNow: new Date().toISOString().replace(/-/g, "").replace(/:/g, "").split(".")[0] + "Z"
  };
}
function uriEncode(input, encode_slash = false) {
  const hexDigit = "0123456789ABCDEF";
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    if (ch >= "A" && ch <= "Z" || ch >= "a" && ch <= "z" || ch >= "0" && ch <= "9" || ch == "_" || ch == "-" || ch == "~" || ch == ".") {
      result += ch;
    } else if (ch == "/") {
      if (encode_slash) {
        result += "%2F";
      } else {
        result += ch;
      }
    } else {
      result += "%";
      result += hexDigit[ch.charCodeAt(0) >> 4];
      result += hexDigit[ch.charCodeAt(0) & 15];
    }
  }
  return result;
}
function createS3Headers(params, payloadParams = null) {
  const payloadHash = payloadParams?.contentHash ?? "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const res = /* @__PURE__ */ new Map();
  res.set("x-amz-date", params.datetimeNow);
  res.set("x-amz-content-sha256", payloadHash);
  if (params.sessionToken) {
    res.set("x-amz-security-token", params.sessionToken);
  }
  let signedHeaders = "";
  if (payloadParams?.contentType) {
    signedHeaders += "content-type;";
  }
  signedHeaders += "host;x-amz-content-sha256;x-amz-date";
  if (params.sessionToken) {
    signedHeaders += ";x-amz-security-token";
  }
  let canonicalRequest = params.method + "\n" + uriEncode(params.url) + "\n" + params.query;
  if (payloadParams?.contentType) {
    canonicalRequest += "\ncontent-type:" + payloadParams?.contentType;
  }
  canonicalRequest += "\nhost:" + params.host + "\nx-amz-content-sha256:" + payloadHash + "\nx-amz-date:" + params.datetimeNow;
  if (params.sessionToken && params.sessionToken.length > 0) {
    canonicalRequest += "\nx-amz-security-token:" + params.sessionToken;
  }
  canonicalRequest += "\n\n" + signedHeaders + "\n" + payloadHash;
  const canonicalRequestHashStr = (0, import_js_sha256.sha256)(canonicalRequest);
  const stringToSign = "AWS4-HMAC-SHA256\n" + params.datetimeNow + "\n" + params.dateNow + "/" + params.region + "/" + params.service + "/aws4_request\n" + canonicalRequestHashStr;
  const signKey = "AWS4" + params.secretAccessKey;
  const kDate = import_js_sha256.sha256.hmac.arrayBuffer(signKey, params.dateNow);
  const kRegion = import_js_sha256.sha256.hmac.arrayBuffer(kDate, params.region);
  const kService = import_js_sha256.sha256.hmac.arrayBuffer(kRegion, params.service);
  const signingKey = import_js_sha256.sha256.hmac.arrayBuffer(kService, "aws4_request");
  const signature = import_js_sha256.sha256.hmac(signingKey, stringToSign);
  res.set("Authorization", "AWS4-HMAC-SHA256 Credential=" + params.accessKeyId + "/" + params.dateNow + "/" + params.region + "/" + params.service + "/aws4_request, SignedHeaders=" + signedHeaders + ", Signature=" + signature);
  return res;
}
var createS3HeadersFromS3Config = function(config, url, method2, contentType = null, payload = null) {
  const params = getS3Params(config, url, method2);
  const payloadParams = {
    contentType,
    contentHash: payload ? import_js_sha256.sha256.hex(payload) : null
  };
  return createS3Headers(params, payloadParams);
};
function addS3Headers(xhr, config, url, method2, contentType = null, payload = null) {
  if (config?.accessKeyId || config?.sessionToken) {
    const headers = createS3HeadersFromS3Config(config, url, method2, contentType, payload);
    headers.forEach((value, header) => {
      xhr.setRequestHeader(header, value);
    });
    if (contentType) {
      xhr.setRequestHeader("content-type", contentType);
    }
  }
}
function parseS3Url(url) {
  if (url.indexOf("s3://") != 0) {
    throw new Error("URL needs to start with s3://");
  }
  const slashPos = url.indexOf("/", 5);
  if (slashPos == -1) {
    throw new Error("URL needs to contain a '/' after the host");
  }
  const bucket = url.substring(5, slashPos);
  if (!bucket) {
    throw new Error("URL needs to contain a bucket name");
  }
  const path = url.substring(slashPos);
  if (!path) {
    throw new Error("URL needs to contain key");
  }
  return { bucket, path };
}
function isPathStyleAccess(config) {
  if (config?.endpoint?.startsWith("http")) {
    return true;
  }
  return false;
}
function getHTTPUrl(config, url) {
  const parsedUrl = parseS3Url(url);
  if (isPathStyleAccess(config)) {
    return `${config?.endpoint}/${parsedUrl.bucket}` + parsedUrl.path;
  }
  return "https://" + getHTTPHost(config, url, parsedUrl.bucket) + parsedUrl.path;
}

// src/bindings/runtime_browser.ts
var BROWSER_RUNTIME = {
  _files: /* @__PURE__ */ new Map(),
  _fileInfoCache: /* @__PURE__ */ new Map(),
  _udfFunctions: /* @__PURE__ */ new Map(),
  _globalFileInfo: null,
  getFileInfo(mod, fileId) {
    try {
      const cached = BROWSER_RUNTIME._fileInfoCache.get(fileId);
      const [s, d, n] = callSRet(
        mod,
        "duckdb_web_fs_get_file_info_by_id",
        ["number", "number"],
        [fileId, cached?.cacheEpoch || 0]
      );
      if (s !== 0 /* SUCCESS */) {
        return null;
      } else if (n === 0) {
        return cached;
      }
      const infoStr = readString(mod, d, n);
      dropResponseBuffers(mod);
      const info = JSON.parse(infoStr);
      if (info == null) {
        return null;
      }
      const file = { ...info, blob: null };
      BROWSER_RUNTIME._fileInfoCache.set(fileId, file);
      return file;
    } catch (e) {
      return null;
    }
  },
  getGlobalFileInfo(mod) {
    try {
      const [s, d, n] = callSRet(
        mod,
        "duckdb_web_get_global_file_info",
        ["number"],
        [BROWSER_RUNTIME._globalFileInfo?.cacheEpoch || 0]
      );
      if (s !== 0 /* SUCCESS */) {
        return null;
      } else if (n === 0) {
        return BROWSER_RUNTIME._globalFileInfo;
      }
      const infoStr = readString(mod, d, n);
      dropResponseBuffers(mod);
      const info = JSON.parse(infoStr);
      if (info == null) {
        return null;
      }
      BROWSER_RUNTIME._globalFileInfo = { ...info, blob: null };
      return BROWSER_RUNTIME._globalFileInfo;
    } catch (e) {
      return null;
    }
  },
  testPlatformFeature: (_mod, feature) => {
    switch (feature) {
      case 1:
        return typeof BigInt64Array !== "undefined";
      default:
        console.warn(`test for unknown feature: ${feature}`);
        return false;
    }
  },
  getDefaultDataProtocol(mod) {
    return 2 /* BROWSER_FILEREADER */;
  },
  openFile: (mod, fileId, flags) => {
    try {
      BROWSER_RUNTIME._fileInfoCache.delete(fileId);
      const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
      switch (file?.dataProtocol) {
        case 4 /* HTTP */:
        case 5 /* S3 */: {
          if (flags & 1 /* FILE_FLAGS_READ */ && flags & 2 /* FILE_FLAGS_WRITE */) {
            throw new Error(
              `Opening file ${file.fileName} failed: cannot open file with both read and write flags set`
            );
          } else if (flags & 32 /* FILE_FLAGS_APPEND */) {
            throw new Error(
              `Opening file ${file.fileName} failed: appending to HTTP/S3 files is not supported`
            );
          } else if (flags & 2 /* FILE_FLAGS_WRITE */) {
            const xhr = new XMLHttpRequest();
            if (file.dataProtocol == 5 /* S3 */) {
              xhr.open("HEAD", getHTTPUrl(file.s3Config, file.dataUrl), false);
              addS3Headers(xhr, file.s3Config, file.dataUrl, "HEAD");
            } else {
              xhr.open("HEAD", file.dataUrl, false);
            }
            xhr.send(null);
            if (xhr.status != 200 && xhr.status != 404) {
              throw new Error(
                `Opening file ${file.fileName} failed: Unexpected return status from server (${xhr.status})`
              );
            } else if (xhr.status == 404 && !(flags & 8 /* FILE_FLAGS_FILE_CREATE */ || flags & 16 /* FILE_FLAGS_FILE_CREATE_NEW */)) {
              throw new Error(
                `Opening file ${file.fileName} failed: Cannot write to non-existent file without FILE_FLAGS_FILE_CREATE or FILE_FLAGS_FILE_CREATE_NEW flag.`
              );
            }
            const data = mod._malloc(1);
            const src = new Uint8Array();
            mod.HEAPU8.set(src, data);
            const result = mod._malloc(2 * 8);
            mod.HEAPF64[(result >> 3) + 0] = 1;
            mod.HEAPF64[(result >> 3) + 1] = data;
            return result;
          } else if (flags != 1 /* FILE_FLAGS_READ */) {
            throw new Error(`Opening file ${file.fileName} failed: unsupported file flags: ${flags}`);
          }
          let contentLength = null;
          let error = null;
          try {
            const xhr = new XMLHttpRequest();
            if (file.dataProtocol == 5 /* S3 */) {
              xhr.open("HEAD", getHTTPUrl(file.s3Config, file.dataUrl), false);
              addS3Headers(xhr, file.s3Config, file.dataUrl, "HEAD");
            } else {
              xhr.open("HEAD", file.dataUrl, false);
            }
            xhr.setRequestHeader("Range", `bytes=0-`);
            xhr.send(null);
            contentLength = xhr.getResponseHeader("Content-Length");
            if (contentLength !== null && xhr.status == 206) {
              const result = mod._malloc(2 * 8);
              mod.HEAPF64[(result >> 3) + 0] = +contentLength;
              mod.HEAPF64[(result >> 3) + 1] = 0;
              return result;
            }
          } catch (e) {
            error = e;
            console.warn(`HEAD request with range header failed: ${e}`);
          }
          if (file.allowFullHttpReads) {
            if (contentLength !== null && +contentLength > 1) {
              const xhr2 = new XMLHttpRequest();
              if (file.dataProtocol == 5 /* S3 */) {
                xhr2.open("GET", getHTTPUrl(file.s3Config, file.dataUrl), false);
                addS3Headers(xhr2, file.s3Config, file.dataUrl, "GET");
              } else {
                xhr2.open("GET", file.dataUrl, false);
              }
              xhr2.setRequestHeader("Range", `bytes=0-0`);
              xhr2.send(null);
              const contentLength2 = xhr2.getResponseHeader("Content-Length");
              if (xhr2.status == 206 && contentLength2 !== null && +contentLength2 == 1) {
                const result = mod._malloc(2 * 8);
                mod.HEAPF64[(result >> 3) + 0] = +contentLength;
                mod.HEAPF64[(result >> 3) + 1] = 0;
                return result;
              }
              if (xhr2.status == 200 && contentLength2 !== null && +contentLength2 == +contentLength) {
                console.warn(`fall back to full HTTP read for: ${file.dataUrl}`);
                const data = mod._malloc(xhr2.response.byteLength);
                const src = new Uint8Array(xhr2.response, 0, xhr2.response.byteLength);
                mod.HEAPU8.set(src, data);
                const result = mod._malloc(2 * 8);
                mod.HEAPF64[(result >> 3) + 0] = xhr2.response.byteLength;
                mod.HEAPF64[(result >> 3) + 1] = data;
                return result;
              }
            }
            console.warn(`falling back to full HTTP read for: ${file.dataUrl}`);
            const xhr = new XMLHttpRequest();
            if (file.dataProtocol == 5 /* S3 */) {
              xhr.open("GET", getHTTPUrl(file.s3Config, file.dataUrl), false);
              addS3Headers(xhr, file.s3Config, file.dataUrl, "GET");
            } else {
              xhr.open("GET", file.dataUrl, false);
            }
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            if (xhr.status == 200) {
              const data = mod._malloc(xhr.response.byteLength);
              const src = new Uint8Array(xhr.response, 0, xhr.response.byteLength);
              mod.HEAPU8.set(src, data);
              const result = mod._malloc(2 * 8);
              mod.HEAPF64[(result >> 3) + 0] = xhr.response.byteLength;
              mod.HEAPF64[(result >> 3) + 1] = data;
              return result;
            }
          }
          if (error != null) {
            throw new Error(`Reading file ${file.fileName} failed with error: ${error}`);
          }
          return 0;
        }
        case 2 /* BROWSER_FILEREADER */: {
          const handle = BROWSER_RUNTIME._files?.get(file.fileName);
          if (handle) {
            const result2 = mod._malloc(2 * 8);
            mod.HEAPF64[(result2 >> 3) + 0] = handle.size;
            mod.HEAPF64[(result2 >> 3) + 1] = 0;
            return result2;
          }
          console.warn(`Buffering missing file: ${file.fileName}`);
          const result = mod._malloc(2 * 8);
          const buffer = mod._malloc(1);
          mod.HEAPF64[(result >> 3) + 0] = 1;
          mod.HEAPF64[(result >> 3) + 1] = buffer;
          return result;
        }
      }
    } catch (e) {
      console.error(e.toString());
      failWith(mod, e.toString());
    }
    return 0;
  },
  glob: (mod, pathPtr, pathLen) => {
    try {
      const path = readString(mod, pathPtr, pathLen);
      if (path.startsWith("http") || path.startsWith("s3://")) {
        const xhr = new XMLHttpRequest();
        if (path.startsWith("s3://")) {
          const globalInfo = BROWSER_RUNTIME.getGlobalFileInfo(mod);
          xhr.open("HEAD", getHTTPUrl(globalInfo?.s3Config, path), false);
          addS3Headers(xhr, globalInfo?.s3Config, path, "HEAD");
        } else {
          xhr.open("HEAD", path, false);
        }
        xhr.send(null);
        if (xhr.status != 200 && xhr.status !== 206) {
          if (!BROWSER_RUNTIME.getGlobalFileInfo(mod)?.allowFullHttpReads) {
            failWith(mod, `HEAD request failed: ${path}, with full http reads are disabled`);
            return;
          }
          const xhr2 = new XMLHttpRequest();
          if (path.startsWith("s3://")) {
            const globalInfo = BROWSER_RUNTIME.getGlobalFileInfo(mod);
            xhr2.open("GET", getHTTPUrl(globalInfo?.s3Config, path), false);
            addS3Headers(xhr2, globalInfo?.s3Config, path, "HEAD");
          } else {
            xhr2.open("GET", path, false);
          }
          xhr2.setRequestHeader("Range", `bytes=0-0`);
          xhr2.send(null);
          if (xhr2.status != 200 && xhr2.status !== 206) {
            failWith(mod, `HEAD and GET requests failed: ${path}`);
            return;
          }
          const contentLength = xhr2.getResponseHeader("Content-Length");
          if (contentLength && +contentLength > 1) {
            console.warn(`Range request for ${path} did not return a partial response: ${xhr2.status} "${xhr2.statusText}"`);
          }
        }
        mod.ccall("duckdb_web_fs_glob_add_path", null, ["string"], [path]);
      }
    } catch (e) {
      failWith(mod, e.toString());
      return 0;
    }
  },
  checkFile: (mod, pathPtr, pathLen) => {
    try {
      const path = readString(mod, pathPtr, pathLen);
      if (path.startsWith("http") || path.startsWith("s3://")) {
        const xhr = new XMLHttpRequest();
        if (path.startsWith("s3://")) {
          const globalInfo = BROWSER_RUNTIME.getGlobalFileInfo(mod);
          xhr.open("HEAD", getHTTPUrl(globalInfo?.s3Config, path), false);
          addS3Headers(xhr, globalInfo?.s3Config, path, "HEAD");
        } else {
          xhr.open("HEAD", path, false);
        }
        xhr.send(null);
        return xhr.status == 206 || xhr.status == 200;
      }
    } catch (e) {
      return false;
    }
    return false;
  },
  syncFile: (_mod, _fileId) => {
  },
  closeFile: (mod, fileId) => {
    const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
    BROWSER_RUNTIME._fileInfoCache.delete(fileId);
    switch (file?.dataProtocol) {
      case 0 /* BUFFER */:
      case 4 /* HTTP */:
      case 5 /* S3 */:
        break;
      case 1 /* NODE_FS */:
      case 2 /* BROWSER_FILEREADER */:
        return;
      case 3 /* BROWSER_FSACCESS */: {
        const handle = BROWSER_RUNTIME._files?.get(file.fileName);
        if (!handle) {
          throw new Error(`No OPFS access handle registered with name: ${file.fileName}`);
        }
        return handle.flush();
      }
    }
  },
  truncateFile: (mod, fileId, newSize) => {
    const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
    switch (file?.dataProtocol) {
      case 4 /* HTTP */:
        failWith(mod, `Cannot truncate a http file`);
        return;
      case 5 /* S3 */:
        failWith(mod, `Cannot truncate an s3 file`);
        return;
      case 0 /* BUFFER */:
      case 1 /* NODE_FS */:
      case 2 /* BROWSER_FILEREADER */:
        failWith(mod, `truncateFile not implemented`);
        return;
      case 3 /* BROWSER_FSACCESS */: {
        const handle = BROWSER_RUNTIME._files?.get(file.fileName);
        if (!handle) {
          throw new Error(`No OPFS access handle registered with name: ${file.fileName}`);
        }
        return handle.truncate(newSize);
      }
    }
    return 0;
  },
  readFile(mod, fileId, buf, bytes, location) {
    if (bytes == 0) {
      return 0;
    }
    try {
      const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
      switch (file?.dataProtocol) {
        case 4 /* HTTP */:
        case 5 /* S3 */: {
          if (!file.dataUrl) {
            throw new Error(`Missing data URL for file ${fileId}`);
          }
          try {
            const xhr = new XMLHttpRequest();
            if (file.dataProtocol == 5 /* S3 */) {
              xhr.open("GET", getHTTPUrl(file?.s3Config, file.dataUrl), false);
              addS3Headers(xhr, file?.s3Config, file.dataUrl, "GET");
            } else {
              xhr.open("GET", file.dataUrl, false);
            }
            xhr.responseType = "arraybuffer";
            xhr.setRequestHeader("Range", `bytes=${location}-${location + bytes - 1}`);
            xhr.send(null);
            if (xhr.status == 206 || xhr.status == 200 && bytes == xhr.response.byteLength && location == 0) {
              const src = new Uint8Array(xhr.response, 0, Math.min(xhr.response.byteLength, bytes));
              mod.HEAPU8.set(src, buf);
              return src.byteLength;
            } else if (xhr.status == 200) {
              console.warn(`Range request for ${file.dataUrl} did not return a partial response: ${xhr.status} "${xhr.statusText}"`);
              const src = new Uint8Array(xhr.response, location, Math.min(xhr.response.byteLength - location, bytes));
              mod.HEAPU8.set(src, buf);
              return src.byteLength;
            } else {
              throw new Error(
                `Range request for ${file.dataUrl} did returned non-success status: ${xhr.status} "${xhr.statusText}"`
              );
            }
          } catch (e) {
            throw new Error(`Range request for ${file.dataUrl} failed with error: ${e}"`);
          }
        }
        case 2 /* BROWSER_FILEREADER */: {
          const handle = BROWSER_RUNTIME._files?.get(file.fileName);
          if (!handle) {
            throw new Error(`No HTML5 file registered with name: ${file.fileName}`);
          }
          const sliced = handle.slice(location, location + bytes);
          const data = new Uint8Array(new FileReaderSync().readAsArrayBuffer(sliced));
          mod.HEAPU8.set(data, buf);
          return data.byteLength;
        }
        case 3 /* BROWSER_FSACCESS */: {
          const handle = BROWSER_RUNTIME._files?.get(file.fileName);
          if (!handle) {
            throw new Error(`No OPFS access handle registered with name: ${file.fileName}`);
          }
          const out = mod.HEAPU8.subarray(buf, buf + bytes);
          return handle.read(out, { at: location });
        }
      }
      return 0;
    } catch (e) {
      failWith(mod, e.toString());
      return 0;
    }
  },
  writeFile: (mod, fileId, buf, bytes, location) => {
    const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
    switch (file?.dataProtocol) {
      case 4 /* HTTP */:
        failWith(mod, "Cannot write to HTTP file");
        return 0;
      case 5 /* S3 */: {
        const buffer = mod.HEAPU8.subarray(buf, buf + bytes);
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", getHTTPUrl(file?.s3Config, file.dataUrl), false);
        addS3Headers(xhr, file?.s3Config, file.dataUrl, "PUT", "", buffer);
        xhr.send(buffer);
        if (xhr.status !== 200) {
          failWith(mod, "Failed writing file: HTTP " + xhr.status);
          return 0;
        }
        return bytes;
      }
      case 2 /* BROWSER_FILEREADER */:
        failWith(mod, "cannot write using the html5 file reader api");
        return 0;
      case 3 /* BROWSER_FSACCESS */: {
        const handle = BROWSER_RUNTIME._files?.get(file.fileName);
        if (!handle) {
          throw new Error(`No OPFS access handle registered with name: ${file.fileName}`);
        }
        const input = mod.HEAPU8.subarray(buf, buf + bytes);
        return handle.write(input, { at: location });
      }
    }
    return 0;
  },
  getLastFileModificationTime: (mod, fileId) => {
    const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
    switch (file?.dataProtocol) {
      case 2 /* BROWSER_FILEREADER */: {
        const handle = BROWSER_RUNTIME._files?.get(file.fileName);
        if (!handle) {
          throw Error(`No handle available for file: ${file.fileName}`);
        }
        return 0;
      }
      case 4 /* HTTP */:
      case 5 /* S3 */:
        return new Date().getTime();
    }
    return 0;
  },
  checkDirectory: (mod, pathPtr, pathLen) => {
    const path = readString(mod, pathPtr, pathLen);
    console.log(`checkDirectory: ${path}`);
    return false;
  },
  createDirectory: (mod, pathPtr, pathLen) => {
    const path = readString(mod, pathPtr, pathLen);
    console.log(`createDirectory: ${path}`);
  },
  removeDirectory: (mod, pathPtr, pathLen) => {
    const path = readString(mod, pathPtr, pathLen);
    console.log(`removeDirectory: ${path}`);
  },
  listDirectoryEntries: (mod, pathPtr, pathLen) => {
    const path = readString(mod, pathPtr, pathLen);
    console.log(`listDirectoryEntries: ${path}`);
    return false;
  },
  moveFile: (mod, fromPtr, fromLen, toPtr, toLen) => {
    const from = readString(mod, fromPtr, fromLen);
    const to = readString(mod, toPtr, toLen);
    const handle = BROWSER_RUNTIME._files?.get(from);
    if (handle !== void 0) {
      BROWSER_RUNTIME._files.delete(handle);
      BROWSER_RUNTIME._files.set(to, handle);
    }
    for (const [key, value] of BROWSER_RUNTIME._fileInfoCache?.entries() || []) {
      if (value.dataUrl == from) {
        BROWSER_RUNTIME._fileInfoCache.delete(key);
        break;
      }
    }
    return true;
  },
  removeFile: (_mod, _pathPtr, _pathLen) => {
  },
  callScalarUDF: (mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize) => {
    callScalarUDF(BROWSER_RUNTIME, mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize);
  }
};

// src/targets/duckdb-browser-eh.worker.ts
var WebWorker = class extends AsyncDuckDBDispatcher {
  postMessage(response, transfer) {
    globalThis.postMessage(response, transfer);
  }
  async instantiate(mainModuleURL, pthreadWorkerURL, progress) {
    const bindings = new DuckDB2(this, BROWSER_RUNTIME, mainModuleURL, pthreadWorkerURL);
    return await bindings.instantiate(progress);
  }
};
function registerWorker() {
  const api = new WebWorker();
  globalThis.onmessage = async (event) => {
    await api.onMessage(event.data);
  };
}
registerWorker();
export {
  registerWorker
};
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
//# sourceMappingURL=duckdb-browser-eh.worker.js.map
