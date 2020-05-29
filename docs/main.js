!(function (n) {
  var r = {};
  function t(e) {
    if (r[e]) return r[e].exports;
    var o = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = n),
    (t.c = r),
    (t.d = function (n, r, e) {
      t.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: e });
    }),
    (t.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (t.t = function (n, r) {
      if ((1 & r && (n = t(n)), 8 & r)) return n;
      if (4 & r && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (t.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & r && "string" != typeof n)
      )
        for (var o in n)
          t.d(
            e,
            o,
            function (r) {
              return n[r];
            }.bind(null, o)
          );
      return e;
    }),
    (t.n = function (n) {
      var r =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(r, "a", r), r;
    }),
    (t.o = function (n, r) {
      return Object.prototype.hasOwnProperty.call(n, r);
    }),
    (t.p = ""),
    t((t.s = 4));
})([
  function (n, r, t) {
    var e = t(1),
      o = t(2);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[n.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    e(o, i);
    n.exports = o.locals || {};
  },
  function (n, r, t) {
    "use strict";
    var e,
      o = function () {
        return (
          void 0 === e &&
            (e = Boolean(window && document && document.all && !window.atob)),
          e
        );
      },
      i = (function () {
        var n = {};
        return function (r) {
          if (void 0 === n[r]) {
            var t = document.querySelector(r);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            n[r] = t;
          }
          return n[r];
        };
      })(),
      s = [];
    function u(n) {
      for (var r = -1, t = 0; t < s.length; t++)
        if (s[t].identifier === n) {
          r = t;
          break;
        }
      return r;
    }
    function c(n, r) {
      for (var t = {}, e = [], o = 0; o < n.length; o++) {
        var i = n[o],
          c = r.base ? i[0] + r.base : i[0],
          a = t[c] || 0,
          f = "".concat(c, " ").concat(a);
        t[c] = a + 1;
        var l = u(f),
          p = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== l
          ? (s[l].references++, s[l].updater(p))
          : s.push({ identifier: f, updater: y(p, r), references: 1 }),
          e.push(f);
      }
      return e;
    }
    function a(n) {
      var r = document.createElement("style"),
        e = n.attributes || {};
      if (void 0 === e.nonce) {
        var o = t.nc;
        o && (e.nonce = o);
      }
      if (
        (Object.keys(e).forEach(function (n) {
          r.setAttribute(n, e[n]);
        }),
        "function" == typeof n.insert)
      )
        n.insert(r);
      else {
        var s = i(n.insert || "head");
        if (!s)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        s.appendChild(r);
      }
      return r;
    }
    var f,
      l =
        ((f = []),
        function (n, r) {
          return (f[n] = r), f.filter(Boolean).join("\n");
        });
    function p(n, r, t, e) {
      var o = t
        ? ""
        : e.media
        ? "@media ".concat(e.media, " {").concat(e.css, "}")
        : e.css;
      if (n.styleSheet) n.styleSheet.cssText = l(r, o);
      else {
        var i = document.createTextNode(o),
          s = n.childNodes;
        s[r] && n.removeChild(s[r]),
          s.length ? n.insertBefore(i, s[r]) : n.appendChild(i);
      }
    }
    function d(n, r, t) {
      var e = t.css,
        o = t.media,
        i = t.sourceMap;
      if (
        (o ? n.setAttribute("media", o) : n.removeAttribute("media"),
        i &&
          btoa &&
          (e += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        n.styleSheet)
      )
        n.styleSheet.cssText = e;
      else {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
        n.appendChild(document.createTextNode(e));
      }
    }
    var h = null,
      b = 0;
    function y(n, r) {
      var t, e, o;
      if (r.singleton) {
        var i = b++;
        (t = h || (h = a(r))),
          (e = p.bind(null, t, i, !1)),
          (o = p.bind(null, t, i, !0));
      } else
        (t = a(r)),
          (e = d.bind(null, t, r)),
          (o = function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(t);
          });
      return (
        e(n),
        function (r) {
          if (r) {
            if (
              r.css === n.css &&
              r.media === n.media &&
              r.sourceMap === n.sourceMap
            )
              return;
            e((n = r));
          } else o();
        }
      );
    }
    n.exports = function (n, r) {
      (r = r || {}).singleton ||
        "boolean" == typeof r.singleton ||
        (r.singleton = o());
      var t = c((n = n || []), r);
      return function (n) {
        if (
          ((n = n || []),
          "[object Array]" === Object.prototype.toString.call(n))
        ) {
          for (var e = 0; e < t.length; e++) {
            var o = u(t[e]);
            s[o].references--;
          }
          for (var i = c(n, r), a = 0; a < t.length; a++) {
            var f = u(t[a]);
            0 === s[f].references && (s[f].updater(), s.splice(f, 1));
          }
          t = i;
        }
      };
    };
  },
  function (n, r, t) {
    (r = t(3)(!1)).push([
      n.i,
      'html {\n  box-sizing: border-box;\n  background: #ffc600;\n  font-family: "helvetica neue";\n  font-size: 20px;\n  font-weight: 200;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\ninput {\n  width: 100%;\n  padding: 20px;\n}\n\n.search-form {\n  max-width: 400px;\n  margin: 50px auto;\n}\n\ninput.search {\n  margin: 0;\n  text-align: center;\n  outline: 0;\n  border: 10px solid #f7f7f7;\n  width: 120%;\n  left: -10%;\n  position: relative;\n  top: 10px;\n  z-index: 2;\n  border-radius: 5px;\n  font-size: 40px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);\n}\n\n.suggestions {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  /*perspective: 20px;*/\n}\n\n.suggestions li {\n  background: white;\n  list-style: none;\n  border-bottom: 1px solid #d8d8d8;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);\n  margin: 0;\n  padding: 20px;\n  transition: background 0.2s;\n  display: flex;\n  justify-content: space-between;\n  text-transform: capitalize;\n}\n\n.suggestions li:nth-child(even) {\n  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);\n  background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);\n}\n\n.suggestions li:nth-child(odd) {\n  transform: perspective(100px) rotateX(-3deg) translateY(3px);\n  background: linear-gradient(to top, #ffffff 0%, #efefef 100%);\n}\n\nspan.population {\n  font-size: 15px;\n}\n\n.hl {\n  background: #ffc600;\n}\n',
      "",
    ]),
      (n.exports = r);
  },
  function (n, r, t) {
    "use strict";
    n.exports = function (n) {
      var r = [];
      return (
        (r.toString = function () {
          return this.map(function (r) {
            var t = (function (n, r) {
              var t = n[1] || "",
                e = n[3];
              if (!e) return t;
              if (r && "function" == typeof btoa) {
                var o =
                    ((s = e),
                    (u = btoa(unescape(encodeURIComponent(JSON.stringify(s))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      u
                    )),
                    "/*# ".concat(c, " */")),
                  i = e.sources.map(function (n) {
                    return "/*# sourceURL="
                      .concat(e.sourceRoot || "")
                      .concat(n, " */");
                  });
                return [t].concat(i).concat([o]).join("\n");
              }
              var s, u, c;
              return [t].join("\n");
            })(r, n);
            return r[2] ? "@media ".concat(r[2], " {").concat(t, "}") : t;
          }).join("");
        }),
        (r.i = function (n, t, e) {
          "string" == typeof n && (n = [[null, n, ""]]);
          var o = {};
          if (e)
            for (var i = 0; i < this.length; i++) {
              var s = this[i][0];
              null != s && (o[s] = !0);
            }
          for (var u = 0; u < n.length; u++) {
            var c = [].concat(n[u]);
            (e && o[c[0]]) ||
              (t &&
                (c[2]
                  ? (c[2] = "".concat(t, " and ").concat(c[2]))
                  : (c[2] = t)),
              r.push(c));
          }
        }),
        r
      );
    };
  },
  function (n, r, t) {
    "use strict";
    t.r(r);
    t(0);
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var e = function (
      n,
      r
    ) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t]);
        })(n, r);
    };
    function o(n, r) {
      function t() {
        this.constructor = n;
      }
      e(n, r),
        (n.prototype =
          null === r
            ? Object.create(r)
            : ((t.prototype = r.prototype), new t()));
    }
    function i(n) {
      return "function" == typeof n;
    }
    var s = !1,
      u = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(n) {
          n && new Error().stack;
          s = n;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
    function c(n) {
      setTimeout(function () {
        throw n;
      }, 0);
    }
    var a = {
        closed: !0,
        next: function (n) {},
        error: function (n) {
          if (u.useDeprecatedSynchronousErrorHandling) throw n;
          c(n);
        },
        complete: function () {},
      },
      f = (function () {
        return (
          Array.isArray ||
          function (n) {
            return n && "number" == typeof n.length;
          }
        );
      })();
    function l(n) {
      return null !== n && "object" == typeof n;
    }
    var p = (function () {
        function n(n) {
          return (
            Error.call(this),
            (this.message = n
              ? n.length +
                " errors occurred during unsubscription:\n" +
                n
                  .map(function (n, r) {
                    return r + 1 + ") " + n.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = n),
            this
          );
        }
        return (n.prototype = Object.create(Error.prototype)), n;
      })(),
      d = (function () {
        function n(n) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            n && (this._unsubscribe = n);
        }
        return (
          (n.prototype.unsubscribe = function () {
            var r;
            if (!this.closed) {
              var t = this._parentOrParents,
                e = this._unsubscribe,
                o = this._subscriptions;
              if (
                ((this.closed = !0),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                t instanceof n)
              )
                t.remove(this);
              else if (null !== t)
                for (var s = 0; s < t.length; ++s) {
                  t[s].remove(this);
                }
              if (i(e))
                try {
                  e.call(this);
                } catch (n) {
                  r = n instanceof p ? h(n.errors) : [n];
                }
              if (f(o)) {
                s = -1;
                for (var u = o.length; ++s < u; ) {
                  var c = o[s];
                  if (l(c))
                    try {
                      c.unsubscribe();
                    } catch (n) {
                      (r = r || []),
                        n instanceof p
                          ? (r = r.concat(h(n.errors)))
                          : r.push(n);
                    }
                }
              }
              if (r) throw new p(r);
            }
          }),
          (n.prototype.add = function (r) {
            var t = r;
            if (!r) return n.EMPTY;
            switch (typeof r) {
              case "function":
                t = new n(r);
              case "object":
                if (
                  t === this ||
                  t.closed ||
                  "function" != typeof t.unsubscribe
                )
                  return t;
                if (this.closed) return t.unsubscribe(), t;
                if (!(t instanceof n)) {
                  var e = t;
                  (t = new n())._subscriptions = [e];
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + r + " added to Subscription."
                );
            }
            var o = t._parentOrParents;
            if (null === o) t._parentOrParents = this;
            else if (o instanceof n) {
              if (o === this) return t;
              t._parentOrParents = [o, this];
            } else {
              if (-1 !== o.indexOf(this)) return t;
              o.push(this);
            }
            var i = this._subscriptions;
            return null === i ? (this._subscriptions = [t]) : i.push(t), t;
          }),
          (n.prototype.remove = function (n) {
            var r = this._subscriptions;
            if (r) {
              var t = r.indexOf(n);
              -1 !== t && r.splice(t, 1);
            }
          }),
          (n.EMPTY = (function (n) {
            return (n.closed = !0), n;
          })(new n())),
          n
        );
      })();
    function h(n) {
      return n.reduce(function (n, r) {
        return n.concat(r instanceof p ? r.errors : r);
      }, []);
    }
    var b = (function () {
        return "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      })(),
      y = (function (n) {
        function r(t, e, o) {
          var i = n.call(this) || this;
          switch (
            ((i.syncErrorValue = null),
            (i.syncErrorThrown = !1),
            (i.syncErrorThrowable = !1),
            (i.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              i.destination = a;
              break;
            case 1:
              if (!t) {
                i.destination = a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof r
                  ? ((i.syncErrorThrowable = t.syncErrorThrowable),
                    (i.destination = t),
                    t.add(i))
                  : ((i.syncErrorThrowable = !0),
                    (i.destination = new v(i, t)));
                break;
              }
            default:
              (i.syncErrorThrowable = !0), (i.destination = new v(i, t, e, o));
          }
          return i;
        }
        return (
          o(r, n),
          (r.prototype[b] = function () {
            return this;
          }),
          (r.create = function (n, t, e) {
            var o = new r(n, t, e);
            return (o.syncErrorThrowable = !1), o;
          }),
          (r.prototype.next = function (n) {
            this.isStopped || this._next(n);
          }),
          (r.prototype.error = function (n) {
            this.isStopped || ((this.isStopped = !0), this._error(n));
          }),
          (r.prototype.complete = function () {
            this.isStopped || ((this.isStopped = !0), this._complete());
          }),
          (r.prototype.unsubscribe = function () {
            this.closed ||
              ((this.isStopped = !0), n.prototype.unsubscribe.call(this));
          }),
          (r.prototype._next = function (n) {
            this.destination.next(n);
          }),
          (r.prototype._error = function (n) {
            this.destination.error(n), this.unsubscribe();
          }),
          (r.prototype._complete = function () {
            this.destination.complete(), this.unsubscribe();
          }),
          (r.prototype._unsubscribeAndRecycle = function () {
            var n = this._parentOrParents;
            return (
              (this._parentOrParents = null),
              this.unsubscribe(),
              (this.closed = !1),
              (this.isStopped = !1),
              (this._parentOrParents = n),
              this
            );
          }),
          r
        );
      })(d),
      v = (function (n) {
        function r(r, t, e, o) {
          var s,
            u = n.call(this) || this;
          u._parentSubscriber = r;
          var c = u;
          return (
            i(t)
              ? (s = t)
              : t &&
                ((s = t.next),
                (e = t.error),
                (o = t.complete),
                t !== a &&
                  (i((c = Object.create(t)).unsubscribe) &&
                    u.add(c.unsubscribe.bind(c)),
                  (c.unsubscribe = u.unsubscribe.bind(u)))),
            (u._context = c),
            (u._next = s),
            (u._error = e),
            (u._complete = o),
            u
          );
        }
        return (
          o(r, n),
          (r.prototype.next = function (n) {
            if (!this.isStopped && this._next) {
              var r = this._parentSubscriber;
              u.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable
                ? this.__tryOrSetError(r, this._next, n) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, n);
            }
          }),
          (r.prototype.error = function (n) {
            if (!this.isStopped) {
              var r = this._parentSubscriber,
                t = u.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                t && r.syncErrorThrowable
                  ? (this.__tryOrSetError(r, this._error, n),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, n), this.unsubscribe());
              else if (r.syncErrorThrowable)
                t ? ((r.syncErrorValue = n), (r.syncErrorThrown = !0)) : c(n),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), t)) throw n;
                c(n);
              }
            }
          }),
          (r.prototype.complete = function () {
            var n = this;
            if (!this.isStopped) {
              var r = this._parentSubscriber;
              if (this._complete) {
                var t = function () {
                  return n._complete.call(n._context);
                };
                u.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable
                  ? (this.__tryOrSetError(r, t), this.unsubscribe())
                  : (this.__tryOrUnsub(t), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (r.prototype.__tryOrUnsub = function (n, r) {
            try {
              n.call(this._context, r);
            } catch (n) {
              if ((this.unsubscribe(), u.useDeprecatedSynchronousErrorHandling))
                throw n;
              c(n);
            }
          }),
          (r.prototype.__tryOrSetError = function (n, r, t) {
            if (!u.useDeprecatedSynchronousErrorHandling)
              throw new Error("bad call");
            try {
              r.call(this._context, t);
            } catch (r) {
              return u.useDeprecatedSynchronousErrorHandling
                ? ((n.syncErrorValue = r), (n.syncErrorThrown = !0), !0)
                : (c(r), !0);
            }
            return !1;
          }),
          (r.prototype._unsubscribe = function () {
            var n = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              n.unsubscribe();
          }),
          r
        );
      })(y);
    var m = (function () {
      return (
        ("function" == typeof Symbol && Symbol.observable) || "@@observable"
      );
    })();
    function g(n) {
      return n;
    }
    function w(n) {
      return 0 === n.length
        ? g
        : 1 === n.length
        ? n[0]
        : function (r) {
            return n.reduce(function (n, r) {
              return r(n);
            }, r);
          };
    }
    var _ = (function () {
      function n(n) {
        (this._isScalar = !1), n && (this._subscribe = n);
      }
      return (
        (n.prototype.lift = function (r) {
          var t = new n();
          return (t.source = this), (t.operator = r), t;
        }),
        (n.prototype.subscribe = function (n, r, t) {
          var e = this.operator,
            o = (function (n, r, t) {
              if (n) {
                if (n instanceof y) return n;
                if (n[b]) return n[b]();
              }
              return n || r || t ? new y(n, r, t) : new y(a);
            })(n, r, t);
          if (
            (e
              ? o.add(e.call(o, this.source))
              : o.add(
                  this.source ||
                    (u.useDeprecatedSynchronousErrorHandling &&
                      !o.syncErrorThrowable)
                    ? this._subscribe(o)
                    : this._trySubscribe(o)
                ),
            u.useDeprecatedSynchronousErrorHandling &&
              o.syncErrorThrowable &&
              ((o.syncErrorThrowable = !1), o.syncErrorThrown))
          )
            throw o.syncErrorValue;
          return o;
        }),
        (n.prototype._trySubscribe = function (n) {
          try {
            return this._subscribe(n);
          } catch (r) {
            u.useDeprecatedSynchronousErrorHandling &&
              ((n.syncErrorThrown = !0), (n.syncErrorValue = r)),
              !(function (n) {
                for (; n; ) {
                  var r = n,
                    t = r.closed,
                    e = r.destination,
                    o = r.isStopped;
                  if (t || o) return !1;
                  n = e && e instanceof y ? e : null;
                }
                return !0;
              })(n)
                ? console.warn(r)
                : n.error(r);
          }
        }),
        (n.prototype.forEach = function (n, r) {
          var t = this;
          return new (r = x(r))(function (r, e) {
            var o;
            o = t.subscribe(
              function (r) {
                try {
                  n(r);
                } catch (n) {
                  e(n), o && o.unsubscribe();
                }
              },
              e,
              r
            );
          });
        }),
        (n.prototype._subscribe = function (n) {
          var r = this.source;
          return r && r.subscribe(n);
        }),
        (n.prototype[m] = function () {
          return this;
        }),
        (n.prototype.pipe = function () {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          return 0 === n.length ? this : w(n)(this);
        }),
        (n.prototype.toPromise = function (n) {
          var r = this;
          return new (n = x(n))(function (n, t) {
            var e;
            r.subscribe(
              function (n) {
                return (e = n);
              },
              function (n) {
                return t(n);
              },
              function () {
                return n(e);
              }
            );
          });
        }),
        (n.create = function (r) {
          return new n(r);
        }),
        n
      );
    })();
    function x(n) {
      if ((n || (n = u.Promise || Promise), !n))
        throw new Error("no Promise impl found");
      return n;
    }
    function S() {
      return "function" == typeof Symbol && Symbol.iterator
        ? Symbol.iterator
        : "@@iterator";
    }
    var E = S(),
      O = function (n) {
        return n && "number" == typeof n.length && "function" != typeof n;
      };
    function T(n) {
      return (
        !!n && "function" != typeof n.subscribe && "function" == typeof n.then
      );
    }
    var j,
      P,
      M = function (n) {
        if (n && "function" == typeof n[m])
          return (
            (o = n),
            function (n) {
              var r = o[m]();
              if ("function" != typeof r.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return r.subscribe(n);
            }
          );
        if (O(n))
          return (
            (e = n),
            function (n) {
              for (var r = 0, t = e.length; r < t && !n.closed; r++)
                n.next(e[r]);
              n.complete();
            }
          );
        if (T(n))
          return (
            (t = n),
            function (n) {
              return (
                t
                  .then(
                    function (r) {
                      n.closed || (n.next(r), n.complete());
                    },
                    function (r) {
                      return n.error(r);
                    }
                  )
                  .then(null, c),
                n
              );
            }
          );
        if (n && "function" == typeof n[E])
          return (
            (r = n),
            function (n) {
              for (var t = r[E](); ; ) {
                var e = t.next();
                if (e.done) {
                  n.complete();
                  break;
                }
                if ((n.next(e.value), n.closed)) break;
              }
              return (
                "function" == typeof t.return &&
                  n.add(function () {
                    t.return && t.return();
                  }),
                n
              );
            }
          );
        var r,
          t,
          e,
          o,
          i = l(n) ? "an invalid object" : "'" + n + "'";
        throw new TypeError(
          "You provided " +
            i +
            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
        );
      };
    function k(n, r) {
      if (null != n) {
        if (
          (function (n) {
            return n && "function" == typeof n[m];
          })(n)
        )
          return (function (n, r) {
            return new _(function (t) {
              var e = new d();
              return (
                e.add(
                  r.schedule(function () {
                    var o = n[m]();
                    e.add(
                      o.subscribe({
                        next: function (n) {
                          e.add(
                            r.schedule(function () {
                              return t.next(n);
                            })
                          );
                        },
                        error: function (n) {
                          e.add(
                            r.schedule(function () {
                              return t.error(n);
                            })
                          );
                        },
                        complete: function () {
                          e.add(
                            r.schedule(function () {
                              return t.complete();
                            })
                          );
                        },
                      })
                    );
                  })
                ),
                e
              );
            });
          })(n, r);
        if (T(n))
          return (function (n, r) {
            return new _(function (t) {
              var e = new d();
              return (
                e.add(
                  r.schedule(function () {
                    return n.then(
                      function (n) {
                        e.add(
                          r.schedule(function () {
                            t.next(n),
                              e.add(
                                r.schedule(function () {
                                  return t.complete();
                                })
                              );
                          })
                        );
                      },
                      function (n) {
                        e.add(
                          r.schedule(function () {
                            return t.error(n);
                          })
                        );
                      }
                    );
                  })
                ),
                e
              );
            });
          })(n, r);
        if (O(n))
          return (function (n, r) {
            return new _(function (t) {
              var e = new d(),
                o = 0;
              return (
                e.add(
                  r.schedule(function () {
                    o !== n.length
                      ? (t.next(n[o++]), t.closed || e.add(this.schedule()))
                      : t.complete();
                  })
                ),
                e
              );
            });
          })(n, r);
        if (
          (function (n) {
            return n && "function" == typeof n[E];
          })(n) ||
          "string" == typeof n
        )
          return (function (n, r) {
            if (!n) throw new Error("Iterable cannot be null");
            return new _(function (t) {
              var e,
                o = new d();
              return (
                o.add(function () {
                  e && "function" == typeof e.return && e.return();
                }),
                o.add(
                  r.schedule(function () {
                    (e = n[E]()),
                      o.add(
                        r.schedule(function () {
                          if (!t.closed) {
                            var n, r;
                            try {
                              var o = e.next();
                              (n = o.value), (r = o.done);
                            } catch (n) {
                              return void t.error(n);
                            }
                            r ? t.complete() : (t.next(n), this.schedule());
                          }
                        })
                      );
                  })
                ),
                o
              );
            });
          })(n, r);
      }
      throw new TypeError(
        ((null !== n && typeof n) || n) + " is not observable"
      );
    }
    ((j = [1, 2, 3, 4, 5]),
    P ? k(j, P) : j instanceof _ ? j : new _(M(j))).subscribe(console.log);
  },
]);
