!(function (t) {
    var e = {};
    function r(n) {
        if (e[n]) return e[n].exports;
        var i = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    (r.m = t),
        (r.c = e),
        (r.d = function (t, e, n) {
            r.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (r.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (r.t = function (t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (r.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && 'string' != typeof t)
            )
                for (var i in t)
                    r.d(
                        n,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i),
                    );
            return n;
        }),
        (r.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return r.d(e, 'a', e), e;
        }),
        (r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (r.p = ''),
        r((r.s = 3));
})([
    function (t, e, r) {
        'use strict';
        (function (t) {
            r.d(e, 'a', function () {
                return o;
            });
            var n = 'undefined' != typeof window && window,
                i =
                    'undefined' != typeof self &&
                    'undefined' != typeof WorkerGlobalScope &&
                    self instanceof WorkerGlobalScope &&
                    self,
                o = n || (void 0 !== t && t) || i;
        }.call(this, r(2)));
    },
    function (t, e, r) {},
    function (t, e) {
        var r;
        r = (function () {
            return this;
        })();
        try {
            r = r || new Function('return this')();
        } catch (t) {
            'object' == typeof window && (r = window);
        }
        t.exports = r;
    },
    function (t, e, r) {
        'use strict';
        r.r(e);
        r(1);
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
***************************************************************************** */ var n = function (
            t,
            e,
        ) {
            return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                })(t, e);
        };
        function i(t, e) {
            function r() {
                this.constructor = t;
            }
            n(t, e),
                (t.prototype =
                    null === e
                        ? Object.create(e)
                        : ((r.prototype = e.prototype), new r()));
        }
        function o(t) {
            return 'function' == typeof t;
        }
        var s = !1,
            u = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(t) {
                    t && new Error().stack;
                    s = t;
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return s;
                },
            };
        function c(t) {
            setTimeout(function () {
                throw t;
            }, 0);
        }
        var a = {
                closed: !0,
                next: function (t) {},
                error: function (t) {
                    if (u.useDeprecatedSynchronousErrorHandling) throw t;
                    c(t);
                },
                complete: function () {},
            },
            h = (function () {
                return (
                    Array.isArray ||
                    function (t) {
                        return t && 'number' == typeof t.length;
                    }
                );
            })();
        function p(t) {
            return null !== t && 'object' == typeof t;
        }
        var f = (function () {
                function t(t) {
                    return (
                        Error.call(this),
                        (this.message = t
                            ? t.length +
                              ' errors occurred during unsubscription:\n' +
                              t
                                  .map(function (t, e) {
                                      return e + 1 + ') ' + t.toString();
                                  })
                                  .join('\n  ')
                            : ''),
                        (this.name = 'UnsubscriptionError'),
                        (this.errors = t),
                        this
                    );
                }
                return (t.prototype = Object.create(Error.prototype)), t;
            })(),
            l = (function () {
                function t(t) {
                    (this.closed = !1),
                        (this._parentOrParents = null),
                        (this._subscriptions = null),
                        t && (this._unsubscribe = t);
                }
                return (
                    (t.prototype.unsubscribe = function () {
                        var e;
                        if (!this.closed) {
                            var r = this._parentOrParents,
                                n = this._unsubscribe,
                                i = this._subscriptions;
                            if (
                                ((this.closed = !0),
                                (this._parentOrParents = null),
                                (this._subscriptions = null),
                                r instanceof t)
                            )
                                r.remove(this);
                            else if (null !== r)
                                for (var s = 0; s < r.length; ++s) {
                                    r[s].remove(this);
                                }
                            if (o(n))
                                try {
                                    n.call(this);
                                } catch (t) {
                                    e = t instanceof f ? d(t.errors) : [t];
                                }
                            if (h(i)) {
                                s = -1;
                                for (var u = i.length; ++s < u; ) {
                                    var c = i[s];
                                    if (p(c))
                                        try {
                                            c.unsubscribe();
                                        } catch (t) {
                                            (e = e || []),
                                                t instanceof f
                                                    ? (e = e.concat(
                                                          d(t.errors),
                                                      ))
                                                    : e.push(t);
                                        }
                                }
                            }
                            if (e) throw new f(e);
                        }
                    }),
                    (t.prototype.add = function (e) {
                        var r = e;
                        if (!e) return t.EMPTY;
                        switch (typeof e) {
                            case 'function':
                                r = new t(e);
                            case 'object':
                                if (
                                    r === this ||
                                    r.closed ||
                                    'function' != typeof r.unsubscribe
                                )
                                    return r;
                                if (this.closed) return r.unsubscribe(), r;
                                if (!(r instanceof t)) {
                                    var n = r;
                                    (r = new t())._subscriptions = [n];
                                }
                                break;
                            default:
                                throw new Error(
                                    'unrecognized teardown ' +
                                        e +
                                        ' added to Subscription.',
                                );
                        }
                        var i = r._parentOrParents;
                        if (null === i) r._parentOrParents = this;
                        else if (i instanceof t) {
                            if (i === this) return r;
                            r._parentOrParents = [i, this];
                        } else {
                            if (-1 !== i.indexOf(this)) return r;
                            i.push(this);
                        }
                        var o = this._subscriptions;
                        return (
                            null === o
                                ? (this._subscriptions = [r])
                                : o.push(r),
                            r
                        );
                    }),
                    (t.prototype.remove = function (t) {
                        var e = this._subscriptions;
                        if (e) {
                            var r = e.indexOf(t);
                            -1 !== r && e.splice(r, 1);
                        }
                    }),
                    (t.EMPTY = (function (t) {
                        return (t.closed = !0), t;
                    })(new t())),
                    t
                );
            })();
        function d(t) {
            return t.reduce(function (t, e) {
                return t.concat(e instanceof f ? e.errors : e);
            }, []);
        }
        var b = (function () {
                return 'function' == typeof Symbol
                    ? Symbol('rxSubscriber')
                    : '@@rxSubscriber_' + Math.random();
            })(),
            y = (function (t) {
                function e(r, n, i) {
                    var o = t.call(this) || this;
                    switch (
                        ((o.syncErrorValue = null),
                        (o.syncErrorThrown = !1),
                        (o.syncErrorThrowable = !1),
                        (o.isStopped = !1),
                        arguments.length)
                    ) {
                        case 0:
                            o.destination = a;
                            break;
                        case 1:
                            if (!r) {
                                o.destination = a;
                                break;
                            }
                            if ('object' == typeof r) {
                                r instanceof e
                                    ? ((o.syncErrorThrowable =
                                          r.syncErrorThrowable),
                                      (o.destination = r),
                                      r.add(o))
                                    : ((o.syncErrorThrowable = !0),
                                      (o.destination = new v(o, r)));
                                break;
                            }
                        default:
                            (o.syncErrorThrowable = !0),
                                (o.destination = new v(o, r, n, i));
                    }
                    return o;
                }
                return (
                    i(e, t),
                    (e.prototype[b] = function () {
                        return this;
                    }),
                    (e.create = function (t, r, n) {
                        var i = new e(t, r, n);
                        return (i.syncErrorThrowable = !1), i;
                    }),
                    (e.prototype.next = function (t) {
                        this.isStopped || this._next(t);
                    }),
                    (e.prototype.error = function (t) {
                        this.isStopped ||
                            ((this.isStopped = !0), this._error(t));
                    }),
                    (e.prototype.complete = function () {
                        this.isStopped ||
                            ((this.isStopped = !0), this._complete());
                    }),
                    (e.prototype.unsubscribe = function () {
                        this.closed ||
                            ((this.isStopped = !0),
                            t.prototype.unsubscribe.call(this));
                    }),
                    (e.prototype._next = function (t) {
                        this.destination.next(t);
                    }),
                    (e.prototype._error = function (t) {
                        this.destination.error(t), this.unsubscribe();
                    }),
                    (e.prototype._complete = function () {
                        this.destination.complete(), this.unsubscribe();
                    }),
                    (e.prototype._unsubscribeAndRecycle = function () {
                        var t = this._parentOrParents;
                        return (
                            (this._parentOrParents = null),
                            this.unsubscribe(),
                            (this.closed = !1),
                            (this.isStopped = !1),
                            (this._parentOrParents = t),
                            this
                        );
                    }),
                    e
                );
            })(l),
            v = (function (t) {
                function e(e, r, n, i) {
                    var s,
                        u = t.call(this) || this;
                    u._parentSubscriber = e;
                    var c = u;
                    return (
                        o(r)
                            ? (s = r)
                            : r &&
                              ((s = r.next),
                              (n = r.error),
                              (i = r.complete),
                              r !== a &&
                                  (o((c = Object.create(r)).unsubscribe) &&
                                      u.add(c.unsubscribe.bind(c)),
                                  (c.unsubscribe = u.unsubscribe.bind(u)))),
                        (u._context = c),
                        (u._next = s),
                        (u._error = n),
                        (u._complete = i),
                        u
                    );
                }
                return (
                    i(e, t),
                    (e.prototype.next = function (t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            u.useDeprecatedSynchronousErrorHandling &&
                            e.syncErrorThrowable
                                ? this.__tryOrSetError(e, this._next, t) &&
                                  this.unsubscribe()
                                : this.__tryOrUnsub(this._next, t);
                        }
                    }),
                    (e.prototype.error = function (t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                r = u.useDeprecatedSynchronousErrorHandling;
                            if (this._error)
                                r && e.syncErrorThrowable
                                    ? (this.__tryOrSetError(e, this._error, t),
                                      this.unsubscribe())
                                    : (this.__tryOrUnsub(this._error, t),
                                      this.unsubscribe());
                            else if (e.syncErrorThrowable)
                                r
                                    ? ((e.syncErrorValue = t),
                                      (e.syncErrorThrown = !0))
                                    : c(t),
                                    this.unsubscribe();
                            else {
                                if ((this.unsubscribe(), r)) throw t;
                                c(t);
                            }
                        }
                    }),
                    (e.prototype.complete = function () {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var r = function () {
                                    return t._complete.call(t._context);
                                };
                                u.useDeprecatedSynchronousErrorHandling &&
                                e.syncErrorThrowable
                                    ? (this.__tryOrSetError(e, r),
                                      this.unsubscribe())
                                    : (this.__tryOrUnsub(r),
                                      this.unsubscribe());
                            } else this.unsubscribe();
                        }
                    }),
                    (e.prototype.__tryOrUnsub = function (t, e) {
                        try {
                            t.call(this._context, e);
                        } catch (t) {
                            if (
                                (this.unsubscribe(),
                                u.useDeprecatedSynchronousErrorHandling)
                            )
                                throw t;
                            c(t);
                        }
                    }),
                    (e.prototype.__tryOrSetError = function (t, e, r) {
                        if (!u.useDeprecatedSynchronousErrorHandling)
                            throw new Error('bad call');
                        try {
                            e.call(this._context, r);
                        } catch (e) {
                            return u.useDeprecatedSynchronousErrorHandling
                                ? ((t.syncErrorValue = e),
                                  (t.syncErrorThrown = !0),
                                  !0)
                                : (c(e), !0);
                        }
                        return !1;
                    }),
                    (e.prototype._unsubscribe = function () {
                        var t = this._parentSubscriber;
                        (this._context = null),
                            (this._parentSubscriber = null),
                            t.unsubscribe();
                    }),
                    e
                );
            })(y);
        var w = (function () {
            return (
                ('function' == typeof Symbol && Symbol.observable) ||
                '@@observable'
            );
        })();
        function m(t) {
            return t;
        }
        function _(t) {
            return 0 === t.length
                ? m
                : 1 === t.length
                ? t[0]
                : function (e) {
                      return t.reduce(function (t, e) {
                          return e(t);
                      }, e);
                  };
        }
        var x = (function () {
            function t(t) {
                (this._isScalar = !1), t && (this._subscribe = t);
            }
            return (
                (t.prototype.lift = function (e) {
                    var r = new t();
                    return (r.source = this), (r.operator = e), r;
                }),
                (t.prototype.subscribe = function (t, e, r) {
                    var n = this.operator,
                        i = (function (t, e, r) {
                            if (t) {
                                if (t instanceof y) return t;
                                if (t[b]) return t[b]();
                            }
                            return t || e || r ? new y(t, e, r) : new y(a);
                        })(t, e, r);
                    if (
                        (n
                            ? i.add(n.call(i, this.source))
                            : i.add(
                                  this.source ||
                                      (u.useDeprecatedSynchronousErrorHandling &&
                                          !i.syncErrorThrowable)
                                      ? this._subscribe(i)
                                      : this._trySubscribe(i),
                              ),
                        u.useDeprecatedSynchronousErrorHandling &&
                            i.syncErrorThrowable &&
                            ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                    )
                        throw i.syncErrorValue;
                    return i;
                }),
                (t.prototype._trySubscribe = function (t) {
                    try {
                        return this._subscribe(t);
                    } catch (e) {
                        u.useDeprecatedSynchronousErrorHandling &&
                            ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                            !(function (t) {
                                for (; t; ) {
                                    var e = t,
                                        r = e.closed,
                                        n = e.destination,
                                        i = e.isStopped;
                                    if (r || i) return !1;
                                    t = n && n instanceof y ? n : null;
                                }
                                return !0;
                            })(t)
                                ? console.warn(e)
                                : t.error(e);
                    }
                }),
                (t.prototype.forEach = function (t, e) {
                    var r = this;
                    return new (e = g(e))(function (e, n) {
                        var i;
                        i = r.subscribe(
                            function (e) {
                                try {
                                    t(e);
                                } catch (t) {
                                    n(t), i && i.unsubscribe();
                                }
                            },
                            n,
                            e,
                        );
                    });
                }),
                (t.prototype._subscribe = function (t) {
                    var e = this.source;
                    return e && e.subscribe(t);
                }),
                (t.prototype[w] = function () {
                    return this;
                }),
                (t.prototype.pipe = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return 0 === t.length ? this : _(t)(this);
                }),
                (t.prototype.toPromise = function (t) {
                    var e = this;
                    return new (t = g(t))(function (t, r) {
                        var n;
                        e.subscribe(
                            function (t) {
                                return (n = t);
                            },
                            function (t) {
                                return r(t);
                            },
                            function () {
                                return t(n);
                            },
                        );
                    });
                }),
                (t.create = function (e) {
                    return new t(e);
                }),
                t
            );
        })();
        function g(t) {
            if ((t || (t = u.Promise || Promise), !t))
                throw new Error('no Promise impl found');
            return t;
        }
        function S() {
            return 'function' == typeof Symbol && Symbol.iterator
                ? Symbol.iterator
                : '@@iterator';
        }
        var E = S(),
            T = function (t) {
                return (
                    t && 'number' == typeof t.length && 'function' != typeof t
                );
            };
        function O(t) {
            return (
                !!t &&
                'function' != typeof t.subscribe &&
                'function' == typeof t.then
            );
        }
        var j = function (t) {
            if (t && 'function' == typeof t[w])
                return (
                    (i = t),
                    function (t) {
                        var e = i[w]();
                        if ('function' != typeof e.subscribe)
                            throw new TypeError(
                                'Provided object does not correctly implement Symbol.observable',
                            );
                        return e.subscribe(t);
                    }
                );
            if (T(t))
                return (
                    (n = t),
                    function (t) {
                        for (var e = 0, r = n.length; e < r && !t.closed; e++)
                            t.next(n[e]);
                        t.complete();
                    }
                );
            if (O(t))
                return (
                    (r = t),
                    function (t) {
                        return (
                            r
                                .then(
                                    function (e) {
                                        t.closed || (t.next(e), t.complete());
                                    },
                                    function (e) {
                                        return t.error(e);
                                    },
                                )
                                .then(null, c),
                            t
                        );
                    }
                );
            if (t && 'function' == typeof t[E])
                return (
                    (e = t),
                    function (t) {
                        for (var r = e[E](); ; ) {
                            var n = r.next();
                            if (n.done) {
                                t.complete();
                                break;
                            }
                            if ((t.next(n.value), t.closed)) break;
                        }
                        return (
                            'function' == typeof r.return &&
                                t.add(function () {
                                    r.return && r.return();
                                }),
                            t
                        );
                    }
                );
            var e,
                r,
                n,
                i,
                o = p(t) ? 'an invalid object' : "'" + t + "'";
            throw new TypeError(
                'You provided ' +
                    o +
                    ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.',
            );
        };
        function P(t, e) {
            if (null != t) {
                if (
                    (function (t) {
                        return t && 'function' == typeof t[w];
                    })(t)
                )
                    return (function (t, e) {
                        return new x(function (r) {
                            var n = new l();
                            return (
                                n.add(
                                    e.schedule(function () {
                                        var i = t[w]();
                                        n.add(
                                            i.subscribe({
                                                next: function (t) {
                                                    n.add(
                                                        e.schedule(function () {
                                                            return r.next(t);
                                                        }),
                                                    );
                                                },
                                                error: function (t) {
                                                    n.add(
                                                        e.schedule(function () {
                                                            return r.error(t);
                                                        }),
                                                    );
                                                },
                                                complete: function () {
                                                    n.add(
                                                        e.schedule(function () {
                                                            return r.complete();
                                                        }),
                                                    );
                                                },
                                            }),
                                        );
                                    }),
                                ),
                                n
                            );
                        });
                    })(t, e);
                if (O(t))
                    return (function (t, e) {
                        return new x(function (r) {
                            var n = new l();
                            return (
                                n.add(
                                    e.schedule(function () {
                                        return t.then(
                                            function (t) {
                                                n.add(
                                                    e.schedule(function () {
                                                        r.next(t),
                                                            n.add(
                                                                e.schedule(
                                                                    function () {
                                                                        return r.complete();
                                                                    },
                                                                ),
                                                            );
                                                    }),
                                                );
                                            },
                                            function (t) {
                                                n.add(
                                                    e.schedule(function () {
                                                        return r.error(t);
                                                    }),
                                                );
                                            },
                                        );
                                    }),
                                ),
                                n
                            );
                        });
                    })(t, e);
                if (T(t))
                    return (function (t, e) {
                        return new x(function (r) {
                            var n = new l(),
                                i = 0;
                            return (
                                n.add(
                                    e.schedule(function () {
                                        i !== t.length
                                            ? (r.next(t[i++]),
                                              r.closed ||
                                                  n.add(this.schedule()))
                                            : r.complete();
                                    }),
                                ),
                                n
                            );
                        });
                    })(t, e);
                if (
                    (function (t) {
                        return t && 'function' == typeof t[E];
                    })(t) ||
                    'string' == typeof t
                )
                    return (function (t, e) {
                        if (!t) throw new Error('Iterable cannot be null');
                        return new x(function (r) {
                            var n,
                                i = new l();
                            return (
                                i.add(function () {
                                    n &&
                                        'function' == typeof n.return &&
                                        n.return();
                                }),
                                i.add(
                                    e.schedule(function () {
                                        (n = t[E]()),
                                            i.add(
                                                e.schedule(function () {
                                                    if (!r.closed) {
                                                        var t, e;
                                                        try {
                                                            var i = n.next();
                                                            (t = i.value),
                                                                (e = i.done);
                                                        } catch (t) {
                                                            return void r.error(
                                                                t,
                                                            );
                                                        }
                                                        e
                                                            ? r.complete()
                                                            : (r.next(t),
                                                              this.schedule());
                                                    }
                                                }),
                                            );
                                    }),
                                ),
                                i
                            );
                        });
                    })(t, e);
            }
            throw new TypeError(
                ((null !== t && typeof t) || t) + ' is not observable',
            );
        }
        function H(t, e) {
            return e ? P(t, e) : t instanceof x ? t : new x(j(t));
        }
        function I(t, e) {
            return function (r) {
                if ('function' != typeof t)
                    throw new TypeError(
                        'argument is not a function. Are you looking for `mapTo()`?',
                    );
                return r.lift(new q(t, e));
            };
        }
        var q = (function () {
                function t(t, e) {
                    (this.project = t), (this.thisArg = e);
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(
                            new A(t, this.project, this.thisArg),
                        );
                    }),
                    t
                );
            })(),
            A = (function (t) {
                function e(e, r, n) {
                    var i = t.call(this, e) || this;
                    return (
                        (i.project = r), (i.count = 0), (i.thisArg = n || i), i
                    );
                }
                return (
                    i(e, t),
                    (e.prototype._next = function (t) {
                        var e;
                        try {
                            e = this.project.call(
                                this.thisArg,
                                t,
                                this.count++,
                            );
                        } catch (t) {
                            return void this.destination.error(t);
                        }
                        this.destination.next(e);
                    }),
                    e
                );
            })(y);
        var D = r(0);
        function N(t, e) {
            return (
                void 0 === e && (e = null),
                new V({ method: 'GET', url: t, headers: e })
            );
        }
        function C(t, e, r) {
            return new V({ method: 'POST', url: t, body: e, headers: r });
        }
        function k(t, e) {
            return new V({ method: 'DELETE', url: t, headers: e });
        }
        function L(t, e, r) {
            return new V({ method: 'PUT', url: t, body: e, headers: r });
        }
        function M(t, e, r) {
            return new V({ method: 'PATCH', url: t, body: e, headers: r });
        }
        var R = I(function (t, e) {
            return t.response;
        });
        function X(t, e) {
            return R(
                new V({
                    method: 'GET',
                    url: t,
                    responseType: 'json',
                    headers: e,
                }),
            );
        }
        var V = (function (t) {
                function e(e) {
                    var r = t.call(this) || this,
                        n = {
                            async: !0,
                            createXHR: function () {
                                return this.crossDomain
                                    ? (function () {
                                          if (D.a.XMLHttpRequest)
                                              return new D.a.XMLHttpRequest();
                                          if (D.a.XDomainRequest)
                                              return new D.a.XDomainRequest();
                                          throw new Error(
                                              'CORS is not supported by your browser',
                                          );
                                      })()
                                    : (function () {
                                          if (D.a.XMLHttpRequest)
                                              return new D.a.XMLHttpRequest();
                                          var t = void 0;
                                          try {
                                              for (
                                                  var e = [
                                                          'Msxml2.XMLHTTP',
                                                          'Microsoft.XMLHTTP',
                                                          'Msxml2.XMLHTTP.4.0',
                                                      ],
                                                      r = 0;
                                                  r < 3;
                                                  r++
                                              )
                                                  try {
                                                      if (
                                                          ((t = e[r]),
                                                          new D.a.ActiveXObject(
                                                              t,
                                                          ))
                                                      )
                                                          break;
                                                  } catch (t) {}
                                              return new D.a.ActiveXObject(t);
                                          } catch (t) {
                                              throw new Error(
                                                  'XMLHttpRequest is not supported by your browser',
                                              );
                                          }
                                      })();
                            },
                            crossDomain: !0,
                            withCredentials: !1,
                            headers: {},
                            method: 'GET',
                            responseType: 'json',
                            timeout: 0,
                        };
                    if ('string' == typeof e) n.url = e;
                    else for (var i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
                    return (r.request = n), r;
                }
                var r;
                return (
                    i(e, t),
                    (e.prototype._subscribe = function (t) {
                        return new F(t, this.request);
                    }),
                    (e.create =
                        (((r = function (t) {
                            return new e(t);
                        }).get = N),
                        (r.post = C),
                        (r.delete = k),
                        (r.put = L),
                        (r.patch = M),
                        (r.getJSON = X),
                        r)),
                    e
                );
            })(x),
            F = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e) || this;
                    (n.request = r), (n.done = !1);
                    var i = (r.headers = r.headers || {});
                    return (
                        r.crossDomain ||
                            n.getHeader(i, 'X-Requested-With') ||
                            (i['X-Requested-With'] = 'XMLHttpRequest'),
                        n.getHeader(i, 'Content-Type') ||
                            (D.a.FormData && r.body instanceof D.a.FormData) ||
                            void 0 === r.body ||
                            (i['Content-Type'] =
                                'application/x-www-form-urlencoded; charset=UTF-8'),
                        (r.body = n.serializeBody(
                            r.body,
                            n.getHeader(r.headers, 'Content-Type'),
                        )),
                        n.send(),
                        n
                    );
                }
                return (
                    i(e, t),
                    (e.prototype.next = function (t) {
                        this.done = !0;
                        var e,
                            r = this.xhr,
                            n = this.request,
                            i = this.destination;
                        try {
                            e = new U(t, r, n);
                        } catch (t) {
                            return i.error(t);
                        }
                        i.next(e);
                    }),
                    (e.prototype.send = function () {
                        var t = this.request,
                            e = this.request,
                            r = e.user,
                            n = e.method,
                            i = e.url,
                            o = e.async,
                            s = e.password,
                            u = e.headers,
                            c = e.body;
                        try {
                            var a = (this.xhr = t.createXHR());
                            this.setupEvents(a, t),
                                r ? a.open(n, i, o, r, s) : a.open(n, i, o),
                                o &&
                                    ((a.timeout = t.timeout),
                                    (a.responseType = t.responseType)),
                                'withCredentials' in a &&
                                    (a.withCredentials = !!t.withCredentials),
                                this.setHeaders(a, u),
                                c ? a.send(c) : a.send();
                        } catch (t) {
                            this.error(t);
                        }
                    }),
                    (e.prototype.serializeBody = function (t, e) {
                        if (!t || 'string' == typeof t) return t;
                        if (D.a.FormData && t instanceof D.a.FormData) return t;
                        if (e) {
                            var r = e.indexOf(';');
                            -1 !== r && (e = e.substring(0, r));
                        }
                        switch (e) {
                            case 'application/x-www-form-urlencoded':
                                return Object.keys(t)
                                    .map(function (e) {
                                        return (
                                            encodeURIComponent(e) +
                                            '=' +
                                            encodeURIComponent(t[e])
                                        );
                                    })
                                    .join('&');
                            case 'application/json':
                                return JSON.stringify(t);
                            default:
                                return t;
                        }
                    }),
                    (e.prototype.setHeaders = function (t, e) {
                        for (var r in e)
                            e.hasOwnProperty(r) && t.setRequestHeader(r, e[r]);
                    }),
                    (e.prototype.getHeader = function (t, e) {
                        for (var r in t)
                            if (r.toLowerCase() === e.toLowerCase())
                                return t[r];
                    }),
                    (e.prototype.setupEvents = function (t, e) {
                        var r = e.progressSubscriber;
                        function n(t) {
                            var e,
                                r = n,
                                i = r.subscriber,
                                o = r.progressSubscriber,
                                s = r.request;
                            o && o.error(t);
                            try {
                                e = new B(this, s);
                            } catch (t) {
                                e = t;
                            }
                            i.error(e);
                        }
                        if (
                            ((t.ontimeout = n),
                            (n.request = e),
                            (n.subscriber = this),
                            (n.progressSubscriber = r),
                            t.upload && 'withCredentials' in t)
                        ) {
                            var i, o;
                            if (r)
                                (i = function (t) {
                                    i.progressSubscriber.next(t);
                                }),
                                    D.a.XDomainRequest
                                        ? (t.onprogress = i)
                                        : (t.upload.onprogress = i),
                                    (i.progressSubscriber = r);
                            (o = function (t) {
                                var e,
                                    r = o,
                                    n = r.progressSubscriber,
                                    i = r.subscriber,
                                    s = r.request;
                                n && n.error(t);
                                try {
                                    e = new Y('ajax error', this, s);
                                } catch (t) {
                                    e = t;
                                }
                                i.error(e);
                            }),
                                (t.onerror = o),
                                (o.request = e),
                                (o.subscriber = this),
                                (o.progressSubscriber = r);
                        }
                        function s(t) {}
                        function u(t) {
                            var e = u,
                                r = e.subscriber,
                                n = e.progressSubscriber,
                                i = e.request;
                            if (4 === this.readyState) {
                                var o =
                                        1223 === this.status
                                            ? 204
                                            : this.status,
                                    s =
                                        'text' === this.responseType
                                            ? this.response || this.responseText
                                            : this.response;
                                if ((0 === o && (o = s ? 200 : 0), o < 400))
                                    n && n.complete(), r.next(t), r.complete();
                                else {
                                    n && n.error(t);
                                    var c = void 0;
                                    try {
                                        c = new Y('ajax error ' + o, this, i);
                                    } catch (t) {
                                        c = t;
                                    }
                                    r.error(c);
                                }
                            }
                        }
                        (t.onreadystatechange = s),
                            (s.subscriber = this),
                            (s.progressSubscriber = r),
                            (s.request = e),
                            (t.onload = u),
                            (u.subscriber = this),
                            (u.progressSubscriber = r),
                            (u.request = e);
                    }),
                    (e.prototype.unsubscribe = function () {
                        var e = this.done,
                            r = this.xhr;
                        !e &&
                            r &&
                            4 !== r.readyState &&
                            'function' == typeof r.abort &&
                            r.abort(),
                            t.prototype.unsubscribe.call(this);
                    }),
                    e
                );
            })(y),
            U = (function () {
                return function (t, e, r) {
                    (this.originalEvent = t),
                        (this.xhr = e),
                        (this.request = r),
                        (this.status = e.status),
                        (this.responseType = e.responseType || r.responseType),
                        (this.response = G(this.responseType, e));
                };
            })(),
            Y = (function () {
                function t(t, e, r) {
                    return (
                        Error.call(this),
                        (this.message = t),
                        (this.name = 'AjaxError'),
                        (this.xhr = e),
                        (this.request = r),
                        (this.status = e.status),
                        (this.responseType = e.responseType || r.responseType),
                        (this.response = G(this.responseType, e)),
                        this
                    );
                }
                return (t.prototype = Object.create(Error.prototype)), t;
            })();
        function G(t, e) {
            switch (t) {
                case 'json':
                    return (function (t) {
                        return 'response' in t
                            ? t.responseType
                                ? t.response
                                : JSON.parse(
                                      t.response || t.responseText || 'null',
                                  )
                            : JSON.parse(t.responseText || 'null');
                    })(e);
                case 'xml':
                    return e.responseXML;
                case 'text':
                default:
                    return 'response' in e ? e.response : e.responseText;
            }
        }
        var B = function (t, e) {
                return (
                    Y.call(this, 'ajax timeout', t, e),
                    (this.name = 'AjaxTimeoutError'),
                    this
                );
            },
            J = (function () {
                return V.create;
            })(),
            W = (function (t) {
                function e(e, r, n) {
                    var i = t.call(this) || this;
                    return (
                        (i.parent = e),
                        (i.outerValue = r),
                        (i.outerIndex = n),
                        (i.index = 0),
                        i
                    );
                }
                return (
                    i(e, t),
                    (e.prototype._next = function (t) {
                        this.parent.notifyNext(
                            this.outerValue,
                            t,
                            this.outerIndex,
                            this.index++,
                            this,
                        );
                    }),
                    (e.prototype._error = function (t) {
                        this.parent.notifyError(t, this), this.unsubscribe();
                    }),
                    (e.prototype._complete = function () {
                        this.parent.notifyComplete(this), this.unsubscribe();
                    }),
                    e
                );
            })(y);
        function z(t, e, r, n, i) {
            if ((void 0 === i && (i = new W(t, r, n)), !i.closed))
                return e instanceof x ? e.subscribe(i) : j(e)(i);
        }
        var K = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                i(e, t),
                (e.prototype.notifyNext = function (t, e, r, n, i) {
                    this.destination.next(e);
                }),
                (e.prototype.notifyError = function (t, e) {
                    this.destination.error(t);
                }),
                (e.prototype.notifyComplete = function (t) {
                    this.destination.complete();
                }),
                e
            );
        })(y);
        var $ = (function () {
                function t(t, e) {
                    void 0 === e && (e = Number.POSITIVE_INFINITY),
                        (this.project = t),
                        (this.concurrent = e);
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(
                            new Q(t, this.project, this.concurrent),
                        );
                    }),
                    t
                );
            })(),
            Q = (function (t) {
                function e(e, r, n) {
                    void 0 === n && (n = Number.POSITIVE_INFINITY);
                    var i = t.call(this, e) || this;
                    return (
                        (i.project = r),
                        (i.concurrent = n),
                        (i.hasCompleted = !1),
                        (i.buffer = []),
                        (i.active = 0),
                        (i.index = 0),
                        i
                    );
                }
                return (
                    i(e, t),
                    (e.prototype._next = function (t) {
                        this.active < this.concurrent
                            ? this._tryNext(t)
                            : this.buffer.push(t);
                    }),
                    (e.prototype._tryNext = function (t) {
                        var e,
                            r = this.index++;
                        try {
                            e = this.project(t, r);
                        } catch (t) {
                            return void this.destination.error(t);
                        }
                        this.active++, this._innerSub(e, t, r);
                    }),
                    (e.prototype._innerSub = function (t, e, r) {
                        var n = new W(this, e, r),
                            i = this.destination;
                        i.add(n);
                        var o = z(this, t, void 0, void 0, n);
                        o !== n && i.add(o);
                    }),
                    (e.prototype._complete = function () {
                        (this.hasCompleted = !0),
                            0 === this.active &&
                                0 === this.buffer.length &&
                                this.destination.complete(),
                            this.unsubscribe();
                    }),
                    (e.prototype.notifyNext = function (t, e, r, n, i) {
                        this.destination.next(e);
                    }),
                    (e.prototype.notifyComplete = function (t) {
                        var e = this.buffer;
                        this.remove(t),
                            this.active--,
                            e.length > 0
                                ? this._next(e.shift())
                                : 0 === this.active &&
                                  this.hasCompleted &&
                                  this.destination.complete();
                    }),
                    e
                );
            })(K);
        function Z(t, e) {
            return function (r) {
                for (var n = r, i = 0; i < e; i++) {
                    var o = n[t[i]];
                    if (void 0 === o) return;
                    n = o;
                }
                return n;
            };
        }
        function tt(t) {
            return function (e) {
                var r = new et(t),
                    n = e.lift(r);
                return (r.caught = n);
            };
        }
        var et = (function () {
                function t(t) {
                    this.selector = t;
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(
                            new rt(t, this.selector, this.caught),
                        );
                    }),
                    t
                );
            })(),
            rt = (function (t) {
                function e(e, r, n) {
                    var i = t.call(this, e) || this;
                    return (i.selector = r), (i.caught = n), i;
                }
                return (
                    i(e, t),
                    (e.prototype.error = function (e) {
                        if (!this.isStopped) {
                            var r = void 0;
                            try {
                                r = this.selector(e, this.caught);
                            } catch (e) {
                                return void t.prototype.error.call(this, e);
                            }
                            this._unsubscribeAndRecycle();
                            var n = new W(this, void 0, void 0);
                            this.add(n);
                            var i = z(this, r, void 0, void 0, n);
                            i !== n && this.add(i);
                        }
                    }),
                    e
                );
            })(K),
            nt = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e, r) || this;
                    return (n.scheduler = e), (n.work = r), (n.pending = !1), n;
                }
                return (
                    i(e, t),
                    (e.prototype.schedule = function (t, e) {
                        if ((void 0 === e && (e = 0), this.closed)) return this;
                        this.state = t;
                        var r = this.id,
                            n = this.scheduler;
                        return (
                            null != r &&
                                (this.id = this.recycleAsyncId(n, r, e)),
                            (this.pending = !0),
                            (this.delay = e),
                            (this.id =
                                this.id || this.requestAsyncId(n, this.id, e)),
                            this
                        );
                    }),
                    (e.prototype.requestAsyncId = function (t, e, r) {
                        return (
                            void 0 === r && (r = 0),
                            setInterval(t.flush.bind(t, this), r)
                        );
                    }),
                    (e.prototype.recycleAsyncId = function (t, e, r) {
                        if (
                            (void 0 === r && (r = 0),
                            null !== r &&
                                this.delay === r &&
                                !1 === this.pending)
                        )
                            return e;
                        clearInterval(e);
                    }),
                    (e.prototype.execute = function (t, e) {
                        if (this.closed)
                            return new Error('executing a cancelled action');
                        this.pending = !1;
                        var r = this._execute(t, e);
                        if (r) return r;
                        !1 === this.pending &&
                            null != this.id &&
                            (this.id = this.recycleAsyncId(
                                this.scheduler,
                                this.id,
                                null,
                            ));
                    }),
                    (e.prototype._execute = function (t, e) {
                        var r = !1,
                            n = void 0;
                        try {
                            this.work(t);
                        } catch (t) {
                            (r = !0), (n = (!!t && t) || new Error(t));
                        }
                        if (r) return this.unsubscribe(), n;
                    }),
                    (e.prototype._unsubscribe = function () {
                        var t = this.id,
                            e = this.scheduler,
                            r = e.actions,
                            n = r.indexOf(this);
                        (this.work = null),
                            (this.state = null),
                            (this.pending = !1),
                            (this.scheduler = null),
                            -1 !== n && r.splice(n, 1),
                            null != t &&
                                (this.id = this.recycleAsyncId(e, t, null)),
                            (this.delay = null);
                    }),
                    e
                );
            })(
                (function (t) {
                    function e(e, r) {
                        return t.call(this) || this;
                    }
                    return (
                        i(e, t),
                        (e.prototype.schedule = function (t, e) {
                            return void 0 === e && (e = 0), this;
                        }),
                        e
                    );
                })(l),
            ),
            it = (function () {
                function t(e, r) {
                    void 0 === r && (r = t.now),
                        (this.SchedulerAction = e),
                        (this.now = r);
                }
                return (
                    (t.prototype.schedule = function (t, e, r) {
                        return (
                            void 0 === e && (e = 0),
                            new this.SchedulerAction(this, t).schedule(r, e)
                        );
                    }),
                    (t.now = function () {
                        return Date.now();
                    }),
                    t
                );
            })(),
            ot = new ((function (t) {
                function e(r, n) {
                    void 0 === n && (n = it.now);
                    var i =
                        t.call(this, r, function () {
                            return e.delegate && e.delegate !== i
                                ? e.delegate.now()
                                : n();
                        }) || this;
                    return (
                        (i.actions = []),
                        (i.active = !1),
                        (i.scheduled = void 0),
                        i
                    );
                }
                return (
                    i(e, t),
                    (e.prototype.schedule = function (r, n, i) {
                        return (
                            void 0 === n && (n = 0),
                            e.delegate && e.delegate !== this
                                ? e.delegate.schedule(r, n, i)
                                : t.prototype.schedule.call(this, r, n, i)
                        );
                    }),
                    (e.prototype.flush = function (t) {
                        var e = this.actions;
                        if (this.active) e.push(t);
                        else {
                            var r;
                            this.active = !0;
                            do {
                                if ((r = t.execute(t.state, t.delay))) break;
                            } while ((t = e.shift()));
                            if (((this.active = !1), r)) {
                                for (; (t = e.shift()); ) t.unsubscribe();
                                throw r;
                            }
                        }
                    }),
                    e
                );
            })(it))(nt);
        var st = (function () {
                function t(t, e) {
                    (this.dueTime = t), (this.scheduler = e);
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(
                            new ut(t, this.dueTime, this.scheduler),
                        );
                    }),
                    t
                );
            })(),
            ut = (function (t) {
                function e(e, r, n) {
                    var i = t.call(this, e) || this;
                    return (
                        (i.dueTime = r),
                        (i.scheduler = n),
                        (i.debouncedSubscription = null),
                        (i.lastValue = null),
                        (i.hasValue = !1),
                        i
                    );
                }
                return (
                    i(e, t),
                    (e.prototype._next = function (t) {
                        this.clearDebounce(),
                            (this.lastValue = t),
                            (this.hasValue = !0),
                            this.add(
                                (this.debouncedSubscription = this.scheduler.schedule(
                                    ct,
                                    this.dueTime,
                                    this,
                                )),
                            );
                    }),
                    (e.prototype._complete = function () {
                        this.debouncedNext(), this.destination.complete();
                    }),
                    (e.prototype.debouncedNext = function () {
                        if ((this.clearDebounce(), this.hasValue)) {
                            var t = this.lastValue;
                            (this.lastValue = null),
                                (this.hasValue = !1),
                                this.destination.next(t);
                        }
                    }),
                    (e.prototype.clearDebounce = function () {
                        var t = this.debouncedSubscription;
                        null !== t &&
                            (this.remove(t),
                            t.unsubscribe(),
                            (this.debouncedSubscription = null));
                    }),
                    e
                );
            })(y);
        function ct(t) {
            t.debouncedNext();
        }
        function at() {}
        function ht(t, e, r) {
            return function (n) {
                return n.lift(new pt(t, e, r));
            };
        }
        var pt = (function () {
                function t(t, e, r) {
                    (this.nextOrObserver = t),
                        (this.error = e),
                        (this.complete = r);
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(
                            new ft(
                                t,
                                this.nextOrObserver,
                                this.error,
                                this.complete,
                            ),
                        );
                    }),
                    t
                );
            })(),
            ft = (function (t) {
                function e(e, r, n, i) {
                    var s = t.call(this, e) || this;
                    return (
                        (s._tapNext = at),
                        (s._tapError = at),
                        (s._tapComplete = at),
                        (s._tapError = n || at),
                        (s._tapComplete = i || at),
                        o(r)
                            ? ((s._context = s), (s._tapNext = r))
                            : r &&
                              ((s._context = r),
                              (s._tapNext = r.next || at),
                              (s._tapError = r.error || at),
                              (s._tapComplete = r.complete || at)),
                        s
                    );
                }
                return (
                    i(e, t),
                    (e.prototype._next = function (t) {
                        try {
                            this._tapNext.call(this._context, t);
                        } catch (t) {
                            return void this.destination.error(t);
                        }
                        this.destination.next(t);
                    }),
                    (e.prototype._error = function (t) {
                        try {
                            this._tapError.call(this._context, t);
                        } catch (t) {
                            return void this.destination.error(t);
                        }
                        this.destination.error(t);
                    }),
                    (e.prototype._complete = function () {
                        try {
                            this._tapComplete.call(this._context);
                        } catch (t) {
                            return void this.destination.error(t);
                        }
                        return this.destination.complete();
                    }),
                    e
                );
            })(y);
        var lt = (function () {
                function t(t, e) {
                    (this.predicate = t), (this.thisArg = e);
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(
                            new dt(t, this.predicate, this.thisArg),
                        );
                    }),
                    t
                );
            })(),
            dt = (function (t) {
                function e(e, r, n) {
                    var i = t.call(this, e) || this;
                    return (i.predicate = r), (i.thisArg = n), (i.count = 0), i;
                }
                return (
                    i(e, t),
                    (e.prototype._next = function (t) {
                        var e;
                        try {
                            e = this.predicate.call(
                                this.thisArg,
                                t,
                                this.count++,
                            );
                        } catch (t) {
                            return void this.destination.error(t);
                        }
                        e && this.destination.next(t);
                    }),
                    e
                );
            })(y);
        var bt = (function () {
                function t(t, e) {
                    (this.compare = t), (this.keySelector = e);
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(
                            new yt(t, this.compare, this.keySelector),
                        );
                    }),
                    t
                );
            })(),
            yt = (function (t) {
                function e(e, r, n) {
                    var i = t.call(this, e) || this;
                    return (
                        (i.keySelector = n),
                        (i.hasKey = !1),
                        'function' == typeof r && (i.compare = r),
                        i
                    );
                }
                return (
                    i(e, t),
                    (e.prototype.compare = function (t, e) {
                        return t === e;
                    }),
                    (e.prototype._next = function (t) {
                        var e;
                        try {
                            var r = this.keySelector;
                            e = r ? r(t) : t;
                        } catch (t) {
                            return this.destination.error(t);
                        }
                        var n = !1;
                        if (this.hasKey)
                            try {
                                n = (0, this.compare)(this.key, e);
                            } catch (t) {
                                return this.destination.error(t);
                            }
                        else this.hasKey = !0;
                        n || ((this.key = e), this.destination.next(t));
                    }),
                    e
                );
            })(y);
        var vt = (function () {
                function t(t) {
                    this.project = t;
                }
                return (
                    (t.prototype.call = function (t, e) {
                        return e.subscribe(new wt(t, this.project));
                    }),
                    t
                );
            })(),
            wt = (function (t) {
                function e(e, r) {
                    var n = t.call(this, e) || this;
                    return (n.project = r), (n.index = 0), n;
                }
                return (
                    i(e, t),
                    (e.prototype._next = function (t) {
                        var e,
                            r = this.index++;
                        try {
                            e = this.project(t, r);
                        } catch (t) {
                            return void this.destination.error(t);
                        }
                        this._innerSub(e, t, r);
                    }),
                    (e.prototype._innerSub = function (t, e, r) {
                        var n = this.innerSubscription;
                        n && n.unsubscribe();
                        var i = new W(this, e, r),
                            o = this.destination;
                        o.add(i),
                            (this.innerSubscription = z(
                                this,
                                t,
                                void 0,
                                void 0,
                                i,
                            )),
                            this.innerSubscription !== i &&
                                o.add(this.innerSubscription);
                    }),
                    (e.prototype._complete = function () {
                        var e = this.innerSubscription;
                        (e && !e.closed) || t.prototype._complete.call(this),
                            this.unsubscribe();
                    }),
                    (e.prototype._unsubscribe = function () {
                        this.innerSubscription = null;
                    }),
                    (e.prototype.notifyComplete = function (e) {
                        this.destination.remove(e),
                            (this.innerSubscription = null),
                            this.isStopped && t.prototype._complete.call(this);
                    }),
                    (e.prototype.notifyNext = function (t, e, r, n, i) {
                        this.destination.next(e);
                    }),
                    e
                );
            })(K);
        const mt = document.getElementById('suggestions'),
            _t = (function t(e, r, n, i) {
                return (
                    o(n) && ((i = n), (n = void 0)),
                    i
                        ? t(e, r, n).pipe(
                              I(function (t) {
                                  return h(t) ? i.apply(void 0, t) : i(t);
                              }),
                          )
                        : new x(function (t) {
                              !(function t(e, r, n, i, o) {
                                  var s;
                                  if (
                                      (function (t) {
                                          return (
                                              t &&
                                              'function' ==
                                                  typeof t.addEventListener &&
                                              'function' ==
                                                  typeof t.removeEventListener
                                          );
                                      })(e)
                                  ) {
                                      var u = e;
                                      e.addEventListener(r, n, o),
                                          (s = function () {
                                              return u.removeEventListener(
                                                  r,
                                                  n,
                                                  o,
                                              );
                                          });
                                  } else if (
                                      (function (t) {
                                          return (
                                              t &&
                                              'function' == typeof t.on &&
                                              'function' == typeof t.off
                                          );
                                      })(e)
                                  ) {
                                      var c = e;
                                      e.on(r, n),
                                          (s = function () {
                                              return c.off(r, n);
                                          });
                                  } else if (
                                      (function (t) {
                                          return (
                                              t &&
                                              'function' ==
                                                  typeof t.addListener &&
                                              'function' ==
                                                  typeof t.removeListener
                                          );
                                      })(e)
                                  ) {
                                      var a = e;
                                      e.addListener(r, n),
                                          (s = function () {
                                              return a.removeListener(r, n);
                                          });
                                  } else {
                                      if (!e || !e.length)
                                          throw new TypeError(
                                              'Invalid event target',
                                          );
                                      for (var h = 0, p = e.length; h < p; h++)
                                          t(e[h], r, n, i, o);
                                  }
                                  i.add(s);
                              })(
                                  e,
                                  r,
                                  function (e) {
                                      arguments.length > 1
                                          ? t.next(
                                                Array.prototype.slice.call(
                                                    arguments,
                                                ),
                                            )
                                          : t.next(e);
                                  },
                                  t,
                                  n,
                              );
                          })
                );
            })(document.getElementById('search'), 'keyup').pipe(
                ((Tt = 200),
                void 0 === Ot && (Ot = ot),
                function (t) {
                    return t.lift(new st(Tt, Ot));
                }),
                ht(() => {
                    mt.innerHTML = '<li>Filter for a repository</li>';
                }),
                I((t) => t.target.value),
                ((St = (t) => t),
                function (t) {
                    return t.lift(new lt(St, Et));
                }),
                function (t) {
                    return t.lift(new bt(xt, gt));
                },
                (function t(e, r) {
                    return 'function' == typeof r
                        ? function (n) {
                              return n.pipe(
                                  t(function (t, n) {
                                      return H(e(t, n)).pipe(
                                          I(function (e, i) {
                                              return r(t, e, n, i);
                                          }),
                                      );
                                  }),
                              );
                          }
                        : function (t) {
                              return t.lift(new vt(e));
                          };
                })((t) =>
                    J('https://api.github.com/search/repositories?q=' + t).pipe(
                        I((t) => t.response.items),
                        (function t(e, r, n) {
                            return (
                                void 0 === n && (n = Number.POSITIVE_INFINITY),
                                'function' == typeof r
                                    ? function (i) {
                                          return i.pipe(
                                              t(function (t, n) {
                                                  return H(e(t, n)).pipe(
                                                      I(function (e, i) {
                                                          return r(t, e, n, i);
                                                      }),
                                                  );
                                              }, n),
                                          );
                                      }
                                    : ('number' == typeof r && (n = r),
                                      function (t) {
                                          return t.lift(new $(e, n));
                                      })
                            );
                        })((t = []) =>
                            H(t).pipe(
                                (function () {
                                    for (
                                        var t = [], e = 0;
                                        e < arguments.length;
                                        e++
                                    )
                                        t[e] = arguments[e];
                                    var r = t.length;
                                    if (0 === r)
                                        throw new Error(
                                            'list of properties cannot be empty.',
                                        );
                                    return function (e) {
                                        return I(Z(t, r))(e);
                                    };
                                })('name'),
                            ),
                        ),
                        tt(_t),
                    ),
                ),
                ht((t) => {
                    const e = `\n            <li>\n                <span class='name'>${t}</span>\n            </li> \n        `;
                    mt.innerHTML += e;
                }),
                tt(_t),
            );
        var xt, gt, St, Et, Tt, Ot;
        _t.subscribe();
    },
]);
