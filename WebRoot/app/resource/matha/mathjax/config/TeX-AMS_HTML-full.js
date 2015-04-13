MathJax.Ajax.Preloading("[MathJax]/jax/input/TeX/config.js", "[MathJax]/jax/output/HTML-CSS/config.js", "[MathJax]/extensions/tex2jax.js", "[MathJax]/extensions/MathEvents.js", "[MathJax]/extensions/MathZoom.js", "[MathJax]/extensions/MathMenu.js", "[MathJax]/jax/element/mml/jax.js", "[MathJax]/extensions/toMathML.js", "[MathJax]/extensions/TeX/noErrors.js", "[MathJax]/extensions/TeX/noUndefined.js", "[MathJax]/jax/input/TeX/jax.js", "[MathJax]/extensions/TeX/AMSmath.js", "[MathJax]/extensions/TeX/AMSsymbols.js", "[MathJax]/jax/output/HTML-CSS/jax.js", "[MathJax]/jax/output/HTML-CSS/autoload/mtable.js");

MathJax.Hub.Config({
    "v1.0-compatible": false
});

MathJax.InputJax.TeX = MathJax.InputJax({
    id: "TeX",
    version: "2.3",
    directory: MathJax.InputJax.directory + "/TeX",
    extensionDir: MathJax.InputJax.extensionDir + "/TeX",
    config: {
        TagSide: "right",
        TagIndent: "0.8em",
        MultLineWidth: "85%",
        equationNumbers: {
            autoNumber: "none",
            formatNumber: function(a) {
                return a
            },
            formatTag: function(a) {
                return "(" + a + ")"
            },
            formatID: function(a) {
                return "mjx-eqn-" + String(a).replace(/[:"'<>&]/g, "")
            },
            formatURL: function(a) {
                return "#" + escape(a)
            },
            useLabelIds: true
        }
    }
});
MathJax.InputJax.TeX.Register("math/tex");
MathJax.InputJax.TeX.loadComplete("config.js");
MathJax.OutputJax["HTML-CSS"] = MathJax.OutputJax({
    id: "HTML-CSS",
    version: "2.3",
    directory: MathJax.OutputJax.directory + "/HTML-CSS",
    extensionDir: MathJax.OutputJax.extensionDir + "/HTML-CSS",
    autoloadDir: MathJax.OutputJax.directory + "/HTML-CSS/autoload",
    fontDir: MathJax.OutputJax.directory + "/HTML-CSS/fonts",
    webfontDir: MathJax.OutputJax.fontDir + "/HTML-CSS",
    config: {
        matchFontHeight: true,
        scale: 100,
        minScaleAdjust: 50,
        availableFonts: ["STIX", "TeX"],
        preferredFont: "TeX",
        webFont: "TeX",
        imageFont: "TeX",
        undefinedFamily: "STIXGeneral,'Arial Unicode MS',serif",
        mtextFontInherit: false,
        EqnChunk: (MathJax.Hub.Browser.isMobile ? 10 : 50),
        EqnChunkFactor: 1.5,
        EqnChunkDelay: 100,
        linebreaks: {
            automatic: false,
            width: "container"
        },
        styles: {
            ".MathJax_Display": {
                "text-align": "center"
            },
            ".MathJax .merror": {
                "background-color": "#FFFF88",
                color: "#CC0000",
                border: "1px solid #CC0000",
                padding: "1px 3px",
                "font-style": "normal",
                "font-size": "90%"
            },
            "#MathJax_Tooltip": {
                "background-color": "InfoBackground",
                color: "InfoText",
                border: "1px solid black",
                "box-shadow": "2px 2px 5px #AAAAAA",
                "-webkit-box-shadow": "2px 2px 5px #AAAAAA",
                "-moz-box-shadow": "2px 2px 5px #AAAAAA",
                "-khtml-box-shadow": "2px 2px 5px #AAAAAA",
                filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')",
                padding: "3px 4px",
                "z-index": 401
            }
        }
    }
});
if (MathJax.Hub.Browser.isMSIE && document.documentMode >= 9) {
    delete MathJax.OutputJax["HTML-CSS"].config.styles["#MathJax_Tooltip"].filter
}
if (!MathJax.Hub.config.delayJaxRegistration) {
    MathJax.OutputJax["HTML-CSS"].Register("jax/mml")
}
MathJax.Hub.Register.StartupHook("End Config", [function(b, c) {
    var a = b.Insert({
            minBrowserVersion: {
                Firefox: 3,
                Opera: 9.52,
                MSIE: 6,
                Chrome: 0.3,
                Safari: 2,
                Konqueror: 4
            },
            inlineMathDelimiters: ["$", "$"],
            displayMathDelimiters: ["$$", "$$"],
            multilineDisplay: true,
            minBrowserTranslate: function(f) {
                var e = b.getJaxFor(f),
                    k = ["[Math]"],
                    j;
                var h = document.createElement("span", {
                    className: "MathJax_Preview"
                });
                if (e.inputJax === "TeX") {
                    if (e.root.Get("displaystyle")) {
                        j = a.displayMathDelimiters;
                        k = [j[0] + e.originalText + j[1]];
                        if (a.multilineDisplay) {
                            k = k[0].split(/\n/)
                        }
                    } else {
                        j = a.inlineMathDelimiters;
                        k = [j[0] + e.originalText.replace(/^\s+/, "").replace(/\s+$/, "") + j[1]]
                    }
                }
                for (var g = 0,
                         d = k.length; g < d; g++) {
                    h.appendChild(document.createTextNode(k[g]));
                    if (g < d - 1) {
                        h.appendChild(document.createElement("br"))
                    }
                }
                f.parentNode.insertBefore(h, f)
            }
        },
        (b.config["HTML-CSS"] || {}));
    if (b.Browser.version !== "0.0" && !b.Browser.versionAtLeast(a.minBrowserVersion[b.Browser] || 0)) {
        c.Translate = a.minBrowserTranslate;
        b.Config({
            showProcessingMessages: false
        });
        MathJax.Message.Set(["MathJaxNotSupported", "Your browser does not support MathJax"], null, 4000);
        b.Startup.signal.Post("MathJax not supported")
    }
},
    MathJax.Hub, MathJax.OutputJax["HTML-CSS"]]);
MathJax.OutputJax["HTML-CSS"].loadComplete("config.js");
MathJax.Extension.tex2jax = {
    version: "2.3",
    config: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["$$", "$$"], ["\\[", "\\]"]],
        balanceBraces: true,
        skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"],
        ignoreClass: "tex2jax_ignore",
        processClass: "tex2jax_process",
        processEscapes: false,
        processEnvironments: true,
        processRefs: true,
        preview: "TeX"
    },
    PreProcess: function(a) {
        if (!this.configured) {
            this.config = MathJax.Hub.CombineConfig("tex2jax", this.config);
            if (this.config.Augment) {
                MathJax.Hub.Insert(this, this.config.Augment)
            }
            if (typeof(this.config.previewTeX) !== "undefined" && !this.config.previewTeX) {
                this.config.preview = "none"
            }
            this.configured = true
        }
        if (typeof(a) === "string") {
            a = document.getElementById(a)
        }
        if (!a) {
            a = document.body
        }
        if (this.createPatterns()) {
            this.scanElement(a, a.nextSibling)
        }
    },
    createPatterns: function() {
        var d = [],
            e = [],
            c,
            a,
            b = this.config;
        this.match = {};
        for (c = 0, a = b.inlineMath.length; c < a; c++) {
            d.push(this.patternQuote(b.inlineMath[c][0]));
            this.match[b.inlineMath[c][0]] = {
                mode: "",
                end: b.inlineMath[c][1],
                pattern: this.endPattern(b.inlineMath[c][1])
            }
        }
        for (c = 0, a = b.displayMath.length; c < a; c++) {
            d.push(this.patternQuote(b.displayMath[c][0]));
            this.match[b.displayMath[c][0]] = {
                mode: "; mode=display",
                end: b.displayMath[c][1],
                pattern: this.endPattern(b.displayMath[c][1])
            }
        }
        if (d.length) {
            e.push(d.sort(this.sortLength).join("|"))
        }
        if (b.processEnvironments) {
            e.push("\\\\begin\\{([^}]*)\\}")
        }
        if (b.processEscapes) {
            e.push("\\\\*\\\\\\$")
        }
        if (b.processRefs) {
            e.push("\\\\(eq)?ref\\{[^}]*\\}")
        }
        this.start = new RegExp(e.join("|"), "g");
        this.skipTags = new RegExp("^(" + b.skipTags.join("|") + ")$", "i");
        var f = [];
        if (MathJax.Hub.config.preRemoveClass) {
            f.push(MathJax.Hub.config.preRemoveClass)
        }
        if (b.ignoreClass) {
            f.push(b.ignoreClass)
        }
        this.ignoreClass = (f.length ? new RegExp("(^| )(" + f.join("|") + ")( |$)") : /^$/);
        this.processClass = new RegExp("(^| )(" + b.processClass + ")( |$)");
        return (e.length > 0)
    },
    patternQuote: function(a) {
        return a.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1")
    },
    endPattern: function(a) {
        return new RegExp(this.patternQuote(a) + "|\\\\.|[{}]", "g")
    },
    sortLength: function(d, c) {
        if (d.length !== c.length) {
            return c.length - d.length
        }
        return (d == c ? 0 : (d < c ? -1 : 1))
    },
    scanElement: function(c, b, g) {
        var a, e, d, f;
        while (c && c != b) {
            if (c.nodeName.toLowerCase() === "#text") {
                if (!g) {
                    c = this.scanText(c)
                }
            } else {
                a = (typeof(c.className) === "undefined" ? "": c.className);
                e = (typeof(c.tagName) === "undefined" ? "": c.tagName);
                if (typeof(a) !== "string") {
                    a = String(a)
                }
                f = this.processClass.exec(a);
                if (c.firstChild && !a.match(/(^| )MathJax/) && (f || !this.skipTags.exec(e))) {
                    d = (g || this.ignoreClass.exec(a)) && !f;
                    this.scanElement(c.firstChild, b, d)
                }
            }
            if (c) {
                c = c.nextSibling
            }
        }
    },
    scanText: function(b) {
        if (b.nodeValue.replace(/\s+/, "") == "") {
            return b
        }
        var a, c;
        this.search = {
            start: true
        };
        this.pattern = this.start;
        while (b) {
            this.pattern.lastIndex = 0;
            while (b && b.nodeName.toLowerCase() === "#text" && (a = this.pattern.exec(b.nodeValue))) {
                if (this.search.start) {
                    b = this.startMatch(a, b)
                } else {
                    b = this.endMatch(a, b)
                }
            }
            if (this.search.matched) {
                b = this.encloseMath(b)
            }
            if (b) {
                do {
                    c = b;
                    b = b.nextSibling
                } while ( b && ( b . nodeName . toLowerCase () === "br" || b.nodeName.toLowerCase() === "#comment"));
                if (!b || b.nodeName !== "#text") {
                    return (this.search.close ? this.prevEndMatch() : c)
                }
            }
        }
        return b
    },
    startMatch: function(a, b) {
        var f = this.match[a[0]];
        if (f != null) {
            this.search = {
                end: f.end,
                mode: f.mode,
                pcount: 0,
                open: b,
                olen: a[0].length,
                opos: this.pattern.lastIndex - a[0].length
            };
            this.switchPattern(f.pattern)
        } else {
            if (a[0].substr(0, 6) === "\\begin") {
                this.search = {
                    end: "\\end{" + a[1] + "}",
                    mode: "; mode=display",
                    pcount: 0,
                    open: b,
                    olen: 0,
                    opos: this.pattern.lastIndex - a[0].length,
                    isBeginEnd: true
                };
                this.switchPattern(this.endPattern(this.search.end))
            } else {
                if (a[0].substr(0, 4) === "\\ref" || a[0].substr(0, 6) === "\\eqref") {
                    this.search = {
                        mode: "",
                        end: "",
                        open: b,
                        pcount: 0,
                        olen: 0,
                        opos: this.pattern.lastIndex - a[0].length
                    };
                    return this.endMatch([""], b)
                } else {
                    var d = a[0].substr(0, a[0].length - 1),
                        g,
                        c;
                    if (d.length % 2 === 0) {
                        c = [d.replace(/\\\\/g, "\\")];
                        g = 1
                    } else {
                        c = [d.substr(1).replace(/\\\\/g, "\\"), "$"];
                        g = 0
                    }
                    c = MathJax.HTML.Element("span", null, c);
                    var e = MathJax.HTML.TextNode(b.nodeValue.substr(0, a.index));
                    b.nodeValue = b.nodeValue.substr(a.index + a[0].length - g);
                    b.parentNode.insertBefore(c, b);
                    b.parentNode.insertBefore(e, c);
                    this.pattern.lastIndex = g
                }
            }
        }
        return b
    },
    endMatch: function(a, c) {
        var b = this.search;
        if (a[0] == b.end) {
            if (!b.close || b.pcount === 0) {
                b.close = c;
                b.cpos = this.pattern.lastIndex;
                b.clen = (b.isBeginEnd ? 0 : a[0].length)
            }
            if (b.pcount === 0) {
                b.matched = true;
                c = this.encloseMath(c);
                this.switchPattern(this.start)
            }
        } else {
            if (a[0] === "{") {
                b.pcount++
            } else {
                if (a[0] === "}" && b.pcount) {
                    b.pcount--
                }
            }
        }
        return c
    },
    prevEndMatch: function() {
        this.search.matched = true;
        var a = this.encloseMath(this.search.close);
        this.switchPattern(this.start);
        return a
    },
    switchPattern: function(a) {
        a.lastIndex = this.pattern.lastIndex;
        this.pattern = a;
        this.search.start = (a === this.start)
    },
    encloseMath: function(b) {
        var a = this.search,
            f = a.close,
            e, c;
        if (a.cpos === f.length) {
            f = f.nextSibling
        } else {
            f = f.splitText(a.cpos)
        }
        if (!f) {
            e = f = MathJax.HTML.addText(a.close.parentNode, "")
        }
        a.close = f;
        c = (a.opos ? a.open.splitText(a.opos) : a.open);
        while (c.nextSibling && c.nextSibling !== f) {
            if (c.nextSibling.nodeValue !== null) {
                if (c.nextSibling.nodeName === "#comment") {
                    c.nodeValue += c.nextSibling.nodeValue.replace(/^\[CDATA\[((.|\n|\r)*)\]\]$/, "$1")
                } else {
                    c.nodeValue += c.nextSibling.nodeValue
                }
            } else {
                if (this.msieNewlineBug) {
                    c.nodeValue += (c.nextSibling.nodeName.toLowerCase() === "br" ? "\n": " ")
                } else {
                    c.nodeValue += " "
                }
            }
            c.parentNode.removeChild(c.nextSibling)
        }
        var d = c.nodeValue.substr(a.olen, c.nodeValue.length - a.olen - a.clen);
        c.parentNode.removeChild(c);
        if (this.config.preview !== "none") {
            this.createPreview(a.mode, d)
        }
        c = this.createMathTag(a.mode, d);
        this.search = {};
        this.pattern.lastIndex = 0;
        if (e) {
            e.parentNode.removeChild(e)
        }
        return c
    },
    insertNode: function(b) {
        var a = this.search;
        a.close.parentNode.insertBefore(b, a.close)
    },
    createPreview: function(c, a) {
        var b = this.config.preview;
        if (b === "none") {
            return
        }
        if (b === "TeX") {
            b = [this.filterPreview(a)]
        }
        if (b) {
            b = MathJax.HTML.Element("span", {
                    className: MathJax.Hub.config.preRemoveClass
                },
                b);
            this.insertNode(b)
        }
    },
    createMathTag: function(c, b) {
        var a = document.createElement("script");
        a.type = "math/tex" + c;
        MathJax.HTML.setScript(a, b);
        this.insertNode(a);
        return a
    },
    filterPreview: function(a) {
        return a
    },
    msieNewlineBug: (MathJax.Hub.Browser.isMSIE && document.documentMode < 9)
};
MathJax.Hub.Register.PreProcessor(["PreProcess", MathJax.Extension.tex2jax]);
MathJax.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js"); (function(d, h, l, g, m, b, j) {
    var q = "2.3";
    var i = MathJax.Extension;
    var c = i.MathEvents = {
        version: q
    };
    var k = d.config.menuSettings;
    var p = {
        hover: 500,
        frame: {
            x: 3.5,
            y: 5,
            bwidth: 1,
            bcolor: "#A6D",
            hwidth: "15px",
            hcolor: "#83A"
        },
        button: {
            x: -4,
            y: -3,
            wx: -2,
            src: l.fileURL(b.imageDir + "/MenuArrow-15.png")
        },
        fadeinInc: 0.2,
        fadeoutInc: 0.05,
        fadeDelay: 50,
        fadeoutStart: 400,
        fadeoutDelay: 15 * 1000,
        styles: {
            ".MathJax_Hover_Frame": {
                "border-radius": ".25em",
                "-webkit-border-radius": ".25em",
                "-moz-border-radius": ".25em",
                "-khtml-border-radius": ".25em",
                "box-shadow": "0px 0px 15px #83A",
                "-webkit-box-shadow": "0px 0px 15px #83A",
                "-moz-box-shadow": "0px 0px 15px #83A",
                "-khtml-box-shadow": "0px 0px 15px #83A",
                border: "1px solid #A6D ! important",
                display: "inline-block",
                position: "absolute"
            },
            ".MathJax_Hover_Arrow": {
                position: "absolute",
                width: "15px",
                height: "11px",
                cursor: "pointer"
            }
        }
    };
    var n = c.Event = {
        LEFTBUTTON: 0,
        RIGHTBUTTON: 2,
        MENUKEY: "altKey",
        Mousedown: function(r) {
            return n.Handler(r, "Mousedown", this)
        },
        Mouseup: function(r) {
            return n.Handler(r, "Mouseup", this)
        },
        Mousemove: function(r) {
            return n.Handler(r, "Mousemove", this)
        },
        Mouseover: function(r) {
            return n.Handler(r, "Mouseover", this)
        },
        Mouseout: function(r) {
            return n.Handler(r, "Mouseout", this)
        },
        Click: function(r) {
            return n.Handler(r, "Click", this)
        },
        DblClick: function(r) {
            return n.Handler(r, "DblClick", this)
        },
        Menu: function(r) {
            return n.Handler(r, "ContextMenu", this)
        },
        Handler: function(u, s, t) {
            if (l.loadingMathMenu) {
                return n.False(u)
            }
            var r = b[t.jaxID];
            if (!u) {
                u = window.event
            }
            u.isContextMenu = (s === "ContextMenu");
            if (r[s]) {
                return r[s](u, t)
            }
            if (i.MathZoom) {
                return i.MathZoom.HandleEvent(u, s, t)
            }
        },
        False: function(r) {
            if (!r) {
                r = window.event
            }
            if (r) {
                if (r.preventDefault) {
                    r.preventDefault()
                }
                if (r.stopPropagation) {
                    r.stopPropagation()
                }
                r.cancelBubble = true;
                r.returnValue = false
            }
            return false
        },
        ContextMenu: function(u, F, x) {
            var C = b[F.jaxID],
                w = C.getJaxFromMath(F);
            var G = (C.config.showMathMenu != null ? C: d).config.showMathMenu;
            if (!G || (k.context !== "MathJax" && !x)) {
                return
            }
            if (c.msieEventBug) {
                u = window.event || u
            }
            n.ClearSelection();
            f.ClearHoverTimer();
            if (w.hover) {
                if (w.hover.remove) {
                    clearTimeout(w.hover.remove);
                    delete w.hover.remove
                }
                w.hover.nofade = true
            }
            var v = MathJax.Menu;
            var H, E;
            if (v) {
                if (v.loadingDomain) {
                    return n.False(u)
                }
                H = m.loadDomain("MathMenu");
                if (!H) {
                    v.jax = w;
                    var s = v.menu.Find("Show Math As").menu;
                    s.items[0].name = w.sourceMenuTitle;
                    s.items[0].format = (w.sourceMenuFormat || "MathML");
                    s.items[1].name = j[w.inputJax].sourceMenuTitle;
                    var B = s.items[2];
                    B.disabled = true;
                    var r = B.menu.items;
                    annotationList = MathJax.Hub.Config.semanticsAnnotations;
                    for (var A = 0,
                             z = r.length; A < z; A++) {
                        var t = r[A].name[1];
                        if (w.root && w.root.getAnnotation(t) !== null) {
                            B.disabled = false;
                            r[A].hidden = false
                        } else {
                            r[A].hidden = true
                        }
                    }
                    var y = v.menu.Find("Math Settings", "MathPlayer");
                    y.hidden = !(w.outputJax === "NativeMML" && d.Browser.hasMathPlayer);
                    return v.menu.Post(u)
                }
                v.loadingDomain = true;
                E = function() {
                    delete v.loadingDomain
                }
            } else {
                if (l.loadingMathMenu) {
                    return n.False(u)
                }
                l.loadingMathMenu = true;
                H = l.Require("[MathJax]/extensions/MathMenu.js");
                E = function() {
                    delete l.loadingMathMenu;
                    if (!MathJax.Menu) {
                        MathJax.Menu = {}
                    }
                }
            }
            var D = {
                pageX: u.pageX,
                pageY: u.pageY,
                clientX: u.clientX,
                clientY: u.clientY
            };
            g.Queue(H, E, ["ContextMenu", n, D, F, x]);
            return n.False(u)
        },
        AltContextMenu: function(t, s) {
            var u = b[s.jaxID];
            var r = (u.config.showMathMenu != null ? u: d).config.showMathMenu;
            if (r) {
                r = (u.config.showMathMenuMSIE != null ? u: d).config.showMathMenuMSIE;
                if (k.context === "MathJax" && !k.mpContext && r) {
                    if (!c.noContextMenuBug || t.button !== n.RIGHTBUTTON) {
                        return
                    }
                } else {
                    if (!t[n.MENUKEY] || t.button !== n.LEFTBUTTON) {
                        return
                    }
                }
                return u.ContextMenu(t, s, true)
            }
        },
        ClearSelection: function() {
            if (c.safariContextMenuBug) {
                setTimeout("window.getSelection().empty()", 0)
            }
            if (document.selection) {

                setTimeout("document.selection.empty()", 0)
            }
        },
        getBBox: function(t) {
            t.appendChild(c.topImg);
            var s = c.topImg.offsetTop,
                u = t.offsetHeight - s,
                r = t.offsetWidth;
            t.removeChild(c.topImg);
            return {
                w: r,
                h: s,
                d: u
            }
        }
    };
    var f = c.Hover = {
        Mouseover: function(t, s) {
            if (k.discoverable || k.zoom === "Hover") {
                var v = t.fromElement || t.relatedTarget,
                    u = t.toElement || t.target;
                if (v && u && (v.isMathJax != u.isMathJax || d.getJaxFor(v) !== d.getJaxFor(u))) {
                    var r = this.getJaxFromMath(s);
                    if (r.hover) {
                        f.ReHover(r)
                    } else {
                        f.HoverTimer(r, s)
                    }
                    return n.False(t)
                }
            }
        },
        Mouseout: function(t, s) {
            if (k.discoverable || k.zoom === "Hover") {
                var v = t.fromElement || t.relatedTarget,
                    u = t.toElement || t.target;
                if (v && u && (v.isMathJax != u.isMathJax || d.getJaxFor(v) !== d.getJaxFor(u))) {
                    var r = this.getJaxFromMath(s);
                    if (r.hover) {
                        f.UnHover(r)
                    } else {
                        f.ClearHoverTimer()
                    }
                    return n.False(t)
                }
            }
        },
        Mousemove: function(t, s) {
            if (k.discoverable || k.zoom === "Hover") {
                var r = this.getJaxFromMath(s);
                if (r.hover) {
                    return
                }
                if (f.lastX == t.clientX && f.lastY == t.clientY) {
                    return
                }
                f.lastX = t.clientX;
                f.lastY = t.clientY;
                f.HoverTimer(r, s);
                return n.False(t)
            }
        },
        HoverTimer: function(r, s) {
            this.ClearHoverTimer();
            this.hoverTimer = setTimeout(g(["Hover", this, r, s]), p.hover)
        },
        ClearHoverTimer: function() {
            if (this.hoverTimer) {
                clearTimeout(this.hoverTimer);
                delete this.hoverTimer
            }
        },
        Hover: function(r, v) {
            if (i.MathZoom && i.MathZoom.Hover({},
                v)) {
                return
            }
            var u = b[r.outputJax],
                w = u.getHoverSpan(r, v),
                z = u.getHoverBBox(r, w, v),
                x = (u.config.showMathMenu != null ? u: d).config.showMathMenu;
            var B = p.frame.x,
                A = p.frame.y,
                y = p.frame.bwidth;
            if (c.msieBorderWidthBug) {
                y = 0
            }
            r.hover = {
                opacity: 0,
                id: r.inputID + "-Hover"
            };
            var s = h.Element("span", {
                    id: r.hover.id,
                    isMathJax: true,
                    style: {
                        display: "inline-block",
                        width: 0,
                        height: 0,
                        position: "relative"
                    }
                },
                [["span", {
                    className: "MathJax_Hover_Frame",
                    isMathJax: true,
                    style: {
                        display: "inline-block",
                        position: "absolute",
                        top: this.Px( - z.h - A - y - (z.y || 0)),
                        left: this.Px( - B - y + (z.x || 0)),
                        width: this.Px(z.w + 2 * B),
                        height: this.Px(z.h + z.d + 2 * A),
                        opacity: 0,
                        filter: "alpha(opacity=0)"
                    }
                }]]);
            var t = h.Element("span", {
                    isMathJax: true,
                    id: r.hover.id + "Menu",
                    style: {
                        display: "inline-block",
                        "z-index": 1,
                        width: 0,
                        height: 0,
                        position: "relative"
                    }
                },
                [["img", {
                    className: "MathJax_Hover_Arrow",
                    isMathJax: true,
                    math: v,
                    src: p.button.src,
                    onclick: this.HoverMenu,
                    jax: u.id,
                    style: {
                        left: this.Px(z.w + B + y + (z.x || 0) + p.button.x),
                        top: this.Px( - z.h - A - y - (z.y || 0) - p.button.y),
                        opacity: 0,
                        filter: "alpha(opacity=0)"
                    }
                }]]);
            if (z.width) {
                s.style.width = t.style.width = z.width;
                s.style.marginRight = t.style.marginRight = "-" + z.width;
                s.firstChild.style.width = z.width;
                t.firstChild.style.left = "";
                t.firstChild.style.right = this.Px(p.button.wx)
            }
            w.parentNode.insertBefore(s, w);
            if (x) {
                w.parentNode.insertBefore(t, w)
            }
            if (w.style) {
                w.style.position = "relative"
            }
            this.ReHover(r)
        },
        ReHover: function(r) {
            if (r.hover.remove) {
                clearTimeout(r.hover.remove)
            }
            r.hover.remove = setTimeout(g(["UnHover", this, r]), p.fadeoutDelay);
            this.HoverFadeTimer(r, p.fadeinInc)
        },
        UnHover: function(r) {
            if (!r.hover.nofade) {
                this.HoverFadeTimer(r, -p.fadeoutInc, p.fadeoutStart)
            }
        },
        HoverFade: function(r) {
            delete r.hover.timer;
            r.hover.opacity = Math.max(0, Math.min(1, r.hover.opacity + r.hover.inc));
            r.hover.opacity = Math.floor(1000 * r.hover.opacity) / 1000;
            var t = document.getElementById(r.hover.id),
                s = document.getElementById(r.hover.id + "Menu");
            t.firstChild.style.opacity = r.hover.opacity;
            t.firstChild.style.filter = "alpha(opacity=" + Math.floor(100 * r.hover.opacity) + ")";
            if (s) {
                s.firstChild.style.opacity = r.hover.opacity;
                s.firstChild.style.filter = t.style.filter
            }
            if (r.hover.opacity === 1) {
                return
            }
            if (r.hover.opacity > 0) {
                this.HoverFadeTimer(r, r.hover.inc);
                return
            }
            t.parentNode.removeChild(t);
            if (s) {
                s.parentNode.removeChild(s)
            }
            if (r.hover.remove) {
                clearTimeout(r.hover.remove)
            }
            delete r.hover
        },
        HoverFadeTimer: function(r, t, s) {
            r.hover.inc = t;
            if (!r.hover.timer) {
                r.hover.timer = setTimeout(g(["HoverFade", this, r]), (s || p.fadeDelay))
            }
        },
        HoverMenu: function(r) {
            if (!r) {
                r = window.event
            }
            return b[this.jax].ContextMenu(r, this.math, true)
        },
        ClearHover: function(r) {
            if (r.hover.remove) {
                clearTimeout(r.hover.remove)
            }
            if (r.hover.timer) {
                clearTimeout(r.hover.timer)
            }
            f.ClearHoverTimer();
            delete r.hover
        },
        Px: function(r) {
            if (Math.abs(r) < 0.006) {
                return "0px"
            }
            return r.toFixed(2).replace(/\.?0+$/, "") + "px"
        },
        getImages: function() {
            var r = new Image();
            r.src = p.button.src
        }
    };
    var a = c.Touch = {
        last: 0,
        delay: 500,
        start: function(s) {
            var r = new Date().getTime();
            var t = (r - a.last < a.delay && a.up);
            a.last = r;
            a.up = false;
            if (t) {
                a.timeout = setTimeout(a.menu, a.delay, s, this);
                s.preventDefault()
            }
        },
        end: function(s) {
            var r = new Date().getTime();
            a.up = (r - a.last < a.delay);
            if (a.timeout) {
                clearTimeout(a.timeout);
                delete a.timeout;
                a.last = 0;
                a.up = false;
                s.preventDefault();
                return n.Handler((s.touches[0] || s.touch), "DblClick", this)
            }
        },
        menu: function(s, r) {
            delete a.timeout;
            a.last = 0;
            a.up = false;
            return n.Handler((s.touches[0] || s.touch), "ContextMenu", r)
        }
    };
    if (d.Browser.isMobile) {
        var o = p.styles[".MathJax_Hover_Arrow"];
        o.width = "25px";
        o.height = "18px";
        p.button.x = -6
    }
    d.Browser.Select({
        MSIE: function(r) {
            var t = (document.documentMode || 0);
            var s = r.versionAtLeast("8.0");
            c.msieBorderWidthBug = (document.compatMode === "BackCompat");
            c.msieEventBug = r.isIE9;
            c.msieAlignBug = (!s || t < 8);
            if (t < 9) {
                n.LEFTBUTTON = 1
            }
        },
        Safari: function(r) {
            c.safariContextMenuBug = true
        },
        Opera: function(r) {
            c.operaPositionBug = true
        },
        Konqueror: function(r) {
            c.noContextMenuBug = true
        }
    });
    c.topImg = (c.msieAlignBug ? h.Element("img", {
        style: {
            width: 0,
            height: 0,
            position: "relative"
        },
        src: "about:blank"
    }) : h.Element("span", {
        style: {
            width: 0,
            height: 0,
            display: "inline-block"
        }
    }));
    if (c.operaPositionBug) {
        c.topImg.style.border = "1px solid"
    }
    c.config = p = d.CombineConfig("MathEvents", p);
    var e = function() {
        var r = p.styles[".MathJax_Hover_Frame"];
        r.border = p.frame.bwidth + "px solid " + p.frame.bcolor + " ! important";
        r["box-shadow"] = r["-webkit-box-shadow"] = r["-moz-box-shadow"] = r["-khtml-box-shadow"] = "0px 0px " + p.frame.hwidth + " " + p.frame.hcolor
    };
    g.Queue(d.Register.StartupHook("End Config", {}), [e], ["getImages", f], ["Styles", l, p.styles], ["Post", d.Startup.signal, "MathEvents Ready"], ["loadComplete", l, "[MathJax]/extensions/MathEvents.js"])
})(MathJax.Hub, MathJax.HTML, MathJax.Ajax, MathJax.Callback, MathJax.Localization, MathJax.OutputJax, MathJax.InputJax); (function(a, d, f, c, j) {
    var k = "2.3";
    var i = a.CombineConfig("MathZoom", {
        styles: {
            "#MathJax_Zoom": {
                position: "absolute",
                "background-color": "#F0F0F0",
                overflow: "auto",
                display: "block",
                "z-index": 301,
                padding: ".5em",
                border: "1px solid black",
                margin: 0,
                "font-weight": "normal",
                "font-style": "normal",
                "text-align": "left",
                "text-indent": 0,
                "text-transform": "none",
                "line-height": "normal",
                "letter-spacing": "normal",
                "word-spacing": "normal",
                "word-wrap": "normal",
                "white-space": "nowrap",
                "float": "none",
                "box-shadow": "5px 5px 15px #AAAAAA",
                "-webkit-box-shadow": "5px 5px 15px #AAAAAA",
                "-moz-box-shadow": "5px 5px 15px #AAAAAA",
                "-khtml-box-shadow": "5px 5px 15px #AAAAAA",
                filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
            },
            "#MathJax_ZoomOverlay": {
                position: "absolute",
                left: 0,
                top: 0,
                "z-index": 300,
                display: "inline-block",
                width: "100%",
                height: "100%",
                border: 0,
                padding: 0,
                margin: 0,
                "background-color": "white",
                opacity: 0,
                filter: "alpha(opacity=0)"
            },
            "#MathJax_ZoomFrame": {
                position: "relative",
                display: "inline-block",
                height: 0,
                width: 0
            },
            "#MathJax_ZoomEventTrap": {
                position: "absolute",
                left: 0,
                top: 0,
                "z-index": 302,
                display: "inline-block",
                border: 0,
                padding: 0,
                margin: 0,
                "background-color": "white",
                opacity: 0,
                filter: "alpha(opacity=0)"
            }
        }
    });
    var e, b, g;
    MathJax.Hub.Register.StartupHook("MathEvents Ready",
        function() {
            g = MathJax.Extension.MathEvents.Event;
            e = MathJax.Extension.MathEvents.Event.False;
            b = MathJax.Extension.MathEvents.Hover
        });
    var h = MathJax.Extension.MathZoom = {
        version: k,
        settings: a.config.menuSettings,
        scrollSize: 18,
        HandleEvent: function(n, l, m) {
            if (h.settings.CTRL && !n.ctrlKey) {
                return true
            }
            if (h.settings.ALT && !n.altKey) {
                return true
            }
            if (h.settings.CMD && !n.metaKey) {
                return true
            }
            if (h.settings.Shift && !n.shiftKey) {
                return true
            }
            if (!h[l]) {
                return true
            }
            return h[l](n, m)
        },
        Click: function(m, l) {
            if (this.settings.zoom === "Click") {
                return this.Zoom(m, l)
            }
        },
        DblClick: function(m, l) {
            if (this.settings.zoom === "Double-Click" || this.settings.zoom === "DoubleClick") {
                return this.Zoom(m, l)
            }
        },
        Hover: function(m, l) {
            if (this.settings.zoom === "Hover") {
                this.Zoom(m, l);
                return true
            }
            return false
        },
        Zoom: function(n, s) {
            this.Remove();
            b.ClearHoverTimer();
            g.ClearSelection();
            var q = MathJax.OutputJax[s.jaxID];
            var o = q.getJaxFromMath(s);
            if (o.hover) {
                b.UnHover(o)
            }
            var l = Math.floor(0.85 * document.body.clientWidth),
                r = Math.floor(0.85 * Math.max(document.body.clientHeight, document.documentElement.clientHeight));
            var m = d.Element("span", {
                    id: "MathJax_ZoomFrame"
                },
                [["span", {
                    id: "MathJax_ZoomOverlay",
                    onmousedown: this.Remove
                }], ["span", {
                    id: "MathJax_Zoom",
                    onclick: this.Remove,
                    style: {
                        visibility: "hidden",
                        fontSize: this.settings.zscale,
                        "max-width": l + "px",
                        "max-height": r + "px"
                    }
                },
                    [["span", {
                        style: {
                            display: "inline-block",
                            "white-space": "nowrap"
                        }
                    }]]]]);
            var x = m.lastChild,
                u = x.firstChild,
                p = m.firstChild;
            s.parentNode.insertBefore(m, s);
            s.parentNode.insertBefore(s, m);
            if (u.addEventListener) {
                u.addEventListener("mousedown", this.Remove, true)
            }
            if (this.msieTrapEventBug) {
                var w = d.Element("span", {
                    id: "MathJax_ZoomEventTrap",
                    onmousedown: this.Remove
                });
                m.insertBefore(w, x)
            }
            if (this.msieZIndexBug) {
                var t = d.addElement(document.body, "img", {
                    src: "about:blank",
                    id: "MathJax_ZoomTracker",
                    width: 0,
                    height: 0,
                    style: {
                        width: 0,
                        height: 0,
                        position: "relative"
                    }
                });
                m.style.position = "relative";
                m.style.zIndex = i.styles["#MathJax_ZoomOverlay"]["z-index"];
                m = t
            }
            var v = q.Zoom(o, u, s, l, r);
            if (this.msiePositionBug) {
                if (this.msieSizeBug) {
                    x.style.height = v.zH + "px";
                    x.style.width = v.zW + "px"
                }
                if (x.offsetHeight > r) {
                    x.style.height = r + "px";
                    x.style.width = (v.zW + this.scrollSize) + "px"
                }
                if (x.offsetWidth > l) {
                    x.style.width = l + "px";
                    x.style.height = (v.zH + this.scrollSize) + "px"
                }
            }
            if (this.operaPositionBug) {
                x.style.width = Math.min(l, v.zW) + "px"
            }
            if (x.offsetWidth && x.offsetWidth < l && x.offsetHeight < r) {
                x.style.overflow = "visible"
            }
            this.Position(x, v);
            if (this.msieTrapEventBug) {
                w.style.height = x.clientHeight + "px";
                w.style.width = x.clientWidth + "px";
                w.style.left = (parseFloat(x.style.left) + x.clientLeft) + "px";
                w.style.top = (parseFloat(x.style.top) + x.clientTop) + "px"
            }
            x.style.visibility = "";
            if (this.settings.zoom === "Hover") {
                p.onmouseover = this.Remove
            }
            if (window.addEventListener) {
                addEventListener("resize", this.Resize, false)
            } else {
                if (window.attachEvent) {
                    attachEvent("onresize", this.Resize)
                } else {
                    this.onresize = window.onresize;
                    window.onresize = this.Resize
                }
            }
            a.signal.Post(["math zoomed", o]);
            return e(n)
        },
        Position: function(p, r) {
            var q = this.Resize(),
                m = q.x,
                s = q.y,
                l = r.mW;
            var o = -l - Math.floor((p.offsetWidth - l) / 2),
                n = r.Y;
            p.style.left = Math.max(o, 10 - m) + "px";
            p.style.top = Math.max(n, 10 - s) + "px";
            if (!h.msiePositionBug) {
                h.SetWH()
            }
        },
        Resize: function(m) {
            if (h.onresize) {
                h.onresize(m)
            }
            var r = document.getElementById("MathJax_ZoomFrame"),
                l = document.getElementById("MathJax_ZoomOverlay");
            var o = h.getXY(r);
            var n = r.parentNode,
                q = h.getOverflow(n);
            while (n.parentNode && n !== document.body && q === "visible") {
                n = n.parentNode;
                q = h.getOverflow(n)
            }
            if (q !== "visible") {
                l.scroll_parent = n;
                var p = h.getXY(n);
                o.x -= p.x;
                o.y -= p.y;
                p = h.getBorder(n);
                o.x -= p.x;
                o.y -= p.y
            }
            l.style.left = ( - o.x) + "px";
            l.style.top = ( - o.y) + "px";
            if (h.msiePositionBug) {
                setTimeout(h.SetWH, 0)
            } else {
                h.SetWH()
            }
            return o
        },
        SetWH: function() {
            var l = document.getElementById("MathJax_ZoomOverlay");
            l.style.width = l.style.height = "1px";
            var m = l.scroll_parent || document.documentElement || document.body;
            l.style.width = m.scrollWidth + "px";
            l.style.height = Math.max(m.clientHeight, m.scrollHeight) + "px"
        },
        getOverflow: (window.getComputedStyle ?
            function(l) {
                return getComputedStyle(l).overflow
            }: function(l) {
            return (l.currentStyle || {
                overflow: "visible"
            }).overflow
        }),
        getBorder: function(o) {
            var m = {
                thin: 1,
                medium: 2,
                thick: 3
            };
            var n = (window.getComputedStyle ? getComputedStyle(o) : (o.currentStyle || {
                borderLeftWidth: 0,
                borderTopWidth: 0
            }));
            var l = n.borderLeftWidth,
                p = n.borderTopWidth;
            if (m[l]) {
                l = m[l]
            } else {
                l = parseInt(l)
            }
            if (m[p]) {
                p = m[p]
            } else {
                p = parseInt(p)
            }
            return {
                x: l,
                y: p
            }
        },
        getXY: function(o) {
            var l = 0,
                n = 0,
                m;
            m = o;
            while (m.offsetParent) {
                l += m.offsetLeft;
                m = m.offsetParent
            }
            if (h.operaPositionBug) {
                o.style.border = "1px solid"
            }
            m = o;
            while (m.offsetParent) {
                n += m.offsetTop;
                m = m.offsetParent
            }
            if (h.operaPositionBug) {
                o.style.border = ""
            }
            return {
                x: l,
                y: n
            }
        },
        Remove: function(n) {
            var p = document.getElementById("MathJax_ZoomFrame");
            if (p) {
                var o = MathJax.OutputJax[p.previousSibling.jaxID];
                var l = o.getJaxFromMath(p.previousSibling);
                a.signal.Post(["math unzoomed", l]);
                p.parentNode.removeChild(p);
                p = document.getElementById("MathJax_ZoomTracker");
                if (p) {
                    p.parentNode.removeChild(p)
                }
                if (h.operaRefreshBug) {
                    var m = d.addElement(document.body, "div", {
                        style: {
                            position: "fixed",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "white",
                            opacity: 0
                        },
                        id: "MathJax_OperaDiv"
                    });
                    document.body.removeChild(m)
                }
                if (window.removeEventListener) {
                    removeEventListener("resize", h.Resize, false)
                } else {
                    if (window.detachEvent) {
                        detachEvent("onresize", h.Resize)
                    } else {
                        window.onresize = h.onresize;
                        delete h.onresize
                    }
                }
            }
            return e(n)
        }
    };
    a.Browser.Select({
        MSIE: function(l) {
            var n = (document.documentMode || 0);
            var m = (n >= 9);
            h.msiePositionBug = !m;
            h.msieSizeBug = l.versionAtLeast("7.0") && (!document.documentMode || n === 7 || n === 8);
            h.msieZIndexBug = (n <= 7);
            h.msieInlineBlockAlignBug = (n <= 7);
            h.msieTrapEventBug = !window.addEventListener;
            if (document.compatMode === "BackCompat") {
                h.scrollSize = 52
            }
            if (m) {
                delete i.styles["#MathJax_Zoom"].filter
            }
        },
        Opera: function(l) {
            h.operaPositionBug = true;
            h.operaRefreshBug = true
        }
    });
    h.topImg = (h.msieInlineBlockAlignBug ? d.Element("img", {
        style: {
            width: 0,
            height: 0,
            position: "relative"
        },
        src: "about:blank"
    }) : d.Element("span", {
        style: {
            width: 0,
            height: 0,
            display: "inline-block"
        }
    }));
    if (h.operaPositionBug || h.msieTopBug) {
        h.topImg.style.border = "1px solid"
    }
    MathJax.Callback.Queue(["StartupHook", MathJax.Hub.Register, "Begin Styles", {}], ["Styles", f, i.styles], ["Post", a.Startup.signal, "MathZoom Ready"], ["loadComplete", f, "[MathJax]/extensions/MathZoom.js"])
})(MathJax.Hub, MathJax.HTML, MathJax.Ajax, MathJax.OutputJax["HTML-CSS"], MathJax.OutputJax.NativeMML); (function(c, g, k, f, b) {
    var q = "2.3";
    var j = MathJax.Callback.Signal("menu");
    MathJax.Extension.MathMenu = {
        version: q,
        signal: j
    };
    var o = function(r) {
        return MathJax.Localization._.apply(MathJax.Localization, [["MathMenu", r]].concat([].slice.call(arguments, 1)))
    };
    var n = c.Browser.isPC,
        l = c.Browser.isMSIE,
        e = ((document.documentMode || 0) > 8);
    var i = (n ? null: "5px");
    var p = c.CombineConfig("MathMenu", {
        delay: 150,
        closeImg: k.fileURL(b.imageDir + "/CloseX-31.png"),
        showRenderer: true,
        showMathPlayer: true,
        showFontMenu: false,
        showContext: false,
        showDiscoverable: false,
        showLocale: true,
        showLocaleURL: false,
        semanticsAnnotations: {
            TeX: ["TeX", "LaTeX", "application/x-tex"],
            StarMath: ["StarMath 5.0"],
            Maple: ["Maple"],
            ContentMathML: ["MathML-Content", "application/mathml-content+xml"],
            OpenMath: ["OpenMath"]
        },
        windowSettings: {
            status: "no",
            toolbar: "no",
            locationbar: "no",
            menubar: "no",
            directories: "no",
            personalbar: "no",
            resizable: "yes",
            scrollbars: "yes",
            width: 400,
            height: 300,
            left: Math.round((screen.width - 400) / 2),
            top: Math.round((screen.height - 300) / 3)
        },
        styles: {
            "#MathJax_About": {
                position: "fixed",
                left: "50%",
                width: "auto",
                "text-align": "center",
                border: "3px outset",
                padding: "1em 2em",
                "background-color": "#DDDDDD",
                color: "black",
                cursor: "default",
                "font-family": "message-box",
                "font-size": "120%",
                "font-style": "normal",
                "text-indent": 0,
                "text-transform": "none",
                "line-height": "normal",
                "letter-spacing": "normal",
                "word-spacing": "normal",
                "word-wrap": "normal",
                "white-space": "nowrap",
                "float": "none",
                "z-index": 201,
                "border-radius": "15px",
                "-webkit-border-radius": "15px",
                "-moz-border-radius": "15px",
                "-khtml-border-radius": "15px",
                "box-shadow": "0px 10px 20px #808080",
                "-webkit-box-shadow": "0px 10px 20px #808080",
                "-moz-box-shadow": "0px 10px 20px #808080",
                "-khtml-box-shadow": "0px 10px 20px #808080",
                filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
            },
            ".MathJax_Menu": {
                position: "absolute",
                "background-color": "white",
                color: "black",
                width: "auto",
                padding: (n ? "2px": "5px 0px"),
                border: "1px solid #CCCCCC",
                margin: 0,
                cursor: "default",
                font: "menu",
                "text-align": "left",
                "text-indent": 0,
                "text-transform": "none",
                "line-height": "normal",
                "letter-spacing": "normal",
                "word-spacing": "normal",
                "word-wrap": "normal",
                "white-space": "nowrap",
                "float": "none",
                "z-index": 201,
                "border-radius": i,
                "-webkit-border-radius": i,
                "-moz-border-radius": i,
                "-khtml-border-radius": i,
                "box-shadow": "0px 10px 20px #808080",
                "-webkit-box-shadow": "0px 10px 20px #808080",
                "-moz-box-shadow": "0px 10px 20px #808080",
                "-khtml-box-shadow": "0px 10px 20px #808080",
                filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
            },
            ".MathJax_MenuItem": {
                padding: (n ? "2px 2em": "1px 2em"),
                background: "transparent"
            },
            ".MathJax_MenuArrow": {
                position: "absolute",
                right: ".5em",
                color: "#666666",
                "font-family": (l ? "'Arial unicode MS'": null)
            },
            ".MathJax_MenuActive .MathJax_MenuArrow": {
                color: "white"
            },
            ".MathJax_MenuCheck": {
                position: "absolute",
                left: ".7em",
                "font-family": (l ? "'Arial unicode MS'": null)
            },
            ".MathJax_MenuRadioCheck": {
                position: "absolute",
                left: (n ? "1em": ".7em")
            },
            ".MathJax_MenuLabel": {
                padding: (n ? "2px 2em 4px 1.33em": "1px 2em 3px 1.33em"),
                "font-style": "italic"
            },
            ".MathJax_MenuRule": {
                "border-top": (n ? "1px solid #CCCCCC": "1px solid #DDDDDD"),
                margin: (n ? "4px 1px 0px": "4px 3px")
            },
            ".MathJax_MenuDisabled": {
                color: "GrayText"
            },
            ".MathJax_MenuActive": {
                "background-color": (n ? "Highlight": "#606872"),
                color: (n ? "HighlightText": "white")
            },
            ".MathJax_Menu_Close": {
                position: "absolute",
                width: "31px",
                height: "31px",
                top: "-15px",
                left: "-15px"
            }
        }
    });
    var h, d;
    c.Register.StartupHook("MathEvents Ready",
        function() {
            h = MathJax.Extension.MathEvents.Event.False;
            d = MathJax.Extension.MathEvents.Hover
        });
    var a = MathJax.Menu = MathJax.Object.Subclass({
            version: q,
            items: [],
            posted: false,
            title: null,
            margin: 5,
            Init: function(r) {
                this.items = [].slice.call(arguments, 0)
            },
            With: function(r) {
                if (r) {
                    c.Insert(this, r)
                }
                return this
            },
            Post: function(s, B) {
                if (!s) {
                    s = window.event
                }
                var r = document.getElementById("MathJax_MenuFrame");
                if (!r) {
                    r = a.Background(this);
                    delete m.lastItem;
                    delete m.lastMenu;
                    delete a.skipUp;
                    j.Post(["post", a.jax])
                }
                var t = g.addElement(r, "div", {
                    onmouseup: a.Mouseup,
                    ondblclick: h,
                    ondragstart: h,
                    onselectstart: h,
                    oncontextmenu: h,
                    menuItem: this,
                    className: "MathJax_Menu"
                });
                MathJax.Localization.setCSS(t);
                for (var v = 0,
                         u = this.items.length; v < u; v++) {
                    this.items[v].Create(t)
                }
                if (a.isMobile) {
                    g.addElement(t, "span", {
                            className: "MathJax_Menu_Close",
                            menu: B,
                            ontouchstart: a.Close,
                            ontouchend: h,
                            onmousedown: a.Close,
                            onmouseup: h
                        },
                        [["img", {
                            src: p.closeImg,
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }]])
                }
                this.posted = true;
                t.style.width = (t.offsetWidth + 2) + "px";
                var A = s.pageX,
                    z = s.pageY;
                if (!A && !z) {
                    A = s.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    z = s.clientY + document.body.scrollTop + document.documentElement.scrollTop
                }
                if (!B) {
                    if (A + t.offsetWidth > document.body.offsetWidth - this.margin) {
                        A = document.body.offsetWidth - t.offsetWidth - this.margin
                    }
                    if (a.isMobile) {
                        A = Math.max(5, A - Math.floor(t.offsetWidth / 2));
                        z -= 20
                    }
                    a.skipUp = s.isContextMenu
                } else {
                    var w = "left",
                        C = B.offsetWidth;
                    A = (a.isMobile ? 30 : C - 2);
                    z = 0;
                    while (B && B !== r) {
                        A += B.offsetLeft;
                        z += B.offsetTop;
                        B = B.parentNode
                    }
                    if (A + t.offsetWidth > document.body.offsetWidth - this.margin && !a.isMobile) {
                        w = "right";
                        A = Math.max(this.margin, A - C - t.offsetWidth + 6)
                    }
                    if (!n) {
                        t.style["borderRadiusTop" + w] = 0;
                        t.style["WebkitBorderRadiusTop" + w] = 0;
                        t.style["MozBorderRadiusTop" + w] = 0;
                        t.style["KhtmlBorderRadiusTop" + w] = 0
                    }
                }
                t.style.left = A + "px";
                t.style.top = z + "px";
                if (document.selection && document.selection.empty) {
                    document.selection.empty()
                }
                return h(s)
            },
            Remove: function(r, s) {
                j.Post(["unpost", a.jax]);
                var t = document.getElementById("MathJax_MenuFrame");
                if (t) {
                    t.parentNode.removeChild(t);
                    if (this.msieFixedPositionBug) {
                        detachEvent("onresize", a.Resize)
                    }
                }
                if (a.jax.hover) {
                    delete a.jax.hover.nofade;
                    d.UnHover(a.jax)
                }
                return h(r)
            },
            Find: function(r) {
                return this.FindN(1, r, [].slice.call(arguments, 1))
            },
            FindId: function(r) {
                return this.FindN(0, r, [].slice.call(arguments, 1))
            },
            FindN: function(v, s, u) {
                for (var t = 0,
                         r = this.items.length; t < r; t++) {
                    if (this.items[t].name[v] === s) {
                        if (u.length) {
                            if (!this.items[t].menu) {
                                return null
                            }
                            return this.items[t].menu.FindN(v, u[0], u.slice(1))
                        }
                        return this.items[t]
                    }
                }
                return null
            },
            IndexOf: function(r) {
                return this.IndexOfN(1, r)
            },
            IndexOfId: function(r) {
                return this.IndexOfN(0, r)
            },
            IndexOfN: function(u, s) {
                for (var t = 0,
                         r = this.items.length; t < r; t++) {
                    if (this.items[t].name[u] === s) {
                        return t
                    }
                }
                return null
            }
        },
        {
            config: p,
            div: null,
            Close: function(r) {
                return a.Event(r, this.menu || this.parentNode, (this.menu ? "Touchend": "Remove"))
            },
            Remove: function(r) {
                return a.Event(r, this, "Remove")
            },
            Mouseover: function(r) {
                return a.Event(r, this, "Mouseover")
            },
            Mouseout: function(r) {
                return a.Event(r, this, "Mouseout")
            },
            Mousedown: function(r) {
                return a.Event(r, this, "Mousedown")
            },
            Mouseup: function(r) {
                return a.Event(r, this, "Mouseup")
            },
            Touchstart: function(r) {
                return a.Event(r, this, "Touchstart")
            },
            Touchend: function(r) {
                return a.Event(r, this, "Touchend")
            },
            Event: function(t, v, r, u) {
                if (a.skipMouseover && r === "Mouseover" && !u) {
                    return h(t)
                }
                if (a.skipUp) {
                    if (r.match(/Mouseup|Touchend/)) {
                        delete a.skipUp;
                        return h(t)
                    }
                    if (r === "Touchstart" || (r === "Mousedown" && !a.skipMousedown)) {
                        delete a.skipUp
                    }
                }
                if (!t) {
                    t = window.event
                }
                var s = v.menuItem;
                if (s && s[r]) {
                    return s[r](t, v)
                }
                return null
            },
            BGSTYLE: {
                display:'none',
                position: "absolute",
                left: 0,
                top: 0,
                "z-index": 200,
                width: "100%",
                height: "100%",
                border: 0,
                padding: 0,
                margin: 0
            },
            Background: function(s) {
                var t = g.addElement(document.body, "div", {
                        style: this.BGSTYLE,
                        id: "MathJax_MenuFrame"
                    },
                    [["div", {
                        style: this.BGSTYLE,
                        menuItem: s,
                        onmousedown: this.Remove
                    }]]);
                var r = t.firstChild;
                if (a.msieBackgroundBug) {
                    r.style.backgroundColor = "white";
                    r.style.filter = "alpha(opacity=0)"
                }
                if (a.msieFixedPositionBug) {
                    t.width = t.height = 0;
                    this.Resize();
                    attachEvent("onresize", this.Resize)
                } else {
                    r.style.position = "fixed"
                }
                return t
            },
            Resize: function() {
                setTimeout(a.SetWH, 0)
            },
            SetWH: function() {
                var r = document.getElementById("MathJax_MenuFrame");
                if (r) {
                    r = r.firstChild;
                    r.style.width = r.style.height = "1px";
                    r.style.width = document.body.scrollWidth + "px";
                    r.style.height = document.body.scrollHeight + "px"
                }
            },
            saveCookie: function() {
                g.Cookie.Set("menu", this.cookie)
            },
            getCookie: function() {
                this.cookie = g.Cookie.Get("menu")
            },
            getImages: function() {
                if (a.isMobile) {
                    var r = new Image();
                    r.src = p.closeImg
                }
            }
        });
    var m = a.ITEM = MathJax.Object.Subclass({
        name: "",
        Create: function(s) {
            if (!this.hidden) {
                var r = {
                    onmouseover: a.Mouseover,
                    onmouseout: a.Mouseout,
                    onmouseup: a.Mouseup,
                    onmousedown: a.Mousedown,
                    ondragstart: h,
                    onselectstart: h,
                    onselectend: h,
                    ontouchstart: a.Touchstart,
                    ontouchend: a.Touchend,
                    className: "MathJax_MenuItem",
                    menuItem: this
                };
                if (this.disabled) {
                    r.className += " MathJax_MenuDisabled"
                }
                g.addElement(s, "div", r, this.Label(r, s))
            }
        },
        Name: function() {
            return o(this.name[0], this.name[1])
        },
        Mouseover: function(v, x) {
            if (!this.disabled) {
                this.Activate(x)
            }
            if (!this.menu || !this.menu.posted) {
                var w = document.getElementById("MathJax_MenuFrame").childNodes,
                    s = x.parentNode.childNodes;
                for (var t = 0,
                         r = s.length; t < r; t++) {
                    var u = s[t].menuItem;
                    if (u && u.menu && u.menu.posted) {
                        u.Deactivate(s[t])
                    }
                }
                r = w.length - 1;
                while (r >= 0 && x.parentNode.menuItem !== w[r].menuItem) {
                    w[r].menuItem.posted = false;
                    w[r].parentNode.removeChild(w[r]);
                    r--
                }
                if (this.Timer && !a.isMobile) {
                    this.Timer(v, x)
                }
            }
        },
        Mouseout: function(r, s) {
            if (!this.menu || !this.menu.posted) {
                this.Deactivate(s)
            }
            if (this.timer) {
                clearTimeout(this.timer);
                delete this.timer
            }
        },
        Mouseup: function(r, s) {
            return this.Remove(r, s)
        },
        Touchstart: function(r, s) {
            return this.TouchEvent(r, s, "Mousedown")
        },
        Touchend: function(r, s) {
            return this.TouchEvent(r, s, "Mouseup")
        },
        TouchEvent: function(s, t, r) {
            if (this !== m.lastItem) {
                if (m.lastMenu) {
                    a.Event(s, m.lastMenu, "Mouseout")
                }
                a.Event(s, t, "Mouseover", true);
                m.lastItem = this;
                m.lastMenu = t
            }
            if (this.nativeTouch) {
                return null
            }
            a.Event(s, t, r);
            return false
        },
        Remove: function(r, s) {
            s = s.parentNode.menuItem;
            return s.Remove(r, s)
        },
        Activate: function(r) {
            this.Deactivate(r);
            r.className += " MathJax_MenuActive"
        },
        Deactivate: function(r) {
            r.className = r.className.replace(/ MathJax_MenuActive/, "")
        },
        With: function(r) {
            if (r) {
                c.Insert(this, r)
            }
            return this
        }
    });
    a.ITEM.COMMAND = a.ITEM.Subclass({
        action: function() {},
        Init: function(r, t, s) {
            if (! (r instanceof Array)) {
                r = [r, r]
            }
            this.name = r;
            this.action = t;
            this.With(s)
        },
        Label: function(r, s) {
            return [this.Name()]
        },
        Mouseup: function(r, s) {
            if (!this.disabled) {
                this.Remove(r, s);
                j.Post(["command", this]);
                this.action.call(this, r)
            }
            return h(r)
        }
    });
    a.ITEM.SUBMENU = a.ITEM.Subclass({
        menu: null,
        marker: (n && !c.Browser.isSafari ? "\u25B6": "\u25B8"),
        Init: function(r, t) {
            if (! (r instanceof Array)) {
                r = [r, r]
            }
            this.name = r;
            var s = 1;
            if (! (t instanceof a.ITEM)) {
                this.With(t),
                    s++
            }
            this.menu = a.apply(a, [].slice.call(arguments, s))
        },
        Label: function(r, s) {
            this.menu.posted = false;
            return [this.Name() + " ", ["span", {
                className: "MathJax_MenuArrow"
            },
                [this.marker]]]
        },
        Timer: function(r, s) {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            r = {
                clientX: r.clientX,
                clientY: r.clientY
            };
            this.timer = setTimeout(f(["Mouseup", this, r, s]), p.delay)
        },
        Touchend: function(s, u) {
            var t = this.menu.posted;
            var r = this.SUPER(arguments).Touchend.apply(this, arguments);
            if (t) {
                this.Deactivate(u);
                delete m.lastItem;
                delete m.lastMenu
            }
            return r
        },
        Mouseup: function(s, u) {
            if (!this.disabled) {
                if (!this.menu.posted) {
                    if (this.timer) {
                        clearTimeout(this.timer);
                        delete this.timer
                    }
                    this.menu.Post(s, u)
                } else {
                    var t = document.getElementById("MathJax_MenuFrame").childNodes,
                        r = t.length - 1;
                    while (r >= 0) {
                        var v = t[r];
                        v.menuItem.posted = false;
                        v.parentNode.removeChild(v);
                        if (v.menuItem === this.menu) {
                            break
                        }
                        r--
                    }
                }
            }
            return h(s)
        }
    });
    a.ITEM.RADIO = a.ITEM.Subclass({
        variable: null,
        marker: (n ? "\u25CF": "\u2713"),
        Init: function(s, r, t) {
            if (! (s instanceof Array)) {
                s = [s, s]
            }
            this.name = s;
            this.variable = r;
            this.With(t);
            if (this.value == null) {
                this.value = this.name[0]
            }
        },
        Label: function(s, t) {
            var r = {
                className: "MathJax_MenuRadioCheck"
            };
            if (p.settings[this.variable] !== this.value) {
                r = {
                    style: {
                        display: "none"
                    }
                }
            }
            return [["span", r, [this.marker]], " " + this.Name()]
        },
        Mouseup: function(u, v) {
            if (!this.disabled) {
                var w = v.parentNode.childNodes;
                for (var s = 0,
                         r = w.length; s < r; s++) {
                    var t = w[s].menuItem;
                    if (t && t.variable === this.variable) {
                        w[s].firstChild.style.display = "none"
                    }
                }
                v.firstChild.display = "";
                p.settings[this.variable] = this.value;
                a.cookie[this.variable] = p.settings[this.variable];
                a.saveCookie();
                j.Post(["radio button", this])
            }
            this.Remove(u, v);
            if (this.action && !this.disabled) {
                this.action.call(a, this)
            }
            return h(u)
        }
    });
    a.ITEM.CHECKBOX = a.ITEM.Subclass({
        variable: null,
        marker: "\u2713",
        Init: function(s, r, t) {
            if (! (s instanceof Array)) {
                s = [s, s]
            }
            this.name = s;
            this.variable = r;
            this.With(t)
        },
        Label: function(s, t) {
            var r = {
                className: "MathJax_MenuCheck"
            };
            if (!p.settings[this.variable]) {
                r = {
                    style: {
                        display: "none"
                    }
                }
            }
            return [["span", r, [this.marker]], " " + this.Name()]
        },
        Mouseup: function(r, s) {
            if (!this.disabled) {
                s.firstChild.display = (p.settings[this.variable] ? "none": "");
                p.settings[this.variable] = !p.settings[this.variable];
                a.cookie[this.variable] = p.settings[this.variable];
                a.saveCookie();
                j.Post(["checkbox", this])
            }
            this.Remove(r, s);
            if (this.action && !this.disabled) {
                this.action.call(a, this)
            }
            return h(r)
        }
    });
    a.ITEM.LABEL = a.ITEM.Subclass({
        Init: function(r, s) {
            if (! (r instanceof Array)) {
                r = [r, r]
            }
            this.name = r;
            this.With(s)
        },
        Label: function(r, s) {
            delete r.onmouseover,
                delete r.onmouseout;
            delete r.onmousedown;
            r.className += " MathJax_MenuLabel";
            return [this.Name()]
        }
    });
    a.ITEM.RULE = a.ITEM.Subclass({
        Label: function(r, s) {
            delete r.onmouseover,
                delete r.onmouseout;
            delete r.onmousedown;
            r.className += " MathJax_MenuRule";
            return null
        }
    });
    a.About = function() {
        var t = b["HTML-CSS"] || {};
        var s = (t.imgFonts ? "image": (t.fontInUse ? (t.webFonts ? "web": "local") + " " + t.fontInUse: (b.SVG ? "web SVG": "generic"))) + " fonts";
        var x = (!t.webFonts || t.imgFonts ? null: t.allowWebFonts.replace(/otf/, "woff or otf") + " fonts");
        var r = ["MathJax.js v" + MathJax.fileversion, ["br"]];
        r.push(["div", {
            style: {
                "border-top": "groove 2px",
                margin: ".25em 0"
            }
        }]);
        a.About.GetJax(r, MathJax.InputJax, ["InputJax", "%1 Input Jax v%2"]);
        a.About.GetJax(r, MathJax.OutputJax, ["OutputJax", "%1 Output Jax v%2"]);
        a.About.GetJax(r, MathJax.ElementJax, ["ElementJax", "%1 Element Jax v%2"]);
        r.push(["div", {
            style: {
                "border-top": "groove 2px",
                margin: ".25em 0"
            }
        }]);
        a.About.GetJax(r, MathJax.Extension, ["Extension", "%1 Extension v%2"], true);
        r.push(["div", {
            style: {
                "border-top": "groove 2px",
                margin: ".25em 0"
            }
        }], ["center", {},
            [c.Browser + " v" + c.Browser.version + (x ? " \u2014 " + o(x.replace(/ /g, ""), x) : "")]]);
        a.About.div = a.Background(a.About);
        var v = g.addElement(a.About.div, "div", {
                id: "MathJax_About"
            },
            [["b", {
                style: {
                    fontSize: "120%"
                }
            },
                ["MathJax"]], " v" + MathJax.version, ["br"], o(s.replace(/ /g, ""), "using " + s), ["br"], ["br"], ["span", {
                style: {
                    display: "inline-block",
                    "text-align": "left",
                    "font-size": "80%",
                    "max-height": "20em",
                    overflow: "auto",
                    "background-color": "#E4E4E4",
                    padding: ".4em .6em",
                    border: "1px inset"
                }
            },
                r], ["br"], ["br"], ["a", {
                href: "http://www.mathjax.org/"
            },
                ["www.mathjax.org"]], ["img", {
                src: p.closeImg,
                style: {
                    width: "21px",
                    height: "21px",
                    position: "absolute",
                    top: ".2em",
                    right: ".2em"
                },
                onclick: a.About.Remove
            }]]);
        MathJax.Localization.setCSS(v);
        var w = (document.documentElement || {});
        var u = window.innerHeight || w.clientHeight || w.scrollHeight || 0;
        if (a.prototype.msieAboutBug) {
            v.style.width = "20em";
            v.style.position = "absolute";
            v.style.left = Math.floor((document.documentElement.scrollWidth - v.offsetWidth) / 2) + "px";
            v.style.top = (Math.floor((u - v.offsetHeight) / 3) + document.body.scrollTop) + "px"
        } else {
            v.style.marginLeft = Math.floor( - v.offsetWidth / 2) + "px";
            v.style.top = Math.floor((u - v.offsetHeight) / 3) + "px"
        }
    };
    a.About.Remove = function(r) {
        if (a.About.div) {
            document.body.removeChild(a.About.div);
            delete a.About.div
        }
    };
    a.About.GetJax = function(s, x, v, u) {
        var w = [];
        for (var y in x) {
            if (x.hasOwnProperty(y) && x[y]) {
                if ((u && x[y].version) || (x[y].isa && x[y].isa(x))) {
                    w.push(o(v[0], v[1], (x[y].id || y), x[y].version))
                }
            }
        }
        w.sort();
        for (var t = 0,
                 r = w.length; t < r; t++) {
            s.push(w[t], ["br"])
        }
        return s
    };
    a.Help = function() {
        k.Require("[MathJax]/extensions/HelpDialog.js",
            function() {
                MathJax.Extension.Help.Dialog()
            })
    };
    a.ShowSource = function(v) {
        if (!v) {
            v = window.event
        }
        var u = {
            screenX: v.screenX,
            screenY: v.screenY
        };
        if (!a.jax) {
            return
        }
        if (this.format === "MathML") {
            var s = MathJax.ElementJax.mml;
            if (s && typeof(s.mbase.prototype.toMathML) !== "undefined") {
                try {
                    a.ShowSource.Text(a.jax.root.toMathML(), v)
                } catch(t) {
                    if (!t.restart) {
                        throw t
                    }
                    f.After([this, a.ShowSource, u], t.restart)
                }
            } else {
                if (!k.loadingToMathML) {
                    k.loadingToMathML = true;
                    a.ShowSource.Window(v);
                    f.Queue(k.Require("[MathJax]/extensions/toMathML.js"),
                        function() {
                            delete k.loadingToMathML;
                            if (!s.mbase.prototype.toMathML) {
                                s.mbase.prototype.toMathML = function() {}
                            }
                        },
                        [this, a.ShowSource, u]);
                    return
                }
            }
        } else {
            if (this.format === "Error") {
                a.ShowSource.Text(a.jax.errorText, v)
            } else {
                if (p.semanticsAnnotations[this.format]) {
                    var r = a.jax.root.getAnnotation(this.format);
                    if (r.data[0]) {
                        a.ShowSource.Text(r.data[0].toString())
                    }
                } else {
                    if (a.jax.originalText == null) {
                        alert(o("NoOriginalForm", "No original form available"));
                        return
                    }
                    a.ShowSource.Text(a.jax.originalText, v)
                }
            }
        }
    };
    a.ShowSource.Window = function(s) {
        if (!a.ShowSource.w) {
            var t = [],
                r = p.windowSettings;
            for (var u in r) {
                if (r.hasOwnProperty(u)) {
                    t.push(u + "=" + r[u])
                }
            }
            a.ShowSource.w = window.open("", "_blank", t.join(","))
        }
        return a.ShowSource.w
    };
    a.ShowSource.Text = function(v, t) {
        var r = a.ShowSource.Window(t);
        delete a.ShowSource.w;
        v = v.replace(/^\s*/, "").replace(/\s*$/, "");
        v = v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var u = o("EqSource", "MathJax Equation Source");
        if (a.isMobile) {
            r.document.open();
            r.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>" + u + "</title></head><body style='font-size:85%'>");
            r.document.write("<pre>" + v + "</pre>");
            r.document.write("<hr><input type='button' value='" + o("Close", "Close") + "' onclick='window.close()' />");
            r.document.write("</body></html>");
            r.document.close()
        } else {
            r.document.open();
            r.document.write("<html><head><title>" + u + "</title></head><body style='font-size:85%'>");
            r.document.write("<table><tr><td><pre>" + v + "</pre></td></tr></table>");
            r.document.write("</body></html>");
            r.document.close();
            var s = r.document.body.firstChild;
            setTimeout(function() {
                    var A = (r.outerHeight - r.innerHeight) || 30,
                        z = (r.outerWidth - r.innerWidth) || 30,
                        w,
                        B;
                    z = Math.max(100, Math.min(Math.floor(0.5 * screen.width), s.offsetWidth + z + 25));
                    A = Math.max(40, Math.min(Math.floor(0.5 * screen.height), s.offsetHeight + A + 25));
                    r.resizeTo(z, A);
                    if (t && t.screenX != null) {
                        w = Math.max(0, Math.min(t.screenX - Math.floor(z / 2), screen.width - z - 20));
                        B = Math.max(0, Math.min(t.screenY - Math.floor(A / 2), screen.height - A - 20));
                        r.moveTo(w, B)
                    }
                },
                50)
        }
    };
    a.Scale = function() {
        var s = b["HTML-CSS"],
            r = b.NativeMML,
            v = b.SVG;
        var u = (s || r || v || {
            config: {
                scale: 100
            }
        }).config.scale;
        var t = prompt(o("ScaleMath", "Scale all mathematics (compared to surrounding text) by"), u + "%");
        if (t) {
            if (t.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)) {
                t = parseFloat(t);
                if (t) {
                    if (t !== u) {
                        if (s) {
                            s.config.scale = t
                        }
                        if (r) {
                            r.config.scale = t
                        }
                        if (v) {
                            v.config.scale = t
                        }
                        a.cookie.scale = t;
                        a.saveCookie();
                        c.Reprocess()
                    }
                } else {
                    alert(o("NonZeroScale", "The scale should not be zero"))
                }
            } else {
                alert(o("PercentScale", "The scale should be a percentage (e.g., 120%%)"))
            }
        }
    };
    a.Zoom = function() {
        if (!MathJax.Extension.MathZoom) {
            k.Require("[MathJax]/extensions/MathZoom.js")
        }
    };
    a.Renderer = function() {
        var s = c.outputJax["jax/mml"];
        if (s[0] !== p.settings.renderer) {
            var v = c.Browser,
                u, r = a.Renderer.Messages,
                t;
            switch (p.settings.renderer) {
                case "NativeMML":
                    if (!p.settings.warnedMML) {
                        if (v.isChrome && v.version.substr(0, 3) !== "24.") {
                            u = r.MML.WebKit
                        } else {
                            if (v.isSafari && !v.versionAtLeast("5.0")) {
                                u = r.MML.WebKit
                            } else {
                                if (v.isMSIE) {
                                    if (!v.hasMathPlayer) {
                                        u = r.MML.MSIE
                                    }
                                } else {
                                    u = r.MML[v]
                                }
                            }
                        }
                        t = "warnedMML"
                    }
                    break;
                case "SVG":
                    if (!p.settings.warnedSVG) {
                        if (v.isMSIE && !e) {
                            u = r.SVG.MSIE
                        }
                    }
                    break
            }
            if (u) {
                u = o(u[0], u[1]);
                u += "\n\n";
                u += o("SwitchAnyway", "Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)");
                a.cookie.renderer = s[0].id;
                a.saveCookie();
                if (!confirm(u)) {
                    a.cookie.renderer = p.settings.renderer = g.Cookie.Get("menu").renderer;
                    a.saveCookie();
                    return
                }
                if (t) {
                    a.cookie.warned = p.settings.warned = true
                }
                a.cookie.renderer = p.settings.renderer;
                a.saveCookie()
            }
            c.Queue(["setRenderer", c, p.settings.renderer, "jax/mml"], ["Rerender", c])
        }
    };
    a.Renderer.Messages = {
        MML: {
            WebKit: ["WebkitNativeMMLWarning", "Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],
            MSIE: ["MSIENativeMMLWarning", "Internet Explorer requires the MathPlayer plugin in order to process MathML output."],
            Opera: ["OperaNativeMMLWarning", "Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],
            Safari: ["SafariNativeMMLWarning", "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],
            Firefox: ["FirefoxNativeMMLWarning", "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]
        },
        SVG: {
            MSIE: ["MSIESVGWarning", "SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]
        }
    };
    a.Font = function() {
        var r = b["HTML-CSS"];
        if (!r) {
            return
        }
        document.location.reload()
    };
    a.Locale = function() {
        MathJax.Localization.setLocale(p.settings.locale);
        MathJax.Hub.Queue(["Reprocess", MathJax.Hub])
    };
    a.LoadLocale = function() {
        var r = prompt(o("LoadURL", "Load translation data from this URL:"));
        if (r) {
            if (!r.match(/\.js$/)) {
                alert(o("BadURL", "The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"))
            }
            k.Require(r,
                function(s) {
                    if (s != k.STATUS.OK) {
                        alert(o("BadData", "Failed to load translation data from %1", r))
                    }
                })
        }
    };
    a.MPEvents = function(t) {
        var s = p.settings.discoverable,
            r = a.MPEvents.Messages;
        if (!e) {
            if (p.settings.mpMouse && !confirm(o.apply(o, r.IE8warning))) {
                delete a.cookie.mpContext;
                delete p.settings.mpContext;
                delete a.cookie.mpMouse;
                delete p.settings.mpMouse;
                a.saveCookie();
                return
            }
            p.settings.mpContext = p.settings.mpMouse;
            a.cookie.mpContext = a.cookie.mpMouse = p.settings.mpMouse;
            a.saveCookie();
            MathJax.Hub.Queue(["Rerender", MathJax.Hub])
        } else {
            if (!s && t.name[1] === "Menu Events" && p.settings.mpContext) {
                alert(o.apply(o, r.IE9warning))
            }
        }
    };
    a.MPEvents.Messages = {
        IE8warning: ["IE8warning", "This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],
        IE9warning: ["IE9warning", "The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]
    };
    c.Browser.Select({
        MSIE: function(r) {
            var s = (document.compatMode === "BackCompat");
            var t = r.versionAtLeast("8.0") && document.documentMode > 7;
            a.Augment({
                margin: 20,
                msieBackgroundBug: (document.documentMode < 9),
                msieFixedPositionBug: (s || !t),
                msieAboutBug: s
            });
            if (e) {
                delete p.styles["#MathJax_About"].filter;
                delete p.styles[".MathJax_Menu"].filter
            }
        },
        Firefox: function(r) {
            a.skipMouseover = r.isMobile && r.versionAtLeast("6.0");
            a.skipMousedown = r.isMobile
        }
    });
    a.isMobile = c.Browser.isMobile;
    a.noContextMenu = c.Browser.noContextMenu;
    a.CreateLocaleMenu = function() {
        if (!a.menu) {
            return
        }
        var w = a.menu.Find("Language").menu,
            t = w.items;
        var s = [],
            y = MathJax.Localization.strings;
        for (var x in y) {
            if (y.hasOwnProperty(x)) {
                s.push(x)
            }
        }
        s = s.sort();
        w.items = [];
        for (var u = 0,
                 r = s.length; u < r; u++) {
            var v = y[s[u]].menuTitle;
            if (v) {
                v += " (" + s[u] + ")"
            } else {
                v = s[u]
            }
            w.items.push(m.RADIO([s[u], v], "locale", {
                action: a.Locale
            }))
        }
        w.items.push(t[t.length - 2], t[t.length - 1])
    };
    a.CreateAnnotationMenu = function() {
        if (!a.menu) {
            return
        }
        var t = a.menu.Find("Show Math As", "Annotation").menu;
        var s = p.semanticsAnnotations;
        for (var r in s) {
            if (s.hasOwnProperty(r)) {
                t.items.push(m.COMMAND([r, r], a.ShowSource, {
                    hidden: true,
                    nativeTouch: true,
                    format: r
                }))
            }
        }
    };
    c.Register.StartupHook("End Config",
        function() {
            p.settings = c.config.menuSettings;
            if (typeof(p.settings.showRenderer) !== "undefined") {
                p.showRenderer = p.settings.showRenderer
            }
            if (typeof(p.settings.showFontMenu) !== "undefined") {
                p.showFontMenu = p.settings.showFontMenu
            }
            if (typeof(p.settings.showContext) !== "undefined") {
                p.showContext = p.settings.showContext
            }
            a.getCookie();
            a.menu = a(m.SUBMENU(["Show", "Show Math As"], m.COMMAND(["MathMLcode", "MathML Code"], a.ShowSource, {
                nativeTouch: true,
                format: "MathML"
            }), m.COMMAND(["Original", "Original Form"], a.ShowSource, {
                nativeTouch: true
            }), m.SUBMENU(["Annotation", "Annotation"], {
                disabled: true
            }), m.RULE(), m.CHECKBOX(["texHints", "Show TeX hints in MathML"], "texHints")), m.RULE(), m.SUBMENU(["Settings", "Math Settings"], m.SUBMENU(["ZoomTrigger", "Zoom Trigger"], m.RADIO(["Hover", "Hover"], "zoom", {
                action: a.Zoom
            }), m.RADIO(["Click", "Click"], "zoom", {
                action: a.Zoom
            }), m.RADIO(["DoubleClick", "Double-Click"], "zoom", {
                action: a.Zoom
            }), m.RADIO(["NoZoom", "No Zoom"], "zoom", {
                value: "None"
            }), m.RULE(), m.LABEL(["TriggerRequires", "Trigger Requires:"]), m.CHECKBOX((c.Browser.isMac ? ["Option", "Option"] : ["Alt", "Alt"]), "ALT"), m.CHECKBOX(["Command", "Command"], "CMD", {
                hidden: !c.Browser.isMac
            }), m.CHECKBOX(["Control", "Control"], "CTRL", {
                hidden: c.Browser.isMac
            }), m.CHECKBOX(["Shift", "Shift"], "Shift")), m.SUBMENU(["ZoomFactor", "Zoom Factor"], m.RADIO("125%", "zscale"), m.RADIO("133%", "zscale"), m.RADIO("150%", "zscale"), m.RADIO("175%", "zscale"), m.RADIO("200%", "zscale"), m.RADIO("250%", "zscale"), m.RADIO("300%", "zscale"), m.RADIO("400%", "zscale")), m.RULE(), m.SUBMENU(["Renderer", "Math Renderer"], {
                    hidden: !p.showRenderer
                },
                m.RADIO("HTML-CSS", "renderer", {
                    action: a.Renderer
                }), m.RADIO("MathML", "renderer", {
                    action: a.Renderer,
                    value: "NativeMML"
                }), m.RADIO("SVG", "renderer", {
                    action: a.Renderer
                })), m.SUBMENU("MathPlayer", {
                    hidden: !c.Browser.isMSIE || !p.showMathPlayer,
                    disabled: !c.Browser.hasMathPlayer
                },
                m.LABEL(["MPHandles", "Let MathPlayer Handle:"]), m.CHECKBOX(["MenuEvents", "Menu Events"], "mpContext", {
                    action: a.MPEvents,
                    hidden: !e
                }), m.CHECKBOX(["MouseEvents", "Mouse Events"], "mpMouse", {
                    action: a.MPEvents,
                    hidden: !e
                }), m.CHECKBOX(["MenuAndMouse", "Mouse and Menu Events"], "mpMouse", {
                    action: a.MPEvents,
                    hidden: e
                })), m.SUBMENU(["FontPrefs", "Font Preference"], {
                    hidden: !p.showFontMenu
                },
                m.LABEL(["ForHTMLCSS", "For HTML-CSS:"]), m.RADIO(["Auto", "Auto"], "font", {
                    action: a.Font
                }), m.RULE(), m.RADIO(["TeXLocal", "TeX (local)"], "font", {
                    action: a.Font
                }), m.RADIO(["TeXWeb", "TeX (web)"], "font", {
                    action: a.Font
                }), m.RADIO(["TeXImage", "TeX (image)"], "font", {
                    action: a.Font
                }), m.RULE(), m.RADIO(["STIXLocal", "STIX (local)"], "font", {
                    action: a.Font
                }), m.RADIO(["STIXWeb", "STIX (web)"], "font", {
                    action: a.Font
                }), m.RULE(), m.RADIO(["AsanaMathWeb", "Asana Math (web)"], "font", {
                    action: a.Font
                }), m.RADIO(["GyrePagellaWeb", "Gyre Pagella (web)"], "font", {
                    action: a.Font
                }), m.RADIO(["GyreTermesWeb", "Gyre Termes (web)"], "font", {
                    action: a.Font
                }), m.RADIO(["LatinModernWeb", "Latin Modern (web)"], "font", {
                    action: a.Font
                }), m.RADIO(["NeoEulerWeb", "Neo Euler (web)"], "font", {
                    action: a.Font
                })), m.SUBMENU(["ContextMenu", "Contextual Menu"], {
                    hidden: !p.showContext
                },
                m.RADIO("MathJax", "context"), m.RADIO(["Browser", "Browser"], "context")), m.COMMAND(["Scale", "Scale All Math ..."], a.Scale), m.RULE().With({
                hidden: !p.showDiscoverable,
                name: ["", "discover_rule"]
            }), m.CHECKBOX(["Discoverable", "Highlight on Hover"], "discoverable", {
                hidden: !p.showDiscoverable
            })), m.SUBMENU(["Locale", "Language"], {
                    hidden: !p.showLocale
                },
                m.RADIO("en", "locale", {
                    action: a.Locale
                }), m.RULE().With({
                    hidden: !p.showLocaleURL,
                    name: ["", "localURL_rule"]
                }), m.COMMAND(["LoadLocale", "Load from URL ..."], a.LoadLocale, {
                    hidden: !p.showLocaleURL
                })), m.RULE(), m.COMMAND(["About", "About MathJax"], a.About), m.COMMAND(["Help", "MathJax Help"], a.Help));
            if (a.isMobile) { (function() {
                var s = p.settings;
                var r = a.menu.Find("Math Settings", "Zoom Trigger").menu;
                r.items[0].disabled = r.items[1].disabled = true;
                if (s.zoom === "Hover" || s.zoom == "Click") {
                    s.zoom = "None"
                }
                r.items = r.items.slice(0, 4);
                if (navigator.appVersion.match(/[ (]Android[) ]/)) {
                    a.ITEM.SUBMENU.Augment({
                        marker: "\u00BB"
                    })
                }
            })()
            }
            a.CreateLocaleMenu();
            a.CreateAnnotationMenu()
        });
    a.showRenderer = function(r) {
        a.cookie.showRenderer = p.showRenderer = r;
        a.saveCookie();
        a.menu.Find("Math Settings", "Math Renderer").hidden = !r
    };
    a.showMathPlayer = function(r) {
        a.cookie.showMathPlayer = p.showMathPlayer = r;
        a.saveCookie();
        a.menu.Find("Math Settings", "MathPlayer").hidden = !r
    };
    a.showFontMenu = function(r) {
        a.cookie.showFontMenu = p.showFontMenu = r;
        a.saveCookie();
        a.menu.Find("Math Settings", "Font Preference").hidden = !r
    };
    a.showContext = function(r) {
        a.cookie.showContext = p.showContext = r;
        a.saveCookie();
        a.menu.Find("Math Settings", "Contextual Menu").hidden = !r
    };
    a.showDiscoverable = function(r) {
        a.cookie.showDiscoverable = p.showDiscoverable = r;
        a.saveCookie();
        a.menu.Find("Math Settings", "Highlight on Hover").hidden = !r;
        a.menu.Find("Math Settings", "discover_rule").hidden = !r
    };
    a.showLocale = function(r) {
        a.cookie.showLocale = p.showLocale = r;
        a.saveCookie();
        a.menu.Find("Language").hidden = !r
    };
    MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",
        function() {
            if (!MathJax.OutputJax["HTML-CSS"].config.imageFont) {
                a.menu.Find("Math Settings", "Font Preference", "TeX (image)").disabled = true
            }
        });
    f.Queue(c.Register.StartupHook("End Config", {}), ["getImages", a], ["Styles", k, p.styles], ["Post", c.Startup.signal, "MathMenu Ready"], ["loadComplete", k, "[MathJax]/extensions/MathMenu.js"])
})(MathJax.Hub, MathJax.HTML, MathJax.Ajax, MathJax.CallBack, MathJax.OutputJax);
MathJax.ElementJax.mml = MathJax.ElementJax({
        mimeType: "jax/mml"
    },
    {
        id: "mml",
        version: "2.3",
        directory: MathJax.ElementJax.directory + "/mml",
        extensionDir: MathJax.ElementJax.extensionDir + "/mml",
        optableDir: MathJax.ElementJax.directory + "/mml/optable"
    });
MathJax.ElementJax.mml.Augment({
        Init: function() {
            if (arguments.length === 1 && arguments[0].type === "math") {
                this.root = arguments[0]
            } else {
                this.root = MathJax.ElementJax.mml.math.apply(this, arguments)
            }
            if (this.root.attr && this.root.attr.mode) {
                if (!this.root.display && this.root.attr.mode === "display") {
                    this.root.display = "block";
                    this.root.attrNames.push("display")
                }
                delete this.root.attr.mode;
                for (var b = 0,
                         a = this.root.attrNames.length; b < a; b++) {
                    if (this.root.attrNames[b] === "mode") {
                        this.root.attrNames.splice(b, 1);
                        break
                    }
                }
            }
        }
    },
    {
        INHERIT: "_inherit_",
        AUTO: "_auto_",
        SIZE: {
            INFINITY: "infinity",
            SMALL: "small",
            NORMAL: "normal",
            BIG: "big"
        },
        COLOR: {
            TRANSPARENT: "transparent"
        },
        VARIANT: {
            NORMAL: "normal",
            BOLD: "bold",
            ITALIC: "italic",
            BOLDITALIC: "bold-italic",
            DOUBLESTRUCK: "double-struck",
            FRAKTUR: "fraktur",
            BOLDFRAKTUR: "bold-fraktur",
            SCRIPT: "script",
            BOLDSCRIPT: "bold-script",
            SANSSERIF: "sans-serif",
            BOLDSANSSERIF: "bold-sans-serif",
            SANSSERIFITALIC: "sans-serif-italic",
            SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
            MONOSPACE: "monospace",
            INITIAL: "inital",
            TAILED: "tailed",
            LOOPED: "looped",
            STRETCHED: "stretched",
            CALIGRAPHIC: "-tex-caligraphic",
            OLDSTYLE: "-tex-oldstyle"
        },
        FORM: {
            PREFIX: "prefix",
            INFIX: "infix",
            POSTFIX: "postfix"
        },
        LINEBREAK: {
            AUTO: "auto",
            NEWLINE: "newline",
            NOBREAK: "nobreak",
            GOODBREAK: "goodbreak",
            BADBREAK: "badbreak"
        },
        LINEBREAKSTYLE: {
            BEFORE: "before",
            AFTER: "after",
            DUPLICATE: "duplicate",
            INFIXLINBREAKSTYLE: "infixlinebreakstyle"
        },
        INDENTALIGN: {
            LEFT: "left",
            CENTER: "center",
            RIGHT: "right",
            AUTO: "auto",
            ID: "id",
            INDENTALIGN: "indentalign"
        },
        INDENTSHIFT: {
            INDENTSHIFT: "indentshift"
        },
        LINETHICKNESS: {
            THIN: "thin",
            MEDIUM: "medium",
            THICK: "thick"
        },
        NOTATION: {
            LONGDIV: "longdiv",
            ACTUARIAL: "actuarial",
            RADICAL: "radical",
            BOX: "box",
            ROUNDEDBOX: "roundedbox",
            CIRCLE: "circle",
            LEFT: "left",
            RIGHT: "right",
            TOP: "top",
            BOTTOM: "bottom",
            UPDIAGONALSTRIKE: "updiagonalstrike",
            DOWNDIAGONALSTRIKE: "downdiagonalstrike",
            UPDIAGONALARROW: "updiagonalarrow",
            VERTICALSTRIKE: "verticalstrike",
            HORIZONTALSTRIKE: "horizontalstrike",
            MADRUWB: "madruwb"
        },
        ALIGN: {
            TOP: "top",
            BOTTOM: "bottom",
            CENTER: "center",
            BASELINE: "baseline",
            AXIS: "axis",
            LEFT: "left",
            RIGHT: "right"
        },
        LINES: {
            NONE: "none",
            SOLID: "solid",
            DASHED: "dashed"
        },
        SIDE: {
            LEFT: "left",
            RIGHT: "right",
            LEFTOVERLAP: "leftoverlap",
            RIGHTOVERLAP: "rightoverlap"
        },
        WIDTH: {
            AUTO: "auto",
            FIT: "fit"
        },
        ACTIONTYPE: {
            TOGGLE: "toggle",
            STATUSLINE: "statusline",
            TOOLTIP: "tooltip",
            INPUT: "input"
        },
        LENGTH: {
            VERYVERYTHINMATHSPACE: "veryverythinmathspace",
            VERYTHINMATHSPACE: "verythinmathspace",
            THINMATHSPACE: "thinmathspace",
            MEDIUMMATHSPACE: "mediummathspace",
            THICKMATHSPACE: "thickmathspace",
            VERYTHICKMATHSPACE: "verythickmathspace",
            VERYVERYTHICKMATHSPACE: "veryverythickmathspace",
            NEGATIVEVERYVERYTHINMATHSPACE: "negativeveryverythinmathspace",
            NEGATIVEVERYTHINMATHSPACE: "negativeverythinmathspace",
            NEGATIVETHINMATHSPACE: "negativethinmathspace",
            NEGATIVEMEDIUMMATHSPACE: "negativemediummathspace",
            NEGATIVETHICKMATHSPACE: "negativethickmathspace",
            NEGATIVEVERYTHICKMATHSPACE: "negativeverythickmathspace",
            NEGATIVEVERYVERYTHICKMATHSPACE: "negativeveryverythickmathspace"
        },
        OVERFLOW: {
            LINBREAK: "linebreak",
            SCROLL: "scroll",
            ELIDE: "elide",
            TRUNCATE: "truncate",
            SCALE: "scale"
        },
        UNIT: {
            EM: "em",
            EX: "ex",
            PX: "px",
            IN: "in",
            CM: "cm",
            MM: "mm",
            PT: "pt",
            PC: "pc"
        },
        TEXCLASS: {
            ORD: 0,
            OP: 1,
            BIN: 2,
            REL: 3,
            OPEN: 4,
            CLOSE: 5,
            PUNCT: 6,
            INNER: 7,
            VCENTER: 8,
            NONE: -1
        },
        TEXCLASSNAMES: ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"],
        copyAttributes: {
            fontfamily: true,
            fontsize: true,
            fontweight: true,
            fontstyle: true,
            color: true,
            background: true,
            id: true,
            "class": true,
            href: true,
            style: true
        },
        skipAttributes: {
            texClass: true,
            useHeight: true,
            texprimestyle: true
        },
        copyAttributeNames: ["fontfamily", "fontsize", "fontweight", "fontstyle", "color", "background", "id", "class", "href", "style"],
        Error: function(d, e) {
            var c = this.merror(d),
                b = MathJax.Localization.fontDirection(),
                a = MathJax.Localization.fontFamily();
            if (e) {
                c = c.With(e)
            }
            if (b || a) {
                c = this.mstyle(c);
                if (b) {
                    c.dir = b
                }
                if (a) {
                    c.style.fontFamily = "font-family: " + a
                }
            }
            return c
        }
    }); (function(a) {
    a.mbase = MathJax.Object.Subclass({
            type: "base",
            isToken: false,
            defaults: {
                mathbackground: a.INHERIT,
                mathcolor: a.INHERIT,
                dir: a.INHERIT
            },
            noInherit: {},
            noInheritAttribute: {
                texClass: true
            },
            linebreakContainer: false,
            Init: function() {
                this.data = [];
                if (this.inferRow && !(arguments.length === 1 && arguments[0].inferred)) {
                    this.Append(a.mrow().With({
                        inferred: true,
                        notParent: true
                    }))
                }
                this.Append.apply(this, arguments)
            },
            With: function(d) {
                for (var e in d) {
                    if (d.hasOwnProperty(e)) {
                        this[e] = d[e]
                    }
                }
                return this
            },
            Append: function() {
                if (this.inferRow && this.data.length) {
                    this.data[0].Append.apply(this.data[0], arguments)
                } else {
                    for (var e = 0,
                             d = arguments.length; e < d; e++) {
                        this.SetData(this.data.length, arguments[e])
                    }
                }
            },
            SetData: function(d, e) {
                if (e != null) {
                    if (! (e instanceof a.mbase)) {
                        e = (this.isToken ? a.chars(e) : a.mtext(e))
                    }
                    e.parent = this;
                    e.setInherit(this.inheritFromMe ? this: this.inherit)
                }
                this.data[d] = e
            },
            Parent: function() {
                var d = this.parent;
                while (d && d.notParent) {
                    d = d.parent
                }
                return d
            },
            Get: function(e, j) {
                if (this[e] != null) {
                    return this[e]
                }
                if (this.attr && this.attr[e] != null) {
                    return this.attr[e]
                }
                var f = this.Parent();
                if (f && f["adjustChild_" + e] != null) {
                    return (f["adjustChild_" + e])(this.childPosition(), j)
                }
                var i = this.inherit;
                var d = i;
                while (i) {
                    var h = i[e];
                    if (h == null && i.attr) {
                        h = i.attr[e]
                    }
                    if (h != null && i.noInheritAttribute && !i.noInheritAttribute[e]) {
                        var g = i.noInherit[this.type];
                        if (! (g && g[e])) {
                            return h
                        }
                    }
                    d = i;
                    i = i.inherit
                }
                if (!j) {
                    if (this.defaults[e] === a.AUTO) {
                        return this.autoDefault(e)
                    }
                    if (this.defaults[e] !== a.INHERIT && this.defaults[e] != null) {
                        return this.defaults[e]
                    }
                    if (d) {
                        return d.defaults[e]
                    }
                }
                return null
            },
            hasValue: function(d) {
                return (this.Get(d, true) != null)
            },
            getValues: function() {
                var e = {};
                for (var f = 0,
                         d = arguments.length; f < d; f++) {
                    e[arguments[f]] = this.Get(arguments[f])
                }
                return e
            },
            adjustChild_scriptlevel: function(e, d) {
                return this.Get("scriptlevel", d)
            },
            adjustChild_displaystyle: function(e, d) {
                return this.Get("displaystyle", d)
            },
            adjustChild_texprimestyle: function(e, d) {
                return this.Get("texprimestyle", d)
            },
            childPosition: function() {
                var g = this,
                    f = g.parent;
                while (f.notParent) {
                    g = f;
                    f = g.parent
                }
                for (var e = 0,
                         d = f.data.length; e < d; e++) {
                    if (f.data[e] === g) {
                        return e
                    }
                }
                return null
            },
            setInherit: function(f) {
                if (f !== this.inherit && this.inherit == null) {
                    this.inherit = f;
                    for (var e = 0,
                             d = this.data.length; e < d; e++) {
                        if (this.data[e] && this.data[e].setInherit) {
                            this.data[e].setInherit(f)
                        }
                    }
                }
            },
            setTeXclass: function(d) {
                this.getPrevClass(d);
                return (typeof(this.texClass) !== "undefined" ? this: d)
            },
            getPrevClass: function(d) {
                if (d) {
                    this.prevClass = d.Get("texClass");
                    this.prevLevel = d.Get("scriptlevel")
                }
            },
            updateTeXclass: function(d) {
                if (d) {
                    this.prevClass = d.prevClass;
                    delete d.prevClass;
                    this.prevLevel = d.prevLevel;
                    delete d.prevLevel;
                    this.texClass = d.Get("texClass")
                }
            },
            texSpacing: function() {
                var e = (this.prevClass != null ? this.prevClass: a.TEXCLASS.NONE);
                var d = (this.Get("texClass") || a.TEXCLASS.ORD);
                if (e === a.TEXCLASS.NONE || d === a.TEXCLASS.NONE) {
                    return ""
                }
                if (e === a.TEXCLASS.VCENTER) {
                    e = a.TEXCLASS.ORD
                }
                if (d === a.TEXCLASS.VCENTER) {
                    d = a.TEXCLASS.ORD
                }
                var f = this.TEXSPACE[e][d];
                if (this.prevLevel > 0 && this.Get("scriptlevel") > 0 && f >= 0) {
                    return ""
                }
                return this.TEXSPACELENGTH[Math.abs(f)]
            },
            TEXSPACELENGTH: ["", a.LENGTH.THINMATHSPACE, a.LENGTH.MEDIUMMATHSPACE, a.LENGTH.THICKMATHSPACE],
            TEXSPACE: [[0, -1, 2, 3, 0, 0, 0, 1], [ - 1, -1, 0, 3, 0, 0, 0, 1], [2, 2, 0, 0, 2, 0, 0, 2], [3, 3, 0, 0, 3, 0, 0, 3], [0, 0, 0, 0, 0, 0, 0, 0], [0, -1, 2, 3, 0, 0, 0, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, -1, 2, 3, 1, 0, 1, 1]],
            autoDefault: function(d) {
                return ""
            },
            isSpacelike: function() {
                return false
            },
            isEmbellished: function() {
                return false
            },
            Core: function() {
                return this
            },
            CoreMO: function() {
                return this
            },
            hasNewline: function() {
                if (this.isEmbellished()) {
                    return this.CoreMO().hasNewline()
                }
                if (this.isToken || this.linebreakContainer) {
                    return false
                }
                for (var e = 0,
                         d = this.data.length; e < d; e++) {
                    if (this.data[e] && this.data[e].hasNewline()) {
                        return true
                    }
                }
                return false
            },
            array: function() {
                if (this.inferred) {
                    return this.data
                } else {
                    return [this]
                }
            },
            toString: function() {
                return this.type + "(" + this.data.join(",") + ")"
            },
            getAnnotation: function() {
                return null
            }
        },
        {
            childrenSpacelike: function() {
                for (var e = 0,
                         d = this.data.length; e < d; e++) {
                    if (!this.data[e].isSpacelike()) {
                        return false
                    }
                }
                return true
            },
            childEmbellished: function() {
                return (this.data[0] && this.data[0].isEmbellished())
            },
            childCore: function() {
                return this.data[0]
            },
            childCoreMO: function() {
                return (this.data[0] ? this.data[0].CoreMO() : null)
            },
            setChildTeXclass: function(d) {
                if (this.data[0]) {
                    d = this.data[0].setTeXclass(d);
                    this.updateTeXclass(this.data[0])
                }
                return d
            },
            setBaseTeXclasses: function(f) {
                this.getPrevClass(f);
                this.texClass = null;
                if (this.data[0]) {
                    if (this.isEmbellished() || this.data[0].isa(a.mi)) {
                        f = this.data[0].setTeXclass(f);
                        this.updateTeXclass(this.Core())
                    } else {
                        this.data[0].setTeXclass();
                        f = this
                    }
                } else {
                    f = this
                }
                for (var e = 1,
                         d = this.data.length; e < d; e++) {
                    if (this.data[e]) {
                        this.data[e].setTeXclass()
                    }
                }
                return f
            },
            setSeparateTeXclasses: function(f) {
                this.getPrevClass(f);
                for (var e = 0,
                         d = this.data.length; e < d; e++) {
                    if (this.data[e]) {
                        this.data[e].setTeXclass()
                    }
                }
                if (this.isEmbellished()) {
                    this.updateTeXclass(this.Core())
                }
                return this
            }
        });
    a.mi = a.mbase.Subclass({
        type: "mi",
        isToken: true,
        texClass: a.TEXCLASS.ORD,
        defaults: {
            mathvariant: a.AUTO,
            mathsize: a.INHERIT,
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            dir: a.INHERIT
        },
        autoDefault: function(e) {
            if (e === "mathvariant") {
                var d = (this.data[0] || "").toString();
                return (d.length === 1 || (d.length === 2 && d.charCodeAt(0) >= 55296 && d.charCodeAt(0) < 56320) ? a.VARIANT.ITALIC: a.VARIANT.NORMAL)
            }
            return ""
        },
        setTeXclass: function(e) {
            this.getPrevClass(e);
            var d = this.data.join("");
            if (d.length > 1 && d.match(/^[a-z][a-z0-9]*$/i) && this.texClass === a.TEXCLASS.ORD) {
                this.texClass = a.TEXCLASS.OP;
                this.autoOP = true
            }
            return this
        }
    });
    a.mn = a.mbase.Subclass({
        type: "mn",
        isToken: true,
        texClass: a.TEXCLASS.ORD,
        defaults: {
            mathvariant: a.INHERIT,
            mathsize: a.INHERIT,
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            dir: a.INHERIT
        }
    });
    a.mo = a.mbase.Subclass({
        type: "mo",
        isToken: true,
        defaults: {
            mathvariant: a.INHERIT,
            mathsize: a.INHERIT,
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            dir: a.INHERIT,
            form: a.AUTO,
            fence: a.AUTO,
            separator: a.AUTO,
            lspace: a.AUTO,
            rspace: a.AUTO,
            stretchy: a.AUTO,
            symmetric: a.AUTO,
            maxsize: a.AUTO,
            minsize: a.AUTO,
            largeop: a.AUTO,
            movablelimits: a.AUTO,
            accent: a.AUTO,
            linebreak: a.LINEBREAK.AUTO,
            lineleading: a.INHERIT,
            linebreakstyle: a.AUTO,
            linebreakmultchar: a.INHERIT,
            indentalign: a.INHERIT,
            indentshift: a.INHERIT,
            indenttarget: a.INHERIT,
            indentalignfirst: a.INHERIT,
            indentshiftfirst: a.INHERIT,
            indentalignlast: a.INHERIT,
            indentshiftlast: a.INHERIT,
            texClass: a.AUTO
        },
        defaultDef: {
            form: a.FORM.INFIX,
            fence: false,
            separator: false,
            lspace: a.LENGTH.THICKMATHSPACE,
            rspace: a.LENGTH.THICKMATHSPACE,
            stretchy: false,
            symmetric: true,
            maxsize: a.SIZE.INFINITY,
            minsize: "0em",
            largeop: false,
            movablelimits: false,
            accent: false,
            linebreak: a.LINEBREAK.AUTO,
            lineleading: "1ex",
            linebreakstyle: "before",
            indentalign: a.INDENTALIGN.AUTO,
            indentshift: "0",
            indenttarget: "",
            indentalignfirst: a.INDENTALIGN.INDENTALIGN,
            indentshiftfirst: a.INDENTSHIFT.INDENTSHIFT,
            indentalignlast: a.INDENTALIGN.INDENTALIGN,
            indentshiftlast: a.INDENTSHIFT.INDENTSHIFT,
            texClass: a.TEXCLASS.REL
        },
        SPACE_ATTR: {
            lspace: 1,
            rspace: 2,
            form: 4
        },
        useMMLspacing: 7,
        autoDefault: function(f, l) {
            var k = this.def;
            if (!k) {
                if (f === "form") {
                    this.useMMLspacing &= ~this.SPACE_ATTR.form;
                    return this.getForm()
                }
                var j = this.data.join("");
                var e = [this.Get("form"), a.FORM.INFIX, a.FORM.POSTFIX, a.FORM.PREFIX];
                for (var g = 0,
                         d = e.length; g < d; g++) {
                    var h = this.OPTABLE[e[g]][j];
                    if (h) {
                        k = this.makeDef(h);
                        break
                    }
                }
                if (!k) {
                    k = this.CheckRange(j)
                }
                if (!k && l) {
                    k = {}
                } else {
                    if (!k) {
                        k = MathJax.Hub.Insert({},
                            this.defaultDef)
                    }
                    k.form = e[0];
                    this.def = k
                }
            }
            this.useMMLspacing &= ~ (this.SPACE_ATTR[f] || 0);
            if (k[f] != null) {
                return k[f]
            } else {
                if (!l) {
                    return this.defaultDef[f]
                }
            }
            return ""
        },
        CheckRange: function(h) {
            var j = h.charCodeAt(0);
            if (j >= 55296 && j < 56320) {
                j = (((j - 55296) << 10) + (h.charCodeAt(1) - 56320)) + 65536
            }
            for (var f = 0,
                     d = this.RANGES.length; f < d && this.RANGES[f][0] <= j; f++) {
                if (j <= this.RANGES[f][1]) {
                    if (this.RANGES[f][3]) {
                        var e = a.optableDir + "/" + this.RANGES[f][3] + ".js";
                        this.RANGES[f][3] = null;
                        MathJax.Hub.RestartAfter(MathJax.Ajax.Require(e))
                    }
                    var g = a.TEXCLASSNAMES[this.RANGES[f][2]];
                    g = this.OPTABLE.infix[h] = a.mo.OPTYPES[g === "BIN" ? "BIN3": g];
                    return this.makeDef(g)
                }
            }
            return null
        },
        makeDef: function(e) {
            if (e[2] == null) {
                e[2] = this.defaultDef.texClass
            }
            if (!e[3]) {
                e[3] = {}
            }
            var d = MathJax.Hub.Insert({},
                e[3]);
            d.lspace = this.SPACE[e[0]];
            d.rspace = this.SPACE[e[1]];
            d.texClass = e[2];
            if (d.texClass === a.TEXCLASS.REL && (this.movablelimits || this.data.join("").match(/^[a-z]+$/i))) {
                d.texClass = a.TEXCLASS.OP
            }
            return d
        },
        getForm: function() {
            var d = this,
                f = this.parent,
                e = this.Parent();
            while (e && e.isEmbellished()) {
                d = f;
                f = e.parent;
                e = e.Parent()
            }
            if (f && f.type === "mrow" && f.NonSpaceLength() !== 1) {
                if (f.FirstNonSpace() === d) {
                    return a.FORM.PREFIX
                }
                if (f.LastNonSpace() === d) {
                    return a.FORM.POSTFIX
                }
            }
            return a.FORM.INFIX
        },
        isEmbellished: function() {
            return true
        },
        hasNewline: function() {
            return (this.Get("linebreak") === a.LINEBREAK.NEWLINE)
        },
        setTeXclass: function(d) {
            this.getValues("lspace", "rspace");
            if (this.useMMLspacing) {
                this.texClass = a.TEXCLASS.NONE;
                return this
            }
            this.texClass = this.Get("texClass");
            if (this.data.join("") === "\u2061") {
                if (d) {
                    d.texClass = a.TEXCLASS.OP
                }
                this.texClass = this.prevClass = a.TEXCLASS.NONE;
                return d
            }
            return this.adjustTeXclass(d)
        },
        adjustTeXclass: function(d) {
            if (this.texClass === a.TEXCLASS.NONE) {
                return d
            }
            if (d) {
                if (d.autoOP && (this.texClass === a.TEXCLASS.BIN || this.texClass === a.TEXCLASS.REL)) {
                    d.texClass = a.TEXCLASS.ORD
                }
                this.prevClass = d.texClass || a.TEXCLASS.ORD;
                this.prevLevel = d.Get("scriptlevel")
            } else {
                this.prevClass = a.TEXCLASS.NONE
            }
            if (this.texClass === a.TEXCLASS.BIN && (this.prevClass === a.TEXCLASS.NONE || this.prevClass === a.TEXCLASS.BIN || this.prevClass === a.TEXCLASS.OP || this.prevClass === a.TEXCLASS.REL || this.prevClass === a.TEXCLASS.OPEN || this.prevClass === a.TEXCLASS.PUNCT)) {
                this.texClass = a.TEXCLASS.ORD
            } else {
                if (this.prevClass === a.TEXCLASS.BIN && (this.texClass === a.TEXCLASS.REL || this.texClass === a.TEXCLASS.CLOSE || this.texClass === a.TEXCLASS.PUNCT)) {
                    d.texClass = this.prevClass = a.TEXCLASS.ORD
                }
            }
            return this
        }
    });
    a.mtext = a.mbase.Subclass({
        type: "mtext",
        isToken: true,
        isSpacelike: function() {
            return true
        },
        texClass: a.TEXCLASS.ORD,
        defaults: {
            mathvariant: a.INHERIT,
            mathsize: a.INHERIT,
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            dir: a.INHERIT
        }
    });
    a.mspace = a.mbase.Subclass({
        type: "mspace",
        isToken: true,
        isSpacelike: function() {
            return true
        },
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            width: "0em",
            height: "0ex",
            depth: "0ex",
            linebreak: a.LINEBREAK.AUTO
        },
        hasDimAttr: function() {
            return (this.hasValue("width") || this.hasValue("height") || this.hasValue("depth"))
        },
        hasNewline: function() {
            return (!this.hasDimAttr() && this.Get("linebreak") === a.LINEBREAK.NEWLINE)
        }
    });
    a.ms = a.mbase.Subclass({
        type: "ms",
        isToken: true,
        texClass: a.TEXCLASS.ORD,
        defaults: {
            mathvariant: a.INHERIT,
            mathsize: a.INHERIT,
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            dir: a.INHERIT,
            lquote: '"',
            rquote: '"'
        }
    });
    a.mglyph = a.mbase.Subclass({
        type: "mglyph",
        isToken: true,
        texClass: a.TEXCLASS.ORD,
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            alt: "",
            src: "",
            width: a.AUTO,
            height: a.AUTO,
            valign: "0em"
        }
    });
    a.mrow = a.mbase.Subclass({
        type: "mrow",
        isSpacelike: a.mbase.childrenSpacelike,
        inferred: false,
        notParent: false,
        isEmbellished: function() {
            var e = false;
            for (var f = 0,
                     d = this.data.length; f < d; f++) {
                if (this.data[f] == null) {
                    continue
                }
                if (this.data[f].isEmbellished()) {
                    if (e) {
                        return false
                    }
                    e = true;
                    this.core = f
                } else {
                    if (!this.data[f].isSpacelike()) {
                        return false
                    }
                }
            }
            return e
        },
        NonSpaceLength: function() {
            var f = 0;
            for (var e = 0,
                     d = this.data.length; e < d; e++) {
                if (this.data[e] && !this.data[e].isSpacelike()) {
                    f++
                }
            }
            return f
        },
        FirstNonSpace: function() {
            for (var e = 0,
                     d = this.data.length; e < d; e++) {
                if (this.data[e] && !this.data[e].isSpacelike()) {
                    return this.data[e]
                }
            }
            return null
        },
        LastNonSpace: function() {
            for (var d = this.data.length - 1; d >= 0; d--) {
                if (this.data[0] && !this.data[d].isSpacelike()) {
                    return this.data[d]
                }
            }
            return null
        },
        Core: function() {
            if (! (this.isEmbellished()) || typeof(this.core) === "undefined") {
                return this
            }
            return this.data[this.core]
        },
        CoreMO: function() {
            if (! (this.isEmbellished()) || typeof(this.core) === "undefined") {
                return this
            }
            return this.data[this.core].CoreMO()
        },
        toString: function() {
            if (this.inferred) {
                return "[" + this.data.join(",") + "]"
            }
            return this.SUPER(arguments).toString.call(this)
        },
        setTeXclass: function(f) {
            for (var e = 0,
                     d = this.data.length; e < d; e++) {
                if (this.data[e]) {
                    f = this.data[e].setTeXclass(f)
                }
            }
            if (this.data[0]) {
                this.updateTeXclass(this.data[0])
            }
            return f
        },
        getAnnotation: function(d) {
            if (this.data.length != 1) {
                return null
            }
            return this.data[0].getAnnotation(d)
        }
    });
    a.mfrac = a.mbase.Subclass({
        type: "mfrac",
        num: 0,
        den: 1,
        linebreakContainer: true,
        texClass: a.TEXCLASS.INNER,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            linethickness: a.LINETHICKNESS.MEDIUM,
            numalign: a.ALIGN.CENTER,
            denomalign: a.ALIGN.CENTER,
            bevelled: false
        },
        adjustChild_displaystyle: function(d) {
            return false
        },
        adjustChild_scriptlevel: function(e) {
            var d = this.Get("scriptlevel");
            if (!this.Get("displaystyle") || d > 0) {
                d++
            }
            return d
        },
        adjustChild_texprimestyle: function(d) {
            if (d == this.den) {
                return true
            }
            return this.Get("texprimestyle")
        },
        setTeXclass: a.mbase.setSeparateTeXclasses
    });
    a.msqrt = a.mbase.Subclass({
        type: "msqrt",
        inferRow: true,
        linebreakContainer: true,
        texClass: a.TEXCLASS.ORD,
        setTeXclass: a.mbase.setSeparateTeXclasses,
        adjustChild_texprimestyle: function(d) {
            return true
        }
    });
    a.mroot = a.mbase.Subclass({
        type: "mroot",
        linebreakContainer: true,
        texClass: a.TEXCLASS.ORD,
        adjustChild_displaystyle: function(d) {
            if (d === 1) {
                return false
            }
            return this.Get("displaystyle")
        },
        adjustChild_scriptlevel: function(e) {
            var d = this.Get("scriptlevel");
            if (e === 1) {
                d += 2
            }
            return d
        },
        adjustChild_texprimestyle: function(d) {
            if (d === 0) {
                return true
            }
            return this.Get("texprimestyle")
        },
        setTeXclass: a.mbase.setSeparateTeXclasses
    });
    a.mstyle = a.mbase.Subclass({
        type: "mstyle",
        isSpacelike: a.mbase.childrenSpacelike,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        inferRow: true,
        defaults: {
            scriptlevel: a.INHERIT,
            displaystyle: a.INHERIT,
            scriptsizemultiplier: Math.sqrt(1 / 2),
            scriptminsize: "8pt",
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            dir: a.INHERIT,
            infixlinebreakstyle: a.LINEBREAKSTYLE.BEFORE,
            decimalseparator: "."
        },
        adjustChild_scriptlevel: function(f) {
            var e = this.scriptlevel;
            if (e == null) {
                e = this.Get("scriptlevel")
            } else {
                if (String(e).match(/^ *[-+]/)) {
                    delete this.scriptlevel;
                    var d = this.Get("scriptlevel");
                    this.scriptlevel = e;
                    e = d + parseInt(e)
                }
            }
            return e
        },
        inheritFromMe: true,
        noInherit: {
            mpadded: {
                width: true,
                height: true,
                depth: true,
                lspace: true,
                voffset: true
            },
            mtable: {
                width: true,
                height: true,
                depth: true,
                align: true
            }
        },
        setTeXclass: a.mbase.setChildTeXclass
    });
    a.merror = a.mbase.Subclass({
        type: "merror",
        inferRow: true,
        linebreakContainer: true,
        texClass: a.TEXCLASS.ORD
    });
    a.mpadded = a.mbase.Subclass({
        type: "mpadded",
        inferRow: true,
        isSpacelike: a.mbase.childrenSpacelike,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            width: "",
            height: "",
            depth: "",
            lspace: 0,
            voffset: 0
        },
        setTeXclass: a.mbase.setChildTeXclass
    });
    a.mphantom = a.mbase.Subclass({
        type: "mphantom",
        texClass: a.TEXCLASS.ORD,
        inferRow: true,
        isSpacelike: a.mbase.childrenSpacelike,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        setTeXclass: a.mbase.setChildTeXclass
    });
    a.mfenced = a.mbase.Subclass({
        type: "mfenced",
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            open: "(",
            close: ")",
            separators: ","
        },
        texClass: a.TEXCLASS.OPEN,
        setTeXclass: function(g) {
            this.getPrevClass(g);
            var e = this.getValues("open", "close", "separators");
            e.open = e.open.replace(/[ \t\n\r]/g, "");
            e.close = e.close.replace(/[ \t\n\r]/g, "");
            e.separators = e.separators.replace(/[ \t\n\r]/g, "");
            if (e.open !== "") {
                this.SetData("open", a.mo(e.open).With({
                    stretchy: true,
                    texClass: a.TEXCLASS.OPEN
                }));
                g = this.data.open.setTeXclass(g)
            }
            if (e.separators !== "") {
                while (e.separators.length < this.data.length) {
                    e.separators += e.separators.charAt(e.separators.length - 1)
                }
            }
            if (this.data[0]) {
                g = this.data[0].setTeXclass(g)
            }
            for (var f = 1,
                     d = this.data.length; f < d; f++) {
                if (this.data[f]) {
                    if (e.separators !== "") {
                        this.SetData("sep" + f, a.mo(e.separators.charAt(f - 1)));
                        g = this.data["sep" + f].setTeXclass(g)
                    }
                    g = this.data[f].setTeXclass(g)
                }
            }
            if (e.close !== "") {
                this.SetData("close", a.mo(e.close).With({
                    stretchy: true,
                    texClass: a.TEXCLASS.CLOSE
                }));
                g = this.data.close.setTeXclass(g)
            }
            this.updateTeXclass(this.data.open);
            return g
        }
    });
    a.menclose = a.mbase.Subclass({
        type: "menclose",
        inferRow: true,
        linebreakContainer: true,
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            notation: a.NOTATION.LONGDIV,
            texClass: a.TEXCLASS.ORD
        },
        setTeXclass: a.mbase.setSeparateTeXclasses
    });
    a.msubsup = a.mbase.Subclass({
        type: "msubsup",
        base: 0,
        sub: 1,
        sup: 2,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            subscriptshift: "",
            superscriptshift: "",
            texClass: a.AUTO
        },
        autoDefault: function(d) {
            if (d === "texClass") {
                return (this.isEmbellished() ? this.CoreMO().Get(d) : a.TEXCLASS.ORD)
            }
            return 0
        },
        adjustChild_displaystyle: function(d) {
            if (d > 0) {
                return false
            }
            return this.Get("displaystyle")
        },
        adjustChild_scriptlevel: function(e) {
            var d = this.Get("scriptlevel");
            if (e > 0) {
                d++
            }
            return d
        },
        adjustChild_texprimestyle: function(d) {
            if (d === this.sub) {
                return true
            }
            return this.Get("texprimestyle")
        },
        setTeXclass: a.mbase.setBaseTeXclasses
    });
    a.msub = a.msubsup.Subclass({
        type: "msub"
    });
    a.msup = a.msubsup.Subclass({
        type: "msup",
        sub: 2,
        sup: 1
    });
    a.mmultiscripts = a.msubsup.Subclass({
        type: "mmultiscripts",
        adjustChild_texprimestyle: function(d) {
            if (d % 2 === 1) {
                return true
            }
            return this.Get("texprimestyle")
        }
    });
    a.mprescripts = a.mbase.Subclass({
        type: "mprescripts"
    });
    a.none = a.mbase.Subclass({
        type: "none"
    });
    a.munderover = a.mbase.Subclass({
        type: "munderover",
        base: 0,
        under: 1,
        over: 2,
        sub: 1,
        sup: 2,
        ACCENTS: ["", "accentunder", "accent"],
        linebreakContainer: true,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            accent: a.AUTO,
            accentunder: a.AUTO,
            align: a.ALIGN.CENTER,
            texClass: a.AUTO,
            subscriptshift: "",
            superscriptshift: ""
        },
        autoDefault: function(d) {
            if (d === "texClass") {
                return (this.isEmbellished() ? this.CoreMO().Get(d) : a.TEXCLASS.ORD)
            }
            if (d === "accent" && this.data[this.over]) {
                return this.data[this.over].CoreMO().Get("accent")
            }
            if (d === "accentunder" && this.data[this.under]) {
                return this.data[this.under].CoreMO().Get("accent")
            }
            return false
        },
        adjustChild_displaystyle: function(d) {
            if (d > 0) {
                return false
            }
            return this.Get("displaystyle")
        },
        adjustChild_scriptlevel: function(f) {
            var e = this.Get("scriptlevel");
            var d = (this.data[this.base] && !this.Get("displaystyle") && this.data[this.base].CoreMO().Get("movablelimits"));
            if (f == this.under && (d || !this.Get("accentunder"))) {
                e++
            }
            if (f == this.over && (d || !this.Get("accent"))) {
                e++
            }
            return e
        },
        adjustChild_texprimestyle: function(d) {
            if (d === this.base && this.data[this.over]) {
                return true
            }
            return this.Get("texprimestyle")
        },
        setTeXclass: a.mbase.setBaseTeXclasses
    });
    a.munder = a.munderover.Subclass({
        type: "munder"
    });
    a.mover = a.munderover.Subclass({
        type: "mover",
        over: 1,
        under: 2,
        sup: 1,
        sub: 2,
        ACCENTS: ["", "accent", "accentunder"]
    });
    a.mtable = a.mbase.Subclass({
        type: "mtable",
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            align: a.ALIGN.AXIS,
            rowalign: a.ALIGN.BASELINE,
            columnalign: a.ALIGN.CENTER,
            groupalign: "{left}",
            alignmentscope: true,
            columnwidth: a.WIDTH.AUTO,
            width: a.WIDTH.AUTO,
            rowspacing: "1ex",
            columnspacing: ".8em",
            rowlines: a.LINES.NONE,
            columnlines: a.LINES.NONE,
            frame: a.LINES.NONE,
            framespacing: "0.4em 0.5ex",
            equalrows: false,
            equalcolumns: false,
            displaystyle: false,
            side: a.SIDE.RIGHT,
            minlabelspacing: "0.8em",
            texClass: a.TEXCLASS.ORD,
            useHeight: 1
        },
        inheritFromMe: true,
        noInherit: {
            mover: {
                align: true
            },
            munder: {
                align: true
            },
            munderover: {
                align: true
            },
            mtable: {
                align: true,
                rowalign: true,
                columnalign: true,
                groupalign: true,
                alignmentscope: true,
                columnwidth: true,
                width: true,
                rowspacing: true,
                columnspacing: true,
                rowlines: true,
                columnlines: true,
                frame: true,
                framespacing: true,
                equalrows: true,
                equalcolumns: true,
                side: true,
                minlabelspacing: true,
                texClass: true,
                useHeight: 1
            }
        },
        linebreakContainer: true,

        Append: function() {
            for (var e = 0,
                     d = arguments.length; e < d; e++) {
                if (! ((arguments[e] instanceof a.mtr) || (arguments[e] instanceof a.mlabeledtr))) {
                    arguments[e] = a.mtd(arguments[e])
                }
            }
            this.SUPER(arguments).Append.apply(this, arguments)
        },
        setTeXclass: a.mbase.setSeparateTeXclasses
    });
    a.mtr = a.mbase.Subclass({
        type: "mtr",
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            rowalign: a.INHERIT,
            columnalign: a.INHERIT,
            groupalign: a.INHERIT
        },
        inheritFromMe: true,
        noInherit: {
            mrow: {
                rowalign: true,
                columnalign: true,
                groupalign: true
            },
            mtable: {
                rowalign: true,
                columnalign: true,
                groupalign: true
            }
        },
        linebreakContainer: true,
        Append: function() {
            for (var e = 0,
                     d = arguments.length; e < d; e++) {
                if (! (arguments[e] instanceof a.mtd)) {
                    arguments[e] = a.mtd(arguments[e])
                }
            }
            this.SUPER(arguments).Append.apply(this, arguments)
        },
        setTeXclass: a.mbase.setSeparateTeXclasses
    });
    a.mtd = a.mbase.Subclass({
        type: "mtd",
        inferRow: true,
        linebreakContainer: true,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            rowspan: 1,
            columnspan: 1,
            rowalign: a.INHERIT,
            columnalign: a.INHERIT,
            groupalign: a.INHERIT
        },
        setTeXclass: a.mbase.setSeparateTeXclasses
    });
    a.maligngroup = a.mbase.Subclass({
        type: "malign",
        isSpacelike: function() {
            return true
        },
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            groupalign: a.INHERIT
        },
        inheritFromMe: true,
        noInherit: {
            mrow: {
                groupalign: true
            },
            mtable: {
                groupalign: true
            }
        }
    });
    a.malignmark = a.mbase.Subclass({
        type: "malignmark",
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            edge: a.SIDE.LEFT
        },
        isSpacelike: function() {
            return true
        }
    });
    a.mlabeledtr = a.mtr.Subclass({
        type: "mlabeledtr"
    });
    a.maction = a.mbase.Subclass({
        type: "maction",
        defaults: {
            mathbackground: a.INHERIT,
            mathcolor: a.INHERIT,
            actiontype: a.ACTIONTYPE.TOGGLE,
            selection: 1
        },
        selected: function() {
            return this.data[this.Get("selection") - 1] || a.NULL
        },
        isEmbellished: function() {
            return this.selected().isEmbellished()
        },
        isSpacelike: function() {
            return this.selected().isSpacelike()
        },
        Core: function() {
            return this.selected().Core()
        },
        CoreMO: function() {
            return this.selected().CoreMO()
        },
        setTeXclass: function(d) {
            if (this.Get("actiontype") === a.ACTIONTYPE.TOOLTIP && this.data[1]) {
                this.data[1].setTeXclass()
            }
            return this.selected().setTeXclass(d)
        }
    });
    a.semantics = a.mbase.Subclass({
        type: "semantics",
        notParent: true,
        isEmbellished: a.mbase.childEmbellished,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        defaults: {
            definitionURL: null,
            encoding: null
        },
        setTeXclass: a.mbase.setChildTeXclass,
        getAnnotation: function(f) {
            var k = MathJax.Hub.config.MathMenu.semanticsAnnotations[f];
            if (k) {
                for (var g = 0,
                         d = this.data.length; g < d; g++) {
                    var h = this.data[g].Get("encoding");
                    if (h) {
                        for (var e = 0,
                                 l = k.length; e < l; e++) {
                            if (k[e] === h) {
                                return this.data[g]
                            }
                        }
                    }
                }
            }
            return null
        }
    });
    a.annotation = a.mbase.Subclass({
        type: "annotation",
        isToken: true,
        linebreakContainer: true,
        defaults: {
            definitionURL: null,
            encoding: null,
            cd: "mathmlkeys",
            name: "",
            src: null
        }
    });
    a["annotation-xml"] = a.mbase.Subclass({
        type: "annotation-xml",
        linebreakContainer: true,
        defaults: {
            definitionURL: null,
            encoding: null,
            cd: "mathmlkeys",
            name: "",
            src: null
        }
    });
    a.math = a.mstyle.Subclass({
        type: "math",
        defaults: {
            mathvariant: a.VARIANT.NORMAL,
            mathsize: a.SIZE.NORMAL,
            mathcolor: "",
            mathbackground: a.COLOR.TRANSPARENT,
            dir: "ltr",
            scriptlevel: 0,
            displaystyle: a.AUTO,
            display: "inline",
            maxwidth: "",
            overflow: a.OVERFLOW.LINEBREAK,
            altimg: "",
            "altimg-width": "",
            "altimg-height": "",
            "altimg-valign": "",
            alttext: "",
            cdgroup: "",
            scriptsizemultiplier: Math.sqrt(1 / 2),
            scriptminsize: "8px",
            infixlinebreakstyle: a.LINEBREAKSTYLE.BEFORE,
            lineleading: "1ex",
            indentshift: "auto",
            indentalign: a.INDENTALIGN.AUTO,
            indentalignfirst: a.INDENTALIGN.INDENTALIGN,
            indentshiftfirst: a.INDENTSHIFT.INDENTSHIFT,
            indentalignlast: a.INDENTALIGN.INDENTALIGN,
            indentshiftlast: a.INDENTSHIFT.INDENTSHIFT,
            decimalseparator: ".",
            texprimestyle: false
        },
        autoDefault: function(d) {
            if (d === "displaystyle") {
                return this.Get("display") === "block"
            }
            return ""
        },
        linebreakContainer: true,
        setTeXclass: a.mbase.setChildTeXclass,
        getAnnotation: function(d) {
            if (this.data.length != 1) {
                return null
            }
            return this.data[0].getAnnotation(d)
        }
    });
    a.chars = a.mbase.Subclass({
        type: "chars",
        Append: function() {
            this.data.push.apply(this.data, arguments)
        },
        value: function() {
            return this.data.join("")
        },
        toString: function() {
            return this.data.join("")
        }
    });
    a.entity = a.mbase.Subclass({
        type: "entity",
        Append: function() {
            this.data.push.apply(this.data, arguments)
        },
        value: function() {
            if (this.data[0].substr(0, 2) === "#x") {
                return parseInt(this.data[0].substr(2), 16)
            } else {
                if (this.data[0].substr(0, 1) === "#") {
                    return parseInt(this.data[0].substr(1))
                } else {
                    return 0
                }
            }
        },
        toString: function() {
            var d = this.value();
            if (d <= 65535) {
                return String.fromCharCode(d)
            }
            d -= 65536;
            return String.fromCharCode((d >> 10) + 55296) + String.fromCharCode((d & 1023) + 56320)
        }
    });
    a.xml = a.mbase.Subclass({
        type: "xml",
        Init: function() {
            this.div = document.createElement("div");
            return this.SUPER(arguments).Init.apply(this, arguments)
        },
        Append: function() {
            for (var e = 0,
                     d = arguments.length; e < d; e++) {
                var f = this.Import(arguments[e]);
                this.data.push(f);
                this.div.appendChild(f)
            }
        },
        Import: function(h) {
            if (document.importNode) {
                return document.importNode(h, true)
            }
            var e, f, d;
            if (h.nodeType === 1) {
                e = document.createElement(h.nodeName);
                for (f = 0, d = h.attributes.length; f < d; f++) {
                    var g = h.attributes[f];
                    if (g.specified && g.nodeValue != null && g.nodeValue != "") {
                        e.setAttribute(g.nodeName, g.nodeValue)
                    }
                    if (g.nodeName === "style") {
                        e.style.cssText = g.nodeValue
                    }
                }
                if (h.className) {
                    e.className = h.className
                }
            } else {
                if (h.nodeType === 3 || h.nodeType === 4) {
                    e = document.createTextNode(h.nodeValue)
                } else {
                    if (h.nodeType === 8) {
                        e = document.createComment(h.nodeValue)
                    } else {
                        return document.createTextNode("")
                    }
                }
            }
            for (f = 0, d = h.childNodes.length; f < d; f++) {
                e.appendChild(this.Import(h.childNodes[f]))
            }
            return e
        },
        value: function() {
            return this.div
        },
        toString: function() {
            return this.div.innerHTML
        }
    });
    a.TeXAtom = a.mbase.Subclass({
        type: "texatom",
        inferRow: true,
        notParent: true,
        texClass: a.TEXCLASS.ORD,
        Core: a.mbase.childCore,
        CoreMO: a.mbase.childCoreMO,
        isEmbellished: a.mbase.childEmbellished,
        setTeXclass: function(d) {
            this.data[0].setTeXclass();
            return this.adjustTeXclass(d)
        },
        adjustTeXclass: a.mo.prototype.adjustTeXclass
    });
    a.NULL = a.mbase().With({
        type: "null"
    });
    var b = a.TEXCLASS;
    var c = {
        ORD: [0, 0, b.ORD],
        ORD11: [1, 1, b.ORD],
        ORD21: [2, 1, b.ORD],
        ORD02: [0, 2, b.ORD],
        ORD55: [5, 5, b.ORD],
        OP: [1, 2, b.OP, {
            largeop: true,
            movablelimits: true,
            symmetric: true
        }],
        OPFIXED: [1, 2, b.OP, {
            largeop: true,
            movablelimits: true
        }],
        INTEGRAL: [0, 1, b.OP, {
            largeop: true,
            symmetric: true
        }],
        INTEGRAL2: [1, 2, b.OP, {
            largeop: true,
            symmetric: true
        }],
        BIN3: [3, 3, b.BIN],
        BIN4: [4, 4, b.BIN],
        BIN01: [0, 1, b.BIN],
        BIN5: [5, 5, b.BIN],
        TALLBIN: [4, 4, b.BIN, {
            stretchy: true
        }],
        BINOP: [4, 4, b.BIN, {
            largeop: true,
            movablelimits: true
        }],
        REL: [5, 5, b.REL],
        REL1: [1, 1, b.REL, {
            stretchy: true
        }],
        REL4: [4, 4, b.REL],
        RELSTRETCH: [5, 5, b.REL, {
            stretchy: true
        }],
        RELACCENT: [5, 5, b.REL, {
            accent: true
        }],
        WIDEREL: [5, 5, b.REL, {
            accent: true,
            stretchy: true
        }],
        OPEN: [0, 0, b.OPEN, {
            fence: true,
            stretchy: true,
            symmetric: true
        }],
        CLOSE: [0, 0, b.CLOSE, {
            fence: true,
            stretchy: true,
            symmetric: true
        }],
        INNER: [0, 0, b.INNER],
        PUNCT: [0, 3, b.PUNCT],
        ACCENT: [0, 0, b.ORD, {
            accent: true
        }],
        WIDEACCENT: [0, 0, b.ORD, {
            accent: true,
            stretchy: true
        }]
    };
    a.mo.Augment({
            SPACE: ["0em", "0.1111em", "0.1667em", "0.2222em", "0.2667em", "0.3333em"],
            RANGES: [[32, 127, b.REL, "BasicLatin"], [160, 255, b.ORD, "Latin1Supplement"], [256, 383, b.ORD], [384, 591, b.ORD], [688, 767, b.ORD, "SpacingModLetters"], [768, 879, b.ORD, "CombDiacritMarks"], [880, 1023, b.ORD, "GreekAndCoptic"], [7680, 7935, b.ORD], [8192, 8303, b.PUNCT, "GeneralPunctuation"], [8304, 8351, b.ORD], [8352, 8399, b.ORD], [8400, 8447, b.ORD, "CombDiactForSymbols"], [8448, 8527, b.ORD, "LetterlikeSymbols"], [8528, 8591, b.ORD], [8592, 8703, b.REL, "Arrows"], [8704, 8959, b.BIN, "MathOperators"], [8960, 9215, b.ORD, "MiscTechnical"], [9312, 9471, b.ORD], [9472, 9631, b.ORD], [9632, 9727, b.ORD, "GeometricShapes"], [9984, 10175, b.ORD, "Dingbats"], [10176, 10223, b.ORD, "MiscMathSymbolsA"], [10224, 10239, b.REL, "SupplementalArrowsA"], [10496, 10623, b.REL, "SupplementalArrowsB"], [10624, 10751, b.ORD, "MiscMathSymbolsB"], [10752, 11007, b.BIN, "SuppMathOperators"], [11008, 11263, b.ORD, "MiscSymbolsAndArrows"], [119808, 120831, b.ORD]],
            OPTABLE: {
                prefix: {
                    "\u2200": c.ORD21,
                    "\u2202": c.ORD21,
                    "\u2203": c.ORD21,
                    "\u2207": c.ORD21,
                    "\u220F": c.OP,
                    "\u2210": c.OP,
                    "\u2211": c.OP,
                    "\u2212": c.BIN01,
                    "\u2213": c.BIN01,
                    "\u221A": [1, 1, b.ORD, {
                        stretchy: true
                    }],
                    "\u2220": c.ORD,
                    "\u222B": c.INTEGRAL,
                    "\u222E": c.INTEGRAL,
                    "\u22C0": c.OP,
                    "\u22C1": c.OP,
                    "\u22C2": c.OP,
                    "\u22C3": c.OP,
                    "\u2308": c.OPEN,
                    "\u230A": c.OPEN,
                    "\u27E8": c.OPEN,
                    "\u27EE": c.OPEN,
                    "\u2A00": c.OP,
                    "\u2A01": c.OP,
                    "\u2A02": c.OP,
                    "\u2A04": c.OP,
                    "\u2A06": c.OP,
                    "\u00AC": c.ORD21,
                    "\u00B1": c.BIN01,
                    "(": c.OPEN,
                    "+": c.BIN01,
                    "-": c.BIN01,
                    "[": c.OPEN,
                    "{": c.OPEN,
                    "|": c.OPEN
                },
                postfix: {
                    "!": [1, 0, b.CLOSE],
                    "&": c.ORD,
                    "\u2032": c.ORD02,
                    "\u203E": c.WIDEACCENT,
                    "\u2309": c.CLOSE,
                    "\u230B": c.CLOSE,
                    "\u23DE": c.WIDEACCENT,
                    "\u23DF": c.WIDEACCENT,
                    "\u266D": c.ORD02,
                    "\u266E": c.ORD02,
                    "\u266F": c.ORD02,
                    "\u27E9": c.CLOSE,
                    "\u27EF": c.CLOSE,
                    "\u02C6": c.WIDEACCENT,
                    "\u02C7": c.WIDEACCENT,
                    "\u02C9": c.WIDEACCENT,
                    "\u02CA": c.ACCENT,
                    "\u02CB": c.ACCENT,
                    "\u02D8": c.ACCENT,
                    "\u02D9": c.ACCENT,
                    "\u02DC": c.WIDEACCENT,
                    "\u0302": c.WIDEACCENT,
                    "\u00A8": c.ACCENT,
                    "\u00AF": c.WIDEACCENT,
                    ")": c.CLOSE,
                    "]": c.CLOSE,
                    "^": c.WIDEACCENT,
                    _: c.WIDEACCENT,
                    "`": c.ACCENT,
                    "|": c.CLOSE,
                    "}": c.CLOSE,
                    "~": c.WIDEACCENT
                },
                infix: {
                    "": c.ORD,
                    "%": [3, 3, b.ORD],
                    "\u2022": c.BIN4,
                    "\u2026": c.INNER,
                    "\u2044": c.TALLBIN,
                    "\u2061": c.ORD,
                    "\u2062": c.ORD,
                    "\u2063": [0, 0, b.ORD, {
                        linebreakstyle: "after",
                        separator: true
                    }],
                    "\u2064": c.ORD,
                    "\u2190": c.WIDEREL,
                    "\u2191": c.RELSTRETCH,
                    "\u2192": c.WIDEREL,
                    "\u2193": c.RELSTRETCH,
                    "\u2194": c.WIDEREL,
                    "\u2195": c.RELSTRETCH,
                    "\u2196": c.RELSTRETCH,
                    "\u2197": c.RELSTRETCH,
                    "\u2198": c.RELSTRETCH,
                    "\u2199": c.RELSTRETCH,
                    "\u21A6": c.WIDEREL,
                    "\u21A9": c.WIDEREL,
                    "\u21AA": c.WIDEREL,
                    "\u21BC": c.WIDEREL,
                    "\u21BD": c.WIDEREL,
                    "\u21C0": c.WIDEREL,
                    "\u21C1": c.WIDEREL,
                    "\u21CC": c.WIDEREL,
                    "\u21D0": c.WIDEREL,
                    "\u21D1": c.RELSTRETCH,
                    "\u21D2": c.WIDEREL,
                    "\u21D3": c.RELSTRETCH,
                    "\u21D4": c.WIDEREL,
                    "\u21D5": c.RELSTRETCH,
                    "\u2208": c.REL,
                    "\u2209": c.REL,
                    "\u220B": c.REL,
                    "\u2212": c.BIN4,
                    "\u2213": c.BIN4,
                    "\u2215": c.TALLBIN,
                    "\u2216": c.BIN4,
                    "\u2217": c.BIN4,
                    "\u2218": c.BIN4,
                    "\u2219": c.BIN4,
                    "\u221D": c.REL,
                    "\u2223": c.REL,
                    "\u2225": c.REL,
                    "\u2227": c.BIN4,
                    "\u2228": c.BIN4,
                    "\u2229": c.BIN4,
                    "\u222A": c.BIN4,
                    "\u223C": c.REL,
                    "\u2240": c.BIN4,
                    "\u2243": c.REL,
                    "\u2245": c.REL,
                    "\u2248": c.REL,
                    "\u224D": c.REL,
                    "\u2250": c.REL,
                    "\u2260": c.REL,
                    "\u2261": c.REL,
                    "\u2264": c.REL,
                    "\u2265": c.REL,
                    "\u226A": c.REL,
                    "\u226B": c.REL,
                    "\u227A": c.REL,
                    "\u227B": c.REL,
                    "\u2282": c.REL,
                    "\u2283": c.REL,
                    "\u2286": c.REL,
                    "\u2287": c.REL,
                    "\u228E": c.BIN4,
                    "\u2291": c.REL,
                    "\u2292": c.REL,
                    "\u2293": c.BIN4,
                    "\u2294": c.BIN4,
                    "\u2295": c.BIN4,
                    "\u2296": c.BIN4,
                    "\u2297": c.BIN4,
                    "\u2298": c.BIN4,
                    "\u2299": c.BIN4,
                    "\u22A2": c.REL,
                    "\u22A3": c.REL,
                    "\u22A4": c.ORD55,
                    "\u22A5": c.REL,
                    "\u22A8": c.REL,
                    "\u22C4": c.BIN4,
                    "\u22C5": c.BIN4,
                    "\u22C6": c.BIN4,
                    "\u22C8": c.REL,
                    "\u22EE": c.ORD55,
                    "\u22EF": c.INNER,
                    "\u22F1": [5, 5, b.INNER],
                    "\u25B3": c.BIN4,
                    "\u25B5": c.BIN4,
                    "\u25B9": c.BIN4,
                    "\u25BD": c.BIN4,
                    "\u25BF": c.BIN4,
                    "\u25C3": c.BIN4,
                    "\u2758": c.REL,
                    "\u27F5": c.WIDEREL,
                    "\u27F6": c.WIDEREL,
                    "\u27F7": c.WIDEREL,
                    "\u27F8": c.WIDEREL,
                    "\u27F9": c.WIDEREL,
                    "\u27FA": c.WIDEREL,
                    "\u27FC": c.WIDEREL,
                    "\u2A2F": c.BIN4,
                    "\u2A3F": c.BIN4,
                    "\u2AAF": c.REL,
                    "\u2AB0": c.REL,
                    "\u00B1": c.BIN4,
                    "\u00B7": c.BIN4,
                    "\u00D7": c.BIN4,
                    "\u00F7": c.BIN4,

                    "*": c.BIN3,
                    "+": c.BIN4,
                    ",": [0, 3, b.PUNCT, {
                        linebreakstyle: "after",
                        separator: true
                    }],
                    "-": c.BIN4,
                    ".": [3, 3, b.ORD],
                    "/": c.ORD11,
                    ":": [1, 2, b.REL],
                    ";": [0, 3, b.PUNCT, {
                        linebreakstyle: "after",
                        separator: true
                    }],
                    "<": c.REL,
                    "=": c.REL,
                    ">": c.REL,
                    "?": [1, 1, b.CLOSE],
                    "\\": c.ORD,
                    "^": c.ORD11,
                    _: c.ORD11,
                    "|": [2, 2, b.ORD, {
                        fence: true,
                        stretchy: true,
                        symmetric: true
                    }],
                    "#": c.ORD,
                    "$": c.ORD,
                    "\u002E": [0, 3, b.PUNCT, {
                        separator: true
                    }],
                    "\u02B9": c.ORD,
                    "\u0300": c.ACCENT,
                    "\u0301": c.ACCENT,
                    "\u0303": c.WIDEACCENT,
                    "\u0304": c.ACCENT,
                    "\u0306": c.ACCENT,
                    "\u0307": c.ACCENT,
                    "\u0308": c.ACCENT,
                    "\u030C": c.ACCENT,
                    "\u0332": c.WIDEACCENT,
                    "\u0338": c.REL4,
                    "\u2015": [0, 0, b.ORD, {
                        stretchy: true
                    }],
                    "\u2017": [0, 0, b.ORD, {
                        stretchy: true
                    }],
                    "\u2020": c.BIN3,
                    "\u2021": c.BIN3,
                    "\u20D7": c.ACCENT,
                    "\u2111": c.ORD,
                    "\u2113": c.ORD,
                    "\u2118": c.ORD,
                    "\u211C": c.ORD,
                    "\u2205": c.ORD,
                    "\u221E": c.ORD,
                    "\u2305": c.BIN3,
                    "\u2306": c.BIN3,
                    "\u2322": c.REL4,
                    "\u2323": c.REL4,
                    "\u2329": c.OPEN,
                    "\u232A": c.CLOSE,
                    "\u23AA": c.ORD,
                    "\u23AF": [0, 0, b.ORD, {
                        stretchy: true
                    }],
                    "\u23B0": c.OPEN,
                    "\u23B1": c.CLOSE,
                    "\u2500": c.ORD,
                    "\u25EF": c.BIN3,
                    "\u2660": c.ORD,
                    "\u2661": c.ORD,
                    "\u2662": c.ORD,
                    "\u2663": c.ORD,
                    "\u3008": c.OPEN,
                    "\u3009": c.CLOSE,
                    "\uFE37": c.WIDEACCENT,
                    "\uFE38": c.WIDEACCENT
                }
            }
        },
        {
            OPTYPES: c
        });
    a.mo.prototype.OPTABLE.infix["^"] = c.WIDEREL;
    a.mo.prototype.OPTABLE.infix._ = c.WIDEREL
})(MathJax.ElementJax.mml);
MathJax.ElementJax.mml.loadComplete("jax.js");
MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js",
    function() {
        var b = "2.3";
        var a = MathJax.ElementJax.mml;
        SETTINGS = MathJax.Hub.config.menuSettings;
        a.mbase.Augment({
            toMathML: function(k) {
                var g = (this.inferred && this.parent.inferRow);
                if (k == null) {
                    k = ""
                }
                var e = this.type,
                    d = this.toMathMLattributes();
                if (e === "mspace") {
                    return k + "<" + e + d + " />"
                }
                var j = [];
                var h = (this.isToken ? "": k + (g ? "": "  "));
                for (var f = 0,
                         c = this.data.length; f < c; f++) {
                    if (this.data[f]) {
                        j.push(this.data[f].toMathML(h))
                    } else {
                        if (!this.isToken) {
                            j.push(h + "<mrow />")
                        }
                    }
                }
                if (this.isToken) {
                    return k + "<" + e + d + ">" + j.join("") + "</" + e + ">"
                }
                if (g) {
                    return j.join("\n")
                }
                if (j.length === 0 || (j.length === 1 && j[0] === "")) {
                    return k + "<" + e + d + " />"
                }
                return k + "<" + e + d + ">\n" + j.join("\n") + "\n" + k + "</" + e + ">"
            },
            toMathMLattributes: function() {
                var j = [],
                    g = this.defaults;
                var c = (this.attrNames || a.copyAttributeNames),
                    l = a.skipAttributes;
                if (this.type === "math" && (!this.attr || !this.attr.xmlns)) {
                    j.push('xmlns="http://www.w3.org/1998/Math/MathML"')
                }
                if (!this.attrNames) {
                    if (this.type === "mstyle") {
                        g = a.math.prototype.defaults
                    }
                    for (var d in g) {
                        if (!l[d] && g.hasOwnProperty(d)) {
                            var e = (d === "open" || d === "close");
                            if (this[d] != null && (e || this[d] !== g[d])) {
                                var k = this[d];
                                delete this[d];
                                if (e || this.Get(d) !== k) {
                                    j.push(d + '="' + this.toMathMLattribute(k) + '"')
                                }
                                this[d] = k
                            }
                        }
                    }
                }
                for (var h = 0,
                         f = c.length; h < f; h++) {
                    if (c[h] === "class") {
                        continue
                    }
                    k = (this.attr || {})[c[h]];
                    if (k == null) {
                        k = this[c[h]]
                    }
                    if (k != null) {
                        j.push(c[h] + '="' + this.toMathMLquote(k) + '"')
                    }
                }
                this.toMathMLclass(j);
                if (j.length) {
                    return " " + j.join(" ")
                } else {
                    return ""
                }
            },
            toMathMLclass: function(c) {
                var e = [];
                if (this["class"]) {
                    e.push(this["class"])
                }
                if (this.isa(a.TeXAtom) && SETTINGS.texHints) {
                    var d = ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"][this.texClass];
                    if (d) {
                        e.push("MJX-TeXAtom-" + d)
                    }
                }
                if (this.mathvariant && this.toMathMLvariants[this.mathvariant]) {
                    e.push("MJX" + this.mathvariant)
                }
                if (this.variantForm) {
                    e.push("MJX-variant")
                }
                if (e.length) {
                    c.unshift('class="' + e.join(" ") + '"')
                }
            },
            toMathMLattribute: function(c) {
                if (typeof(c) === "string" && c.replace(/ /g, "").match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/)) {
                    return RegExp.$2 + ((1 / 18) * RegExp.$3).toFixed(3).replace(/\.?0+$/, "") + "em"
                } else {
                    if (this.toMathMLvariants[c]) {
                        return this.toMathMLvariants[c]
                    }
                }
                return this.toMathMLquote(c)
            },
            toMathMLvariants: {
                "-tex-caligraphic": a.VARIANT.SCRIPT,
                "-tex-caligraphic-bold": a.VARIANT.BOLDSCRIPT,
                "-tex-oldstyle": a.VARIANT.NORMAL,
                "-tex-oldstyle-bold": a.VARIANT.BOLD,
                "-tex-mathit": a.VARIANT.ITALIC
            },
            toMathMLquote: function(f) {
                f = String(f).split("");
                for (var g = 0,
                         d = f.length; g < d; g++) {
                    var k = f[g].charCodeAt(0);
                    if (k <= 55295 || 57344 <= k) {
                        if (k < 32 || k > 126) {
                            f[g] = "&#x" + k.toString(16).toUpperCase() + ";"
                        } else {
                            var j = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;"
                            } [f[g]];
                            if (j) {
                                f[g] = j
                            }
                        }
                    } else {
                        if (g + 1 < d) {
                            var h = f[g + 1].charCodeAt(0);
                            var e = (((k - 55296) << 10) + (h - 56320) + 65536);
                            f[g] = "&#x" + e.toString(16).toUpperCase() + ";";
                            f[g + 1] = "";
                            g++
                        } else {
                            f[g] = ""
                        }
                    }
                }
                return f.join("")
            }
        });
        a.msubsup.Augment({
            toMathML: function(h) {
                var e = this.type;
                if (this.data[this.sup] == null) {
                    e = "msub"
                }
                if (this.data[this.sub] == null) {
                    e = "msup"
                }
                var d = this.toMathMLattributes();
                delete this.data[0].inferred;
                var g = [];
                for (var f = 0,
                         c = this.data.length; f < c; f++) {
                    if (this.data[f]) {
                        g.push(this.data[f].toMathML(h + "  "))
                    }
                }
                return h + "<" + e + d + ">\n" + g.join("\n") + "\n" + h + "</" + e + ">"
            }
        });
        a.munderover.Augment({
            toMathML: function(h) {
                var e = this.type;
                if (this.data[this.under] == null) {
                    e = "mover"
                }
                if (this.data[this.over] == null) {
                    e = "munder"
                }
                var d = this.toMathMLattributes();
                delete this.data[0].inferred;
                var g = [];
                for (var f = 0,
                         c = this.data.length; f < c; f++) {
                    if (this.data[f]) {
                        g.push(this.data[f].toMathML(h + "  "))
                    }
                }
                return h + "<" + e + d + ">\n" + g.join("\n") + "\n" + h + "</" + e + ">"
            }
        });
        a.TeXAtom.Augment({
            toMathML: function(d) {
                var c = this.toMathMLattributes();
                if (!c && this.data[0].data.length === 1) {
                    return d.substr(2) + this.data[0].toMathML(d)
                }
                return d + "<mrow" + c + ">\n" + this.data[0].toMathML(d + "  ") + "\n" + d + "</mrow>"
            }
        });
        a.chars.Augment({
            toMathML: function(c) {
                return (c || "") + this.toMathMLquote(this.toString())
            }
        });
        a.entity.Augment({
            toMathML: function(c) {
                return (c || "") + "&" + this.data[0] + ";<!-- " + this.toString() + " -->"
            }
        });
        a.xml.Augment({
            toMathML: function(c) {
                return (c || "") + this.toString()
            }
        });
        MathJax.Hub.Register.StartupHook("TeX mathchoice Ready",
            function() {
                a.TeXmathchoice.Augment({
                    toMathML: function(c) {
                        return this.Core().toMathML(c)
                    }
                })
            });
        MathJax.Hub.Startup.signal.Post("toMathML Ready")
    });
MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js"); (function(b, e) {
    var d = "2.3";
    var a = b.CombineConfig("TeX.noErrors", {
        disabled: false,
        multiLine: true,
        inlineDelimiters: ["", ""],
        style: {
            "font-size": "90%",
            "text-align": "left",
            color: "black",
            padding: "1px 3px",
            border: "1px solid"
        }
    });
    var c = "\u00A0";
    MathJax.Extension["TeX/noErrors"] = {
        version: d,
        config: a
    };
    b.Register.StartupHook("TeX Jax Ready",
        function() {
            var f = MathJax.InputJax.TeX.formatError;
            MathJax.InputJax.TeX.Augment({
                formatError: function(j, i, k, g) {
                    if (a.disabled) {
                        return f.apply(this, arguments)
                    }
                    var h = j.message.replace(/\n.*/, "");
                    b.signal.Post(["TeX Jax - parse error", h, i, k, g]);
                    var m = a.inlineDelimiters;
                    var l = (k || a.multiLine);
                    if (!k) {
                        i = m[0] + i + m[1]
                    }
                    if (l) {
                        i = i.replace(/ /g, c)
                    } else {
                        i = i.replace(/\n/g, " ")
                    }
                    return MathJax.ElementJax.mml.merror(i).With({
                        isError: true,
                        multiLine: l
                    })
                }
            })
        });
    b.Register.StartupHook("HTML-CSS Jax Config",
        function() {
            b.Config({
                "HTML-CSS": {
                    styles: {
                        ".MathJax .noError": b.Insert({
                                "vertical-align": (b.Browser.isMSIE && a.multiLine ? "-2px": "")
                            },
                            a.style)
                    }
                }
            })
        });
    b.Register.StartupHook("HTML-CSS Jax Ready",
        function() {
            var g = MathJax.ElementJax.mml;
            var h = MathJax.OutputJax["HTML-CSS"];
            var f = g.math.prototype.toHTML,
                i = g.merror.prototype.toHTML;
            g.math.Augment({
                toHTML: function(j, k) {
                    var l = this.data[0];
                    if (l && l.data[0] && l.data[0].isError) {
                        j.style.fontSize = "";
                        j = this.HTMLcreateSpan(j);
                        j.bbox = l.data[0].toHTML(j).bbox
                    } else {
                        j = f.call(this, j, k)
                    }
                    return j
                }
            });
            g.merror.Augment({
                toHTML: function(p) {
                    if (!this.isError) {
                        return i.call(this, p)
                    }
                    p = this.HTMLcreateSpan(p);
                    p.className = "noError";
                    if (this.multiLine) {
                        p.style.display = "inline-block"
                    }
                    var r = this.data[0].data[0].data.join("").split(/\n/);
                    for (var o = 0,
                             l = r.length; o < l; o++) {
                        h.addText(p, r[o]);
                        if (o !== l - 1) {
                            h.addElement(p, "br", {
                                isMathJax: true
                            })
                        }
                    }
                    var q = h.getHD(p.parentNode),
                        k = h.getW(p.parentNode);
                    if (l > 1) {
                        var n = (q.h + q.d) / 2,
                            j = h.TeX.x_height / 2;
                        p.parentNode.style.verticalAlign = h.Em(q.d + (j - n));
                        q.h = j + n;
                        q.d = n - j
                    }
                    p.bbox = {
                        h: q.h,
                        d: q.d,
                        w: k,
                        lw: 0,
                        rw: k
                    };
                    return p
                }
            })
        });
    b.Register.StartupHook("SVG Jax Config",
        function() {
            b.Config({
                SVG: {
                    styles: {
                        ".MathJax_SVG .noError": b.Insert({
                                "vertical-align": (b.Browser.isMSIE && a.multiLine ? "-2px": "")
                            },
                            a.style)
                    }
                }
            })
        });
    b.Register.StartupHook("SVG Jax Ready",
        function() {
            var g = MathJax.ElementJax.mml;
            var f = g.math.prototype.toSVG,
                h = g.merror.prototype.toSVG;
            g.math.Augment({
                toSVG: function(i, j) {
                    var k = this.data[0];
                    if (k && k.data[0] && k.data[0].isError) {
                        i = k.data[0].toSVG(i)
                    } else {
                        i = f.call(this, i, j)
                    }
                    return i
                }
            });
            g.merror.Augment({
                toSVG: function(n) {
                    if (!this.isError || this.Parent().type !== "math") {
                        return h.call(this, n)
                    }
                    n = e.addElement(n, "span", {
                        className: "noError",
                        isMathJax: true
                    });
                    if (this.multiLine) {
                        n.style.display = "inline-block"
                    }
                    var o = this.data[0].data[0].data.join("").split(/\n/);
                    for (var l = 0,
                             j = o.length; l < j; l++) {
                        e.addText(n, o[l]);
                        if (l !== j - 1) {
                            e.addElement(n, "br", {
                                isMathJax: true
                            })
                        }
                    }
                    if (j > 1) {
                        var k = n.offsetHeight / 2;
                        n.style.verticalAlign = ( - k + (k / j)) + "px"
                    }
                    return n
                }
            })
        });
    b.Register.StartupHook("NativeMML Jax Ready",
        function() {
            var h = MathJax.ElementJax.mml;
            var g = MathJax.Extension["TeX/noErrors"].config;
            var f = h.math.prototype.toNativeMML,
                i = h.merror.prototype.toNativeMML;
            h.math.Augment({
                toNativeMML: function(j) {
                    var k = this.data[0];
                    if (k && k.data[0] && k.data[0].isError) {
                        j = k.data[0].toNativeMML(j)
                    } else {
                        j = f.call(this, j)
                    }
                    return j
                }
            });
            h.merror.Augment({
                toNativeMML: function(n) {
                    if (!this.isError) {
                        return i.call(this, n)
                    }
                    n = n.appendChild(document.createElement("span"));
                    var o = this.data[0].data[0].data.join("").split(/\n/);
                    for (var l = 0,
                             k = o.length; l < k; l++) {
                        n.appendChild(document.createTextNode(o[l]));
                        if (l !== k - 1) {
                            n.appendChild(document.createElement("br"))
                        }
                    }
                    if (this.multiLine) {
                        n.style.display = "inline-block";
                        if (k > 1) {
                            n.style.verticalAlign = "middle"
                        }
                    }
                    for (var p in g.style) {
                        if (g.style.hasOwnProperty(p)) {
                            var j = p.replace(/-./g,
                                function(m) {
                                    return m.charAt(1).toUpperCase()
                                });
                            n.style[j] = g.style[p]
                        }
                    }
                    return n
                }
            })
        });
    b.Startup.signal.Post("TeX noErrors Ready")
})(MathJax.Hub, MathJax.HTML);
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");
MathJax.Extension["TeX/noUndefined"] = {
    version: "2.3",
    config: MathJax.Hub.CombineConfig("TeX.noUndefined", {
        disabled: false,
        attributes: {
            mathcolor: "red"
        }
    })
};
MathJax.Hub.Register.StartupHook("TeX Jax Ready",
    function() {
        var b = MathJax.Extension["TeX/noUndefined"].config;
        var a = MathJax.ElementJax.mml;
        var c = MathJax.InputJax.TeX.Parse.prototype.csUndefined;
        MathJax.InputJax.TeX.Parse.Augment({
            csUndefined: function(d) {
                if (b.disabled) {
                    return c.apply(this, arguments)
                }
                MathJax.Hub.signal.Post(["TeX Jax - undefined control sequence", d]);
                this.Push(a.mtext(d).With(b.attributes))
            }
        });
        MathJax.Hub.Startup.signal.Post("TeX noUndefined Ready")
    });
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js"); (function(d, c, i) {
    var h, g = "\u00A0";
    var j = function(l) {
        return MathJax.Localization._.apply(MathJax.Localization, [["TeX", l]].concat([].slice.call(arguments, 1)))
    };
    var e = MathJax.Object.Subclass({
        Init: function(m, l) {
            this.global = {
                isInner: l
            };
            this.data = [b.start(this.global)];
            if (m) {
                this.data[0].env = m
            }
            this.env = this.data[0].env
        },
        Push: function() {
            var n, l, o, p;
            for (n = 0, l = arguments.length; n < l; n++) {
                o = arguments[n];
                if (o instanceof h.mbase) {
                    o = b.mml(o)
                }
                o.global = this.global;
                p = (this.data.length ? this.Top().checkItem(o) : true);
                if (p instanceof Array) {
                    this.Pop();
                    this.Push.apply(this, p)
                } else {
                    if (p instanceof b) {
                        this.Pop();
                        this.Push(p)
                    } else {
                        if (p) {
                            this.data.push(o);
                            if (o.env) {
                                for (var q in this.env) {
                                    if (this.env.hasOwnProperty(q)) {
                                        o.env[q] = this.env[q]
                                    }
                                }
                                this.env = o.env
                            } else {
                                o.env = this.env
                            }
                        }
                    }
                }
            }
        },
        Pop: function() {
            var l = this.data.pop();
            if (!l.isOpen) {
                delete l.env
            }
            this.env = (this.data.length ? this.Top().env: {});
            return l
        },
        Top: function(l) {
            if (l == null) {
                l = 1
            }
            if (this.data.length < l) {
                return null
            }
            return this.data[this.data.length - l]
        },
        Prev: function(l) {
            var m = this.Top();
            if (l) {
                return m.data[m.data.length - 1]
            } else {
                return m.Pop()
            }
        },
        toString: function() {
            return "stack[\n  " + this.data.join("\n  ") + "\n]"
        }
    });
    var b = e.Item = MathJax.Object.Subclass({
        type: "base",
        endError: ["ExtraOpenMissingClose", "Extra open brace or missing close brace"],
        closeError: ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"],
        rightError: ["MissingLeftExtraRight", "Missing \\left or extra \\right"],
        Init: function() {
            if (this.isOpen) {
                this.env = {}
            }
            this.data = [];
            this.Push.apply(this, arguments)
        },
        Push: function() {
            this.data.push.apply(this.data, arguments)
        },
        Pop: function() {
            return this.data.pop()
        },
        mmlData: function(l, m) {
            if (l == null) {
                l = true
            }
            if (this.data.length === 1 && !m) {
                return this.data[0]
            }
            return h.mrow.apply(h, this.data).With((l ? {
                inferred: true
            }: {}))
        },
        checkItem: function(l) {
            if (l.type === "over" && this.isOpen) {
                l.num = this.mmlData(false);
                this.data = []
            }
            if (l.type === "cell" && this.isOpen) {
                if (l.linebreak) {
                    return false
                }
                d.Error(["Misplaced", "Misplaced %1", l.name])
            }
            if (l.isClose && this[l.type + "Error"]) {
                d.Error(this[l.type + "Error"])

            }
            if (!l.isNotStack) {
                return true
            }
            this.Push(l.data[0]);
            return false
        },
        With: function(l) {
            for (var m in l) {
                if (l.hasOwnProperty(m)) {
                    this[m] = l[m]
                }
            }
            return this
        },
        toString: function() {
            return this.type + "[" + this.data.join("; ") + "]"
        }
    });
    b.start = b.Subclass({
        type: "start",
        isOpen: true,
        Init: function(l) {
            this.SUPER(arguments).Init.call(this);
            this.global = l
        },
        checkItem: function(l) {
            if (l.type === "stop") {
                return b.mml(this.mmlData())
            }
            return this.SUPER(arguments).checkItem.call(this, l)
        }
    });
    b.stop = b.Subclass({
        type: "stop",
        isClose: true
    });
    b.open = b.Subclass({
        type: "open",
        isOpen: true,
        stopError: ["ExtraOpenMissingClose", "Extra open brace or missing close brace"],
        checkItem: function(m) {
            if (m.type === "close") {
                var l = this.mmlData();
                return b.mml(h.TeXAtom(l))
            }
            return this.SUPER(arguments).checkItem.call(this, m)
        }
    });
    b.close = b.Subclass({
        type: "close",
        isClose: true
    });
    b.prime = b.Subclass({
        type: "prime",
        checkItem: function(l) {
            if (this.data[0].type !== "msubsup") {
                return [h.msup(this.data[0], this.data[1]), l]
            }
            this.data[0].SetData(this.data[0].sup, this.data[1]);
            return [this.data[0], l]
        }
    });
    b.subsup = b.Subclass({
        type: "subsup",
        stopError: ["MissingScript", "Missing superscript or subscript argument"],
        supError: ["MissingOpenForSup", "Missing open brace for superscript"],
        subError: ["MissingOpenForSub", "Missing open brace for subscript"],
        checkItem: function(l) {
            if (l.type === "open" || l.type === "left") {
                return true
            }
            if (l.type === "mml") {
                if (this.primes) {
                    if (this.position !== 2) {
                        this.data[0].SetData(2, this.primes)
                    } else {
                        l.data[0] = h.mrow(this.primes.With({
                            variantForm: true
                        }), l.data[0])
                    }
                }
                this.data[0].SetData(this.position, l.data[0]);
                return b.mml(this.data[0])
            }
            if (this.SUPER(arguments).checkItem.call(this, l)) {
                d.Error(this[["", "subError", "supError"][this.position]])
            }
        },
        Pop: function() {}
    });
    b.over = b.Subclass({
        type: "over",
        isClose: true,
        name: "\\over",
        checkItem: function(n, l) {
            if (n.type === "over") {
                d.Error(["AmbiguousUseOf", "Ambiguous use of %1", n.name])
            }
            if (n.isClose) {
                var m = h.mfrac(this.num, this.mmlData(false));
                if (this.thickness != null) {
                    m.linethickness = this.thickness
                }
                if (this.open || this.close) {
                    m.texClass = h.TEXCLASS.INNER;
                    m.texWithDelims = true;
                    m = d.fenced(this.open, m, this.close)
                }
                return [b.mml(m), n]
            }
            return this.SUPER(arguments).checkItem.call(this, n)
        },
        toString: function() {
            return "over[" + this.num + " / " + this.data.join("; ") + "]"
        }
    });
    b.left = b.Subclass({
        type: "left",
        isOpen: true,
        delim: "(",
        stopError: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"],
        checkItem: function(l) {
            if (l.type === "right") {
                return b.mml(d.fenced(this.delim, this.mmlData(), l.delim))
            }
            return this.SUPER(arguments).checkItem.call(this, l)
        }
    });
    b.right = b.Subclass({
        type: "right",
        isClose: true,
        delim: ")"
    });
    b.begin = b.Subclass({
        type: "begin",
        isOpen: true,
        checkItem: function(l) {
            if (l.type === "end") {
                if (l.name !== this.name) {
                    d.Error(["EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.name, l.name])
                }
                if (!this.end) {
                    return b.mml(this.mmlData())
                }
                return this.parse[this.end].call(this.parse, this, this.data)
            }
            if (l.type === "stop") {
                d.Error(["EnvMissingEnd", "Missing \\end{%1}", this.name])
            }
            return this.SUPER(arguments).checkItem.call(this, l)
        }
    });
    b.end = b.Subclass({
        type: "end",
        isClose: true
    });
    b.style = b.Subclass({
        type: "style",
        checkItem: function(m) {
            if (!m.isClose) {
                return this.SUPER(arguments).checkItem.call(this, m)
            }
            var l = h.mstyle.apply(h, this.data).With(this.styles);
            return [b.mml(l), m]
        }
    });
    b.position = b.Subclass({
        type: "position",
        checkItem: function(m) {
            if (m.isClose) {
                d.Error(["MissingBoxFor", "Missing box for %1", this.name])
            }
            if (m.isNotStack) {
                var l = m.mmlData();
                switch (this.move) {
                    case "vertical":
                        l = h.mpadded(l).With({
                            height: this.dh,
                            depth: this.dd,
                            voffset: this.dh
                        });
                        return [b.mml(l)];
                    case "horizontal":
                        return [b.mml(this.left), m, b.mml(this.right)]
                }
            }
            return this.SUPER(arguments).checkItem.call(this, m)
        }
    });
    b.array = b.Subclass({
        type: "array",
        isOpen: true,
        arraydef: {},
        Init: function() {
            this.table = [];
            this.row = [];
            this.env = {};
            this.frame = [];
            this.SUPER(arguments).Init.apply(this, arguments)
        },
        checkItem: function(m) {
            if (m.isClose && m.type !== "over") {
                if (m.isEntry) {
                    this.EndEntry();
                    this.clearEnv();
                    return false
                }
                if (m.isCR) {
                    this.EndEntry();
                    this.EndRow();
                    this.clearEnv();
                    return false
                }
                this.EndTable();
                this.clearEnv();
                var l = h.mtable.apply(h, this.table).With(this.arraydef);
                if (this.frame.length === 4) {
                    l.frame = (this.frame.dashed ? "dashed": "solid")
                } else {
                    if (this.frame.length) {
                        l.hasFrame = true;
                        if (this.arraydef.rowlines) {
                            this.arraydef.rowlines = this.arraydef.rowlines.replace(/none( none)+$/, "none")
                        }
                        l = h.menclose(l).With({
                            notation: this.frame.join(" "),
                            isFrame: true
                        });
                        if ((this.arraydef.columnlines || "none") != "none" || (this.arraydef.rowlines || "none") != "none") {
                            l.padding = 0
                        }
                    }
                }
                if (this.open || this.close) {
                    l = d.fenced(this.open, l, this.close)
                }
                l = b.mml(l);
                if (this.requireClose) {
                    if (m.type === "close") {
                        return l
                    }
                    d.Error(["MissingCloseBrace", "Missing close brace"])
                }
                return [l, m]
            }
            return this.SUPER(arguments).checkItem.call(this, m)
        },
        EndEntry: function() {
            this.row.push(h.mtd.apply(h, this.data));
            this.data = []
        },
        EndRow: function() {
            this.table.push(h.mtr.apply(h, this.row));
            this.row = []
        },
        EndTable: function() {
            if (this.data.length || this.row.length) {
                this.EndEntry();
                this.EndRow()
            }
            this.checkLines()
        },
        checkLines: function() {
            if (this.arraydef.rowlines) {
                var l = this.arraydef.rowlines.split(/ /);
                if (l.length === this.table.length) {
                    this.frame.push("bottom");
                    l.pop();
                    this.arraydef.rowlines = l.join(" ")
                } else {
                    if (l.length < this.table.length - 1) {
                        this.arraydef.rowlines += " none"
                    }
                }
            }
            if (this.rowspacing) {
                var m = this.arraydef.rowspacing.split(/ /);
                while (m.length < this.table.length) {
                    m.push(this.rowspacing + "em")
                }
                this.arraydef.rowspacing = m.join(" ")
            }
        },
        clearEnv: function() {
            for (var l in this.env) {
                if (this.env.hasOwnProperty(l)) {
                    delete this.env[l]
                }
            }
        }
    });
    b.cell = b.Subclass({
        type: "cell",
        isClose: true
    });
    b.mml = b.Subclass({
        type: "mml",
        isNotStack: true,
        Add: function() {
            this.data.push.apply(this.data, arguments);
            return this
        }
    });
    b.fn = b.Subclass({
        type: "fn",
        checkItem: function(m) {
            if (this.data[0]) {
                if (m.type !== "mml" || !m.data[0]) {
                    return [this.data[0], m]
                }
                if (m.data[0].isa(h.mspace)) {
                    return [this.data[0], m]
                }
                var l = m.data[0];
                if (l.isEmbellished()) {
                    l = l.CoreMO()
                }
                if ([0, 0, 1, 1, 0, 1, 1, 0, 0, 0][l.Get("texClass")]) {
                    return [this.data[0], m]
                }
                return [this.data[0], h.mo(h.entity("#x2061")).With({
                    texClass: h.TEXCLASS.NONE
                }), m]
            }
            return this.SUPER(arguments).checkItem.apply(this, arguments)
        }
    });
    b.not = b.Subclass({
        type: "not",
        checkItem: function(m) {
            var l, n;
            if (m.type === "open" || m.type === "left") {
                return true
            }
            if (m.type === "mml" && m.data[0].type.match(/^(mo|mi|mtext)$/)) {
                l = m.data[0],
                    n = l.data.join("");
                if (n.length === 1 && !l.movesupsub) {
                    n = b.not.remap[n.charCodeAt(0)];
                    if (n) {
                        l.SetData(0, h.chars(String.fromCharCode(n)))
                    } else {
                        l.Append(h.chars("\u0338"))
                    }
                    return m
                }
            }
            l = h.mpadded(h.mtext("\u29F8")).With({
                width: 0
            });
            l = h.TeXAtom(l).With({
                texClass: h.TEXCLASS.REL
            });
            return [l, m]
        }
    });
    b.not.remap = {
        8592 : 8602,
        8594 : 8603,
        8596 : 8622,
        8656 : 8653,
        8658 : 8655,
        8660 : 8654,
        8712 : 8713,
        8715 : 8716,
        8739 : 8740,
        8741 : 8742,
        8764 : 8769,
        126 : 8769,
        8771 : 8772,
        8773 : 8775,
        8776 : 8777,
        8781 : 8813,
        61 : 8800,
        8801 : 8802,
        60 : 8814,
        62 : 8815,
        8804 : 8816,
        8805 : 8817,
        8818 : 8820,
        8819 : 8821,
        8822 : 8824,
        8823 : 8825,
        8826 : 8832,
        8827 : 8833,
        8834 : 8836,
        8835 : 8837,
        8838 : 8840,
        8839 : 8841,
        8866 : 8876,
        8872 : 8877,
        8873 : 8878,
        8875 : 8879,
        8828 : 8928,
        8829 : 8929,
        8849 : 8930,
        8850 : 8931,
        8882 : 8938,
        8883 : 8939,
        8884 : 8940,
        8885 : 8941,
        8707 : 8708
    };
    b.dots = b.Subclass({
        type: "dots",
        checkItem: function(m) {
            if (m.type === "open" || m.type === "left") {
                return true
            }
            var n = this.ldots;
            if (m.type === "mml" && m.data[0].isEmbellished()) {
                var l = m.data[0].CoreMO().Get("texClass");
                if (l === h.TEXCLASS.BIN || l === h.TEXCLASS.REL) {
                    n = this.cdots
                }
            }
            return [n, m]
        }
    });
    var f = {
        Add: function(l, o, n) {
            if (!o) {
                o = this
            }
            for (var m in l) {
                if (l.hasOwnProperty(m)) {
                    if (typeof l[m] === "object" && !(l[m] instanceof Array) && (typeof o[m] === "object" || typeof o[m] === "function")) {
                        this.Add(l[m], o[m], l[m], n)
                    } else {
                        if (!o[m] || !o[m].isUser || !n) {
                            o[m] = l[m]
                        }
                    }
                }
            }
            return o
        }
    };
    var k = function() {
        h = MathJax.ElementJax.mml;
        c.Insert(f, {
            letter: /[a-z]/i,
            digit: /[0-9.]/,
            number: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)*|\.[0-9]+)/,
            special: {
                "\\": "ControlSequence",
                "{": "Open",
                "}": "Close",
                "~": "Tilde",
                "^": "Superscript",
                _: "Subscript",
                " ": "Space",
                "\t": "Space",
                "\r": "Space",
                "\n": "Space",
                "'": "Prime",
                "%": "Comment",
                "&": "Entry",
                "#": "Hash",
                "\u2019": "Prime"
            },
            remap: {
                "-": "2212",
                "*": "2217",
                "`": "2018"
            },
            mathchar0mi: {
                alpha: "03B1",
                beta: "03B2",
                gamma: "03B3",
                delta: "03B4",
                epsilon: "03F5",
                zeta: "03B6",
                eta: "03B7",
                theta: "03B8",
                iota: "03B9",
                kappa: "03BA",
                lambda: "03BB",
                mu: "03BC",
                nu: "03BD",
                xi: "03BE",
                omicron: "03BF",
                pi: "03C0",
                rho: "03C1",
                sigma: "03C3",
                tau: "03C4",
                upsilon: "03C5",
                phi: "03D5",
                chi: "03C7",
                psi: "03C8",
                omega: "03C9",
                varepsilon: "03B5",
                vartheta: "03D1",
                varpi: "03D6",
                varrho: "03F1",
                varsigma: "03C2",
                varphi: "03C6",
                S: ["00A7", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                aleph: ["2135", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                hbar: ["210F", {
                    variantForm: true
                }],
                imath: "0131",
                jmath: "0237",
                ell: "2113",
                wp: ["2118", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                Re: ["211C", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                Im: ["2111", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                partial: ["2202", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                infty: ["221E", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                prime: ["2032", {
                    mathvariant: h.VARIANT.NORMAL,
                    variantForm: true
                }],
                emptyset: ["2205", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                nabla: ["2207", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                top: ["22A4", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                bot: ["22A5", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                angle: ["2220", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                triangle: ["25B3", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                backslash: ["2216", {
                    mathvariant: h.VARIANT.NORMAL,
                    variantForm: true
                }],
                forall: ["2200", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                exists: ["2203", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                neg: ["00AC", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                lnot: ["00AC", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                flat: ["266D", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                natural: ["266E", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                sharp: ["266F", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                clubsuit: ["2663", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                diamondsuit: ["2662", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                heartsuit: ["2661", {
                    mathvariant: h.VARIANT.NORMAL
                }],
                spadesuit: ["2660", {
                    mathvariant: h.VARIANT.NORMAL
                }]
            },
            mathchar0mo: {
                surd: "221A",
                coprod: ["2210", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                bigvee: ["22C1", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                bigwedge: ["22C0", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                biguplus: ["2A04", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                bigcap: ["22C2", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                bigcup: ["22C3", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                "int": ["222B", {
                    texClass: h.TEXCLASS.OP
                }],
                intop: ["222B", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true,
                    movablelimits: true
                }],
                iint: ["222C", {
                    texClass: h.TEXCLASS.OP
                }],
                iiint: ["222D", {
                    texClass: h.TEXCLASS.OP
                }],
                prod: ["220F", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                sum: ["2211", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                bigotimes: ["2A02", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                bigoplus: ["2A01", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                bigodot: ["2A00", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                oint: ["222E", {
                    texClass: h.TEXCLASS.OP
                }],
                bigsqcup: ["2A06", {
                    texClass: h.TEXCLASS.OP,
                    movesupsub: true
                }],
                smallint: ["222B", {
                    largeop: false
                }],
                triangleleft: "25C3",
                triangleright: "25B9",
                bigtriangleup: "25B3",
                bigtriangledown: "25BD",
                wedge: "2227",
                land: "2227",
                vee: "2228",
                lor: "2228",
                cap: "2229",
                cup: "222A",
                ddagger: "2021",
                dagger: "2020",
                sqcap: "2293",
                sqcup: "2294",
                uplus: "228E",
                amalg: "2A3F",
                diamond: "22C4",
                bullet: "2219",
                wr: "2240",
                div: "00F7",
                odot: ["2299", {
                    largeop: false
                }],
                oslash: ["2298", {
                    largeop: false
                }],
                otimes: ["2297", {
                    largeop: false
                }],
                ominus: ["2296", {
                    largeop: false
                }],
                oplus: ["2295", {
                    largeop: false
                }],
                mp: "2213",
                pm: "00B1",
                circ: "2218",
                bigcirc: "25EF",
                setminus: ["2216", {
                    variantForm: true
                }],
                cdot: "22C5",
                ast: "2217",
                times: "00D7",
                star: "22C6",
                propto: "221D",
                sqsubseteq: "2291",
                sqsupseteq: "2292",
                parallel: "2225",
                mid: "2223",
                dashv: "22A3",
                vdash: "22A2",
                leq: "2264",
                le: "2264",
                geq: "2265",
                ge: "2265",
                lt: "003C",
                gt: "003E",
                succ: "227B",
                prec: "227A",
                approx: "2248",
                succeq: "2AB0",
                preceq: "2AAF",
                supset: "2283",
                subset: "2282",
                supseteq: "2287",
                subseteq: "2286",
                "in": "2208",
                ni: "220B",
                notin: "2209",
                owns: "220B",
                gg: "226B",
                ll: "226A",
                sim: "223C",
                simeq: "2243",
                perp: "22A5",
                equiv: "2261",
                asymp: "224D",
                smile: "2323",
                frown: "2322",
                ne: "2260",
                neq: "2260",
                cong: "2245",
                doteq: "2250",
                bowtie: "22C8",
                models: "22A8",
                notChar: "29F8",
                Leftrightarrow: "21D4",
                Leftarrow: "21D0",
                Rightarrow: "21D2",
                leftrightarrow: "2194",
                leftarrow: "2190",
                gets: "2190",
                rightarrow: "2192",
                to: "2192",
                mapsto: "21A6",
                leftharpoonup: "21BC",
                leftharpoondown: "21BD",
                rightharpoonup: "21C0",
                rightharpoondown: "21C1",
                nearrow: "2197",
                searrow: "2198",
                nwarrow: "2196",
                swarrow: "2199",
                rightleftharpoons: "21CC",
                hookrightarrow: "21AA",
                hookleftarrow: "21A9",
                longleftarrow: "27F5",
                Longleftarrow: "27F8",
                longrightarrow: "27F6",
                Longrightarrow: "27F9",
                Longleftrightarrow: "27FA",
                longleftrightarrow: "27F7",
                longmapsto: "27FC",
                ldots: "2026",
                cdots: "22EF",
                vdots: "22EE",
                ddots: "22F1",
                dotsc: "2026",
                dotsb: "22EF",
                dotsm: "22EF",
                dotsi: "22EF",
                dotso: "2026",
                ldotp: ["002E", {
                    texClass: h.TEXCLASS.PUNCT
                }],
                cdotp: ["22C5", {
                    texClass: h.TEXCLASS.PUNCT
                }],
                colon: ["003A", {
                    texClass: h.TEXCLASS.PUNCT
                }]
            },
            mathchar7: {
                Gamma: "0393",
                Delta: "0394",
                Theta: "0398",
                Lambda: "039B",
                Xi: "039E",
                Pi: "03A0",
                Sigma: "03A3",
                Upsilon: "03A5",
                Phi: "03A6",
                Psi: "03A8",
                Omega: "03A9",
                _: "005F",
                "#": "0023",
                "$": "0024",
                "%": "0025",
                "&": "0026",
                And: "0026"
            },
            delimiter: {
                "(": "(",
                ")": ")",
                "[": "[",
                "]": "]",
                "<": "27E8",
                ">": "27E9",
                "\\lt": "27E8",
                "\\gt": "27E9",
                "/": "/",
                "|": ["|", {
                    texClass: h.TEXCLASS.ORD
                }],
                ".": "",
                "\\\\": "\\",
                "\\lmoustache": "23B0",
                "\\rmoustache": "23B1",
                "\\lgroup": "27EE",
                "\\rgroup": "27EF",
                "\\arrowvert": "23D0",
                "\\Arrowvert": "2016",
                "\\bracevert": "23AA",
                "\\Vert": ["2225", {
                    texClass: h.TEXCLASS.ORD
                }],
                "\\|": ["2225", {
                    texClass: h.TEXCLASS.ORD
                }],
                "\\vert": ["|", {
                    texClass: h.TEXCLASS.ORD
                }],
                "\\uparrow": "2191",
                "\\downarrow": "2193",
                "\\updownarrow": "2195",
                "\\Uparrow": "21D1",
                "\\Downarrow": "21D3",
                "\\Updownarrow": "21D5",
                "\\backslash": "\\",
                "\\rangle": "27E9",
                "\\langle": "27E8",
                "\\rbrace": "}",
                "\\lbrace": "{",
                "\\}": "}",
                "\\{": "{",
                "\\rceil": "2309",
                "\\lceil": "2308",
                "\\rfloor": "230B",
                "\\lfloor": "230A",
                "\\lbrack": "[",
                "\\rbrack": "]"
            },
            macros: {
                displaystyle: ["SetStyle", "D", true, 0],
                textstyle: ["SetStyle", "T", false, 0],
                scriptstyle: ["SetStyle", "S", false, 1],
                scriptscriptstyle: ["SetStyle", "SS", false, 2],
                rm: ["SetFont", h.VARIANT.NORMAL],
                mit: ["SetFont", h.VARIANT.ITALIC],
                oldstyle: ["SetFont", h.VARIANT.OLDSTYLE],
                cal: ["SetFont", h.VARIANT.CALIGRAPHIC],
                it: ["SetFont", "-tex-mathit"],
                bf: ["SetFont", h.VARIANT.BOLD],
                bbFont: ["SetFont", h.VARIANT.DOUBLESTRUCK],
                scr: ["SetFont", h.VARIANT.SCRIPT],
                frak: ["SetFont", h.VARIANT.FRAKTUR],
                sf: ["SetFont", h.VARIANT.SANSSERIF],
                tt: ["SetFont", h.VARIANT.MONOSPACE],
                tiny: ["SetSize", 0.5],
                Tiny: ["SetSize", 0.6],
                scriptsize: ["SetSize", 0.7],
                small: ["SetSize", 0.85],
                normalsize: ["SetSize", 1],
                large: ["SetSize", 1.2],
                Large: ["SetSize", 1.44],
                LARGE: ["SetSize", 1.73],
                huge: ["SetSize", 2.07],
                Huge: ["SetSize", 2.49],
                arcsin: ["NamedFn"],
                arccos: ["NamedFn"],
                arctan: ["NamedFn"],
                arg: ["NamedFn"],
                cos: ["NamedFn"],
                cosh: ["NamedFn"],
                cot: ["NamedFn"],
                coth: ["NamedFn"],
                csc: ["NamedFn"],
                deg: ["NamedFn"],
                det: "NamedOp",
                dim: ["NamedFn"],
                exp: ["NamedFn"],
                gcd: "NamedOp",
                hom: ["NamedFn"],
                inf: "NamedOp",
                ker: ["NamedFn"],
                lg: ["NamedFn"],
                lim: "NamedOp",
                liminf: ["NamedOp", "lim&thinsp;inf"],
                limsup: ["NamedOp", "lim&thinsp;sup"],
                ln: ["NamedFn"],
                log: ["NamedFn"],
                max: "NamedOp",
                min: "NamedOp",
                Pr: "NamedOp",
                sec: ["NamedFn"],
                sin: ["NamedFn"],
                sinh: ["NamedFn"],
                sup: "NamedOp",
                tan: ["NamedFn"],
                tanh: ["NamedFn"],
                limits: ["Limits", 1],
                nolimits: ["Limits", 0],
                overline: ["UnderOver", "00AF"],
                underline: ["UnderOver", "005F"],
                overbrace: ["UnderOver", "23DE", 1],
                underbrace: ["UnderOver", "23DF", 1],
                overrightarrow: ["UnderOver", "2192"],
                underrightarrow: ["UnderOver", "2192"],
                overleftarrow: ["UnderOver", "2190"],
                underleftarrow: ["UnderOver", "2190"],
                overleftrightarrow: ["UnderOver", "2194"],
                underleftrightarrow: ["UnderOver", "2194"],
                overset: "Overset",
                underset: "Underset",
                stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
                over: "Over",
                overwithdelims: "Over",
                atop: "Over",
                atopwithdelims: "Over",
                above: "Over",
                abovewithdelims: "Over",
                brace: ["Over", "{", "}"],
                brack: ["Over", "[", "]"],
                choose: ["Over", "(", ")"],
                frac: "Frac",
                sqrt: "Sqrt",
                root: "Root",
                uproot: ["MoveRoot", "upRoot"],
                leftroot: ["MoveRoot", "leftRoot"],
                left: "LeftRight",
                right: "LeftRight",
                middle: "Middle",
                llap: "Lap",
                rlap: "Lap",
                raise: "RaiseLower",
                lower: "RaiseLower",
                moveleft: "MoveLeftRight",
                moveright: "MoveLeftRight",
                ",": ["Spacer", h.LENGTH.THINMATHSPACE],
                ":": ["Spacer", h.LENGTH.MEDIUMMATHSPACE],
                ">": ["Spacer", h.LENGTH.MEDIUMMATHSPACE],
                ";": ["Spacer", h.LENGTH.THICKMATHSPACE],
                "!": ["Spacer", h.LENGTH.NEGATIVETHINMATHSPACE],
                enspace: ["Spacer", ".5em"],
                quad: ["Spacer", "1em"],
                qquad: ["Spacer", "2em"],
                thinspace: ["Spacer", h.LENGTH.THINMATHSPACE],
                negthinspace: ["Spacer", h.LENGTH.NEGATIVETHINMATHSPACE],
                hskip: "Hskip",
                hspace: "Hskip",
                kern: "Hskip",
                mskip: "Hskip",
                mspace: "Hskip",
                mkern: "Hskip",
                Rule: ["Rule"],
                Space: ["Rule", "blank"],
                big: ["MakeBig", h.TEXCLASS.ORD, 0.85],
                Big: ["MakeBig", h.TEXCLASS.ORD, 1.15],
                bigg: ["MakeBig", h.TEXCLASS.ORD, 1.45],
                Bigg: ["MakeBig", h.TEXCLASS.ORD, 1.75],
                bigl: ["MakeBig", h.TEXCLASS.OPEN, 0.85],
                Bigl: ["MakeBig", h.TEXCLASS.OPEN, 1.15],
                biggl: ["MakeBig", h.TEXCLASS.OPEN, 1.45],
                Biggl: ["MakeBig", h.TEXCLASS.OPEN, 1.75],
                bigr: ["MakeBig", h.TEXCLASS.CLOSE, 0.85],
                Bigr: ["MakeBig", h.TEXCLASS.CLOSE, 1.15],
                biggr: ["MakeBig", h.TEXCLASS.CLOSE, 1.45],
                Biggr: ["MakeBig", h.TEXCLASS.CLOSE, 1.75],
                bigm: ["MakeBig", h.TEXCLASS.REL, 0.85],
                Bigm: ["MakeBig", h.TEXCLASS.REL, 1.15],
                biggm: ["MakeBig", h.TEXCLASS.REL, 1.45],
                Biggm: ["MakeBig", h.TEXCLASS.REL, 1.75],
                mathord: ["TeXAtom", h.TEXCLASS.ORD],
                mathop: ["TeXAtom", h.TEXCLASS.OP],
                mathopen: ["TeXAtom", h.TEXCLASS.OPEN],
                mathclose: ["TeXAtom", h.TEXCLASS.CLOSE],
                mathbin: ["TeXAtom", h.TEXCLASS.BIN],
                mathrel: ["TeXAtom", h.TEXCLASS.REL],
                mathpunct: ["TeXAtom", h.TEXCLASS.PUNCT],
                mathinner: ["TeXAtom", h.TEXCLASS.INNER],
                vcenter: ["TeXAtom", h.TEXCLASS.VCENTER],
                mathchoice: ["Extension", "mathchoice"],
                buildrel: "BuildRel",
                hbox: ["HBox", 0],
                text: "HBox",
                mbox: ["HBox", 0],
                fbox: "FBox",
                strut: "Strut",
                mathstrut: ["Macro", "\\vphantom{(}"],
                phantom: "Phantom",
                vphantom: ["Phantom", 1, 0],
                hphantom: ["Phantom", 0, 1],
                smash: "Smash",
                acute: ["Accent", "00B4"],
                grave: ["Accent", "0060"],
                ddot: ["Accent", "00A8"],
                tilde: ["Accent", "007E"],
                bar: ["Accent", "00AF"],
                breve: ["Accent", "02D8"],
                check: ["Accent", "02C7"],
                hat: ["Accent", "005E"],
                vec: ["Accent", "2192"],
                dot: ["Accent", "02D9"],
                widetilde: ["Accent", "007E", 1],
                widehat: ["Accent", "005E", 1],
                matrix: "Matrix",
                array: "Matrix",
                pmatrix: ["Matrix", "(", ")"],
                cases: ["Matrix", "{", "", "left left", null, ".1em", null, true],
                eqalign: ["Matrix", null, null, "right left", h.LENGTH.THICKMATHSPACE, ".5em", "D"],
                displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
                cr: "Cr",
                "\\": "CrLaTeX",
                newline: "Cr",
                hline: ["HLine", "solid"],
                hdashline: ["HLine", "dashed"],
                eqalignno: ["Matrix", null, null, "right left right", h.LENGTH.THICKMATHSPACE + " 3em", ".5em", "D"],
                leqalignno: ["Matrix", null, null, "right left right", h.LENGTH.THICKMATHSPACE + " 3em", ".5em", "D"],
                bmod: ["Macro", "\\mathbin{\\mmlToken{mo}{mod}}"],
                pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
                mod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1", 1],
                pod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)", 1],
                iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
                skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
                mathcal: ["Macro", "{\\cal #1}", 1],
                mathscr: ["Macro", "{\\scr #1}", 1],
                mathrm: ["Macro", "{\\rm #1}", 1],
                mathbf: ["Macro", "{\\bf #1}", 1],
                mathbb: ["Macro", "{\\bbFont #1}", 1],
                Bbb: ["Macro", "{\\bbFont #1}", 1],
                mathit: ["Macro", "{\\it #1}", 1],
                mathfrak: ["Macro", "{\\frak #1}", 1],
                mathsf: ["Macro", "{\\sf #1}", 1],
                mathtt: ["Macro", "{\\tt #1}", 1],
                textrm: ["Macro", "\\mathord{\\rm\\text{#1}}", 1],
                textit: ["Macro", "\\mathord{\\it{\\text{#1}}}", 1],
                textbf: ["Macro", "\\mathord{\\bf{\\text{#1}}}", 1],
                pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
                TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
                LaTeX: ["Macro", "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"],
                " ": ["Macro", "\\text{ }"],
                not: "Not",
                dots: "Dots",
                space: "Tilde",
                begin: "Begin",
                end: "End",
                newcommand: ["Extension", "newcommand"],
                renewcommand: ["Extension", "newcommand"],
                newenvironment: ["Extension", "newcommand"],
                renewenvironment: ["Extension", "newcommand"],
                def: ["Extension", "newcommand"],
                let: ["Extension", "newcommand"],
                verb: ["Extension", "verb"],
                boldsymbol: ["Extension", "boldsymbol"],
                tag: ["Extension", "AMSmath"],
                notag: ["Extension", "AMSmath"],
                label: ["Extension", "AMSmath"],
                ref: ["Extension", "AMSmath"],
                eqref: ["Extension", "AMSmath"],
                nonumber: ["Macro", "\\notag"],
                unicode: ["Extension", "unicode"],
                color: "Color",
                href: ["Extension", "HTML"],
                "class": ["Extension", "HTML"],
                style: ["Extension", "HTML"],
                cssId: ["Extension", "HTML"],
                bbox: ["Extension", "bbox"],
                mmlToken: "MmlToken",
                require: "Require"
            },
            environment: {
                array: ["AlignedArray"],
                matrix: ["Array", null, null, null, "c"],
                pmatrix: ["Array", null, "(", ")", "c"],
                bmatrix: ["Array", null, "[", "]", "c"],
                Bmatrix: ["Array", null, "\\{", "\\}", "c"],
                vmatrix: ["Array", null, "\\vert", "\\vert", "c"],
                Vmatrix: ["Array", null, "\\Vert", "\\Vert", "c"],
                cases: ["Array", null, "\\{", ".", "ll", null, ".2em", "T"],
                equation: [null, "Equation"],
                "equation*": [null, "Equation"],
                eqnarray: ["ExtensionEnv", null, "AMSmath"],
                "eqnarray*": ["ExtensionEnv", null, "AMSmath"],
                align: ["ExtensionEnv", null, "AMSmath"],
                "align*": ["ExtensionEnv", null, "AMSmath"],
                aligned: ["ExtensionEnv", null, "AMSmath"],
                multline: ["ExtensionEnv", null, "AMSmath"],
                "multline*": ["ExtensionEnv", null, "AMSmath"],
                split: ["ExtensionEnv", null, "AMSmath"],
                gather: ["ExtensionEnv", null, "AMSmath"],
                "gather*": ["ExtensionEnv", null, "AMSmath"],
                gathered: ["ExtensionEnv", null, "AMSmath"],
                alignat: ["ExtensionEnv", null, "AMSmath"],
                "alignat*": ["ExtensionEnv", null, "AMSmath"],
                alignedat: ["ExtensionEnv", null, "AMSmath"]
            },
            p_height: 1.2 / 0.85
        });
        if (this.config.Macros) {
            var l = this.config.Macros;
            for (var m in l) {
                if (l.hasOwnProperty(m)) {
                    if (typeof(l[m]) === "string") {
                        f.macros[m] = ["Macro", l[m]]
                    } else {
                        f.macros[m] = ["Macro"].concat(l[m])
                    }
                    f.macros[m].isUser = true
                }
            }
        }
    };
    var a = MathJax.Object.Subclass({
        Init: function(m, n) {
            this.string = m;
            this.i = 0;
            this.macroCount = 0;
            var l;
            if (n) {
                l = {};
                for (var o in n) {
                    if (n.hasOwnProperty(o)) {
                        l[o] = n[o]
                    }
                }
            }
            this.stack = d.Stack(l, !!n);
            this.Parse();
            this.Push(b.stop())
        },
        Parse: function() {
            var m, l;
            while (this.i < this.string.length) {
                m = this.string.charAt(this.i++);
                l = m.charCodeAt(0);
                if (l >= 55296 && l < 56320) {
                    m += this.string.charAt(this.i++)
                }
                if (f.special[m]) {
                    this[f.special[m]](m)
                } else {
                    if (f.letter.test(m)) {
                        this.Variable(m)
                    } else {
                        if (f.digit.test(m)) {
                            this.Number(m)
                        } else {
                            this.Other(m)
                        }
                    }
                }
            }
        },
        Push: function() {
            this.stack.Push.apply(this.stack, arguments)
        },
        mml: function() {
            if (this.stack.Top().type !== "mml") {
                return null
            }
            return this.stack.Top().data[0]
        },
        mmlToken: function(l) {
            return l
        },
        ControlSequence: function(o) {
            var l = this.GetCS(),
                n = this.csFindMacro(l);
            if (n) {
                if (! (n instanceof Array)) {
                    n = [n]
                }
                var m = n[0];
                if (! (m instanceof Function)) {
                    m = this[m]
                }
                m.apply(this, [o + l].concat(n.slice(1)))
            } else {
                if (f.mathchar0mi[l]) {
                    this.csMathchar0mi(l, f.mathchar0mi[l])
                } else {
                    if (f.mathchar0mo[l]) {
                        this.csMathchar0mo(l, f.mathchar0mo[l])
                    } else {
                        if (f.mathchar7[l]) {
                            this.csMathchar7(l, f.mathchar7[l])
                        } else {
                            if (f.delimiter["\\" + l] != null) {
                                this.csDelimiter(l, f.delimiter["\\" + l])
                            } else {
                                this.csUndefined(o + l)
                            }
                        }
                    }
                }
            }
        },
        csFindMacro: function(l) {
            return f.macros[l]
        },
        csMathchar0mi: function(l, n) {
            var m = {
                mathvariant: h.VARIANT.ITALIC
            };
            if (n instanceof Array) {
                m = n[1];
                n = n[0]
            }
            this.Push(this.mmlToken(h.mi(h.entity("#x" + n)).With(m)))
        },
        csMathchar0mo: function(l, n) {
            var m = {
                stretchy: false
            };
            if (n instanceof Array) {
                m = n[1];
                m.stretchy = false;
                n = n[0]
            }
            this.Push(this.mmlToken(h.mo(h.entity("#x" + n)).With(m)))
        },
        csMathchar7: function(l, n) {
            var m = {
                mathvariant: h.VARIANT.NORMAL
            };
            if (n instanceof Array) {
                m = n[1];
                n = n[0]
            }
            if (this.stack.env.font) {
                m.mathvariant = this.stack.env.font
            }
            this.Push(this.mmlToken(h.mi(h.entity("#x" + n)).With(m)))
        },
        csDelimiter: function(l, n) {
            var m = {};
            if (n instanceof Array) {
                m = n[1];
                n = n[0]
            }
            if (n.length === 4) {
                n = h.entity("#x" + n)
            } else {
                n = h.chars(n)
            }
            this.Push(this.mmlToken(h.mo(n).With({
                fence: false,
                stretchy: false
            }).With(m)))
        },
        csUndefined: function(l) {
            d.Error(["UndefinedControlSequence", "Undefined control sequence %1", l])
        },
        Variable: function(m) {
            var l = {};
            if (this.stack.env.font) {
                l.mathvariant = this.stack.env.font
            }
            this.Push(this.mmlToken(h.mi(h.chars(m)).With(l)))
        },
        Number: function(o) {
            var l, m = this.string.slice(this.i - 1).match(f.number);
            if (m) {
                l = h.mn(m[0].replace(/[{}]/g, ""));
                this.i += m[0].length - 1
            } else {
                l = h.mo(h.chars(o))
            }
            if (this.stack.env.font) {
                l.mathvariant = this.stack.env.font
            }
            this.Push(this.mmlToken(l))
        },
        Open: function(l) {
            this.Push(b.open())
        },
        Close: function(l) {
            this.Push(b.close())
        },
        Tilde: function(l) {
            this.Push(h.mtext(h.chars(g)))
        },
        Space: function(l) {},
        Superscript: function(p) {
            if (this.GetNext().match(/\d/)) {
                this.string = this.string.substr(0, this.i + 1) + " " + this.string.substr(this.i + 1)
            }
            var l, o, m, n = this.stack.Top();
            if (n.type === "prime") {
                m = n.data[0];
                o = n.data[1];
                this.stack.Pop()
            } else {
                m = this.stack.Prev();
                if (!m) {
                    m = h.mi("")
                }
            }
            if (m.isEmbellishedWrapper) {
                m = m.data[0].data[0]
            }
            if (m.type === "msubsup") {
                if (m.data[m.sup]) {
                    d.Error(["DoubleExponent", "Double exponent: use braces to clarify"])
                }
                l = m.sup
            } else {
                if (m.movesupsub) {
                    if (m.type !== "munderover" || m.data[m.over]) {
                        if (m.movablelimits && m.isa(h.mi)) {
                            m = this.mi2mo(m)
                        }
                        m = h.munderover(m, null, null).With({
                            movesupsub: true
                        })
                    }
                    l = m.over
                } else {
                    m = h.msubsup(m, null, null);
                    l = m.sup
                }
            }
            this.Push(b.subsup(m).With({
                position: l,
                primes: o
            }))
        },
        Subscript: function(p) {
            if (this.GetNext().match(/\d/)) {
                this.string = this.string.substr(0, this.i + 1) + " " + this.string.substr(this.i + 1)
            }
            var l, o, m, n = this.stack.Top();
            if (n.type === "prime") {
                m = n.data[0];
                o = n.data[1];
                this.stack.Pop()
            } else {
                m = this.stack.Prev();
                if (!m) {
                    m = h.mi("")
                }
            }
            if (m.isEmbellishedWrapper) {
                m = m.data[0].data[0]
            }
            if (m.type === "msubsup") {
                if (m.data[m.sub]) {
                    d.Error(["DoubleSubscripts", "Double subscripts: use braces to clarify"])
                }
                l = m.sub
            } else {
                if (m.movesupsub) {
                    if (m.type !== "munderover" || m.data[m.under]) {
                        if (m.movablelimits && m.isa(h.mi)) {
                            m = this.mi2mo(m)
                        }
                        m = h.munderover(m, null, null).With({
                            movesupsub: true
                        })
                    }
                    l = m.under
                } else {
                    m = h.msubsup(m, null, null);
                    l = m.sub
                }
            }
            this.Push(b.subsup(m).With({
                position: l,
                primes: o
            }))
        },
        PRIME: "\u2032",
        SMARTQUOTE: "\u2019",
        Prime: function(n) {
            var m = this.stack.Prev();
            if (!m) {
                m = h.mi()
            }
            if (m.type === "msubsup" && m.data[m.sup]) {
                d.Error(["DoubleExponentPrime", "Prime causes double exponent: use braces to clarify"])
            }
            var l = "";
            this.i--;
            do {
                l += this.PRIME;
                this.i++, n = this.GetNext()
            } while ( n === "'" || n === this . SMARTQUOTE );
            l = ["", "\u2032", "\u2033", "\u2034", "\u2057"][l.length] || l;
            this.Push(b.prime(m, this.mmlToken(h.mo(l))))
        },
        mi2mo: function(l) {
            var m = h.mo();
            m.Append.apply(m, l.data);
            var n;
            for (n in m.defaults) {
                if (m.defaults.hasOwnProperty(n) && l[n] != null) {
                    m[n] = l[n]
                }
            }
            for (n in h.copyAttributes) {
                if (h.copyAttributes.hasOwnProperty(n) && l[n] != null) {
                    m[n] = l[n]
                }
            }
            return m
        },
        Comment: function(l) {
            while (this.i < this.string.length && this.string.charAt(this.i) != "\n") {
                this.i++
            }
        },
        Hash: function(l) {
            d.Error(["CantUseHash1", "You can't use 'macro parameter character #' in math mode"])
        },
        Other: function(n) {
            var m = {
                    stretchy: false
                },
                l;
            if (this.stack.env.font) {
                m.mathvariant = this.stack.env.font
            }
            if (f.remap[n]) {
                n = f.remap[n];
                if (n instanceof Array) {
                    m = n[1];
                    n = n[0]
                }
                l = h.mo(h.entity("#x" + n)).With(m)
            } else {
                l = h.mo(n).With(m)
            }
            if (l.autoDefault("texClass", true) == "") {
                l = h.TeXAtom(l)
            }
            this.Push(this.mmlToken(l))
        },
        SetFont: function(m, l) {
            this.stack.env.font = l
        },
        SetStyle: function(m, l, n, o) {
            this.stack.env.style = l;
            this.stack.env.level = o;
            this.Push(b.style().With({
                styles: {
                    displaystyle: n,
                    scriptlevel: o
                }
            }))
        },
        SetSize: function(l, m) {
            this.stack.env.size = m;
            this.Push(b.style().With({
                styles: {
                    mathsize: m + "em"
                }
            }))
        },
        Color: function(n) {
            var m = this.GetArgument(n);
            var l = this.stack.env.color;
            this.stack.env.color = m;
            var o = this.ParseArg(n);
            if (l) {
                this.stack.env.color
            } else {
                delete this.stack.env.color
            }
            this.Push(h.mstyle(o).With({
                mathcolor: m
            }))
        },
        Spacer: function(l, m) {
            this.Push(h.mspace().With({
                width: m,
                mathsize: h.SIZE.NORMAL,
                scriptlevel: 0
            }))
        },
        LeftRight: function(l) {
            this.Push(b[l.substr(1)]().With({
                delim: this.GetDelimiter(l)
            }))
        },
        Middle: function(l) {
            var m = this.GetDelimiter(l);
            if (this.stack.Top().type !== "left") {
                d.Error(["MisplacedMiddle", "%1 must be within \\left and \\right", l])
            }
            this.Push(h.mo(m).With({
                stretchy: true
            }))
        },
        NamedFn: function(m, n) {
            if (!n) {
                n = m.substr(1)
            }
            var l = h.mi(n).With({
                texClass: h.TEXCLASS.OP
            });
            this.Push(b.fn(this.mmlToken(l)))
        },
        NamedOp: function(m, n) {
            if (!n) {
                n = m.substr(1)
            }
            n = n.replace(/&thinsp;/, "\u2006");
            var l = h.mo(n).With({
                movablelimits: true,
                movesupsub: true,
                form: h.FORM.PREFIX,
                texClass: h.TEXCLASS.OP
            });
            l.useMMLspacing &= ~l.SPACE_ATTR.form;
            this.Push(this.mmlToken(l))
        },
        Limits: function(m, l) {
            var n = this.stack.Prev("nopop");
            if (!n || n.texClass !== h.TEXCLASS.OP) {
                d.Error(["MisplacedLimits", "%1 is allowed only on operators", m])
            }
            n.movesupsub = (l ? true: false);
            n.movablelimits = false
        },
        Over: function(n, m, o) {
            var l = b.over().With({
                name: n
            });
            if (m || o) {
                l.open = m;
                l.close = o
            } else {
                if (n.match(/withdelims$/)) {
                    l.open = this.GetDelimiter(n);
                    l.close = this.GetDelimiter(n)
                }
            }
            if (n.match(/^\\above/)) {
                l.thickness = this.GetDimen(n)
            } else {
                if (n.match(/^\\atop/) || m || o) {
                    l.thickness = 0
                }
            }
            this.Push(l)
        },
        Frac: function(m) {
            var l = this.ParseArg(m);
            var n = this.ParseArg(m);
            this.Push(h.mfrac(l, n))
        },
        Sqrt: function(o) {
            var p = this.GetBrackets(o),
                l = this.GetArgument(o);
            if (l === "\\frac") {
                l += "{" + this.GetArgument(l) + "}{" + this.GetArgument(l) + "}"
            }
            var m = d.Parse(l, this.stack.env).mml();
            if (!p) {
                m = h.msqrt.apply(h, m.array())
            } else {
                m = h.mroot(m, this.parseRoot(p))
            }
            this.Push(m)
        },
        Root: function(m) {
            var o = this.GetUpTo(m, "\\of");
            var l = this.ParseArg(m);
            this.Push(h.mroot(l, this.parseRoot(o)))
        },
        parseRoot: function(q) {
            var m = this.stack.env,
                l = m.inRoot;
            m.inRoot = true;
            var p = d.Parse(q, m);
            q = p.mml();
            var o = p.stack.global;
            if (o.leftRoot || o.upRoot) {
                q = h.mpadded(q);
                if (o.leftRoot) {
                    q.width = o.leftRoot
                }
                if (o.upRoot) {
                    q.voffset = o.upRoot;
                    q.height = o.upRoot
                }
            }
            m.inRoot = l;
            return q
        },
        MoveRoot: function(l, o) {
            if (!this.stack.env.inRoot) {
                d.Error(["MisplacedMoveRoot", "%1 can appear only within a root", l])
            }
            if (this.stack.global[o]) {
                d.Error(["MultipleMoveRoot", "Multiple use of %1", l])
            }
            var m = this.GetArgument(l);
            if (!m.match(/-?[0-9]+/)) {
                d.Error(["IntegerArg", "The argument to %1 must be an integer", l])
            }
            m = (m / 15) + "em";
            if (m.substr(0, 1) !== "-") {
                m = "+" + m
            }
            this.stack.global[o] = m
        },
        Accent: function(n, l, q) {
            var p = this.ParseArg(n);
            var o = {
                accent: true
            };
            if (this.stack.env.font) {
                o.mathvariant = this.stack.env.font
            }
            var m = this.mmlToken(h.mo(h.entity("#x" + l)).With(o));
            m.stretchy = (q ? true: false);
            this.Push(h.TeXAtom(h.munderover(p, null, m).With({
                accent: true
            })))
        },
        UnderOver: function(n, q, l) {
            var p = {
                o: "over",
                u: "under"
            } [n.charAt(1)];
            var o = this.ParseArg(n);
            if (o.Get("movablelimits")) {
                o.movablelimits = false
            }
            var m = h.munderover(o, null, null);
            if (l) {
                m.movesupsub = true
            }
            m.data[m[p]] = this.mmlToken(h.mo(h.entity("#x" + q)).With({
                stretchy: true,
                accent: (p == "under")
            }));
            this.Push(m)
        },
        Overset: function(l) {
            var n = this.ParseArg(l),
                m = this.ParseArg(l);
            this.Push(h.mover(m, n))
        },
        Underset: function(l) {
            var n = this.ParseArg(l),
                m = this.ParseArg(l);
            this.Push(h.munder(m, n))
        },
        TeXAtom: function(o, q) {
            var p = {
                    texClass: q
                },
                n;
            if (q == h.TEXCLASS.OP) {
                p.movesupsub = p.movablelimits = true;
                var l = this.GetArgument(o);
                var m = l.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
                if (m) {
                    p.mathvariant = h.VARIANT.NORMAL;
                    n = b.fn(this.mmlToken(h.mi(m[1]).With(p)))
                } else {
                    n = b.fn(h.TeXAtom(d.Parse(l, this.stack.env).mml()).With(p))
                }
            } else {
                n = h.TeXAtom(this.ParseArg(o)).With(p)
            }
            this.Push(n)
        },
        MmlToken: function(n) {
            var o = this.GetArgument(n),
                l = this.GetBrackets(n, "").replace(/^\s+/, ""),
                r = this.GetArgument(n),
                q = {
                    attrNames: []
                },
                m;
            if (!h[o] || !h[o].prototype.isToken) {
                d.Error(["NotMathMLToken", "%1 is not a token element", o])
            }
            while (l !== "") {
                m = l.match(/^([a-z]+)\s*=\s*(\'[^']*'|"[^"]*"|[^ ]*)\s*/i);
                if (!m) {
                    d.Error(["InvalidMathMLAttr", "Invalid MathML attribute: %1", l])
                }
                if (!h[o].prototype.defaults[m[1]] && !this.MmlTokenAllow[m[1]]) {
                    d.Error(["UnknownAttrForElement", "%1 is not a recognized attribute for %2", m[1], o])
                }
                var p = this.MmlFilterAttribute(m[1], m[2].replace(/^(['"])(.*)\1$/, "$2"));
                if (p) {
                    if (p.toLowerCase() === "true") {
                        p = true
                    } else {
                        if (p.toLowerCase() === "false") {
                            p = false
                        }
                    }
                    q[m[1]] = p;
                    q.attrNames.push(m[1])
                }
                l = l.substr(m[0].length)
            }
            this.Push(this.mmlToken(h[o](r).With(q)))
        },
        MmlFilterAttribute: function(l, m) {
            return m
        },
        MmlTokenAllow: {
            fontfamily: 1,
            fontsize: 1,
            fontweight: 1,
            fontstyle: 1,
            color: 1,
            background: 1,
            id: 1,
            "class": 1,
            href: 1,
            style: 1
        },
        Strut: function(l) {
            this.Push(h.mpadded(h.mrow()).With({
                height: "8.6pt",
                depth: "3pt",
                width: 0
            }))
        },
        Phantom: function(m, l, n) {
            var o = h.mphantom(this.ParseArg(m));
            if (l || n) {
                o = h.mpadded(o);
                if (n) {
                    o.height = o.depth = 0
                }
                if (l) {
                    o.width = 0
                }
            }
            this.Push(h.TeXAtom(o))
        },
        Smash: function(n) {
            var m = this.trimSpaces(this.GetBrackets(n, ""));
            var l = h.mpadded(this.ParseArg(n));
            switch (m) {
                case "b":
                    l.depth = 0;
                    break;
                case "t":
                    l.height = 0;
                    break;
                default:
                    l.height = l.depth = 0
            }
            this.Push(h.TeXAtom(l))
        },
        Lap: function(m) {
            var l = h.mpadded(this.ParseArg(m)).With({
                width: 0
            });
            if (m === "\\llap") {
                l.lspace = "-1 width"
            }
            this.Push(h.TeXAtom(l))
        },
        RaiseLower: function(l) {
            var m = this.GetDimen(l);
            var n = b.position().With({
                name: l,
                move: "vertical"
            });
            if (m.charAt(0) === "-") {
                m = m.slice(1);
                l = {
                    raise: "\\lower",
                    lower: "\\raise"
                } [l.substr(1)]
            }
            if (l === "\\lower") {
                n.dh = "-" + m;
                n.dd = "+" + m
            } else {
                n.dh = "+" + m;
                n.dd = "-" + m
            }
            this.Push(n)
        },
        MoveLeftRight: function(l) {
            var o = this.GetDimen(l);
            var n = (o.charAt(0) === "-" ? o.slice(1) : "-" + o);
            if (l === "\\moveleft") {
                var m = o;
                o = n;
                n = m
            }
            this.Push(b.position().With({
                name: l,
                move: "horizontal",
                left: h.mspace().With({
                    width: o,
                    mathsize: h.SIZE.NORMAL
                }),
                right: h.mspace().With({
                    width: n,
                    mathsize: h.SIZE.NORMAL
                })
            }))
        },
        Hskip: function(l) {
            this.Push(h.mspace().With({
                width: this.GetDimen(l),
                mathsize: h.SIZE.NORMAL
            }))
        },
        Rule: function(n, p) {
            var l = this.GetDimen(n),
                o = this.GetDimen(n),
                r = this.GetDimen(n);
            var m, q = {
                width: l,
                height: o,
                depth: r
            };
            if (p !== "blank") {
                if (parseFloat(l) && parseFloat(o) + parseFloat(r)) {
                    q.mathbackground = (this.stack.env.color || "black")
                }
                m = h.mpadded(h.mrow()).With(q)
            } else {
                m = h.mspace().With(q)
            }
            this.Push(m)
        },
        MakeBig: function(l, o, m) {
            m *= f.p_height;
            m = String(m).replace(/(\.\d\d\d).+/, "$1") + "em";
            var n = this.GetDelimiter(l);
            this.Push(h.TeXAtom(h.mo(n).With({
                minsize: m,
                maxsize: m,
                fence: true,
                stretchy: true,
                symmetric: true
            })).With({
                texClass: o
            }))
        },
        BuildRel: function(l) {
            var m = this.ParseUpTo(l, "\\over");
            var n = this.ParseArg(l);
            this.Push(h.TeXAtom(h.munderover(n, null, m)).With({
                mclass: h.TEXCLASS.REL
            }))
        },
        HBox: function(l, m) {
            this.Push.apply(this, this.InternalMath(this.GetArgument(l), m))
        },
        FBox: function(l) {
            this.Push(h.menclose.apply(h, this.InternalMath(this.GetArgument(l))).With({
                notation: "box"
            }))
        },
        Not: function(l) {
            this.Push(b.not())
        },
        Dots: function(l) {
            this.Push(b.dots().With({
                ldots: this.mmlToken(h.mo(h.entity("#x2026")).With({
                    stretchy: false
                })),
                cdots: this.mmlToken(h.mo(h.entity("#x22EF")).With({
                    stretchy: false
                }))
            }))
        },
        Require: function(l) {
            var m = this.GetArgument(l).replace(/.*\//, "").replace(/[^a-z0-9_.-]/ig, "");
            this.Extension(null, m)
        },
        Extension: function(l, m, n) {
            if (l && !typeof(l) === "string") {
                l = l.name
            }
            m = d.extensionDir + "/" + m;
            if (!m.match(/\.js$/)) {
                m += ".js"
            }
            if (!i.loaded[i.fileURL(m)]) {
                if (l != null) {
                    delete f[n || "macros"][l.replace(/^\\/, "")]
                }
                c.RestartAfter(i.Require(m))
            }
        },
        Macro: function(n, q, p, r) {
            if (p) {
                var m = [];
                if (r != null) {
                    var l = this.GetBrackets(n);
                    m.push(l == null ? r: l)
                }
                for (var o = m.length; o < p; o++) {
                    m.push(this.GetArgument(n))
                }
                q = this.SubstituteArgs(m, q)
            }
            this.string = this.AddArgs(q, this.string.slice(this.i));
            this.i = 0;
            if (++this.macroCount > d.config.MAXMACROS) {
                d.Error(["MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"])
            }
        },
        Matrix: function(m, o, t, q, s, n, l, u) {
            var r = this.GetNext();
            if (r === "") {
                d.Error(["MissingArgFor", "Missing argument for %1", m])
            }
            if (r === "{") {
                this.i++
            } else {
                this.string = r + "}" + this.string.slice(this.i + 1);
                this.i = 0
            }
            var p = b.array().With({
                requireClose: true,
                arraydef: {
                    rowspacing: (n || "4pt"),
                    columnspacing: (s || "1em")
                }
            });
            if (u) {
                p.isCases = true
            }
            if (o || t) {
                p.open = o;
                p.close = t
            }
            if (l === "D") {
                p.arraydef.displaystyle = true
            }
            if (q != null) {
                p.arraydef.columnalign = q
            }
            this.Push(p)
        },
        Entry: function(o) {
            this.Push(b.cell().With({
                isEntry: true,
                name: o
            }));
            if (this.stack.Top().isCases) {
                var n = this.string;
                var r = 0,
                    p = this.i,
                    l = n.length;
                while (p < l) {
                    var s = n.charAt(p);
                    if (s === "{") {
                        r++;
                        p++
                    } else {
                        if (s === "}") {
                            if (r === 0) {
                                l = 0
                            } else {
                                r--;
                                p++
                            }
                        } else {
                            if (s === "&" && r === 0) {
                                d.Error(["ExtraAlignTab", "Extra alignment tab in \\cases text"])
                            } else {
                                if (s === "\\") {
                                    if (n.substr(p).match(/^((\\cr)[^a-zA-Z]|\\\\)/)) {
                                        l = 0
                                    } else {
                                        p += 2
                                    }
                                } else {
                                    p++
                                }
                            }
                        }
                    }
                }
                var q = n.substr(this.i, p - this.i);
                if (!q.match(/^\s*\\text[^a-zA-Z]/)) {
                    this.Push.apply(this, this.InternalMath(q));
                    this.i = p
                }
            }
        },
        Cr: function(l) {
            this.Push(b.cell().With({
                isCR: true,
                name: l
            }))
        },
        CrLaTeX: function(l) {
            var p;
            if (this.string.charAt(this.i) === "[") {
                p = this.GetBrackets(l, "").replace(/ /g, "");
                if (p && !p.match(/^((-?(\.\d+|\d+(\.\d*)?))(pt|em|ex|mu|mm|cm|in|pc))$/)) {
                    d.Error(["BracketMustBeDimension", "Bracket argument to %1 must be a dimension", l])
                }
            }
            this.Push(b.cell().With({
                isCR: true,
                name: l,
                linebreak: true
            }));
            var o = this.stack.Top();
            if (o.isa(b.array)) {
                if (p && o.arraydef.rowspacing) {
                    var m = o.arraydef.rowspacing.split(/ /);
                    if (!o.rowspacing) {
                        o.rowspacing = this.dimen2em(m[0])
                    }
                    while (m.length < o.table.length) {
                        m.push(this.Em(o.rowspacing))
                    }
                    m[o.table.length - 1] = this.Em(Math.max(0, o.rowspacing + this.dimen2em(p)));
                    o.arraydef.rowspacing = m.join(" ")
                }
            } else {
                if (p) {
                    this.Push(h.mspace().With({
                        depth: p
                    }))
                }
                this.Push(h.mo().With({
                    linebreak: h.LINEBREAK.NEWLINE
                }))
            }
        },
        emPerInch: 7.2,
        dimen2em: function(p) {
            var n = p.match(/^(-?(?:\.\d+|\d+(?:\.\d*)?))(pt|em|ex|mu|pc|in|mm|cm)/);
            var l = parseFloat(n[1] || "1"),
                o = n[2];
            if (o === "em") {
                return l
            }
            if (o === "ex") {
                return l * 0.43
            }
            if (o === "pt") {
                return l / 10
            }
            if (o === "pc") {
                return l * 1.2
            }
            if (o === "in") {
                return l * this.emPerInch
            }
            if (o === "cm") {
                return l * this.emPerInch / 2.54
            }
            if (o === "mm") {
                return l * this.emPerInch / 25.4
            }
            if (o === "mu") {
                return l / 18
            }
            return 0
        },
        Em: function(l) {
            if (Math.abs(l) < 0.0006) {
                return "0em"
            }
            return l.toFixed(3).replace(/\.?0+$/, "") + "em"
        },
        HLine: function(m, n) {
            if (n == null) {
                n = "solid"
            }
            var o = this.stack.Top();
            if (!o.isa(b.array) || o.data.length) {
                d.Error(["Misplaced", "Misplaced %1", m])
            }
            if (o.table.length == 0) {
                o.frame.push("top")
            } else {
                var l = (o.arraydef.rowlines ? o.arraydef.rowlines.split(/ /) : []);
                while (l.length < o.table.length) {
                    l.push("none")
                }
                l[o.table.length - 1] = n;
                o.arraydef.rowlines = l.join(" ")
            }
        },
        Begin: function(m) {
            var n = this.GetArgument(m);
            if (n.match(/[^a-z*]/i)) {
                d.Error(["InvalidEnv", "Invalid environment name '%1'", n])
            }
            var o = this.envFindName(n);
            if (!o) {
                d.Error(["UnknownEnv", "Unknown environment '%1'", n])
            }
            if (++this.macroCount > d.config.MAXMACROS) {
                d.Error(["MaxMacroSub2", "MathJax maximum substitution count exceeded; is there a recursive latex environment?"])
            }
            if (! (o instanceof Array)) {
                o = [o]
            }
            var l = b.begin().With({
                name: n,
                end: o[1],
                parse: this
            });
            if (o[0] && this[o[0]]) {
                l = this[o[0]].apply(this, [l].concat(o.slice(2)))
            }
            this.Push(l)
        },
        End: function(l) {
            this.Push(b.end().With({
                name: this.GetArgument(l)
            }))
        },
        envFindName: function(l) {
            return f.environment[l]
        },
        Equation: function(l, m) {
            return m
        },
        ExtensionEnv: function(m, l) {
            this.Extension(m.name, l, "environment")
        },
        Array: function(m, o, t, r, s, n, l, p) {
            if (!r) {
                r = this.GetArgument("\\begin{" + m.name + "}")
            }
            var u = ("c" + r).replace(/[^clr|:]/g, "").replace(/[^|:]([|:])+/g, "$1");
            r = r.replace(/[^clr]/g, "").split("").join(" ");
            r = r.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
            var q = b.array().With({
                arraydef: {
                    columnalign: r,
                    columnspacing: (s || "1em"),
                    rowspacing: (n || "4pt")
                }
            });
            if (u.match(/[|:]/)) {
                if (u.charAt(0).match(/[|:]/)) {
                    q.frame.push("left");
                    q.frame.dashed = u.charAt(0) === ":"
                }
                if (u.charAt(u.length - 1).match(/[|:]/)) {
                    q.frame.push("right")
                }
                u = u.substr(1, u.length - 2);
                q.arraydef.columnlines = u.split("").join(" ").replace(/[^|: ]/g, "none").replace(/\|/g, "solid").replace(/:/g, "dashed")
            }
            if (o) {
                q.open = this.convertDelimiter(o)
            }
            if (t) {
                q.close = this.convertDelimiter(t)
            }
            if (l === "D") {
                q.arraydef.displaystyle = true
            } else {
                if (l) {
                    q.arraydef.displaystyle = false
                }
            }
            if (l === "S") {
                q.arraydef.scriptlevel = 1
            }
            if (p) {
                q.arraydef.useHeight = false
            }
            this.Push(m);
            return q
        },
        AlignedArray: function(l) {
            var m = this.GetBrackets("\\begin{" + l.name + "}");
            return this.setArrayAlign(this.Array.apply(this, arguments), m)
        },
        setArrayAlign: function(m, l) {
            l = this.trimSpaces(l || "");
            if (l === "t") {
                m.arraydef.align = "baseline 1"
            } else {
                if (l === "b") {
                    m.arraydef.align = "baseline -1"
                } else {
                    if (l === "c") {
                        m.arraydef.align = "center"
                    } else {
                        if (l) {
                            m.arraydef.align = l
                        }
                    }
                }
            }
            return m
        },
        convertDelimiter: function(l) {
            if (l) {
                l = f.delimiter[l]
            }
            if (l == null) {
                return null
            }
            if (l instanceof Array) {
                l = l[0]
            }
            if (l.length === 4) {
                l = String.fromCharCode(parseInt(l, 16))
            }
            return l
        },
        trimSpaces: function(l) {
            if (typeof(l) != "string") {
                return l
            }
            return l.replace(/^\s+|\s+$/g, "")
        },
        nextIsSpace: function() {
            return this.string.charAt(this.i).match(/[ \n\r\t]/)
        },
        GetNext: function() {
            while (this.nextIsSpace()) {
                this.i++
            }
            return this.string.charAt(this.i)
        },
        GetCS: function() {
            var l = this.string.slice(this.i).match(/^([a-z]+|.) ?/i);
            if (l) {
                this.i += l[1].length;
                return l[1]
            } else {
                this.i++;
                return " "
            }
        },
        GetArgument: function(m, n) {
            switch (this.GetNext()) {
                case "":
                    if (!n) {
                        d.Error(["MissingArgFor", "Missing argument for %1", m])
                    }
                    return null;
                case "}":
                    if (!n) {
                        d.Error(["ExtraCloseMissingOpen", "Extra close brace or missing open brace"])
                    }
                    return null;
                case "\\":
                    this.i++;
                    return "\\" + this.GetCS();
                case "{":
                    var l = ++this.i,
                        o = 1;
                    while (this.i < this.string.length) {
                        switch (this.string.charAt(this.i++)) {
                            case "\\":
                                this.i++;
                                break;
                            case "{":
                                o++;
                                break;
                            case "}":
                                if (--o == 0) {
                                    return this.string.slice(l, this.i - 1)
                                }
                                break
                        }
                    }
                    d.Error(["MissingCloseBrace", "Missing close brace"]);
                    break
            }
            return this.string.charAt(this.i++)
        },
        GetBrackets: function(m, o) {
            if (this.GetNext() != "[") {
                return o
            }
            var l = ++this.i,
                n = 0;
            while (this.i < this.string.length) {
                switch (this.string.charAt(this.i++)) {
                    case "{":
                        n++;
                        break;
                    case "\\":
                        this.i++;
                        break;
                    case "}":
                        if (n--<=0) {
                            d.Error(["ExtraCloseLooking", "Extra close brace while looking for %1", "']'"])
                        }
                        break;
                    case "]":
                        if (n == 0) {
                            return this.string.slice(l, this.i - 1)
                        }
                        break
                }
            }
            d.Error(["MissingCloseBracket", "Couldn't find closing ']' for argument to %1", m])
        },
        GetDelimiter: function(l) {
            while (this.nextIsSpace()) {
                this.i++
            }
            var m = this.string.charAt(this.i);
            if (this.i < this.string.length) {
                this.i++;
                if (m == "\\") {
                    m += this.GetCS(l)
                }
                if (f.delimiter[m] != null) {
                    return this.convertDelimiter(m)
                }
            }
            d.Error(["MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", l])
        },
        GetDimen: function(m) {
            var n;
            if (this.nextIsSpace()) {
                this.i++
            }
            if (this.string.charAt(this.i) == "{") {
                n = this.GetArgument(m);
                if (n.match(/^\s*([-+]?(\.\d+|\d+(\.\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/)) {
                    return n.replace(/ /g, "")
                }
            } else {
                n = this.string.slice(this.i);
                var l = n.match(/^\s*(([-+]?(\.\d+|\d+(\.\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)) ?/);
                if (l) {
                    this.i += l[0].length;
                    return l[1].replace(/ /g, "")
                }
            }
            d.Error(["MissingDimOrUnits", "Missing dimension or its units for %1", m])
        },
        GetUpTo: function(n, o) {
            while (this.nextIsSpace()) {
                this.i++
            }
            var m = this.i,
                l, q, p = 0;
            while (this.i < this.string.length) {
                l = this.i;
                q = this.string.charAt(this.i++);
                switch (q) {
                    case "\\":
                        q += this.GetCS();
                        break;
                    case "{":
                        p++;
                        break;
                    case "}":
                        if (p == 0) {
                            d.Error(["ExtraCloseLooking", "Extra close brace while looking for %1", o])
                        }
                        p--;
                        break
                }
                if (p == 0 && q == o) {
                    return this.string.slice(m, l)
                }
            }
            d.Error(["TokenNotFoundForCommand", "Couldn't find %1 for %2", o, n])
        },
        ParseArg: function(l) {
            return d.Parse(this.GetArgument(l), this.stack.env).mml()
        },
        ParseUpTo: function(l, m) {
            return d.Parse(this.GetUpTo(l, m), this.stack.env).mml()
        },
        InternalMath: function(q, s) {
            var p = {
                displaystyle: false
            };
            if (s != null) {
                p.scriptlevel = s
            }
            if (this.stack.env.font) {
                p.mathvariant = this.stack.env.font
            }
            if (!q.match(/\\?\$|\\\(|\\(eq)?ref\s*\{/)) {
                return [this.InternalText(q, p)]
            }
            var o = 0,
                l = 0,
                r, n = "";
            var m = [];
            while (o < q.length) {
                r = q.charAt(o++);
                if (r === "$") {
                    if (n === "$") {
                        m.push(h.TeXAtom(d.Parse(q.slice(l, o - 1), {}).mml().With(p)));
                        n = "";
                        l = o
                    } else {
                        if (n === "") {
                            if (l < o - 1) {
                                m.push(this.InternalText(q.slice(l, o - 1), p))
                            }
                            n = "$";
                            l = o
                        }
                    }
                } else {
                    if (r === "}" && n === "}") {
                        m.push(h.TeXAtom(d.Parse(q.slice(l, o), {}).mml().With(p)));
                        n = "";
                        l = o
                    } else {
                        if (r === "\\") {
                            if (n === "" && q.substr(o).match(/^(eq)?ref\s*\{/)) {
                                if (l < o - 1) {
                                    m.push(this.InternalText(q.slice(l, o - 1), p))
                                }
                                n = "}";
                                l = o - 1
                            } else {
                                r = q.charAt(o++);
                                if (r === "(" && n === "") {
                                    if (l < o - 2) {
                                        m.push(this.InternalText(q.slice(l, o - 2), p))
                                    }
                                    n = ")";
                                    l = o
                                } else {
                                    if (r === ")" && n === ")") {
                                        m.push(h.TeXAtom(d.Parse(q.slice(l, o - 2), {}).mml().With(p)));
                                        n = "";
                                        l = o
                                    } else {
                                        if (r === "$" && n === "") {
                                            o--;
                                            q = q.substr(0, o - 1) + q.substr(o)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (n !== "") {
                d.Error(["MathNotTerminated", "Math not terminated in text box"])
            }
            if (l < q.length) {
                m.push(this.InternalText(q.slice(l), p))
            }
            return m
        },
        InternalText: function(m, l) {
            m = m.replace(/^\s+/, g).replace(/\s+$/, g);
            return h.mtext(h.chars(m)).With(l)
        },
        SubstituteArgs: function(m, l) {
            var p = "";
            var o = "";
            var q;
            var n = 0;
            while (n < l.length) {
                q = l.charAt(n++);
                if (q === "\\") {
                    p += q + l.charAt(n++)
                } else {
                    if (q === "#") {
                        q = l.charAt(n++);
                        if (q === "#") {
                            p += q
                        } else {
                            if (!q.match(/[1-9]/) || q > m.length) {
                                d.Error(["IllegalMacroParam", "Illegal macro parameter reference"])
                            }
                            o = this.AddArgs(this.AddArgs(o, p), m[q - 1]);
                            p = ""
                        }
                    } else {
                        p += q
                    }
                }
            }
            return this.AddArgs(o, p)
        },
        AddArgs: function(m, l) {
            if (l.match(/^[a-z]/i) && m.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {
                m += " "
            }
            if (m.length + l.length > d.config.MAXBUFFER) {
                d.Error(["MaxBufferSize", "MathJax internal buffer size exceeded; is there a recursive macro call?"])
            }
            return m + l
        }
    });
    d.Augment({
        Stack: e,
        Parse: a,
        Definitions: f,
        Startup: k,
        config: {
            MAXMACROS: 10000,
            MAXBUFFER: 5 * 1024
        },
        sourceMenuTitle: ["TeXCommands", "TeX Commands"],
        prefilterHooks: MathJax.Callback.Hooks(true),
        postfilterHooks: MathJax.Callback.Hooks(true),
        Config: function() {
            this.SUPER(arguments).Config.apply(this, arguments);
            if (this.config.equationNumbers.autoNumber !== "none") {
                if (!this.config.extensions) {
                    this.config.extensions = []
                }
                this.config.extensions.push("AMSmath.js")
            }
        },
        Translate: function(l) {
            var m, n = false,
                p = MathJax.HTML.getScript(l);
            var r = (l.type.replace(/\n/g, " ").match(/(;|\s|\n)mode\s*=\s*display(;|\s|\n|$)/) != null);
            var q = {
                math: p,
                display: r,
                script: l
            };
            this.prefilterHooks.Execute(q);
            p = q.math;
            try {
                m = d.Parse(p).mml()
            } catch(o) {
                if (!o.texError) {
                    throw o
                }
                m = this.formatError(o, p, r, l);
                n = true
            }
            if (m.inferred) {
                m = h.apply(MathJax.ElementJax, m.data)
            } else {
                m = h(m)
            }
            if (r) {
                m.root.display = "block"
            }
            if (n) {
                m.texError = true
            }
            q.math = m;
            this.postfilterHooks.Execute(q);
            return q.math
        },
        prefilterMath: function(m, n, l) {
            return m
        },
        postfilterMath: function(m, n, l) {
            this.combineRelations(m.root);
            return m
        },
        formatError: function(o, n, p, l) {
            var m = o.message.replace(/\n.*/, "");
            c.signal.Post(["TeX Jax - parse error", m, n, p, l]);
            return h.Error(m)
        },
        Error: function(l) {
            if (l instanceof Array) {
                l = j.apply(j, l)
            }
            throw c.Insert(Error(l), {
                texError: true
            })
        },
        Macro: function(l, m, n) {
            f.macros[l] = ["Macro"].concat([].slice.call(arguments, 1));
            f.macros[l].isUser = true
        },
        fenced: function(n, m, o) {
            var l = h.mrow();
            l.open = n;
            l.close = o;
            if (n) {
                l.Append(h.mo(n).With({
                    fence: true,
                    stretchy: true,
                    texClass: h.TEXCLASS.OPEN
                }))
            }
            if (m.type === "mrow") {
                l.Append.apply(l, m.data)
            } else {
                l.Append(m)
            }
            if (o) {
                l.Append(h.mo(o).With({
                    fence: true,
                    stretchy: true,
                    texClass: h.TEXCLASS.CLOSE
                }))
            }
            return l
        },
        combineRelations: function(p) {
            var q, l, o, n;
            for (q = 0, l = p.data.length; q < l; q++) {
                if (p.data[q]) {
                    if (p.isa(h.mrow)) {
                        while (q + 1 < l && (o = p.data[q]) && (n = p.data[q + 1]) && o.isa(h.mo) && n.isa(h.mo) && o.Get("texClass") === h.TEXCLASS.REL && n.Get("texClass") === h.TEXCLASS.REL) {
                            if (o.variantForm == n.variantForm && o.Get("mathvariant") == n.Get("mathvariant") && o.style == n.style && o["class"] == n["class"] && !o.id && !n.id) {
                                o.Append.apply(o, n.data);
                                p.data.splice(q + 1, 1);
                                l--
                            } else {
                                o.rspace = n.lspace = "0pt";
                                q++
                            }
                        }
                    }
                    if (!p.data[q].isToken) {
                        this.combineRelations(p.data[q])
                    }
                }
            }
        }
    });
    d.prefilterHooks.Add(function(l) {
        l.math = d.prefilterMath(l.math, l.display, l.script)
    });
    d.postfilterHooks.Add(function(l) {
        l.math = d.postfilterMath(l.math, l.display, l.script)
    });
    d.loadComplete("jax.js")
})(MathJax.InputJax.TeX, MathJax.Hub, MathJax.Ajax);
MathJax.Extension["TeX/AMSmath"] = {
    version: "2.3",
    number: 0,
    startNumber: 0,
    labels: {},
    eqlabels: {},
    refs: []
};
MathJax.Hub.Register.StartupHook("TeX Jax Ready",
    function() {
        var b = MathJax.ElementJax.mml,
            g = MathJax.InputJax.TeX,
            f = MathJax.Extension["TeX/AMSmath"];
        var d = g.Definitions,
            e = g.Stack.Item,
            a = g.config.equationNumbers;
        var c = function(j) {
            var l = [];
            for (var k = 0,
                     h = j.length; k < h; k++) {
                l[k] = g.Parse.prototype.Em(j[k])
            }
            return l.join(" ")
        };
        d.Add({
                mathchar0mo: {
                    iiiint: ["2A0C", {
                        texClass: b.TEXCLASS.OP
                    }]
                },
                macros: {
                    mathring: ["Accent", "2DA"],
                    nobreakspace: "Tilde",
                    negmedspace: ["Spacer", b.LENGTH.NEGATIVEMEDIUMMATHSPACE],
                    negthickspace: ["Spacer", b.LENGTH.NEGATIVETHICKMATHSPACE],
                    idotsint: ["MultiIntegral", "\\int\\cdots\\int"],
                    dddot: ["Accent", "20DB"],
                    ddddot: ["Accent", "20DC"],
                    sideset: ["Macro", "\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}", 3],
                    boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
                    tag: "HandleTag",
                    notag: "HandleNoTag",
                    label: "HandleLabel",
                    ref: "HandleRef",
                    eqref: ["HandleRef", true],
                    substack: ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1],
                    injlim: ["NamedOp", "inj&thinsp;lim"],
                    projlim: ["NamedOp", "proj&thinsp;lim"],
                    varliminf: ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],
                    varlimsup: ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],
                    varinjlim: ["Macro", "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],
                    varprojlim: ["Macro", "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],
                    DeclareMathOperator: "HandleDeclareOp",
                    operatorname: "HandleOperatorName",
                    genfrac: "Genfrac",
                    frac: ["Genfrac", "", "", "", ""],
                    tfrac: ["Genfrac", "", "", "", 1],
                    dfrac: ["Genfrac", "", "", "", 0],
                    binom: ["Genfrac", "(", ")", "0em", ""],
                    tbinom: ["Genfrac", "(", ")", "0em", 1],
                    dbinom: ["Genfrac", "(", ")", "0em", 0],
                    cfrac: "CFrac",
                    shoveleft: ["HandleShove", b.ALIGN.LEFT],
                    shoveright: ["HandleShove", b.ALIGN.RIGHT],
                    xrightarrow: ["xArrow", 8594, 5, 6],
                    xleftarrow: ["xArrow", 8592, 7, 3]
                },
                environment: {
                    align: ["AMSarray", null, true, true, "rlrlrlrlrlrl", c([5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18])],
                    "align*": ["AMSarray", null, false, true, "rlrlrlrlrlrl", c([5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18])],
                    multline: ["Multline", null, true],
                    "multline*": ["Multline", null, false],
                    split: ["AMSarray", null, false, false, "rl", c([5 / 18])],
                    gather: ["AMSarray", null, true, true, "c"],
                    "gather*": ["AMSarray", null, false, true, "c"],
                    alignat: ["AlignAt", null, true, true],
                    "alignat*": ["AlignAt", null, false, true],
                    alignedat: ["AlignAt", null, false, false],
                    aligned: ["AlignedArray", null, null, null, "rlrlrlrlrlrl", c([5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18, 2, 5 / 18]), ".5em", "D"],
                    gathered: ["AlignedArray", null, null, null, "c", null, ".5em", "D"],
                    subarray: ["Array", null, null, null, null, c([0, 0, 0, 0]), "0.1em", "S", 1],
                    smallmatrix: ["Array", null, null, null, "c", c([1 / 3]), ".2em", "S", 1],
                    equation: ["EquationBegin", "Equation", true],
                    "equation*": ["EquationBegin", "EquationStar", false],
                    eqnarray: ["AMSarray", null, true, true, "rcl", b.LENGTH.THICKMATHSPACE, ".5em"],
                    "eqnarray*": ["AMSarray", null, false, true, "rcl", b.LENGTH.THICKMATHSPACE, ".5em"]
                },
                delimiter: {
                    "\\lvert": ["2223", {
                        texClass: b.TEXCLASS.OPEN
                    }],
                    "\\rvert": ["2223", {
                        texClass: b.TEXCLASS.CLOSE
                    }],
                    "\\lVert": ["2225", {
                        texClass: b.TEXCLASS.OPEN
                    }],
                    "\\rVert": ["2225", {
                        texClass: b.TEXCLASS.CLOSE
                    }]
                }
            },
            null, true);
        g.Parse.Augment({
            HandleTag: function(j) {
                var l = this.GetStar();
                var i = this.trimSpaces(this.GetArgument(j)),
                    h = i;
                if (!l) {
                    i = a.formatTag(i)
                }
                var k = this.stack.global;
                k.tagID = h;
                if (k.notags) {
                    g.Error(["CommandNotAllowedInEnv", "%1 not allowed in %2 environment", j, k.notags])
                }
                if (k.tag) {
                    g.Error(["MultipleCommand", "Multiple %1", j])
                }
                k.tag = b.mtd.apply(b, this.InternalMath(i)).With({
                    id: a.formatID(h)
                })
            },
            HandleNoTag: function(h) {
                if (this.stack.global.tag) {
                    delete this.stack.global.tag
                }
                this.stack.global.notag = true
            },
            HandleLabel: function(i) {
                var j = this.stack.global,
                    h = this.GetArgument(i);
                if (h === "") {
                    return
                }
                if (!f.refUpdate) {
                    if (j.label) {
                        g.Error(["MultipleCommand", "Multiple %1", i])
                    }
                    j.label = h;
                    if (f.labels[h] || f.eqlabels[h]) {
                        g.Error(["MultipleLabel", "Label '%1' multiply defined", h])
                    }
                    f.eqlabels[h] = "???"
                }
            },
            HandleRef: function(j, l) {
                var i = this.GetArgument(j);
                var k = f.labels[i] || f.eqlabels[i];
                if (!k) {
                    k = "??";
                    f.badref = !f.refUpdate
                }
                var h = k;
                if (l) {
                    h = a.formatTag(h)
                }
                if (a.useLabelIds) {
                    k = i
                }
                this.Push(b.mrow.apply(b, this.InternalMath(h)).With({
                    href: a.formatURL(a.formatID(k)),
                    "class": "MathJax_ref"
                }))
            },
            HandleDeclareOp: function(i) {
                var h = (this.GetStar() ? "\\limits": "");
                var j = this.trimSpaces(this.GetArgument(i));
                if (j.charAt(0) == "\\") {
                    j = j.substr(1)
                }
                var k = this.GetArgument(i);
                k = k.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}");
                g.Definitions.macros[j] = ["Macro", "\\mathop{\\rm " + k + "}" + h]
            },
            HandleOperatorName: function(i) {
                var h = (this.GetStar() ? "\\limits": "\\nolimits");
                var j = this.trimSpaces(this.GetArgument(i));
                j = j.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}");
                this.string = "\\mathop{\\rm " + j + "}" + h + " " + this.string.slice(this.i);
                this.i = 0
            },
            HandleShove: function(i, h) {
                var j = this.stack.Top();
                if (j.type !== "multline" || j.data.length) {
                    g.Error(["CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", i])
                }
                j.data.shove = h
            },
            CFrac: function(k) {
                var h = this.trimSpaces(this.GetBrackets(k, "")),
                    j = this.GetArgument(k),
                    l = this.GetArgument(k);
                var i = b.mfrac(g.Parse("\\strut\\textstyle{" + j + "}", this.stack.env).mml(), g.Parse("\\strut\\textstyle{" + l + "}", this.stack.env).mml());
                h = ({
                    l: b.ALIGN.LEFT,
                    r: b.ALIGN.RIGHT,
                    "": ""
                })[h];
                if (h == null) {
                    g.Error(["IllegalAlign", "Illegal alignment specified in %1", k])
                }
                if (h) {
                    i.numalign = i.denomalign = h
                }
                this.Push(i)
            },
            Genfrac: function(i, k, p, m, h) {
                if (k == null) {
                    k = this.GetDelimiterArg(i)
                } else {
                    k = this.convertDelimiter(k)
                }
                if (p == null) {
                    p = this.GetDelimiterArg(i)
                } else {
                    p = this.convertDelimiter(p)
                }
                if (m == null) {
                    m = this.GetArgument(i)
                }
                if (h == null) {
                    h = this.trimSpaces(this.GetArgument(i))
                }
                var l = this.ParseArg(i);
                var o = this.ParseArg(i);
                var j = b.mfrac(l, o);
                if (m !== "") {
                    j.linethickness = m
                }
                if (k || p) {
                    j = g.fenced(k, j, p)
                }
                if (h !== "") {
                    var n = (["D", "T", "S", "SS"])[h];
                    if (n == null) {
                        g.Error(["BadMathStyleFor", "Bad math style for %1", i])
                    }
                    j = b.mstyle(j);
                    if (n === "D") {
                        j.displaystyle = true;
                        j.scriptlevel = 0
                    } else {
                        j.displaystyle = false;
                        j.scriptlevel = h - 1
                    }
                }
                this.Push(j)
            },
            Multline: function(i, h) {
                this.Push(i);
                this.checkEqnEnv();
                return e.multline(h, this.stack).With({
                    arraydef: {
                        displaystyle: true,
                        rowspacing: ".5em",
                        width: g.config.MultLineWidth,
                        columnwidth: "100%",
                        side: g.config.TagSide,
                        minlabelspacing: g.config.TagIndent
                    }
                })
            },
            AMSarray: function(j, i, h, l, k) {
                this.Push(j);
                if (h) {
                    this.checkEqnEnv()
                }
                l = l.replace(/[^clr]/g, "").split("").join(" ");
                l = l.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
                return e.AMSarray(j.name, i, h, this.stack).With({
                    arraydef: {
                        displaystyle: true,
                        rowspacing: ".5em",
                        columnalign: l,
                        columnspacing: (k || "1em"),
                        rowspacing: "3pt",
                        side: g.config.TagSide,
                        minlabelspacing: g.config.TagIndent
                    }
                })
            },
            AlignAt: function(k, i, h) {
                var p, j, o = "",
                    m = [];
                if (!h) {
                    j = this.GetBrackets("\\begin{" + k.name + "}")
                }
                p = this.GetArgument("\\begin{" + k.name + "}");
                if (p.match(/[^0-9]/)) {
                    g.Error(["PositiveIntegerArg", "Argument to %1 must me a positive integer", "\\begin{" + k.name + "}"])
                }
                while (p > 0) {
                    o += "rl";
                    m.push("0em 0em");
                    p--
                }
                m = m.join(" ");
                if (h) {
                    return this.AMSarray(k, i, h, o, m)
                }
                var l = this.Array.call(this, k, null, null, o, m, ".5em", "D");
                return this.setArrayAlign(l, j)
            },
            EquationBegin: function(h, i) {
                this.checkEqnEnv();
                this.stack.global.forcetag = (i && a.autoNumber !== "none");
                return h
            },
            EquationStar: function(h, i) {
                this.stack.global.tagged = true;
                return i
            },
            checkEqnEnv: function() {
                if (this.stack.global.eqnenv) {
                    g.Error(["ErroneousNestingEq", "Erroneous nesting of equation structures"])
                }
                this.stack.global.eqnenv = true
            },
            MultiIntegral: function(h, l) {
                var k = this.GetNext();
                if (k === "\\") {
                    var j = this.i;
                    k = this.GetArgument(h);
                    this.i = j;
                    if (k === "\\limits") {
                        if (h === "\\idotsint") {
                            l = "\\!\\!\\mathop{\\,\\," + l + "}"
                        } else {
                            l = "\\!\\!\\!\\mathop{\\,\\,\\," + l + "}"
                        }
                    }
                }
                this.string = l + " " + this.string.slice(this.i);
                this.i = 0
            },
            xArrow: function(j, n, m, h) {
                var k = {
                    width: "+" + (m + h) + "mu",
                    lspace: m + "mu"
                };
                var o = this.GetBrackets(j),
                    p = this.ParseArg(j);
                var q = b.mo(b.chars(String.fromCharCode(n))).With({
                    stretchy: true,
                    texClass: b.TEXCLASS.REL
                });
                var i = b.munderover(q);
                i.SetData(i.over, b.mpadded(p).With(k).With({
                    voffset: ".15em"
                }));
                if (o) {
                    o = g.Parse(o, this.stack.env).mml();
                    i.SetData(i.under, b.mpadded(o).With(k).With({
                        voffset: "-.24em"
                    }))
                }
                this.Push(i)
            },
            GetDelimiterArg: function(h) {
                var i = this.trimSpaces(this.GetArgument(h));
                if (i == "") {
                    return null
                }
                if (d.delimiter[i] == null) {
                    g.Error(["MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", h])
                }
                return this.convertDelimiter(i)
            },
            GetStar: function() {
                var h = (this.GetNext() === "*");
                if (h) {
                    this.i++
                }
                return h
            }
        });
        e.Augment({
            autoTag: function() {
                var i = this.global;
                if (!i.notag) {
                    f.number++;
                    i.tagID = a.formatNumber(f.number.toString());
                    var h = g.Parse("\\text{" + a.formatTag(i.tagID) + "}", {}).mml();
                    i.tag = b.mtd(h.With({
                        id: a.formatID(i.tagID)
                    }))
                }
            },
            getTag: function() {
                var i = this.global,
                    h = i.tag;
                i.tagged = true;
                if (i.label) {
                    f.eqlabels[i.label] = i.tagID;
                    if (a.useLabelIds) {
                        h.id = a.formatID(i.label)
                    }
                }
                delete i.tag;
                delete i.tagID;
                delete i.label;
                return h
            }
        });
        e.multline = e.array.Subclass({
            type: "multline",
            Init: function(i, h) {
                this.SUPER(arguments).Init.apply(this);
                this.numbered = (i && a.autoNumber !== "none");
                this.save = {
                    notag: h.global.notag
                };
                h.global.tagged = !i && !h.global.forcetag
            },
            EndEntry: function() {
                var h = b.mtd.apply(b, this.data);
                if (this.data.shove) {
                    h.columnalign = this.data.shove
                }
                this.row.push(h);
                this.data = []
            },
            EndRow: function() {
                if (this.row.length != 1) {
                    g.Error(["MultlineRowsOneCol", "The rows within the %1 environment must have exactly one column", "multline"])
                }
                this.table.push(this.row);
                this.row = []
            },
            EndTable: function() {
                this.SUPER(arguments).EndTable.call(this);
                if (this.table.length) {
                    var j = this.table.length - 1,
                        l, k = -1;
                    if (!this.table[0][0].columnalign) {
                        this.table[0][0].columnalign = b.ALIGN.LEFT
                    }
                    if (!this.table[j][0].columnalign) {
                        this.table[j][0].columnalign = b.ALIGN.RIGHT
                    }
                    if (!this.global.tag && this.numbered) {
                        this.autoTag()
                    }
                    if (this.global.tag && !this.global.notags) {
                        k = (this.arraydef.side === "left" ? 0 : this.table.length - 1);
                        this.table[k] = [this.getTag()].concat(this.table[k])
                    }
                    for (l = 0, j = this.table.length; l < j; l++) {
                        var h = (l === k ? b.mlabeledtr: b.mtr);
                        this.table[l] = h.apply(b, this.table[l])
                    }
                }
                this.global.notag = this.save.notag
            }
        });
        e.AMSarray = e.array.Subclass({
            type: "AMSarray",
            Init: function(k, j, i, h) {
                this.SUPER(arguments).Init.apply(this);
                this.numbered = (j && a.autoNumber !== "none");
                this.save = {
                    notags: h.global.notags,
                    notag: h.global.notag
                };
                h.global.notags = (i ? null: k);
                h.global.tagged = !j && !h.global.forcetag
            },
            EndRow: function() {
                var h = b.mtr;
                if (!this.global.tag && this.numbered) {
                    this.autoTag()
                }
                if (this.global.tag && !this.global.notags) {
                    this.row = [this.getTag()].concat(this.row);
                    h = b.mlabeledtr
                }
                if (this.numbered) {
                    delete this.global.notag
                }
                this.table.push(h.apply(b, this.row));
                this.row = []
            },
            EndTable: function() {
                this.SUPER(arguments).EndTable.call(this);
                this.global.notags = this.save.notags;
                this.global.notag = this.save.notag
            }
        });
        e.start.Augment({
            oldCheckItem: e.start.prototype.checkItem,
            checkItem: function(j) {
                if (j.type === "stop") {
                    var h = this.mmlData(),
                        i = this.global;
                    if (f.display && !i.tag && !i.tagged && !i.isInner && (a.autoNumber === "all" || i.forcetag)) {
                        this.autoTag()
                    }
                    if (i.tag) {
                        var l = [this.getTag(), b.mtd(h)];
                        var k = {
                            side: g.config.TagSide,
                            minlabelspacing: g.config.TagIndent,
                            columnalign: h.displayAlign
                        };
                        if (h.displayAlign === b.INDENTALIGN.LEFT) {
                            k.width = "100%";
                            if (h.displayIndent && !String(h.displayIndent).match(/^0+(\.0*)?($|[a-z%])/)) {
                                k.columnwidth = h.displayIndent + " fit";
                                k.columnspacing = "0";
                                l = [l[0], b.mtd(), l[1]]
                            }
                        } else {
                            if (h.displayAlign === b.INDENTALIGN.RIGHT) {
                                k.width = "100%";
                                if (h.displayIndent && !String(h.displayIndent).match(/^0+(\.0*)?($|[a-z%])/)) {
                                    k.columnwidth = "fit " + h.displayIndent;
                                    k.columnspacing = "0";
                                    l[2] = b.mtd()
                                }
                            }
                        }
                        h = b.mtable(b.mlabeledtr.apply(b, l)).With(k)
                    }
                    return e.mml(h)
                }
                return this.oldCheckItem.call(this, j)
            }
        });
        g.prefilterHooks.Add(function(h) {
            f.display = h.display;
            f.number = f.startNumber;
            f.eqlabels = {};
            f.badref = false;
            if (f.refUpdate) {
                f.number = h.script.MathJax.startNumber
            }
        });
        g.postfilterHooks.Add(function(h) {
            h.script.MathJax.startNumber = f.startNumber;
            f.startNumber = f.number;
            MathJax.Hub.Insert(f.labels, f.eqlabels);
            if (f.badref && !h.math.texError) {
                f.refs.push(h.script)
            }
        });
        MathJax.Hub.Register.MessageHook("Begin Math Input",
            function() {
                f.refs = [];
                f.refUpdate = false
            });
        MathJax.Hub.Register.MessageHook("End Math Input",
            function(k) {
                if (f.refs.length) {
                    f.refUpdate = true;
                    for (var j = 0,
                             h = f.refs.length; j < h; j++) {
                        f.refs[j].MathJax.state = MathJax.ElementJax.STATE.UPDATE
                    }
                    return MathJax.Hub.processInput({
                        scripts: f.refs,
                        start: new Date().getTime(),
                        i: 0,
                        j: 0,
                        jax: {},
                        jaxIDs: []
                    })
                }
                return null
            });
        g.resetEquationNumbers = function(i, h) {
            f.startNumber = (i || 0);
            if (!h) {
                f.labels = {}
            }
        };
        MathJax.Hub.Startup.signal.Post("TeX AMSmath Ready")
    });
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");
MathJax.Extension["TeX/AMSsymbols"] = {
    version: "2.3"
};
MathJax.Hub.Register.StartupHook("TeX Jax Ready",
    function() {
        var a = MathJax.ElementJax.mml,
            b = MathJax.InputJax.TeX.Definitions;
        b.Add({
                mathchar0mi: {
                    digamma: "03DD",
                    varkappa: "03F0",
                    varGamma: ["0393", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varDelta: ["0394", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varTheta: ["0398", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varLambda: ["039B", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varXi: ["039E", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varPi: ["03A0", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varSigma: ["03A3", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varUpsilon: ["03A5", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varPhi: ["03A6", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varPsi: ["03A8", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    varOmega: ["03A9", {
                        mathvariant: a.VARIANT.ITALIC
                    }],
                    beth: "2136",
                    gimel: "2137",
                    daleth: "2138",
                    backprime: ["2035", {
                        variantForm: true
                    }],
                    hslash: "210F",
                    varnothing: ["2205", {
                        variantForm: true
                    }],
                    blacktriangle: "25B4",
                    triangledown: ["25BD", {
                        variantForm: true
                    }],
                    blacktriangledown: "25BE",
                    square: "25FB",
                    Box: "25FB",
                    blacksquare: "25FC",
                    lozenge: "25CA",
                    Diamond: "25CA",
                    blacklozenge: "29EB",
                    circledS: ["24C8", {
                        mathvariant: a.VARIANT.NORMAL
                    }],
                    bigstar: "2605",
                    sphericalangle: "2222",
                    measuredangle: "2221",
                    nexists: "2204",
                    complement: "2201",
                    mho: "2127",
                    eth: ["00F0", {
                        mathvariant: a.VARIANT.NORMAL
                    }],
                    Finv: "2132",
                    diagup: "2571",
                    Game: "2141",
                    diagdown: "2572",
                    Bbbk: ["006B", {
                        mathvariant: a.VARIANT.DOUBLESTRUCK
                    }],
                    yen: "00A5",
                    circledR: "00AE",
                    checkmark: "2713",
                    maltese: "2720"
                },
                mathchar0mo: {
                    dotplus: "2214",
                    ltimes: "22C9",
                    smallsetminus: "2216",
                    rtimes: "22CA",
                    Cap: "22D2",
                    doublecap: "22D2",
                    leftthreetimes: "22CB",
                    Cup: "22D3",
                    doublecup: "22D3",
                    rightthreetimes: "22CC",
                    barwedge: "22BC",
                    curlywedge: "22CF",
                    veebar: "22BB",
                    curlyvee: "22CE",
                    doublebarwedge: "2A5E",
                    boxminus: "229F",
                    circleddash: "229D",
                    boxtimes: "22A0",
                    circledast: "229B",
                    boxdot: "22A1",
                    circledcirc: "229A",
                    boxplus: "229E",
                    centerdot: "22C5",
                    divideontimes: "22C7",
                    intercal: "22BA",
                    leqq: "2266",
                    geqq: "2267",
                    leqslant: "2A7D",
                    geqslant: "2A7E",
                    eqslantless: "2A95",
                    eqslantgtr: "2A96",
                    lesssim: "2272",
                    gtrsim: "2273",
                    lessapprox: "2A85",
                    gtrapprox: "2A86",
                    approxeq: "224A",
                    lessdot: "22D6",
                    gtrdot: "22D7",
                    lll: "22D8",
                    llless: "22D8",
                    ggg: "22D9",
                    gggtr: "22D9",
                    lessgtr: "2276",
                    gtrless: "2277",
                    lesseqgtr: "22DA",
                    gtreqless: "22DB",
                    lesseqqgtr: "2A8B",
                    gtreqqless: "2A8C",
                    doteqdot: "2251",
                    Doteq: "2251",
                    eqcirc: "2256",
                    risingdotseq: "2253",
                    circeq: "2257",
                    fallingdotseq: "2252",
                    triangleq: "225C",
                    backsim: "223D",
                    thicksim: ["223C", {
                        variantForm: true
                    }],
                    backsimeq: "22CD",
                    thickapprox: ["2248", {
                        variantForm: true
                    }],
                    subseteqq: "2AC5",
                    supseteqq: "2AC6",
                    Subset: "22D0",
                    Supset: "22D1",
                    sqsubset: "228F",
                    sqsupset: "2290",
                    preccurlyeq: "227C",
                    succcurlyeq: "227D",
                    curlyeqprec: "22DE",
                    curlyeqsucc: "22DF",
                    precsim: "227E",
                    succsim: "227F",
                    precapprox: "2AB7",
                    succapprox: "2AB8",
                    vartriangleleft: "22B2",
                    lhd: "22B2",
                    vartriangleright: "22B3",
                    rhd: "22B3",
                    trianglelefteq: "22B4",
                    unlhd: "22B4",
                    trianglerighteq: "22B5",
                    unrhd: "22B5",
                    vDash: "22A8",
                    Vdash: "22A9",
                    Vvdash: "22AA",
                    smallsmile: ["2323", {
                        variantForm: true
                    }],
                    shortmid: ["2223", {
                        variantForm: true
                    }],
                    smallfrown: ["2322", {
                        variantForm: true
                    }],
                    shortparallel: ["2225", {
                        variantForm: true
                    }],
                    bumpeq: "224F",
                    between: "226C",
                    Bumpeq: "224E",
                    pitchfork: "22D4",
                    varpropto: "221D",
                    backepsilon: "220D",
                    blacktriangleleft: "25C2",
                    blacktriangleright: "25B8",
                    therefore: "2234",
                    because: "2235",
                    eqsim: "2242",
                    vartriangle: ["25B3", {
                        variantForm: true
                    }],
                    Join: "22C8",
                    nless: "226E",
                    ngtr: "226F",
                    nleq: "2270",
                    ngeq: "2271",
                    nleqslant: ["2A87", {
                        variantForm: true
                    }],
                    ngeqslant: ["2A88", {
                        variantForm: true
                    }],
                    nleqq: ["2270", {
                        variantForm: true
                    }],
                    ngeqq: ["2271", {
                        variantForm: true
                    }],
                    lneq: "2A87",
                    gneq: "2A88",
                    lneqq: "2268",
                    gneqq: "2269",
                    lvertneqq: ["2268", {
                        variantForm: true
                    }],
                    gvertneqq: ["2269", {
                        variantForm: true
                    }],
                    lnsim: "22E6",
                    gnsim: "22E7",
                    lnapprox: "2A89",
                    gnapprox: "2A8A",
                    nprec: "2280",
                    nsucc: "2281",
                    npreceq: ["22E0", {
                        variantForm: true
                    }],
                    nsucceq: ["22E1", {
                        variantForm: true
                    }],
                    precneqq: "2AB5",
                    succneqq: "2AB6",
                    precnsim: "22E8",
                    succnsim: "22E9",
                    precnapprox: "2AB9",
                    succnapprox: "2ABA",
                    nsim: "2241",
                    ncong: "2246",
                    nshortmid: ["2224", {
                        variantForm: true
                    }],
                    nshortparallel: ["2226", {
                        variantForm: true
                    }],
                    nmid: "2224",
                    nparallel: "2226",
                    nvdash: "22AC",
                    nvDash: "22AD",
                    nVdash: "22AE",
                    nVDash: "22AF",
                    ntriangleleft: "22EA",
                    ntriangleright: "22EB",
                    ntrianglelefteq: "22EC",
                    ntrianglerighteq: "22ED",
                    nsubseteq: "2288",
                    nsupseteq: "2289",
                    nsubseteqq: ["2288", {
                        variantForm: true
                    }],
                    nsupseteqq: ["2289", {
                        variantForm: true
                    }],
                    subsetneq: "228A",
                    supsetneq: "228B",
                    varsubsetneq: ["228A", {
                        variantForm: true
                    }],
                    varsupsetneq: ["228B", {
                        variantForm: true
                    }],
                    subsetneqq: "2ACB",
                    supsetneqq: "2ACC",
                    varsubsetneqq: ["2ACB", {
                        variantForm: true
                    }],
                    varsupsetneqq: ["2ACC", {
                        variantForm: true
                    }],
                    leftleftarrows: "21C7",
                    rightrightarrows: "21C9",
                    leftrightarrows: "21C6",
                    rightleftarrows: "21C4",
                    Lleftarrow: "21DA",
                    Rrightarrow: "21DB",
                    twoheadleftarrow: "219E",
                    twoheadrightarrow: "21A0",
                    leftarrowtail: "21A2",
                    rightarrowtail: "21A3",
                    looparrowleft: "21AB",
                    looparrowright: "21AC",
                    leftrightharpoons: "21CB",
                    rightleftharpoons: ["21CC", {
                        variantForm: true
                    }],
                    curvearrowleft: "21B6",
                    curvearrowright: "21B7",
                    circlearrowleft: "21BA",
                    circlearrowright: "21BB",
                    Lsh: "21B0",
                    Rsh: "21B1",
                    upuparrows: "21C8",
                    downdownarrows: "21CA",
                    upharpoonleft: "21BF",
                    upharpoonright: "21BE",
                    downharpoonleft: "21C3",
                    restriction: "21BE",
                    multimap: "22B8",
                    downharpoonright: "21C2",
                    leftrightsquigarrow: "21AD",
                    rightsquigarrow: "21DD",
                    leadsto: "21DD",
                    dashrightarrow: "21E2",
                    dashleftarrow: "21E0",
                    nleftarrow: "219A",
                    nrightarrow: "219B",
                    nLeftarrow: "21CD",
                    nRightarrow: "21CF",
                    nleftrightarrow: "21AE",
                    nLeftrightarrow: "21CE"
                },
                delimiter: {
                    "\\ulcorner": "231C",
                    "\\urcorner": "231D",
                    "\\llcorner": "231E",
                    "\\lrcorner": "231F"
                },
                macros: {
                    implies: ["Macro", "\\;\\Longrightarrow\\;"],
                    impliedby: ["Macro", "\\;\\Longleftarrow\\;"]
                }
            },
            null, true);
        var c = a.mo.OPTYPES.REL;
        MathJax.Hub.Insert(a.mo.prototype, {
            OPTABLE: {
                infix: {
                    "\u2322": c,
                    "\u2323": c,
                    "\u25B3": c,
                    "\uE006": c,
                    "\uE007": c,
                    "\uE00C": c,
                    "\uE00D": c,
                    "\uE00E": c,
                    "\uE00F": c,
                    "\uE010": c,
                    "\uE011": c,
                    "\uE016": c,
                    "\uE017": c,
                    "\uE018": c,
                    "\uE019": c,
                    "\uE01A": c,
                    "\uE01B": c,
                    "\uE04B": c,
                    "\uE04F": c
                }
            }
        });
        MathJax.Hub.Startup.signal.Post("TeX AMSsymbols Ready")
    });
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSsymbols.js"); (function(h, b, d) {
    var g, i = b.Browser.isMobile;
    var e = function() {
        var k = [].slice.call(arguments, 0);
        k[0][0] = ["HTML-CSS", k[0][0]];
        return MathJax.Message.Set.apply(MathJax.Message, k)
    };
    var f = MathJax.Object.Subclass({
        timeout: (i ? 15 : 8) * 1000,
        FontInfo: {
            STIX: {
                family: "STIXSizeOneSym",
                testString: "() {} []"
            },
            TeX: {
                family: "MathJax_Size1",

                testString: "() {} []"
            },
            "STIX-Web": {
                family: "STIXWeb_Size1",
                testString: "() {} []"
            },
            "Asana-Math": {
                family: "AsanaMath_Size1",
                testString: "() {} []"
            },
            "Gyre-Pagella": {
                family: "GyrePagella_Size1",
                testString: "() {} []"
            },
            "Gyre-Termes": {
                family: "GyreTermes_Size1",
                testString: "() {} []"
            },
            "Latin-Modern": {
                family: "LatinModern_Size1",
                testString: "() {} []"
            },
            "Neo-Euler": {
                family: "NeoEuler_Size1",
                testString: "() {} []"
            }
        },
        comparisonFont: ["sans-serif", "monospace", "script", "Times", "Courier", "Arial", "Helvetica"],
        testSize: ["40px", "50px", "60px", "30px", "20px"],
        Init: function() {
            this.div = MathJax.HTML.addElement(document.body, "div", {
                    id: "MathJax_Font_Test",
                    style: {
                        position: "absolute",
                        visibility: "hidden",
                        top: 0,
                        left: 0,
                        width: "auto",
                        padding: 0,
                        border: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        textAlign: "left",
                        textIndent: 0,
                        textTransform: "none",
                        lineHeight: "normal",
                        letterSpacing: "normal",
                        wordSpacing: "normal",
                        fontSize: this.testSize[0],
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontSizeAdjust: "none"
                    }
                },
                [""]);
            this.text = this.div.firstChild
        },
        findFont: function(o, l) {
            if (l && this.testCollection(l)) {
                return l
            }
            for (var n = 0,
                     k = o.length; n < k; n++) {
                if (o[n] === l) {
                    continue
                }
                if (this.testCollection(o[n])) {
                    return o[n]
                }
            }
            return null
        },
        testCollection: function(k) {
            return this.testFont(this.FontInfo[k])
        },
        testFont: function(n) {
            if (n.isWebFont && d.FontFaceBug) {
                this.div.style.fontWeight = this.div.style.fontStyle = "normal"
            } else {
                this.div.style.fontWeight = (n.weight || "normal");
                this.div.style.fontStyle = (n.style || "normal")
            }
            var l = this.getComparisonWidths(n.testString, n.noStyleChar);
            if (l) {
                this.div.style.fontFamily = "'" + n.family + "'," + this.comparisonFont[0];
                if (this.div.offsetWidth == l[0]) {
                    this.div.style.fontFamily = "'" + n.family + "'," + this.comparisonFont[l[2]];
                    if (this.div.offsetWidth == l[1]) {
                        return false
                    }
                }
                if (this.div.offsetWidth != l[3] || this.div.offsetHeight != l[4]) {
                    if (n.noStyleChar || !d.FONTDATA || !d.FONTDATA.hasStyleChar) {
                        return true
                    }
                    for (var o = 0,
                             k = this.testSize.length; o < k; o++) {
                        if (this.testStyleChar(n, this.testSize[o])) {
                            return true
                        }
                    }
                }
            }
            return false
        },
        styleChar: "\uEFFD",
        versionChar: "\uEFFE",
        compChar: "\uEFFF",
        testStyleChar: function(m, p) {
            var s = 3 + (m.weight ? 2 : 0) + (m.style ? 4 : 0);
            var l = "",
                o = 0;
            var r = this.div.style.fontSize;
            this.div.style.fontSize = p;
            if (d.msieItalicWidthBug && m.style === "italic") {
                this.text.nodeValue = l = this.compChar;
                o = this.div.offsetWidth
            }
            if (d.safariTextNodeBug) {
                this.div.innerHTML = this.compChar + l
            } else {
                this.text.nodeValue = this.compChar + l
            }
            var k = this.div.offsetWidth - o;
            if (d.safariTextNodeBug) {
                this.div.innerHTML = this.styleChar + l
            } else {
                this.text.nodeValue = this.styleChar + l
            }
            var q = Math.floor((this.div.offsetWidth - o) / k + 0.5);
            if (q === s) {
                if (d.safariTextNodeBug) {
                    this.div.innerHTML = this.versionChar + l
                } else {
                    this.text.nodeValue = this.versionChar + l
                }
                m.version = Math.floor((this.div.offsetWidth - o) / k + 1.5) / 2
            }
            this.div.style.fontSize = r;
            return (q === s)
        },
        getComparisonWidths: function(p, n) {
            if (d.FONTDATA && d.FONTDATA.hasStyleChar && !n) {
                p += this.styleChar + " " + this.compChar
            }
            if (d.safariTextNodeBug) {
                this.div.innerHTML = p
            } else {
                this.text.nodeValue = p
            }
            this.div.style.fontFamily = this.comparisonFont[0];
            var l = this.div.offsetWidth;
            this.div.style.fontFamily = d.webFontDefault;
            var r = this.div.offsetWidth,
                o = this.div.offsetHeight;
            for (var q = 1,
                     k = this.comparisonFont.length; q < k; q++) {
                this.div.style.fontFamily = this.comparisonFont[q];
                if (this.div.offsetWidth != l) {
                    return [l, this.div.offsetWidth, q, r, o]
                }
            }
            return null
        },
        loadWebFont: function(l) {
            b.Startup.signal.Post("HTML-CSS Jax - Web-Font " + d.fontInUse + "/" + l.directory);
            var o = e(["LoadWebFont", "Loading web-font %1", d.fontInUse + "/" + l.directory]);
            var k = MathJax.Callback({});
            var m = MathJax.Callback(["loadComplete", this, l, o, k]);
            h.timer.start(h, [this.checkWebFont, l, m], 0, this.timeout);
            return k
        },
        loadComplete: function(m, p, l, k) {
            MathJax.Message.Clear(p);
            if (k === h.STATUS.OK) {
                this.webFontLoaded = true;
                l();
                return
            }
            this.loadError(m);
            if (b.Browser.isFirefox && d.allowWebFonts) {
                var o = document.location.protocol + "//" + document.location.hostname;
                if (document.location.port != "") {
                    o += ":" + document.location.port
                }
                o += "/";
                if (h.fileURL(d.webfontDir).substr(0, o.length) !== o) {
                    this.firefoxFontError(m)
                }
            }
            if (!this.webFontLoaded) {
                d.loadWebFontError(m, l)
            } else {
                l()
            }
        },
        loadError: function(k) {
            e(["CantLoadWebFont", "Can't load web font %1", d.fontInUse + "/" + k.directory], null, 2000);
            b.Startup.signal.Post(["HTML-CSS Jax - web font error", d.fontInUse + "/" + k.directory, k])
        },
        firefoxFontError: function(k) {
            e(["FirefoxCantLoadWebFont", "Firefox can't load web fonts from a remote host"], null, 3000);
            b.Startup.signal.Post("HTML-CSS Jax - Firefox web fonts on remote host error")
        },
        checkWebFont: function(k, l, m) {
            if (k.time(m)) {
                return
            }
            if (d.Font.testFont(l)) {
                m(k.STATUS.OK)
            } else {
                setTimeout(k, k.delay)
            }
        },
        fontFace: function(m) {
            var n = d.allowWebFonts;
            var p = d.FONTDATA.FONTS[m];
            if (d.msieFontCSSBug && !p.family.match(/-Web$/)) {
                p.family += "-Web"
            }
            var l = h.fileURL(d.webfontDir + "/" + n);
            var k = m.replace(/-b/, "-B").replace(/-i/, "-I").replace(/-Bold-/, "-Bold");
            if (!k.match(/-/)) {
                k += "-Regular"
            }
            if (n === "svg") {
                k += ".svg#" + k
            } else {
                k += "." + n
            }
            var o = {
                "font-family": p.family,
                src: "url('" + l + "/" + k + "')"
            };
            if (n === "otf") {
                o.src += " format('opentype')";
                l = h.fileURL(d.webfontDir + "/woff");
                o.src = "url('" + l + "/" + k.replace(/otf$/, "woff") + "') format('woff'), " + o.src
            } else {
                if (n !== "eot") {
                    o.src += " format('" + n + "')"
                }
            }
            if (! (d.FontFaceBug && p.isWebFont)) {
                if (m.match(/-bold/)) {
                    o["font-weight"] = "bold"
                }
                if (m.match(/-italic/)) {
                    o["font-style"] = "italic"
                }
            }
            return o
        }
    });
    var j, a, c;
    d.Augment({
        config: {
            styles: {
                ".MathJax": {
                    display: "inline",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "line-height": "normal",
                    "font-size": "100%",
                    "font-size-adjust": "none",
                    "text-indent": 0,
                    "text-align": "left",
                    "text-transform": "none",
                    "letter-spacing": "normal",
                    "word-spacing": "normal",
                    "word-wrap": "normal",
                    "white-space": "nowrap",
                    "float": "none",
                    direction: "ltr",
                    border: 0,
                    padding: 0,
                    margin: 0
                },
                ".MathJax_Display": {
                    position: "relative",
                    display: "block",
                    width: "100%"
                },
                ".MathJax img, .MathJax nobr, .MathJax a": {
                    border: 0,
                    padding: 0,
                    margin: 0,
                    "max-width": "none",
                    "max-height": "none",
                    "vertical-align": 0,
                    "line-height": "normal",
                    "text-decoration": "none"
                },
                "img.MathJax_strut": {
                    border: "0 !important",
                    padding: "0 !important",
                    margin: "0 !important",
                    "vertical-align": "0 !important"
                },
                ".MathJax span": {
                    display: "inline",
                    position: "static",
                    border: 0,
                    padding: 0,
                    margin: 0,
                    "vertical-align": 0,
                    "line-height": "normal",
                    "text-decoration": "none"
                },
                ".MathJax nobr": {
                    "white-space": "nowrap ! important"
                },
                ".MathJax img": {
                    display: "inline ! important",
                    "float": "none ! important"
                },
                ".MathJax *": {
                    transition: "none",
                    "-webkit-transition": "none",
                    "-moz-transition": "none",
                    "-ms-transition": "none",
                    "-o-transition": "none"
                },
                ".MathJax_Processing": {
                    visibility: "hidden",
                    position: "fixed",
                    width: 0,
                    height: 0,
                    overflow: "hidden"
                },
                ".MathJax_Processed": {
                    display: "none!important"
                },
                ".MathJax_ExBox": {
                    display: "block",
                    overflow: "hidden",
                    width: "1px",
                    height: "60ex"
                },
                ".MathJax .MathJax_EmBox": {
                    display: "block",
                    overflow: "hidden",
                    width: "1px",
                    height: "60em"
                },
                ".MathJax .MathJax_HitBox": {
                    cursor: "text",
                    background: "white",
                    opacity: 0,
                    filter: "alpha(opacity=0)"
                },
                ".MathJax .MathJax_HitBox *": {
                    filter: "none",
                    opacity: 1,
                    background: "transparent"
                },
                "#MathJax_Tooltip": {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "auto",
                    height: "auto",
                    display: "none"
                },
                "#MathJax_Tooltip *": {
                    filter: "none",
                    opacity: 1,
                    background: "transparent"
                },
                "@font-face": {
                    "font-family": "MathJax_Blank",
                    src: "url('about:blank')"
                }
            }
        },
        settings: b.config.menuSettings,
        hideProcessedMath: true,
        Font: null,
        webFontDefault: "MathJax_Blank",
        allowWebFonts: "otf",
        maxStretchyParts: 1000,
        Config: function() {
            if (!this.require) {
                this.require = []
            }
            this.Font = f();
            this.SUPER(arguments).Config.call(this);
            var l = this.settings;
            if (this.adjustAvailableFonts) {
                this.adjustAvailableFonts(this.config.availableFonts)
            }
            if (l.scale) {
                this.config.scale = l.scale
            }
            if (l.font && l.font !== "Auto") {
                if (l.font === "TeXLocal") {
                    this.config.availableFonts = ["TeX"];
                    this.config.preferredFont = "TeX";
                    this.config.webFont = "TeX"
                } else {
                    if (l.font === "TeXWeb") {
                        this.config.availableFonts = [];
                        this.config.preferredFont = "";
                        this.config.webFont = "TeX"
                    } else {
                        if (l.font === "TeXimage") {
                            this.config.availableFonts = [];
                            this.config.preferredFont = "";
                            this.config.webFont = ""
                        } else {
                            if (l.font === "STIXlocal") {
                                this.config.availableFonts = ["STIX"];
                                this.config.preferredFont = "STIX";
                                this.config.webFont = "STIX-Web"
                            } else {
                                if (l.font === "STIXWeb") {
                                    this.config.availableFonts = [];
                                    this.config.preferredFont = "";
                                    this.config.webFont = "STIX-Web"
                                } else {
                                    if (l.font === "AsanaMathWeb") {
                                        this.config.availableFonts = [];
                                        this.config.preferredFont = "";
                                        this.config.webFont = "Asana-Math"
                                    } else {
                                        if (l.font === "GyrePagellaWeb") {
                                            this.config.availableFonts = [];
                                            this.config.preferredFont = "";
                                            this.config.webFont = "Gyre-Pagella"
                                        } else {
                                            if (l.font === "GyreTermesWeb") {
                                                this.config.availableFonts = [];
                                                this.config.preferredFont = "";
                                                this.config.webFont = "Gyre-Termes"
                                            } else {
                                                if (l.font === "LatinModernWeb") {
                                                    this.config.availableFonts = [];
                                                    this.config.preferredFont = "";
                                                    this.config.webFont = "Latin-Modern"
                                                } else {
                                                    if (l.font === "NeoEulerWeb") {
                                                        this.config.availableFonts = [];
                                                        this.config.preferredFont = "";
                                                        this.config.webFont = "Neo-Euler"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var k = this.Font.findFont(this.config.availableFonts, this.config.preferredFont);
            if (!k && this.allowWebFonts) {
                k = this.config.webFont;
                if (k) {
                    this.webFonts = true
                }
            }
            if (!k && this.config.imageFont) {
                k = this.config.imageFont;
                this.imgFonts = true
            }
            if (k) {
                this.fontInUse = k;
                this.fontDir += "/" + k;
                this.webfontDir += "/" + k;
                this.require.push(this.fontDir + "/fontdata.js");
                if (this.imgFonts) {
                    this.require.push(this.directory + "/imageFonts.js");
                    b.Startup.signal.Post("HTML-CSS Jax - using image fonts")
                }
            } else {
                e(["CantFindFontUsing", "Can't find a valid font using %1", "[" + this.config.availableFonts.join(", ") + "]"], null, 3000);
                this.fontInUse = "generic";
                this.FONTDATA = {
                    TeX_factor: 1,
                    baselineskip: 1.2,
                    lineH: 0.8,
                    lineD: 0.2,
                    ffLineH: 0.8,
                    FONTS: {},
                    VARIANT: {
                        normal: {
                            fonts: []
                        },
                        "-generic-variant": {
                            fonts: []
                        },
                        "-largeOp": {
                            fonts: []
                        },
                        "-smallOp": {
                            fonts: []
                        }
                    },
                    RANGES: [],
                    DELIMITERS: {},
                    RULECHAR: 45,
                    REMAP: {}
                };
                b.Startup.signal.Post("HTML-CSS Jax - no valid font")
            }
            this.require.push(MathJax.OutputJax.extensionDir + "/MathEvents.js")
        },
        Startup: function() {
            j = MathJax.Extension.MathEvents.Event;
            a = MathJax.Extension.MathEvents.Touch;
            c = MathJax.Extension.MathEvents.Hover;
            this.ContextMenu = j.ContextMenu;
            this.Mousedown = j.AltContextMenu;
            this.Mouseover = c.Mouseover;
            this.Mouseout = c.Mouseout;
            this.Mousemove = c.Mousemove;
            this.hiddenDiv = this.Element("div", {
                style: {
                    visibility: "hidden",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    height: "1px",
                    width: "auto",
                    padding: 0,
                    border: 0,
                    margin: 0,
                    textAlign: "left",
                    textIndent: 0,
                    textTransform: "none",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    wordSpacing: "normal"
                }
            });
            if (!document.body.firstChild) {
                document.body.appendChild(this.hiddenDiv)
            } else {
                document.body.insertBefore(this.hiddenDiv, document.body.firstChild)
            }
            this.hiddenDiv = this.addElement(this.hiddenDiv, "div", {
                id: "MathJax_Hidden"
            });
            var l = this.addElement(this.hiddenDiv, "div", {
                style: {
                    width: "5in"
                }
            });
            this.pxPerInch = l.offsetWidth / 5;
            this.hiddenDiv.removeChild(l);
            this.startMarker = this.createStrut(this.Element("span"), 10, true);
            this.endMarker = this.addText(this.Element("span"), "x").parentNode;
            this.HDspan = this.Element("span");
            if (this.operaHeightBug) {
                this.createStrut(this.HDspan, 0)
            }
            if (this.msieInlineBlockAlignBug) {
                this.HDimg = this.addElement(this.HDspan, "img", {
                    style: {
                        height: "0px",
                        width: "1px"
                    }
                });
                try {
                    this.HDimg.src = "about:blank"
                } catch(k) {}
            } else {
                this.HDimg = this.createStrut(this.HDspan, 0)
            }
            this.EmExSpan = this.Element("span", {
                    style: {
                        position: "absolute",
                        "font-size-adjust": "none"
                    }
                },
                [["span", {
                    className: "MathJax_ExBox"
                }], ["span", {
                    className: "MathJax"
                },
                    [["span", {
                        className: "MathJax_EmBox"
                    }]]]]);
            this.linebreakSpan = this.Element("span", null, [["hr", {
                style: {
                    width: "100%",
                    size: 1,
                    padding: 0,
                    border: 0,
                    margin: 0
                }
            }]]);
            return h.Styles(this.config.styles, ["InitializeHTML", this])
        },
        removeSTIXfonts: function(n) {
            for (var l = 0,
                     k = n.length; l < k; l++) {
                if (n[l] === "STIX") {
                    n.splice(l, 1);
                    k--;
                    l--
                }
            }
            if (this.config.preferredFont === "STIX") {
                this.config.preferredFont = n[0]
            }
        },
        PreloadWebFonts: function() {
            if (!d.allowWebFonts || !d.config.preloadWebFonts) {
                return
            }
            for (var l = 0,
                     k = d.config.preloadWebFonts.length; l < k; l++) {
                var n = d.FONTDATA.FONTS[d.config.preloadWebFonts[l]];
                if (!n.available) {
                    d.Font.testFont(n)
                }
            }
        },
        InitializeHTML: function() {
            this.PreloadWebFonts();
            document.body.appendChild(this.EmExSpan);
            document.body.appendChild(this.linebreakSpan);
            this.defaultEx = this.EmExSpan.firstChild.offsetHeight / 60;
            this.defaultEm = this.EmExSpan.lastChild.firstChild.offsetHeight / 60;
            this.defaultWidth = this.linebreakSpan.firstChild.offsetWidth;
            document.body.removeChild(this.linebreakSpan);
            document.body.removeChild(this.EmExSpan)
        },
        preTranslate: function(o) {
            var u = o.jax[this.id],
                v,
                r = u.length,
                z,
                t,
                A,
                n,
                y,
                l,
                x,
                q,
                s,
                k,
                w = false,
                B = this.config.linebreaks.automatic,
                p = this.config.linebreaks.width;
            if (B) {
                w = (p.match(/^\s*(\d+(\.\d*)?%\s*)?container\s*$/) != null);
                if (w) {
                    p = p.replace(/\s*container\s*/, "")
                } else {
                    k = this.defaultWidth
                }
                if (p === "") {
                    p = "100%"
                }
            } else {
                k = 100000
            }
            for (v = 0; v < r; v++) {
                z = u[v];
                if (!z.parentNode) {
                    continue
                }
                t = z.previousSibling;
                if (t && String(t.className).match(/^MathJax(_Display)?( MathJax_Processing)?$/)) {
                    t.parentNode.removeChild(t)
                }
                l = z.MathJax.elementJax;
                if (!l) {
                    continue
                }
                l.HTMLCSS = {
                    display: (l.root.Get("display") === "block")
                };
                A = n = this.Element("span", {
                    className: "MathJax",
                    id: l.inputID + "-Frame",
                    isMathJax: true,
                    jaxID: this.id,
                    oncontextmenu: j.Menu,
                    onmousedown: j.Mousedown,
                    onmouseover: j.Mouseover,
                    onmouseout: j.Mouseout,
                    onmousemove: j.Mousemove,
                    onclick: j.Click,
                    ondblclick: j.DblClick
                });
                if (b.Browser.noContextMenu) {
                    A.ontouchstart = a.start;
                    A.ontouchend = a.end
                }
                if (l.HTMLCSS.display) {
                    n = this.Element("div", {
                        className: "MathJax_Display"
                    });
                    n.appendChild(A)
                } else {
                    if (this.msieDisappearingBug) {
                        A.style.display = "inline-block"
                    }
                }
                n.setAttribute("role", "textbox");
                n.setAttribute("aria-readonly", "true");
                n.className += " MathJax_Processing";
                z.parentNode.insertBefore(n, z);
                z.parentNode.insertBefore(this.EmExSpan.cloneNode(true), z);
                if (w) {
                    n.parentNode.insertBefore(this.linebreakSpan.cloneNode(true), n)
                }
            }
            for (v = 0; v < r; v++) {
                z = u[v];
                if (!z.parentNode) {
                    continue
                }
                y = z.previousSibling;
                n = y.previousSibling;
                l = z.MathJax.elementJax;
                if (!l) {
                    continue
                }
                x = y.firstChild.offsetHeight / 60;
                q = y.lastChild.firstChild.offsetHeight / 60;
                if (w) {
                    k = n.previousSibling.firstChild.offsetWidth
                }
                if (x === 0 || x === "NaN") {
                    this.hiddenDiv.appendChild(n);
                    l.HTMLCSS.isHidden = true;
                    x = this.defaultEx;
                    q = this.defaultEm;
                    if (w) {
                        k = this.defaultWidth
                    }
                }
                s = (this.config.matchFontHeight ? x / this.TeX.x_height / q: 1);
                s = Math.floor(Math.max(this.config.minScaleAdjust / 100, s) * this.config.scale);
                l.HTMLCSS.scale = s / 100;
                l.HTMLCSS.fontSize = s + "%";
                l.HTMLCSS.em = l.HTMLCSS.outerEm = q;
                this.em = q * s / 100;
                l.HTMLCSS.ex = x;
                l.HTMLCSS.lineWidth = (B ? this.length2em(p, 1, k / this.em) : 1000000)
            }
            for (v = 0; v < r; v++) {
                z = u[v];
                if (!z.parentNode) {
                    continue
                }
                y = u[v].previousSibling;
                l = u[v].MathJax.elementJax;
                if (!l) {
                    continue
                }
                if (w) {
                    A = y.previousSibling;
                    if (!l.HTMLCSS.isHidden) {
                        A = A.previousSibling
                    }
                    A.parentNode.removeChild(A)
                }
                y.parentNode.removeChild(y)
            }
            o.HTMLCSSeqn = o.HTMLCSSlast = 0;
            o.HTMLCSSi = -1;
            o.HTMLCSSchunk = this.config.EqnChunk;
            o.HTMLCSSdelay = false
        },
        Translate: function(l, p) {
            if (!l.parentNode) {
                return
            }
            if (p.HTMLCSSdelay) {
                p.HTMLCSSdelay = false;
                b.RestartAfter(MathJax.Callback.Delay(this.config.EqnChunkDelay))
            }
            var k = l.MathJax.elementJax,
                o = k.root,
                m = document.getElementById(k.inputID + "-Frame"),
                q = (k.HTMLCSS.display ? m.parentNode: m);
            this.em = g.mbase.prototype.em = k.HTMLCSS.em * k.HTMLCSS.scale;
            this.outerEm = k.HTMLCSS.em;
            this.scale = k.HTMLCSS.scale;
            this.linebreakWidth = k.HTMLCSS.lineWidth;
            if (this.scale !== 1) {
                m.style.fontSize = k.HTMLCSS.fontSize
            }
            this.initImg(m);
            this.initHTML(o, m);
            o.setTeXclass();
            try {
                o.toHTML(m, q)
            } catch(n) {
                if (n.restart) {
                    while (m.firstChild) {
                        m.removeChild(m.firstChild)
                    }
                }
                throw n
            }
            if (k.HTMLCSS.isHidden) {
                l.parentNode.insertBefore(q, l)
            }
            q.className = q.className.split(/ /)[0];
            if (this.hideProcessedMath) {
                q.className += " MathJax_Processed";
                if (l.MathJax.preview) {
                    k.HTMLCSS.preview = l.MathJax.preview;
                    delete l.MathJax.preview
                }
                p.HTMLCSSeqn += (p.i - p.HTMLCSSi);
                p.HTMLCSSi = p.i;
                if (p.HTMLCSSeqn >= p.HTMLCSSlast + p.HTMLCSSchunk) {
                    this.postTranslate(p, true);
                    p.HTMLCSSchunk = Math.floor(p.HTMLCSSchunk * this.config.EqnChunkFactor);
                    p.HTMLCSSdelay = true
                }
            }
        },
        postTranslate: function(s, o) {
            var l = s.jax[this.id];
            if (!this.hideProcessedMath) {
                return
            }
            for (var q = s.HTMLCSSlast,
                     k = s.HTMLCSSeqn; q < k; q++) {
                var n = l[q];
                if (n && n.MathJax.elementJax) {
                    n.previousSibling.className = n.previousSibling.className.split(/ /)[0];
                    var r = n.MathJax.elementJax.HTMLCSS;
                    if (r.preview) {
                        r.preview.innerHTML = "";
                        n.MathJax.preview = r.preview;
                        delete r.preview
                    }
                }
            }
            if (this.forceReflow) {
                var p = (document.styleSheets || [])[0] || {};
                p.disabled = true;
                p.disabled = false
            }
            s.HTMLCSSlast = s.HTMLCSSeqn
        },
        getJaxFromMath: function(k) {
            if (k.parentNode.className === "MathJax_Display") {
                k = k.parentNode
            }
            do {
                k = k.nextSibling
            } while ( k && k . nodeName . toLowerCase () !== "script");
            return b.getJaxFor(k)
        },
        getHoverSpan: function(k, l) {
            return k.root.HTMLspanElement()
        },
        getHoverBBox: function(k, n, o) {
            var p = n.bbox,
                m = k.HTMLCSS.outerEm;
            var l = {
                w: p.w * m,
                h: p.h * m,
                d: p.d * m
            };
            if (p.width) {
                l.width = p.width
            }
            return l
        },
        Zoom: function(l, v, u, k, s) {
            v.className = "MathJax";
            v.style.fontSize = l.HTMLCSS.fontSize;
            var x = v.appendChild(this.EmExSpan.cloneNode(true));
            var o = x.lastChild.firstChild.offsetHeight / 60;
            this.em = g.mbase.prototype.em = o;
            this.outerEm = o / l.HTMLCSS.scale;
            x.parentNode.removeChild(x);
            this.idPostfix = "-zoom";
            l.root.toHTML(v, v);
            this.idPostfix = "";
            var n = l.root.HTMLspanElement().bbox.width;
            if (n) {
                v.style.width = Math.floor(k - 1.5 * d.em) + "px";
                v.style.display = "inline-block";
                var m = (l.root.id || "MathJax-Span-" + l.root.spanID) + "-zoom";
                var p = document.getElementById(m).firstChild;
                while (p && p.style.width !== n) {
                    p = p.nextSibling
                }
                if (p) {
                    p.style.width = "100%"
                }
            }
            v.style.position = "absolute";
            if (!n) {
                u.style.position = "absolute"
            }
            var t = v.offsetWidth,
                r = v.offsetHeight,
                w = u.offsetHeight,
                q = u.offsetWidth;
            if (q === 0) {
                q = u.parentNode.offsetWidth
            }
            v.style.position = u.style.position = "";
            return {
                Y: -j.getBBox(v).h,
                mW: q,
                mH: w,
                zW: t,
                zH: r
            }
        },
        initImg: function(k) {},
        initHTML: function(l, k) {},
        initFont: function(k) {
            var m = d.FONTDATA.FONTS,
                l = d.config.availableFonts;
            if (l && l.length && d.Font.testFont(m[k])) {
                m[k].available = true;
                return null
            }
            if (!this.allowWebFonts) {
                return null
            }
            m[k].isWebFont = true;
            if (d.FontFaceBug) {
                m[k].family = k;
                if (d.msieFontCSSBug) {
                    m[k].family += "-Web"
                }
            }
            return h.Styles({
                "@font-face": this.Font.fontFace(k)
            })
        },
        Remove: function(k) {
            var l = document.getElementById(k.inputID + "-Frame");
            if (l) {
                if (k.HTMLCSS.display) {
                    l = l.parentNode
                }
                l.parentNode.removeChild(l)
            }
            delete k.HTMLCSS
        },
        getHD: function(l) {
            var k = l.style.position;
            l.style.position = "absolute";
            this.HDimg.style.height = "0px";
            l.appendChild(this.HDspan);
            var m = {
                h: l.offsetHeight
            };
            this.HDimg.style.height = m.h + "px";
            m.d = l.offsetHeight - m.h;
            m.h -= m.d;
            m.h /= this.em;
            m.d /= this.em;
            l.removeChild(this.HDspan);
            l.style.position = k;
            return m
        },
        getW: function(o) {
            var l, n, m = (o.bbox || {}).w,
                p = o;
            if (o.bbox && o.bbox.exactW) {
                return m
            }
            if ((o.bbox && m >= 0 && !this.initialSkipBug) || this.negativeBBoxes || !o.firstChild) {
                l = o.offsetWidth;
                n = o.parentNode.offsetHeight
            } else {
                if (o.bbox && m < 0 && this.msieNegativeBBoxBug) {
                    l = -o.offsetWidth,
                        n = o.parentNode.offsetHeight
                } else {
                    if (this.initialSkipBug) {
                        var k = o.style.position;
                        o.style.position = "absolute";
                        p = this.startMarker;
                        o.insertBefore(p, o.firstChild)
                    }
                    o.appendChild(this.endMarker);
                    l = this.endMarker.offsetLeft - p.offsetLeft;
                    o.removeChild(this.endMarker);
                    if (this.initialSkipBug) {
                        o.removeChild(p);
                        o.style.position = k
                    }
                }
            }
            if (n != null) {
                o.parentNode.HH = n / this.em
            }
            return l / this.em
        },
        Measured: function(m, l) {
            var n = m.bbox;
            if (n.width == null && n.w && !n.isMultiline) {
                var k = this.getW(m);
                n.rw += k - n.w;
                n.w = k;
                n.exactW = true
            }
            if (!l) {
                l = m.parentNode
            }
            if (!l.bbox) {
                l.bbox = n
            }
            return m
        },
        Remeasured: function(l, k) {
            k.bbox = this.Measured(l, k).bbox
        },
        MeasureSpans: function(o) {
            var r = [],
                t,
                q,
                n,
                u,
                k,
                p,
                l,
                s;
            for (q = 0, n = o.length; q < n; q++) {
                t = o[q];
                if (!t) {
                    continue
                }
                u = t.bbox;
                s = this.parentNode(t);
                if (u.exactW || u.width || u.w === 0 || u.isMultiline) {
                    if (!s.bbox) {
                        s.bbox = u
                    }
                    continue
                }
                if (this.negativeBBoxes || !t.firstChild || (u.w >= 0 && !this.initialSkipBug) || (u.w < 0 && this.msieNegativeBBoxBug)) {
                    r.push([t])
                } else {
                    if (this.initialSkipBug) {
                        k = this.startMarker.cloneNode(true);
                        p = this.endMarker.cloneNode(true);
                        t.insertBefore(k, t.firstChild);
                        t.appendChild(p);
                        r.push([t, k, p, t.style.position]);
                        t.style.position = "absolute"
                    } else {
                        p = this.endMarker.cloneNode(true);
                        t.appendChild(p);
                        r.push([t, null, p])
                    }
                }
            }
            for (q = 0, n = r.length; q < n; q++) {
                t = r[q][0];
                u = t.bbox;
                s = this.parentNode(t);
                if ((u.w >= 0 && !this.initialSkipBug) || this.negativeBBoxes || !t.firstChild) {
                    l = t.offsetWidth;
                    s.HH = s.offsetHeight / this.em
                } else {
                    if (u.w < 0 && this.msieNegativeBBoxBug) {
                        l = -t.offsetWidth,
                            s.HH = s.offsetHeight / this.em
                    } else {
                        l = r[q][2].offsetLeft - ((r[q][1] || {}).offsetLeft || 0)
                    }
                }
                l /= this.em;
                u.rw += l - u.w;
                u.w = l;
                u.exactW = true;
                if (!s.bbox) {
                    s.bbox = u
                }
            }
            for (q = 0, n = r.length; q < n; q++) {
                t = r[q];
                if (t[1]) {
                    t[1].parentNode.removeChild(t[1]),
                        t[0].style.position = t[3]
                }
                if (t[2]) {
                    t[2].parentNode.removeChild(t[2])
                }
            }
        },
        Em: function(k) {
            if (Math.abs(k) < 0.0006) {
                return "0em"
            }
            return k.toFixed(3).replace(/\.?0+$/, "") + "em"
        },
        EmRounded: function(k) {
            k = (Math.round(k * d.em) + 0.05) / d.em;
            if (Math.abs(k) < 0.0006) {
                return "0em"
            }
            return k.toFixed(3).replace(/\.?0+$/, "") + "em"
        },
        unEm: function(k) {
            return parseFloat(k)
        },
        Px: function(k) {
            k *= this.em;
            var l = (k < 0 ? "-": "");
            return l + Math.abs(k).toFixed(1).replace(/\.?0+$/, "") + "px"
        },
        unPx: function(k) {
            return parseFloat(k) / this.em
        },
        Percent: function(k) {
            return (100 * k).toFixed(1).replace(/\.?0+$/, "") + "%"
        },
        length2em: function(r, l, p) {
            if (typeof(r) !== "string") {
                r = r.toString()
            }
            if (r === "") {
                return ""
            }
            if (r === g.SIZE.NORMAL) {
                return 1
            }
            if (r === g.SIZE.BIG) {
                return 2
            }
            if (r === g.SIZE.SMALL) {
                return 0.71
            }
            if (r === "infinity") {
                return d.BIGDIMEN
            }
            var o = this.FONTDATA.TeX_factor;
            if (r.match(/mathspace$/)) {
                return d.MATHSPACE[r] * o
            }
            var n = r.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
            var k = parseFloat(n[1] || "1"),
                q = n[2];
            if (p == null) {
                p = 1
            }
            if (l == null) {
                l = 1
            }
            if (q === "em") {
                return k * o
            }
            if (q === "ex") {
                return k * d.TeX.x_height * o
            }
            if (q === "%") {
                return k / 100 * p
            }
            if (q === "px") {
                return k / d.em
            }
            if (q === "pt") {
                return k / 10 * o
            }
            if (q === "pc") {
                return k * 1.2 * o
            }
            if (q === "in") {
                return k * this.pxPerInch / d.em
            }
            if (q === "cm") {
                return k * this.pxPerInch / d.em / 2.54
            }
            if (q === "mm") {
                return k * this.pxPerInch / d.em / 25.4
            }
            if (q === "mu") {
                return k / 18 * o * l
            }
            return k * o * p
        },
        thickness2em: function(l, k) {
            var m = d.TeX.rule_thickness;
            if (l === g.LINETHICKNESS.MEDIUM) {
                return m
            }
            if (l === g.LINETHICKNESS.THIN) {
                return 0.67 * m
            }
            if (l === g.LINETHICKNESS.THICK) {
                return 1.67 * m
            }
            return this.length2em(l, k, m)
        },
        getPadding: function(l) {
            var n = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                k = false;
            for (var o in n) {
                if (n.hasOwnProperty(o)) {
                    var m = l.style["padding" + o.charAt(0).toUpperCase() + o.substr(1)];
                    if (m) {
                        n[o] = this.length2em(m);
                        k = true
                    }
                }
            }
            return (k ? n: false)
        },
        getBorders: function(p) {
            var m = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                n = {},
                l = false;
            for (var q in m) {
                if (m.hasOwnProperty(q)) {
                    var k = "border" + q.charAt(0).toUpperCase() + q.substr(1);
                    var o = p.style[k + "Style"];
                    if (o) {
                        l = true;
                        m[q] = this.length2em(p.style[k + "Width"]);
                        n[k] = [p.style[k + "Width"], p.style[k + "Style"], p.style[k + "Color"]].join(" ")
                    }
                }
            }
            m.css = n;
            return (l ? m: false)
        },
        setBorders: function(k, l) {
            if (l) {
                for (var m in l.css) {
                    if (l.css.hasOwnProperty(m)) {
                        k.style[m] = l.css[m]
                    }
                }
            }
        },
        createStrut: function(m, l, n) {
            var k = this.Element("span", {
                isMathJax: true,
                style: {
                    display: "inline-block",
                    overflow: "hidden",
                    height: l + "px",
                    width: "1px",
                    marginRight: "-1px"
                }
            });
            if (n) {
                m.insertBefore(k, m.firstChild)
            } else {
                m.appendChild(k)
            }
            return k
        },
        createBlank: function(l, k, m) {
            var n = this.Element("span", {
                isMathJax: true,
                style: {
                    display: "inline-block",
                    overflow: "hidden",
                    height: "1px",
                    width: this.Em(k)
                }
            });
            if (m) {
                l.insertBefore(n, l.firstChild)
            } else {
                l.appendChild(n)
            }
            return n
        },
        createShift: function(l, k, n) {
            var m = this.Element("span", {
                style: {
                    marginLeft: this.Em(k)
                },
                isMathJax: true
            });
            if (n) {
                l.insertBefore(m, l.firstChild)
            } else {
                l.appendChild(m)
            }
            return m
        },
        createSpace: function(p, n, o, q, m, s) {
            if (n < -o) {
                o = -n
            }
            var r = this.Em(n + o),
                k = this.Em( - o);
            if (this.msieInlineBlockAlignBug) {
                k = this.Em(d.getHD(p.parentNode).d - o)
            }
            if (p.isBox || s) {
                var l = (p.scale == null ? 1 : p.scale);
                p.bbox = {
                    exactW: true,
                    h: n * l,
                    d: o * l,
                    w: q * l,
                    rw: q * l,
                    lw: 0
                };
                p.style.height = r;
                p.style.verticalAlign = k;
                p.HH = (n + o) * l
            } else {
                p = this.addElement(p, "span", {
                    style: {
                        height: r,
                        verticalAlign: k
                    },
                    isMathJax: true
                })
            }
            if (q >= 0) {
                p.style.width = this.Em(q);
                p.style.display = "inline-block";
                p.style.overflow = "hidden"
            } else {
                if (this.msieNegativeSpaceBug) {
                    p.style.height = ""
                }
                p.style.marginLeft = this.Em(q);
                if (d.safariNegativeSpaceBug && p.parentNode.firstChild == p) {
                    this.createBlank(p, 0, true)
                }
            }
            if (m && m !== g.COLOR.TRANSPARENT) {
                p.style.backgroundColor = m;
                p.style.position = "relative"
            }
            return p
        },
        createRule: function(r, n, p, s, l) {
            if (n < -p) {
                p = -n
            }
            var m = d.TeX.min_rule_thickness,
                o = 1;
            if (s > 0 && s * this.em < m) {
                s = m / this.em
            }
            if (n + p > 0 && (n + p) * this.em < m) {
                o = 1 / (n + p) * (m / this.em);
                n *= o;
                p *= o
            }
            if (!l) {
                l = "solid"
            } else {
                l = "solid " + l
            }
            l = this.Em(s) + " " + l;
            var t = (o === 1 ? this.Em(n + p) : m + "px"),
                k = this.Em( - p);
            var q = this.addElement(r, "span", {
                style: {
                    borderLeft: l,
                    display: "inline-block",
                    overflow: "hidden",
                    width: 0,
                    height: t,
                    verticalAlign: k
                },
                bbox: {
                    h: n,
                    d: p,
                    w: s,
                    rw: s,
                    lw: 0,
                    exactW: true
                },
                noAdjust: true,
                HH: n + p,
                isMathJax: true
            });
            if (s > 0 && q.offsetWidth == 0) {
                q.style.width = this.Em(s)
            }
            if (r.isBox || r.className == "mspace") {
                r.bbox = q.bbox,
                    r.HH = n + p
            }
            return q
        },
        createFrame: function(s, q, r, u, x, l) {
            if (q < -r) {
                r = -q
            }
            var p = 2 * x;
            if (this.msieFrameSizeBug) {
                if (u < p) {
                    u = p
                }
                if (q + r < p) {
                    q = p - r
                }
            }
            if (this.msieBorderWidthBug) {
                p = 0
            }
            var v = this.Em(q + r - p),
                k = this.Em( - r - x),
                o = this.Em(u - p);
            var m = this.Em(x) + " " + l;
            var n = this.addElement(s, "span", {
                style: {
                    border: m,
                    display: "inline-block",
                    overflow: "hidden",
                    width: o,
                    height: v
                },
                bbox: {
                    h: q,
                    d: r,
                    w: u,
                    rw: u,
                    lw: 0,
                    exactW: true
                },
                noAdjust: true,
                HH: q + r,
                isMathJax: true
            });
            if (k) {
                n.style.verticalAlign = k
            }
            return n
        },
        parentNode: function(l) {
            var k = l.parentNode;
            if (k.nodeName.toLowerCase() === "a") {
                k = k.parentNode
            }
            return k
        },
        createStack: function(m, o, l) {
            if (this.msiePaddingWidthBug) {
                this.createStrut(m, 0)
            }
            var n = String(l).match(/%$/);
            var k = (!n && l != null ? l: 0);
            m = this.addElement(m, "span", {
                noAdjust: true,
                HH: 0,
                isMathJax: true,
                style: {
                    display: "inline-block",
                    position: "relative",
                    width: (n ? "100%": this.Em(k)),
                    height: 0
                }
            });
            if (!o) {
                m.parentNode.bbox = m.bbox = {
                    exactW: true,
                    h: -this.BIGDIMEN,
                    d: -this.BIGDIMEN,
                    w: k,
                    lw: this.BIGDIMEN,
                    rw: (!n && l != null ? l: -this.BIGDIMEN)
                };
                if (n) {
                    m.bbox.width = l
                }
            }
            return m
        },
        createBox: function(l, k) {
            var m = this.addElement(l, "span", {
                style: {
                    position: "absolute"
                },
                isBox: true,
                isMathJax: true
            });
            if (k != null) {
                m.style.width = k
            }
            return m
        },
        addBox: function(k, l) {
            l.style.position = "absolute";
            l.isBox = l.isMathJax = true;
            return k.appendChild(l)
        },
        placeBox: function(u, s, q, o) {
            u.isMathJax = true;
            var v = d.parentNode(u),
                C = u.bbox,
                z = v.bbox;
            if (this.msiePlaceBoxBug) {
                this.addText(u, this.NBSP)
            }
            if (this.imgSpaceBug) {
                this.addText(u, this.imgSpace)
            }
            var w, F = 0;
            if (u.HH != null) {
                w = u.HH
            } else {
                if (C) {
                    w = Math.max(3, C.h + C.d)
                } else {
                    w = u.offsetHeight / this.em
                }
            }
            if (!u.noAdjust) {
                w += 1;
                w = Math.round(w * this.em) / this.em;
                if (this.msieInlineBlockAlignBug) {
                    this.addElement(u, "img", {
                        className: "MathJax_strut",
                        border: 0,
                        src: "about:blank",
                        isMathJax: true,
                        style: {
                            width: 0,
                            height: this.Em(w)
                        }
                    })
                } else {
                    this.addElement(u, "span", {
                        isMathJax: true,
                        style: {
                            display: "inline-block",
                            width: 0,
                            height: this.Em(w)
                        }
                    });
                    if (d.chromeHeightBug) {
                        w -= (u.lastChild.offsetHeight - Math.round(w * this.em)) / this.em
                    }
                }
            }
            if (C) {
                if (this.initialSkipBug) {
                    if (C.lw < 0) {
                        F = C.lw;
                        d.createBlank(u, -F, true)
                    }
                    if (C.rw > C.w) {
                        d.createBlank(u, C.rw - C.w + 0.1)
                    }
                }
                if (!this.msieClipRectBug && !C.noclip && !o) {
                    var B = 3 / this.em;
                    var A = (C.H == null ? C.h: C.H),
                        m = (C.D == null ? C.d: C.D);
                    var E = w - A - B,
                        p = w + m + B,
                        n = C.lw - 3 * B,
                        k = 1000;
                    if (this.initialSkipBug && C.lw < 0) {
                        n = -3 * B
                    }
                    if (C.isFixed) {
                        k = C.width - n
                    }
                    u.style.clip = "rect(" + this.Em(E) + " " + this.Em(k) + " " + this.Em(p) + " " + this.Em(n) + ")"
                }
            }
            u.style.top = this.Em( - q - w);
            u.style.left = this.Em(s + F);
            if (C && z) {
                if (C.H != null && (z.H == null || C.H + q > z.H)) {
                    z.H = C.H + q
                }
                if (C.D != null && (z.D == null || C.D - q > z.D)) {
                    z.D = C.D - q
                }
                if (C.h + q > z.h) {
                    z.h = C.h + q
                }
                if (C.d - q > z.d) {
                    z.d = C.d - q
                }
                if (z.H != null && z.H <= z.h) {
                    delete z.H
                }
                if (z.D != null && z.D <= z.d) {
                    delete z.D
                }
                if (C.w + s > z.w) {
                    z.w = C.w + s;
                    if (z.width == null) {
                        v.style.width = this.Em(z.w)
                    }
                }
                if (C.rw + s > z.rw) {
                    z.rw = C.rw + s
                }
                if (C.lw + s < z.lw) {
                    z.lw = C.lw + s
                }
                if (C.width != null && !C.isFixed) {
                    if (z.width == null) {
                        v.style.width = z.width = "100%";
                        if (C.minWidth) {
                            v.style.minWidth = z.minWidth = C.minWidth
                        }
                    }
                    u.style.width = C.width
                }
            }
        },
        alignBox: function(n, t, s) {
            this.placeBox(n, 0, s);
            var p = n.bbox;
            if (p.isMultiline) {
                return
            }
            var m = p.width != null && !p.isFixed;
            var o = 0,
                q = -p.w / 2,
                k = "50%";
            if (this.initialSkipBug) {
                o = p.w - p.rw - 0.1;
                q += p.lw
            }
            if (this.msieMarginScaleBug) {
                q = (q * this.em) + "px"
            } else {
                q = this.Em(q)
            }
            if (m) {
                q = "";
                k = (50 - parseFloat(p.width) / 2) + "%"
            }
            b.Insert(n.style, ({
                right: {
                    left: "",
                    right: this.Em(o)
                },
                center: {
                    left: k,
                    marginLeft: q
                }
            })[t])
        },
        setStackWidth: function(l, k) {
            if (typeof(k) === "number") {
                l.style.width = this.Em(Math.max(0, k));
                var m = l.bbox;
                if (m) {
                    m.w = k;
                    m.exactW = true
                }
                m = l.parentNode.bbox;
                if (m) {
                    m.w = k;
                    m.exactW = true
                }
            } else {
                l.style.width = l.parentNode.style.width = "100%";
                if (l.bbox) {
                    l.bbox.width = k
                }
                if (l.parentNode.bbox) {
                    l.parentNode.bbox.width = k
                }
            }
        },
        createDelimiter: function(u, k, n, q, o) {
            if (!k) {
                u.bbox = {
                    h: 0,
                    d: 0,
                    w: this.TeX.nulldelimiterspace,
                    lw: 0
                };
                u.bbox.rw = u.bbox.w;
                this.createSpace(u, u.bbox.h, u.bbox.d, u.bbox.w);
                return
            }
            if (!q) {
                q = 1
            }
            if (! (n instanceof Array)) {
                n = [n, n]
            }
            var t = n[1];
            n = n[0];
            var l = {
                alias: k
            };
            while (l.alias) {
                k = l.alias;
                l = this.FONTDATA.DELIMITERS[k];
                if (!l) {
                    l = {
                        HW: [0, this.FONTDATA.VARIANT[g.VARIANT.NORMAL]]
                    }
                }
            }
            if (l.load) {
                b.RestartAfter(h.Require(this.fontDir + "/fontdata-" + l.load + ".js"))
            }
            for (var s = 0,
                     p = l.HW.length; s < p; s++) {
                if (l.HW[s][0] * q >= n - 0.01 || (s == p - 1 && !l.stretch)) {
                    if (l.HW[s][2]) {
                        q *= l.HW[s][2]
                    }
                    if (l.HW[s][3]) {
                        k = l.HW[s][3]
                    }
                    var r = this.addElement(u, "span");
                    this.createChar(r, [k, l.HW[s][1]], q, o);
                    u.bbox = r.bbox;
                    u.offset = 0.65 * u.bbox.w;
                    u.scale = q;
                    return
                }
            }
            if (l.stretch) {
                this["extendDelimiter" + l.dir](u, t, l.stretch, q, o)
            }
        },
        extendDelimiterV: function(A, t, E, F, w) {
            var o = this.createStack(A, true);
            var v = this.createBox(o),
                u = this.createBox(o);
            this.createChar(v, (E.top || E.ext), F, w);
            this.createChar(u, (E.bot || E.ext), F, w);
            var m = {
                    bbox: {
                        w: 0,
                        lw: 0,
                        rw: 0
                    }
                },
                D = m,
                p;
            var B = v.bbox.h + v.bbox.d + u.bbox.h + u.bbox.d;
            var r = -v.bbox.h;
            this.placeBox(v, 0, r, true);
            r -= v.bbox.d;
            if (E.mid) {
                D = this.createBox(o);
                this.createChar(D, E.mid, F, w);
                B += D.bbox.h + D.bbox.d
            }
            if (E.min && t < B * E.min) {
                t = B * E.min
            }
            if (t > B) {
                m = this.Element("span");
                this.createChar(m, E.ext, F, w);
                var C = m.bbox.h + m.bbox.d,
                    l = C - 0.05,
                    x, q, z = (E.mid ? 2 : 1);
                q = x = Math.min(Math.ceil((t - B) / (z * l)), this.maxStretchyParts);
                if (!E.fullExtenders) {
                    l = (t - B) / (z * x)
                }
                var s = (x / (x + 1)) * (C - l);
                l = C - s;
                r += s + l - m.bbox.h;
                while (z-->0) {
                    while (x-->0) {
                        if (!this.msieCloneNodeBug) {
                            p = m.cloneNode(true)
                        } else {
                            p = this.Element("span");
                            this.createChar(p, E.ext, F, w)
                        }
                        p.bbox = m.bbox;
                        r -= l;
                        this.placeBox(this.addBox(o, p), 0, r, true)
                    }
                    r += s - m.bbox.d;
                    if (E.mid && z) {
                        this.placeBox(D, 0, r - D.bbox.h, true);
                        x = q;
                        r += -(D.bbox.h + D.bbox.d) + s + l - m.bbox.h
                    }
                }
            } else {
                r += (B - t) / 2;
                if (E.mid) {
                    this.placeBox(D, 0, r - D.bbox.h, true);
                    r += -(D.bbox.h + D.bbox.d)
                }
                r += (B - t) / 2
            }
            this.placeBox(u, 0, r - u.bbox.h, true);
            r -= u.bbox.h + u.bbox.d;
            A.bbox = {
                w: Math.max(v.bbox.w, m.bbox.w, u.bbox.w, D.bbox.w),
                lw: Math.min(v.bbox.lw, m.bbox.lw, u.bbox.lw, D.bbox.lw),
                rw: Math.max(v.bbox.rw, m.bbox.rw, u.bbox.rw, D.bbox.rw),
                h: 0,
                d: -r,
                exactW: true
            };
            A.scale = F;
            A.offset = 0.55 * A.bbox.w;
            A.isMultiChar = true;
            this.setStackWidth(o, A.bbox.w)
        },
        extendDelimiterH: function(B, o, E, G, y) {
            var r = this.createStack(B, true);
            var p = this.createBox(r),
                C = this.createBox(r);
            this.createChar(p, (E.left || E.rep), G, y);
            this.createChar(C, (E.right || E.rep), G, y);
            var l = this.Element("span");
            this.createChar(l, E.rep, G, y);
            var D = {
                    bbox: {
                        h: -this.BIGDIMEN,
                        d: -this.BIGDIMEN
                    }
                },
                m;
            this.placeBox(p, -p.bbox.lw, 0, true);
            var u = (p.bbox.rw - p.bbox.lw) + (C.bbox.rw - C.bbox.lw) - 0.05,
                t = p.bbox.rw - p.bbox.lw - 0.025,
                v;
            if (E.mid) {
                D = this.createBox(r);
                this.createChar(D, E.mid, G, y);
                u += D.bbox.w
            }
            if (E.min && o < u * E.min) {
                o = u * E.min
            }
            if (o > u) {
                var F = l.bbox.rw - l.bbox.lw,
                    q = F - 0.05,
                    z, s, A = (E.mid ? 2 : 1);
                s = z = Math.min(Math.ceil((o - u) / (A * q)), this.maxStretchyParts);
                if (!E.fillExtenders) {
                    q = (o - u) / (A * z)
                }
                v = (z / (z + 1)) * (F - q);
                q = F - v;
                t -= l.bbox.lw + v;
                while (A-->0) {
                    while (z-->0) {
                        if (!this.cloneNodeBug) {
                            m = l.cloneNode(true)
                        } else {
                            m = this.Element("span");
                            this.createChar(m, E.rep, G, y)
                        }
                        m.bbox = l.bbox;
                        this.placeBox(this.addBox(r, m), t, 0, true);
                        t += q
                    }
                    if (E.mid && A) {
                        this.placeBox(D, t, 0, true);
                        t += D.bbox.w - v;
                        z = s
                    }
                }
            } else {
                t -= (u - o) / 2;
                if (E.mid) {
                    this.placeBox(D, t, 0, true);
                    t += D.bbox.w
                }
                t -= (u - o) / 2
            }
            this.placeBox(C, t, 0, true);
            B.bbox = {
                w: t + C.bbox.rw,
                lw: 0,
                rw: t + C.bbox.rw,
                H: Math.max(p.bbox.h, l.bbox.h, C.bbox.h, D.bbox.h),
                D: Math.max(p.bbox.d, l.bbox.d, C.bbox.d, D.bbox.d),
                h: l.bbox.h,
                d: l.bbox.d,
                exactW: true
            };
            B.scale = G;
            B.isMultiChar = true;
            this.setStackWidth(r, B.bbox.w)
        },
        createChar: function(s, p, n, k) {
            s.isMathJax = true;
            var r = s,
                t = "",
                o = {
                    fonts: [p[1]],
                    noRemap: true
                };
            if (k && k === g.VARIANT.BOLD) {
                o.fonts = [p[1] + "-bold", p[1]]
            }
            if (typeof(p[1]) !== "string") {
                o = p[1]
            }
            if (p[0] instanceof Array) {
                for (var q = 0,
                         l = p[0].length; q < l; q++) {
                    t += String.fromCharCode(p[0][q])
                }
            } else {
                t = String.fromCharCode(p[0])
            }
            if (p[4]) {
                n *= p[4]
            }
            if (n !== 1 || p[3]) {
                r = this.addElement(s, "span", {
                    style: {
                        fontSize: this.Percent(n)
                    },
                    scale: n,
                    isMathJax: true
                });
                this.handleVariant(r, o, t);
                s.bbox = r.bbox
            } else {
                this.handleVariant(s, o, t)
            }
            if (p[2]) {
                s.style.marginLeft = this.Em(p[2])
            }
            if (p[3]) {
                s.firstChild.style.verticalAlign = this.Em(p[3]);
                s.bbox.h += p[3];
                if (s.bbox.h < 0) {
                    s.bbox.h = 0
                }
            }
            if (p[5]) {
                s.bbox.h += p[5]
            }
            if (p[6]) {
                s.bbox.d += p[6]
            }
            if (this.AccentBug && s.bbox.w === 0) {
                r.firstChild.nodeValue += this.NBSP
            }
        },
        positionDelimiter: function(l, k) {
            k -= l.bbox.h;
            l.bbox.d -= k;
            l.bbox.h += k;
            if (k) {
                if (this.safariVerticalAlignBug || this.konquerorVerticalAlignBug || (this.operaVerticalAlignBug && l.isMultiChar)) {
                    if (l.firstChild.style.display === "" && l.style.top !== "") {
                        l = l.firstChild;
                        k -= d.unEm(l.style.top)
                    }
                    l.style.position = "relative";
                    l.style.top = this.Em( - k)
                } else {
                    l.style.verticalAlign = this.Em(k);
                    if (d.ffVerticalAlignBug) {
                        d.createRule(l.parentNode, l.bbox.h, 0, 0)
                    }
                }
            }
        },
        handleVariant: function(A, p, s) {
            var z = "",
                x, C, t, D, k = A,
                l = !!A.style.fontFamily;
            if (s.length === 0) {
                return
            }
            if (!A.bbox) {
                A.bbox = {
                    w: 0,
                    h: -this.BIGDIMEN,
                    d: -this.BIGDIMEN,
                    rw: -this.BIGDIMEN,
                    lw: this.BIGDIMEN
                }
            }
            if (!p) {
                p = this.FONTDATA.VARIANT[g.VARIANT.NORMAL]
            }
            D = p;
            for (var B = 0,
                     y = s.length; B < y; B++) {
                p = D;
                x = s.charCodeAt(B);
                C = s.charAt(B);
                if (x >= 55296 && x < 56319) {
                    B++;
                    x = (((x - 55296) << 10) + (s.charCodeAt(B) - 56320)) + 65536;
                    if (this.FONTDATA.RemapPlane1) {
                        var E = this.FONTDATA.RemapPlane1(x, p);
                        x = E.n;
                        p = E.variant
                    }
                } else {
                    var u, r, v = this.FONTDATA.RANGES;
                    for (u = 0, r = v.length; u < r; u++) {
                        if (v[u].name === "alpha" && p.noLowerCase) {
                            continue
                        }
                        var q = p["offset" + v[u].offset];
                        if (q && x >= v[u].low && x <= v[u].high) {
                            if (v[u].remap && v[u].remap[x]) {
                                x = q + v[u].remap[x]
                            } else {
                                x = x - v[u].low + q;
                                if (v[u].add) {
                                    x += v[u].add
                                }
                            }
                            if (p["variant" + v[u].offset]) {
                                p = this.FONTDATA.VARIANT[p["variant" + v[u].offset]]
                            }
                            break
                        }
                    }
                }
                if (p.remap && p.remap[x]) {
                    if (p.remap[x] instanceof Array) {
                        var o = p.remap[x];
                        x = o[0];
                        p = this.FONTDATA.VARIANT[o[1]]
                    } else {
                        if (typeof(p.remap[x]) === "string") {
                            s = p.remap[x] + s.substr(B + 1);
                            B = 0;
                            y = s.length;
                            x = s.charCodeAt(0)
                        } else {
                            x = p.remap[x];
                            if (p.remap.variant) {
                                p = this.FONTDATA.VARIANT[p.remap.variant]
                            }
                        }
                    }
                }
                if (this.FONTDATA.REMAP[x] && !p.noRemap) {
                    x = this.FONTDATA.REMAP[x];
                    if (x instanceof Array) {
                        p = this.FONTDATA.VARIANT[x[1]];
                        x = x[0]
                    }
                    if (typeof(x) === "string") {
                        s = x + s.substr(B + 1);
                        B = 0;
                        y = s.length;
                        x = x.charCodeAt(0)
                    }
                }
                t = this.lookupChar(p, x);
                C = t[x];
                if (l || (!this.checkFont(t, k.style) && !C[5].img)) {
                    if (z.length) {
                        this.addText(k, z);
                        z = ""
                    }
                    var w = !!k.style.fontFamily || !!A.style.fontStyle || !!A.style.fontWeight || !t.directory || l;
                    l = false;
                    if (k !== A) {
                        w = !this.checkFont(t, A.style);
                        k = A
                    }
                    if (w) {
                        k = this.addElement(A, "span", {
                            isMathJax: true,
                            subSpan: true
                        })
                    }
                    this.handleFont(k, t, k !== A)
                }
                z = this.handleChar(k, t, C, x, z);
                if (! (C[5] || {}).space) {
                    if (C[0] / 1000 > A.bbox.h) {
                        A.bbox.h = C[0] / 1000
                    }
                    if (C[1] / 1000 > A.bbox.d) {
                        A.bbox.d = C[1] / 1000
                    }
                }
                if (A.bbox.w + C[3] / 1000 < A.bbox.lw) {
                    A.bbox.lw = A.bbox.w + C[3] / 1000
                }
                if (A.bbox.w + C[4] / 1000 > A.bbox.rw) {
                    A.bbox.rw = A.bbox.w + C[4] / 1000
                }
                A.bbox.w += C[2] / 1000
            }
            if (z.length) {
                this.addText(k, z)
            }
            if (A.scale && A.scale !== 1) {
                A.bbox.h *= A.scale;
                A.bbox.d *= A.scale;
                A.bbox.w *= A.scale;
                A.bbox.lw *= A.scale;
                A.bbox.rw *= A.scale
            }
            if (s.length == 1 && t.skew && t.skew[x]) {
                A.bbox.skew = t.skew[x]
            }
        },
        checkFont: function(k, l) {
            var m = (l.fontWeight || "normal");
            if (m.match(/^\d+$/)) {
                m = (parseInt(m) >= 600 ? "bold": "normal")
            }
            return (k.family.replace(/'/g, "") === l.fontFamily.replace(/'/g, "") && (k.style || "normal") === (l.fontStyle || "normal") && (k.weight || "normal") === m)
        },
        handleFont: function(m, k, o) {
            m.style.fontFamily = k.family;
            if (!k.directory) {
                m.style.fontSize = Math.floor(100 / d.scale + 0.5) + "%"
            }
            if (! (d.FontFaceBug && k.isWebFont)) {
                var l = k.style || "normal",
                    n = k.weight || "normal";
                if (l !== "normal" || o) {
                    m.style.fontStyle = l
                }
                if (n !== "normal" || o) {
                    m.style.fontWeight = n
                }
            }
        },
        handleChar: function(l, k, s, r, q) {
            var p = s[5];
            if (p.space) {
                if (q.length) {
                    this.addText(l, q)
                }
                d.createShift(l, s[2] / 1000);
                return ""
            }
            if (p.img) {
                return this.handleImg(l, k, s, r, q)
            }
            if (p.isUnknown && this.FONTDATA.DELIMITERS[r]) {
                if (q.length) {
                    this.addText(l, q)
                }
                var o = l.scale;
                d.createDelimiter(l, r, 0, 1, k);
                if (this.FONTDATA.DELIMITERS[r].dir === "V") {
                    l.style.verticalAlign = this.Em(l.bbox.d);
                    l.bbox.h += l.bbox.d;
                    l.bbox.d = 0
                }
                l.scale = o;
                s[0] = l.bbox.h * 1000;
                s[1] = l.bbox.d * 1000;
                s[2] = l.bbox.w * 1000;
                s[3] = l.bbox.lw * 1000;
                s[4] = l.bbox.rw * 1000;
                return ""
            }
            if (p.c == null) {
                if (r <= 65535) {
                    p.c = String.fromCharCode(r)
                } else {
                    var m = r - 65536;
                    p.c = String.fromCharCode((m >> 10) + 55296) + String.fromCharCode((m & 1023) + 56320)
                }
            }
            if (p.rfix) {
                this.addText(l, q + p.c);
                d.createShift(l, p.rfix / 1000);
                return ""
            }
            if (s[2] || !this.msieAccentBug || q.length) {
                return q + p.c
            }
            d.createShift(l, s[3] / 1000);
            d.createShift(l, (s[4] - s[3]) / 1000);
            this.addText(l, p.c);
            d.createShift(l, -s[4] / 1000);
            return ""
        },
        handleImg: function(l, k, p, o, m) {
            return m
        },
        lookupChar: function(p, s) {
            var o, k;
            if (!p.FONTS) {
                var r = this.FONTDATA.FONTS;
                var q = (p.fonts || this.FONTDATA.VARIANT.normal.fonts);
                if (! (q instanceof Array)) {
                    q = [q]
                }
                if (p.fonts != q) {
                    p.fonts = q
                }
                p.FONTS = [];
                for (o = 0, k = q.length; o < k; o++) {
                    if (r[q[o]]) {
                        p.FONTS.push(r[q[o]]);
                        r[q[o]].name = q[o]
                    }
                }
            }
            for (o = 0, k = p.FONTS.length; o < k; o++) {
                var l = p.FONTS[o];
                if (typeof(l) === "string") {
                    delete p.FONTS;
                    this.loadFont(l)
                }
                if (l[s]) {
                    if (l[s].length === 5) {
                        l[s][5] = {}
                    }
                    if (d.allowWebFonts && !l.available) {
                        this.loadWebFont(l)
                    } else {
                        return l
                    }
                } else {
                    this.findBlock(l, s)
                }
            }
            return this.unknownChar(p, s)
        },
        unknownChar: function(k, m) {
            var l = (k.defaultFont || {
                family: d.config.undefinedFamily
            });
            if (k.bold) {
                l.weight = "bold"
            }
            if (k.italic) {
                l.style = "italic"
            }
            if (!l[m]) {
                l[m] = [800, 200, 500, 0, 500, {
                    isUnknown: true
                }]
            }
            b.signal.Post(["HTML-CSS Jax - unknown char", m, k]);
            return l
        },
        findBlock: function(l, q) {
            if (l.Ranges) {
                for (var p = 0,
                         k = l.Ranges.length; p < k; p++) {
                    if (q < l.Ranges[p][0]) {
                        return
                    }
                    if (q <= l.Ranges[p][1]) {
                        var o = l.Ranges[p][2];
                        for (var n = l.Ranges.length - 1; n >= 0; n--) {
                            if (l.Ranges[n][2] == o) {
                                l.Ranges.splice(n, 1)
                            }
                        }
                        this.loadFont(l.directory + "/" + o + ".js")
                    }
                }
            }
        },
        loadFont: function(l) {
            var k = MathJax.Callback.Queue();
            k.Push(["Require", h, this.fontDir + "/" + l]);
            if (this.imgFonts) {
                if (!MathJax.isPacked) {
                    l = l.replace(/\/([^\/]*)$/, d.imgPacked + "/$1")
                }
                k.Push(["Require", h, this.webfontDir + "/png/" + l])
            }
            b.RestartAfter(k.Push({}))
        },
        loadWebFont: function(k) {
            k.available = k.isWebFont = true;
            if (d.FontFaceBug) {
                k.family = k.name;
                if (d.msieFontCSSBug) {
                    k.family += "-Web"
                }
            }
            b.RestartAfter(this.Font.loadWebFont(k))
        },
        loadWebFontError: function(l, k) {
            b.Startup.signal.Post("HTML-CSS Jax - disable web fonts");
            l.isWebFont = false;
            if (this.config.imageFont && this.config.imageFont === this.fontInUse) {
                this.imgFonts = true;
                b.Startup.signal.Post("HTML-CSS Jax - switch to image fonts");
                b.Startup.signal.Post("HTML-CSS Jax - using image fonts");
                e(["WebFontNotAvailable", "Web-Fonts not available -- using image fonts instead"], null, 3000);
                h.Require(this.directory + "/imageFonts.js", k)
            } else {
                this.allowWebFonts = false;
                k()
            }
        },
        Element: MathJax.HTML.Element,
        addElement: MathJax.HTML.addElement,
        TextNode: MathJax.HTML.TextNode,
        addText: MathJax.HTML.addText,
        ucMatch: MathJax.HTML.ucMatch,
        BIGDIMEN: 10000000,
        ID: 0,
        idPostfix: "",
        GetID: function() {
            this.ID++;
            return this.ID
        },
        MATHSPACE: {
            veryverythinmathspace: 1 / 18,
            verythinmathspace: 2 / 18,
            thinmathspace: 3 / 18,
            mediummathspace: 4 / 18,
            thickmathspace: 5 / 18,
            verythickmathspace: 6 / 18,
            veryverythickmathspace: 7 / 18,
            negativeveryverythinmathspace: -1 / 18,
            negativeverythinmathspace: -2 / 18,
            negativethinmathspace: -3 / 18,
            negativemediummathspace: -4 / 18,
            negativethickmathspace: -5 / 18,
            negativeverythickmathspace: -6 / 18,
            negativeveryverythickmathspace: -7 / 18
        },
        TeX: {
            x_height: 0.430554,
            quad: 1,
            num1: 0.676508,
            num2: 0.393732,
            num3: 0.44373,
            denom1: 0.685951,
            denom2: 0.344841,
            sup1: 0.412892,
            sup2: 0.362892,
            sup3: 0.288888,
            sub1: 0.15,
            sub2: 0.247217,
            sup_drop: 0.386108,
            sub_drop: 0.05,
            delim1: 2.39,
            delim2: 1,
            axis_height: 0.25,
            rule_thickness: 0.06,
            big_op_spacing1: 0.111111,
            big_op_spacing2: 0.166666,
            big_op_spacing3: 0.2,
            big_op_spacing4: 0.6,
            big_op_spacing5: 0.1,
            scriptspace: 0.1,
            nulldelimiterspace: 0.12,
            delimiterfactor: 901,
            delimitershortfall: 0.1,
            min_rule_thickness: 1.25
        },
        NBSP: "\u00A0",
        rfuzz: 0
    });
    MathJax.Hub.Register.StartupHook("mml Jax Ready",
        function() {
            g = MathJax.ElementJax.mml;
            g.mbase.Augment({
                    toHTML: function(o) {
                        o = this.HTMLcreateSpan(o);
                        if (this.type != "mrow") {
                            o = this.HTMLhandleSize(o)
                        }
                        for (var l = 0,
                                 k = this.data.length; l < k; l++) {
                            if (this.data[l]) {
                                this.data[l].toHTML(o)
                            }
                        }
                        var q = this.HTMLcomputeBBox(o);
                        var n = o.bbox.h,
                            p = o.bbox.d;
                        for (l = 0, k = q.length; l < k; l++) {
                            q[l].HTMLstretchV(o, n, p)
                        }
                        if (q.length) {
                            this.HTMLcomputeBBox(o, true)
                        }
                        if (this.HTMLlineBreaks(o)) {
                            o = this.HTMLmultiline(o)
                        }
                        this.HTMLhandleSpace(o);
                        this.HTMLhandleColor(o);
                        return o
                    },
                    HTMLlineBreaks: function() {
                        return false
                    },
                    HTMLmultiline: function() {
                        g.mbase.HTMLautoloadFile("multiline")
                    },
                    HTMLcomputeBBox: function(q, p, o, k) {
                        if (o == null) {
                            o = 0
                        }
                        if (k == null) {
                            k = this.data.length
                        }
                        var n = q.bbox = {
                                exactW: true
                            },
                            r = [];
                        while (o < k) {
                            var l = this.data[o];
                            if (!l) {
                                continue
                            }
                            if (!p && l.HTMLcanStretch("Vertical")) {
                                r.push(l);
                                l = (l.CoreMO() || l)
                            }
                            this.HTMLcombineBBoxes(l, n);
                            o++
                        }
                        this.HTMLcleanBBox(n);
                        return r
                    },
                    HTMLcombineBBoxes: function(k, l) {
                        if (l.w == null) {
                            this.HTMLemptyBBox(l)
                        }
                        var n = (k.bbox ? k: k.HTMLspanElement());
                        if (!n || !n.bbox) {
                            return
                        }
                        var m = n.bbox;
                        if (m.d > l.d) {
                            l.d = m.d
                        }
                        if (m.h > l.h) {
                            l.h = m.h
                        }
                        if (m.D != null && m.D > l.D) {
                            l.D = m.D
                        }
                        if (m.H != null && m.H > l.H) {
                            l.H = m.H
                        }
                        if (n.style.paddingLeft) {
                            l.w += d.unEm(n.style.paddingLeft) * (n.scale || 1)
                        }
                        if (l.w + m.lw < l.lw) {
                            l.lw = l.w + m.lw
                        }
                        if (l.w + m.rw > l.rw) {
                            l.rw = l.w + m.rw
                        }
                        l.w += m.w;
                        if (n.style.paddingRight) {
                            l.w += d.unEm(n.style.paddingRight) * (n.scale || 1)
                        }
                        if (m.width) {
                            l.width = m.width;
                            l.minWidth = m.minWidth
                        }
                        if (m.ic) {
                            l.ic = m.ic
                        } else {
                            delete l.ic
                        }
                        if (l.exactW && !m.exactW) {
                            delete l.exactW
                        }
                    },
                    HTMLemptyBBox: function(k) {
                        k.h = k.d = k.H = k.D = k.rw = -d.BIGDIMEN;
                        k.w = 0;
                        k.lw = d.BIGDIMEN;
                        return k
                    },
                    HTMLcleanBBox: function(k) {
                        if (k.h === this.BIGDIMEN) {
                            k.h = k.d = k.H = k.D = k.w = k.rw = k.lw = 0
                        }
                        if (k.D <= k.d) {
                            delete k.D
                        }
                        if (k.H <= k.h) {
                            delete k.H
                        }
                    },
                    HTMLzeroBBox: function() {
                        return {
                            h: 0,
                            d: 0,
                            w: 0,
                            lw: 0,
                            rw: 0
                        }
                    },
                    HTMLcanStretch: function(l) {
                        if (this.isEmbellished()) {
                            var k = this.Core();
                            if (k && k !== this) {
                                return k.HTMLcanStretch(l)
                            }
                        }
                        return false
                    },
                    HTMLstretchH: function(l, k) {
                        return this.HTMLspanElement()
                    },
                    HTMLstretchV: function(l, k, m) {
                        return this.HTMLspanElement()
                    },
                    HTMLnotEmpty: function(k) {
                        while (k) {
                            if ((k.type !== "mrow" && k.type !== "texatom") || k.data.length > 1) {
                                return true
                            }
                            k = k.data[0]
                        }
                        return false
                    },
                    HTMLmeasureChild: function(l, k) {
                        if (this.data[l]) {
                            d.Measured(this.data[l].toHTML(k), k)
                        } else {
                            k.bbox = this.HTMLzeroBBox()
                        }
                    },
                    HTMLboxChild: function(l, k) {
                        if (!this.data[l]) {
                            this.SetData(l, g.mrow())
                        }
                        return this.data[l].toHTML(k)
                    },
                    HTMLcreateSpan: function(k) {
                        if (this.spanID) {
                            var l = this.HTMLspanElement();
                            if (l && (l.parentNode === k || (l.parentNode || {}).parentNode === k)) {
                                while (l.firstChild) {
                                    l.removeChild(l.firstChild)
                                }
                                l.bbox = this.HTMLzeroBBox();
                                l.scale = 1;
                                l.isMultChar = l.HH = null;
                                l.style.cssText = "";
                                return l
                            }
                        }
                        if (this.href) {
                            k = d.addElement(k, "a", {
                                href: this.href,
                                isMathJax: true
                            })
                        }
                        k = d.addElement(k, "span", {
                            className: this.type,
                            isMathJax: true
                        });
                        if (d.imgHeightBug) {
                            k.style.display = "inline-block"
                        }
                        if (this["class"]) {
                            k.className += " " + this["class"]
                        }
                        if (!this.spanID) {
                            this.spanID = d.GetID()
                        }
                        k.id = (this.id || "MathJax-Span-" + this.spanID) + d.idPostfix;
                        k.bbox = this.HTMLzeroBBox();
                        this.styles = {};
                        if (this.style) {
                            k.style.cssText = this.style;
                            if (k.style.fontSize) {
                                this.mathsize = k.style.fontSize;
                                k.style.fontSize = ""
                            }
                            this.styles = {
                                border: d.getBorders(k),
                                padding: d.getPadding(k)
                            };
                            if (this.styles.border) {
                                k.style.border = ""
                            }
                            if (this.styles.padding) {
                                k.style.padding = ""
                            }
                        }
                        if (this.href) {
                            k.parentNode.bbox = k.bbox
                        }
                        return k
                    },
                    HTMLspanElement: function() {
                        if (!this.spanID) {
                            return null
                        }
                        return document.getElementById((this.id || "MathJax-Span-" + this.spanID) + d.idPostfix)
                    },
                    HTMLhandleVariant: function(l, k, m) {
                        d.handleVariant(l, k, m)
                    },
                    HTMLhandleSize: function(k) {
                        if (!k.scale) {
                            k.scale = this.HTMLgetScale();
                            if (k.scale !== 1) {
                                k.style.fontSize = d.Percent(k.scale)
                            }
                        }
                        return k
                    },
                    HTMLhandleDir: function(l) {
                        var k = this.Get("dir", true);
                        if (k) {
                            l.dir = k
                        }
                        return l
                    },
                    HTMLhandleColor: function(w) {
                        var y = this.getValues("mathcolor", "color");
                        if (this.mathbackground) {
                            y.mathbackground = this.mathbackground
                        }
                        if (this.background) {
                            y.background = this.background
                        }
                        if (this.style && w.style.backgroundColor) {
                            y.mathbackground = w.style.backgroundColor;
                            w.style.backgroundColor = "transparent"
                        }
                        var t = (this.styles || {}).border,
                            v = (this.styles || {}).padding;
                        if (y.color && !this.mathcolor) {
                            y.mathcolor = y.color
                        }
                        if (y.background && !this.mathbackground) {
                            y.mathbackground = y.background
                        }
                        if (y.mathcolor) {
                            w.style.color = y.mathcolor
                        }
                        if ((y.mathbackground && y.mathbackground !== g.COLOR.TRANSPARENT) || t || v) {
                            var A = w.bbox,
                                z = (A.exact ? 0 : 1 / d.em),
                                u = 0,
                                s = 0,
                                m = w.style.paddingLeft,
                                q = w.style.paddingRight;
                            if (this.isToken) {
                                u = A.lw;
                                s = A.rw - A.w
                            }
                            if (m !== "") {
                                u += d.unEm(m) * (w.scale || 1)
                            }
                            if (q !== "") {
                                s -= d.unEm(q) * (w.scale || 1)
                            }
                            var l = (d.PaddingWidthBug || A.keepPadding || A.exactW ? 0 : s - u);
                            var o = Math.max(0, d.getW(w) + l);
                            var x = A.h + A.d,
                                k = -A.d,
                                r = 0,
                                p = 0;
                            if (o > 0) {
                                o += 2 * z;
                                u -= z
                            }
                            if (x > 0) {
                                x += 2 * z;
                                k -= z
                            }
                            s = -o - u;
                            if (t) {
                                s -= t.right;
                                k -= t.bottom;
                                r += t.left;
                                p += t.right;
                                A.h += t.top;
                                A.d += t.bottom;
                                A.w += t.left + t.right;
                                A.lw -= t.left;
                                A.rw += t.right
                            }
                            if (v) {
                                x += v.top + v.bottom;
                                o += v.left + v.right;
                                s -= v.right;
                                k -= v.bottom;
                                r += v.left;
                                p += v.right;
                                A.h += v.top;
                                A.d += v.bottom;
                                A.w += v.left + v.right;
                                A.lw -= v.left;
                                A.rw += v.right
                            }
                            if (p) {
                                w.style.paddingRight = d.Em(p)
                            }
                            var n = d.Element("span", {
                                id: "MathJax-Color-" + this.spanID + d.idPostfix,
                                isMathJax: true,
                                style: {
                                    display: "inline-block",
                                    backgroundColor: y.mathbackground,
                                    width: d.Em(o),
                                    height: d.Em(x),
                                    verticalAlign: d.Em(k),
                                    marginLeft: d.Em(u),
                                    marginRight: d.Em(s)
                                }
                            });
                            d.setBorders(n, t);
                            if (A.width) {
                                n.style.width = A.width;
                                n.style.marginRight = "-" + A.width
                            }
                            if (d.msieInlineBlockAlignBug) {
                                n.style.position = "relative";
                                n.style.width = n.style.height = 0;
                                n.style.verticalAlign = n.style.marginLeft = n.style.marginRight = "";
                                n.style.border = n.style.padding = "";
                                if (t && d.msieBorderWidthBug) {
                                    x += t.top + t.bottom;
                                    o += t.left + t.right
                                }
                                n.style.width = d.Em(r + z);
                                d.placeBox(d.addElement(n, "span", {
                                    noAdjust: true,
                                    isMathJax: true,
                                    style: {
                                        display: "inline-block",
                                        position: "absolute",
                                        overflow: "hidden",
                                        background: (y.mathbackground || "transparent"),
                                        width: d.Em(o),
                                        height: d.Em(x)
                                    }
                                }), u, A.h + z);
                                d.setBorders(n.firstChild, t)
                            }
                            w.parentNode.insertBefore(n, w);
                            if (d.msieColorPositionBug) {
                                w.style.position = "relative"
                            }
                            return n
                        }
                        return null
                    },
                    HTMLremoveColor: function() {
                        var k = document.getElementById("MathJax-Color-" + this.spanID + d.idPostfix);
                        if (k) {
                            k.parentNode.removeChild(k)
                        }
                    },
                    HTMLhandleSpace: function(o) {
                        if (this.useMMLspacing) {
                            if (this.type !== "mo") {
                                return
                            }
                            var m = this.getValues("scriptlevel", "lspace", "rspace");
                            if (m.scriptlevel <= 0 || this.hasValue("lspace") || this.hasValue("rspace")) {
                                var l = this.HTMLgetMu(o);
                                m.lspace = Math.max(0, d.length2em(m.lspace, l));
                                m.rspace = Math.max(0, d.length2em(m.rspace, l));
                                var k = this,
                                    n = this.Parent();
                                while (n && n.isEmbellished() && n.Core() === k) {
                                    k = n;
                                    n = n.Parent();
                                    o = k.HTMLspanElement()
                                }
                                if (m.lspace) {
                                    o.style.paddingLeft = d.Em(m.lspace)
                                }
                                if (m.rspace) {
                                    o.style.paddingRight = d.Em(m.rspace)
                                }
                            }
                        } else {
                            var p = this.texSpacing();
                            if (p !== "") {
                                p = d.length2em(p, this.HTMLgetScale()) / (o.scale || 1);
                                if (o.style.paddingLeft) {
                                    p += d.unEm(o.style.paddingLeft)
                                }
                                o.style.paddingLeft = d.Em(p)
                            }
                        }
                    },
                    HTMLgetScale: function() {
                        var m = 1,
                            k = this.getValues("mathsize", "scriptlevel", "fontsize");
                        if (this.style) {
                            var l = this.HTMLspanElement();
                            if (l.style.fontSize != "") {
                                k.fontsize = l.style.fontSize
                            }
                        }
                        if (k.fontsize && !this.mathsize) {
                            k.mathsize = k.fontsize
                        }
                        if (k.scriptlevel !== 0) {
                            if (k.scriptlevel > 2) {
                                k.scriptlevel = 2
                            }
                            m = Math.pow(this.Get("scriptsizemultiplier"), k.scriptlevel);
                            k.scriptminsize = d.length2em(this.Get("scriptminsize"));
                            if (m < k.scriptminsize) {
                                m = k.scriptminsize
                            }
                        }
                        if (this.isToken) {
                            m *= d.length2em(k.mathsize)
                        }
                        return m
                    },
                    HTMLgetMu: function(m) {
                        var k = 1,
                            l = this.getValues("scriptlevel", "scriptsizemultiplier");
                        if (m.scale && m.scale !== 1) {
                            k = 1 / m.scale
                        }
                        if (l.scriptlevel !== 0) {
                            if (l.scriptlevel > 2) {
                                l.scriptlevel = 2
                            }
                            k = Math.sqrt(Math.pow(l.scriptsizemultiplier, l.scriptlevel))
                        }
                        return k
                    },
                    HTMLgetVariant: function() {
                        var k = this.getValues("mathvariant", "fontfamily", "fontweight", "fontstyle");
                        k.hasVariant = this.Get("mathvariant", true);
                        if (!k.hasVariant) {
                            k.family = k.fontfamily;
                            k.weight = k.fontweight;
                            k.style = k.fontstyle
                        }
                        if (this.style) {
                            var m = this.HTMLspanElement();
                            if (!k.family && m.style.fontFamily) {
                                k.family = m.style.fontFamily
                            }
                            if (!k.weight && m.style.fontWeight) {
                                k.weight = m.style.fontWeight
                            }
                            if (!k.style && m.style.fontStyle) {
                                k.style = m.style.fontStyle
                            }
                        }
                        if (k.weight && k.weight.match(/^\d+$/)) {
                            k.weight = (parseInt(k.weight) > 600 ? "bold": "normal")
                        }
                        var l = k.mathvariant;
                        if (this.variantForm) {
                            l = "-" + d.fontInUse + "-variant"
                        }
                        if (k.family && !k.hasVariant) {
                            if (!k.weight && k.mathvariant.match(/bold/)) {
                                k.weight = "bold"
                            }
                            if (!k.style && k.mathvariant.match(/italic/)) {
                                k.style = "italic"
                            }
                            return {
                                FONTS: [],
                                fonts: [],
                                noRemap: true,
                                defaultFont: {
                                    family: k.family,
                                    style: k.style,
                                    weight: k.weight
                                }
                            }
                        }
                        if (k.weight === "bold") {
                            l = {
                                normal: g.VARIANT.BOLD,
                                italic: g.VARIANT.BOLDITALIC,
                                fraktur: g.VARIANT.BOLDFRAKTUR,
                                script: g.VARIANT.BOLDSCRIPT,
                                "sans-serif": g.VARIANT.BOLDSANSSERIF,
                                "sans-serif-italic": g.VARIANT.SANSSERIFBOLDITALIC
                            } [l] || l
                        } else {
                            if (k.weight === "normal") {
                                l = {
                                    bold: g.VARIANT.normal,
                                    "bold-italic": g.VARIANT.ITALIC,
                                    "bold-fraktur": g.VARIANT.FRAKTUR,
                                    "bold-script": g.VARIANT.SCRIPT,
                                    "bold-sans-serif": g.VARIANT.SANSSERIF,
                                    "sans-serif-bold-italic": g.VARIANT.SANSSERIFITALIC
                                } [l] || l
                            }
                        }
                        if (k.style === "italic") {
                            l = {
                                normal: g.VARIANT.ITALIC,
                                bold: g.VARIANT.BOLDITALIC,
                                "sans-serif": g.VARIANT.SANSSERIFITALIC,
                                "bold-sans-serif": g.VARIANT.SANSSERIFBOLDITALIC
                            } [l] || l
                        } else {
                            if (k.style === "normal") {
                                l = {
                                    italic: g.VARIANT.NORMAL,
                                    "bold-italic": g.VARIANT.BOLD,
                                    "sans-serif-italic": g.VARIANT.SANSSERIF,
                                    "sans-serif-bold-italic": g.VARIANT.BOLDSANSSERIF
                                } [l] || l
                            }
                        }
                        if (! (l in d.FONTDATA.VARIANT)) {
                            l = "normal"
                        }
                        return d.FONTDATA.VARIANT[l]
                    }
                },
                {
                    HTMLautoload: function() {
                        var k = d.autoloadDir + "/" + this.type + ".js";
                        b.RestartAfter(h.Require(k))
                    },
                    HTMLautoloadFile: function(k) {
                        var l = d.autoloadDir + "/" + k + ".js";
                        b.RestartAfter(h.Require(l))
                    },
                    HTMLstretchH: function(l, k) {
                        this.HTMLremoveColor();
                        return this.toHTML(l, k)
                    },
                    HTMLstretchV: function(l, k, m) {
                        this.HTMLremoveColor();
                        return this.toHTML(l, k, m)
                    }
                });
            g.chars.Augment({
                toHTML: function(n, m, l, o) {
                    var r = this.data.join("").replace(/[\u2061-\u2064]/g, "");
                    if (l) {
                        r = l(r, o)
                    }
                    if (m.fontInherit) {
                        var q = Math.floor(100 / d.scale + 0.5) + "%";
                        d.addElement(n, "span", {
                                style: {
                                    "font-size": q
                                }
                            },
                            [r]);
                        if (m.bold) {
                            n.lastChild.style.fontWeight = "bold"
                        }
                        if (m.italic) {
                            n.lastChild.style.fontStyle = "italic"
                        }
                        var p = d.getHD(n),
                            k = d.getW(n);
                        n.bbox = {
                            h: p.h,
                            d: p.d,
                            w: k,
                            lw: 0,
                            rw: k,
                            exactW: true
                        }
                    } else {
                        this.HTMLhandleVariant(n, m, r)
                    }
                }
            });
            g.entity.Augment({
                toHTML: function(n, m, l, o) {
                    var r = this.toString().replace(/[\u2061-\u2064]/g, "");
                    if (l) {
                        r = l(r, o)
                    }
                    if (m.fontInherit) {
                        var q = Math.floor(100 / d.scale + 0.5) + "%";
                        d.addElement(n, "span", {
                                style: {
                                    "font-size": q
                                }
                            },
                            [r]);
                        if (m.bold) {
                            n.lastChild.style.fontWeight = "bold"
                        }
                        if (m.italic) {
                            n.lastChild.style.fontStyle = "italic"
                        }
                        var p = d.getHD(n),
                            k = d.getW(n);
                        n.bbox = {
                            h: p.h,
                            d: p.d,
                            w: k,
                            lw: 0,
                            rw: k,
                            exactW: true
                        }
                    } else {
                        this.HTMLhandleVariant(n, m, r)
                    }
                }
            });
            g.mi.Augment({
                toHTML: function(o) {
                    o = this.HTMLhandleSize(this.HTMLcreateSpan(o));
                    o.bbox = null;
                    var n = this.HTMLgetVariant();
                    for (var l = 0,
                             k = this.data.length; l < k; l++) {
                        if (this.data[l]) {
                            this.data[l].toHTML(o, n)
                        }
                    }
                    if (!o.bbox) {
                        o.bbox = this.HTMLzeroBBox()
                    }
                    var q = this.data.join(""),
                        p = o.bbox;
                    if (p.skew && q.length !== 1) {
                        delete p.skew
                    }
                    if (p.rw > p.w && q.length === 1 && !n.noIC) {
                        p.ic = p.rw - p.w;
                        d.createBlank(o, p.ic);
                        p.w = p.rw
                    }
                    this.HTMLhandleSpace(o);
                    this.HTMLhandleColor(o);
                    this.HTMLhandleDir(o);
                    return o
                }
            });
            g.mn.Augment({
                toHTML: function(o) {
                    o = this.HTMLhandleSize(this.HTMLcreateSpan(o));
                    o.bbox = null;
                    var n = this.HTMLgetVariant();
                    for (var l = 0,
                             k = this.data.length; l < k; l++) {
                        if (this.data[l]) {
                            this.data[l].toHTML(o, n)
                        }
                    }
                    if (!o.bbox) {
                        o.bbox = this.HTMLzeroBBox()
                    }
                    if (this.data.join("").length !== 1) {
                        delete o.bbox.skew
                    }
                    this.HTMLhandleSpace(o);
                    this.HTMLhandleColor(o);
                    this.HTMLhandleDir(o);
                    return o
                }
            });
            g.mo.Augment({
                toHTML: function(u) {
                    u = this.HTMLhandleSize(this.HTMLcreateSpan(u));
                    if (this.data.length == 0) {
                        return u
                    } else {
                        u.bbox = null
                    }
                    var x = this.data.join("");
                    var q = this.HTMLgetVariant();
                    var w = this.getValues("largeop", "displaystyle");
                    if (w.largeop) {
                        q = d.FONTDATA.VARIANT[w.displaystyle ? "-largeOp": "-smallOp"]
                    }
                    var v = this.CoreParent(),
                        o = (v && v.isa(g.msubsup) && this !== v.data[v.base]),
                        l = (o ? this.HTMLremapChars: null);
                    if (x.length === 1 && v && v.isa(g.munderover) && this.CoreText(v.data[v.base]).length === 1) {
                        var s = v.data[v.over],
                            t = v.data[v.under];
                        if (s && this === s.CoreMO() && v.Get("accent")) {
                            l = d.FONTDATA.REMAPACCENT
                        } else {
                            if (t && this === t.CoreMO() && v.Get("accentunder")) {
                                l = d.FONTDATA.REMAPACCENTUNDER
                            }
                        }
                    }
                    if (o && x.match(/['`"\u00B4\u2032-\u2037\u2057]/)) {
                        q = d.FONTDATA.VARIANT["-" + d.fontInUse + "-variant"]
                    }
                    for (var r = 0,
                             n = this.data.length; r < n; r++) {
                        if (this.data[r]) {
                            this.data[r].toHTML(u, q, this.HTMLremap, l)
                        }
                    }
                    if (!u.bbox) {
                        u.bbox = this.HTMLzeroBBox()
                    }
                    if (x.length !== 1) {
                        delete u.bbox.skew
                    }
                    if (d.AccentBug && u.bbox.w === 0 && x.length === 1 && u.firstChild) {
                        u.firstChild.nodeValue += d.NBSP;
                        d.createSpace(u, 0, 0, -u.offsetWidth / d.em)
                    }
                    if (w.largeop) {
                        var k = (u.bbox.h - u.bbox.d) / 2 - d.TeX.axis_height * u.scale;
                        if (d.safariVerticalAlignBug && u.lastChild.nodeName === "IMG") {
                            u.lastChild.style.verticalAlign = d.Em(d.unEm(u.lastChild.style.verticalAlign || 0) / d.em - k / u.scale)
                        } else {
                            if (d.konquerorVerticalAlignBug && u.lastChild.nodeName === "IMG") {
                                u.style.position = "relative";
                                u.lastChild.style.position = "relative";
                                u.lastChild.style.top = d.Em(k / u.scale)
                            } else {
                                u.style.verticalAlign = d.Em( - k / u.scale)
                            }
                        }
                        u.bbox.h -= k;
                        u.bbox.d += k;
                        if (u.bbox.rw > u.bbox.w) {
                            u.bbox.ic = u.bbox.rw - u.bbox.w;
                            d.createBlank(u, u.bbox.ic);
                            u.bbox.w = u.bbox.rw
                        }
                    }
                    this.HTMLhandleSpace(u);
                    this.HTMLhandleColor(u);
                    this.HTMLhandleDir(u);
                    return u
                },
                CoreParent: function() {
                    var k = this;
                    while (k && k.isEmbellished() && k.CoreMO() === this && !k.isa(g.math)) {
                        k = k.Parent()
                    }
                    return k
                },
                CoreText: function(k) {
                    if (!k) {
                        return ""
                    }
                    if (k.isEmbellished()) {
                        return k.CoreMO().data.join("")
                    }
                    while ((k.isa(g.mrow) || k.isa(g.TeXAtom) || k.isa(g.mstyle) || k.isa(g.mphantom)) && k.data.length === 1 && k.data[0]) {
                        k = k.data[0]
                    }
                    if (!k.isToken) {
                        return ""
                    } else {
                        return k.data.join("")
                    }
                },
                HTMLremapChars: {
                    "*": "\u2217",
                    '"': "\u2033",
                    "\u00B0": "\u2218",
                    "\u00B2": "2",
                    "\u00B3": "3",
                    "\u00B4": "\u2032",
                    "\u00B9": "1"
                },
                HTMLremap: function(l, k) {
                    l = l.replace(/-/g, "\u2212");
                    if (k) {
                        l = l.replace(/'/g, "\u2032").replace(/`/g, "\u2035");
                        if (l.length === 1) {
                            l = k[l] || l
                        }
                    }
                    return l
                },
                HTMLcanStretch: function(n) {
                    if (!this.Get("stretchy")) {
                        return false
                    }
                    var o = this.data.join("");
                    if (o.length > 1) {
                        return false
                    }
                    var l = this.CoreParent();
                    if (l && l.isa(g.munderover) && this.CoreText(l.data[l.base]).length === 1) {
                        var m = l.data[l.over],
                            k = l.data[l.under];
                        if (m && this === m.CoreMO() && l.Get("accent")) {
                            o = d.FONTDATA.REMAPACCENT[o] || o
                        } else {
                            if (k && this === k.CoreMO() && l.Get("accentunder")) {
                                o = d.FONTDATA.REMAPACCENTUNDER[o] || o
                            }
                        }
                    }
                    o = d.FONTDATA.DELIMITERS[o.charCodeAt(0)];
                    return (o && o.dir == n.substr(0, 1))
                },
                HTMLstretchV: function(m, n, o) {
                    this.HTMLremoveColor();
                    var r = this.getValues("symmetric", "maxsize", "minsize");
                    var p = this.HTMLspanElement(),
                        s = this.HTMLgetMu(p),
                        q;
                    var k = d.TeX.axis_height,
                        l = p.scale;
                    if (r.symmetric) {
                        q = 2 * Math.max(n - k, o + k)
                    } else {
                        q = n + o
                    }
                    r.maxsize = d.length2em(r.maxsize, s, p.bbox.h + p.bbox.d);
                    r.minsize = d.length2em(r.minsize, s, p.bbox.h + p.bbox.d);
                    q = Math.max(r.minsize, Math.min(r.maxsize, q));
                    p = this.HTMLcreateSpan(m);
                    d.createDelimiter(p, this.data.join("").charCodeAt(0), q, l);
                    if (r.symmetric) {
                        q = (p.bbox.h + p.bbox.d) / 2 + k
                    } else {
                        q = (p.bbox.h + p.bbox.d) * n / (n + o)
                    }
                    d.positionDelimiter(p, q);
                    this.HTMLhandleSpace(p);
                    this.HTMLhandleColor(p);
                    return p
                },
                HTMLstretchH: function(o, k) {
                    this.HTMLremoveColor();
                    var m = this.getValues("maxsize", "minsize", "mathvariant", "fontweight");
                    if ((m.fontweight === "bold" || parseInt(m.fontweight) >= 600) && !this.Get("mathvariant", true)) {
                        m.mathvariant = g.VARIANT.BOLD
                    }
                    var n = this.HTMLspanElement(),
                        l = this.HTMLgetMu(n),
                        p = n.scale;
                    m.maxsize = d.length2em(m.maxsize, l, n.bbox.w);
                    m.minsize = d.length2em(m.minsize, l, n.bbox.w);
                    k = Math.max(m.minsize, Math.min(m.maxsize, k));
                    n = this.HTMLcreateSpan(o);
                    d.createDelimiter(n, this.data.join("").charCodeAt(0), k, p, m.mathvariant);
                    this.HTMLhandleSpace(n);
                    this.HTMLhandleColor(n);
                    return n
                }
            });
            g.mtext.Augment({
                toHTML: function(o) {
                    o = this.HTMLhandleSize(this.HTMLcreateSpan(o));
                    var n = this.HTMLgetVariant();
                    if (d.config.mtextFontInherit || this.Parent().type === "merror") {
                        n = {
                            bold: n.bold,
                            italic: n.italic,
                            fontInherit: true
                        }
                    }
                    for (var l = 0,
                             k = this.data.length; l < k; l++) {
                        if (this.data[l]) {
                            this.data[l].toHTML(o, n)
                        }
                    }
                    if (!o.bbox) {
                        o.bbox = this.HTMLzeroBBox()
                    }
                    if (this.data.join("").length !== 1) {
                        delete o.bbox.skew
                    }
                    this.HTMLhandleSpace(o);
                    this.HTMLhandleColor(o);
                    this.HTMLhandleDir(o);
                    return o
                }
            });
            g.merror.Augment({
                toHTML: function(l) {
                    var n = MathJax.HTML.addElement(l, "span", {
                        style: {
                            display: "inline-block"
                        }
                    });
                    l = this.SUPER(arguments).toHTML.call(this, n);
                    var m = d.getHD(n),
                        k = d.getW(n);
                    n.bbox = {
                        h: m.h,
                        d: m.d,
                        w: k,
                        lw: 0,
                        rw: k,
                        exactW: true
                    };
                    n.id = l.id;
                    l.id = null;
                    return n
                }
            });
            g.ms.Augment({
                toHTML: g.mbase.HTMLautoload
            });
            g.mglyph.Augment({
                toHTML: g.mbase.HTMLautoload
            });
            g.mspace.Augment({
                toHTML: function(o) {
                    o = this.HTMLcreateSpan(o);
                    var m = this.getValues("height", "depth", "width");
                    var l = this.HTMLgetMu(o);
                    m.mathbackground = this.mathbackground;
                    if (this.background && !this.mathbackground) {
                        m.mathbackground = this.background
                    }
                    var n = d.length2em(m.height, l),
                        p = d.length2em(m.depth, l),
                        k = d.length2em(m.width, l);
                    d.createSpace(o, n, p, k, m.mathbackground, true);
                    return o
                }
            });
            g.mphantom.Augment({
                toHTML: function(o, l, q) {
                    o = this.HTMLcreateSpan(o);
                    if (this.data[0] != null) {
                        var p = this.data[0].toHTML(o);
                        if (q != null) {
                            d.Remeasured(this.data[0].HTMLstretchV(o, l, q), o)
                        } else {
                            if (l != null) {
                                d.Remeasured(this.data[0].HTMLstretchH(o, l), o)
                            } else {
                                p = d.Measured(p, o)
                            }
                        }
                        o.bbox = {
                            w: p.bbox.w,
                            h: p.bbox.h,
                            d: p.bbox.d,
                            lw: 0,
                            rw: 0,
                            exactW: true
                        };
                        for (var n = 0,
                                 k = o.childNodes.length; n < k; n++) {
                            o.childNodes[n].style.visibility = "hidden"
                        }
                    }
                    this.HTMLhandleSpace(o);
                    this.HTMLhandleColor(o);
                    return o
                },
                HTMLstretchH: g.mbase.HTMLstretchH,
                HTMLstretchV: g.mbase.HTMLstretchV
            });
            g.mpadded.Augment({
                toHTML: function(s, m, k) {
                    s = this.HTMLcreateSpan(s);
                    if (this.data[0] != null) {
                        var q = d.createStack(s, true);
                        var n = d.createBox(q);
                        var l = this.data[0].toHTML(n);
                        if (k != null) {
                            d.Remeasured(this.data[0].HTMLstretchV(n, m, k), n)
                        } else {
                            if (m != null) {
                                d.Remeasured(this.data[0].HTMLstretchH(n, m), n)
                            } else {
                                d.Measured(l, n)
                            }
                        }
                        var t = this.getValues("height", "depth", "width", "lspace", "voffset"),
                            r = 0,
                            p = 0,
                            u = this.HTMLgetMu(s);
                        if (t.lspace) {
                            r = this.HTMLlength2em(n, t.lspace, u)
                        }
                        if (t.voffset) {
                            p = this.HTMLlength2em(n, t.voffset, u)
                        }
                        d.placeBox(n, r, p);
                        s.bbox = {
                            h: n.bbox.h,
                            d: n.bbox.d,
                            w: n.bbox.w,
                            exactW: true,
                            lw: Math.min(0, n.bbox.lw + r),
                            rw: Math.max(n.bbox.w, n.bbox.rw + r),
                            H: Math.max((n.bbox.H == null ? -d.BIGDIMEN: n.bbox.H), n.bbox.h + p),
                            D: Math.max((n.bbox.D == null ? -d.BIGDIMEN: n.bbox.D), n.bbox.d - p)
                        };
                        if (t.height !== "") {
                            s.bbox.h = this.HTMLlength2em(n, t.height, u, "h", 0)
                        }
                        if (t.depth !== "") {
                            s.bbox.d = this.HTMLlength2em(n, t.depth, u, "d", 0)
                        }
                        if (t.width !== "") {
                            s.bbox.w = this.HTMLlength2em(n, t.width, u, "w", 0)
                        }
                        if (s.bbox.H <= s.bbox.h) {
                            delete s.bbox.H
                        }
                        if (s.bbox.D <= s.bbox.d) {
                            delete s.bbox.D
                        }
                        var o = /^\s*(\d+(\.\d*)?|\.\d+)\s*(pt|em|ex|mu|px|pc|in|mm|cm)\s*$/;
                        s.bbox.exact = !!((this.data[0] && this.data[0].data.length == 0) || o.exec(t.height) || o.exec(t.width) || o.exec(t.depth));
                        d.setStackWidth(q, s.bbox.w)
                    }
                    this.HTMLhandleSpace(s);
                    this.HTMLhandleColor(s);
                    return s
                },
                HTMLlength2em: function(q, r, l, s, k) {
                    if (k == null) {
                        k = -d.BIGDIMEN
                    }
                    var o = String(r).match(/width|height|depth/);
                    var p = (o ? q.bbox[o[0].charAt(0)] : (s ? q.bbox[s] : 0));
                    var n = d.length2em(r, l, p);
                    if (s && String(r).match(/^\s*[-+]/)) {
                        return Math.max(k, q.bbox[s] + n)
                    } else {
                        return n
                    }
                },
                HTMLstretchH: g.mbase.HTMLstretchH,
                HTMLstretchV: g.mbase.HTMLstretchV
            });
            g.mrow.Augment({
                HTMLlineBreaks: function(k) {
                    if (!this.parent.linebreakContainer) {
                        return false
                    }
                    return (d.config.linebreaks.automatic && k.bbox.w > d.linebreakWidth) || this.hasNewline()
                },
                HTMLstretchH: function(m, k) {
                    this.HTMLremoveColor();
                    var l = this.HTMLspanElement();
                    this.data[this.core].HTMLstretchH(l, k);
                    this.HTMLcomputeBBox(l, true);
                    this.HTMLhandleColor(l);
                    return l
                },
                HTMLstretchV: function(m, l, n) {
                    this.HTMLremoveColor();
                    var k = this.HTMLspanElement();
                    this.data[this.core].HTMLstretchV(k, l, n);
                    this.HTMLcomputeBBox(k, true);
                    this.HTMLhandleColor(k);
                    return k
                }
            });
            g.mstyle.Augment({
                toHTML: function(l, k, m) {
                    l = this.HTMLcreateSpan(l);
                    if (this.data[0] != null) {
                        var n = this.data[0].toHTML(l);
                        if (m != null) {
                            this.data[0].HTMLstretchV(l, k, m)
                        } else {
                            if (k != null) {
                                this.data[0].HTMLstretchH(l, k)
                            }
                        }
                        l.bbox = n.bbox
                    }
                    this.HTMLhandleSpace(l);
                    this.HTMLhandleColor(l);
                    return l
                },
                HTMLstretchH: g.mbase.HTMLstretchH,
                HTMLstretchV: g.mbase.HTMLstretchV
            });
            g.mfrac.Augment({
                toHTML: function(D) {
                    D = this.HTMLcreateSpan(D);
                    var m = d.createStack(D);
                    var r = d.createBox(m),
                        o = d.createBox(m);
                    d.MeasureSpans([this.HTMLboxChild(0, r), this.HTMLboxChild(1, o)]);
                    var k = this.getValues("displaystyle", "linethickness", "numalign", "denomalign", "bevelled");
                    var I = this.HTMLgetScale(),
                        C = k.displaystyle;
                    var G = d.TeX.axis_height * I;
                    if (k.bevelled) {
                        var F = (C ? 0.4 : 0.15);
                        var s = Math.max(r.bbox.h + r.bbox.d, o.bbox.h + o.bbox.d) + 2 * F;
                        var E = d.createBox(m);
                        d.createDelimiter(E, 47, s);
                        d.placeBox(r, 0, (r.bbox.d - r.bbox.h) / 2 + G + F);
                        d.placeBox(E, r.bbox.w - F / 2, (E.bbox.d - E.bbox.h) / 2 + G);
                        d.placeBox(o, r.bbox.w + E.bbox.w - F, (o.bbox.d - o.bbox.h) / 2 + G - F)
                    } else {
                        var l = Math.max(r.bbox.w, o.bbox.w);
                        var y = d.thickness2em(k.linethickness, I),
                            A,
                            z,
                            x,
                            w;
                        var B = d.TeX.min_rule_thickness / this.em;
                        if (C) {
                            x = d.TeX.num1;
                            w = d.TeX.denom1
                        } else {
                            x = (y === 0 ? d.TeX.num3: d.TeX.num2);
                            w = d.TeX.denom2
                        }
                        x *= I;
                        w *= I;
                        if (y === 0) {
                            A = Math.max((C ? 7 : 3) * d.TeX.rule_thickness, 2 * B);
                            z = (x - r.bbox.d) - (o.bbox.h - w);
                            if (z < A) {
                                x += (A - z) / 2;
                                w += (A - z) / 2
                            }
                        } else {
                            A = Math.max((C ? 2 : 0) * B + y, y / 2 + 1.5 * B);
                            z = (x - r.bbox.d) - (G + y / 2);
                            if (z < A) {
                                x += A - z
                            }
                            z = (G - y / 2) - (o.bbox.h - w);
                            if (z < A) {
                                w += A - z
                            }
                            var n = d.createBox(m);
                            d.createRule(n, y, 0, l + 2 * y);
                            d.placeBox(n, 0, G - y / 2)
                        }
                        d.alignBox(r, k.numalign, x);
                        d.alignBox(o, k.denomalign, -w)
                    }
                    this.HTMLhandleSpace(D);
                    this.HTMLhandleColor(D);
                    return D
                },
                HTMLcanStretch: function(k) {
                    return false
                },
                HTMLhandleSpace: function(k) {
                    if (!this.texWithDelims) {
                        var l = (this.useMMLspacing ? 0 : d.length2em(this.texSpacing() || 0)) + 0.12;
                        k.style.paddingLeft = d.Em(l);
                        k.style.paddingRight = d.Em(0.12)
                    }
                }
            });
            g.msqrt.Augment({
                toHTML: function(w) {
                    w = this.HTMLcreateSpan(w);
                    var z = d.createStack(w);
                    var n = d.createBox(z),
                        u = d.createBox(z),
                        s = d.createBox(z);
                    var r = this.HTMLgetScale();
                    var A = d.TeX.rule_thickness * r,
                        m, l, y, o;
                    if (this.Get("displaystyle")) {
                        m = d.TeX.x_height * r
                    } else {
                        m = A
                    }
                    l = Math.max(A + m / 4, 1.5 * d.TeX.min_rule_thickness / this.em);
                    var k = this.HTMLboxChild(0, n);
                    y = k.bbox.h + k.bbox.d + l + A;
                    d.createDelimiter(s, 8730, y, r);
                    d.MeasureSpans([k, s]);
                    o = k.bbox.w;
                    var v = 0;
                    if (s.isMultiChar || (d.AdjustSurd && d.imgFonts)) {
                        s.bbox.w *= 0.95
                    }
                    if (s.bbox.h + s.bbox.d > y) {
                        l = ((s.bbox.h + s.bbox.d) - (y - A)) / 2
                    }
                    var B = d.FONTDATA.DELIMITERS[d.FONTDATA.RULECHAR];
                    if (!B || o < B.HW[0][0] * r || r < 0.75) {
                        d.createRule(u, 0, A, o)
                    } else {
                        d.createDelimiter(u, d.FONTDATA.RULECHAR, o, r)
                    }
                    y = k.bbox.h + l + A;
                    l = y * d.rfuzz;
                    if (s.isMultiChar) {
                        l = d.rfuzz
                    }
                    v = this.HTMLaddRoot(z, s, v, s.bbox.h + s.bbox.d - y, r);
                    d.placeBox(s, v, y - s.bbox.h);
                    d.placeBox(u, v + s.bbox.w, y - u.bbox.h + l);
                    d.placeBox(n, v + s.bbox.w, 0);
                    this.HTMLhandleSpace(w);
                    this.HTMLhandleColor(w);
                    return w
                },
                HTMLaddRoot: function(m, l, k, o, n) {
                    return k
                }
            });
            g.mroot.Augment({
                toHTML: g.msqrt.prototype.toHTML,
                HTMLaddRoot: function(s, l, q, o, k) {
                    var m = d.createBox(s);
                    if (this.data[1]) {
                        var p = this.data[1].toHTML(m);
                        p.style.paddingRight = p.style.paddingLeft = "";
                        d.Measured(p, m)
                    } else {
                        m.bbox = this.HTMLzeroBBox()
                    }
                    var n = this.HTMLrootHeight(l.bbox.h + l.bbox.d, k, m) - o;
                    var r = Math.min(m.bbox.w, m.bbox.rw);
                    q = Math.max(r, l.offset);
                    d.placeBox(m, q - r, n);
                    return q - l.offset
                },
                HTMLrootHeight: function(m, l, k) {
                    return 0.45 * (m - 0.9 * l) + 0.6 * l + Math.max(0, k.bbox.d - 0.075)
                }
            });
            g.mfenced.Augment({
                toHTML: function(o) {
                    o = this.HTMLcreateSpan(o);
                    if (this.data.open) {
                        this.data.open.toHTML(o)
                    }
                    if (this.data[0] != null) {
                        this.data[0].toHTML(o)
                    }
                    for (var l = 1,
                             k = this.data.length; l < k; l++) {
                        if (this.data[l]) {
                            if (this.data["sep" + l]) {
                                this.data["sep" + l].toHTML(o)
                            }
                            this.data[l].toHTML(o)
                        }
                    }
                    if (this.data.close) {
                        this.data.close.toHTML(o)
                    }
                    var q = this.HTMLcomputeBBox(o);
                    var n = o.bbox.h,
                        p = o.bbox.d;
                    for (l = 0, k = q.length; l < k; l++) {
                        q[l].HTMLstretchV(o, n, p)
                    }
                    if (q.length) {
                        this.HTMLcomputeBBox(o, true)
                    }
                    this.HTMLhandleSpace(o);
                    this.HTMLhandleColor(o);
                    return o
                },
                HTMLcomputeBBox: function(p, o) {
                    var l = p.bbox = {},
                        q = [];
                    this.HTMLcheckStretchy(this.data.open, l, q, o);
                    this.HTMLcheckStretchy(this.data[0], l, q, o);
                    for (var n = 1,
                             k = this.data.length; n < k; n++) {
                        if (this.data[n]) {
                            this.HTMLcheckStretchy(this.data["sep" + n], l, q, o);
                            this.HTMLcheckStretchy(this.data[n], l, q, o)
                        }
                    }
                    this.HTMLcheckStretchy(this.data.close, l, q, o);
                    this.HTMLcleanBBox(l);
                    return q
                },
                HTMLcheckStretchy: function(k, l, n, m) {
                    if (k) {
                        if (!m && k.HTMLcanStretch("Vertical")) {
                            n.push(k);
                            k = (k.CoreMO() || k)
                        }
                        this.HTMLcombineBBoxes(k, l)
                    }
                }
            });
            g.menclose.Augment({
                toHTML: g.mbase.HTMLautoload
            });
            g.maction.Augment({
                toHTML: g.mbase.HTMLautoload
            });
            g.semantics.Augment({
                toHTML: function(l, k, m) {
                    l = this.HTMLcreateSpan(l);
                    if (this.data[0] != null) {
                        var n = this.data[0].toHTML(l);
                        if (m != null) {
                            this.data[0].HTMLstretchV(l, k, m)
                        } else {
                            if (k != null) {
                                this.data[0].HTMLstretchH(l, k)
                            }
                        }
                        l.bbox = n.bbox
                    }
                    this.HTMLhandleSpace(l);
                    return l
                },
                HTMLstretchH: g.mbase.HTMLstretchH,
                HTMLstretchV: g.mbase.HTMLstretchV
            });
            g.munderover.Augment({
                toHTML: function(L, H, F) {
                    var l = this.getValues("displaystyle", "accent", "accentunder", "align");
                    if (!l.displaystyle && this.data[this.base] != null && this.data[this.base].CoreMO().Get("movablelimits")) {
                        return g.msubsup.prototype.toHTML.call(this, L)
                    }
                    L = this.HTMLcreateSpan(L);
                    var P = this.HTMLgetScale();
                    var q = d.createStack(L);
                    var r = [],
                        o = [],
                        N = [],
                        w,
                        M,
                        I;
                    for (M = 0, I = this.data.length; M < I; M++) {
                        if (this.data[M] != null) {
                            w = r[M] = d.createBox(q);
                            o[M] = this.data[M].toHTML(w);
                            if (M == this.base) {
                                if (F != null) {
                                    this.data[this.base].HTMLstretchV(w, H, F)
                                } else {
                                    if (H != null) {
                                        this.data[this.base].HTMLstretchH(w, H)
                                    }
                                }
                                N[M] = (F == null && H != null ? false: this.data[M].HTMLcanStretch("Horizontal"))
                            } else {
                                N[M] = this.data[M].HTMLcanStretch("Horizontal")
                            }
                        }
                    }
                    d.MeasureSpans(o);
                    var n = -d.BIGDIMEN,
                        K = n;
                    for (M = 0, I = this.data.length; M < I; M++) {
                        if (this.data[M]) {
                            if (r[M].bbox.w > K) {
                                K = r[M].bbox.w
                            }
                            if (!N[M] && K > n) {
                                n = K
                            }
                        }
                    }
                    if (F == null && H != null) {
                        n = H
                    } else {
                        if (n == -d.BIGDIMEN) {
                            n = K
                        }
                    }
                    for (M = K = 0, I = this.data.length; M < I; M++) {
                        if (this.data[M]) {
                            w = r[M];
                            if (N[M]) {
                                w.bbox = this.data[M].HTMLstretchH(w, n).bbox
                            }
                            if (w.bbox.w > K) {
                                K = w.bbox.w
                            }
                        }
                    }
                    var E = d.TeX.rule_thickness,
                        G = d.FONTDATA.TeX_factor;
                    var p = r[this.base] || {
                        bbox: this.HTMLzeroBBox()
                    };
                    var v, s, A, z, u, C, J, O = 0;
                    if (p.bbox.ic) {
                        O = 1.3 * p.bbox.ic + 0.05
                    }
                    for (M = 0, I = this.data.length; M < I; M++) {
                        if (this.data[M] != null) {
                            w = r[M];
                            u = d.TeX.big_op_spacing5 * P;
                            var B = (M != this.base && l[this.ACCENTS[M]]);
                            if (B && w.bbox.w <= 1 / d.em + 0.0001) {
                                w.bbox.w = w.bbox.rw - w.bbox.lw;
                                w.bbox.noclip = true;
                                if (w.bbox.lw) {
                                    w.insertBefore(d.createSpace(w.parentNode, 0, 0, -w.bbox.lw), w.firstChild)
                                }
                                d.createBlank(w, 0, 0, w.bbox.rw + 0.1)
                            }
                            C = {
                                left: 0,
                                center: (K - w.bbox.w) / 2,
                                right: K - w.bbox.w
                            } [l.align];
                            v = C;
                            s = 0;
                            if (M == this.over) {
                                if (B) {
                                    J = Math.max(E * P * G, 2.5 / this.em);
                                    u = 0;
                                    if (p.bbox.skew) {
                                        v += p.bbox.skew
                                    }
                                } else {
                                    A = d.TeX.big_op_spacing1 * P * G;
                                    z = d.TeX.big_op_spacing3 * P * G;
                                    J = Math.max(A, z - Math.max(0, w.bbox.d))
                                }
                                J = Math.max(J, 1.5 / this.em);
                                v += O / 2;
                                s = p.bbox.h + w.bbox.d + J;
                                w.bbox.h += u
                            } else {
                                if (M == this.under) {
                                    if (B) {
                                        J = 3 * E * P * G;
                                        u = 0
                                    } else {
                                        A = d.TeX.big_op_spacing2 * P * G;
                                        z = d.TeX.big_op_spacing4 * P * G;
                                        J = Math.max(A, z - w.bbox.h)
                                    }
                                    J = Math.max(J, 1.5 / this.em);
                                    v -= O / 2;
                                    s = -(p.bbox.d + w.bbox.h + J);
                                    w.bbox.d += u
                                }
                            }
                            d.placeBox(w, v, s)
                        }
                    }
                    this.HTMLhandleSpace(L);
                    this.HTMLhandleColor(L);
                    return L
                },
                HTMLstretchH: g.mbase.HTMLstretchH,
                HTMLstretchV: g.mbase.HTMLstretchV
            });
            g.msubsup.Augment({
                toHTML: function(K, I, C) {
                    K = this.HTMLcreateSpan(K);
                    var N = this.HTMLgetScale(),
                        H = this.HTMLgetMu(K);
                    var w = d.createStack(K),
                        l,
                        n = [];
                    var o = d.createBox(w);
                    if (this.data[this.base]) {
                        n.push(this.data[this.base].toHTML(o));
                        if (C != null) {
                            this.data[this.base].HTMLstretchV(o, I, C)
                        } else {
                            if (I != null) {
                                this.data[this.base].HTMLstretchH(o, I)
                            }
                        }
                    } else {
                        o.bbox = this.HTMLzeroBBox()
                    }
                    var L = d.TeX.x_height * N,
                        B = d.TeX.scriptspace * N * 0.75;
                    var k, x;
                    if (this.HTMLnotEmpty(this.data[this.sup])) {
                        k = d.createBox(w);
                        n.push(this.data[this.sup].toHTML(k))
                    }
                    if (this.HTMLnotEmpty(this.data[this.sub])) {
                        x = d.createBox(w);
                        n.push(this.data[this.sub].toHTML(x))
                    }
                    d.MeasureSpans(n);
                    if (k) {
                        k.bbox.w += B;
                        k.bbox.rw = Math.max(k.bbox.w, k.bbox.rw)
                    }
                    if (x) {
                        x.bbox.w += B;
                        x.bbox.rw = Math.max(x.bbox.w, x.bbox.rw)
                    }
                    d.placeBox(o, 0, 0);
                    var m;
                    if (k) {
                        m = this.data[this.sup].HTMLgetScale()
                    } else {
                        if (x) {
                            m = this.data[this.sub].HTMLgetScale()
                        } else {
                            m = this.HTMLgetScale()
                        }
                    }
                    var F = d.TeX.sup_drop * m,
                        E = d.TeX.sub_drop * m;
                    var z = o.bbox.h - F,
                        y = o.bbox.d + E,
                        M = 0,
                        G;
                    if (o.bbox.ic) {
                        o.bbox.w -= o.bbox.ic;
                        M = 1.3 * o.bbox.ic + 0.05
                    }
                    if (this.data[this.base] && (this.data[this.base].type === "mi" || this.data[this.base].type === "mo")) {
                        if (this.data[this.base].data.join("").length === 1 && o.bbox.scale === 1 && !this.data[this.base].Get("largeop")) {
                            z = y = 0
                        }
                    }
                    var J = this.getValues("subscriptshift", "superscriptshift");
                    J.subscriptshift = (J.subscriptshift === "" ? 0 : d.length2em(J.subscriptshift, H));
                    J.superscriptshift = (J.superscriptshift === "" ? 0 : d.length2em(J.superscriptshift, H));
                    if (!k) {
                        if (x) {
                            y = Math.max(y, d.TeX.sub1 * N, x.bbox.h - (4 / 5) * L, J.subscriptshift);
                            d.placeBox(x, o.bbox.w, -y, x.bbox)
                        }
                    } else {
                        if (!x) {
                            l = this.getValues("displaystyle", "texprimestyle");
                            G = d.TeX[(l.displaystyle ? "sup1": (l.texprimestyle ? "sup3": "sup2"))];
                            z = Math.max(z, G * N, k.bbox.d + (1 / 4) * L, J.superscriptshift);
                            d.placeBox(k, o.bbox.w + M, z, k.bbox)
                        } else {
                            y = Math.max(y, d.TeX.sub2 * N);
                            var A = d.TeX.rule_thickness * N;
                            if ((z - k.bbox.d) - (x.bbox.h - y) < 3 * A) {
                                y = 3 * A - z + k.bbox.d + x.bbox.h;
                                F = (4 / 5) * L - (z - k.bbox.d);
                                if (F > 0) {
                                    z += F;
                                    y -= F
                                }
                            }
                            d.placeBox(k, o.bbox.w + M, Math.max(z, J.superscriptshift));
                            d.placeBox(x, o.bbox.w, -Math.max(y, J.subscriptshift))
                        }
                    }
                    this.HTMLhandleSpace(K);
                    this.HTMLhandleColor(K);
                    return K
                },
                HTMLstretchH: g.mbase.HTMLstretchH,
                HTMLstretchV: g.mbase.HTMLstretchV
            });
            g.mmultiscripts.Augment({
                toHTML: g.mbase.HTMLautoload
            });
            g.mtable.Augment({
                toHTML: g.mbase.HTMLautoload
            });
            g["annotation-xml"].Augment({
                toHTML: g.mbase.HTMLautoload
            });
            g.math.Augment({
                toHTML: function(u, l) {
                    var r = this.Get("alttext");
                    if (r && r !== "") {
                        l.setAttribute("aria-label", r)
                    }
                    var m = d.addElement(u, "nobr", {
                        isMathJax: true
                    });
                    u = this.HTMLcreateSpan(m);
                    var s = d.createStack(u),
                        n = d.createBox(s),
                        t;
                    s.style.fontSize = m.parentNode.style.fontSize;
                    m.parentNode.style.fontSize = "";
                    if (this.data[0] != null) {
                        if (d.msieColorBug) {
                            if (this.background) {
                                this.data[0].background = this.background;
                                delete this.background
                            }
                            if (this.mathbackground) {
                                this.data[0].mathbackground = this.mathbackground;
                                delete this.mathbackground
                            }
                        }
                        g.mbase.prototype.displayAlign = b.config.displayAlign;
                        g.mbase.prototype.displayIndent = b.config.displayIndent;
                        var o = this.data[0].toHTML(n);
                        o.bbox.exactW = false;
                        t = d.Measured(o, n)
                    }
                    d.placeBox(n, 0, 0);
                    u.style.width = d.Em((Math.round(t.bbox.w * this.em) + 0.25) / d.outerEm);
                    u.style.display = "inline-block";
                    var k = 1 / d.em,
                        q = d.em / d.outerEm;
                    d.em /= q;
                    u.bbox.h *= q;
                    u.bbox.d *= q;
                    u.bbox.w *= q;
                    u.bbox.lw *= q;
                    u.bbox.rw *= q;
                    if (t && t.bbox.width != null) {
                        u.style.minWidth = (t.bbox.minWidth || u.style.width);
                        u.style.width = s.style.width = t.bbox.width;
                        n.style.width = "100%"
                    }
                    this.HTMLhandleColor(u);
                    if (t) {
                        d.createRule(u, (t.bbox.h + k) * q, (t.bbox.d + k) * q, 0)
                    }
                    if (!this.isMultiline && this.Get("display") === "block" && u.bbox.width == null) {
                        var v = this.getValues("indentalignfirst", "indentshiftfirst", "indentalign", "indentshift");
                        if (v.indentalignfirst !== g.INDENTALIGN.INDENTALIGN) {
                            v.indentalign = v.indentalignfirst
                        }
                        if (v.indentalign === g.INDENTALIGN.AUTO) {
                            v.indentalign = this.displayAlign
                        }
                        l.style.textAlign = v.indentalign;
                        if (v.indentshiftfirst !== g.INDENTSHIFT.INDENTSHIFT) {
                            v.indentshift = v.indentshiftfirst
                        }
                        if (v.indentshift === "auto") {
                            v.indentshift = this.displayIndent
                        }
                        if (v.indentshift && v.indentalign !== g.INDENTALIGN.CENTER) {
                            u.style[{
                                left: "marginLeft",
                                right: "marginRight"
                            } [v.indentalign]] = d.Em(d.length2em(v.indentshift))
                        }
                    }
                    return u
                },
                HTMLspanElement: g.mbase.prototype.HTMLspanElement
            });
            g.TeXAtom.Augment({
                toHTML: function(l) {
                    l = this.HTMLcreateSpan(l);
                    if (this.data[0] != null) {
                        if (this.texClass === g.TEXCLASS.VCENTER) {
                            var k = d.createStack(l);
                            var m = d.createBox(k);
                            d.Measured(this.data[0].toHTML(m), m);
                            d.placeBox(m, 0, d.TeX.axis_height - (m.bbox.h + m.bbox.d) / 2 + m.bbox.d)
                        } else {
                            l.bbox = this.data[0].toHTML(l).bbox
                        }
                    }
                    this.HTMLhandleSpace(l);
                    this.HTMLhandleColor(l);
                    return l
                }
            });
            MathJax.Hub.Register.StartupHook("onLoad",
                function() {
                    setTimeout(MathJax.Callback(["loadComplete", d, "jax.js"]), 0)
                })
        });
    b.Register.StartupHook("End Config",
        function() {
            b.Browser.Select({
                MSIE: function(k) {
                    var o = (document.documentMode || 0);
                    var n = k.versionAtLeast("7.0");
                    var m = k.versionAtLeast("8.0") && o > 7;
                    var l = (document.compatMode === "BackCompat");
                    if (o < 9) {
                        d.config.styles[".MathJax .MathJax_HitBox"]["background-color"] = "white";
                        d.config.styles[".MathJax .MathJax_HitBox"].opacity = 0;
                        d.config.styles[".MathJax .MathJax_HitBox"].filter = "alpha(opacity=0)"
                    }
                    d.Augment({
                        PaddingWidthBug: true,
                        msieAccentBug: true,
                        msieColorBug: true,
                        msieColorPositionBug: true,
                        msieRelativeWidthBug: l,
                        msieDisappearingBug: (o >= 8),
                        msieMarginScaleBug: (o < 8),
                        msiePaddingWidthBug: true,
                        msieBorderWidthBug: l,
                        msieFrameSizeBug: (o <= 8),
                        msieInlineBlockAlignBug: (!m || l),
                        msiePlaceBoxBug: (m && !l),
                        msieClipRectBug: !m,
                        msieNegativeSpaceBug: l,
                        cloneNodeBug: (m && k.version === "8.0"),
                        initialSkipBug: (o < 8),
                        msieNegativeBBoxBug: (o >= 8),
                        msieIE6: !n,
                        msieItalicWidthBug: true,
                        FontFaceBug: true,
                        msieFontCSSBug: k.isIE9,
                        allowWebFonts: (o >= 9 ? "woff": "eot")
                    })
                },
                Firefox: function(l) {
                    var m = false;
                    if (l.versionAtLeast("3.5")) {
                        var k = String(document.location).replace(/[^\/]*$/, "");
                        if (document.location.protocol !== "file:" || b.config.root.match(/^https?:\/\//) || (b.config.root + "/").substr(0, k.length) === k) {
                            m = "otf"
                        }
                    }
                    d.Augment({
                        ffVerticalAlignBug: true,
                        AccentBug: true,
                        allowWebFonts: m
                    })
                },
                Safari: function(p) {
                    var n = p.versionAtLeast("3.0");
                    var m = p.versionAtLeast("3.1");
                    var k = navigator.appVersion.match(/ Safari\/\d/) && navigator.appVersion.match(/ Version\/\d/) && navigator.vendor.match(/Apple/);
                    var l = (navigator.appVersion.match(/ Android (\d+)\.(\d+)/));
                    var q = (m && p.isMobile && ((navigator.platform.match(/iPad|iPod|iPhone/) && !p.versionAtLeast("5.0")) || (l != null && (l[1] < 2 || (l[1] == 2 && l[2] < 2)))));
                    d.Augment({
                        config: {
                            styles: {
                                ".MathJax img, .MathJax nobr, .MathJax a": {
                                    "max-width": "5000em",
                                    "max-height": "5000em"
                                }
                            }
                        },
                        rfuzz: 0.011,
                        AccentBug: true,
                        AdjustSurd: true,
                        negativeBBoxes: true,
                        safariNegativeSpaceBug: true,
                        safariVerticalAlignBug: !m,
                        safariTextNodeBug: !n,
                        forceReflow: true,
                        allowWebFonts: (m && !q ? "otf": false)
                    });
                    if (k) {
                        d.Augment({
                            webFontDefault: (p.isMobile ? "sans-serif": "serif")
                        })
                    }
                    if (p.isPC) {
                        d.Augment({
                            adjustAvailableFonts: d.removeSTIXfonts,
                            checkWebFontsTwice: true
                        })
                    }
                    if (q) {
                        var o = b.config["HTML-CSS"];
                        if (o) {
                            o.availableFonts = [];
                            o.preferredFont = null
                        } else {
                            b.config["HTML-CSS"] = {
                                availableFonts: [],
                                preferredFont: null
                            }
                        }
                    }
                },
                Chrome: function(k) {
                    d.Augment({
                        Em: d.EmRounded,
                        cloneNodeBug: true,
                        rfuzz: 0.011,
                        AccentBug: true,
                        AdjustSurd: true,
                        negativeBBoxes: true,
                        safariNegativeSpaceBug: true,
                        safariWebFontSerif: [""],
                        forceReflow: true,
                        allowWebFonts: (k.versionAtLeast("4.0") ? "otf": "svg")
                    })
                },
                Opera: function(k) {
                    k.isMini = (navigator.appVersion.match("Opera Mini") != null);
                    d.config.styles[".MathJax .merror"]["vertical-align"] = null;
                    d.config.styles[".MathJax span"]["z-index"] = 0;
                    d.Augment({
                        operaHeightBug: true,
                        operaVerticalAlignBug: true,
                        operaFontSizeBug: k.versionAtLeast("10.61"),
                        initialSkipBug: true,
                        FontFaceBug: true,
                        PaddingWidthBug: true,
                        allowWebFonts: (k.versionAtLeast("10.0") && !k.isMini ? "otf": false),
                        adjustAvailableFonts: d.removeSTIXfonts
                    })
                },
                Konqueror: function(k) {
                    d.Augment({
                        konquerorVerticalAlignBug: true
                    })
                }
            })
        });
    MathJax.Hub.Register.StartupHook("End Cookie",
        function() {
            if (b.config.menuSettings.zoom !== "None") {
                h.Require("[MathJax]/extensions/MathZoom.js")
            }
        })
})(MathJax.Ajax, MathJax.Hub, MathJax.OutputJax["HTML-CSS"]);
MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",
    function() {
        var c = "2.3";
        var a = MathJax.ElementJax.mml,
            b = MathJax.OutputJax["HTML-CSS"];
        a.mtable.Augment({
            toHTML: function(t) {
                t = this.HTMLcreateSpan(t);
                if (this.data.length === 0) {
                    return t
                }
                var K = this.getValues("columnalign", "rowalign", "columnspacing", "rowspacing", "columnwidth", "equalcolumns", "equalrows", "columnlines", "rowlines", "frame", "framespacing", "align", "useHeight", "width", "side", "minlabelspacing");
                var aJ = K.width.match(/%$/);
                var ay = b.createStack(t);
                var aG = this.HTMLgetScale(),
                    aA = this.HTMLgetMu(t),
                    aB = -1;
                var aq = [],
                    au = [],
                    ak = [],
                    aw = [],
                    av = [],
                    af,
                    ae,
                    ap = -1,
                    ad,
                    ao,
                    Z,
                    aF,
                    R,
                    aC,
                    aO = [];
                var al = b.FONTDATA.baselineskip * aG * K.useHeight,
                    aT, I = b.FONTDATA.lineH * aG,
                    O = b.FONTDATA.lineD * aG;
                for (af = 0, ad = this.data.length; af < ad; af++) {
                    aF = this.data[af];
                    Z = (aF.type === "mlabeledtr" ? aB: 0);
                    aw[af] = [];
                    aq[af] = au[af] = 0;
                    for (ae = Z, ao = aF.data.length + Z; ae < ao; ae++) {
                        if (ak[ae] == null) {
                            if (ae > ap) {
                                ap = ae
                            }
                            av[ae] = b.createStack(b.createBox(ay));
                            ak[ae] = -b.BIGDIMEN
                        }
                        aw[af][ae] = b.createBox(av[ae]);
                        aO.push(aF.data[ae - Z].toHTML(aw[af][ae]))
                    }
                }
                b.MeasureSpans(aO);
                for (af = 0, ad = this.data.length; af < ad; af++) {
                    aF = this.data[af];
                    Z = (aF.type === "mlabeledtr" ? aB: 0);
                    for (ae = Z, ao = aF.data.length + Z; ae < ao; ae++) {
                        R = aF.data[ae - Z];
                        if (R.isMultiline) {
                            aw[af][ae].style.width = "100%"
                        }
                        if (R.isEmbellished()) {
                            aC = R.CoreMO();
                            var aS = aC.Get("minsize", true);
                            if (aS) {
                                var aL = aC.HTMLspanElement().bbox;
                                if (aC.HTMLcanStretch("Vertical")) {
                                    aT = aL.h + aL.d;
                                    if (aT) {
                                        aS = b.length2em(aS, aA, aT);
                                        if (aS * aL.h / aT > aq[af]) {
                                            aq[af] = aS * aL.h / aT
                                        }
                                        if (aS * aL.d / aT > au[af]) {
                                            au[af] = aS * aL.d / aT
                                        }
                                    }
                                } else {
                                    if (aC.HTMLcanStretch("Horizontal")) {
                                        aS = b.length2em(aS, aA, aL.w);
                                        if (aS > ak[ae]) {
                                            ak[ae] = aS
                                        }
                                    }
                                }
                            }
                        }
                        if (aw[af][ae].bbox.h > aq[af]) {
                            aq[af] = aw[af][ae].bbox.h
                        }
                        if (aw[af][ae].bbox.d > au[af]) {
                            au[af] = aw[af][ae].bbox.d
                        }
                        if (aw[af][ae].bbox.w > ak[ae]) {
                            ak[ae] = aw[af][ae].bbox.w
                        }
                    }
                }
                if (aq[0] + au[0]) {
                    aq[0] = Math.max(aq[0], I)
                }
                if (aq[aw.length - 1] + au[aw.length - 1]) {
                    au[aw.length - 1] = Math.max(au[aw.length - 1], O)
                }
                var aE = MathJax.Hub.SplitList;
                var az = aE(K.columnspacing),
                    aQ = aE(K.rowspacing),
                    e = aE(K.columnalign),
                    E = aE(K.rowalign),
                    d = aE(K.columnlines),
                    z = aE(K.rowlines),
                    aM = aE(K.columnwidth),
                    V = [];
                for (af = 0, ad = az.length; af < ad; af++) {
                    az[af] = b.length2em(az[af], aA)
                }
                for (af = 0, ad = aQ.length; af < ad; af++) {
                    aQ[af] = b.length2em(aQ[af], aA)
                }
                while (az.length < ap) {
                    az.push(az[az.length - 1])
                }
                while (e.length <= ap) {
                    e.push(e[e.length - 1])
                }
                while (d.length < ap) {
                    d.push(d[d.length - 1])
                }
                while (aM.length <= ap) {
                    aM.push(aM[aM.length - 1])
                }
                while (aQ.length < aw.length) {
                    aQ.push(aQ[aQ.length - 1])
                }
                while (E.length <= aw.length) {
                    E.push(E[E.length - 1])
                }
                while (z.length < aw.length) {
                    z.push(z[z.length - 1])
                }
                if (av[aB]) {
                    e[aB] = (K.side.substr(0, 1) === "l" ? "left": "right");
                    az[aB] = -ak[aB]
                }
                for (af = 0, ad = aw.length; af < ad; af++) {
                    aF = this.data[af];
                    V[af] = [];
                    if (aF.rowalign) {
                        E[af] = aF.rowalign
                    }
                    if (aF.columnalign) {
                        V[af] = aE(aF.columnalign);
                        while (V[af].length <= ap) {
                            V[af].push(V[af][V[af].length - 1])
                        }
                    }
                }
                if (K.equalrows) {
                    var aD = Math.max.apply(Math, aq),
                        X = Math.max.apply(Math, au);
                    for (af = 0, ad = aw.length; af < ad; af++) {
                        Z = ((aD + X) - (aq[af] + au[af])) / 2;
                        aq[af] += Z;
                        au[af] += Z
                    }
                }
                aT = aq[0] + au[aw.length - 1];
                for (af = 0, ad = aw.length - 1; af < ad; af++) {
                    aT += Math.max((aq[af] + au[af] ? al: 0), au[af] + aq[af + 1] + aQ[af])
                }
                var aI = 0,
                    aH = 0,
                    aV, g = aT;
                if (K.frame !== "none" || (K.columnlines + K.rowlines).match(/solid|dashed/)) {
                    var w = aE(K.framespacing);
                    if (w.length != 2) {
                        w = aE(this.defaults.framespacing)
                    }
                    aI = b.length2em(w[0], aA);
                    aH = b.length2em(w[1], aA);
                    g = aT + 2 * aH
                }
                var aj, aU, ab = "";
                if (typeof(K.align) !== "string") {
                    K.align = String(K.align)
                }
                if (K.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)) {
                    ab = RegExp.$3;
                    K.align = RegExp.$1
                } else {
                    K.align = this.defaults.align
                }
                if (ab !== "") {
                    ab = parseInt(ab);
                    if (ab < 0) {
                        ab = aw.length + 1 + ab
                    }
                    if (ab < 1) {
                        ab = 1
                    } else {
                        if (ab > aw.length) {
                            ab = aw.length
                        }
                    }
                    aj = 0;
                    aU = -(aT + aH) + aq[0];
                    for (af = 0, ad = ab - 1; af < ad; af++) {
                        var N = Math.max((aq[af] + au[af] ? al: 0), au[af] + aq[af + 1] + aQ[af]);
                        aj += N;
                        aU += N
                    }
                } else {
                    aj = ({
                        top: -(aq[0] + aH),
                        bottom: aT + aH - aq[0],
                        center: aT / 2 - aq[0],
                        baseline: aT / 2 - aq[0],
                        axis: aT / 2 + b.TeX.axis_height * aG - aq[0]
                    })[K.align];
                    aU = ({
                        top: -(aT + 2 * aH),
                        bottom: 0,
                        center: -(aT / 2 + aH),
                        baseline: -(aT / 2 + aH),
                        axis: b.TeX.axis_height * aG - aT / 2 - aH
                    })[K.align]
                }
                var ac, ag = 0,
                    B = 0,
                    L = 0,
                    aa = 0,
                    ah = 0,
                    an = [],
                    at = [],
                    S = 1;
                if (K.equalcolumns && K.width !== "auto") {
                    if (aJ) {
                        ac = (100 / (ap + 1)).toFixed(2).replace(/\.?0+$/, "") + "%";
                        for (af = 0, ad = Math.min(ap + 1, aM.length); af < ad; af++) {
                            aM[af] = ac
                        }
                        ac = 0;
                        ag = 1;
                        ah = ap + 1;
                        for (af = 0, ad = Math.min(ap + 1, az.length); af < ad; af++) {
                            ac += az[af]
                        }
                    } else {
                        ac = b.length2em(K.width, aA);
                        for (af = 0, ad = Math.min(ap + 1, az.length); af < ad; af++) {
                            ac -= az[af]
                        }
                        ac /= ap + 1;
                        for (af = 0, ad = Math.min(ap + 1, aM.length); af < ad; af++) {
                            ak[af] = ac
                        }
                    }
                } else {
                    for (af = 0, ad = Math.min(ap + 1, aM.length); af < ad; af++) {
                        if (aM[af] === "auto") {
                            B += ak[af]
                        } else {
                            if (aM[af] === "fit") {
                                at[ah] = af;
                                ah++;
                                B += ak[af]
                            } else {
                                if (aM[af].match(/%$/)) {
                                    an[aa] = af;
                                    aa++;
                                    L += ak[af];
                                    ag += b.length2em(aM[af], aA, 1)
                                } else {
                                    ak[af] = b.length2em(aM[af], aA);
                                    B += ak[af]
                                }
                            }
                        }
                    }
                    if (aJ) {
                        ac = 0;
                        for (af = 0, ad = Math.min(ap, az.length); af < ad; af++) {
                            ac += az[af]
                        }
                        if (ag > 0.98) {
                            S = 0.98 / ag;
                            ag = 0.98
                        }
                    } else {
                        if (K.width === "auto") {
                            if (ag > 0.98) {
                                S = L / (B + L);
                                ac = B + L
                            } else {
                                ac = B / (1 - ag)
                            }
                        } else {
                            ac = b.length2em(K.width, aA);
                            for (af = 0, ad = Math.min(ap + 1, az.length); af < ad; af++) {
                                ac -= az[af]
                            }
                        }
                        for (af = 0, ad = an.length; af < ad; af++) {
                            ak[an[af]] = b.length2em(aM[an[af]], aA, ac * S);
                            B += ak[an[af]]
                        }
                        if (Math.abs(ac - B) > 0.01) {
                            if (ah && ac > B) {
                                ac = (ac - B) / ah;
                                for (af = 0, ad = at.length; af < ad; af++) {
                                    ak[at[af]] += ac
                                }
                            } else {
                                ac = ac / B;
                                for (ae = 0; ae <= ap; ae++) {
                                    ak[ae] *= ac
                                }
                            }
                        }
                        if (K.equalcolumns) {
                            var Q = Math.max.apply(Math, ak);
                            for (ae = 0; ae <= ap; ae++) {
                                ak[ae] = Q
                            }
                        }
                    }
                }
                var T = aj,
                    o, r, aR;
                Z = (av[aB] ? aB: 0);
                for (ae = Z; ae <= ap; ae++) {
                    for (af = 0, ad = aw.length; af < ad; af++) {
                        if (aw[af][ae]) {
                            Z = (this.data[af].type === "mlabeledtr" ? aB: 0);
                            R = this.data[af].data[ae - Z];
                            if (R.HTMLcanStretch("Horizontal")) {
                                aw[af][ae].bbox = R.HTMLstretchH(av[ae], ak[ae]).bbox
                            } else {
                                if (R.HTMLcanStretch("Vertical")) {
                                    aC = R.CoreMO();
                                    var aK = aC.symmetric;
                                    aC.symmetric = false;
                                    aw[af][ae].bbox = R.HTMLstretchV(av[ae], aq[af], au[af]).bbox;
                                    aw[af][ae].HH = null;
                                    aC.symmetric = aK
                                }
                            }
                            aR = R.rowalign || this.data[af].rowalign || E[af];
                            o = ({
                                top: aq[af] - aw[af][ae].bbox.h,
                                bottom: aw[af][ae].bbox.d - au[af],
                                center: ((aq[af] - au[af]) - (aw[af][ae].bbox.h - aw[af][ae].bbox.d)) / 2,
                                baseline: 0,
                                axis: 0
                            })[aR] || 0;
                            aR = (R.columnalign || V[af][ae] || e[ae]);
                            b.alignBox(aw[af][ae], aR, T + o)
                        }
                        if (af < aw.length - 1) {
                            T -= Math.max((aq[af] + au[af] ? al: 0), au[af] + aq[af + 1] + aQ[af])
                        }
                    }
                    T = aj
                }
                if (aJ) {
                    var G = b.createBox(ay);
                    G.style.left = G.style.top = 0;
                    G.style.right = b.Em(ac + 2 * aI);
                    G.style.display = "inline-block";
                    G.style.height = "0px";
                    if (b.msieRelativeWidthBug) {
                        G = b.createBox(G);
                        G.style.position = "relative";
                        G.style.height = "1em";
                        G.style.width = "100%";
                        G.bbox = ay.bbox
                    }
                    var aP = 0,
                        aW = aI,
                        k, l;
                    if (ah) {
                        k = 100 * (1 - ag) / ah,
                            l = B / ah
                    } else {
                        k = 100 * (1 - ag) / (ap + 1);
                        l = B / (ap + 1)
                    }
                    for (ae = 0; ae <= ap; ae++) {
                        b.placeBox(av[ae].parentNode, 0, 0);
                        av[ae].style.position = "relative";
                        av[ae].style.left = b.Em(aW);
                        av[ae].style.width = "100%";
                        av[ae].parentNode.parentNode.removeChild(av[ae].parentNode);
                        var am = b.createBox(G);
                        b.addBox(am, av[ae]);
                        av[ae] = am;
                        var h = am.style;
                        h.display = "inline-block";
                        h.left = aP + "%";
                        if (aM[ae].match(/%$/)) {
                            var u = parseFloat(aM[ae]) * S;
                            if (ah === 0) {
                                h.width = (k + u) + "%";
                                aP += k + u;
                                am = b.createBox(am);
                                b.addBox(am, av[ae].firstChild);
                                am.style.left = 0;
                                am.style.right = b.Em(l);
                                aW -= l
                            } else {
                                h.width = u + "%";
                                aP += u
                            }
                        } else {
                            if (aM[ae] === "fit" || ah === 0) {
                                h.width = k + "%";
                                am = b.createBox(am);
                                b.addBox(am, av[ae].firstChild);
                                am.style.left = 0;
                                am.style.right = b.Em(l - ak[ae]);
                                aW += ak[ae] - l;
                                aP += k
                            } else {
                                h.width = b.Em(ak[ae]);
                                aW += ak[ae]
                            }
                        }
                        if (b.msieRelativeWidthBug) {
                            b.addText(am.firstChild, b.NBSP);
                            am.firstChild.style.position = "relative"
                        }
                        aW += az[ae];
                        if (d[ae] !== "none" && ae < ap && ae !== aB) {
                            r = b.createBox(G);
                            r.style.left = aP + "%";
                            r = b.createRule(r, g, 0, 1.25 / b.em);
                            r.style.position = "absolute";
                            r.bbox = {
                                h: g,
                                d: 0,
                                w: 0,
                                rw: 1.25 / b.em,
                                lw: 0
                            };
                            r.parentNode.bbox = ay.bbox;
                            b.placeBox(r, aW - az[ae] / 2, aU, true);
                            r.style.borderStyle = d[ae]
                        }
                    }
                } else {
                    var U = aI;
                    for (ae = 0; ae <= ap; ae++) {
                        if (!av[ae].bbox.width) {
                            b.setStackWidth(av[ae], ak[ae])
                        }
                        if (aM[ae] !== "auto" && aM[ae] !== "fit") {
                            av[ae].bbox.width = ak[ae];
                            av[ae].bbox.isFixed = true
                        }
                        b.placeBox(av[ae].parentNode, U, 0);
                        U += ak[ae] + az[ae];
                        if (d[ae] !== "none" && ae < ap && ae !== aB) {
                            r = b.createRule(ay, g, 0, 1.25 / b.em);
                            b.addBox(ay, r);
                            r.bbox = {
                                h: g,
                                d: 0,
                                w: 0,
                                rw: 1.25 / b.em,
                                lw: 0
                            };
                            b.placeBox(r, U - az[ae] / 2, aU, true);
                            r.style.borderStyle = d[ae]
                        }
                    }
                }
                ay.bbox.d = -aU;
                ay.bbox.h = g + aU;
                b.setStackWidth(ay, ay.bbox.w + aI);
                aV = ay.bbox.w;
                var ai;
                if (K.frame !== "none") {
                    ai = b.createFrame(ay, g, 0, aV, 1.25 / b.em, K.frame);
                    b.addBox(ay, ai);
                    b.placeBox(ai, 0, aU, true);
                    if (aJ) {
                        ai.style.width = "100%"
                    }
                }
                T = aj;
                for (af = 0, ad = aw.length - 1; af < ad; af++) {
                    o = Math.max(al, au[af] + aq[af + 1] + aQ[af]);
                    if (z[af] !== "none") {
                        r = b.createRule(ay, 1.25 / b.em, 0, aV);
                        b.addBox(ay, r);
                        r.bbox = {
                            h: 1.25 / b.em,
                            d: 0,
                            w: aV,
                            rw: aV,
                            lw: 0
                        };
                        b.placeBox(r, 0, T - au[af] - (o - au[af] - aq[af + 1]) / 2, true);
                        if (z[af] === "dashed" || aJ) {
                            r.style.borderTop = r.style.height + " " + z[af];
                            r.style.height = 0;
                            r.style.width = r.style.borderLeftWidth;
                            r.style.borderLeft = "";
                            if (aJ) {
                                r.style.width = "100%"
                            }
                        }
                    }
                    T -= o
                }
                if (aJ) {
                    t.bbox.width = K.width;
                    ay.style.width = "100%"
                }
                if (av[aB]) {
                    var ax = ay.bbox.w,
                        q;
                    var ar = this.getValues("indentalignfirst", "indentshiftfirst", "indentalign", "indentshift");
                    if (ar.indentalignfirst !== a.INDENTALIGN.INDENTALIGN) {
                        ar.indentalign = ar.indentalignfirst
                    }
                    if (ar.indentalign === a.INDENTALIGN.AUTO) {
                        ar.indentalign = this.displayAlign
                    }
                    if (ar.indentshiftfirst !== a.INDENTSHIFT.INDENTSHIFT) {
                        ar.indentshift = ar.indentshiftfirst
                    }
                    if (ar.indentshift === "auto") {
                        ar.indentshift = this.displayIndent
                    }
                    var aN = b.createStack(t, false, "100%");
                    b.addBox(aN, ay);
                    b.alignBox(ay, ar.indentalign, 0);
                    if (ar.indentshift && ar.indentalign !== a.INDENTALIGN.CENTER) {
                        q = b.length2em(ar.indentshift, aA);
                        ax += q;
                        ay.style[ar.indentalign] = b.Em(q)
                    }
                    av[aB].parentNode.parentNode.removeChild(av[aB].parentNode);
                    b.addBox(aN, av[aB]);
                    b.alignBox(av[aB], e[aB], 0);
                    if (b.msieRelativeWidthBug) {
                        ay.style.top = av[aB].style.top = ""
                    }
                    if (aJ) {
                        ay.style.width = K.width;
                        t.bbox.width = "100%"
                    }
                    q = b.length2em(K.minlabelspacing, aA);
                    av[aB].style.marginRight = av[aB].style.marginLeft = b.Em(q);
                    if (ar.indentalign === a.INDENTALIGN.CENTER) {
                        ax += 4 * q + 2 * av[aB].bbox.w
                    } else {
                        if (ar.indentalign !== e[aB]) {
                            ax += 2 * q + av[aB].bbox.w
                        }
                    }
                    t.style.minWidth = t.bbox.minWidth = aN.style.minWidth = aN.bbox.minWidth = b.Em(ax)
                }
                if (!aJ) {
                    this.HTMLhandleSpace(t)
                }
                var v = this.HTMLhandleColor(t);
                if (v && aJ) {
                    if (!ai) {
                        ai = b.createFrame(ay, g, 0, aV, 0, "none");
                        b.addBox(ay, ai);
                        b.placeBox(ai, 0, aU, true);
                        ai.style.width = "100%"
                    }
                    ai.style.backgroundColor = v.style.backgroundColor;
                    ai.parentNode.insertBefore(ai, ai.parentNode.firstChild);
                    v.parentNode.removeChild(v)
                }
                return t
            },
            HTMLhandleSpace: function(d) {
                d.bbox.keepPadding = true;
                d.bbox.exact = true;
                if (!this.hasFrame && d.bbox.width == null) {
                    d.style.paddingLeft = d.style.paddingRight = b.Em(1 / 6)
                }
                this.SUPER(arguments).HTMLhandleSpace.call(this, d)
            }
        });
        a.mtd.Augment({
            toHTML: function(e, d, g) {
                e = this.HTMLcreateSpan(e);
                if (this.data[0]) {
                    var f = this.data[0].toHTML(e);
                    if (g != null) {
                        f = this.data[0].HTMLstretchV(e, d, g)
                    } else {
                        if (d != null) {
                            f = this.data[0].HTMLstretchH(e, d)
                        }
                    }
                    e.bbox = f.bbox
                }
                this.HTMLhandleSpace(e);
                this.HTMLhandleColor(e);
                return e
            },
            HTMLstretchH: a.mbase.HTMLstretchH,
            HTMLstretchV: a.mbase.HTMLstretchV
        });
        MathJax.Hub.Startup.signal.Post("HTML-CSS mtable Ready");
        MathJax.Ajax.loadComplete(b.autoloadDir + "/mtable.js")
    });
MathJax.Ajax.loadComplete("[MathJax]/config/TeX-AMS_HTML-full.js");