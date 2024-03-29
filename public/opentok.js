/*
  OpenTok JavaScript Library v2.2.4.1
 http://www.tokbox.com/

 Copyright (c) 2013 TokBox, Inc.

 Date: March 27 05:49:25 2014
  Common JS Helpers on OpenTok 0.2.0 da024f2 master
 http://www.tokbox.com/

 Copyright (c) 2014 TokBox, Inc.

 Date: March 17 02:18:55 2014

*/
(function (c) {
    c.OT || (c.OT = {});
    OT.properties = {
        version: "v2.2.4.1",
        build: "e42c038",
        debug: "false",
        websiteURL: "http://www.tokbox.com",
        cdnURL: "http://static.opentok.com",
        loggingURL: "http://hlg.tokbox.com/prod",
        apiURL: "http://anvil.opentok.com",
        messagingProtocol: "wss",
        messagingPort: 443,
        supportSSL: "true",
        cdnURLSSL: "https://static.opentok.com",
        loggingURLSSL: "https://hlg.tokbox.com/prod",
        apiURLSSL: "https://anvil.opentok.com",
        minimumVersion: {
            firefox: parseFloat("26"),
            chrome: parseFloat("32")
        }
    }
})(window);
! function (c, a) {
    var e = function (a) {
            return document.getElementById(a)
        },
        h = c.OTHelpers;
    c.OTHelpers = e;
    e.keys = Object.keys || function (a) {
        var d = [],
            b = Object.prototype.hasOwnProperty,
            f;
        for (f in a) b.call(a, f) && d.push(f);
        return d
    };
    var d = Array.prototype.forEach || function (a, d) {
        for (var b = 0, f = this.length || 0; b < f; ++b) b in this && a.call(d, this[b], b)
    };
    e.forEach = function (a, b) {
        return d.call(a, b)
    };
    var b = Array.prototype.map || function (a, b) {
        var f = [];
        d.call(this, function (d, g) {
            f.push(a.call(b, d, g))
        });
        return f
    };
    e.map = function (a,
        d) {
        return b.call(a, d)
    };
    var l = Array.prototype.filter || function (a, b) {
        var f = [];
        d.call(this, function (d, g) {
            a.call(b, d, g) && f.push(d)
        });
        return f
    };
    e.filter = function (a, d, b) {
        return l.call(a, d, b)
    };
    var g = Array.prototype.some || function (a, d) {
        for (var b = !1, f = 0, g = this.length || 0; f < g; ++f)
            if (f in this && a.call(d, this[f], f)) {
                b = !0;
                break
            }
        return b
    };
    e.some = function (a, d, b) {
        return g.call(a, d, b)
    };
    var f = Array.prototype.indexOf || function (a, d) {
        var b;
        b = d ? d : 0;
        var f;
        if (!this) throw new TypeError;
        f = this.length;
        if (0 === f || b >= f) return -1;
        for (0 > b && (b = f - Math.abs(b)); b < f; b++)
            if (this[b] === a) return b;
        return -1
    };
    e.arrayIndexOf = function (a, b, d) {
        return f.call(a, b, d)
    };
    var k = Function.prototype.bind || function () {
        var a = Array.prototype.slice.call(arguments),
            b = a.shift(),
            d = this;
        return function () {
            return d.apply(b, a.concat(Array.prototype.slice.call(arguments)))
        }
    };
    e.bind = function () {
        var a = Array.prototype.slice.call(arguments),
            b = a.shift();
        return k.apply(b, a)
    };
    var n = String.prototype.trim || function () {
        return this.replace(/^\s+|\s+$/g, "")
    };
    e.trim = function (a) {
        return n.call(a)
    };
    e.noConflict = function () {
        e.noConflict = function () {
            return e
        };
        c.OTHelpers = h;
        return e
    };
    e.isNone = function (b) {
        return b === a || null === b
    };
    e.isObject = function (a) {
        return a === Object(a)
    };
    e.isFunction = function (a) {
        return !!a && (-1 !== a.toString().indexOf("()") || "[object Function]" === Object.prototype.toString.call(a))
    };
    e.isArray = e.isFunction(Array.isArray) && Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    };
    e.isEmpty = function (b) {
        if (null === b || b === a) return !0;
        if (e.isArray(b) || "string" ===
            typeof b) return 0 === b.length;
        for (var d in b)
            if (b.hasOwnProperty(d)) return !1;
        return !0
    };
    e.extend = function () {
        var a = Array.prototype.slice.call(arguments),
            b = a.shift();
        e.forEach(a, function (a) {
            for (var d in a) b[d] = a[d]
        });
        return b
    };
    e.defaults = function () {
        var a = Array.prototype.slice.call(arguments),
            b = a.shift();
        e.forEach(a, function (a) {
            for (var d in a) void 0 === b[d] && (b[d] = a[d])
        });
        return b
    };
    e.clone = function (a) {
        return !e.isObject(a) ? a : e.isArray(a) ? a.slice() : e.extend({}, a)
    };
    e.noop = function () {};
    e.supportsWebSockets =
        function () {
            return "WebSocket" in c
    };
    e.now = function () {
        var a = c.performance || {},
            b, d = a.now || a.mozNow || a.msNow || a.oNow || a.webkitNow;
        return d ? (d = e.bind(d, a), b = a.timing.navigationStart, function () {
            return b + d()
        }) : function () {
            return (new Date).getTime()
        }
    }();
    var m = function () {
        var a = c.navigator.userAgent.toLowerCase(),
            b = c.navigator.appName,
            d, f = "unknown",
            g = -1;
        if (-1 < a.indexOf("opera") || -1 < a.indexOf("opr")) f = "Opera", null !== /opr\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (g = parseFloat(RegExp.$1));
        else if (-1 < a.indexOf("firefox")) f =
            "Firefox", null !== /firefox\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (g = parseFloat(RegExp.$1));
        else if ("Microsoft Internet Explorer" === b) f = "IE", null !== /msie ([0-9]{1,}[\.0-9]{0,})/.exec(a) && (g = parseFloat(RegExp.$1));
        else if ("Netscape" === b && -1 < a.indexOf("trident")) f = "IE", null !== /trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(a) && (g = parseFloat(RegExp.$1));
        else if (-1 < a.indexOf("chrome")) f = "Chrome", null !== /chrome\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (g = parseFloat(RegExp.$1));
        else if ((d = c.navigator.vendor) && -1 < d.toLowerCase().indexOf("apple")) f =
            "Safari", null !== /version\/([0-9]{1,}[\.0-9]{0,})/.exec(a) && (g = parseFloat(RegExp.$1));
        return {
            browser: f,
            version: g
        }
    }();
    e.browser = function () {
        return m.browser
    };
    e.browserVersion = function () {
        return m
    };
    e.canDefineProperty = !0;
    try {
        Object.defineProperty({}, "x", {})
    } catch (q) {
        e.canDefineProperty = !1
    }
    e.defineGetters = function (a, b, d) {
        var f = {};
        void 0 === d && (d = !1);
        for (var g in b) f[g] = {
            get: b[g],
            enumerable: d
        };
        Object.defineProperties(a, f)
    };
    var r = function (a, b, d) {
        return b && !d ? function () {
            return b.call(a)
        } : b && d ? function (f) {
            void 0 !==
                f && d.call(a, f);
            return b.call(a)
        } : function (b) {
            void 0 !== b && d.call(a, b)
        }
    };
    e.defineProperties = function (a, b) {
        for (var d in b) a[d] = r(a, b[d].get, b[d].set)
    };
    Object.create || (Object.create = function (a) {
        function b() {}
        if (1 < arguments.length) throw Error("Object.create implementation only accepts the first parameter.");
        b.prototype = a;
        return new b
    });
    e.setCookie = function (a, b) {
        try {
            localStorage.setItem(a, b)
        } catch (d) {
            var f = new Date;
            f.setTime(f.getTime() + 31536E6);
            f = "; expires\x3d" + f.toGMTString();
            document.cookie = a + "\x3d" +
                b + f + "; path\x3d/"
        }
    };
    e.getCookie = function (a) {
        var b;
        try {
            return b = localStorage.getItem("opentok_client_id")
        } catch (d) {
            a += "\x3d";
            for (var f = document.cookie.split(";"), g = 0; g < f.length; g++) {
                for (var k = f[g];
                    " " === k.charAt(0);) k = k.substring(1, k.length);
                0 === k.indexOf(a) && (b = k.substring(a.length, k.length))
            }
            if (b) return b
        }
        return null
    };
    e.invert = function (a) {
        var b = {},
            d;
        for (d in a) a.hasOwnProperty(d) && (b[a[d]] = d);
        return b
    };
    var s = {
        escape: {
            "\x26": "\x26amp;",
            "\x3c": "\x26lt;",
            "\x3e": "\x26gt;",
            '"': "\x26quot;",
            "'": "\x26#x27;",
            "/": "\x26#x2F;"
        }
    };
    s.unescape = e.invert(s.escape);
    var p = {
        escape: RegExp("[" + e.keys(s.escape).join("") + "]", "g"),
        unescape: RegExp("(" + e.keys(s.unescape).join("|") + ")", "g")
    };
    e.forEach(["escape", "unescape"], function (b) {
        e[b] = function (d) {
            return null === d || d === a ? "" : ("" + d).replace(p[b], function (a) {
                return s[b][a]
            })
        }
    });
    e.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var u = /(.)^/,
        v = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        t = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    e.template = function (a, b, d) {
        var f;
        d = e.defaults({}, d, e.templateSettings);
        var g = RegExp([(d.escape || u).source, (d.interpolate || u).source, (d.evaluate || u).source].join("|") + "|$", "g"),
            k = 0,
            c = "__p+\x3d'";
        a.replace(g, function (b, d, f, g, m) {
            c += a.slice(k, m).replace(t, function (a) {
                return "\\" + v[a]
            });
            d && (c += "'+\n((__t\x3d(" + d + "))\x3d\x3dnull?'':OTHelpers.escape(__t))+\n'");
            f && (c += "'+\n((__t\x3d(" + f + "))\x3d\x3dnull?'':__t)+\n'");
            g && (c += "';\n" + g + "\n__p+\x3d'");
            k = m + b.length;
            return b
        });
        c +=
            "';\n";
        d.variable || (c = "with(obj||{}){\n" + c + "}\n");
        c = "var __t,__p\x3d'',__j\x3dArray.prototype.join,print\x3dfunction(){__p+\x3d__j.call(arguments,'');};\n" + c + "return __p;\n";
        try {
            f = new Function(d.variable || "obj", c)
        } catch (m) {
            throw m.source = c, m;
        }
        if (b) return f(b);
        b = function (a) {
            return f.call(this, a)
        };
        b.source = "function(" + (d.variable || "obj") + "){\n" + c + "}";
        return b
    }
}(window);
(function (c, a, e) {
    a.statable = function (c, d, b, l, g) {
        var f, k = b;
        c.is = function () {
            return -1 !== a.arrayIndexOf(arguments, k)
        };
        c.isNot = function () {
            return -1 === a.arrayIndexOf(arguments, k)
        };
        Object.defineProperties(c, {
            state: {
                get: function () {
                    return k
                }
            },
            previousState: {
                get: function () {
                    return f
                }
            }
        });
        return function (b) {
            k !== b && (-1 === a.arrayIndexOf(d, b) ? g && a.isFunction(g) && g("invalidState", b) : (f = k, k = b, l && a.isFunction(l) && l(b, f)))
        }
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    function h(a, b) {
        var d = b || 0,
            f = n;
        return f[a[d++]] + f[a[d++]] + f[a[d++]] + f[a[d++]] + "-" + f[a[d++]] + f[a[d++]] + "-" + f[a[d++]] + f[a[d++]] + "-" + f[a[d++]] + f[a[d++]] + "-" + f[a[d++]] + f[a[d++]] + f[a[d++]] + f[a[d++]] + f[a[d++]] + f[a[d++]]
    }

    function d(a, b, d) {
        d = b && d || 0;
        "string" == typeof a && (b = "binary" == a ? new k(16) : null, a = null);
        a = a || {};
        a = a.random || (a.rng || f)();
        a[6] = a[6] & 15 | 64;
        a[8] = a[8] & 63 | 128;
        if (b)
            for (var g = 0; 16 > g; g++) b[d + g] = a[g];
        return b || h(a)
    }
    var b, l = Array(16);
    e = function () {
        for (var a, b = 0, b = 0; 16 > b; b++) 0 === (b &
            3) && (a = 4294967296 * Math.random()), l[b] = a >>> ((b & 3) << 3) & 255;
        return l
    };
    if (c.crypto && crypto.getRandomValues) {
        var g = new Uint32Array(4);
        b = function () {
            crypto.getRandomValues(g);
            for (var a = 0; 16 > a; a++) l[a] = g[a >> 2] >>> 8 * (a & 3) & 255;
            return l
        }
    }
    var f = b || e,
        k = "function" == typeof Buffer ? Buffer : Array,
        n = [],
        m = {};
    for (c = 0; 256 > c; c++) n[c] = (c + 256).toString(16).substr(1), m[n[c]] = c;
    d.v4 = d;
    d.parse = function (a, b, d) {
        var f = b && d || 0,
            g = 0;
        b = b || [];
        for (a.toLowerCase().replace(/[0-9a-f]{2}/g, function (a) {
            16 > g && (b[f + g++] = m[a])
        }); 16 > g;) b[f + g++] =
            0;
        return b
    };
    d.unparse = h;
    d.BufferClass = k;
    d.mathRNG = e;
    d.whatwgRNG = b;
    a.uuid = d
})(window, window.OTHelpers);
(function (c, a, e) {
    a.useLogHelpers = function (h) {
        function d(a, d, f) {
            return function () {
                if (h.shouldLog(d)) {
                    var l = c.console,
                        p = e(arguments);
                    if (l && l[a])
                        if (l[a].apply || Function.prototype.bind) l[a].apply || (l[a] = Function.prototype.bind.call(l[a], l)), l[a].apply(l, p);
                        else l[a](p);
                    else if (f) {
                        f.apply(h, p);
                        return
                    }
                    if (l = e(arguments)) l = g(l), 2 >= l.length || k.push([a, b(), l])
                }
            }
        }

        function b() {
            var a = new Date;
            return a.toLocaleTimeString() + a.getMilliseconds()
        }

        function l(a) {
            try {
                return JSON.stringify(a)
            } catch (b) {
                return a.toString()
            }
        }

        function g(b) {
            var d = [];
            if ("undefined" !== typeof b)
                if (null === b) d.push("NULL");
                else if (a.isArray(b))
                for (var f = 0; f < b.length; ++f) d.push(l(b[f]));
            else if (a.isObject(b))
                for (f in b) {
                    var g;
                    a.isFunction(b[f]) ? b.hasOwnProperty(f) && (g = "function " + f + "()") : g = l(b[f]);
                    d.push(f + ": " + g)
                } else if (a.isFunction(b)) try {
                    d.push(b.toString())
                } catch (k) {
                    d.push("function()")
                } else d.push(b.toString());
            return d.join(", ")
        }
        h.DEBUG = 5;
        h.LOG = 4;
        h.INFO = 3;
        h.WARN = 2;
        h.ERROR = 1;
        h.NONE = 0;
        var f = h.NONE,
            k = [],
            e = function (a) {
                return a
            };
        "IE" === a.browser() &&
            (e = function (a) {
            return [g(Array.prototype.slice.apply(a))]
        });
        h.log = d("log", h.LOG);
        h.debug = d("debug", h.DEBUG, h.log);
        h.info = d("info", h.INFO, h.log);
        h.warn = d("warn", h.WARN, h.log);
        h.error = d("error", h.ERROR, h.log);
        h.setLogLevel = function (a) {
            f = "number" === typeof a ? a : 0;
            h.debug("OT.setLogLevel(" + f + ")");
            return f
        };
        h.getLogs = function () {
            return k
        };
        h.shouldLog = function (a) {
            return f >= a
        }
    };
    a.useLogHelpers(a);
    a.setLogLevel(a.ERROR)
})(window, window.OTHelpers);
(function (c, a, e) {
    a.castToBoolean = function (a, d) {
        return a === e ? d : "true" === a || !0 === a
    };
    a.roundFloat = function (a, d) {
        return Number(a.toFixed(d))
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    var h = [],
        d = "OTHelpers." + a.uuid.v4() + ".zero-timeout";
    e = function (b) {
        b.data === d && (a.isFunction(b.stopPropagation) && b.stopPropagation(), b.cancelBubble = !0, 0 < h.length && (b = h.shift(), b.shift().apply(null, b)))
    };
    c.addEventListener ? c.addEventListener("message", e, !0) : c.attachEvent && c.attachEvent("onmessage", e);
    a.callAsync = function () {
        h.push(Array.prototype.slice.call(arguments));
        c.postMessage(d, "*")
    };
    a.createAsyncHandler = function (b) {
        return function () {
            var d = Array.prototype.slice.call(arguments);
            a.callAsync(function () {
                b.apply(null, d)
            })
        }
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    a.eventing = function (c, d) {
        function b(b, d, f) {
            var c = g[b];
            if (c && 0 !== c.length) {
                var k = c.length;
                a.forEach(c, function (c) {
                    function l(a) {
                        return a.context === c.context && a.handler === c.handler
                    }
                    a.callAsync(function () {
                        try {
                            g[b] && a.some(g[b], l) && (c.closure || c.handler).apply(c.context || null, d)
                        } finally {
                            k--, 0 === k && f && f.apply(null, d.slice())
                        }
                    })
                })
            }
        }

        function l(b, d) {
            var f = g[b];
            f && 0 !== f.length && a.forEach(f, function (a) {
                (a.closure || a.handler).apply(a.context || null, d)
            })
        }
        var g = {},
            f = !0 === d ? l : b,
            k = function (b, d) {
                g[b] &&
                    (d ? g[b] = a.filter(g[b], function (a) {
                    return a.context !== d
                }) : delete g[b])
            },
            e = a.bind(function (b, d, f, c) {
                var k = {
                    handler: d
                };
                f && (k.context = f);
                c && (k.closure = c);
                a.forEach(b, function (a) {
                    g[a] || (g[a] = []);
                    g[a].push(k)
                })
            }, c),
            m = function (b, d, f) {
                function k(a) {
                    return !(a.handler === d && a.context === f)
                }
                a.forEach(b, a.bind(function (b) {
                    g[b] && (g[b] = a.filter(g[b], k), 0 === g[b].length && delete g[b])
                }, c))
            };
        c.dispatchEvent = function (b, d) {
            if (!b.type) throw a.error("OTHelpers.Eventing.dispatchEvent: Event has no type"), a.error(b), Error("OTHelpers.Eventing.dispatchEvent: Event has no type");
            b.target || (b.target = this);
            if (!g[b.type] || 0 === g[b.type].length) {
                var c = [b];
                d && d.apply(null, c.slice())
            } else return f(b.type, [b], d), this
        };
        c.trigger = function (a) {
            if (g[a] && 0 !== g[a].length) {
                var b = Array.prototype.slice.call(arguments);
                b.shift();
                f(a, b);
                return this
            }
        };
        c.on = function (a, b, d) {
            if ("string" === typeof a && b) e(a.split(" "), b, d);
            else
                for (var f in a) a.hasOwnProperty(f) && e([f], a[f], b);
            return this
        };
        c.off = function (b, d, f) {
            if ("string" === typeof b) d && a.isFunction(d) ? m(b.split(" "), d, f) : a.forEach(b.split(" "), function (a) {
                k(a,
                    d)
            }, this);
            else if (b)
                for (var c in b) b.hasOwnProperty(c) && m([c], b[c], d);
            else g = {};
            return this
        };
        c.once = function (b, d, f) {
            var g = b.split(" ");
            b = a.bind(function () {
                var a = d.apply(f || null, arguments);
                m(g, d, f);
                return a
            }, this);
            e(g, d, f, b);
            return this
        };
        c.addEventListener = function (b, d, f) {
            a.warn("The addEventListener() method is deprecated. Use on() or once() instead.");
            e([b], d, f)
        };
        c.removeEventListener = function (b, d, f) {
            a.warn("The removeEventListener() method is deprecated. Use off() instead.");
            m([b], d, f)
        };
        return c
    };
    a.eventing.Event = function () {
        return function (c, d) {
            this.type = c;
            this.cancelable = d !== e ? d : !0;
            var b = !1;
            this.preventDefault = function () {
                this.cancelable ? b = !0 : a.warn("Event.preventDefault :: Trying to preventDefault on an Event that isn't cancelable")
            };
            this.isDefaultPrevented = function () {
                return b
            }
        }
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    function h(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    }
    a.supportsClassList = function () {
        var d = typeof ("undefined" !== document) && "classList" in document.createElement("a");
        a.supportsClassList = function () {
            return d
        };
        return d
    };
    a.removeElement = function (a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    a.removeElementById = function (d) {
        this.removeElement(a(d))
    };
    a.removeElementsByType = function (a, b) {
        if (a)
            for (var c = a.getElementsByTagName(b); c.length;) a.removeChild(c[0])
    };
    a.emptyElement =
        function (a) {
            for (; a.firstChild;) a.removeChild(a.firstChild);
            return a
    };
    a.createElement = function (a, b, c) {
        a = document.createElement(a);
        if (b)
            for (var g in b)
                if ("object" === typeof b[g]) {
                    a[g] || (a[g] = {});
                    var f = b[g],
                        k;
                    for (k in f) a[g][k] = f[k]
                } else "className" === g ? a.className = b[g] : a.setAttribute(g, b[g]);
        c && (a.innerHTML = c);
        return a
    };
    a.createButton = function (d, b, c) {
        d = a.createElement("button", b, d);
        if (c) {
            for (var g in c)
                if (c.hasOwnProperty(g)) a.on(d, g, c[g]);
            d._boundEvents = c
        }
        return d
    };
    a.on = function (a, b, c) {
        if (a.addEventListener) a.addEventListener(b,
            c, !1);
        else if (a.attachEvent) a.attachEvent("on" + b, c);
        else {
            var g = a["on" + b];
            a["on" + b] = function () {
                c.apply(this, arguments);
                g && g.apply(this, arguments)
            }
        }
    };
    a.off = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    };
    a.isDisplayNone = function (d) {
        return (0 === d.offsetWidth || 0 === d.offsetHeight) && "none" === a.css(d, "display") ? !0 : d.parentNode && d.parentNode.style ? a.isDisplayNone(d.parentNode) : !1
    };
    a.findElementWithDisplayNone = function (d) {
        return (0 === d.offsetWidth ||
            0 === d.offsetHeight) && "none" === a.css(d, "display") ? d : d.parentNode && d.parentNode.style ? a.findElementWithDisplayNone(d.parentNode) : null
    };
    a.observeStyleChanges = function (d, b, c) {
        var g = {},
            f = function (b) {
                switch (b) {
                case "width":
                    return a.width(d);
                case "height":
                    return a.height(d);
                default:
                    return a.css(d)
                }
            };
        a.forEach(b, function (a) {
            g[a] = f(a)
        });
        var k = new MutationObserver(function (k) {
            var e = {};
            a.forEach(k, function (c) {
                if ("style" === c.attributeName) {
                    var k = a.isDisplayNone(d);
                    a.forEach(b, function (a) {
                        if (!k || !("width" == a ||
                            "height" == a)) {
                            var b = f(a);
                            b !== g[a] && (e[a] = [g[a], b], g[a] = b)
                        }
                    })
                }
            });
            h(e) && a.callAsync(function () {
                c.call(null, e)
            })
        });
        k.observe(d, {
            attributes: !0,
            attributeFilter: ["style"],
            childList: !1,
            characterData: !1,
            subtree: !1
        });
        return k
    };
    a.observeNodeOrChildNodeRemoval = function (d, b) {
        var c = new MutationObserver(function (d) {
            var f = [];
            a.forEach(d, function (a) {
                a.removedNodes.length && (f = f.concat(Array.prototype.slice.call(a.removedNodes)))
            });
            f.length && a.callAsync(function () {
                b(f)
            })
        });
        c.observe(d, {
            attributes: !1,
            childList: !0,
            characterData: !1,
            subtree: !0
        });
        return c
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    a.Modal = function (c, d) {
        this.el = a.createElement("section", {
            className: "OT_root OT_dialog OT_modal"
        }, a.template("        \x3cheader\x3e            \x3ch1\x3e\x3c%%\x3d title %\x3e\x3c/h1\x3e        \x3c/header\x3e        \x3cdiv class\x3d'OT_dialog-body'\x3e            \x3c%%\x3d body %\x3e        \x3c/div\x3e    ", {
            title: c,
            body: d
        }));
        this.el.style.display = "none";
        document.body.appendChild(this.el);
        a.centerElement(this.el);
        a.show(this.el);
        this.close = function () {
            a.removeElement(this.el);
            this.el = null;
            return this
        }
    };
    a.tbAlert = function (c, d) {
        var b = new a.Modal(c, "\x3cdiv\x3e" + d + "\x3c/div\x3e");
        a.addClass(b.el, "OT_tbalert");
        var e = a.createElement("input", {
            className: "OT_closeButton",
            type: "button",
            value: "close"
        });
        b.el.appendChild(e);
        e.onclick = function () {
            b && b.close();
            b = null
        }
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    a.addClass = function (d, b) {
        if (1 === d.nodeType) {
            var c = a.trim(b).split(/\s+/),
                g, f;
            if (a.supportsClassList()) {
                g = 0;
                for (f = c.length; g < f; ++g) d.classList.add(c[g])
            } else {
                if (!d.className && 1 === c.length) d.className = b;
                else {
                    var k = " " + d.className + " ";
                    g = 0;
                    for (f = c.length; g < f; ++g)~ k.indexOf(" " + c[g] + " ") || (k += c[g] + " ");
                    d.className = a.trim(k)
                }
                return this
            }
        }
    };
    a.removeClass = function (d, b) {
        if (b && 1 === d.nodeType) {
            var c = a.trim(b).split(/\s+/),
                g, f;
            if (a.supportsClassList()) {
                g = 0;
                for (f = c.length; g < f; ++g) d.classList.remove(c[g])
            } else {
                var k =
                    (" " + d.className + " ").replace(/[\s+]/, " ");
                g = 0;
                for (f = c.length; g < f; ++g) k = k.replace(" " + c[g] + " ", " ");
                d.className = a.trim(k);
                return this
            }
        }
    };
    var h = function (d) {
        return 0 < d.offsetHeight ? d.offsetHeight + "px" : a.css(d, "height")
    };
    a.width = function (d, b) {
        return b ? (a.css(d, "width", b), this) : a.isDisplayNone(d) ? a.makeVisibleAndYield(d, function () {
            return 0 < d.offsetWidth ? d.offsetWidth + "px" : a.css(d, "width")
        }) : 0 < d.offsetWidth ? d.offsetWidth + "px" : a.css(d, "width")
    };
    a.height = function (d, b) {
        return b ? (a.css(d, "height", b), this) :
            a.isDisplayNone(d) ? a.makeVisibleAndYield(d, function () {
                return h(d)
            }) : h(d)
    };
    a.centerElement = function (d, b, c) {
        b || (b = parseInt(a.width(d), 10));
        c || (c = parseInt(a.height(d), 10));
        a.css(d, "margin", -0.5 * c + "px 0 0 " + (-0.5 * b + "px"));
        a.addClass(d, "OT_centered")
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    var h = {},
        d = {};
    a.show = function (b) {
        var c = b.style.display;
        if ("" === c || "none" === c) b.style.display = h[b] || "", delete h[b];
        if ("none" === b.ownerDocument.defaultView.getComputedStyle(b, null).getPropertyValue("display")) {
            h[b] = "none";
            c = b.style;
            if (d[b.ownerDocument] && d[b.ownerDocument][b.nodeName]) b = d[b.ownerDocument][b.nodeName];
            else {
                d[b.ownerDocument] || (d[b.ownerDocument] = {});
                var g = b.ownerDocument.createElement(b.nodeName);
                b.ownerDocument.body.appendChild(g);
                b = d[b.ownerDocument][b.nodeName] = a.css(g,
                    "display");
                a.removeElement(g)
            }
            c.display = b
        }
        return this
    };
    a.hide = function (a) {
        if ("none" !== a.style.display) return h[a] = a.style.display, a.style.display = "none", this
    };
    a.css = function (a, d, c) {
        if ("string" !== typeof d) {
            a = a.style;
            for (var f in d) a[f] = d[f];
            return this
        }
        if (c !== e) return a.style[d] = c, this;
        d = d.replace(/([A-Z]|^ms)/g, "-$1").toLowerCase();
        f = a.ownerDocument.defaultView.getComputedStyle(a, null).getPropertyValue(d);
        "" === f && (f = a.style[d]);
        return f
    };
    a.applyCSS = function (b, d, c) {
        var f = {},
            k;
        for (k in d) d.hasOwnProperty(k) &&
            (f[k] = b.style[k], a.css(b, k, d[k]));
        c = c();
        for (k in d) d.hasOwnProperty(k) && a.css(b, k, f[k] || "");
        return c
    };
    a.makeVisibleAndYield = function (b, d) {
        var c = a.findElementWithDisplayNone(b);
        if (c) return a.applyCSS(c, {
            display: "block",
            visibility: "hidden"
        }, d)
    }
})(window, window.OTHelpers);
(function (c, a, e) {
    function h(a) {
        if ("string" === typeof a) return a;
        var b = [],
            c;
        for (c in a) b.push(encodeURIComponent(c) + "\x3d" + encodeURIComponent(a[c]));
        return b.join("\x26").replace(/\+/g, "%20")
    }
    a.getJSON = function (d, b, c) {
        b = b || {};
        var g = function (a, b) {
            if (a) c(a);
            else {
                var d;
                try {
                    d = JSON.parse(b.target.responseText)
                } catch (f) {
                    c(f);
                    return
                }
                c(null, d, b)
            }
        };
        if (b.xdomainrequest) a.xdomainRequest(d, {
            method: "GET"
        }, g);
        else {
            var f = a.extend({
                Accept: "application/json"
            }, b.headers || {});
            a.get(d, a.extend(b || {}, {
                headers: f
            }), g)
        }
    };
    a.xdomainRequest = function (a, b, c) {
        function g(a, b) {
            f.onload = f.onerror = f.ontimeout = function () {};
            f = void 0;
            c(a, b)
        }
        var f = new XDomainRequest,
            k = (b || {}).method;
        k ? (k = k.toUpperCase(), "GET" === k || "POST" === k ? (f.onload = function () {
            g(null, {
                target: {
                    responseText: f.responseText,
                    headers: {
                        "content-type": f.contentType
                    }
                }
            })
        }, f.onerror = function () {
            g(Error("XDomainRequest of " + a + " failed"))
        }, f.ontimeout = function () {
            g(Error("XDomainRequest of " + a + " timed out"))
        }, f.open(k, a), f.send(b.body && h(b.body))) : c(Error("HTTP method can only be "))) :
            c(Error("No HTTP method specified in options"))
    };
    a.request = function (a, b, c) {
        var g = new XMLHttpRequest,
            f = b || {};
        if (f.method) {
            c && (g.addEventListener("load", function (a) {
                var b = a.target.status;
                200 <= b && 300 > b || 304 === b ? c(null, a) : c(a)
            }, !1), g.addEventListener("error", c, !1));
            g.open(b.method, a, !0);
            f.headers || (f.headers = {});
            for (var k in f.headers) g.setRequestHeader(k, f.headers[k]);
            g.send(b.body && h(b.body))
        } else c(Error("No HTTP method specified in options"))
    };
    a.get = function (d, b, c) {
        b = a.extend(b || {}, {
            method: "GET"
        });
        a.request(d, b, c)
    };
    a.post = function (d, b, c) {
        b = a.extend(b || {}, {
            method: "POST"
        });
        b.xdomainrequest ? a.xdomainRequest(d, b, c) : a.request(d, b, c)
    }
})(window, window.OTHelpers);
! function (c) {
    c.OT || (c.OT = {});
    OT.$ = OTHelpers.noConflict();
    OT.$.eventing(OT);
    OT.Modal = OT.$.Modal;
    OT.$.useLogHelpers(OT);
    var a = !1,
        e = OT.setLogLevel;
    OT.setLogLevel = function (c) {
        OT.$.setLogLevel(c);
        c = e.call(OT, c);
        OT.shouldLog(OT.DEBUG) && !a && (OT.debug("OpenTok JavaScript library " + OT.properties.version), OT.debug("Release notes: " + OT.properties.websiteURL + "/opentok/webrtc/docs/js/release-notes.html"), OT.debug("Known issues: " + OT.properties.websiteURL + "/opentok/webrtc/docs/js/release-notes.html#knownIssues"),
            a = !0);
        OT.debug("OT.setLogLevel(" + c + ")");
        return c
    };
    OT.setLogLevel(OT.properties.debug ? OT.DEBUG : OT.ERROR)
}(window);
! function (c) {
    c.OT || (c.OT = {});
    if (!OT.properties) throw Error("OT.properties does not exist, please ensure that you include a valid properties file.");
    var a = OT,
        e = OT.properties,
        h = OT.$.clone(e);
    h.debug = "true" === e.debug || !0 === e.debug;
    h.supportSSL = "true" === e.supportSSL || !0 === e.supportSSL;
    h.supportSSL && (0 <= c.location.protocol.indexOf("https") || 0 <= c.location.protocol.indexOf("chrome-extension")) ? (h.assetURL = h.cdnURLSSL + "/webrtc/" + h.version, h.loggingURL = h.loggingURLSSL, h.apiURL = h.apiURLSSL) : h.assetURL = h.cdnURL +
        "/webrtc/" + h.version;
    h.configURL = h.assetURL + "/js/dynamic_config.min.js";
    h.cssURL = h.assetURL + "/css/ot.min.css";
    a.properties = h
}(window);
! function () {
    OT.Config = function () {
        var c = !1,
            a = {},
            e = {},
            h, d = document.head || document.getElementsByTagName("head")[0],
            b, l = function () {
                b && (clearTimeout(b), b = null);
                h && (h.onload = h.onreadystatechange = null, d && h.parentNode && d.removeChild(h), h = void 0)
            },
            g = function () {
                if (!h.readyState || /loaded|complete/.test(h.readyState)) b && (clearTimeout(b), b = null), c || f._onLoadTimeout()
            },
            f;
        f = {
            loadTimeout: 4E3,
            load: function (a) {
                if (!a) throw Error("You must pass a valid configUrl to Config.load");
                c = !1;
                setTimeout(function () {
                    h = document.createElement("script");
                    h.async = "async";
                    h.src = a;
                    h.onload = h.onreadystatechange = g.bind(this);
                    d.appendChild(h)
                }, 1);
                b = setTimeout(function () {
                    f._onLoadTimeout()
                }, this.loadTimeout)
            },
            _onLoadTimeout: function () {
                l();
                OT.warn("TB DynamicConfig failed to load in " + f.loadTimeout + " ms");
                this.trigger("dynamicConfigLoadFailed")
            },
            isLoaded: function () {
                return c
            },
            reset: function () {
                l();
                c = !1;
                a = {};
                e = {}
            },
            replaceWith: function (b) {
                l();
                b || (b = {});
                a = b.global || {};
                e = b.partners || {};
                c || (c = !0);
                this.trigger("dynamicConfigChanged")
            },
            get: function (b, d, f) {
                b = f && e[f] &&
                    e[f][b] ? e[f][b] : a[b];
                return b ? b[d] : null
            }
        };
        OT.$.eventing(f);
        return f
    }()
}(window);
! function () {
    function c(a, b, d, c, g) {
        b = b ? parseInt(b, 10) : parseInt(OT.$.width(a.parentNode), 10);
        d = d ? parseInt(d, 10) : parseInt(OT.$.height(a.parentNode), 10);
        if (!(0 === b || 0 === d))
            if (c || (c = e), d = (b + 0) / d, b = {
                width: "100%",
                height: "100%",
                left: 0,
                top: 0
            }, d > c ? (c = 100 * (d / c), b.height = c + "%", b.top = "-" + (c - 100) / 2 + "%") : d < c && (c = 100 * (c / d), b.width = c + "%", b.left = "-" + (c - 100) / 2 + "%"), OT.$.css(a, b), c = a.querySelector("video")) g ? (g = a.offsetWidth, a = a.offsetHeight, b = g - a, b = {
                    width: a + "px",
                    height: g + "px",
                    marginTop: -(b / 2) + "px",
                    marginLeft: b / 2 + "px"
                },
                OT.$.css(c, b)) : OT.$.css(c, {
                width: "",
                height: "",
                marginTop: "",
                marginLeft: ""
            })
    }

    function a(a, c, g) {
        c = parseInt(c, 10);
        g = parseInt(g, 10);
        c < b || g < l ? OT.$.addClass(a, "OT_micro") : OT.$.removeClass(a, "OT_micro");
        c < h || g < d ? OT.$.addClass(a, "OT_mini") : OT.$.removeClass(a, "OT_mini")
    }
    var e = 4 / 3,
        h = 128,
        d = 128,
        b = 64,
        l = 64,
        g = function (a, b) {
            var d, c;
            a && a.nodeName ? (d = a, (!d.getAttribute("id") || 0 === d.getAttribute("id").length) && d.setAttribute("id", "OT_" + OT.$.uuid()), c = d.getAttribute("id")) : (d = OT.$(a), c = a || "OT_" + OT.$.uuid());
            d ? null == b ||
                "replace" === b ? OT.$.emptyElement(d) : (c = document.createElement("div"), c.id = "OT_" + OT.$.uuid(), "append" === b ? (d.appendChild(c), d = c) : "before" === b ? (d.parentNode.insertBefore(c, d), d = c) : "after" === b && (d.parentNode.insertBefore(c, d.nextSibling), d = c)) : (d = OT.$.createElement("div", {
                    id: c
                }), d.style.backgroundColor = "#000000", document.body.appendChild(d));
            return d
        };
    OT.WidgetView = function (b, d) {
        var e = g(b, d && d.insertMode),
            h = document.createElement("div"),
            l, r, s, p, u, v, t = !0;
        d && (u = d.width, v = d.height, u && "number" === typeof u &&
            (u += "px"), v && "number" === typeof v && (v += "px"), e.style.width = u ? u : "264px", e.style.height = v ? v : "198px", e.style.overflow = "hidden", a(e, u || "264px", v || "198px"), (void 0 === d.mirror || d.mirror) && OT.$.addClass(e, "OT_mirrored"));
        d.classNames && OT.$.addClass(e, d.classNames);
        OT.$.addClass(e, "OT_loading");
        OT.$.addClass(h, "OT_video-container");
        h.style.width = e.style.width;
        h.style.height = e.style.height;
        e.appendChild(h);
        c(h, e.offsetWidth, e.offsetHeight);
        u = document.createElement("div");
        OT.$.addClass(u, "OT_video-loading");
        h.appendChild(u);
        p = document.createElement("div");
        OT.$.addClass(p, "OT_video-poster");
        h.appendChild(p);
        l = OT.$.observeStyleChanges(e, ["width", "height"], function (b) {
            var d = b.width ? b.width[1] : e.offsetWidth;
            b = b.height ? b.height[1] : e.offsetHeight;
            a(e, d, b);
            c(h, d, b, r ? r.aspectRatio : null)
        });
        s = OT.$.observeNodeOrChildNodeRemoval(e, function (a) {
            r && (a.some(function (a) {
                return a === h || "VIDEO" === a.nodeName
            }) && (r.destroy(), r = null), h && (OT.$.removeElement(h), h = null), l && (l.disconnect(), l = null), s && (s.disconnect(), s = null))
        });
        this.destroy = function () {
            l && (l.disconnect(), l = null);
            s && (s.disconnect(), s = null);
            r && (r.destroy(), r = null);
            e && (OT.$.removeElement(e), e = null)
        };
        Object.defineProperties(this, {
            showPoster: {
                get: function () {
                    return !OT.$.isDisplayNone(p)
                },
                set: function (a) {
                    a ? OT.$.show(p) : OT.$.hide(p)
                }
            },
            poster: {
                get: function () {
                    return OT.$.css(p, "backgroundImage")
                },
                set: function (a) {
                    OT.$.css(p, "backgroundImage", "url(" + a + ")")
                }
            },
            loading: {
                get: function () {
                    return t
                },
                set: function (a) {
                    (t = a) ? OT.$.addClass(e, "OT_loading") : OT.$.removeClass(e, "OT_loading")
                }
            },
            video: {
                get: function () {
                    return r
                },
                set: function (a) {
                    r && r.destroy();
                    a.appendTo(h);
                    r = a;
                    r.on({
                        orientationChanged: function () {
                            c(h, e.offsetWidth, e.offsetHeight, r.aspectRatio, r.isRotated)
                        }
                    });
                    if (r)
                        if (a = function () {
                            c(h, e.offsetWidth, e.offsetHeight, r ? r.aspectRatio : null, r ? r.isRotated : null)
                        }, isNaN(r.aspectRatio)) r.on("streamBound", a);
                        else a()
                }
            },
            domElement: {
                get: function () {
                    return e
                }
            },
            domId: {
                get: function () {
                    return e.getAttribute("id")
                }
            }
        });
        this.addError = function (a, b) {
            e.innerHTML = "\x3cp\x3e" + a + ' \x3cspan class\x3d"ot-help-message"\x3e' +
                b + "\x3c/span\x3e\x3c/p\x3e";
            OT.$.addClass(e, "OT_subscriber_error");
            e.querySelector("p").offsetHeight > e.offsetHeight && (e.querySelector("span").style.display = "none")
        }
    }
}(window);
! function (c) {
    var a, e, h, d, b, l, g;
    a = function () {
        if (navigator.getUserMedia) return navigator.getUserMedia.bind(navigator);
        if (navigator.mozGetUserMedia) return navigator.mozGetUserMedia.bind(navigator);
        if (navigator.webkitGetUserMedia) return navigator.webkitGetUserMedia.bind(navigator)
    }();
    navigator.webkitGetUserMedia ? (webkitMediaStream.prototype.getVideoTracks || (webkitMediaStream.prototype.getVideoTracks = function () {
        return this.videoTracks
    }), webkitMediaStream.prototype.getAudioTracks || (webkitMediaStream.prototype.getAudioTracks =
        function () {
            return this.audioTracks
        }), webkitRTCPeerConnection.prototype.getLocalStreams || (webkitRTCPeerConnection.prototype.getLocalStreams = function () {
        return this.localStreams
    }), webkitRTCPeerConnection.prototype.getRemoteStreams || (webkitRTCPeerConnection.prototype.getRemoteStreams = function () {
        return this.remoteStreams
    })) : navigator.mozGetUserMedia && (MediaStream.prototype.getVideoTracks || (MediaStream.prototype.getVideoTracks = function () {
        return []
    }), MediaStream.prototype.getAudioTracks || (MediaStream.prototype.getAudioTracks =
        function () {
            return []
        }));
    e = {
        PERMISSION_DENIED: "PermissionDeniedError",
        NOT_SUPPORTED_ERROR: "NotSupportedError",
        MANDATORY_UNSATISFIED_ERROR: " ConstraintNotSatisfiedError",
        NO_DEVICES_FOUND: "NoDevicesFoundError",
        HARDWARE_UNAVAILABLE: "HardwareUnavailableError"
    };
    h = {
        1: "PermissionDeniedError"
    };
    d = {
        PermissionDeniedError: "User denied permission for scripts from this origin to access the media device.",
        NotSupportedError: "A constraint specified is not supported by the browser.",
        ConstraintNotSatisfiedError: "One of the mandatory constraints could not be satisfied.",
        OverconstrainedError: "Due to changes in the environment, one or more mandatory constraints can no longer be satisfied.",
        NoDevicesFoundError: "No video or audio input devices are available on this machine.",
        HardwareUnavailableError: "The selected audio or video input devices are not available, possibly because they are in use by another application."
    };
    b = function (a, b) {
        var c = b[a],
            g = d[c];
        g || (g = null, c = a);
        return {
            name: c,
            message: g
        }
    };
    l = function (a) {
        var c;
        OT.$.isObject(a) && a.name ? c = {
            name: a.name,
            message: a.message ||
                d[a.name],
            constraintName: a.constraintName
        } : OT.$.isObject(a) ? (c = b(a.code, h), a.message && (c.message = a.message), a.constraintName && (c.constraintName = a.constraintName)) : c = a && e.hasOwnProperty(a) ? b(a, e) : {
            message: "Unknown Error while getting user media"
        };
        return c
    };
    g = function (a) {
        if (!a || !OT.$.isObject(a)) return !0;
        for (var b in a)
            if (a[b]) return !1;
        return !0
    };
    OT.$.supportsWebRTC = function () {
        var a = !1,
            b = OT.$.browserVersion(),
            d = (OT.properties.minimumVersion || {})[b.browser.toLowerCase()];
        if (d && d > b.version) OT.debug("Support for",
            b.browser, "is disabled because we require", d, "but this is", b.version), a = !1;
        else if (navigator.webkitGetUserMedia) a = "function" === typeof webkitRTCPeerConnection && !!webkitRTCPeerConnection.prototype.addStream;
        else if (navigator.mozGetUserMedia && "function" === typeof mozRTCPeerConnection && 20 < b.version) try {
            new mozRTCPeerConnection, a = !0
        } catch (c) {
            a = !1
        }
        OT.$.supportsWebRTC = function () {
            return a
        };
        return a
    };
    OT.$.supportedCryptoScheme = function () {
        if (!OT.$.supportsWebRTC()) return "NONE";
        var a = c.navigator.userAgent.toLowerCase().match(/chrome\/([0-9\.]+)/i);
        return a && 25 > parseFloat(a[1], 10) ? "SDES_SRTP" : "DTLS_SRTP"
    };
    OT.$.supportsBundle = function () {
        return OT.$.supportsWebRTC() && "Chrome" === OT.$.browser()
    };
    OT.$.supportsRtcpMux = function () {
        return OT.$.supportsWebRTC() && "Chrome" === OT.$.browser()
    };
    OT.$.getUserMedia = function (b, e, h, m, q, r, s) {
        var p = a;
        OT.$.isFunction(s) && (p = s);
        if (g(b)) OT.error("Couldn't get UserMedia: All constraints were false"), h.call(null, {
            name: "NO_VALID_CONSTRAINTS",
            message: "Video and Audio was disabled, you need to enabled at least one"
        });
        else {
            var u =
                null,
                v = !1;
            s = function () {
                u = null;
                v = !0;
                m && m()
            };
            var t = function (a) {
                    u && clearTimeout(u);
                    v && q && q();
                    e.call(null, a)
                },
                A = function (a) {
                    u && clearTimeout(u);
                    v && q && q();
                    var b = l(a);
                    "PermissionDeniedError" === b.name ? (a = c.MediaStreamTrack, null != a && OT.$.isFunction(a.getSources) ? c.MediaStreamTrack.getSources(function (a) {
                        0 < a.length ? r.call(null, b) : h.call(null, {
                            name: "NoDevicesFoundError",
                            message: d.NoDevicesFoundError
                        })
                    }) : r.call(null, b)) : h.call(null, b)
                };
            try {
                p(b, t, A)
            } catch (x) {
                OT.error("Couldn't get UserMedia: " + x.toString());
                A();
                return
            }
            u = -1 === location.protocol.indexOf("https") ? setTimeout(s, 100) : setTimeout(s, 500)
        }
    };
    OT.$.createPeerConnection = function (a, b) {
        return new(c.webkitRTCPeerConnection || c.mozRTCPeerConnection)(a, b)
    }
}(window);
! function (c) {
    function a(a, b) {
        var d = document.createElement("video");
        d.setAttribute("autoplay", "");
        d.innerHTML = a;
        if (b) {
            !0 === b.muted && (delete b.muted, d.muted = "true");
            for (var c in b) d.setAttribute(c, b[c])
        }
        return d
    }

    function e(a) {
        return d[parseInt(a, 10)] || "An unknown error occurred."
    }

    function h(a, b, d, h) {
        var n, m, q, r, s;
        navigator.mozGetUserMedia || 0 < b.getVideoTracks().length && b.getVideoTracks()[0].enabled ? (n = function () {
                clearTimeout(s);
                a.removeEventListener("loadedmetadata", m, !1);
                a.removeEventListener("error",
                    q, !1);
                b.onended = null
            }, m = function () {
                n();
                d()
            }, q = function (a) {
                n();
                h("There was an unexpected problem with the Video Stream: " + e(a.target.error.code))
            }, r = function () {
                n();
                h("Stream ended while trying to bind it to a video element.")
            }, s = setTimeout(function () {
                0 === a.currentTime ? h("The video stream failed to connect. Please notify the site owner if this continues to happen.") : (OT.warn("Never got the loadedmetadata event but currentTime \x3e 0"), d())
            }.bind(this), 3E4), a.addEventListener("loadedmetadata", m, !1),
            a.addEventListener("error", q, !1), b.onended = r) : d();
        void 0 !== a.srcObject ? a.srcObject = b : void 0 !== a.mozSrcObject ? a.mozSrcObject = b : a.src = c.URL.createObjectURL(b);
        a.play()
    }
    var d = {},
        b;
    b = {
        "0": "rotate(0deg)",
        270: "rotate(90deg)",
        90: "rotate(-90deg)",
        180: "rotate(180deg)"
    };
    OT.VideoOrientation = {
        ROTATED_NORMAL: 0,
        ROTATED_LEFT: 270,
        ROTATED_RIGHT: 90,
        ROTATED_UPSIDE_DOWN: 180
    };
    OT.VideoElement = function (b) {
        var d, f, k, n = !1,
            m = !1,
            q, r, s, p;
        b = OT.$.defaults(b || {}, {
            fallbackText: "Sorry, Web RTC is not available in your browser"
        });
        OT.$.eventing(this);
        q = function (a) {
            a = "There was an unexpected problem with the Video Stream: " + e(a.target.error.code);
            this.trigger("error", null, a, this, "VideoElement")
        }.bind(this);
        r = function () {
            n = !0;
            f.addEventListener("error", q, !1);
            this.trigger("streamBound", this)
        }.bind(this);
        s = function (a) {
            this.trigger("loadError", OT.ExceptionCodes.P2P_CONNECTION_FAILED, a, this, "VideoElement")
        }.bind(this);
        p = function () {
            m || (OT.warn("Video element paused, auto-resuming. If you intended to do this, use publishVideo(false) or subscribeToVideo(false) instead."),
                m = !0);
            f.play()
        };
        f = a(b.fallbackText, b.attributes);
        f.addEventListener("pause", p);
        Object.defineProperties(this, {
            stream: {
                get: function () {
                    return d
                }
            },
            domElement: {
                get: function () {
                    return f
                }
            },
            parentElement: {
                get: function () {
                    return k
                }
            },
            isBoundToStream: {
                get: function () {
                    return n
                }
            },
            poster: {
                get: function () {
                    return f.getAttribute("poster")
                },
                set: function (a) {
                    f.setAttribute("poster", a)
                }
            }
        });
        this.appendTo = function (a) {
            k = a;
            k.appendChild(f);
            return this
        };
        this.bindToStream = function (a) {
            n = !1;
            d = a;
            h(f, d, r, s);
            return this
        };
        this.unbindStream =
            function () {
                if (!d) return this;
                f && (navigator.mozGetUserMedia ? f.mozSrcObject = null : c.URL.revokeObjectURL(f.src));
                d = null;
                return this
        };
        this.setAudioVolume = function (a) {
            f && (f.volume = OT.$.roundFloat(a / 100, 2))
        };
        this.getAudioVolume = function () {
            return f ? parseInt(100 * f.volume, 10) : 50
        };
        this.whenTimeIncrements = function (a, b) {
            if (f) {
                var d, c;
                c = function () {
                    !d || d >= f.currentTime ? d = f.currentTime : (f.removeEventListener("timeupdate", c, !1), a.call(b, this))
                }.bind(this);
                f.addEventListener("timeupdate", c, !1)
            }
        };
        this.destroy = function () {
            this.off();
            this.unbindStream();
            f && (f.removeEventListener("pause", p), OT.$.removeElement(f), f = null);
            k = null
        }
    };
    OT.$.canDefineProperty && Object.defineProperties(OT.VideoElement.prototype, {
        imgData: {
            get: function () {
                var a, b;
                a = OT.$.createElement("canvas", {
                    width: this.domElement.videoWidth,
                    height: this.domElement.videoHeight,
                    style: {
                        display: "none"
                    }
                });
                document.body.appendChild(a);
                try {
                    a.getContext("2d").drawImage(this.domElement, 0, 0, a.width, a.height)
                } catch (d) {
                    return OT.warn("Cannot get image data yet"), null
                }
                b = a.toDataURL("image/png");
                OT.$.removeElement(a);
                return b.replace("data:image/png;base64,", "").trim()
            }
        },
        videoWidth: {
            get: function () {
                return this.domElement["video" + (this.isRotated ? "Height" : "Width")]
            }
        },
        videoHeight: {
            get: function () {
                return this.domElement["video" + (this.isRotated ? "Width" : "Height")]
            }
        },
        aspectRatio: {
            get: function () {
                return (this.videoWidth + 0) / this.videoHeight
            }
        },
        isRotated: {
            get: function () {
                return this._orientation && (270 === this._orientation.videoOrientation || 90 === this._orientation.videoOrientation)
            }
        },
        orientation: {
            get: function () {
                return this._orientation
            },
            set: function (a) {
                var d = b[a.videoOrientation] || b.ROTATED_NORMAL;
                this._orientation = a;
                switch (OT.$.browser()) {
                case "Chrome":
                case "Safari":
                    this.domElement.style.webkitTransform = d;
                    break;
                case "IE":
                    this.domElement.style.msTransform = d;
                    break;
                default:
                    this.domElement.style.transform = d
                }
                this.trigger("orientationChanged")
            }
        }
    });
    c.MediaError && (d[c.MediaError.MEDIA_ERR_ABORTED] = "The fetching process for the media resource was aborted by the user agent at the user's request.", d[c.MediaError.MEDIA_ERR_NETWORK] = "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.",
        d[c.MediaError.MEDIA_ERR_DECODE] = "An error of some description occurred while decoding the media resource, after the resource was established to be  usable.", d[c.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED] = "The media resource indicated by the src attribute was not suitable.")
}(window);
! function (c) {
    var a = [],
        e = !1;
    OT.Analytics = function () {
        var h = OT.properties.loggingURL + "/logging/ClientEvent",
            d = OT.properties.loggingURL + "/logging/ClientQos",
            b = {},
            l, g = function (a, b, c) {
                OT.$.post(b ? d : h, {
                    body: a,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }, c)
            },
            f = function () {
                if (!e && 0 < a.length) {
                    e = !0;
                    var b = a[0],
                        d = function () {
                            a.shift();
                            e = !1;
                            f()
                        };
                    b && g(b.data, b.isQos, function (a) {
                        if (a) OT.debug("Failed to send ClientEvent, moving on to the next item.");
                        else b.onComplete();
                        setTimeout(d, 50)
                    })
                }
            };
        l = {
            payloadType: "payload_type",
            partnerId: "partner_id",
            streamId: "stream_id",
            sessionId: "session_id",
            connectionId: "connection_id",
            widgetType: "widget_type",
            widgetId: "widget_id",
            avgAudioBitrate: "avg_audio_bitrate",
            avgVideoBitrate: "avg_video_bitrate",
            localCandidateType: "local_candidate_type",
            remoteCandidateType: "remote_candidate_type",
            transportType: "transport_type"
        };
        this.logError = function (a, d, c, f, g) {
            g || (g = {});
            c = g.partnerId;
            if (!0 === OT.Config.get("exceptionLogging", "enabled", c)) {
                var e;
                c ? (e = [c, d, a].join("_"), e = 100 >= (b[e] || 0)) : e = !1;
                if (!e) {
                    c = [c, d, a].join("_");
                    var h = this.escapePayload(OT.$.extend(f || {}, {
                        message: h,
                        userAgent: navigator.userAgent
                    }));
                    b[c] = "undefined" !== typeof b[c] ? b[c] + 1 : 1;
                    return this.logEvent(OT.$.extend(g, {
                        action: d + "." + a,
                        payloadType: h[0],
                        payload: h[1]
                    }))
                }
            }
        };
        this.logEvent = function (b) {
            var d = b.partnerId;
            b || (b = {});
            b = OT.$.extend({
                variation: "",
                guid: this.getClientGuid(),
                widget_id: "",
                session_id: "",
                connection_id: "",
                stream_id: "",
                partner_id: d,
                source: c.location.href,
                section: "",
                build: ""
            }, b);
            for (var g in l) l.hasOwnProperty(g) && b[g] && (b[l[g]] =
                b[g], delete b[g]);
            a.push({
                data: b,
                onComplete: function () {},
                isQos: !1
            });
            f()
        };
        this.logQOS = function (b) {
            var d = b.partnerId;
            b || (b = {});
            b = OT.$.extend({
                guid: this.getClientGuid(),
                widget_id: "",
                session_id: "",
                connection_id: "",
                stream_id: "",
                partner_id: d,
                source: c.location.href,
                build: "",
                duration: 0
            }, b);
            for (var g in l) l.hasOwnProperty(g) && b[g] && (b[l[g]] = b[g], delete b[g]);
            a.push({
                data: b,
                onComplete: function () {},
                isQos: !0
            });
            f()
        };
        this.escapePayload = function (a) {
            var b = [],
                d = [],
                c;
            for (c in a) a.hasOwnProperty(c) && (null !== a[c] && void 0 !==
                a[c]) && (b.push(a[c] ? a[c].toString().replace("|", "\\|") : ""), d.push(c.toString().replace("|", "\\|")));
            return [d.join("|"), b.join("|")]
        };
        this.getClientGuid = function () {
            var a = OT.$.getCookie("opentok_client_id");
            a || (a = OT.$.uuid(), OT.$.setCookie("opentok_client_id", a));
            return a
        }
    }
}(window);
! function (c) {
    "file:" === location.protocol && alert("You cannot test a page using WebRTC through the file system due to browser permissions. You must run it over a web server.");
    c.OT || (c.OT = {});
    !c.URL && c.webkitURL && (c.URL = c.webkitURL);
    var a, e = document.location.hash;
    OT.initSession = function (a, d) {
        null == d && (d = a, a = null);
        var b = OT.sessions.get(d);
        b || (b = new OT.Session(a, d), OT.sessions.add(b));
        return b
    };
    OT.initPublisher = function (a, d, b, c) {
        OT.debug("OT.initPublisher(" + a + ")");
        if (null != a && !("object" === typeof a && a.nodeType ===
            Node.ELEMENT_NODE || "string" === typeof a && document.getElementById(a)) && "function" !== typeof a) a = d, d = b, b = c;
        "function" === typeof a && (b = a, a = d = void 0);
        "function" === typeof d && (b = d, d = void 0);
        var g = new OT.Publisher;
        OT.publishers.add(g);
        var f = function (a) {
                a ? OT.dispatchError(a.code, a.message, b, g.session) : b && OT.$.isFunction(b) && b.apply(null, arguments)
            },
            e = function (a) {
                g.off("publishComplete", n);
                f(a)
            },
            n = function (a) {
                g.off("initSuccess", e);
                a && f(a)
            };
        g.once("initSuccess", e);
        g.once("publishComplete", n);
        g.publish(a, d);
        return g
    };
    OT.checkSystemRequirements = function () {
        OT.debug("OT.checkSystemRequirements()");
        var a = OT.$.supportsWebSockets() && OT.$.supportsWebRTC() ? this.HAS_REQUIREMENTS : this.NOT_HAS_REQUIREMENTS;
        OT.checkSystemRequirements = function () {
            OT.debug("OT.checkSystemRequirements()");
            return a
        };
        return a
    };
    OT.upgradeSystemRequirements = function () {
        OT.onLoad(function () {
            document.body.appendChild(function () {
                var a = document.createElement("iframe");
                a.id = "_upgradeFlash";
                a.style.position = "absolute";
                a.style.position = "fixed";
                a.style.height =
                    "100%";
                a.style.width = "100%";
                a.style.top = "0px";
                a.style.left = "0px";
                a.style.right = "0px";
                a.style.bottom = "0px";
                a.style.zIndex = 1E3;
                try {
                    a.style.backgroundColor = "rgba(0,0,0,0.2)"
                } catch (d) {
                    a.style.backgroundColor = "transparent", a.setAttribute("allowTransparency", "true")
                }
                a.setAttribute("frameBorder", "0");
                a.frameBorder = "0";
                a.scrolling = "no";
                a.setAttribute("scrolling", "no");
                var b = OT.$.browserVersion(),
                    b = OT.properties.minimumVersion[b.browser.toLowerCase()];
                a.src = OT.properties.assetURL + "/html/upgrade.html#" + encodeURIComponent(b ?
                    "true" : "false") + "," + encodeURIComponent(JSON.stringify(OT.properties.minimumVersion)) + "|" + encodeURIComponent(document.location.href);
                return a
            }());
            a && clearInterval(a);
            a = setInterval(function () {
                var a = document.location.hash,
                    d = /^#?\d+&/;
                a !== e && d.test(a) && (e = a, "close_window" === a.replace(d, "") && (document.body.removeChild(document.getElementById("_upgradeFlash")), document.location.hash = ""))
            }, 100)
        })
    };
    OT.reportIssue = function () {
        OT.warn("ToDo: haven't yet implemented OT.reportIssue")
    };
    OT.components = {};
    OT.sessions = {};
    OT.rtc = {};
    OT.APIKEY = function () {
        var a = document.getElementsByTagName("script"),
            a = a[a.length - 1],
            a = a.getAttribute("src") || a.src;
        return (a = a.match(/[\?\&]apikey=([^&]+)/i)) ? a[1] : ""
    }();
    OT.HAS_REQUIREMENTS = 1;
    OT.NOT_HAS_REQUIREMENTS = 0;
    c.OT || (c.OT = OT);
    c.TB || (c.TB = OT)
}(window);
! function () {
    OT.Collection = function (c) {
        var a = [],
            e = {},
            h = c || "id";
        OT.$.eventing(this, !0);
        var d = function (a) {
                this.trigger("update", a);
                this.trigger("update:" + a.target.id, a)
            }.bind(this),
            b = function (a, b) {
                if (void 0 !== e[a]) {
                    var d = e[a];
                    delete e[a];
                    e[b] = d
                }
            }.bind(this),
            l = function (a) {
                this.remove(a.target, a.reason)
            }.bind(this);
        this.reset = function () {
            a.forEach(function (a) {
                a.off("updated", d, this);
                a.off("destroyed", l, this);
                a.off("idUpdated", b, this)
            }, this);
            a = [];
            e = {}
        };
        this.destroy = function () {
            a.forEach(function (a) {
                a && "function" ===
                    typeof a.destroy && a.destroy(void 0, !0)
            });
            this.reset();
            this.off()
        };
        this.get = function (b) {
            return b && void 0 !== e[b] ? a[e[b]] : void 0
        };
        this.has = function (a) {
            return a && void 0 !== e[a]
        };
        this.toString = function () {
            return a.toString()
        };
        this.where = function (b, d) {
            return OT.$.isFunction(b) ? a.filter(b, d) : a.filter(function (a) {
                for (var d in b)
                    if (a[d] !== b[d]) return !1;
                return !0
            })
        };
        this.find = function (b, d) {
            var c;
            c = OT.$.isFunction(b) ? b : function (a) {
                for (var d in b)
                    if (a[d] !== b[d]) return !1;
                return !0
            };
            c = c.bind(d);
            for (var e = 0; e < a.length; ++e)
                if (!0 ===
                    c(a[e])) return a[e];
            return null
        };
        this.add = function (c) {
            var f = c[h];
            if (this.has(f)) return OT.warn("Model " + f + " is already in the collection", a), this;
            e[f] = a.push(c) - 1;
            c.on("updated", d, this);
            c.on("destroyed", l, this);
            c.on("idUpdated", b, this);
            this.trigger("add", c);
            this.trigger("add:" + f, c);
            return this
        };
        this.remove = function (c, f) {
            var k = c[h];
            a.splice(e[k], 1);
            for (var n = e[k]; n < a.length; ++n) e[a[n][h]] = n;
            delete e[k];
            c.off("updated", d, this);
            c.off("destroyed", l, this);
            c.off("idUpdated", b, this);
            this.trigger("remove",
                c, f);
            this.trigger("remove:" + k, c, f);
            return this
        };
        this._triggerAddEvents = function () {
            this.where.apply(this, arguments).forEach(function (a) {
                this.trigger("add", a);
                this.trigger("add:" + a[h], a)
            }, this)
        };
        OT.$.defineGetters(this, {
            length: function () {
                return a.length
            }
        })
    }
}(this);
! function () {
    OT.Event = OT.$.eventing.Event();
    OT.Event.names = {
        ACTIVE: "active",
        INACTIVE: "inactive",
        UNKNOWN: "unknown",
        PER_SESSION: "perSession",
        PER_STREAM: "perStream",
        EXCEPTION: "exception",
        ISSUE_REPORTED: "issueReported",
        SESSION_CONNECTED: "sessionConnected",
        SESSION_DISCONNECTED: "sessionDisconnected",
        STREAM_CREATED: "streamCreated",
        STREAM_DESTROYED: "streamDestroyed",
        CONNECTION_CREATED: "connectionCreated",
        CONNECTION_DESTROYED: "connectionDestroyed",
        SIGNAL: "signal",
        STREAM_PROPERTY_CHANGED: "streamPropertyChanged",
        MICROPHONE_LEVEL_CHANGED: "microphoneLevelChanged",
        RESIZE: "resize",
        SETTINGS_BUTTON_CLICK: "settingsButtonClick",
        DEVICE_INACTIVE: "deviceInactive",
        INVALID_DEVICE_NAME: "invalidDeviceName",
        ACCESS_ALLOWED: "accessAllowed",
        ACCESS_DENIED: "accessDenied",
        ACCESS_DIALOG_OPENED: "accessDialogOpened",
        ACCESS_DIALOG_CLOSED: "accessDialogClosed",
        ECHO_CANCELLATION_MODE_CHANGED: "echoCancellationModeChanged",
        PUBLISHER_DESTROYED: "destroyed",
        SUBSCRIBER_DESTROYED: "destroyed",
        DEVICES_DETECTED: "devicesDetected",
        DEVICES_SELECTED: "devicesSelected",
        CLOSE_BUTTON_CLICK: "closeButtonClick",
        MICLEVEL: "microphoneActivityLevel",
        MICGAINCHANGED: "microphoneGainChanged",
        ENV_LOADED: "envLoaded"
    };
    OT.ExceptionCodes = {
        JS_EXCEPTION: 2E3,
        AUTHENTICATION_ERROR: 1004,
        INVALID_SESSION_ID: 1005,
        CONNECT_FAILED: 1006,
        CONNECT_REJECTED: 1007,
        CONNECTION_TIMEOUT: 1008,
        NOT_CONNECTED: 1010,
        P2P_CONNECTION_FAILED: 1013,
        API_RESPONSE_FAILURE: 1014,
        UNABLE_TO_PUBLISH: 1500,
        UNABLE_TO_SUBSCRIBE: 1501,
        UNABLE_TO_SIGNAL: 1510,
        UNABLE_TO_FORCE_DISCONNECT: 1520,
        UNABLE_TO_FORCE_UNPUBLISH: 1530
    };
    OT.ExceptionEvent =
        function (a, d, c, f, e, h) {
            OT.Event.call(this, a);
            this.message = d;
            this.title = c;
            this.code = f;
            this.component = e;
            this.target = h
    };
    OT.IssueReportedEvent = function (a, d) {
        OT.Event.call(this, a);
        this.issueId = d
    };
    OT.EnvLoadedEvent = function (a) {
        OT.Event.call(this, a)
    };
    var c = !1;
    OT.ConnectionEvent = function (a, d, g) {
        OT.Event.call(this, a, !1);
        OT.$.canDefineProperty ? Object.defineProperty(this, "connections", {
            get: function () {
                c || (OT.warn("OT.ConnectionEvent connections property is deprecated, use connection instead."), c = !0);
                return [d]
            }
        }) :
            this.connections = [d];
        this.connection = d;
        this.reason = g
    };
    var a = !1;
    OT.StreamEvent = function (b, d, c, f) {
        OT.Event.call(this, b, f);
        OT.$.canDefineProperty ? Object.defineProperty(this, "streams", {
            get: function () {
                a || (OT.warn("OT.StreamEvent streams property is deprecated, use stream instead."), a = !0);
                return [d]
            }
        }) : this.streams = [d];
        this.stream = d;
        this.reason = c
    };
    var e = !1,
        h = !1,
        d = !1;
    OT.SessionConnectEvent = function (a) {
        OT.Event.call(this, a, !1);
        OT.$.canDefineProperty ? Object.defineProperties(this, {
            connections: {
                get: function () {
                    e ||
                        (OT.warn("OT.SessionConnectedEvent no longer includes connections. Listen for connectionCreated events instead."), e = !0);
                    return []
                }
            },
            streams: {
                get: function () {
                    OT.warn("OT.SessionConnectedEvent no longer includes streams. Listen for streamCreated events instead.");
                    e = !0;
                    return []
                }
            },
            archives: {
                get: function () {
                    h || (OT.warn("OT.SessionConnectedEvent no longer includes archives. Listen for archiveStarted events instead."), h = !0);
                    return []
                }
            },
            groups: {
                get: function () {
                    d || (OT.error("OT.SessionConnectedEvent no longer includes groups. There is no equivelant in OpenTok v2.2"),
                        d = !0);
                    return []
                }
            }
        }) : (this.connections = [], this.streams = [], this.archives = [], this.groups = [])
    };
    OT.SessionDisconnectEvent = function (a, d, c) {
        OT.Event.call(this, a, c);
        this.reason = d
    };
    OT.StreamPropertyChangedEvent = function (a, d, c, f, e) {
        OT.Event.call(this, a, !1);
        this.type = a;
        this.stream = d;
        this.changedProperty = c;
        this.oldValue = f;
        this.newValue = e
    };
    OT.ArchiveEvent = function (a, d) {
        OT.Event.call(this, a, !1);
        this.type = a;
        this.id = d.id;
        this.name = d.name;
        this.status = d.status;
        this.archive = d
    };
    OT.ArchiveUpdatedEvent = function (a, d, c, f) {
        OT.Event.call(this,
            "updated", !1);
        this.target = a;
        this.changedProperty = d;
        this.oldValue = c;
        this.newValue = f
    };
    OT.SignalEvent = function (a, d, c) {
        OT.Event.call(this, a ? "signal:" + a : OT.Event.names.SIGNAL, !1);
        this.data = d;
        this.from = c
    };
    OT.StreamUpdatedEvent = function (a, d, c, f) {
        OT.Event.call(this, "updated", !1);
        this.target = a;
        this.changedProperty = d;
        this.oldValue = c;
        this.newValue = f
    };
    OT.DestroyedEvent = function (a, d, c) {
        OT.Event.call(this, a, !1);
        this.target = d;
        this.reason = c
    }
}(window);
(function (c) {
    function a(a, b, d) {
        return b <= a && a <= d
    }

    function e(a, b) {
        return Math.floor(a / b)
    }

    function h(a) {
        var b = 0;
        this.get = function () {
            return b >= a.length ? -1 : Number(a[b])
        };
        this.offset = function (d) {
            b += d;
            if (0 > b) throw Error("Seeking past start of the buffer");
            if (b > a.length) throw Error("Seeking past EOF");
        };
        this.match = function (d) {
            if (d.length > b + a.length) return !1;
            var c;
            for (c = 0; c < d.length; c += 1)
                if (Number(a[b + c]) !== d[c]) return !1;
            return !0
        }
    }

    function d(a) {
        var b = 0;
        this.emit = function (d) {
            var c = -1,
                f;
            for (f = 0; f < arguments.length; ++f) c =
                Number(arguments[f]), a[b++] = c;
            return c
        }
    }

    function b(b) {
        var d = 0,
            c = function (b) {
                for (var d = [], c = 0, f = b.length; c < b.length;) {
                    var e = b.charCodeAt(c);
                    if (a(e, 55296, 57343))
                        if (a(e, 56320, 57343)) d.push(65533);
                        else if (c === f - 1) d.push(65533);
                    else {
                        var g = b.charCodeAt(c + 1);
                        a(g, 56320, 57343) ? (e &= 1023, g &= 1023, c += 1, d.push(65536 + (e << 10) + g)) : d.push(65533)
                    } else d.push(e);
                    c += 1
                }
                return d
            }(b);
        this.offset = function (a) {
            d += a;
            if (0 > d) throw Error("Seeking past start of the buffer");
            if (d > c.length) throw Error("Seeking past EOF");
        };
        this.get =
            function () {
                return d >= c.length ? -1 : c[d]
        }
    }

    function l() {
        var a = "";
        this.string = function () {
            return a
        };
        this.emit = function (b) {
            65535 >= b ? a += String.fromCharCode(b) : (b -= 65536, a += String.fromCharCode(55296 + (b >> 10 & 1023)), a += String.fromCharCode(56320 + (b & 1023)))
        }
    }

    function g(a) {
        this.name = "EncodingError";
        this.message = a;
        this.code = 0
    }

    function f(a, b) {
        if (a) throw new g("Decoder error");
        return b || 65533
    }

    function k(a) {
        throw new g("The code point " + a + " could not be encoded.");
    }

    function n(a) {
        a = String(a).trim().toLowerCase();
        return Object.prototype.hasOwnProperty.call(Q,
            a) ? Q[a] : null
    }

    function m(a, b) {
        return (b || [])[a] || null
    }

    function q(a, b) {
        var d = b.indexOf(a);
        return -1 === d ? null : d
    }

    function r(b) {
        var d = b.fatal,
            c = 0,
            e = 0,
            g = 0,
            h = 0;
        this.decode = function (b) {
            var k = b.get();
            if (-1 === k) return 0 !== e ? f(d) : -1;
            b.offset(1);
            if (0 === e) {
                if (a(k, 0, 127)) return k;
                if (a(k, 194, 223)) e = 1, h = 128, c = k - 192;
                else if (a(k, 224, 239)) e = 2, h = 2048, c = k - 224;
                else if (a(k, 240, 244)) e = 3, h = 65536, c = k - 240;
                else return f(d);
                c *= Math.pow(64, e);
                return null
            }
            if (!a(k, 128, 191)) return h = g = e = c = 0, b.offset(-1), f(d);
            g += 1;
            c += (k - 128) * Math.pow(64,
                e - g);
            if (g !== e) return null;
            b = c;
            k = h;
            h = g = e = c = 0;
            return a(b, k, 1114111) && !a(b, 55296, 57343) ? b : f(d)
        }
    }

    function s(b) {
        this.encode = function (b, d) {
            var c = d.get();
            if (-1 === c) return -1;
            d.offset(1);
            if (a(c, 55296, 57343)) return k(c);
            if (a(c, 0, 127)) return b.emit(c);
            var f, g;
            a(c, 128, 2047) ? (f = 1, g = 192) : a(c, 2048, 65535) ? (f = 2, g = 224) : a(c, 65536, 1114111) && (f = 3, g = 240);
            for (g = b.emit(e(c, Math.pow(64, f)) + g); 0 < f;) g = e(c, Math.pow(64, f - 1)), g = b.emit(128 + g % 64), f -= 1;
            return g
        }
    }

    function p(b, d) {
        var c = d.fatal;
        this.decode = function (d) {
            var e = d.get();
            if (-1 === e) return -1;
            d.offset(1);
            if (a(e, 0, 127)) return e;
            d = b[e - 128];
            return null === d ? f(c) : d
        }
    }

    function u(b, d) {
        this.encode = function (d, c) {
            var f = c.get();
            if (-1 === f) return -1;
            c.offset(1);
            if (a(f, 0, 127)) return d.emit(f);
            var e = q(f, b);
            null === e && k(f);
            return d.emit(e + 128)
        }
    }

    function v(b, d) {
        var c = d.fatal,
            e = 0,
            g = 0,
            h = 0;
        this.decode = function (d) {
            var k = d.get();
            if (-1 === k && 0 === e && 0 === g && 0 === h) return -1;
            if (-1 === k && (0 !== e || 0 !== g || 0 !== h)) h = g = e = 0, f(c);
            d.offset(1);
            var l;
            if (0 !== h) {
                l = null;
                if (a(k, 48, 57))
                    if (k = 10 * (126 * (10 * (e - 129) + (g - 48)) +
                        (h - 129)) + k - 48, 39419 < k && 189E3 > k || 1237575 < k) l = null;
                    else {
                        var n = 0;
                        l = 0;
                        var I = B.gb18030,
                            y;
                        for (y = 0; y < I.length; ++y) {
                            var p = I[y];
                            if (p[0] <= k) n = p[0], l = p[1];
                            else break
                        }
                        l = l + k - n
                    }
                h = g = e = 0;
                return null === l ? (d.offset(-3), f(c)) : l
            }
            if (0 !== g) {
                if (a(k, 129, 254)) return h = k, null;
                d.offset(-2);
                g = e = 0;
                return f(c)
            }
            if (0 !== e) {
                if (a(k, 48, 57) && b) return g = k, null;
                l = e;
                n = null;
                e = 0;
                I = 127 > k ? 64 : 65;
                if (a(k, 64, 126) || a(k, 128, 254)) n = 190 * (l - 129) + (k - I);
                l = null === n ? null : m(n, B.gbk);
                null === n && d.offset(-1);
                return null === l ? f(c) : l
            }
            return a(k, 0, 127) ? k : 128 ===
                k ? 8364 : a(k, 129, 254) ? (e = k, null) : f(c)
        }
    }

    function t(b, d) {
        this.encode = function (d, c) {
            var f = c.get();
            if (-1 === f) return -1;
            c.offset(1);
            if (a(f, 0, 127)) return d.emit(f);
            var g = q(f, B.gbk);
            if (null !== g) return f = e(g, 190) + 129, g %= 190, d.emit(f, g + (63 > g ? 64 : 65));
            if (null === g && !b) return k(f);
            var h = g = 0,
                l = B.gb18030,
                m;
            for (m = 0; m < l.length; ++m) {
                var n = l[m];
                if (n[1] <= f) g = n[1], h = n[0];
                else break
            }
            g = h + f - g;
            f = e(e(e(g, 10), 126), 10);
            g -= 12600 * f;
            h = e(e(g, 10), 126);
            g -= 1260 * h;
            l = e(g, 10);
            return d.emit(f + 129, h + 48, l + 129, g - 10 * l + 48)
        }
    }

    function A(b) {
        var d =
            b.fatal,
            c = !1,
            g = 0;
        this.decode = function (b) {
            var e = b.get();
            if (-1 === e && 0 === g) return -1;
            if (-1 === e && 0 !== g) return g = 0, f(d);
            b.offset(1);
            if (126 === g) {
                g = 0;
                if (123 === e) return c = !0, null;
                if (125 === e) return c = !1, null;
                if (126 === e) return 126;
                if (10 === e) return null;
                b.offset(-1);
                return f(d)
            }
            if (0 !== g) {
                b = g;
                g = 0;
                var h = null;
                a(e, 33, 126) && (h = m(190 * (b - 1) + (e + 63), B.gbk));
                10 === e && (c = !1);
                return null === h ? f(d) : h
            }
            if (126 === e) return g = 126, null;
            if (c) {
                if (a(e, 32, 127)) return g = e, null;
                10 === e && (c = !1);
                return f(d)
            }
            return a(e, 0, 127) ? e : f(d)
        }
    }

    function x(b) {
        var d = !1;
        this.encode = function (b, c) {
            var f = c.get();
            if (-1 === f) return -1;
            c.offset(1);
            if (a(f, 0, 127) && d) return c.offset(-1), d = !1, b.emit(126, 125);
            if (126 === f) return b.emit(126, 126);
            if (a(f, 0, 127)) return b.emit(f);
            if (!d) return c.offset(-1), d = !0, b.emit(126, 123);
            var g = q(f, B.gbk);
            if (null === g) return k(f);
            var h = e(g, 190) + 1,
                g = g % 190 - 63;
            return !a(h, 33, 126) || !a(g, 33, 126) ? k(f) : b.emit(h, g)
        }
    }

    function w(b) {
        var d = b.fatal,
            c = 0,
            g = null;
        this.decode = function (b) {
            if (null !== g) return b = g, g = null, b;
            var e = b.get();
            if (-1 === e && 0 === c) return -1;
            if (-1 ===
                e && 0 !== c) return c = 0, f(d);
            b.offset(1);
            if (0 !== c) {
                var h = c,
                    k = null;
                c = 0;
                var l = 127 > e ? 64 : 98;
                if (a(e, 64, 126) || a(e, 161, 254)) k = 157 * (h - 129) + (e - l);
                if (1133 === k) return g = 772, 202;
                if (1135 === k) return g = 780, 202;
                if (1164 === k) return g = 772, 234;
                if (1166 === k) return g = 780, 234;
                e = null === k ? null : m(k, B.big5);
                null === k && b.offset(-1);
                return null === e ? f(d) : e
            }
            return a(e, 0, 127) ? e : a(e, 129, 254) ? (c = e, null) : f(d)
        }
    }

    function z(b) {
        this.encode = function (b, d) {
            var c = d.get();
            if (-1 === c) return -1;
            d.offset(1);
            if (a(c, 0, 127)) return b.emit(c);
            var f = q(c, B.big5);
            if (null === f) return k(c);
            c = e(f, 157) + 129;
            f %= 157;
            return b.emit(c, f + (63 > f ? 64 : 98))
        }
    }

    function E(b) {
        var d = b.fatal,
            c = 0,
            e = 0;
        this.decode = function (b) {
            var g = b.get();
            if (-1 === g) {
                if (0 === c && 0 === e) return -1;
                e = c = 0;
                return f(d)
            }
            b.offset(1);
            var h, k;
            return 0 !== e ? (h = e, e = 0, k = null, a(h, 161, 254) && a(g, 161, 254) && (k = m(94 * (h - 161) + g - 161, B.jis0212)), a(g, 161, 254) || b.offset(-1), null === k ? f(d) : k) : 142 === c && a(g, 161, 223) ? (c = 0, 65377 + g - 161) : 143 === c && a(g, 161, 254) ? (c = 0, e = g, null) : 0 !== c ? (h = c, c = 0, k = null, a(h, 161, 254) && a(g, 161, 254) && (k = m(94 * (h - 161) +
                g - 161, B.jis0208)), a(g, 161, 254) || b.offset(-1), null === k ? f(d) : k) : a(g, 0, 127) ? g : 142 === g || 143 === g || a(g, 161, 254) ? (c = g, null) : f(d)
        }
    }

    function F(b) {
        this.encode = function (b, d) {
            var c = d.get();
            if (-1 === c) return -1;
            d.offset(1);
            if (a(c, 0, 127)) return b.emit(c);
            if (165 === c) return b.emit(92);
            if (8254 === c) return b.emit(126);
            if (a(c, 65377, 65439)) return b.emit(142, c - 65377 + 161);
            var f = q(c, B.jis0208);
            if (null === f) return k(c);
            c = e(f, 94) + 161;
            return b.emit(c, f % 94 + 161)
        }
    }

    function J(b) {
        var d = b.fatal,
            c = 0,
            g = !1,
            e = 0;
        this.decode = function (b) {
            var h =
                b.get(); - 1 !== h && b.offset(1);
            switch (c) {
                default:
            case 0:
                return 27 === h ? (c = 1, null) : a(h, 0, 127) ? h : -1 === h ? -1 : f(d);
            case 1:
                if (36 === h || 40 === h) return e = h, c = 2, null; - 1 !== h && b.offset(-1);
                c = 0;
                return f(d);
            case 2:
                var k = e;
                e = 0;
                if (36 === k && (64 === h || 66 === h)) return g = !1, c = 4, null;
                if (36 === k && 40 === h) return c = 3, null;
                if (40 === k && (66 === h || 74 === h)) return c = 0, null;
                if (40 === k && 73 === h) return c = 6, null; - 1 === h ? b.offset(-1) : b.offset(-2);
                c = 0;
                return f(d);
            case 3:
                if (68 === h) return g = !0, c = 4, null; - 1 === h ? b.offset(-2) : b.offset(-3);
                c = 0;
                return f(d);
            case 4:
                if (10 === h) return c = 0, f(d, 10);
                if (27 === h) return c = 1, null;
                if (-1 === h) return -1;
                e = h;
                c = 5;
                return null;
            case 5:
                c = 4;
                if (-1 === h) return f(d);
                b = null;
                k = 94 * (e - 33) + h - 33;
                a(e, 33, 126) && a(h, 33, 126) && (b = !1 === g ? m(k, B.jis0208) : m(k, B.jis0212));
                return null === b ? f(d) : b;
            case 6:
                return 27 === h ? (c = 1, null) : a(h, 33, 95) ? 65377 + h - 33 : -1 === h ? -1 : f(d)
            }
        }
    }

    function D(b) {
        var d = 0;
        this.encode = function (b, c) {
            var f = c.get();
            if (-1 === f) return -1;
            c.offset(1);
            if ((a(f, 0, 127) || 165 === f || 8254 === f) && 0 !== d) return c.offset(-1), d = 0, b.emit(27, 40, 66);
            if (a(f,
                0, 127)) return b.emit(f);
            if (165 === f) return b.emit(92);
            if (8254 === f) return b.emit(126);
            if (a(f, 65377, 65439) && 2 !== d) return c.offset(-1), d = 2, b.emit(27, 40, 73);
            if (a(f, 65377, 65439)) return b.emit(f - 65377 - 33);
            if (1 !== d) return c.offset(-1), d = 1, b.emit(27, 36, 66);
            var g = q(f, B.jis0208);
            if (null === g) return k(f);
            f = e(g, 94) + 33;
            return b.emit(f, g % 94 + 33)
        }
    }

    function G(b) {
        var d = b.fatal,
            c = 0;
        this.decode = function (b) {
            var g = b.get();
            if (-1 === g && 0 === c) return -1;
            if (-1 === g && 0 !== c) return c = 0, f(d);
            b.offset(1);
            if (0 !== c) {
                var e = c;
                c = 0;
                if (a(g,
                    64, 126) || a(g, 128, 252)) return b = m(188 * (e - (160 > e ? 129 : 193)) + g - (127 > g ? 64 : 65), B.jis0208), null === b ? f(d) : b;
                b.offset(-1);
                return f(d)
            }
            return a(g, 0, 128) ? g : a(g, 161, 223) ? 65377 + g - 161 : a(g, 129, 159) || a(g, 224, 252) ? (c = g, null) : f(d)
        }
    }

    function K(b) {
        this.encode = function (b, d) {
            var c = d.get();
            if (-1 === c) return -1;
            d.offset(1);
            if (a(c, 0, 128)) return b.emit(c);
            if (165 === c) return b.emit(92);
            if (8254 === c) return b.emit(126);
            if (a(c, 65377, 65439)) return b.emit(c - 65377 + 161);
            var f = q(c, B.jis0208);
            if (null === f) return k(c);
            c = e(f, 188);
            f %= 188;
            return b.emit(c +
                (31 > c ? 129 : 193), f + (63 > f ? 64 : 65))
        }
    }

    function C(b) {
        var d = b.fatal,
            c = 0;
        this.decode = function (b) {
            var g = b.get();
            if (-1 === g && 0 === c) return -1;
            if (-1 === g && 0 !== c) return c = 0, f(d);
            b.offset(1);
            if (0 !== c) {
                var e = c,
                    h = null;
                c = 0;
                if (a(e, 129, 198)) {
                    var k = 178 * (e - 129);
                    a(g, 65, 90) ? h = k + g - 65 : a(g, 97, 122) ? h = k + 26 + g - 97 : a(g, 129, 254) && (h = k + 26 + 26 + g - 129)
                }
                a(e, 199, 253) && a(g, 161, 254) && (h = 12460 + 94 * (e - 199) + (g - 161));
                g = null === h ? null : m(h, B["euc-kr"]);
                null === h && b.offset(-1);
                return null === g ? f(d) : g
            }
            return a(g, 0, 127) ? g : a(g, 129, 253) ? (c = g, null) : f(d)
        }
    }

    function H(b) {
        this.encode =
            function (b, d) {
                var c = d.get();
                if (-1 === c) return -1;
                d.offset(1);
                if (a(c, 0, 127)) return b.emit(c);
                var f = q(c, B["euc-kr"]);
                if (null === f) return k(c);
                if (12460 > f) return c = e(f, 178) + 129, f %= 178, b.emit(c, f + (26 > f ? 65 : 52 > f ? 71 : 77));
                f -= 12460;
                c = e(f, 94) + 199;
                return b.emit(c, f % 94 + 161)
        }
    }

    function I(b) {
        var d = b.fatal,
            c = 0,
            g = 0;
        this.decode = function (b) {
            var e = b.get(); - 1 !== e && b.offset(1);
            switch (c) {
                default:
            case 0:
                return 14 === e ? (c = 4, null) : 15 === e ? null : 27 === e ? (c = 1, null) : a(e, 0, 127) ? e : -1 === e ? -1 : f(d);
            case 1:
                if (36 === e) return c = 2, null; - 1 !== e &&
                    b.offset(-1);
                c = 0;
                return f(d);
            case 2:
                if (41 === e) return c = 3, null; - 1 === e ? b.offset(-1) : b.offset(-2);
                c = 0;
                return f(d);
            case 3:
                if (67 === e) return c = 0, null; - 1 === e ? b.offset(-2) : b.offset(-3);
                c = 0;
                return f(d);
            case 4:
                if (10 === e) return c = 0, f(d, 10);
                if (14 === e) return null;
                if (15 === e) return c = 0, null;
                if (-1 === e) return -1;
                g = e;
                c = 5;
                return null;
            case 5:
                c = 4;
                if (-1 === e) return f(d);
                b = null;
                a(g, 33, 70) && a(e, 33, 126) ? b = m(178 * (g - 1) + 52 + e - 1, B["euc-kr"]) : a(g, 71, 126) && a(e, 33, 126) && (b = m(12460 + 94 * (g - 71) + (e - 33), B["euc-kr"]));
                return null !== b ? b : f(d)
            }
        }
    }

    function O(b) {
        var d = !1,
            c = 0;
        this.encode = function (b, f) {
            var g = f.get();
            if (-1 === g) return -1;
            d || (d = !0, b.emit(27, 36, 41, 67));
            f.offset(1);
            if (a(g, 0, 127) && 0 !== c) return f.offset(-1), c = 0, b.emit(15);
            if (a(g, 0, 127)) return b.emit(g);
            if (1 !== c) return f.offset(-1), c = 1, b.emit(14);
            var h = q(g, B["euc-kr"]);
            if (null === h) return k(g);
            var l;
            if (12460 > h) return l = e(h, 178) + 1, h = h % 178 - 26 - 26 + 1, !a(l, 33, 70) || !a(h, 33, 126) ? k(g) : b.emit(l, h);
            h -= 12460;
            l = e(h, 94) + 71;
            h = h % 94 + 33;
            return !a(l, 71, 126) || !a(h, 33, 126) ? k(g) : b.emit(l, h)
        }
    }

    function L(b, d) {
        var c =
            d.fatal,
            g = null,
            e = null;
        this.decode = function (d) {
            var h = d.get();
            if (-1 === h && null === g && null === e) return -1;
            if (-1 === h && (null !== g || null !== e)) return f(c);
            d.offset(1);
            if (null === g) return g = h, null;
            h = b ? (g << 8) + h : (h << 8) + g;
            g = null;
            if (null !== e) {
                var k = e;
                e = null;
                if (a(h, 56320, 57343)) return 65536 + 1024 * (k - 55296) + (h - 56320);
                d.offset(-2);
                return f(c)
            }
            return a(h, 55296, 56319) ? (e = h, null) : a(h, 56320, 57343) ? f(c) : h
        }
    }

    function P(b, d) {
        this.encode = function (d, c) {
            function f(a) {
                var c = a >> 8;
                a &= 255;
                return b ? d.emit(c, a) : d.emit(a, c)
            }
            var g = c.get();
            if (-1 === g) return -1;
            c.offset(1);
            a(g, 55296, 57343) && k(g);
            if (65535 >= g) return f(g);
            var h = e(g - 65536, 1024) + 55296,
                g = (g - 65536) % 1024 + 56320;
            f(h);
            return f(g)
        }
    }

    function M(a, b) {
        if (!this || this === c) return new M(a, b);
        a = a ? String(a) : "utf-8";
        b = Object(b);
        this._encoding = n(a);
        if (null === this._encoding || "utf-8" !== this._encoding.name && "utf-16" !== this._encoding.name && "utf-16be" !== this._encoding.name) throw new TypeError("Unknown encoding: " + a);
        this._streaming = !1;
        this._encoder = null;
        this._options = {
            fatal: Boolean(b.fatal)
        };
        Object.defineProperty ?
            Object.defineProperty(this, "encoding", {
                get: function () {
                    return this._encoding.name
                }
            }) : this.encoding = this._encoding.name;
        return this
    }

    function N(a, b) {
        if (!this || this === c) return new N(a, b);
        a = a ? String(a) : "utf-8";
        b = Object(b);
        this._encoding = n(a);
        if (null === this._encoding) throw new TypeError("Unknown encoding: " + a);
        this._streaming = !1;
        this._decoder = null;
        this._options = {
            fatal: Boolean(b.fatal)
        };
        Object.defineProperty ? Object.defineProperty(this, "encoding", {
            get: function () {
                return this._encoding.name
            }
        }) : this.encoding =
            this._encoding.name;
        return this
    }
    if (!(void 0 !== c.TextEncoder && void 0 !== c.TextDecoder)) {
        g.prototype = Error.prototype;
        var y = {},
            Q = {};
        [{
            encodings: [{
                labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
                name: "utf-8"
            }],
            heading: "The Encoding"
        }, {
            encodings: [{
                labels: ["cp864", "ibm864"],
                name: "ibm864"
            }, {
                labels: ["cp866", "ibm866"],
                name: "ibm866"
            }, {
                labels: "csisolatin2 iso-8859-2 iso-ir-101 iso8859-2 iso_8859-2 l2 latin2".split(" "),
                name: "iso-8859-2"
            }, {
                labels: "csisolatin3 iso-8859-3 iso_8859-3 iso-ir-109 l3 latin3".split(" "),
                name: "iso-8859-3"
            }, {
                labels: "csisolatin4 iso-8859-4 iso_8859-4 iso-ir-110 l4 latin4".split(" "),
                name: "iso-8859-4"
            }, {
                labels: ["csisolatincyrillic", "cyrillic", "iso-8859-5", "iso_8859-5", "iso-ir-144"],
                name: "iso-8859-5"
            }, {
                labels: "arabic csisolatinarabic ecma-114 iso-8859-6 iso_8859-6 iso-ir-127".split(" "),
                name: "iso-8859-6"
            }, {
                labels: "csisolatingreek ecma-118 elot_928 greek greek8 iso-8859-7 iso_8859-7 iso-ir-126".split(" "),
                name: "iso-8859-7"
            }, {
                labels: "csisolatinhebrew hebrew iso-8859-8 iso-8859-8-i iso-ir-138 iso_8859-8 visual".split(" "),
                name: "iso-8859-8"
            }, {
                labels: "csisolatin6 iso-8859-10 iso-ir-157 iso8859-10 l6 latin6".split(" "),
                name: "iso-8859-10"
            }, {
                labels: ["iso-8859-13"],
                name: "iso-8859-13"
            }, {
                labels: ["iso-8859-14", "iso8859-14"],
                name: "iso-8859-14"
            }, {
                labels: ["iso-8859-15", "iso_8859-15"],
                name: "iso-8859-15"
            }, {
                labels: ["iso-8859-16"],
                name: "iso-8859-16"
            }, {
                labels: ["koi8-r", "koi8_r"],
                name: "koi8-r"
            }, {
                labels: ["koi8-u"],
                name: "koi8-u"
            }, {
                labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
                name: "macintosh"
            }, {
                labels: ["iso-8859-11", "tis-620",
                    "windows-874"
                ],
                name: "windows-874"
            }, {
                labels: ["windows-1250", "x-cp1250"],
                name: "windows-1250"
            }, {
                labels: ["windows-1251", "x-cp1251"],
                name: "windows-1251"
            }, {
                labels: "ascii ansi_x3.4-1968 csisolatin1 iso-8859-1 iso8859-1 iso_8859-1 l1 latin1 us-ascii windows-1252".split(" "),
                name: "windows-1252"
            }, {
                labels: ["cp1253", "windows-1253"],
                name: "windows-1253"
            }, {
                labels: "csisolatin5 iso-8859-9 iso-ir-148 l5 latin5 windows-1254".split(" "),
                name: "windows-1254"
            }, {
                labels: ["cp1255", "windows-1255"],
                name: "windows-1255"
            }, {
                labels: ["cp1256",
                    "windows-1256"
                ],
                name: "windows-1256"
            }, {
                labels: ["windows-1257"],
                name: "windows-1257"
            }, {
                labels: ["cp1258", "windows-1258"],
                name: "windows-1258"
            }, {
                labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
                name: "x-mac-cyrillic"
            }],
            heading: "Legacy single-byte encodings"
        }, {
            encodings: [{
                labels: "chinese csgb2312 csiso58gb231280 gb2312 gbk gb_2312 gb_2312-80 iso-ir-58 x-gbk".split(" "),
                name: "gbk"
            }, {
                labels: ["gb18030"],
                name: "gb18030"
            }, {
                labels: ["hz-gb-2312"],
                name: "hz-gb-2312"
            }],
            heading: "Legacy multi-byte Chinese (simplified) encodings"
        }, {
            encodings: [{
                labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
                name: "big5"
            }],
            heading: "Legacy multi-byte Chinese (traditional) encodings"
        }, {
            encodings: [{
                labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
                name: "euc-jp"
            }, {
                labels: ["csiso2022jp", "iso-2022-jp"],
                name: "iso-2022-jp"
            }, {
                labels: "csshiftjis ms_kanji shift-jis shift_jis sjis windows-31j x-sjis".split(" "),
                name: "shift_jis"
            }],
            heading: "Legacy multi-byte Japanese encodings"
        }, {
            encodings: [{
                labels: "cseuckr csksc56011987 euc-kr iso-ir-149 korean ks_c_5601-1987 ks_c_5601-1989 ksc5601 ksc_5601 windows-949".split(" "),
                name: "euc-kr"
            }, {
                labels: ["csiso2022kr", "iso-2022-kr"],
                name: "iso-2022-kr"
            }],
            heading: "Legacy multi-byte Korean encodings"
        }, {
            encodings: [{
                labels: ["utf-16", "utf-16le"],
                name: "utf-16"
            }, {
                labels: ["utf-16be"],
                name: "utf-16be"
            }],
            heading: "Legacy utf-16 encodings"
        }].forEach(function (a) {
            a.encodings.forEach(function (a) {
                y[a.name] = a;
                a.labels.forEach(function (b) {
                    Q[b] = a
                })
            })
        });
        var B = c["encoding-indexes"] || {};
        y["utf-8"].getEncoder = function (a) {
            return new s(a)
        };
        y["utf-8"].getDecoder = function (a) {
            return new r(a)
        };
        (function () {
            "ibm864 ibm866 iso-8859-2 iso-8859-3 iso-8859-4 iso-8859-5 iso-8859-6 iso-8859-7 iso-8859-8 iso-8859-10 iso-8859-13 iso-8859-14 iso-8859-15 iso-8859-16 koi8-r koi8-u macintosh windows-874 windows-1250 windows-1251 windows-1252 windows-1253 windows-1254 windows-1255 windows-1256 windows-1257 windows-1258 x-mac-cyrillic".split(" ").forEach(function (a) {
                var b =
                    y[a],
                    d = B[a];
                b.getDecoder = function (a) {
                    return new p(d, a)
                };
                b.getEncoder = function (a) {
                    return new u(d, a)
                }
            })
        })();
        y.gbk.getEncoder = function (a) {
            return new t(!1, a)
        };
        y.gbk.getDecoder = function (a) {
            return new v(!1, a)
        };
        y.gb18030.getEncoder = function (a) {
            return new t(!0, a)
        };
        y.gb18030.getDecoder = function (a) {
            return new v(!0, a)
        };
        y["hz-gb-2312"].getEncoder = function (a) {
            return new x(a)
        };
        y["hz-gb-2312"].getDecoder = function (a) {
            return new A(a)
        };
        y.big5.getEncoder = function (a) {
            return new z(a)
        };
        y.big5.getDecoder = function (a) {
            return new w(a)
        };
        y["euc-jp"].getEncoder = function (a) {
            return new F(a)
        };
        y["euc-jp"].getDecoder = function (a) {
            return new E(a)
        };
        y["iso-2022-jp"].getEncoder = function (a) {
            return new D(a)
        };
        y["iso-2022-jp"].getDecoder = function (a) {
            return new J(a)
        };
        y.shift_jis.getEncoder = function (a) {
            return new K(a)
        };
        y.shift_jis.getDecoder = function (a) {
            return new G(a)
        };
        y["euc-kr"].getEncoder = function (a) {
            return new H(a)
        };
        y["euc-kr"].getDecoder = function (a) {
            return new C(a)
        };
        y["iso-2022-kr"].getEncoder = function (a) {
            return new O(a)
        };
        y["iso-2022-kr"].getDecoder =
            function (a) {
                return new I(a)
        };
        y["utf-16"].getEncoder = function (a) {
            return new P(!1, a)
        };
        y["utf-16"].getDecoder = function (a) {
            return new L(!1, a)
        };
        y["utf-16be"].getEncoder = function (a) {
            return new P(!0, a)
        };
        y["utf-16be"].getDecoder = function (a) {
            return new L(!0, a)
        };
        M.prototype = {
            encode: function (a, c) {
                a = a ? String(a) : "";
                c = Object(c);
                this._streaming || (this._encoder = this._encoding.getEncoder(this._options));
                this._streaming = Boolean(c.stream);
                for (var f = [], g = new d(f), e = new b(a); - 1 !== e.get();) this._encoder.encode(g, e);
                if (!this._streaming) {
                    var h;
                    do h = this._encoder.encode(g, e); while (-1 !== h);
                    this._encoder = null
                }
                return new Uint8Array(f)
            }
        };
        N.prototype = {
            decode: function (a, b) {
                if (a && !("buffer" in a && "byteOffset" in a && "byteLength" in a)) throw new TypeError("Expected ArrayBufferView");
                a || (a = new Uint8Array(0));
                b = Object(b);
                this._streaming || (this._decoder = this._encoding.getDecoder(this._options));
                this._streaming = Boolean(b.stream);
                var d = new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
                    d = new h(d);
                if (!this._BOMseen) {
                    this._BOMseen = !0;
                    var c = this._encoding.name;
                    d.match([255, 254]) && "utf-16" === c ? d.offset(2) : d.match([254, 255]) && "utf-16be" == c ? d.offset(2) : d.match([239, 187, 191]) && "utf-8" == c && d.offset(3)
                }
                for (var c = new l, f; - 1 !== d.get();) f = this._decoder.decode(d), null !== f && -1 !== f && c.emit(f);
                if (!this._streaming) {
                    do f = this._decoder.decode(d), null !== f && -1 !== f && c.emit(f); while (-1 !== f && -1 != d.get());
                    this._decoder = null
                }
                return c.string()
            }
        };
        c.TextEncoder = c.TextEncoder || M;
        c.TextDecoder = c.TextDecoder || N
    }
})(this);
! function () {
    OT.Rumor = {
        MessageType: {
            SUBSCRIBE: 0,
            UNSUBSCRIBE: 1,
            MESSAGE: 2,
            CONNECT: 3,
            DISCONNECT: 4,
            PING: 7,
            PONG: 8,
            STATUS: 9
        }
    }
}(this);
! function () {
    var c;
    c = {
        1002: "The endpoint is terminating the connection due to a protocol error. (CLOSE_PROTOCOL_ERROR)",
        1003: "The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data). (CLOSE_UNSUPPORTED)",
        1004: "The endpoint is terminating the connection because a data frame was received that is too large. (CLOSE_TOO_LARGE)",
        1005: "Indicates that no status code was provided even though one was expected. (CLOSE_NO_STATUS)",
        1006: "Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected. (CLOSE_ABNORMAL)",
        1007: "Indicates that an endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [RFC3629] data within a text message)",
        1008: "Indicates that an endpoint is terminating the connection because it has received a message that violates its policy.  This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy",
        1009: "Indicates that an endpoint is terminating the connection because it has received a message that is too big for it to process",
        1011: "Indicates that a server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request",
        4001: "Connectivity loss was detected as it was too long since the socket received the last PONG message"
    };
    OT.Rumor.SocketError = function (a, c) {
        this.code = a;
        this.message = c
    };
    OT.Rumor.Socket = function (a, e, h) {
        var d, b, l, g, f,
            k, n, m, q, r, s, p = OT.$.statable(this, ["disconnected", "error", "connected", "connecting", "disconnecting"], "disconnected", function (a) {
                switch (a) {
                case "disconnected":
                case "error":
                    if (d = null, f) {
                        var b;
                        if (!r ? 0 : 44900 <= OT.$.now() - r) b = Error(c[4001]), b.code = 4001;
                        f(b)
                    }
                }
            }),
            u = function (a, b) {
                if (null === b || !OT.$.isFunction(b)) throw Error("The Rumor.Socket " + a + " callback must be a valid function or null");
            },
            v = function (a) {
                OT.error("Rumor.Socket: " + a);
                a = new OT.Rumor.SocketError(null, a || "Unknown Socket Error");
                q && clearTimeout(q);
                p("error");
                "connecting" === this.previousState && n && (n(a, null), n = null);
                g && g(a)
            }.bind(this),
            t = function D(a) {
                d && (void 0 === a && (a = 0), m && clearTimeout(m), 0 < d.bufferedAmount && 10 >= a + 1 ? m = setTimeout(D, 100, a + 1) : (p("disconnecting"), m && (clearTimeout(m), m = null), d.close()))
            },
            A = function G() {
                this.is("connected") && ((!r ? 0 : 44900 <= OT.$.now() - r) ? E({
                    code: 4001
                }) : (d.send(OT.Rumor.Message.Ping().serialize()), s = setTimeout(G.bind(this), 9E3)))
            }.bind(this),
            x = function () {
                q && clearTimeout(q);
                d.send(OT.Rumor.Message.Connect(b, e).serialize());
                p("connected");
                n && (n(null, b), n = null);
                l && l(b);
                setTimeout(function () {
                    r = OT.$.now();
                    A()
                }, 9E3)
            },
            w = function () {
                v("Timed out while waiting for the Rumor socket to connect.")
            },
            z = function () {},
            E = function (a) {
                q && clearTimeout(q);
                s && clearTimeout(s);
                if (1E3 !== a.code && 1001 !== a.code) {
                    var b = a.reason || a.message;
                    !b && c.hasOwnProperty(a.code) && (b = c[a.code]);
                    v("Rumor Socket Disconnected: " + b)
                }
                this.isNot("error") && p("disconnected")
            }.bind(this),
            F = function (a) {
                r = OT.$.now();
                k && (a = OT.Rumor.Message.deserialize(a.data), a.type !==
                    OT.Rumor.MessageType.PONG && k(a))
            };
        this.publish = function (a, b, c) {
            d.send(OT.Rumor.Message.Publish(a, b, c).serialize())
        };
        this.subscribe = function (a) {
            d.send(OT.Rumor.Message.Subscribe(a).serialize())
        };
        this.unsubscribe = function (a) {
            d.send(OT.Rumor.Message.Unsubscribe(a).serialize())
        };
        this.connect = function (c, f) {
            if (this.is("connecting", "connected")) f(new OT.Rumor.SocketError(null, "Rumor.Socket cannot connect when it is already connecting or connected."));
            else {
                b = c;
                n = f;
                try {
                    p("connecting"), d = new(h || WebSocket)(a),
                    d.binaryType = "arraybuffer", d.onopen = x, d.onclose = E, d.onerror = z, d.onmessage = F, q = setTimeout(w, OT.Rumor.Socket.CONNECT_TIMEOUT)
                } catch (g) {
                    OT.error(g), v("Could not connect to the Rumor socket, possibly because of a blocked port.")
                }
            }
        };
        this.disconnect = function () {
            q && clearTimeout(q);
            s && clearTimeout(s);
            d ? 3 === d.readyState ? this.isNot("error") && p("disconnected") : (this.is("connected") && d.send(OT.Rumor.Message.Disconnect().serialize()), t()) : this.isNot("error") && p("disconnected")
        };
        Object.defineProperties(this, {
            id: {
                get: function () {
                    return b
                }
            },
            onOpen: {
                set: function (a) {
                    u("onOpen", a);
                    l = a
                },
                get: function () {
                    return l
                }
            },
            onError: {
                set: function (a) {
                    u("onError", a);
                    g = a
                },
                get: function () {
                    return g
                }
            },
            onClose: {
                set: function (a) {
                    u("onClose", a);
                    f = a
                },
                get: function () {
                    return f
                }
            },
            onMessage: {
                set: function (a) {
                    u("onMessage", a);
                    k = a
                },
                get: function () {
                    return k
                }
            }
        })
    };
    OT.Rumor.Socket.CONNECT_TIMEOUT = 15E3
}(this);
! function () {
    OT.Rumor.Message = function (c, a, e, h) {
        this.type = c;
        this.toAddress = a;
        this.headers = e;
        this.data = h;
        this.transactionId = this.headers["TRANSACTION-ID"];
        this.status = this.headers.STATUS;
        this.isError = !(this.status && "2" === this.status[0])
    };
    OT.Rumor.Message.prototype.serialize = function () {
        var c = 8,
            a = 7,
            e = [],
            h = [],
            d = [],
            b, l, g;
        a++;
        for (l = 0; l < this.toAddress.length; l++) e.push((new TextEncoder("utf-8")).encode(this.toAddress[l])), a += 2, a += e[l].length;
        a++;
        l = 0;
        for (b in this.headers) h.push((new TextEncoder("utf-8")).encode(b)),
            d.push((new TextEncoder("utf-8")).encode(this.headers[b])), a += 4, a += h[l].length, a += d[l].length, l++;
        b = (new TextEncoder("utf-8")).encode(this.data);
        var a = a + b.length,
            f = new ArrayBuffer(a),
            k = new Uint8Array(f, 0, a),
            a = a - 4;
        k[0] = (a & 4278190080) >>> 24;
        k[1] = (a & 16711680) >>> 16;
        k[2] = (a & 65280) >>> 8;
        k[3] = (a & 255) >>> 0;
        k[4] = 0;
        k[5] = 0;
        k[6] = this.type;
        k[7] = this.toAddress.length;
        for (l = 0; l < e.length; l++) {
            a = e[l];
            k[c++] = a.length >> 8 & 255;
            k[c++] = a.length >> 0 & 255;
            for (g = 0; g < a.length; g++) k[c++] = a[g]
        }
        k[c++] = h.length;
        for (l = 0; l < h.length; l++) {
            a =
                h[l];
            k[c++] = a.length >> 8 & 255;
            k[c++] = a.length >> 0 & 255;
            for (g = 0; g < a.length; g++) k[c++] = a[g];
            a = d[l];
            k[c++] = a.length >> 8 & 255;
            k[c++] = a.length >> 0 & 255;
            for (g = 0; g < a.length; g++) k[c++] = a[g]
        }
        for (l = 0; l < b.length; l++) k[c++] = b[l];
        return f
    };
    OT.Rumor.Message.deserialize = function (c) {
        if ("undefined" !== typeof Buffer && Buffer.isBuffer(c)) {
            var a = c,
                e = new ArrayBuffer(a.length),
                h = new Uint8Array(e);
            for (c = 0; c < a.length; ++c) h[c] = a[c];
            c = e
        }
        var d = 8,
            b = new Uint8Array(c),
            l, g, f, k, n, a = b[6],
            h = [];
        for (n = 0; n < b[7]; n++) k = b[d++] << 8, k += b[d++], l = new Uint8Array(c,
            d, k), h[n] = (new TextDecoder("utf-8")).decode(l), d += k;
        g = b[d++];
        e = {};
        for (n = 0; n < g; n++) k = b[d++] << 8, k += b[d++], l = new Uint8Array(c, d, k), f = (new TextDecoder("utf-8")).decode(l), d += k, k = b[d++] << 8, k += b[d++], l = new Uint8Array(c, d, k), l = (new TextDecoder("utf-8")).decode(l), e[f] = l, d += k;
        c = new Uint8Array(c, d);
        c = (new TextDecoder("utf-8")).decode(c);
        return new OT.Rumor.Message(a, h, e, c)
    };
    OT.Rumor.Message.Connect = function (c, a) {
        return new OT.Rumor.Message(OT.Rumor.MessageType.CONNECT, [], {
                uniqueId: c,
                notifyDisconnectAddress: a
            },
            "")
    };
    OT.Rumor.Message.Disconnect = function () {
        return new OT.Rumor.Message(OT.Rumor.MessageType.DISCONNECT, [], [], "")
    };
    OT.Rumor.Message.Subscribe = function (c) {
        return new OT.Rumor.Message(OT.Rumor.MessageType.SUBSCRIBE, c, [], "")
    };
    OT.Rumor.Message.Unsubscribe = function (c) {
        return new OT.Rumor.Message(OT.Rumor.MessageType.UNSUBSCRIBE, c, [], "")
    };
    OT.Rumor.Message.Publish = function (c, a, e) {
        return new OT.Rumor.Message(OT.Rumor.MessageType.MESSAGE, c, e || [], a)
    };
    OT.Rumor.Message.Ping = function () {
        return new OT.Rumor.Message(OT.Rumor.MessageType.PING, [], [], "")
    }
}(this);
! function () {
    OT.Raptor = {
        Actions: {
            CONNECT: 100,
            CREATE: 101,
            UPDATE: 102,
            DELETE: 103,
            STATE: 104,
            FORCE_DISCONNECT: 105,
            FORCE_UNPUBLISH: 106,
            SIGNAL: 107,
            CREATE_ARCHIVE: 108,
            CLOSE_ARCHIVE: 109,
            START_RECORDING_SESSION: 110,
            STOP_RECORDING_SESSION: 111,
            START_RECORDING_STREAM: 112,
            STOP_RECORDING_STREAM: 113,
            LOAD_ARCHIVE: 114,
            START_PLAYBACK: 115,
            STOP_PLAYBACK: 116,
            APPSTATE_PUT: 117,
            APPSTATE_DELETE: 118,
            OFFER: 119,
            ANSWER: 120,
            PRANSWER: 121,
            CANDIDATE: 122,
            SUBSCRIBE: 123,
            UNSUBSCRIBE: 124,
            QUERY: 125,
            SDP_ANSWER: 126,
            PONG: 127,
            REGISTER: 128,
            QUALITY_CHANGED: 129
        },
        Types: {
            RPC_REQUEST: 100,
            RPC_RESPONSE: 101,
            STREAM: 102,
            ARCHIVE: 103,
            CONNECTION: 104,
            APPSTATE: 105,
            CONNECTIONCOUNT: 106,
            MODERATION: 107,
            SIGNAL: 108,
            SUBSCRIBER: 110,
            JSEP: 109
        }
    }
}(this);
! function () {
    OT.Raptor.serializeMessage = function (c) {
        return JSON.stringify(c)
    };
    OT.Raptor.deserializeMessage = function (c) {
        if (0 === c.length) return {};
        c = JSON.parse(c);
        var a = c.uri.substr(1).split("/");
        a.shift();
        "" === a[a.length - 1] && a.pop();
        c.params = {};
        for (var e = 0, h = a.length; e < h - 1; e += 2) c.params[a[e]] = a[e + 1];
        c.resource = 0 === a.length % 2 ? "channel" === a[a.length - 2] && 6 < a.length ? a[a.length - 4] + "_" + a[a.length - 2] : a[a.length - 2] : "channel" === a[a.length - 1] && 5 < a.length ? a[a.length - 3] + "_" + a[a.length - 1] : a[a.length - 1];
        c.signature =
            c.resource + "#" + c.method;
        return c
    };
    OT.Raptor.unboxFromRumorMessage = function (c) {
        var a = OT.Raptor.deserializeMessage(c.data);
        a.transactionId = c.transactionId;
        a.fromAddress = c.headers["X-TB-FROM-ADDRESS"];
        return a
    };
    OT.Raptor.Message = {};
    OT.Raptor.Message.connections = {};
    OT.Raptor.Message.connections.create = function (c, a, e) {
        return OT.Raptor.serializeMessage({
            method: "create",
            uri: "/v2/partner/" + c + "/session/" + a + "/connection/" + e,
            content: {
                userAgent: navigator.userAgent
            }
        })
    };
    OT.Raptor.Message.connections.destroy = function (c,
        a, e) {
        return OT.Raptor.serializeMessage({
            method: "delete",
            uri: "/v2/partner/" + c + "/session/" + a + "/connection/" + e,
            content: {}
        })
    };
    OT.Raptor.Message.sessions = {};
    OT.Raptor.Message.sessions.get = function (c, a) {
        return OT.Raptor.serializeMessage({
            method: "read",
            uri: "/v2/partner/" + c + "/session/" + a,
            content: {}
        })
    };
    OT.Raptor.Message.streams = {};
    OT.Raptor.Message.streams.get = function (c, a, e) {
        return OT.Raptor.serializeMessage({
            method: "read",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e,
            content: {}
        })
    };
    OT.Raptor.Message.streams.create =
        function (c, a, e, h, d, b, l, g, f, k, n, m) {
            var q = [];
            void 0 !== g && q.push({
                id: "audio1",
                type: "audio",
                active: g
            });
            void 0 !== f && (d = {
                id: "video1",
                type: "video",
                active: f,
                width: b,
                height: l,
                orientation: d
            }, k && (d.frameRate = k), q.push(d));
            h = {
                id: e,
                name: h,
                channel: q
            };
            n && (h.minBitrate = n);
            m && (h.maxBitrate = m);
            return OT.Raptor.serializeMessage({
                method: "create",
                uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e,
                content: h
            })
    };
    OT.Raptor.Message.streams.destroy = function (c, a, e) {
        return OT.Raptor.serializeMessage({
            method: "delete",
            uri: "/v2/partner/" +
                c + "/session/" + a + "/stream/" + e,
            content: {}
        })
    };
    OT.Raptor.Message.streams.offer = function (c, a, e, h) {
        return OT.Raptor.serializeMessage({
            method: "offer",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e,
            content: {
                sdp: h
            }
        })
    };
    OT.Raptor.Message.streams.answer = function (c, a, e, h) {
        return OT.Raptor.serializeMessage({
            method: "answer",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e,
            content: {
                sdp: h
            }
        })
    };
    OT.Raptor.Message.streams.candidate = function (c, a, e, h) {
        return OT.Raptor.serializeMessage({
            method: "candidate",
            uri: "/v2/partner/" +
                c + "/session/" + a + "/stream/" + e,
            content: h
        })
    };
    OT.Raptor.Message.streamChannels = {};
    OT.Raptor.Message.streamChannels.update = function (c, a, e, h, d) {
        return OT.Raptor.serializeMessage({
            method: "update",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/channel/" + h,
            content: d
        })
    };
    OT.Raptor.Message.subscribers = {};
    OT.Raptor.Message.subscribers.create = function (c, a, e, h, d, b) {
        d = {
            id: h,
            connection: d,
            keyManagementMethod: OT.$.supportedCryptoScheme(),
            bundleSupport: OT.$.supportsBundle(),
            rtcpMuxSupport: OT.$.supportsRtcpMux()
        };
        b && (d.channel = b);
        return OT.Raptor.serializeMessage({
            method: "create",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/subscriber/" + h,
            content: d
        })
    };
    OT.Raptor.Message.subscribers.destroy = function (c, a, e, h) {
        return OT.Raptor.serializeMessage({
            method: "delete",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/subscriber/" + h,
            content: {}
        })
    };
    OT.Raptor.Message.subscribers.update = function (c, a, e, h, d) {
        return OT.Raptor.serializeMessage({
            method: "update",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/subscriber/" +
                h,
            content: d
        })
    };
    OT.Raptor.Message.subscribers.candidate = function (c, a, e, h, d) {
        return OT.Raptor.serializeMessage({
            method: "candidate",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/subscriber/" + h,
            content: d
        })
    };
    OT.Raptor.Message.subscribers.offer = function (c, a, e, h, d) {
        return OT.Raptor.serializeMessage({
            method: "offer",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/subscriber/" + h,
            content: {
                sdp: d
            }
        })
    };
    OT.Raptor.Message.subscribers.answer = function (c, a, e, h, d) {
        return OT.Raptor.serializeMessage({
            method: "answer",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/subscriber/" + h,
            content: {
                sdp: d
            }
        })
    };
    OT.Raptor.Message.subscriberChannels = {};
    OT.Raptor.Message.subscriberChannels.update = function (c, a, e, h, d, b) {
        return OT.Raptor.serializeMessage({
            method: "update",
            uri: "/v2/partner/" + c + "/session/" + a + "/stream/" + e + "/subscriber/" + h + "/channel/" + d,
            content: b
        })
    };
    OT.Raptor.Message.signals = {};
    OT.Raptor.Message.signals.create = function (c, a, e, h, d) {
        var b = {};
        void 0 !== h && (b.type = h);
        void 0 !== d && (b.data = d);
        return OT.Raptor.serializeMessage({
            method: "signal",
            uri: "/v2/partner/" + c + "/session/" + a + (void 0 !== e ? "/connection/" + e : "") + "/signal/" + OT.$.uuid(),
            content: b
        })
    }
}(this);
! function () {
    OT.Signal = function (c, a, e) {
        a = function (a) {
            var b = null;
            null === a || void 0 === a ? b = {
                code: 400,
                reason: "The signal type was null or undefined. Either set it to a String value or omit it"
            } : 128 < a.length ? b = {
                code: 413,
                reason: "The signal type was too long, the maximum length of it is 128 characters"
            } : /^[a-zA-Z0-9\-\._~]+$/.exec(a) || (b = {
                code: 400,
                reason: "The signal type was invalid, it can only contain letters, numbers, '-', '_', and '~'."
            });
            return b
        };
        var h = function (a) {
            var b = null;
            if (null === a || void 0 === a) b = {
                code: 400,
                reason: "The signal data was null or undefined. Either set it to a String value or omit it"
            };
            else try {
                8192 < JSON.stringify(a).length && (b = {
                    code: 413,
                    reason: "The data field was too long, the maximum size of it is 8192 characters"
                })
            } catch (c) {
                b = {
                    code: 400,
                    reason: "The data field was not valid JSON"
                }
            }
            return b
        };
        this.toRaptorMessage = function () {
            var a = this.to;
            a && "string" !== typeof a && (a = a.id);
            return OT.Raptor.Message.signals.create(OT.APIKEY, c, a, this.type, this.data)
        };
        this.toHash = function () {
            return e
        };
        this.error =
            null;
        e && (e.hasOwnProperty("data") && (this.data = OT.$.clone(e.data), this.error = h(this.data)), e.hasOwnProperty("to") && (this.to = e.to, this.error || (this.error = !this.to ? {
            code: 400,
            reason: "The signal type was null or an empty String. Either set it to a non-empty String value or omit it"
        } : !(this.to instanceof OT.Connection || this.to instanceof OT.Session) ? {
            code: 400,
            reason: "The To field was invalid"
        } : null)), e.hasOwnProperty("type") && (this.error || (this.error = a(e.type)), this.type = e.type));
        this.valid = null === this.error
    }
}(this);
! function () {
    function c(a, c) {
        this.code = a;
        this.reason = c
    }
    OT.Raptor.Socket = function (a, e, h, d) {
        var b, l, g, f, k, n = OT.$.statable(this, ["disconnected", "connecting", "connected", "error", "disconnecting"], "disconnected"),
            m = function (a) {
                a ? n("error") : n("connected");
                k.apply(null, arguments)
            },
            q = function (a) {
                var b = this.is("disconnecting") ? "clientDisconnected" : "networkDisconnected";
                a && 4001 === a.code && (b = "networkTimedout");
                n("disconnected");
                f.onClose(b)
            }.bind(this),
            r = function () {};
        this.connect = function (a, c, d) {
            if (this.is("disconnected",
                "error")) {
                n("connecting");
                b = c.sessionId;
                l = a;
                k = d;
                a = OT.$.uuid();
                var v = "/v2/partner/" + OT.APIKEY + "/session/" + b;
                g = new OT.Rumor.Socket(e, h);
                g.onClose = q;
                g.onMessage = f.dispatch.bind(f);
                g.connect(a, function (a) {
                    a ? (a.message = "WebSocketConnection:" + a.code + ":" + a.message, m(a)) : (g.onError = r, OT.debug("Raptor Socket connected. Subscribing to " + v + " on " + e), g.subscribe([v]), a = OT.Raptor.Message.connections.create(OT.APIKEY, b, g.id), this.publish(a, {
                        "X-TB-TOKEN-AUTH": l
                    }, function (a) {
                        a ? (a.message = "ConnectToSession:" + a.code +
                            ":Received error response to connection create message.", m(a)) : this.publish(OT.Raptor.Message.sessions.get(OT.APIKEY, b), function (a) {
                            a && (a.message = "GetSessionState:" + a.code + ":Received error response to session read");
                            m.apply(null, arguments)
                        })
                    }.bind(this)))
                }.bind(this))
            } else OT.warn("Cannot connect the Raptor Socket as it is currently connected. You should disconnect first.")
        };
        this.disconnect = function () {
            this.is("disconnected") || (n("disconnecting"), g.disconnect())
        };
        this.publish = function (a, b, c) {
            if (g.isNot("connected")) OT.error("OT.Raptor.Socket: cannot publish until the socket is connected." +
                a);
            else {
                var d = OT.$.uuid(),
                    e = {},
                    k;
                b && (OT.$.isFunction(b) ? (e = {}, k = b) : e = b);
                !k && (c && OT.$.isFunction(c)) && (k = c);
                k && f.registerCallback(d, k);
                OT.debug("OT.Raptor.Socket Publish (ID:" + d + ") ");
                OT.debug(a);
                g.publish([h], a, OT.$.extend(e, {
                    "Content-Type": "application/x-raptor+v2",
                    "TRANSACTION-ID": d,
                    "X-TB-FROM-ADDRESS": g.id
                }));
                return d
            }
        };
        this.streamCreate = function (a, c, d, f, g, e, h, k, l, m) {
            var n = OT.$.uuid();
            a = OT.Raptor.Message.streams.create(OT.APIKEY, b, n, a, c, d, f, g, e, h, k, l);
            this.publish(a, function (a) {
                m(a, n)
            })
        };
        this.streamDestroy =
            function (a) {
                this.publish(OT.Raptor.Message.streams.destroy(OT.APIKEY, b, a))
        };
        this.streamChannelUpdate = function (a, c, d) {
            this.publish(OT.Raptor.Message.streamChannels.update(OT.APIKEY, b, a, c, d))
        };
        this.subscriberCreate = function (a, c, d, f) {
            this.publish(OT.Raptor.Message.subscribers.create(OT.APIKEY, b, a, c, g.id, d), f)
        };
        this.subscriberDestroy = function (a, c) {
            this.publish(OT.Raptor.Message.subscribers.destroy(OT.APIKEY, b, a, c))
        };
        this.subscriberUpdate = function (a, c, d) {
            this.publish(OT.Raptor.Message.subscribers.update(OT.APIKEY,
                b, a, c, d))
        };
        this.subscriberChannelUpdate = function (a, c, d, f) {
            this.publish(OT.Raptor.Message.subscriberChannels.update(OT.APIKEY, b, a, c, d, f))
        };
        this.forceDisconnect = function (a, c) {
            this.publish(OT.Raptor.Message.connections.destroy(OT.APIKEY, b, a), c)
        };
        this.forceUnpublish = function (a, c) {
            this.publish(OT.Raptor.Message.streams.destroy(OT.APIKEY, b, a), c)
        };
        this.jsepCandidate = function (a, c) {
            this.publish(OT.Raptor.Message.streams.candidate(OT.APIKEY, b, a, c))
        };
        this.jsepCandidateP2p = function (a, c, d) {
            this.publish(OT.Raptor.Message.subscribers.candidate(OT.APIKEY,
                b, a, c, d))
        };
        this.jsepOffer = function (a, c) {
            this.publish(OT.Raptor.Message.streams.offer(OT.APIKEY, b, a, c))
        };
        this.jsepOfferP2p = function (a, c, d) {
            this.publish(OT.Raptor.Message.subscribers.offer(OT.APIKEY, b, a, c, d))
        };
        this.jsepAnswer = function (a, c) {
            this.publish(OT.Raptor.Message.streams.answer(OT.APIKEY, b, a, c))
        };
        this.jsepAnswerP2p = function (a, c, d) {
            this.publish(OT.Raptor.Message.subscribers.answer(OT.APIKEY, b, a, c, d))
        };
        this.signal = function (a, d) {
            var f = new OT.Signal(b, g.id, a || {});
            f.valid ? this.publish(f.toRaptorMessage(),
                function (a) {
                    var b;
                    a && (b = new c(a.code, a.message));
                    d && OT.$.isFunction(d) && d(b, f.toHash())
                }) : d && OT.$.isFunction(d) && d(new c(f.error.code, f.error.reason), f.toHash())
        };
        OT.$.defineGetters(this, {
            id: function () {
                return g && g.id
            },
            sessionId: function () {
                return b
            },
            dispatcher: function () {
                return f
            }
        });
        null == d && (d = new OT.Raptor.Dispatcher);
        f = d
    }
}(this);
! function () {
    OT.Raptor.Dispatcher = function () {
        "undefined" !== typeof EventEmitter ? EventEmitter.call(this) : (OT.$.eventing(this, !0), this.emit = this.trigger);
        this.callbacks = {}
    };
    "undefined" !== typeof EventEmitter && util.inherits(OT.Raptor.Dispatcher, EventEmitter);
    OT.Raptor.Dispatcher.prototype.registerCallback = function (c, a) {
        this.callbacks[c] = a
    };
    OT.Raptor.Dispatcher.prototype.triggerCallback = function (c) {
        if (c) {
            var a = this.callbacks[c];
            if (a && OT.$.isFunction(a)) {
                var e = Array.prototype.slice.call(arguments);
                e.shift();
                a.apply(null, e)
            }
            delete this.callbacks[c]
        }
    };
    OT.Raptor.Dispatcher.prototype.onClose = function (c) {
        this.trigger("close", c)
    };
    OT.Raptor.Dispatcher.prototype.dispatch = function (c) {
        if (c.type === OT.Rumor.MessageType.STATUS) {
            OT.debug("OT.Raptor.dispatch: STATUS");
            OT.debug(c);
            var a;
            c.isError && (a = new OT.Error(c.status));
            this.triggerCallback(c.transactionId, a, c)
        } else switch (c = OT.Raptor.unboxFromRumorMessage(c), OT.debug("OT.Raptor.dispatch " + c.signature), OT.debug(c), c.resource) {
        case "session":
            this.dispatchSession(c);
            break;
        case "connection":
            this.dispatchConnection(c);
            break;
        case "stream":
            this.dispatchStream(c);
            break;
        case "stream_channel":
            this.dispatchStreamChannel(c);
            break;
        case "subscriber":
            this.dispatchSubscriber(c);
            break;
        case "subscriber_channel":
            this.dispatchSubscriberChannel(c);
            break;
        case "signal":
            this.dispatchSignal(c);
            break;
        case "archive":
            this.dispatchArchive(c);
            break;
        default:
            OT.warn("OT.Raptor.dispatch: Type " + c.resource + " is not currently implemented")
        }
    };
    OT.Raptor.Dispatcher.prototype.dispatchSession = function (c) {
        switch (c.method) {
        case "read":
            this.emit("session#read",
                c.content, c.transactionId);
            break;
        default:
            OT.warn("OT.Raptor.dispatch: " + c.signature + " is not currently implemented")
        }
    };
    OT.Raptor.Dispatcher.prototype.dispatchConnection = function (c) {
        switch (c.method) {
        case "created":
            this.emit("connection#created", c.content);
            break;
        case "deleted":
            this.emit("connection#deleted", c.params.connection, c.reason);
            break;
        default:
            OT.warn("OT.Raptor.dispatch: " + c.signature + " is not currently implemented")
        }
    };
    OT.Raptor.Dispatcher.prototype.dispatchStream = function (c) {
        switch (c.method) {
        case "created":
            this.emit("stream#created",
                c.content, c.transactionId);
            break;
        case "deleted":
            this.emit("stream#deleted", c.params.stream, c.reason);
            break;
        case "updated":
            this.emit("stream#updated", c.params.stream, c.content);
            break;
        case "generateoffer":
        case "answer":
        case "pranswer":
        case "offer":
        case "candidate":
            this.dispatchJsep(c.method, c);
            break;
        default:
            OT.warn("OT.Raptor.dispatch: " + c.signature + " is not currently implemented")
        }
    };
    OT.Raptor.Dispatcher.prototype.dispatchStreamChannel = function (c) {
        switch (c.method) {
        case "updated":
            this.emit("streamChannel#updated",
                c.params.stream, c.params.channel, c.content);
            break;
        default:
            OT.warn("OT.Raptor.dispatch: " + c.signature + " is not currently implemented")
        }
    };
    OT.Raptor.Dispatcher.prototype.dispatchJsep = function (c, a) {
        this.emit("jsep#" + c, a.params.stream, a.fromAddress, a)
    };
    OT.Raptor.Dispatcher.prototype.dispatchSubscriberChannel = function (c) {
        switch (c.method) {
        case "updated":
            this.emit("subscriberChannel#updated", c.params.stream, c.params.channel, c.content);
            break;
        case "update":
            this.emit("subscriberChannel#update", c.params.subscriber,
                c.params.stream, c.content);
            break;
        default:
            OT.warn("OT.Raptor.dispatch: " + c.signature + " is not currently implemented")
        }
    };
    OT.Raptor.Dispatcher.prototype.dispatchSubscriber = function (c) {
        switch (c.method) {
        case "created":
            this.emit("subscriber#created", c.params.stream, c.fromAddress, c.content.id);
            break;
        case "deleted":
            this.dispatchJsep("unsubscribe", c);
            this.emit("subscriber#deleted", c.params.stream, c.fromAddress);
            break;
        case "generateoffer":
        case "answer":
        case "pranswer":
        case "offer":
        case "candidate":
            this.dispatchJsep(c.method,
                c);
            break;
        default:
            OT.warn("OT.Raptor.dispatch: " + c.signature + " is not currently implemented")
        }
    };
    OT.Raptor.Dispatcher.prototype.dispatchSignal = function (c) {
        "signal" !== c.method ? OT.warn("OT.Raptor.dispatch: " + c.signature + " is not currently implemented") : this.emit("signal", c.fromAddress, c.content.type, c.content.data)
    };
    OT.Raptor.Dispatcher.prototype.dispatchArchive = function (c) {
        switch (c.method) {
        case "create":
            this.emit("archive#create", c.content);
            break;
        case "updated":
            this.emit("archive#updated", c.params.archive,
                c.content)
        }
    }
}(this);
(function (c) {
    function a(a, b) {
        var c = a.channel.map(function (a) {
            return new OT.StreamChannel(a)
        });
        return new OT.Stream(a.id, a.name, a.creationTime, b.connections.get(a.connection.id), b, c)
    }

    function e(c, b) {
        if (!b.streams.has(c.id)) {
            var e = a(c, b);
            b.streams.add(e);
            return e
        }
    }

    function h(a, b) {
        if (!b.archives.has(a.id)) {
            var c = new OT.Archive(a.id, a.name, a.status);
            b.archives.add(c);
            return c
        }
    }
    OT.publishers = new OT.Collection("guid");
    OT.subscribers = new OT.Collection("widgetId");
    OT.sessions = new OT.Collection;
    c.OT.SessionDispatcher =
        function (a) {
            var b = new OT.Raptor.Dispatcher;
            b.on("close", function (b) {
                var c = a.connection;
                c && (c.destroyedReason ? OT.debug("OT.Raptor.Socket: Socket was closed but the connection had already been destroyed. Reason: " + c.destroyedReason) : c.destroy(b))
            });
            b.on("session#read", function (c, f) {
                var k = {},
                    l;
                k.streams = [];
                k.connections = [];
                k.archives = [];
                c.connection.forEach(function (b) {
                    l = OT.Connection.fromHash(b);
                    k.connections.push(l);
                    a.connections.add(l)
                });
                c.stream.forEach(function (b) {
                    k.streams.push(e(b, a))
                });
                c.archives.forEach(function (b) {
                    k.archives.push(h(b,
                        a))
                });
                a._.subscriberMap = {};
                b.triggerCallback(f, null, k)
            });
            b.on("connection#created", function (b) {
                b = OT.Connection.fromHash(b);
                a.connection && b.id !== a.connection.id && a.connections.add(b)
            });
            b.on("connection#deleted", function (b, c) {
                b = a.connections.get(b);
                b.destroy(c)
            });
            b.on("stream#created", function (c, f) {
                c = e(c, a);
                c.publisher && (c.publisher.stream = c);
                b.triggerCallback(f, null, c)
            });
            b.on("stream#deleted", function (b, c) {
                var e = a.streams.get(b);
                e ? e.destroy(c) : OT.error("OT.Raptor.dispatch: A stream does not exist with the id of " +
                    b + ", for stream#deleted message!")
            });
            b.on("stream#updated", function (b, c) {
                var e = a.streams.get(b);
                e ? e._.update(c) : OT.error("OT.Raptor.dispatch: A stream does not exist with the id of " + b + ", for stream#updated message!")
            });
            b.on("streamChannel#updated", function (b, c, e) {
                var h;
                !b || !(h = a.streams.get(b)) ? OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for streamChannel message!") : h._.updateChannel(c, e)
            });
            var c = function (a, b, c, d) {
                var e, h;
                switch (a) {
                case "offer":
                    h = [];
                    (b = OT.subscribers.find({
                        streamId: b
                    })) && h.push(b);
                    break;
                case "answer":
                case "pranswer":
                case "generateoffer":
                case "unsubscribe":
                    console.warn("generateoffer maybe?");
                    h = OT.publishers.where({
                        streamId: b
                    });
                    break;
                case "candidate":
                    h = OT.publishers.where({
                        streamId: b
                    }).concat(OT.subscribers.where({
                        streamId: b
                    }));
                    break;
                default:
                    OT.warn("OT.Raptor.dispatch: jsep#" + a + " is not currently implemented");
                    return
                }
                if (0 !== h.length) {
                    e = h[0].session.connections.get(c);
                    if (!e && c.match(/^symphony\./)) e = OT.Connection.fromHash({
                        id: c,
                        creationTime: Date.now()
                    }), h[0].session.connections.add(e);
                    else if (!e) {
                        OT.warn("OT.Raptor.dispatch: Messsage comes from a connection (" + c + ") that we do not know about. The message was ignored.");
                        return
                    }
                    h.forEach(function (b) {
                        b.processMessage(a, e, d)
                    })
                }
            };
            b.on("jsep#offer", c.bind(null, "offer"));
            b.on("jsep#answer", c.bind(null, "answer"));
            b.on("jsep#pranswer", c.bind(null, "pranswer"));
            b.on("jsep#generateoffer", c.bind(null, "generateoffer"));
            b.on("jsep#unsubscribe", c.bind(null, "unsubscribe"));
            b.on("jsep#candidate",
                c.bind(null, "candidate"));
            b.on("subscriberChannel#updated", function (b, c, e) {
                !b || !a.streams.has(b) ? OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriberChannel#updated message!") : a.streams.get(b)._.updateChannel(c, e)
            });
            b.on("subscriberChannel#update", function (b, c, e) {
                !c || !a.streams.has(c) ? OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriberChannel#update message!") : OT.subscribers.has(b) ? OT.subscribers.get(b).disableVideo(e.active) :
                    OT.error("OT.Raptor.dispatch: Unable to determine subscriberId, or the subscriber does not exist, for subscriberChannel#update message!")
            });
            b.on("subscriber#created", function (b, c, e) {
                (b = b ? a.streams.get(b) : null) ? a._.subscriberMap[c + "_" + b.id] = e : OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriber#created message!")
            });
            b.on("subscriber#deleted", function (b, c) {
                var e = b ? a.streams.get(b) : null;
                e ? delete a._.subscriberMap[c + "_" + e.id] : OT.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriber#created message!")
            });
            b.on("signal", function (b, c, e) {
                a._.dispatchSignal(a.connections.get(b), c, e)
            });
            b.on("archive#create", function (b) {
                h(b, a)
            });
            b.on("archive#updated", function (b, c) {
                var e = a.archives.get(b);
                e ? e._.update(c) : OT.error("OT.Raptor.dispatch: An archive does not exist with the id of " + b + ", for archive#updated message!")
            });
            return b
    }
})(window);
! function (c) {
    var a = new function () {
        var a = !1,
            h = !1,
            d = function () {
                h && a && OT.dispatchEvent(new OT.EnvLoadedEvent(OT.Event.names.ENV_LOADED))
            },
            b = function () {
                h = !0;
                OT.$.on(c, "unload", function () {
                    OT.publishers.destroy();
                    OT.subscribers.destroy();
                    OT.sessions.destroy()
                });
                OT.Config.load(OT.properties.configURL);
                d()
            },
            l = function () {
                a = !0;
                OT.Config.off("dynamicConfigChanged", l);
                OT.Config.off("dynamicConfigLoadFailed", g);
                d()
            },
            g = function () {
                l()
            };
        OT.Config.on("dynamicConfigChanged", l);
        OT.Config.on("dynamicConfigLoadFailed",
            g);
        "complete" === document.readyState || "interactive" === document.readyState && document.body ? b() : document.addEventListener ? document.addEventListener("DOMContentLoaded", b, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
            "complete" === document.readyState && b()
        });
        this.onLoad = function (b) {
            if (h && a) b();
            else OT.on(OT.Event.names.ENV_LOADED, b)
        }
    };
    OT.onLoad = function (c, h) {
        if (h) a.onLoad(c.bind(h));
        else a.onLoad(c)
    }
}(window);
! function () {
    function c(c, d, b, l) {
        var g = a[b];
        l = l ? OT.$.clone(l) : {};
        OT.error("OT.exception :: title: " + g + " (" + b + ") msg: " + d);
        l.partnerId || (l.partnerId = OT.APIKEY);
        try {
            e || (e = new OT.Analytics), e.logError(b, "tb.exception", g, {
                details: d
            }, l), OT.dispatchEvent(new OT.ExceptionEvent(OT.Event.names.EXCEPTION, d, g, b, c, c))
        } catch (f) {
            OT.error("OT.exception :: Failed to dispatch exception - " + f.toString())
        }
    }
    OT.Error = function (a, c) {
        this.code = a;
        this.message = c
    };
    var a = {
            1E3: "Failed To Load",
            1004: "Authentication error",
            1005: "Invalid Session ID",
            1006: "Connect Failed",
            1007: "Connect Rejected",
            1008: "Connect Time-out",
            1009: "Security Error",
            1010: "Not Connected",
            1011: "Invalid Parameter",
            1012: "Peer-to-peer Stream Play Failed",
            1013: "Connection Failed",
            1014: "API Response Failure",
            1500: "Unable to Publish",
            1510: "Unable to Signal",
            1520: "Unable to Force Disconnect",
            1530: "Unable to Force Unpublish",
            1540: "Unable to record archive",
            1550: "Unable to play back archive",
            1560: "Unable to create archive",
            1570: "Unable to load archive",
            2E3: "Internal Error",
            2001: "Embed Failed",
            3E3: "Archive load exception",
            3001: "Archive create exception",
            3002: "Playback stop exception",
            3003: "Playback start exception",
            3004: "Record start exception",
            3005: "Record stop exception",
            3006: "Archive load exception",
            3007: "Session recording in progress",
            3008: "Archive recording internal failure",
            4E3: "WebSocket Connection Failed",
            4001: "WebSocket Network Disconnected"
        },
        e;
    OT.handleJsException = function (a, d, b) {
        b = b || {};
        var e, g = b.session;
        g ? (e = {
                sessionId: g.sessionId
            }, g.connected && (e.connectionId = g.connection.connectionId),
            b.target || (b.target = g)) : b.sessionId && (e = {
            sessionId: b.sessionId
        }, b.target || (b.target = null));
        c(b.target, a, d, e)
    };
    OT.exceptionHandler = function (a, d, b, e, g) {
        var f;
        a && ((f = OT.components[a]) || OT.warn("Could not find the component with component ID " + a));
        c(f, d, e, g)
    };
    OT.dispatchError = function (a, c, b, e) {
        OT.error(a, c);
        b && OT.$.isFunction(b) && b.call(null, new OT.Error(a, c));
        OT.handleJsException(c, a, {
            session: e
        })
    }
}(window);
! function () {
    OT.ConnectionCapabilities = function (c) {
        c.supportsWebRTC = OT.$.castToBoolean(c.supportsWebRTC);
        this.supportsWebRTC = c.supportsWebRTC
    }
}(window);
! function () {
    OT.Connection = function (c, a, e, h, d) {
        var b;
        this.id = this.connectionId = c;
        this.creationTime = a ? Number(a) : null;
        this.data = e;
        this.capabilities = new OT.ConnectionCapabilities(h);
        this.permissions = new OT.Capabilities(d);
        this.quality = null;
        OT.$.eventing(this);
        this.destroy = function (a, c) {
            b = a || "clientDisconnected";
            !0 !== c && this.dispatchEvent(new OT.DestroyedEvent("destroyed", this, b))
        }.bind(this);
        Object.defineProperties(this, {
            destroyed: {
                get: function () {
                    return void 0 !== b
                },
                enumerable: !0
            },
            destroyedReason: {
                get: function () {
                    return b
                },
                enumerable: !0
            }
        })
    };
    OT.Connection.fromHash = function (c) {
        return new OT.Connection(c.id, c.creationTime, c.data, OT.$.extend(c.capablities || {}, {
            supportsWebRTC: !0
        }), c.permissions || [])
    }
}(window);
! function () {
    OT.StreamChannel = function (c) {
        this.id = c.id;
        this.type = c.type;
        this.active = OT.$.castToBoolean(c.active);
        this.orientation = c.orientation || OT.VideoOrientation.ROTATED_NORMAL;
        c.frameRate && (this.frameRate = parseFloat(c.frameRate, 10));
        this.width = parseInt(c.width, 10);
        this.height = parseInt(c.height, 10);
        OT.$.eventing(this, !0);
        this.update = function (a) {
            var c = {},
                h = {},
                d;
            for (d in a) {
                var b = this[d];
                switch (d) {
                case "active":
                    this.active = OT.$.castToBoolean(a[d]);
                    break;
                case "frameRate":
                    this.frameRate = parseFloat(a[d],
                        10);
                    break;
                case "width":
                case "height":
                    this[d] = parseInt(a[d], 10);
                    c[d] = this[d];
                    h[d] = b;
                    break;
                case "orientation":
                    this[d] = a[d];
                    c[d] = this[d];
                    h[d] = b;
                    break;
                default:
                    OT.warn("Tried to update unknown key " + d + " on " + this.type + " channel " + this.id);
                    return
                }
                this.trigger("update", this, d, b, this[d])
            }
            Object.keys(c).length && this.trigger("update", this, "videoDimensions", h, c);
            return !0
        }
    }
}(window);
! function () {
    var c = ["name", "archiving"];
    OT.Stream = function (a, e, h, d, b, l) {
        var g;
        this.id = this.streamId = a;
        this.name = e;
        this.creationTime = Number(h);
        this.connection = d;
        this.channel = l;
        this.publisherId = (this.publisher = OT.publishers.find({
            streamId: this.id
        })) ? this.publisher.id : null;
        OT.$.eventing(this);
        a = function (a, b, c, d) {
            switch (b) {
            case "active":
                b = "audio" === a.type ? "hasAudio" : "hasVideo";
                this[b] = d;
                break;
            case "orientation":
            case "width":
            case "height":
                this.videoDimensions = {
                    width: a.width,
                    height: a.height,
                    orientation: a.orientation
                };
                return
            }
            this.dispatchEvent(new OT.StreamUpdatedEvent(this, b, c, d))
        }.bind(this);
        var f = function () {
            return this.publisher ? this.publisher : OT.subscribers.find(function (a) {
                return a.streamId === this.id && a.session.id === b.id
            })
        }.bind(this);
        this.getChannelsOfType = function (a) {
            return this.channel.filter(function (b) {
                return b.type === a
            })
        };
        this.getChannel = function (a) {
            for (var b = 0; b < this.channel.length; ++b)
                if (this.channel[b].id === a) return this.channel[b];
            return null
        };
        e = this.getChannelsOfType("audio")[0];
        h = this.getChannelsOfType("video")[0];
        this.hasAudio = null != e && e.active;
        this.hasVideo = null != h && h.active;
        this.videoDimensions = {};
        h && (this.videoDimensions.width = h.width, this.videoDimensions.height = h.height, this.videoDimensions.orientation = h.orientation, h.on("update", a));
        if (e) e.on("update", a);
        this.setChannelActiveState = function (a, b, c) {
            b = {
                active: b
            };
            c && (b.activeReason = c);
            k(a, b)
        };
        this.setRestrictFrameRate = function (a) {
            k("video", {
                restrictFrameRate: a
            })
        };
        var k = function (a, c) {
            var d;
            if (this.publisher) d = function (a) {
                b._.streamChannelUpdate(this, a, c)
            };
            else {
                var f = OT.subscribers.find(function (a) {
                    return a.streamId === this.id && a.session.id === b.id
                }, this);
                d = function (a) {
                    b._.subscriberChannelUpdate(this, f, a, c)
                }
            }
            this.getChannelsOfType(a).forEach(d.bind(this))
        }.bind(this);
        this.destroy = function (a, b) {
            g = a || "clientDisconnected";
            !0 !== b && this.dispatchEvent(new OT.DestroyedEvent("destroyed", this, g))
        };
        Object.defineProperties(this, {
            destroyed: {
                get: function () {
                    return void 0 !== g
                },
                enumerable: !0
            },
            destroyedReason: {
                get: function () {
                    return g
                },
                enumerable: !0
            },
            frameRate: {
                get: function () {
                    return this.getChannelsOfType("video")[0].frameRate
                },
                enumerable: !0
            }
        });
        this._ = {};
        this._.updateProperty = function (a, b) {
            if (-1 === c.indexOf(a)) OT.warn('Unknown stream property "' + a + '" was modified to "' + b + '".');
            else {
                var d = this[a];
                switch (a) {
                case "name":
                    this[a] = b;
                    break;
                case "archiving":
                    var e = f();
                    e && e._.archivingStatus(b);
                    this[a] = b
                }
                d = new OT.StreamUpdatedEvent(this, a, d, b);
                this.dispatchEvent(d)
            }
        }.bind(this);
        this._.update = function (a) {
            for (var b in a) this._.updateProperty(b, a[b])
        }.bind(this);
        this._.updateChannel = function (a, b) {
            this.getChannel(a).update(b)
        }.bind(this)
    }
}(window);
! function () {
    OT.Archive = function (c, a, e) {
        this.id = c;
        this.name = a;
        this.status = e;
        this._ = {};
        OT.$.eventing(this);
        this._.update = function (a) {
            for (var c in a) {
                var b = this[c];
                this[c] = a[c];
                b = new OT.ArchiveUpdatedEvent(this, c, b, this[c]);
                this.dispatchEvent(b)
            }
        }.bind(this);
        this.destroy = function () {}
    }
}(window);
! function (c) {
    var a = c.mozRTCSessionDescription || c.RTCSessionDescription,
        e = c.mozRTCIceCandidate || c.RTCIceCandidate,
        h = function (a) {
            return function (b) {
                b.candidate ? a(OT.Raptor.Actions.CANDIDATE, b.candidate) : OT.debug("IceCandidateForwarder: No more ICE candidates.")
            }
        },
        d = function () {
            var a = [],
                b = null;
            Object.defineProperty(this, "peerConnection", {
                set: function (a) {
                    b = a
                }
            });
            this.process = function (c) {
                c = new e(c.content);
                b ? b.addIceCandidate(c) : a.push(c)
            };
            this.processPending = function () {
                for (; a.length;) b.addIceCandidate(a.shift())
            }
        },
        b = function (a) {
            var b = /a=rtpmap:(\d+) CN\/\d+/i,
                c = [],
                d, e;
            a = a.split("\r\n").filter(function (a, f) {
                -1 !== a.indexOf("m\x3daudio") && (d = f);
                e = a.match(b);
                return null !== e ? (c.push(e[1]), !1) : !0
            });
            c.length && d && (a[d] = a[d].replace(RegExp(c.join("|"), "ig"), "").replace(/\s+/g, " "));
            return a.join("\r\n")
        },
        l = function (a, c, d, e) {
            var g, h;
            g = function (a, b) {
                return function (c) {
                    OT.error(a);
                    OT.error(c);
                    e && e(a, c, b)
                }
            };
            h = function (c) {
                c.sdp = b(c.sdp);
                a.setLocalDescription(c, function () {
                    d(c)
                }, g("Error while setting LocalDescription", "SetLocalDescription"))
            }; - 1 === c.sdp.indexOf("a\x3dcrypto") && (c.sdp = c.sdp.replace(/^c=IN(.*)$/gmi, "c\x3dIN$1\r\na\x3dcrypto:1 AES_CM_128_HMAC_SHA1_80 inline:FakeFakeFakeFakeFakeFakeFakeFakeFakeFake\\r\\n")); - 1 === c.sdp.indexOf("a\x3drtcp-fb") && (c.sdp = c.sdp.replace(/^m=video(.*)$/gmi, "m\x3dvideo$1\r\na\x3drtcp-fb:* ccm fir\r\na\x3drtcp-fb:* nack "));
            a.setRemoteDescription(c, function () {
                a.createAnswer(h, g("Error while setting createAnswer", "CreateAnswer"), null, !1)
            }, g("Error while setting RemoteDescription", "SetRemoteDescription"))
        },
        g = function (a, c, d) {
            var e, g;
            e = {
                mandatory: {},
                optional: []
            };
            g = function (a, b) {
                return function (c) {
                    OT.error(a);
                    OT.error(c);
                    d && d(a, c, b)
                }
            };
            navigator.mozGetUserMedia && (e.mandatory.MozDontOfferDataChannel = !0);
            a.createOffer(function (d) {
                d.sdp = b(d.sdp);
                a.setLocalDescription(d, function () {
                    c(d)
                }, g("Error while setting LocalDescription", "SetLocalDescription"))
            }, g("Error while creating Offer", "CreateOffer"), e)
        };
    OT.PeerConnection = function (b) {
        var e, n = new d,
            m, q, r = "new",
            s = [],
            p, u = OT.$.now();
        OT.$.eventing(this);
        b.iceServers ||
            (b.iceServers = []);
        var v = function (a, b) {
                if (s.length) s[0](a, b)
            }.bind(this),
            t = function () {
                if (!e) {
                    try {
                        OT.debug('Creating peer connection config "' + JSON.stringify(b) + '".'), e = OT.$.createPeerConnection(b, {
                            optional: [{
                                DtlsSrtpKeyAgreement: !0
                            }]
                        })
                    } catch (a) {
                        return D("Failed to create PeerConnection, exception: " + a.message, "NewPeerConnection"), null
                    }
                    e.onicecandidate = h(v);
                    e.onaddstream = w.bind(this);
                    e.onremovestream = z.bind(this);
                    void 0 !== e.onsignalingstatechange ? e.onsignalingstatechange = x.bind(this) : void 0 !== e.onstatechange &&
                        (e.onstatechange = x.bind(this));
                    void 0 !== e.oniceconnectionstatechange && (e.oniceconnectionstatechange = function (a) {
                        "failed" === a.target.iceConnectionState && setTimeout(function () {
                            "failed" === a.target.iceConnectionState && D("The stream was unable to connect due to a network error. Make sure your connection isn't blocked by a firewall.", "ICEWorkflow")
                        }, 5E3)
                    })
                }
                return e
            }.bind(this),
            A = function () {
                n && (n.peerConnection = null);
                null !== e && (e = null, this.trigger("close"))
            },
            x = function (a) {
                a = "string" === typeof a ? a : a.target &&
                    a.target.signalingState ? a.target.signalingState : a.target.readyState;
                OT.debug("PeerConnection.stateChange: " + a);
                if (a && a.toLowerCase() !== r) switch (r = a.toLowerCase(), OT.debug("PeerConnection.stateChange: " + r), r) {
                case "closed":
                    A.call(this)
                }
            },
            w = function (a) {
                this.trigger("streamAdded", a.stream)
            },
            z = function (a) {
                this.trigger("streamRemoved", a.stream)
            },
            E = function (b) {
                b = new a({
                    type: "offer",
                    sdp: b.content.sdp
                });
                t();
                l(e, b, function (a) {
                    n.peerConnection = e;
                    n.processPending();
                    v(OT.Raptor.Actions.ANSWER, a)
                }, function (a,
                    b, c) {
                    D("PeerConnection.offerProcessor " + a + ": " + b, c)
                })
            },
            F = function (b) {
                b.content.sdp ? (q = new a({
                    type: "answer",
                    sdp: b.content.sdp
                }), e.setRemoteDescription(q, function () {
                    OT.debug("setRemoteDescription Success")
                }, function (a) {
                    D("Error while setting RemoteDescription " + a, "SetRemoteDescription")
                }), n.peerConnection = e, n.processPending()) : OT.error("PeerConnection.processMessage: Weird answer message, no SDP.")
            },
            J = function () {
                OT.debug("PeerConnection.processSubscribe: Sending offer to subscriber.");
                t();
                g(e, function (a) {
                    m =
                        a;
                    v(OT.Raptor.Actions.OFFER, m)
                }, function (a, b, c) {
                    D("PeerConnection.suscribeProcessor " + a + ": " + b, c)
                })
            },
            D = function (a, b) {
                OT.error(a);
                this.trigger("error", a, b)
            }.bind(this);
        this.addLocalStream = function (a) {
            t();
            e.addStream(a)
        };
        this.disconnect = function () {
            n = null;
            if (e) {
                var a = e.signalingState || e.readyState;
                a && "closed" !== a.toLowerCase() && e.close();
                A.call(this)
            }
            this.off()
        };
        this.processMessage = function (a, b) {
            OT.debug("PeerConnection.processMessage: Received " + a + " from " + b.fromAddress);
            OT.debug(b);
            switch (a) {
            case "generateoffer":
                J.call(this,
                    b);
                break;
            case "offer":
                E.call(this, b);
                break;
            case "answer":
            case "pranswer":
                F.call(this, b);
                break;
            case "candidate":
                n.process(b);
                break;
            default:
                OT.debug("PeerConnection.processMessage: Received an unexpected message of type " + a + " from " + b.fromAddress + ": " + JSON.stringify(b))
            }
            return this
        };
        this.registerMessageDelegate = function (a) {
            return s.push(a)
        };
        this.unregisterMessageDelegate = function (a) {
            a = s.indexOf(a); - 1 !== a && s.splice(a, 1);
            return s.length
        };
        this.getStats = function (a, b) {
            var d = {},
                f, g, h, l, m, n, r;
            !0 === p ? OT.warn("PeerConnection.getStats: Already getting the stats!") :
                (p = !0, f = OT.$.now(), g = (f - a.timeStamp) / 1E3, a.timeStamp = f, h = function (b) {
                var c = a.videoBytesTransferred || 0;
                return b.bytesSent || b.bytesReceived ? (a.videoBytesTransferred = b.bytesSent || b.bytesReceived, Math.round(8 * (a.videoBytesTransferred - c) / g)) : b.stat("googFrameHeightSent") ? (a.videoBytesTransferred = b.stat("bytesSent"), Math.round(8 * (a.videoBytesTransferred - c) / g)) : b.stat("googFrameHeightReceived") ? (a.videoBytesTransferred = b.stat("bytesReceived"), Math.round(8 * (a.videoBytesTransferred - c) / g)) : NaN
            }, l = function (b) {
                var c =
                    a.audioBytesTransferred || 0;
                return b.bytesSent || b.bytesReceived ? (a.audioBytesTransferred = b.bytesSent || b.bytesReceived, Math.round(8 * (a.audioBytesTransferred - c) / g)) : b.stat("audioInputLevel") ? (a.audioBytesTransferred = b.stat("bytesSent"), Math.round(8 * (a.audioBytesTransferred - c) / g)) : b.stat("audioOutputLevel") ? (a.audioBytesTransferred = b.stat("bytesReceived"), Math.round(8 * (a.audioBytesTransferred - c) / g)) : NaN
            }, m = function (a) {
                return a.stat("googFrameRateSent") ? a.stat("googFrameRateSent") : a.stat("googFrameRateReceived") ?
                    a.stat("googFrameRateReceived") : null
            }, n = function (a) {
                if (a.result) {
                    a = a.result();
                    for (var c = 0; c < a.length; c++) {
                        var e = a[c];
                        if (e.stat) {
                            "true" === e.stat("googActiveConnection") && (d.localCandidateType = e.stat("googLocalCandidateType"), d.remoteCandidateType = e.stat("googRemoteCandidateType"), d.transportType = e.stat("googTransportType"));
                            var f = h(e);
                            isNaN(f) || (d.avgVideoBitrate = f);
                            f = l(e);
                            isNaN(f) || (d.avgAudioBitrate = f);
                            e = m(e);
                            null != e && (d.frameRate = e)
                        }
                    }
                }
                p = !1;
                b(d)
            }, d.duration = Math.round(f - u), f = function (a) {
                for (var c in a)
                    if (a.hasOwnProperty(c) &&
                        ("outboundrtp" === a[c].type || "inboundrtp" === a[c].type)) {
                        var e = a[c]; - 1 !== e.id.indexOf("video") ? (e = h(e), isNaN(e) || (d.avgVideoBitrate = e)) : -1 !== e.id.indexOf("audio") && (e = l(e), isNaN(e) || (d.avgAudioBitrate = e))
                    }
                p = !1;
                b(d)
            }, r = function () {
                var a = c.navigator.userAgent.toLowerCase().match(/Firefox\/([0-9\.]+)/i),
                    b = null !== a && 27 <= parseFloat(a[1], 10);
                r = function () {
                    return b
                };
                return b
            }, e && e.getStats ? r() ? e.getStats(null, f, function (a) {
                OT.warn("Error collecting stats", a);
                p = !1
            }) : e.getStats(n) : (p = !1, b(d)))
        };
        Object.defineProperty(this,
            "remoteStreams", {
                get: function () {
                    var a;
                    if (e) {
                        if (e.getRemoteStreams) a = e.getRemoteStreams();
                        else if (e.remoteStreams) a = e.remoteStreams;
                        else throw Error("Invalid Peer Connection object implements no method for retrieving remote streams");
                        a = Array.prototype.slice.call(a)
                    } else a = [];
                    return a
                }
            })
    }
}(window);
! function () {
    var c = {};
    OT.PeerConnections = {
        add: function (a, e, h) {
            a = a.id + "_" + e;
            (e = c[a]) || (e = c[a] = {
                count: 0,
                pc: new OT.PeerConnection(h)
            });
            e.count += 1;
            return e.pc
        },
        remove: function (a, e) {
            var h = a.id + "_" + e,
                d = c[h];
            d && (d.count -= 1, 0 === d.count && (d.pc.disconnect(), delete c[h]))
        }
    }
}(window);
! function () {
    OT.PublisherPeerConnection = function (c, a, e, h) {
        var d, b = !1,
            l = a._.subscriberMap[c.id + "_" + e],
            g, f, k;
        g = function () {
            this.destroy();
            this.trigger("disconnected", this)
        };
        f = function (a, b) {
            this.trigger("error", null, a, this, b);
            this.destroy()
        };
        k = function (c, d) {
            if (!b && (c === OT.Raptor.Actions.CANDIDATE || c === OT.Raptor.Actions.OFFER || c === OT.Raptor.Actions.ANSWER || c === OT.Raptor.Actions.PRANSWER)) b = -1 !== (c === OT.Raptor.Actions.CANDIDATE ? d.candidate : d.sdp).indexOf("typ relay");
            switch (c) {
            case OT.Raptor.Actions.ANSWER:
            case OT.Raptor.Actions.PRANSWER:
                a.sessionInfo.p2pEnabled ?
                    a._.jsepAnswerP2p(e, l, d.sdp) : a._.jsepAnswer(e, d.sdp);
                break;
            case OT.Raptor.Actions.OFFER:
                this.trigger("connected");
                a.sessionInfo.p2pEnabled ? a._.jsepOfferP2p(e, l, d.sdp) : a._.jsepOffer(e, d.sdp);
                break;
            case OT.Raptor.Actions.CANDIDATE:
                a.sessionInfo.p2pEnabled ? a._.jsepCandidateP2p(e, l, d) : a._.jsepCandidate(e, d)
            }
        }.bind(this);
        OT.$.eventing(this);
        this.destroy = function () {
            d && OT.PeerConnections.remove(c, e);
            d.off();
            d = null
        };
        this.processMessage = function (a, b) {
            d.processMessage(a, b)
        };
        this.getStats = function (a, b) {
            d.getStats(a,
                b)
        };
        this.init = function () {
            var l = a.sessionInfo.iceServers.map(function (b) {
                b = OT.$.clone(b);
                "turn:" === b.url.trim().substr(0, 5) && (b.username = a.id + "." + a.connection.id + "." + e);
                return b
            });
            d = OT.PeerConnections.add(c, e, {
                iceServers: l
            });
            d.on({
                close: g,
                error: f
            }, this);
            d.registerMessageDelegate(k);
            d.addLocalStream(h);
            Object.defineProperty(this, "remoteConnection", {
                value: c
            });
            Object.defineProperty(this, "hasRelayCandidates", {
                get: function () {
                    return b
                }
            })
        }
    }
}(window);
! function () {
    OT.SubscriberPeerConnection = function (c, a, e, h, d) {
        var b, l = !1,
            g, f, k, n, m, q;
        g = function () {
            this.destroy();
            this.trigger("disconnected", this)
        };
        f = function (a) {
            this.trigger("remoteStreamAdded", a, this)
        };
        k = function (a) {
            this.trigger("remoteStreamRemoved", a, this)
        };
        n = function (a, b) {
            this.trigger("error", null, a, this, b)
        };
        m = function (b, c) {
            if (!l && (b === OT.Raptor.Actions.CANDIDATE || b === OT.Raptor.Actions.OFFER || b === OT.Raptor.Actions.ANSWER || b === OT.Raptor.Actions.PRANSWER)) l = -1 !== (b === OT.Raptor.Actions.CANDIDATE ?
                c.candidate : c.sdp).indexOf("typ relay");
            switch (b) {
            case OT.Raptor.Actions.ANSWER:
            case OT.Raptor.Actions.PRANSWER:
                this.trigger("connected");
                a._.jsepAnswerP2p(e.id, h.widgetId, c.sdp);
                break;
            case OT.Raptor.Actions.OFFER:
                a._.jsepOfferP2p(e.id, h.widgetId, c.sdp);
                break;
            case OT.Raptor.Actions.CANDIDATE:
                a._.jsepCandidateP2p(e.id, h.widgetId, c)
            }
        }.bind(this);
        q = function (a) {
            var c = "get" + (a ? "Video" : "Audio") + "Tracks";
            return function (a) {
                var d = b.remoteStreams,
                    e;
                if (0 !== d.length && d[0][c])
                    for (var f = 0, g = d.length; f < g; ++f) {
                        e =
                            d[f];
                        e = e[c]();
                        for (var h = 0, k = e.length; h < k; ++h) e[h].enabled = a
                    }
            }
        };
        OT.$.eventing(this);
        this.destroy = function () {
            b && (0 === b.unregisterMessageDelegate(m) && (a && (a.connected && e && !e.destroyed) && a._.subscriberDestroy(e, h), this.subscribeToAudio(!1)), OT.PeerConnections.remove(c, e.streamId));
            b = null;
            this.off()
        };
        this.processMessage = function (a, c) {
            b.processMessage(a, c)
        };
        this.getStats = function (a, c) {
            b.getStats(a, c)
        };
        this.subscribeToAudio = q(!1);
        this.subscribeToVideo = q(!0);
        Object.defineProperty(this, "hasRelayCandidates", {
            get: function () {
                return l
            }
        });
        this.init = function () {
            var l = a.sessionInfo.iceServers.map(function (b) {
                b = OT.$.clone(b);
                "turn:" === b.url.trim().substr(0, 5) && (b.username = a.id + "." + a.connection.id + "." + e.id);
                return b
            });
            b = OT.PeerConnections.add(c, e.streamId, {
                iceServers: l
            });
            b.on({
                close: g,
                streamAdded: f,
                streamRemoved: k,
                error: n
            }, this);
            l = b.registerMessageDelegate(m);
            if (0 < b.remoteStreams.length) b.remoteStreams.forEach(f, this);
            else if (1 === l) {
                var q;
                if (d.subscribeToVideo || d.subscribeToAudio) q = e.getChannelsOfType("audio"),
                    l = e.getChannelsOfType("video"), q = q.map(function (a) {
                        return {
                            id: a.id,
                            type: a.type,
                            active: d.subscribeToAudio
                        }
                    }).concat(l.map(function (a) {
                        return {
                            id: a.id,
                            type: a.type,
                            active: d.subscribeToVideo,
                            restrictFrameRate: void 0 !== d.restrictFrameRate ? d.restrictFrameRate : !1
                        }
                    }));
                a._.subscriberCreate(e, h, q, function (a) {
                    a && this.trigger("error", null, a.message, this, "Subscribe")
                }.bind(this))
            }
        }
    }
}(window);
! function () {
    OT.Chrome = function (c) {
        var a = {},
            e = function (e, d) {
                d.parent = this;
                d.appendTo(c.parent);
                a[e] = d;
                Object.defineProperty(this, e, {
                    get: function () {
                        return a[e]
                    }
                })
            };
        c.parent && (OT.$.eventing(this), this.destroy = function () {
            this.off();
            this.hide();
            for (var c in a) a[c].destroy()
        }, this.show = function () {
            for (var c in a) a[c].show()
        }, this.hide = function () {
            for (var c in a) a[c].hide()
        }, this.set = function (a, c) {
            if ("string" === typeof a && c) e.call(this, a, c);
            else
                for (var b in a) a.hasOwnProperty(b) && e.call(this, b, a[b]);
            return this
        })
    }
}(window);
! function () {
    OT.Chrome.Behaviour || (OT.Chrome.Behaviour = {});
    OT.Chrome.Behaviour.Widget = function (c, a) {
        var e = a || {},
            h, d;
        c.setDisplayMode = function (a) {
            a = a || "auto";
            h !== a && (OT.$.removeClass(this.domElement, "OT_mode-" + h), OT.$.addClass(this.domElement, "OT_mode-" + a), d = h, h = a)
        };
        c.show = function () {
            this.setDisplayMode(d);
            if (e.onShow) e.onShow();
            return this
        };
        c.hide = function () {
            this.setDisplayMode("off");
            if (e.onHide) e.onHide();
            return this
        };
        c.destroy = function () {
            if (e.onDestroy) e.onDestroy(this.domElement);
            this.domElement &&
                OT.$.removeElement(this.domElement);
            return c
        };
        c.appendTo = function (a) {
            this.domElement = OT.$.createElement(e.nodeName || "div", e.htmlAttributes, e.htmlContent);
            if (e.onCreate) e.onCreate(this.domElement);
            "auto" !== e.mode ? c.setDisplayMode(e.mode) : (c.setDisplayMode("on"), setTimeout(function () {
                c.setDisplayMode(e.mode)
            }, 2E3));
            a.appendChild(this.domElement);
            return c
        }
    }
}(window);
! function () {
    OT.Chrome.BackingBar = function (c) {
        function a() {
            return "on" === e || "on" === h ? "on" : "mini" === e || "mini" === h ? "mini" : "mini-auto" === e || "mini-auto" === h ? "mini-auto" : "auto" === e || "auto" === h ? "auto" : "off"
        }
        var e = c.nameMode,
            h = c.muteMode,
            d;
        Object.defineProperty(this, "domElement", {
            get: function () {
                return d
            },
            set: function (a) {
                d = a
            }
        });
        OT.Chrome.Behaviour.Widget(this, {
            mode: a(),
            nodeName: "div",
            htmlContent: "",
            htmlAttributes: {
                className: "OT_bar OT_edge-bar-item"
            }
        });
        this.setNameMode = function (b) {
            e = b;
            this.setDisplayMode(a())
        };
        this.setMuteMode = function (b) {
            h = b;
            this.setDisplayMode(a())
        }
    }
}(window);
! function () {
    OT.Chrome.NamePanel = function (c) {
        var a = c.name,
            e = c.bugMode,
            h;
        if (!a || "" === a.trim().length) a = null, c.mode = "off";
        Object.defineProperty(this, "domElement", {
            get: function () {
                return h
            },
            set: function (a) {
                h = a
            }
        });
        Object.defineProperty(this, "name", {
            set: function (c) {
                a || this.setDisplayMode("auto");
                a = c;
                h.innerHTML = a
            }.bind(this)
        });
        this.setBugMode = function (a) {
            e = a;
            "off" === a ? OT.$.addClass(h, "OT_name-no-bug") : OT.$.removeClass(h, "OT_name-no-bug")
        };
        OT.Chrome.Behaviour.Widget(this, {
            mode: c.mode,
            nodeName: "h1",
            htmlContent: a,
            htmlAttributes: {
                className: "OT_name OT_edge-bar-item"
            },
            onCreate: function () {
                this.setBugMode(e)
            }.bind(this)
        })
    }
}(window);
! function () {
    OT.Chrome.MuteButton = function (c) {
        var a, e = c.muted || !1,
            h, d, b;
        Object.defineProperty(this, "domElement", {
            get: function () {
                return h
            },
            set: function (a) {
                h = a
            }
        });
        d = function () {
            e ? OT.$.addClass(h, "OT_active") : OT.$.removeClass(h, "OT_active ")
        };
        b = function () {
            e = !e;
            d();
            e ? this.parent.trigger("muted", this) : this.parent.trigger("unmuted", this);
            return !1
        };
        Object.defineProperty(this, "muted", {
            get: function () {
                return e
            },
            set: function (a) {
                e = a;
                d()
            }
        });
        OT.Chrome.Behaviour.Widget(this, {
            mode: c.mode,
            nodeName: "button",
            htmlContent: "Mute",
            htmlAttributes: {
                className: e ? "OT_edge-bar-item OT_mute OT_active" : "OT_edge-bar-item OT_mute"
            },
            onCreate: function (c) {
                a = b.bind(this);
                c.addEventListener("click", a, !1)
            }.bind(this),
            onDestroy: function (b) {
                a = null;
                b.removeEventListener("click", a, !1)
            }.bind(this)
        })
    }
}(window);
! function () {
    OT.Chrome.OpenTokButton = function (c) {
        var a;
        Object.defineProperty(this, "domElement", {
            get: function () {
                return a
            },
            set: function (c) {
                a = c
            }
        });
        OT.Chrome.Behaviour.Widget(this, {
            mode: c ? c.mode : null,
            nodeName: "span",
            htmlContent: "OpenTok",
            htmlAttributes: {
                className: "OT_opentok OT_edge-bar-item"
            }
        })
    }
}(window);
! function () {
    OT.Chrome.Archiving = function (c) {
        var a = c.archiving,
            e = c.archivingStarted || "Archiving on",
            h = c.archivingEnded || "Archiving off",
            d = !0,
            b, l, g, f, k, n, m;
        Object.defineProperty(this, "domElement", {
            get: function () {
                return f
            },
            set: function (a) {
                f = a
            }
        });
        n = function (a) {
            g.innerText = a;
            b.setAttribute("title", a)
        };
        m = function () {
            k && (clearTimeout(k), k = null);
            a ? OT.$.addClass(l, "OT_active") : OT.$.removeClass(l, "OT_active");
            OT.$.removeClass(f, "OT_archiving-" + (!a ? "on" : "off"));
            OT.$.addClass(f, "OT_archiving-" + (a ? "on" : "off"));
            c.show && a ? (n(e), OT.$.addClass(g, "OT_mode-on"), OT.$.removeClass(g, "OT_mode-auto"), this.setDisplayMode("on"), k = setTimeout(function () {
                OT.$.addClass(g, "OT_mode-auto");
                OT.$.removeClass(g, "OT_mode-on")
            }.bind(this), 5E3)) : c.show && !d ? (OT.$.addClass(g, "OT_mode-on"), OT.$.removeClass(g, "OT_mode-auto"), this.setDisplayMode("on"), n(h), k = setTimeout(function () {
                this.setDisplayMode("off")
            }.bind(this), 5E3)) : this.setDisplayMode("off")
        }.bind(this);
        OT.Chrome.Behaviour.Widget(this, {
            mode: a && c.show && "on" || "off",
            nodeName: "h1",
            htmlAttributes: {
                className: "OT_archiving OT_edge-bar-item OT_edge-bottom"
            },
            onCreate: function () {
                b = OT.$.createElement("div", {
                    className: "OT_archiving-light-box"
                }, "");
                l = OT.$.createElement("div", {
                    className: "OT_archiving-light"
                }, "");
                b.appendChild(l);
                g = OT.$.createElement("div", {
                    className: "OT_archiving-status OT_mode-on OT_edge-bar-item OT_edge-bottom"
                }, "");
                f.appendChild(b);
                f.appendChild(g);
                m()
            }
        });
        this.setShowArchiveStatus = function (a) {
            c.show = a;
            f && m.call(this)
        };
        this.setArchiving = function (b) {
            a = b;
            d = !1;
            f && m.call(this)
        }
    }
}(window);
(function () {
    OT.StylableComponent = function (a, e) {
        if (!a.trigger) throw Error("OT.StylableComponent is dependent on the mixin OT.$.eventing. Ensure that this is included in the object before StylableComponent.");
        var h = new c(e, function (c, b, e) {
            e ? a.trigger("styleValueChanged", c, b, e) : a.trigger("styleValueChanged", c, b)
        });
        a.getStyle = function (a) {
            return h.get(a)
        };
        a.setStyle = function (a, b, c) {
            "string" !== typeof a ? h.setAll(a, c) : h.set(a, b);
            return this
        }
    };
    var c = function (a, c) {
        var h = {},
            d, b, l, g;
        d = "showMicButton showSpeakerButton nameDisplayMode buttonDisplayMode backgroundImageURI bugDisplayMode".split(" ");
        b = {
            buttonDisplayMode: ["auto", "mini", "mini-auto", "off", "on"],
            nameDisplayMode: ["auto", "off", "on"],
            bugDisplayMode: ["auto", "off", "on"],
            showSettingsButton: [!0, !1],
            showMicButton: [!0, !1],
            backgroundImageURI: null,
            showControlBar: [!0, !1],
            showArchiveStatus: [!0, !1]
        };
        l = function (a, c) {
            return "backgroundImageURI" === a || b.hasOwnProperty(a) && -1 !== b[a].indexOf(c)
        };
        g = function (a) {
            switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            default:
                return a
            }
        };
        this.getAll = function () {
            var a = OT.$.clone(h),
                b;
            for (b in a) 0 > d.indexOf(b) &&
                delete a[b];
            return a
        };
        this.get = function (a) {
            return a ? h[a] : this.getAll()
        };
        this.setAll = function (a, b) {
            var d, m, q;
            for (q in a) m = g(a[q]), l(q, m) ? (d = h[q], m !== d && (h[q] = m, b || c(q, m, d))) : OT.warn("Style.setAll::Invalid style property passed " + q + " : " + m);
            return this
        };
        this.set = function (a, b) {
            OT.debug("Publisher.setStyle: " + a.toString());
            var d = g(b),
                m;
            if (!l(a, d)) return OT.warn("Style.set::Invalid style property passed " + a + " : " + d), this;
            m = h[a];
            d !== m && (h[a] = d, c(a, b, m));
            return this
        };
        a && this.setAll(a, !0)
    }
})(window);
! function () {
    OT.Microphone = function (c, a) {
        var e, h = 50;
        Object.defineProperty(this, "muted", {
            get: function () {
                return e
            },
            set: function (a) {
                if (e !== a) {
                    e = a;
                    a = c.getAudioTracks();
                    for (var b = 0, h = a.length; b < h; ++b) a[b].enabled = !e
                }
            }
        });
        Object.defineProperty(this, "gain", {
            get: function () {
                return h
            },
            set: function (a) {
                OT.warn("OT.Microphone.gain IS NOT YET IMPLEMENTED");
                h = a
            }
        });
        void 0 !== a ? this.muted = !0 === a : c.getAudioTracks().length ? this.muted = !c.getAudioTracks()[0].enabled : this.muted = !1
    }
}(window);
! function () {
    OT.generateSimpleStateMachine = function (c, a, e) {
        var h = a.slice(),
            d = OT.$.clone(e);
        return function (a) {
            function e(c, d) {
                a({
                    message: c,
                    newState: d,
                    currentState: g,
                    previousState: f
                })
            }
            var g = c,
                f = null;
            this.set = function (a) {
                var b; - 1 !== h.indexOf(a) ? d[g] && -1 !== d[g].indexOf(a) ? b = !0 : (e("'" + g + "' cannot transition to '" + a + "'", a), b = !1) : (e("'" + a + "' is not a valid state", a), b = !1);
                b && (f = g, g = a)
            };
            Object.defineProperties(this, {
                current: {
                    get: function () {
                        return g
                    }
                },
                subscribing: {
                    get: function () {
                        return "Subscribing" === g
                    }
                }
            })
        }
    }
}(window);
! function () {
    OT.SubscribingState = OT.generateSimpleStateMachine("NotSubscribing", "NotSubscribing Init ConnectingToPeer BindingRemoteStream Subscribing Failed".split(" "), {
        NotSubscribing: ["NotSubscribing", "Init"],
        Init: ["NotSubscribing", "ConnectingToPeer", "BindingRemoteStream"],
        ConnectingToPeer: ["NotSubscribing", "BindingRemoteStream", "Failed"],
        BindingRemoteStream: ["NotSubscribing", "Subscribing", "Failed"],
        Subscribing: ["NotSubscribing", "Failed"],
        Failed: []
    });
    Object.defineProperty(OT.SubscribingState.prototype,
        "attemptingToSubscribe", {
            get: function () {
                return -1 !== ["Init", "ConnectingToPeer", "BindingRemoteStream"].indexOf(this.current)
            }
        })
}(window);
! function () {
    OT.PublishingState = OT.generateSimpleStateMachine("NotPublishing", "NotPublishing GetUserMedia BindingMedia MediaBound PublishingToSession Publishing Failed".split(" "), {
        NotPublishing: ["NotPublishing", "GetUserMedia"],
        GetUserMedia: ["BindingMedia", "Failed", "NotPublishing"],
        BindingMedia: ["MediaBound", "Failed", "NotPublishing"],
        MediaBound: ["NotPublishing", "PublishingToSession", "Failed"],
        PublishingToSession: ["NotPublishing", "Publishing", "Failed"],
        Publishing: ["NotPublishing", "MediaBound", "Failed"],
        Failed: []
    });
    Object.defineProperties(OT.PublishingState.prototype, {
        attemptingToPublish: {
            get: function () {
                return -1 !== ["GetUserMedia", "BindingMedia", "MediaBound", "PublishingToSession"].indexOf(this.current)
            }
        },
        publishing: {
            get: function () {
                return "Publishing" === this.current
            }
        }
    })
}(window);
! function () {
    var c = {
        audio: !0,
        video: !0
    };
    OT.Publisher = function () {
        if (OT.checkSystemRequirements()) {
            var a = OT.Publisher.nextId(),
                e, h, d, b, l, g, f, k = {},
                n = !1,
                m, q, r, s, p = new OT.Analytics,
                u, v = [1, 7, 15, 30],
                t = {},
                A, x;
            u = {
                "320x240": {
                    width: 320,
                    height: 240
                },
                "640x480": {
                    width: 640,
                    height: 480
                },
                "1280x720": {
                    width: 1280,
                    height: 720
                }
            };
            A = {
                timeStamp: OT.$.now()
            };
            OT.$.eventing(this);
            OT.StylableComponent(this, {
                showMicButton: !0,
                showArchiveStatus: !0,
                nameDisplayMode: "auto",
                buttonDisplayMode: "auto",
                bugDisplayMode: "auto",
                backgroundImageURI: null
            });
            var w = function (c, d, e, g) {
                    p.logEvent({
                        action: c,
                        variation: d,
                        payload_type: e,
                        payload: g,
                        session_id: f ? f.sessionId : null,
                        connection_id: f && f.connected ? f.connection.connectionId : null,
                        partner_id: f ? f.apiKey : OT.APIKEY,
                        streamId: b ? b.id : null,
                        widget_id: a,
                        widget_type: "Publisher"
                    })
                },
                z = function (c) {
                    var d = {
                        widget_type: "Publisher",
                        stream_type: "WebRTC",
                        sessionId: f ? f.sessionId : null,
                        connectionId: f && f.connected ? f.connection.connectionId : null,
                        partnerId: f ? f.apiKey : OT.APIKEY,
                        streamId: b ? b.id : null,
                        widgetId: a,
                        version: OT.properties.version,
                        media_server_name: f ? f.sessionInfo.messagingServer : null,
                        p2pFlag: f ? f.sessionInfo.p2pEnabled : !1,
                        duration: q ? (new Date).getTime() - q.getTime() : 0,
                        remote_connection_id: c
                    };
                    k[c].getStats(A, function (a) {
                        var b;
                        if (a)
                            for (b in a) d[b] = a[b];
                        p.logQOS(d)
                    })
                },
                E = function () {
                    OT.debug("OT.Publisher.onLoaded");
                    x.set("MediaBound");
                    h.loading = !1;
                    n = !0;
                    "off" === this.getStyle("bugDisplayMode") && w("bugDisplayMode", "createChrome", "mode", "off");
                    "off" === this.getStyle("showArchiveStatus") && w("showArchiveStatus", "createChrome", "mode", "off");
                    s = (new OT.Chrome({
                        parent: h.domElement
                    })).set({
                        backingBar: new OT.Chrome.BackingBar({
                            nameMode: this.getStyle("nameDisplayMode"),
                            muteMode: M.call(this, this.getStyle("showMicButton"))
                        }),
                        name: new OT.Chrome.NamePanel({
                            name: m.name,
                            mode: this.getStyle("nameDisplayMode"),
                            bugMode: this.getStyle("bugDisplayMode")
                        }),
                        muteButton: new OT.Chrome.MuteButton({
                            muted: !1 === m.publishAudio,
                            mode: M.call(this, this.getStyle("showMicButton"))
                        }),
                        opentokButton: new OT.Chrome.OpenTokButton({
                            mode: this.getStyle("bugDisplayMode")
                        }),
                        archive: new OT.Chrome.Archiving({
                            show: this.getStyle("showArchiveStatus"),
                            archiving: !1
                        })
                    }).on({
                        muted: this.publishAudio.bind(this, !1),
                        unmuted: this.publishAudio.bind(this, !0)
                    });
                    this.trigger("initSuccess");
                    this.trigger("loaded", this)
                },
                F = function (a) {
                    w("publish", "Failure", "reason", "Publisher PeerConnection Error: " + a);
                    x.set("Failed");
                    this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.P2P_CONNECTION_FAILED, "Publisher PeerConnection Error: " + a));
                    OT.handleJsException("Publisher PeerConnection Error: " + a, OT.ExceptionCodes.P2P_CONNECTION_FAILED, {
                        session: f,
                        target: this
                    })
                },
                J = function (a) {
                    OT.debug("OT.Publisher.onStreamAvailable");
                    x.set("BindingMedia");
                    g && (g.stop(), g = null);
                    g = a;
                    r = new OT.Microphone(g, !m.publishAudio);
                    this.publishVideo(m.publishVideo && 0 < g.getVideoTracks().length);
                    this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_ALLOWED, !1));
                    d = new OT.VideoElement({
                        attributes: {
                            muted: !0
                        }
                    });
                    d.on({
                        streamBound: E,
                        loadError: F,
                        error: H
                    }, this).bindToStream(g);
                    h.video = d
                },
                D = function (a) {
                    OT.error("OT.Publisher.onStreamAvailableError " + a.name + ": " + a.message);
                    x.set("Failed");
                    this.trigger("publishComplete",
                        new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, a.message));
                    h && h.destroy();
                    w("publish", "Failure", "reason", "GetUserMedia:Publisher failed to access camera/mic: " + a.message);
                    OT.handleJsException("Publisher failed to access camera/mic: " + a.message, OT.ExceptionCodes.UNABLE_TO_PUBLISH, {
                        session: f,
                        target: this
                    })
                },
                G = function (a) {
                    OT.error("OT.Publisher.onStreamAvailableError Permission Denied");
                    x.set("Failed");
                    this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "Publisher Access Denied: Permission Denied" +
                        (a.message ? ": " + a.message : "")));
                    w("publish", "Failure", "reason", "GetUserMedia:Publisher Access Denied: Permission Denied");
                    var b = new OT.Event(OT.Event.names.ACCESS_DENIED);
                    this.dispatchEvent(b, function () {
                        !b.isDefaultPrevented() && h && h.destroy()
                    })
                },
                K = function () {
                    w("accessDialog", "Opened", "", "");
                    this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DIALOG_OPENED, !1))
                },
                C = function () {
                    w("accessDialog", "Closed", "", "");
                    this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DIALOG_CLOSED, !1))
                },
                H = function (a, b) {
                    OT.error("OT.Publisher.onVideoError");
                    var c = b + (a ? " (" + a + ")" : "");
                    w("stream", null, "reason", "Publisher while playing stream: " + c);
                    x.set("Failed");
                    x.attemptingToPublish ? this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, c)) : this.trigger("error", c);
                    OT.handleJsException("Publisher error playing stream: " + c, OT.ExceptionCodes.UNABLE_TO_PUBLISH, {
                        session: f,
                        target: this
                    })
                },
                I = function (a) {
                    OT.debug("OT.Subscriber has been disconnected from the Publisher's PeerConnection");
                    this.cleanupSubscriber(a.remoteConnection.id)
                },
                O =
                function (a, b, c, d) {
                    w("publish", "Failure", "reason|hasRelayCandidates", (d ? d : "") + [":Publisher PeerConnection with connection " + (c && c.remoteConnection && c.remoteConnection.id) + " failed: " + b, c.hasRelayCandidates].join("|"));
                    OT.handleJsException("Publisher PeerConnection Error: " + b, OT.ExceptionCodes.UNABLE_TO_PUBLISH, {
                        session: f,
                        target: this
                    });
                    clearInterval(t[c.remoteConnection.id]);
                    delete t[c.remoteConnection.id];
                    delete k[c.remoteConnection.id]
                },
                L = function (c) {
                    b = c;
                    b.on("destroyed", this.disconnect, this);
                    var d =
                        a;
                    a = OT.Publisher.nextId();
                    d && this.trigger("idUpdated", d, a);
                    x.set("Publishing");
                    q = new Date;
                    this.trigger("publishComplete", null, this);
                    this.dispatchEvent(new OT.StreamEvent("streamCreated", c, null, !1));
                    w("publish", "Success", "streamType:streamId", "WebRTC:" + l)
                }.bind(this),
                P = function (a) {
                    var b = k[a.id];
                    if (!b) {
                        var c = OT.$.now();
                        w("createPeerConnection", "Attempt", "", "");
                        a.on("destroyed", this.cleanupSubscriber.bind(this, a.id));
                        b = k[a.id] = new OT.PublisherPeerConnection(a, f, l, g);
                        b.on({
                            connected: function () {
                                w("createPeerConnection",
                                    "Success", "pcc|hasRelayCandidates", [parseInt(OT.$.now() - c, 10), b.hasRelayCandidates].join("|"));
                                t[a.id] = setInterval(function () {
                                    z(a.id)
                                }, 3E4)
                            },
                            disconnected: I,
                            error: O
                        }, this);
                        b.init()
                    }
                    return b
                },
                M = function (a) {
                    if (!1 === a) return "off";
                    a = this.getStyle("buttonDisplayMode");
                    return !1 === a ? "on" : a
                },
                N = function () {
                    s && (s.destroy(), s = null);
                    this.disconnect();
                    r = null;
                    d && (d.destroy(), d = null);
                    g && (g.stop(), g = null);
                    h && (h.destroy(), h = null);
                    this.session && this._.unpublishFromSession(this.session, "reset");
                    for (var a in t) clearInterval(t[a]),
                        delete t[a];
                    b = e = null;
                    n = !1;
                    f = null;
                    x.set("NotPublishing")
                }.bind(this);
            this.publish = function (a, b) {
                OT.debug("OT.Publisher: publish");
                (x.attemptingToPublish || x.publishing) && N();
                x.set("GetUserMedia");
                m = OT.$.defaults(b || {}, {
                    publishAudio: !0,
                    publishVideo: !0,
                    mirror: !0
                });
                m.constraints ? OT.warn("You have passed your own constraints not using ours") : (m.constraints = OT.$.clone(c), m.resolution && (void 0 !== m.resolution && !u.hasOwnProperty(m.resolution) ? OT.warn("Invalid resolution passed to the Publisher. Got: " + m.resolution +
                    ' expecting one of "' + Object.keys(u).join('","') + '"') : (m.videoDimensions = u[m.resolution], m.constraints.video = {
                    mandatory: {},
                    optional: [{
                        minWidth: m.videoDimensions.width
                    }, {
                        maxWidth: m.videoDimensions.width
                    }, {
                        minHeight: m.videoDimensions.height
                    }, {
                        maxHeight: m.videoDimensions.height
                    }]
                })), void 0 !== m.frameRate && -1 === v.indexOf(m.frameRate) ? (OT.warn("Invalid frameRate passed to the publisher got: " + m.frameRate + " expecting one of " + v.join(",")), delete m.frameRate) : m.frameRate && (m.constraints.video.optional || ("object" !==
                    typeof m.constraints.video && (m.constraints.video = {}), m.constraints.video.optional = []), m.constraints.video.optional.push({
                    minFrameRate: m.frameRate
                }), m.constraints.video.optional.push({
                    maxFrameRate: m.frameRate
                })));
                m.style && this.setStyle(m.style, null, !0);
                m.name && (m.name = m.name.toString());
                m.classNames = "OT_root OT_publisher";
                OT.onLoad(function () {
                    h = new OT.WidgetView(a, m);
                    e = h.domId;
                    OT.$.getUserMedia(m.constraints, J.bind(this), D.bind(this), K.bind(this), C.bind(this), G.bind(this))
                }, this);
                return this
            };
            this.publishAudio =
                function (a) {
                    m.publishAudio = a;
                    r && (r.muted = !a);
                    s && (s.muteButton.muted = !a);
                    f && b && b.setChannelActiveState("audio", a);
                    return this
            };
            this.publishVideo = function (a) {
                var c = m.publishVideo;
                m.publishVideo = a;
                f && (b && m.publishVideo !== c) && b.setChannelActiveState("video", a);
                if (g)
                    for (var c = g.getVideoTracks(), d = 0, e = c.length; d < e; ++d) c[d].enabled = a;
                h && (h.showPoster = !a);
                return this
            };
            this.recordQOS = function () {
                for (var a in k) z(a)
            };
            this.destroy = function (a, b) {
                N();
                !0 !== b && this.dispatchEvent(new OT.DestroyedEvent(OT.Event.names.PUBLISHER_DESTROYED,
                    this, a), this.off.bind(this));
                return this
            };
            this.disconnect = function () {
                for (var a in k) this.cleanupSubscriber(a)
            };
            this.cleanupSubscriber = function (a) {
                var b = k[a];
                clearInterval(t[a]);
                delete t[a];
                b && (b.destroy(), delete k[a], w("disconnect", "PeerConnection", "subscriberConnection", a))
            };
            this.processMessage = function (a, b, c) {
                OT.debug("OT.Publisher.processMessage: Received " + a + " from " + b.id);
                OT.debug(c);
                switch (a) {
                case "unsubscribe":
                    this.cleanupSubscriber(c.content.connection.id);
                    break;
                default:
                    P.call(this, b).processMessage(a,
                        c)
                }
            };
            this.getImgData = function () {
                return !n ? (OT.error("OT.Publisher.getImgData: Cannot getImgData before the Publisher is publishing."), null) : d.imgData
            };
            this._ = {
                publishToSession: function (a) {
                    this.session = a;
                    var b = function () {
                        var b, c;
                        if (this.session) {
                            x.set("PublishingToSession");
                            var e = function (a, b) {
                                a ? (w("publish", "Failure", "reason", "Publish:" + OT.ExceptionCodes.UNABLE_TO_PUBLISH + ":" + a.message), x.attemptingToPublish && this.trigger("publishComplete", new OT.Error(OT.ExceptionCodes.UNABLE_TO_PUBLISH, a.message))) :
                                    l = b
                            }.bind(this);
                            m.videoDimensions ? (b = Math.min(m.videoDimensions.width, d.videoWidth || 640), c = Math.min(m.videoDimensions.height, d.videoHeight || 480)) : (b = d.videoWidth || 640, c = d.videoHeight || 480);
                            a._.streamCreate(m && m.name ? m.name : "", OT.VideoOrientation.ROTATED_NORMAL, b, c, m.publishAudio, m.publishVideo, m.frameRate, e)
                        }
                    };
                    if (n) b.call(this);
                    else this.on("initSuccess", b, this);
                    w("publish", "Attempt", "streamType", "WebRTC");
                    return this
                }.bind(this),
                unpublishFromSession: function (a, b) {
                    if (!this.session || a.id !== this.session.id) return OT.warn("The publisher " +
                        this.guid + " is trying to unpublish from a session " + a.id + " it is not attached to (" + (this.session && this.session.id || "no this.session") + ")"), this;
                    a.connected && this.stream && a._.streamDestroy(this.stream.id);
                    this.disconnect();
                    this.session = null;
                    x.set("MediaBound");
                    w("unpublish", "Success", "sessionId", a.id);
                    this._.streamDestroyed(b);
                    return this
                }.bind(this),
                streamDestroyed: function (a) {
                    if (0 > ["reset"].indexOf(a)) {
                        var c = new OT.StreamEvent("streamDestroyed", b, a, !0);
                        a = function () {
                            c.isDefaultPrevented() || this.destroy()
                        }.bind(this);
                        this.dispatchEvent(c, a)
                    }
                }.bind(this),
                archivingStatus: function (a) {
                    s && s.archive.setArchiving(a);
                    return a
                }.bind(this)
            };
            this.detectDevices = function () {
                OT.warn("Fixme: Haven't implemented detectDevices")
            };
            this.detectMicActivity = function () {
                OT.warn("Fixme: Haven't implemented detectMicActivity")
            };
            this.getEchoCancellationMode = function () {
                OT.warn("Fixme: Haven't implemented getEchoCancellationMode");
                return "fullDuplex"
            };
            this.setMicrophoneGain = function () {
                OT.warn("Fixme: Haven't implemented setMicrophoneGain")
            };
            this.getMicrophoneGain = function () {
                OT.warn("Fixme: Haven't implemented getMicrophoneGain");
                return 0.5
            };
            this.setCamera = function () {
                OT.warn("Fixme: Haven't implemented setCamera")
            };
            this.setMicrophone = function () {
                OT.warn("Fixme: Haven't implemented setMicrophone")
            };
            Object.defineProperties(this, {
                id: {
                    get: function () {
                        return e
                    },
                    enumerable: !0
                },
                element: {
                    get: function () {
                        return h.domElement
                    },
                    enumerable: !0
                },
                guid: {
                    get: function () {
                        return a
                    },
                    enumerable: !0
                },
                stream: {
                    get: function () {
                        return b
                    },
                    set: function (a) {
                        L(a)
                    },
                    enumerable: !0
                },
                streamId: {
                    get: function () {
                        return l
                    },
                    enumerable: !0
                },
                targetElement: {
                    get: function () {
                        return d.domElement
                    }
                },
                domId: {
                    get: function () {
                        return e
                    }
                },
                session: {
                    get: function () {
                        return f
                    },
                    set: function (a) {
                        f = a
                    },
                    enumerable: !0
                },
                isWebRTC: {
                    get: function () {
                        return !0
                    }
                },
                loading: {
                    get: function () {
                        return h && h.loading
                    }
                },
                videoWidth: {
                    get: function () {
                        return d.videoWidth
                    },
                    enumerable: !0
                },
                videoHeight: {
                    get: function () {
                        return d.videoHeight
                    },
                    enumerable: !0
                }
            });
            Object.defineProperty(this._, "webRtcStream", {
                get: function () {
                    return g
                }
            });
            this.on("styleValueChanged",
                function (a, b) {
                    if (s) switch (a) {
                    case "nameDisplayMode":
                        s.name.setDisplayMode(b);
                        s.backingBar.nameMode = b;
                        break;
                    case "showArchiveStatus":
                        w("showArchiveStatus", "styleChange", "mode", b), s.archive.setShowArchiveStatus(b)
                    }
                }, this);
            x = new OT.PublishingState(function (a) {
                OT.error("Publisher State Change Failed: ", a.message);
                OT.debug(a)
            })
        } else OT.upgradeSystemRequirements()
    };
    OT.Publisher.nextId = OT.$.uuid
}(window);
! function (c) {
    OT.Subscriber = function (a, e) {
        var h = OT.$.uuid(),
            d = a || h,
            b, l, g, f, k, n, m = e.session,
            q, r, s, p = OT.$.clone(e),
            u = new OT.Analytics,
            v = 50,
            t, A, x, w;
        x = {
            timeStamp: OT.$.now()
        };
        if (m) {
            OT.$.eventing(this);
            OT.StylableComponent(this, {
                nameDisplayMode: "auto",
                buttonDisplayMode: "auto",
                backgroundImageURI: null,
                showArchiveStatus: !0,
                showMicButton: !0
            });
            var z = function (a, b, c, d) {
                    u.logEvent({
                        action: a,
                        variation: b,
                        payload_type: c,
                        payload: d,
                        stream_id: f ? f.id : null,
                        session_id: m ? m.sessionId : null,
                        connection_id: m && m.connected ? m.connection.connectionId : null,
                        partner_id: m && m.connected ? m.sessionInfo.partnerId : null,
                        widget_id: h,
                        widget_type: "Subscriber"
                    })
                },
                E = function () {
                    if (t.subscribing && m && m.connected) {
                        var a = {
                            widget_type: "Subscriber",
                            stream_type: "WebRTC",
                            session_id: m ? m.sessionId : null,
                            connectionId: m ? m.connection.connectionId : null,
                            media_server_name: m ? m.sessionInfo.messagingServer : null,
                            p2pFlag: m ? m.sessionInfo.p2pEnabled : !1,
                            partner_id: m ? m.apiKey : null,
                            stream_id: f.id,
                            widget_id: h,
                            version: OT.properties.version,
                            duration: parseInt(OT.$.now() - q, 10),
                            remote_connection_id: f.connection.connectionId
                        };
                        n.getStats(x, function (b) {
                            var c;
                            if (b)
                                for (c in b) a[c] = b[c];
                            u.logQOS(a)
                        })
                    }
                },
                F = function () {
                    !t.subscribing && l && (OT.debug("OT.Subscriber.onLoaded"), t.set("Subscribing"), q = OT.$.now(), z("createPeerConnection", "Success", "pcc|hasRelayCandidates", [parseInt(q - r, 10), n && n.hasRelayCandidates].join("|")), s = setInterval(E, 3E4), A && (A = null, this.subscribeToVideo(!1)), b.loading = !1, O.call(this), this.trigger("subscribeComplete", null, this), this.trigger("loaded", this), z("subscribe", "Success", "streamId", f.id))
                },
                J = function () {
                    OT.debug("OT.Subscriber has been disconnected from the Publisher's PeerConnection");
                    t.attemptingToSubscribe ? (t.set("Failed"), this.trigger("subscribeComplete", new OT.Error(null, "ClientDisconnected"))) : t.subscribing && t.set("Failed");
                    this.disconnect()
                },
                D = function (a, c, d, e) {
                    t.attemptingToSubscribe ? (z("createPeerConnection", "Failure", "reason|hasRelayCandidates", ["Subscriber PeerConnection Error: " + c, n && n.hasRelayCandidates].join("|")), t.set("Failed"), this.trigger("subscribeComplete", new OT.Error(null, c))) : t.subscribing && (t.set("Failed"), this.trigger("error", c));
                    this.disconnect();
                    z("subscribe",
                        "Failure", "reason", (e ? e : "") + ":Subscriber PeerConnection Error: " + c);
                    OT.handleJsException("Subscriber PeerConnection Error: " + c, OT.ExceptionCodes.P2P_CONNECTION_FAILED, {
                        session: m,
                        target: this
                    });
                    b && b.addError("The stream was unable to connect due to a network error.", "Make sure your connection isn't blocked by a firewall.")
                },
                G = function (a) {
                    OT.debug("OT.Subscriber.onRemoteStreamAdded");
                    t.set("BindingRemoteStream");
                    this.subscribeToAudio(p.subscribeToAudio);
                    var c = A;
                    this.subscribeToVideo(p.subscribeToVideo);
                    A = c;
                    c = new OT.VideoElement;
                    c.setAudioVolume(v);
                    c.on({
                        streamBound: F,
                        loadError: D,
                        error: D
                    }, this);
                    c.bindToStream(a);
                    l = b.video = c;
                    l.orientation = {
                        width: f.videoDimensions.width,
                        height: f.videoDimensions.height,
                        videoOrientation: f.videoDimensions.orientation
                    };
                    z("createPeerConnection", "StreamAdded", "", "");
                    this.trigger("streamAdded", this)
                },
                K = function (a) {
                    OT.debug("OT.Subscriber.onStreamRemoved");
                    l.stream === a && (l.destroy(), l = null);
                    this.trigger("streamRemoved", this)
                },
                C = function () {
                    this.disconnect()
                },
                H = function (a) {
                    switch (a.changedProperty) {
                    case "videoDimensions":
                        l.orientation = {
                            width: a.newValue.width,
                            height: a.newValue.height,
                            videoOrientation: a.newValue.orientation
                        };
                        break;
                    case "hasVideo":
                        b && (b.showPoster = !(f.hasVideo && p.subscribeToVideo))
                    }
                },
                I = function (a) {
                    if (!1 === a) return "off";
                    a = this.getStyle("buttonDisplayMode");
                    return !1 === a ? "on" : a
                },
                O = function () {
                    "off" === this.getStyle("bugDisplayMode") && z("bugDisplayMode", "createChrome", "mode", "off");
                    g = (new OT.Chrome({
                        parent: b.domElement
                    })).set({
                        backingBar: new OT.Chrome.BackingBar({
                            nameMode: this.getStyle("nameDisplayMode"),
                            muteMode: I.call(this,
                                this.getStyle("showMuteButton"))
                        }),
                        name: new OT.Chrome.NamePanel({
                            name: p.name,
                            mode: this.getStyle("nameDisplayMode"),
                            bugMode: this.getStyle("bugDisplayMode")
                        }),
                        muteButton: new OT.Chrome.MuteButton({
                            muted: p.muted,
                            mode: I.call(this, this.getStyle("showMuteButton"))
                        }),
                        opentokButton: new OT.Chrome.OpenTokButton({
                            mode: this.getStyle("bugDisplayMode")
                        }),
                        archive: new OT.Chrome.Archiving({
                            show: this.getStyle("showArchiveStatus"),
                            archiving: !1
                        })
                    }).on({
                        muted: function () {
                            L.call(this, !0)
                        },
                        unmuted: function () {
                            L.call(this, !1)
                        }
                    }, this)
                };
            this.recordQOS = function () {
                E()
            };
            this.subscribe = function (c) {
                OT.debug("OT.Subscriber: subscribe to " + c.id);
                if (t.subscribing) return OT.error("OT.Subscriber.Subscribe: Cannot subscribe, already subscribing."), !1;
                t.set("Init");
                if (!c) return OT.error("OT.Subscriber: No stream parameter."), !1;
                if (f) return OT.error("OT.Subscriber: Already subscribed"), !1;
                f = c;
                f.on({
                    updated: H,
                    destroyed: C
                }, this);
                k = c.connection.id;
                p.name = p.name || f.name;
                p.classNames = "OT_root OT_subscriber";
                p.style && this.setStyle(p.style,
                    null, !0);
                p.audioVolume && this.setAudioVolume(p.audioVolume);
                p.subscribeToAudio = OT.$.castToBoolean(p.subscribeToAudio, !0);
                p.subscribeToVideo = OT.$.castToBoolean(p.subscribeToVideo, !0);
                b = new OT.WidgetView(a, p);
                d = b.domId;
                !p.subscribeToVideo && "Chrome" === OT.$.browser() && (A = !0, p.subscribeToVideo = !0);
                r = OT.$.now();
                if (f.connection.id !== m.connection.id) z("createPeerConnection", "Attempt", "", ""), t.set("ConnectingToPeer"), n = new OT.SubscriberPeerConnection(f.connection, m, f, this, p), n.on({
                    disconnected: J,
                    error: D,
                    remoteStreamAdded: G,
                    remoteStreamRemoved: K
                }, this), n.init();
                else {
                    z("createPeerConnection", "Attempt", "", "");
                    c = m.getPublisherForStream(f);
                    if (!c || !c._.webRtcStream) return this.trigger("subscribeComplete", new OT.Error(null, "InvalidStreamID")), this;
                    G.call(this, m.getPublisherForStream(f)._.webRtcStream)
                }
                z("subscribe", "Attempt", "streamId", f.id);
                return this
            };
            this.destroy = function (a, c) {
                "streamDestroyed" === a && t.attemptingToSubscribe && this.trigger("subscribeComplete", new OT.Error(null, "InvalidStreamID"));
                clearInterval(s);
                s = null;
                this.disconnect();
                g && (g.destroy(), g = null);
                b && (b.destroy(), b = null);
                f && !f.destroyed && z("unsubscribe", null, "streamId", f.id);
                p = m = f = d = null;
                !0 !== c && this.dispatchEvent(new OT.DestroyedEvent(OT.Event.names.SUBSCRIBER_DESTROYED, this, a), this.off.bind(this));
                return this
            };
            this.disconnect = function () {
                t.set("NotSubscribing");
                l && (l.destroy(), l = null);
                n && (n.destroy(), n = null, z("disconnect", "PeerConnection", "streamId", f.id))
            };
            this.processMessage = function (a, b, c) {
                OT.debug("OT.Subscriber.processMessage: Received " + a + " message from " +
                    b.id);
                OT.debug(c);
                k !== b.id && (k = b.id);
                n && n.processMessage(a, c)
            };
            this.disableVideo = function (a) {
                if (a)
                    if ("auto" === w) OT.info("Video has been re-enabled");
                    else {
                        OT.info("Video was not re-enabled because it was manually disabled");
                        return
                    } else OT.warn("Due to high packet loss and low bandwidth, video has been disabled");
                this.subscribeToVideo(a, "auto");
                this.dispatchEvent(new OT.Event(a ? "videoEnabled" : "videoDisabled"));
                z("updateQuality", "video", a ? "videoEnabled" : "videoDisabled", !0)
            };
            this.getImgData = function () {
                return !this.subscribing ?
                    (OT.error("OT.Subscriber.getImgData: Cannot getImgData before the Subscriber is subscribing."), null) : l.imgData
            };
            this.setAudioVolume = function (a) {
                a = parseInt(a, 10);
                if (isNaN(a)) return OT.error("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100"), this;
                v = Math.max(0, Math.min(100, a));
                v !== a && OT.warn("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100");
                p.muted && 0 < v && (p.premuteVolume = a, L.call(this, !1));
                l && l.setAudioVolume(v);
                return this
            };
            this.getAudioVolume =
                function () {
                    return p.muted ? 0 : l ? l.getAudioVolume() : v
            };
            this.subscribeToAudio = function (a) {
                a = OT.$.castToBoolean(a, !0);
                n && (n.subscribeToAudio(a && !p.subscribeMute), m && (f && a !== p.subscribeToAudio) && f.setChannelActiveState("audio", a && !p.subscribeMute));
                p.subscribeToAudio = a;
                return this
            };
            var L = function (a) {
                g.muteButton.muted = a;
                if (a !== p.mute) {
                    if (0 <= c.navigator.userAgent.toLowerCase().indexOf("chrome")) p.subscribeMute = p.muted = a, this.subscribeToAudio(p.subscribeToAudio);
                    else if (a) p.premuteVolume = this.getAudioVolume(),
                        p.muted = !0, this.setAudioVolume(0);
                    else if (p.premuteVolume || p.audioVolume) p.muted = !1, this.setAudioVolume(p.premuteVolume || p.audioVolume);
                    p.mute = p.mute
                }
            };
            this.subscribeToVideo = function (a, c) {
                if (A && !0 === a) A = !1;
                else {
                    var d = OT.$.castToBoolean(a, !0);
                    b && (b.showPoster = !(d && f.hasVideo), d && b.video && (b.loading = d, b.video.whenTimeIncrements(function () {
                        b.loading = !1
                    }, this)));
                    n && (n.subscribeToVideo(d), m && (f && (d !== p.subscribeToVideo || c !== w)) && f.setChannelActiveState("video", d, c));
                    p.subscribeToVideo = d;
                    w = c;
                    return this
                }
            };
            Object.defineProperties(this, {
                id: {
                    get: function () {
                        return d
                    },
                    enumerable: !0
                },
                element: {
                    get: function () {
                        return b.domElement
                    },
                    enumerable: !0
                },
                widgetId: {
                    get: function () {
                        return h
                    }
                },
                stream: {
                    get: function () {
                        return f
                    },
                    enumerable: !0
                },
                streamId: {
                    get: function () {
                        return !f ? null : f.id
                    },
                    enumerable: !0
                },
                targetElement: {
                    get: function () {
                        return l ? l.domElement : null
                    }
                },
                subscribing: {
                    get: function () {
                        return t.subscribing
                    },
                    enumerable: !0
                },
                isWebRTC: {
                    get: function () {
                        return !0
                    }
                },
                loading: {
                    get: function () {
                        return b && b.loading
                    }
                },
                session: {
                    get: function () {
                        return m
                    }
                },
                videoWidth: {
                    get: function () {
                        return l.videoWidth
                    },
                    enumerable: !0
                },
                videoHeight: {
                    get: function () {
                        return l.videoHeight
                    },
                    enumerable: !0
                }
            });
            this.restrictFrameRate = function (a) {
                OT.debug("OT.Subscriber.restrictFrameRate(" + a + ")");
                z("restrictFrameRate", a.toString(), "streamId", f.id);
                m.sessionInfo.p2pEnabled && OT.warn("OT.Subscriber.restrictFrameRate: Cannot restrictFrameRate on a P2P session");
                "boolean" !== typeof a ? OT.error("OT.Subscriber.restrictFrameRate: expected a boolean value got a " + typeof a) : f.setRestrictFrameRate(a);
                return this
            };
            this.on("styleValueChanged", function (a, b) {
                if (g) switch (a) {
                case "nameDisplayMode":
                    g.name.setDisplayMode(b);
                    break;
                case "showArchiveStatus":
                    g.archive.setShowArchiveStatus(b)
                }
            }, this);
            this._ = {
                archivingStatus: function (a) {
                    g && g.archive.setArchiving(a)
                }
            };
            t = new OT.SubscribingState(function (a) {
                OT.error("Subscriber State Change Failed: ", a.message);
                OT.debug(a)
            })
        } else OT.handleJsException("Subscriber must be passed a session option", 2E3, {
            session: m,
            target: this
        })
    }
}(window);
! function () {
    var c, a, e, h;
    OT.SessionInfo = function (a) {
        var c = a[0];
        OT.log("SessionInfo Response:");
        OT.log(a);
        this.sessionId = c.session_id;
        this.partnerId = c.partner_id;
        this.sessionStatus = c.session_status;
        this.messagingServer = c.messaging_server_url;
        this.messagingURL = c.messaging_url;
        this.symphonyAddress = c.symphony_address;
        this.p2pEnabled = c.properties && c.properties.p2p && c.properties.p2p.preference && "enabled" === c.properties.p2p.preference.value;
        this.iceServers = c.ice_servers ? h(c.ice_servers) : [];
        0 === this.iceServers.length &&
            (OT.warn("SessionInfo contained not ICE Servers, using the default"), this.iceServers = [{
            url: "stun:stun.l.google.com:19302"
        }])
    };
    OT.SessionInfo.get = function (b, d, g) {
        var f = OT.properties.apiURL + "/session/" + b.id + "?extended\x3dtrue",
            h = OT.$.now();
        b.logEvent("getSessionInfo", "Attempt", "api_url", OT.properties.apiURL);
        OT.$.getJSON(f, {
            headers: {
                "X-TB-TOKEN-AUTH": b.token,
                "X-TB-VERSION": 1
            }
        }, function (f, m) {
            if (f) console.log("getJSON said error:", f), e(b, g, new OT.Error(f.target && f.target.status, f.message || "Could not connect to the OpenTok API Server."));
            else {
                b.logEvent("Instrumentation", null, "gsi", OT.$.now() - h);
                var q = c(m);
                !1 === q ? a(b, d, m) : e(b, g, q)
            }
        })
    };
    var d = {};
    d["404"] = OT.ExceptionCodes.INVALID_SESSION_ID;
    d["409"] = OT.ExceptionCodes.INVALID_SESSION_ID;
    d["400"] = OT.ExceptionCodes.INVALID_SESSION_ID;
    d["403"] = OT.ExceptionCodes.AUTHENTICATION_ERROR;
    c = function (a) {
        if (Array.isArray(a)) {
            a = a.filter(function (a) {
                return null != a.error
            });
            if (0 === a.length) return !1;
            var c = a[0].error.code;
            d[c.toString()] && (c = d[c]);
            return {
                code: c,
                message: a[0].error.errorMessage && a[0].error.errorMessage.message
            }
        }
        return {
            code: null,
            message: "Unknown error: getSessionInfo JSON response was badly formed " + a.toString.substring(0, 1E3)
        }
    };
    a = function (a, c, d) {
        a.logEvent("getSessionInfo", "Success", "api_url", OT.properties.apiURL);
        c(new OT.SessionInfo(d))
    };
    e = function (a, c, d) {
        a.logEvent("Connect", "Failure", "errorMessage", "GetSessionInfo:" + d.code + ":" + d.message);
        c(d, a)
    };
    h = function (a) {
        if (!a) return [];
        var c = "undefined" !== typeof navigator && navigator.userAgent.match(/(Firefox)\/([0-9]+\.[0-9]+)/),
            d = c ? parseFloat(c[2], 10) : void 0,
            e;
        return a.map(function (a) {
            if ("turn:" !==
                a.url.trim().substr(0, 5)) return a;
            if (null !== c) {
                if (25 > d) return {
                    url: a.url.replace("turn:", "stun:")
                };
                27 > d && -1 !== a.url.indexOf("?") && (a.url = a.url.trim().split("?")[0])
            }
            e = a.url.trim().split(/[:@]/);
            return {
                username: e[1],
                credential: a.credential,
                url: e[0] + ":" + e[2]
            }
        })
    }
}(window);
! function () {
    OT.Capabilities = function (c) {
        this.publish = -1 !== c.indexOf("publish") ? 1 : 0;
        this.subscribe = -1 !== c.indexOf("subscribe") ? 1 : 0;
        this.forceUnpublish = -1 !== c.indexOf("forceunpublish") ? 1 : 0;
        this.forceDisconnect = -1 !== c.indexOf("forcedisconnect") ? 1 : 0;
        this.supportsWebRTC = OT.$.supportsWebRTC() ? 1 : 0;
        this.permittedTo = function (a) {
            return this.hasOwnProperty(a) && 1 === this[a]
        }
    }
}(window);
! function (c) {
    OT.Session = function (a, e) {
        if (OT.checkSystemRequirements()) {
            null == e && (e = a, a = null);
            var h = !0,
                d = a,
                b, l = e,
                g, f = OT.$.uuid(),
                k, n = new OT.Analytics,
                m, q, r, s, p, u, v, t, A, x, w, z, E, F, J, D, G, K, C;
            OT.$.eventing(this);
            var H = OT.$.statable(this, ["disconnected", "connecting", "connected", "disconnecting"], "disconnected");
            this.connections = new OT.Collection;
            this.streams = new OT.Collection;
            this.archives = new OT.Collection;
            m = function (a, b) {
                H("disconnected");
                OT.error(a);
                this.trigger("sessionConnectFailed", new OT.Error(b ||
                    OT.ExceptionCodes.CONNECT_FAILED, a));
                OT.handleJsException(a, b || OT.ExceptionCodes.CONNECT_FAILED, {
                    session: this
                })
            };
            q = function (a) {
                var b = a.reason;
                "networkTimedout" === b ? (b = "networkDisconnected", this.logEvent("Connect", "TimeOutDisconnect", "reason", a.reason)) : this.logEvent("Connect", "Disconnected", "reason", a.reason);
                var c = new OT.SessionDisconnectEvent("sessionDisconnected", b);
                w.call(this);
                z.call(this, b);
                a = function () {
                    E.call(this, c.reason);
                    c.isDefaultPrevented() || F.call(this, c.reason)
                }.bind(this);
                this.dispatchEvent(c,
                    a)
            };
            r = function (a) {
                a.id.match(/^symphony\./) || this.dispatchEvent(new OT.ConnectionEvent(OT.Event.names.CONNECTION_CREATED, a))
            };
            s = function (a, b) {
                a.id.match(/^symphony\./) || a.id !== g.id && this.dispatchEvent(new OT.ConnectionEvent(OT.Event.names.CONNECTION_DESTROYED, a, b))
            };
            p = function (a) {
                a.connection.id !== this.connection.id && this.dispatchEvent(new OT.StreamEvent(OT.Event.names.STREAM_CREATED, a, null, !1))
            };
            u = function (a) {
                var b = a.target,
                    c = a.changedProperty,
                    d = a.newValue;
                "orientation" === c && (c = "videoDimensions",
                    d = {
                        width: d.width,
                        height: d.height
                    });
                this.dispatchEvent(new OT.StreamPropertyChangedEvent(OT.Event.names.STREAM_PROPERTY_CHANGED, b, c, a.oldValue, d))
            };
            v = function (a, b) {
                if (a.connection.id === this.connection.id) OT.publishers.where({
                    streamId: a.id
                }).forEach(function (a) {
                    a._.unpublishFromSession(this, b)
                }.bind(this));
                else {
                    var c = new OT.StreamEvent("streamDestroyed", a, b, !0),
                        d = function () {
                            c.isDefaultPrevented() || OT.subscribers.where({
                                streamId: a.id
                            }).forEach(function (a) {
                                    a.session.id === this.id && a.stream && a.destroy("streamDestroyed")
                                },
                                this)
                        }.bind(this);
                    this.dispatchEvent(c, d)
                }
            };
            t = function (a) {
                this.dispatchEvent(new OT.ArchiveEvent("archiveStarted", a))
            };
            A = function (a) {
                this.dispatchEvent(new OT.ArchiveEvent("archiveDestroyed", a))
            };
            x = function (a) {
                var b = a.target,
                    c = a.newValue;
                "status" === a.changedProperty && "stopped" === c ? this.dispatchEvent(new OT.ArchiveEvent("archiveStopped", b)) : this.dispatchEvent(new OT.ArhiveEvent("archiveUpdated", b))
            };
            w = function () {
                b = null;
                H("disconnected");
                this.connections.destroy();
                this.streams.destroy();
                this.archives.destroy()
            };
            z = function (a) {
                OT.publishers.where({
                    session: this
                }).forEach(function (b) {
                    b.disconnect(a)
                });
                OT.subscribers.where({
                    session: this
                }).forEach(function (a) {
                    a.disconnect()
                })
            };
            E = function (a) {
                OT.publishers.where({
                    session: this
                }).forEach(function (b) {
                    b._.streamDestroyed(a)
                })
            };
            F = function (a) {
                OT.subscribers.where({
                    session: this
                }).forEach(function (b) {
                    b.destroy(a)
                })
            };
            J = function () {
                OT.debug("OT.Session: connecting to Raptor");
                var a = OT.properties.messagingProtocol + "://" + this.sessionInfo.messagingServer + ":" + OT.properties.messagingPort +
                    "/rumorwebsocketsv2";
                g = new OT.Raptor.Socket(f, a, OT.properties.symphonyAddresss || "symphony." + this.sessionInfo.messagingServer, OT.SessionDispatcher(this));
                var d = [a, navigator.userAgent, OT.properties.version, c.externalHost ? "yes" : "no"];
                g.connect(b, this.sessionInfo, function (a, b) {
                    a ? (d.splice(0, 0, a.message), this.logEvent("Connect", "Failure", "reason|webSocketServerUrl|userAgent|sdkVersion|chromeFrame", d.map(function (a) {
                        return a.replace("|", "\\|")
                    }).join("|")), m.call(this, a.message, a.code)) : (OT.debug("OT.Session: Received session state from Raptor",
                        b), H("connected"), this.logEvent("Connect", "Success", "webSocketServerUrl|userAgent|sdkVersion|chromeFrame", d.map(function (a) {
                        return a.replace("|", "\\|")
                    }).join("|"), {
                        connectionId: this.connection.id
                    }), this.connection.on("destroyed", q, this), this.connections.on({
                        add: r,
                        remove: s
                    }, this), this.streams.on({
                        add: p,
                        remove: v,
                        update: u
                    }, this), this.archives.on({
                        add: t,
                        remove: A,
                        update: x
                    }, this), this.dispatchEvent(new OT.SessionConnectEvent(OT.Event.names.SESSION_CONNECTED), function () {
                        this.connections._triggerAddEvents();
                        this.streams._triggerAddEvents();
                        this.archives._triggerAddEvents()
                    }.bind(this)))
                }.bind(this))
            };
            D = function () {
                this.is("connecting") && OT.SessionInfo.get(this, G.bind(this), function (a) {
                    m.call(this, a.message + (a.code ? " (" + a.code + ")" : ""), a.code)
                }.bind(this))
            };
            G = function (a) {
                this.is("connecting") && (this.sessionInfo = a, this.sessionInfo.partnerId && this.sessionInfo.partnerId !== d ? (d = this.sessionInfo.partnerId, this.logEvent("Connect", "Failure", "reason", "GetSessionInfo:" + OT.ExceptionCodes.AUTHENTICATION_ERROR + ":Authentication Error: The API key does not match the token or session."),
                    m.call(this, "Authentication Error: The API key does not match the token or session.", OT.ExceptionCodes.AUTHENTICATION_ERROR)) : J.call(this))
            };
            K = function (a) {
                return this.capabilities.permittedTo(a)
            }.bind(this);
            C = function (a, b, c) {
                OT.dispatchError(a, b, c, this)
            }.bind(this);
            this.logEvent = function (a, b, c, e, g) {
                a = {
                    action: a,
                    variation: b,
                    payload_type: c,
                    payload: e,
                    session_id: l,
                    partner_id: d,
                    widget_id: f,
                    widget_type: "Controller"
                };
                this.connection && this.connection.id ? k = a.connection_id = this.connection.id : k && (a.connection_id =
                    k);
                g && (a = OT.$.extend(g, a));
                n.logEvent(a)
            };
            this.connect = function (e) {
                if (null == a && 1 < arguments.length && ("string" === typeof arguments[0] || "number" === typeof arguments[0]) && "string" === typeof arguments[1]) d = e.toString(), e = arguments[1];
                var g = arguments[arguments.length - 1];
                if (this.is("connecting", "connected")) return OT.warn("OT.Session: Cannot connect, the session is already " + this.state), this;
                w.call(this);
                H("connecting");
                b = !OT.$.isFunction(e) && e;
                h ? h = !1 : f = OT.$.uuid();
                g && OT.$.isFunction(g) && (this.once("sessionConnected",
                    g.bind(null, null)), this.once("sessionConnectFailed", g));
                if (null == d || OT.$.isFunction(d)) return setTimeout(m.bind(this, "API Key is undefined. You must pass an API Key to initSession.", OT.ExceptionCodes.AUTHENTICATION_ERROR)), this;
                if (!l) return setTimeout(m.bind(this, "SessionID is undefined. You must pass a sessionID to initSession.", OT.ExceptionCodes.INVALID_SESSION_ID)), this;
                d = d.toString();
                0 === OT.APIKEY.length && (OT.APIKEY = d);
                this.logEvent("Connect", "Attempt", "userAgent|sdkVersion|chromeFrame", [navigator.userAgent,
                    OT.properties.version, c.externalHost ? "yes" : "no"
                ].map(function (a) {
                    return a.replace("|", "\\|")
                }).join("|"));
                D.call(this);
                return this
            };
            this.disconnect = function () {
                g && g.isNot("disconnected") ? (H("disconnecting"), g.disconnect()) : w.call(this)
            };
            this.destroy = function () {
                this.streams.destroy();
                this.connections.destroy();
                this.archives.destroy();
                this.disconnect()
            };
            this.publish = function (a, b, c) {
                "function" === typeof a && (c = a, a = void 0);
                "function" === typeof b && (c = b, b = void 0);
                if (this.isNot("connected")) return n.logError(1010,
                    "OT.exception", "We need to be connected before you can publish", null, {
                        action: "publish",
                        variation: "Failure",
                        payload_type: "reason",
                        payload: "We need to be connected before you can publish",
                        session_id: l,
                        partner_id: d,
                        widgetId: f,
                        widget_type: "Controller"
                    }), c && OT.$.isFunction(c) && C(OT.ExceptionCodes.NOT_CONNECTED, "We need to be connected before you can publish", c), null;
                if (!K("publish")) return this.logEvent("publish", "Failure", "reason", "This token does not allow publishing. The role must be at least `publisher` to enable this functionality"),
                    C(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "This token does not allow publishing. The role must be at least `publisher` to enable this functionality", c), null;
                if (!a || "string" === typeof a || a.nodeType === Node.ELEMENT_NODE) a = OT.initPublisher(a, b);
                else if (a instanceof OT.Publisher) "session" in a && (a.session && "sessionId" in a.session) && (a.session.sessionId === this.sessionId ? OT.warn("Cannot publish " + a.guid + " again to " + this.sessionId + ". Please call session.unpublish(publisher) first.") : OT.warn("Cannot publish " +
                    a.guid + " publisher already attached to " + a.session.sessionId + ". Please call session.unpublish(publisher) first."));
                else {
                    C(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "Session.publish :: First parameter passed in is neither a string nor an instance of the Publisher", c);
                    return
                }
                a.once("publishComplete", function (a) {
                    a ? C(OT.ExceptionCodes.UNABLE_TO_PUBLISH, "Session.publish :: " + a.message, c) : c && OT.$.isFunction(c) && c.apply(null, arguments)
                });
                a._.publishToSession(this);
                return a
            };
            this.unpublish = function (a) {
                a ? a._.unpublishFromSession(this,
                    "unpublished") : OT.error("OT.Session.unpublish: publisher parameter missing.")
            };
            this.subscribe = function (a, b, c, d) {
                if (!this.connection || !this.connection.connectionId) C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: Connection required to subscribe", d);
                else if (a) {
                    if (a.hasOwnProperty("streamId")) return "function" === typeof b && (d = b, b = void 0), "function" === typeof c && (d = c, c = void 0), b = new OT.Subscriber(b, OT.$.extend(c || {}, {
                        session: this
                    })), b.once("subscribeComplete", function (a) {
                        a ? C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE,
                            "Session.subscribe :: " + a.message, d) : d && OT.$.isFunction(d) && d.apply(null, arguments)
                    }), OT.subscribers.add(b), b.subscribe(a), b;
                    C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: invalid stream object", d)
                } else C(OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: stream cannot be null", d)
            };
            this.unsubscribe = function (a) {
                if (!a) throw OT.error("OT.Session.unsubscribe: subscriber cannot be null"), Error("OT.Session.unsubscribe: subscriber cannot be null");
                if (!a.stream) return OT.warn("OT.Session.unsubscribe:: tried to unsubscribe a subscriber that had no stream"), !1;
                OT.debug("OT.Session.unsubscribe: subscriber " + a.id);
                a.destroy();
                return !0
            };
            this.getSubscribersForStream = function (a) {
                return OT.subscribers.where({
                    streamId: a.id
                })
            };
            this.getPublisherForStream = function (a) {
                if ("string" !== typeof a)
                    if ("object" === typeof a && a && a.hasOwnProperty("id")) a = a.id;
                    else throw OT.error("Session.getPublisherForStream :: Invalid stream type"), Error("Session.getPublisherForStream :: Invalid stream type");
                return OT.publishers.where({
                    streamId: a
                })[0]
            };
            this._ = {
                jsepCandidateP2p: function (a,
                    b, c) {
                    return g.jsepCandidateP2p(a, b, c)
                }.bind(this),
                jsepCandidate: function (a, b) {
                    return g.jsepCandidate(a, b)
                }.bind(this),
                jsepOffer: function (a, b) {
                    return g.jsepOffer(a, b)
                }.bind(this),
                jsepOfferP2p: function (a, b, c) {
                    return g.jsepOfferP2p(a, b, c)
                }.bind(this),
                jsepAnswer: function (a, b) {
                    return g.jsepAnswer(a, b)
                }.bind(this),
                jsepAnswerP2p: function (a, b, c) {
                    return g.jsepAnswerP2p(a, b, c)
                }.bind(this),
                dispatchSignal: function (a, b, c) {
                    a = new OT.SignalEvent(b, c, a);
                    a.target = this;
                    this.trigger(OT.Event.names.SIGNAL, a);
                    b && this.dispatchEvent(a)
                }.bind(this),
                subscriberCreate: function (a, b, c, d) {
                    return g.subscriberCreate(a.id, b.widgetId, c, d)
                }.bind(this),
                subscriberDestroy: function (a, b) {
                    return g.subscriberDestroy(a.id, b.widgetId)
                }.bind(this),
                subscriberUpdate: function (a, b, c) {
                    return g.subscriberUpdate(a.id, b.widgetId, c)
                }.bind(this),
                subscriberChannelUpdate: function (a, b, c, d) {
                    return g.subscriberChannelUpdate(a.id, b.widgetId, c.id, d)
                }.bind(this),
                streamCreate: function (a, b, c, d, e, f, h, k) {
                    g.streamCreate(a, b, c, d, e, f, h, OT.Config.get("bitrates", "min", OT.APIKEY), OT.Config.get("bitrates",
                        "max", OT.APIKEY), k)
                }.bind(this),
                streamDestroy: function (a) {
                    g.streamDestroy(a)
                }.bind(this),
                streamChannelUpdate: function (a, b, c) {
                    g.streamChannelUpdate(a.id, b.id, c)
                }.bind(this)
            };
            this.signal = function (a, b) {
                var c = a,
                    d = b;
                OT.$.isFunction(c) && (d = c, c = null);
                g.signal(c, d);
                a && (a.data && "string" !== typeof a.data) && OT.warn("Signaling of anything other than Strings is deprecated. Please update the data property to be a string.");
                this.logEvent("signal", "send", "type", a && a.data ? typeof a.data : "null")
            };
            this.forceDisconnect =
                function (a, b) {
                    K("forceDisconnect") ? g.forceDisconnect("string" === typeof a ? a : a.id, function (a) {
                        a ? C(OT.ExceptionCodes.UNABLE_TO_FORCE_DISCONNECT, "This token does not allow forceDisconnect. The role must be at least `moderator` to enable this functionality", b) : b && OT.$.isFunction(b) && b.apply(null, arguments)
                    }) : C(OT.ExceptionCodes.UNABLE_TO_FORCE_DISCONNECT, "This token does not allow forceDisconnect. The role must be at least `moderator` to enable this functionality", b)
            };
            this.forceUnpublish = function (a, b) {
                if (K("forceUnpublish")) {
                    var c =
                        "string" === typeof a ? this.streams.get(a) : a;
                    g.forceUnpublish(c.id, function (a) {
                        a ? C(OT.ExceptionCodes.UNABLE_TO_FORCE_UNPUBLISH, "This token does not allow forceUnpublish. The role must be at least `moderator` to enable this functionality", b) : b && OT.$.isFunction(b) && b.apply(null, arguments)
                    })
                } else C(OT.ExceptionCodes.UNABLE_TO_FORCE_UNPUBLISH, "This token does not allow forceUnpublish. The role must be at least `moderator` to enable this functionality", b)
            };
            this.getStateManager = function () {
                OT.warn("Fixme: Have not implemented session.getStateManager")
            };
            OT.$.defineGetters(this, {
                apiKey: function () {
                    return d
                },
                token: function () {
                    return b
                },
                connected: function () {
                    return this.is("connected")
                },
                connection: function () {
                    return g && g.id ? this.connections.get(g.id) : null
                },
                sessionId: function () {
                    return l
                },
                id: function () {
                    return l
                },
                capabilities: function () {
                    var a = this.connection;
                    return a ? a.permissions : new OT.Capabilities([])
                }.bind(this)
            }, !0)
        } else OT.upgradeSystemRequirements()
    }
}(window);
! function () {
    var c = document.createElement("link");
    c.type = "text/css";
    c.media = "screen";
    c.rel = "stylesheet";
    c.href = OT.properties.cssURL;
    (document.head || document.getElementsByTagName("head")[0]).appendChild(c)
}(window);
! function () {
    "function" === typeof define && define.amd && define("TB", [], function () {
        return TB
    })
}(window);
