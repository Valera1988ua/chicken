(() => {
    var __webpack_modules__ = {
        125: module => {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }(self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        8741: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = i;
                        },
                        3976: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                            t.default = r;
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i) {
                                if (void 0 === i) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = i;
                            };
                        },
                        3776: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var i, a;
                                function n(e, t, n) {
                                    if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), 
                                    "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1);
                                }
                                function r(e, a) {
                                    var n, r, o = [];
                                    if (e.length > 0) if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: i[e][a][n]
                                    }); else o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: t
                                    }); else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, 
                                    r = i[l][s].length; n < r; n++) o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: i[l][s][n]
                                    }); else o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: t
                                    });
                                    return o;
                                }
                                if (u(this[0]) && e) {
                                    i = this[0].eventRegistry, a = this[0];
                                    for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                                }
                                return this;
                            }, t.on = function(e, t) {
                                function i(e, i) {
                                    n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                                    a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
                                }
                                if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                                    var l = r[o].split("."), s = l[0], c = l[1] || "global";
                                    i(s, c);
                                }
                                return this;
                            }, t.trigger = function(e) {
                                if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < a.length; r++) {
                                    var l = a[r].split("."), s = l[0], c = l[1] || "global";
                                    if (void 0 !== document && "global" === c) {
                                        var f, d, p = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            detail: arguments[1]
                                        };
                                        if (document.createEvent) {
                                            try {
                                                if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p); else f = new CustomEvent(s, p);
                                            } catch (e) {
                                                (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                                            }
                                            e.type && (0, n.default)(f, e), i.dispatchEvent(f);
                                        } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], 
                                        e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
                                    } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                                    arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments); else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
                                }
                                return this;
                            };
                            var a, n = s(i(600)), r = s(i(9380)), o = s(i(4963)), l = s(i(8741));
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function u(e) {
                                return e instanceof Element;
                            }
                            t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: void 0
                                };
                                var i = document.createEvent("CustomEvent");
                                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                            }, a.prototype = r.default.Event.prototype);
                        },
                        600: function(e, t) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, a, n, r, o, l, s = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                                "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
                                "object" !== i(s) && "function" != typeof s && (s = {});
                                for (;u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], 
                                s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                                s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));
                                return s;
                            };
                        },
                        4963: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a = l(i(600)), n = l(i(9380)), r = l(i(253)), o = i(3776);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = n.default.document;
                            function u(e) {
                                return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                            }
                            u.prototype = {
                                on: o.on,
                                off: o.off,
                                trigger: o.trigger
                            }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
                            var c = u;
                            t.default = c;
                        },
                        9845: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                            var a, n = (a = i(9380)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, l = "ontouchstart" in n.default, s = /iemobile/i.test(r), u = /iphone/i.test(r) && !s;
                            t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(i, "\\$1");
                            };
                            var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var a, n = i(8711), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(9845), l = i(7215), s = i(7760), u = i(4713);
                            function c(e, t) {
                                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!i) {
                                    if (Array.isArray(e) || (i = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return f(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        i && (e = i);
                                        var a = 0, n = function() {};
                                        return {
                                            s: n,
                                            n: function() {
                                                return a >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[a++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: n
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, l = !1;
                                return {
                                    s: function() {
                                        i = i.call(e);
                                    },
                                    n: function() {
                                        var e = i.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        l = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw r;
                                        }
                                    }
                                };
                            }
                            function f(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            var d = {
                                keydownEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib, c = t.maskset, f = this, d = a(f), p = e.keyCode, h = n.caret.call(t, f), v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
                                    if (void 0 !== v) return v;
                                    if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                                    l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                                        e.preventDefault();
                                        var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                                        n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                                    } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                                    n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, 
                                    s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                                    !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                                    h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                                    h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                                    n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                                        var e = n.caret.call(t, f);
                                        n.caret.call(t, f, e.begin);
                                    }), 0) : p === r.default.LEFT && setTimeout((function() {
                                        var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                                        n.translatePosition.call(t, f.inputmask.caretPos.end);
                                        t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                                    }), 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, 
                                    n.caret.call(t, f, h.begin, h.begin));
                                    t.ignorable = i.ignorables.includes(p);
                                },
                                keypressEvent: function(e, t, i, a, o) {
                                    var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.keyCode;
                                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0)), u.skipInputEvent = !0, !0;
                                    if (v) {
                                        44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                                        var m, g = t ? {
                                            begin: o,
                                            end: o
                                        } : n.caret.call(u, p), k = String.fromCharCode(v);
                                        k = c.substitutes[k] || k, d.writeOutBuffer = !0;
                                        var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);
                                        if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                                        d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                                        !1 !== i && (setTimeout((function() {
                                            c.onKeyValidation.call(p, v, y);
                                        }), 0), d.writeOutBuffer && !1 !== y)) {
                                            var b = n.getBuffer.call(u);
                                            (0, s.writeBuffer)(p, b, m, e, !0 !== t);
                                        }
                                        if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                    }
                                },
                                keyupEvent: function(e) {
                                    var t = this.inputmask;
                                    !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                                },
                                pasteEvent: function(e) {
                                    var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                                    i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                                    var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                                    if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                                    u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                                    window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                                        if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                        r = l + e.clipboardData.getData("text/plain") + u;
                                    }
                                    var f = r;
                                    if (i.isRTL) {
                                        f = f.split("");
                                        var d, p = c(n.getBufferTemplate.call(i));
                                        try {
                                            for (p.s(); !(d = p.n()).done; ) {
                                                var h = d.value;
                                                f[0] === h && f.shift();
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                        f = f.join("");
                                    }
                                    if ("function" == typeof a.onBeforePaste) {
                                        if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                                        f || (f = r);
                                    }
                                    (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                                },
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                                    var l = this, c = l.inputmask._valueGet(!0), f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, l, void 0, void 0, !0);
                                    if (f !== c) {
                                        c = function(e, i, a) {
                                            if (o.iemobile) {
                                                var r = i.replace(n.getBuffer.call(t).join(""), "");
                                                if (1 === r.length) {
                                                    var l = i.split("");
                                                    l.splice(a.begin, 0, r), i = l.join("");
                                                }
                                            }
                                            return i;
                                        }(0, c, p);
                                        var h = function(e, a, r) {
                                            for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                            for (;d.length < h; ) d.push(k);
                                            for (;f.length < v; ) f.unshift(k);
                                            for (;p.length < v; ) p.unshift(k);
                                            var y = c.concat(f), b = d.concat(p);
                                            for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), 
                                            m) {
                                              case "insertText":
                                                b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                y[l] === k ? r.end++ : l = o;
                                                break;

                                              default:
                                                y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", 
                                                g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: r
                                            };
                                        }(c, f, p);
                                        switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), 
                                        (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), 
                                        h.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            h.data.forEach((function(e, i) {
                                                var n = new a.Event("keypress");
                                                n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var v = new a.Event("keydown");
                                            v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                                            break;

                                          default:
                                            (0, s.applyInputValue)(l, c);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                compositionendEvent: function(e) {
                                    var t = this.inputmask;
                                    t.isComposing = !1, t.$el.trigger("input");
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                                    i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                                    !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [ e, !0 ]), 
                                    t.undoValue = t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                                    s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var i = this.inputmask, a = this;
                                    if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                                        var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                                        void 0 !== r && n.caret.call(i, a, r);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, i = t.maskset, a = this, o = n.caret.call(t, a), u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end), c = t.isRTL ? u.reverse().join("") : u.join("");
                                    window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), 
                                    l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = (0, t.dependencyLib)(this), r = this;
                                    if (r.inputmask) {
                                        (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);
                                        var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                                        "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                                        !1 === l.isComplete.call(t, u) && (setTimeout((function() {
                                            a.trigger("incomplete");
                                        }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                                        (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                                        a.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                                        var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                                        e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                                        t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, s.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                            t.EventHandlers = d;
                        },
                        9716: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var a = l(i(2394)), n = l(i(5581)), r = i(8711), o = i(7760);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = {
                                on: function(e, t, i) {
                                    var l = e.inputmask.dependencyLib, s = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var s, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                                        if (void 0 === c && "FORM" !== this.nodeName) {
                                            var d = l.data(u, "_inputmask_opts");
                                            l(u).off(), d && new a.default(d).mask(u);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                                    t.preventDefault();
                                                    break;

                                                  case "keydown":
                                                    c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                                    break;

                                                  case "keyup":
                                                  case "compositionend":
                                                    c.isComposing && (c.skipInputEvent = !1);
                                                    break;

                                                  case "keypress":
                                                    if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                                    c.skipKeyPressEvent = !0;
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (s = arguments, setTimeout((function() {
                                                        e.inputmask && i.apply(u, s);
                                                    }), 0), !1);
                                                }
                                                var p = i.apply(u, arguments);
                                                return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                                        for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                            for (var r = a[n]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                            }
                                            delete e.inputmask.events[n];
                                        }
                                    }
                                }
                            };
                            t.EventRuler = s;
                        },
                        219: function(e, t, i) {
                            var a = d(i(2394)), n = d(i(5581)), r = d(i(7184)), o = i(8711), l = i(4713);
                            function s(e) {
                                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, s(e);
                            }
                            function u(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null == i) return;
                                    var a, n, r = [], o = !0, l = !1;
                                    try {
                                        for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                                    } catch (e) {
                                        l = !0, n = e;
                                    } finally {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw n;
                                        }
                                    }
                                    return r;
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            function f(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var p = a.default.dependencyLib, h = function() {
                                function e(t, i, a) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts);
                                }
                                var t, i, a;
                                return t = e, (i = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                            if (void 0 !== e) {
                                                if (a) {
                                                    var o = P(t).lastIndex, l = O(i.index, t);
                                                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                                                } else r = e.slice(0, n.length);
                                                e = e.slice(r.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, i, a, n) {
                                        if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), 
                                        void 0 !== n) {
                                            var r = e[a];
                                            ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), 
                                            "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), 
                                            "ampm" === a && n.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, i), a && f(t, a), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = !1, g = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return _(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return _(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ "" ],
                                mmmm: [ "" ],
                                yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 2);
                                } ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 4);
                                } ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return _(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return _(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return _(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 3);
                                } ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 2);
                                } ],
                                t: [ "[ap]", y, "ampm", b, 1 ],
                                tt: [ "[ap]m", y, "ampm", b, 2 ],
                                T: [ "[AP]", y, "ampm", b, 1 ],
                                TT: [ "[AP]M", y, "ampm", b, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return u(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, k = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function y(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function b() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function x(e) {
                                var t = new RegExp("\\d+$").exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var i = g[e[0][0] + "x"].slice("");
                                    return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                                }
                                if (g[e[0]]) return g[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], i = [];
                                    for (var a in g) if (/\.*x$/.test(a)) {
                                        var n = a[0] + "\\d+";
                                        -1 === i.indexOf(n) && i.push(n);
                                    } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                                    e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function E(e, t, i) {
                                if (!m) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var a = O(t.pos, i);
                                    if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function S(e, t, i, a) {
                                var n, o, l = "";
                                for (P(i).lastIndex = 0; n = P(i).exec(e); ) if (void 0 === t) if (o = x(n)) l += "(" + o[0] + ")"; else switch (n[0]) {
                                  case "[":
                                    l += "(";
                                    break;

                                  case "]":
                                    l += ")?";
                                    break;

                                  default:
                                    l += (0, r.default)(n[0]);
                                } else if (o = x(n)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += n[0]; else l += n[0];
                                return l;
                            }
                            function _(e, t, i) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                                return e;
                            }
                            function w(e, t, i) {
                                return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function M(e, t) {
                                return S(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function O(e, t) {
                                var i, a, n = 0, r = 0;
                                for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                                    var o = new RegExp("\\d+$").exec(a[0]);
                                    if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                                        i = a, a = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: n - r,
                                    nextMatch: a,
                                    targetMatch: i
                                };
                            }
                            a.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                                        e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    i18n: {
                                        dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                        monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                        ordinalSuffix: [ "st", "nd", "rd", "th" ]
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (l) return !0;
                                        if (isNaN(i) && e[t] !== i) {
                                            var s = O(t, n);
                                            if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                                                var u = g[s.targetMatch[0]][0];
                                                if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, i, a, n, r, o, s) {
                                        var u, c;
                                        if (o) return !0;
                                        if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), 
                                        void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, 
                                        e[t + 1] = "0", a = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                            pos: t + 2
                                        })), !1 === a)) return a;
                                        if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                                            var f = g[u.targetMatch[0]];
                                            c = f[0];
                                            var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                                            if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), 
                                            "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                            delete r.validPositions[h];
                                        }
                                        var m = a, k = w(e.join(""), n.inputFormat, n);
                                        return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function(e, t, i) {
                                            if (e.year !== e.rawyear) {
                                                var a = v.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                                if (2 === n.length && n === r) {
                                                    var l = new Date(v, e.month - 1, e.day);
                                                    e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = a, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(k, m, n)), m = function(e, t, i, a, n) {
                                            if (!t) return t;
                                            if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                                var r;
                                                for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                                    var o;
                                                    if ((o = x(r)) && o[3]) {
                                                        for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], 
                                                        d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));
                                                        l.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), 
                                            t;
                                        }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                                            buffer: S(n.inputFormat, k, n).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: a.pos
                                            },
                                            pos: a.caret || a.pos
                                        } : m;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date, a)), 
                                        p(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, i) {
                                        return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
                                    },
                                    casing: function(e, t, i, a) {
                                        return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
                                    },
                                    insertMode: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        3851: function(e, t, i) {
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(4713);
                            n.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                            function s(e, t, i, a, n) {
                                return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                                l.test(e);
                            }
                            n.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: s
                                        },
                                        j: {
                                            validator: s
                                        },
                                        k: {
                                            validator: s
                                        },
                                        l: {
                                            validator: s
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", i = t;
                                        if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
                                        return i;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, i, a, n, l, s) {
                                        var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, i) {
                            var a = l(i(2394)), n = l(i(5581)), r = l(i(7184)), o = i(8711);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = a.default.dependencyLib;
                            function u(e, t) {
                                for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                                return i;
                            }
                            function c(e, t, i, a) {
                                if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                                    var n = e.indexOf(i.radixPoint), r = !1;
                                    i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                                    n = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                                }
                                return r && e.push(i.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var i = 0;
                                if ("+" === e) {
                                    for (i in t.validPositions) ;
                                    i = o.seekNext.call(this, parseInt(i));
                                }
                                for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                                return i;
                            }
                            function d(e, t) {
                                var i = -1;
                                for (var a in t.validPositions) {
                                    var n = t.validPositions[a];
                                    if (n && n.match.def === e) {
                                        i = parseInt(a);
                                        break;
                                    }
                                }
                                return i;
                            }
                            function p(e, t, i, a, n) {
                                var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                                return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === i ? r + 1 : r,
                                        c: n.radixPoint
                                    },
                                    pos: i
                                } : o;
                            }
                            a.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", i = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var a, n = "[+]";
                                        if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return n += u(e.suffix, e), n += "[-]", a && (n = [ a + u(e.suffix, e) + "[-]", n ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        n;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    definitions: {
                                        0: {
                                            validator: p
                                        },
                                        1: {
                                            validator: p,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && e === n.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                                        var s = e.indexOf(n.radixPoint), u = t;
                                        if (t = function(e, t, i, a, n) {
                                            return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                                            if (!0 !== n.allowMinus) return !1;
                                            var c = !1, p = d("+", r), h = d("-", r);
                                            return -1 !== p && (c = [ p, h ]), !1 !== c ? {
                                                remove: c,
                                                caret: u - n.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(this, "+", r),
                                                    c: n.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(this, "-", r),
                                                    c: n.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: u + n.negationSymbol.back.length
                                            };
                                        }
                                        if (i === n.groupSeparator) return {
                                            caret: u
                                        };
                                        if (l) return !0;
                                        if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                                            caret: n._radixDance && t === s - 1 ? s + 1 : s
                                        };
                                        if (!1 === n.__financeInput) if (a) {
                                            if (n.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!n.digitsOptional) {
                                                if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                                                    insert: {
                                                        pos: s + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: s
                                                } : {
                                                    rewritePosition: s + 1
                                                };
                                                if (o.begin < s) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: s
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, i, a, n, r, o) {
                                        if (!1 === a) return a;
                                        if (o) return !0;
                                        if (null !== n.min || null !== n.max) {
                                            var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                                            if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                            };
                                        }
                                        return a;
                                    },
                                    onUnMask: function(e, t, i) {
                                        if ("" === t && !0 === i.nullable) return t;
                                        var a = e.replace(i.prefix, "");
                                        return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), 
                                        "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), 
                                        a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                                    },
                                    isComplete: function(e, t) {
                                        var i = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                                        r.default)(t.radixPoint), ".")), isFinite(i);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var i = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                                        var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(i), o = n[0].replace(/[^\-0-9]/g, ""), l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", s = n.length > 1;
                                        e = o + ("" !== l ? i + l : l);
                                        var u = 0;
                                        if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, 
                                        "" !== l || !t.digitsOptional)) {
                                            var f = Math.pow(10, u || 1);
                                            e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                            e = e.toString().replace(".", i);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(i, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                                        }
                                        return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
                                    },
                                    onBeforeWrite: function(e, t, i, a) {
                                        function n(e, t) {
                                            if (!1 !== a.__financeInput || t) {
                                                var i = e.indexOf(a.radixPoint);
                                                -1 !== i && e.splice(i, 1);
                                            }
                                            if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                            return e;
                                        }
                                        var o, l;
                                        if (a.stripLeadingZeroes && (l = function(e, t) {
                                            var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", n = !1;
                                            return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                            !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
                                        }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                                        delete t[u + d];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== a.min) {
                                                var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== a.min && p < a.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === a.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                                r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                                r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== a.radixPoint) t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: n(t)
                                            }));
                                            if (a.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        var r, o, l = s(this), u = String.fromCharCode(e.keyCode).toLowerCase();
                                        if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), 
                                        l.trigger("setvalue"), !1;
                                        if (e.ctrlKey) switch (e.keyCode) {
                                          case n.default.UP:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;

                                          case n.default.DOWN:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                            if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), 
                                            "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), 
                                            l.trigger("setvalue", [ r.join(""), i.begin ]), !1;
                                            if (!0 === a._radixDance) {
                                                var f = t.indexOf(a.radixPoint);
                                                if (a.digitsOptional) {
                                                    if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [ r.join(""), i.begin >= r.length ? r.length : i.begin ]), 
                                                    !1;
                                                } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, 
                                                (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), 
                                                l.trigger("setvalue", [ r, i.begin >= r.length ? f + 1 : i.begin ]), !1;
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t, i) {
                            var a;
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = ((a = i(8741)) && a.__esModule ? a : {
                                default: a
                            }).default ? window : {};
                            t.default = n;
                        },
                        7760: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var i = e ? e.inputmask : this;
                                if (s.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var a = o.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                                        if (n !== t) {
                                            var r = o.getLastValidPosition.call(i);
                                            -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), 
                                            p(e, a);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                var n = [], r = a.validPositions;
                                for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);
                                var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                                if ("function" == typeof i.onUnMask) {
                                    var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                                    s = i.onUnMask.call(t, u, s, i);
                                }
                                return s;
                            }, t.writeBuffer = p;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(4713), o = i(8711), l = i(7215), s = i(9845), u = i(6030);
                            function c(e, t) {
                                var i = e ? e.inputmask : this, a = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                                d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function f(e) {
                                e.length = 0;
                                for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                                return e;
                            }
                            function d(e, t, i, a, n) {
                                var s = e ? e.inputmask : this, c = s.maskset, f = s.opts, d = s.dependencyLib, h = a.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                                f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
                                    begin: m
                                };
                                var y = [], b = s.caretPos;
                                if (h.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var a = new d.Event("_checkval");
                                        a.keyCode = e.toString().charCodeAt(0), v += e;
                                        var n = o.getLastValidPosition.call(s, void 0, !0);
                                        !function(e, t) {
                                            for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1]; ) a--;
                                            var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                                                var l = o.seekNext.call(s, e);
                                                s.caretPos.begin < l && (s.caretPos = {
                                                    begin: l
                                                });
                                            }
                                            return n;
                                        }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, 
                                        v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                                        s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), 
                                        s.caretPos = {
                                            begin: g.forwardPosition,
                                            end: g.forwardPosition
                                        }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
                                    }
                                })), y.length > 0) {
                                    var x, P, E = o.seekNext.call(s, -1, void 0, !1);
                                    if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift()); ) {
                                        var _ = new d.Event("_checkval");
                                        if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), 
                                        (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                                        S++;
                                    }
                                }
                                t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), 
                                f.skipOptionalPartCharacter = k;
                            }
                            function p(e, t, i, a, r) {
                                var s = e ? e.inputmask : this, u = s.opts, c = s.dependencyLib;
                                if (a && "function" == typeof u.onBeforeWrite) {
                                    var f = u.onBeforeWrite.call(s, a, t, i, u);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var d = f.refreshFromBuffer;
                                            l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                                        }
                                        void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), 
                                !0 === r)) {
                                    var p = c(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                                        h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0, i(7149), i(3194);
                            var a = i(157), n = m(i(4963)), r = m(i(9380)), o = i(2391), l = i(4713), s = i(8711), u = i(7215), c = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                            function v(e) {
                                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, v(e);
                            }
                            function m(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var g = r.default.document, k = "_inputmask_opts";
                            function y(e, t, i) {
                                if (h.default) {
                                    if (!(this instanceof y)) return new y(e, t, i);
                                    this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                    !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                    e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                    this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                    this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                                    this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, 
                                    this.originalPlaceholder = void 0, this.isComposing = !1;
                                }
                            }
                            function b(e, t, i) {
                                var a = y.prototype.aliases[e];
                                return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                                !0) : (null === i.mask && (i.mask = e), !1);
                            }
                            y.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: p.default,
                                definitions: d.default,
                                aliases: {},
                                masksCache: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, i) {
                                        var l = n.default.extend(!0, {}, t.opts);
                                        if (function(e, t, i, a) {
                                            function o(t, n) {
                                                var o = "" === a ? t : a + "-" + t;
                                                null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                                i[t] = n);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var l, s, u, c, f = e.getAttribute(a);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                                s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                                                    u = s[c];
                                                    break;
                                                }
                                                for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                                                    if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                                                        u = s[c];
                                                        break;
                                                    }
                                                    o(l, u);
                                                }
                                            }
                                            n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(i).length;
                                        }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                                            void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), 
                                            a.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
                                    }
                                    return c.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        n.default.data(this.el, k, null);
                                        var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    s.getBufferTemplate.call(this).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    u.isComplete.call(this, s.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--) ;
                                    return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                                    var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    c.checkVal.call(this, void 0, !0, !1, i);
                                    var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    return t ? {
                                        value: a,
                                        metadata: this.getmetadata()
                                    } : a;
                                },
                                setValue: function(e) {
                                    this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: o.analyseMask
                            }, y.extendDefaults = function(e) {
                                n.default.extend(!0, y.prototype.defaults, e);
                            }, y.extendDefinitions = function(e) {
                                n.default.extend(!0, y.prototype.definitions, e);
                            }, y.extendAliases = function(e) {
                                n.default.extend(!0, y.prototype.aliases, e);
                            }, y.format = function(e, t, i) {
                                return y(t).format(e, i);
                            }, y.unmask = function(e, t) {
                                return y(t).unmaskedvalue(e);
                            }, y.isValid = function(e, t) {
                                return y(t).isValid(e);
                            }, y.remove = function(e) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, y.setValue = function(e, t) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, y.dependencyLib = n.default, r.default.Inputmask = y;
                            var x = y;
                            t.default = x;
                        },
                        5296: function(e, t, i) {
                            function a(e) {
                                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, a(e);
                            }
                            var n = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                            function l(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function s(e, t) {
                                if (t && ("object" === a(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                }(e);
                            }
                            function u(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return u = function(e) {
                                    if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                                    var i;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, a);
                                    }
                                    function a() {
                                        return c(e, arguments, p(this).constructor);
                                    }
                                    return a.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: a,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), d(a, e);
                                }, u(e);
                            }
                            function c(e, t, i) {
                                return c = f() ? Reflect.construct : function(e, t, i) {
                                    var a = [ null ];
                                    a.push.apply(a, t);
                                    var n = new (Function.bind.apply(e, a));
                                    return i && d(n, i.prototype), n;
                                }, c.apply(null, arguments);
                            }
                            function f() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function d(e, t) {
                                return d = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e;
                                }, d(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function h(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var v = n.default.document;
                            if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                                var m = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        Object.defineProperty(e, "prototype", {
                                            value: Object.create(t && t.prototype, {
                                                constructor: {
                                                    value: e,
                                                    writable: !0,
                                                    configurable: !0
                                                }
                                            }),
                                            writable: !1
                                        }), t && d(e, t);
                                    }(c, e);
                                    var t, i, a, n, o, u = (t = c, i = f(), function() {
                                        var e, a = p(t);
                                        if (i) {
                                            var n = p(this).constructor;
                                            e = Reflect.construct(a, arguments, n);
                                        } else e = a.apply(this, arguments);
                                        return s(this, e);
                                    });
                                    function c() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, c);
                                        var t = (e = u.call(this)).getAttributeNames(), i = e.attachShadow({
                                            mode: "closed"
                                        }), a = v.createElement("input");
                                        for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));
                                        var o = new r.default;
                                        return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
                                    }
                                    return a = c, n && l(a.prototype, n), o && l(a, o), Object.defineProperty(a, "prototype", {
                                        writable: !1
                                    }), a;
                                }(u(HTMLElement));
                                n.default.customElements.define("input-mask", m);
                            }
                        },
                        2391: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, i) {
                                var a, o, l, s, u, c, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new n.default, v = [], m = [], g = !1;
                                function k(e, a, n) {
                                    n = void 0 !== n ? n : e.matches.length;
                                    var o = e.matches[n - 1];
                                    if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                                        fn: new RegExp(a, i.casing ? "i" : ""),
                                        static: !1,
                                        optionality: !1,
                                        newBlockMarker: void 0 === o ? "master" : o.def !== a,
                                        casing: null,
                                        def: a,
                                        placeholder: void 0,
                                        nativeDef: a
                                    }) : (p && (a = a[a.length - 1]), a.split("").forEach((function(t, a) {
                                        o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || t,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                            nativeDef: (p ? "'" : "") + t
                                        });
                                    }))), p = !1; else {
                                        var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                                        l && !p ? e.matches.splice(n++, 0, {
                                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                                this.test = l.validator;
                                            } : new RegExp("."),
                                            static: l.static || !1,
                                            optionality: l.optional || !1,
                                            newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                                            casing: l.casing,
                                            def: l.definitionSymbol || a,
                                            placeholder: l.placeholder,
                                            nativeDef: a,
                                            generated: l.generated
                                        }) : (e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || a,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                            nativeDef: (p ? "'" : "") + a
                                        }), p = !1);
                                    }
                                }
                                function y() {
                                    if (v.length > 0) {
                                        if (k(s = v[v.length - 1], o), s.isAlternator) {
                                            u = v.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else k(h, o);
                                }
                                function b(e) {
                                    var t = new n.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function x() {
                                    if ((l = v.pop()).openGroup = !1, void 0 !== l) if (v.length > 0) {
                                        if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                                            for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, 
                                            u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                            e = u.matches[t].matches ? u.matches[t].matches.length : 1;
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else h.matches.push(l); else y();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                                }
                                t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                                for (;a = t ? d.exec(e) : f.exec(e); ) {
                                    if (o = a[0], t) {
                                        switch (o.charAt(0)) {
                                          case "?":
                                            o = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            o = "{" + o + "}";
                                            break;

                                          case "|":
                                            if (0 === v.length) {
                                                var E = b(h.matches);
                                                E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                                            }
                                        }
                                        if ("\\d" === o) o = "[0-9]";
                                    }
                                    if (p) y(); else switch (o.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || y();
                                        break;

                                      case i.escapeChar:
                                        p = !0, t && y();
                                        break;

                                      case i.optionalmarker[1]:
                                      case i.groupmarker[1]:
                                        x();
                                        break;

                                      case i.optionalmarker[0]:
                                        v.push(new n.default(!1, !0));
                                        break;

                                      case i.groupmarker[0]:
                                        v.push(new n.default(!0));
                                        break;

                                      case i.quantifiermarker[0]:
                                        var S = new n.default(!1, !1, !0), _ = (o = o.replace(/[{}?]/g, "")).split("|"), w = _[0].split(","), M = isNaN(w[0]) ? w[0] : parseInt(w[0]), O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                        "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                                            min: M,
                                            max: O,
                                            jit: T
                                        };
                                        var C = v.length > 0 ? v[v.length - 1].matches : h.matches;
                                        if ((a = C.pop()).isAlternator) {
                                            C.push(a), C = a.matches;
                                            var A = new n.default(!0), D = C.pop();
                                            C.push(A), C = A.matches, a = D;
                                        }
                                        a.isGroup || (a = b([ a ])), C.push(a), C.push(S);
                                        break;

                                      case i.alternatormarker:
                                        if (v.length > 0) {
                                            var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                                            c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                                        } else c = P(h.matches);
                                        if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), 
                                        u.matches.push(c), v.push(u), c.openGroup) {
                                            c.openGroup = !1;
                                            var B = new n.default(!0);
                                            B.alternatorGroup = !0, v.push(B);
                                        }
                                        break;

                                      default:
                                        y();
                                    }
                                }
                                g && x();
                                for (;v.length > 0; ) l = v.pop(), h.matches.push(l);
                                h.matches.length > 0 && (!function e(a) {
                                    a && a.matches && a.matches.forEach((function(n, r) {
                                        var o = a.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                                        t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                                        e(n);
                                    }));
                                }(h), m.push(h));
                                (i.numericInput || i.isRTL) && function e(t) {
                                    for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                                        var n = parseInt(a);
                                        if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                            var r = t.matches[a];
                                            t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                                        }
                                        void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(m[0]);
                                return m;
                            }, t.generateMaskSet = function(e, t) {
                                var i;
                                function n(e, i, n) {
                                    var o, l, s = !1;
                                    if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, 
                                    e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                                    n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                                        var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                                        e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
                                    }
                                    return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, s, n),
                                        validPositions: {},
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: i,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                                    o;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var o = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
                                        })), n(o += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return i;
                            };
                            var a = o(i(4963)), n = o(i(9695)), r = o(i(2394));
                            function o(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, i = this.el, a = this.dependencyLib;
                                l.EventRuler.off(i);
                                var f = function(t, i) {
                                    "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                                    var s = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!u) if ("input" === t.tagName.toLowerCase()) {
                                        var c = document.createElement("input");
                                        c.setAttribute("type", s), u = "text" === c.type, c = null;
                                    } else u = "partial";
                                    return !1 !== u ? function(t) {
                                        var n, s;
                                        function u() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                                        }
                                        function c(e) {
                                            s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== i.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                                        return this.textContent;
                                                    }, s = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                                s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                                t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                            }, t.inputmask._valueSet = function(t, i) {
                                                s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === n && (n = function() {
                                                return this.value;
                                            }, s = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                                                    var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    a.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var a = n(t);
                                                                return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                                                            }
                                                            return n(t);
                                                        },
                                                        set: function(e, t) {
                                                            var i = l(e, t);
                                                            return e.inputmask && (0, o.applyInputValue)(e, t), i;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(t) {
                                                l.EventRuler.on(t, "mouseenter", (function() {
                                                    var t = this.inputmask._valueGet(!0);
                                                    t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, 
                                                    o.applyInputValue)(this, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, u;
                                }(i, t);
                                if (!1 !== f) {
                                    e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                                    i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                                    s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                                    l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                                    l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                                    l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                                    l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                                    l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), 
                                    l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                                    l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), 
                                    (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), 
                                    l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), 
                                    r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                                    var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                                    if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                                        (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                                        var p = r.getBuffer.call(e).slice();
                                        !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                                        o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(7760), l = i(9716), s = i(9845), u = i(7215), c = i(6030);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i, a) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var i = Object(this), a = i.length >>> 0;
                                    if (0 === a) return !1;
                                    for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a; ) {
                                        if (i[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        8711: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, i, a, n) {
                                var r, o = this, l = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                                i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                                t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), 
                                {
                                    begin: a ? t : u.call(o, t),
                                    end: a ? i : u.call(o, i)
                                };
                                if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
                                    var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                                    if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: i
                                    }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                                        if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                            var c = document.createTextNode("");
                                            e.appendChild(c);
                                        }
                                        r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                        r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                                        r.collapse(!0);
                                        var f = window.getSelection();
                                        f.removeAllRanges(), f.addRange(r);
                                    } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                                    r.moveStart("character", t), r.select());
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, i, r = this, l = this.maskset, s = this.dependencyLib, u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = l.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                                for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), 
                                d[t] = s.extend(!0, {}, i);
                                var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                                for (t = c - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match); t--) c--;
                                return e ? {
                                    l: c,
                                    def: d[c] ? d[c].match : void 0
                                } : c;
                            }, t.determineNewCaretPosition = function(e, t, i) {
                                var n = this, u = this.maskset, c = this.opts;
                                t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (i = i || c.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: r.call(n).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = s.call(n, o.call(n));
                                        break;

                                      case "radixFocus":
                                        if (function(e) {
                                            if ("" !== c.radixPoint && 0 !== c.digits) {
                                                var t = u.validPositions;
                                                if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                                    if (e < s.call(n, -1)) return !0;
                                                    var i = r.call(n).indexOf(c.radixPoint);
                                                    if (-1 !== i) {
                                                        for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var f = r.call(n).join("").indexOf(c.radixPoint);
                                            e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                                            break;
                                        }

                                      default:
                                        var d = e.begin, p = o.call(n, d, !0), h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                                        if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d); else {
                                            var v = u.validPositions[p], m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = a.getPlaceholder.call(n, h, m.match);
                                            if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                                var k = s.call(n, h);
                                                (d >= k || d === h) && (h = k);
                                            }
                                            e.end = e.begin = h;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = r, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                            }, t.seekNext = s, t.seekPrevious = function(e, t) {
                                var i = this, n = e - 1;
                                if (e <= 0) return 0;
                                for (;n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0)); ) n--;
                                return n;
                            }, t.translatePosition = u;
                            var a = i(4713), n = i(7215);
                            function r(e) {
                                var t = this.maskset;
                                return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                                void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                            }
                            function o(e, t, i) {
                                var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                                for (var l in void 0 === e && (e = -1), o) {
                                    var s = parseInt(l);
                                    o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
                                }
                                return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                            }
                            function l(e, t, i) {
                                var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                                if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                                if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (i) {
                                        var l = a.getTests.call(n, e);
                                        return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                                    }
                                    var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), u = a.getPlaceholder.call(n, e, s.match);
                                    return s.match.def !== u;
                                }
                                return !1;
                            }
                            function s(e, t, i) {
                                var n = this;
                                void 0 === i && (i = !0);
                                for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i)); ) r++;
                                return r;
                            }
                            function u(e) {
                                var t = this.opts, i = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), 
                                e;
                            }
                        },
                        4713: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, a, n) {
                                var r = this, o = this.opts, c = this.maskset, f = o.greedy;
                                n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, h, v, m, g = [], k = 0;
                                do {
                                    if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], 
                                    h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h)); else {
                                        v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
                                        var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                                        (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
                                    }
                                    k++;
                                } while (!0 !== h.static || "" !== h.def || t > k);
                                "" === g[g.length - 1] && g.pop();
                                !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
                                return o.greedy = f, g;
                            }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            };
                            function r(e, t) {
                                var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                                if ("" !== i) for (;i.length < t; ) i += "0";
                                return i;
                            }
                            function o(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function l(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === n.validPositions[e]) {
                                        var r, o = d.call(this, e), l = [];
                                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), 
                                        !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return a.placeholder.charAt(e % a.placeholder.length);
                            }
                            function s(e, t, i) {
                                return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                            }
                            function u(e, t) {
                                var i = this.opts, a = function(e, t) {
                                    var i = 0, a = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                                    })), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
                                    return i;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var n, o, l, s = r(c.call(this, e));
                                i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();
                                for (var u = 0; u < t.length; u++) {
                                    var f = t[u];
                                    n = r(f, s.length);
                                    var d = Math.abs(n - s);
                                    (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                                    l = f);
                                }
                                return l;
                            }
                            function c(e, t) {
                                var i = this.maskset;
                                return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                            }
                            function f(e, t, i) {
                                function a(e) {
                                    for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                                    i.push(e.charAt(n));
                                    return i.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                            }
                            function d(e, t, i) {
                                var a, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, d = this.el, p = s.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, k = t ? t.join("") : "";
                                function y(t, i, r, o) {
                                    function l(r, o, u) {
                                        function p(e, t) {
                                            var i = 0 === t.matches.indexOf(e);
                                            return i || t.matches.every((function(a, n) {
                                                return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), 
                                                !i;
                                            })), i;
                                        }
                                        function v(e, t, i) {
                                            var a, n;
                                            if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                                if (e.mloc[t]) return a = e, !1;
                                                var o = void 0 !== i ? i : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                                            })), a) {
                                                var r = a.locator[a.alternation];
                                                return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                            }
                                            return void 0 !== i ? v(e, t) : void 0;
                                        }
                                        function b(e, t) {
                                            var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                            if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                                i = n, a = !0;
                                                break;
                                            }
                                            if (a) {
                                                e.mloc = e.mloc || {};
                                                var r = e.locator[i];
                                                if (void 0 !== r) {
                                                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                                    void 0 !== t) {
                                                        for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                                        e.locator[i] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return !0;
                                                }
                                                e.alternation = void 0;
                                            }
                                            return !1;
                                        }
                                        function x(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                            return !0;
                                        }
                                        if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: o.reverse(),
                                                cd: k,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && u !== r) {
                                                if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                                            } else if (r.isOptional) {
                                                var P = r, E = m.length;
                                                if (r = y(r, i, o, u)) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                                                    g = !0, h = e;
                                                }
                                            } else if (r.isAlternator) {
                                                var S, _ = r, w = [], M = m.slice(), O = o.length, T = !1, C = i.length > 0 ? i.shift() : -1;
                                                if (-1 === C || "string" == typeof C) {
                                                    var A, D = h, j = i.slice(), B = [];
                                                    if ("string" == typeof C) B = C.split(","); else for (A = 0; A < _.matches.length; A++) B.push(A.toString());
                                                    if (void 0 !== s.excludes[e]) {
                                                        for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                                                            var F = s.excludes[e][L].toString().split(":");
                                                            o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                                                        }
                                                        0 === B.length && (delete s.excludes[e], B = R);
                                                    }
                                                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));
                                                    for (var N = 0; N < B.length; N++) {
                                                        A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                                                        var V = _.matches[A];
                                                        if (V && l(V, [ A ].concat(o), u)) r = !0; else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                                                        S = m.slice(), h = D, m = [];
                                                        for (var G = 0; G < S.length; G++) {
                                                            var H = S[G], K = !1;
                                                            H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);
                                                            for (var U = 0; U < w.length; U++) {
                                                                var $ = w[U];
                                                                if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                                                                    if (H.match.nativeDef === $.match.nativeDef) {
                                                                        K = !0, b($, H);
                                                                        break;
                                                                    }
                                                                    if (f(H, $, c)) {
                                                                        b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                                                                        break;
                                                                    }
                                                                    if (f($, H, c)) {
                                                                        b($, H);
                                                                        break;
                                                                    }
                                                                    if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                                                                        x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            K || w.push(H);
                                                        }
                                                    }
                                                    m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                                                } else r = l(_.matches[C] || t.matches[C], [ C ].concat(o), u);
                                                if (r) return !0;
                                            } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                                                var W = t.matches[t.matches.indexOf(q) - 1];
                                                if (r = l(W, [ z ].concat(o), W)) {
                                                    if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, 
                                                    a.optionalQuantifier && p(a, W)) {
                                                        g = !0, h = e;
                                                        break;
                                                    }
                                                    return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                                                }
                                            } else if (r = y(r, i, o, u)) return !0;
                                        } else h++;
                                        var Q, Z;
                                    }
                                    for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
                                        var p = l(t.matches[u], [ u ].concat(r), o);
                                        if (p && h === e) return p;
                                        if (h > e) break;
                                    }
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1; ) x--;
                                        void 0 !== b && x > -1 && (v = function(e, t) {
                                            var i, a = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                            }))), a;
                                        }(x, b), k = v.join(""), h = x);
                                    }
                                    if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];
                                    for (var P = v.shift(); P < p.length; P++) if (y(p[P], v, [ P ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: [],
                                    mloc: {},
                                    cd: k
                                }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                                r = s.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                                for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);
                                for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, i, a, l) {
                                var u = this, c = this.maskset, f = this.opts;
                                if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                                u.isRTL)) {
                                    var d = i.end;
                                    i.end = i.begin, i.begin = d;
                                }
                                var p, h = o.getLastValidPosition.call(u, void 0, !0);
                                i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
                                t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);
                                if (!1 !== (p = m.call(u, i))) {
                                    if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
                                        var v = s.call(u, !0);
                                        if (v) {
                                            var g = void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                                            (t !== r.default.DELETE || i.begin > g) && i.begin;
                                        }
                                    }
                                    !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
                                        begin: c.p,
                                        end: c.p
                                    }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
                                }
                            }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, 
                            t.revalidateMask = m;
                            var a, n = i(4713), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(8711), l = i(6030);
                            function s(e, t, i, a, r, l) {
                                var u, c, f, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, S = x.maskset, _ = P.extend(!0, {}, S.validPositions), w = P.extend(!0, {}, S.tests), M = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                                if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), 
                                -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
                                    if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
                                    u = T, c = S.validPositions[u].alternation, p = f;
                                }
                                if (void 0 !== c) {
                                    m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                                    n.getDecisionTaker)(p) + ":" + p.alternation);
                                    var C = [], A = -1;
                                    for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                                    A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), 
                                    delete S.validPositions[h];
                                    for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                                        for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                                        k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                                            caretPos: h
                                        });
                                        if (M) break;
                                        if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), 
                                        S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        var D = (0, n.getDecisionTaker)(p);
                                        if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                                    }
                                }
                                return O && !1 === E.keepStatic || delete S.excludes[m], O;
                            }
                            function u(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                switch (a.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = n.validPositions[i - 1];
                                    e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof a.casing) {
                                        var l = Array.prototype.slice.call(arguments);
                                        l.push(n.validPositions), e = a.casing.apply(this, l);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, i = this.opts, a = this.maskset;
                                if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                                if ("*" !== i.repeat) {
                                    var r = !1, l = o.determineLastRequiredPosition.call(t, !0), s = o.seekPrevious.call(t, l.l);
                                    if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                                        r = !0;
                                        for (var u = 0; u <= s; u++) {
                                            var c = n.getTestTemplate.call(t, u).match;
                                            if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                                r = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return r;
                                }
                            }
                            function f(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function d(e, t, i, a, r, l, p) {
                                var g = this, k = this.dependencyLib, y = this.opts, b = g.maskset;
                                i = !0 === i;
                                var x = e;
                                function P(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return t.pos - e.pos;
                                        })).forEach((function(e) {
                                            m.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function E(t, i, r) {
                                    var l = !1;
                                    return n.getTests.call(g, t).every((function(s, c) {
                                        var d = s.match;
                                        if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                                            c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                            pos: t
                                        }))) {
                                            var p = void 0 !== l.c ? l.c : i, h = t;
                                            return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                            !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                                                input: u.call(g, p, d, h)
                                            }), a, h) && (l = !1), !1);
                                        }
                                        return !0;
                                    })), l;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, _ = k.extend(!0, {}, b.validPositions);
                                if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, 
                                delete b.tests[w]);
                                if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), 
                                !0 === S) {
                                    if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
                                        var M = b.validPositions[x];
                                        if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                            if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                                                var O = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), 
                                                O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                                                    S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: o.seekNext.call(g, x)
                                        };
                                    }
                                    !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
                                    var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
                                var D = P(S);
                                void 0 !== g.maxLength && o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _), D = !1);
                                return D;
                            }
                            function p(e, t, i) {
                                for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
                                    if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
                                        r = !0;
                                        break;
                                    }
                                    if (o[l].match && o[l].match.def === t.match.nativeDef) {
                                        r = void 0;
                                        break;
                                    }
                                }
                                return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), 
                                r;
                            }
                            function h(e, t, i) {
                                var a, n, r = this, s = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? i.slice().reverse() : i;
                                if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, 
                                e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (a = e; a < t; a++) delete s.validPositions[a];
                                    n = e;
                                }
                                var p = new c.Event("keypress");
                                for (a = e; a < t; a++) {
                                    p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
                                    var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                                    !1 !== h && void 0 !== h && (n = h.forwardPosition);
                                }
                                u.skipOptionalPartCharacter = f;
                            }
                            function v(e, t, i) {
                                var a = this, r = this.maskset, l = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                                for (var s = e; s < t; s++) if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
                                    var u = n.getTests.call(a, s).slice();
                                    "" === u[u.length - 1].match.def && u.pop();
                                    var c, f = n.determineTestTemplate.call(a, s, u);
                                    if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                                        input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
                                    })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                                        var p = r.validPositions[t].input;
                                        return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
                                    }
                                }
                            }
                            function m(e, t, i, a) {
                                var r = this, l = this.maskset, s = this.opts, u = this.dependencyLib;
                                function c(e, t, i) {
                                    var a = t[e];
                                    if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return n && r;
                                    }
                                    return !1;
                                }
                                var f = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                                if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                                    var g, k = u.extend(!0, {}, l.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                                    for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];
                                    var b, x, P = a, E = P;
                                    for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                                        if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                            begin: h,
                                            end: v
                                        }))) {
                                            for (;"" !== n.getTest.call(r, E).match.def; ) {
                                                if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                                                    "+" === b.match.def && o.getBuffer.call(r, !0);
                                                    var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                                                    if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                                                } else m = !1;
                                                if (m) {
                                                    void 0 === t && b.match.static && g === e.begin && f++;
                                                    break;
                                                }
                                                if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                                                E++;
                                            }
                                            "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                                        }
                                        if (!m) break;
                                    }
                                    if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                                    !1;
                                } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));
                                return o.resetMaskSet.call(r, !0), f;
                            }
                        },
                        5581: function(e) {
                            e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
                        }
                    }, t = {};
                    function i(a) {
                        var n = t[a];
                        if (void 0 !== n) return n.exports;
                        var r = t[a] = {
                            exports: {}
                        };
                        return e[a](r, r.exports, i), r.exports;
                    }
                    var a = {};
                    return function() {
                        var e, t = a;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = void 0, i(3851), i(219), i(207), i(5296);
                        var n = ((e = i(2394)) && e.__esModule ? e : {
                            default: e
                        }).default;
                        t.default = n;
                    }(), a;
                }();
            }));
        },
        2: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        },
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const projectModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = () => {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((support => {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        var lazyload_min = __webpack_require__(732);
        const lazyMedia = new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        lazyMedia.update();
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else general_functions_bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((() => {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let general_functions_bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((() => {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(((item, index, self) => {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((item => "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((item => {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (e => {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        const productFile = "json/products.json";
        const recipesFile = "json/recipes.json";
        const newsFile = "json/news_and_actions.json";
        window.addEventListener("load", (() => {
            const fetchJsonData = async url => {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            };
            const urls = [ productFile, recipesFile, newsFile ];
            const promises = urls.map((url => fetchJsonData(url)));
            Promise.all(promises).then((data => {
                const allData = data.reduce(((acc, cur) => acc.concat(cur)), []);
                searchFilter(allData);
                console.log(allData);
            })).catch((error => console.error(error)));
        }));
        function searchFilter(arr) {
            const searchBlock = document.querySelector(".body-input");
            const searchInput = document.querySelector("#search-input");
            const searchList = searchBlock.querySelector(".popup__list");
            searchInput.addEventListener("input", inputEvent);
            function inputEvent(e) {
                let text = "";
                let searchValue = [];
                let searchAll = [];
                let searchProducts = [];
                let searchRecipes = [];
                let searchNews = [];
                text = e.target.value;
                arr.forEach((item => {
                    if (item.products) searchProducts = item.products.filter((product => {
                        const regex = new RegExp(text, "gi");
                        const title = product.title;
                        return title.match(regex);
                    }));
                    if (item.recipes) searchRecipes = item.recipes.filter((product => {
                        const regex = new RegExp(text, "gi");
                        const title = product.title;
                        return title.match(regex);
                    }));
                    if (item.news) searchNews = item.news.filter((product => {
                        const regex = new RegExp(text, "gi");
                        const title = product.title;
                        return title.match(regex);
                    }));
                }));
                searchValue = searchAll.concat(searchProducts, searchRecipes, searchNews);
                const html = searchValue.map((value => {
                    const regex = new RegExp(text, "gi");
                    const productName = value.title.replace(regex, `<span class="search-hl">${text}</span>`);
                    return `\n              <li class="list-items__item">\n                <a class="list-items__link" href="${value.url}">\n                  <h6 class="list-items__title">${productName}</h6>\n                  <svg class="list-items__icon">\n\t                <use xlink:href="img/icons/icons.svg#arrow-btn"></use>\n               </svg>\n               </a>\n             </li>`;
                })).slice(0, 10).join("");
                searchList.innerHTML = text ? html : null;
            }
        }
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if ("last" === place || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if ("first" === place) {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (void 0 !== parent.children[index]) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if ("min" === this.type) arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return -1;
                        if ("last" === a.place || "first" === b.place) return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if ("first" === a.place || "last" === b.place) return 1;
                            if ("last" === a.place || "first" === b.place) return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector = "") {
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes = []) {
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el["width" === size ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue("width" === size ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue("width" === size ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || 16 === major && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.el);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.el, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = el.clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = el.clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && "none" === elementStyle(slide, "display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) wrapperEl.style.width = `${swiper.virtualSize + params.spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + params.spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (1 === params.slidesPerGroup) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides[index];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = utils_elementIndex(swiper.slides.filter((el => "0" === el.getAttribute("data-swiper-slide-index")))[0]);
                const lastSlideIndex = utils_elementIndex(swiper.slides.filter((el => 1 * el.getAttribute("data-swiper-slide-index") === swiper.slides.length - 1))[0]);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && 0 === !prevSlide) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if ("undefined" === typeof activeIndex) activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if ("string" === typeof index) index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = utils_elementIndex(swiper.slides.filter((slideEl => 1 * slideEl.getAttribute("data-swiper-slide-index") === newIndex))[0]);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = utils_elementIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = utils_elementIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix({slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = {}) {
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && 0 === swiper.snapIndex) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if ("undefined" === typeof activeSlideIndex) activeSlideIndex = utils_elementIndex(swiper.slides.filter((el => el.classList.contains("swiper-slide-active")))[0]); else activeIndex = activeSlideIndex;
            const isNext = "next" === direction || !direction;
            const isPrev = "prev" === direction || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = loopedSlides - activeSlideIndex;
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - 2 * loopedSlides) {
                slidesAppended = activeSlideIndex - (swiper.slides.length - 2 * loopedSlides);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slidesEl.prepend(swiper.slides[index]);
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slidesEl.append(swiper.slides[index]);
            }));
            swiper.recalcSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if ("undefined" === typeof slideRealIndex) {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                    }
                } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
            } else if (appendSlidesIndexes.length > 0 && isNext) if ("undefined" === typeof slideRealIndex) {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {slides, params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            slides.forEach((slideEl => {
                const index = "undefined" === typeof slideEl.swiperSlideIndex ? 1 * slideEl.getAttribute("data-swiper-slide-index") : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && "mouse" === event.pointerType) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if ("wrapper" === params.touchEventsTarget) if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && 3 === e.which) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if ("SELECT" === targetEl.nodeName) data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && "mouse" === event.pointerType) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - ("auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) return;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && "mouse" === event.pointerType) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        let timeout;
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(timeout);
                timeout = setTimeout((() => {
                    swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes
        };
        const extendedDefaults = {};
        class Swiper {
            constructor(...args) {
                let el;
                let params;
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && "string" === typeof params.el && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if ("string" === typeof el) el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.shadowEl) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement ? el : wrapperEl,
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === elementStyle(el, "direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === elementStyle(el, "direction")),
                    wrongRTL: "-webkit-box" === elementStyle(wrapperEl, "display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        const core = Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function getEl(el) {
                let res;
                if (el && "string" === typeof el && swiper.isElement) {
                    res = swiper.el.shadowRoot.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if ("string" === typeof el) res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && "string" === typeof el && res.length > 1 && 1 === swiper.el.querySelectorAll(el).length) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if ("BUTTON" === subEl.tagName) subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", "next" === dir ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", "next" === dir ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes = "") {
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination({swiper, extendParams, on, emit}) {
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && 0 === swiper.pagination.el.length;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${"prev" === position ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${"prev" === position ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) swiper.slideToLoop(index); else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let current;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex; else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        bulletEl.classList.remove(...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)));
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets[i].classList.add(`${params.bulletActiveClass}-main`);
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if ("fraction" === params.type) {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if ("progressbar" === params.type) {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if ("custom" === params.type && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (0 === subElIndex) emit("paginationRender", subEl);
                    } else {
                        if (0 === subElIndex) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if ("fraction" === params.type) if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if ("progressbar" === params.type) if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                el.forEach((subEl => {
                    if ("custom" !== params.type) subEl.innerHTML = paginationHTML || "";
                    if ("bullets" === params.type) swiper.pagination.bullets = [ ...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)) ];
                }));
                if ("custom" !== params.type) emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if ("string" === typeof params.el && swiper.isElement) el = swiper.el.shadowRoot.querySelector(params.el);
                if (!el && "string" === typeof params.el) el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || 0 === el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && 1 === el.length) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if ("bullets" === params.type && params.clickable) subEl.classList.add(params.clickableClass);
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if ("bullets" === params.type && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if ("progressbar" === params.type && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) subEl.removeEventListener("click", onBulletClick);
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(params.bulletActiveClass)));
            }
            on("init", (() => {
                if (false === swiper.params.pagination.enabled) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                let {el} = swiper.pagination;
                if (!Array.isArray(el)) el = [ el ].filter((element => !!element));
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function productsAction(productsBlock) {
            const productArray = productsBlock.querySelectorAll(".items-product__item");
            if (productArray) productArray.forEach((product => {
                product.addEventListener("mouseenter", (e => {
                    e.preventDefault();
                    const targetElement = e.target;
                    if (targetElement.closest(".items-product") || targetElement.closest(".products-catalog__item") || targetElement.closest(".more-products__items")) {
                        const productHideInfo = targetElement.querySelector(".info-hide");
                        if (productHideInfo.style.maxHeight) productHideInfo.style.maxHeight = null; else {
                            productHideInfo.style.maxHeight = null;
                            productHideInfo.style.maxHeight = productHideInfo.scrollHeight + "px";
                            productHideInfo.classList.add("_show");
                            targetElement.classList.add("_show");
                            smallImageAction(targetElement);
                        }
                        targetElement.addEventListener("mouseleave", (e => {
                            e.preventDefault();
                            if (productHideInfo.style.maxHeight) {
                                productHideInfo.style.maxHeight = null;
                                productHideInfo.classList.remove("_show");
                                targetElement.classList.remove("_show");
                                smallImageAction(targetElement);
                            }
                        }));
                    }
                }));
            }));
        }
        function smallImageAction(target) {
            const spanBlock = target.querySelector(".small-image");
            const spanCold = spanBlock.querySelector(".small-image__cold");
            if (target.closest(".items-product") || target.closest(".products-catalog__item") || target.closest(".more-products__items")) if (spanCold) if ("" == !spanCold.textContent) if (!spanBlock.classList.contains("revers")) spanBlock.classList.add("revers"); else spanBlock.classList.remove("revers");
        }
        const file = "json/recipes.json";
        let addRecipes = false;
        const recipesBlock = document.querySelector("#recipesHome");
        const recipesPageBlock = document.querySelector("#all-recipes");
        const preloaderRecipes = document.querySelector(".recipes__preloader");
        window.addEventListener("load", (e => {
            if (recipesPageBlock) getRecipes();
        }));
        const targetElement = document.querySelector(".page__recipes") || document.querySelector(".recipes__items");
        if (recipesBlock && targetElement) window.addEventListener("scroll", (() => {
            const topTargetElement = targetElement.getBoundingClientRect().top;
            if (topTargetElement <= window.innerHeight / 2 && !addRecipes) {
                getRecipes();
                addRecipes = true;
                preloaderRecipes.remove();
            }
        }));
        async function getRecipes() {
            try {
                const cacheKey = "recipesCache";
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    const data = JSON.parse(cachedData);
                    console.log("Cached data:", data);
                    loadRecipes(data);
                    recipesSlider();
                    return;
                }
                const response = await fetch(file, {
                    method: "GET",
                    cache: "reload"
                });
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                    console.log("Data:", data);
                    loadRecipes(data);
                    recipesSlider();
                }
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Finally");
            }
        }
        const recipesArray = [];
        function loadRecipes(data) {
            data.recipes.forEach((item => {
                const id = item.id, way = item.way, type = item.type, meat = item.meat, url = item.url, image = item.image, title = item.title, text = item.text, info = item.info, timeIcon = item.timeIcon, personIcon = item.personIcon, hardIcon = item.hardIcon, pepperIcon = item.spicinessIcon, energyText = item.energyText, energyValue = item.energyValue;
                let recipesTemplate = "";
                const recipesItem = `\n           <article id="${id}" data-way=${way} data-type="${type}" data-meat=${meat} class="items-recipes__item">\n             <div class="items-recipes__image">\n               <a href="${url}">\n                  <img data-src="img/recipes/${image}" class="lazy" alt="${title}" width="100%" height="100%">\n                  <div class="swiper-lazy-preloader"></div>\n               </a>\n           </div>\n          <div class="items-recipes__info">\n            <div class="items-recipes__header">\n            <div class="items-recipes__title">${title}</div>\n             <div class="items-recipes__icon icon-recipes">\n                   <svg class="icon-recipes__icon">\n                       <use xlink:href="img/icons/icons.svg#${pepperIcon}"></use>\n                  </svg>  \n               </div>\n            </div>\n            <div class="items-recipes__text">${text}</div>\n      `;
                info.forEach((value => {
                    const specificationRecipes = `\n                   <div class="items-recipes__specification specification-recipes">\n                   <div class="specification-recipes__item">\n                   <svg>\n                         <use xlink:href="img/icons/icons.svg#time"></use>\n                     </svg>\n                       <img data-src="img/recipes/${timeIcon}" class="lazy" alt="timeIcon">\n                       <span>${value.time}</span>\n                  </div>\n                <div class="specification-recipes__item">\n                  <img data-src="img/recipes/${personIcon}" class="lazy" alt="personIcon">\n                  <span>${value.portion}</span>\n              </div>\n                <div class="specification-recipes__item">\n                         <img data-src="img/recipes/${hardIcon}" class="lazy" alt="hardIcon">\n                       <span>${value.complexity}</span>\n                    </div>\n               </div>\n            `;
                    recipesTemplate += recipesItem;
                    recipesTemplate += specificationRecipes;
                }));
                energyValue.forEach((value => {
                    const recipesItemHideInfo = `\n         <div class="items-recipes__hide hide-recipes-items">\n            <div class="hide-recipes-items__info">${energyText}</div>\n               <div class="hide-recipes-items__energy">\n                 <div class="hide-recipes-items__kkal">\n                   <div class="hide-recipes-items__title">${value.kkal}</div>\n                    <div class="hide-recipes-items__text">колорії</div>\n                  </div>\n                     <div class="hide-recipes-items__protein">\n                      <div class="hide-recipes-items__title">${value.protein}</div>\n                       <div class="hide-recipes-items__text">білки</div>\n                   </div>\n                    <div class="hide-recipes-items__fat">\n                     <div class="hide-recipes-items__title">${value.fat}</div>\n                     <div class="hide-recipes-items__text">жири</div>\n                  </div>\n               </div>\n               </div>\n               `;
                    recipesTemplate += recipesItemHideInfo;
                    recipesTemplate += `</article>`;
                }));
                recipesArray.push(recipesTemplate);
            }));
            if (recipesBlock) {
                homeBlockRecipes(recipesArray, recipesBlock);
                lazyMedia.update();
                recipesAction(recipesBlock);
            }
            if (recipesPageBlock) pageBlockRecipes(recipesArray);
        }
        let numCards = 4;
        let loadProduct = false;
        function pageBlockRecipes(arr) {
            let newArray = [];
            if (window.innerWidth < 668 && false === loadProduct) numCards = 1; else numCards = 4;
            newArray = updateArray(arr);
            pagination(newArray, recipesPageBlock, numCards, 1);
            _slideDown(recipesPageBlock, 800);
            lazyMedia.update();
            loadProduct = true;
        }
        function homeBlockRecipes(arr, block) {
            const htmlRecipes = arr.slice(0, 4);
            const htmlRecipesTemplate = htmlRecipes.join("");
            block.insertAdjacentHTML("beforeend", htmlRecipesTemplate);
        }
        function recipesAction(recipesBlock) {
            const recipesArray = recipesBlock.querySelectorAll(".items-recipes__item");
            if (recipesArray) recipesArray.forEach((recipes => {
                recipes.addEventListener("mouseenter", (e => {
                    e.preventDefault();
                    const targetElement = e.target;
                    const recipesHideInfo = targetElement.querySelector(".hide-recipes-items");
                    const recipesInfo = targetElement.querySelector(".items-recipes__info");
                    if (targetElement.closest(".items-recipes") || targetElement.closest(".all-recipes__recipes")) {
                        if (recipesHideInfo.style.maxHeight) recipesHideInfo.style.maxHeight = null; else {
                            recipesHideInfo.style.maxHeight = null;
                            recipesHideInfo.style.maxHeight = recipesHideInfo.scrollHeight + 20 + "px";
                            recipesHideInfo.classList.add("_show");
                            recipesInfo.classList.add("_show");
                            targetElement.classList.add("_show");
                        }
                        targetElement.addEventListener("mouseleave", (e => {
                            e.preventDefault();
                            if (recipesHideInfo.style.maxHeight && recipesInfo.classList.contains("_show")) {
                                recipesHideInfo.classList.remove("_show");
                                recipesInfo.classList.remove("_show");
                                targetElement.classList.remove("_show");
                                recipesHideInfo.style.maxHeight = null;
                            }
                        }));
                    }
                }));
            }));
        }
        function updateArray(arr) {
            return arr;
        }
        checkBoxAction();
        function checkBoxAction() {
            if (recipesPageBlock) {
                const checkBox = document.querySelectorAll(".input-filter__item");
                checkBox.forEach((el => {
                    el.addEventListener("click", checkBoxToggle);
                }));
            }
        }
        function removeActive(arr) {
            if (recipesPageBlock) Array.from(arr).forEach((checkBox => {
                if (checkBox.classList.contains("_active")) checkBox.classList.remove("_active");
            }));
        }
        function removeActiveCheckbox(target) {
            const checkBox = document.querySelectorAll(".input-filter__item");
            checkBox.forEach((el => {
                if (target.classList.contains("meat") && el.closest(".meat")) el.classList.remove("_active");
                if (target.classList.contains("dish") && el.closest(".dish")) el.classList.remove("_active");
                if (target.classList.contains("way") && el.closest(".way")) el.classList.remove("_active");
            }));
        }
        function clearCheckbox() {
            if (recipesPageBlock) {
                const buttonsClear = document.querySelectorAll(".button-spollers__clear");
                buttonsClear.forEach((button => {
                    button.addEventListener("click", (e => {
                        const targetElement = e.target;
                        const parentTarget = targetElement.closest(".filter-spollers__dropdown");
                        if (parentTarget) {
                            removeActiveCheckbox(parentTarget);
                            updateRecipes();
                        }
                    }));
                }));
            }
        }
        clearCheckbox();
        function enterCheckbox() {
            if (recipesPageBlock) {
                const buttonsEnter = document.querySelectorAll(".button-spollers__enter");
                buttonsEnter.forEach((button => {
                    button.addEventListener("click", (e => {
                        const targetElement = e.target;
                        const parentTarget = targetElement.closest(".filter-spollers__dropdown");
                        if (parentTarget) updateRecipes();
                    }));
                }));
            }
        }
        enterCheckbox();
        function checkBoxFilterItems() {
            const checkBoxItems = document.querySelectorAll(".input-filter__item");
            const filterItems = [ ...checkBoxItems ];
            const updateItems = filterItems.filter((item => {
                if (!item.classList.contains("_active")) return;
                return item.dataset.filter;
            })).map((item => item.dataset.filter));
            return updateItems;
        }
        function updateRecipes() {
            const arr = recipesArray;
            const div = document.createElement("div");
            div.innerHTML = arr.join("");
            const recipeItems = div.querySelectorAll(".items-recipes__item");
            const itemsToFilter = [ ...recipeItems ];
            if (0 === itemsToFilter.length) return;
            const updateArray = [];
            const filter = checkBoxFilterItems();
            itemsToFilter.forEach((item => {
                const {way} = item.dataset;
                const {type} = item.dataset;
                const {meat} = item.dataset;
                let count = 0;
                if (filter.includes(way)) count++;
                if (filter.includes(type)) count++;
                if (filter.includes(meat)) count++;
                if (count === filter.length) updateArray.push(item.outerHTML);
            }));
            loadProduct = false;
            pageBlockRecipes(updateArray);
        }
        function checkBoxToggle() {
            const parent = this.closest(".input-filter");
            const activeCheckbox = parent.children;
            const parentFilterAttribute = parent.getAttribute("data-filter-checkbox");
            if (!this.classList.contains("_active")) {
                if ("meat" === parentFilterAttribute) {
                    removeActive(activeCheckbox);
                    this.classList.add("_active");
                }
                if ("dish" === parentFilterAttribute) {
                    removeActive(activeCheckbox);
                    this.classList.add("_active");
                }
                if ("way" === parentFilterAttribute) {
                    removeActive(activeCheckbox);
                    this.classList.add("_active");
                }
            }
        }
        function pagination(arr, body, rows, currentPage) {
            function displayElements(arr, rowPerPage, page) {
                body.innerHTML = "";
                if (0 === arr.length) createMessage(body);
                page--;
                const start = rowPerPage * page;
                const end = start + rowPerPage;
                const paginatedData = arr.slice(start, end);
                addElements(paginatedData, body);
            }
            function addElements(data, body) {
                data.forEach((el => {
                    body.insertAdjacentHTML("beforeend", el);
                    lazyMedia.update();
                }));
                const bodyElements = body;
                recipesAction(bodyElements);
                spanClear(bodyElements);
                hideSmallImage(bodyElements);
                productsAction(bodyElements);
            }
            function createMessage(body) {
                const recipesPageBlock = document.querySelector("#all-recipes");
                const productsPageBlock = document.querySelector("#catalogProducts");
                if (recipesPageBlock || productsPageBlock) {
                    const html = `<div class="all-recipes__message">Вибачте, нічого не знайдено!</div>`;
                    body.insertAdjacentHTML("beforeend", html);
                }
            }
            function createPagination(arr, page) {
                const pagination = document.querySelector(".pagination");
                pagination.innerHTML = "";
                const paginationList = document.createElement("ul");
                paginationList.classList.add("pagination__list");
                pagination.appendChild(paginationList);
                let liTemplate = "";
                let beforePages = page - 1;
                let afterPages = page + 1;
                let liActive;
                const pagesCount = Math.ceil(arr.length / rows);
                if (page > 1) liTemplate += ` <li class="pagination__item first red-pagination">\n                               <svg svg class="red-pagination__icon">\n                                <use xlink:href="img/icons/icons.svg#arrow-pagination"></use>\n                              </svg>\n                         </li>\n                         `;
                if (page > 2) {
                    liTemplate += `<li class="pagination__item">1</li>`;
                    if (page > 3) liTemplate += `<li class="pagination__item dots">...</li>`;
                }
                for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
                    if (pageLength > pagesCount) continue;
                    if (0 == pageLength) pageLength += 1;
                    if (page == pageLength) liActive = "_active"; else liActive = "";
                    liTemplate += `<li class="pagination__item ${liActive}">${pageLength}</li>`;
                }
                if (page < pagesCount - 1) {
                    if (page < pagesCount - 2) liTemplate += `<li class="pagination__item dots">...</li>`;
                    liTemplate += `<li class="pagination__item">${pagesCount}</li>`;
                }
                if (page < pagesCount) liTemplate += ` <li class="pagination__item last red-pagination">\n                               <svg svg class="red-pagination__icon">\n                                <use xlink:href="img/icons/icons.svg#arrow-pagination"></use>\n                              </svg>\n                         </li>\n                         `;
                paginationList.innerHTML = liTemplate;
                const paginationItem = paginationList.querySelectorAll(".pagination__item");
                paginationItem.forEach((item => {
                    item.addEventListener("click", paginationAction);
                }));
                function paginationAction(e) {
                    const firstLi = this.classList.contains("first");
                    const lastLi = this.classList.contains("last");
                    const targetLi = e.target;
                    let currentItemLi = document.querySelector(".pagination__item._active");
                    if (this.classList.contains("dots")) return;
                    if (firstLi) {
                        page--;
                        displayElements(arr, rows, page);
                        createPagination(arr, page);
                    }
                    if (!firstLi && !lastLi) {
                        let pageNum = targetLi.textContent;
                        if (pageNum == page) return;
                        currentPage = parseInt(pageNum);
                        displayElements(arr, rows, currentPage);
                        createPagination(arr, currentPage);
                        currentItemLi.classList.remove("_active");
                        targetLi.classList.add("_active");
                    }
                    if (lastLi) {
                        page++;
                        displayElements(arr, rows, page);
                        createPagination(arr, page);
                    }
                }
            }
            displayElements(arr, rows, currentPage);
            createPagination(arr, currentPage);
        }
        function toUpperCase(text) {
            const splitted = text.split("");
            const first = splitted[0].toUpperCase();
            const rest = [ ...splitted ];
            rest.splice(0, 1);
            return text = [ first, ...rest ].join("");
        }
        function toLoverCase(text) {
            const splitted = text.split("");
            const first = splitted[0].toLowerCase();
            const rest = [ ...splitted ];
            rest.splice(0, 1);
            return text = [ first, ...rest ].join("");
        }
        function resizeTabs(selector) {
            if (selector) {
                const tabs = selector.querySelectorAll(".tabs__title");
                tabs.forEach((tab => {
                    let spanText = tab.children[2].textContent;
                    if (window.innerWidth <= 610) {
                        tab.children[1].style.display = "none";
                        tab.children[2].textContent = toUpperCase(spanText);
                    } else {
                        tab.children[1].style.display = "block";
                        tab.children[2].textContent = toLoverCase(spanText);
                    }
                }));
            }
        }
        const productsHome = document.querySelector("#products");
        const catalogProducts = document.querySelector("#catalogProducts");
        const moreProduct = document.querySelector(".more-products__items");
        let catalogProductsChicken = [];
        let catalogProductsSouce = [];
        let catalogProductsStew = [];
        function createHTML(products) {
            const homeProducts = [];
            catalogProductsChicken = [];
            catalogProductsSouce = [];
            catalogProductsStew = [];
            products.forEach((item => {
                const id = item.id, url = item.url, type = item.type, product = item.product, image = item.image, title = item.title, freez = item.freez, cold = item.cold, info = item.info, freezInfo = item.freezProduct, coldInfo = item.coldProduct, storageFrom = item.storageFrom, storageTo = item.storageTo, bestBefore = item.bestBefore, energyValue = item.energyValue;
                let productTemplate = "";
                const productItem = `\n        <article id="${id}" data-type=${type} data-product=${product} class="items-product__item ${product}">\n           <div class="items-product__image">\n             <div class="items-product__big-image">\n              <img data-src="img/products/${image}" class="lazy" alt="${title}" width="100%" height="100%">\n               <div class="swiper-lazy-preloader"></div>\n            </div>\n          <div class="items-product__small-image small-image">\n            <div class="small-image__item">\n               <span class="small-image__freez">${freezInfo ? info : ""}</span>\n                  <img data-src="img/products/${freez}" class="lazy" alt="${info ? info : "Іконка"}" width="100%" height="100%">\n              </div>\n            <div class="small-image__item">\n              <span class="small-image__cold">${coldInfo ? info : ""}</span>\n                <img data-src="img/products/${cold}" class="lazy" alt="${info ? info : "Іконка"}" width="100%" height="100%">\n            </div>\n          </div>\n        </div>\n          <div class="items-product__info">\n            <div class="items-product__title">${title}</div>\n              <span>${storageFrom}<span><span>${storageTo}<span>|</span>${bestBefore}</span>\n          </div>\n      `;
                energyValue.forEach((value => {
                    const productItemHideInfo = `<div class="items-product__hide-info info-hide">\n               <div class="info-hide__energy">\n                 <div class="info-hide__kkal">\n                   <div class="info-hide__title">${value.kkal}</div>\n                    <div class="info-hide__text">колорії</div>\n                  </div>\n                     <div class="info-hide__protein">\n                      <div class="info-hide__title">${value.protein}</div>\n                       <div class="info-hide__text">білки</div>\n                   </div>\n                    <div class="info-hide__fat">\n                     <div class="info-hide__title">${value.fat}</div>\n                     <div class="info-hide__text">жири</div>\n                  </div>\n               </div>\n                <a href="${url}" class="info-hide__link-product product-link">\n                   <span class="product-link__text">Детальніше</span>\n                     <svg class="product-link__icon">\n                        <use xlink:href="img/icons/icons.svg#arrow-btn"></use>\n                    </svg>\n                  </a>\n              `;
                    productTemplate += productItem;
                    productTemplate += productItemHideInfo;
                    productTemplate += `</article>`;
                    homeProducts.push(productTemplate);
                    if ("chicken" === type) catalogProductsChicken.push(productTemplate);
                    if ("souce" === type) catalogProductsSouce.push(productTemplate);
                    if ("stew" === type) catalogProductsStew.push(productTemplate);
                }));
            }));
            if (productsHome) homeProductsAdd(homeProducts, productsHome);
            if (catalogProducts) {
                catalogProductsAdd(catalogProductsChicken, catalogProductsSouce, catalogProductsStew);
                const allProductsCategory = document.querySelector("#allProducts");
                window.addEventListener("resize", (e => {
                    resizeTabs(allProductsCategory);
                }));
                resizeTabs(allProductsCategory);
            }
            if (moreProduct) moreProductAdd(homeProducts, moreProduct, length);
        }
        function getRandomIndex(maxIndex, length) {
            return Math.floor(Math.random() * (maxIndex - length + 1));
        }
        function moreProductAdd(arr, block) {
            const length = 3;
            const startIndex = getRandomIndex(arr.length, length);
            const moreProducts = arr.slice(startIndex, startIndex + length);
            const htmlMoreProducts = moreProducts.join("");
            block.insertAdjacentHTML("beforeend", htmlMoreProducts);
            lazyMedia.update();
            spanClear(block);
            hideSmallImage(block);
            productsAction(block);
        }
        function homeProductsAdd(arr, block) {
            const htmlProductsTemplate = arr.join("");
            block.insertAdjacentHTML("beforeend", htmlProductsTemplate);
            lazyMedia.update();
            spanClear(block);
            hideSmallImage(block);
            productsAction(block);
            setTimeout((() => {
                _slideDown(block, 1e3);
            }), 0);
        }
        let newArrayChicken = [];
        let newArraySouce = [];
        let newArrayStew = [];
        function catalogProductsAdd(arrChicken, arrSouce, arrStew) {
            const newsPageBlock = document.querySelector("#catalogProducts");
            const tabsBody = newsPageBlock.querySelectorAll(".tabs__body");
            const tabsTitle = document.querySelectorAll(".tabs__title");
            newArrayChicken = [];
            newArraySouce = [];
            newArrayStew = [];
            let indexTitle = 0;
            tabsTitle.forEach(((el, index) => {
                const activeTitle = el.classList.contains("_tab-active");
                indexTitle = index;
                tabsBody.forEach(((tab, index) => {
                    const tabItem = tab.querySelector(".products-catalog__item");
                    const {products} = tabItem.dataset;
                    let loadProduct = false;
                    if ("chicken" === products && activeTitle && index == indexTitle) {
                        let numCards = 4;
                        function updateCardsChicken() {
                            if (window.innerWidth < 669 && false === loadProduct) numCards = 1; else numCards = 4;
                            newArrayChicken = returnArray(arrChicken);
                            pagination(newArrayChicken, tabItem, numCards, 1);
                            _slideDown(tabItem, 800);
                            loadProduct = true;
                        }
                        updateCardsChicken();
                    }
                    if ("souce" === products && activeTitle && index == indexTitle) {
                        let numCards = 4;
                        function updateCardsSouce() {
                            if (window.innerWidth < 669 && false === loadProduct) numCards = 1; else numCards = 4;
                            newArraySouce = returnArray(arrSouce);
                            pagination(newArraySouce, tabItem, numCards, 1);
                            _slideDown(tabItem, 800);
                            loadProduct = true;
                        }
                        updateCardsSouce();
                    }
                    if ("stew" === products && activeTitle && index == indexTitle) {
                        let numCards = 4;
                        function updateCardsStew() {
                            if (window.innerWidth < 669 && false === loadProduct) numCards = 1; else numCards = 4;
                            newArrayStew = returnArray(arrStew);
                            pagination(newArrayStew, tabItem, numCards, 1);
                            _slideDown(tabItem, 800);
                            loadProduct = true;
                        }
                        updateCardsStew();
                    }
                }));
            }));
        }
        function returnArray(arr) {
            return arr;
        }
        toHTML_checkBoxAction();
        function toHTML_checkBoxAction() {
            const checkBox = document.querySelectorAll(".input-filter__item");
            checkBox.forEach((el => {
                el.addEventListener("click", toHTML_checkBoxToggle);
            }));
        }
        function toHTML_checkBoxToggle() {
            const parent = this.closest(".input-filter");
            const activeCheckbox = parent.children;
            const parentFilterAttribute = parent.getAttribute("data-filter-checkbox");
            if (!this.classList.contains("_active")) {
                if ("chicken" === parentFilterAttribute) {
                    toHTML_removeActive(activeCheckbox);
                    this.classList.add("_active");
                }
                if ("stew" === parentFilterAttribute) {
                    toHTML_removeActive(activeCheckbox);
                    this.classList.add("_active");
                }
                if ("souce" === parentFilterAttribute) {
                    toHTML_removeActive(activeCheckbox);
                    this.classList.add("_active");
                }
            }
        }
        function toHTML_removeActive(arr) {
            Array.from(arr).forEach((checkBox => {
                if (checkBox.classList.contains("_active")) checkBox.classList.remove("_active");
            }));
        }
        function toHTML_removeActiveCheckbox(target) {
            const checkBox = document.querySelectorAll(".input-filter__item");
            checkBox.forEach((el => {
                if (target.classList.contains("chicken-catalog") && el.closest(".chicken-catalog")) el.classList.remove("_active");
                if (target.classList.contains("souce-catalog") && el.closest(".souce-catalog")) el.classList.remove("_active");
                if (target.classList.contains("stew-catalog") && el.closest(".stew-catalog")) el.classList.remove("_active");
            }));
        }
        function toHTML_clearCheckbox() {
            if (catalogProducts) {
                const buttonsClear = document.querySelectorAll(".button-spollers__clear");
                buttonsClear.forEach((button => {
                    button.addEventListener("click", (e => {
                        const targetElement = e.target;
                        const parentTarget = targetElement.closest(".filter-spollers__dropdown");
                        if (parentTarget) {
                            toHTML_removeActiveCheckbox(parentTarget);
                            catalogProductsAdd(catalogProductsChicken, catalogProductsSouce, catalogProductsStew);
                        }
                    }));
                }));
            }
        }
        toHTML_clearCheckbox();
        function toHTML_enterCheckbox() {
            if (catalogProducts) {
                const buttonsEnter = document.querySelectorAll(".button-spollers__enter");
                buttonsEnter.forEach((button => {
                    button.addEventListener("click", (e => {
                        const targetElement = e.target;
                        const parentTarget = targetElement.closest(".filter-spollers__dropdown");
                        if (parentTarget) updateProducts();
                    }));
                }));
            }
        }
        toHTML_enterCheckbox();
        function toHTML_checkBoxFilterItems() {
            const checkBoxItems = document.querySelectorAll(".input-filter__item");
            const filterItems = [ ...checkBoxItems ];
            const updateItems = filterItems.filter((item => {
                if (!item.classList.contains("_active")) return;
                return item.dataset.filter;
            })).map((item => item.dataset.filter));
            return updateItems;
        }
        function updateProducts() {
            const arrChicken = catalogProductsChicken;
            const arrSouce = catalogProductsSouce;
            const arrStew = catalogProductsStew;
            const divChicken = document.createElement("div");
            const divSouce = document.createElement("div");
            const divStew = document.createElement("div");
            divChicken.innerHTML = arrChicken.join("");
            divSouce.innerHTML = arrSouce.join("");
            divStew.innerHTML = arrStew.join("");
            const chickenItems = divChicken.querySelectorAll(".items-product__item");
            const souceItems = divSouce.querySelectorAll(".items-product__item");
            const stewItems = divStew.querySelectorAll(".items-product__item");
            const itemsToFilterChicken = [ ...chickenItems ];
            const itemsToFilterSouce = [ ...souceItems ];
            const itemsToFilterStew = [ ...stewItems ];
            if (0 === itemsToFilterChicken.length || 0 === itemsToFilterSouce.length || 0 === itemsToFilterStew.length) return;
            const updateArrayChicken = [];
            const updateArraySouce = [];
            const updateArrayStew = [];
            const filter = toHTML_checkBoxFilterItems();
            itemsToFilterChicken.forEach((item => {
                const {product} = item.dataset;
                if (filter.includes(product)) updateArrayChicken.push(item.outerHTML);
            }));
            itemsToFilterSouce.forEach((item => {
                const {product} = item.dataset;
                if (filter.includes(product)) updateArraySouce.push(item.outerHTML);
            }));
            itemsToFilterStew.forEach((item => {
                const {product} = item.dataset;
                if (filter.includes(product)) updateArrayStew.push(item.outerHTML);
            }));
            catalogProductsAdd(updateArrayChicken, updateArraySouce, updateArrayStew);
        }
        function spanClear(productsBlock) {
            const spanFreez = productsBlock.querySelectorAll(".small-image__freez");
            const spanCold = productsBlock.querySelectorAll(".small-image__cold");
            spanFreez.forEach((freez => {
                const parent = freez.closest(".small-image__item");
                const image = parent.querySelector("img");
                if ("" === freez.textContent) {
                    freez.style.display = "none";
                    image.style.opacity = "0.5";
                }
            }));
            spanCold.forEach((cold => {
                const parent = cold.closest(".small-image__item");
                const image = parent.querySelector("img");
                if ("" === cold.textContent) {
                    cold.style.display = "none";
                    image.style.opacity = "0.5";
                }
            }));
        }
        function hideSmallImage(productsBlock) {
            const productsArray = productsBlock.querySelectorAll(".items-product__item");
            productsArray.forEach((productType => {
                const {type} = productType.dataset;
                const smallImageBlock = productType.querySelectorAll(".small-image img");
                const smallImageBlockSpan = productType.querySelectorAll(".small-image__item span");
                smallImageBlock.forEach((img => {
                    if ("souce" === type || "stew" === type) img.remove();
                }));
                smallImageBlockSpan.forEach((span => {
                    if ("souce" === type || "stew" === type) span.remove();
                }));
            }));
        }
        class Spoller {
            constructor(selector, options) {
                let config = {
                    speed: 500,
                    allActive: false,
                    oneOpen: true,
                    spollerActive: "1",
                    closeOutside: false,
                    control: {
                        spollerControlAttribute: "[data-spoller]"
                    }
                };
                this.options = Object.assign(config, options);
                if ("string" === typeof selector) this.el = document.querySelector(selector); else this.el = selector;
                this.control = this.el.querySelectorAll(this.options.control.spollerControlAttribute);
                this.initSpollers();
                this.eventSpollers();
                this.closeOutside();
            }
            initSpollers() {
                if (this.el) {
                    this.el.classList.add("_spoller-init");
                    this.control.forEach(((item, index) => {
                        if (!item.classList.contains("_spoller-active")) {
                            item.removeAttribute("tabindex");
                            item.nextElementSibling.hidden = true;
                        } else {
                            item.setAttribute("tabindex", "-1");
                            item.nextElementSibling.hidden = false;
                        }
                        if (this.options.allActive) this.open(item);
                        if (index + 1 == this.options.spollerActive) this.open(item);
                    }));
                }
            }
            eventSpollers() {
                if (this.el) this.control.forEach((spoller => {
                    spoller.addEventListener("click", (e => {
                        e.preventDefault();
                        const el = e.target.closest("[data-spoller]");
                        const spollerBlock = el.closest("[data-spollers]");
                        if (!el.querySelectorAll("._slide").length) {
                            if (this.options.oneOpen && !el.classList.contains("_spoller-active")) this.closeOtherSpollers(spollerBlock);
                            this.toggle(el);
                        }
                    }));
                }));
            }
            closeOutside() {
                if (this.options.closeOutside) document.addEventListener("click", (e => {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) this.control.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) this.close(spollerClose);
                    }));
                }));
            }
            toggle(el) {
                el.classList.contains("_spoller-active") ? this.close(el) : this.open(el);
            }
            open(el) {
                el.classList.add("_spoller-active");
                _slideDown(el.nextElementSibling, this.options.speed);
            }
            close(el) {
                el.classList.remove("_spoller-active");
                _slideUp(el.nextElementSibling, this.options.speed);
            }
            closeOtherSpollers(spollerBlock) {
                const activeSpoller = spollerBlock.querySelector("[data-spoller]._spoller-active");
                if (activeSpoller) this.close(activeSpoller);
            }
        }
        let productsLoaded = false;
        let sliderLoad = false;
        let products = [];
        let productAdd = false;
        const productsBlock = document.querySelector("#products");
        const products_catalogProducts = document.querySelector("#catalogProducts");
        const products_moreProduct = document.querySelector(".more-products__items");
        const preloaderProducts = document.querySelector(".products__preloader");
        window.addEventListener("load", (e => {
            if (products_catalogProducts || products_moreProduct) getProducts();
            const filterProductsCategory = document.querySelector("#filterCategory");
            window.addEventListener("resize", (e => {
                resizeTabs(filterProductsCategory);
            }));
            resizeTabs(filterProductsCategory);
        }));
        const products_targetElement = document.querySelector(".page__products");
        if (productsBlock && products_targetElement) window.addEventListener("scroll", (() => {
            const topTargetElement = products_targetElement.getBoundingClientRect().top;
            if (topTargetElement <= window.innerHeight / 2 && !productAdd) {
                getProducts();
                productAdd = true;
                preloaderProducts.remove();
            }
        }));
        async function getProducts() {
            if (productsLoaded) return;
            const file = "json/products.json";
            try {
                const cacheKey = "productsCache";
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    const data = JSON.parse(cachedData);
                    products = [];
                    products.push(...data.products);
                    console.log("Cached data:", data);
                    loadProducts(products);
                    if (sliderLoad = true && window.innerWidth < 991.98) {
                        productSlider();
                        sliderLoad = false;
                    }
                    tabsSlider();
                    productsLoaded = true;
                    return;
                }
                const response = await fetch(file, {
                    method: "GET",
                    cache: "reload"
                });
                if (response.ok) {
                    products = [];
                    const data = await response.json();
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                    console.log("Data:", data);
                    products.push(...data.products);
                    loadProducts(products);
                    if (sliderLoad = true && window.innerWidth < 991.98) {
                        productSlider();
                        sliderLoad = false;
                    }
                    tabsSlider();
                    productsLoaded = true;
                }
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Finally");
            }
        }
        function clearBlock(block) {
            Array.from(block.children).forEach((item => {
                item.classList.add("_hide");
                setTimeout((() => {
                    block.innerHTML = "";
                }), 500);
            }));
        }
        function loadProducts(data) {
            if (productsBlock) {
                createHTML(data);
                productsFilter();
            }
            if (products_catalogProducts) createHTML(data);
            if (products_moreProduct) {
                createHTML(data);
                moreProductSlider();
            }
        }
        function tabsClick() {
            if (products_catalogProducts) {
                const tabsTitle = document.querySelectorAll(".tabs__title");
                tabsTitle.forEach((title => {
                    title.addEventListener("click", (e => {
                        const tabsElement = e.target.closest(".tabs__title");
                        if (title.classList.contains("_tab-active") || tabsElement.classList.contains("_tab-active")) return;
                        productsLoaded = false;
                        setTimeout((() => {
                            getProducts();
                        }), 0);
                        const spollers = title.closest("[data-tabs]").querySelectorAll("[data-spollers]");
                        spollers.forEach((spoller => {
                            if (!spoller.hasAttribute("data-spollers-init")) {
                                new Spoller(spoller, {
                                    speed: 300,
                                    oneOpen: true,
                                    allActive: false,
                                    spollerActive: "0",
                                    closeOutside: true
                                });
                                spoller.setAttribute("data-spollers-init", true);
                            }
                        }));
                    }));
                }));
            }
        }
        tabsClick();
        function productsFilter() {
            if (productsBlock) {
                const filterTabsCategory = document.querySelectorAll(".tabs__title");
                const filterTypeBlock = document.querySelectorAll(".tabs__nav>.tabs__button");
                const filterTabsType = document.querySelector("#filterType");
                const filterButtonHasAllClass = filterTabsType.querySelectorAll(".tabs__button.all");
                filterTabsCategory.forEach((tab => {
                    const {category} = tab.dataset;
                    productsActiveTabs(category, tab);
                    tab.addEventListener("click", productsTabClick);
                }));
                function productsTabClick(e) {
                    e.preventDefault();
                    const targetElement = e.target;
                    const tabElements = targetElement.closest(".tabs__title");
                    const activeClass = tabElements.classList.contains("_tab-active");
                    if (targetElement && tabElements && !activeClass) {
                        if (!productsLoaded) return;
                        productsLoaded = false;
                        if (null !== productSwiper && window.innerWidth < 991.98) {
                            sliderLoad = true;
                            destroyProductSwiper();
                        }
                        clearBlock(productsBlock);
                        setTimeout((() => {
                            getProducts();
                        }), 500);
                        remove_Class();
                        add_Class();
                    }
                }
                function productsActiveTabs(category, tab) {
                    const productArray = document.querySelectorAll(".items-product__item");
                    const activeTab = tab.classList.contains("_tab-active");
                    productArray.forEach((product => {
                        const {type} = product.dataset;
                        if (activeTab) if (category !== type) product.remove();
                    }));
                }
                filterTypeBlock.forEach((button => {
                    button.addEventListener("click", productsButtonClick);
                }));
                function productsButtonClick(e) {
                    e.preventDefault();
                    const productsArray = document.querySelectorAll(".items-product__item");
                    const targetElement = e.target;
                    const {product} = targetElement.dataset;
                    const typeProductBlock = targetElement.closest("[data-type]").dataset.type;
                    if (!targetElement.classList.contains("_active")) {
                        remove_Class();
                        targetElement.classList.add("_active");
                        productsArray.forEach((item => {
                            const {type} = item.dataset;
                            const categoryProduct = item.dataset.product;
                            if (type === typeProductBlock) if (product && "all" !== product && !categoryProduct.includes(product)) {
                                item.classList.add("_hide");
                                setTimeout((() => {
                                    item.style.display = "none";
                                }), 500);
                            } else {
                                item.classList.add("_hide");
                                setTimeout((() => {
                                    item.style.display = "";
                                    item.classList.remove("_hide");
                                }), 500);
                            }
                        }));
                    }
                }
                function remove_Class() {
                    filterTypeBlock.forEach((button => {
                        button.classList.remove("_active");
                    }));
                }
                function add_Class() {
                    filterButtonHasAllClass.forEach((button => {
                        button.classList.add("_active");
                    }));
                }
            }
        }
        function cirlceActions(slider, index) {
            const circleBlock = document.querySelector("#circle-menu");
            if (circleBlock) {
                const circleTitle = circleBlock.querySelector(".menu-cycle__title");
                const circleItems = circleBlock.querySelectorAll("[data-circle]");
                circleItems.forEach((item => {
                    if (item.classList.contains("_active")) {
                        const dataValue = item.dataset.circle;
                        if ("robot" === dataValue) circleTitle.textContent = "Наше виробництво";
                    }
                    item.addEventListener("click", (e => {
                        e.preventDefault();
                        const targetElement = e.target;
                        const menuItem = targetElement.querySelector(".menu-cycle__item") ? targetElement : targetElement.closest(".menu-cycle__item");
                        const dataValue = menuItem.dataset.circle;
                        const blockItems = menuItem.closest(".menu-cycle__list");
                        const activeItem = blockItems.querySelector(".menu-cycle__item._active");
                        if (!menuItem.classList.contains("_active")) ;
                        activeItem.classList.remove("_active");
                        menuItem.classList.add("_active");
                        if ("robot" === dataValue) circleTitle.textContent = "Наше виробництво"; else if ("egg" === dataValue) circleTitle.textContent = "Виробництво яєць"; else if ("chicken" === dataValue) circleTitle.textContent = "Виробництво кур"; else if ("grain" === dataValue) circleTitle.textContent = "Вирощування пшениці"; else if ("feed" === dataValue) circleTitle.textContent = "Виробництво кормів";
                        if (slider === dataValue) aboutSwiper.slideTo(index);
                    }));
                }));
            }
        }
        let bannerSwiper = null;
        let productSwiper = null;
        let tabsSwiper = null;
        let recipesSwiper = null;
        let newsSwiper = null;
        let productMoreSlider = null;
        let aboutSwiper = null;
        function initSliders() {
            bigBannerSlider();
            aboutSlider();
            clickTabEvent();
            clickButtonEvent();
            aboutSliderActions();
            aboutSliderPaginations();
            touchSlideChange();
        }
        window.addEventListener("load", (function(e) {
            initSliders();
            window.addEventListener("resize", (e => {
                bigBannerSlider();
                productSlider();
                tabsSlider();
                recipesSlider();
                newsSlider();
                moreProductSlider();
            }));
        }));
        function aboutSlider() {
            if (document.querySelector(".cycle__slider")) aboutSwiper = new core(".cycle__slider", {
                modules: [ Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                allowTouchMove: true,
                spaceBetween: 10,
                autoHeight: true,
                speed: 800,
                direction: "vertical",
                breakpoints: {
                    1025: {
                        allowTouchMove: false
                    }
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function(index, className) {
                        return '<span class="' + className + ' cycle__pagination " data-slide="' + index + '"></span>';
                    }
                }
            });
        }
        function aboutSliderActions() {
            const sliderAbout = document.querySelector(".cycle__slider");
            if (sliderAbout) {
                const sliderAboutSliders = sliderAbout.querySelectorAll(".swiper-slide");
                sliderAboutSliders.forEach(((slider, index) => {
                    const indexSlide = index;
                    const sliderDataValue = slider.dataset.slide;
                    cirlceActions(sliderDataValue, indexSlide);
                }));
            }
        }
        function aboutSliderPaginations() {
            const sliderPagination = document.querySelectorAll(".cycle__pagination");
            if (sliderPagination) sliderPagination.forEach((bullet => {
                bullet.addEventListener("click", aboutPaginationActions);
            }));
        }
        function aboutPaginationActions(e) {
            e.preventDefault();
            const targetBullet = e.target;
            const indexBullet = targetBullet.dataset.slide;
            const sliderAbout = document.querySelector(".cycle__slider");
            if (sliderAbout) {
                const sliderAboutSliders = sliderAbout.querySelectorAll(".swiper-slide");
                sliderAboutSliders.forEach(((slider, index) => {
                    const indexSlide = index;
                    const sliderDataValue = slider.dataset.slide;
                    if (indexBullet == indexSlide) cirlceSlideActions(sliderDataValue);
                }));
            }
        }
        function cirlceSlideActions(sliderDataValue) {
            const circleBlock = document.querySelector("#circle-menu");
            if (circleBlock) {
                const circleTitle = circleBlock.querySelector(".menu-cycle__title");
                const circleItems = circleBlock.querySelectorAll("[data-circle]");
                circleItems.forEach((item => {
                    const dataValue = item.dataset.circle;
                    const activeItem = item.classList.contains("_active");
                    const blockItems = item.closest(".menu-cycle__list");
                    const activeClass = blockItems.querySelector(".menu-cycle__item._active");
                    if (sliderDataValue === dataValue && !activeItem) {
                        if ("robot" === dataValue) circleTitle.textContent = "Наше виробництво "; else if ("egg" === dataValue) circleTitle.textContent = "Виробництво яєць"; else if ("chicken" === dataValue) circleTitle.textContent = "Виробництво кур"; else if ("grain" === dataValue) circleTitle.textContent = "Вирощування пшениці"; else if ("feed" === dataValue) circleTitle.textContent = "Виробництво кормів";
                        activeClass.classList.remove("_active");
                        item.classList.add("_active");
                    }
                }));
            }
        }
        function touchSlideChange() {
            if (null !== aboutSwiper) aboutSwiper.on("slideChangeTransitionStart", (e => {
                let activeSlideIndex = aboutSwiper.activeIndex;
                const sliderAbout = document.querySelector(".cycle__slider");
                if (sliderAbout) {
                    const sliderAboutSliders = sliderAbout.querySelectorAll(".swiper-slide");
                    sliderAboutSliders.forEach(((slider, index) => {
                        const indexSlide = index;
                        const sliderDataValue = slider.dataset.slide;
                        if (activeSlideIndex == indexSlide) cirlceSlideActions(sliderDataValue);
                    }));
                }
            }));
        }
        function buildBannerSlider() {
            let sliders = document.querySelectorAll('[class*="__banner-swiper"]:not(.swiper-wrapper)');
            if (sliders) sliders.forEach((slider => {
                slider.parentElement.classList.add("swiper");
                slider.classList.add("swiper-wrapper");
                for (const slide of slider.children) slide.classList.add("swiper-slide");
            }));
        }
        function buildMoreProductSlider() {
            let sliders = document.querySelectorAll('[class*="__more-swiper"]:not(.swiper-wrapper)');
            if (sliders) sliders.forEach((slider => {
                slider.parentElement.classList.add("swiper");
                slider.classList.add("swiper-wrapper");
                for (const slide of slider.children) slide.classList.add("swiper-slide");
            }));
        }
        function buildProductSlider() {
            let sliders = document.querySelectorAll('[class*="__product-swiper"]:not(.swiper-wrapper)');
            if (sliders) sliders.forEach((slider => {
                slider.parentElement.classList.add("swiper");
                slider.classList.add("swiper-wrapper");
                for (const slide of slider.children) slide.classList.add("swiper-slide");
            }));
        }
        function buildTabsSlider() {
            let sliders = document.querySelectorAll('[class*="__tab-swiper"]:not(.swiper-wrapper)');
            if (sliders) {
                sliders.forEach((slider => {
                    slider.parentElement.classList.add("swiper");
                    slider.classList.add("swiper-wrapper");
                    const swiperClass = slider.closest(".swiper-wrapper");
                    for (const slide of slider.children) slide.classList.add("swiper-slide");
                    hideSwiperTabs(swiperClass);
                }));
                function hideSwiperTabs(swiperClass) {
                    const {type} = swiperClass.dataset;
                    if ("chicken" !== type) swiperClass.style.display = "none"; else swiperClass.style.display = "";
                }
            }
        }
        function buildRecipesSlider() {
            let sliders = document.querySelectorAll('[class*="__recipes-swiper"]:not(.swiper-wrapper)');
            if (sliders) sliders.forEach((slider => {
                slider.parentElement.classList.add("swiper");
                slider.classList.add("swiper-wrapper");
                for (const slide of slider.children) slide.classList.add("swiper-slide");
            }));
        }
        function buildNewsSlider() {
            let sliders = document.querySelectorAll('[class*="__news-swiper"]:not(.swiper-wrapper)');
            if (sliders) sliders.forEach((slider => {
                slider.parentElement.classList.add("swiper");
                slider.classList.add("swiper-wrapper");
                for (const slide of slider.children) slide.classList.add("swiper-slide");
            }));
        }
        function newsSlider() {
            if (window.innerWidth <= 669.98 && null === newsSwiper) {
                if (document.querySelector(".news__slider")) {
                    buildNewsSlider();
                    newsSwiper = new core(".news__slider", {
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        autoHeight: true,
                        speed: 800,
                        preloadImages: true,
                        lazy: true
                    });
                }
            } else destroyNewsSlider();
        }
        function recipesSlider() {
            if (window.innerWidth <= 669.98 && null === recipesSwiper) {
                if (document.querySelector(".recipes__slider")) {
                    buildRecipesSlider();
                    recipesSwiper = new core(".recipes__slider", {
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        autoHeight: true,
                        speed: 800,
                        preloadImages: true,
                        lazy: true
                    });
                }
            } else destroyRecipesSlider();
        }
        function moreProductSlider() {
            if (window.innerWidth <= 992 && null === productMoreSlider) {
                if (document.querySelector(".more-products__slider")) {
                    buildMoreProductSlider();
                    productMoreSlider = new core(".more-products__slider", {
                        observer: true,
                        observeParents: true,
                        spaceBetween: 10,
                        autoHeight: true,
                        speed: 800,
                        preloadImages: true,
                        lazy: true,
                        breakpoints: {
                            320: {
                                slidesPerView: 1.2
                            },
                            650: {
                                slidesPerView: 2.2
                            }
                        }
                    });
                }
            } else destroyMoreProductSlider();
        }
        function tabsSlider() {
            if (window.innerWidth < 860.98 && null === tabsSwiper && null !== productSwiper) {
                if (document.querySelector(".tabs__slider")) {
                    buildTabsSlider();
                    tabsSwiper = new core(".tabs__slider", {
                        observer: true,
                        observeParents: true,
                        slidesPerView: 5,
                        spaceBetween: 10,
                        autoHeight: true,
                        speed: 800,
                        breakpoints: {
                            280: {
                                slidesPerView: 1.2,
                                spaceBetween: 10
                            },
                            320: {
                                slidesPerView: 1.75,
                                spaceBetween: 10
                            },
                            375: {
                                slidesPerView: 2.5,
                                spaceBetween: 10
                            },
                            700: {
                                slidesPerView: 4.5,
                                spaceBetween: 10
                            }
                        }
                    });
                }
            } else destroyTabsSwiper();
        }
        function bigBannerSlider() {
            if (window.innerWidth >= 992 && null === bannerSwiper) {
                if (document.querySelector(".big-banner__slider")) {
                    buildBannerSlider();
                    bannerSwiper = new core(".big-banner__slider", {
                        modules: [ Navigation, Pagination ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1,
                        spaceBetween: 10,
                        autoHeight: true,
                        speed: 800,
                        preloadImages: true,
                        lazy: true,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true
                        },
                        navigation: {
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next"
                        },
                        on: {}
                    });
                }
            } else destroyBannerSwiper();
        }
        function productSlider() {
            if (window.innerWidth < 991.98 && null === productSwiper || sliderLoad) {
                if (document.querySelector(".products__slider")) {
                    buildProductSlider();
                    productSwiper = new core(".products__slider", {
                        allowTouchMove: true,
                        observer: true,
                        observeParents: true,
                        observeSlideChildren: true,
                        watchSlidesVisibility: true,
                        autoHeight: false,
                        speed: 800,
                        preloadImages: true,
                        lazy: true,
                        breakpoints: {
                            320: {
                                slidesPerView: 1.2,
                                spaceBetween: 10
                            },
                            580: {
                                slidesPerView: 2.2,
                                spaceBetween: 10
                            },
                            823: {
                                slidesPerView: 3.2,
                                spaceBetween: 10
                            }
                        },
                        on: {}
                    });
                    productSwiper.slideTo(0);
                }
            } else destroyProductSwiper();
        }
        function clickButtonEvent() {
            const filterButton = document.querySelectorAll(".tabs__button");
            filterButton.forEach((button => {
                button.addEventListener("click", (e => {
                    e.preventDefault();
                    if (null !== productSwiper) {
                        const targetElement = e.target;
                        const {product} = targetElement.dataset;
                        let sliders = document.querySelectorAll(".products__product-swiper");
                        if (sliders) sliders.forEach((slider => {
                            for (const slide of slider.children) {
                                const slideProduct = slide.dataset.product;
                                if ("all" !== product) {
                                    destroyProductSwiper();
                                    productSlider();
                                    productSwiper.slideTo(0);
                                } else if (slideProduct !== product) {
                                    destroyProductSwiper();
                                    productSlider();
                                    productSwiper.slideTo(0);
                                }
                            }
                        }));
                    }
                }));
            }));
        }
        function clickTabEvent() {
            if (null !== productSwiper || !sliderLoad) {
                const tabTitle = document.querySelectorAll(".tabs__title");
                tabTitle.forEach((tab => {
                    tab.addEventListener("click", (e => {
                        e.preventDefault();
                        const targetElement = e.target;
                        const {category} = targetElement.dataset;
                        const iconTabCategory = targetElement.closest(".tabs__title").dataset.category;
                        const spanTabs = targetElement.closest(".tabs__title").dataset.category;
                        const tabsParent = targetElement.closest(".tabs");
                        const tabsNav = tabsParent.querySelectorAll(".tabs__nav");
                        tabsNav.forEach((nav => {
                            const {type} = nav.dataset;
                            const swiperClass = nav.closest(".swiper-wrapper");
                            if (!targetElement && category !== type || iconTabCategory !== type || spanTabs !== type) {
                                if (swiperClass) swiperClass.style.display = "none";
                            } else if (swiperClass) swiperClass.style.display = "";
                            if (null !== productSwiper) productSwiper.slideTo(0);
                            if (null !== tabsSwiper) if (null !== tabsSwiper[0]) tabsSwiper[0].slideTo(0); else if (null !== tabsSwiper[1]) tabsSwiper[1].slideTo(0); else if (null !== tabsSwiper[2]) tabsSwiper[2].slideTo(0);
                        }));
                    }));
                }));
            }
        }
        function destroyRecipesSlider() {
            if (window.innerWidth > 670 && null !== recipesSwiper) {
                recipesSwiper.destroy(true, true);
                recipesSwiper = null;
                let sliders = document.querySelectorAll('[class*="__recipes-swiper"]');
                if (sliders) sliders.forEach((slider => {
                    slider.parentElement.classList.remove("swiper");
                    slider.classList.remove("swiper-wrapper");
                    for (const slide of slider.children) slide.classList.remove("swiper-slide");
                }));
            }
        }
        function destroyMoreProductSlider() {
            if (window.innerWidth > 992 && null !== productMoreSlider) {
                productMoreSlider.destroy(true, true);
                productMoreSlider = null;
                let sliders = document.querySelectorAll('[class*="__more-swiper"]');
                if (sliders) sliders.forEach((slider => {
                    slider.parentElement.classList.remove("swiper");
                    slider.classList.remove("swiper-wrapper");
                    for (const slide of slider.children) slide.classList.remove("swiper-slide");
                }));
            }
        }
        function destroyNewsSlider() {
            if (window.innerWidth > 670 && null !== newsSwiper) {
                newsSwiper.destroy(true, true);
                newsSwiper = null;
                let sliders = document.querySelectorAll('[class*="__news-swiper"]');
                if (sliders) sliders.forEach((slider => {
                    slider.parentElement.classList.remove("swiper");
                    slider.classList.remove("swiper-wrapper");
                    for (const slide of slider.children) slide.classList.remove("swiper-slide");
                }));
            }
        }
        function destroyBannerSwiper() {
            if (window.innerWidth < 992 && null !== bannerSwiper) {
                bannerSwiper.destroy(true, true);
                bannerSwiper = null;
                let sliders = document.querySelectorAll(".big-banner__banner-swiper");
                if (sliders) sliders.forEach((slider => {
                    slider.parentElement.classList.remove("swiper");
                    slider.classList.remove("swiper-wrapper");
                    for (const slide of slider.children) slide.classList.remove("swiper-slide");
                }));
            }
        }
        function destroyProductSwiper() {
            if (window.innerWidth >= 992 && null !== productSwiper || sliderLoad) {
                productSwiper.destroy(true, true);
                productSwiper = null;
                let sliders = document.querySelectorAll(".products__product-swiper");
                if (sliders) sliders.forEach((slider => {
                    slider.parentElement.classList.remove("swiper");
                    slider.classList.remove("swiper-wrapper");
                    for (const slide of slider.children) if (slide.classList.contains("swiper-slide")) slide.classList.remove("swiper-slide");
                }));
            }
        }
        function destroyTabsSwiper() {
            if (window.innerWidth >= 861 && null !== tabsSwiper) {
                tabsSwiper.forEach((slider => {
                    slider.destroy(true, true);
                }));
                tabsSwiper = null;
                let sliders = document.querySelectorAll(".tabs__tab-swiper");
                if (sliders) sliders.forEach((slider => {
                    slider.parentElement.classList.remove("swiper");
                    slider.classList.remove("swiper-wrapper");
                    for (const slide of slider.children) slide.classList.remove("swiper-slide");
                }));
            }
        }
        class Tabs {
            constructor(selector, options) {
                let config = {
                    animated: false,
                    speed: 300,
                    tabInSpoller: false,
                    hash: false,
                    activeTab: 1,
                    isInit: () => {}
                };
                this.options = Object.assign(config, options);
                this.el = document.querySelectorAll(selector);
                this.initTabs();
            }
            initTabs() {
                let tabsActiveHash = [];
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                if (this.el) {
                    this.el.forEach(((tabsBlock, index) => {
                        tabsBlock.classList.add("_tab-init");
                        tabsBlock.setAttribute("data-tabs-index", index);
                        this.options.isInit();
                        this.activeTab(tabsBlock);
                        this.contentTabs(tabsBlock, tabsActiveHash);
                        this.eventTabs(tabsBlock);
                    }));
                    if (this.options.tabInSpoller) this.mediaQueries();
                }
            }
            eventTabs(tabsBlock) {
                tabsBlock.addEventListener("click", (e => {
                    e.preventDefault();
                    const el = e.target;
                    if (el.closest("[data-tabs-title]")) {
                        const tabTitle = el.closest("[data-tabs-title]");
                        const tabsBlock = tabTitle.closest("[data-tabs]");
                        if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                            let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                            tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                            tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                            tabTitle.classList.add("_tab-active");
                            this.setTabsStatus(tabsBlock);
                        }
                    }
                }));
            }
            contentTabs(tabsBlock, tabsActiveHash) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                if (tabsContent.length > 0) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (this.options.animated) _slideDown(tabsContentItem, this.options.speed); else tabsContentItem.hidden = false;
                            if (this.options.hash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (this.options.animated) _slideUp(tabsContentItem, this.options.speed); else tabsContentItem.hidden = true;
                    }));
                }
            }
            mediaQueries() {
                let mdQueriesArray = dataMediaQueries(this.el, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (() => {
                        this.setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    this.setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            activeTab(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                tabsTitles.forEach(((tabtitle, index) => {
                    if (index + 1 == this.options.activeTab) tabtitle.classList.add("_tab-active");
                }));
            }
        }
        projectModules.tabs = new Tabs("[data-tabs]", {
            speed: 300,
            animated: false,
            tabInSpoller: false,
            hash: false,
            activeTab: "1",
            isInit: () => {
                console.log("Tabs init");
            }
        });
        const spollers = document.querySelectorAll("[data-spollers]");
        if (spollers.length) projectModules.spoller = new Spoller("[data-spollers]", {
            speed: 300,
            oneOpen: true,
            allActive: false,
            spollerActive: "0",
            closeOutside: true
        });
        const product_file = "json/products.json";
        const productPage = document.querySelector(".product-page__content");
        let productsArray = [];
        window.addEventListener("load", (e => {
            if (productPage) getProductPageData();
        }));
        async function getProductPageData() {
            try {
                const cacheKey = "productCache";
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    const data = JSON.parse(cachedData);
                    console.log("Cached data:", data);
                    productsArray = [];
                    productsArray.push(...data.products);
                    loadProductPage(productsArray);
                    return;
                }
                const response = await fetch(product_file, {
                    method: "GET",
                    cache: "reload"
                });
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                    console.log("Data:", data);
                    productsArray = [];
                    productsArray.push(...data.products);
                    loadProductPage(productsArray);
                }
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Finally");
            }
        }
        function loadProductPage(data) {
            const arrayProducts = [];
            data.forEach((item => {
                const id = item.id, type = (item.url, item.type), product = item.product, image = item.image, title = item.title, freez = item.freez, cold = item.cold, info = item.info, freezInfo = item.freezProduct, coldInfo = item.coldProduct, storageFrom = item.storageFrom, storageTo = item.storageTo, bestBefore = item.bestBefore, energyValue = item.energyValue;
                let productPageTemplate = "";
                const productItem = `\n            <article id="${id}" data-type=${type} data-product=${product} class="content-product-page__item ${product}">\n              <div class="content-product-page__image">\n                  <img data-src="img/products/${image}" class="lazy" alt="${title}">\n                    <div class="preloader-image"></div>\n              </div>\n               <div class="content-product-page__info">\n                   <div class="content-product-page__small-image small-image-product">\n                     <div class="small-image-product__item">\n                       <span class="small-image-product__freez">${freezInfo ? info : ""}</span>\n                         <img data-src="img/products/${freez}" class="lazy" alt="${info ? info : "Іконка"}">\n                       </div>\n                      <div class="small-image-product__item">\n                        <span class="small-image-product__cold">${coldInfo ? info : ""}</span>\n                          <img data-src="img/products/${cold}" class="lazy" alt="${info ? info : "Іконка"}">\n                      </div>\n                    </div>\n                  <h2 class="content-product-page__title">${title}</h2> \n                    <div class="content-product-page__savings">\n                         <h3 class="content-product-page__savings-title">Умови зберігання</h3>\n                         <div class="content-product-page__savings-info">Термін зберігання:<span>${bestBefore}</span>\n                         <div class="content-product-page__savings-info">При температурі:<span>${storageFrom} ${storageTo ? storageTo : ""}</span>\n                   </div>\n                  </div>\n                   </div>\n                `;
                energyValue.forEach((value => {
                    const energyItem = ` \n                      <div class="content-product-page__nutritional">\n                        <h3 class="content-product-page__nutritional-title">Харчова цінність на 100 г продукту</h3>\n                           <div class="content-product-page__nutritional-info">Білки:<span>${value.protein}г;</span>\n                           <div class="content-product-page__nutritional-info">Жири:<span>${value.fat}г;</span>\n                           <div class="content-product-page__nutritional-info">Калорії:<span>${kkalCalc(value.kkal)}кДж/${value.kkal}ккал.</span>\n                      </div>\n                  </div >\n                  `;
                    productPageTemplate += productItem;
                    productPageTemplate += energyItem;
                    productPageTemplate += `</article>`;
                    arrayProducts.push(productPageTemplate);
                }));
            }));
            if (productPage) onePageProduct(arrayProducts, productPage);
        }
        function onePageProduct(arr, block) {
            const oneProduct = arr.slice(0, 1);
            const oneHtmlProduct = oneProduct.join("");
            block.insertAdjacentHTML("beforeend", oneHtmlProduct);
            lazyMedia.update();
            spanClearOneProduct(block);
            hideSmallOneImage(block);
        }
        function kkalCalc(kkal) {
            let power = 4.1868 * kkal;
            return power.toFixed(1);
        }
        function spanClearOneProduct(productsBlock) {
            const spanFreez = productsBlock.querySelector(".small-image-product__freez");
            const spanCold = productsBlock.querySelector(".small-image-product__cold");
            const parentFreez = spanFreez.closest(".small-image-product__item");
            const imageFreez = parentFreez.querySelector("img");
            if ("" === spanFreez.textContent) {
                spanFreez.style.display = "none";
                imageFreez.style.opacity = "0.5";
            }
            const parentCold = spanCold.closest(".small-image-product__item");
            const imageCold = parentCold.querySelector("img");
            if ("" === spanCold.textContent) {
                spanCold.style.display = "none";
                imageCold.style.opacity = "0.5";
            }
        }
        function hideSmallOneImage(productsBlock) {
            const product = productsBlock.querySelector(".content-product-page__item");
            const {type} = product.dataset;
            const smallImageBlock = product.querySelectorAll(".small-image-product img");
            const smallImageBlockSpan = product.querySelectorAll(".small-image-product__item span");
            smallImageBlock.forEach((img => {
                if ("souce" === type || "stew" === type) img.remove();
            }));
            smallImageBlockSpan.forEach((span => {
                if ("souce" === type || "stew" === type) span.remove();
            }));
        }
        const ramen_file = "json/recipes.json";
        const ramenInfoBlock = document.querySelector("#ramenInfo");
        window.addEventListener("load", (e => {
            if (ramenInfoBlock) getRecipeData();
            const recipeNav = document.querySelector("#recipeNav");
            window.addEventListener("resize", (e => {
                resizeTabs(recipeNav);
            }));
            resizeTabs(recipeNav);
        }));
        async function getRecipeData() {
            try {
                const cacheKey = "ramenCache";
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    const data = JSON.parse(cachedData);
                    console.log("Cached data:", data);
                    loadRamenRecipe(data);
                    return;
                }
                const response = await fetch(ramen_file, {
                    method: "GET",
                    cache: "reload"
                });
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                    console.log("Data:", data);
                    loadRamenRecipe(data);
                }
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Finally");
            }
        }
        function loadRamenRecipe(data) {
            data.recipes.forEach((item => {
                const id = item.id, image = item.ramenPageImage, title = item.title, text = item.text, info = item.info, history = item.recipeHistory, timeIcon = item.timeIcon, groupIcon = item.groupIcon, hardIcon = item.hardIcon, pepperIcon = item.spicinessIcon;
                let ramenInfoTemplate = "";
                const articleRamenStart = `\n               <article id="${id}" class="ramen__recipe">\n                   <div class="ramen__header">\n            `;
                const ramenRecipeLoad = `\n               <div id="loadRecipe" class="ramen__load load">\n                   <button data-load class="load__button">\n                   Завантажити рецепт\n                     \t<svg class="load__icon">\n\t\t\t\t\t           <use xlink:href="img/icons/icons.svg#long-arrow-red"></use>\n\t\t\t\t            </svg>\n                   </button>\n               </div>\n                </div>\n            `;
                const ramenInfo = `\n                       <div class="ramen__top">\n                         <div class="ramen__info">\n                           <div class="ramen__title">${title}</div>\n                            <div class="ramen__icon icon-recipes">\n                              <svg class="icon-recipes__icon">\n                               <use xlink:href="img/icons/icons.svg#${pepperIcon}"></use>\n                            </svg>  \n                         </div>\n                       </div>\n                     <div class="ramen__text">${text}</div>\n                    <div class="ramen__history">\n                        <p>${history}</p>\n                    </div>\n                      <div class="ramen__image">\n                        <img data-src="img/recipes/page_recipes/${image}" class="lazy" alt="${title}" width="100%" height="100%">\n                     </div>\n            `;
                info.forEach((value => {
                    const ramenIcons = `\n              <div class="ramen__specification specification-recipes">\n               <div class="specification-recipes__item">\n                  <img data-src="img/recipes/${hardIcon}" class="lazy" alt="personIcon">\n                  <span>${value.recipeComplexity}</span>\n              </div>\n              <div class="specification-recipes__item">\n                  <img data-src="img/recipes/${timeIcon}" class="lazy" alt="timeIcon">\n                  <span>${value.time}</span>\n              </div>\n                <div class="specification-recipes__item">\n                    <img data-src="img/recipes/${groupIcon}" class="lazy" alt="hardIcon">\n                  <span>${value.inPortion}</span>\n              </div>\n           </div>\n              `;
                    ramenInfoTemplate += articleRamenStart;
                    ramenInfoTemplate += ramenIcons;
                    ramenInfoTemplate += ramenRecipeLoad;
                    ramenInfoTemplate += ramenInfo;
                    ramenInfoTemplate += `</article>`;
                    if ("1" == id) addRecipe(ramenInfoTemplate, ramenInfoBlock);
                }));
            }));
        }
        function addRecipe(arr, block) {
            block.insertAdjacentHTML("beforeend", arr);
            lazyMedia.update();
            downLoadFile();
        }
        function downLoadFile() {
            const button = document.querySelector("[data-load]");
            if (button) button.addEventListener("click", clickButton);
        }
        function clickButton(e) {
            e.preventDefault();
            const targetButton = e.target;
            if (targetButton) downloadFile("files/ramen.pdf", "ramen.pdf");
        }
        function downloadFile(url, nameFile) {
            const downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = nameFile;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            downloadLink.addEventListener("click", (() => {
                document.body.removeChild(downloadLink);
            }));
        }
        const newsPageBlock = document.querySelector("#news-actions");
        const newsBlock = document.querySelector("#newsHome");
        const newsDate = document.querySelector("#date");
        const newsContent = document.querySelector("#content");
        const preloaderNews = document.querySelector(".news__preloader");
        document.querySelector(".page__news");
        let newsAdd = false;
        window.addEventListener("load", (e => {
            if (newsPageBlock || newsDate && newsContent) {
                getNews();
                preloaderNews.remove();
            }
        }));
        const news_targetElement = document.querySelector(".page__news");
        if (newsBlock && news_targetElement) window.addEventListener("scroll", (() => {
            const topTargetElement = news_targetElement.getBoundingClientRect().top;
            if (topTargetElement <= window.innerHeight / 2 && !newsAdd) {
                getNews();
                newsAdd = true;
                preloaderNews.remove();
            }
        }));
        let arrNews = [];
        async function getNews() {
            try {
                const file = "json/news_and_actions.json";
                const cacheKey = "newsCache";
                const cachedData = localStorage.getItem(cacheKey);
                if (cachedData) {
                    const data = JSON.parse(cachedData);
                    arrNews = [];
                    arrNews.push(...data.news);
                    console.log("Cached data:", data);
                    loadNews(arrNews);
                    newsSlider();
                    return;
                }
                const response = await fetch(file, {
                    method: "GET",
                    cache: "reload"
                });
                if (response.ok) {
                    const data = await response.json();
                    arrNews = [];
                    arrNews.push(...data.news);
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                    console.log("Data:", data);
                    loadNews(arrNews);
                    newsSlider();
                }
            } catch (err) {
                console.error(err);
            } finally {
                console.log("Finally");
            }
        }
        function loadNews(data) {
            const htmlDate = [];
            const htmlImage = [];
            const arrHomeNewsTemplate = [];
            const arrNewsTemplate = [];
            const arrActionsTemplate = [];
            let newsTemplate = "";
            data.forEach((item => {
                const id = item.id, url = item.url, image = item.image, logo = item.logo, title = item.title, date = item.date, type = item.type;
                newsTemplate = "";
                const newsItem = `\n                <article id="${id}" data-type="${type}" class="items-news__item">\n                    <div class="items-news__logo">\n                      <img data-src="img/news_and_actions/${logo}" class="lazy" alt="Logo" width="100%" height="100%" >\n                   </div>\n                 <div class="items-news__image">\n                     <a href="${url}">\n                        <img data-src="img/news_and_actions/${image}" class=""lazy alt="${type}" width="100%" height="100%">\n                       <div class="swiper-lazy-preloader"></div>\n                    </a>\n                </div>\n                 <div class="items-news__info">\n                      <div class="items-news__title">${title}</div>\n                      <span>${date}</span>\n                 </div>\n               <div class="items-news__type news-type">${type}</div>\n              `;
                newsTemplate += newsItem;
                newsTemplate += `</article>`;
                const newsActions_Date = `  \n                     <div class="news-actions__type news-type">${type}</div>\n                      <span>${date}</span>\n                   `;
                const newsActions_ImageTitle = `\n               <div class="news-actions__image">\n                        <img src="img/news_and_actions/${image}" alt="${title}" width="100%" height="100%">\n                </div>\n                 <div class="news-actions__title">${title}</div>\n            `;
                htmlDate.push(newsActions_Date);
                htmlImage.push(newsActions_ImageTitle);
                arrHomeNewsTemplate.push(newsTemplate);
                if ("#Новина" === type) arrNewsTemplate.push(newsTemplate);
                if ("#Акція" === type) arrActionsTemplate.push(newsTemplate);
            }));
            if (newsPageBlock) {
                tabsBodyHtml(arrHomeNewsTemplate, arrNewsTemplate, arrActionsTemplate);
                lazyMedia.update();
            }
            if (newsBlock) {
                homeBlockNews(arrHomeNewsTemplate, newsBlock);
                lazyMedia.update();
            }
            if (newsDate && newsContent) {
                newsPageHtml(htmlDate, htmlImage, newsDate, newsContent);
                lazyMedia.update();
            }
        }
        function newsPageHtml(arrDate, arrImage, blockDate, blockContent) {
            const htmlDateArray = arrDate.slice(3, 4);
            const htmlDateTemplate = htmlDateArray.join("");
            const htmlImageArray = arrImage.slice(3, 4);
            const htmlImageTemplate = htmlImageArray.join("");
            blockDate.insertAdjacentHTML("beforeend", htmlDateTemplate);
            blockContent.insertAdjacentHTML("beforeend", htmlImageTemplate);
        }
        function homeBlockNews(arr, block) {
            const htmlNews = arr.slice(0, 4);
            const htmlNewsTemplate = htmlNews.join("");
            block.insertAdjacentHTML("beforeend", htmlNewsTemplate);
        }
        function news_tabsClick() {
            if (newsPageBlock) {
                const tabsTitle = document.querySelectorAll(".tabs__title");
                tabsTitle.forEach((title => {
                    title.addEventListener("click", (e => {
                        const tabsElement = e.target.closest(".tabs__title");
                        if (title.classList.contains("_tab-active") || tabsElement.classList.contains("_tab-active")) return;
                        setTimeout((() => {
                            getNews();
                        }), 0);
                    }));
                }));
            }
        }
        news_tabsClick();
        function tabsBodyHtml(allArr, arrNews, arrActions) {
            const newsPageBlock = document.querySelector("#news-actions");
            const tabsBody = newsPageBlock.querySelectorAll(".tabs__body");
            const tabsTitle = document.querySelectorAll(".tabs__title");
            let indexTitle = 0;
            tabsTitle.forEach(((el, index) => {
                const activeTitle = el.classList.contains("_tab-active");
                indexTitle = index;
                tabsBody.forEach(((tab, index) => {
                    const tabItem = tab.querySelector(".news-actions__item");
                    const {news} = tabItem.dataset;
                    let loadProduct = false;
                    if ("all" === news && activeTitle && index == indexTitle) {
                        let numCards = 4;
                        function updateCardsAll() {
                            if (window.innerWidth < 668 && false === loadProduct) numCards = 1; else numCards = 4;
                            pagination(allArr, tabItem, numCards, 1);
                            _slideDown(tabItem, 800);
                            loadProduct = true;
                        }
                        updateCardsAll();
                    }
                    if ("news" === news && activeTitle && index === indexTitle) {
                        let numCards = 4;
                        function updateCardsNews() {
                            if (window.innerWidth < 668 && false === loadProduct) numCards = 1; else numCards = 4;
                            pagination(arrNews, tabItem, numCards, 1);
                            _slideDown(tabItem, 800);
                            loadProduct = true;
                        }
                        updateCardsNews();
                    }
                    if ("actions" === news && activeTitle && index === indexTitle) {
                        let numCards = 4;
                        function updateCardsActions() {
                            if (window.innerWidth < 668 && false === loadProduct) numCards = 1; else numCards = 4;
                            pagination(arrActions, tabItem, numCards, 1);
                            _slideDown(tabItem, 800);
                            loadProduct = true;
                        }
                        updateCardsActions();
                    }
                }));
            }));
        }
        __webpack_require__(125);
        const inputMasks = document.querySelectorAll('input[type="tel"]');
        if (inputMasks.length) inputMasks.forEach((input => {
            input.addEventListener("mouseenter", (e => {
                projectModules.inputmask = Inputmask("+3(999)999-99-99").mask(input);
            }));
        }));
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (e => {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (e => {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (0 === error) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Помилка");
                            form.classList.remove("_sending");
                            setTimeout((() => {
                                if (projectModules.popup) {
                                    const popup = form.dataset.popupError;
                                    popup ? projectModules.popup.open(popup) : null;
                                }
                            }), 100);
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else e.preventDefault();
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (projectModules.popup) {
                        const popup = document.querySelector("#callback");
                        popup ? projectModules.popup.close(popup) : null;
                    }
                }), 0);
                setTimeout((() => {
                    if (projectModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? projectModules.popup.open(popup) : null;
                    }
                }), 300);
                formValidate.formClean(form);
                formLogging(`Форму відправлено!`);
            }
            function formLogging(message) {
                FLS(`[Форми]: ${message}`);
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if ("email" === formRequiredItem.dataset.required) {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        formRequiredItem.classList.remove("_form-done");
                        error++;
                    } else {
                        this.removeError(formRequiredItem);
                        formRequiredItem.classList.add("_form-done");
                    }
                } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    formRequiredItem.classList.remove("_form-done");
                    error++;
                } else if ("name" === formRequiredItem.dataset.required && formRequiredItem.value.length < 3) {
                    this.addError(formRequiredItem);
                    formRequiredItem.classList.remove("_form-done");
                    error++;
                } else if ("phone" === formRequiredItem.dataset.required && 10 === formRequiredItem.value.length) {
                    this.addError(formRequiredItem);
                    formRequiredItem.classList.remove("_form-done");
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else {
                    this.removeError(formRequiredItem);
                    formRequiredItem.classList.add("_form-done");
                }
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.classList.remove("_form-done");
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (projectModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            projectModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (event => {
                const targetElement = event.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (event => {
                const targetElement = event.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (event => {
                let targetElement = event.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        function placeholderAction() {
            const label = document.querySelectorAll(".form__label");
            label.forEach((el => {
                const inputParent = el.closest(".form__item");
                const input = inputParent.querySelector("input");
                input.addEventListener("click", (e => {
                    const targetElement = e.target;
                    const focusClass = targetElement.classList.contains("_form-focus");
                    if (focusClass) {
                        el.classList.add("_action");
                        document.addEventListener("click", (e => {
                            if (e.target !== targetElement) {
                                el.classList.remove("_action");
                                if (focusClass && "" !== targetElement.value) el.style.opacity = "0"; else el.style.opacity = "0.5";
                            }
                        }));
                        if (focusClass && "" !== targetElement.value) el.style.opacity = "1";
                        if (focusClass && "" === targetElement.value) el.style.opacity = "1";
                    }
                }));
            }));
        }
        var smooth_scroll_polyfills_min = __webpack_require__(2);
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof smooth_scroll_polyfills_min) (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (projectModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (null !== fullpageSectionId) {
                                projectModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (e => {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: () => {},
                        afterOpen: () => {},
                        beforeClose: () => {},
                        afterClose: () => {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if ("error" !== this._dataValue) {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? general_functions_bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && 0 === focusedIndex) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        projectModules.popup = new Popup({});
        window["FLS"] = true;
        isWebp();
        menuInit();
        formFieldsInit({
            viewPass: false,
            autoHeight: true
        });
        formSubmit();
        placeholderAction();
        pageNavigation();
        cirlceActions();
    })();
})();