parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "D9Nj": [function(require, module, exports) {

    }, {}],
    "dlFs": [function(require, module, exports) {
        function e(e, n, t, i, o, r, a) {
            try {
                var d = e[r](a),
                    s = d.value
            } catch (l) {
                return void t(l)
            }
            d.done ? n(s) : Promise.resolve(s).then(i, o)
        }

        function n(n) {
            return function() {
                var t = this,
                    i = arguments;
                return new Promise(function(o, r) {
                    var a = n.apply(t, i);

                    function d(n) {
                        e(a, o, r, d, s, "next", n)
                    }

                    function s(n) {
                        e(a, o, r, d, s, "throw", n)
                    }
                    d(void 0)
                })
            }
        }! function() {
            function e() {
                var e = {
                    scale: .85,
                    delay: 150,
                    anchorOnly: !0,
                    alignLeft: !1
                };
                window.nwdbConfig && (window.nwdbConfig.hasOwnProperty("scale") && (e.scale = window.nwdbConfig.scale), window.nwdbConfig.hasOwnProperty("delay") && (e.delay = window.nwdbConfig.delay), window.nwdbConfig.hasOwnProperty("anchorOnly") && (e.anchorOnly = window.nwdbConfig.anchorOnly), window.nwdbConfig.hasOwnProperty("alignLeft") && (e.alignLeft = window.nwdbConfig.alignLeft));
                var t = "https://nwdb.info",
                    i = document.createElement("iframe");
                i.scrolling = "no", i.sandbox = "allow-scripts allow-popups allow-same-origin", i.style.opacity = 0, i.style.position = "fixed", i.style.height = "500px", i.style.width = "416px", i.style.zIndex = -100, i.style.pointerEvents = "none", i.style.transform = "scale(" + e.scale + ")", i.style.transformOrigin = "top left", i.style.marginLeft = "15px", i.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.75)", i.style.webkitBoxShadow = "0px 0px 0px 1px rgba(0,0,0,0.75)", i.style.border = "none", document.body.appendChild(i);
                var o, r, a, d, s, l = !1;

                function c(e) {
                    var t;
                    e ? (t = n(regeneratorRuntime.mark(function e(n) {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    l = !0, (t = new URL(n)).searchParams.set("embed", "true"), "blissful-bell-d04f3c.netlify.app" === window.location.host && t.searchParams.set("mode", "minimal"), i.src = t.toString(), setTimeout(f, 0);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    })(new URL(e)) : u()
                }
                window.addEventListener("message", function(e) {
                    var n = e.data;
                    n && "nwdb-embed-resize" === n.type && (i.style.height = n.height + 0 + "px", l && (f(), i.style.opacity = 1, i.style.zIndex = 9e4))
                }, !1);
                var w = "ontouchstart" in document.documentElement && /mobi/i.test(navigator.userAgent);

                function u() {
                    l && i.removeAttribute("src"), l = !1, i.style.opacity = 0, i.style.zIndex = -100
                }

                function f() {
                    if (i) {
                        d = r, s = a;
                        var n = i.offsetHeight * e.scale,
                            t = i.offsetWidth * e.scale + 15;
                        e.alignLeft && (d -= t), s + n > window.innerHeight && (s = window.innerHeight - n), e.alignLeft ? d < 0 && (d = -15) : d + t > window.innerWidth && (d = window.innerWidth - t), i.style.top = s + "px", i.style.left = d + "px"
                    }
                }
                window.addEventListener("mousemove", function(n) {
                    if (!w) {
                        r = n.clientX, a = n.clientY;
                        var i = function(e) {
                            for (; e && "A" !== e.nodeName.toUpperCase() && "AREA" !== e.nodeName.toUpperCase();) e = e.parentNode;
                            if (e) {
                                var n = e.href;
                                if (n && (n.includes(t + "/db/item/") || n.includes(t + "/db/perk/") || n.includes(t + "/db/ability/") || n.includes(t + "/db/quest/") || n.includes(t + "/db/recipe/") || n.includes(t + "/db/gatherable/") || n.includes(t + "/db/npc/") || n.includes(t + "/db/creature/"))) return n
                            }
                            return !1
                        }(n.target);
                        i ? (clearTimeout(o), o = setTimeout(function() {
                            l || c(i)
                        }, e.delay), f()) : (clearTimeout(o), u())
                    }
                })
            }
            "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", function(n) {
                e()
            })
        }();
    }, {}],
    "H99C": [function(require, module, exports) {
        "use strict";
        require("./styles.css"), require("./embed"), document.getElementById("app").innerHTML = '\n<a style="\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n  padding: 0 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: white;\n  background-color: rgb(21, 21, 21);\n  cursor: pointer;\n  border: 1px solid rgb(52,52,52);\n  border-radius: 4px;\n  text-decoration: none;\n  font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: antialiased;\n  z-index: 99999999999;\n" href="https://github.com/icueMike/New-World-Embed-Script" target="_blank" rel="noopener noreferrer">Open Github</a> <iframe src="https://ghbtns.com/github-btn.html?user=icueMike&repo=NewWorld-ToolTip-Embedder&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>\n\n<h1>Hello Tool Tip!</h1>\n<div>\n<center>\nHover your mouse over this tool tip here ???? <a href="https://nwdb.info/db/item/potionfocust4"><b>Infused Focus Potion</b></a>\n</center><br />\n</div>\n';
    }, {
        "./styles.css": "D9Nj",
        "./embed": "dlFs"
    }]
}, {}, ["H99C"], null)
//# sourceMappingURL=/csb-jyvgx/src.8d6701cf.js.map
