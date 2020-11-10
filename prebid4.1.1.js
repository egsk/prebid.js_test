/* prebid.js v4.1.1
Updated : 2020-07-30 */
! function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, o, i, a = 0, c = []; a < e.length; a++) o = e[a], d[o] && c.push(d[o][0]), d[o] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) i = f(f.s = n[a]);
        return i
    };
    var n = {},
        d = {
            321: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 846)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "internal", function() {
        return k
    }), n.d(t, "bind", function() {
        return N
    }), t.getUniqueIdentifierStr = q, t.generateUUID = function e(t) {
        return t ? (t ^ G() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
    }, t.getBidIdParameter = function(e, t) {
        if (t && t[e]) return t[e];
        return ""
    }, t.tryAppendQueryString = function(e, t, n) {
        if (n) return e + t + "=" + encodeURIComponent(n) + "&";
        return e
    }, t.parseQueryStringParameters = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
        return t = t.replace(/&$/, "")
    }, t.transformAdServerTargetingObj = function(t) {
        return t && 0 < Object.getOwnPropertyNames(t).length ? ge(t).map(function(e) {
            return "".concat(e, "=").concat(encodeURIComponent(t[e]))
        }).join("&") : ""
    }, t.getAdUnitSizes = function(e) {
        if (!e) return;
        var t = []; {
            var n;
            e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (n = e.mediaTypes.banner.sizes, Array.isArray(n[0]) ? t = n : t.push(n)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes))
        }
        return t
    }, t.parseSizesInput = function(e) {
        var t = [];
        if ("string" == typeof e) {
            var n = e.split(","),
                r = /^(\d)+x(\d)+$/i;
            if (n)
                for (var o in n) ae(n, o) && n[o].match(r) && t.push(n[o])
        } else if ("object" === S(e)) {
            var i = e.length;
            if (0 < i)
                if (2 === i && "number" == typeof e[0] && "number" == typeof e[1]) t.push(F(e));
                else
                    for (var a = 0; a < i; a++) t.push(F(e[a]))
        }
        return t
    }, t.parseGPTSingleSizeArray = F, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
        if (W(e)) return {
            w: e[0],
            h: e[1]
        }
    }, t.getWindowTop = L, t.getWindowSelf = z, t.getWindowLocation = V, t.logMessage = H, t.logInfo = K, t.logWarn = J, t.logError = $, t.hasConsoleLogger = function() {
        return _
    }, t.debugTurnedOn = Q, t.createInvisibleIframe = function() {
        var e = document.createElement("iframe");
        return e.id = q(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
    }, t.getParameterByName = function(e) {
        return je(V().search)[e] || ""
    }, t.isA = X, t.isFn = Z, t.isStr = ee, t.isArray = te, t.isNumber = ne, t.isPlainObject = re, t.isBoolean = function(e) {
        return X(e, C)
    }, t.isEmpty = oe, t.isEmptyStr = function(e) {
        return ee(e) && (!e || 0 === e.length)
    }, t._each = ie, t.contains = function(e, t) {
        if (oe(e)) return !1;
        if (Z(e.indexOf)) return -1 !== e.indexOf(t);
        var n = e.length;
        for (; n--;)
            if (e[n] === t) return !0;
        return !1
    }, t._map = function(n, r) {
        if (oe(n)) return [];
        if (Z(n.map)) return n.map(r);
        var o = [];
        return ie(n, function(e, t) {
            o.push(r(e, t, n))
        }), o
    }, t.hasOwn = ae, t.insertElement = ce, t.triggerPixel = ue, t.callBurl = function(e) {
        var t = e.source,
            n = e.burl;
        t === E.S2S.SRC && n && k.triggerPixel(n)
    }, t.insertHtmlIntoIframe = function(e) {
        if (!e) return;
        var t = document.createElement("iframe");
        t.id = q(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", k.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
    }, t.insertUserSyncIframe = se, t.createTrackPixelHtml = function(e) {
        if (!e) return "";
        var t = encodeURI(e),
            n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return n += '<img src="' + t + '"></div>'
    }, t.createTrackPixelIframeHtml = de, t.getValueString = fe, t.uniques = le, t.flatten = pe, t.getBidRequest = function(n, e) {
        return n ? (e.some(function(e) {
            var t = s()(e.bids, function(t) {
                return ["bidId", "adId", "bid_id"].some(function(e) {
                    return t[e] === n
                })
            });
            return t && (r = t), t
        }), r) : void 0;
        var r
    }, t.getKeys = ge, t.getValue = ye, t.getKeyByValue = function(e, t) {
        for (var n in e)
            if (e.hasOwnProperty(n) && e[n] === t) return n
    }, t.getBidderCodes = function() {
        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
            return e.bids.map(function(e) {
                return e.bidder
            }).reduce(pe, [])
        }).reduce(pe).filter(le)
    }, t.isGptPubadsDefined = be, n.d(t, "getHighestCpm", function() {
        return ve
    }), n.d(t, "getOldestHighestCpmBid", function() {
        return he
    }), n.d(t, "getLatestHighestCpmBid", function() {
        return me
    }), t.shuffle = function(e) {
        var t = e.length;
        for (; 0 < t;) {
            var n = Math.floor(Math.random() * t),
                r = e[--t];
            e[t] = e[n], e[n] = r
        }
        return e
    }, t.adUnitsFilter = function(e, t) {
        return f()(e, t && t.adUnitCode)
    }, t.deepClone = Ae, t.inIframe = function() {
        try {
            return k.getWindowSelf() !== k.getWindowTop()
        } catch (e) {
            return !0
        }
    }, t.isSafariBrowser = function() {
        return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
    }, t.replaceAuctionPrice = function(e, t) {
        if (!e) return;
        return e.replace(/\$\{AUCTION_PRICE\}/g, t)
    }, t.timestamp = function() {
        return (new Date).getTime()
    }, t.hasDeviceAccess = function() {
        return !1 !== r.b.getConfig("deviceAccess")
    }, t.checkCookieSupport = Ee, t.delayExecution = function(e, t) {
        if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
        var n = 0;
        return function() {
            ++n === t && e.apply(this, arguments)
        }
    }, t.groupBy = function(e, n) {
        return e.reduce(function(e, t) {
            return (e[t[n]] = e[t[n]] || []).push(t), e
        }, {})
    }, t.getDefinedParams = function(n, e) {
        return e.filter(function(e) {
            return n[e]
        }).reduce(function(e, t) {
            return m(e, h({}, t, n[t]))
        }, {})
    }, t.isValidMediaTypes = function(e) {
        var t = ["banner", "native", "video"];
        if (!Object.keys(e).every(function(e) {
                return f()(t, e)
            })) return !1;
        if (e.video && e.video.context) return f()(["instream", "outstream", "adpod"], e.video.context);
        return !0
    }, t.getBidderRequest = function(e, t, n) {
        return s()(e, function(e) {
            return 0 < e.bids.filter(function(e) {
                return e.bidder === t && e.adUnitCode === n
            }).length
        }) || {
            start: null,
            auctionId: null
        }
    }, t.getUserConfiguredParams = function(e, t, n) {
        return e.filter(function(e) {
            return e.code === t
        }).map(function(e) {
            return e.bids
        }).reduce(pe, []).filter(function(e) {
            return e.bidder === n
        }).map(function(e) {
            return e.params || {}
        })
    }, t.getOrigin = function() {
        return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
    }, t.getDNT = function() {
        return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
    }, t.isAdUnitCodeMatchingSlot = function(t) {
        return function(e) {
            return Oe(t, e)
        }
    }, t.isSlotMatchingAdUnitCode = Ie, t.getGptSlotInfoForAdUnitCode = function(e) {
        var t;
        be() && (t = s()(window.googletag.pubads().getSlots(), Ie(e)));
        if (t) return {
            gptSlot: t.getAdUnitPath(),
            divId: t.getSlotElementId()
        };
        return {}
    }, t.unsupportedBidderMessage = function(e, t) {
        var n = Object.keys(e.mediaTypes || {
            banner: "banner"
        }).join(", ");
        return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
    }, t.isInteger = Te, t.convertCamelToUnderscore = function(e) {
        return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
            return "_" + t.toLowerCase()
        }).replace(/^_/, "")
    }, t.cleanObj = function(n) {
        return Object.keys(n).reduce(function(e, t) {
            return void 0 !== n[t] && (e[t] = n[t]), e
        }, {})
    }, t.pick = function(a, c) {
        return "object" === S(a) ? c.reduce(function(e, t, n) {
            if ("function" == typeof t) return e;
            var r = t,
                o = t.match(/^(.+?)\sas\s(.+?)$/i);
            o && (t = o[1], r = o[2]);
            var i = a[t];
            return "function" == typeof c[n + 1] && (i = c[n + 1](i, e)), void 0 !== i && (e[r] = i), e
        }, {}) : {}
    }, t.transformBidderParamKeywords = function(e) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
            o = [];
        return ie(e, function(e, t) {
            if (te(e)) {
                var n = [];
                ie(e, function(e) {
                    !(e = fe(r + "." + t, e)) && "" !== e || n.push(e)
                }), e = n
            } else {
                if (!ee(e = fe(r + "." + t, e))) return;
                e = [e]
            }
            o.push({
                key: t,
                value: e
            })
        }), o
    }, t.convertTypes = function(r, o) {
        return Object.keys(r).forEach(function(e) {
            var t, n;
            o[e] && (Z(r[e]) ? o[e] = r[e](o[e]) : o[e] = (t = r[e], n = o[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), isNaN(o[e]) && delete o.key)
        }), o
    }, t.isArrayOfNums = function(e, t) {
        return te(e) && (!t || e.length === t) && e.every(Te)
    }, t.fill = function(e, t) {
        for (var n = [], r = 0; r < t; r++) {
            var o = re(e) ? Ae(e) : e;
            n.push(o)
        }
        return n
    }, t.chunk = function(e, t) {
        for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
            var o = r * t,
                i = o + t;
            n.push(e.slice(o, i))
        }
        return n
    }, t.getMinValueFromArray = function(e) {
        return Math.min.apply(Math, y(e))
    }, t.getMaxValueFromArray = function(e) {
        return Math.max.apply(Math, y(e))
    }, t.compareOn = function(n) {
        return function(e, t) {
            return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
        }
    }, t.parseQS = je, t.formatQS = we, t.parseUrl = function(e, t) {
        var n = document.createElement("a");
        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
        var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
        return {
            href: n.href,
            protocol: (n.protocol || "").replace(/:$/, ""),
            hostname: n.hostname,
            port: +n.port,
            pathname: n.pathname.replace(/^(?!\/)/, "/"),
            search: r ? n.search : k.parseQS(n.search || ""),
            hash: (n.hash || "").replace(/^#/, ""),
            host: n.host || window.location.host
        }
    }, t.buildUrl = function(e) {
        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(k.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
    }, t.deepEqual = Ce, t.mergeDeep = xe;
    var r = n(3),
        o = n(168),
        i = n.n(o),
        a = n(169),
        c = n.n(a),
        u = n(10),
        s = n.n(u),
        d = n(12),
        f = n.n(d),
        l = n(181);
    n.d(t, "deepAccess", function() {
        return l.a
    });
    var p = n(182);

    function g(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || b(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return v(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
        }
    }

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m() {
        return (m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function S(e) {
        return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    n.d(t, "deepSetValue", function() {
        return p.a
    });
    var A, E = n(5),
        O = "Array",
        I = "String",
        T = "Function",
        j = "Number",
        w = "Object",
        C = "Boolean",
        x = Object.prototype.toString,
        U = Boolean(window.console),
        _ = Boolean(U && window.console.log),
        B = Boolean(U && window.console.info),
        R = Boolean(U && window.console.warn),
        P = Boolean(U && window.console.error),
        k = {
            checkCookieSupport: Ee,
            createTrackPixelIframeHtml: de,
            getWindowSelf: z,
            getWindowTop: L,
            getWindowLocation: V,
            insertUserSyncIframe: se,
            insertElement: ce,
            isFn: Z,
            triggerPixel: ue,
            logError: $,
            logWarn: J,
            logMessage: H,
            logInfo: K,
            parseQS: je,
            formatQS: we,
            deepEqual: Ce
        },
        D = {},
        N = function(e, t) {
            return t
        }.bind(null, 1, D)() === D ? Function.prototype.bind : function(e) {
            var t = this,
                n = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
            }
        },
        M = (A = 0, function() {
            return ++A
        });

    function q() {
        return M() + Math.random().toString(16).substr(2)
    }

    function G() {
        return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
    }

    function F(e) {
        if (W(e)) return e[0] + "x" + e[1]
    }

    function W(e) {
        return te(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
    }

    function L() {
        return window.top
    }

    function z() {
        return window.self
    }

    function V() {
        return window.location
    }

    function H() {
        Q() && _ && console.log.apply(console, Y(arguments, "MESSAGE:"))
    }

    function K() {
        Q() && B && console.info.apply(console, Y(arguments, "INFO:"))
    }

    function J() {
        Q() && R && console.warn.apply(console, Y(arguments, "WARNING:"))
    }

    function $() {
        Q() && P && console.error.apply(console, Y(arguments, "ERROR:"))
    }

    function Y(e, t) {
        return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
    }

    function Q() {
        return !!r.b.getConfig("debug")
    }

    function X(e, t) {
        return x.call(e) === "[object " + t + "]"
    }

    function Z(e) {
        return X(e, T)
    }

    function ee(e) {
        return X(e, I)
    }

    function te(e) {
        return X(e, O)
    }

    function ne(e) {
        return X(e, j)
    }

    function re(e) {
        return X(e, w)
    }

    function oe(e) {
        if (!e) return !0;
        if (te(e) || ee(e)) return !(0 < e.length);
        for (var t in e)
            if (hasOwnProperty.call(e, t)) return !1;
        return !0
    }

    function ie(e, t) {
        if (!oe(e)) {
            if (Z(e.forEach)) return e.forEach(t, this);
            var n = 0,
                r = e.length;
            if (0 < r)
                for (; n < r; n++) t(e[n], n, e);
            else
                for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
        }
    }

    function ae(e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
    }

    function ce(e, t, n, r) {
        var o;
        t = t || document, o = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
        try {
            if ((o = o.length ? o : t.getElementsByTagName("body")).length) {
                o = o[0];
                var i = r ? null : o.firstChild;
                return o.insertBefore(e, i)
            }
        } catch (e) {}
    }

    function ue(e, t) {
        var n = new Image;
        t && k.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
    }

    function se(e, t) {
        var n = k.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
            r = document.createElement("div");
        r.innerHTML = n;
        var o = r.firstChild;
        t && k.isFn(t) && (o.addEventListener("load", t), o.addEventListener("error", t)), k.insertElement(o, document, "html", !0)
    }

    function de(e) {
        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
        return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(q(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
    }

    function fe(e, t, n) {
        return null == t ? n : ee(t) ? t : ne(t) ? t.toString() : void k.logWarn("Unsuported type for param: " + e + " required type: String")
    }

    function le(e, t, n) {
        return n.indexOf(e) === t
    }

    function pe(e, t) {
        return e.concat(t)
    }

    function ge(e) {
        return Object.keys(e)
    }

    function ye(e, t) {
        return e[t]
    }

    function be() {
        if (window.googletag && Z(window.googletag.pubads) && Z(window.googletag.pubads().getSlots)) return !0
    }
    var ve = Se("timeToRespond", function(e, t) {
            return t < e
        }),
        he = Se("responseTimestamp", function(e, t) {
            return t < e
        }),
        me = Se("responseTimestamp", function(e, t) {
            return e < t
        });

    function Se(n, r) {
        return function(e, t) {
            return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
        }
    }

    function Ae(e) {
        return i()(e)
    }

    function Ee() {
        if (window.navigator.cookieEnabled || document.cookie.length) return !0
    }
    var Oe = function(e, t) {
        return e.getAdUnitPath() === t || e.getSlotElementId() === t
    };

    function Ie(t) {
        return function(e) {
            return Oe(e, t)
        }
    }

    function Te(e) {
        return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }

    function je(e) {
        return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
            var n = g(t.split("="), 2),
                r = n[0],
                o = n[1];
            return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(o)) : e[r] = o || "", e
        }, {}) : {}
    }

    function we(e) {
        return Object.keys(e).map(function(t) {
            return Array.isArray(e[t]) ? e[t].map(function(e) {
                return "".concat(t, "[]=").concat(e)
            }).join("&") : "".concat(t, "=").concat(e[t])
        }).join("&")
    }

    function Ce(e, t) {
        return c()(e, t)
    }

    function xe(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!n.length) return e;
        var o = n.shift();
        if (re(e) && re(o))
            for (var i in o) re(o[i]) ? (e[i] || m(e, h({}, i, {})), xe(e[i], o[i])) : te(o[i]) && e[i] ? te(e[i]) && (e[i] = e[i].concat(o[i])) : m(e, h({}, i, o[i]));
        return xe.apply(void 0, [e].concat(n))
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "storage", function() {
        return T
    }), t.registerBidder = function(r) {
        var n = Array.isArray(r.supportedMediaTypes) ? {
            supportedMediaTypes: r.supportedMediaTypes
        } : void 0;

        function o(e) {
            var t = C(e);
            c.default.registerBidAdapter(t, e.code, n)
        }
        o(r), Array.isArray(r.aliases) && r.aliases.forEach(function(e) {
            var t, n = e;
            Object(m.isPlainObject)(e) && (n = e.code, t = e.gvlid), c.default.aliasRegistry[n] = r.code, o(I({}, r, {
                code: n,
                gvlid: t
            }))
        })
    }, t.newBidder = C, n.d(t, "registerSyncInner", function() {
        return x
    }), t.preloadBidderMappingFile = U, t.getIabSubCategory = function(t, e) {
        var n = c.default.getBidAdapter(t);
        if (n.getSpec().getMappingFileInfo) {
            var r = n.getSpec().getMappingFileInfo(),
                o = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                i = T.getDataFromLocalStorage(o);
            if (i) {
                try {
                    i = JSON.parse(i)
                } catch (e) {
                    Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                }
                return i.mapping[e] ? i.mapping[e] : null
            }
        }
    }, t.isValid = _;
    var r = n(100),
        c = n(7),
        u = n(3),
        b = n(33),
        s = n(44),
        i = n(35),
        a = n(36),
        o = n(5),
        v = n.n(o),
        d = n(8),
        h = n.n(d),
        f = n(12),
        l = n.n(f),
        p = n(4),
        m = n(0),
        g = n(2),
        y = n(13),
        S = n(9);

    function A(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function I() {
        return (I = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var T = Object(S.a)("bidderFactory"),
        j = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
        w = 1;

    function C(p) {
        return I(new r.a(p.code), {
            getSpec: function() {
                return Object.freeze(p)
            },
            registerSyncs: g,
            callBids: function(i, a, e, n, c, r) {
                var u, s, t, d, o, f;

                function l() {
                    e(), h.a.emit(v.a.EVENTS.BIDDER_DONE, i), g(s, i.gdprConsent, i.uspConsent)
                }
                Array.isArray(i.bids) && (u = {}, s = [], 0 !== (t = i.bids.filter(y)).length ? (d = {}, t.forEach(function(e) {
                    (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                }), (o = p.buildRequests(t, i)) && 0 !== o.length ? (Array.isArray(o) || (o = [o]), f = Object(m.delayExecution)(r(l), o.length), o.forEach(function(o) {
                    switch (o.method) {
                        case "GET":
                            n("".concat(o.url).concat(function(e) {
                                if (e) return "?".concat("object" === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                return ""
                            }(o.data)), {
                                success: r(e),
                                error: t
                            }, void 0, I({
                                method: "GET",
                                withCredentials: !0
                            }, o.options));
                            break;
                        case "POST":
                            n(o.url, {
                                success: r(e),
                                error: t
                            }, "string" == typeof o.data ? o.data : JSON.stringify(o.data), I({
                                method: "POST",
                                contentType: "text/plain",
                                withCredentials: !0
                            }, o.options));
                            break;
                        default:
                            Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(o.type, " must be GET or POST")), f()
                    }

                    function e(e, t) {
                        c(p.code);
                        try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        var n;
                        e = {
                            body: e,
                            headers: {
                                get: t.getResponseHeader.bind(t)
                            }
                        }, s.push(e);
                        try {
                            n = p.interpretResponse(e, o)
                        } catch (e) {
                            return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                        }

                        function r(e) {
                            var t, n, r, o = d[e.requestId];
                            o ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || I({}, e[o.bidder]), t = I(Object(b.a)(v.a.STATUS.GOOD, o), e), n = o.adUnitCode, r = t, u[n] = !0, _(n, r, [i]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                        }
                        n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n)
                    }

                    function t(e) {
                        c(p.code), Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                    }
                })) : l()) : l())
            }
        });

        function g(e, t, n) {
            x(p, e, t, n)
        }

        function y(e) {
            return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), !1)
        }
    }
    var x = Object(y.b)("async", function(t, e, n, r) {
        var o, i, a = u.b.getConfig("userSync.aliasSyncEnabled");
        !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (o = u.b.getConfig("userSync.filterSettings"), (i = t.getUserSyncs({
            iframeEnabled: !(!o || !o.iframe && !o.all),
            pixelEnabled: !(!o || !o.image && !o.all)
        }, e, n, r)) && (Array.isArray(i) || (i = [i]), i.forEach(function(e) {
            s.a.registerSync(e.type, t.code, e.url)
        })))
    }, "registerSyncs");

    function U(e, t) {
        if (!u.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
        t.filter(function(e) {
            return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a
        }).map(function(e) {
            return e.bids.map(function(e) {
                return e.bidder
            })
        }).reduce(m.flatten, []).filter(m.uniques).forEach(function(n) {
            var e = c.default.getBidAdapter(n);
            if (e.getSpec().getMappingFileInfo) {
                var t = e.getSpec().getMappingFileInfo(),
                    r = t.refreshInDays ? t.refreshInDays : w,
                    o = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                    i = T.getDataFromLocalStorage(o);
                try {
                    (!(i = i ? JSON.parse(i) : void 0) || Object(m.timestamp)() > i.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(m.timestamp)(),
                                    mapping: e.mapping
                                };
                                T.setDataInLocalStorage(o, JSON.stringify(t))
                            } catch (e) {
                                Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function() {
                            Object(m.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                } catch (e) {
                    Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                }
            }
        }), e.call(this, t)
    }

    function _(e, t, n) {
        function r(e) {
            return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
        }
        return e ? t ? (o = Object.keys(t), j.every(function(e) {
            return l()(o, e) && !l()([void 0, null], t[e])
        }) ? "native" !== t.mediaType || Object(i.f)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && ! function(e, t, n) {
            if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
            var r = Object(m.getBidderRequest)(n, t.bidderCode, e),
                o = r && r.bids && r.bids[0] && r.bids[0].sizes,
                i = Object(m.parseSizesInput)(o);
            if (1 === i.length) {
                var a = A(i[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1
            }
        }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
        var o
    }
    Object(y.a)("checkAdUnitSetup").before(U)
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return r
    }), n.d(t, "d", function() {
        return o
    }), n.d(t, "b", function() {
        return i
    }), n.d(t, "a", function() {
        return a
    });
    var r = "native",
        o = "video",
        i = "banner",
        a = "adpod"
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return v
    }), n.d(t, "b", function() {
        return j
    });
    var r = n(46),
        o = n(10),
        a = n.n(o),
        i = n(12),
        c = n.n(i),
        u = n(78),
        s = n.n(u),
        d = n(0);

    function f() {
        return (f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var l = n(90),
        p = n(0),
        g = n(5),
        y = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase(),
        b = window.location.origin,
        v = "random",
        h = {};
    h[v] = !0, h.fixed = !0;
    var m = v,
        S = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        };
    var A, E, O, I, T, j = (I = [], T = null, w(), {
        getCurrentBidder: function() {
            return T
        },
        getConfig: function() {
            if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                var e = arguments.length <= 0 ? void 0 : arguments[0];
                return e ? p.deepAccess(C(), e) : C()
            }
            return function(e, t) {
                var n = t;
                if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                    var r = {
                        topic: e,
                        callback: n
                    };
                    return I.push(r),
                        function() {
                            I.splice(I.indexOf(r), 1)
                        }
                }
                p.logError("listener must be a function")
            }.apply(void 0, arguments)
        },
        setConfig: function(n) {
            var e, r;
            p.isPlainObject(n) ? (e = Object.keys(n), r = {}, e.forEach(function(e) {
                var t = n[e];
                p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)), r[e] = E[e] = t
            }), x(r)) : p.logError("setConfig options must be an object")
        },
        setDefaults: function(e) {
            p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object")
        },
        resetConfig: w,
        runWithBidder: U,
        callbackWithBidder: function(i) {
            return function(o) {
                return function() {
                    if ("function" == typeof o) {
                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return U(i, (e = p.bind).call.apply(e, [o, this].concat(n)))
                    }
                    p.logWarn("config.callbackWithBidder callback is not a function")
                }
            }
        },
        setBidderConfig: function(r) {
            try {
                ! function(e) {
                    if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                    if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                    if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object"
                }(r), r.bidders.forEach(function(n) {
                    O[n] || (O[n] = {}), Object.keys(r.config).forEach(function(e) {
                        var t = r.config[e];
                        p.isPlainObject(t) ? O[n][e] = f({}, O[n][e] || {}, t) : O[n][e] = t
                    })
                })
            } catch (e) {
                p.logError(e)
            }
        },
        getBidderConfig: function() {
            return O
        }
    });

    function w() {
        A = {};
        var n = {
            _debug: y,
            get debug() {
                return this._debug
            },
            set debug(e) {
                this._debug = e
            },
            _bidderTimeout: 3e3,
            get bidderTimeout() {
                return this._bidderTimeout
            },
            set bidderTimeout(e) {
                this._bidderTimeout = e
            },
            _publisherDomain: b,
            get publisherDomain() {
                return this._publisherDomain
            },
            set publisherDomain(e) {
                this._publisherDomain = e
            },
            _priceGranularity: S.MEDIUM,
            set priceGranularity(e) {
                i(e) && ("string" == typeof e ? this._priceGranularity = o(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = S.CUSTOM, p.logMessage("Using custom price granularity")))
            },
            get priceGranularity() {
                return this._priceGranularity
            },
            _customPriceBucket: {},
            get customPriceBucket() {
                return this._customPriceBucket
            },
            _mediaTypePriceGranularity: {},
            get mediaTypePriceGranularity() {
                return this._mediaTypePriceGranularity
            },
            set mediaTypePriceGranularity(n) {
                var r = this;
                this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                    return i(n[t]) ? "string" == typeof n ? e[t] = o(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t], p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), e
                }, {})
            },
            _sendAllBids: !0,
            get enableSendAllBids() {
                return this._sendAllBids
            },
            set enableSendAllBids(e) {
                this._sendAllBids = e
            },
            _useBidCache: !1,
            get useBidCache() {
                return this._useBidCache
            },
            set useBidCache(e) {
                this._useBidCache = e
            },
            _deviceAccess: !0,
            get deviceAccess() {
                return this._deviceAccess
            },
            set deviceAccess(e) {
                this._deviceAccess = e
            },
            _bidderSequence: m,
            get bidderSequence() {
                return this._bidderSequence
            },
            set bidderSequence(e) {
                h[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
            },
            _timeoutBuffer: 400,
            get timeoutBuffer() {
                return this._timeoutBuffer
            },
            set timeoutBuffer(e) {
                this._timeoutBuffer = e
            },
            _disableAjaxTimeout: !1,
            get disableAjaxTimeout() {
                return this._disableAjaxTimeout
            },
            set disableAjaxTimeout(e) {
                this._disableAjaxTimeout = e
            }
        };

        function o(t) {
            return a()(Object.keys(S), function(e) {
                return t === S[e]
            })
        }

        function i(e) {
            if (e) {
                if ("string" == typeof e) o(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                return 1
            }
            p.logError("Prebid Error: no value passed to `setPriceGranularity()`")
        }
        E && x(Object.keys(E).reduce(function(e, t) {
            return E[t] !== n[t] && (e[t] = n[t] || {}), e
        }, {})), E = n, O = {}
    }

    function C() {
        if (T && O && p.isPlainObject(O[T])) {
            var n = O[T],
                e = new s.a(Object.keys(E).concat(Object.keys(n)));
            return l(e).reduce(function(e, t) {
                return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], e
            }, {})
        }
        return f({}, E)
    }

    function x(o) {
        var t = Object.keys(o);
        I.filter(function(e) {
            return c()(t, e.topic)
        }).forEach(function(e) {
            var t, n, r;
            e.callback((t = {}, n = e.topic, r = o[e.topic], n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, t))
        }), I.filter(function(e) {
            return "*" === e.topic
        }).forEach(function(e) {
            return e.callback(o)
        })
    }

    function U(e, t) {
        T = e;
        try {
            return t()
        } finally {
            T = null
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), t.b = o;
    var l = n(3);

    function p() {
        return (p = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var y = n(0),
        b = 4,
        r = o();

    function o() {
        var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            d = e.request,
            f = e.done;
        return function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
            try {
                var o, i = r.method || (n ? "POST" : "GET"),
                    a = document.createElement("a");
                a.href = e;
                var c, u = "object" === g(t) && null !== t ? t : {
                    success: function() {
                        y.logMessage("xhr success")
                    },
                    error: function(e) {
                        y.logError("xhr error", null, e)
                    }
                };
                "function" == typeof t && (u.success = t), (o = new window.XMLHttpRequest).onreadystatechange = function() {
                    var e;
                    o.readyState === b && ("function" == typeof f && f(a.origin), 200 <= (e = o.status) && e < 300 || 304 === e ? u.success(o.responseText, o) : u.error(o.statusText, o))
                }, l.b.getConfig("disableAjaxTimeout") || (o.ontimeout = function() {
                    y.logError("  xhr timeout after ", o.timeout, "ms")
                }), "GET" === i && n && (p((c = y.parseUrl(e, r)).search, n), e = y.buildUrl(c)), o.open(i, e, !0), l.b.getConfig("disableAjaxTimeout") || (o.timeout = s), r.withCredentials && (o.withCredentials = !0), y._each(r.customHeaders, function(e, t) {
                    o.setRequestHeader(t, e)
                }), r.preflight && o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === i && n ? o.send(n) : o.send()
            } catch (e) {
                y.logError("xhr construction", e)
            }
        }
    }
}, function(e, t) {
    e.exports = {
        JSON_MAPPING: {
            PL_CODE: "code",
            PL_SIZE: "sizes",
            PL_BIDS: "bids",
            BD_BIDDER: "bidder",
            BD_ID: "paramsd",
            BD_PL_ID: "placementId",
            ADSERVER_TARGETING: "adserverTargeting",
            BD_SETTING_STANDARD: "standard"
        },
        DEBUG_MODE: "pbjs_debug",
        STATUS: {
            GOOD: 1,
            NO_BID: 2
        },
        CB: {
            TYPE: {
                ALL_BIDS_BACK: "allRequestedBidsBack",
                AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                BID_WON: "bidWon",
                REQUEST_BIDS: "requestBids"
            }
        },
        EVENTS: {
            AUCTION_INIT: "auctionInit",
            AUCTION_END: "auctionEnd",
            BID_ADJUSTMENT: "bidAdjustment",
            BID_TIMEOUT: "bidTimeout",
            BID_REQUESTED: "bidRequested",
            BID_RESPONSE: "bidResponse",
            NO_BID: "noBid",
            BID_WON: "bidWon",
            BIDDER_DONE: "bidderDone",
            SET_TARGETING: "setTargeting",
            BEFORE_REQUEST_BIDS: "beforeRequestBids",
            REQUEST_BIDS: "requestBids",
            ADD_AD_UNITS: "addAdUnits",
            AD_RENDER_FAILED: "adRenderFailed",
            BIDDER_BLOCKED: "bidderBlocked"
        },
        AD_RENDER_FAILED_REASON: {
            PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
            NO_AD: "noAd",
            EXCEPTION: "exception",
            CANNOT_FIND_AD: "cannotFindAd",
            MISSING_DOC_OR_ADID: "missingDocOrAdid"
        },
        EVENT_ID_PATHS: {
            bidWon: "adUnitCode"
        },
        GRANULARITY_OPTIONS: {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        },
        TARGETING_KEYS: {
            BIDDER: "hb_bidder",
            AD_ID: "hb_adid",
            PRICE_BUCKET: "hb_pb",
            SIZE: "hb_size",
            DEAL: "hb_deal",
            SOURCE: "hb_source",
            FORMAT: "hb_format",
            UUID: "hb_uuid",
            CACHE_ID: "hb_cache_id",
            CACHE_HOST: "hb_cache_host"
        },
        NATIVE_KEYS: {
            title: "hb_native_title",
            body: "hb_native_body",
            body2: "hb_native_body2",
            privacyLink: "hb_native_privacy",
            privacyIcon: "hb_native_privicon",
            sponsoredBy: "hb_native_brand",
            image: "hb_native_image",
            icon: "hb_native_icon",
            clickUrl: "hb_native_linkurl",
            displayUrl: "hb_native_displayurl",
            cta: "hb_native_cta",
            rating: "hb_native_rating",
            address: "hb_native_address",
            downloads: "hb_native_downloads",
            likes: "hb_native_likes",
            phone: "hb_native_phone",
            price: "hb_native_price",
            salePrice: "hb_native_saleprice"
        },
        S2S: {
            SRC: "s2s",
            DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
            SYNCED_BIDDERS_KEY: "pbjsSyncs"
        },
        BID_STATUS: {
            BID_TARGETING_SET: "targetingSet",
            RENDERED: "rendered",
            BID_REJECTED: "bidRejected"
        }
    }
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "gdprDataHandler", function() {
        return R
    }), n.d(t, "uspDataHandler", function() {
        return P
    }), t.setS2STestingModule = function(e) {
        T = e
    };
    var S = n(0),
        p = n(101),
        g = n(35),
        l = n(1),
        h = n(4),
        A = n(3),
        r = n(13),
        o = n(12),
        E = n.n(o),
        i = n(10),
        O = n.n(i),
        y = n(68),
        I = n(30);

    function m(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function b() {
        return (b = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var T, j = n(0),
        w = n(5),
        C = n(8),
        v = {},
        x = v.bidderRegistry = {},
        U = v.aliasRegistry = {},
        _ = {};
    A.b.getConfig("s2sConfig", function(e) {
        _ = e.s2sConfig
    });
    var c = {};
    var B = Object(r.b)("sync", function(e) {
        var o = e.bidderCode,
            s = e.auctionId,
            d = e.bidderRequestId,
            t = e.adUnits,
            f = e.labels,
            l = e.src;
        return t.reduce(function(e, c) {
            var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                n = t.active,
                u = t.mediaTypes,
                r = t.filterResults;
            return n ? r && j.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : j.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function(e) {
                return e.bidder === o
            }).reduce(function(e, t) {
                var n = c.nativeParams || j.deepAccess(c, "mediaTypes.native");
                n && (t = b({}, t, {
                    nativeParams: Object(g.g)(n)
                })), t = b({}, t, Object(S.getDefinedParams)(c, ["fpd", "mediaType", "renderer", "storedAuctionResponse"]));
                var r = Object(p.b)(Object(p.a)(t, f), u),
                    o = r.active,
                    i = r.mediaTypes,
                    a = r.filterResults;
                return o ? a && j.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : j.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), j.isValidMediaTypes(i) ? t = b({}, t, {
                    mediaTypes: i
                }) : j.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), o && e.push(b({}, t, {
                    adUnitCode: c.code,
                    transactionId: c.transactionId,
                    sizes: j.deepAccess(i, "banner.sizes") || j.deepAccess(i, "video.playerSize") || [],
                    bidId: t.bid_id || j.getUniqueIdentifierStr(),
                    bidderRequestId: d,
                    auctionId: s,
                    src: l,
                    bidRequestsCount: y.a.getRequestsCounter(c.code),
                    bidderRequestsCount: y.a.getBidderRequestsCounter(c.code, t.bidder),
                    bidderWinsCount: y.a.getBidderWinsCounter(c.code, t.bidder)
                })), e
            }, [])), e
        }, []).reduce(S.flatten, []).filter(function(e) {
            return "" !== e
        })
    }, "getBids");
    var R = {
            consentData: null,
            setConsentData: function(e) {
                R.consentData = e
            },
            getConsentData: function() {
                return R.consentData
            }
        },
        P = {
            consentData: null,
            setConsentData: function(e) {
                P.consentData = e
            },
            getConsentData: function() {
                return P.consentData
            }
        };

    function k() {
        return _ && _.enabled && _.testing && T
    }

    function u(t, n, e) {
        try {
            var r = x[t].getSpec();
            r && r[n] && "function" == typeof r[n] && (j.logInfo("Invoking ".concat(t, ".").concat(n)), A.b.runWithBidder(t, S.bind.call(r[n], r, e)))
        } catch (e) {
            j.logWarn("Error calling ".concat(n, " of ").concat(t))
        }
    }
    v.makeBidRequests = Object(r.b)("sync", function(e, o, i, a, c) {
        C.emit(w.EVENTS.BEFORE_REQUEST_BIDS, e);
        var u = [],
            t = Object(S.getBidderCodes)(e);
        A.b.getConfig("bidderSequence") === A.a && (t = Object(S.shuffle)(t));
        var n, r, s, d, f, l, p, g = Object(I.a)(),
            y = t,
            b = [];
        _.enabled && (k() && (b = T.getSourceBidderMap(e)[T.CLIENT]), n = _.bidders, y = t.filter(function(e) {
            return !E()(n, e) || E()(b, e)
        }), Boolean(k() && _.testServerOnly) && (p = e, Boolean(O()(p, function(e) {
            return O()(e.bids, function(e) {
                return (e.bidSource || _.bidderControl && _.bidderControl[e.bidder]) && e.finalSource === T.SERVER
            })
        }))) && (y.length = 0), d = e, f = _.bidders, (l = j.deepClone(d)).forEach(function(e) {
            e.bids = e.bids.filter(function(e) {
                return E()(f, e.bidder) && (!k() || e.finalSource !== T.CLIENT)
            }).map(function(e) {
                return e.bid_id = j.getUniqueIdentifierStr(), e
            })
        }), r = l = l.filter(function(e) {
            return 0 !== e.bids.length
        }), s = j.generateUUID(), n.forEach(function(e) {
            var t = j.getUniqueIdentifierStr(),
                n = {
                    bidderCode: e,
                    auctionId: i,
                    bidderRequestId: t,
                    tid: s,
                    bids: B({
                        bidderCode: e,
                        auctionId: i,
                        bidderRequestId: t,
                        adUnits: j.deepClone(r),
                        labels: c,
                        src: w.S2S.SRC
                    }),
                    auctionStart: o,
                    timeout: _.timeout,
                    src: w.S2S.SRC,
                    refererInfo: g
                };
            0 !== n.bids.length && u.push(n)
        }), r.forEach(function(e) {
            var t = e.bids.filter(function(t) {
                return O()(u, function(e) {
                    return O()(e.bids, function(e) {
                        return e.bidId === t.bid_id
                    })
                })
            });
            e.bids = t
        }), u.forEach(function(e) {
            e.adUnitsS2SCopy = r.filter(function(e) {
                return 0 < e.bids.length
            })
        }));
        var v, h, m = (v = e, (h = j.deepClone(v)).forEach(function(e) {
            e.bids = e.bids.filter(function(e) {
                return !k() || e.finalSource !== T.SERVER
            })
        }), h = h.filter(function(e) {
            return 0 !== e.bids.length
        }));
        return y.forEach(function(e) {
            var t = j.getUniqueIdentifierStr(),
                n = {
                    bidderCode: e,
                    auctionId: i,
                    bidderRequestId: t,
                    bids: B({
                        bidderCode: e,
                        auctionId: i,
                        bidderRequestId: t,
                        adUnits: j.deepClone(m),
                        labels: c,
                        src: "client"
                    }),
                    auctionStart: o,
                    timeout: a,
                    refererInfo: g
                },
                r = x[e];
            r || j.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
        }), R.getConsentData() && u.forEach(function(e) {
            e.gdprConsent = R.getConsentData()
        }), P.getConsentData() && u.forEach(function(e) {
            e.uspConsent = P.getConsentData()
        }), u
    }, "makeBidRequests"), v.callBids = function(e, t, o, i, a, c, u) {
        var n, r, s, d, f, l, p, g, y, b, v;
        t.length ? (r = (n = m(t.reduce(function(e, t) {
            return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
        }, [
            [],
            []
        ]), 2))[0], (s = n[1]).length && (d = Object(h.b)(c, a ? {
            request: a.request.bind(null, "s2s"),
            done: a.done
        } : void 0), f = _.bidders, l = x[_.adapter], p = s[0].tid, g = s[0].adUnitsS2SCopy, l ? (y = {
            tid: p,
            ad_units: g
        }).ad_units.length && (b = s.map(function(e) {
            return e.start = Object(S.timestamp)(), i.bind(e)
        }), v = y.ad_units.reduce(function(e, t) {
            return e.concat((t.bids || []).reduce(function(e, t) {
                return e.concat(t.bidder)
            }, []))
        }, []), j.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
            return E()(v, e)
        }).join(","))), s.forEach(function(e) {
            C.emit(w.EVENTS.BID_REQUESTED, e)
        }), l.callBids(y, s, function(e, t) {
            var n = Object(S.getBidderRequest)(s, t.bidderCode, e);
            n && o.call(n, e, t)
        }, function() {
            return b.forEach(function(e) {
                return e()
            })
        }, d)) : j.logError("missing " + _.adapter)), r.forEach(function(t) {
            t.start = Object(S.timestamp)();
            var e = x[t.bidderCode];
            j.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)), C.emit(w.EVENTS.BID_REQUESTED, t);
            var n = Object(h.b)(c, a ? {
                    request: a.request.bind(null, t.bidderCode),
                    done: a.done
                } : void 0),
                r = i.bind(t);
            try {
                A.b.runWithBidder(t.bidderCode, S.bind.call(e.callBids, e, t, o.bind(t), r, n, u, A.b.callbackWithBidder(t.bidderCode)))
            } catch (e) {
                j.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                    e: e,
                    bidRequest: t
                }), r()
            }
        })) : j.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
    }, v.videoAdapters = [], v.registerBidAdapter = function(e, t) {
        var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
            r = void 0 === n ? [] : n;
        e && t ? "function" == typeof e.callBids ? (x[t] = e, E()(r, "video") && v.videoAdapters.push(t), E()(r, "native") && g.e.push(t)) : j.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : j.logError("bidAdaptor or bidderCode not specified")
    }, v.aliasBidAdapter = function(t, e, n) {
        var r, o;
        if (void 0 === x[e]) {
            var i = x[t];
            if (void 0 === i) {
                var a = A.b.getConfig("s2sConfig"),
                    c = a && a.bidders;
                c && E()(c, e) ? U[e] = t : j.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
            } else try {
                var u, s, d, f = (r = t, o = [], E()(v.videoAdapters, r) && o.push("video"), E()(g.e, r) && o.push("native"), o);
                i.constructor.prototype != Object.prototype ? (d = new i.constructor).setBidderCode(e) : (u = i.getSpec(), s = n && n.gvlid, d = Object(l.newBidder)(b({}, u, {
                    code: e,
                    gvlid: s
                })), U[e] = t), v.registerBidAdapter(d, e, {
                    supportedMediaTypes: f
                })
            } catch (e) {
                j.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
            }
        } else j.logMessage('alias name "' + e + '" has been already specified.')
    }, v.registerAnalyticsAdapter = function(e) {
        var t = e.adapter,
            n = e.code;
        t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, c[n] = t) : j.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : j.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
    }, v.enableAnalytics = function(e) {
        j.isArray(e) || (e = [e]), j._each(e, function(e) {
            var t = c[e.provider];
            t ? t.enableAnalytics(e) : j.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
        })
    }, v.getBidAdapter = function(e) {
        return x[e]
    }, v.callTimedOutBidders = function(t, n, r) {
        n = n.map(function(e) {
            return e.params = j.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
        }), n = j.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
            u(e, "onTimeout", n[e])
        })
    }, v.callBidWonBidder = function(e, t, n) {
        t.params = j.getUserConfiguredParams(n, t.adUnitCode, t.bidder), y.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), u(e, "onBidWon", t)
    }, v.callSetTargetingBidder = function(e, t) {
        u(e, "onSetTargeting", t)
    }, t.default = v
}, function(e, t, n) {
    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var c, o, u = n(0),
        i = n(5),
        a = Array.prototype.slice,
        s = Array.prototype.push,
        d = u._map(i.EVENTS, function(e) {
            return e
        }),
        f = i.EVENT_ID_PATHS,
        l = [];
    e.exports = (c = {}, (o = {}).on = function(e, t, n) {
        var r, o;
        o = e, u.contains(d, o) ? (r = c[e] || {
            que: []
        }, n ? (r[n] = r[n] || {
            que: []
        }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + d)
    }, o.emit = function(e) {
        ! function(e, t) {
            u.logMessage("Emitting event for: " + e);
            var n = t[0] || {},
                r = n[f[e]],
                o = c[e] || {
                    que: []
                },
                i = u._map(o, function(e, t) {
                    return t
                }),
                a = [];
            l.push({
                eventType: e,
                args: n,
                id: r
            }), r && u.contains(i, r) && s.apply(a, o[r].que), s.apply(a, o.que), u._each(a, function(e) {
                if (e) try {
                    e.apply(null, t)
                } catch (e) {
                    u.logError("Error executing handler:", "events.js", e)
                }
            })
        }(e, a.call(arguments, 1))
    }, o.off = function(e, n, r) {
        var o = c[e];
        u.isEmpty(o) || u.isEmpty(o.que) && u.isEmpty(o[r]) || r && (u.isEmpty(o[r]) || u.isEmpty(o[r].que)) || (r ? u._each(o[r].que, function(e) {
            var t = o[r].que;
            e === n && t.splice(t.indexOf(e), 1)
        }) : u._each(o.que, function(e) {
            var t = o.que;
            e === n && t.splice(t.indexOf(e), 1)
        }), c[e] = o)
    }, o.get = function() {
        return c
    }, o.getEvents = function() {
        var n = [];
        return u._each(l, function(e) {
            var t = r({}, e);
            n.push(t)
        }), n
    }, o)
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return f
    }), n.d(t, "d", function() {
        return l
    }), t.a = function(e) {
        return i({
            moduleName: e,
            moduleType: "core"
        })
    }, t.b = function(e, t) {
        return i({
            gvlid: e,
            moduleName: t
        })
    };
    var r = n(13),
        c = n(0),
        o = n(12),
        u = n.n(o),
        d = ["core", "prebid-module"],
        f = [];

    function i(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            o = t.gvlid,
            i = t.moduleName,
            a = t.moduleType;

        function s(n) {
            if (u()(d, a)) {
                return n({
                    valid: !0
                })
            }
            var r;
            return l(o, i, {
                hasEnforcementHook: !1
            }, function(e) {
                var t;
                r = e && e.hasEnforcementHook ? n(e) : (t = {
                    hasEnforcementHook: !1,
                    valid: c.hasDeviceAccess()
                }, n(t))
            }), r
        }
        return {
            setCookie: function(o, i, a, c, u, t) {
                function n(e) {
                    var t, n, r;
                    e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "", n = a && "" !== a ? " ;expires=".concat(a) : "", r = null != c && "none" == c.toLowerCase() ? "; Secure" : "", document.cookie = "".concat(o, "=").concat(encodeURIComponent(i)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r))
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e)
                })
            },
            getCookie: function(n, t) {
                function r(e) {
                    if (e && e.valid) {
                        var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
                        return t ? decodeURIComponent(t[2]) : null
                    }
                    return null
                }
                if (!t || "function" != typeof t) return s(r);
                f.push(function() {
                    var e = s(r);
                    t(e)
                })
            },
            localStorageIsEnabled: function(t) {
                function n(e) {
                    if (e && e.valid) try {
                        return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                    } catch (e) {}
                    return !1
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e)
                })
            },
            cookiesAreEnabled: function(t) {
                function n(e) {
                    return !(!e || !e.valid) && (!!c.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e)
                })
            },
            setDataInLocalStorage: function(t, n, r) {
                function o(e) {
                    e && e.valid && window.localStorage.setItem(t, n)
                }
                if (!r || "function" != typeof r) return s(o);
                f.push(function() {
                    var e = s(o);
                    r(e)
                })
            },
            getDataFromLocalStorage: function(t, n) {
                function r(e) {
                    return e && e.valid ? window.localStorage.getItem(t) : null
                }
                if (!n || "function" != typeof n) return s(r);
                f.push(function() {
                    var e = s(r);
                    n(e)
                })
            },
            removeDataFromLocalStorage: function(t, n) {
                function r(e) {
                    e && e.valid && window.localStorage.removeItem(t)
                }
                if (!n || "function" != typeof n) return s(r);
                f.push(function() {
                    var e = s(r);
                    n(e)
                })
            },
            hasLocalStorage: function(t) {
                function n(e) {
                    if (e && e.valid) try {
                        return !!window.localStorage
                    } catch (e) {
                        c.logError("Local storage api disabled")
                    }
                    return !1
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e)
                })
            },
            findSimilarCookies: function(i, t) {
                function n(e) {
                    if (e && e.valid) {
                        var t = [];
                        if (c.hasDeviceAccess())
                            for (var n = document.cookie.split(";"); n.length;) {
                                var r = n.pop(),
                                    o = (o = r.indexOf("=")) < 0 ? r.length : o;
                                0 <= decodeURIComponent(r.slice(0, o).replace(/^\s+/, "")).indexOf(i) && t.push(decodeURIComponent(r.slice(o + 1)))
                            }
                        return t
                    }
                }
                if (!t || "function" != typeof t) return s(n);
                f.push(function() {
                    var e = s(n);
                    t(e)
                })
            }
        }
    }
    var l = Object(r.b)("async", function(e, t, n, r) {
        r(n)
    }, "validateStorageEnforcement")
}, function(e, t, n) {
    var r = n(106);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    t.a = o, t.c = function(e) {
        return !(!e || !e.url)
    }, t.b = function(e, t) {
        e.render(t)
    };
    var u = n(39),
        s = n(0),
        r = n(10),
        d = n.n(r),
        f = "outstream";

    function o(e) {
        var t = this,
            r = e.url,
            n = e.config,
            o = e.id,
            i = e.callback,
            a = e.loaded,
            c = e.adUnitCode;
        this.url = r, this.config = n, this.handlers = {}, this.id = o, this.loaded = a, this.cmd = [], this.push = function(e) {
            "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
        }, this.callback = i || function() {
            t.loaded = !0, t.process()
        }, this.render = function() {
            var t, e, n;
            t = c, e = pbjs.adUnits, (n = d()(e, function(e) {
                return e.code === t
            })) && n.renderer && n.renderer.url && n.renderer.render ? s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)) : Object(u.a)(r, f, this.callback), this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer")
        }.bind(this)
    }
    o.install = function(e) {
        return new o({
            url: e.url,
            config: e.config,
            id: e.id,
            callback: e.callback,
            loaded: e.loaded,
            adUnitCode: e.adUnitCode
        })
    }, o.prototype.getConfig = function() {
        return this.config
    }, o.prototype.setRender = function(e) {
        this._render = e
    }, o.prototype.setEventHandlers = function(e) {
        this.handlers = e
    }, o.prototype.handleVideoEvent = function(e) {
        var t = e.id,
            n = e.eventName;
        "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
    }, o.prototype.process = function() {
        for (; 0 < this.cmd.length;) try {
            this.cmd.shift().call()
        } catch (e) {
            s.logError("Error processing Renderer command: ", e)
        }
    }
}, function(e, t, n) {
    var r = n(115);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return a
    }), n.d(t, "a", function() {
        return c
    }), t.d = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
        0 === e.getHooks({
            hook: t
        }).length && e.before(t, n)
    }, t.c = function(e, n) {
        a("async", function(e) {
            e.forEach(function(e) {
                return n.apply(void 0, function(e) {
                    if (Array.isArray(e)) return i(e)
                }(t = e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }());
                var t
            })
        }, e)([])
    }, t.e = function(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        c(e).before(function(e, t) {
            t.push(n), e(t)
        })
    };
    var r = n(183),
        o = n.n(r);

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var a = o()({
            ready: o.a.SYNC | o.a.ASYNC | o.a.QUEUE
        }),
        c = a.get
}, function(e, t, n) {
    "use strict";

    function v(r) {
        function e(e, t, n) {
            if (this instanceof r) {
                switch (arguments.length) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(e);
                    case 2:
                        return new r(e, t)
                }
                return new r(e, t, n)
            }
            return r.apply(this, arguments)
        }
        return e.prototype = r.prototype, e
    }
    var h = n(22),
        m = n(108).f,
        S = n(110),
        A = n(42),
        E = n(21),
        O = n(29),
        I = n(24);
    e.exports = function(e, t) {
        var n, r, o, i, a, c, u, s, d = e.target,
            f = e.global,
            l = e.stat,
            p = e.proto,
            g = f ? h : l ? h[d] : (h[d] || {}).prototype,
            y = f ? A : A[d] || (A[d] = {}),
            b = y.prototype;
        for (o in t) n = !S(f ? o : d + (l ? "." : "#") + o, e.forced) && g && I(g, o), a = y[o], n && (c = e.noTargetGet ? (s = m(g, o)) && s.value : g[o]), i = n && c ? c : t[o], n && typeof a == typeof i || (u = e.bind && n ? E(i, h) : e.wrap && n ? v(i) : p && "function" == typeof i ? E(Function.call, i) : i, (e.sham || i && i.sham || a && a.sham) && O(u, "sham", !0), y[o] = u, p && (I(A, r = d + "Prototype") || O(A, r, {}), A[r][o] = i, e.real && b && !b[o] && O(b, o, i)))
    }
}, function(e, t, n) {
    var r = n(23);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    function p(e, t) {
        this.stopped = e, this.result = t
    }
    var g = n(15),
        y = n(80),
        b = n(51),
        v = n(21),
        h = n(62),
        m = n(81);
    (e.exports = function(e, t, n, r, o) {
        var i, a, c, u, s, d, f, l = v(t, n, r ? 2 : 1);
        if (o) i = e;
        else {
            if ("function" != typeof(a = h(e))) throw TypeError("Target is not iterable");
            if (y(a)) {
                for (c = 0, u = b(e.length); c < u; c++)
                    if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p) return s;
                return new p(!1)
            }
            i = a.call(e)
        }
        for (d = i.next; !(f = d.call(i)).done;)
            if ("object" == typeof(s = m(i, l, f.value, r)) && s && s instanceof p) return s;
        return new p(!1)
    }).stop = function(e) {
        return new p(!0, e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }
}, function(e, t, n) {
    var r = n(22),
        o = n(74),
        i = n(24),
        a = n(60),
        c = n(76),
        u = n(114),
        s = o("wks"),
        d = r.Symbol,
        f = u ? d : d && d.withoutSetter || a;
    e.exports = function(e) {
        return i(s, e) || (c && i(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)), s[e]
    }
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return window.pbjs
    }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs")
}, function(e, t, n) {
    var i = n(18);
    e.exports = function(r, o, e) {
        if (i(r), void 0 === o) return r;
        switch (e) {
            case 0:
                return function() {
                    return r.call(o)
                };
            case 1:
                return function(e) {
                    return r.call(o, e)
                };
            case 2:
                return function(e, t) {
                    return r.call(o, e, t)
                };
            case 3:
                return function(e, t, n) {
                    return r.call(o, e, t, n)
                }
        }
        return function() {
            return r.apply(o, arguments)
        }
    }
}, function(n, e, t) {
    (function(e) {
        function t(e) {
            return e && e.Math == Math && e
        }
        n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")()
    }).call(e, t(31))
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    function r(e) {
        return "function" == typeof e ? e : void 0
    }
    var o = n(42),
        i = n(22);
    e.exports = function(e, t) {
        return arguments.length < 2 ? r(o[e]) || r(i[e]) : o[e] && o[e][t] || i[e] && i[e][t]
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    });
    var r = n(0),
        s = n(40),
        o = n(10),
        i = n.n(o),
        a = n(5);
    var d, c, u = (d = [], (c = {}).addWinningBid = function(t) {
        var e = i()(d, function(e) {
            return e.getAuctionId() === t.auctionId
        });
        e ? (t.status = a.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid")
    }, c.getAllWinningBids = function() {
        return d.map(function(e) {
            return e.getWinningBids()
        }).reduce(r.flatten, [])
    }, c.getBidsRequested = function() {
        return d.map(function(e) {
            return e.getBidRequests()
        }).reduce(r.flatten, [])
    }, c.getNoBids = function() {
        return d.map(function(e) {
            return e.getNoBids()
        }).reduce(r.flatten, [])
    }, c.getBidsReceived = function() {
        return d.map(function(e) {
            if (e.getAuctionStatus() === s.a) return e.getBidsReceived()
        }).reduce(r.flatten, []).filter(function(e) {
            return e
        })
    }, c.getAdUnits = function() {
        return d.map(function(e) {
            return e.getAdUnits()
        }).reduce(r.flatten, [])
    }, c.getAdUnitCodes = function() {
        return d.map(function(e) {
            return e.getAdUnitCodes()
        }).reduce(r.flatten, []).filter(r.uniques)
    }, c.createAuction = function(e) {
        var t, n = e.adUnits,
            r = e.adUnitCodes,
            o = e.callback,
            i = e.cbTimeout,
            a = e.labels,
            c = e.auctionId,
            u = Object(s.k)({
                adUnits: n,
                adUnitCodes: r,
                callback: o,
                cbTimeout: i,
                labels: a,
                auctionId: c
            });
        return t = u, d.push(t), u
    }, c.findBidByAdId = function(t) {
        return i()(d.map(function(e) {
            return e.getBidsReceived()
        }).reduce(r.flatten, []), function(e) {
            return e.adId === t
        })
    }, c.getStandardBidderAdServerTargeting = function() {
        return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING]
    }, c.setStatusForBids = function(e, t) {
        var n, r = c.findBidByAdId(e);
        r && (r.status = t), !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = i()(d, function(e) {
            return e.getAuctionId() === r.auctionId
        })) && n.setBidTargeting(r)
    }, c.getLastAuctionId = function() {
        return d.length && d[d.length - 1].getAuctionId()
    }, c)
}, function(e, t, n) {
    var r = n(28);
    e.exports = !r(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    var r = n(27),
        o = n(32),
        i = n(47);
    e.exports = r ? function(e, t, n) {
        return o.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var o = n(0);

    function i() {
        return (i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var a, r = (a = window, function() {
        try {
            var e, t = c(),
                n = t.length - 1,
                r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                o = function(e) {
                    for (var t, n = [], r = null, o = null, i = null, a = null, c = null, u = e.length - 1; 0 <= u; u--) {
                        try {
                            o = e[u].location
                        } catch (e) {}
                        if (o) n.push(o), c = c || o;
                        else if (0 !== u) {
                            t = e[u - 1];
                            try {
                                i = t.referrer, a = t.ancestor
                            } catch (e) {}
                            i ? (n.push(i), c = c || i) : a ? (n.push(a), c = c || a) : n.push(r)
                        } else n.push(r)
                    }
                    return {
                        stack: n,
                        detectedRefererUrl: c
                    }
                }(t);
            return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                referer: o.detectedRefererUrl,
                reachedTop: r,
                numIframes: n,
                stack: o.stack,
                canonicalUrl: e
            }
        } catch (e) {}
    });

    function c() {
        var e = function() {
                var t, n = [];
                do {
                    try {
                        t = t ? t.parent : a;
                        try {
                            var e = t == a.top,
                                r = {
                                    referrer: t.document.referrer || null,
                                    location: t.location.href || null,
                                    isTop: e
                                };
                            e && (r = i(r, {
                                canonicalUrl: function(e) {
                                    try {
                                        var t = e.querySelector("link[rel='canonical']");
                                        if (null !== t) return t.href
                                    } catch (e) {}
                                    return null
                                }(t.document)
                            })), n.push(r)
                        } catch (e) {
                            n.push({
                                referrer: null,
                                location: null,
                                isTop: t == a.top
                            }), Object(o.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                        }
                    } catch (e) {
                        return n.push({
                            referrer: null,
                            location: null,
                            isTop: !1
                        }), n
                    }
                } while (t != a.top);
                return n
            }(),
            t = function() {
                try {
                    if (!a.location.ancestorOrigins) return;
                    return a.location.ancestorOrigins
                } catch (e) {}
            }();
        if (t)
            for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
        return e
    }
}, function(e, t) {
    var n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(27),
        o = n(72),
        i = n(15),
        a = n(56),
        c = Object.defineProperty;
    t.f = r ? c : function(e, t, n) {
        if (i(e), t = a(t, !0), i(n), o) try {
            return c(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return new r(e, t)
    };
    var o = n(0);

    function r(e, t) {
        var n = t && t.src || "client",
            r = e || 0;
        this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
            switch (r) {
                case 0:
                    return "Pending";
                case 1:
                    return "Bid available";
                case 2:
                    return "Bid returned empty or error response";
                case 3:
                    return "Bid timed out"
            }
        }(), this.adId = o.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
            return r
        }, this.getSize = function() {
            return this.width + "x" + this.height
        }
    }
}, function(e, t, n) {
    var r = n(16),
        o = n(89);
    e.exports = r ? o : function(e) {
        return Set.prototype.values.call(e)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
        return i
    }), n.d(t, "a", function() {
        return s
    }), t.g = function(e) {
        if (e && e.type && function(e) {
                return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
            }(e.type)) return d[e.type];
        return e
    }, t.f = function(t, e) {
        var n = Object(a.getBidRequest)(t.requestId, e);
        if (!n) return !1;
        if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
        if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
        if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
        var r = n.nativeParams;
        if (!r) return !0;
        var o = Object.keys(r).filter(function(e) {
                return r[e].required
            }),
            i = Object.keys(t.native).filter(function(e) {
                return t.native[e]
            });
        return o.every(function(e) {
            return c()(i, e)
        })
    }, t.b = function(e, t) {
        var n;
        "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
        return (n || []).forEach(a.triggerPixel), e.action
    }, t.d = function(r, o) {
        var i = {};
        return Object.keys(r.native).forEach(function(e) {
            var t = u.NATIVE_KEYS[e],
                n = f(r.native[e]);
            Object(a.deepAccess)(o, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), t && n && (i[t] = n)
        }), i
    }, t.c = function(e, r) {
        var o = {
            message: "assetResponse",
            adId: e.adId,
            assets: []
        };
        return e.assets.forEach(function(e) {
            var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                n = f(r.native[t]);
            o.assets.push({
                key: t,
                value: n
            })
        }), o
    };
    var a = n(0),
        r = n(12),
        c = n.n(r);

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var u = n(5),
        i = [],
        s = Object.keys(u.NATIVE_KEYS).map(function(e) {
            return u.NATIVE_KEYS[e]
        }),
        d = {
            image: {
                image: {
                    required: !0
                },
                title: {
                    required: !0
                },
                sponsoredBy: {
                    required: !0
                },
                clickUrl: {
                    required: !0
                },
                body: {
                    required: !1
                },
                icon: {
                    required: !1
                }
            }
        };

    function f(e) {
        return "object" === o(e) && e.url ? e.url : e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return c
    }), n.d(t, "a", function() {
        return u
    }), t.d = function(e, t) {
        var n = Object(i.getBidRequest)(e.requestId, t),
            r = n && Object(i.deepAccess)(n, "mediaTypes.video"),
            o = r && Object(i.deepAccess)(r, "context");
        return s(e, n, r, o)
    }, n.d(t, "c", function() {
        return s
    });
    n(7);
    var i = n(0),
        o = n(3),
        r = n(12),
        a = (n.n(r), n(13)),
        c = "outstream",
        u = "instream";
    var s = Object(a.b)("sync", function(e, t, n, r) {
        return !t || n && r !== c ? o.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
    }, "checkVideoBidSetup")
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var o = n(15),
        i = n(18),
        a = n(19)("species");
    e.exports = function(e, t) {
        var n, r = o(e).constructor;
        return void 0 === r || null == (n = o(r)[a]) ? t : i(n)
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(r, e, t) {
        if (!e || !r) return void i.logError("cannot load external script without url and moduleCode");
        if (!o()(c, e)) return void i.logError("".concat(e, " not whitelisted for loading external JavaScript"));
        if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag;
        a[r] = {
            loaded: !1,
            tag: null,
            callbacks: []
        }, t && "function" == typeof t && a[r].callbacks.push(t);
        return i.logWarn("module ".concat(e, " is loading external JavaScript")),
            function(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
                } : n.onload = function() {
                    t()
                };
                return n.src = e, i.insertElement(n), n
            }(r, function() {
                a[r].loaded = !0;
                try {
                    for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]()
                } catch (e) {
                    i.logError("Error executing callback", "adloader.js:loadExternalScript", e)
                }
            })
    };
    var r = n(12),
        o = n.n(r),
        i = n(0),
        a = {},
        c = ["criteo", "outstream", "adagio", "browsi"]
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return F
    }), n.d(t, "a", function() {
        return W
    }), t.k = function(e) {
        var t, o, y, b, i = e.adUnits,
            n = e.adUnitCodes,
            r = e.callback,
            a = e.cbTimeout,
            c = e.labels,
            u = e.auctionId,
            v = i,
            s = c,
            d = n,
            h = [],
            f = [],
            l = [],
            p = u || D.generateUUID(),
            g = r,
            m = a,
            S = [],
            A = new Set;

        function E() {
            return {
                auctionId: p,
                timestamp: t,
                auctionEnd: o,
                auctionStatus: y,
                adUnits: v,
                adUnitCodes: d,
                labels: s,
                bidderRequests: h,
                noBids: l,
                bidsReceived: f,
                winningBids: S,
                timeout: m
            }
        }

        function O(n, e) {
            var r, t;
            e && clearTimeout(b), void 0 === o && (r = [], n && (D.logMessage("Auction ".concat(p, " timedOut")), t = A, (r = h.map(function(e) {
                return (e.bids || []).filter(function(e) {
                    return !t.has(e.bidder)
                })
            }).reduce(w.flatten, []).map(function(e) {
                return {
                    bidId: e.bidId,
                    bidder: e.bidder,
                    adUnitCode: e.adUnitCode,
                    auctionId: e.auctionId
                }
            })).length && M.emit(q.EVENTS.BID_TIMEOUT, r)), y = W, o = Date.now(), M.emit(q.EVENTS.AUCTION_END, E()), $(v, function() {
                try {
                    var e;
                    null != g && (e = f.filter(D.bind.call(w.adUnitsFilter, this, d)).reduce(Z, {}), g.apply(pbjs, [e, n, p]), g = null)
                } catch (e) {
                    D.logError("Error executing bidsBackHandler", null, e)
                } finally {
                    r.length && N.callTimedOutBidders(i, r, m);
                    var t = U.b.getConfig("userSync") || {};
                    t.enableOverride || k(t.syncDelay)
                }
            }))
        }

        function I() {
            D.logInfo("Bids Received for Auction with id: ".concat(p), f), y = W, O(!1, !0)
        }

        function T(e) {
            A.add(e)
        }

        function j(d) {
            var f = this;
            d.forEach(function(e) {
                var t;
                t = e, h = h.concat(t)
            });
            var l = {},
                e = {
                    bidRequests: d,
                    run: function() {
                        var e, t;
                        e = O.bind(null, !0), t = setTimeout(e, m), b = t, y = F, M.emit(q.EVENTS.AUCTION_INIT, E());
                        var n, r, o, i, a, c, u = (n = I, r = f, o = 0, i = !1, a = new Set, c = {}, {
                            addBidResponse: function(e, t) {
                                c[t.requestId] = !0, o++;
                                var n = function(e) {
                                    var t = e.adUnitCode,
                                        n = e.bid,
                                        r = e.bidderRequest,
                                        o = e.auctionId,
                                        i = r.start,
                                        a = P({}, n, {
                                            auctionId: o,
                                            responseTimestamp: Object(w.timestamp)(),
                                            requestTimestamp: i,
                                            cpm: parseFloat(n.cpm) || 0,
                                            bidder: n.bidderCode,
                                            adUnitCode: t
                                        });
                                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, M.emit(q.EVENTS.BID_ADJUSTMENT, a);
                                    var c = r.bids && _()(r.bids, function(e) {
                                            return e.adUnitCode == t
                                        }),
                                        u = c && c.renderer;
                                    u && u.url && (a.renderer = x.a.install({
                                        url: u.url
                                    }), a.renderer.setRender(u.render));
                                    var s = X(n.mediaType, c, U.b.getConfig("mediaTypePriceGranularity")),
                                        d = Object(C.a)(a.cpm, "object" === R(s) ? s : U.b.getConfig("customPriceBucket"), U.b.getConfig("currency.granularityMultiplier"));
                                    return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
                                }({
                                    adUnitCode: e,
                                    bid: t,
                                    bidderRequest: this,
                                    auctionId: r.getAuctionId()
                                });
                                "video" === n.mediaType ? function(e, t, n, r) {
                                    var o = !0,
                                        i = Object(w.getBidRequest)(t.requestId, [n]),
                                        a = i && Object(w.deepAccess)(i, "mediaTypes.video"),
                                        c = a && Object(w.deepAccess)(a, "context");
                                    U.b.getConfig("cache.url") && c !== B.b && (t.videoCacheKey ? t.vastUrl || (D.logError("videoCacheKey specified but not required vastUrl for video bid"), o = !1) : (o = !1, Q(e, t, r, i))), o && (Y(e, t), r())
                                }(r, n, this, s) : (Y(r, n), s())
                            },
                            adapterDone: function() {
                                a.add(this), i = r.getBidRequests().every(function(e) {
                                    return a.has(e)
                                }), this.bids.forEach(function(e) {
                                    c[e.bidId] || (r.addNoBid(e), M.emit(q.EVENTS.NO_BID, e))
                                }), i && 0 === o && n()
                            }
                        });

                        function s() {
                            o--, i && 0 === o && n()
                        }
                        N.callBids(v, d, function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            K.apply({
                                dispatch: u.addBidResponse,
                                bidderRequest: this
                            }, t)
                        }, u.adapterDone, {
                            request: function(e, t) {
                                g(z, t), g(l, e), V[e] || (V[e] = {
                                    SRA: !0,
                                    origin: t
                                }), 1 < l[e] && (V[e].SRA = !1)
                            },
                            done: function(e) {
                                z[e]--, H[0] && p(H[0]) && H.shift()
                            }
                        }, m, T)
                    }
                };

            function p(e) {
                var r = !0,
                    o = U.b.getConfig("maxRequestsPerOrigin") || L;
                return e.bidRequests.some(function(e) {
                    var t = 1,
                        n = void 0 !== e.src && e.src === q.S2S.SRC ? "s2s" : e.bidderCode;
                    return V[n] && (!1 === V[n].SRA && (t = Math.min(e.bids.length, o)), z[V[n].origin] + t > o && (r = !1)), !r
                }), r && e.run(), r
            }

            function g(e, t) {
                void 0 === e[t] ? e[t] = 1 : e[t]++
            }
            p(e) || (D.logWarn("queueing auction due to limited endpoint capacity"), H.push(e))
        }
        return {
            addBidReceived: function(e) {
                f = f.concat(e)
            },
            addNoBid: function(e) {
                l = l.concat(e)
            },
            executeCallback: O,
            callBids: function() {
                y = G, t = Date.now();
                var e = N.makeBidRequests(v, t, p, m, s);
                D.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (D.logWarn("No valid bid requests returned for auction"), I()) : J.call({
                    dispatch: j,
                    context: this
                }, e)
            },
            addWinningBid: function(e) {
                S = S.concat(e), N.callBidWonBidder(e.bidder, e, i)
            },
            setBidTargeting: function(e) {
                N.callSetTargetingBidder(e.bidder, e)
            },
            getWinningBids: function() {
                return S
            },
            getTimeout: function() {
                return m
            },
            getAuctionId: function() {
                return p
            },
            getAuctionStatus: function() {
                return y
            },
            getAdUnits: function() {
                return v
            },
            getAdUnitCodes: function() {
                return d
            },
            getBidRequests: function() {
                return h
            },
            getBidsReceived: function() {
                return f
            },
            getNoBids: function() {
                return l
            }
        }
    }, n.d(t, "c", function() {
        return K
    }), n.d(t, "e", function() {
        return J
    }), t.g = s, t.d = Y, n.d(t, "f", function() {
        return Q
    }), n.d(t, "i", function() {
        return d
    }), n.d(t, "h", function() {
        return f
    }), t.j = l;
    var w = n(0),
        C = n(46),
        a = n(35),
        i = n(103),
        x = n(11),
        U = n(3),
        r = n(44),
        o = n(13),
        c = n(10),
        _ = n.n(c),
        B = n(36),
        u = n(2);

    function R(e) {
        return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function P() {
        return (P = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var k = r.a.syncUsers,
        D = n(0),
        N = n(7).default,
        M = n(8),
        q = n(5),
        G = "started",
        F = "inProgress",
        W = "completed";
    M.on(q.EVENTS.BID_ADJUSTMENT, function(e) {
        ! function(e) {
            var t, n = e.bidderCode,
                r = e.cpm;
            if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                r = t(e.cpm, P({}, e))
            } catch (e) {
                D.logError("Error during bid adjustment", "bidmanager.js", e)
            }
            0 <= r && (e.cpm = r)
        }(e)
    });
    var L = 4,
        z = {},
        V = {},
        H = [];
    var K = Object(o.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }, "addBidResponse"),
        J = Object(o.b)("sync", function(e) {
            this.dispatch.call(this.context, e)
        }, "addBidderRequests"),
        $ = Object(o.b)("async", function(e, t) {
            t && t()
        }, "bidsBackCallback");

    function s(e, t) {
        t.timeToRespond > e.getTimeout() + U.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
    }

    function Y(e, t) {
        var n = e.getBidRequests(),
            r = _()(n, function(e) {
                return e.bidderCode === t.bidderCode
            });
        ! function(t, e) {
            var n; {
                var r;
                t.bidderCode && (0 < t.cpm || t.dealId) && (r = _()(e.bids, function(e) {
                    return e.adUnitCode === t.adUnitCode
                }), n = function(e, t, n) {
                    if (!t) return {};
                    var r = {},
                        o = pbjs.bidderSettings; {
                        var i;
                        o && (i = l(t.mediaType, e, n), p(r, i, t), e && o[e] && o[e][q.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, o[e], t), t.sendStandardTargeting = o[e].sendStandardTargeting))
                    }
                    t.native && (r = P({}, r, Object(a.d)(t, n)));
                    return r
                }(t.bidderCode, t, r))
            }
            t.adserverTargeting = P(t.adserverTargeting || {}, n)
        }(t, r), M.emit(q.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), s(e, t)
    }
    var Q = Object(o.b)("async", function(n, r, o, e) {
        Object(i.b)([r], function(e, t) {
            e ? (D.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), s(n, r)) : "" === t[0].uuid ? (D.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), s(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(i.a)(r.videoCacheKey)), Y(n, r), o())
        }, e)
    }, "callPrebidCache");

    function X(e, t, n) {
        if (e && n) {
            if (e === u.d) {
                var r = Object(w.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)]
            }
            return n[e]
        }
    }
    var d = function(e, t) {
            var n = X(e, t, U.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : U.b.getConfig("priceGranularity")
        },
        f = function(t) {
            return function(e) {
                return t === q.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === q.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === q.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === q.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === q.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === q.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
            }
        };

    function l(e, t, n) {
        function r(e, t) {
            return {
                key: e,
                val: "function" == typeof t ? function(e) {
                    return t(e)
                } : function(e) {
                    return Object(w.getValue)(e, t)
                }
            }
        }
        var o, i, a = q.TARGETING_KEYS,
            c = d(e, n),
            u = pbjs.bidderSettings;
        return u[q.JSON_MAPPING.BD_SETTING_STANDARD] || (u[q.JSON_MAPPING.BD_SETTING_STANDARD] = {}), u[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] || (u[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] = [r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, f(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType")]), "video" === e && (o = u[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING], [a.UUID, a.CACHE_ID].forEach(function(t) {
            void 0 === _()(o, function(e) {
                return e.key === t
            }) && o.push(r(t, "videoCacheKey"))
        }), !U.b.getConfig("cache.url") || t && !1 === D.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (i = Object(w.parseUrl)(U.b.getConfig("cache.url")), void 0 === _()(o, function(e) {
            return e.key === a.CACHE_HOST
        }) && o.push(r(a.CACHE_HOST, function(e) {
            return D.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : i.hostname
        })))), u[q.JSON_MAPPING.BD_SETTING_STANDARD]
    }

    function p(r, o, i) {
        var e = o[q.JSON_MAPPING.ADSERVER_TARGETING];
        return i.size = i.getSize(), D._each(e, function(e) {
            var t = e.key,
                n = e.val;
            if (r[t] && D.logWarn("The key: " + t + " is getting ovewritten"), D.isFn(n)) try {
                n = n(i)
            } catch (e) {
                D.logError("bidmanager", "ERROR", e)
            }(void 0 === o.suppressEmptyKeys || !0 !== o.suppressEmptyKeys) && t !== q.TARGETING_KEYS.DEAL || !D.isEmptyStr(n) && null != n ? r[t] = n : D.logInfo("suppressing empty key '" + t + "' from adserver targeting")
        }), r
    }

    function Z(e, t) {
        return e[t.adUnitCode] || (e[t.adUnitCode] = {
            bids: []
        }), e[t.adUnitCode].bids.push(t), e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return p
    });
    var v = n(0),
        h = n(3),
        m = n(35),
        r = n(26),
        o = n(101),
        i = n(2),
        a = n(12),
        S = n.n(a);

    function A() {
        return (A = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return function(e) {
            if (Array.isArray(e)) return c(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return c(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var u = n(0),
        I = n(5),
        T = [],
        j = Object.keys(I.TARGETING_KEYS).map(function(e) {
            return I.TARGETING_KEYS[e]
        }),
        s = function(e) {
            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(v.timestamp)()
        },
        d = function(e) {
            return e && (e.status && !S()([I.BID_STATUS.RENDERED], e.status) || !e.status)
        };

    function w(e, r, t) {
        var o = 2 < arguments.length && void 0 !== t ? t : 0,
            i = [],
            a = h.b.getConfig("sendBidsControl.dealPrioritization"),
            c = Object(v.groupBy)(e, "adUnitCode");
        return Object.keys(c).forEach(function(e) {
            var t = [],
                n = Object(v.groupBy)(c[e], "bidderCode");
            Object.keys(n).forEach(function(e) {
                return t.push(n[e].reduce(r))
            }), 0 < o ? (t = a ? t(C(!0)) : t.sort(function(e, t) {
                return t.cpm - e.cpm
            }), i.push.apply(i, O(t.slice(0, o)))) : i.push.apply(i, O(t))
        }), i
    }

    function C(e) {
        var n = 0 < arguments.length && void 0 !== e && e;
        return function(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
        }
    }
    var f, x, l, p = (f = r.a, l = {}, (x = {}).setLatestAuctionForAdUnit = function(e, t) {
        l[e] = t
    }, x.resetPresetTargeting = function(e, t) {
        var n, o;
        Object(v.isGptPubadsDefined)() && (n = _(e), o = f.getAdUnits().filter(function(e) {
            return S()(n, e.code)
        }), window.googletag.pubads().getSlots().forEach(function(n) {
            var r = u.isFn(t) && t(n);
            T.forEach(function(t) {
                o.forEach(function(e) {
                    (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || u.isFn(r) && r(e.code)) && n.setTargeting(t, null)
                })
            })
        }))
    }, x.resetPresetTargetingAST = function(e) {
        _(e).forEach(function(e) {
            var t, n, r = window.apntag.getTag(e);
            r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function(e) {
                S()(T, e.toLowerCase()) || (n[e] = r.keywords[e])
            }), window.apntag.modifyTag(e, {
                keywords: n
            }))
        })
    }, x.getAllTargeting = function(e) {
        var n, t, r, o, i, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : B(),
            f = _(e),
            l = (a = f, c = d, u = x.getWinningBids(a, c), s = R(), (u = u.map(function(i) {
                return E({}, i.adUnitCode, Object.keys(i.adserverTargeting).filter(function(e) {
                    return void 0 === i.sendStandardTargeting || i.sendStandardTargeting || -1 === s.indexOf(e)
                }).reduce(function(e, t) {
                    var n = [i.adserverTargeting[t]],
                        r = E({}, t.substring(0, 20), n);
                    if (t !== I.TARGETING_KEYS.DEAL) return [].concat(O(e), [r]);
                    var o = E({}, "".concat(t, "_").concat(i.bidderCode).substring(0, 20), n);
                    return [].concat(O(e), [r, o])
                }, []))
            })).concat((i = f, d.filter(function(e) {
                return S()(i, e.adUnitCode)
            }).map(function(e) {
                return A({}, e)
            }).reduce(P, []).map(k).filter(function(e) {
                return e
            }))).concat(h.b.getConfig("enableSendAllBids") ? (n = f, t = d, r = j.concat(m.a), o = h.b.getConfig("sendBidsControl.bidLimit"), w(t, v.getHighestCpm, o).map(function(t) {
                if (U(t, n)) return E({}, t.adUnitCode, D(t, r.filter(function(e) {
                    return void 0 !== t.adserverTargeting[e]
                })))
            }).filter(function(e) {
                return e
            })) : function(e, t) {
                if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                var n = j.concat(m.a);
                return w(t, v.getHighestCpm).map(function(t) {
                    if (t.dealId && U(t, e)) return E({}, t.adUnitCode, D(t, n.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e]
                    })))
                }).filter(function(e) {
                    return e
                })
            }(f, d)));
        l.map(function(t) {
            Object.keys(t).map(function(e) {
                t[e].map(function(e) {
                    -1 === T.indexOf(Object.keys(e)[0]) && (T = Object.keys(e).concat(T))
                })
            })
        }), l = l.map(function(e) {
            return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
            }).reduce(function(e, t) {
                return A(t, e)
            }, {}))
        }).reduce(function(e, t) {
            var n = Object.keys(t)[0];
            return e[n] = A({}, e[n], t[n]), e
        }, {});
        var p, g, y, b = h.b.getConfig("targetingControls.auctionKeyMaxChars");
        return b && (Object(v.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(b, " characters.  Running checks on auction keys...")), p = l, g = b, y = Object(v.deepClone)(p), l = Object.keys(y).map(function(e) {
            return {
                adUnitCode: e,
                adUnitTargeting: y[e]
            }
        }).sort(C()).reduce(function(e, t, n, r) {
            var o, i = (o = t.adUnitTargeting, Object.keys(o).reduce(function(e, t) {
                return e + "".concat(t, "%3d").concat(encodeURIComponent(o[t]), "%26")
            }, ""));
            n + 1 === r.length && (i = i.slice(0, -3));
            var a = t.adUnitCode,
                c = i.length;
            return c <= g ? (g -= c, Object(v.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(g), y[a]), e[a] = y[a]) : Object(v.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(g, ".\n"), y[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(v.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
        }, {})), f.forEach(function(e) {
            l[e] || (l[e] = {})
        }), l
    }, x.setTargetingForGPT = function(o, e) {
        window.googletag.pubads().getSlots().forEach(function(r) {
            Object.keys(o).filter((e || Object(v.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                return Object.keys(o[n]).forEach(function(t) {
                    var e = o[n][t].split(",");
                    (e = 1 < e.length ? [e] : e).map(function(e) {
                        return u.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                    }).forEach(function(e) {
                        r.setTargeting(t, e)
                    })
                })
            })
        })
    }, x.getWinningBids = function(e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : B(),
            t = _(e);
        return n.filter(function(e) {
            return S()(t, e.adUnitCode)
        }).filter(function(e) {
            return 0 < e.cpm
        }).map(function(e) {
            return e.adUnitCode
        }).filter(v.uniques).map(function(t) {
            return n.filter(function(e) {
                return e.adUnitCode === t ? e : null
            }).reduce(v.getHighestCpm)
        })
    }, x.setTargetingForAst = function(e) {
        var r = x.getAllTargeting(e);
        try {
            x.resetPresetTargetingAST(e)
        } catch (e) {
            u.logError("unable to reset targeting for AST" + e)
        }
        Object.keys(r).forEach(function(n) {
            return Object.keys(r[n]).forEach(function(e) {
                var t;
                u.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), (u.isStr(r[n][e]) || u.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                    overrideKeyValue: !0
                }))
            })
        })
    }, x.isApntagDefined = function() {
        if (window.apntag && u.isFn(window.apntag.setKeywords)) return !0
    }, x);

    function U(e, t) {
        return e.adserverTargeting && t && (u.isArray(t) && S()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
    }

    function _(e) {
        return "string" == typeof e ? [e] : u.isArray(e) ? e : f.getAdUnitCodes() || []
    }

    function B() {
        var e = f.getBidsReceived();
        return h.b.getConfig("useBidCache") || (e = e.filter(function(e) {
            return l[e.adUnitCode] === e.auctionId
        })), w(e = e.filter(function(e) {
            return Object(v.deepAccess)(e, "video.context") !== i.a
        }).filter(function(e) {
            return "banner" !== e.mediaType || Object(o.c)([e.width, e.height])
        }).filter(d).filter(s), v.getOldestHighestCpmBid)
    }

    function R() {
        return f.getStandardBidderAdServerTargeting().map(function(e) {
            return e.key
        }).concat(j).filter(v.uniques)
    }

    function P(r, o, e, t) {
        return Object.keys(o.adserverTargeting).filter(g()).forEach(function(e) {
            var t, n;
            r.length && r.filter((n = e, function(e) {
                return e.adUnitCode === o.adUnitCode && e.adserverTargeting[n]
            })).forEach((t = e, function(e) {
                u.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(o.adserverTargeting[t]).filter(v.uniques), delete o.adserverTargeting[t]
            }))
        }), r.push(o), r
    }

    function g() {
        var t = R().concat(m.a);
        return function(e) {
            return -1 === t.indexOf(e)
        }
    }

    function k(t) {
        return E({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(g()).map(function(e) {
            return E({}, e.substring(0, 20), [t.adserverTargeting[e]])
        }))
    }

    function D(t, e) {
        return e.map(function(e) {
            return E({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
        })
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    "use strict";

    function i(e, t, n, r) {
        var o;
        t in e && ("function" != typeof(o = r) || "[object Function]" !== u.call(o) || !r()) || (f ? d(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n,
            writable: !0
        }) : e[t] = n)
    }

    function r(e, t) {
        var n = 2 < arguments.length ? arguments[2] : {},
            r = a(t);
        c && (r = s.call(r, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < r.length; o += 1) i(e, r[o], t[r[o]], n[r[o]])
    }
    var a = n(91),
        c = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        u = Object.prototype.toString,
        s = Array.prototype.concat,
        d = Object.defineProperty,
        f = d && function() {
            var e = {};
            try {
                for (var t in d(e, "x", {
                        enumerable: !1,
                        value: e
                    }), e) return !1;
                return e.x === e
            } catch (e) {
                return !1
            }
        }();
    r.supportsDescriptors = !!f, e.exports = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return S
    });
    var a = n(0),
        r = n(3),
        o = n(12),
        i = n.n(o),
        c = n(9);

    function u(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d() {
        return (d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    r.b.setDefaults({
        userSync: a.deepClone({
            syncEnabled: !0,
            filterSettings: {
                image: {
                    bidders: "*",
                    filter: "include"
                }
            },
            syncsPerBidder: 5,
            syncDelay: 3e3,
            auctionDelay: 0
        })
    });
    var f = Object(c.a)("usersync");
    var l, p, g, y, b, v, h, m = !a.isSafariBrowser() && f.cookiesAreEnabled(),
        S = (l = {
            config: r.b.getConfig("userSync"),
            browserSupportsCookies: m
        }, p = {}, g = A(), y = new Set, v = {
            image: !0,
            iframe: !(b = {})
        }, h = l.config, r.b.getConfig("userSync", function(e) {
            var t;
            e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                bidders: "*",
                filter: "include"
            }))), h = d(h, e.userSync)
        }), p.registerSync = function(e, t, n) {
            return y.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(b[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([t, n]), (r = b)[o = t] ? r[o] += 1 : r[o] = 1, void(b = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
            var r, o
        }, p.syncUsers = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            if (e) return setTimeout(E, Number(e));
            E()
        }, p.triggerUserSyncs = function() {
            h.enableOverride && p.syncUsers()
        }, p.canBidderRegisterSync = function(e, t) {
            return !h.filterSettings || !I(e, t)
        }, p);

    function A() {
        return {
            image: [],
            iframe: []
        }
    }

    function E() {
        if (h.syncEnabled && l.browserSupportsCookies) {
            try {
                ! function() {
                    if (!v.image) return;
                    O(g.image, function(e) {
                        var t = u(e, 2),
                            n = t[0],
                            r = t[1];
                        a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                    })
                }(),
                function() {
                    if (!v.iframe) return;
                    O(g.iframe, function(e) {
                        var t = u(e, 2),
                            n = t[0],
                            r = t[1];
                        a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                    })
                }()
            } catch (e) {
                return a.logError("Error firing user syncs", e)
            }
            g = A()
        }
    }

    function O(e, t) {
        a.shuffle(e).forEach(function(e) {
            t(e), y.add(e[0])
        })
    }

    function I(e, t) {
        var n = h.filterSettings;
        if (function(e, t) {
                if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                var n = e.all ? e.all : e[t],
                    r = e.all ? "all" : t;
                if (!n) return !1;
                var o = n.filter,
                    i = n.bidders;
                if (o && "include" !== o && "exclude" !== o) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                return !!("*" === i || Array.isArray(i) && 0 < i.length && i.every(function(e) {
                    return a.isStr(e) && "*" !== e
                })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
            }(n, e)) {
            v[e] = !0;
            var r = n.all ? n.all : n[e],
                o = "*" === r.bidders ? [t] : r.bidders;
            return {
                include: function(e, t) {
                    return !i()(e, t)
                },
                exclude: function(e, t) {
                    return i()(e, t)
                }
            } [r.filter || "include"](o, t)
        }
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d
    }), n.d(t, "b", function() {
        return h
    });
    var r = n(10),
        b = n.n(r),
        o = n(0),
        v = 2,
        i = {
            buckets: [{
                max: 5,
                increment: .5
            }]
        },
        a = {
            buckets: [{
                max: 20,
                increment: .1
            }]
        },
        c = {
            buckets: [{
                max: 20,
                increment: .01
            }]
        },
        u = {
            buckets: [{
                max: 3,
                increment: .01
            }, {
                max: 8,
                increment: .05
            }, {
                max: 20,
                increment: .5
            }]
        },
        s = {
            buckets: [{
                max: 5,
                increment: .05
            }, {
                max: 10,
                increment: .1
            }, {
                max: 20,
                increment: .5
            }]
        };

    function d(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
            r = parseFloat(e);
        return isNaN(r) && (r = ""), {
            low: "" === r ? "" : f(e, i, n),
            med: "" === r ? "" : f(e, a, n),
            high: "" === r ? "" : f(e, c, n),
            auto: "" === r ? "" : f(e, s, n),
            dense: "" === r ? "" : f(e, u, n),
            custom: "" === r ? "" : f(e, t, n)
        }
    }

    function f(n, e, r) {
        var o = "";
        if (!h(e)) return o;
        var t, i, a, c, u, s, d, f, l, p = e.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t
            }, {
                max: 0
            }),
            g = 0,
            y = b()(e.buckets, function(e) {
                if (n > p.max * r) {
                    var t = e.precision;
                    void 0 === t && (t = v), o = (e.max * r).toFixed(t)
                } else {
                    if (n <= e.max * r && g * r <= n) return e.min = g, e;
                    g = e.max
                }
            });
        return y && (t = n, a = r, c = void 0 !== (i = y).precision ? i.precision : v, u = i.increment * a, s = i.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, o = (l = Number(l.toFixed(10))).toFixed(c)), o
    }

    function h(e) {
        if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
        var t = !0;
        return e.buckets.forEach(function(e) {
            e.max && e.increment || (t = !1)
        }), t
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var r = n(71),
        o = n(50);
    e.exports = function(e) {
        return r(o(e))
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(59),
        o = Math.min;
    e.exports = function(e) {
        return 0 < e ? o(r(e), 9007199254740991) : 0
    }
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, n) {
    var r = n(25);
    e.exports = r
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    var r, o, i, a, c, u, s, d, f = n(123),
        l = n(22),
        p = n(23),
        g = n(29),
        y = n(24),
        b = n(66),
        v = n(54),
        h = l.WeakMap;
    s = f ? (r = new h, o = r.get, i = r.has, a = r.set, c = function(e, t) {
        return a.call(r, e, t), t
    }, u = function(e) {
        return o.call(r, e) || {}
    }, function(e) {
        return i.call(r, e)
    }) : (v[d = b("state")] = !0, c = function(e, t) {
        return g(e, d, t), t
    }, u = function(e) {
        return y(e, d) ? e[d] : {}
    }, function(e) {
        return y(e, d)
    }), e.exports = {
        set: c,
        get: u,
        has: s,
        enforce: function(e) {
            return s(e) ? u(e) : c(e, {})
        },
        getterFor: function(n) {
            return function(e) {
                var t;
                if (!p(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                return t
            }
        }
    }
}, function(e, t, n) {
    var o = n(23);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, n) {
    function r(p) {
        var g = 1 == p,
            y = 2 == p,
            b = 3 == p,
            v = 4 == p,
            h = 6 == p,
            m = 5 == p || h;
        return function(e, t, n, r) {
            for (var o, i, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || I, l = g ? f(e, s) : y ? f(e, 0) : void 0; d < s; d++)
                if ((m || d in c) && (i = u(o = c[d], d, a), p))
                    if (g) l[d] = i;
                    else if (i) switch (p) {
                case 3:
                    return !0;
                case 5:
                    return o;
                case 6:
                    return d;
                case 2:
                    T.call(l, o)
            } else if (v) return !1;
            return h ? -1 : b || v ? v : l
        }
    }
    var S = n(21),
        A = n(71),
        E = n(58),
        O = n(51),
        I = n(111),
        T = [].push;
    e.exports = {
        forEach: r(0),
        map: r(1),
        filter: r(2),
        some: r(3),
        every: r(4),
        find: r(5),
        findIndex: r(6)
    }
}, function(e, t, n) {
    var r = n(50);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
    }
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
    }
}, function(e, t, n) {
    function a(e) {
        throw e
    }
    var c = n(27),
        u = n(28),
        s = n(24),
        d = Object.defineProperty,
        f = {};
    e.exports = function(e, t) {
        if (s(f, e)) return f[e];
        var n = [][e],
            r = !!s(t = t || {}, "ACCESSORS") && t.ACCESSORS,
            o = s(t, 0) ? t[0] : a,
            i = s(t, 1) ? t[1] : void 0;
        return f[e] = !!n && !u(function() {
            if (r && !c) return !0;
            var e = {
                length: -1
            };
            r ? d(e, 1, {
                enumerable: !0,
                get: a
            }) : e[1] = 1, n.call(e, o, i)
        })
    }
}, function(e, t, n) {
    var r = n(63),
        o = n(37),
        i = n(19)("iterator");
    e.exports = function(e) {
        if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
}, function(e, t, n) {
    var r = n(64),
        o = n(49),
        i = n(19)("toStringTag"),
        a = "Arguments" == o(function() {
            return arguments
        }());
    e.exports = r ? o : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
}, function(e, t, n) {
    var r = {};
    r[n(19)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
}, function(e, t, n) {
    var i = n(64),
        a = n(32).f,
        c = n(29),
        u = n(24),
        s = n(122),
        d = n(19)("toStringTag");
    e.exports = function(e, t, n, r) {
        var o;
        e && (o = n ? e : e.prototype, u(o, d) || a(o, d, {
            configurable: !0,
            value: t
        }), r && !i && c(o, "toString", s))
    }
}, function(e, t, n) {
    var r = n(74),
        o = n(60),
        i = r("keys");
    e.exports = function(e) {
        return i[e] || (i[e] = o(e))
    }
}, function(e, t, n) {
    "use strict";

    function v() {
        return this
    }
    var h = n(14),
        m = n(131),
        S = n(87),
        A = n(133),
        E = n(65),
        O = n(29),
        I = n(85),
        r = n(19),
        T = n(16),
        j = n(37),
        o = n(86),
        w = o.IteratorPrototype,
        C = o.BUGGY_SAFARI_ITERATORS,
        x = r("iterator"),
        U = "values",
        _ = "entries";
    e.exports = function(e, t, n, r, o, i, a) {
        m(n, t, r);

        function c(e) {
            if (e === o && y) return y;
            if (!C && e in p) return p[e];
            switch (e) {
                case "keys":
                case U:
                case _:
                    return function() {
                        return new n(this, e)
                    }
            }
            return function() {
                return new n(this)
            }
        }
        var u, s, d, f = t + " Iterator",
            l = !1,
            p = e.prototype,
            g = p[x] || p["@@iterator"] || o && p[o],
            y = !C && g || c(o),
            b = "Array" == t && p.entries || g;
        if (b && (u = S(b.call(new e)), w !== Object.prototype && u.next && (T || S(u) === w || (A ? A(u, w) : "function" != typeof u[x] && O(u, x, v)), E(u, f, !0, !0), T && (j[f] = v))), o == U && g && g.name !== U && (l = !0, y = function() {
                return g.call(this)
            }), T && !a || p[x] === y || O(p, x, y), j[t] = y, o)
            if (s = {
                    values: c(U),
                    keys: i ? y : c("keys"),
                    entries: c(_)
                }, a)
                for (d in s) !C && !l && d in p || I(p, d, s[d]);
            else h({
                target: t,
                proto: !0,
                forced: C || l
            }, s);
        return s
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var r = n(0),
        c = {};

    function o(e, t, n) {
        var r, o, i, a = (o = n, i = c[r = e] = c[r] || {
            bidders: {}
        }, o ? i.bidders[o] = i.bidders[o] || {} : i);
        return a[t] = (a[t] || 0) + 1, a[t]
    }
    var i = {
        incrementRequestsCounter: function(e) {
            return o(e, "requestsCounter")
        },
        incrementBidderRequestsCounter: function(e, t) {
            return o(e, "requestsCounter", t)
        },
        incrementBidderWinsCounter: function(e, t) {
            return o(e, "winsCounter", t)
        },
        getRequestsCounter: function(e) {
            return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0
        },
        getBidderRequestsCounter: function(e, t) {
            return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0
        },
        getBidderWinsCounter: function(e, t) {
            return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "adUnitSetupChecks", function() {
        return z
    }), n.d(t, "checkAdUnitSetup", function() {
        return V
    }), t.executeStorageCallbacks = J;
    var r = n(20),
        o = n(0),
        i = n(245),
        a = n(44),
        d = n(3),
        v = n(26),
        f = n(41),
        c = n(13),
        u = n(246),
        s = n(12),
        l = n.n(s),
        p = n(68),
        h = n(11),
        g = n(33),
        y = n(9);

    function b(e) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function m() {
        return (m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var S = Object(r.a)(),
        A = n(5),
        E = n(0),
        O = n(7).default,
        I = n(8),
        T = a.a.triggerUserSyncs,
        j = A.EVENTS,
        w = j.ADD_AD_UNITS,
        C = j.BID_WON,
        x = j.REQUEST_BIDS,
        U = j.SET_TARGETING,
        _ = j.AD_RENDER_FAILED,
        B = A.AD_RENDER_FAILED_REASON,
        R = B.PREVENT_WRITING_ON_MAIN_DOCUMENT,
        P = B.NO_AD,
        k = B.EXCEPTION,
        D = B.CANNOT_FIND_AD,
        N = B.MISSING_DOC_OR_ADID,
        M = {
            bidWon: function(e) {
                var t = v.a.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode
                    })
                }).reduce(o.flatten).filter(o.uniques);
                return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.')
            }
        };

    function q(e, t, n) {
        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
    }

    function G(e, t) {
        var n = [];
        return E.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function(e) {
            return Object(o.isArrayOfNums)(e, 2)
        }) ? n = e : Object(o.isArrayOfNums)(e, 2) && n.push(e)), n
    }

    function F(e) {
        var t = E.deepClone(e),
            n = t.mediaTypes.banner,
            r = G(n.sizes);
        return 0 < r.length ? (n.sizes = r, t.sizes = r) : (E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete t.mediaTypes.banner), t
    }

    function W(e) {
        var t, n, r = E.deepClone(e),
            o = r.mediaTypes.video;
        return o.playerSize && (t = "number" == typeof o.playerSize[0] ? 2 : 1, 0 < (n = G(o.playerSize, t)).length ? (2 == t && E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), o.playerSize = n, r.sizes = n) : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete r.mediaTypes.video.playerSize)), r
    }

    function L(e) {
        var t = E.deepClone(e),
            n = t.mediaTypes.native;
        return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete t.mediaTypes.native.icon.sizes), t
    }
    Object(u.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v4.1.1", E.logInfo("Prebid.js v4.1.1 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = T;
    var z = {
            validateBannerMediaType: F,
            validateVideoMediaType: W,
            validateNativeMediaType: L,
            validateSizes: G
        },
        V = Object(c.b)("sync", function(e) {
            var a = [];
            return e.forEach(function(e) {
                var t, n, r, o, i = e.mediaTypes;
                i && 0 !== Object.keys(i).length ? (i.banner && (t = F(e)), i.video && (n = W(t || e)), i.native && (r = L(n || (t || e))), o = m({}, t, n, r), a.push(o)) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."))
            }), a
        }, "checkAdUnitSetup");

    function H(e) {
        var n = v.a[e]().filter(E.bind.call(o.adUnitsFilter, this, v.a.getAdUnitCodes())),
            r = v.a.getLastAuctionId();
        return n.map(function(e) {
            return e.adUnitCode
        }).filter(o.uniques).map(function(t) {
            return n.filter(function(e) {
                return e.auctionId === r && e.adUnitCode === t
            })
        }).filter(function(e) {
            return e && e[0] && e[0].adUnitCode
        }).map(function(e) {
            return t = {}, n = e[0].adUnitCode, r = {
                bids: e
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, t;
            var t, n, r
        }).reduce(function(e, t) {
            return m(e, t)
        }, {})
    }

    function K(e) {
        var t = e.reason,
            n = e.message,
            r = e.bid,
            o = e.id,
            i = {
                reason: t,
                message: n
            };
        r && (i.bid = r), o && (i.adId = o), E.logError(n), I.emit(_, i)
    }

    function J(e, t) {
        ! function(e) {
            var t;
            for (; t = e.shift();) t()
        }(y.c), e.call(this, t)
    }

    function $(e) {
        e.forEach(function(e) {
            if (void 0 === e.called) try {
                e.call(), e.called = !0
            } catch (e) {
                E.logError("Error processing command :", "prebid.js", e)
            }
        })
    }
    S.getAdserverTargetingForAdUnitCodeStr = function(e) {
        if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
            var t = S.getAdserverTargetingForAdUnitCode(e);
            return E.transformAdServerTargetingObj(t)
        }
        E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
    }, S.getAdserverTargetingForAdUnitCode = function(e) {
        return S.getAdserverTargeting(e)[e]
    }, S.getAdserverTargeting = function(e) {
        return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.a.getAllTargeting(e)
    }, S.getNoBids = function() {
        return E.logInfo("Invoking pbjs.getNoBids", arguments), H("getNoBids")
    }, S.getBidResponses = function() {
        return E.logInfo("Invoking pbjs.getBidResponses", arguments), H("getBidsReceived")
    }, S.getBidResponsesForAdUnitCode = function(t) {
        return {
            bids: v.a.getBidsReceived().filter(function(e) {
                return e.adUnitCode === t
            })
        }
    }, S.setTargetingForGPTAsync = function(e, t) {
        var n;
        E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(o.isGptPubadsDefined)() ? (n = f.a.getAllTargeting(e), f.a.resetPresetTargeting(e, t), f.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
            Object.keys(n[t]).forEach(function(e) {
                "hb_adid" === e && v.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET)
            })
        }), I.emit(U, n)) : E.logError("window.googletag is not defined on the page")
    }, S.setTargetingForAst = function(e) {
        E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), I.emit(U, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
    }, S.renderAd = function(e, t) {
        if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), e && t) try {
            var n, r, o, i, a, c, u, s, d, f, l, p, g = v.a.findBidByAdId(t);
            g ? (g.ad = E.replaceAuctionPrice(g.ad, g.cpm), g.adUrl = E.replaceAuctionPrice(g.adUrl, g.cpm), v.a.addWinningBid(g), I.emit(C, g), n = g.height, r = g.width, o = g.ad, i = g.mediaType, a = g.adUrl, c = g.renderer, u = document.createComment("Creative ".concat(g.creativeId, " served by ").concat(g.bidder, " Prebid.js Header Bidding")), E.insertElement(u, e, "body"), Object(h.c)(c) ? Object(h.b)(c, g) : e === document && !E.inIframe() || "video" === i ? (s = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), K({
                reason: R,
                message: s,
                bid: g,
                id: t
            })) : o ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && ((d = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(d, 10) < 67 && e.open("text/html", "replace")), e.write(o), e.close(), q(e, r, n), E.callBurl(g)) : a ? ((f = E.createInvisibleIframe()).height = n, f.width = r, f.style.display = "inline", f.style.overflow = "hidden", f.src = a, E.insertElement(f, e, "body"), q(e, r, n), E.callBurl(g)) : (l = "Error trying to write ad. No ad for bid response id: ".concat(t), K({
                reason: P,
                message: l,
                bid: g,
                id: t
            }))) : (p = "Error trying to write ad. Cannot find ad by given id : ".concat(t), K({
                reason: D,
                message: p,
                id: t
            }))
        } catch (e) {
            var y = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
            K({
                reason: k,
                message: y,
                id: t
            })
        } else {
            var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
            K({
                reason: N,
                message: b,
                id: t
            })
        }
    }, S.removeAdUnit = function(e) {
        E.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (E.isArray(e) ? e : [e]).forEach(function(e) {
            for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
        }) : S.adUnits = []
    }, S.requestBids = Object(c.b)("async", function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.bidsBackHandler,
            n = e.timeout,
            r = e.adUnits,
            o = e.adUnitCodes,
            i = e.labels,
            a = e.auctionId;
        I.emit(x);
        var c = n || d.b.getConfig("bidderTimeout"),
            r = r || S.adUnits;
        if (E.logInfo("Invoking pbjs.requestBids", arguments), r = V(r), o && o.length ? r = r.filter(function(e) {
                return l()(o, e.code)
            }) : o = r && r.map(function(e) {
                return e.code
            }), r.forEach(function(o) {
                var i = Object.keys(o.mediaTypes || {
                        banner: "banner"
                    }),
                    e = o.bids.map(function(e) {
                        return e.bidder
                    }),
                    a = O.bidderRegistry,
                    t = d.b.getConfig("s2sConfig"),
                    n = t && t.bidders,
                    r = n ? e.filter(function(e) {
                        return !l()(n, e)
                    }) : e;
                o.transactionId = E.generateUUID(), r.forEach(function(t) {
                    var e = a[t],
                        n = e && e.getSpec && e.getSpec(),
                        r = n && n.supportedMediaTypes || ["banner"];
                    i.some(function(e) {
                        return l()(r, e)
                    }) ? p.a.incrementBidderRequestsCounter(o.code, t) : (E.logWarn(E.unsupportedBidderMessage(o, t)), o.bids = o.bids.filter(function(e) {
                        return e.bidder !== t
                    }))
                }), p.a.incrementRequestsCounter(o.code)
            }), r && 0 !== r.length) {
            var u = v.a.createAuction({
                    adUnits: r,
                    adUnitCodes: o,
                    callback: t,
                    cbTimeout: c,
                    labels: i,
                    auctionId: a
                }),
                s = r.length;
            15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), o.forEach(function(e) {
                return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId())
            }), u.callBids()
        } else if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
            t()
        } catch (e) {
            E.logError("Error executing bidsBackHandler", null, e)
        }
    }), S.requestBids.before(J, 49), S.addAdUnits = function(e) {
        E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === b(e) && S.adUnits.push(e), I.emit(w)
    }, S.onEvent = function(e, t, n) {
        E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || M[e].call(null, n) ? I.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
    }, S.offEvent = function(e, t, n) {
        E.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || I.off(e, t, n)
    }, S.registerBidAdapter = function(e, t) {
        E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
        try {
            O.registerBidAdapter(e(), t)
        } catch (e) {
            E.logError("Error registering bidder adapter : " + e.message)
        }
    }, S.registerAnalyticsAdapter = function(e) {
        E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
        try {
            O.registerAnalyticsAdapter(e)
        } catch (e) {
            E.logError("Error registering analytics adapter : " + e.message)
        }
    }, S.createBid = function(e) {
        return E.logInfo("Invoking pbjs.createBid", arguments), Object(g.a)(e)
    }, S.enableAnalytics = function(e) {
        e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e), O.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}")
    }, S.aliasBidder = function(e, t, n) {
        E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t, n) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
    }, S.getAllWinningBids = function() {
        return v.a.getAllWinningBids()
    }, S.getAllPrebidWinningBids = function() {
        return v.a.getBidsReceived().filter(function(e) {
            return e.status === A.BID_STATUS.BID_TARGETING_SET
        })
    }, S.getHighestCpmBids = function(e) {
        return f.a.getWinningBids(e)
    }, S.markWinningBidAsUsed = function(t) {
        var e = [];
        t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function(e) {
            return e.adId === t.adId && e.adUnitCode === t.adUnitCode
        }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function(e) {
            return e.adId === t.adId
        }) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = A.BID_STATUS.RENDERED)
    }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.setBidderConfig = d.b.setBidderConfig, S.que.push(function() {
        return Object(i.a)()
    }), S.cmd.push = function(e) {
        if ("function" == typeof e) try {
            e.call()
        } catch (e) {
            E.logError("Error processing command :", e.message, e.stack)
        } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
    }, S.que.push = S.cmd.push, S.processQueue = function() {
        c.b.ready(), $(S.que), $(S.cmd)
    }, t.default = S
}, function(e, t, n) {
    "use strict";
    t.a = function(t, n) {
        i.adServers = i.adServers || {}, i.adServers[t] = i.adServers[t] || {}, Object.keys(n).forEach(function(e) {
            i.adServers[t][e] ? Object(o.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : i.adServers[t][e] = n[e]
        })
    };
    var r = n(20),
        o = n(0),
        i = Object(r.a)()
}, function(e, t, n) {
    var r = n(28),
        o = n(49),
        i = "".split;
    e.exports = r(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(e) {
        return "String" == o(e) ? i.call(e, "") : Object(e)
    } : Object
}, function(e, t, n) {
    var r = n(27),
        o = n(28),
        i = n(73);
    e.exports = !r && !o(function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var r = n(22),
        o = n(23),
        i = r.document,
        a = o(i) && o(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(16),
        o = n(75);
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.6.4",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t, n) {
    var r = n(22),
        o = n(113),
        i = "__core-js_shared__",
        a = r[i] || o(i, {});
    e.exports = a
}, function(e, t, n) {
    var r = n(28);
    e.exports = !!Object.getOwnPropertySymbols && !r(function() {
        return !String(Symbol())
    })
}, function(e, t, n) {
    function r(c) {
        return function(e, t, n) {
            var r, o = u(e),
                i = s(o.length),
                a = d(n, i);
            if (c && t != t) {
                for (; a < i;)
                    if ((r = o[a++]) != r) return !0
            } else
                for (; a < i; a++)
                    if ((c || a in o) && o[a] === t) return c || a || 0;
            return !c && -1
        }
    }
    var u = n(48),
        s = n(51),
        d = n(117);
    e.exports = {
        includes: r(!0),
        indexOf: r(!1)
    }
}, function(e, t, n) {
    var r = n(118);
    n(141), n(143), n(145), n(147), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), e.exports = r
}, function(e, t, n) {
    function r(e) {
        c(e, d, {
            value: {
                objectID: "O" + ++f,
                weakData: {}
            }
        })
    }
    var o = n(54),
        i = n(23),
        a = n(24),
        c = n(32).f,
        u = n(60),
        s = n(121),
        d = u("meta"),
        f = 0,
        l = Object.isExtensible || function() {
            return !0
        },
        p = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!a(e, d)) {
                    if (!l(e)) return "F";
                    if (!t) return "E";
                    r(e)
                }
                return e[d].objectID
            },
            getWeakData: function(e, t) {
                if (!a(e, d)) {
                    if (!l(e)) return !0;
                    if (!t) return !1;
                    r(e)
                }
                return e[d].weakData
            },
            onFreeze: function(e) {
                return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e
            }
        };
    o[d] = !0
}, function(e, t, n) {
    var r = n(19),
        o = n(37),
        i = r("iterator"),
        a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (o.Array === e || a[i] === e)
    }
}, function(e, t, n) {
    var i = n(15);
    e.exports = function(t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), e
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
}, function(e, t, n) {
    function r() {}

    function o(e) {
        return "<script>" + e + "</" + g + ">"
    }
    var i, a = n(15),
        c = n(126),
        u = n(84),
        s = n(54),
        d = n(129),
        f = n(73),
        l = n(66),
        p = "prototype",
        g = "script",
        y = l("IE_PROTO"),
        b = function() {
            try {
                i = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            b = i ? function(e) {
                e.write(o("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(i) : ((t = f("iframe")).style.display = "none", d.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(o("document.F=Object")), e.close(), e.F);
            for (var n = u.length; n--;) delete b[p][u[n]];
            return b()
        };
    s[y] = !0, e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (r[p] = a(e), n = new r, r[p] = null, n[y] = e) : n = b(), void 0 === t ? n : c(n, t)
    }
}, function(e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(e, t, n) {
    var o = n(29);
    e.exports = function(e, t, n, r) {
        r && r.enumerable ? e[t] = n : o(e, t, n)
    }
}, function(e, t, n) {
    "use strict";
    var r, o, i, a = n(87),
        c = n(29),
        u = n(24),
        s = n(19),
        d = n(16),
        f = s("iterator"),
        l = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : l = !0), null == r && (r = {}), d || u(r, f) || c(r, f, function() {
        return this
    }), e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: l
    }
}, function(e, t, n) {
    var r = n(24),
        o = n(58),
        i = n(66),
        a = n(132),
        c = i("IE_PROTO"),
        u = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function(e) {
        return e = o(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
    }
}, function(e, t, n) {
    "use strict";
    var o = n(137).charAt,
        r = n(55),
        i = n(67),
        a = "String Iterator",
        c = r.set,
        u = r.getterFor(a);
    i(String, "String", function(e) {
        c(this, {
            type: a,
            string: String(e),
            index: 0
        })
    }, function() {
        var e, t = u(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = o(n, r), t.index += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var r = n(15),
        o = n(62);
    e.exports = function(e) {
        var t = o(e);
        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
        return r(t.call(e))
    }
}, function(e, t, n) {
    var r = n(163);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = Array.prototype.slice,
        o = n(92),
        i = Object.keys,
        a = i ? function(e) {
            return i(e)
        } : n(170),
        c = Object.keys;
    a.shim = function() {
        return Object.keys ? function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
        }(1, 2) || (Object.keys = function(e) {
            return o(e) ? c(r.call(e)) : c(e)
        }) : Object.keys = a, Object.keys || a
    }, e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    e.exports = function(e) {
        var t = r.call(e);
        return "[object Arguments]" === t || "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && 0 <= e.length && "[object Function]" === r.call(e.callee)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(94),
        o = n(174),
        i = o("%Function.prototype.apply%"),
        a = o("%Function.prototype.call%"),
        c = o("%Reflect.apply%", !0) || r.call(a, i);
    e.exports = function() {
        return c(r, a, arguments)
    }, e.exports.apply = function() {
        return c(r, i, arguments)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(173);
    e.exports = Function.prototype.bind || r
}, function(r, e, o) {
    "use strict";
    (function(e) {
        var t = e.Symbol,
            n = o(175);
        r.exports = function() {
            return "function" == typeof t && ("function" == typeof Symbol && ("symbol" == typeof t("foo") && ("symbol" == typeof Symbol("bar") && n())))
        }
    }).call(e, o(31))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e != e
    }
    e.exports = function(e, t) {
        return 0 === e && 0 === t ? 1 / e == 1 / t : e === t || !(!r(e) || !r(t))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(96);
    e.exports = function() {
        return "function" == typeof Object.is ? Object.is : r
    }
}, function(e, t, n) {
    "use strict";
    var r = Object,
        o = TypeError;
    e.exports = function() {
        if (null != this && this !== r(this)) throw new o("RegExp.prototype.flags getter called on non-object");
        var e = "";
        return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.sticky && (e += "y"), e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(98),
        o = n(43).supportsDescriptors,
        i = Object.getOwnPropertyDescriptor,
        a = TypeError;
    e.exports = function() {
        if (!o) throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        if ("gim" === /a/gim.flags) {
            var e = i(RegExp.prototype, "flags");
            if (e && "function" == typeof e.get && "boolean" == typeof /a/.dotAll) return e.get
        }
        return r
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = e;
        return {
            callBids: function() {},
            setBidderCode: function(e) {
                t = e
            },
            getBidderCode: function() {
                return t
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        if (e.labelAll) return {
            labelAll: !0,
            labels: e.labelAll,
            activeLabels: t
        };
        return {
            labelAll: !1,
            labels: e.labelAny,
            activeLabels: t
        }
    }, t.c = function(e) {
        var t = b(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y);
        return !t.shouldFilter || !!t.sizesSupported[e]
    }, t.b = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.labels,
            n = void 0 === t ? [] : t,
            r = e.labelAll,
            o = void 0 !== r && r,
            i = e.activeLabels,
            a = void 0 === i ? [] : i,
            c = 1 < arguments.length ? arguments[1] : void 0,
            u = 2 < arguments.length ? arguments[2] : void 0,
            s = b(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : y);
        c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
            banner: {
                sizes: u
            }
        } : {};
        var d = Object(p.deepAccess)(c, "banner.sizes");
        s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
            return s.sizesSupported[e]
        }));
        var f = Object.keys(c),
            l = {
                active: f.every(function(e) {
                    return "banner" !== e
                }) || f.some(function(e) {
                    return "banner" === e
                }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !o && (n.some(function(e) {
                    return s.labels[e]
                }) || n.some(function(e) {
                    return g()(a, e)
                })) || o && n.reduce(function(e, t) {
                    return e ? s.labels[t] || g()(a, t) : e
                }, !0)),
                mediaTypes: c
            };
        d && d.length !== c.banner.sizes.length && (l.filterResults = {
            before: d,
            after: c.banner.sizes
        });
        return l
    };
    var r = n(3),
        p = n(0),
        o = n(12),
        g = n.n(o);

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var y = [];

    function b(e) {
        return e.reduce(function(n, r) {
            if ("object" === i(r) && "string" == typeof r.mediaQuery) {
                var t = !1;
                if ("" === r.mediaQuery) t = !0;
                else try {
                    t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                } catch (e) {
                    Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                }
                t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(t) {
                    return (r[t] || []).forEach(function(e) {
                        return n[t][e] = !0
                    })
                }))
            } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
            return n
        }, {
            labels: {},
            sizesSupported: {},
            shouldFilter: !1
        })
    }
    r.b.getConfig("sizeConfig", function(e) {
        return t = e.sizeConfig, void(y = t);
        var t
    })
}, function(e, t, n) {
    var r = n(237);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    t.b = function(e, t, n) {
        var r = {
            puts: e.map(c, n)
        };
        Object(o.a)(i.b.getConfig("cache.url"), function(n) {
            return {
                success: function(e) {
                    var t;
                    try {
                        t = JSON.parse(e).responses
                    } catch (e) {
                        return void n(e, [])
                    }
                    t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(e, t) {
                    n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                }
            }
        }(t), JSON.stringify(r), {
            contentType: "text/plain",
            withCredentials: !0
        })
    }, t.a = function(e) {
        return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e)
    };
    var o = n(4),
        i = n(3),
        a = n(0);

    function c(e) {
        var t, n, r, o = {
            type: "xml",
            value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
            ttlseconds: Number(e.ttl)
        };
        return i.b.getConfig("cache.vasttrack") && (o.bidder = e.bidder, o.bidid = e.requestId, a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (o.timestamp = this.auctionStart)), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (o.key = e.customCacheKey), o
    }
}, , , function(e, t, n) {
    n(107);
    var r = n(53);
    e.exports = r("Array", "find")
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(57).find,
        i = n(52),
        a = n(61),
        c = "find",
        u = !0,
        s = a(c);
    c in [] && Array(1)[c](function() {
        u = !1
    }), r({
        target: "Array",
        proto: !0,
        forced: u || !s
    }, {
        find: function(e, t) {
            return o(this, e, 1 < arguments.length ? t : void 0)
        }
    }), i(c)
}, function(e, t, n) {
    var r = n(27),
        o = n(109),
        i = n(47),
        a = n(48),
        c = n(56),
        u = n(24),
        s = n(72),
        d = Object.getOwnPropertyDescriptor;
    t.f = r ? d : function(e, t) {
        if (e = a(e), t = c(t, !0), s) try {
            return d(e, t)
        } catch (e) {}
        if (u(e, t)) return i(!o.f.call(e, t), e[t])
    }
}, function(e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({
            1: 2
        }, 1);
    t.f = i ? function(e) {
        var t = o(this, e);
        return !!t && t.enumerable
    } : r
}, function(e, t, n) {
    function r(e, t) {
        var n = c[a(e)];
        return n == s || n != u && ("function" == typeof t ? o(t) : !!t)
    }
    var o = n(28),
        i = /#|\.prototype\./,
        a = r.normalize = function(e) {
            return String(e).replace(i, ".").toLowerCase()
        },
        c = r.data = {},
        u = r.NATIVE = "N",
        s = r.POLYFILL = "P";
    e.exports = r
}, function(e, t, n) {
    var r = n(23),
        o = n(112),
        i = n(19)("species");
    e.exports = function(e, t) {
        var n;
        return o(e) && ("function" == typeof(n = e.constructor) && (n === Array || o(n.prototype)) || r(n) && null === (n = n[i])) && (n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
}, function(e, t, n) {
    var r = n(49);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, n) {
    var r = n(22),
        o = n(29);
    e.exports = function(t, n) {
        try {
            o(r, t, n)
        } catch (e) {
            r[t] = n
        }
        return n
    }
}, function(e, t, n) {
    var r = n(76);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(e, t, n) {
    n(116);
    var r = n(53);
    e.exports = r("Array", "includes")
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(77).includes,
        i = n(52);
    r({
        target: "Array",
        proto: !0,
        forced: !n(61)("indexOf", {
            ACCESSORS: !0,
            1: 0
        })
    }, {
        includes: function(e, t) {
            return o(this, e, 1 < arguments.length ? t : void 0)
        }
    }), i("includes")
}, function(e, t, n) {
    var r = n(59),
        o = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}, function(e, t, n) {
    n(119), n(136), n(88), n(138);
    var r = n(42);
    e.exports = r.Set
}, function(e, t, n) {
    "use strict";
    var r = n(120),
        o = n(125);
    e.exports = r("Set", function(t) {
        return function(e) {
            return t(this, arguments.length ? e : void 0)
        }
    }, o)
}, function(e, t, n) {
    "use strict";
    var f = n(14),
        l = n(22),
        p = n(79),
        g = n(28),
        y = n(29),
        b = n(17),
        v = n(82),
        h = n(23),
        m = n(65),
        S = n(32).f,
        A = n(57).forEach,
        E = n(27),
        r = n(55),
        O = r.set,
        I = r.getterFor;
    e.exports = function(n, e, t) {
        var r, a, o = -1 !== n.indexOf("Map"),
            c = -1 !== n.indexOf("Weak"),
            i = o ? "set" : "add",
            u = l[n],
            s = u && u.prototype,
            d = {};
        return E && "function" == typeof u && (c || s.forEach && !g(function() {
            (new u).entries().next()
        })) ? (r = e(function(e, t) {
            O(v(e, r, n), {
                type: n,
                collection: new u
            }), null != t && b(t, e[i], e, o)
        }), a = I(n), A(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(o) {
            var i = "add" == o || "set" == o;
            o in s && (!c || "clear" != o) && y(r.prototype, o, function(e, t) {
                var n = a(this).collection;
                if (!i && c && !h(e)) return "get" == o && void 0;
                var r = n[o](0 === e ? 0 : e, t);
                return i ? this : r
            })
        }), c || S(r.prototype, "size", {
            configurable: !0,
            get: function() {
                return a(this).collection.size
            }
        })) : (r = t.getConstructor(e, n, o, i), p.REQUIRED = !0), m(r, n, !1, !0), d[n] = r, f({
            global: !0,
            forced: !0
        }, d), c || t.setStrong(r, n, o), r
    }
}, function(e, t, n) {
    var r = n(28);
    e.exports = !r(function() {
        return Object.isExtensible(Object.preventExtensions({}))
    })
}, function(e, t, n) {
    "use strict";
    var r = n(64),
        o = n(63);
    e.exports = r ? {}.toString : function() {
        return "[object " + o(this) + "]"
    }
}, function(e, t, n) {
    var r = n(22),
        o = n(124),
        i = r.WeakMap;
    e.exports = "function" == typeof i && /native code/.test(o(i))
}, function(e, t, n) {
    var r = n(75),
        o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
        return o.call(e)
    }), e.exports = r.inspectSource
}, function(e, t, n) {
    "use strict";
    var s = n(32).f,
        d = n(83),
        f = n(130),
        l = n(21),
        p = n(82),
        g = n(17),
        a = n(67),
        c = n(135),
        y = n(27),
        b = n(79).fastKey,
        r = n(55),
        v = r.set,
        h = r.getterFor;
    e.exports = {
        getConstructor: function(e, n, r, o) {
            function i(e, t, n) {
                var r, o, i = c(e),
                    a = u(e, t);
                return a ? a.value = n : (i.last = a = {
                    index: o = b(t, !0),
                    key: t,
                    value: n,
                    previous: r = i.last,
                    next: void 0,
                    removed: !1
                }, i.first || (i.first = a), r && (r.next = a), y ? i.size++ : e.size++, "F" !== o && (i.index[o] = a)), e
            }
            var a = e(function(e, t) {
                    p(e, a, n), v(e, {
                        type: n,
                        index: d(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), y || (e.size = 0), null != t && g(t, e[o], e, r)
                }),
                c = h(n),
                u = function(e, t) {
                    var n, r = c(e),
                        o = b(t);
                    if ("F" !== o) return r.index[o];
                    for (n = r.first; n; n = n.next)
                        if (n.key == t) return n
                };
            return f(a.prototype, {
                clear: function() {
                    for (var e = c(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                    e.first = e.last = void 0, y ? e.size = 0 : this.size = 0
                },
                delete: function(e) {
                    var t, n, r = c(this),
                        o = u(this, e);
                    return o && (t = o.next, n = o.previous, delete r.index[o.index], o.removed = !0, n && (n.next = t), t && (t.previous = n), r.first == o && (r.first = t), r.last == o && (r.last = n), y ? r.size-- : this.size--), !!o
                },
                forEach: function(e, t) {
                    for (var n, r = c(this), o = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first;)
                        for (o(n.value, n.key, this); n && n.removed;) n = n.previous
                },
                has: function(e) {
                    return !!u(this, e)
                }
            }), f(a.prototype, r ? {
                get: function(e) {
                    var t = u(this, e);
                    return t && t.value
                },
                set: function(e, t) {
                    return i(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function(e) {
                    return i(this, e = 0 === e ? 0 : e, e)
                }
            }), y && s(a.prototype, "size", {
                get: function() {
                    return c(this).size
                }
            }), a
        },
        setStrong: function(e, t, n) {
            var r = t + " Iterator",
                o = h(t),
                i = h(r);
            a(e, t, function(e, t) {
                v(this, {
                    type: r,
                    target: e,
                    state: o(e),
                    kind: t,
                    last: void 0
                })
            }, function() {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                    value: n.key,
                    done: !1
                } : "values" == t ? {
                    value: n.value,
                    done: !1
                } : {
                    value: [n.key, n.value],
                    done: !1
                } : {
                    value: e.target = void 0,
                    done: !0
                }
            }, n ? "entries" : "values", !n, !0), c(t)
        }
    }
}, function(e, t, n) {
    var r = n(27),
        a = n(32),
        c = n(15),
        u = n(127);
    e.exports = r ? Object.defineProperties : function(e, t) {
        c(e);
        for (var n, r = u(t), o = r.length, i = 0; i < o;) a.f(e, n = r[i++], t[n]);
        return e
    }
}, function(e, t, n) {
    var r = n(128),
        o = n(84);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}, function(e, t, n) {
    var a = n(24),
        c = n(48),
        u = n(77).indexOf,
        s = n(54);
    e.exports = function(e, t) {
        var n, r = c(e),
            o = 0,
            i = [];
        for (n in r) !a(s, n) && a(r, n) && i.push(n);
        for (; t.length > o;) a(r, n = t[o++]) && (~u(i, n) || i.push(n));
        return i
    }
}, function(e, t, n) {
    var r = n(25);
    e.exports = r("document", "documentElement")
}, function(e, t, n) {
    var o = n(85);
    e.exports = function(e, t, n) {
        for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : o(e, r, t[r], n);
        return e
    }
}, function(e, t, n) {
    "use strict";

    function o() {
        return this
    }
    var i = n(86).IteratorPrototype,
        a = n(83),
        c = n(47),
        u = n(65),
        s = n(37);
    e.exports = function(e, t, n) {
        var r = t + " Iterator";
        return e.prototype = a(i, {
            next: c(1, n)
        }), u(e, r, !1, !0), s[r] = o, e
    }
}, function(e, t, n) {
    var r = n(28);
    e.exports = !r(function() {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    })
}, function(e, t, n) {
    var o = n(15),
        i = n(134);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var n, r = !1,
            e = {};
        try {
            (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), r = e instanceof Array
        } catch (e) {}
        return function(e, t) {
            return o(e), i(t), r ? n.call(e, t) : e.__proto__ = t, e
        }
    }() : void 0)
}, function(e, t, n) {
    var r = n(23);
    e.exports = function(e) {
        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(25),
        o = n(32),
        i = n(19),
        a = n(27),
        c = i("species");
    e.exports = function(e) {
        var t = r(e),
            n = o.f;
        a && t && !t[c] && n(t, c, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t) {}, function(e, t, n) {
    function r(c) {
        return function(e, t) {
            var n, r, o = String(s(e)),
                i = u(t),
                a = o.length;
            return i < 0 || a <= i ? c ? "" : void 0 : (n = o.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === a || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? c ? o.charAt(i) : n : c ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536
        }
    }
    var u = n(59),
        s = n(50);
    e.exports = {
        codeAt: r(!1),
        charAt: r(!0)
    }
}, function(e, t, n) {
    n(139);
    var r = n(140),
        o = n(22),
        i = n(63),
        a = n(29),
        c = n(37),
        u = n(19)("toStringTag");
    for (var s in r) {
        var d = o[s],
            f = d && d.prototype;
        f && i(f) !== u && a(f, u, s), c[s] = c.Array
    }
}, function(e, t, n) {
    "use strict";
    var r = n(48),
        o = n(52),
        i = n(37),
        a = n(55),
        c = n(67),
        u = "Array Iterator",
        s = a.set,
        d = a.getterFor(u);
    e.exports = c(Array, "Array", function(e, t) {
        s(this, {
            type: u,
            target: r(e),
            index: 0,
            kind: t
        })
    }, function() {
        var e = d(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
        return !t || r >= t.length ? {
            value: e.target = void 0,
            done: !0
        } : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: t[r],
            done: !1
        } : {
            value: [r, t[r]],
            done: !1
        }
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function(e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(e, t, n) {
    n(14)({
        target: "Set",
        stat: !0
    }, {
        from: n(142)
    })
}, function(e, t, n) {
    "use strict";
    var s = n(18),
        d = n(21),
        f = n(17);
    e.exports = function(e, t, n) {
        var r, o, i, a, c = arguments.length,
            u = 1 < c ? t : void 0;
        return s(this), (r = void 0 !== u) && s(u), null == e ? new this : (o = [], r ? (i = 0, a = d(u, 2 < c ? n : void 0, 2), f(e, function(e) {
            o.push(a(e, i++))
        })) : f(e, o.push, o), new this(o))
    }
}, function(e, t, n) {
    n(14)({
        target: "Set",
        stat: !0
    }, {
        of: n(144)
    })
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
        return new this(t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(146);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        addAll: function() {
            return i.apply(this, arguments)
        }
    })
}, function(e, t, n) {
    "use strict";
    var o = n(15),
        i = n(18);
    e.exports = function() {
        for (var e = o(this), t = i(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(148);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        deleteAll: function() {
            return i.apply(this, arguments)
        }
    })
}, function(e, t, n) {
    "use strict";
    var a = n(15),
        c = n(18);
    e.exports = function() {
        for (var e, t = a(this), n = c(t.delete), r = !0, o = 0, i = arguments.length; o < i; o++) e = n.call(t, arguments[o]), r = r && e;
        return !!r
    }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(15),
        a = n(21),
        c = n(34),
        u = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        every: function(e, t) {
            var n = i(this),
                r = c(n),
                o = a(e, 1 < arguments.length ? t : void 0, 3);
            return !u(r, function(e) {
                if (!o(e, e, n)) return u.stop()
            }, void 0, !1, !0).stopped
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(25),
        a = n(15),
        c = n(18),
        u = n(38),
        s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        difference: function(e) {
            var t = a(this),
                n = new(u(t, i("Set")))(t),
                r = c(n.delete);
            return s(e, function(e) {
                r.call(n, e)
            }), n
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        c = n(25),
        u = n(15),
        s = n(18),
        d = n(21),
        f = n(38),
        l = n(34),
        p = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        filter: function(e, t) {
            var n = u(this),
                r = l(n),
                o = d(e, 1 < arguments.length ? t : void 0, 3),
                i = new(f(n, c("Set"))),
                a = s(i.add);
            return p(r, function(e) {
                o(e, e, n) && a.call(i, e)
            }, void 0, !1, !0), i
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(15),
        a = n(21),
        c = n(34),
        u = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        find: function(e, t) {
            var n = i(this),
                r = c(n),
                o = a(e, 1 < arguments.length ? t : void 0, 3);
            return u(r, function(e) {
                if (o(e, e, n)) return u.stop(e)
            }, void 0, !1, !0).result
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(25),
        a = n(15),
        c = n(18),
        u = n(38),
        s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        intersection: function(e) {
            var t = a(this),
                n = new(u(t, i("Set"))),
                r = c(t.has),
                o = c(n.add);
            return s(e, function(e) {
                r.call(t, e) && o.call(n, e)
            }), n
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(15),
        a = n(18),
        c = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        isDisjointFrom: function(e) {
            var t = i(this),
                n = a(t.has);
            return !c(e, function(e) {
                if (!0 === n.call(t, e)) return c.stop()
            }).stopped
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(25),
        a = n(15),
        c = n(18),
        u = n(89),
        s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        isSubsetOf: function(e) {
            var t = u(this),
                n = a(e),
                r = n.has;
            return "function" != typeof r && (n = new(i("Set"))(e), r = c(n.has)), !s(t, function(e) {
                if (!1 === r.call(n, e)) return s.stop()
            }, void 0, !1, !0).stopped
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(15),
        a = n(18),
        c = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        isSupersetOf: function(e) {
            var t = i(this),
                n = a(t.has);
            return !c(e, function(e) {
                if (!1 === n.call(t, e)) return c.stop()
            }).stopped
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(15),
        a = n(34),
        c = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        join: function(e) {
            var t = i(this),
                n = a(t),
                r = void 0 === e ? "," : String(e),
                o = [];
            return c(n, o.push, o, !1, !0), o.join(r)
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        c = n(25),
        u = n(15),
        s = n(18),
        d = n(21),
        f = n(38),
        l = n(34),
        p = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        map: function(e, t) {
            var n = u(this),
                r = l(n),
                o = d(e, 1 < arguments.length ? t : void 0, 3),
                i = new(f(n, c("Set"))),
                a = s(i.add);
            return p(r, function(e) {
                a.call(i, o(e, e, n))
            }, void 0, !1, !0), i
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        a = n(15),
        c = n(18),
        u = n(34),
        s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        reduce: function(t, e) {
            var n = a(this),
                r = u(n),
                o = arguments.length < 2,
                i = o ? void 0 : e;
            if (c(t), s(r, function(e) {
                    i = o ? (o = !1, e) : t(i, e, e, n)
                }, void 0, !1, !0), o) throw TypeError("Reduce of empty set with no initial value");
            return i
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(15),
        a = n(21),
        c = n(34),
        u = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        some: function(e, t) {
            var n = i(this),
                r = c(n),
                o = a(e, 1 < arguments.length ? t : void 0, 3);
            return u(r, function(e) {
                if (o(e, e, n)) return u.stop()
            }, void 0, !1, !0).stopped
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(25),
        a = n(15),
        c = n(18),
        u = n(38),
        s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        symmetricDifference: function(e) {
            var t = a(this),
                n = new(u(t, i("Set")))(t),
                r = c(n.delete),
                o = c(n.add);
            return s(e, function(e) {
                r.call(n, e) || o.call(n, e)
            }), n
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(16),
        i = n(25),
        a = n(15),
        c = n(18),
        u = n(38),
        s = n(17);
    r({
        target: "Set",
        proto: !0,
        real: !0,
        forced: o
    }, {
        union: function(e) {
            var t = a(this),
                n = new(u(t, i("Set")))(t);
            return s(e, c(n.add), n), n
        }
    })
}, function(e, t, n) {
    n(88), n(164);
    var r = n(42);
    e.exports = r.Array.from
}, function(e, t, n) {
    var r = n(14),
        o = n(165);
    r({
        target: "Array",
        stat: !0,
        forced: !n(167)(function(e) {
            Array.from(e)
        })
    }, {
        from: o
    })
}, function(e, t, n) {
    "use strict";
    var b = n(21),
        v = n(58),
        h = n(81),
        m = n(80),
        S = n(51),
        A = n(166),
        E = n(62);
    e.exports = function(e, t, n) {
        var r, o, i, a, c, u, s = v(e),
            d = "function" == typeof this ? this : Array,
            f = arguments.length,
            l = 1 < f ? t : void 0,
            p = void 0 !== l,
            g = E(s),
            y = 0;
        if (p && (l = b(l, 2 < f ? n : void 0, 2)), null == g || d == Array && m(g))
            for (o = new d(r = S(s.length)); y < r; y++) u = p ? l(s[y], y) : s[y], A(o, y, u);
        else
            for (c = (a = g.call(s)).next, o = new d; !(i = c.call(a)).done; y++) u = p ? h(a, l, [i.value, y], !0) : i.value, A(o, y, u);
        return o.length = y, o
    }
}, function(e, t, n) {
    "use strict";
    var o = n(56),
        i = n(32),
        a = n(47);
    e.exports = function(e, t, n) {
        var r = o(t);
        r in e ? i.f(e, r, a(0, n)) : e[r] = n
    }
}, function(e, t, n) {
    var o = n(19)("iterator"),
        i = !1;
    try {
        var r = 0,
            a = {
                next: function() {
                    return {
                        done: !!r++
                    }
                },
                return: function() {
                    i = !0
                }
            };
        a[o] = function() {
            return this
        }, Array.from(a, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
            var r = {};
            r[o] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        }
                    }
                }
            }, e(r)
        } catch (e) {}
        return n
    }
}, function(e, t) {
    e.exports = function e(t) {
        var n = Array.isArray(t) ? [] : {};
        for (var r in t) {
            var o = t[r];
            n[r] = o && "object" == typeof o ? e(o) : o
        }
        return n
    }
}, function(e, t, n) {
    var f = n(91),
        l = n(171),
        o = n(172),
        p = n(177),
        g = n(178),
        y = n(180),
        b = Date.prototype.getTime;

    function v(e, t, n) {
        var r = n || {};
        return !(r.strict ? !o(e, t) : e !== t) || (!e || !t || "object" != typeof e && "object" != typeof t ? r.strict ? o(e, t) : e == t : function(e, t, n) {
            var r, o;
            if (typeof e != typeof t) return !1;
            if (h(e) || h(t)) return !1;
            if (e.prototype !== t.prototype) return !1;
            if (l(e) !== l(t)) return !1;
            var i = p(e),
                a = p(t);
            if (i !== a) return !1;
            if (i || a) return e.source === t.source && g(e) === g(t);
            if (y(e) && y(t)) return b.call(e) === b.call(t);
            var c = m(e),
                u = m(t);
            if (c !== u) return !1;
            if (c || u) {
                if (e.length !== t.length) return !1;
                for (r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            if (typeof e != typeof t) return !1;
            try {
                var s = f(e),
                    d = f(t)
            } catch (e) {
                return !1
            }
            if (s.length !== d.length) return !1;
            for (s.sort(), d.sort(), r = s.length - 1; 0 <= r; r--)
                if (s[r] != d[r]) return !1;
            for (r = s.length - 1; 0 <= r; r--)
                if (o = s[r], !v(e[o], t[o], n)) return !1;
            return !0
        }(e, t, r))
    }

    function h(e) {
        return null == e
    }

    function m(e) {
        return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(0 < e.length && "number" != typeof e[0]))
    }
    e.exports = v
}, function(e, t, n) {
    "use strict";
    var l, p, g, r, y, b, v, h, o, m, i;
    Object.keys || (l = Object.prototype.hasOwnProperty, p = Object.prototype.toString, g = n(92), r = Object.prototype.propertyIsEnumerable, y = !r.call({
        toString: null
    }, "toString"), b = r.call(function() {}, "prototype"), v = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], h = function(e) {
        var t = e.constructor;
        return t && t.prototype === e
    }, o = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
    }, m = function() {
        if ("undefined" == typeof window) return !1;
        for (var e in window) try {
            if (!o["$" + e] && l.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                h(window[e])
            } catch (e) {
                return !0
            }
        } catch (e) {
            return !0
        }
        return !1
    }(), i = function(e) {
        var t = null !== e && "object" == typeof e,
            n = "[object Function]" === p.call(e),
            r = g(e),
            o = t && "[object String]" === p.call(e),
            i = [];
        if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
        var a = b && n;
        if (o && 0 < e.length && !l.call(e, 0))
            for (var c = 0; c < e.length; ++c) i.push(String(c));
        if (r && 0 < e.length)
            for (var u = 0; u < e.length; ++u) i.push(String(u));
        else
            for (var s in e) a && "prototype" === s || !l.call(e, s) || i.push(String(s));
        if (y)
            for (var d = function(e) {
                    if ("undefined" == typeof window || !m) return h(e);
                    try {
                        return h(e)
                    } catch (e) {
                        return !1
                    }
                }(e), f = 0; f < v.length; ++f) d && "constructor" === v[f] || !l.call(e, v[f]) || i.push(v[f]);
        return i
    }), e.exports = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return !(i && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === a.call(e)
    }

    function o(e) {
        return !!r(e) || null !== e && "object" == typeof e && "number" == typeof e.length && 0 <= e.length && "[object Array]" !== a.call(e) && "[object Function]" === a.call(e.callee)
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        a = Object.prototype.toString,
        c = function() {
            return r(arguments)
        }();
    r.isLegacyArguments = o, e.exports = c ? r : o
}, function(e, t, n) {
    "use strict";
    var r = n(43),
        o = n(93),
        i = n(96),
        a = n(97),
        c = n(176),
        u = o(a(), Object);
    r(u, {
        getPolyfill: a,
        implementation: i,
        shim: c
    }), e.exports = u
}, function(e, t, n) {
    "use strict";
    var u = Array.prototype.slice,
        s = Object.prototype.toString;
    e.exports = function(t) {
        var n = this;
        if ("function" != typeof n || "[object Function]" !== s.call(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
        for (var r, e, o = u.call(arguments, 1), i = Math.max(0, n.length - o.length), a = [], c = 0; c < i; c++) a.push("$" + c);
        return r = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(function() {
            if (this instanceof r) {
                var e = n.apply(this, o.concat(u.call(arguments)));
                return Object(e) === e ? e : this
            }
            return n.apply(t, o.concat(u.call(arguments)))
        }), n.prototype && ((e = function() {}).prototype = n.prototype, r.prototype = new e, e.prototype = null), r
    }
}, function(e, t, n) {
    "use strict";
    var r, c = TypeError,
        u = Object.getOwnPropertyDescriptor;
    if (u) try {
        u({}, "")
    } catch (e) {
        u = null
    }

    function o() {
        throw new c
    }
    var i = u ? function() {
            try {
                return o
            } catch (e) {
                try {
                    return u(arguments, "callee").get
                } catch (e) {
                    return o
                }
            }
        }() : o,
        a = n(95)(),
        s = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        d = r,
        f = "undefined" == typeof Uint8Array ? r : s(Uint8Array),
        l = {
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
            "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer.prototype,
            "%ArrayIteratorPrototype%": a ? s([][Symbol.iterator]()) : r,
            "%ArrayPrototype%": Array.prototype,
            "%ArrayProto_entries%": Array.prototype.entries,
            "%ArrayProto_forEach%": Array.prototype.forEach,
            "%ArrayProto_keys%": Array.prototype.keys,
            "%ArrayProto_values%": Array.prototype.values,
            "%AsyncFromSyncIteratorPrototype%": r,
            "%AsyncFunction%": void 0,
            "%AsyncFunctionPrototype%": r,
            "%AsyncGenerator%": r,
            "%AsyncGeneratorFunction%": void 0,
            "%AsyncGeneratorPrototype%": r,
            "%AsyncIteratorPrototype%": d && a && Symbol.asyncIterator ? d[Symbol.asyncIterator]() : r,
            "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
            "%Boolean%": Boolean,
            "%BooleanPrototype%": Boolean.prototype,
            "%DataView%": "undefined" == typeof DataView ? r : DataView,
            "%DataViewPrototype%": "undefined" == typeof DataView ? r : DataView.prototype,
            "%Date%": Date,
            "%DatePrototype%": Date.prototype,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%ErrorPrototype%": Error.prototype,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%EvalErrorPrototype%": EvalError.prototype,
            "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
            "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? r : Float32Array.prototype,
            "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
            "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? r : Float64Array.prototype,
            "%Function%": Function,
            "%FunctionPrototype%": Function.prototype,
            "%Generator%": r,
            "%GeneratorFunction%": void 0,
            "%GeneratorPrototype%": r,
            "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
            "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? r : Int8Array.prototype,
            "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
            "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? r : Int8Array.prototype,
            "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
            "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? r : Int32Array.prototype,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": a ? s(s([][Symbol.iterator]())) : r,
            "%JSON%": "object" == typeof JSON ? JSON : r,
            "%JSONParse%": "object" == typeof JSON ? JSON.parse : r,
            "%Map%": "undefined" == typeof Map ? r : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && a ? s((new Map)[Symbol.iterator]()) : r,
            "%MapPrototype%": "undefined" == typeof Map ? r : Map.prototype,
            "%Math%": Math,
            "%Number%": Number,
            "%NumberPrototype%": Number.prototype,
            "%Object%": Object,
            "%ObjectPrototype%": Object.prototype,
            "%ObjProto_toString%": Object.prototype.toString,
            "%ObjProto_valueOf%": Object.prototype.valueOf,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? r : Promise,
            "%PromisePrototype%": "undefined" == typeof Promise ? r : Promise.prototype,
            "%PromiseProto_then%": "undefined" == typeof Promise ? r : Promise.prototype.then,
            "%Promise_all%": "undefined" == typeof Promise ? r : Promise.all,
            "%Promise_reject%": "undefined" == typeof Promise ? r : Promise.reject,
            "%Promise_resolve%": "undefined" == typeof Promise ? r : Promise.resolve,
            "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
            "%RangeError%": RangeError,
            "%RangeErrorPrototype%": RangeError.prototype,
            "%ReferenceError%": ReferenceError,
            "%ReferenceErrorPrototype%": ReferenceError.prototype,
            "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
            "%RegExp%": RegExp,
            "%RegExpPrototype%": RegExp.prototype,
            "%Set%": "undefined" == typeof Set ? r : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && a ? s((new Set)[Symbol.iterator]()) : r,
            "%SetPrototype%": "undefined" == typeof Set ? r : Set.prototype,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
            "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer.prototype,
            "%String%": String,
            "%StringIteratorPrototype%": a ? s("" [Symbol.iterator]()) : r,
            "%StringPrototype%": String.prototype,
            "%Symbol%": a ? Symbol : r,
            "%SymbolPrototype%": a ? Symbol.prototype : r,
            "%SyntaxError%": SyntaxError,
            "%SyntaxErrorPrototype%": SyntaxError.prototype,
            "%ThrowTypeError%": i,
            "%TypedArray%": f,
            "%TypedArrayPrototype%": f ? f.prototype : r,
            "%TypeError%": c,
            "%TypeErrorPrototype%": c.prototype,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
            "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? r : Uint8Array.prototype,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
            "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray.prototype,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
            "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? r : Uint16Array.prototype,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
            "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? r : Uint32Array.prototype,
            "%URIError%": URIError,
            "%URIErrorPrototype%": URIError.prototype,
            "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
            "%WeakMapPrototype%": "undefined" == typeof WeakMap ? r : WeakMap.prototype,
            "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
            "%WeakSetPrototype%": "undefined" == typeof WeakSet ? r : WeakSet.prototype
        },
        p = n(94).call(Function.call, String.prototype.replace),
        g = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        y = /\\(\\)?/g;
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new TypeError("intrinsic name must be a non-empty string");
        if (1 < arguments.length && "boolean" != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
        for (var o, n = (o = [], p(e, g, function(e, t, n, r) {
                o[o.length] = n ? p(r, y, "$1") : t || e
            }), o), r = function(e, t) {
                if (!(e in l)) throw new SyntaxError("intrinsic " + e + " does not exist!");
                if (void 0 === l[e] && !t) throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return l[e]
            }("%" + (0 < n.length ? n[0] : "") + "%", t), i = 1; i < n.length; i += 1)
            if (null != r)
                if (u && i + 1 >= n.length) {
                    var a = u(r, n[i]);
                    if (!(t || n[i] in r)) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
                    r = a ? a.get || a.value : r[n[i]]
                } else r = r[n[i]];
        return r
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
            t = Symbol("test"),
            n = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
        for (t in e[t] = 42, e) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
        var r = Object.getOwnPropertySymbols(e);
        if (1 !== r.length || r[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== o.value || !0 !== o.enumerable) return !1
        }
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(97),
        o = n(43);
    e.exports = function() {
        var e = r();
        return o(Object, {
            is: e
        }, {
            is: function() {
                return Object.is !== e
            }
        }), e
    }
}, function(e, t, n) {
    "use strict";
    var r, o, i, a, c = n(95)() && "symbol" == typeof Symbol.toStringTag;
    c && (r = Function.call.bind(RegExp.prototype.exec), o = {}, a = {
        toString: i = function() {
            throw o
        },
        valueOf: i
    }, "symbol" == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = i));
    var u = Object.prototype.toString;
    e.exports = c ? function(e) {
        if (!e || "object" != typeof e) return !1;
        try {
            r(e, a)
        } catch (e) {
            return e === o
        }
    } : function(e) {
        return !(!e || "object" != typeof e && "function" != typeof e) && "[object RegExp]" === u.call(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(43),
        o = n(93),
        i = n(98),
        a = n(99),
        c = n(179),
        u = o(i);
    r(u, {
        getPolyfill: a,
        implementation: i,
        shim: c
    }), e.exports = u
}, function(e, t, n) {
    "use strict";
    var r = n(43).supportsDescriptors,
        o = n(99),
        i = Object.getOwnPropertyDescriptor,
        a = Object.defineProperty,
        c = TypeError,
        u = Object.getPrototypeOf,
        s = /a/;
    e.exports = function() {
        if (!r || !u) throw new c("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
        var e = o(),
            t = u(s),
            n = i(t, "flags");
        return n && n.get === e || a(t, "flags", {
            configurable: !0,
            enumerable: !1,
            get: e
        }), e
    }
}, function(e, t, n) {
    "use strict";
    var r = Date.prototype.getDay,
        o = Object.prototype.toString,
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function(e) {
        return "object" == typeof e && null !== e && (i ? function(e) {
            try {
                return r.call(e), !0
            } catch (e) {
                return !1
            }
        }(e) : "[object Date]" === o.call(e))
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t, n, r, o) {
        for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : o;
        return e === o ? n : e
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t, n) {
        t.split && (t = t.split("."));
        for (var r, o = 0, i = t.length, a = e; o < i; ++o) r = a[t[o]], a = a[t[o]] = o === i - 1 ? n : null != r ? r : !~t[o + 1].indexOf(".") && -1 < +t[o + 1] ? [] : {}
    }
}, function(e, t) {
    h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
    var g = "fun-hooks";
    var n = Object.freeze({
            useProxy: !0,
            ready: 0
        }),
        y = new WeakMap,
        r = "2,1,0" === [1].reduce(function(e, t, n) {
            return [e, t, n]
        }, 2).toString() ? Array.prototype.reduce : function(e, t) {
            var n, r = Object(this),
                o = r.length >>> 0,
                i = 0;
            if (t) n = t;
            else {
                for (; i < o && !(i in r);) i++;
                n = r[i++]
            }
            for (; i < o;) i in r && (n = e(n, r[i], i, r)), i++;
            return n
        };

    function b(e, t) {
        return Array.prototype.slice.call(e, t)
    }
    var v = Object.assign || function(e) {
        return r.call(b(arguments, 1), function(t, n) {
            return n && Object.keys(n).forEach(function(e) {
                t[e] = n[e]
            }), t
        }, e)
    };

    function h(u) {
        var s, e = {},
            d = [];

        function t(e, t) {
            return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(i, e, a) {
                var t = !0;
                void 0 === e && (e = Object.getOwnPropertyNames(i), t = !1);
                var c = {},
                    n = ["constructor"];
                for (;
                    (e = e.filter(function(e) {
                        return !("function" != typeof i[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                    })).forEach(function(e) {
                        var t, n = e.split(":"),
                            r = n[0],
                            o = n[1] || "sync";
                        c[r] || (t = i[r], c[r] = i[r] = f(o, t, a ? [a, r] : void 0))
                    }), i = Object.getPrototypeOf(i), t && i;);
                return c
            }.apply(null, arguments) : void 0
        }

        function l(i) {
            var a = Array.isArray(i) ? i : i.split(".");
            return r.call(a, function(t, n, e) {
                var r = t[n],
                    o = !1;
                return r || (e === a.length - 1 ? (s || d.push(function() {
                    o || console.warn(g + ": referenced '" + i + "' but it was never created")
                }), t[n] = p(function(e) {
                    t[n] = e, o = !0
                })) : t[n] = {})
            }, e)
        }

        function p(r) {
            var i = [],
                a = [],
                c = function() {},
                e = {
                    before: function(e, t) {
                        return n.call(this, i, "before", e, t)
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t)
                    },
                    getHooks: function(n) {
                        var e = i.concat(a);
                        "object" == typeof n && (e = e.filter(function(t) {
                            return Object.keys(n).every(function(e) {
                                return t[e] === n[e]
                            })
                        }));
                        try {
                            v(e, {
                                remove: function() {
                                    return e.forEach(function(e) {
                                        e.remove()
                                    }), this
                                }
                            })
                        } catch (e) {
                            console.error("error adding `remove` to array, did you modify Array.prototype?")
                        }
                        return e
                    },
                    removeAll: function() {
                        return this.getHooks().remove()
                    }
                },
                t = {
                    install: function(e, t, n) {
                        this.type = e, (c = n)(i, a), r && r(t)
                    }
                };
            return y.set(e.after, t), e;

            function n(t, e, n, r) {
                var o = {
                    hook: n,
                    type: e,
                    priority: r || 10,
                    remove: function() {
                        var e = t.indexOf(o); - 1 !== e && (t.splice(e, 1), c(i, a))
                    }
                };
                return t.push(o), t.sort(function(e, t) {
                    return t.priority - e.priority
                }), c(i, a), this
            }
        }

        function f(f, e, t) {
            var n = e.after && y.get(e.after);
            if (n) {
                if (n.type !== f) throw g + ": recreated hookable with different type";
                return e
            }
            var r, o, i = t ? l(t) : p(),
                a = {
                    get: function(e, t) {
                        return i[t] || Reflect.get.apply(Reflect, arguments)
                    }
                };
            return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? o = new Proxy(e, a) : v(o = function() {
                return a.apply ? a.apply(e, this, b(arguments)) : e.apply(this, arguments)
            }, i), y.get(o.after).install(f, o, function(e, t) {
                var s, d = [];
                r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function(n, r, e) {
                    var o, i = 0,
                        a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                    function c(e) {
                        "sync" === f ? o = e : a && a.apply(null, arguments)
                    }

                    function u(e) {
                        if (d[i]) {
                            var t = b(arguments);
                            return u.bail = c, t.unshift(u), d[i++].apply(r, t)
                        }
                        "sync" === f ? o = e : a && a.apply(null, arguments)
                    }
                    return d[s] = function() {
                        var e = b(arguments, 1);
                        "async" === f && a && (delete u.bail, e.push(u));
                        var t = n.apply(r, e);
                        "sync" === f && u(t)
                    }, u.apply(null, e), o
                }) : void 0;

                function n(e) {
                    d.push(e.hook)
                }
                c()
            }), o;

            function c() {
                !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function() {
                    var e = arguments;
                    d.push(function() {
                        o.apply(e[1], e[2])
                    })
                } : a.apply = function() {
                    throw g + ": hooked function not ready"
                } : a.apply = r
            }
        }
        return (u = v({}, n, u)).ready ? t.ready = function() {
            s = !0,
                function(e) {
                    for (var t; t = e.shift();) t()
                }(d)
        } : s = !0, t.get = l, t
    }
    e.exports = h
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    n(238);
    var r = n(53);
    e.exports = r("Array", "findIndex")
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(57).findIndex,
        i = n(52),
        a = n(61),
        c = "findIndex",
        u = !0,
        s = a(c);
    c in [] && Array(1)[c](function() {
        u = !1
    }), r({
        target: "Array",
        proto: !0,
        forced: u || !s
    }, {
        findIndex: function(e, t) {
            return o(this, e, 1 < arguments.length ? t : void 0)
        }
    }), i(c)
}, , , , , , , function(e, t, n) {
    "use strict";
    t.a = function() {
        window.addEventListener("message", c, !1)
    };
    var r = n(8),
        g = n.n(r),
        y = n(35),
        o = n(5),
        b = (n.n(o), n(0)),
        v = n(26),
        i = n(10),
        h = n.n(i),
        m = n(11),
        a = n(12),
        S = n.n(a),
        A = o.EVENTS.BID_WON;

    function c(e) {
        var t, n, r, o, i, a, c, u, s, d = e.message ? "message" : "data",
            f = {};
        try {
            f = JSON.parse(e[d])
        } catch (e) {
            return
        }
        if (f && f.adId) {
            var l = h()(v.a.getBidsReceived(), function(e) {
                return e.adId === f.adId
            });
            if (l && "Prebid Request" === f.message && (n = e, r = (t = l).adId, o = t.ad, i = t.adUrl, a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(m.c)(u) ? Object(m.b)(u, t) : r && (function(e) {
                    var i = e.adId,
                        a = e.adUnitCode,
                        r = e.width,
                        o = e.height;

                    function c(e) {
                        var t, n, r = (t = i, n = a, window.googletag ? function(n) {
                                return h()(window.googletag.pubads().getSlots(), function(t) {
                                    return h()(t.getTargetingKeys(), function(e) {
                                        return S()(t.getTargeting(e), n)
                                    })
                                }).getSlotElementId()
                            }(t) : window.apntag ? function(e) {
                                var t = window.apntag.getTag(e);
                                return t && t.targetId
                            }(n) : n),
                            o = document.getElementById(r);
                        return o && o.querySelector(e)
                    } ["div", "iframe"].forEach(function(e) {
                        var t, n = c(e + ':not([style*="display: none"])');
                        n ? ((t = n.style).width = r + "px", t.height = o + "px") : Object(b.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a, ".  Can't resize it to ad's dimensions.  Please review setup."))
                    })
                }(t), n.source.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: Object(b.replaceAuctionPrice)(o, s),
                    adUrl: Object(b.replaceAuctionPrice)(i, s),
                    adId: r,
                    width: a,
                    height: c
                }), n.origin)), v.a.addWinningBid(l), g.a.emit(A, l)), l && "Prebid Native" === f.message) {
                if ("assetRequest" === f.action) {
                    var p = Object(y.c)(f, l);
                    return void e.source.postMessage(JSON.stringify(p), e.origin)
                }
                if ("click" === Object(y.b)(f, l)) return;
                v.a.addWinningBid(l), g.a.emit(A, l)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t;
        try {
            e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
        } catch (e) {}
        t && p(t, !0)
    };
    var r, o, i = n(3),
        a = n(0),
        c = n(40),
        u = "pbjs:debugging";

    function s(e) {
        Object(a.logMessage)("DEBUG: " + e)
    }

    function d(e) {
        Object(a.logWarn)("DEBUG: " + e)
    }

    function f(e) {
        r = function(e, t, n) {
            if (y(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
            Array.isArray(this.bids) && this.bids.forEach(function(e) {
                g(e, n.bidderCode, t) || b(e, n, "bidder")
            });
            e(t, n)
        }.bind(e), c.c.before(r, 5), o = function(e, t) {
            var r = this,
                n = t.filter(function(e) {
                    return !y(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1)
                });
            Array.isArray(r.bidRequests) && n.forEach(function(n) {
                r.bidRequests.forEach(function(t) {
                    n.bids.forEach(function(e) {
                        g(t, n.bidderCode, e.adUnitCode) || b(t, e, "bidRequest")
                    })
                })
            });
            e(n)
        }.bind(e), c.e.before(o, 5)
    }

    function l() {
        c.c.getHooks({
            hook: r
        }).remove(), c.e.getHooks({
            hook: o
        }).remove()
    }

    function p(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t;
        i.b.setConfig({
            debug: !0
        }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""))
    }

    function g(e, t, n) {
        return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n)
    }

    function y(e, t) {
        return Array.isArray(e) && -1 === e.indexOf(t)
    }

    function b(n, e, r) {
        return Object.keys(n).filter(function(e) {
            return -1 === ["adUnitCode", "bidder"].indexOf(e)
        }).reduce(function(e, t) {
            return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), e[t] = n[t], e
        }, e)
    }

    function v(e) {
        if (e.enabled) {
            try {
                window.sessionStorage.setItem(u, JSON.stringify(e))
            } catch (e) {}
            p(e)
        } else {
            l(), s("bidder overrides disabled");
            try {
                window.sessionStorage.removeItem(u)
            } catch (e) {}
        }
    }
    i.b.getConfig("debugging", function(e) {
        return v(e.debugging)
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = n(360);
    e.exports = r
}, function(e, t, n) {
    n(361);
    var r = n(53);
    e.exports = r("String", "includes")
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        o = n(362),
        i = n(50);
    r({
        target: "String",
        proto: !0,
        forced: !n(364)("includes")
    }, {
        includes: function(e, t) {
            return !!~String(i(this)).indexOf(o(e), 1 < arguments.length ? t : void 0)
        }
    })
}, function(e, t, n) {
    var r = n(363);
    e.exports = function(e) {
        if (r(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
    }
}, function(e, t, n) {
    var r = n(23),
        o = n(49),
        i = n(19)("match");
    e.exports = function(e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
    }
}, function(e, t, n) {
    var r = n(19)("match");
    e.exports = function(t) {
        var n = /./;
        try {
            "/./" [t](n)
        } catch (e) {
            try {
                return n[r] = !1, "/./" [t](n)
            } catch (e) {}
        }
        return !1
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = n(487);
    e.exports = r
}, function(e, t, n) {
    n(488);
    var r = n(42);
    e.exports = r.Number.isInteger
}, function(e, t, n) {
    n(14)({
        target: "Number",
        stat: !0
    }, {
        isInteger: n(489)
    })
}, function(e, t, n) {
    var r = n(23),
        o = Math.floor;
    e.exports = function(e) {
        return !r(e) && isFinite(e) && o(e) === e
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = n(69)
}]);
pbjsChunk([24], {
    611: function(e, t, r) {
        e.exports = r(612)
    },
    612: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resetSyncedStatus = function() {
            V = !1
        }, t.resetWurlMap = function() {
            W = {}
        }, t.PrebidServer = l;
        var i = r(100),
            O = r(33),
            A = r(0),
            j = r(5),
            y = (r.n(j), r(7)),
            m = r(3),
            w = r(2),
            h = r(35),
            S = r(1),
            n = r(8),
            x = r.n(n),
            a = r(12),
            _ = r.n(a),
            s = r(613),
            E = r(4),
            c = r(10),
            I = r.n(c);

        function k(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function C(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var r = [],
                    i = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var s, c = e[Symbol.iterator](); !(i = (s = c.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0);
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (n) throw a
                    }
                }
                return r
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return d(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
            return i
        }

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            }).apply(this, arguments)
        }

        function U(e) {
            return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var P, B = m.b.getConfig,
            R = j.S2S.SRC,
            V = !1,
            o = {
                enabled: !1,
                timeout: 1e3,
                maxBids: 1,
                adapter: "prebidServer",
                adapterOptions: {},
                syncUrlModifier: {}
            };

        function N(e) {
            var t;
            0 !== e.length && ((t = e.pop()).no_cookie ? function(e, t, r, i) {
                {
                    var n;
                    P.syncUrlModifier && "function" == typeof P.syncUrlModifier[r] ? (n = P.syncUrlModifier[r](e, t, r), p(e, n, r, i)) : p(e, t, r, i)
                }
            }(t.usersync.type, t.usersync.url, t.bidder, A.bind.call(N, null, e)) : N(e))
        }

        function p(e, t, r, i) {
            t ? "image" === e || "redirect" === e ? (A.logMessage('Invoking image pixel user sync for bidder: "'.concat(r, '"')), A.triggerPixel(t, i)) : "iframe" == e ? (A.logMessage('Invoking iframe user sync for bidder: "'.concat(r, '"')), A.insertUserSyncIframe(t, i)) : (A.logError('User sync type "'.concat(e, '" not supported for bidder: "').concat(r, '"')), i()) : (A.logError('No sync url for bidder "'.concat(r, '": ').concat(t)), i())
        }
        m.b.setDefaults({
            s2sConfig: o
        }), B("s2sConfig", function(e) {
            return function(t) {
                if (t.defaultVendor) {
                    var r = t.defaultVendor,
                        i = Object.keys(t);
                    if (!s.a[r]) return A.logError("Incorrect or unavailable prebid server default vendor option: " + r), !1;
                    Object.keys(s.a[r]).forEach(function(e) {
                        o[e] !== t[e] && _()(i, e) || (t[e] = s.a[r][e])
                    })
                }
                var n = Object.keys(t);
                0 < ["accountId", "bidders", "endpoint"].filter(function(e) {
                    return !_()(n, e) && (A.logError(e + " missing in server to server config"), !0)
                }).length || (P = t)
            }(e.s2sConfig)
        });
        var q = {
                sponsoredBy: 1,
                body: 2,
                rating: 3,
                likes: 4,
                downloads: 5,
                price: 6,
                salePrice: 7,
                phone: 8,
                address: 9,
                body2: 10,
                cta: 12
            },
            D = Object.keys(q),
            z = {
                icon: 1,
                image: 3
            },
            M = {
                img: 1,
                js: 2
            };
        [q, z, {
            impression: 1,
            "viewable-mrc50": 2,
            "viewable-mrc100": 3,
            "viewable-video50": 4
        }, M].forEach(function(t) {
            Object.keys(t).forEach(function(e) {
                t[t[e]] = e
            })
        });
        var J = {},
            X = {},
            W = {};
        var H = {
            buildRequest: function(e, t, r) {
                var l = [],
                    b = {},
                    f = t[0];
                if (r.forEach(function(t) {
                        var e, c = Object(h.g)(A.deepAccess(t, "mediaTypes.native"));
                        if (c) try {
                            e = X[t.code] = Object.keys(c).reduce(function(e, t) {
                                var r = c[t];

                                function i(e) {
                                    return T({
                                        required: r.required ? 1 : 0
                                    }, e ? A.cleanObj(e) : {})
                                }
                                switch (t) {
                                    case "image":
                                    case "icon":
                                        var n = z[t],
                                            a = A.cleanObj({
                                                type: n,
                                                w: A.deepAccess(r, "sizes.0"),
                                                h: A.deepAccess(r, "sizes.1"),
                                                wmin: A.deepAccess(r, "aspect_ratios.0.min_width"),
                                                hmin: A.deepAccess(r, "aspect_ratios.0.min_height")
                                            });
                                        if (!(a.w && a.h || a.hmin && a.wmin)) throw "invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";
                                        Array.isArray(r.aspect_ratios) && (a.ext = {
                                            aspectratios: r.aspect_ratios.map(function(e) {
                                                return "".concat(e.ratio_width, ":").concat(e.ratio_height)
                                            })
                                        }), e.push(i({
                                            img: a
                                        }));
                                        break;
                                    case "title":
                                        if (!r.len) throw "invalid title.len";
                                        e.push(i({
                                            title: {
                                                len: r.len
                                            }
                                        }));
                                        break;
                                    default:
                                        var s = q[t];
                                        s && e.push(i({
                                            data: {
                                                type: s,
                                                len: r.len
                                            }
                                        }))
                                }
                                return e
                            }, [])
                        } catch (e) {
                            A.logError("error creating native request: " + String(e))
                        }
                        var r = A.deepAccess(t, "mediaTypes.video"),
                            i = A.deepAccess(t, "mediaTypes.banner");
                        t.bids.forEach(function(e) {
                            J["".concat(t.code).concat(e.bidder)] = e.bid_id, y.default.aliasRegistry[e.bidder] && (b[e.bidder] = y.default.aliasRegistry[e.bidder])
                        });
                        var n, a = {};
                        if (i && i.sizes && (n = A.parseSizesInput(i.sizes).map(function(e) {
                                var t = C(e.split("x"), 2),
                                    r = t[0],
                                    i = t[1];
                                return {
                                    w: parseInt(r, 10),
                                    h: parseInt(i, 10)
                                }
                            }), a.banner = {
                                format: n
                            }), A.isEmpty(r) || ("outstream" !== r.context || t.renderer ? a.video = r : A.logError("Outstream bid without renderer cannot be sent to Prebid Server.")), e) try {
                            a.native = {
                                request: JSON.stringify({
                                    context: 1,
                                    plcmttype: 1,
                                    eventtrackers: [{
                                        event: 1,
                                        methods: [1]
                                    }],
                                    assets: e
                                }),
                                ver: "1.2"
                            }
                        } catch (e) {
                            A.logError("error creating native request: " + String(e))
                        }
                        var s = t.bids.reduce(function(e, t) {
                                var r = y.default.bidderRegistry[t.bidder];
                                return r && r.getSpec().transformBidParams && (t.params = r.getSpec().transformBidParams(t.params, !0)), e[t.bidder] = P.adapterOptions && P.adapterOptions[t.bidder] ? T({}, t.params, P.adapterOptions[t.bidder]) : t.params, e
                            }, {}),
                            d = {
                                id: t.code,
                                ext: s,
                                secure: P.secure
                            },
                            o = A.deepAccess(t, "fpd.context.pbAdSlot");
                        "string" == typeof o && o && A.deepSetValue(d, "ext.context.data.pbadslot", o);
                        var p = A.deepAccess(t, "fpd.context.adServer.adSlot");
                        "string" == typeof p && p && A.deepSetValue(d, "ext.context.data.adslot", p), T(d, a);
                        var u = I()(f.bids, function(e) {
                            return e.adUnitCode === t.code && e.storedAuctionResponse
                        });
                        u && A.deepSetValue(d, "ext.prebid.storedauctionresponse.id", u.storedAuctionResponse.toString()), (d.banner || d.video || d.native) && l.push(d)
                    }), l.length) {
                    var i = {
                        id: e.tid,
                        source: {
                            tid: e.tid
                        },
                        tmax: P.timeout,
                        imp: l,
                        test: B("debug") ? 1 : 0,
                        ext: {
                            prebid: {
                                auctiontimestamp: f.auctionStart,
                                targeting: {
                                    includewinners: !0,
                                    includebidderkeys: !1
                                }
                            }
                        }
                    };
                    P.extPrebid && "object" === U(P.extPrebid) && (i.ext.prebid = T(i.ext.prebid, P.extPrebid));
                    var n, a, s = m.b.getConfig("currency.adServerCurrency");
                    s && "string" == typeof s ? i.cur = [s] : Array.isArray(s) && s.length && (i.cur = [s[0]]), n = i, a = f.refererInfo.referer, n && ("object" === U(m.b.getConfig("app")) ? (n.app = m.b.getConfig("app"), n.app.publisher = {
                        id: P.accountId
                    }) : (n.site = {}, A.isPlainObject(m.b.getConfig("site")) && (n.site = m.b.getConfig("site")), A.deepAccess(n.site, "publisher.id") || A.deepSetValue(n.site, "publisher.id", P.accountId), n.site.page || (n.site.page = a)), "object" === U(m.b.getConfig("device")) && (n.device = m.b.getConfig("device")), n.device || (n.device = {}), n.device.w || (n.device.w = window.innerWidth), n.device.h || (n.device.h = window.innerHeight));
                    var c = A.deepAccess(t, "0.bids.0.schain");
                    c && (i.source.ext = {
                        schain: c
                    }), A.isEmpty(b) || (i.ext.prebid.aliases = b);
                    var d, o = A.deepAccess(t, "0.bids.0.userIdAsEids");
                    A.isArray(o) && 0 < o.length && A.deepSetValue(i, "user.ext.eids", o), t && (f.gdprConsent && ("boolean" == typeof f.gdprConsent.gdprApplies && (d = f.gdprConsent.gdprApplies ? 1 : 0), A.deepSetValue(i, "regs.ext.gdpr", d), A.deepSetValue(i, "user.ext.consent", f.gdprConsent.consentString)), f.uspConsent && A.deepSetValue(i, "regs.ext.us_privacy", f.uspConsent)), !0 === B("coppa") && A.deepSetValue(i, "regs.coppa", 1);
                    var p, u, g, v = B("fpd") || {};
                    return v.context && A.deepSetValue(i, "site.ext.data", v.context), v.user && A.deepSetValue(i, "user.ext.data", v.user), p = i, u = m.b.getBidderConfig(), (g = Object.keys(u).reduce(function(e, t) {
                        var r, i = u[t];
                        return i.fpd && (r = {}, i.fpd.context && (r.site = i.fpd.context), i.fpd.user && (r.user = i.fpd.user), e.push({
                            bidders: [t],
                            config: {
                                fpd: r
                            }
                        })), e
                    }, [])).length && A.deepSetValue(p, "ext.prebid.bidderconfig", g), i
                }
                A.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")
            },
            interpretResponse: function(h, S) {
                var x = [];
                return h.seatbid && h.seatbid.forEach(function(y) {
                    (y.bid || []).forEach(function(e) {
                        var t, r = "".concat(e.impid).concat(y.seat);
                        J[r] && (t = A.getBidRequest(J[r], S));
                        var i = e.price,
                            n = 0 !== i ? j.STATUS.GOOD : j.STATUS.NO_BID,
                            a = Object(O.a)(n, t || {
                                bidder: y.seat,
                                src: R
                            });
                        a.cpm = i;
                        var s = A.deepAccess(h, ["ext", "responsetimemillis", y.seat].join("."));
                        t && s && (t.serverResponseTimeMs = s);
                        var c, d, o, p = A.deepAccess(e, "ext.prebid.bidid");
                        A.isStr(p) && (a.pbsBidId = p), A.isStr(A.deepAccess(e, "ext.prebid.events.win")) && (c = t.auctionId, d = a.adId, o = A.deepAccess(e, "ext.prebid.events.win"), [c, d].every(A.isStr) && (W["".concat(c).concat(d)] = o));
                        var u, l, b, f, g, v = A.deepAccess(e, "ext.prebid.targeting");
                        A.isPlainObject(v) && (A.isStr(A.deepAccess(e, "ext.prebid.events.win")) && (v = A.getDefinedParams(v, Object.keys(v).filter(function(e) {
                            return -1 === e.indexOf("hb_winurl") && -1 === e.indexOf("hb_bidid")
                        }))), a.adserverTargeting = v), a.seatBidId = e.id, A.deepAccess(e, "ext.prebid.type") === w.d ? (a.mediaType = w.d, u = t.sizes && t.sizes[0], a.playerHeight = u[0], a.playerWidth = u[1], e.ext.prebid.cache && "object" === U(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (a.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, a.vastUrl = e.ext.prebid.cache.vastXml.url) : v && v.hb_uuid && v.hb_cache_host && v.hb_cache_path && (a.videoCacheKey = v.hb_uuid, a.vastUrl = "https://".concat(v.hb_cache_host).concat(v.hb_cache_path, "?uuid=").concat(v.hb_uuid)), e.adm && (a.vastXml = e.adm), !a.vastUrl && e.nurl && (a.vastUrl = e.nurl)) : A.deepAccess(e, "ext.prebid.type") === w.c ? (a.mediaType = w.c, b = "string" == typeof e.adm ? a.adm = JSON.parse(e.adm) : a.adm = e.adm, k(l = {}, M.img, b.imptrackers || []), k(l, M.js, b.jstracker ? [b.jstracker] : []), f = l, b.eventtrackers && b.eventtrackers.forEach(function(e) {
                            switch (e.method) {
                                case M.img:
                                    f[M.img].push(e.url);
                                    break;
                                case M.js:
                                    f[M.js].push(e.url)
                            }
                        }), A.isPlainObject(b) && Array.isArray(b.assets) ? (g = X[t.adUnitCode], a.native = A.cleanObj(b.assets.reduce(function(t, r) {
                            var i = g[r.id];
                            return A.isPlainObject(r.img) ? t[i.img.type ? z[i.img.type] : "image"] = A.pick(r.img, ["url", "w as width", "h as height"]) : A.isPlainObject(r.title) ? t.title = r.title.text : A.isPlainObject(r.data) && D.forEach(function(e) {
                                q[e] === i.data.type && (t[e] = r.data.value)
                            }), t
                        }, A.cleanObj({
                            clickUrl: b.link,
                            clickTrackers: A.deepAccess(b, "link.clicktrackers"),
                            impressionTrackers: f[M.img],
                            javascriptTrackers: f[M.js]
                        })))) : A.logError("prebid server native response contained no assets")) : e.adm && e.nurl ? (a.ad = e.adm, a.ad += A.createTrackPixelHtml(decodeURIComponent(e.nurl))) : e.adm ? a.ad = e.adm : e.nurl && (a.adUrl = e.nurl), a.width = e.w, a.height = e.h, e.dealid && (a.dealId = e.dealid), a.requestId = t.bidId || t.bid_Id, a.creative_id = e.crid, a.creativeId = e.crid, e.burl && (a.burl = e.burl), a.currency = h.cur ? h.cur : "USD", a.meta = a.meta || {}, e.adomain && (a.meta.advertiserDomains = e.adomain);
                        var m = P.defaultTtl || 60;
                        a.ttl = e.ttl ? e.ttl : m, a.netRevenue = !e.netRevenue || e.netRevenue, x.push({
                            adUnit: e.impid,
                            bid: a
                        })
                    })
                }), x
            }
        };

        function u(e) {
            var t, r, i = function(e, t) {
                if ([e, t].every(A.isStr)) return W["".concat(e).concat(t)]
            }(e.auctionId, e.adId);
            A.isStr(i) && (A.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(i, '"')), A.triggerPixel(i), t = e.auctionId, r = e.adId, [t, r].every(A.isStr) && (W["".concat(t).concat(r)] = void 0))
        }

        function l() {
            var e = new i.a("prebidServer");
            return e.callBids = function(e, t, r, i, n) {
                var a, s, c, d, o, p, u, l, b, f = A.deepClone(e.ad_units).filter(function(e) {
                        return e.mediaTypes && (e.mediaTypes.native || e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.mediaTypes.video && e.mediaTypes.video.playerSize)
                    }),
                    g = f.map(function(e) {
                        return e.bids.map(function(e) {
                            return e.bidder
                        }).filter(A.uniques)
                    }).reduce(A.flatten).filter(A.uniques);
                P && P.syncEndpoint && (Array.isArray(t) && 0 < t.length && (a = t[0].gdprConsent, s = t[0].uspConsent), c = P.bidders.map(function(e) {
                    return y.default.aliasRegistry[e] || e
                }).filter(function(e, t, r) {
                    return r.indexOf(e) === t
                }), d = c, o = a, p = s, V || (V = !0, u = {
                    uuid: A.generateUUID(),
                    bidders: d,
                    account: P.accountId
                }, l = P.userSyncLimit, A.isNumber(l) && 0 < l && (u.limit = l), o && (void 0 !== o.consentString && (u.gdpr = o.gdprApplies ? 1 : 0), !1 !== o.gdprApplies && (u.gdpr_consent = o.consentString)), p && (u.us_privacy = p), b = JSON.stringify(u), Object(E.a)(P.syncEndpoint, function(e) {
                    try {
                        N((e = JSON.parse(e)).bidder_status)
                    } catch (e) {
                        A.logError(e)
                    }
                }, b, {
                    contentType: "text/plain",
                    withCredentials: !0
                })));
                var v = H.buildRequest(e, t, f),
                    m = v && JSON.stringify(v);
                v && m && n(P.endpoint, {
                    success: function(e) {
                        return function(e, t, i, n, r) {
                            var a;
                            try {
                                a = JSON.parse(e), H.interpretResponse(a, i, t).forEach(function(e) {
                                    
                                    var t = e.adUnit,
                                        r = e.bid;
                                    Object(S.isValid)(t, r, i) && n(t, r)
                                }), i.forEach(function(e) {
                                    return x.a.emit(j.EVENTS.BIDDER_DONE, e)
                                })
                            } catch (e) {
                                A.logError(e)
                            }(!a || a.status && _()(a.status, "Error")) && A.logError("error parsing response: ", a.status);
                            r(),
                                function(e) {
                                    e.forEach(function(e) {
                                        var t = y.default.getBidAdapter(e);
                                        t && t.registerSyncs && t.registerSyncs([])
                                    })
                                }(t)
                        }(e, g, t, r, i)
                    },
                    error: i
                }, m, {
                    contentType: "text/plain",
                    withCredentials: !0
                })
            }, x.a.on(j.EVENTS.BID_WON, u), T(this, {
                callBids: e.callBids,
                setBidderCode: e.setBidderCode,
                type: R
            })
        }
        y.default.registerBidAdapter(new l, "prebidServer")
    },
    613: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var i = {
            appnexus: {
                adapter: "prebidServer",
                enabled: !0,
                endpoint: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                syncEndpoint: "https://prebid.adnxs.com/pbs/v1/cookie_sync",
                timeout: 1e3
            },
            rubicon: {
                adapter: "prebidServer",
                enabled: !0,
                endpoint: "https://prebid-server.rubiconproject.com/openrtb2/auction",
                syncEndpoint: "https://prebid-server.rubiconproject.com/cookie_sync",
                timeout: 500
            }
        }
    }
}, [611]);
pbjs.processQueue();