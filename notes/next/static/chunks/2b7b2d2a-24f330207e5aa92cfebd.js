(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    9299: function (module, __unused_webpack_exports, __webpack_require__) {
      var process = __webpack_require__(4155),
        Buffer = __webpack_require__(8764).Buffer,
        factory;
      (factory = function () {
        return (() => {
          "use strict";
          var __webpack_modules__ = [
              ,
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.addLinkAttributes = function (
                    e,
                    { url: t, target: s, rel: n, enabled: i = !0 } = {}
                  ) {
                    (0, r.assert)(
                      t && "string" === typeof t,
                      'addLinkAttributes: A valid "url" parameter must provided.'
                    );
                    const o = (0, r.removeNullCharacters)(t);
                    i
                      ? (e.href = e.title = o)
                      : ((e.href = ""),
                        (e.title = `Disabled: ${o}`),
                        (e.onclick = () => !1));
                    let l = "";
                    switch (s) {
                      case p.NONE:
                        break;
                      case p.SELF:
                        l = "_self";
                        break;
                      case p.BLANK:
                        l = "_blank";
                        break;
                      case p.PARENT:
                        l = "_parent";
                        break;
                      case p.TOP:
                        l = "_top";
                    }
                    (e.target = l), (e.rel = "string" === typeof n ? n : a);
                  }),
                  (t.deprecated = function (e) {
                    console.log("Deprecated API usage: " + e);
                  }),
                  (t.getFilenameFromUrl = function (e) {
                    const t = e.indexOf("#"),
                      s = e.indexOf("?"),
                      r = Math.min(t > 0 ? t : e.length, s > 0 ? s : e.length);
                    return e.substring(e.lastIndexOf("/", r) + 1, r);
                  }),
                  (t.getPdfFilenameFromUrl = function (e, t = "document.pdf") {
                    if ("string" !== typeof e) return t;
                    if (g(e))
                      return (
                        (0, r.warn)(
                          'getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'
                        ),
                        t
                      );
                    const s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
                      n =
                        /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(
                          e
                        );
                    let a = s.exec(n[1]) || s.exec(n[2]) || s.exec(n[3]);
                    if (a && ((a = a[0]), a.includes("%")))
                      try {
                        a = s.exec(decodeURIComponent(a))[0];
                      } catch (i) {}
                    return a || t;
                  }),
                  (t.getXfaPageViewport = function (
                    e,
                    { scale: t = 1, rotation: s = 0 }
                  ) {
                    const { width: r, height: n } = e.attributes.style,
                      a = [0, 0, parseInt(r), parseInt(n)];
                    return new d({ viewBox: a, scale: t, rotation: s });
                  }),
                  (t.isDataScheme = g),
                  (t.isPdfFile = function (e) {
                    return "string" === typeof e && /\.pdf$/i.test(e);
                  }),
                  (t.isValidFetchUrl = f),
                  (t.loadScript = function (e, t = !1) {
                    return new Promise((s, r) => {
                      const n = document.createElement("script");
                      (n.src = e),
                        (n.onload = function (e) {
                          t && n.remove(), s(e);
                        }),
                        (n.onerror = function () {
                          r(new Error(`Cannot load script at: ${n.src}`));
                        }),
                        (document.head || document.documentElement).appendChild(
                          n
                        );
                    });
                  }),
                  (t.StatTimer =
                    t.RenderingCancelledException =
                    t.PDFDateString =
                    t.PageViewport =
                    t.LinkTarget =
                    t.DOMSVGFactory =
                    t.DOMStandardFontDataFactory =
                    t.DOMCMapReaderFactory =
                    t.DOMCanvasFactory =
                    t.DEFAULT_LINK_REL =
                      void 0);
                var r = s(2),
                  n = s(5);
                const a = "noopener noreferrer nofollow";
                t.DEFAULT_LINK_REL = a;
                class i extends n.BaseCanvasFactory {
                  constructor({ ownerDocument: e = globalThis.document } = {}) {
                    super(), (this._document = e);
                  }
                  _createCanvas(e, t) {
                    const s = this._document.createElement("canvas");
                    return (s.width = e), (s.height = t), s;
                  }
                }
                async function o(e, t = !1) {
                  if (f(e, document.baseURI)) {
                    const s = await fetch(e);
                    if (!s.ok) throw new Error(s.statusText);
                    return t
                      ? new Uint8Array(await s.arrayBuffer())
                      : (0, r.stringToBytes)(await s.text());
                  }
                  return new Promise((s, n) => {
                    const a = new XMLHttpRequest();
                    a.open("GET", e, !0),
                      t && (a.responseType = "arraybuffer"),
                      (a.onreadystatechange = () => {
                        if (a.readyState === XMLHttpRequest.DONE) {
                          if (200 === a.status || 0 === a.status) {
                            let e;
                            if (
                              (t && a.response
                                ? (e = new Uint8Array(a.response))
                                : !t &&
                                  a.responseText &&
                                  (e = (0, r.stringToBytes)(a.responseText)),
                              e)
                            )
                              return void s(e);
                          }
                          n(new Error(a.statusText));
                        }
                      }),
                      a.send(null);
                  });
                }
                t.DOMCanvasFactory = i;
                class l extends n.BaseCMapReaderFactory {
                  _fetchData(e, t) {
                    return o(e, this.isCompressed).then((e) => ({
                      cMapData: e,
                      compressionType: t,
                    }));
                  }
                }
                t.DOMCMapReaderFactory = l;
                class c extends n.BaseStandardFontDataFactory {
                  _fetchData(e) {
                    return o(e, !0);
                  }
                }
                t.DOMStandardFontDataFactory = c;
                class h extends n.BaseSVGFactory {
                  _createSVG(e) {
                    return document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                  }
                }
                t.DOMSVGFactory = h;
                class d {
                  constructor({
                    viewBox: e,
                    scale: t,
                    rotation: s,
                    offsetX: r = 0,
                    offsetY: n = 0,
                    dontFlip: a = !1,
                  }) {
                    (this.viewBox = e),
                      (this.scale = t),
                      (this.rotation = s),
                      (this.offsetX = r),
                      (this.offsetY = n);
                    const i = (e[2] + e[0]) / 2,
                      o = (e[3] + e[1]) / 2;
                    let l, c, h, d, u, p, g, f;
                    switch (((s %= 360) < 0 && (s += 360), s)) {
                      case 180:
                        (l = -1), (c = 0), (h = 0), (d = 1);
                        break;
                      case 90:
                        (l = 0), (c = 1), (h = 1), (d = 0);
                        break;
                      case 270:
                        (l = 0), (c = -1), (h = -1), (d = 0);
                        break;
                      case 0:
                        (l = 1), (c = 0), (h = 0), (d = -1);
                        break;
                      default:
                        throw new Error(
                          "PageViewport: Invalid rotation, must be a multiple of 90 degrees."
                        );
                    }
                    a && ((h = -h), (d = -d)),
                      0 === l
                        ? ((u = Math.abs(o - e[1]) * t + r),
                          (p = Math.abs(i - e[0]) * t + n),
                          (g = Math.abs(e[3] - e[1]) * t),
                          (f = Math.abs(e[2] - e[0]) * t))
                        : ((u = Math.abs(i - e[0]) * t + r),
                          (p = Math.abs(o - e[1]) * t + n),
                          (g = Math.abs(e[2] - e[0]) * t),
                          (f = Math.abs(e[3] - e[1]) * t)),
                      (this.transform = [
                        l * t,
                        c * t,
                        h * t,
                        d * t,
                        u - l * t * i - h * t * o,
                        p - c * t * i - d * t * o,
                      ]),
                      (this.width = g),
                      (this.height = f);
                  }
                  clone({
                    scale: e = this.scale,
                    rotation: t = this.rotation,
                    offsetX: s = this.offsetX,
                    offsetY: r = this.offsetY,
                    dontFlip: n = !1,
                  } = {}) {
                    return new d({
                      viewBox: this.viewBox.slice(),
                      scale: e,
                      rotation: t,
                      offsetX: s,
                      offsetY: r,
                      dontFlip: n,
                    });
                  }
                  convertToViewportPoint(e, t) {
                    return r.Util.applyTransform([e, t], this.transform);
                  }
                  convertToViewportRectangle(e) {
                    const t = r.Util.applyTransform(
                        [e[0], e[1]],
                        this.transform
                      ),
                      s = r.Util.applyTransform([e[2], e[3]], this.transform);
                    return [t[0], t[1], s[0], s[1]];
                  }
                  convertToPdfPoint(e, t) {
                    return r.Util.applyInverseTransform([e, t], this.transform);
                  }
                }
                t.PageViewport = d;
                class u extends r.BaseException {
                  constructor(e, t) {
                    super(e), (this.type = t);
                  }
                }
                t.RenderingCancelledException = u;
                const p = { NONE: 0, SELF: 1, BLANK: 2, PARENT: 3, TOP: 4 };
                function g(e) {
                  const t = e.length;
                  let s = 0;
                  for (; s < t && "" === e[s].trim(); ) s++;
                  return "data:" === e.substring(s, s + 5).toLowerCase();
                }
                function f(e, t) {
                  try {
                    const { protocol: s } = t ? new URL(e, t) : new URL(e);
                    return "http:" === s || "https:" === s;
                  } catch (s) {
                    return !1;
                  }
                }
                let m;
                (t.LinkTarget = p),
                  (t.StatTimer = class {
                    constructor() {
                      (this.started = Object.create(null)), (this.times = []);
                    }
                    time(e) {
                      e in this.started &&
                        (0, r.warn)(`Timer is already running for ${e}`),
                        (this.started[e] = Date.now());
                    }
                    timeEnd(e) {
                      e in this.started ||
                        (0, r.warn)(`Timer has not been started for ${e}`),
                        this.times.push({
                          name: e,
                          start: this.started[e],
                          end: Date.now(),
                        }),
                        delete this.started[e];
                    }
                    toString() {
                      const e = [];
                      let t = 0;
                      for (const s of this.times) {
                        const e = s.name;
                        e.length > t && (t = e.length);
                      }
                      for (const s of this.times) {
                        const r = s.end - s.start;
                        e.push(`${s.name.padEnd(t)} ${r}ms\n`);
                      }
                      return e.join("");
                    }
                  }),
                  (t.PDFDateString = class {
                    static toDateObject(e) {
                      if (!e || !(0, r.isString)(e)) return null;
                      m ||
                        (m = new RegExp(
                          "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
                        ));
                      const t = m.exec(e);
                      if (!t) return null;
                      const s = parseInt(t[1], 10);
                      let n = parseInt(t[2], 10);
                      n = n >= 1 && n <= 12 ? n - 1 : 0;
                      let a = parseInt(t[3], 10);
                      a = a >= 1 && a <= 31 ? a : 1;
                      let i = parseInt(t[4], 10);
                      i = i >= 0 && i <= 23 ? i : 0;
                      let o = parseInt(t[5], 10);
                      o = o >= 0 && o <= 59 ? o : 0;
                      let l = parseInt(t[6], 10);
                      l = l >= 0 && l <= 59 ? l : 0;
                      const c = t[7] || "Z";
                      let h = parseInt(t[8], 10);
                      h = h >= 0 && h <= 23 ? h : 0;
                      let d = parseInt(t[9], 10) || 0;
                      return (
                        (d = d >= 0 && d <= 59 ? d : 0),
                        "-" === c
                          ? ((i += h), (o += d))
                          : "+" === c && ((i -= h), (o -= d)),
                        new Date(Date.UTC(s, n, a, i, o, l))
                      );
                    }
                  });
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.arrayByteLength = u),
                  (t.arraysToBytes = function (e) {
                    const t = e.length;
                    if (1 === t && e[0] instanceof Uint8Array) return e[0];
                    let s = 0;
                    for (let a = 0; a < t; a++) s += u(e[a]);
                    let r = 0;
                    const n = new Uint8Array(s);
                    for (let a = 0; a < t; a++) {
                      let t = e[a];
                      t instanceof Uint8Array ||
                        (t = "string" === typeof t ? d(t) : new Uint8Array(t));
                      const s = t.byteLength;
                      n.set(t, r), (r += s);
                    }
                    return n;
                  }),
                  (t.assert = o),
                  (t.bytesToString = function (e) {
                    o(
                      null !== e &&
                        "object" === typeof e &&
                        void 0 !== e.length,
                      "Invalid argument for bytesToString"
                    );
                    const t = e.length,
                      s = 8192;
                    if (t < s) return String.fromCharCode.apply(null, e);
                    const r = [];
                    for (let n = 0; n < t; n += s) {
                      const a = Math.min(n + s, t),
                        i = e.subarray(n, a);
                      r.push(String.fromCharCode.apply(null, i));
                    }
                    return r.join("");
                  }),
                  (t.createObjectURL = function (e, t = "", s = !1) {
                    if (URL.createObjectURL && !s)
                      return URL.createObjectURL(new Blob([e], { type: t }));
                    const r =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    let n = `data:${t};base64,`;
                    for (let a = 0, i = e.length; a < i; a += 3) {
                      const t = 255 & e[a],
                        s = 255 & e[a + 1],
                        o = 255 & e[a + 2];
                      n +=
                        r[t >> 2] +
                        r[((3 & t) << 4) | (s >> 4)] +
                        r[a + 1 < i ? ((15 & s) << 2) | (o >> 6) : 64] +
                        r[a + 2 < i ? 63 & o : 64];
                    }
                    return n;
                  }),
                  (t.createPromiseCapability = function () {
                    const e = Object.create(null);
                    let t = !1;
                    return (
                      Object.defineProperty(e, "settled", { get: () => t }),
                      (e.promise = new Promise(function (s, r) {
                        (e.resolve = function (e) {
                          (t = !0), s(e);
                        }),
                          (e.reject = function (e) {
                            (t = !0), r(e);
                          });
                      })),
                      e
                    );
                  }),
                  (t.createValidAbsoluteUrl = function (e, t) {
                    if (!e) return null;
                    try {
                      const s = t ? new URL(e, t) : new URL(e);
                      if (
                        (function (e) {
                          if (!e) return !1;
                          switch (e.protocol) {
                            case "http:":
                            case "https:":
                            case "ftp:":
                            case "mailto:":
                            case "tel:":
                              return !0;
                            default:
                              return !1;
                          }
                        })(s)
                      )
                        return s;
                    } catch (s) {}
                    return null;
                  }),
                  (t.escapeString = function (e) {
                    return e.replace(/([()\\\n\r])/g, (e) =>
                      "\n" === e ? "\\n" : "\r" === e ? "\\r" : `\\${e}`
                    );
                  }),
                  (t.getModificationDate = function (e = new Date()) {
                    return [
                      e.getUTCFullYear().toString(),
                      (e.getUTCMonth() + 1).toString().padStart(2, "0"),
                      e.getUTCDate().toString().padStart(2, "0"),
                      e.getUTCHours().toString().padStart(2, "0"),
                      e.getUTCMinutes().toString().padStart(2, "0"),
                      e.getUTCSeconds().toString().padStart(2, "0"),
                    ].join("");
                  }),
                  (t.getVerbosityLevel = function () {
                    return n;
                  }),
                  (t.info = function (e) {
                    n >= r.INFOS && console.log(`Info: ${e}`);
                  }),
                  (t.isArrayBuffer = function (e) {
                    return (
                      "object" === typeof e &&
                      null !== e &&
                      void 0 !== e.byteLength
                    );
                  }),
                  (t.isArrayEqual = function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (let s = 0, r = e.length; s < r; s++)
                      if (e[s] !== t[s]) return !1;
                    return !0;
                  }),
                  (t.isAscii = function (e) {
                    return /^[\x00-\x7F]*$/.test(e);
                  }),
                  (t.isBool = function (e) {
                    return "boolean" === typeof e;
                  }),
                  (t.isNum = function (e) {
                    return "number" === typeof e;
                  }),
                  (t.isSameOrigin = function (e, t) {
                    let s;
                    try {
                      if (((s = new URL(e)), !s.origin || "null" === s.origin))
                        return !1;
                    } catch (n) {
                      return !1;
                    }
                    const r = new URL(t, s);
                    return s.origin === r.origin;
                  }),
                  (t.isString = function (e) {
                    return "string" === typeof e;
                  }),
                  (t.objectFromMap = function (e) {
                    const t = Object.create(null);
                    for (const [s, r] of e) t[s] = r;
                    return t;
                  }),
                  (t.objectSize = function (e) {
                    return Object.keys(e).length;
                  }),
                  (t.removeNullCharacters = function (e) {
                    return "string" !== typeof e
                      ? (a(
                          "The argument for removeNullCharacters must be a string."
                        ),
                        e)
                      : e.replace(h, "");
                  }),
                  (t.setVerbosityLevel = function (e) {
                    Number.isInteger(e) && (n = e);
                  }),
                  (t.shadow = l),
                  (t.string32 = function (e) {
                    return String.fromCharCode(
                      (e >> 24) & 255,
                      (e >> 16) & 255,
                      (e >> 8) & 255,
                      255 & e
                    );
                  }),
                  (t.stringToBytes = d),
                  (t.stringToPDFString = function (e) {
                    const t = e.length,
                      s = [];
                    if ("\xfe" === e[0] && "\xff" === e[1])
                      for (let r = 2; r < t; r += 2)
                        s.push(
                          String.fromCharCode(
                            (e.charCodeAt(r) << 8) | e.charCodeAt(r + 1)
                          )
                        );
                    else if ("\xff" === e[0] && "\xfe" === e[1])
                      for (let r = 2; r < t; r += 2)
                        s.push(
                          String.fromCharCode(
                            (e.charCodeAt(r + 1) << 8) | e.charCodeAt(r)
                          )
                        );
                    else
                      for (let r = 0; r < t; ++r) {
                        const t = _[e.charCodeAt(r)];
                        s.push(t ? String.fromCharCode(t) : e.charAt(r));
                      }
                    return s.join("");
                  }),
                  (t.stringToUTF16BEString = function (e) {
                    const t = ["\xfe\xff"];
                    for (let s = 0, r = e.length; s < r; s++) {
                      const r = e.charCodeAt(s);
                      t.push(
                        String.fromCharCode((r >> 8) & 255),
                        String.fromCharCode(255 & r)
                      );
                    }
                    return t.join("");
                  }),
                  (t.stringToUTF8String = function (e) {
                    return decodeURIComponent(escape(e));
                  }),
                  (t.unreachable = i),
                  (t.utf8StringToString = function (e) {
                    return unescape(encodeURIComponent(e));
                  }),
                  (t.warn = a),
                  (t.VerbosityLevel =
                    t.Util =
                    t.UNSUPPORTED_FEATURES =
                    t.UnknownErrorException =
                    t.UnexpectedResponseException =
                    t.TextRenderingMode =
                    t.StreamType =
                    t.PermissionFlag =
                    t.PasswordResponses =
                    t.PasswordException =
                    t.PageActionEventType =
                    t.OPS =
                    t.MissingPDFException =
                    t.IsLittleEndianCached =
                    t.IsEvalSupportedCached =
                    t.InvalidPDFException =
                    t.ImageKind =
                    t.IDENTITY_MATRIX =
                    t.FormatError =
                    t.FontType =
                    t.FONT_IDENTITY_MATRIX =
                    t.DocumentActionEventType =
                    t.CMapCompressionType =
                    t.BaseException =
                    t.AnnotationType =
                    t.AnnotationStateModelType =
                    t.AnnotationReviewState =
                    t.AnnotationReplyType =
                    t.AnnotationMarkedState =
                    t.AnnotationFlag =
                    t.AnnotationFieldFlag =
                    t.AnnotationBorderStyleType =
                    t.AnnotationActionEventType =
                    t.AbortException =
                      void 0),
                  s(3),
                  (t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0]),
                  (t.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0]),
                  (t.PermissionFlag = {
                    PRINT: 4,
                    MODIFY_CONTENTS: 8,
                    COPY: 16,
                    MODIFY_ANNOTATIONS: 32,
                    FILL_INTERACTIVE_FORMS: 256,
                    COPY_FOR_ACCESSIBILITY: 512,
                    ASSEMBLE: 1024,
                    PRINT_HIGH_QUALITY: 2048,
                  }),
                  (t.TextRenderingMode = {
                    FILL: 0,
                    STROKE: 1,
                    FILL_STROKE: 2,
                    INVISIBLE: 3,
                    FILL_ADD_TO_PATH: 4,
                    STROKE_ADD_TO_PATH: 5,
                    FILL_STROKE_ADD_TO_PATH: 6,
                    ADD_TO_PATH: 7,
                    FILL_STROKE_MASK: 3,
                    ADD_TO_PATH_FLAG: 4,
                  }),
                  (t.ImageKind = {
                    GRAYSCALE_1BPP: 1,
                    RGB_24BPP: 2,
                    RGBA_32BPP: 3,
                  }),
                  (t.AnnotationType = {
                    TEXT: 1,
                    LINK: 2,
                    FREETEXT: 3,
                    LINE: 4,
                    SQUARE: 5,
                    CIRCLE: 6,
                    POLYGON: 7,
                    POLYLINE: 8,
                    HIGHLIGHT: 9,
                    UNDERLINE: 10,
                    SQUIGGLY: 11,
                    STRIKEOUT: 12,
                    STAMP: 13,
                    CARET: 14,
                    INK: 15,
                    POPUP: 16,
                    FILEATTACHMENT: 17,
                    SOUND: 18,
                    MOVIE: 19,
                    WIDGET: 20,
                    SCREEN: 21,
                    PRINTERMARK: 22,
                    TRAPNET: 23,
                    WATERMARK: 24,
                    THREED: 25,
                    REDACT: 26,
                  }),
                  (t.AnnotationStateModelType = {
                    MARKED: "Marked",
                    REVIEW: "Review",
                  }),
                  (t.AnnotationMarkedState = {
                    MARKED: "Marked",
                    UNMARKED: "Unmarked",
                  }),
                  (t.AnnotationReviewState = {
                    ACCEPTED: "Accepted",
                    REJECTED: "Rejected",
                    CANCELLED: "Cancelled",
                    COMPLETED: "Completed",
                    NONE: "None",
                  }),
                  (t.AnnotationReplyType = { GROUP: "Group", REPLY: "R" }),
                  (t.AnnotationFlag = {
                    INVISIBLE: 1,
                    HIDDEN: 2,
                    PRINT: 4,
                    NOZOOM: 8,
                    NOROTATE: 16,
                    NOVIEW: 32,
                    READONLY: 64,
                    LOCKED: 128,
                    TOGGLENOVIEW: 256,
                    LOCKEDCONTENTS: 512,
                  }),
                  (t.AnnotationFieldFlag = {
                    READONLY: 1,
                    REQUIRED: 2,
                    NOEXPORT: 4,
                    MULTILINE: 4096,
                    PASSWORD: 8192,
                    NOTOGGLETOOFF: 16384,
                    RADIO: 32768,
                    PUSHBUTTON: 65536,
                    COMBO: 131072,
                    EDIT: 262144,
                    SORT: 524288,
                    FILESELECT: 1048576,
                    MULTISELECT: 2097152,
                    DONOTSPELLCHECK: 4194304,
                    DONOTSCROLL: 8388608,
                    COMB: 16777216,
                    RICHTEXT: 33554432,
                    RADIOSINUNISON: 33554432,
                    COMMITONSELCHANGE: 67108864,
                  }),
                  (t.AnnotationBorderStyleType = {
                    SOLID: 1,
                    DASHED: 2,
                    BEVELED: 3,
                    INSET: 4,
                    UNDERLINE: 5,
                  }),
                  (t.AnnotationActionEventType = {
                    E: "Mouse Enter",
                    X: "Mouse Exit",
                    D: "Mouse Down",
                    U: "Mouse Up",
                    Fo: "Focus",
                    Bl: "Blur",
                    PO: "PageOpen",
                    PC: "PageClose",
                    PV: "PageVisible",
                    PI: "PageInvisible",
                    K: "Keystroke",
                    F: "Format",
                    V: "Validate",
                    C: "Calculate",
                  }),
                  (t.DocumentActionEventType = {
                    WC: "WillClose",
                    WS: "WillSave",
                    DS: "DidSave",
                    WP: "WillPrint",
                    DP: "DidPrint",
                  }),
                  (t.PageActionEventType = { O: "PageOpen", C: "PageClose" }),
                  (t.StreamType = {
                    UNKNOWN: "UNKNOWN",
                    FLATE: "FLATE",
                    LZW: "LZW",
                    DCT: "DCT",
                    JPX: "JPX",
                    JBIG: "JBIG",
                    A85: "A85",
                    AHX: "AHX",
                    CCF: "CCF",
                    RLX: "RLX",
                  }),
                  (t.FontType = {
                    UNKNOWN: "UNKNOWN",
                    TYPE1: "TYPE1",
                    TYPE1STANDARD: "TYPE1STANDARD",
                    TYPE1C: "TYPE1C",
                    CIDFONTTYPE0: "CIDFONTTYPE0",
                    CIDFONTTYPE0C: "CIDFONTTYPE0C",
                    TRUETYPE: "TRUETYPE",
                    CIDFONTTYPE2: "CIDFONTTYPE2",
                    TYPE3: "TYPE3",
                    OPENTYPE: "OPENTYPE",
                    TYPE0: "TYPE0",
                    MMTYPE1: "MMTYPE1",
                  });
                const r = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
                (t.VerbosityLevel = r),
                  (t.CMapCompressionType = { NONE: 0, BINARY: 1, STREAM: 2 }),
                  (t.OPS = {
                    dependency: 1,
                    setLineWidth: 2,
                    setLineCap: 3,
                    setLineJoin: 4,
                    setMiterLimit: 5,
                    setDash: 6,
                    setRenderingIntent: 7,
                    setFlatness: 8,
                    setGState: 9,
                    save: 10,
                    restore: 11,
                    transform: 12,
                    moveTo: 13,
                    lineTo: 14,
                    curveTo: 15,
                    curveTo2: 16,
                    curveTo3: 17,
                    closePath: 18,
                    rectangle: 19,
                    stroke: 20,
                    closeStroke: 21,
                    fill: 22,
                    eoFill: 23,
                    fillStroke: 24,
                    eoFillStroke: 25,
                    closeFillStroke: 26,
                    closeEOFillStroke: 27,
                    endPath: 28,
                    clip: 29,
                    eoClip: 30,
                    beginText: 31,
                    endText: 32,
                    setCharSpacing: 33,
                    setWordSpacing: 34,
                    setHScale: 35,
                    setLeading: 36,
                    setFont: 37,
                    setTextRenderingMode: 38,
                    setTextRise: 39,
                    moveText: 40,
                    setLeadingMoveText: 41,
                    setTextMatrix: 42,
                    nextLine: 43,
                    showText: 44,
                    showSpacedText: 45,
                    nextLineShowText: 46,
                    nextLineSetSpacingShowText: 47,
                    setCharWidth: 48,
                    setCharWidthAndBounds: 49,
                    setStrokeColorSpace: 50,
                    setFillColorSpace: 51,
                    setStrokeColor: 52,
                    setStrokeColorN: 53,
                    setFillColor: 54,
                    setFillColorN: 55,
                    setStrokeGray: 56,
                    setFillGray: 57,
                    setStrokeRGBColor: 58,
                    setFillRGBColor: 59,
                    setStrokeCMYKColor: 60,
                    setFillCMYKColor: 61,
                    shadingFill: 62,
                    beginInlineImage: 63,
                    beginImageData: 64,
                    endInlineImage: 65,
                    paintXObject: 66,
                    markPoint: 67,
                    markPointProps: 68,
                    beginMarkedContent: 69,
                    beginMarkedContentProps: 70,
                    endMarkedContent: 71,
                    beginCompat: 72,
                    endCompat: 73,
                    paintFormXObjectBegin: 74,
                    paintFormXObjectEnd: 75,
                    beginGroup: 76,
                    endGroup: 77,
                    beginAnnotations: 78,
                    endAnnotations: 79,
                    beginAnnotation: 80,
                    endAnnotation: 81,
                    paintJpegXObject: 82,
                    paintImageMaskXObject: 83,
                    paintImageMaskXObjectGroup: 84,
                    paintImageXObject: 85,
                    paintInlineImageXObject: 86,
                    paintInlineImageXObjectGroup: 87,
                    paintImageXObjectRepeat: 88,
                    paintImageMaskXObjectRepeat: 89,
                    paintSolidColorImageMask: 90,
                    constructPath: 91,
                  }),
                  (t.UNSUPPORTED_FEATURES = {
                    unknown: "unknown",
                    forms: "forms",
                    javaScript: "javaScript",
                    signatures: "signatures",
                    smask: "smask",
                    shadingPattern: "shadingPattern",
                    font: "font",
                    errorTilingPattern: "errorTilingPattern",
                    errorExtGState: "errorExtGState",
                    errorXObject: "errorXObject",
                    errorFontLoadType3: "errorFontLoadType3",
                    errorFontState: "errorFontState",
                    errorFontMissing: "errorFontMissing",
                    errorFontTranslate: "errorFontTranslate",
                    errorColorSpace: "errorColorSpace",
                    errorOperatorList: "errorOperatorList",
                    errorFontToUnicode: "errorFontToUnicode",
                    errorFontLoadNative: "errorFontLoadNative",
                    errorFontBuildPath: "errorFontBuildPath",
                    errorFontGetPath: "errorFontGetPath",
                    errorMarkedContent: "errorMarkedContent",
                  }),
                  (t.PasswordResponses = {
                    NEED_PASSWORD: 1,
                    INCORRECT_PASSWORD: 2,
                  });
                let n = r.WARNINGS;
                function a(e) {
                  n >= r.WARNINGS && console.log(`Warning: ${e}`);
                }
                function i(e) {
                  throw new Error(e);
                }
                function o(e, t) {
                  e || i(t);
                }
                function l(e, t, s) {
                  return (
                    Object.defineProperty(e, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !1,
                    }),
                    s
                  );
                }
                const c = (function () {
                  function e(t) {
                    this.constructor === e &&
                      i("Cannot initialize BaseException."),
                      (this.message = t),
                      (this.name = this.constructor.name);
                  }
                  return (e.prototype = new Error()), (e.constructor = e), e;
                })();
                (t.BaseException = c),
                  (t.PasswordException = class extends c {
                    constructor(e, t) {
                      super(e), (this.code = t);
                    }
                  }),
                  (t.UnknownErrorException = class extends c {
                    constructor(e, t) {
                      super(e), (this.details = t);
                    }
                  }),
                  (t.InvalidPDFException = class extends c {}),
                  (t.MissingPDFException = class extends c {}),
                  (t.UnexpectedResponseException = class extends c {
                    constructor(e, t) {
                      super(e), (this.status = t);
                    }
                  }),
                  (t.FormatError = class extends c {}),
                  (t.AbortException = class extends c {});
                const h = /\x00/g;
                function d(e) {
                  o(
                    "string" === typeof e,
                    "Invalid argument for stringToBytes"
                  );
                  const t = e.length,
                    s = new Uint8Array(t);
                  for (let r = 0; r < t; ++r) s[r] = 255 & e.charCodeAt(r);
                  return s;
                }
                function u(e) {
                  return void 0 !== e.length
                    ? e.length
                    : (o(
                        void 0 !== e.byteLength,
                        "arrayByteLength - invalid argument."
                      ),
                      e.byteLength);
                }
                const p = {
                  get value() {
                    return l(
                      this,
                      "value",
                      (function () {
                        const e = new Uint8Array(4);
                        return (
                          (e[0] = 1), 1 === new Uint32Array(e.buffer, 0, 1)[0]
                        );
                      })()
                    );
                  },
                };
                t.IsLittleEndianCached = p;
                const g = {
                  get value() {
                    return l(
                      this,
                      "value",
                      (function () {
                        try {
                          return new Function(""), !0;
                        } catch (e) {
                          return !1;
                        }
                      })()
                    );
                  },
                };
                t.IsEvalSupportedCached = g;
                const f = [...Array(256).keys()].map((e) =>
                  e.toString(16).padStart(2, "0")
                );
                class m {
                  static makeHexColor(e, t, s) {
                    return `#${f[e]}${f[t]}${f[s]}`;
                  }
                  static transform(e, t) {
                    return [
                      e[0] * t[0] + e[2] * t[1],
                      e[1] * t[0] + e[3] * t[1],
                      e[0] * t[2] + e[2] * t[3],
                      e[1] * t[2] + e[3] * t[3],
                      e[0] * t[4] + e[2] * t[5] + e[4],
                      e[1] * t[4] + e[3] * t[5] + e[5],
                    ];
                  }
                  static applyTransform(e, t) {
                    return [
                      e[0] * t[0] + e[1] * t[2] + t[4],
                      e[0] * t[1] + e[1] * t[3] + t[5],
                    ];
                  }
                  static applyInverseTransform(e, t) {
                    const s = t[0] * t[3] - t[1] * t[2];
                    return [
                      (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) /
                        s,
                      (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) /
                        s,
                    ];
                  }
                  static getAxialAlignedBoundingBox(e, t) {
                    const s = m.applyTransform(e, t),
                      r = m.applyTransform(e.slice(2, 4), t),
                      n = m.applyTransform([e[0], e[3]], t),
                      a = m.applyTransform([e[2], e[1]], t);
                    return [
                      Math.min(s[0], r[0], n[0], a[0]),
                      Math.min(s[1], r[1], n[1], a[1]),
                      Math.max(s[0], r[0], n[0], a[0]),
                      Math.max(s[1], r[1], n[1], a[1]),
                    ];
                  }
                  static inverseTransform(e) {
                    const t = e[0] * e[3] - e[1] * e[2];
                    return [
                      e[3] / t,
                      -e[1] / t,
                      -e[2] / t,
                      e[0] / t,
                      (e[2] * e[5] - e[4] * e[3]) / t,
                      (e[4] * e[1] - e[5] * e[0]) / t,
                    ];
                  }
                  static apply3dTransform(e, t) {
                    return [
                      e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
                      e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
                      e[6] * t[0] + e[7] * t[1] + e[8] * t[2],
                    ];
                  }
                  static singularValueDecompose2dScale(e) {
                    const t = [e[0], e[2], e[1], e[3]],
                      s = e[0] * t[0] + e[1] * t[2],
                      r = e[0] * t[1] + e[1] * t[3],
                      n = e[2] * t[0] + e[3] * t[2],
                      a = e[2] * t[1] + e[3] * t[3],
                      i = (s + a) / 2,
                      o = Math.sqrt((s + a) ** 2 - 4 * (s * a - n * r)) / 2,
                      l = i + o || 1,
                      c = i - o || 1;
                    return [Math.sqrt(l), Math.sqrt(c)];
                  }
                  static normalizeRect(e) {
                    const t = e.slice(0);
                    return (
                      e[0] > e[2] && ((t[0] = e[2]), (t[2] = e[0])),
                      e[1] > e[3] && ((t[1] = e[3]), (t[3] = e[1])),
                      t
                    );
                  }
                  static intersect(e, t) {
                    function s(e, t) {
                      return e - t;
                    }
                    const r = [e[0], e[2], t[0], t[2]].sort(s),
                      n = [e[1], e[3], t[1], t[3]].sort(s),
                      a = [];
                    return (
                      (e = m.normalizeRect(e)),
                      (t = m.normalizeRect(t)),
                      (r[0] === e[0] && r[1] === t[0]) ||
                      (r[0] === t[0] && r[1] === e[0])
                        ? ((a[0] = r[1]),
                          (a[2] = r[2]),
                          (n[0] === e[1] && n[1] === t[1]) ||
                          (n[0] === t[1] && n[1] === e[1])
                            ? ((a[1] = n[1]), (a[3] = n[2]), a)
                            : null)
                        : null
                    );
                  }
                }
                t.Util = m;
                const _ = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211,
                  402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216,
                  8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305,
                  322, 339, 353, 382, 0, 8364,
                ];
              },
              (e, t, s) => {
                s(4);
              },
              (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.isNodeJS = void 0);
                const s =
                  "object" === typeof process &&
                  process + "" === "[object process]" &&
                  !process.versions.nw &&
                  !(
                    process.versions.electron &&
                    process.type &&
                    "browser" !== process.type
                  );
                t.isNodeJS = s;
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.BaseSVGFactory =
                    t.BaseStandardFontDataFactory =
                    t.BaseCMapReaderFactory =
                    t.BaseCanvasFactory =
                      void 0);
                var r = s(2);
                class n {
                  constructor() {
                    this.constructor === n &&
                      (0, r.unreachable)(
                        "Cannot initialize BaseCanvasFactory."
                      );
                  }
                  create(e, t) {
                    if (e <= 0 || t <= 0)
                      throw new Error("Invalid canvas size");
                    const s = this._createCanvas(e, t);
                    return { canvas: s, context: s.getContext("2d") };
                  }
                  reset(e, t, s) {
                    if (!e.canvas) throw new Error("Canvas is not specified");
                    if (t <= 0 || s <= 0)
                      throw new Error("Invalid canvas size");
                    (e.canvas.width = t), (e.canvas.height = s);
                  }
                  destroy(e) {
                    if (!e.canvas) throw new Error("Canvas is not specified");
                    (e.canvas.width = 0),
                      (e.canvas.height = 0),
                      (e.canvas = null),
                      (e.context = null);
                  }
                  _createCanvas(e, t) {
                    (0, r.unreachable)(
                      "Abstract method `_createCanvas` called."
                    );
                  }
                }
                t.BaseCanvasFactory = n;
                class a {
                  constructor({ baseUrl: e = null, isCompressed: t = !1 }) {
                    this.constructor === a &&
                      (0, r.unreachable)(
                        "Cannot initialize BaseCMapReaderFactory."
                      ),
                      (this.baseUrl = e),
                      (this.isCompressed = t);
                  }
                  async fetch({ name: e }) {
                    if (!this.baseUrl)
                      throw new Error(
                        'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
                      );
                    if (!e) throw new Error("CMap name must be specified.");
                    const t =
                        this.baseUrl + e + (this.isCompressed ? ".bcmap" : ""),
                      s = this.isCompressed
                        ? r.CMapCompressionType.BINARY
                        : r.CMapCompressionType.NONE;
                    return this._fetchData(t, s).catch((e) => {
                      throw new Error(
                        `Unable to load ${
                          this.isCompressed ? "binary " : ""
                        }CMap at: ${t}`
                      );
                    });
                  }
                  _fetchData(e, t) {
                    (0, r.unreachable)("Abstract method `_fetchData` called.");
                  }
                }
                t.BaseCMapReaderFactory = a;
                class i {
                  constructor({ baseUrl: e = null }) {
                    this.constructor === i &&
                      (0, r.unreachable)(
                        "Cannot initialize BaseStandardFontDataFactory."
                      ),
                      (this.baseUrl = e);
                  }
                  async fetch({ filename: e }) {
                    if (!this.baseUrl)
                      throw new Error(
                        'The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.'
                      );
                    if (!e) throw new Error("Font filename must be specified.");
                    const t = `${this.baseUrl}${e}`;
                    return this._fetchData(t).catch((e) => {
                      throw new Error(`Unable to load font data at: ${t}`);
                    });
                  }
                  _fetchData(e) {
                    (0, r.unreachable)("Abstract method `_fetchData` called.");
                  }
                }
                t.BaseStandardFontDataFactory = i;
                class o {
                  constructor() {
                    this.constructor === o &&
                      (0, r.unreachable)("Cannot initialize BaseSVGFactory.");
                  }
                  create(e, t) {
                    if (e <= 0 || t <= 0)
                      throw new Error("Invalid SVG dimensions");
                    const s = this._createSVG("svg:svg");
                    return (
                      s.setAttribute("version", "1.1"),
                      s.setAttribute("width", `${e}px`),
                      s.setAttribute("height", `${t}px`),
                      s.setAttribute("preserveAspectRatio", "none"),
                      s.setAttribute("viewBox", `0 0 ${e} ${t}`),
                      s
                    );
                  }
                  createElement(e) {
                    if ("string" !== typeof e)
                      throw new Error("Invalid SVG element type");
                    return this._createSVG(e);
                  }
                  _createSVG(e) {
                    (0, r.unreachable)("Abstract method `_createSVG` called.");
                  }
                }
                t.BaseSVGFactory = o;
              },
              (__unused_webpack_module, exports, __w_pdfjs_require__) => {
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                  (exports.getDocument = getDocument),
                  (exports.setPDFNetworkStreamFactory =
                    setPDFNetworkStreamFactory),
                  (exports.version =
                    exports.PDFWorker =
                    exports.PDFPageProxy =
                    exports.PDFDocumentProxy =
                    exports.PDFDataRangeTransport =
                    exports.LoopbackPort =
                    exports.DefaultStandardFontDataFactory =
                    exports.DefaultCMapReaderFactory =
                    exports.DefaultCanvasFactory =
                    exports.build =
                      void 0);
                var _util = __w_pdfjs_require__(2),
                  _display_utils = __w_pdfjs_require__(1),
                  _font_loader = __w_pdfjs_require__(7),
                  _node_utils = __w_pdfjs_require__(8),
                  _annotation_storage = __w_pdfjs_require__(9),
                  _canvas = __w_pdfjs_require__(10),
                  _worker_options = __w_pdfjs_require__(12),
                  _is_node = __w_pdfjs_require__(4),
                  _message_handler = __w_pdfjs_require__(13),
                  _metadata = __w_pdfjs_require__(14),
                  _optional_content_config = __w_pdfjs_require__(15),
                  _transport_stream = __w_pdfjs_require__(16);
                const DEFAULT_RANGE_CHUNK_SIZE = 65536,
                  RENDERING_CANCELLED_TIMEOUT = 100,
                  DefaultCanvasFactory = _is_node.isNodeJS
                    ? _node_utils.NodeCanvasFactory
                    : _display_utils.DOMCanvasFactory;
                exports.DefaultCanvasFactory = DefaultCanvasFactory;
                const DefaultCMapReaderFactory = _is_node.isNodeJS
                  ? _node_utils.NodeCMapReaderFactory
                  : _display_utils.DOMCMapReaderFactory;
                exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
                const DefaultStandardFontDataFactory = _is_node.isNodeJS
                  ? _node_utils.NodeStandardFontDataFactory
                  : _display_utils.DOMStandardFontDataFactory;
                let createPDFNetworkStream;
                function setPDFNetworkStreamFactory(e) {
                  createPDFNetworkStream = e;
                }
                function getDocument(e) {
                  const t = new PDFDocumentLoadingTask();
                  let s;
                  if ("string" === typeof e || e instanceof URL) s = { url: e };
                  else if ((0, _util.isArrayBuffer)(e)) s = { data: e };
                  else if (e instanceof PDFDataRangeTransport) s = { range: e };
                  else {
                    if ("object" !== typeof e)
                      throw new Error(
                        "Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object."
                      );
                    if (!e.url && !e.data && !e.range)
                      throw new Error(
                        "Invalid parameter object: need either .data, .range or .url"
                      );
                    s = e;
                  }
                  const r = Object.create(null);
                  let n = null,
                    a = null;
                  for (const l in s) {
                    const e = s[l];
                    switch (l) {
                      case "url":
                        if ("undefined" !== typeof window)
                          try {
                            r[l] = new URL(e, window.location).href;
                            continue;
                          } catch (o) {
                            (0, _util.warn)(`Cannot create valid URL: "${o}".`);
                          }
                        else if ("string" === typeof e || e instanceof URL) {
                          r[l] = e.toString();
                          continue;
                        }
                        throw new Error(
                          "Invalid PDF url data: either string or URL-object is expected in the url property."
                        );
                      case "range":
                        n = e;
                        continue;
                      case "worker":
                        a = e;
                        continue;
                      case "data":
                        if (
                          _is_node.isNodeJS &&
                          "undefined" !== typeof Buffer &&
                          e instanceof Buffer
                        )
                          r[l] = new Uint8Array(e);
                        else {
                          if (e instanceof Uint8Array) break;
                          if ("string" === typeof e)
                            r[l] = (0, _util.stringToBytes)(e);
                          else if (
                            "object" !== typeof e ||
                            null === e ||
                            isNaN(e.length)
                          ) {
                            if (!(0, _util.isArrayBuffer)(e))
                              throw new Error(
                                "Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property."
                              );
                            r[l] = new Uint8Array(e);
                          } else r[l] = new Uint8Array(e);
                        }
                        continue;
                    }
                    r[l] = e;
                  }
                  if (
                    ((r.rangeChunkSize =
                      r.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE),
                    (r.CMapReaderFactory =
                      r.CMapReaderFactory || DefaultCMapReaderFactory),
                    (r.StandardFontDataFactory =
                      r.StandardFontDataFactory ||
                      DefaultStandardFontDataFactory),
                    (r.ignoreErrors = !0 !== r.stopAtErrors),
                    (r.fontExtraProperties = !0 === r.fontExtraProperties),
                    (r.pdfBug = !0 === r.pdfBug),
                    (r.enableXfa = !0 === r.enableXfa),
                    ("string" !== typeof r.docBaseUrl ||
                      (0, _display_utils.isDataScheme)(r.docBaseUrl)) &&
                      (r.docBaseUrl = null),
                    Number.isInteger(r.maxImageSize) || (r.maxImageSize = -1),
                    "boolean" !== typeof r.useWorkerFetch &&
                      (r.useWorkerFetch =
                        r.CMapReaderFactory ===
                          _display_utils.DOMCMapReaderFactory &&
                        r.StandardFontDataFactory ===
                          _display_utils.DOMStandardFontDataFactory),
                    "boolean" !== typeof r.isEvalSupported &&
                      (r.isEvalSupported = !0),
                    "boolean" !== typeof r.disableFontFace &&
                      (r.disableFontFace = _is_node.isNodeJS),
                    "boolean" !== typeof r.useSystemFonts &&
                      (r.useSystemFonts =
                        !_is_node.isNodeJS && !r.disableFontFace),
                    "undefined" === typeof r.ownerDocument &&
                      (r.ownerDocument = globalThis.document),
                    "boolean" !== typeof r.disableRange &&
                      (r.disableRange = !1),
                    "boolean" !== typeof r.disableStream &&
                      (r.disableStream = !1),
                    "boolean" !== typeof r.disableAutoFetch &&
                      (r.disableAutoFetch = !1),
                    (0, _util.setVerbosityLevel)(r.verbosity),
                    !a)
                  ) {
                    const e = {
                      verbosity: r.verbosity,
                      port: _worker_options.GlobalWorkerOptions.workerPort,
                    };
                    (a = e.port ? PDFWorker.fromPort(e) : new PDFWorker(e)),
                      (t._worker = a);
                  }
                  const i = t.docId;
                  return (
                    a.promise
                      .then(function () {
                        if (t.destroyed) throw new Error("Loading aborted");
                        const e = _fetchDocument(a, r, n, i),
                          s = new Promise(function (e) {
                            let t;
                            n
                              ? (t =
                                  new _transport_stream.PDFDataTransportStream(
                                    {
                                      length: r.length,
                                      initialData: r.initialData,
                                      progressiveDone: r.progressiveDone,
                                      contentDispositionFilename:
                                        r.contentDispositionFilename,
                                      disableRange: r.disableRange,
                                      disableStream: r.disableStream,
                                    },
                                    n
                                  ))
                              : r.data ||
                                (t = createPDFNetworkStream({
                                  url: r.url,
                                  length: r.length,
                                  httpHeaders: r.httpHeaders,
                                  withCredentials: r.withCredentials,
                                  rangeChunkSize: r.rangeChunkSize,
                                  disableRange: r.disableRange,
                                  disableStream: r.disableStream,
                                })),
                              e(t);
                          });
                        return Promise.all([e, s]).then(function ([e, s]) {
                          if (t.destroyed) throw new Error("Loading aborted");
                          const n = new _message_handler.MessageHandler(
                            i,
                            e,
                            a.port
                          );
                          n.postMessageTransfers = a.postMessageTransfers;
                          const o = new WorkerTransport(n, t, s, r);
                          (t._transport = o), n.send("Ready", null);
                        });
                      })
                      .catch(t._capability.reject),
                    t
                  );
                }
                function _fetchDocument(e, t, s, r) {
                  return e.destroyed
                    ? Promise.reject(new Error("Worker was destroyed"))
                    : (s &&
                        ((t.length = s.length),
                        (t.initialData = s.initialData),
                        (t.progressiveDone = s.progressiveDone),
                        (t.contentDispositionFilename =
                          s.contentDispositionFilename)),
                      e.messageHandler
                        .sendWithPromise("GetDocRequest", {
                          docId: r,
                          apiVersion: "2.10.377",
                          source: {
                            data: t.data,
                            url: t.url,
                            password: t.password,
                            disableAutoFetch: t.disableAutoFetch,
                            rangeChunkSize: t.rangeChunkSize,
                            length: t.length,
                          },
                          maxImageSize: t.maxImageSize,
                          disableFontFace: t.disableFontFace,
                          postMessageTransfers: e.postMessageTransfers,
                          docBaseUrl: t.docBaseUrl,
                          ignoreErrors: t.ignoreErrors,
                          isEvalSupported: t.isEvalSupported,
                          fontExtraProperties: t.fontExtraProperties,
                          enableXfa: t.enableXfa,
                          useSystemFonts: t.useSystemFonts,
                          cMapUrl: t.useWorkerFetch ? t.cMapUrl : null,
                          standardFontDataUrl: t.useWorkerFetch
                            ? t.standardFontDataUrl
                            : null,
                        })
                        .then(function (t) {
                          if (e.destroyed)
                            throw new Error("Worker was destroyed");
                          return t;
                        }));
                }
                exports.DefaultStandardFontDataFactory =
                  DefaultStandardFontDataFactory;
                const PDFDocumentLoadingTask = (function () {
                  let e = 0;
                  return class {
                    constructor() {
                      (this._capability = (0, _util.createPromiseCapability)()),
                        (this._transport = null),
                        (this._worker = null),
                        (this.docId = "d" + e++),
                        (this.destroyed = !1),
                        (this.onPassword = null),
                        (this.onProgress = null),
                        (this.onUnsupportedFeature = null);
                    }
                    get promise() {
                      return this._capability.promise;
                    }
                    destroy() {
                      return (
                        (this.destroyed = !0),
                        (this._transport
                          ? this._transport.destroy()
                          : Promise.resolve()
                        ).then(() => {
                          (this._transport = null),
                            this._worker &&
                              (this._worker.destroy(), (this._worker = null));
                        })
                      );
                    }
                  };
                })();
                class PDFDataRangeTransport {
                  constructor(e, t, s = !1, r = null) {
                    (this.length = e),
                      (this.initialData = t),
                      (this.progressiveDone = s),
                      (this.contentDispositionFilename = r),
                      (this._rangeListeners = []),
                      (this._progressListeners = []),
                      (this._progressiveReadListeners = []),
                      (this._progressiveDoneListeners = []),
                      (this._readyCapability = (0,
                      _util.createPromiseCapability)());
                  }
                  addRangeListener(e) {
                    this._rangeListeners.push(e);
                  }
                  addProgressListener(e) {
                    this._progressListeners.push(e);
                  }
                  addProgressiveReadListener(e) {
                    this._progressiveReadListeners.push(e);
                  }
                  addProgressiveDoneListener(e) {
                    this._progressiveDoneListeners.push(e);
                  }
                  onDataRange(e, t) {
                    for (const s of this._rangeListeners) s(e, t);
                  }
                  onDataProgress(e, t) {
                    this._readyCapability.promise.then(() => {
                      for (const s of this._progressListeners) s(e, t);
                    });
                  }
                  onDataProgressiveRead(e) {
                    this._readyCapability.promise.then(() => {
                      for (const t of this._progressiveReadListeners) t(e);
                    });
                  }
                  onDataProgressiveDone() {
                    this._readyCapability.promise.then(() => {
                      for (const e of this._progressiveDoneListeners) e();
                    });
                  }
                  transportReady() {
                    this._readyCapability.resolve();
                  }
                  requestDataRange(e, t) {
                    (0, _util.unreachable)(
                      "Abstract method PDFDataRangeTransport.requestDataRange"
                    );
                  }
                  abort() {}
                }
                exports.PDFDataRangeTransport = PDFDataRangeTransport;
                class PDFDocumentProxy {
                  constructor(e, t) {
                    (this._pdfInfo = e),
                      (this._transport = t),
                      Object.defineProperty(this, "fingerprint", {
                        get() {
                          return (
                            (0, _display_utils.deprecated)(
                              "`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead."
                            ),
                            this.fingerprints[0]
                          );
                        },
                      });
                  }
                  get annotationStorage() {
                    return this._transport.annotationStorage;
                  }
                  get numPages() {
                    return this._pdfInfo.numPages;
                  }
                  get fingerprints() {
                    return this._pdfInfo.fingerprints;
                  }
                  get isPureXfa() {
                    return !!this._transport._htmlForXfa;
                  }
                  get allXfaHtml() {
                    return this._transport._htmlForXfa;
                  }
                  getPage(e) {
                    return this._transport.getPage(e);
                  }
                  getPageIndex(e) {
                    return this._transport.getPageIndex(e);
                  }
                  getDestinations() {
                    return this._transport.getDestinations();
                  }
                  getDestination(e) {
                    return this._transport.getDestination(e);
                  }
                  getPageLabels() {
                    return this._transport.getPageLabels();
                  }
                  getPageLayout() {
                    return this._transport.getPageLayout();
                  }
                  getPageMode() {
                    return this._transport.getPageMode();
                  }
                  getViewerPreferences() {
                    return this._transport.getViewerPreferences();
                  }
                  getOpenAction() {
                    return this._transport.getOpenAction();
                  }
                  getAttachments() {
                    return this._transport.getAttachments();
                  }
                  getJavaScript() {
                    return this._transport.getJavaScript();
                  }
                  getJSActions() {
                    return this._transport.getDocJSActions();
                  }
                  getOutline() {
                    return this._transport.getOutline();
                  }
                  getOptionalContentConfig() {
                    return this._transport.getOptionalContentConfig();
                  }
                  getPermissions() {
                    return this._transport.getPermissions();
                  }
                  getMetadata() {
                    return this._transport.getMetadata();
                  }
                  getMarkInfo() {
                    return this._transport.getMarkInfo();
                  }
                  getData() {
                    return this._transport.getData();
                  }
                  getDownloadInfo() {
                    return this._transport.downloadInfoCapability.promise;
                  }
                  getStats() {
                    return this._transport.getStats();
                  }
                  cleanup(e = !1) {
                    return this._transport.startCleanup(e || this.isPureXfa);
                  }
                  destroy() {
                    return this.loadingTask.destroy();
                  }
                  get loadingParams() {
                    return this._transport.loadingParams;
                  }
                  get loadingTask() {
                    return this._transport.loadingTask;
                  }
                  saveDocument() {
                    return (
                      this._transport.annotationStorage.size <= 0 &&
                        (0, _display_utils.deprecated)(
                          "saveDocument called while `annotationStorage` is empty, please use the getData-method instead."
                        ),
                      this._transport.saveDocument()
                    );
                  }
                  getFieldObjects() {
                    return this._transport.getFieldObjects();
                  }
                  hasJSActions() {
                    return this._transport.hasJSActions();
                  }
                  getCalculationOrderIds() {
                    return this._transport.getCalculationOrderIds();
                  }
                }
                exports.PDFDocumentProxy = PDFDocumentProxy;
                class PDFPageProxy {
                  constructor(e, t, s, r, n = !1) {
                    (this._pageIndex = e),
                      (this._pageInfo = t),
                      (this._ownerDocument = r),
                      (this._transport = s),
                      (this._stats = n ? new _display_utils.StatTimer() : null),
                      (this._pdfBug = n),
                      (this.commonObjs = s.commonObjs),
                      (this.objs = new PDFObjects()),
                      (this.cleanupAfterRender = !1),
                      (this.pendingCleanup = !1),
                      (this._intentStates = new Map()),
                      (this.destroyed = !1);
                  }
                  get pageNumber() {
                    return this._pageIndex + 1;
                  }
                  get rotate() {
                    return this._pageInfo.rotate;
                  }
                  get ref() {
                    return this._pageInfo.ref;
                  }
                  get userUnit() {
                    return this._pageInfo.userUnit;
                  }
                  get view() {
                    return this._pageInfo.view;
                  }
                  getViewport({
                    scale: e,
                    rotation: t = this.rotate,
                    offsetX: s = 0,
                    offsetY: r = 0,
                    dontFlip: n = !1,
                  } = {}) {
                    return new _display_utils.PageViewport({
                      viewBox: this.view,
                      scale: e,
                      rotation: t,
                      offsetX: s,
                      offsetY: r,
                      dontFlip: n,
                    });
                  }
                  getAnnotations({ intent: e = null } = {}) {
                    const t = "display" === e || "print" === e ? e : null;
                    return (
                      (this._annotationsPromise &&
                        this._annotationsIntent === t) ||
                        ((this._annotationsPromise =
                          this._transport.getAnnotations(this._pageIndex, t)),
                        (this._annotationsIntent = t)),
                      this._annotationsPromise
                    );
                  }
                  getJSActions() {
                    return (
                      this._jsActionsPromise ||
                      (this._jsActionsPromise =
                        this._transport.getPageJSActions(this._pageIndex))
                    );
                  }
                  async getXfa() {
                    return (
                      this._transport._htmlForXfa?.children[this._pageIndex] ||
                      null
                    );
                  }
                  render({
                    canvasContext: e,
                    viewport: t,
                    intent: s = "display",
                    renderInteractiveForms: r = !1,
                    transform: n = null,
                    imageLayer: a = null,
                    canvasFactory: i = null,
                    background: o = null,
                    includeAnnotationStorage: l = !1,
                    optionalContentConfigPromise: c = null,
                  }) {
                    var h;
                    this._stats && this._stats.time("Overall");
                    const d = "print" === s ? "print" : "display";
                    (this.pendingCleanup = !1),
                      c || (c = this._transport.getOptionalContentConfig());
                    let u = this._intentStates.get(d);
                    u ||
                      ((u = Object.create(null)), this._intentStates.set(d, u)),
                      u.streamReaderCancelTimeout &&
                        (clearTimeout(u.streamReaderCancelTimeout),
                        (u.streamReaderCancelTimeout = null));
                    const p =
                        i ||
                        new DefaultCanvasFactory({
                          ownerDocument: this._ownerDocument,
                        }),
                      g = l
                        ? this._transport.annotationStorage.serializable
                        : null;
                    u.displayReadyCapability ||
                      ((u.displayReadyCapability = (0,
                      _util.createPromiseCapability)()),
                      (u.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1,
                      }),
                      this._stats && this._stats.time("Page Request"),
                      this._pumpOperatorList({
                        pageIndex: this._pageIndex,
                        intent: d,
                        renderInteractiveForms: !0 === r,
                        annotationStorage: g,
                      }));
                    const f = (e) => {
                        u.renderTasks.delete(m),
                          (this.cleanupAfterRender || "print" === d) &&
                            (this.pendingCleanup = !0),
                          this._tryCleanup(),
                          e
                            ? (m.capability.reject(e),
                              this._abortOperatorList({
                                intentState: u,
                                reason: e,
                              }))
                            : m.capability.resolve(),
                          this._stats &&
                            (this._stats.timeEnd("Rendering"),
                            this._stats.timeEnd("Overall"));
                      },
                      m = new InternalRenderTask({
                        callback: f,
                        params: {
                          canvasContext: e,
                          viewport: t,
                          transform: n,
                          imageLayer: a,
                          background: o,
                        },
                        objs: this.objs,
                        commonObjs: this.commonObjs,
                        operatorList: u.operatorList,
                        pageIndex: this._pageIndex,
                        canvasFactory: p,
                        useRequestAnimationFrame: "print" !== d,
                        pdfBug: this._pdfBug,
                      });
                    ((h = u).renderTasks || (h.renderTasks = new Set())).add(m);
                    const _ = m.task;
                    return (
                      Promise.all([u.displayReadyCapability.promise, c])
                        .then(([e, t]) => {
                          this.pendingCleanup
                            ? f()
                            : (this._stats && this._stats.time("Rendering"),
                              m.initializeGraphics({
                                transparency: e,
                                optionalContentConfig: t,
                              }),
                              m.operatorListChanged());
                        })
                        .catch(f),
                      _
                    );
                  }
                  getOperatorList({ intent: e = "display" } = {}) {
                    const t = "oplist-" + ("print" === e ? "print" : "display");
                    let s,
                      r = this._intentStates.get(t);
                    var n;
                    return (
                      r ||
                        ((r = Object.create(null)),
                        this._intentStates.set(t, r)),
                      r.opListReadCapability ||
                        ((s = Object.create(null)),
                        (s.operatorListChanged = function () {
                          r.operatorList.lastChunk &&
                            (r.opListReadCapability.resolve(r.operatorList),
                            r.renderTasks.delete(s));
                        }),
                        (r.opListReadCapability = (0,
                        _util.createPromiseCapability)()),
                        (
                          (n = r).renderTasks || (n.renderTasks = new Set())
                        ).add(s),
                        (r.operatorList = {
                          fnArray: [],
                          argsArray: [],
                          lastChunk: !1,
                        }),
                        this._stats && this._stats.time("Page Request"),
                        this._pumpOperatorList({
                          pageIndex: this._pageIndex,
                          intent: t,
                        })),
                      r.opListReadCapability.promise
                    );
                  }
                  streamTextContent({
                    normalizeWhitespace: e = !1,
                    disableCombineTextItems: t = !1,
                    includeMarkedContent: s = !1,
                  } = {}) {
                    return this._transport.messageHandler.sendWithStream(
                      "GetTextContent",
                      {
                        pageIndex: this._pageIndex,
                        normalizeWhitespace: !0 === e,
                        combineTextItems: !0 !== t,
                        includeMarkedContent: !0 === s,
                      },
                      { highWaterMark: 100, size: (e) => e.items.length }
                    );
                  }
                  getTextContent(e = {}) {
                    const t = this.streamTextContent(e);
                    return new Promise(function (e, s) {
                      const r = t.getReader(),
                        n = { items: [], styles: Object.create(null) };
                      !(function t() {
                        r.read().then(function ({ value: s, done: r }) {
                          r
                            ? e(n)
                            : (Object.assign(n.styles, s.styles),
                              n.items.push(...s.items),
                              t());
                        }, s);
                      })();
                    });
                  }
                  getStructTree() {
                    return (
                      this._structTreePromise ||
                      (this._structTreePromise = this._transport.getStructTree(
                        this._pageIndex
                      ))
                    );
                  }
                  _destroy() {
                    (this.destroyed = !0),
                      (this._transport.pageCache[this._pageIndex] = null);
                    const e = [];
                    for (const [t, s] of this._intentStates)
                      if (
                        (this._abortOperatorList({
                          intentState: s,
                          reason: new Error("Page was destroyed."),
                          force: !0,
                        }),
                        !t.startsWith("oplist-"))
                      )
                        for (const r of s.renderTasks)
                          e.push(r.completed), r.cancel();
                    return (
                      this.objs.clear(),
                      (this._annotationsPromise = null),
                      (this._jsActionsPromise = null),
                      (this._structTreePromise = null),
                      (this.pendingCleanup = !1),
                      Promise.all(e)
                    );
                  }
                  cleanup(e = !1) {
                    return (this.pendingCleanup = !0), this._tryCleanup(e);
                  }
                  _tryCleanup(e = !1) {
                    if (!this.pendingCleanup) return !1;
                    for (const {
                      renderTasks: t,
                      operatorList: s,
                    } of this._intentStates.values())
                      if (t.size > 0 || !s.lastChunk) return !1;
                    return (
                      this._intentStates.clear(),
                      this.objs.clear(),
                      (this._annotationsPromise = null),
                      (this._jsActionsPromise = null),
                      (this._structTreePromise = null),
                      e &&
                        this._stats &&
                        (this._stats = new _display_utils.StatTimer()),
                      (this.pendingCleanup = !1),
                      !0
                    );
                  }
                  _startRenderPage(e, t) {
                    const s = this._intentStates.get(t);
                    s &&
                      (this._stats && this._stats.timeEnd("Page Request"),
                      s.displayReadyCapability &&
                        s.displayReadyCapability.resolve(e));
                  }
                  _renderPageChunk(e, t) {
                    for (let s = 0, r = e.length; s < r; s++)
                      t.operatorList.fnArray.push(e.fnArray[s]),
                        t.operatorList.argsArray.push(e.argsArray[s]);
                    t.operatorList.lastChunk = e.lastChunk;
                    for (const s of t.renderTasks) s.operatorListChanged();
                    e.lastChunk && this._tryCleanup();
                  }
                  _pumpOperatorList(e) {
                    (0, _util.assert)(
                      e.intent,
                      'PDFPageProxy._pumpOperatorList: Expected "intent" argument.'
                    );
                    const t = this._transport.messageHandler
                        .sendWithStream("GetOperatorList", e)
                        .getReader(),
                      s = this._intentStates.get(e.intent);
                    s.streamReader = t;
                    const r = () => {
                      t.read().then(
                        ({ value: e, done: t }) => {
                          t
                            ? (s.streamReader = null)
                            : this._transport.destroyed ||
                              (this._renderPageChunk(e, s), r());
                        },
                        (e) => {
                          if (
                            ((s.streamReader = null),
                            !this._transport.destroyed)
                          ) {
                            if (s.operatorList) {
                              s.operatorList.lastChunk = !0;
                              for (const e of s.renderTasks)
                                e.operatorListChanged();
                              this._tryCleanup();
                            }
                            if (s.displayReadyCapability)
                              s.displayReadyCapability.reject(e);
                            else {
                              if (!s.opListReadCapability) throw e;
                              s.opListReadCapability.reject(e);
                            }
                          }
                        }
                      );
                    };
                    r();
                  }
                  _abortOperatorList({
                    intentState: e,
                    reason: t,
                    force: s = !1,
                  }) {
                    if (
                      ((0, _util.assert)(
                        t instanceof Error ||
                          ("object" === typeof t && null !== t),
                        'PDFPageProxy._abortOperatorList: Expected "reason" argument.'
                      ),
                      e.streamReader)
                    ) {
                      if (!s) {
                        if (e.renderTasks.size > 0) return;
                        if (
                          t instanceof
                          _display_utils.RenderingCancelledException
                        )
                          return void (e.streamReaderCancelTimeout = setTimeout(
                            () => {
                              this._abortOperatorList({
                                intentState: e,
                                reason: t,
                                force: !0,
                              }),
                                (e.streamReaderCancelTimeout = null);
                            },
                            RENDERING_CANCELLED_TIMEOUT
                          ));
                      }
                      if (
                        (e.streamReader.cancel(
                          new _util.AbortException(t?.message)
                        ),
                        (e.streamReader = null),
                        !this._transport.destroyed)
                      ) {
                        for (const [t, s] of this._intentStates)
                          if (s === e) {
                            this._intentStates.delete(t);
                            break;
                          }
                        this.cleanup();
                      }
                    }
                  }
                  get stats() {
                    return this._stats;
                  }
                }
                exports.PDFPageProxy = PDFPageProxy;
                class LoopbackPort {
                  constructor() {
                    (this._listeners = []),
                      (this._deferred = Promise.resolve(void 0));
                  }
                  postMessage(e, t) {
                    const s = new WeakMap(),
                      r = {
                        data: (function e(r) {
                          if (
                            "function" === typeof r ||
                            "symbol" === typeof r ||
                            r instanceof URL
                          )
                            throw new Error(
                              `LoopbackPort.postMessage - cannot clone: ${r?.toString()}`
                            );
                          if ("object" !== typeof r || null === r) return r;
                          if (s.has(r)) return s.get(r);
                          let n, a;
                          if ((n = r.buffer) && (0, _util.isArrayBuffer)(n))
                            return (
                              (a = t?.includes(n)
                                ? new r.constructor(
                                    n,
                                    r.byteOffset,
                                    r.byteLength
                                  )
                                : new r.constructor(r)),
                              s.set(r, a),
                              a
                            );
                          if (r instanceof Map) {
                            (a = new Map()), s.set(r, a);
                            for (const [t, s] of r) a.set(t, e(s));
                            return a;
                          }
                          if (r instanceof Set) {
                            (a = new Set()), s.set(r, a);
                            for (const t of r) a.add(e(t));
                            return a;
                          }
                          (a = Array.isArray(r) ? [] : Object.create(null)),
                            s.set(r, a);
                          for (const t in r) {
                            let s,
                              n = r;
                            for (
                              ;
                              !(s = Object.getOwnPropertyDescriptor(n, t));

                            )
                              n = Object.getPrototypeOf(n);
                            "undefined" !== typeof s.value &&
                              ("function" !== typeof s.value ||
                                r.hasOwnProperty?.(t)) &&
                              (a[t] = e(s.value));
                          }
                          return a;
                        })(e),
                      };
                    this._deferred.then(() => {
                      for (const e of this._listeners) e.call(this, r);
                    });
                  }
                  addEventListener(e, t) {
                    this._listeners.push(t);
                  }
                  removeEventListener(e, t) {
                    const s = this._listeners.indexOf(t);
                    this._listeners.splice(s, 1);
                  }
                  terminate() {
                    this._listeners.length = 0;
                  }
                }
                exports.LoopbackPort = LoopbackPort;
                const PDFWorker = (function PDFWorkerClosure() {
                  const pdfWorkerPorts = new WeakMap();
                  let isWorkerDisabled = !1,
                    fallbackWorkerSrc,
                    nextFakeWorkerId = 0,
                    fakeWorkerCapability;
                  if (_is_node.isNodeJS)
                    (isWorkerDisabled = !0),
                      (fallbackWorkerSrc = "./pdf.worker.js");
                  else if (
                    "object" === typeof document &&
                    "currentScript" in document
                  ) {
                    const e = document.currentScript?.src;
                    e &&
                      (fallbackWorkerSrc = e.replace(
                        /(\.(?:min\.)?js)(\?.*)?$/i,
                        ".worker$1$2"
                      ));
                  }
                  function getWorkerSrc() {
                    if (_worker_options.GlobalWorkerOptions.workerSrc)
                      return _worker_options.GlobalWorkerOptions.workerSrc;
                    if ("undefined" !== typeof fallbackWorkerSrc)
                      return (
                        _is_node.isNodeJS ||
                          (0, _display_utils.deprecated)(
                            'No "GlobalWorkerOptions.workerSrc" specified.'
                          ),
                        fallbackWorkerSrc
                      );
                    throw new Error(
                      'No "GlobalWorkerOptions.workerSrc" specified.'
                    );
                  }
                  function getMainThreadWorkerMessageHandler() {
                    let e;
                    try {
                      e = globalThis.pdfjsWorker?.WorkerMessageHandler;
                    } catch (t) {}
                    return e || null;
                  }
                  function setupFakeWorkerGlobal() {
                    if (fakeWorkerCapability)
                      return fakeWorkerCapability.promise;
                    fakeWorkerCapability = (0, _util.createPromiseCapability)();
                    const loader = async function () {
                      const mainWorkerMessageHandler =
                        getMainThreadWorkerMessageHandler();
                      if (mainWorkerMessageHandler)
                        return mainWorkerMessageHandler;
                      if (_is_node.isNodeJS) {
                        const worker = eval("require")(getWorkerSrc());
                        return worker.WorkerMessageHandler;
                      }
                      return (
                        await (0, _display_utils.loadScript)(getWorkerSrc()),
                        window.pdfjsWorker.WorkerMessageHandler
                      );
                    };
                    return (
                      loader().then(
                        fakeWorkerCapability.resolve,
                        fakeWorkerCapability.reject
                      ),
                      fakeWorkerCapability.promise
                    );
                  }
                  function createCDNWrapper(e) {
                    const t = "importScripts('" + e + "');";
                    return URL.createObjectURL(new Blob([t]));
                  }
                  class PDFWorker {
                    constructor({
                      name: e = null,
                      port: t = null,
                      verbosity: s = (0, _util.getVerbosityLevel)(),
                    } = {}) {
                      if (t && pdfWorkerPorts.has(t))
                        throw new Error(
                          "Cannot use more than one PDFWorker per port"
                        );
                      if (
                        ((this.name = e),
                        (this.destroyed = !1),
                        (this.postMessageTransfers = !0),
                        (this.verbosity = s),
                        (this._readyCapability = (0,
                        _util.createPromiseCapability)()),
                        (this._port = null),
                        (this._webWorker = null),
                        (this._messageHandler = null),
                        t)
                      )
                        return (
                          pdfWorkerPorts.set(t, this),
                          void this._initializeFromPort(t)
                        );
                      this._initialize();
                    }
                    get promise() {
                      return this._readyCapability.promise;
                    }
                    get port() {
                      return this._port;
                    }
                    get messageHandler() {
                      return this._messageHandler;
                    }
                    _initializeFromPort(e) {
                      (this._port = e),
                        (this._messageHandler =
                          new _message_handler.MessageHandler(
                            "main",
                            "worker",
                            e
                          )),
                        this._messageHandler.on("ready", function () {}),
                        this._readyCapability.resolve();
                    }
                    _initialize() {
                      if (
                        "undefined" !== typeof Worker &&
                        !isWorkerDisabled &&
                        !getMainThreadWorkerMessageHandler()
                      ) {
                        let t = getWorkerSrc();
                        try {
                          (0, _util.isSameOrigin)(window.location.href, t) ||
                            (t = createCDNWrapper(
                              new URL(t, window.location).href
                            ));
                          const e = new Worker(t),
                            s = new _message_handler.MessageHandler(
                              "main",
                              "worker",
                              e
                            ),
                            r = () => {
                              e.removeEventListener("error", n),
                                s.destroy(),
                                e.terminate(),
                                this.destroyed
                                  ? this._readyCapability.reject(
                                      new Error("Worker was destroyed")
                                    )
                                  : this._setupFakeWorker();
                            },
                            n = () => {
                              this._webWorker || r();
                            };
                          e.addEventListener("error", n),
                            s.on("test", (t) => {
                              e.removeEventListener("error", n),
                                this.destroyed
                                  ? r()
                                  : t
                                  ? ((this._messageHandler = s),
                                    (this._port = e),
                                    (this._webWorker = e),
                                    t.supportTransfers ||
                                      (this.postMessageTransfers = !1),
                                    this._readyCapability.resolve(),
                                    s.send("configure", {
                                      verbosity: this.verbosity,
                                    }))
                                  : (this._setupFakeWorker(),
                                    s.destroy(),
                                    e.terminate());
                            }),
                            s.on("ready", (t) => {
                              if (
                                (e.removeEventListener("error", n),
                                this.destroyed)
                              )
                                r();
                              else
                                try {
                                  a();
                                } catch (s) {
                                  this._setupFakeWorker();
                                }
                            });
                          const a = () => {
                            const e = new Uint8Array([
                              this.postMessageTransfers ? 255 : 0,
                            ]);
                            try {
                              s.send("test", e, [e.buffer]);
                            } catch (t) {
                              (0, _util.warn)(
                                "Cannot use postMessage transfers."
                              ),
                                (e[0] = 0),
                                s.send("test", e);
                            }
                          };
                          return void a();
                        } catch (e) {
                          (0, _util.info)("The worker has been disabled.");
                        }
                      }
                      this._setupFakeWorker();
                    }
                    _setupFakeWorker() {
                      isWorkerDisabled ||
                        ((0, _util.warn)("Setting up fake worker."),
                        (isWorkerDisabled = !0)),
                        setupFakeWorkerGlobal()
                          .then((e) => {
                            if (this.destroyed)
                              return void this._readyCapability.reject(
                                new Error("Worker was destroyed")
                              );
                            const t = new LoopbackPort();
                            this._port = t;
                            const s = "fake" + nextFakeWorkerId++,
                              r = new _message_handler.MessageHandler(
                                s + "_worker",
                                s,
                                t
                              );
                            e.setup(r, t);
                            const n = new _message_handler.MessageHandler(
                              s,
                              s + "_worker",
                              t
                            );
                            (this._messageHandler = n),
                              this._readyCapability.resolve(),
                              n.send("configure", {
                                verbosity: this.verbosity,
                              });
                          })
                          .catch((e) => {
                            this._readyCapability.reject(
                              new Error(
                                `Setting up fake worker failed: "${e.message}".`
                              )
                            );
                          });
                    }
                    destroy() {
                      (this.destroyed = !0),
                        this._webWorker &&
                          (this._webWorker.terminate(),
                          (this._webWorker = null)),
                        pdfWorkerPorts.delete(this._port),
                        (this._port = null),
                        this._messageHandler &&
                          (this._messageHandler.destroy(),
                          (this._messageHandler = null));
                    }
                    static fromPort(e) {
                      if (!e || !e.port)
                        throw new Error(
                          "PDFWorker.fromPort - invalid method signature."
                        );
                      return pdfWorkerPorts.has(e.port)
                        ? pdfWorkerPorts.get(e.port)
                        : new PDFWorker(e);
                    }
                    static getWorkerSrc() {
                      return getWorkerSrc();
                    }
                  }
                  return PDFWorker;
                })();
                exports.PDFWorker = PDFWorker;
                class WorkerTransport {
                  constructor(e, t, s, r) {
                    (this.messageHandler = e),
                      (this.loadingTask = t),
                      (this.commonObjs = new PDFObjects()),
                      (this.fontLoader = new _font_loader.FontLoader({
                        docId: t.docId,
                        onUnsupportedFeature:
                          this._onUnsupportedFeature.bind(this),
                        ownerDocument: r.ownerDocument,
                        styleElement: r.styleElement,
                      })),
                      (this._params = r),
                      r.useWorkerFetch ||
                        ((this.CMapReaderFactory = new r.CMapReaderFactory({
                          baseUrl: r.cMapUrl,
                          isCompressed: r.cMapPacked,
                        })),
                        (this.StandardFontDataFactory =
                          new r.StandardFontDataFactory({
                            baseUrl: r.standardFontDataUrl,
                          }))),
                      (this.destroyed = !1),
                      (this.destroyCapability = null),
                      (this._passwordCapability = null),
                      (this._networkStream = s),
                      (this._fullReader = null),
                      (this._lastProgress = null),
                      (this.pageCache = []),
                      (this.pagePromises = []),
                      (this.downloadInfoCapability = (0,
                      _util.createPromiseCapability)()),
                      this.setupMessageHandler();
                  }
                  get annotationStorage() {
                    return (0, _util.shadow)(
                      this,
                      "annotationStorage",
                      new _annotation_storage.AnnotationStorage()
                    );
                  }
                  destroy() {
                    if (this.destroyCapability)
                      return this.destroyCapability.promise;
                    (this.destroyed = !0),
                      (this.destroyCapability = (0,
                      _util.createPromiseCapability)()),
                      this._passwordCapability &&
                        this._passwordCapability.reject(
                          new Error(
                            "Worker was destroyed during onPassword callback"
                          )
                        );
                    const e = [];
                    for (const s of this.pageCache) s && e.push(s._destroy());
                    (this.pageCache.length = 0),
                      (this.pagePromises.length = 0),
                      this.hasOwnProperty("annotationStorage") &&
                        this.annotationStorage.resetModified();
                    const t = this.messageHandler.sendWithPromise(
                      "Terminate",
                      null
                    );
                    return (
                      e.push(t),
                      Promise.all(e).then(() => {
                        this.commonObjs.clear(),
                          this.fontLoader.clear(),
                          (this._hasJSActionsPromise = null),
                          this._networkStream &&
                            this._networkStream.cancelAllRequests(
                              new _util.AbortException("Worker was terminated.")
                            ),
                          this.messageHandler &&
                            (this.messageHandler.destroy(),
                            (this.messageHandler = null)),
                          this.destroyCapability.resolve();
                      }, this.destroyCapability.reject),
                      this.destroyCapability.promise
                    );
                  }
                  setupMessageHandler() {
                    const { messageHandler: e, loadingTask: t } = this;
                    e.on("GetReader", (e, t) => {
                      (0, _util.assert)(
                        this._networkStream,
                        "GetReader - no `IPDFStream` instance available."
                      ),
                        (this._fullReader =
                          this._networkStream.getFullReader()),
                        (this._fullReader.onProgress = (e) => {
                          this._lastProgress = {
                            loaded: e.loaded,
                            total: e.total,
                          };
                        }),
                        (t.onPull = () => {
                          this._fullReader
                            .read()
                            .then(function ({ value: e, done: s }) {
                              s
                                ? t.close()
                                : ((0, _util.assert)(
                                    (0, _util.isArrayBuffer)(e),
                                    "GetReader - expected an ArrayBuffer."
                                  ),
                                  t.enqueue(new Uint8Array(e), 1, [e]));
                            })
                            .catch((e) => {
                              t.error(e);
                            });
                        }),
                        (t.onCancel = (e) => {
                          this._fullReader.cancel(e),
                            t.ready.catch((e) => {
                              if (!this.destroyed) throw e;
                            });
                        });
                    }),
                      e.on("ReaderHeadersReady", (e) => {
                        const s = (0, _util.createPromiseCapability)(),
                          r = this._fullReader;
                        return (
                          r.headersReady.then(() => {
                            (r.isStreamingSupported && r.isRangeSupported) ||
                              (this._lastProgress &&
                                t.onProgress &&
                                t.onProgress(this._lastProgress),
                              (r.onProgress = (e) => {
                                t.onProgress &&
                                  t.onProgress({
                                    loaded: e.loaded,
                                    total: e.total,
                                  });
                              })),
                              s.resolve({
                                isStreamingSupported: r.isStreamingSupported,
                                isRangeSupported: r.isRangeSupported,
                                contentLength: r.contentLength,
                              });
                          }, s.reject),
                          s.promise
                        );
                      }),
                      e.on("GetRangeReader", (e, t) => {
                        (0, _util.assert)(
                          this._networkStream,
                          "GetRangeReader - no `IPDFStream` instance available."
                        );
                        const s = this._networkStream.getRangeReader(
                          e.begin,
                          e.end
                        );
                        s
                          ? ((t.onPull = () => {
                              s.read()
                                .then(function ({ value: e, done: s }) {
                                  s
                                    ? t.close()
                                    : ((0, _util.assert)(
                                        (0, _util.isArrayBuffer)(e),
                                        "GetRangeReader - expected an ArrayBuffer."
                                      ),
                                      t.enqueue(new Uint8Array(e), 1, [e]));
                                })
                                .catch((e) => {
                                  t.error(e);
                                });
                            }),
                            (t.onCancel = (e) => {
                              s.cancel(e),
                                t.ready.catch((e) => {
                                  if (!this.destroyed) throw e;
                                });
                            }))
                          : t.close();
                      }),
                      e.on("GetDoc", ({ pdfInfo: e }) => {
                        (this._numPages = e.numPages),
                          (this._htmlForXfa = e.htmlForXfa),
                          delete e.htmlForXfa,
                          t._capability.resolve(new PDFDocumentProxy(e, this));
                      }),
                      e.on("DocException", function (e) {
                        let s;
                        switch (e.name) {
                          case "PasswordException":
                            s = new _util.PasswordException(e.message, e.code);
                            break;
                          case "InvalidPDFException":
                            s = new _util.InvalidPDFException(e.message);
                            break;
                          case "MissingPDFException":
                            s = new _util.MissingPDFException(e.message);
                            break;
                          case "UnexpectedResponseException":
                            s = new _util.UnexpectedResponseException(
                              e.message,
                              e.status
                            );
                            break;
                          case "UnknownErrorException":
                            s = new _util.UnknownErrorException(
                              e.message,
                              e.details
                            );
                        }
                        if (!(s instanceof Error)) {
                          const e = "DocException - expected a valid Error.";
                          (0, _util.warn)(e);
                        }
                        t._capability.reject(s);
                      }),
                      e.on("PasswordRequest", (e) => {
                        if (
                          ((this._passwordCapability = (0,
                          _util.createPromiseCapability)()),
                          t.onPassword)
                        ) {
                          const r = (e) => {
                            this._passwordCapability.resolve({ password: e });
                          };
                          try {
                            t.onPassword(r, e.code);
                          } catch (s) {
                            this._passwordCapability.reject(s);
                          }
                        } else
                          this._passwordCapability.reject(
                            new _util.PasswordException(e.message, e.code)
                          );
                        return this._passwordCapability.promise;
                      }),
                      e.on("DataLoaded", (e) => {
                        t.onProgress &&
                          t.onProgress({ loaded: e.length, total: e.length }),
                          this.downloadInfoCapability.resolve(e);
                      }),
                      e.on("StartRenderPage", (e) => {
                        this.destroyed ||
                          this.pageCache[e.pageIndex]._startRenderPage(
                            e.transparency,
                            e.intent
                          );
                      }),
                      e.on("commonobj", (t) => {
                        if (this.destroyed) return;
                        const [s, r, n] = t;
                        if (!this.commonObjs.has(s))
                          switch (r) {
                            case "Font":
                              const t = this._params;
                              if ("error" in n) {
                                const e = n.error;
                                (0, _util.warn)(
                                  `Error during font loading: ${e}`
                                ),
                                  this.commonObjs.resolve(s, e);
                                break;
                              }
                              let a = null;
                              t.pdfBug &&
                                globalThis.FontInspector?.enabled &&
                                (a = {
                                  registerFont(e, t) {
                                    globalThis.FontInspector.fontAdded(e, t);
                                  },
                                });
                              const i = new _font_loader.FontFaceObject(n, {
                                isEvalSupported: t.isEvalSupported,
                                disableFontFace: t.disableFontFace,
                                ignoreErrors: t.ignoreErrors,
                                onUnsupportedFeature:
                                  this._onUnsupportedFeature.bind(this),
                                fontRegistry: a,
                              });
                              this.fontLoader
                                .bind(i)
                                .catch((t) =>
                                  e.sendWithPromise("FontFallback", { id: s })
                                )
                                .finally(() => {
                                  !t.fontExtraProperties &&
                                    i.data &&
                                    (i.data = null),
                                    this.commonObjs.resolve(s, i);
                                });
                              break;
                            case "FontPath":
                            case "Image":
                              this.commonObjs.resolve(s, n);
                              break;
                            default:
                              throw new Error(
                                `Got unknown common object type ${r}`
                              );
                          }
                      }),
                      e.on("obj", (e) => {
                        if (this.destroyed) return;
                        const [t, s, r, n] = e,
                          a = this.pageCache[s];
                        if (!a.objs.has(t))
                          switch (r) {
                            case "Image":
                              a.objs.resolve(t, n);
                              const e = 8e6;
                              n?.data?.length > e &&
                                (a.cleanupAfterRender = !0);
                              break;
                            case "Pattern":
                              a.objs.resolve(t, n);
                              break;
                            default:
                              throw new Error(`Got unknown object type ${r}`);
                          }
                      }),
                      e.on("DocProgress", (e) => {
                        this.destroyed ||
                          (t.onProgress &&
                            t.onProgress({ loaded: e.loaded, total: e.total }));
                      }),
                      e.on(
                        "UnsupportedFeature",
                        this._onUnsupportedFeature.bind(this)
                      ),
                      e.on("FetchBuiltInCMap", (e) =>
                        this.destroyed
                          ? Promise.reject(new Error("Worker was destroyed."))
                          : this.CMapReaderFactory
                          ? this.CMapReaderFactory.fetch(e)
                          : Promise.reject(
                              new Error(
                                "CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."
                              )
                            )
                      ),
                      e.on("FetchStandardFontData", (e) =>
                        this.destroyed
                          ? Promise.reject(new Error("Worker was destroyed."))
                          : this.StandardFontDataFactory
                          ? this.StandardFontDataFactory.fetch(e)
                          : Promise.reject(
                              new Error(
                                "StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."
                              )
                            )
                      );
                  }
                  _onUnsupportedFeature({ featureId: e }) {
                    this.destroyed ||
                      (this.loadingTask.onUnsupportedFeature &&
                        this.loadingTask.onUnsupportedFeature(e));
                  }
                  getData() {
                    return this.messageHandler.sendWithPromise("GetData", null);
                  }
                  getPage(e) {
                    if (!Number.isInteger(e) || e <= 0 || e > this._numPages)
                      return Promise.reject(new Error("Invalid page request"));
                    const t = e - 1;
                    if (t in this.pagePromises) return this.pagePromises[t];
                    const s = this.messageHandler
                      .sendWithPromise("GetPage", { pageIndex: t })
                      .then((e) => {
                        if (this.destroyed)
                          throw new Error("Transport destroyed");
                        const s = new PDFPageProxy(
                          t,
                          e,
                          this,
                          this._params.ownerDocument,
                          this._params.pdfBug
                        );
                        return (this.pageCache[t] = s), s;
                      });
                    return (this.pagePromises[t] = s), s;
                  }
                  getPageIndex(e) {
                    return this.messageHandler
                      .sendWithPromise("GetPageIndex", { ref: e })
                      .catch(function (e) {
                        return Promise.reject(new Error(e));
                      });
                  }
                  getAnnotations(e, t) {
                    return this.messageHandler.sendWithPromise(
                      "GetAnnotations",
                      { pageIndex: e, intent: t }
                    );
                  }
                  saveDocument() {
                    return this.messageHandler
                      .sendWithPromise("SaveDocument", {
                        isPureXfa: !!this._htmlForXfa,
                        numPages: this._numPages,
                        annotationStorage: this.annotationStorage.serializable,
                        filename: this._fullReader?.filename ?? null,
                      })
                      .finally(() => {
                        this.annotationStorage.resetModified();
                      });
                  }
                  getFieldObjects() {
                    return this.messageHandler.sendWithPromise(
                      "GetFieldObjects",
                      null
                    );
                  }
                  hasJSActions() {
                    return (
                      this._hasJSActionsPromise ||
                      (this._hasJSActionsPromise =
                        this.messageHandler.sendWithPromise(
                          "HasJSActions",
                          null
                        ))
                    );
                  }
                  getCalculationOrderIds() {
                    return this.messageHandler.sendWithPromise(
                      "GetCalculationOrderIds",
                      null
                    );
                  }
                  getDestinations() {
                    return this.messageHandler.sendWithPromise(
                      "GetDestinations",
                      null
                    );
                  }
                  getDestination(e) {
                    return "string" !== typeof e
                      ? Promise.reject(
                          new Error("Invalid destination request.")
                        )
                      : this.messageHandler.sendWithPromise("GetDestination", {
                          id: e,
                        });
                  }
                  getPageLabels() {
                    return this.messageHandler.sendWithPromise(
                      "GetPageLabels",
                      null
                    );
                  }
                  getPageLayout() {
                    return this.messageHandler.sendWithPromise(
                      "GetPageLayout",
                      null
                    );
                  }
                  getPageMode() {
                    return this.messageHandler.sendWithPromise(
                      "GetPageMode",
                      null
                    );
                  }
                  getViewerPreferences() {
                    return this.messageHandler.sendWithPromise(
                      "GetViewerPreferences",
                      null
                    );
                  }
                  getOpenAction() {
                    return this.messageHandler.sendWithPromise(
                      "GetOpenAction",
                      null
                    );
                  }
                  getAttachments() {
                    return this.messageHandler.sendWithPromise(
                      "GetAttachments",
                      null
                    );
                  }
                  getJavaScript() {
                    return this.messageHandler.sendWithPromise(
                      "GetJavaScript",
                      null
                    );
                  }
                  getDocJSActions() {
                    return this.messageHandler.sendWithPromise(
                      "GetDocJSActions",
                      null
                    );
                  }
                  getPageJSActions(e) {
                    return this.messageHandler.sendWithPromise(
                      "GetPageJSActions",
                      { pageIndex: e }
                    );
                  }
                  getStructTree(e) {
                    return this.messageHandler.sendWithPromise(
                      "GetStructTree",
                      { pageIndex: e }
                    );
                  }
                  getOutline() {
                    return this.messageHandler.sendWithPromise(
                      "GetOutline",
                      null
                    );
                  }
                  getOptionalContentConfig() {
                    return this.messageHandler
                      .sendWithPromise("GetOptionalContentConfig", null)
                      .then(
                        (e) =>
                          new _optional_content_config.OptionalContentConfig(e)
                      );
                  }
                  getPermissions() {
                    return this.messageHandler.sendWithPromise(
                      "GetPermissions",
                      null
                    );
                  }
                  getMetadata() {
                    return this.messageHandler
                      .sendWithPromise("GetMetadata", null)
                      .then((e) => ({
                        info: e[0],
                        metadata: e[1] ? new _metadata.Metadata(e[1]) : null,
                        contentDispositionFilename:
                          this._fullReader?.filename ?? null,
                        contentLength: this._fullReader?.contentLength ?? null,
                      }));
                  }
                  getMarkInfo() {
                    return this.messageHandler.sendWithPromise(
                      "GetMarkInfo",
                      null
                    );
                  }
                  getStats() {
                    return this.messageHandler.sendWithPromise(
                      "GetStats",
                      null
                    );
                  }
                  async startCleanup(e = !1) {
                    if (
                      (await this.messageHandler.sendWithPromise(
                        "Cleanup",
                        null
                      ),
                      !this.destroyed)
                    ) {
                      for (let e = 0, t = this.pageCache.length; e < t; e++) {
                        const t = this.pageCache[e];
                        if (t && !t.cleanup())
                          throw new Error(
                            `startCleanup: Page ${
                              e + 1
                            } is currently rendering.`
                          );
                      }
                      this.commonObjs.clear(),
                        e || this.fontLoader.clear(),
                        (this._hasJSActionsPromise = null);
                    }
                  }
                  get loadingParams() {
                    const e = this._params;
                    return (0, _util.shadow)(this, "loadingParams", {
                      disableAutoFetch: e.disableAutoFetch,
                    });
                  }
                }
                class PDFObjects {
                  constructor() {
                    this._objs = Object.create(null);
                  }
                  _ensureObj(e) {
                    return this._objs[e]
                      ? this._objs[e]
                      : (this._objs[e] = {
                          capability: (0, _util.createPromiseCapability)(),
                          data: null,
                          resolved: !1,
                        });
                  }
                  get(e, t = null) {
                    if (t)
                      return (
                        this._ensureObj(e).capability.promise.then(t), null
                      );
                    const s = this._objs[e];
                    if (!s || !s.resolved)
                      throw new Error(
                        `Requesting object that isn't resolved yet ${e}.`
                      );
                    return s.data;
                  }
                  has(e) {
                    return this._objs[e]?.resolved || !1;
                  }
                  resolve(e, t) {
                    const s = this._ensureObj(e);
                    (s.resolved = !0), (s.data = t), s.capability.resolve(t);
                  }
                  clear() {
                    this._objs = Object.create(null);
                  }
                }
                class RenderTask {
                  constructor(e) {
                    (this._internalRenderTask = e), (this.onContinue = null);
                  }
                  get promise() {
                    return this._internalRenderTask.capability.promise;
                  }
                  cancel() {
                    this._internalRenderTask.cancel();
                  }
                }
                const InternalRenderTask = (function () {
                    const e = new WeakSet();
                    return class {
                      constructor({
                        callback: e,
                        params: t,
                        objs: s,
                        commonObjs: r,
                        operatorList: n,
                        pageIndex: a,
                        canvasFactory: i,
                        useRequestAnimationFrame: o = !1,
                        pdfBug: l = !1,
                      }) {
                        (this.callback = e),
                          (this.params = t),
                          (this.objs = s),
                          (this.commonObjs = r),
                          (this.operatorListIdx = null),
                          (this.operatorList = n),
                          (this._pageIndex = a),
                          (this.canvasFactory = i),
                          (this._pdfBug = l),
                          (this.running = !1),
                          (this.graphicsReadyCallback = null),
                          (this.graphicsReady = !1),
                          (this._useRequestAnimationFrame =
                            !0 === o && "undefined" !== typeof window),
                          (this.cancelled = !1),
                          (this.capability = (0,
                          _util.createPromiseCapability)()),
                          (this.task = new RenderTask(this)),
                          (this._cancelBound = this.cancel.bind(this)),
                          (this._continueBound = this._continue.bind(this)),
                          (this._scheduleNextBound =
                            this._scheduleNext.bind(this)),
                          (this._nextBound = this._next.bind(this)),
                          (this._canvas = t.canvasContext.canvas);
                      }
                      get completed() {
                        return this.capability.promise.catch(function () {});
                      }
                      initializeGraphics({
                        transparency: t = !1,
                        optionalContentConfig: s,
                      }) {
                        if (this.cancelled) return;
                        if (this._canvas) {
                          if (e.has(this._canvas))
                            throw new Error(
                              "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                            );
                          e.add(this._canvas);
                        }
                        this._pdfBug &&
                          globalThis.StepperManager?.enabled &&
                          ((this.stepper = globalThis.StepperManager.create(
                            this._pageIndex
                          )),
                          this.stepper.init(this.operatorList),
                          (this.stepper.nextBreakPoint =
                            this.stepper.getNextBreakPoint()));
                        const {
                          canvasContext: r,
                          viewport: n,
                          transform: a,
                          imageLayer: i,
                          background: o,
                        } = this.params;
                        (this.gfx = new _canvas.CanvasGraphics(
                          r,
                          this.commonObjs,
                          this.objs,
                          this.canvasFactory,
                          i,
                          s
                        )),
                          this.gfx.beginDrawing({
                            transform: a,
                            viewport: n,
                            transparency: t,
                            background: o,
                          }),
                          (this.operatorListIdx = 0),
                          (this.graphicsReady = !0),
                          this.graphicsReadyCallback &&
                            this.graphicsReadyCallback();
                      }
                      cancel(t = null) {
                        (this.running = !1),
                          (this.cancelled = !0),
                          this.gfx && this.gfx.endDrawing(),
                          this._canvas && e.delete(this._canvas),
                          this.callback(
                            t ||
                              new _display_utils.RenderingCancelledException(
                                `Rendering cancelled, page ${
                                  this._pageIndex + 1
                                }`,
                                "canvas"
                              )
                          );
                      }
                      operatorListChanged() {
                        this.graphicsReady
                          ? (this.stepper &&
                              this.stepper.updateOperatorList(
                                this.operatorList
                              ),
                            this.running || this._continue())
                          : this.graphicsReadyCallback ||
                            (this.graphicsReadyCallback = this._continueBound);
                      }
                      _continue() {
                        (this.running = !0),
                          this.cancelled ||
                            (this.task.onContinue
                              ? this.task.onContinue(this._scheduleNextBound)
                              : this._scheduleNext());
                      }
                      _scheduleNext() {
                        this._useRequestAnimationFrame
                          ? window.requestAnimationFrame(() => {
                              this._nextBound().catch(this._cancelBound);
                            })
                          : Promise.resolve()
                              .then(this._nextBound)
                              .catch(this._cancelBound);
                      }
                      async _next() {
                        this.cancelled ||
                          ((this.operatorListIdx = this.gfx.executeOperatorList(
                            this.operatorList,
                            this.operatorListIdx,
                            this._continueBound,
                            this.stepper
                          )),
                          this.operatorListIdx ===
                            this.operatorList.argsArray.length &&
                            ((this.running = !1),
                            this.operatorList.lastChunk &&
                              (this.gfx.endDrawing(),
                              this._canvas && e.delete(this._canvas),
                              this.callback())));
                      }
                    };
                  })(),
                  version = "2.10.377";
                exports.version = version;
                const build = "156762c48";
                exports.build = build;
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.FontLoader = t.FontFaceObject = void 0);
                var r = s(2);
                class n {
                  constructor({
                    docId: e,
                    onUnsupportedFeature: t,
                    ownerDocument: s = globalThis.document,
                    styleElement: a = null,
                  }) {
                    this.constructor === n &&
                      (0, r.unreachable)("Cannot initialize BaseFontLoader."),
                      (this.docId = e),
                      (this._onUnsupportedFeature = t),
                      (this._document = s),
                      (this.nativeFontFaces = []),
                      (this.styleElement = null);
                  }
                  addNativeFontFace(e) {
                    this.nativeFontFaces.push(e), this._document.fonts.add(e);
                  }
                  insertRule(e) {
                    let t = this.styleElement;
                    t ||
                      ((t = this.styleElement =
                        this._document.createElement("style")),
                      (t.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`),
                      this._document.documentElement
                        .getElementsByTagName("head")[0]
                        .appendChild(t));
                    const s = t.sheet;
                    s.insertRule(e, s.cssRules.length);
                  }
                  clear() {
                    for (const e of this.nativeFontFaces)
                      this._document.fonts.delete(e);
                    (this.nativeFontFaces.length = 0),
                      this.styleElement &&
                        (this.styleElement.remove(),
                        (this.styleElement = null));
                  }
                  async bind(e) {
                    if (e.attached || e.missingFile) return;
                    if (((e.attached = !0), this.isFontLoadingAPISupported)) {
                      const t = e.createNativeFontFace();
                      if (t) {
                        this.addNativeFontFace(t);
                        try {
                          await t.loaded;
                        } catch (s) {
                          throw (
                            (this._onUnsupportedFeature({
                              featureId:
                                r.UNSUPPORTED_FEATURES.errorFontLoadNative,
                            }),
                            (0, r.warn)(
                              `Failed to load font '${t.family}': '${s}'.`
                            ),
                            (e.disableFontFace = !0),
                            s)
                          );
                        }
                      }
                      return;
                    }
                    const t = e.createFontFaceRule();
                    if (t) {
                      if ((this.insertRule(t), this.isSyncFontLoadingSupported))
                        return;
                      await new Promise((s) => {
                        const r = this._queueLoadingCallback(s);
                        this._prepareFontLoadEvent([t], [e], r);
                      });
                    }
                  }
                  _queueLoadingCallback(e) {
                    (0, r.unreachable)(
                      "Abstract method `_queueLoadingCallback`."
                    );
                  }
                  get isFontLoadingAPISupported() {
                    const e = !!this._document?.fonts;
                    return (0, r.shadow)(this, "isFontLoadingAPISupported", e);
                  }
                  get isSyncFontLoadingSupported() {
                    (0, r.unreachable)(
                      "Abstract method `isSyncFontLoadingSupported`."
                    );
                  }
                  get _loadTestFont() {
                    (0, r.unreachable)("Abstract method `_loadTestFont`.");
                  }
                  _prepareFontLoadEvent(e, t, s) {
                    (0, r.unreachable)(
                      "Abstract method `_prepareFontLoadEvent`."
                    );
                  }
                }
                let a;
                (t.FontLoader = a),
                  (t.FontLoader = a =
                    class extends n {
                      constructor(e) {
                        super(e),
                          (this.loadingContext = {
                            requests: [],
                            nextRequestId: 0,
                          }),
                          (this.loadTestFontId = 0);
                      }
                      get isSyncFontLoadingSupported() {
                        let e = !1;
                        return (
                          ("undefined" === typeof navigator ||
                            /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
                              navigator.userAgent
                            )?.[1] >= 14) &&
                            (e = !0),
                          (0, r.shadow)(this, "isSyncFontLoadingSupported", e)
                        );
                      }
                      _queueLoadingCallback(e) {
                        const t = this.loadingContext,
                          s = {
                            id: "pdfjs-font-loading-" + t.nextRequestId++,
                            done: !1,
                            complete: function () {
                              for (
                                (0, r.assert)(
                                  !s.done,
                                  "completeRequest() cannot be called twice."
                                ),
                                  s.done = !0;
                                t.requests.length > 0 && t.requests[0].done;

                              ) {
                                const e = t.requests.shift();
                                setTimeout(e.callback, 0);
                              }
                            },
                            callback: e,
                          };
                        return t.requests.push(s), s;
                      }
                      get _loadTestFont() {
                        return (0, r.shadow)(
                          this,
                          "_loadTestFont",
                          atob(
                            "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
                          )
                        );
                      }
                      _prepareFontLoadEvent(e, t, s) {
                        function n(e, t) {
                          return (
                            (e.charCodeAt(t) << 24) |
                            (e.charCodeAt(t + 1) << 16) |
                            (e.charCodeAt(t + 2) << 8) |
                            (255 & e.charCodeAt(t + 3))
                          );
                        }
                        function a(e, t, s, r) {
                          return e.substring(0, t) + r + e.substring(t + s);
                        }
                        let i, o;
                        const l = this._document.createElement("canvas");
                        (l.width = 1), (l.height = 1);
                        const c = l.getContext("2d");
                        let h = 0;
                        const d = `lt${Date.now()}${this.loadTestFontId++}`;
                        let u = this._loadTestFont;
                        u = a(u, 976, d.length, d);
                        const p = 1482184792;
                        let g = n(u, 16);
                        for (i = 0, o = d.length - 3; i < o; i += 4)
                          g = (g - p + n(d, i)) | 0;
                        i < d.length && (g = (g - p + n(d + "XXX", i)) | 0),
                          (u = a(u, 16, 4, (0, r.string32)(g)));
                        const f = `@font-face {font-family:"${d}";src:url(data:font/opentype;base64,${btoa(
                          u
                        )});}`;
                        this.insertRule(f);
                        const m = [];
                        for (const r of t) m.push(r.loadedName);
                        m.push(d);
                        const _ = this._document.createElement("div");
                        (_.style.visibility = "hidden"),
                          (_.style.width = _.style.height = "10px"),
                          (_.style.position = "absolute"),
                          (_.style.top = _.style.left = "0px");
                        for (const r of m) {
                          const e = this._document.createElement("span");
                          (e.textContent = "Hi"),
                            (e.style.fontFamily = r),
                            _.appendChild(e);
                        }
                        this._document.body.appendChild(_),
                          (function e(t, s) {
                            if ((h++, h > 30))
                              return (
                                (0, r.warn)("Load test font never loaded."),
                                void s()
                              );
                            (c.font = "30px " + t),
                              c.fillText(".", 0, 20),
                              c.getImageData(0, 0, 1, 1).data[3] > 0
                                ? s()
                                : setTimeout(e.bind(null, t, s));
                          })(d, () => {
                            this._document.body.removeChild(_), s.complete();
                          });
                      }
                    }),
                  (t.FontFaceObject = class {
                    constructor(
                      e,
                      {
                        isEvalSupported: t = !0,
                        disableFontFace: s = !1,
                        ignoreErrors: r = !1,
                        onUnsupportedFeature: n,
                        fontRegistry: a = null,
                      }
                    ) {
                      this.compiledGlyphs = Object.create(null);
                      for (const i in e) this[i] = e[i];
                      (this.isEvalSupported = !1 !== t),
                        (this.disableFontFace = !0 === s),
                        (this.ignoreErrors = !0 === r),
                        (this._onUnsupportedFeature = n),
                        (this.fontRegistry = a);
                    }
                    createNativeFontFace() {
                      if (!this.data || this.disableFontFace) return null;
                      let e;
                      if (this.cssFontInfo) {
                        const t = { weight: this.cssFontInfo.fontWeight };
                        this.cssFontInfo.italicAngle &&
                          (t.style = `oblique ${this.cssFontInfo.italicAngle}deg`),
                          (e = new FontFace(
                            this.cssFontInfo.fontFamily,
                            this.data,
                            t
                          ));
                      } else e = new FontFace(this.loadedName, this.data, {});
                      return (
                        this.fontRegistry &&
                          this.fontRegistry.registerFont(this),
                        e
                      );
                    }
                    createFontFaceRule() {
                      if (!this.data || this.disableFontFace) return null;
                      const e = (0, r.bytesToString)(this.data),
                        t = `url(data:${this.mimetype};base64,${btoa(e)});`;
                      let s;
                      if (this.cssFontInfo) {
                        let e = `font-weight: ${this.cssFontInfo.fontWeight};`;
                        this.cssFontInfo.italicAngle &&
                          (e += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
                          (s = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e}src:${t}}`);
                      } else
                        s = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
                      return (
                        this.fontRegistry &&
                          this.fontRegistry.registerFont(this, t),
                        s
                      );
                    }
                    getPathGenerator(e, t) {
                      if (void 0 !== this.compiledGlyphs[t])
                        return this.compiledGlyphs[t];
                      let s;
                      try {
                        s = e.get(this.loadedName + "_path_" + t);
                      } catch (n) {
                        if (!this.ignoreErrors) throw n;
                        return (
                          this._onUnsupportedFeature({
                            featureId: r.UNSUPPORTED_FEATURES.errorFontGetPath,
                          }),
                          (0, r.warn)(
                            `getPathGenerator - ignoring character: "${n}".`
                          ),
                          (this.compiledGlyphs[t] = function (e, t) {})
                        );
                      }
                      if (
                        this.isEvalSupported &&
                        r.IsEvalSupportedCached.value
                      ) {
                        const e = [];
                        for (const t of s) {
                          const s = void 0 !== t.args ? t.args.join(",") : "";
                          e.push("c.", t.cmd, "(", s, ");\n");
                        }
                        return (this.compiledGlyphs[t] = new Function(
                          "c",
                          "size",
                          e.join("")
                        ));
                      }
                      return (this.compiledGlyphs[t] = function (e, t) {
                        for (const r of s)
                          "scale" === r.cmd && (r.args = [t, -t]),
                            e[r.cmd].apply(e, r.args);
                      });
                    }
                  });
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.NodeStandardFontDataFactory =
                    t.NodeCMapReaderFactory =
                    t.NodeCanvasFactory =
                      void 0);
                var r = s(5),
                  n = s(4),
                  a = s(2);
                let i = class {
                  constructor() {
                    (0, a.unreachable)("Not implemented: NodeCanvasFactory");
                  }
                };
                t.NodeCanvasFactory = i;
                let o = class {
                  constructor() {
                    (0, a.unreachable)(
                      "Not implemented: NodeCMapReaderFactory"
                    );
                  }
                };
                t.NodeCMapReaderFactory = o;
                let l = class {
                  constructor() {
                    (0, a.unreachable)(
                      "Not implemented: NodeStandardFontDataFactory"
                    );
                  }
                };
                if (((t.NodeStandardFontDataFactory = l), n.isNodeJS)) {
                  const e = function (e) {
                    return new Promise((t, s) => {
                      __webpack_require__(172).readFile(e, (e, r) => {
                        !e && r ? t(new Uint8Array(r)) : s(new Error(e));
                      });
                    });
                  };
                  (t.NodeCanvasFactory = i =
                    class extends r.BaseCanvasFactory {
                      _createCanvas(e, t) {
                        return __webpack_require__(3414).createCanvas(e, t);
                      }
                    }),
                    (t.NodeCMapReaderFactory = o =
                      class extends r.BaseCMapReaderFactory {
                        _fetchData(t, s) {
                          return e(t).then((e) => ({
                            cMapData: e,
                            compressionType: s,
                          }));
                        }
                      }),
                    (t.NodeStandardFontDataFactory = l =
                      class extends r.BaseStandardFontDataFactory {
                        _fetchData(t) {
                          return e(t);
                        }
                      });
                }
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.AnnotationStorage = void 0);
                var r = s(2);
                t.AnnotationStorage = class {
                  constructor() {
                    (this._storage = new Map()),
                      (this._modified = !1),
                      (this.onSetModified = null),
                      (this.onResetModified = null);
                  }
                  getValue(e, t) {
                    const s = this._storage.get(e);
                    return void 0 !== s ? s : t;
                  }
                  setValue(e, t) {
                    const s = this._storage.get(e);
                    let r = !1;
                    if (void 0 !== s)
                      for (const [n, a] of Object.entries(t))
                        s[n] !== a && ((r = !0), (s[n] = a));
                    else this._storage.set(e, t), (r = !0);
                    r && this._setModified();
                  }
                  getAll() {
                    return this._storage.size > 0
                      ? (0, r.objectFromMap)(this._storage)
                      : null;
                  }
                  get size() {
                    return this._storage.size;
                  }
                  _setModified() {
                    this._modified ||
                      ((this._modified = !0),
                      "function" === typeof this.onSetModified &&
                        this.onSetModified());
                  }
                  resetModified() {
                    this._modified &&
                      ((this._modified = !1),
                      "function" === typeof this.onResetModified &&
                        this.onResetModified());
                  }
                  get serializable() {
                    return this._storage.size > 0 ? this._storage : null;
                  }
                };
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.CanvasGraphics = void 0);
                var r = s(2),
                  n = s(11);
                const a = 4096,
                  i = 16;
                function o(e) {
                  if (!e.mozCurrentTransform) {
                    (e._originalSave = e.save),
                      (e._originalRestore = e.restore),
                      (e._originalRotate = e.rotate),
                      (e._originalScale = e.scale),
                      (e._originalTranslate = e.translate),
                      (e._originalTransform = e.transform),
                      (e._originalSetTransform = e.setTransform),
                      (e._originalResetTransform = e.resetTransform),
                      (e._transformMatrix = e._transformMatrix || [
                        1, 0, 0, 1, 0, 0,
                      ]),
                      (e._transformStack = []);
                    try {
                      const t = Object.getOwnPropertyDescriptor(
                        Object.getPrototypeOf(e),
                        "lineWidth"
                      );
                      (e._setLineWidth = t.set),
                        (e._getLineWidth = t.get),
                        Object.defineProperty(e, "lineWidth", {
                          set: function (e) {
                            this._setLineWidth(1.000001 * e);
                          },
                          get: function () {
                            return this._getLineWidth();
                          },
                        });
                    } catch (t) {}
                    Object.defineProperty(e, "mozCurrentTransform", {
                      get: function () {
                        return this._transformMatrix;
                      },
                    }),
                      Object.defineProperty(e, "mozCurrentTransformInverse", {
                        get: function () {
                          const [e, t, s, r, n, a] = this._transformMatrix,
                            i = e * r - t * s,
                            o = t * s - e * r;
                          return [
                            r / i,
                            t / o,
                            s / o,
                            e / i,
                            (r * n - s * a) / o,
                            (t * n - e * a) / i,
                          ];
                        },
                      }),
                      (e.save = function () {
                        const e = this._transformMatrix;
                        this._transformStack.push(e),
                          (this._transformMatrix = e.slice(0, 6)),
                          this._originalSave();
                      }),
                      (e.restore = function () {
                        const e = this._transformStack.pop();
                        e &&
                          ((this._transformMatrix = e),
                          this._originalRestore());
                      }),
                      (e.translate = function (e, t) {
                        const s = this._transformMatrix;
                        (s[4] = s[0] * e + s[2] * t + s[4]),
                          (s[5] = s[1] * e + s[3] * t + s[5]),
                          this._originalTranslate(e, t);
                      }),
                      (e.scale = function (e, t) {
                        const s = this._transformMatrix;
                        (s[0] *= e),
                          (s[1] *= e),
                          (s[2] *= t),
                          (s[3] *= t),
                          this._originalScale(e, t);
                      }),
                      (e.transform = function (t, s, r, n, a, i) {
                        const o = this._transformMatrix;
                        (this._transformMatrix = [
                          o[0] * t + o[2] * s,
                          o[1] * t + o[3] * s,
                          o[0] * r + o[2] * n,
                          o[1] * r + o[3] * n,
                          o[0] * a + o[2] * i + o[4],
                          o[1] * a + o[3] * i + o[5],
                        ]),
                          e._originalTransform(t, s, r, n, a, i);
                      }),
                      (e.setTransform = function (t, s, r, n, a, i) {
                        (this._transformMatrix = [t, s, r, n, a, i]),
                          e._originalSetTransform(t, s, r, n, a, i);
                      }),
                      (e.resetTransform = function () {
                        (this._transformMatrix = [1, 0, 0, 1, 0, 0]),
                          e._originalResetTransform();
                      }),
                      (e.rotate = function (e) {
                        const t = Math.cos(e),
                          s = Math.sin(e),
                          r = this._transformMatrix;
                        (this._transformMatrix = [
                          r[0] * t + r[2] * s,
                          r[1] * t + r[3] * s,
                          r[0] * -s + r[2] * t,
                          r[1] * -s + r[3] * t,
                          r[4],
                          r[5],
                        ]),
                          this._originalRotate(e);
                      });
                  }
                }
                class l {
                  constructor(e) {
                    (this.canvasFactory = e),
                      (this.cache = Object.create(null));
                  }
                  getCanvas(e, t, s, r) {
                    let n;
                    return (
                      void 0 !== this.cache[e]
                        ? ((n = this.cache[e]),
                          this.canvasFactory.reset(n, t, s),
                          n.context.setTransform(1, 0, 0, 1, 0, 0))
                        : ((n = this.canvasFactory.create(t, s)),
                          (this.cache[e] = n)),
                      r && o(n.context),
                      n
                    );
                  }
                  clear() {
                    for (const e in this.cache) {
                      const t = this.cache[e];
                      this.canvasFactory.destroy(t), delete this.cache[e];
                    }
                  }
                }
                class c {
                  constructor() {
                    (this.alphaIsShape = !1),
                      (this.fontSize = 0),
                      (this.fontSizeScale = 1),
                      (this.textMatrix = r.IDENTITY_MATRIX),
                      (this.textMatrixScale = 1),
                      (this.fontMatrix = r.FONT_IDENTITY_MATRIX),
                      (this.leading = 0),
                      (this.x = 0),
                      (this.y = 0),
                      (this.lineX = 0),
                      (this.lineY = 0),
                      (this.charSpacing = 0),
                      (this.wordSpacing = 0),
                      (this.textHScale = 1),
                      (this.textRenderingMode = r.TextRenderingMode.FILL),
                      (this.textRise = 0),
                      (this.fillColor = "#000000"),
                      (this.strokeColor = "#000000"),
                      (this.patternFill = !1),
                      (this.fillAlpha = 1),
                      (this.strokeAlpha = 1),
                      (this.lineWidth = 1),
                      (this.activeSMask = null),
                      (this.resumeSMaskCtx = null),
                      (this.transferMaps = null);
                  }
                  clone() {
                    return Object.create(this);
                  }
                  setCurrentPoint(e, t) {
                    (this.x = e), (this.y = t);
                  }
                }
                const h = (function () {
                  function e(e, t, s = null) {
                    if (
                      "undefined" !== typeof ImageData &&
                      t instanceof ImageData
                    )
                      return void e.putImageData(t, 0, 0);
                    const n = t.height,
                      a = t.width,
                      o = n % i,
                      l = (n - o) / i,
                      c = 0 === o ? l : l + 1,
                      h = e.createImageData(a, i);
                    let d,
                      u = 0;
                    const p = t.data,
                      g = h.data;
                    let f, m, _, A, b, y, S, v;
                    if (s)
                      switch (s.length) {
                        case 1:
                          (b = s[0]), (y = s[0]), (S = s[0]), (v = s[0]);
                          break;
                        case 4:
                          (b = s[0]), (y = s[1]), (S = s[2]), (v = s[3]);
                      }
                    if (t.kind === r.ImageKind.GRAYSCALE_1BPP) {
                      const t = p.byteLength,
                        s = new Uint32Array(g.buffer, 0, g.byteLength >> 2),
                        n = s.length,
                        A = (a + 7) >> 3;
                      let b = 4294967295,
                        y = r.IsLittleEndianCached.value ? 4278190080 : 255;
                      for (
                        v && 255 === v[0] && 0 === v[255] && ([b, y] = [y, b]),
                          f = 0;
                        f < c;
                        f++
                      ) {
                        for (_ = f < l ? i : o, d = 0, m = 0; m < _; m++) {
                          const e = t - u;
                          let r = 0;
                          const n = e > A ? a : 8 * e - 7,
                            i = -8 & n;
                          let o = 0,
                            l = 0;
                          for (; r < i; r += 8)
                            (l = p[u++]),
                              (s[d++] = 128 & l ? b : y),
                              (s[d++] = 64 & l ? b : y),
                              (s[d++] = 32 & l ? b : y),
                              (s[d++] = 16 & l ? b : y),
                              (s[d++] = 8 & l ? b : y),
                              (s[d++] = 4 & l ? b : y),
                              (s[d++] = 2 & l ? b : y),
                              (s[d++] = 1 & l ? b : y);
                          for (; r < n; r++)
                            0 === o && ((l = p[u++]), (o = 128)),
                              (s[d++] = l & o ? b : y),
                              (o >>= 1);
                        }
                        for (; d < n; ) s[d++] = 0;
                        e.putImageData(h, 0, f * i);
                      }
                    } else if (t.kind === r.ImageKind.RGBA_32BPP) {
                      const t = !!(b || y || S);
                      for (m = 0, A = a * i * 4, f = 0; f < l; f++) {
                        if ((g.set(p.subarray(u, u + A)), (u += A), t))
                          for (let e = 0; e < A; e += 4)
                            b && (g[e + 0] = b[g[e + 0]]),
                              y && (g[e + 1] = y[g[e + 1]]),
                              S && (g[e + 2] = S[g[e + 2]]);
                        e.putImageData(h, 0, m), (m += i);
                      }
                      if (f < c) {
                        if (((A = a * o * 4), g.set(p.subarray(u, u + A)), t))
                          for (let e = 0; e < A; e += 4)
                            b && (g[e + 0] = b[g[e + 0]]),
                              y && (g[e + 1] = y[g[e + 1]]),
                              S && (g[e + 2] = S[g[e + 2]]);
                        e.putImageData(h, 0, m);
                      }
                    } else {
                      if (t.kind !== r.ImageKind.RGB_24BPP)
                        throw new Error(`bad image kind: ${t.kind}`);
                      {
                        const t = !!(b || y || S);
                        for (_ = i, A = a * _, f = 0; f < c; f++) {
                          for (
                            f >= l && ((_ = o), (A = a * _)), d = 0, m = A;
                            m--;

                          )
                            (g[d++] = p[u++]),
                              (g[d++] = p[u++]),
                              (g[d++] = p[u++]),
                              (g[d++] = 255);
                          if (t)
                            for (let e = 0; e < d; e += 4)
                              b && (g[e + 0] = b[g[e + 0]]),
                                y && (g[e + 1] = y[g[e + 1]]),
                                S && (g[e + 2] = S[g[e + 2]]);
                          e.putImageData(h, 0, f * i);
                        }
                      }
                    }
                  }
                  function t(e, t) {
                    const s = t.height,
                      r = t.width,
                      n = s % i,
                      a = (s - n) / i,
                      o = 0 === n ? a : a + 1,
                      l = e.createImageData(r, i);
                    let c = 0;
                    const h = t.data,
                      d = l.data;
                    for (let u = 0; u < o; u++) {
                      const t = u < a ? i : n;
                      let s = 3;
                      for (let e = 0; e < t; e++) {
                        let e,
                          t = 0;
                        for (let n = 0; n < r; n++)
                          t || ((e = h[c++]), (t = 128)),
                            (d[s] = e & t ? 0 : 255),
                            (s += 4),
                            (t >>= 1);
                      }
                      e.putImageData(l, 0, u * i);
                    }
                  }
                  function s(e, t) {
                    const s = [
                      "strokeStyle",
                      "fillStyle",
                      "fillRule",
                      "globalAlpha",
                      "lineWidth",
                      "lineCap",
                      "lineJoin",
                      "miterLimit",
                      "globalCompositeOperation",
                      "font",
                    ];
                    for (let r = 0, n = s.length; r < n; r++) {
                      const n = s[r];
                      void 0 !== e[n] && (t[n] = e[n]);
                    }
                    void 0 !== e.setLineDash &&
                      (t.setLineDash(e.getLineDash()),
                      (t.lineDashOffset = e.lineDashOffset));
                  }
                  function h(e) {
                    (e.strokeStyle = "#000000"),
                      (e.fillStyle = "#000000"),
                      (e.fillRule = "nonzero"),
                      (e.globalAlpha = 1),
                      (e.lineWidth = 1),
                      (e.lineCap = "butt"),
                      (e.lineJoin = "miter"),
                      (e.miterLimit = 10),
                      (e.globalCompositeOperation = "source-over"),
                      (e.font = "10px sans-serif"),
                      void 0 !== e.setLineDash &&
                        (e.setLineDash([]), (e.lineDashOffset = 0));
                  }
                  function d(e, t, s, r) {
                    const n = e.length;
                    for (let a = 3; a < n; a += 4) {
                      const n = e[a];
                      if (0 === n)
                        (e[a - 3] = t), (e[a - 2] = s), (e[a - 1] = r);
                      else if (n < 255) {
                        const i = 255 - n;
                        (e[a - 3] = (e[a - 3] * n + t * i) >> 8),
                          (e[a - 2] = (e[a - 2] * n + s * i) >> 8),
                          (e[a - 1] = (e[a - 1] * n + r * i) >> 8);
                      }
                    }
                  }
                  function u(e, t, s) {
                    const r = e.length;
                    for (let n = 3; n < r; n += 4) {
                      const r = s ? s[e[n]] : e[n];
                      t[n] = (t[n] * r * 0.00392156862745098) | 0;
                    }
                  }
                  function p(e, t, s) {
                    const r = e.length;
                    for (let n = 3; n < r; n += 4) {
                      const r = 77 * e[n - 3] + 152 * e[n - 2] + 28 * e[n - 1];
                      t[n] = s ? (t[n] * s[r >> 8]) >> 8 : (t[n] * r) >> 16;
                    }
                  }
                  function g(e, t, s) {
                    const r = t.canvas,
                      n = t.context;
                    e.setTransform(
                      t.scaleX,
                      0,
                      0,
                      t.scaleY,
                      t.offsetX,
                      t.offsetY
                    ),
                      (function (e, t, s, r, n, a, i) {
                        const o = !!a,
                          l = o ? a[0] : 0,
                          c = o ? a[1] : 0,
                          h = o ? a[2] : 0;
                        let g;
                        g = "Luminosity" === n ? p : u;
                        const f = Math.min(r, Math.ceil(1048576 / s));
                        for (let u = 0; u < r; u += f) {
                          const n = Math.min(f, r - u),
                            a = e.getImageData(0, u, s, n),
                            p = t.getImageData(0, u, s, n);
                          o && d(a.data, l, c, h),
                            g(a.data, p.data, i),
                            e.putImageData(p, 0, u);
                        }
                      })(
                        n,
                        s,
                        r.width,
                        r.height,
                        t.subtype,
                        t.backdrop,
                        t.transferMap
                      ),
                      e.drawImage(r, 0, 0);
                  }
                  const f = ["butt", "round", "square"],
                    m = ["miter", "round", "bevel"],
                    _ = {},
                    A = {};
                  class b {
                    constructor(e, t, s, r, n, a) {
                      (this.ctx = e),
                        (this.current = new c()),
                        (this.stateStack = []),
                        (this.pendingClip = null),
                        (this.pendingEOFill = !1),
                        (this.res = null),
                        (this.xobjs = null),
                        (this.commonObjs = t),
                        (this.objs = s),
                        (this.canvasFactory = r),
                        (this.imageLayer = n),
                        (this.groupStack = []),
                        (this.processingType3 = null),
                        (this.baseTransform = null),
                        (this.baseTransformStack = []),
                        (this.groupLevel = 0),
                        (this.smaskStack = []),
                        (this.smaskCounter = 0),
                        (this.tempSMask = null),
                        (this.contentVisible = !0),
                        (this.markedContentStack = []),
                        (this.optionalContentConfig = a),
                        (this.cachedCanvases = new l(this.canvasFactory)),
                        (this.cachedPatterns = new Map()),
                        e && o(e),
                        (this._cachedGetSinglePixelWidth = null);
                    }
                    beginDrawing({
                      transform: e,
                      viewport: t,
                      transparency: s = !1,
                      background: r = null,
                    }) {
                      const n = this.ctx.canvas.width,
                        a = this.ctx.canvas.height;
                      if (
                        (this.ctx.save(),
                        (this.ctx.fillStyle = r || "rgb(255, 255, 255)"),
                        this.ctx.fillRect(0, 0, n, a),
                        this.ctx.restore(),
                        s)
                      ) {
                        const e = this.cachedCanvases.getCanvas(
                          "transparent",
                          n,
                          a,
                          !0
                        );
                        (this.compositeCtx = this.ctx),
                          (this.transparentCanvas = e.canvas),
                          (this.ctx = e.context),
                          this.ctx.save(),
                          this.ctx.transform.apply(
                            this.ctx,
                            this.compositeCtx.mozCurrentTransform
                          );
                      }
                      this.ctx.save(),
                        h(this.ctx),
                        e && this.ctx.transform.apply(this.ctx, e),
                        this.ctx.transform.apply(this.ctx, t.transform),
                        (this.baseTransform =
                          this.ctx.mozCurrentTransform.slice()),
                        (this._combinedScaleFactor = Math.hypot(
                          this.baseTransform[0],
                          this.baseTransform[2]
                        )),
                        this.imageLayer && this.imageLayer.beginLayout();
                    }
                    executeOperatorList(e, t, s, n) {
                      const a = e.argsArray,
                        i = e.fnArray;
                      let o = t || 0;
                      const l = a.length;
                      if (l === o) return o;
                      const c = l - o > 10 && "function" === typeof s,
                        h = c ? Date.now() + 15 : 0;
                      let d = 0;
                      const u = this.commonObjs,
                        p = this.objs;
                      let g;
                      for (;;) {
                        if (void 0 !== n && o === n.nextBreakPoint)
                          return n.breakIt(o, s), o;
                        if (((g = i[o]), g !== r.OPS.dependency))
                          this[g].apply(this, a[o]);
                        else
                          for (const e of a[o]) {
                            const t = e.startsWith("g_") ? u : p;
                            if (!t.has(e)) return t.get(e, s), o;
                          }
                        if ((o++, o === l)) return o;
                        if (c && ++d > 10) {
                          if (Date.now() > h) return s(), o;
                          d = 0;
                        }
                      }
                    }
                    endDrawing() {
                      for (
                        ;
                        this.stateStack.length ||
                        null !== this.current.activeSMask;

                      )
                        this.restore();
                      this.ctx.restore(),
                        this.transparentCanvas &&
                          ((this.ctx = this.compositeCtx),
                          this.ctx.save(),
                          this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                          this.ctx.drawImage(this.transparentCanvas, 0, 0),
                          this.ctx.restore(),
                          (this.transparentCanvas = null)),
                        this.cachedCanvases.clear(),
                        this.cachedPatterns.clear(),
                        this.imageLayer && this.imageLayer.endLayout();
                    }
                    _scaleImage(e, t) {
                      const s = e.width,
                        r = e.height;
                      let n,
                        a,
                        i = Math.max(Math.hypot(t[0], t[1]), 1),
                        o = Math.max(Math.hypot(t[2], t[3]), 1),
                        l = s,
                        c = r,
                        h = "prescale1";
                      for (; (i > 2 && l > 1) || (o > 2 && c > 1); ) {
                        let t = l,
                          s = c;
                        i > 2 &&
                          l > 1 &&
                          ((t = Math.ceil(l / 2)), (i /= l / t)),
                          o > 2 &&
                            c > 1 &&
                            ((s = Math.ceil(c / 2)), (o /= c / s)),
                          (n = this.cachedCanvases.getCanvas(h, t, s)),
                          (a = n.context),
                          a.clearRect(0, 0, t, s),
                          a.drawImage(e, 0, 0, l, c, 0, 0, t, s),
                          (e = n.canvas),
                          (l = t),
                          (c = s),
                          (h = "prescale1" === h ? "prescale2" : "prescale1");
                      }
                      return { img: e, paintWidth: l, paintHeight: c };
                    }
                    _createMaskCanvas(e) {
                      const s = this.ctx,
                        n = e.width,
                        a = e.height,
                        i = this.current.fillColor,
                        o = this.current.patternFill,
                        l = this.cachedCanvases.getCanvas("maskCanvas", n, a);
                      t(l.context, e);
                      const c = s.mozCurrentTransform;
                      let h = r.Util.transform(c, [1 / n, 0, 0, -1 / a, 0, 0]);
                      h = r.Util.transform(h, [1, 0, 0, 1, 0, -a]);
                      const d = r.Util.applyTransform([0, 0], h),
                        u = r.Util.applyTransform([n, a], h),
                        p = r.Util.normalizeRect([d[0], d[1], u[0], u[1]]),
                        g = Math.ceil(p[2] - p[0]),
                        f = Math.ceil(p[3] - p[1]),
                        m = this.cachedCanvases.getCanvas(
                          "fillCanvas",
                          g,
                          f,
                          !0
                        ),
                        _ = m.context,
                        A = Math.min(d[0], u[0]),
                        b = Math.min(d[1], u[1]);
                      _.translate(-A, -b), _.transform.apply(_, h);
                      const y = this._scaleImage(
                        l.canvas,
                        _.mozCurrentTransformInverse
                      );
                      _.drawImage(
                        y.img,
                        0,
                        0,
                        y.img.width,
                        y.img.height,
                        0,
                        0,
                        n,
                        a
                      ),
                        (_.globalCompositeOperation = "source-in");
                      const S = r.Util.transform(_.mozCurrentTransformInverse, [
                        1,
                        0,
                        0,
                        1,
                        -A,
                        -b,
                      ]);
                      return (
                        (_.fillStyle = o ? i.getPattern(s, this, S, !1) : i),
                        _.fillRect(0, 0, n, a),
                        {
                          canvas: m.canvas,
                          offsetX: Math.round(A),
                          offsetY: Math.round(b),
                        }
                      );
                    }
                    setLineWidth(e) {
                      (this.current.lineWidth = e), (this.ctx.lineWidth = e);
                    }
                    setLineCap(e) {
                      this.ctx.lineCap = f[e];
                    }
                    setLineJoin(e) {
                      this.ctx.lineJoin = m[e];
                    }
                    setMiterLimit(e) {
                      this.ctx.miterLimit = e;
                    }
                    setDash(e, t) {
                      const s = this.ctx;
                      void 0 !== s.setLineDash &&
                        (s.setLineDash(e), (s.lineDashOffset = t));
                    }
                    setRenderingIntent(e) {}
                    setFlatness(e) {}
                    setGState(e) {
                      for (let t = 0, s = e.length; t < s; t++) {
                        const s = e[t],
                          r = s[0],
                          n = s[1];
                        switch (r) {
                          case "LW":
                            this.setLineWidth(n);
                            break;
                          case "LC":
                            this.setLineCap(n);
                            break;
                          case "LJ":
                            this.setLineJoin(n);
                            break;
                          case "ML":
                            this.setMiterLimit(n);
                            break;
                          case "D":
                            this.setDash(n[0], n[1]);
                            break;
                          case "RI":
                            this.setRenderingIntent(n);
                            break;
                          case "FL":
                            this.setFlatness(n);
                            break;
                          case "Font":
                            this.setFont(n[0], n[1]);
                            break;
                          case "CA":
                            this.current.strokeAlpha = s[1];
                            break;
                          case "ca":
                            (this.current.fillAlpha = s[1]),
                              (this.ctx.globalAlpha = s[1]);
                            break;
                          case "BM":
                            this.ctx.globalCompositeOperation = n;
                            break;
                          case "SMask":
                            this.current.activeSMask &&
                              (this.stateStack.length > 0 &&
                              this.stateStack[this.stateStack.length - 1]
                                .activeSMask === this.current.activeSMask
                                ? this.suspendSMaskGroup()
                                : this.endSMaskGroup()),
                              (this.current.activeSMask = n
                                ? this.tempSMask
                                : null),
                              this.current.activeSMask &&
                                this.beginSMaskGroup(),
                              (this.tempSMask = null);
                            break;
                          case "TR":
                            this.current.transferMaps = n;
                        }
                      }
                    }
                    beginSMaskGroup() {
                      const e = this.current.activeSMask,
                        t = e.canvas.width,
                        r = e.canvas.height,
                        n = "smaskGroupAt" + this.groupLevel,
                        a = this.cachedCanvases.getCanvas(n, t, r, !0),
                        i = this.ctx,
                        o = i.mozCurrentTransform;
                      this.ctx.save();
                      const l = a.context;
                      l.scale(1 / e.scaleX, 1 / e.scaleY),
                        l.translate(-e.offsetX, -e.offsetY),
                        l.transform.apply(l, o),
                        (e.startTransformInverse =
                          l.mozCurrentTransformInverse),
                        s(i, l),
                        (this.ctx = l),
                        this.setGState([
                          ["BM", "source-over"],
                          ["ca", 1],
                          ["CA", 1],
                        ]),
                        this.groupStack.push(i),
                        this.groupLevel++;
                    }
                    suspendSMaskGroup() {
                      const e = this.ctx;
                      this.groupLevel--,
                        (this.ctx = this.groupStack.pop()),
                        g(this.ctx, this.current.activeSMask, e),
                        this.ctx.restore(),
                        this.ctx.save(),
                        s(e, this.ctx),
                        (this.current.resumeSMaskCtx = e);
                      const t = r.Util.transform(
                        this.current.activeSMask.startTransformInverse,
                        e.mozCurrentTransform
                      );
                      this.ctx.transform.apply(this.ctx, t),
                        e.save(),
                        e.setTransform(1, 0, 0, 1, 0, 0),
                        e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                        e.restore();
                    }
                    resumeSMaskGroup() {
                      const e = this.current.resumeSMaskCtx,
                        t = this.ctx;
                      (this.ctx = e),
                        this.groupStack.push(t),
                        this.groupLevel++;
                    }
                    endSMaskGroup() {
                      const e = this.ctx;
                      this.groupLevel--,
                        (this.ctx = this.groupStack.pop()),
                        g(this.ctx, this.current.activeSMask, e),
                        this.ctx.restore(),
                        s(e, this.ctx);
                      const t = r.Util.transform(
                        this.current.activeSMask.startTransformInverse,
                        e.mozCurrentTransform
                      );
                      this.ctx.transform.apply(this.ctx, t);
                    }
                    save() {
                      this.ctx.save();
                      const e = this.current;
                      this.stateStack.push(e),
                        (this.current = e.clone()),
                        (this.current.resumeSMaskCtx = null);
                    }
                    restore() {
                      this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
                        null === this.current.activeSMask ||
                          (0 !== this.stateStack.length &&
                            this.stateStack[this.stateStack.length - 1]
                              .activeSMask === this.current.activeSMask) ||
                          this.endSMaskGroup(),
                        0 !== this.stateStack.length
                          ? ((this.current = this.stateStack.pop()),
                            this.ctx.restore(),
                            (this.pendingClip = null),
                            (this._cachedGetSinglePixelWidth = null))
                          : (this.current.activeSMask = null);
                    }
                    transform(e, t, s, r, n, a) {
                      this.ctx.transform(e, t, s, r, n, a),
                        (this._cachedGetSinglePixelWidth = null);
                    }
                    constructPath(e, t) {
                      const s = this.ctx,
                        n = this.current;
                      let a = n.x,
                        i = n.y;
                      for (let o = 0, l = 0, c = e.length; o < c; o++)
                        switch (0 | e[o]) {
                          case r.OPS.rectangle:
                            (a = t[l++]), (i = t[l++]);
                            const e = t[l++],
                              n = t[l++],
                              o = a + e,
                              c = i + n;
                            s.moveTo(a, i),
                              0 === e || 0 === n
                                ? s.lineTo(o, c)
                                : (s.lineTo(o, i),
                                  s.lineTo(o, c),
                                  s.lineTo(a, c)),
                              s.closePath();
                            break;
                          case r.OPS.moveTo:
                            (a = t[l++]), (i = t[l++]), s.moveTo(a, i);
                            break;
                          case r.OPS.lineTo:
                            (a = t[l++]), (i = t[l++]), s.lineTo(a, i);
                            break;
                          case r.OPS.curveTo:
                            (a = t[l + 4]),
                              (i = t[l + 5]),
                              s.bezierCurveTo(
                                t[l],
                                t[l + 1],
                                t[l + 2],
                                t[l + 3],
                                a,
                                i
                              ),
                              (l += 6);
                            break;
                          case r.OPS.curveTo2:
                            s.bezierCurveTo(
                              a,
                              i,
                              t[l],
                              t[l + 1],
                              t[l + 2],
                              t[l + 3]
                            ),
                              (a = t[l + 2]),
                              (i = t[l + 3]),
                              (l += 4);
                            break;
                          case r.OPS.curveTo3:
                            (a = t[l + 2]),
                              (i = t[l + 3]),
                              s.bezierCurveTo(t[l], t[l + 1], a, i, a, i),
                              (l += 4);
                            break;
                          case r.OPS.closePath:
                            s.closePath();
                        }
                      n.setCurrentPoint(a, i);
                    }
                    closePath() {
                      this.ctx.closePath();
                    }
                    stroke(e) {
                      e = "undefined" === typeof e || e;
                      const t = this.ctx,
                        s = this.current.strokeColor;
                      if (
                        ((t.globalAlpha = this.current.strokeAlpha),
                        this.contentVisible)
                      )
                        if ("object" === typeof s && s?.getPattern) {
                          const e = this.getSinglePixelWidth();
                          t.save(),
                            (t.strokeStyle = s.getPattern(
                              t,
                              this,
                              t.mozCurrentTransformInverse
                            )),
                            (t.lineWidth = Math.max(e, this.current.lineWidth)),
                            t.stroke(),
                            t.restore();
                        } else {
                          const e = this.getSinglePixelWidth();
                          e < 0 && -e >= this.current.lineWidth
                            ? (t.save(),
                              t.resetTransform(),
                              (t.lineWidth = Math.round(
                                this._combinedScaleFactor
                              )),
                              t.stroke(),
                              t.restore())
                            : ((t.lineWidth = Math.max(
                                e,
                                this.current.lineWidth
                              )),
                              t.stroke());
                        }
                      e && this.consumePath(),
                        (t.globalAlpha = this.current.fillAlpha);
                    }
                    closeStroke() {
                      this.closePath(), this.stroke();
                    }
                    fill(e) {
                      e = "undefined" === typeof e || e;
                      const t = this.ctx,
                        s = this.current.fillColor;
                      let r = !1;
                      this.current.patternFill &&
                        (t.save(),
                        (t.fillStyle = s.getPattern(
                          t,
                          this,
                          t.mozCurrentTransformInverse
                        )),
                        (r = !0)),
                        this.contentVisible &&
                          (this.pendingEOFill
                            ? (t.fill("evenodd"), (this.pendingEOFill = !1))
                            : t.fill()),
                        r && t.restore(),
                        e && this.consumePath();
                    }
                    eoFill() {
                      (this.pendingEOFill = !0), this.fill();
                    }
                    fillStroke() {
                      this.fill(!1), this.stroke(!1), this.consumePath();
                    }
                    eoFillStroke() {
                      (this.pendingEOFill = !0), this.fillStroke();
                    }
                    closeFillStroke() {
                      this.closePath(), this.fillStroke();
                    }
                    closeEOFillStroke() {
                      (this.pendingEOFill = !0),
                        this.closePath(),
                        this.fillStroke();
                    }
                    endPath() {
                      this.consumePath();
                    }
                    clip() {
                      this.pendingClip = _;
                    }
                    eoClip() {
                      this.pendingClip = A;
                    }
                    beginText() {
                      (this.current.textMatrix = r.IDENTITY_MATRIX),
                        (this.current.textMatrixScale = 1),
                        (this.current.x = this.current.lineX = 0),
                        (this.current.y = this.current.lineY = 0);
                    }
                    endText() {
                      const e = this.pendingTextPaths,
                        t = this.ctx;
                      if (void 0 !== e) {
                        t.save(), t.beginPath();
                        for (let s = 0; s < e.length; s++) {
                          const r = e[s];
                          t.setTransform.apply(t, r.transform),
                            t.translate(r.x, r.y),
                            r.addToPath(t, r.fontSize);
                        }
                        t.restore(),
                          t.clip(),
                          t.beginPath(),
                          delete this.pendingTextPaths;
                      } else t.beginPath();
                    }
                    setCharSpacing(e) {
                      this.current.charSpacing = e;
                    }
                    setWordSpacing(e) {
                      this.current.wordSpacing = e;
                    }
                    setHScale(e) {
                      this.current.textHScale = e / 100;
                    }
                    setLeading(e) {
                      this.current.leading = -e;
                    }
                    setFont(e, t) {
                      const s = this.commonObjs.get(e),
                        n = this.current;
                      if (!s) throw new Error(`Can't find font for ${e}`);
                      if (
                        ((n.fontMatrix =
                          s.fontMatrix || r.FONT_IDENTITY_MATRIX),
                        (0 !== n.fontMatrix[0] && 0 !== n.fontMatrix[3]) ||
                          (0, r.warn)("Invalid font matrix for font " + e),
                        t < 0
                          ? ((t = -t), (n.fontDirection = -1))
                          : (n.fontDirection = 1),
                        (this.current.font = s),
                        (this.current.fontSize = t),
                        s.isType3Font)
                      )
                        return;
                      const a = s.loadedName || "sans-serif";
                      let i = "normal";
                      s.black ? (i = "900") : s.bold && (i = "bold");
                      const o = s.italic ? "italic" : "normal",
                        l = `"${a}", ${s.fallbackName}`;
                      let c = t;
                      t < 16 ? (c = 16) : t > 100 && (c = 100),
                        (this.current.fontSizeScale = t / c),
                        (this.ctx.font = `${o} ${i} ${c}px ${l}`);
                    }
                    setTextRenderingMode(e) {
                      this.current.textRenderingMode = e;
                    }
                    setTextRise(e) {
                      this.current.textRise = e;
                    }
                    moveText(e, t) {
                      (this.current.x = this.current.lineX += e),
                        (this.current.y = this.current.lineY += t);
                    }
                    setLeadingMoveText(e, t) {
                      this.setLeading(-t), this.moveText(e, t);
                    }
                    setTextMatrix(e, t, s, r, n, a) {
                      (this.current.textMatrix = [e, t, s, r, n, a]),
                        (this.current.textMatrixScale = Math.hypot(e, t)),
                        (this.current.x = this.current.lineX = 0),
                        (this.current.y = this.current.lineY = 0);
                    }
                    nextLine() {
                      this.moveText(0, this.current.leading);
                    }
                    paintChar(e, t, s, n, a) {
                      const i = this.ctx,
                        o = this.current,
                        l = o.font,
                        c = o.textRenderingMode,
                        h = o.fontSize / o.fontSizeScale,
                        d = c & r.TextRenderingMode.FILL_STROKE_MASK,
                        u = !!(c & r.TextRenderingMode.ADD_TO_PATH_FLAG),
                        p = o.patternFill && !l.missingFile;
                      let g;
                      (l.disableFontFace || u || p) &&
                        (g = l.getPathGenerator(this.commonObjs, e)),
                        l.disableFontFace || p
                          ? (i.save(),
                            i.translate(t, s),
                            i.beginPath(),
                            g(i, h),
                            n && i.setTransform.apply(i, n),
                            (d !== r.TextRenderingMode.FILL &&
                              d !== r.TextRenderingMode.FILL_STROKE) ||
                              i.fill(),
                            (d !== r.TextRenderingMode.STROKE &&
                              d !== r.TextRenderingMode.FILL_STROKE) ||
                              (a &&
                                (i.resetTransform(),
                                (i.lineWidth = Math.round(
                                  this._combinedScaleFactor
                                ))),
                              i.stroke()),
                            i.restore())
                          : ((d !== r.TextRenderingMode.FILL &&
                              d !== r.TextRenderingMode.FILL_STROKE) ||
                              i.fillText(e, t, s),
                            (d !== r.TextRenderingMode.STROKE &&
                              d !== r.TextRenderingMode.FILL_STROKE) ||
                              (a
                                ? (i.save(),
                                  i.moveTo(t, s),
                                  i.resetTransform(),
                                  (i.lineWidth = Math.round(
                                    this._combinedScaleFactor
                                  )),
                                  i.strokeText(e, 0, 0),
                                  i.restore())
                                : i.strokeText(e, t, s))),
                        u &&
                          (
                            this.pendingTextPaths ||
                            (this.pendingTextPaths = [])
                          ).push({
                            transform: i.mozCurrentTransform,
                            x: t,
                            y: s,
                            fontSize: h,
                            addToPath: g,
                          });
                    }
                    get isFontSubpixelAAEnabled() {
                      const { context: e } = this.cachedCanvases.getCanvas(
                        "isFontSubpixelAAEnabled",
                        10,
                        10
                      );
                      e.scale(1.5, 1), e.fillText("I", 0, 10);
                      const t = e.getImageData(0, 0, 10, 10).data;
                      let s = !1;
                      for (let r = 3; r < t.length; r += 4)
                        if (t[r] > 0 && t[r] < 255) {
                          s = !0;
                          break;
                        }
                      return (0, r.shadow)(this, "isFontSubpixelAAEnabled", s);
                    }
                    showText(e) {
                      const t = this.current,
                        s = t.font;
                      if (s.isType3Font) return this.showType3Text(e);
                      const n = t.fontSize;
                      if (0 === n) return;
                      const a = this.ctx,
                        i = t.fontSizeScale,
                        o = t.charSpacing,
                        l = t.wordSpacing,
                        c = t.fontDirection,
                        h = t.textHScale * c,
                        d = e.length,
                        u = s.vertical,
                        p = u ? 1 : -1,
                        g = s.defaultVMetrics,
                        f = n * t.fontMatrix[0],
                        m =
                          t.textRenderingMode === r.TextRenderingMode.FILL &&
                          !s.disableFontFace &&
                          !t.patternFill;
                      let _;
                      if ((a.save(), t.patternFill)) {
                        a.save();
                        const e = t.fillColor.getPattern(
                          a,
                          this,
                          a.mozCurrentTransformInverse
                        );
                        (_ = a.mozCurrentTransform),
                          a.restore(),
                          (a.fillStyle = e);
                      }
                      a.transform.apply(a, t.textMatrix),
                        a.translate(t.x, t.y + t.textRise),
                        c > 0 ? a.scale(h, -1) : a.scale(h, 1);
                      let A = t.lineWidth,
                        b = !1;
                      const y = t.textMatrixScale;
                      if (0 === y || 0 === A) {
                        const e =
                          t.textRenderingMode &
                          r.TextRenderingMode.FILL_STROKE_MASK;
                        (e !== r.TextRenderingMode.STROKE &&
                          e !== r.TextRenderingMode.FILL_STROKE) ||
                          ((this._cachedGetSinglePixelWidth = null),
                          (A = this.getSinglePixelWidth()),
                          (b = A < 0));
                      } else A /= y;
                      1 !== i && (a.scale(i, i), (A /= i)), (a.lineWidth = A);
                      let S,
                        v = 0;
                      for (S = 0; S < d; ++S) {
                        const t = e[S];
                        if ((0, r.isNum)(t)) {
                          v += (p * t * n) / 1e3;
                          continue;
                        }
                        let h = !1;
                        const d = (t.isSpace ? l : 0) + o,
                          A = t.fontChar,
                          y = t.accent;
                        let x,
                          C,
                          k,
                          P = t.width;
                        if (u) {
                          const e = t.vmetric || g,
                            s = -(t.vmetric ? e[1] : 0.5 * P) * f,
                            r = e[2] * f;
                          (P = e ? -e[0] : P), (x = s / i), (C = (v + r) / i);
                        } else (x = v / i), (C = 0);
                        if (s.remeasure && P > 0) {
                          const e = ((1e3 * a.measureText(A).width) / n) * i;
                          if (P < e && this.isFontSubpixelAAEnabled) {
                            const t = P / e;
                            (h = !0), a.save(), a.scale(t, 1), (x /= t);
                          } else P !== e && (x += (((P - e) / 2e3) * n) / i);
                        }
                        if (
                          this.contentVisible &&
                          (t.isInFont || s.missingFile)
                        )
                          if (m && !y) a.fillText(A, x, C);
                          else if ((this.paintChar(A, x, C, _, b), y)) {
                            const e = x + (n * y.offset.x) / i,
                              t = C - (n * y.offset.y) / i;
                            this.paintChar(y.fontChar, e, t, _, b);
                          }
                        (k = u ? P * f - d * c : P * f + d * c),
                          (v += k),
                          h && a.restore();
                      }
                      u ? (t.y -= v) : (t.x += v * h), a.restore();
                    }
                    showType3Text(e) {
                      const t = this.ctx,
                        s = this.current,
                        n = s.font,
                        a = s.fontSize,
                        i = s.fontDirection,
                        o = n.vertical ? 1 : -1,
                        l = s.charSpacing,
                        c = s.wordSpacing,
                        h = s.textHScale * i,
                        d = s.fontMatrix || r.FONT_IDENTITY_MATRIX,
                        u = e.length;
                      let p, g, f, m;
                      if (
                        s.textRenderingMode !== r.TextRenderingMode.INVISIBLE &&
                        0 !== a
                      ) {
                        for (
                          this._cachedGetSinglePixelWidth = null,
                            t.save(),
                            t.transform.apply(t, s.textMatrix),
                            t.translate(s.x, s.y),
                            t.scale(h, i),
                            p = 0;
                          p < u;
                          ++p
                        ) {
                          if (((g = e[p]), (0, r.isNum)(g))) {
                            (m = (o * g * a) / 1e3),
                              this.ctx.translate(m, 0),
                              (s.x += m * h);
                            continue;
                          }
                          const i = (g.isSpace ? c : 0) + l,
                            u = n.charProcOperatorList[g.operatorListId];
                          u
                            ? (this.contentVisible &&
                                ((this.processingType3 = g),
                                this.save(),
                                t.scale(a, a),
                                t.transform.apply(t, d),
                                this.executeOperatorList(u),
                                this.restore()),
                              (f =
                                r.Util.applyTransform([g.width, 0], d)[0] * a +
                                i),
                              t.translate(f, 0),
                              (s.x += f * h))
                            : (0, r.warn)(
                                `Type3 character "${g.operatorListId}" is not available.`
                              );
                        }
                        t.restore(), (this.processingType3 = null);
                      }
                    }
                    setCharWidth(e, t) {}
                    setCharWidthAndBounds(e, t, s, r, n, a) {
                      this.ctx.rect(s, r, n - s, a - r),
                        this.clip(),
                        this.endPath();
                    }
                    getColorN_Pattern(e) {
                      let t;
                      if ("TilingPattern" === e[0]) {
                        const s = e[1],
                          r =
                            this.baseTransform ||
                            this.ctx.mozCurrentTransform.slice(),
                          a = {
                            createCanvasGraphics: (e) =>
                              new b(
                                e,
                                this.commonObjs,
                                this.objs,
                                this.canvasFactory
                              ),
                          };
                        t = new n.TilingPattern(e, s, this.ctx, a, r);
                      } else t = this._getPattern(e[1]);
                      return t;
                    }
                    setStrokeColorN() {
                      this.current.strokeColor =
                        this.getColorN_Pattern(arguments);
                    }
                    setFillColorN() {
                      (this.current.fillColor =
                        this.getColorN_Pattern(arguments)),
                        (this.current.patternFill = !0);
                    }
                    setStrokeRGBColor(e, t, s) {
                      const n = r.Util.makeHexColor(e, t, s);
                      (this.ctx.strokeStyle = n),
                        (this.current.strokeColor = n);
                    }
                    setFillRGBColor(e, t, s) {
                      const n = r.Util.makeHexColor(e, t, s);
                      (this.ctx.fillStyle = n),
                        (this.current.fillColor = n),
                        (this.current.patternFill = !1);
                    }
                    _getPattern(e) {
                      if (this.cachedPatterns.has(e))
                        return this.cachedPatterns.get(e);
                      const t = (0, n.getShadingPattern)(this.objs.get(e));
                      return this.cachedPatterns.set(e, t), t;
                    }
                    shadingFill(e) {
                      if (!this.contentVisible) return;
                      const t = this.ctx;
                      this.save();
                      const s = this._getPattern(e);
                      t.fillStyle = s.getPattern(
                        t,
                        this,
                        t.mozCurrentTransformInverse,
                        !0
                      );
                      const n = t.mozCurrentTransformInverse;
                      if (n) {
                        const e = t.canvas,
                          s = e.width,
                          a = e.height,
                          i = r.Util.applyTransform([0, 0], n),
                          o = r.Util.applyTransform([0, a], n),
                          l = r.Util.applyTransform([s, 0], n),
                          c = r.Util.applyTransform([s, a], n),
                          h = Math.min(i[0], o[0], l[0], c[0]),
                          d = Math.min(i[1], o[1], l[1], c[1]),
                          u = Math.max(i[0], o[0], l[0], c[0]),
                          p = Math.max(i[1], o[1], l[1], c[1]);
                        this.ctx.fillRect(h, d, u - h, p - d);
                      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                      this.restore();
                    }
                    beginInlineImage() {
                      (0, r.unreachable)("Should not call beginInlineImage");
                    }
                    beginImageData() {
                      (0, r.unreachable)("Should not call beginImageData");
                    }
                    paintFormXObjectBegin(e, t) {
                      if (
                        this.contentVisible &&
                        (this.save(),
                        this.baseTransformStack.push(this.baseTransform),
                        Array.isArray(e) &&
                          6 === e.length &&
                          this.transform.apply(this, e),
                        (this.baseTransform = this.ctx.mozCurrentTransform),
                        t)
                      ) {
                        const e = t[2] - t[0],
                          s = t[3] - t[1];
                        this.ctx.rect(t[0], t[1], e, s),
                          this.clip(),
                          this.endPath();
                      }
                    }
                    paintFormXObjectEnd() {
                      this.contentVisible &&
                        (this.restore(),
                        (this.baseTransform = this.baseTransformStack.pop()));
                    }
                    beginGroup(e) {
                      if (!this.contentVisible) return;
                      this.save();
                      const t = this.ctx;
                      e.isolated ||
                        (0, r.info)("TODO: Support non-isolated groups."),
                        e.knockout &&
                          (0, r.warn)("Knockout groups not supported.");
                      const n = t.mozCurrentTransform;
                      if ((e.matrix && t.transform.apply(t, e.matrix), !e.bbox))
                        throw new Error("Bounding box is required.");
                      let i = r.Util.getAxialAlignedBoundingBox(
                        e.bbox,
                        t.mozCurrentTransform
                      );
                      const o = [0, 0, t.canvas.width, t.canvas.height];
                      i = r.Util.intersect(i, o) || [0, 0, 0, 0];
                      const l = Math.floor(i[0]),
                        c = Math.floor(i[1]);
                      let h = Math.max(Math.ceil(i[2]) - l, 1),
                        d = Math.max(Math.ceil(i[3]) - c, 1),
                        u = 1,
                        p = 1;
                      h > a && ((u = h / a), (h = a)),
                        d > a && ((p = d / a), (d = a));
                      let g = "groupAt" + this.groupLevel;
                      e.smask && (g += "_smask_" + (this.smaskCounter++ % 2));
                      const f = this.cachedCanvases.getCanvas(g, h, d, !0),
                        m = f.context;
                      m.scale(1 / u, 1 / p),
                        m.translate(-l, -c),
                        m.transform.apply(m, n),
                        e.smask
                          ? this.smaskStack.push({
                              canvas: f.canvas,
                              context: m,
                              offsetX: l,
                              offsetY: c,
                              scaleX: u,
                              scaleY: p,
                              subtype: e.smask.subtype,
                              backdrop: e.smask.backdrop,
                              transferMap: e.smask.transferMap || null,
                              startTransformInverse: null,
                            })
                          : (t.setTransform(1, 0, 0, 1, 0, 0),
                            t.translate(l, c),
                            t.scale(u, p)),
                        s(t, m),
                        (this.ctx = m),
                        this.setGState([
                          ["BM", "source-over"],
                          ["ca", 1],
                          ["CA", 1],
                        ]),
                        this.groupStack.push(t),
                        this.groupLevel++,
                        (this.current.activeSMask = null);
                    }
                    endGroup(e) {
                      if (!this.contentVisible) return;
                      this.groupLevel--;
                      const t = this.ctx;
                      (this.ctx = this.groupStack.pop()),
                        void 0 !== this.ctx.imageSmoothingEnabled
                          ? (this.ctx.imageSmoothingEnabled = !1)
                          : (this.ctx.mozImageSmoothingEnabled = !1),
                        e.smask
                          ? (this.tempSMask = this.smaskStack.pop())
                          : this.ctx.drawImage(t.canvas, 0, 0),
                        this.restore();
                    }
                    beginAnnotations() {
                      this.save(),
                        this.baseTransform &&
                          this.ctx.setTransform.apply(
                            this.ctx,
                            this.baseTransform
                          );
                    }
                    endAnnotations() {
                      this.restore();
                    }
                    beginAnnotation(e, t, s, r) {
                      if (
                        (this.save(),
                        h(this.ctx),
                        (this.current = new c()),
                        Array.isArray(t) && 4 === t.length)
                      ) {
                        const e = t[2] - t[0],
                          s = t[3] - t[1];
                        this.ctx.rect(t[0], t[1], e, s),
                          this.clip(),
                          this.endPath();
                      }
                      this.transform.apply(this, s),
                        this.transform.apply(this, r);
                    }
                    endAnnotation() {
                      this.restore();
                    }
                    paintImageMaskXObject(e) {
                      if (!this.contentVisible) return;
                      const t = this.ctx,
                        s = e.width,
                        r = e.height,
                        n = this.processingType3;
                      if (
                        (n &&
                          void 0 === n.compiled &&
                          (n.compiled =
                            s <= 1e3 && r <= 1e3
                              ? (function (e) {
                                  const t = new Uint8Array([
                                      0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2,
                                      1, 0,
                                    ]),
                                    s = e.width,
                                    r = e.height,
                                    n = s + 1;
                                  let a, i, o, l;
                                  const c = new Uint8Array(n * (r + 1)),
                                    h = (s + 7) & -8,
                                    d = e.data,
                                    u = new Uint8Array(h * r);
                                  let p = 0;
                                  for (a = 0, i = d.length; a < i; a++) {
                                    const e = d[a];
                                    let t = 128;
                                    for (; t > 0; )
                                      (u[p++] = e & t ? 0 : 255), (t >>= 1);
                                  }
                                  let g = 0;
                                  for (
                                    p = 0,
                                      0 !== u[p] && ((c[0] = 1), ++g),
                                      o = 1;
                                    o < s;
                                    o++
                                  )
                                    u[p] !== u[p + 1] &&
                                      ((c[o] = u[p] ? 2 : 1), ++g),
                                      p++;
                                  for (
                                    0 !== u[p] && ((c[o] = 2), ++g), a = 1;
                                    a < r;
                                    a++
                                  ) {
                                    (p = a * h),
                                      (l = a * n),
                                      u[p - h] !== u[p] &&
                                        ((c[l] = u[p] ? 1 : 8), ++g);
                                    let e = (u[p] ? 4 : 0) + (u[p - h] ? 8 : 0);
                                    for (o = 1; o < s; o++)
                                      (e =
                                        (e >> 2) +
                                        (u[p + 1] ? 4 : 0) +
                                        (u[p - h + 1] ? 8 : 0)),
                                        t[e] && ((c[l + o] = t[e]), ++g),
                                        p++;
                                    if (
                                      (u[p - h] !== u[p] &&
                                        ((c[l + o] = u[p] ? 2 : 4), ++g),
                                      g > 1e3)
                                    )
                                      return null;
                                  }
                                  for (
                                    p = h * (r - 1),
                                      l = a * n,
                                      0 !== u[p] && ((c[l] = 8), ++g),
                                      o = 1;
                                    o < s;
                                    o++
                                  )
                                    u[p] !== u[p + 1] &&
                                      ((c[l + o] = u[p] ? 4 : 8), ++g),
                                      p++;
                                  if (
                                    (0 !== u[p] && ((c[l + o] = 4), ++g),
                                    g > 1e3)
                                  )
                                    return null;
                                  const f = new Int32Array([
                                      0,
                                      n,
                                      -1,
                                      0,
                                      -n,
                                      0,
                                      0,
                                      0,
                                      1,
                                    ]),
                                    m = [];
                                  for (a = 0; g && a <= r; a++) {
                                    let e = a * n;
                                    const t = e + s;
                                    for (; e < t && !c[e]; ) e++;
                                    if (e === t) continue;
                                    const r = [e % n, a],
                                      i = e;
                                    let o = c[e];
                                    do {
                                      const t = f[o];
                                      do {
                                        e += t;
                                      } while (!c[e]);
                                      const s = c[e];
                                      5 !== s && 10 !== s
                                        ? ((o = s), (c[e] = 0))
                                        : ((o = s & ((51 * o) >> 4)),
                                          (c[e] &= (o >> 2) | (o << 2))),
                                        r.push(e % n, (e / n) | 0),
                                        c[e] || --g;
                                    } while (i !== e);
                                    m.push(r), --a;
                                  }
                                  return function (e) {
                                    e.save(),
                                      e.scale(1 / s, -1 / r),
                                      e.translate(0, -r),
                                      e.beginPath();
                                    for (let t = 0, s = m.length; t < s; t++) {
                                      const s = m[t];
                                      e.moveTo(s[0], s[1]);
                                      for (
                                        let t = 2, r = s.length;
                                        t < r;
                                        t += 2
                                      )
                                        e.lineTo(s[t], s[t + 1]);
                                    }
                                    e.fill(), e.beginPath(), e.restore();
                                  };
                                })({ data: e.data, width: s, height: r })
                              : null),
                        n?.compiled)
                      )
                        return void n.compiled(t);
                      const a = this._createMaskCanvas(e),
                        i = a.canvas;
                      t.save(),
                        t.setTransform(1, 0, 0, 1, 0, 0),
                        t.drawImage(i, a.offsetX, a.offsetY),
                        t.restore();
                    }
                    paintImageMaskXObjectRepeat(e, t, s = 0, n = 0, a, i) {
                      if (!this.contentVisible) return;
                      const o = this.ctx;
                      o.save();
                      const l = o.mozCurrentTransform;
                      o.transform(t, s, n, a, 0, 0);
                      const c = this._createMaskCanvas(e);
                      o.setTransform(1, 0, 0, 1, 0, 0);
                      for (let h = 0, d = i.length; h < d; h += 2) {
                        const e = r.Util.transform(l, [
                            t,
                            s,
                            n,
                            a,
                            i[h],
                            i[h + 1],
                          ]),
                          [d, u] = r.Util.applyTransform([0, 0], e);
                        o.drawImage(c.canvas, d, u);
                      }
                      o.restore();
                    }
                    paintImageMaskXObjectGroup(e) {
                      if (!this.contentVisible) return;
                      const s = this.ctx,
                        r = this.current.fillColor,
                        n = this.current.patternFill;
                      for (let a = 0, i = e.length; a < i; a++) {
                        const i = e[a],
                          o = i.width,
                          l = i.height,
                          c = this.cachedCanvases.getCanvas("maskCanvas", o, l),
                          h = c.context;
                        h.save(),
                          t(h, i),
                          (h.globalCompositeOperation = "source-in"),
                          (h.fillStyle = n
                            ? r.getPattern(
                                h,
                                this,
                                s.mozCurrentTransformInverse,
                                !1
                              )
                            : r),
                          h.fillRect(0, 0, o, l),
                          h.restore(),
                          s.save(),
                          s.transform.apply(s, i.transform),
                          s.scale(1, -1),
                          s.drawImage(c.canvas, 0, 0, o, l, 0, -1, 1, 1),
                          s.restore();
                      }
                    }
                    paintImageXObject(e) {
                      if (!this.contentVisible) return;
                      const t = e.startsWith("g_")
                        ? this.commonObjs.get(e)
                        : this.objs.get(e);
                      t
                        ? this.paintInlineImageXObject(t)
                        : (0, r.warn)("Dependent image isn't ready yet");
                    }
                    paintImageXObjectRepeat(e, t, s, n) {
                      if (!this.contentVisible) return;
                      const a = e.startsWith("g_")
                        ? this.commonObjs.get(e)
                        : this.objs.get(e);
                      if (!a)
                        return void (0, r.warn)(
                          "Dependent image isn't ready yet"
                        );
                      const i = a.width,
                        o = a.height,
                        l = [];
                      for (let r = 0, c = n.length; r < c; r += 2)
                        l.push({
                          transform: [t, 0, 0, s, n[r], n[r + 1]],
                          x: 0,
                          y: 0,
                          w: i,
                          h: o,
                        });
                      this.paintInlineImageXObjectGroup(a, l);
                    }
                    paintInlineImageXObject(t) {
                      if (!this.contentVisible) return;
                      const s = t.width,
                        r = t.height,
                        n = this.ctx;
                      let a;
                      if (
                        (this.save(),
                        n.scale(1 / s, -1 / r),
                        ("function" === typeof HTMLElement &&
                          t instanceof HTMLElement) ||
                          !t.data)
                      )
                        a = t;
                      else {
                        const n = this.cachedCanvases.getCanvas(
                          "inlineImage",
                          s,
                          r
                        );
                        e(n.context, t, this.current.transferMaps),
                          (a = n.canvas);
                      }
                      const i = this._scaleImage(
                        a,
                        n.mozCurrentTransformInverse
                      );
                      if (
                        (n.drawImage(
                          i.img,
                          0,
                          0,
                          i.paintWidth,
                          i.paintHeight,
                          0,
                          -r,
                          s,
                          r
                        ),
                        this.imageLayer)
                      ) {
                        const e = this.getCanvasPosition(0, -r);
                        this.imageLayer.appendImage({
                          imgData: t,
                          left: e[0],
                          top: e[1],
                          width: s / n.mozCurrentTransformInverse[0],
                          height: r / n.mozCurrentTransformInverse[3],
                        });
                      }
                      this.restore();
                    }
                    paintInlineImageXObjectGroup(t, s) {
                      if (!this.contentVisible) return;
                      const r = this.ctx,
                        n = t.width,
                        a = t.height,
                        i = this.cachedCanvases.getCanvas("inlineImage", n, a);
                      e(i.context, t, this.current.transferMaps);
                      for (let e = 0, o = s.length; e < o; e++) {
                        const o = s[e];
                        if (
                          (r.save(),
                          r.transform.apply(r, o.transform),
                          r.scale(1, -1),
                          r.drawImage(
                            i.canvas,
                            o.x,
                            o.y,
                            o.w,
                            o.h,
                            0,
                            -1,
                            1,
                            1
                          ),
                          this.imageLayer)
                        ) {
                          const e = this.getCanvasPosition(o.x, o.y);
                          this.imageLayer.appendImage({
                            imgData: t,
                            left: e[0],
                            top: e[1],
                            width: n,
                            height: a,
                          });
                        }
                        r.restore();
                      }
                    }
                    paintSolidColorImageMask() {
                      this.contentVisible && this.ctx.fillRect(0, 0, 1, 1);
                    }
                    markPoint(e) {}
                    markPointProps(e, t) {}
                    beginMarkedContent(e) {
                      this.markedContentStack.push({ visible: !0 });
                    }
                    beginMarkedContentProps(e, t) {
                      "OC" === e
                        ? this.markedContentStack.push({
                            visible: this.optionalContentConfig.isVisible(t),
                          })
                        : this.markedContentStack.push({ visible: !0 }),
                        (this.contentVisible = this.isContentVisible());
                    }
                    endMarkedContent() {
                      this.markedContentStack.pop(),
                        (this.contentVisible = this.isContentVisible());
                    }
                    beginCompat() {}
                    endCompat() {}
                    consumePath() {
                      const e = this.ctx;
                      this.pendingClip &&
                        (this.pendingClip === A ? e.clip("evenodd") : e.clip(),
                        (this.pendingClip = null)),
                        e.beginPath();
                    }
                    getSinglePixelWidth() {
                      if (null === this._cachedGetSinglePixelWidth) {
                        const e = this.ctx.mozCurrentTransform,
                          t = Math.abs(e[0] * e[3] - e[2] * e[1]),
                          s = e[0] ** 2 + e[2] ** 2,
                          r = e[1] ** 2 + e[3] ** 2,
                          n = Math.sqrt(Math.max(s, r)) / t;
                        s !== r && this._combinedScaleFactor * n > 1
                          ? (this._cachedGetSinglePixelWidth =
                              -this._combinedScaleFactor * n)
                          : t > Number.EPSILON
                          ? (this._cachedGetSinglePixelWidth = n)
                          : (this._cachedGetSinglePixelWidth = 1);
                      }
                      return this._cachedGetSinglePixelWidth;
                    }
                    getCanvasPosition(e, t) {
                      const s = this.ctx.mozCurrentTransform;
                      return [
                        s[0] * e + s[2] * t + s[4],
                        s[1] * e + s[3] * t + s[5],
                      ];
                    }
                    isContentVisible() {
                      for (
                        let e = this.markedContentStack.length - 1;
                        e >= 0;
                        e--
                      )
                        if (!this.markedContentStack[e].visible) return !1;
                      return !0;
                    }
                  }
                  for (const n in r.OPS) b.prototype[r.OPS[n]] = b.prototype[n];
                  return b;
                })();
                t.CanvasGraphics = h;
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.getShadingPattern = function (e) {
                    switch (e[0]) {
                      case "RadialAxial":
                        return new i(e);
                      case "Mesh":
                        return new c(e);
                      case "Dummy":
                        return new h();
                    }
                    throw new Error(`Unknown IR type: ${e[0]}`);
                  }),
                  (t.TilingPattern = void 0);
                var r = s(2);
                function n(e, t) {
                  if (!t || "undefined" === typeof Path2D) return;
                  const s = t[2] - t[0],
                    r = t[3] - t[1],
                    n = new Path2D();
                  n.rect(t[0], t[1], s, r), e.clip(n);
                }
                class a {
                  constructor() {
                    this.constructor === a &&
                      (0, r.unreachable)(
                        "Cannot initialize BaseShadingPattern."
                      );
                  }
                  getPattern() {
                    (0, r.unreachable)("Abstract method `getPattern` called.");
                  }
                }
                class i extends a {
                  constructor(e) {
                    super(),
                      (this._type = e[1]),
                      (this._bbox = e[2]),
                      (this._colorStops = e[3]),
                      (this._p0 = e[4]),
                      (this._p1 = e[5]),
                      (this._r0 = e[6]),
                      (this._r1 = e[7]),
                      (this._matrix = e[8]),
                      (this._patternCache = null);
                  }
                  _createGradient(e) {
                    let t;
                    "axial" === this._type
                      ? (t = e.createLinearGradient(
                          this._p0[0],
                          this._p0[1],
                          this._p1[0],
                          this._p1[1]
                        ))
                      : "radial" === this._type &&
                        (t = e.createRadialGradient(
                          this._p0[0],
                          this._p0[1],
                          this._r0,
                          this._p1[0],
                          this._p1[1],
                          this._r1
                        ));
                    for (const s of this._colorStops)
                      t.addColorStop(s[0], s[1]);
                    return t;
                  }
                  getPattern(e, t, s, a = !1) {
                    let i;
                    if (this._patternCache) i = this._patternCache;
                    else {
                      if (a) n(e, this._bbox), (i = this._createGradient(e));
                      else {
                        const s = t.cachedCanvases.getCanvas(
                            "pattern",
                            t.ctx.canvas.width,
                            t.ctx.canvas.height,
                            !0
                          ),
                          r = s.context;
                        r.clearRect(0, 0, r.canvas.width, r.canvas.height),
                          r.beginPath(),
                          r.rect(0, 0, r.canvas.width, r.canvas.height),
                          r.setTransform.apply(r, t.baseTransform),
                          this._matrix && r.transform.apply(r, this._matrix),
                          n(r, this._bbox),
                          (r.fillStyle = this._createGradient(r)),
                          r.fill(),
                          (i = e.createPattern(s.canvas, "repeat"));
                      }
                      this._patternCache = i;
                    }
                    if (!a) {
                      const e = new DOMMatrix(s);
                      try {
                        i.setTransform(e);
                      } catch (o) {
                        (0, r.warn)(
                          `RadialAxialShadingPattern.getPattern: "${o?.message}".`
                        );
                      }
                    }
                    return i;
                  }
                }
                function o(e, t, s, r, n, a, i, o) {
                  const l = t.coords,
                    c = t.colors,
                    h = e.data,
                    d = 4 * e.width;
                  let u;
                  l[s + 1] > l[r + 1] &&
                    ((u = s), (s = r), (r = u), (u = a), (a = i), (i = u)),
                    l[r + 1] > l[n + 1] &&
                      ((u = r), (r = n), (n = u), (u = i), (i = o), (o = u)),
                    l[s + 1] > l[r + 1] &&
                      ((u = s), (s = r), (r = u), (u = a), (a = i), (i = u));
                  const p = (l[s] + t.offsetX) * t.scaleX,
                    g = (l[s + 1] + t.offsetY) * t.scaleY,
                    f = (l[r] + t.offsetX) * t.scaleX,
                    m = (l[r + 1] + t.offsetY) * t.scaleY,
                    _ = (l[n] + t.offsetX) * t.scaleX,
                    A = (l[n + 1] + t.offsetY) * t.scaleY;
                  if (g >= A) return;
                  const b = c[a],
                    y = c[a + 1],
                    S = c[a + 2],
                    v = c[i],
                    x = c[i + 1],
                    C = c[i + 2],
                    k = c[o],
                    P = c[o + 1],
                    w = c[o + 2],
                    R = Math.round(g),
                    T = Math.round(A);
                  let F, E, M, D, I, L, O, N;
                  for (let j = R; j <= T; j++) {
                    if (j < m) {
                      let e;
                      (e = j < g ? 0 : (g - j) / (g - m)),
                        (F = p - (p - f) * e),
                        (E = b - (b - v) * e),
                        (M = y - (y - x) * e),
                        (D = S - (S - C) * e);
                    } else {
                      let e;
                      (e = j > A ? 1 : m === A ? 0 : (m - j) / (m - A)),
                        (F = f - (f - _) * e),
                        (E = v - (v - k) * e),
                        (M = x - (x - P) * e),
                        (D = C - (C - w) * e);
                    }
                    let e;
                    (e = j < g ? 0 : j > A ? 1 : (g - j) / (g - A)),
                      (I = p - (p - _) * e),
                      (L = b - (b - k) * e),
                      (O = y - (y - P) * e),
                      (N = S - (S - w) * e);
                    const t = Math.round(Math.min(F, I)),
                      s = Math.round(Math.max(F, I));
                    let r = d * j + 4 * t;
                    for (let n = t; n <= s; n++)
                      (e = (F - n) / (F - I)),
                        e < 0 ? (e = 0) : e > 1 && (e = 1),
                        (h[r++] = (E - (E - L) * e) | 0),
                        (h[r++] = (M - (M - O) * e) | 0),
                        (h[r++] = (D - (D - N) * e) | 0),
                        (h[r++] = 255);
                  }
                }
                function l(e, t, s) {
                  const r = t.coords,
                    n = t.colors;
                  let a, i;
                  switch (t.type) {
                    case "lattice":
                      const l = t.verticesPerRow,
                        c = Math.floor(r.length / l) - 1,
                        h = l - 1;
                      for (a = 0; a < c; a++) {
                        let t = a * l;
                        for (let a = 0; a < h; a++, t++)
                          o(
                            e,
                            s,
                            r[t],
                            r[t + 1],
                            r[t + l],
                            n[t],
                            n[t + 1],
                            n[t + l]
                          ),
                            o(
                              e,
                              s,
                              r[t + l + 1],
                              r[t + 1],
                              r[t + l],
                              n[t + l + 1],
                              n[t + 1],
                              n[t + l]
                            );
                      }
                      break;
                    case "triangles":
                      for (a = 0, i = r.length; a < i; a += 3)
                        o(
                          e,
                          s,
                          r[a],
                          r[a + 1],
                          r[a + 2],
                          n[a],
                          n[a + 1],
                          n[a + 2]
                        );
                      break;
                    default:
                      throw new Error("illegal figure");
                  }
                }
                class c extends a {
                  constructor(e) {
                    super(),
                      (this._coords = e[2]),
                      (this._colors = e[3]),
                      (this._figures = e[4]),
                      (this._bounds = e[5]),
                      (this._matrix = e[6]),
                      (this._bbox = e[7]),
                      (this._background = e[8]);
                  }
                  _createMeshCanvas(e, t, s) {
                    const r = Math.floor(this._bounds[0]),
                      n = Math.floor(this._bounds[1]),
                      a = Math.ceil(this._bounds[2]) - r,
                      i = Math.ceil(this._bounds[3]) - n,
                      o = Math.min(Math.ceil(Math.abs(a * e[0] * 1.1)), 3e3),
                      c = Math.min(Math.ceil(Math.abs(i * e[1] * 1.1)), 3e3),
                      h = a / o,
                      d = i / c,
                      u = {
                        coords: this._coords,
                        colors: this._colors,
                        offsetX: -r,
                        offsetY: -n,
                        scaleX: 1 / h,
                        scaleY: 1 / d,
                      },
                      p = o + 4,
                      g = c + 4,
                      f = s.getCanvas("mesh", p, g, !1),
                      m = f.context,
                      _ = m.createImageData(o, c);
                    if (t) {
                      const e = _.data;
                      for (let s = 0, r = e.length; s < r; s += 4)
                        (e[s] = t[0]),
                          (e[s + 1] = t[1]),
                          (e[s + 2] = t[2]),
                          (e[s + 3] = 255);
                    }
                    for (const A of this._figures) l(_, A, u);
                    return (
                      m.putImageData(_, 2, 2),
                      {
                        canvas: f.canvas,
                        offsetX: r - 2 * h,
                        offsetY: n - 2 * d,
                        scaleX: h,
                        scaleY: d,
                      }
                    );
                  }
                  getPattern(e, t, s, a = !1) {
                    let i;
                    if ((n(e, this._bbox), a))
                      i = r.Util.singularValueDecompose2dScale(
                        e.mozCurrentTransform
                      );
                    else if (
                      ((i = r.Util.singularValueDecompose2dScale(
                        t.baseTransform
                      )),
                      this._matrix)
                    ) {
                      const e = r.Util.singularValueDecompose2dScale(
                        this._matrix
                      );
                      i = [i[0] * e[0], i[1] * e[1]];
                    }
                    const o = this._createMeshCanvas(
                      i,
                      a ? null : this._background,
                      t.cachedCanvases
                    );
                    return (
                      a ||
                        (e.setTransform.apply(e, t.baseTransform),
                        this._matrix && e.transform.apply(e, this._matrix)),
                      e.translate(o.offsetX, o.offsetY),
                      e.scale(o.scaleX, o.scaleY),
                      e.createPattern(o.canvas, "no-repeat")
                    );
                  }
                }
                class h extends a {
                  getPattern() {
                    return "hotpink";
                  }
                }
                const d = 1,
                  u = 2;
                class p {
                  static get MAX_PATTERN_SIZE() {
                    return (0, r.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
                  }
                  constructor(e, t, s, r, n) {
                    (this.operatorList = e[2]),
                      (this.matrix = e[3] || [1, 0, 0, 1, 0, 0]),
                      (this.bbox = e[4]),
                      (this.xstep = e[5]),
                      (this.ystep = e[6]),
                      (this.paintType = e[7]),
                      (this.tilingType = e[8]),
                      (this.color = t),
                      (this.ctx = s),
                      (this.canvasGraphicsFactory = r),
                      (this.baseTransform = n);
                  }
                  createPatternCanvas(e) {
                    const t = this.operatorList,
                      s = this.bbox,
                      n = this.xstep,
                      a = this.ystep,
                      i = this.paintType,
                      o = this.tilingType,
                      l = this.color,
                      c = this.canvasGraphicsFactory;
                    (0, r.info)("TilingType: " + o);
                    const h = s[0],
                      d = s[1],
                      u = s[2],
                      p = s[3],
                      g = r.Util.singularValueDecompose2dScale(this.matrix),
                      f = r.Util.singularValueDecompose2dScale(
                        this.baseTransform
                      ),
                      m = [g[0] * f[0], g[1] * f[1]],
                      _ = this.getSizeAndScale(n, this.ctx.canvas.width, m[0]),
                      A = this.getSizeAndScale(a, this.ctx.canvas.height, m[1]),
                      b = e.cachedCanvases.getCanvas(
                        "pattern",
                        _.size,
                        A.size,
                        !0
                      ),
                      y = b.context,
                      S = c.createCanvasGraphics(y);
                    (S.groupLevel = e.groupLevel),
                      this.setFillAndStrokeStyleToContext(S, i, l);
                    let v = h,
                      x = d,
                      C = u,
                      k = p;
                    return (
                      h < 0 && ((v = 0), (C += Math.abs(h))),
                      d < 0 && ((x = 0), (k += Math.abs(d))),
                      y.translate(-_.scale * v, -A.scale * x),
                      S.transform(_.scale, 0, 0, A.scale, 0, 0),
                      this.clipBbox(S, v, x, C, k),
                      (S.baseTransform = S.ctx.mozCurrentTransform.slice()),
                      S.executeOperatorList(t),
                      S.endDrawing(),
                      {
                        canvas: b.canvas,
                        scaleX: _.scale,
                        scaleY: A.scale,
                        offsetX: v,
                        offsetY: x,
                      }
                    );
                  }
                  getSizeAndScale(e, t, s) {
                    e = Math.abs(e);
                    const r = Math.max(p.MAX_PATTERN_SIZE, t);
                    let n = Math.ceil(e * s);
                    return (
                      n >= r ? (n = r) : (s = n / e), { scale: s, size: n }
                    );
                  }
                  clipBbox(e, t, s, r, n) {
                    const a = r - t,
                      i = n - s;
                    e.ctx.rect(t, s, a, i), e.clip(), e.endPath();
                  }
                  setFillAndStrokeStyleToContext(e, t, s) {
                    const n = e.ctx,
                      a = e.current;
                    switch (t) {
                      case d:
                        const e = this.ctx;
                        (n.fillStyle = e.fillStyle),
                          (n.strokeStyle = e.strokeStyle),
                          (a.fillColor = e.fillStyle),
                          (a.strokeColor = e.strokeStyle);
                        break;
                      case u:
                        const i = r.Util.makeHexColor(s[0], s[1], s[2]);
                        (n.fillStyle = i),
                          (n.strokeStyle = i),
                          (a.fillColor = i),
                          (a.strokeColor = i);
                        break;
                      default:
                        throw new r.FormatError(`Unsupported paint type: ${t}`);
                    }
                  }
                  getPattern(e, t, s, n = !1) {
                    let a = s;
                    n ||
                      ((a = r.Util.transform(a, t.baseTransform)),
                      this.matrix && (a = r.Util.transform(a, this.matrix)));
                    const i = this.createPatternCanvas(t);
                    let o = new DOMMatrix(a);
                    (o = o.translate(i.offsetX, i.offsetY)),
                      (o = o.scale(1 / i.scaleX, 1 / i.scaleY));
                    const l = e.createPattern(i.canvas, "repeat");
                    try {
                      l.setTransform(o);
                    } catch (c) {
                      (0, r.warn)(`TilingPattern.getPattern: "${c?.message}".`);
                    }
                    return l;
                  }
                }
                t.TilingPattern = p;
              },
              (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.GlobalWorkerOptions = void 0);
                const s = Object.create(null);
                (t.GlobalWorkerOptions = s),
                  (s.workerPort =
                    void 0 === s.workerPort ? null : s.workerPort),
                  (s.workerSrc = void 0 === s.workerSrc ? "" : s.workerSrc);
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.MessageHandler = void 0);
                var r = s(2);
                const n = 1,
                  a = 2,
                  i = 1,
                  o = 2,
                  l = 3,
                  c = 4,
                  h = 5,
                  d = 6,
                  u = 7,
                  p = 8;
                function g(e) {
                  if ("object" !== typeof e || null === e) return e;
                  switch (e.name) {
                    case "AbortException":
                      return new r.AbortException(e.message);
                    case "MissingPDFException":
                      return new r.MissingPDFException(e.message);
                    case "UnexpectedResponseException":
                      return new r.UnexpectedResponseException(
                        e.message,
                        e.status
                      );
                    case "UnknownErrorException":
                      return new r.UnknownErrorException(e.message, e.details);
                    default:
                      return new r.UnknownErrorException(
                        e.message,
                        e.toString()
                      );
                  }
                }
                t.MessageHandler = class {
                  constructor(e, t, s) {
                    (this.sourceName = e),
                      (this.targetName = t),
                      (this.comObj = s),
                      (this.callbackId = 1),
                      (this.streamId = 1),
                      (this.postMessageTransfers = !0),
                      (this.streamSinks = Object.create(null)),
                      (this.streamControllers = Object.create(null)),
                      (this.callbackCapabilities = Object.create(null)),
                      (this.actionHandler = Object.create(null)),
                      (this._onComObjOnMessage = (e) => {
                        const t = e.data;
                        if (t.targetName !== this.sourceName) return;
                        if (t.stream) return void this._processStreamMessage(t);
                        if (t.callback) {
                          const e = t.callbackId,
                            s = this.callbackCapabilities[e];
                          if (!s)
                            throw new Error(`Cannot resolve callback ${e}`);
                          if (
                            (delete this.callbackCapabilities[e],
                            t.callback === n)
                          )
                            s.resolve(t.data);
                          else {
                            if (t.callback !== a)
                              throw new Error("Unexpected callback case");
                            s.reject(g(t.reason));
                          }
                          return;
                        }
                        const r = this.actionHandler[t.action];
                        if (!r)
                          throw new Error(
                            `Unknown action from worker: ${t.action}`
                          );
                        if (t.callbackId) {
                          const e = this.sourceName,
                            i = t.sourceName;
                          new Promise(function (e) {
                            e(r(t.data));
                          }).then(
                            function (r) {
                              s.postMessage({
                                sourceName: e,
                                targetName: i,
                                callback: n,
                                callbackId: t.callbackId,
                                data: r,
                              });
                            },
                            function (r) {
                              s.postMessage({
                                sourceName: e,
                                targetName: i,
                                callback: a,
                                callbackId: t.callbackId,
                                reason: g(r),
                              });
                            }
                          );
                        } else
                          t.streamId ? this._createStreamSink(t) : r(t.data);
                      }),
                      s.addEventListener("message", this._onComObjOnMessage);
                  }
                  on(e, t) {
                    const s = this.actionHandler;
                    if (s[e])
                      throw new Error(
                        `There is already an actionName called "${e}"`
                      );
                    s[e] = t;
                  }
                  send(e, t, s) {
                    this._postMessage(
                      {
                        sourceName: this.sourceName,
                        targetName: this.targetName,
                        action: e,
                        data: t,
                      },
                      s
                    );
                  }
                  sendWithPromise(e, t, s) {
                    const n = this.callbackId++,
                      a = (0, r.createPromiseCapability)();
                    this.callbackCapabilities[n] = a;
                    try {
                      this._postMessage(
                        {
                          sourceName: this.sourceName,
                          targetName: this.targetName,
                          action: e,
                          callbackId: n,
                          data: t,
                        },
                        s
                      );
                    } catch (i) {
                      a.reject(i);
                    }
                    return a.promise;
                  }
                  sendWithStream(e, t, s, n) {
                    const a = this.streamId++,
                      o = this.sourceName,
                      l = this.targetName,
                      c = this.comObj;
                    return new ReadableStream(
                      {
                        start: (s) => {
                          const i = (0, r.createPromiseCapability)();
                          return (
                            (this.streamControllers[a] = {
                              controller: s,
                              startCall: i,
                              pullCall: null,
                              cancelCall: null,
                              isClosed: !1,
                            }),
                            this._postMessage(
                              {
                                sourceName: o,
                                targetName: l,
                                action: e,
                                streamId: a,
                                data: t,
                                desiredSize: s.desiredSize,
                              },
                              n
                            ),
                            i.promise
                          );
                        },
                        pull: (e) => {
                          const t = (0, r.createPromiseCapability)();
                          return (
                            (this.streamControllers[a].pullCall = t),
                            c.postMessage({
                              sourceName: o,
                              targetName: l,
                              stream: d,
                              streamId: a,
                              desiredSize: e.desiredSize,
                            }),
                            t.promise
                          );
                        },
                        cancel: (e) => {
                          (0, r.assert)(
                            e instanceof Error,
                            "cancel must have a valid reason"
                          );
                          const t = (0, r.createPromiseCapability)();
                          return (
                            (this.streamControllers[a].cancelCall = t),
                            (this.streamControllers[a].isClosed = !0),
                            c.postMessage({
                              sourceName: o,
                              targetName: l,
                              stream: i,
                              streamId: a,
                              reason: g(e),
                            }),
                            t.promise
                          );
                        },
                      },
                      s
                    );
                  }
                  _createStreamSink(e) {
                    const t = this,
                      s = this.actionHandler[e.action],
                      n = e.streamId,
                      a = this.sourceName,
                      i = e.sourceName,
                      o = this.comObj,
                      d = {
                        enqueue(e, s = 1, o) {
                          if (this.isCancelled) return;
                          const l = this.desiredSize;
                          (this.desiredSize -= s),
                            l > 0 &&
                              this.desiredSize <= 0 &&
                              ((this.sinkCapability = (0,
                              r.createPromiseCapability)()),
                              (this.ready = this.sinkCapability.promise)),
                            t._postMessage(
                              {
                                sourceName: a,
                                targetName: i,
                                stream: c,
                                streamId: n,
                                chunk: e,
                              },
                              o
                            );
                        },
                        close() {
                          this.isCancelled ||
                            ((this.isCancelled = !0),
                            o.postMessage({
                              sourceName: a,
                              targetName: i,
                              stream: l,
                              streamId: n,
                            }),
                            delete t.streamSinks[n]);
                        },
                        error(e) {
                          (0, r.assert)(
                            e instanceof Error,
                            "error must have a valid reason"
                          ),
                            this.isCancelled ||
                              ((this.isCancelled = !0),
                              o.postMessage({
                                sourceName: a,
                                targetName: i,
                                stream: h,
                                streamId: n,
                                reason: g(e),
                              }));
                        },
                        sinkCapability: (0, r.createPromiseCapability)(),
                        onPull: null,
                        onCancel: null,
                        isCancelled: !1,
                        desiredSize: e.desiredSize,
                        ready: null,
                      };
                    d.sinkCapability.resolve(),
                      (d.ready = d.sinkCapability.promise),
                      (this.streamSinks[n] = d),
                      new Promise(function (t) {
                        t(s(e.data, d));
                      }).then(
                        function () {
                          o.postMessage({
                            sourceName: a,
                            targetName: i,
                            stream: p,
                            streamId: n,
                            success: !0,
                          });
                        },
                        function (e) {
                          o.postMessage({
                            sourceName: a,
                            targetName: i,
                            stream: p,
                            streamId: n,
                            reason: g(e),
                          });
                        }
                      );
                  }
                  _processStreamMessage(e) {
                    const t = e.streamId,
                      s = this.sourceName,
                      n = e.sourceName,
                      a = this.comObj;
                    switch (e.stream) {
                      case p:
                        e.success
                          ? this.streamControllers[t].startCall.resolve()
                          : this.streamControllers[t].startCall.reject(
                              g(e.reason)
                            );
                        break;
                      case u:
                        e.success
                          ? this.streamControllers[t].pullCall.resolve()
                          : this.streamControllers[t].pullCall.reject(
                              g(e.reason)
                            );
                        break;
                      case d:
                        if (!this.streamSinks[t]) {
                          a.postMessage({
                            sourceName: s,
                            targetName: n,
                            stream: u,
                            streamId: t,
                            success: !0,
                          });
                          break;
                        }
                        this.streamSinks[t].desiredSize <= 0 &&
                          e.desiredSize > 0 &&
                          this.streamSinks[t].sinkCapability.resolve(),
                          (this.streamSinks[t].desiredSize = e.desiredSize);
                        const { onPull: f } = this.streamSinks[e.streamId];
                        new Promise(function (e) {
                          e(f && f());
                        }).then(
                          function () {
                            a.postMessage({
                              sourceName: s,
                              targetName: n,
                              stream: u,
                              streamId: t,
                              success: !0,
                            });
                          },
                          function (e) {
                            a.postMessage({
                              sourceName: s,
                              targetName: n,
                              stream: u,
                              streamId: t,
                              reason: g(e),
                            });
                          }
                        );
                        break;
                      case c:
                        if (
                          ((0, r.assert)(
                            this.streamControllers[t],
                            "enqueue should have stream controller"
                          ),
                          this.streamControllers[t].isClosed)
                        )
                          break;
                        this.streamControllers[t].controller.enqueue(e.chunk);
                        break;
                      case l:
                        if (
                          ((0, r.assert)(
                            this.streamControllers[t],
                            "close should have stream controller"
                          ),
                          this.streamControllers[t].isClosed)
                        )
                          break;
                        (this.streamControllers[t].isClosed = !0),
                          this.streamControllers[t].controller.close(),
                          this._deleteStreamController(t);
                        break;
                      case h:
                        (0, r.assert)(
                          this.streamControllers[t],
                          "error should have stream controller"
                        ),
                          this.streamControllers[t].controller.error(
                            g(e.reason)
                          ),
                          this._deleteStreamController(t);
                        break;
                      case o:
                        e.success
                          ? this.streamControllers[t].cancelCall.resolve()
                          : this.streamControllers[t].cancelCall.reject(
                              g(e.reason)
                            ),
                          this._deleteStreamController(t);
                        break;
                      case i:
                        if (!this.streamSinks[t]) break;
                        const { onCancel: m } = this.streamSinks[e.streamId];
                        new Promise(function (t) {
                          t(m && m(g(e.reason)));
                        }).then(
                          function () {
                            a.postMessage({
                              sourceName: s,
                              targetName: n,
                              stream: o,
                              streamId: t,
                              success: !0,
                            });
                          },
                          function (e) {
                            a.postMessage({
                              sourceName: s,
                              targetName: n,
                              stream: o,
                              streamId: t,
                              reason: g(e),
                            });
                          }
                        ),
                          this.streamSinks[t].sinkCapability.reject(
                            g(e.reason)
                          ),
                          (this.streamSinks[t].isCancelled = !0),
                          delete this.streamSinks[t];
                        break;
                      default:
                        throw new Error("Unexpected stream case");
                    }
                  }
                  async _deleteStreamController(e) {
                    await Promise.allSettled(
                      [
                        this.streamControllers[e].startCall,
                        this.streamControllers[e].pullCall,
                        this.streamControllers[e].cancelCall,
                      ].map(function (e) {
                        return e && e.promise;
                      })
                    ),
                      delete this.streamControllers[e];
                  }
                  _postMessage(e, t) {
                    t && this.postMessageTransfers
                      ? this.comObj.postMessage(e, t)
                      : this.comObj.postMessage(e);
                  }
                  destroy() {
                    this.comObj.removeEventListener(
                      "message",
                      this._onComObjOnMessage
                    );
                  }
                };
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Metadata = void 0);
                var r = s(2);
                t.Metadata = class {
                  constructor({ parsedData: e, rawData: t }) {
                    (this._metadataMap = e), (this._data = t);
                  }
                  getRaw() {
                    return this._data;
                  }
                  get(e) {
                    return this._metadataMap.get(e) ?? null;
                  }
                  getAll() {
                    return (0, r.objectFromMap)(this._metadataMap);
                  }
                  has(e) {
                    return this._metadataMap.has(e);
                  }
                };
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.OptionalContentConfig = void 0);
                var r = s(2);
                class n {
                  constructor(e, t) {
                    (this.visible = !0), (this.name = e), (this.intent = t);
                  }
                }
                t.OptionalContentConfig = class {
                  constructor(e) {
                    if (
                      ((this.name = null),
                      (this.creator = null),
                      (this._order = null),
                      (this._groups = new Map()),
                      null !== e)
                    ) {
                      (this.name = e.name),
                        (this.creator = e.creator),
                        (this._order = e.order);
                      for (const t of e.groups)
                        this._groups.set(t.id, new n(t.name, t.intent));
                      if ("OFF" === e.baseState)
                        for (const e of this._groups) e.visible = !1;
                      for (const t of e.on) this._groups.get(t).visible = !0;
                      for (const t of e.off) this._groups.get(t).visible = !1;
                    }
                  }
                  _evaluateVisibilityExpression(e) {
                    const t = e.length;
                    if (t < 2) return !0;
                    const s = e[0];
                    for (let n = 1; n < t; n++) {
                      const t = e[n];
                      let a;
                      if (Array.isArray(t))
                        a = this._evaluateVisibilityExpression(t);
                      else {
                        if (!this._groups.has(t))
                          return (
                            (0, r.warn)(
                              `Optional content group not found: ${t}`
                            ),
                            !0
                          );
                        a = this._groups.get(t).visible;
                      }
                      switch (s) {
                        case "And":
                          if (!a) return !1;
                          break;
                        case "Or":
                          if (a) return !0;
                          break;
                        case "Not":
                          return !a;
                        default:
                          return !0;
                      }
                    }
                    return "And" === s;
                  }
                  isVisible(e) {
                    if ("OCG" === e.type)
                      return this._groups.has(e.id)
                        ? this._groups.get(e.id).visible
                        : ((0, r.warn)(
                            `Optional content group not found: ${e.id}`
                          ),
                          !0);
                    if ("OCMD" === e.type) {
                      if (e.expression)
                        return this._evaluateVisibilityExpression(e.expression);
                      if (!e.policy || "AnyOn" === e.policy) {
                        for (const t of e.ids) {
                          if (!this._groups.has(t))
                            return (
                              (0, r.warn)(
                                `Optional content group not found: ${t}`
                              ),
                              !0
                            );
                          if (this._groups.get(t).visible) return !0;
                        }
                        return !1;
                      }
                      if ("AllOn" === e.policy) {
                        for (const t of e.ids) {
                          if (!this._groups.has(t))
                            return (
                              (0, r.warn)(
                                `Optional content group not found: ${t}`
                              ),
                              !0
                            );
                          if (!this._groups.get(t).visible) return !1;
                        }
                        return !0;
                      }
                      if ("AnyOff" === e.policy) {
                        for (const t of e.ids) {
                          if (!this._groups.has(t))
                            return (
                              (0, r.warn)(
                                `Optional content group not found: ${t}`
                              ),
                              !0
                            );
                          if (!this._groups.get(t).visible) return !0;
                        }
                        return !1;
                      }
                      if ("AllOff" === e.policy) {
                        for (const t of e.ids) {
                          if (!this._groups.has(t))
                            return (
                              (0, r.warn)(
                                `Optional content group not found: ${t}`
                              ),
                              !0
                            );
                          if (this._groups.get(t).visible) return !1;
                        }
                        return !0;
                      }
                      return (
                        (0, r.warn)(
                          `Unknown optional content policy ${e.policy}.`
                        ),
                        !0
                      );
                    }
                    return (0, r.warn)(`Unknown group type ${e.type}.`), !0;
                  }
                  setVisibility(e, t = !0) {
                    this._groups.has(e)
                      ? (this._groups.get(e).visible = !!t)
                      : (0, r.warn)(`Optional content group not found: ${e}`);
                  }
                  getOrder() {
                    return this._groups.size
                      ? this._order
                        ? this._order.slice()
                        : Array.from(this._groups.keys())
                      : null;
                  }
                  getGroups() {
                    return this._groups.size > 0
                      ? (0, r.objectFromMap)(this._groups)
                      : null;
                  }
                  getGroup(e) {
                    return this._groups.get(e) || null;
                  }
                };
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.PDFDataTransportStream = void 0);
                var r = s(2),
                  n = s(1);
                t.PDFDataTransportStream = class {
                  constructor(e, t) {
                    (0, r.assert)(
                      t,
                      'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'
                    ),
                      (this._queuedChunks = []),
                      (this._progressiveDone = e.progressiveDone || !1),
                      (this._contentDispositionFilename =
                        e.contentDispositionFilename || null);
                    const s = e.initialData;
                    if (s?.length > 0) {
                      const e = new Uint8Array(s).buffer;
                      this._queuedChunks.push(e);
                    }
                    (this._pdfDataRangeTransport = t),
                      (this._isStreamingSupported = !e.disableStream),
                      (this._isRangeSupported = !e.disableRange),
                      (this._contentLength = e.length),
                      (this._fullRequestReader = null),
                      (this._rangeReaders = []),
                      this._pdfDataRangeTransport.addRangeListener((e, t) => {
                        this._onReceiveData({ begin: e, chunk: t });
                      }),
                      this._pdfDataRangeTransport.addProgressListener(
                        (e, t) => {
                          this._onProgress({ loaded: e, total: t });
                        }
                      ),
                      this._pdfDataRangeTransport.addProgressiveReadListener(
                        (e) => {
                          this._onReceiveData({ chunk: e });
                        }
                      ),
                      this._pdfDataRangeTransport.addProgressiveDoneListener(
                        () => {
                          this._onProgressiveDone();
                        }
                      ),
                      this._pdfDataRangeTransport.transportReady();
                  }
                  _onReceiveData(e) {
                    const t = new Uint8Array(e.chunk).buffer;
                    if (void 0 === e.begin)
                      this._fullRequestReader
                        ? this._fullRequestReader._enqueue(t)
                        : this._queuedChunks.push(t);
                    else {
                      const s = this._rangeReaders.some(function (s) {
                        return s._begin === e.begin && (s._enqueue(t), !0);
                      });
                      (0, r.assert)(
                        s,
                        "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."
                      );
                    }
                  }
                  get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0;
                  }
                  _onProgress(e) {
                    if (void 0 === e.total) {
                      const t = this._rangeReaders[0];
                      t?.onProgress && t.onProgress({ loaded: e.loaded });
                    } else {
                      const t = this._fullRequestReader;
                      t?.onProgress &&
                        t.onProgress({ loaded: e.loaded, total: e.total });
                    }
                  }
                  _onProgressiveDone() {
                    this._fullRequestReader &&
                      this._fullRequestReader.progressiveDone(),
                      (this._progressiveDone = !0);
                  }
                  _removeRangeReader(e) {
                    const t = this._rangeReaders.indexOf(e);
                    t >= 0 && this._rangeReaders.splice(t, 1);
                  }
                  getFullReader() {
                    (0, r.assert)(
                      !this._fullRequestReader,
                      "PDFDataTransportStream.getFullReader can only be called once."
                    );
                    const e = this._queuedChunks;
                    return (
                      (this._queuedChunks = null),
                      new a(
                        this,
                        e,
                        this._progressiveDone,
                        this._contentDispositionFilename
                      )
                    );
                  }
                  getRangeReader(e, t) {
                    if (t <= this._progressiveDataLength) return null;
                    const s = new i(this, e, t);
                    return (
                      this._pdfDataRangeTransport.requestDataRange(e, t),
                      this._rangeReaders.push(s),
                      s
                    );
                  }
                  cancelAllRequests(e) {
                    this._fullRequestReader &&
                      this._fullRequestReader.cancel(e);
                    for (const t of this._rangeReaders.slice(0)) t.cancel(e);
                    this._pdfDataRangeTransport.abort();
                  }
                };
                class a {
                  constructor(e, t, s = !1, r = null) {
                    (this._stream = e),
                      (this._done = s || !1),
                      (this._filename = (0, n.isPdfFile)(r) ? r : null),
                      (this._queuedChunks = t || []),
                      (this._loaded = 0);
                    for (const n of this._queuedChunks)
                      this._loaded += n.byteLength;
                    (this._requests = []),
                      (this._headersReady = Promise.resolve()),
                      (e._fullRequestReader = this),
                      (this.onProgress = null);
                  }
                  _enqueue(e) {
                    this._done ||
                      (this._requests.length > 0
                        ? this._requests.shift().resolve({ value: e, done: !1 })
                        : this._queuedChunks.push(e),
                      (this._loaded += e.byteLength));
                  }
                  get headersReady() {
                    return this._headersReady;
                  }
                  get filename() {
                    return this._filename;
                  }
                  get isRangeSupported() {
                    return this._stream._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._stream._isStreamingSupported;
                  }
                  get contentLength() {
                    return this._stream._contentLength;
                  }
                  async read() {
                    if (this._queuedChunks.length > 0)
                      return { value: this._queuedChunks.shift(), done: !1 };
                    if (this._done) return { value: void 0, done: !0 };
                    const e = (0, r.createPromiseCapability)();
                    return this._requests.push(e), e.promise;
                  }
                  cancel(e) {
                    this._done = !0;
                    for (const t of this._requests)
                      t.resolve({ value: void 0, done: !0 });
                    this._requests.length = 0;
                  }
                  progressiveDone() {
                    this._done || (this._done = !0);
                  }
                }
                class i {
                  constructor(e, t, s) {
                    (this._stream = e),
                      (this._begin = t),
                      (this._end = s),
                      (this._queuedChunk = null),
                      (this._requests = []),
                      (this._done = !1),
                      (this.onProgress = null);
                  }
                  _enqueue(e) {
                    if (!this._done) {
                      if (0 === this._requests.length) this._queuedChunk = e;
                      else {
                        this._requests.shift().resolve({ value: e, done: !1 });
                        for (const e of this._requests)
                          e.resolve({ value: void 0, done: !0 });
                        this._requests.length = 0;
                      }
                      (this._done = !0), this._stream._removeRangeReader(this);
                    }
                  }
                  get isStreamingSupported() {
                    return !1;
                  }
                  async read() {
                    if (this._queuedChunk) {
                      const e = this._queuedChunk;
                      return (this._queuedChunk = null), { value: e, done: !1 };
                    }
                    if (this._done) return { value: void 0, done: !0 };
                    const e = (0, r.createPromiseCapability)();
                    return this._requests.push(e), e.promise;
                  }
                  cancel(e) {
                    this._done = !0;
                    for (const t of this._requests)
                      t.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0),
                      this._stream._removeRangeReader(this);
                  }
                }
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.AnnotationLayer = void 0);
                var r = s(1),
                  n = s(2),
                  a = s(9),
                  i = s(18);
                class o {
                  static create(e) {
                    switch (e.data.annotationType) {
                      case n.AnnotationType.LINK:
                        return new c(e);
                      case n.AnnotationType.TEXT:
                        return new h(e);
                      case n.AnnotationType.WIDGET:
                        switch (e.data.fieldType) {
                          case "Tx":
                            return new u(e);
                          case "Btn":
                            return e.data.radioButton
                              ? new g(e)
                              : e.data.checkBox
                              ? new p(e)
                              : new f(e);
                          case "Ch":
                            return new m(e);
                        }
                        return new d(e);
                      case n.AnnotationType.POPUP:
                        return new _(e);
                      case n.AnnotationType.FREETEXT:
                        return new b(e);
                      case n.AnnotationType.LINE:
                        return new y(e);
                      case n.AnnotationType.SQUARE:
                        return new S(e);
                      case n.AnnotationType.CIRCLE:
                        return new v(e);
                      case n.AnnotationType.POLYLINE:
                        return new x(e);
                      case n.AnnotationType.CARET:
                        return new k(e);
                      case n.AnnotationType.INK:
                        return new P(e);
                      case n.AnnotationType.POLYGON:
                        return new C(e);
                      case n.AnnotationType.HIGHLIGHT:
                        return new w(e);
                      case n.AnnotationType.UNDERLINE:
                        return new R(e);
                      case n.AnnotationType.SQUIGGLY:
                        return new T(e);
                      case n.AnnotationType.STRIKEOUT:
                        return new F(e);
                      case n.AnnotationType.STAMP:
                        return new E(e);
                      case n.AnnotationType.FILEATTACHMENT:
                        return new M(e);
                      default:
                        return new l(e);
                    }
                  }
                }
                class l {
                  constructor(
                    e,
                    {
                      isRenderable: t = !1,
                      ignoreBorder: s = !1,
                      createQuadrilaterals: r = !1,
                    } = {}
                  ) {
                    (this.isRenderable = t),
                      (this.data = e.data),
                      (this.layer = e.layer),
                      (this.page = e.page),
                      (this.viewport = e.viewport),
                      (this.linkService = e.linkService),
                      (this.downloadManager = e.downloadManager),
                      (this.imageResourcesPath = e.imageResourcesPath),
                      (this.renderInteractiveForms = e.renderInteractiveForms),
                      (this.svgFactory = e.svgFactory),
                      (this.annotationStorage = e.annotationStorage),
                      (this.enableScripting = e.enableScripting),
                      (this.hasJSActions = e.hasJSActions),
                      (this._mouseState = e.mouseState),
                      t && (this.container = this._createContainer(s)),
                      r &&
                        (this.quadrilaterals = this._createQuadrilaterals(s));
                  }
                  _createContainer(e = !1) {
                    const t = this.data,
                      s = this.page,
                      r = this.viewport,
                      a = document.createElement("section");
                    let i = t.rect[2] - t.rect[0],
                      o = t.rect[3] - t.rect[1];
                    a.setAttribute("data-annotation-id", t.id);
                    const l = n.Util.normalizeRect([
                      t.rect[0],
                      s.view[3] - t.rect[1] + s.view[1],
                      t.rect[2],
                      s.view[3] - t.rect[3] + s.view[1],
                    ]);
                    if (
                      ((a.style.transform = `matrix(${r.transform.join(",")})`),
                      (a.style.transformOrigin = `${-l[0]}px ${-l[1]}px`),
                      !e && t.borderStyle.width > 0)
                    ) {
                      (a.style.borderWidth = `${t.borderStyle.width}px`),
                        t.borderStyle.style !==
                          n.AnnotationBorderStyleType.UNDERLINE &&
                          ((i -= 2 * t.borderStyle.width),
                          (o -= 2 * t.borderStyle.width));
                      const e = t.borderStyle.horizontalCornerRadius,
                        s = t.borderStyle.verticalCornerRadius;
                      if (e > 0 || s > 0) {
                        const t = `${e}px / ${s}px`;
                        a.style.borderRadius = t;
                      }
                      switch (t.borderStyle.style) {
                        case n.AnnotationBorderStyleType.SOLID:
                          a.style.borderStyle = "solid";
                          break;
                        case n.AnnotationBorderStyleType.DASHED:
                          a.style.borderStyle = "dashed";
                          break;
                        case n.AnnotationBorderStyleType.BEVELED:
                          (0, n.warn)("Unimplemented border style: beveled");
                          break;
                        case n.AnnotationBorderStyleType.INSET:
                          (0, n.warn)("Unimplemented border style: inset");
                          break;
                        case n.AnnotationBorderStyleType.UNDERLINE:
                          a.style.borderBottomStyle = "solid";
                      }
                      t.color
                        ? (a.style.borderColor = n.Util.makeHexColor(
                            0 | t.color[0],
                            0 | t.color[1],
                            0 | t.color[2]
                          ))
                        : (a.style.borderWidth = 0);
                    }
                    return (
                      (a.style.left = `${l[0]}px`),
                      (a.style.top = `${l[1]}px`),
                      (a.style.width = `${i}px`),
                      (a.style.height = `${o}px`),
                      a
                    );
                  }
                  _createQuadrilaterals(e = !1) {
                    if (!this.data.quadPoints) return null;
                    const t = [],
                      s = this.data.rect;
                    for (const r of this.data.quadPoints)
                      (this.data.rect = [r[2].x, r[2].y, r[1].x, r[1].y]),
                        t.push(this._createContainer(e));
                    return (this.data.rect = s), t;
                  }
                  _createPopup(e, t) {
                    let s = this.container;
                    this.quadrilaterals &&
                      ((e = e || this.quadrilaterals),
                      (s = this.quadrilaterals[0])),
                      e ||
                        (((e = document.createElement("div")).style.height =
                          s.style.height),
                        (e.style.width = s.style.width),
                        s.appendChild(e));
                    const r = new A({
                      container: s,
                      trigger: e,
                      color: t.color,
                      title: t.title,
                      modificationDate: t.modificationDate,
                      contents: t.contents,
                      hideWrapper: !0,
                    }).render();
                    (r.style.left = s.style.width), s.appendChild(r);
                  }
                  _renderQuadrilaterals(e) {
                    for (const t of this.quadrilaterals) t.className = e;
                    return this.quadrilaterals;
                  }
                  render() {
                    (0, n.unreachable)(
                      "Abstract method `AnnotationElement.render` called"
                    );
                  }
                }
                class c extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.url ||
                        e.data.dest ||
                        e.data.action ||
                        e.data.isTooltipOnly ||
                        (e.data.actions &&
                          (e.data.actions.Action ||
                            e.data.actions["Mouse Up"] ||
                            e.data.actions["Mouse Down"]))
                      ),
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    const { data: e, linkService: t } = this,
                      s = document.createElement("a");
                    return (
                      e.url
                        ? (0, r.addLinkAttributes)(s, {
                            url: e.url,
                            target: e.newWindow
                              ? r.LinkTarget.BLANK
                              : t.externalLinkTarget,
                            rel: t.externalLinkRel,
                            enabled: t.externalLinkEnabled,
                          })
                        : e.action
                        ? this._bindNamedAction(s, e.action)
                        : e.dest
                        ? this._bindLink(s, e.dest)
                        : e.actions &&
                          (e.actions.Action ||
                            e.actions["Mouse Up"] ||
                            e.actions["Mouse Down"]) &&
                          this.enableScripting &&
                          this.hasJSActions
                        ? this._bindJSAction(s, e)
                        : this._bindLink(s, ""),
                      this.quadrilaterals
                        ? this._renderQuadrilaterals("linkAnnotation").map(
                            (e, t) => {
                              const r = 0 === t ? s : s.cloneNode();
                              return e.appendChild(r), e;
                            }
                          )
                        : ((this.container.className = "linkAnnotation"),
                          this.container.appendChild(s),
                          this.container)
                    );
                  }
                  _bindLink(e, t) {
                    (e.href = this.linkService.getDestinationHash(t)),
                      (e.onclick = () => (
                        t && this.linkService.goToDestination(t), !1
                      )),
                      (t || "" === t) && (e.className = "internalLink");
                  }
                  _bindNamedAction(e, t) {
                    (e.href = this.linkService.getAnchorUrl("")),
                      (e.onclick = () => (
                        this.linkService.executeNamedAction(t), !1
                      )),
                      (e.className = "internalLink");
                  }
                  _bindJSAction(e, t) {
                    e.href = this.linkService.getAnchorUrl("");
                    const s = new Map([
                      ["Action", "onclick"],
                      ["Mouse Up", "onmouseup"],
                      ["Mouse Down", "onmousedown"],
                    ]);
                    for (const r of Object.keys(t.actions)) {
                      const n = s.get(r);
                      n &&
                        (e[n] = () => (
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            { source: this, detail: { id: t.id, name: r } }
                          ),
                          !1
                        ));
                    }
                    e.className = "internalLink";
                  }
                }
                class h extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                    });
                  }
                  render() {
                    this.container.className = "textAnnotation";
                    const e = document.createElement("img");
                    return (
                      (e.style.height = this.container.style.height),
                      (e.style.width = this.container.style.width),
                      (e.src =
                        this.imageResourcesPath +
                        "annotation-" +
                        this.data.name.toLowerCase() +
                        ".svg"),
                      (e.alt = "[{{type}} Annotation]"),
                      (e.dataset.l10nId = "text_annotation_type"),
                      (e.dataset.l10nArgs = JSON.stringify({
                        type: this.data.name,
                      })),
                      this.data.hasPopup || this._createPopup(e, this.data),
                      this.container.appendChild(e),
                      this.container
                    );
                  }
                }
                class d extends l {
                  render() {
                    return (
                      this.data.alternativeText &&
                        (this.container.title = this.data.alternativeText),
                      this.container
                    );
                  }
                  _getKeyModifier(e) {
                    return (
                      (navigator.platform.includes("Win") && e.ctrlKey) ||
                      (navigator.platform.includes("Mac") && e.metaKey)
                    );
                  }
                  _setEventListener(e, t, s, r) {
                    t.includes("mouse")
                      ? e.addEventListener(t, (e) => {
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            {
                              source: this,
                              detail: {
                                id: this.data.id,
                                name: s,
                                value: r(e),
                                shift: e.shiftKey,
                                modifier: this._getKeyModifier(e),
                              },
                            }
                          );
                        })
                      : e.addEventListener(t, (e) => {
                          this.linkService.eventBus?.dispatch(
                            "dispatcheventinsandbox",
                            {
                              source: this,
                              detail: {
                                id: this.data.id,
                                name: s,
                                value: e.target.checked,
                              },
                            }
                          );
                        });
                  }
                  _setEventListeners(e, t, s) {
                    for (const [r, n] of t)
                      ("Action" === n || this.data.actions?.[n]) &&
                        this._setEventListener(e, r, n, s);
                  }
                  _dispatchEventFromSandbox(e, t) {
                    const s = (e, t, s) => {
                        const r = s.detail[e];
                        s.target.style[t] = i.ColorConverters[`${r[0]}_HTML`](
                          r.slice(1)
                        );
                      },
                      r = {
                        display: (e) => {
                          const t = e.detail.display % 2 === 1;
                          (e.target.style.visibility = t
                            ? "hidden"
                            : "visible"),
                            this.annotationStorage.setValue(this.data.id, {
                              hidden: t,
                              print:
                                0 === e.detail.display ||
                                3 === e.detail.display,
                            });
                        },
                        print: (e) => {
                          this.annotationStorage.setValue(this.data.id, {
                            print: e.detail.print,
                          });
                        },
                        hidden: (e) => {
                          (e.target.style.visibility = e.detail.hidden
                            ? "hidden"
                            : "visible"),
                            this.annotationStorage.setValue(this.data.id, {
                              hidden: e.detail.hidden,
                            });
                        },
                        focus: (e) => {
                          setTimeout(
                            () => e.target.focus({ preventScroll: !1 }),
                            0
                          );
                        },
                        userName: (e) => {
                          e.target.title = e.detail.userName;
                        },
                        readonly: (e) => {
                          e.detail.readonly
                            ? e.target.setAttribute("readonly", "")
                            : e.target.removeAttribute("readonly");
                        },
                        required: (e) => {
                          e.detail.required
                            ? e.target.setAttribute("required", "")
                            : e.target.removeAttribute("required");
                        },
                        bgColor: (e) => {
                          s("bgColor", "backgroundColor", e);
                        },
                        fillColor: (e) => {
                          s("fillColor", "backgroundColor", e);
                        },
                        fgColor: (e) => {
                          s("fgColor", "color", e);
                        },
                        textColor: (e) => {
                          s("textColor", "color", e);
                        },
                        borderColor: (e) => {
                          s("borderColor", "borderColor", e);
                        },
                        strokeColor: (e) => {
                          s("strokeColor", "borderColor", e);
                        },
                      };
                    for (const n of Object.keys(t.detail)) {
                      const s = e[n] || r[n];
                      s && s(t);
                    }
                  }
                }
                class u extends d {
                  constructor(e) {
                    super(e, {
                      isRenderable:
                        e.renderInteractiveForms ||
                        (!e.data.hasAppearance && !!e.data.fieldValue),
                    });
                  }
                  setPropertyOnSiblings(e, t, s, r) {
                    const n = this.annotationStorage;
                    for (const a of document.getElementsByName(e.name))
                      if (a !== e) {
                        a[t] = s;
                        const e = Object.create(null);
                        (e[r] = s), n.setValue(a.getAttribute("id"), e);
                      }
                  }
                  render() {
                    const e = this.annotationStorage,
                      t = this.data.id;
                    this.container.className = "textWidgetAnnotation";
                    let s = null;
                    if (this.renderInteractiveForms) {
                      const r = e.getValue(t, {
                          value: this.data.fieldValue,
                          valueAsString: this.data.fieldValue,
                        }),
                        n = r.valueAsString || r.value || "",
                        a = {
                          userValue: null,
                          formattedValue: null,
                          beforeInputSelectionRange: null,
                          beforeInputValue: null,
                        };
                      this.data.multiLine
                        ? ((s = document.createElement("textarea")),
                          (s.textContent = n))
                        : ((s = document.createElement("input")),
                          (s.type = "text"),
                          s.setAttribute("value", n)),
                        (a.userValue = n),
                        s.setAttribute("id", t),
                        s.addEventListener("input", (r) => {
                          e.setValue(t, { value: r.target.value }),
                            this.setPropertyOnSiblings(
                              s,
                              "value",
                              r.target.value,
                              "value"
                            );
                        });
                      let i = (e) => {
                        a.formattedValue && (e.target.value = a.formattedValue),
                          (e.target.scrollLeft = 0),
                          (a.beforeInputSelectionRange = null);
                      };
                      if (this.enableScripting && this.hasJSActions) {
                        s.addEventListener("focus", (e) => {
                          a.userValue && (e.target.value = a.userValue);
                        }),
                          s.addEventListener("updatefromsandbox", (s) => {
                            const r = {
                              value(s) {
                                (a.userValue = s.detail.value || ""),
                                  e.setValue(t, {
                                    value: a.userValue.toString(),
                                  }),
                                  a.formattedValue ||
                                    (s.target.value = a.userValue);
                              },
                              valueAsString(s) {
                                (a.formattedValue =
                                  s.detail.valueAsString || ""),
                                  s.target !== document.activeElement &&
                                    (s.target.value = a.formattedValue),
                                  e.setValue(t, {
                                    formattedValue: a.formattedValue,
                                  });
                              },
                              selRange(e) {
                                const [t, s] = e.detail.selRange;
                                t >= 0 &&
                                  s < e.target.value.length &&
                                  e.target.setSelectionRange(t, s);
                              },
                            };
                            this._dispatchEventFromSandbox(r, s);
                          }),
                          s.addEventListener("keydown", (e) => {
                            a.beforeInputValue = e.target.value;
                            let s = -1;
                            "Escape" === e.key
                              ? (s = 0)
                              : "Enter" === e.key
                              ? (s = 2)
                              : "Tab" === e.key && (s = 3),
                              -1 !== s &&
                                ((a.userValue = e.target.value),
                                this.linkService.eventBus?.dispatch(
                                  "dispatcheventinsandbox",
                                  {
                                    source: this,
                                    detail: {
                                      id: t,
                                      name: "Keystroke",
                                      value: e.target.value,
                                      willCommit: !0,
                                      commitKey: s,
                                      selStart: e.target.selectionStart,
                                      selEnd: e.target.selectionEnd,
                                    },
                                  }
                                ));
                          });
                        const r = i;
                        (i = null),
                          s.addEventListener("blur", (e) => {
                            this._mouseState.isDown &&
                              ((a.userValue = e.target.value),
                              this.linkService.eventBus?.dispatch(
                                "dispatcheventinsandbox",
                                {
                                  source: this,
                                  detail: {
                                    id: t,
                                    name: "Keystroke",
                                    value: e.target.value,
                                    willCommit: !0,
                                    commitKey: 1,
                                    selStart: e.target.selectionStart,
                                    selEnd: e.target.selectionEnd,
                                  },
                                }
                              )),
                              r(e);
                          }),
                          s.addEventListener("mousedown", (e) => {
                            (a.beforeInputValue = e.target.value),
                              (a.beforeInputSelectionRange = null);
                          }),
                          s.addEventListener("keyup", (e) => {
                            e.target.selectionStart === e.target.selectionEnd &&
                              (a.beforeInputSelectionRange = null);
                          }),
                          s.addEventListener("select", (e) => {
                            a.beforeInputSelectionRange = [
                              e.target.selectionStart,
                              e.target.selectionEnd,
                            ];
                          }),
                          this.data.actions?.Keystroke &&
                            s.addEventListener("input", (e) => {
                              let s = -1,
                                r = -1;
                              a.beforeInputSelectionRange &&
                                ([s, r] = a.beforeInputSelectionRange),
                                this.linkService.eventBus?.dispatch(
                                  "dispatcheventinsandbox",
                                  {
                                    source: this,
                                    detail: {
                                      id: t,
                                      name: "Keystroke",
                                      value: a.beforeInputValue,
                                      change: e.data,
                                      willCommit: !1,
                                      selStart: s,
                                      selEnd: r,
                                    },
                                  }
                                );
                            }),
                          this._setEventListeners(
                            s,
                            [
                              ["focus", "Focus"],
                              ["blur", "Blur"],
                              ["mousedown", "Mouse Down"],
                              ["mouseenter", "Mouse Enter"],
                              ["mouseleave", "Mouse Exit"],
                              ["mouseup", "Mouse Up"],
                            ],
                            (e) => e.target.value
                          );
                      }
                      if (
                        (i && s.addEventListener("blur", i),
                        (s.disabled = this.data.readOnly),
                        (s.name = this.data.fieldName),
                        null !== this.data.maxLen &&
                          (s.maxLength = this.data.maxLen),
                        this.data.comb)
                      ) {
                        const e =
                          (this.data.rect[2] - this.data.rect[0]) /
                          this.data.maxLen;
                        s.classList.add("comb"),
                          (s.style.letterSpacing = `calc(${e}px - 1ch)`);
                      }
                    } else
                      (s = document.createElement("div")),
                        (s.textContent = this.data.fieldValue),
                        (s.style.verticalAlign = "middle"),
                        (s.style.display = "table-cell");
                    return (
                      this._setTextStyle(s),
                      this.container.appendChild(s),
                      this.container
                    );
                  }
                  _setTextStyle(e) {
                    const t = ["left", "center", "right"],
                      { fontSize: s, fontColor: r } =
                        this.data.defaultAppearanceData,
                      a = e.style;
                    s && (a.fontSize = `${s}px`),
                      (a.color = n.Util.makeHexColor(r[0], r[1], r[2])),
                      null !== this.data.textAlignment &&
                        (a.textAlign = t[this.data.textAlignment]);
                  }
                }
                class p extends d {
                  constructor(e) {
                    super(e, { isRenderable: e.renderInteractiveForms });
                  }
                  render() {
                    const e = this.annotationStorage,
                      t = this.data,
                      s = t.id;
                    let r = e.getValue(s, {
                      value:
                        t.fieldValue &&
                        ((t.exportValue && t.exportValue === t.fieldValue) ||
                          (!t.exportValue && "Off" !== t.fieldValue)),
                    }).value;
                    "string" === typeof r &&
                      ((r = "Off" !== r), e.setValue(s, { value: r })),
                      (this.container.className =
                        "buttonWidgetAnnotation checkBox");
                    const n = document.createElement("input");
                    return (
                      (n.disabled = t.readOnly),
                      (n.type = "checkbox"),
                      (n.name = this.data.fieldName),
                      r && n.setAttribute("checked", !0),
                      n.setAttribute("id", s),
                      n.addEventListener("change", function (t) {
                        const r = t.target.name;
                        for (const s of document.getElementsByName(r))
                          s !== t.target &&
                            ((s.checked = !1),
                            e.setValue(
                              s.parentNode.getAttribute("data-annotation-id"),
                              { value: !1 }
                            ));
                        e.setValue(s, { value: t.target.checked });
                      }),
                      this.enableScripting &&
                        this.hasJSActions &&
                        (n.addEventListener("updatefromsandbox", (t) => {
                          const r = {
                            value(t) {
                              (t.target.checked = "Off" !== t.detail.value),
                                e.setValue(s, { value: t.target.checked });
                            },
                          };
                          this._dispatchEventFromSandbox(r, t);
                        }),
                        this._setEventListeners(
                          n,
                          [
                            ["change", "Validate"],
                            ["change", "Action"],
                            ["focus", "Focus"],
                            ["blur", "Blur"],
                            ["mousedown", "Mouse Down"],
                            ["mouseenter", "Mouse Enter"],
                            ["mouseleave", "Mouse Exit"],
                            ["mouseup", "Mouse Up"],
                          ],
                          (e) => e.target.checked
                        )),
                      this.container.appendChild(n),
                      this.container
                    );
                  }
                }
                class g extends d {
                  constructor(e) {
                    super(e, { isRenderable: e.renderInteractiveForms });
                  }
                  render() {
                    this.container.className =
                      "buttonWidgetAnnotation radioButton";
                    const e = this.annotationStorage,
                      t = this.data,
                      s = t.id;
                    let r = e.getValue(s, {
                      value: t.fieldValue === t.buttonValue,
                    }).value;
                    "string" === typeof r &&
                      ((r = r !== t.buttonValue), e.setValue(s, { value: r }));
                    const n = document.createElement("input");
                    if (
                      ((n.disabled = t.readOnly),
                      (n.type = "radio"),
                      (n.name = t.fieldName),
                      r && n.setAttribute("checked", !0),
                      n.setAttribute("id", s),
                      n.addEventListener("change", function (t) {
                        const { target: r } = t;
                        for (const s of document.getElementsByName(r.name))
                          s !== r &&
                            e.setValue(s.getAttribute("id"), { value: !1 });
                        e.setValue(s, { value: r.checked });
                      }),
                      this.enableScripting && this.hasJSActions)
                    ) {
                      const r = t.buttonValue;
                      n.addEventListener("updatefromsandbox", (t) => {
                        const n = {
                          value(t) {
                            const n = r === t.detail.value;
                            for (const r of document.getElementsByName(
                              t.target.name
                            )) {
                              const t = r.getAttribute("id");
                              (r.checked = t === s && n),
                                e.setValue(t, { value: r.checked });
                            }
                          },
                        };
                        this._dispatchEventFromSandbox(n, t);
                      }),
                        this._setEventListeners(
                          n,
                          [
                            ["change", "Validate"],
                            ["change", "Action"],
                            ["focus", "Focus"],
                            ["blur", "Blur"],
                            ["mousedown", "Mouse Down"],
                            ["mouseenter", "Mouse Enter"],
                            ["mouseleave", "Mouse Exit"],
                            ["mouseup", "Mouse Up"],
                          ],
                          (e) => e.target.checked
                        );
                    }
                    return this.container.appendChild(n), this.container;
                  }
                }
                class f extends c {
                  render() {
                    const e = super.render();
                    return (
                      (e.className = "buttonWidgetAnnotation pushButton"),
                      this.data.alternativeText &&
                        (e.title = this.data.alternativeText),
                      e
                    );
                  }
                }
                class m extends d {
                  constructor(e) {
                    super(e, { isRenderable: e.renderInteractiveForms });
                  }
                  render() {
                    this.container.className = "choiceWidgetAnnotation";
                    const e = this.annotationStorage,
                      t = this.data.id;
                    e.getValue(t, {
                      value:
                        this.data.fieldValue.length > 0
                          ? this.data.fieldValue[0]
                          : void 0,
                    });
                    const s = document.createElement("select");
                    (s.disabled = this.data.readOnly),
                      (s.name = this.data.fieldName),
                      s.setAttribute("id", t),
                      this.data.combo ||
                        ((s.size = this.data.options.length),
                        this.data.multiSelect && (s.multiple = !0));
                    for (const a of this.data.options) {
                      const e = document.createElement("option");
                      (e.textContent = a.displayValue),
                        (e.value = a.exportValue),
                        this.data.fieldValue.includes(a.exportValue) &&
                          e.setAttribute("selected", !0),
                        s.appendChild(e);
                    }
                    const r = (e, t) => {
                        const s = t ? "value" : "textContent",
                          r = e.target.options;
                        return e.target.multiple
                          ? Array.prototype.filter
                              .call(r, (e) => e.selected)
                              .map((e) => e[s])
                          : -1 === r.selectedIndex
                          ? null
                          : r[r.selectedIndex][s];
                      },
                      n = (e) => {
                        const t = e.target.options;
                        return Array.prototype.map.call(t, (e) => ({
                          displayValue: e.textContent,
                          exportValue: e.value,
                        }));
                      };
                    return (
                      this.enableScripting && this.hasJSActions
                        ? (s.addEventListener("updatefromsandbox", (a) => {
                            const i = {
                              value(n) {
                                const a = s.options,
                                  i = n.detail.value,
                                  o = new Set(Array.isArray(i) ? i : [i]);
                                Array.prototype.forEach.call(a, (e) => {
                                  e.selected = o.has(e.value);
                                }),
                                  e.setValue(t, { value: r(n, !0) });
                              },
                              multipleSelection(e) {
                                s.multiple = !0;
                              },
                              remove(a) {
                                const i = s.options,
                                  o = a.detail.remove;
                                (i[o].selected = !1),
                                  s.remove(o),
                                  i.length > 0 &&
                                    -1 ===
                                      Array.prototype.findIndex.call(
                                        i,
                                        (e) => e.selected
                                      ) &&
                                    (i[0].selected = !0),
                                  e.setValue(t, {
                                    value: r(a, !0),
                                    items: n(a),
                                  });
                              },
                              clear(r) {
                                for (; 0 !== s.length; ) s.remove(0);
                                e.setValue(t, { value: null, items: [] });
                              },
                              insert(a) {
                                const {
                                    index: i,
                                    displayValue: o,
                                    exportValue: l,
                                  } = a.detail.insert,
                                  c = document.createElement("option");
                                (c.textContent = o),
                                  (c.value = l),
                                  s.insertBefore(c, s.children[i]),
                                  e.setValue(t, {
                                    value: r(a, !0),
                                    items: n(a),
                                  });
                              },
                              items(a) {
                                const { items: i } = a.detail;
                                for (; 0 !== s.length; ) s.remove(0);
                                for (const e of i) {
                                  const { displayValue: t, exportValue: r } = e,
                                    n = document.createElement("option");
                                  (n.textContent = t),
                                    (n.value = r),
                                    s.appendChild(n);
                                }
                                s.options.length > 0 &&
                                  (s.options[0].selected = !0),
                                  e.setValue(t, {
                                    value: r(a, !0),
                                    items: n(a),
                                  });
                              },
                              indices(s) {
                                const n = new Set(s.detail.indices),
                                  a = s.target.options;
                                Array.prototype.forEach.call(a, (e, t) => {
                                  e.selected = n.has(t);
                                }),
                                  e.setValue(t, { value: r(s, !0) });
                              },
                              editable(e) {
                                e.target.disabled = !e.detail.editable;
                              },
                            };
                            this._dispatchEventFromSandbox(i, a);
                          }),
                          s.addEventListener("input", (s) => {
                            const n = r(s, !0),
                              a = r(s, !1);
                            e.setValue(t, { value: n }),
                              this.linkService.eventBus?.dispatch(
                                "dispatcheventinsandbox",
                                {
                                  source: this,
                                  detail: {
                                    id: t,
                                    name: "Keystroke",
                                    value: a,
                                    changeEx: n,
                                    willCommit: !0,
                                    commitKey: 1,
                                    keyDown: !1,
                                  },
                                }
                              );
                          }),
                          this._setEventListeners(
                            s,
                            [
                              ["focus", "Focus"],
                              ["blur", "Blur"],
                              ["mousedown", "Mouse Down"],
                              ["mouseenter", "Mouse Enter"],
                              ["mouseleave", "Mouse Exit"],
                              ["mouseup", "Mouse Up"],
                              ["input", "Action"],
                            ],
                            (e) => e.target.checked
                          ))
                        : s.addEventListener("input", function (s) {
                            e.setValue(t, { value: r(s) });
                          }),
                      this.container.appendChild(s),
                      this.container
                    );
                  }
                }
                class _ extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !(!e.data.title && !e.data.contents),
                    });
                  }
                  render() {
                    if (
                      ((this.container.className = "popupAnnotation"),
                      [
                        "Line",
                        "Square",
                        "Circle",
                        "PolyLine",
                        "Polygon",
                        "Ink",
                      ].includes(this.data.parentType))
                    )
                      return this.container;
                    const e = `[data-annotation-id="${this.data.parentId}"]`,
                      t = this.layer.querySelectorAll(e);
                    if (0 === t.length) return this.container;
                    const s = new A({
                        container: this.container,
                        trigger: Array.from(t),
                        color: this.data.color,
                        title: this.data.title,
                        modificationDate: this.data.modificationDate,
                        contents: this.data.contents,
                      }),
                      r = this.page,
                      a = n.Util.normalizeRect([
                        this.data.parentRect[0],
                        r.view[3] - this.data.parentRect[1] + r.view[1],
                        this.data.parentRect[2],
                        r.view[3] - this.data.parentRect[3] + r.view[1],
                      ]),
                      i =
                        a[0] +
                        this.data.parentRect[2] -
                        this.data.parentRect[0],
                      o = a[1];
                    return (
                      (this.container.style.transformOrigin = `${-i}px ${-o}px`),
                      (this.container.style.left = `${i}px`),
                      (this.container.style.top = `${o}px`),
                      this.container.appendChild(s.render()),
                      this.container
                    );
                  }
                }
                class A {
                  constructor(e) {
                    (this.container = e.container),
                      (this.trigger = e.trigger),
                      (this.color = e.color),
                      (this.title = e.title),
                      (this.modificationDate = e.modificationDate),
                      (this.contents = e.contents),
                      (this.hideWrapper = e.hideWrapper || !1),
                      (this.pinned = !1);
                  }
                  render() {
                    const e = document.createElement("div");
                    (e.className = "popupWrapper"),
                      (this.hideElement = this.hideWrapper
                        ? e
                        : this.container),
                      (this.hideElement.hidden = !0);
                    const t = document.createElement("div");
                    t.className = "popup";
                    const s = this.color;
                    if (s) {
                      const e = 0.7 * (255 - s[0]) + s[0],
                        r = 0.7 * (255 - s[1]) + s[1],
                        a = 0.7 * (255 - s[2]) + s[2];
                      t.style.backgroundColor = n.Util.makeHexColor(
                        0 | e,
                        0 | r,
                        0 | a
                      );
                    }
                    const a = document.createElement("h1");
                    (a.textContent = this.title), t.appendChild(a);
                    const i = r.PDFDateString.toDateObject(
                      this.modificationDate
                    );
                    if (i) {
                      const e = document.createElement("span");
                      (e.textContent = "{{date}}, {{time}}"),
                        (e.dataset.l10nId = "annotation_date_string"),
                        (e.dataset.l10nArgs = JSON.stringify({
                          date: i.toLocaleDateString(),
                          time: i.toLocaleTimeString(),
                        })),
                        t.appendChild(e);
                    }
                    const o = this._formatContents(this.contents);
                    t.appendChild(o),
                      Array.isArray(this.trigger) ||
                        (this.trigger = [this.trigger]);
                    for (const r of this.trigger)
                      r.addEventListener("click", this._toggle.bind(this)),
                        r.addEventListener(
                          "mouseover",
                          this._show.bind(this, !1)
                        ),
                        r.addEventListener(
                          "mouseout",
                          this._hide.bind(this, !1)
                        );
                    return (
                      t.addEventListener("click", this._hide.bind(this, !0)),
                      e.appendChild(t),
                      e
                    );
                  }
                  _formatContents(e) {
                    const t = document.createElement("p"),
                      s = e.split(/(?:\r\n?|\n)/);
                    for (let r = 0, n = s.length; r < n; ++r) {
                      const e = s[r];
                      t.appendChild(document.createTextNode(e)),
                        r < n - 1 &&
                          t.appendChild(document.createElement("br"));
                    }
                    return t;
                  }
                  _toggle() {
                    this.pinned ? this._hide(!0) : this._show(!0);
                  }
                  _show(e = !1) {
                    e && (this.pinned = !0),
                      this.hideElement.hidden &&
                        ((this.hideElement.hidden = !1),
                        (this.container.style.zIndex += 1));
                  }
                  _hide(e = !0) {
                    e && (this.pinned = !1),
                      this.hideElement.hidden ||
                        this.pinned ||
                        ((this.hideElement.hidden = !0),
                        (this.container.style.zIndex -= 1));
                  }
                }
                class b extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    });
                  }
                  render() {
                    return (
                      (this.container.className = "freeTextAnnotation"),
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.container
                    );
                  }
                }
                class y extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    });
                  }
                  render() {
                    this.container.className = "lineAnnotation";
                    const e = this.data,
                      t = e.rect[2] - e.rect[0],
                      s = e.rect[3] - e.rect[1],
                      r = this.svgFactory.create(t, s),
                      n = this.svgFactory.createElement("svg:line");
                    return (
                      n.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]),
                      n.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]),
                      n.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]),
                      n.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]),
                      n.setAttribute("stroke-width", e.borderStyle.width || 1),
                      n.setAttribute("stroke", "transparent"),
                      r.appendChild(n),
                      this.container.append(r),
                      this._createPopup(n, e),
                      this.container
                    );
                  }
                }
                class S extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    });
                  }
                  render() {
                    this.container.className = "squareAnnotation";
                    const e = this.data,
                      t = e.rect[2] - e.rect[0],
                      s = e.rect[3] - e.rect[1],
                      r = this.svgFactory.create(t, s),
                      n = e.borderStyle.width,
                      a = this.svgFactory.createElement("svg:rect");
                    return (
                      a.setAttribute("x", n / 2),
                      a.setAttribute("y", n / 2),
                      a.setAttribute("width", t - n),
                      a.setAttribute("height", s - n),
                      a.setAttribute("stroke-width", n || 1),
                      a.setAttribute("stroke", "transparent"),
                      a.setAttribute("fill", "none"),
                      r.appendChild(a),
                      this.container.append(r),
                      this._createPopup(a, e),
                      this.container
                    );
                  }
                }
                class v extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    });
                  }
                  render() {
                    this.container.className = "circleAnnotation";
                    const e = this.data,
                      t = e.rect[2] - e.rect[0],
                      s = e.rect[3] - e.rect[1],
                      r = this.svgFactory.create(t, s),
                      n = e.borderStyle.width,
                      a = this.svgFactory.createElement("svg:ellipse");
                    return (
                      a.setAttribute("cx", t / 2),
                      a.setAttribute("cy", s / 2),
                      a.setAttribute("rx", t / 2 - n / 2),
                      a.setAttribute("ry", s / 2 - n / 2),
                      a.setAttribute("stroke-width", n || 1),
                      a.setAttribute("stroke", "transparent"),
                      a.setAttribute("fill", "none"),
                      r.appendChild(a),
                      this.container.append(r),
                      this._createPopup(a, e),
                      this.container
                    );
                  }
                }
                class x extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    }),
                      (this.containerClassName = "polylineAnnotation"),
                      (this.svgElementName = "svg:polyline");
                  }
                  render() {
                    this.container.className = this.containerClassName;
                    const e = this.data,
                      t = e.rect[2] - e.rect[0],
                      s = e.rect[3] - e.rect[1],
                      r = this.svgFactory.create(t, s);
                    let n = [];
                    for (const i of e.vertices) {
                      const t = i.x - e.rect[0],
                        s = e.rect[3] - i.y;
                      n.push(t + "," + s);
                    }
                    n = n.join(" ");
                    const a = this.svgFactory.createElement(
                      this.svgElementName
                    );
                    return (
                      a.setAttribute("points", n),
                      a.setAttribute("stroke-width", e.borderStyle.width || 1),
                      a.setAttribute("stroke", "transparent"),
                      a.setAttribute("fill", "none"),
                      r.appendChild(a),
                      this.container.append(r),
                      this._createPopup(a, e),
                      this.container
                    );
                  }
                }
                class C extends x {
                  constructor(e) {
                    super(e),
                      (this.containerClassName = "polygonAnnotation"),
                      (this.svgElementName = "svg:polygon");
                  }
                }
                class k extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    });
                  }
                  render() {
                    return (
                      (this.container.className = "caretAnnotation"),
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.container
                    );
                  }
                }
                class P extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    }),
                      (this.containerClassName = "inkAnnotation"),
                      (this.svgElementName = "svg:polyline");
                  }
                  render() {
                    this.container.className = this.containerClassName;
                    const e = this.data,
                      t = e.rect[2] - e.rect[0],
                      s = e.rect[3] - e.rect[1],
                      r = this.svgFactory.create(t, s);
                    for (const n of e.inkLists) {
                      let t = [];
                      for (const r of n) {
                        const s = r.x - e.rect[0],
                          n = e.rect[3] - r.y;
                        t.push(`${s},${n}`);
                      }
                      t = t.join(" ");
                      const s = this.svgFactory.createElement(
                        this.svgElementName
                      );
                      s.setAttribute("points", t),
                        s.setAttribute(
                          "stroke-width",
                          e.borderStyle.width || 1
                        ),
                        s.setAttribute("stroke", "transparent"),
                        s.setAttribute("fill", "none"),
                        this._createPopup(s, e),
                        r.appendChild(s);
                    }
                    return this.container.append(r), this.container;
                  }
                }
                class w extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.quadrilaterals
                        ? this._renderQuadrilaterals("highlightAnnotation")
                        : ((this.container.className = "highlightAnnotation"),
                          this.container)
                    );
                  }
                }
                class R extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.quadrilaterals
                        ? this._renderQuadrilaterals("underlineAnnotation")
                        : ((this.container.className = "underlineAnnotation"),
                          this.container)
                    );
                  }
                }
                class T extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.quadrilaterals
                        ? this._renderQuadrilaterals("squigglyAnnotation")
                        : ((this.container.className = "squigglyAnnotation"),
                          this.container)
                    );
                  }
                }
                class F extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                      createQuadrilaterals: !0,
                    });
                  }
                  render() {
                    return (
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.quadrilaterals
                        ? this._renderQuadrilaterals("strikeoutAnnotation")
                        : ((this.container.className = "strikeoutAnnotation"),
                          this.container)
                    );
                  }
                }
                class E extends l {
                  constructor(e) {
                    super(e, {
                      isRenderable: !!(
                        e.data.hasPopup ||
                        e.data.title ||
                        e.data.contents
                      ),
                      ignoreBorder: !0,
                    });
                  }
                  render() {
                    return (
                      (this.container.className = "stampAnnotation"),
                      this.data.hasPopup || this._createPopup(null, this.data),
                      this.container
                    );
                  }
                }
                class M extends l {
                  constructor(e) {
                    super(e, { isRenderable: !0 });
                    const { filename: t, content: s } = this.data.file;
                    (this.filename = (0, r.getFilenameFromUrl)(t)),
                      (this.content = s),
                      this.linkService.eventBus?.dispatch(
                        "fileattachmentannotation",
                        {
                          source: this,
                          id: (0, n.stringToPDFString)(t),
                          filename: t,
                          content: s,
                        }
                      );
                  }
                  render() {
                    this.container.className = "fileAttachmentAnnotation";
                    const e = document.createElement("div");
                    return (
                      (e.style.height = this.container.style.height),
                      (e.style.width = this.container.style.width),
                      e.addEventListener("dblclick", this._download.bind(this)),
                      this.data.hasPopup ||
                        (!this.data.title && !this.data.contents) ||
                        this._createPopup(e, this.data),
                      this.container.appendChild(e),
                      this.container
                    );
                  }
                  _download() {
                    this.downloadManager?.openOrDownloadData(
                      this.container,
                      this.content,
                      this.filename
                    );
                  }
                }
                t.AnnotationLayer = class {
                  static render(e) {
                    const t = [],
                      s = [];
                    for (const r of e.annotations)
                      r &&
                        (r.annotationType !== n.AnnotationType.POPUP
                          ? t.push(r)
                          : s.push(r));
                    s.length && t.push(...s);
                    for (const n of t) {
                      const t = o.create({
                        data: n,
                        layer: e.div,
                        page: e.page,
                        viewport: e.viewport,
                        linkService: e.linkService,
                        downloadManager: e.downloadManager,
                        imageResourcesPath: e.imageResourcesPath || "",
                        renderInteractiveForms: !1 !== e.renderInteractiveForms,
                        svgFactory: new r.DOMSVGFactory(),
                        annotationStorage:
                          e.annotationStorage || new a.AnnotationStorage(),
                        enableScripting: e.enableScripting,
                        hasJSActions: e.hasJSActions,
                        mouseState: e.mouseState || { isDown: !1 },
                      });
                      if (t.isRenderable) {
                        const s = t.render();
                        if (
                          (n.hidden && (s.style.visibility = "hidden"),
                          Array.isArray(s))
                        )
                          for (const t of s) e.div.appendChild(t);
                        else
                          t instanceof _
                            ? e.div.prepend(s)
                            : e.div.appendChild(s);
                      }
                    }
                  }
                  static update(e) {
                    const t = `matrix(${e.viewport.transform.join(",")})`;
                    for (const s of e.annotations) {
                      const r = e.div.querySelectorAll(
                        `[data-annotation-id="${s.id}"]`
                      );
                      if (r) for (const e of r) e.style.transform = t;
                    }
                    e.div.hidden = !1;
                  }
                };
              },
              (e, t) => {
                function s(e) {
                  return Math.floor(255 * Math.max(0, Math.min(1, e)))
                    .toString(16)
                    .padStart(2, "0");
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.ColorConverters = void 0),
                  (t.ColorConverters = class {
                    static CMYK_G([e, t, s, r]) {
                      return [
                        "G",
                        1 - Math.min(1, 0.3 * e + 0.59 * s + 0.11 * t + r),
                      ];
                    }
                    static G_CMYK([e]) {
                      return ["CMYK", 0, 0, 0, 1 - e];
                    }
                    static G_RGB([e]) {
                      return ["RGB", e, e, e];
                    }
                    static G_HTML([e]) {
                      const t = s(e);
                      return `#${t}${t}${t}`;
                    }
                    static RGB_G([e, t, s]) {
                      return ["G", 0.3 * e + 0.59 * t + 0.11 * s];
                    }
                    static RGB_HTML([e, t, r]) {
                      return `#${s(e)}${s(t)}${s(r)}`;
                    }
                    static T_HTML() {
                      return "#00000000";
                    }
                    static CMYK_RGB([e, t, s, r]) {
                      return [
                        "RGB",
                        1 - Math.min(1, e + r),
                        1 - Math.min(1, s + r),
                        1 - Math.min(1, t + r),
                      ];
                    }
                    static CMYK_HTML(e) {
                      return this.RGB_HTML(this.CMYK_RGB(e));
                    }
                    static RGB_CMYK([e, t, s]) {
                      const r = 1 - e,
                        n = 1 - t,
                        a = 1 - s;
                      return ["CMYK", r, n, a, Math.min(r, n, a)];
                    }
                  });
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.renderTextLayer = function (e) {
                    const t = new u({
                      textContent: e.textContent,
                      textContentStream: e.textContentStream,
                      container: e.container,
                      viewport: e.viewport,
                      textDivs: e.textDivs,
                      textContentItemsStr: e.textContentItemsStr,
                      enhanceTextSelection: e.enhanceTextSelection,
                    });
                    return t._render(e.timeout), t;
                  });
                var r = s(2);
                const n = 30,
                  a = new Map(),
                  i = /^\s+$/g;
                function o(e, t, s, o) {
                  const l = document.createElement("span"),
                    c = {
                      angle: 0,
                      canvasWidth: 0,
                      hasText: "" !== t.str,
                      hasEOL: t.hasEOL,
                      originalTransform: null,
                      paddingBottom: 0,
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: 0,
                      scale: 1,
                    };
                  e._textDivs.push(l);
                  const h = r.Util.transform(
                    e._viewport.transform,
                    t.transform
                  );
                  let d = Math.atan2(h[1], h[0]);
                  const u = s[t.fontName];
                  u.vertical && (d += Math.PI / 2);
                  const p = Math.hypot(h[2], h[3]),
                    g =
                      p *
                      (function (e, t) {
                        const s = a.get(e);
                        if (s) return s;
                        t.save(), (t.font = `30px ${e}`);
                        const r = t.measureText("");
                        let i = r.fontBoundingBoxAscent,
                          o = Math.abs(r.fontBoundingBoxDescent);
                        if (i) {
                          t.restore();
                          const s = i / (i + o);
                          return a.set(e, s), s;
                        }
                        (t.strokeStyle = "red"),
                          t.clearRect(0, 0, n, n),
                          t.strokeText("g", 0, 0);
                        let l = t.getImageData(0, 0, n, n).data;
                        o = 0;
                        for (let a = l.length - 1 - 3; a >= 0; a -= 4)
                          if (l[a] > 0) {
                            o = Math.ceil(a / 4 / n);
                            break;
                          }
                        t.clearRect(0, 0, n, n),
                          t.strokeText("A", 0, n),
                          (l = t.getImageData(0, 0, n, n).data),
                          (i = 0);
                        for (let a = 0, c = l.length; a < c; a += 4)
                          if (l[a] > 0) {
                            i = n - Math.floor(a / 4 / n);
                            break;
                          }
                        if ((t.restore(), i)) {
                          const t = i / (i + o);
                          return a.set(e, t), t;
                        }
                        return a.set(e, 0.8), 0.8;
                      })(u.fontFamily, o);
                  let f, m;
                  0 === d
                    ? ((f = h[4]), (m = h[5] - g))
                    : ((f = h[4] + g * Math.sin(d)),
                      (m = h[5] - g * Math.cos(d))),
                    (l.style.left = `${f}px`),
                    (l.style.top = `${m}px`),
                    (l.style.fontSize = `${p}px`),
                    (l.style.fontFamily = u.fontFamily),
                    l.setAttribute("role", "presentation"),
                    (l.textContent = t.str),
                    (l.dir = t.dir),
                    e._fontInspectorEnabled &&
                      (l.dataset.fontName = t.fontName),
                    0 !== d && (c.angle = d * (180 / Math.PI));
                  let _ = !1;
                  if (
                    t.str.length > 1 ||
                    (e._enhanceTextSelection && i.test(t.str))
                  )
                    _ = !0;
                  else if (t.transform[0] !== t.transform[3]) {
                    const e = Math.abs(t.transform[0]),
                      s = Math.abs(t.transform[3]);
                    e !== s &&
                      Math.max(e, s) / Math.min(e, s) > 1.5 &&
                      (_ = !0);
                  }
                  if (
                    (_ &&
                      (u.vertical
                        ? (c.canvasWidth = t.height * e._viewport.scale)
                        : (c.canvasWidth = t.width * e._viewport.scale)),
                    e._textDivProperties.set(l, c),
                    e._textContentStream && e._layoutText(l),
                    e._enhanceTextSelection && c.hasText)
                  ) {
                    let s = 1,
                      n = 0;
                    0 !== d && ((s = Math.cos(d)), (n = Math.sin(d)));
                    const a =
                        (u.vertical ? t.height : t.width) * e._viewport.scale,
                      i = p;
                    let o, c;
                    0 !== d
                      ? ((o = [s, n, -n, s, f, m]),
                        (c = r.Util.getAxialAlignedBoundingBox(
                          [0, 0, a, i],
                          o
                        )))
                      : (c = [f, m, f + a, m + i]),
                      e._bounds.push({
                        left: c[0],
                        top: c[1],
                        right: c[2],
                        bottom: c[3],
                        div: l,
                        size: [a, i],
                        m: o,
                      });
                  }
                }
                function l(e) {
                  if (e._canceled) return;
                  const t = e._textDivs,
                    s = e._capability,
                    r = t.length;
                  if (r > 1e5) return (e._renderingDone = !0), void s.resolve();
                  if (!e._textContentStream)
                    for (let n = 0; n < r; n++) e._layoutText(t[n]);
                  (e._renderingDone = !0), s.resolve();
                }
                function c(e, t, s) {
                  let r = 0;
                  for (let n = 0; n < s; n++) {
                    const s = e[t++];
                    s > 0 && (r = r ? Math.min(s, r) : s);
                  }
                  return r;
                }
                function h(e) {
                  const t = e._bounds,
                    s = e._viewport,
                    n = (function (e, t, s) {
                      const r = s.map(function (e, t) {
                        return {
                          x1: e.left,
                          y1: e.top,
                          x2: e.right,
                          y2: e.bottom,
                          index: t,
                          x1New: void 0,
                          x2New: void 0,
                        };
                      });
                      d(e, r);
                      const n = new Array(s.length);
                      for (const a of r) {
                        const e = a.index;
                        n[e] = {
                          left: a.x1New,
                          top: 0,
                          right: a.x2New,
                          bottom: 0,
                        };
                      }
                      s.map(function (t, s) {
                        const a = n[s],
                          i = r[s];
                        (i.x1 = t.top),
                          (i.y1 = e - a.right),
                          (i.x2 = t.bottom),
                          (i.y2 = e - a.left),
                          (i.index = s),
                          (i.x1New = void 0),
                          (i.x2New = void 0);
                      }),
                        d(t, r);
                      for (const a of r) {
                        const e = a.index;
                        (n[e].top = a.x1New), (n[e].bottom = a.x2New);
                      }
                      return n;
                    })(s.width, s.height, t);
                  for (let a = 0; a < n.length; a++) {
                    const s = t[a].div,
                      i = e._textDivProperties.get(s);
                    if (0 === i.angle) {
                      (i.paddingLeft = t[a].left - n[a].left),
                        (i.paddingTop = t[a].top - n[a].top),
                        (i.paddingRight = n[a].right - t[a].right),
                        (i.paddingBottom = n[a].bottom - t[a].bottom),
                        e._textDivProperties.set(s, i);
                      continue;
                    }
                    const o = n[a],
                      l = t[a],
                      h = l.m,
                      d = h[0],
                      u = h[1],
                      p = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size],
                      g = new Float64Array(64);
                    for (let e = 0, t = p.length; e < t; e++) {
                      const t = r.Util.applyTransform(p[e], h);
                      (g[e + 0] = d && (o.left - t[0]) / d),
                        (g[e + 4] = u && (o.top - t[1]) / u),
                        (g[e + 8] = d && (o.right - t[0]) / d),
                        (g[e + 12] = u && (o.bottom - t[1]) / u),
                        (g[e + 16] = u && (o.left - t[0]) / -u),
                        (g[e + 20] = d && (o.top - t[1]) / d),
                        (g[e + 24] = u && (o.right - t[0]) / -u),
                        (g[e + 28] = d && (o.bottom - t[1]) / d),
                        (g[e + 32] = d && (o.left - t[0]) / -d),
                        (g[e + 36] = u && (o.top - t[1]) / -u),
                        (g[e + 40] = d && (o.right - t[0]) / -d),
                        (g[e + 44] = u && (o.bottom - t[1]) / -u),
                        (g[e + 48] = u && (o.left - t[0]) / u),
                        (g[e + 52] = d && (o.top - t[1]) / -d),
                        (g[e + 56] = u && (o.right - t[0]) / u),
                        (g[e + 60] = d && (o.bottom - t[1]) / -d);
                    }
                    const f = 1 + Math.min(Math.abs(d), Math.abs(u));
                    (i.paddingLeft = c(g, 32, 16) / f),
                      (i.paddingTop = c(g, 48, 16) / f),
                      (i.paddingRight = c(g, 0, 16) / f),
                      (i.paddingBottom = c(g, 16, 16) / f),
                      e._textDivProperties.set(s, i);
                  }
                }
                function d(e, t) {
                  t.sort(function (e, t) {
                    return e.x1 - t.x1 || e.index - t.index;
                  });
                  const s = [
                    {
                      start: -1 / 0,
                      end: 1 / 0,
                      boundary: {
                        x1: -1 / 0,
                        y1: -1 / 0,
                        x2: 0,
                        y2: 1 / 0,
                        index: -1,
                        x1New: 0,
                        x2New: 0,
                      },
                    },
                  ];
                  for (const r of t) {
                    let e = 0;
                    for (; e < s.length && s[e].end <= r.y1; ) e++;
                    let t,
                      n,
                      a = s.length - 1;
                    for (; a >= 0 && s[a].start >= r.y2; ) a--;
                    let i,
                      o,
                      l = -1 / 0;
                    for (i = e; i <= a; i++) {
                      let e;
                      (t = s[i]),
                        (n = t.boundary),
                        (e =
                          n.x2 > r.x1
                            ? n.index > r.index
                              ? n.x1New
                              : r.x1
                            : void 0 === n.x2New
                            ? (n.x2 + r.x1) / 2
                            : n.x2New),
                        e > l && (l = e);
                    }
                    for (r.x1New = l, i = e; i <= a; i++)
                      (t = s[i]),
                        (n = t.boundary),
                        void 0 === n.x2New
                          ? n.x2 > r.x1
                            ? n.index > r.index && (n.x2New = n.x2)
                            : (n.x2New = l)
                          : n.x2New > l && (n.x2New = Math.max(l, n.x2));
                    const c = [];
                    let h = null;
                    for (i = e; i <= a; i++) {
                      (t = s[i]), (n = t.boundary);
                      const e = n.x2 > r.x2 ? n : r;
                      h === e
                        ? (c[c.length - 1].end = t.end)
                        : (c.push({ start: t.start, end: t.end, boundary: e }),
                          (h = e));
                    }
                    for (
                      s[e].start < r.y1 &&
                        ((c[0].start = r.y1),
                        c.unshift({
                          start: s[e].start,
                          end: r.y1,
                          boundary: s[e].boundary,
                        })),
                        r.y2 < s[a].end &&
                          ((c[c.length - 1].end = r.y2),
                          c.push({
                            start: r.y2,
                            end: s[a].end,
                            boundary: s[a].boundary,
                          })),
                        i = e;
                      i <= a;
                      i++
                    ) {
                      if (((t = s[i]), (n = t.boundary), void 0 !== n.x2New))
                        continue;
                      let r = !1;
                      for (o = e - 1; !r && o >= 0 && s[o].start >= n.y1; o--)
                        r = s[o].boundary === n;
                      for (
                        o = a + 1;
                        !r && o < s.length && s[o].end <= n.y2;
                        o++
                      )
                        r = s[o].boundary === n;
                      for (o = 0; !r && o < c.length; o++)
                        r = c[o].boundary === n;
                      r || (n.x2New = l);
                    }
                    Array.prototype.splice.apply(s, [e, a - e + 1].concat(c));
                  }
                  for (const r of s) {
                    const t = r.boundary;
                    void 0 === t.x2New && (t.x2New = Math.max(e, t.x2));
                  }
                }
                class u {
                  constructor({
                    textContent: e,
                    textContentStream: t,
                    container: s,
                    viewport: n,
                    textDivs: a,
                    textContentItemsStr: i,
                    enhanceTextSelection: o,
                  }) {
                    (this._textContent = e),
                      (this._textContentStream = t),
                      (this._container = s),
                      (this._document = s.ownerDocument),
                      (this._viewport = n),
                      (this._textDivs = a || []),
                      (this._textContentItemsStr = i || []),
                      (this._enhanceTextSelection = !!o),
                      (this._fontInspectorEnabled =
                        !!globalThis.FontInspector?.enabled),
                      (this._reader = null),
                      (this._layoutTextLastFontSize = null),
                      (this._layoutTextLastFontFamily = null),
                      (this._layoutTextCtx = null),
                      (this._textDivProperties = new WeakMap()),
                      (this._renderingDone = !1),
                      (this._canceled = !1),
                      (this._capability = (0, r.createPromiseCapability)()),
                      (this._renderTimer = null),
                      (this._bounds = []),
                      this._capability.promise
                        .finally(() => {
                          this._layoutTextCtx &&
                            ((this._layoutTextCtx.canvas.width = 0),
                            (this._layoutTextCtx.canvas.height = 0),
                            (this._layoutTextCtx = null));
                        })
                        .catch(() => {});
                  }
                  get promise() {
                    return this._capability.promise;
                  }
                  cancel() {
                    (this._canceled = !0),
                      this._reader &&
                        (this._reader.cancel(
                          new r.AbortException("TextLayer task cancelled.")
                        ),
                        (this._reader = null)),
                      null !== this._renderTimer &&
                        (clearTimeout(this._renderTimer),
                        (this._renderTimer = null)),
                      this._capability.reject(
                        new Error("TextLayer task cancelled.")
                      );
                  }
                  _processItems(e, t) {
                    for (let s = 0, r = e.length; s < r; s++)
                      if (void 0 !== e[s].str)
                        this._textContentItemsStr.push(e[s].str),
                          o(this, e[s], t, this._layoutTextCtx);
                      else if (
                        "beginMarkedContentProps" === e[s].type ||
                        "beginMarkedContent" === e[s].type
                      ) {
                        const t = this._container;
                        (this._container = document.createElement("span")),
                          this._container.classList.add("markedContent"),
                          null !== e[s].id &&
                            this._container.setAttribute("id", `${e[s].id}`),
                          t.appendChild(this._container);
                      } else
                        "endMarkedContent" === e[s].type &&
                          (this._container = this._container.parentNode);
                  }
                  _layoutText(e) {
                    const t = this._textDivProperties.get(e);
                    let s = "";
                    if (0 !== t.canvasWidth && t.hasText) {
                      const { fontSize: r, fontFamily: n } = e.style;
                      (r === this._layoutTextLastFontSize &&
                        n === this._layoutTextLastFontFamily) ||
                        ((this._layoutTextCtx.font = `${r} ${n}`),
                        (this._layoutTextLastFontSize = r),
                        (this._layoutTextLastFontFamily = n));
                      const { width: a } = this._layoutTextCtx.measureText(
                        e.textContent
                      );
                      a > 0 &&
                        ((t.scale = t.canvasWidth / a),
                        (s = `scaleX(${t.scale})`));
                    }
                    if (
                      (0 !== t.angle && (s = `rotate(${t.angle}deg) ${s}`),
                      s.length > 0 &&
                        (this._enhanceTextSelection &&
                          (t.originalTransform = s),
                        (e.style.transform = s)),
                      t.hasText && this._container.appendChild(e),
                      t.hasEOL)
                    ) {
                      const e = document.createElement("br");
                      e.setAttribute("role", "presentation"),
                        this._container.appendChild(e);
                    }
                  }
                  _render(e = 0) {
                    const t = (0, r.createPromiseCapability)();
                    let s = Object.create(null);
                    const a = this._document.createElement("canvas");
                    if (
                      ((a.height = a.width = n),
                      (a.mozOpaque = !0),
                      (this._layoutTextCtx = a.getContext("2d", { alpha: !1 })),
                      this._textContent)
                    ) {
                      const e = this._textContent.items,
                        s = this._textContent.styles;
                      this._processItems(e, s), t.resolve();
                    } else {
                      if (!this._textContentStream)
                        throw new Error(
                          'Neither "textContent" nor "textContentStream" parameters specified.'
                        );
                      {
                        const e = () => {
                          this._reader.read().then(({ value: r, done: n }) => {
                            n
                              ? t.resolve()
                              : (Object.assign(s, r.styles),
                                this._processItems(r.items, s),
                                e());
                          }, t.reject);
                        };
                        (this._reader = this._textContentStream.getReader()),
                          e();
                      }
                    }
                    t.promise.then(() => {
                      (s = null),
                        e
                          ? (this._renderTimer = setTimeout(() => {
                              l(this), (this._renderTimer = null);
                            }, e))
                          : l(this);
                    }, this._capability.reject);
                  }
                  expandTextDivs(e = !1) {
                    if (!this._enhanceTextSelection || !this._renderingDone)
                      return;
                    null !== this._bounds && (h(this), (this._bounds = null));
                    const t = [],
                      s = [];
                    for (let r = 0, n = this._textDivs.length; r < n; r++) {
                      const n = this._textDivs[r],
                        a = this._textDivProperties.get(n);
                      a.hasText &&
                        (e
                          ? ((t.length = 0),
                            (s.length = 0),
                            a.originalTransform && t.push(a.originalTransform),
                            a.paddingTop > 0
                              ? (s.push(`${a.paddingTop}px`),
                                t.push(`translateY(${-a.paddingTop}px)`))
                              : s.push(0),
                            a.paddingRight > 0
                              ? s.push(a.paddingRight / a.scale + "px")
                              : s.push(0),
                            a.paddingBottom > 0
                              ? s.push(`${a.paddingBottom}px`)
                              : s.push(0),
                            a.paddingLeft > 0
                              ? (s.push(a.paddingLeft / a.scale + "px"),
                                t.push(
                                  `translateX(${-a.paddingLeft / a.scale}px)`
                                ))
                              : s.push(0),
                            (n.style.padding = s.join(" ")),
                            t.length && (n.style.transform = t.join(" ")))
                          : ((n.style.padding = null),
                            (n.style.transform = a.originalTransform)));
                    }
                  }
                }
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.SVGGraphics = void 0);
                var r = s(2),
                  n = s(1),
                  a = s(4);
                let i = class {
                  constructor() {
                    (0, r.unreachable)("Not implemented: SVGGraphics");
                  }
                };
                t.SVGGraphics = i;
                {
                  const e = {
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fillColor: "#000000",
                    },
                    s = "http://www.w3.org/XML/1998/namespace",
                    o = "http://www.w3.org/1999/xlink",
                    l = ["butt", "round", "square"],
                    c = ["miter", "round", "bevel"],
                    h = (function () {
                      const e = new Uint8Array([
                          137, 80, 78, 71, 13, 10, 26, 10,
                        ]),
                        t = new Int32Array(256);
                      for (let r = 0; r < 256; r++) {
                        let e = r;
                        for (let t = 0; t < 8; t++)
                          e =
                            1 & e
                              ? 3988292384 ^ ((e >> 1) & 2147483647)
                              : (e >> 1) & 2147483647;
                        t[r] = e;
                      }
                      function s(e, s, r, n) {
                        let a = n;
                        const i = s.length;
                        (r[a] = (i >> 24) & 255),
                          (r[a + 1] = (i >> 16) & 255),
                          (r[a + 2] = (i >> 8) & 255),
                          (r[a + 3] = 255 & i),
                          (a += 4),
                          (r[a] = 255 & e.charCodeAt(0)),
                          (r[a + 1] = 255 & e.charCodeAt(1)),
                          (r[a + 2] = 255 & e.charCodeAt(2)),
                          (r[a + 3] = 255 & e.charCodeAt(3)),
                          (a += 4),
                          r.set(s, a),
                          (a += s.length);
                        const o = (function (e, s, r) {
                          let n = -1;
                          for (let a = s; a < r; a++) {
                            const s = 255 & (n ^ e[a]);
                            n = (n >>> 8) ^ t[s];
                          }
                          return -1 ^ n;
                        })(r, n + 4, a);
                        (r[a] = (o >> 24) & 255),
                          (r[a + 1] = (o >> 16) & 255),
                          (r[a + 2] = (o >> 8) & 255),
                          (r[a + 3] = 255 & o);
                      }
                      function n(e) {
                        let t = e.length;
                        const s = 65535,
                          r = Math.ceil(t / s),
                          n = new Uint8Array(2 + t + 5 * r + 4);
                        let a = 0;
                        (n[a++] = 120), (n[a++] = 156);
                        let i = 0;
                        for (; t > s; )
                          (n[a++] = 0),
                            (n[a++] = 255),
                            (n[a++] = 255),
                            (n[a++] = 0),
                            (n[a++] = 0),
                            n.set(e.subarray(i, i + s), a),
                            (a += s),
                            (i += s),
                            (t -= s);
                        (n[a++] = 1),
                          (n[a++] = 255 & t),
                          (n[a++] = (t >> 8) & 255),
                          (n[a++] = 255 & ~t),
                          (n[a++] = ((65535 & ~t) >> 8) & 255),
                          n.set(e.subarray(i), a),
                          (a += e.length - i);
                        const o = (function (e, t, s) {
                          let r = 1,
                            n = 0;
                          for (let a = t; a < s; ++a)
                            (r = (r + (255 & e[a])) % 65521),
                              (n = (n + r) % 65521);
                          return (n << 16) | r;
                        })(e, 0, e.length);
                        return (
                          (n[a++] = (o >> 24) & 255),
                          (n[a++] = (o >> 16) & 255),
                          (n[a++] = (o >> 8) & 255),
                          (n[a++] = 255 & o),
                          n
                        );
                      }
                      function i(t, i, o, l) {
                        const c = t.width,
                          h = t.height;
                        let d, u, p;
                        const g = t.data;
                        switch (i) {
                          case r.ImageKind.GRAYSCALE_1BPP:
                            (u = 0), (d = 1), (p = (c + 7) >> 3);
                            break;
                          case r.ImageKind.RGB_24BPP:
                            (u = 2), (d = 8), (p = 3 * c);
                            break;
                          case r.ImageKind.RGBA_32BPP:
                            (u = 6), (d = 8), (p = 4 * c);
                            break;
                          default:
                            throw new Error("invalid format");
                        }
                        const f = new Uint8Array((1 + p) * h);
                        let m = 0,
                          _ = 0;
                        for (let e = 0; e < h; ++e)
                          (f[m++] = 0),
                            f.set(g.subarray(_, _ + p), m),
                            (_ += p),
                            (m += p);
                        if (i === r.ImageKind.GRAYSCALE_1BPP && l) {
                          m = 0;
                          for (let e = 0; e < h; e++) {
                            m++;
                            for (let e = 0; e < p; e++) f[m++] ^= 255;
                          }
                        }
                        const A = new Uint8Array([
                            (c >> 24) & 255,
                            (c >> 16) & 255,
                            (c >> 8) & 255,
                            255 & c,
                            (h >> 24) & 255,
                            (h >> 16) & 255,
                            (h >> 8) & 255,
                            255 & h,
                            d,
                            u,
                            0,
                            0,
                            0,
                          ]),
                          b = (function (e) {
                            if (!a.isNodeJS) return n(e);
                            try {
                              let t;
                              t =
                                parseInt(process.versions.node) >= 8
                                  ? e
                                  : Buffer.from(e);
                              const s = __webpack_require__(2258).deflateSync(
                                t,
                                { level: 9 }
                              );
                              return s instanceof Uint8Array
                                ? s
                                : new Uint8Array(s);
                            } catch (t) {
                              (0, r.warn)(
                                "Not compressing PNG because zlib.deflateSync is unavailable: " +
                                  t
                              );
                            }
                            return n(e);
                          })(f),
                          y = e.length + 36 + A.length + b.length,
                          S = new Uint8Array(y);
                        let v = 0;
                        return (
                          S.set(e, v),
                          (v += e.length),
                          s("IHDR", A, S, v),
                          (v += 12 + A.length),
                          s("IDATA", b, S, v),
                          (v += 12 + b.length),
                          s("IEND", new Uint8Array(0), S, v),
                          (0, r.createObjectURL)(S, "image/png", o)
                        );
                      }
                      return function (e, t, s) {
                        return i(
                          e,
                          void 0 === e.kind
                            ? r.ImageKind.GRAYSCALE_1BPP
                            : e.kind,
                          t,
                          s
                        );
                      };
                    })();
                  class d {
                    constructor() {
                      (this.fontSizeScale = 1),
                        (this.fontWeight = e.fontWeight),
                        (this.fontSize = 0),
                        (this.textMatrix = r.IDENTITY_MATRIX),
                        (this.fontMatrix = r.FONT_IDENTITY_MATRIX),
                        (this.leading = 0),
                        (this.textRenderingMode = r.TextRenderingMode.FILL),
                        (this.textMatrixScale = 1),
                        (this.x = 0),
                        (this.y = 0),
                        (this.lineX = 0),
                        (this.lineY = 0),
                        (this.charSpacing = 0),
                        (this.wordSpacing = 0),
                        (this.textHScale = 1),
                        (this.textRise = 0),
                        (this.fillColor = e.fillColor),
                        (this.strokeColor = "#000000"),
                        (this.fillAlpha = 1),
                        (this.strokeAlpha = 1),
                        (this.lineWidth = 1),
                        (this.lineJoin = ""),
                        (this.lineCap = ""),
                        (this.miterLimit = 0),
                        (this.dashArray = []),
                        (this.dashPhase = 0),
                        (this.dependencies = []),
                        (this.activeClipUrl = null),
                        (this.clipGroup = null),
                        (this.maskId = "");
                    }
                    clone() {
                      return Object.create(this);
                    }
                    setCurrentPoint(e, t) {
                      (this.x = e), (this.y = t);
                    }
                  }
                  function u(e) {
                    let t = [];
                    const s = [];
                    for (const r of e)
                      "save" !== r.fn
                        ? "restore" === r.fn
                          ? (t = s.pop())
                          : t.push(r)
                        : (t.push({ fnId: 92, fn: "group", items: [] }),
                          s.push(t),
                          (t = t[t.length - 1].items));
                    return t;
                  }
                  function p(e) {
                    if (Number.isInteger(e)) return e.toString();
                    const t = e.toFixed(10);
                    let s = t.length - 1;
                    if ("0" !== t[s]) return t;
                    do {
                      s--;
                    } while ("0" === t[s]);
                    return t.substring(0, "." === t[s] ? s : s + 1);
                  }
                  function g(e) {
                    if (0 === e[4] && 0 === e[5]) {
                      if (0 === e[1] && 0 === e[2])
                        return 1 === e[0] && 1 === e[3]
                          ? ""
                          : `scale(${p(e[0])} ${p(e[3])})`;
                      if (e[0] === e[3] && e[1] === -e[2])
                        return `rotate(${p(
                          (180 * Math.acos(e[0])) / Math.PI
                        )})`;
                    } else if (
                      1 === e[0] &&
                      0 === e[1] &&
                      0 === e[2] &&
                      1 === e[3]
                    )
                      return `translate(${p(e[4])} ${p(e[5])})`;
                    return `matrix(${p(e[0])} ${p(e[1])} ${p(e[2])} ${p(
                      e[3]
                    )} ${p(e[4])} ${p(e[5])})`;
                  }
                  let f = 0,
                    m = 0,
                    _ = 0;
                  t.SVGGraphics = i = class {
                    constructor(e, t, s = !1) {
                      (this.svgFactory = new n.DOMSVGFactory()),
                        (this.current = new d()),
                        (this.transformMatrix = r.IDENTITY_MATRIX),
                        (this.transformStack = []),
                        (this.extraStack = []),
                        (this.commonObjs = e),
                        (this.objs = t),
                        (this.pendingClip = null),
                        (this.pendingEOFill = !1),
                        (this.embedFonts = !1),
                        (this.embeddedFonts = Object.create(null)),
                        (this.cssStyle = null),
                        (this.forceDataSchema = !!s),
                        (this._operatorIdMapping = []);
                      for (const n in r.OPS)
                        this._operatorIdMapping[r.OPS[n]] = n;
                    }
                    save() {
                      this.transformStack.push(this.transformMatrix);
                      const e = this.current;
                      this.extraStack.push(e), (this.current = e.clone());
                    }
                    restore() {
                      (this.transformMatrix = this.transformStack.pop()),
                        (this.current = this.extraStack.pop()),
                        (this.pendingClip = null),
                        (this.tgrp = null);
                    }
                    group(e) {
                      this.save(), this.executeOpTree(e), this.restore();
                    }
                    loadDependencies(e) {
                      const t = e.fnArray,
                        s = e.argsArray;
                      for (let n = 0, a = t.length; n < a; n++)
                        if (t[n] === r.OPS.dependency)
                          for (const e of s[n]) {
                            const t = e.startsWith("g_")
                                ? this.commonObjs
                                : this.objs,
                              s = new Promise((s) => {
                                t.get(e, s);
                              });
                            this.current.dependencies.push(s);
                          }
                      return Promise.all(this.current.dependencies);
                    }
                    transform(e, t, s, n, a, i) {
                      const o = [e, t, s, n, a, i];
                      (this.transformMatrix = r.Util.transform(
                        this.transformMatrix,
                        o
                      )),
                        (this.tgrp = null);
                    }
                    getSVG(e, t) {
                      this.viewport = t;
                      const s = this._initialize(t);
                      return this.loadDependencies(e).then(
                        () => (
                          (this.transformMatrix = r.IDENTITY_MATRIX),
                          this.executeOpTree(this.convertOpList(e)),
                          s
                        )
                      );
                    }
                    convertOpList(e) {
                      const t = this._operatorIdMapping,
                        s = e.argsArray,
                        r = e.fnArray,
                        n = [];
                      for (let a = 0, i = r.length; a < i; a++) {
                        const e = r[a];
                        n.push({ fnId: e, fn: t[e], args: s[a] });
                      }
                      return u(n);
                    }
                    executeOpTree(e) {
                      for (const t of e) {
                        const e = t.fn,
                          s = t.fnId,
                          n = t.args;
                        switch (0 | s) {
                          case r.OPS.beginText:
                            this.beginText();
                            break;
                          case r.OPS.dependency:
                            break;
                          case r.OPS.setLeading:
                            this.setLeading(n);
                            break;
                          case r.OPS.setLeadingMoveText:
                            this.setLeadingMoveText(n[0], n[1]);
                            break;
                          case r.OPS.setFont:
                            this.setFont(n);
                            break;
                          case r.OPS.showText:
                          case r.OPS.showSpacedText:
                            this.showText(n[0]);
                            break;
                          case r.OPS.endText:
                            this.endText();
                            break;
                          case r.OPS.moveText:
                            this.moveText(n[0], n[1]);
                            break;
                          case r.OPS.setCharSpacing:
                            this.setCharSpacing(n[0]);
                            break;
                          case r.OPS.setWordSpacing:
                            this.setWordSpacing(n[0]);
                            break;
                          case r.OPS.setHScale:
                            this.setHScale(n[0]);
                            break;
                          case r.OPS.setTextMatrix:
                            this.setTextMatrix(
                              n[0],
                              n[1],
                              n[2],
                              n[3],
                              n[4],
                              n[5]
                            );
                            break;
                          case r.OPS.setTextRise:
                            this.setTextRise(n[0]);
                            break;
                          case r.OPS.setTextRenderingMode:
                            this.setTextRenderingMode(n[0]);
                            break;
                          case r.OPS.setLineWidth:
                            this.setLineWidth(n[0]);
                            break;
                          case r.OPS.setLineJoin:
                            this.setLineJoin(n[0]);
                            break;
                          case r.OPS.setLineCap:
                            this.setLineCap(n[0]);
                            break;
                          case r.OPS.setMiterLimit:
                            this.setMiterLimit(n[0]);
                            break;
                          case r.OPS.setFillRGBColor:
                            this.setFillRGBColor(n[0], n[1], n[2]);
                            break;
                          case r.OPS.setStrokeRGBColor:
                            this.setStrokeRGBColor(n[0], n[1], n[2]);
                            break;
                          case r.OPS.setStrokeColorN:
                            this.setStrokeColorN(n);
                            break;
                          case r.OPS.setFillColorN:
                            this.setFillColorN(n);
                            break;
                          case r.OPS.shadingFill:
                            this.shadingFill(n[0]);
                            break;
                          case r.OPS.setDash:
                            this.setDash(n[0], n[1]);
                            break;
                          case r.OPS.setRenderingIntent:
                            this.setRenderingIntent(n[0]);
                            break;
                          case r.OPS.setFlatness:
                            this.setFlatness(n[0]);
                            break;
                          case r.OPS.setGState:
                            this.setGState(n[0]);
                            break;
                          case r.OPS.fill:
                            this.fill();
                            break;
                          case r.OPS.eoFill:
                            this.eoFill();
                            break;
                          case r.OPS.stroke:
                            this.stroke();
                            break;
                          case r.OPS.fillStroke:
                            this.fillStroke();
                            break;
                          case r.OPS.eoFillStroke:
                            this.eoFillStroke();
                            break;
                          case r.OPS.clip:
                            this.clip("nonzero");
                            break;
                          case r.OPS.eoClip:
                            this.clip("evenodd");
                            break;
                          case r.OPS.paintSolidColorImageMask:
                            this.paintSolidColorImageMask();
                            break;
                          case r.OPS.paintImageXObject:
                            this.paintImageXObject(n[0]);
                            break;
                          case r.OPS.paintInlineImageXObject:
                            this.paintInlineImageXObject(n[0]);
                            break;
                          case r.OPS.paintImageMaskXObject:
                            this.paintImageMaskXObject(n[0]);
                            break;
                          case r.OPS.paintFormXObjectBegin:
                            this.paintFormXObjectBegin(n[0], n[1]);
                            break;
                          case r.OPS.paintFormXObjectEnd:
                            this.paintFormXObjectEnd();
                            break;
                          case r.OPS.closePath:
                            this.closePath();
                            break;
                          case r.OPS.closeStroke:
                            this.closeStroke();
                            break;
                          case r.OPS.closeFillStroke:
                            this.closeFillStroke();
                            break;
                          case r.OPS.closeEOFillStroke:
                            this.closeEOFillStroke();
                            break;
                          case r.OPS.nextLine:
                            this.nextLine();
                            break;
                          case r.OPS.transform:
                            this.transform(n[0], n[1], n[2], n[3], n[4], n[5]);
                            break;
                          case r.OPS.constructPath:
                            this.constructPath(n[0], n[1]);
                            break;
                          case r.OPS.endPath:
                            this.endPath();
                            break;
                          case 92:
                            this.group(t.items);
                            break;
                          default:
                            (0, r.warn)(`Unimplemented operator ${e}`);
                        }
                      }
                    }
                    setWordSpacing(e) {
                      this.current.wordSpacing = e;
                    }
                    setCharSpacing(e) {
                      this.current.charSpacing = e;
                    }
                    nextLine() {
                      this.moveText(0, this.current.leading);
                    }
                    setTextMatrix(e, t, s, r, n, a) {
                      const i = this.current;
                      (i.textMatrix = i.lineMatrix = [e, t, s, r, n, a]),
                        (i.textMatrixScale = Math.hypot(e, t)),
                        (i.x = i.lineX = 0),
                        (i.y = i.lineY = 0),
                        (i.xcoords = []),
                        (i.ycoords = []),
                        (i.tspan = this.svgFactory.createElement("svg:tspan")),
                        i.tspan.setAttributeNS(
                          null,
                          "font-family",
                          i.fontFamily
                        ),
                        i.tspan.setAttributeNS(
                          null,
                          "font-size",
                          `${p(i.fontSize)}px`
                        ),
                        i.tspan.setAttributeNS(null, "y", p(-i.y)),
                        (i.txtElement =
                          this.svgFactory.createElement("svg:text")),
                        i.txtElement.appendChild(i.tspan);
                    }
                    beginText() {
                      const e = this.current;
                      (e.x = e.lineX = 0),
                        (e.y = e.lineY = 0),
                        (e.textMatrix = r.IDENTITY_MATRIX),
                        (e.lineMatrix = r.IDENTITY_MATRIX),
                        (e.textMatrixScale = 1),
                        (e.tspan = this.svgFactory.createElement("svg:tspan")),
                        (e.txtElement =
                          this.svgFactory.createElement("svg:text")),
                        (e.txtgrp = this.svgFactory.createElement("svg:g")),
                        (e.xcoords = []),
                        (e.ycoords = []);
                    }
                    moveText(e, t) {
                      const s = this.current;
                      (s.x = s.lineX += e),
                        (s.y = s.lineY += t),
                        (s.xcoords = []),
                        (s.ycoords = []),
                        (s.tspan = this.svgFactory.createElement("svg:tspan")),
                        s.tspan.setAttributeNS(
                          null,
                          "font-family",
                          s.fontFamily
                        ),
                        s.tspan.setAttributeNS(
                          null,
                          "font-size",
                          `${p(s.fontSize)}px`
                        ),
                        s.tspan.setAttributeNS(null, "y", p(-s.y));
                    }
                    showText(t) {
                      const n = this.current,
                        a = n.font,
                        i = n.fontSize;
                      if (0 === i) return;
                      const o = n.fontSizeScale,
                        l = n.charSpacing,
                        c = n.wordSpacing,
                        h = n.fontDirection,
                        d = n.textHScale * h,
                        u = a.vertical,
                        f = u ? 1 : -1,
                        m = a.defaultVMetrics,
                        _ = i * n.fontMatrix[0];
                      let A = 0;
                      for (const e of t) {
                        if (null === e) {
                          A += h * c;
                          continue;
                        }
                        if ((0, r.isNum)(e)) {
                          A += (f * e * i) / 1e3;
                          continue;
                        }
                        const t = (e.isSpace ? c : 0) + l,
                          s = e.fontChar;
                        let d,
                          p,
                          g,
                          b = e.width;
                        if (u) {
                          let t;
                          const s = e.vmetric || m;
                          (t = e.vmetric ? s[1] : 0.5 * b), (t = -t * _);
                          const r = s[2] * _;
                          (b = s ? -s[0] : b), (d = t / o), (p = (A + r) / o);
                        } else (d = A / o), (p = 0);
                        (e.isInFont || a.missingFile) &&
                          (n.xcoords.push(n.x + d),
                          u && n.ycoords.push(-n.y + p),
                          (n.tspan.textContent += s)),
                          (g = u ? b * _ - t * h : b * _ + t * h),
                          (A += g);
                      }
                      n.tspan.setAttributeNS(
                        null,
                        "x",
                        n.xcoords.map(p).join(" ")
                      ),
                        u
                          ? n.tspan.setAttributeNS(
                              null,
                              "y",
                              n.ycoords.map(p).join(" ")
                            )
                          : n.tspan.setAttributeNS(null, "y", p(-n.y)),
                        u ? (n.y -= A) : (n.x += A * d),
                        n.tspan.setAttributeNS(
                          null,
                          "font-family",
                          n.fontFamily
                        ),
                        n.tspan.setAttributeNS(
                          null,
                          "font-size",
                          `${p(n.fontSize)}px`
                        ),
                        n.fontStyle !== e.fontStyle &&
                          n.tspan.setAttributeNS(
                            null,
                            "font-style",
                            n.fontStyle
                          ),
                        n.fontWeight !== e.fontWeight &&
                          n.tspan.setAttributeNS(
                            null,
                            "font-weight",
                            n.fontWeight
                          );
                      const b =
                        n.textRenderingMode &
                        r.TextRenderingMode.FILL_STROKE_MASK;
                      if (
                        (b === r.TextRenderingMode.FILL ||
                        b === r.TextRenderingMode.FILL_STROKE
                          ? (n.fillColor !== e.fillColor &&
                              n.tspan.setAttributeNS(null, "fill", n.fillColor),
                            n.fillAlpha < 1 &&
                              n.tspan.setAttributeNS(
                                null,
                                "fill-opacity",
                                n.fillAlpha
                              ))
                          : n.textRenderingMode ===
                            r.TextRenderingMode.ADD_TO_PATH
                          ? n.tspan.setAttributeNS(null, "fill", "transparent")
                          : n.tspan.setAttributeNS(null, "fill", "none"),
                        b === r.TextRenderingMode.STROKE ||
                          b === r.TextRenderingMode.FILL_STROKE)
                      ) {
                        const e = 1 / (n.textMatrixScale || 1);
                        this._setStrokeAttributes(n.tspan, e);
                      }
                      let y = n.textMatrix;
                      0 !== n.textRise &&
                        ((y = y.slice()), (y[5] += n.textRise)),
                        n.txtElement.setAttributeNS(
                          null,
                          "transform",
                          `${g(y)} scale(${p(d)}, -1)`
                        ),
                        n.txtElement.setAttributeNS(s, "xml:space", "preserve"),
                        n.txtElement.appendChild(n.tspan),
                        n.txtgrp.appendChild(n.txtElement),
                        this._ensureTransformGroup().appendChild(n.txtElement);
                    }
                    setLeadingMoveText(e, t) {
                      this.setLeading(-t), this.moveText(e, t);
                    }
                    addFontStyle(e) {
                      if (!e.data)
                        throw new Error(
                          'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
                        );
                      this.cssStyle ||
                        ((this.cssStyle =
                          this.svgFactory.createElement("svg:style")),
                        this.cssStyle.setAttributeNS(null, "type", "text/css"),
                        this.defs.appendChild(this.cssStyle));
                      const t = (0, r.createObjectURL)(
                        e.data,
                        e.mimetype,
                        this.forceDataSchema
                      );
                      this.cssStyle.textContent += `@font-face { font-family: "${e.loadedName}"; src: url(${t}); }\n`;
                    }
                    setFont(e) {
                      const t = this.current,
                        s = this.commonObjs.get(e[0]);
                      let n = e[1];
                      (t.font = s),
                        !this.embedFonts ||
                          s.missingFile ||
                          this.embeddedFonts[s.loadedName] ||
                          (this.addFontStyle(s),
                          (this.embeddedFonts[s.loadedName] = s)),
                        (t.fontMatrix = s.fontMatrix || r.FONT_IDENTITY_MATRIX);
                      let a = "normal";
                      s.black ? (a = "900") : s.bold && (a = "bold");
                      const i = s.italic ? "italic" : "normal";
                      n < 0
                        ? ((n = -n), (t.fontDirection = -1))
                        : (t.fontDirection = 1),
                        (t.fontSize = n),
                        (t.fontFamily = s.loadedName),
                        (t.fontWeight = a),
                        (t.fontStyle = i),
                        (t.tspan = this.svgFactory.createElement("svg:tspan")),
                        t.tspan.setAttributeNS(null, "y", p(-t.y)),
                        (t.xcoords = []),
                        (t.ycoords = []);
                    }
                    endText() {
                      const e = this.current;
                      e.textRenderingMode &
                        r.TextRenderingMode.ADD_TO_PATH_FLAG &&
                        e.txtElement?.hasChildNodes() &&
                        ((e.element = e.txtElement),
                        this.clip("nonzero"),
                        this.endPath());
                    }
                    setLineWidth(e) {
                      e > 0 && (this.current.lineWidth = e);
                    }
                    setLineCap(e) {
                      this.current.lineCap = l[e];
                    }
                    setLineJoin(e) {
                      this.current.lineJoin = c[e];
                    }
                    setMiterLimit(e) {
                      this.current.miterLimit = e;
                    }
                    setStrokeAlpha(e) {
                      this.current.strokeAlpha = e;
                    }
                    setStrokeRGBColor(e, t, s) {
                      this.current.strokeColor = r.Util.makeHexColor(e, t, s);
                    }
                    setFillAlpha(e) {
                      this.current.fillAlpha = e;
                    }
                    setFillRGBColor(e, t, s) {
                      (this.current.fillColor = r.Util.makeHexColor(e, t, s)),
                        (this.current.tspan =
                          this.svgFactory.createElement("svg:tspan")),
                        (this.current.xcoords = []),
                        (this.current.ycoords = []);
                    }
                    setStrokeColorN(e) {
                      this.current.strokeColor = this._makeColorN_Pattern(e);
                    }
                    setFillColorN(e) {
                      this.current.fillColor = this._makeColorN_Pattern(e);
                    }
                    shadingFill(e) {
                      const t = this.viewport.width,
                        s = this.viewport.height,
                        n = r.Util.inverseTransform(this.transformMatrix),
                        a = r.Util.applyTransform([0, 0], n),
                        i = r.Util.applyTransform([0, s], n),
                        o = r.Util.applyTransform([t, 0], n),
                        l = r.Util.applyTransform([t, s], n),
                        c = Math.min(a[0], i[0], o[0], l[0]),
                        h = Math.min(a[1], i[1], o[1], l[1]),
                        d = Math.max(a[0], i[0], o[0], l[0]),
                        u = Math.max(a[1], i[1], o[1], l[1]),
                        p = this.svgFactory.createElement("svg:rect");
                      p.setAttributeNS(null, "x", c),
                        p.setAttributeNS(null, "y", h),
                        p.setAttributeNS(null, "width", d - c),
                        p.setAttributeNS(null, "height", u - h),
                        p.setAttributeNS(
                          null,
                          "fill",
                          this._makeShadingPattern(e)
                        ),
                        this.current.fillAlpha < 1 &&
                          p.setAttributeNS(
                            null,
                            "fill-opacity",
                            this.current.fillAlpha
                          ),
                        this._ensureTransformGroup().appendChild(p);
                    }
                    _makeColorN_Pattern(e) {
                      return "TilingPattern" === e[0]
                        ? this._makeTilingPattern(e)
                        : this._makeShadingPattern(e);
                    }
                    _makeTilingPattern(e) {
                      const t = e[1],
                        s = e[2],
                        n = e[3] || r.IDENTITY_MATRIX,
                        [a, i, o, l] = e[4],
                        c = e[5],
                        h = e[6],
                        d = e[7],
                        u = "shading" + _++,
                        [p, g, f, m] = r.Util.normalizeRect([
                          ...r.Util.applyTransform([a, i], n),
                          ...r.Util.applyTransform([o, l], n),
                        ]),
                        [A, b] = r.Util.singularValueDecompose2dScale(n),
                        y = c * A,
                        S = h * b,
                        v = this.svgFactory.createElement("svg:pattern");
                      v.setAttributeNS(null, "id", u),
                        v.setAttributeNS(
                          null,
                          "patternUnits",
                          "userSpaceOnUse"
                        ),
                        v.setAttributeNS(null, "width", y),
                        v.setAttributeNS(null, "height", S),
                        v.setAttributeNS(null, "x", `${p}`),
                        v.setAttributeNS(null, "y", `${g}`);
                      const x = this.svg,
                        C = this.transformMatrix,
                        k = this.current.fillColor,
                        P = this.current.strokeColor,
                        w = this.svgFactory.create(f - p, m - g);
                      if (
                        ((this.svg = w), (this.transformMatrix = n), 2 === d)
                      ) {
                        const e = r.Util.makeHexColor(...t);
                        (this.current.fillColor = e),
                          (this.current.strokeColor = e);
                      }
                      return (
                        this.executeOpTree(this.convertOpList(s)),
                        (this.svg = x),
                        (this.transformMatrix = C),
                        (this.current.fillColor = k),
                        (this.current.strokeColor = P),
                        v.appendChild(w.childNodes[0]),
                        this.defs.appendChild(v),
                        `url(#${u})`
                      );
                    }
                    _makeShadingPattern(e) {
                      switch (e[0]) {
                        case "RadialAxial":
                          const t = "shading" + _++,
                            s = e[3];
                          let n;
                          switch (e[1]) {
                            case "axial":
                              const s = e[4],
                                r = e[5];
                              (n =
                                this.svgFactory.createElement(
                                  "svg:linearGradient"
                                )),
                                n.setAttributeNS(null, "id", t),
                                n.setAttributeNS(
                                  null,
                                  "gradientUnits",
                                  "userSpaceOnUse"
                                ),
                                n.setAttributeNS(null, "x1", s[0]),
                                n.setAttributeNS(null, "y1", s[1]),
                                n.setAttributeNS(null, "x2", r[0]),
                                n.setAttributeNS(null, "y2", r[1]);
                              break;
                            case "radial":
                              const a = e[4],
                                i = e[5],
                                o = e[6],
                                l = e[7];
                              (n =
                                this.svgFactory.createElement(
                                  "svg:radialGradient"
                                )),
                                n.setAttributeNS(null, "id", t),
                                n.setAttributeNS(
                                  null,
                                  "gradientUnits",
                                  "userSpaceOnUse"
                                ),
                                n.setAttributeNS(null, "cx", i[0]),
                                n.setAttributeNS(null, "cy", i[1]),
                                n.setAttributeNS(null, "r", l),
                                n.setAttributeNS(null, "fx", a[0]),
                                n.setAttributeNS(null, "fy", a[1]),
                                n.setAttributeNS(null, "fr", o);
                              break;
                            default:
                              throw new Error(
                                `Unknown RadialAxial type: ${e[1]}`
                              );
                          }
                          for (const e of s) {
                            const t = this.svgFactory.createElement("svg:stop");
                            t.setAttributeNS(null, "offset", e[0]),
                              t.setAttributeNS(null, "stop-color", e[1]),
                              n.appendChild(t);
                          }
                          return this.defs.appendChild(n), `url(#${t})`;
                        case "Mesh":
                          return (
                            (0, r.warn)("Unimplemented pattern Mesh"), null
                          );
                        case "Dummy":
                          return "hotpink";
                        default:
                          throw new Error(`Unknown IR type: ${e[0]}`);
                      }
                    }
                    setDash(e, t) {
                      (this.current.dashArray = e),
                        (this.current.dashPhase = t);
                    }
                    constructPath(e, t) {
                      const s = this.current;
                      let n = s.x,
                        a = s.y,
                        i = [],
                        o = 0;
                      for (const l of e)
                        switch (0 | l) {
                          case r.OPS.rectangle:
                            (n = t[o++]), (a = t[o++]);
                            const e = n + t[o++],
                              s = a + t[o++];
                            i.push(
                              "M",
                              p(n),
                              p(a),
                              "L",
                              p(e),
                              p(a),
                              "L",
                              p(e),
                              p(s),
                              "L",
                              p(n),
                              p(s),
                              "Z"
                            );
                            break;
                          case r.OPS.moveTo:
                            (n = t[o++]), (a = t[o++]), i.push("M", p(n), p(a));
                            break;
                          case r.OPS.lineTo:
                            (n = t[o++]), (a = t[o++]), i.push("L", p(n), p(a));
                            break;
                          case r.OPS.curveTo:
                            (n = t[o + 4]),
                              (a = t[o + 5]),
                              i.push(
                                "C",
                                p(t[o]),
                                p(t[o + 1]),
                                p(t[o + 2]),
                                p(t[o + 3]),
                                p(n),
                                p(a)
                              ),
                              (o += 6);
                            break;
                          case r.OPS.curveTo2:
                            i.push(
                              "C",
                              p(n),
                              p(a),
                              p(t[o]),
                              p(t[o + 1]),
                              p(t[o + 2]),
                              p(t[o + 3])
                            ),
                              (n = t[o + 2]),
                              (a = t[o + 3]),
                              (o += 4);
                            break;
                          case r.OPS.curveTo3:
                            (n = t[o + 2]),
                              (a = t[o + 3]),
                              i.push(
                                "C",
                                p(t[o]),
                                p(t[o + 1]),
                                p(n),
                                p(a),
                                p(n),
                                p(a)
                              ),
                              (o += 4);
                            break;
                          case r.OPS.closePath:
                            i.push("Z");
                        }
                      (i = i.join(" ")),
                        s.path &&
                        e.length > 0 &&
                        e[0] !== r.OPS.rectangle &&
                        e[0] !== r.OPS.moveTo
                          ? (i = s.path.getAttributeNS(null, "d") + i)
                          : ((s.path =
                              this.svgFactory.createElement("svg:path")),
                            this._ensureTransformGroup().appendChild(s.path)),
                        s.path.setAttributeNS(null, "d", i),
                        s.path.setAttributeNS(null, "fill", "none"),
                        (s.element = s.path),
                        s.setCurrentPoint(n, a);
                    }
                    endPath() {
                      const e = this.current;
                      if (((e.path = null), !this.pendingClip)) return;
                      if (!e.element) return void (this.pendingClip = null);
                      const t = "clippath" + f++,
                        s = this.svgFactory.createElement("svg:clipPath");
                      s.setAttributeNS(null, "id", t),
                        s.setAttributeNS(
                          null,
                          "transform",
                          g(this.transformMatrix)
                        );
                      const r = e.element.cloneNode(!0);
                      if (
                        ("evenodd" === this.pendingClip
                          ? r.setAttributeNS(null, "clip-rule", "evenodd")
                          : r.setAttributeNS(null, "clip-rule", "nonzero"),
                        (this.pendingClip = null),
                        s.appendChild(r),
                        this.defs.appendChild(s),
                        e.activeClipUrl)
                      ) {
                        e.clipGroup = null;
                        for (const e of this.extraStack) e.clipGroup = null;
                        s.setAttributeNS(null, "clip-path", e.activeClipUrl);
                      }
                      (e.activeClipUrl = `url(#${t})`), (this.tgrp = null);
                    }
                    clip(e) {
                      this.pendingClip = e;
                    }
                    closePath() {
                      const e = this.current;
                      if (e.path) {
                        const t = `${e.path.getAttributeNS(null, "d")}Z`;
                        e.path.setAttributeNS(null, "d", t);
                      }
                    }
                    setLeading(e) {
                      this.current.leading = -e;
                    }
                    setTextRise(e) {
                      this.current.textRise = e;
                    }
                    setTextRenderingMode(e) {
                      this.current.textRenderingMode = e;
                    }
                    setHScale(e) {
                      this.current.textHScale = e / 100;
                    }
                    setRenderingIntent(e) {}
                    setFlatness(e) {}
                    setGState(e) {
                      for (const [t, s] of e)
                        switch (t) {
                          case "LW":
                            this.setLineWidth(s);
                            break;
                          case "LC":
                            this.setLineCap(s);
                            break;
                          case "LJ":
                            this.setLineJoin(s);
                            break;
                          case "ML":
                            this.setMiterLimit(s);
                            break;
                          case "D":
                            this.setDash(s[0], s[1]);
                            break;
                          case "RI":
                            this.setRenderingIntent(s);
                            break;
                          case "FL":
                            this.setFlatness(s);
                            break;
                          case "Font":
                            this.setFont(s);
                            break;
                          case "CA":
                            this.setStrokeAlpha(s);
                            break;
                          case "ca":
                            this.setFillAlpha(s);
                            break;
                          default:
                            (0, r.warn)(
                              `Unimplemented graphic state operator ${t}`
                            );
                        }
                    }
                    fill() {
                      const e = this.current;
                      e.element &&
                        (e.element.setAttributeNS(null, "fill", e.fillColor),
                        e.element.setAttributeNS(
                          null,
                          "fill-opacity",
                          e.fillAlpha
                        ),
                        this.endPath());
                    }
                    stroke() {
                      const e = this.current;
                      e.element &&
                        (this._setStrokeAttributes(e.element),
                        e.element.setAttributeNS(null, "fill", "none"),
                        this.endPath());
                    }
                    _setStrokeAttributes(e, t = 1) {
                      const s = this.current;
                      let r = s.dashArray;
                      1 !== t &&
                        r.length > 0 &&
                        (r = r.map(function (e) {
                          return t * e;
                        })),
                        e.setAttributeNS(null, "stroke", s.strokeColor),
                        e.setAttributeNS(null, "stroke-opacity", s.strokeAlpha),
                        e.setAttributeNS(
                          null,
                          "stroke-miterlimit",
                          p(s.miterLimit)
                        ),
                        e.setAttributeNS(null, "stroke-linecap", s.lineCap),
                        e.setAttributeNS(null, "stroke-linejoin", s.lineJoin),
                        e.setAttributeNS(
                          null,
                          "stroke-width",
                          p(t * s.lineWidth) + "px"
                        ),
                        e.setAttributeNS(
                          null,
                          "stroke-dasharray",
                          r.map(p).join(" ")
                        ),
                        e.setAttributeNS(
                          null,
                          "stroke-dashoffset",
                          p(t * s.dashPhase) + "px"
                        );
                    }
                    eoFill() {
                      this.current.element &&
                        this.current.element.setAttributeNS(
                          null,
                          "fill-rule",
                          "evenodd"
                        ),
                        this.fill();
                    }
                    fillStroke() {
                      this.stroke(), this.fill();
                    }
                    eoFillStroke() {
                      this.current.element &&
                        this.current.element.setAttributeNS(
                          null,
                          "fill-rule",
                          "evenodd"
                        ),
                        this.fillStroke();
                    }
                    closeStroke() {
                      this.closePath(), this.stroke();
                    }
                    closeFillStroke() {
                      this.closePath(), this.fillStroke();
                    }
                    closeEOFillStroke() {
                      this.closePath(), this.eoFillStroke();
                    }
                    paintSolidColorImageMask() {
                      const e = this.svgFactory.createElement("svg:rect");
                      e.setAttributeNS(null, "x", "0"),
                        e.setAttributeNS(null, "y", "0"),
                        e.setAttributeNS(null, "width", "1px"),
                        e.setAttributeNS(null, "height", "1px"),
                        e.setAttributeNS(null, "fill", this.current.fillColor),
                        this._ensureTransformGroup().appendChild(e);
                    }
                    paintImageXObject(e) {
                      const t = e.startsWith("g_")
                        ? this.commonObjs.get(e)
                        : this.objs.get(e);
                      t
                        ? this.paintInlineImageXObject(t)
                        : (0, r.warn)(
                            `Dependent image with object ID ${e} is not ready yet`
                          );
                    }
                    paintInlineImageXObject(e, t) {
                      const s = e.width,
                        r = e.height,
                        n = h(e, this.forceDataSchema, !!t),
                        a = this.svgFactory.createElement("svg:rect");
                      a.setAttributeNS(null, "x", "0"),
                        a.setAttributeNS(null, "y", "0"),
                        a.setAttributeNS(null, "width", p(s)),
                        a.setAttributeNS(null, "height", p(r)),
                        (this.current.element = a),
                        this.clip("nonzero");
                      const i = this.svgFactory.createElement("svg:image");
                      i.setAttributeNS(o, "xlink:href", n),
                        i.setAttributeNS(null, "x", "0"),
                        i.setAttributeNS(null, "y", p(-r)),
                        i.setAttributeNS(null, "width", p(s) + "px"),
                        i.setAttributeNS(null, "height", p(r) + "px"),
                        i.setAttributeNS(
                          null,
                          "transform",
                          `scale(${p(1 / s)} ${p(-1 / r)})`
                        ),
                        t
                          ? t.appendChild(i)
                          : this._ensureTransformGroup().appendChild(i);
                    }
                    paintImageMaskXObject(e) {
                      const t = this.current,
                        s = e.width,
                        r = e.height,
                        n = t.fillColor;
                      t.maskId = "mask" + m++;
                      const a = this.svgFactory.createElement("svg:mask");
                      a.setAttributeNS(null, "id", t.maskId);
                      const i = this.svgFactory.createElement("svg:rect");
                      i.setAttributeNS(null, "x", "0"),
                        i.setAttributeNS(null, "y", "0"),
                        i.setAttributeNS(null, "width", p(s)),
                        i.setAttributeNS(null, "height", p(r)),
                        i.setAttributeNS(null, "fill", n),
                        i.setAttributeNS(null, "mask", `url(#${t.maskId})`),
                        this.defs.appendChild(a),
                        this._ensureTransformGroup().appendChild(i),
                        this.paintInlineImageXObject(e, a);
                    }
                    paintFormXObjectBegin(e, t) {
                      if (
                        (Array.isArray(e) &&
                          6 === e.length &&
                          this.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                        t)
                      ) {
                        const e = t[2] - t[0],
                          s = t[3] - t[1],
                          r = this.svgFactory.createElement("svg:rect");
                        r.setAttributeNS(null, "x", t[0]),
                          r.setAttributeNS(null, "y", t[1]),
                          r.setAttributeNS(null, "width", p(e)),
                          r.setAttributeNS(null, "height", p(s)),
                          (this.current.element = r),
                          this.clip("nonzero"),
                          this.endPath();
                      }
                    }
                    paintFormXObjectEnd() {}
                    _initialize(e) {
                      const t = this.svgFactory.create(e.width, e.height),
                        s = this.svgFactory.createElement("svg:defs");
                      t.appendChild(s), (this.defs = s);
                      const r = this.svgFactory.createElement("svg:g");
                      return (
                        r.setAttributeNS(null, "transform", g(e.transform)),
                        t.appendChild(r),
                        (this.svg = r),
                        t
                      );
                    }
                    _ensureClipGroup() {
                      if (!this.current.clipGroup) {
                        const e = this.svgFactory.createElement("svg:g");
                        e.setAttributeNS(
                          null,
                          "clip-path",
                          this.current.activeClipUrl
                        ),
                          this.svg.appendChild(e),
                          (this.current.clipGroup = e);
                      }
                      return this.current.clipGroup;
                    }
                    _ensureTransformGroup() {
                      return (
                        this.tgrp ||
                          ((this.tgrp = this.svgFactory.createElement("svg:g")),
                          this.tgrp.setAttributeNS(
                            null,
                            "transform",
                            g(this.transformMatrix)
                          ),
                          this.current.activeClipUrl
                            ? this._ensureClipGroup().appendChild(this.tgrp)
                            : this.svg.appendChild(this.tgrp)),
                        this.tgrp
                      );
                    }
                  };
                }
              },
              (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.XfaLayer = void 0),
                  (t.XfaLayer = class {
                    static setupStorage(e, t, s, r, n) {
                      const a = r.getValue(t, { value: null });
                      switch (s.name) {
                        case "textarea":
                          if (
                            (null !== a.value && (e.textContent = a.value),
                            "print" === n)
                          )
                            break;
                          e.addEventListener("input", (e) => {
                            r.setValue(t, { value: e.target.value });
                          });
                          break;
                        case "input":
                          if (
                            "radio" === s.attributes.type ||
                            "checkbox" === s.attributes.type
                          ) {
                            if (
                              (a.value === s.attributes.xfaOn &&
                                e.setAttribute("checked", !0),
                              "print" === n)
                            )
                              break;
                            e.addEventListener("change", (e) => {
                              r.setValue(t, {
                                value: e.target.getAttribute("xfaOn"),
                              });
                            });
                          } else {
                            if (
                              (null !== a.value &&
                                e.setAttribute("value", a.value),
                              "print" === n)
                            )
                              break;
                            e.addEventListener("input", (e) => {
                              r.setValue(t, { value: e.target.value });
                            });
                          }
                          break;
                        case "select":
                          if (null !== a.value)
                            for (const e of s.children)
                              e.attributes.value === a.value &&
                                (e.attributes.selected = !0);
                          e.addEventListener("input", (e) => {
                            const s = e.target.options,
                              n =
                                -1 === s.selectedIndex
                                  ? ""
                                  : s[s.selectedIndex].value;
                            r.setValue(t, { value: n });
                          });
                      }
                    }
                    static setAttributes(e, t, s, r) {
                      const { attributes: n } = t;
                      "radio" === n.type && (n.name = `${n.name}-${r}`);
                      for (const [a, i] of Object.entries(n))
                        null !== i &&
                          void 0 !== i &&
                          "dataId" !== a &&
                          ("style" !== a
                            ? "textContent" === a
                              ? (e.textContent = i)
                              : "class" === a
                              ? e.setAttribute(a, i.join(" "))
                              : e.setAttribute(a, i)
                            : Object.assign(e.style, i));
                      s && n.dataId && this.setupStorage(e, n.dataId, t, s);
                    }
                    static render(e) {
                      const t = e.annotationStorage,
                        s = e.xfa,
                        r = e.intent || "display",
                        n = document.createElement(s.name);
                      s.attributes && this.setAttributes(n, s);
                      const a = [[s, -1, n]],
                        i = e.div;
                      i.appendChild(n);
                      const o = `matrix(${e.viewport.transform.join(",")})`;
                      for (
                        i.style.transform = o,
                          i.setAttribute("class", "xfaLayer xfaFont");
                        a.length > 0;

                      ) {
                        const [e, s, n] = a[a.length - 1];
                        if (s + 1 === e.children.length) {
                          a.pop();
                          continue;
                        }
                        const i = e.children[++a[a.length - 1][1]];
                        if (null === i) continue;
                        const { name: o } = i;
                        if ("#text" === o) {
                          n.appendChild(document.createTextNode(i.value));
                          continue;
                        }
                        let l;
                        (l = i?.attributes?.xmlns
                          ? document.createElementNS(i.attributes.xmlns, o)
                          : document.createElement(o)),
                          n.appendChild(l),
                          i.attributes && this.setAttributes(l, i, t, r),
                          i.children && i.children.length > 0
                            ? a.push([i, -1, l])
                            : i.value &&
                              l.appendChild(document.createTextNode(i.value));
                      }
                      for (const l of i.querySelectorAll(
                        ".xfaNonInteractive input, .xfaNonInteractive textarea"
                      ))
                        l.setAttribute("readOnly", !0);
                    }
                    static update(e) {
                      const t = `matrix(${e.viewport.transform.join(",")})`;
                      (e.div.style.transform = t), (e.div.hidden = !1);
                    }
                  });
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.PDFNodeStream = void 0);
                var r = s(2),
                  n = s(23);
                const a = __webpack_require__(172),
                  i = __webpack_require__(2001),
                  o = __webpack_require__(3779),
                  l = __webpack_require__(861),
                  c = /^file:\/\/\/[a-zA-Z]:\//;
                t.PDFNodeStream = class {
                  constructor(e) {
                    (this.source = e),
                      (this.url = (function (e) {
                        const t = l.parse(e);
                        return "file:" === t.protocol || t.host
                          ? t
                          : /^[a-z]:[/\\]/i.test(e)
                          ? l.parse(`file:///${e}`)
                          : (t.host || (t.protocol = "file:"), t);
                      })(e.url)),
                      (this.isHttp =
                        "http:" === this.url.protocol ||
                        "https:" === this.url.protocol),
                      (this.isFsUrl = "file:" === this.url.protocol),
                      (this.httpHeaders = (this.isHttp && e.httpHeaders) || {}),
                      (this._fullRequestReader = null),
                      (this._rangeRequestReaders = []);
                  }
                  get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0;
                  }
                  getFullReader() {
                    return (
                      (0, r.assert)(
                        !this._fullRequestReader,
                        "PDFNodeStream.getFullReader can only be called once."
                      ),
                      (this._fullRequestReader = this.isFsUrl
                        ? new f(this)
                        : new p(this)),
                      this._fullRequestReader
                    );
                  }
                  getRangeReader(e, t) {
                    if (t <= this._progressiveDataLength) return null;
                    const s = this.isFsUrl
                      ? new m(this, e, t)
                      : new g(this, e, t);
                    return this._rangeRequestReaders.push(s), s;
                  }
                  cancelAllRequests(e) {
                    this._fullRequestReader &&
                      this._fullRequestReader.cancel(e);
                    for (const t of this._rangeRequestReaders.slice(0))
                      t.cancel(e);
                  }
                };
                class h {
                  constructor(e) {
                    (this._url = e.url),
                      (this._done = !1),
                      (this._storedError = null),
                      (this.onProgress = null);
                    const t = e.source;
                    (this._contentLength = t.length),
                      (this._loaded = 0),
                      (this._filename = null),
                      (this._disableRange = t.disableRange || !1),
                      (this._rangeChunkSize = t.rangeChunkSize),
                      this._rangeChunkSize ||
                        this._disableRange ||
                        (this._disableRange = !0),
                      (this._isStreamingSupported = !t.disableStream),
                      (this._isRangeSupported = !t.disableRange),
                      (this._readableStream = null),
                      (this._readCapability = (0, r.createPromiseCapability)()),
                      (this._headersCapability = (0,
                      r.createPromiseCapability)());
                  }
                  get headersReady() {
                    return this._headersCapability.promise;
                  }
                  get filename() {
                    return this._filename;
                  }
                  get contentLength() {
                    return this._contentLength;
                  }
                  get isRangeSupported() {
                    return this._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    if ((await this._readCapability.promise, this._done))
                      return { value: void 0, done: !0 };
                    if (this._storedError) throw this._storedError;
                    const e = this._readableStream.read();
                    return null === e
                      ? ((this._readCapability = (0,
                        r.createPromiseCapability)()),
                        this.read())
                      : ((this._loaded += e.length),
                        this.onProgress &&
                          this.onProgress({
                            loaded: this._loaded,
                            total: this._contentLength,
                          }),
                        { value: new Uint8Array(e).buffer, done: !1 });
                  }
                  cancel(e) {
                    this._readableStream
                      ? this._readableStream.destroy(e)
                      : this._error(e);
                  }
                  _error(e) {
                    (this._storedError = e), this._readCapability.resolve();
                  }
                  _setReadableStream(e) {
                    (this._readableStream = e),
                      e.on("readable", () => {
                        this._readCapability.resolve();
                      }),
                      e.on("end", () => {
                        e.destroy(),
                          (this._done = !0),
                          this._readCapability.resolve();
                      }),
                      e.on("error", (e) => {
                        this._error(e);
                      }),
                      !this._isStreamingSupported &&
                        this._isRangeSupported &&
                        this._error(
                          new r.AbortException("streaming is disabled")
                        ),
                      this._storedError &&
                        this._readableStream.destroy(this._storedError);
                  }
                }
                class d {
                  constructor(e) {
                    (this._url = e.url),
                      (this._done = !1),
                      (this._storedError = null),
                      (this.onProgress = null),
                      (this._loaded = 0),
                      (this._readableStream = null),
                      (this._readCapability = (0, r.createPromiseCapability)());
                    const t = e.source;
                    this._isStreamingSupported = !t.disableStream;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    if ((await this._readCapability.promise, this._done))
                      return { value: void 0, done: !0 };
                    if (this._storedError) throw this._storedError;
                    const e = this._readableStream.read();
                    return null === e
                      ? ((this._readCapability = (0,
                        r.createPromiseCapability)()),
                        this.read())
                      : ((this._loaded += e.length),
                        this.onProgress &&
                          this.onProgress({ loaded: this._loaded }),
                        { value: new Uint8Array(e).buffer, done: !1 });
                  }
                  cancel(e) {
                    this._readableStream
                      ? this._readableStream.destroy(e)
                      : this._error(e);
                  }
                  _error(e) {
                    (this._storedError = e), this._readCapability.resolve();
                  }
                  _setReadableStream(e) {
                    (this._readableStream = e),
                      e.on("readable", () => {
                        this._readCapability.resolve();
                      }),
                      e.on("end", () => {
                        e.destroy(),
                          (this._done = !0),
                          this._readCapability.resolve();
                      }),
                      e.on("error", (e) => {
                        this._error(e);
                      }),
                      this._storedError &&
                        this._readableStream.destroy(this._storedError);
                  }
                }
                function u(e, t) {
                  return {
                    protocol: e.protocol,
                    auth: e.auth,
                    host: e.hostname,
                    port: e.port,
                    path: e.path,
                    method: "GET",
                    headers: t,
                  };
                }
                class p extends h {
                  constructor(e) {
                    super(e);
                    const t = (t) => {
                      if (404 === t.statusCode) {
                        const e = new r.MissingPDFException(
                          `Missing PDF "${this._url}".`
                        );
                        return (
                          (this._storedError = e),
                          void this._headersCapability.reject(e)
                        );
                      }
                      this._headersCapability.resolve(),
                        this._setReadableStream(t);
                      const s = (e) =>
                          this._readableStream.headers[e.toLowerCase()],
                        { allowRangeRequests: a, suggestedLength: i } = (0,
                        n.validateRangeRequestCapabilities)({
                          getResponseHeader: s,
                          isHttp: e.isHttp,
                          rangeChunkSize: this._rangeChunkSize,
                          disableRange: this._disableRange,
                        });
                      (this._isRangeSupported = a),
                        (this._contentLength = i || this._contentLength),
                        (this._filename = (0, n.extractFilenameFromHeader)(s));
                    };
                    (this._request = null),
                      "http:" === this._url.protocol
                        ? (this._request = i.request(
                            u(this._url, e.httpHeaders),
                            t
                          ))
                        : (this._request = o.request(
                            u(this._url, e.httpHeaders),
                            t
                          )),
                      this._request.on("error", (e) => {
                        (this._storedError = e),
                          this._headersCapability.reject(e);
                      }),
                      this._request.end();
                  }
                }
                class g extends d {
                  constructor(e, t, s) {
                    super(e), (this._httpHeaders = {});
                    for (const r in e.httpHeaders) {
                      const t = e.httpHeaders[r];
                      "undefined" !== typeof t && (this._httpHeaders[r] = t);
                    }
                    this._httpHeaders.Range = `bytes=${t}-${s - 1}`;
                    const n = (e) => {
                      if (404 !== e.statusCode) this._setReadableStream(e);
                      else {
                        const e = new r.MissingPDFException(
                          `Missing PDF "${this._url}".`
                        );
                        this._storedError = e;
                      }
                    };
                    (this._request = null),
                      "http:" === this._url.protocol
                        ? (this._request = i.request(
                            u(this._url, this._httpHeaders),
                            n
                          ))
                        : (this._request = o.request(
                            u(this._url, this._httpHeaders),
                            n
                          )),
                      this._request.on("error", (e) => {
                        this._storedError = e;
                      }),
                      this._request.end();
                  }
                }
                class f extends h {
                  constructor(e) {
                    super(e);
                    let t = decodeURIComponent(this._url.path);
                    c.test(this._url.href) && (t = t.replace(/^\//, "")),
                      a.lstat(t, (e, s) => {
                        if (e)
                          return (
                            "ENOENT" === e.code &&
                              (e = new r.MissingPDFException(
                                `Missing PDF "${t}".`
                              )),
                            (this._storedError = e),
                            void this._headersCapability.reject(e)
                          );
                        (this._contentLength = s.size),
                          this._setReadableStream(a.createReadStream(t)),
                          this._headersCapability.resolve();
                      });
                  }
                }
                class m extends d {
                  constructor(e, t, s) {
                    super(e);
                    let r = decodeURIComponent(this._url.path);
                    c.test(this._url.href) && (r = r.replace(/^\//, "")),
                      this._setReadableStream(
                        a.createReadStream(r, { start: t, end: s - 1 })
                      );
                  }
                }
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.createResponseStatusError = function (e, t) {
                    return 404 === e || (0 === e && t.startsWith("file:"))
                      ? new r.MissingPDFException('Missing PDF "' + t + '".')
                      : new r.UnexpectedResponseException(
                          `Unexpected server response (${e}) while retrieving PDF "${t}".`,
                          e
                        );
                  }),
                  (t.extractFilenameFromHeader = function (e) {
                    const t = e("Content-Disposition");
                    if (t) {
                      let e = (0, n.getFilenameFromContentDispositionHeader)(t);
                      if (e.includes("%"))
                        try {
                          e = decodeURIComponent(e);
                        } catch (s) {}
                      if ((0, a.isPdfFile)(e)) return e;
                    }
                    return null;
                  }),
                  (t.validateRangeRequestCapabilities = function ({
                    getResponseHeader: e,
                    isHttp: t,
                    rangeChunkSize: s,
                    disableRange: n,
                  }) {
                    (0, r.assert)(
                      s > 0,
                      "Range chunk size must be larger than zero"
                    );
                    const a = {
                        allowRangeRequests: !1,
                        suggestedLength: void 0,
                      },
                      i = parseInt(e("Content-Length"), 10);
                    return Number.isInteger(i)
                      ? ((a.suggestedLength = i),
                        i <= 2 * s ||
                          n ||
                          !t ||
                          "bytes" !== e("Accept-Ranges") ||
                          "identity" !==
                            (e("Content-Encoding") || "identity") ||
                          (a.allowRangeRequests = !0),
                        a)
                      : a;
                  }),
                  (t.validateResponseStatus = function (e) {
                    return 200 === e || 206 === e;
                  });
                var r = s(2),
                  n = s(24),
                  a = s(1);
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.getFilenameFromContentDispositionHeader = function (e) {
                    let t = !0,
                      s = n("filename\\*", "i").exec(e);
                    if (s) {
                      s = s[1];
                      let e = o(s);
                      return (e = unescape(e)), (e = l(e)), (e = c(e)), i(e);
                    }
                    if (
                      ((s = (function (e) {
                        const t = [];
                        let s;
                        const r = n("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                        for (; null !== (s = r.exec(e)); ) {
                          let [, e, r, n] = s;
                          if (((e = parseInt(e, 10)), e in t)) {
                            if (0 === e) break;
                          } else t[e] = [r, n];
                        }
                        const a = [];
                        for (let n = 0; n < t.length && n in t; ++n) {
                          let [e, s] = t[n];
                          (s = o(s)),
                            e && ((s = unescape(s)), 0 === n && (s = l(s))),
                            a.push(s);
                        }
                        return a.join("");
                      })(e)),
                      s)
                    )
                      return i(c(s));
                    if (((s = n("filename", "i").exec(e)), s)) {
                      s = s[1];
                      let e = o(s);
                      return (e = c(e)), i(e);
                    }
                    function n(e, t) {
                      return new RegExp(
                        "(?:^|;)\\s*" +
                          e +
                          '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
                        t
                      );
                    }
                    function a(e, s) {
                      if (e) {
                        if (!/^[\x00-\xFF]+$/.test(s)) return s;
                        try {
                          const n = new TextDecoder(e, { fatal: !0 }),
                            a = (0, r.stringToBytes)(s);
                          (s = n.decode(a)), (t = !1);
                        } catch (n) {
                          if (/^utf-?8$/i.test(e))
                            try {
                              (s = decodeURIComponent(escape(s))), (t = !1);
                            } catch (a) {}
                        }
                      }
                      return s;
                    }
                    function i(e) {
                      return (
                        t &&
                          /[\x80-\xff]/.test(e) &&
                          ((e = a("utf-8", e)), t && (e = a("iso-8859-1", e))),
                        e
                      );
                    }
                    function o(e) {
                      if (e.startsWith('"')) {
                        const t = e.slice(1).split('\\"');
                        for (let e = 0; e < t.length; ++e) {
                          const s = t[e].indexOf('"');
                          -1 !== s &&
                            ((t[e] = t[e].slice(0, s)), (t.length = e + 1)),
                            (t[e] = t[e].replace(/\\(.)/g, "$1"));
                        }
                        e = t.join('"');
                      }
                      return e;
                    }
                    function l(e) {
                      const t = e.indexOf("'");
                      return -1 === t
                        ? e
                        : a(
                            e.slice(0, t),
                            e.slice(t + 1).replace(/^[^']*'/, "")
                          );
                    }
                    function c(e) {
                      return !e.startsWith("=?") ||
                        /[\x00-\x19\x80-\xff]/.test(e)
                        ? e
                        : e.replace(
                            /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                            function (e, t, s, r) {
                              if ("q" === s || "Q" === s)
                                return a(
                                  t,
                                  (r = (r = r.replace(/_/g, " ")).replace(
                                    /=([0-9a-fA-F]{2})/g,
                                    function (e, t) {
                                      return String.fromCharCode(
                                        parseInt(t, 16)
                                      );
                                    }
                                  ))
                                );
                              try {
                                r = atob(r);
                              } catch (n) {}
                              return a(t, r);
                            }
                          );
                    }
                    return "";
                  });
                var r = s(2);
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.PDFNetworkStream = void 0);
                var r = s(2),
                  n = s(23);
                class a {
                  constructor(e, t) {
                    (this.url = e),
                      (t = t || {}),
                      (this.isHttp = /^https?:/i.test(e)),
                      (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
                      (this.withCredentials = t.withCredentials || !1),
                      (this.getXhr =
                        t.getXhr ||
                        function () {
                          return new XMLHttpRequest();
                        }),
                      (this.currXhrId = 0),
                      (this.pendingRequests = Object.create(null));
                  }
                  requestRange(e, t, s) {
                    const r = { begin: e, end: t };
                    for (const n in s) r[n] = s[n];
                    return this.request(r);
                  }
                  requestFull(e) {
                    return this.request(e);
                  }
                  request(e) {
                    const t = this.getXhr(),
                      s = this.currXhrId++,
                      r = (this.pendingRequests[s] = { xhr: t });
                    t.open("GET", this.url),
                      (t.withCredentials = this.withCredentials);
                    for (const n in this.httpHeaders) {
                      const e = this.httpHeaders[n];
                      "undefined" !== typeof e && t.setRequestHeader(n, e);
                    }
                    return (
                      this.isHttp && "begin" in e && "end" in e
                        ? (t.setRequestHeader(
                            "Range",
                            `bytes=${e.begin}-${e.end - 1}`
                          ),
                          (r.expectedStatus = 206))
                        : (r.expectedStatus = 200),
                      (t.responseType = "arraybuffer"),
                      e.onError &&
                        (t.onerror = function (s) {
                          e.onError(t.status);
                        }),
                      (t.onreadystatechange = this.onStateChange.bind(this, s)),
                      (t.onprogress = this.onProgress.bind(this, s)),
                      (r.onHeadersReceived = e.onHeadersReceived),
                      (r.onDone = e.onDone),
                      (r.onError = e.onError),
                      (r.onProgress = e.onProgress),
                      t.send(null),
                      s
                    );
                  }
                  onProgress(e, t) {
                    const s = this.pendingRequests[e];
                    s && s.onProgress && s.onProgress(t);
                  }
                  onStateChange(e, t) {
                    const s = this.pendingRequests[e];
                    if (!s) return;
                    const n = s.xhr;
                    if (
                      (n.readyState >= 2 &&
                        s.onHeadersReceived &&
                        (s.onHeadersReceived(), delete s.onHeadersReceived),
                      4 !== n.readyState)
                    )
                      return;
                    if (!(e in this.pendingRequests)) return;
                    if (
                      (delete this.pendingRequests[e],
                      0 === n.status && this.isHttp)
                    )
                      return void (s.onError && s.onError(n.status));
                    const a = n.status || 200;
                    if (
                      (200 !== a || 206 !== s.expectedStatus) &&
                      a !== s.expectedStatus
                    )
                      return void (s.onError && s.onError(n.status));
                    const i = (function (e) {
                      const t = e.response;
                      return "string" !== typeof t
                        ? t
                        : (0, r.stringToBytes)(t).buffer;
                    })(n);
                    if (206 === a) {
                      const e = n.getResponseHeader("Content-Range"),
                        t = /bytes (\d+)-(\d+)\/(\d+)/.exec(e);
                      s.onDone({ begin: parseInt(t[1], 10), chunk: i });
                    } else
                      i
                        ? s.onDone({ begin: 0, chunk: i })
                        : s.onError && s.onError(n.status);
                  }
                  getRequestXhr(e) {
                    return this.pendingRequests[e].xhr;
                  }
                  isPendingRequest(e) {
                    return e in this.pendingRequests;
                  }
                  abortRequest(e) {
                    const t = this.pendingRequests[e].xhr;
                    delete this.pendingRequests[e], t.abort();
                  }
                }
                t.PDFNetworkStream = class {
                  constructor(e) {
                    (this._source = e),
                      (this._manager = new a(e.url, {
                        httpHeaders: e.httpHeaders,
                        withCredentials: e.withCredentials,
                      })),
                      (this._rangeChunkSize = e.rangeChunkSize),
                      (this._fullRequestReader = null),
                      (this._rangeRequestReaders = []);
                  }
                  _onRangeRequestReaderClosed(e) {
                    const t = this._rangeRequestReaders.indexOf(e);
                    t >= 0 && this._rangeRequestReaders.splice(t, 1);
                  }
                  getFullReader() {
                    return (
                      (0, r.assert)(
                        !this._fullRequestReader,
                        "PDFNetworkStream.getFullReader can only be called once."
                      ),
                      (this._fullRequestReader = new i(
                        this._manager,
                        this._source
                      )),
                      this._fullRequestReader
                    );
                  }
                  getRangeReader(e, t) {
                    const s = new o(this._manager, e, t);
                    return (
                      (s.onClosed =
                        this._onRangeRequestReaderClosed.bind(this)),
                      this._rangeRequestReaders.push(s),
                      s
                    );
                  }
                  cancelAllRequests(e) {
                    this._fullRequestReader &&
                      this._fullRequestReader.cancel(e);
                    for (const t of this._rangeRequestReaders.slice(0))
                      t.cancel(e);
                  }
                };
                class i {
                  constructor(e, t) {
                    this._manager = e;
                    const s = {
                      onHeadersReceived: this._onHeadersReceived.bind(this),
                      onDone: this._onDone.bind(this),
                      onError: this._onError.bind(this),
                      onProgress: this._onProgress.bind(this),
                    };
                    (this._url = t.url),
                      (this._fullRequestId = e.requestFull(s)),
                      (this._headersReceivedCapability = (0,
                      r.createPromiseCapability)()),
                      (this._disableRange = t.disableRange || !1),
                      (this._contentLength = t.length),
                      (this._rangeChunkSize = t.rangeChunkSize),
                      this._rangeChunkSize ||
                        this._disableRange ||
                        (this._disableRange = !0),
                      (this._isStreamingSupported = !1),
                      (this._isRangeSupported = !1),
                      (this._cachedChunks = []),
                      (this._requests = []),
                      (this._done = !1),
                      (this._storedError = void 0),
                      (this._filename = null),
                      (this.onProgress = null);
                  }
                  _onHeadersReceived() {
                    const e = this._fullRequestId,
                      t = this._manager.getRequestXhr(e),
                      s = (e) => t.getResponseHeader(e),
                      { allowRangeRequests: r, suggestedLength: a } = (0,
                      n.validateRangeRequestCapabilities)({
                        getResponseHeader: s,
                        isHttp: this._manager.isHttp,
                        rangeChunkSize: this._rangeChunkSize,
                        disableRange: this._disableRange,
                      });
                    r && (this._isRangeSupported = !0),
                      (this._contentLength = a || this._contentLength),
                      (this._filename = (0, n.extractFilenameFromHeader)(s)),
                      this._isRangeSupported && this._manager.abortRequest(e),
                      this._headersReceivedCapability.resolve();
                  }
                  _onDone(e) {
                    if (
                      (e &&
                        (this._requests.length > 0
                          ? this._requests
                              .shift()
                              .resolve({ value: e.chunk, done: !1 })
                          : this._cachedChunks.push(e.chunk)),
                      (this._done = !0),
                      !(this._cachedChunks.length > 0))
                    ) {
                      for (const e of this._requests)
                        e.resolve({ value: void 0, done: !0 });
                      this._requests.length = 0;
                    }
                  }
                  _onError(e) {
                    const t = this._url,
                      s = (0, n.createResponseStatusError)(e, t);
                    (this._storedError = s),
                      this._headersReceivedCapability.reject(s);
                    for (const r of this._requests) r.reject(s);
                    (this._requests.length = 0),
                      (this._cachedChunks.length = 0);
                  }
                  _onProgress(e) {
                    this.onProgress &&
                      this.onProgress({
                        loaded: e.loaded,
                        total: e.lengthComputable
                          ? e.total
                          : this._contentLength,
                      });
                  }
                  get filename() {
                    return this._filename;
                  }
                  get isRangeSupported() {
                    return this._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  get contentLength() {
                    return this._contentLength;
                  }
                  get headersReady() {
                    return this._headersReceivedCapability.promise;
                  }
                  async read() {
                    if (this._storedError) throw this._storedError;
                    if (this._cachedChunks.length > 0)
                      return { value: this._cachedChunks.shift(), done: !1 };
                    if (this._done) return { value: void 0, done: !0 };
                    const e = (0, r.createPromiseCapability)();
                    return this._requests.push(e), e.promise;
                  }
                  cancel(e) {
                    (this._done = !0),
                      this._headersReceivedCapability.reject(e);
                    for (const t of this._requests)
                      t.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0),
                      this._manager.isPendingRequest(this._fullRequestId) &&
                        this._manager.abortRequest(this._fullRequestId),
                      (this._fullRequestReader = null);
                  }
                }
                class o {
                  constructor(e, t, s) {
                    this._manager = e;
                    const r = {
                      onDone: this._onDone.bind(this),
                      onProgress: this._onProgress.bind(this),
                    };
                    (this._requestId = e.requestRange(t, s, r)),
                      (this._requests = []),
                      (this._queuedChunk = null),
                      (this._done = !1),
                      (this.onProgress = null),
                      (this.onClosed = null);
                  }
                  _close() {
                    this.onClosed && this.onClosed(this);
                  }
                  _onDone(e) {
                    const t = e.chunk;
                    this._requests.length > 0
                      ? this._requests.shift().resolve({ value: t, done: !1 })
                      : (this._queuedChunk = t),
                      (this._done = !0);
                    for (const s of this._requests)
                      s.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0), this._close();
                  }
                  _onProgress(e) {
                    !this.isStreamingSupported &&
                      this.onProgress &&
                      this.onProgress({ loaded: e.loaded });
                  }
                  get isStreamingSupported() {
                    return !1;
                  }
                  async read() {
                    if (null !== this._queuedChunk) {
                      const e = this._queuedChunk;
                      return (this._queuedChunk = null), { value: e, done: !1 };
                    }
                    if (this._done) return { value: void 0, done: !0 };
                    const e = (0, r.createPromiseCapability)();
                    return this._requests.push(e), e.promise;
                  }
                  cancel(e) {
                    this._done = !0;
                    for (const t of this._requests)
                      t.resolve({ value: void 0, done: !0 });
                    (this._requests.length = 0),
                      this._manager.isPendingRequest(this._requestId) &&
                        this._manager.abortRequest(this._requestId),
                      this._close();
                  }
                }
              },
              (e, t, s) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.PDFFetchStream = void 0);
                var r = s(2),
                  n = s(23);
                function a(e, t, s) {
                  return {
                    method: "GET",
                    headers: e,
                    signal: s?.signal,
                    mode: "cors",
                    credentials: t ? "include" : "same-origin",
                    redirect: "follow",
                  };
                }
                function i(e) {
                  const t = new Headers();
                  for (const s in e) {
                    const r = e[s];
                    "undefined" !== typeof r && t.append(s, r);
                  }
                  return t;
                }
                t.PDFFetchStream = class {
                  constructor(e) {
                    (this.source = e),
                      (this.isHttp = /^https?:/i.test(e.url)),
                      (this.httpHeaders = (this.isHttp && e.httpHeaders) || {}),
                      (this._fullRequestReader = null),
                      (this._rangeRequestReaders = []);
                  }
                  get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0;
                  }
                  getFullReader() {
                    return (
                      (0, r.assert)(
                        !this._fullRequestReader,
                        "PDFFetchStream.getFullReader can only be called once."
                      ),
                      (this._fullRequestReader = new o(this)),
                      this._fullRequestReader
                    );
                  }
                  getRangeReader(e, t) {
                    if (t <= this._progressiveDataLength) return null;
                    const s = new l(this, e, t);
                    return this._rangeRequestReaders.push(s), s;
                  }
                  cancelAllRequests(e) {
                    this._fullRequestReader &&
                      this._fullRequestReader.cancel(e);
                    for (const t of this._rangeRequestReaders.slice(0))
                      t.cancel(e);
                  }
                };
                class o {
                  constructor(e) {
                    (this._stream = e),
                      (this._reader = null),
                      (this._loaded = 0),
                      (this._filename = null);
                    const t = e.source;
                    (this._withCredentials = t.withCredentials || !1),
                      (this._contentLength = t.length),
                      (this._headersCapability = (0,
                      r.createPromiseCapability)()),
                      (this._disableRange = t.disableRange || !1),
                      (this._rangeChunkSize = t.rangeChunkSize),
                      this._rangeChunkSize ||
                        this._disableRange ||
                        (this._disableRange = !0),
                      "undefined" !== typeof AbortController &&
                        (this._abortController = new AbortController()),
                      (this._isStreamingSupported = !t.disableStream),
                      (this._isRangeSupported = !t.disableRange),
                      (this._headers = i(this._stream.httpHeaders));
                    const s = t.url;
                    fetch(
                      s,
                      a(
                        this._headers,
                        this._withCredentials,
                        this._abortController
                      )
                    )
                      .then((e) => {
                        if (!(0, n.validateResponseStatus)(e.status))
                          throw (0, n.createResponseStatusError)(e.status, s);
                        (this._reader = e.body.getReader()),
                          this._headersCapability.resolve();
                        const t = (t) => e.headers.get(t),
                          { allowRangeRequests: a, suggestedLength: i } = (0,
                          n.validateRangeRequestCapabilities)({
                            getResponseHeader: t,
                            isHttp: this._stream.isHttp,
                            rangeChunkSize: this._rangeChunkSize,
                            disableRange: this._disableRange,
                          });
                        (this._isRangeSupported = a),
                          (this._contentLength = i || this._contentLength),
                          (this._filename = (0, n.extractFilenameFromHeader)(
                            t
                          )),
                          !this._isStreamingSupported &&
                            this._isRangeSupported &&
                            this.cancel(
                              new r.AbortException("Streaming is disabled.")
                            );
                      })
                      .catch(this._headersCapability.reject),
                      (this.onProgress = null);
                  }
                  get headersReady() {
                    return this._headersCapability.promise;
                  }
                  get filename() {
                    return this._filename;
                  }
                  get contentLength() {
                    return this._contentLength;
                  }
                  get isRangeSupported() {
                    return this._isRangeSupported;
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    await this._headersCapability.promise;
                    const { value: e, done: t } = await this._reader.read();
                    return t
                      ? { value: e, done: t }
                      : ((this._loaded += e.byteLength),
                        this.onProgress &&
                          this.onProgress({
                            loaded: this._loaded,
                            total: this._contentLength,
                          }),
                        { value: new Uint8Array(e).buffer, done: !1 });
                  }
                  cancel(e) {
                    this._reader && this._reader.cancel(e),
                      this._abortController && this._abortController.abort();
                  }
                }
                class l {
                  constructor(e, t, s) {
                    (this._stream = e),
                      (this._reader = null),
                      (this._loaded = 0);
                    const o = e.source;
                    (this._withCredentials = o.withCredentials || !1),
                      (this._readCapability = (0, r.createPromiseCapability)()),
                      (this._isStreamingSupported = !o.disableStream),
                      "undefined" !== typeof AbortController &&
                        (this._abortController = new AbortController()),
                      (this._headers = i(this._stream.httpHeaders)),
                      this._headers.append("Range", `bytes=${t}-${s - 1}`);
                    const l = o.url;
                    fetch(
                      l,
                      a(
                        this._headers,
                        this._withCredentials,
                        this._abortController
                      )
                    )
                      .then((e) => {
                        if (!(0, n.validateResponseStatus)(e.status))
                          throw (0, n.createResponseStatusError)(e.status, l);
                        this._readCapability.resolve(),
                          (this._reader = e.body.getReader());
                      })
                      .catch((e) => {
                        if ("AbortError" !== e?.name) throw e;
                      }),
                      (this.onProgress = null);
                  }
                  get isStreamingSupported() {
                    return this._isStreamingSupported;
                  }
                  async read() {
                    await this._readCapability.promise;
                    const { value: e, done: t } = await this._reader.read();
                    return t
                      ? { value: e, done: t }
                      : ((this._loaded += e.byteLength),
                        this.onProgress &&
                          this.onProgress({ loaded: this._loaded }),
                        { value: new Uint8Array(e).buffer, done: !1 });
                  }
                  cancel(e) {
                    this._reader && this._reader.cancel(e),
                      this._abortController && this._abortController.abort();
                  }
                }
              },
            ],
            __webpack_module_cache__ = {};
          function __w_pdfjs_require__(e) {
            var t = __webpack_module_cache__[e];
            if (void 0 !== t) return t.exports;
            var s = (__webpack_module_cache__[e] = { exports: {} });
            return (
              __webpack_modules__[e](s, s.exports, __w_pdfjs_require__),
              s.exports
            );
          }
          var __webpack_exports__ = {};
          return (
            (() => {
              var e = __webpack_exports__;
              Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "addLinkAttributes", {
                  enumerable: !0,
                  get: function () {
                    return t.addLinkAttributes;
                  },
                }),
                Object.defineProperty(e, "getFilenameFromUrl", {
                  enumerable: !0,
                  get: function () {
                    return t.getFilenameFromUrl;
                  },
                }),
                Object.defineProperty(e, "getPdfFilenameFromUrl", {
                  enumerable: !0,
                  get: function () {
                    return t.getPdfFilenameFromUrl;
                  },
                }),
                Object.defineProperty(e, "getXfaPageViewport", {
                  enumerable: !0,
                  get: function () {
                    return t.getXfaPageViewport;
                  },
                }),
                Object.defineProperty(e, "isPdfFile", {
                  enumerable: !0,
                  get: function () {
                    return t.isPdfFile;
                  },
                }),
                Object.defineProperty(e, "LinkTarget", {
                  enumerable: !0,
                  get: function () {
                    return t.LinkTarget;
                  },
                }),
                Object.defineProperty(e, "loadScript", {
                  enumerable: !0,
                  get: function () {
                    return t.loadScript;
                  },
                }),
                Object.defineProperty(e, "PDFDateString", {
                  enumerable: !0,
                  get: function () {
                    return t.PDFDateString;
                  },
                }),
                Object.defineProperty(e, "RenderingCancelledException", {
                  enumerable: !0,
                  get: function () {
                    return t.RenderingCancelledException;
                  },
                }),
                Object.defineProperty(e, "build", {
                  enumerable: !0,
                  get: function () {
                    return s.build;
                  },
                }),
                Object.defineProperty(e, "getDocument", {
                  enumerable: !0,
                  get: function () {
                    return s.getDocument;
                  },
                }),
                Object.defineProperty(e, "LoopbackPort", {
                  enumerable: !0,
                  get: function () {
                    return s.LoopbackPort;
                  },
                }),
                Object.defineProperty(e, "PDFDataRangeTransport", {
                  enumerable: !0,
                  get: function () {
                    return s.PDFDataRangeTransport;
                  },
                }),
                Object.defineProperty(e, "PDFWorker", {
                  enumerable: !0,
                  get: function () {
                    return s.PDFWorker;
                  },
                }),
                Object.defineProperty(e, "version", {
                  enumerable: !0,
                  get: function () {
                    return s.version;
                  },
                }),
                Object.defineProperty(e, "CMapCompressionType", {
                  enumerable: !0,
                  get: function () {
                    return r.CMapCompressionType;
                  },
                }),
                Object.defineProperty(e, "createObjectURL", {
                  enumerable: !0,
                  get: function () {
                    return r.createObjectURL;
                  },
                }),
                Object.defineProperty(e, "createPromiseCapability", {
                  enumerable: !0,
                  get: function () {
                    return r.createPromiseCapability;
                  },
                }),
                Object.defineProperty(e, "createValidAbsoluteUrl", {
                  enumerable: !0,
                  get: function () {
                    return r.createValidAbsoluteUrl;
                  },
                }),
                Object.defineProperty(e, "InvalidPDFException", {
                  enumerable: !0,
                  get: function () {
                    return r.InvalidPDFException;
                  },
                }),
                Object.defineProperty(e, "MissingPDFException", {
                  enumerable: !0,
                  get: function () {
                    return r.MissingPDFException;
                  },
                }),
                Object.defineProperty(e, "OPS", {
                  enumerable: !0,
                  get: function () {
                    return r.OPS;
                  },
                }),
                Object.defineProperty(e, "PasswordResponses", {
                  enumerable: !0,
                  get: function () {
                    return r.PasswordResponses;
                  },
                }),
                Object.defineProperty(e, "PermissionFlag", {
                  enumerable: !0,
                  get: function () {
                    return r.PermissionFlag;
                  },
                }),
                Object.defineProperty(e, "removeNullCharacters", {
                  enumerable: !0,
                  get: function () {
                    return r.removeNullCharacters;
                  },
                }),
                Object.defineProperty(e, "shadow", {
                  enumerable: !0,
                  get: function () {
                    return r.shadow;
                  },
                }),
                Object.defineProperty(e, "UnexpectedResponseException", {
                  enumerable: !0,
                  get: function () {
                    return r.UnexpectedResponseException;
                  },
                }),
                Object.defineProperty(e, "UNSUPPORTED_FEATURES", {
                  enumerable: !0,
                  get: function () {
                    return r.UNSUPPORTED_FEATURES;
                  },
                }),
                Object.defineProperty(e, "Util", {
                  enumerable: !0,
                  get: function () {
                    return r.Util;
                  },
                }),
                Object.defineProperty(e, "VerbosityLevel", {
                  enumerable: !0,
                  get: function () {
                    return r.VerbosityLevel;
                  },
                }),
                Object.defineProperty(e, "AnnotationLayer", {
                  enumerable: !0,
                  get: function () {
                    return n.AnnotationLayer;
                  },
                }),
                Object.defineProperty(e, "GlobalWorkerOptions", {
                  enumerable: !0,
                  get: function () {
                    return a.GlobalWorkerOptions;
                  },
                }),
                Object.defineProperty(e, "renderTextLayer", {
                  enumerable: !0,
                  get: function () {
                    return o.renderTextLayer;
                  },
                }),
                Object.defineProperty(e, "SVGGraphics", {
                  enumerable: !0,
                  get: function () {
                    return l.SVGGraphics;
                  },
                }),
                Object.defineProperty(e, "XfaLayer", {
                  enumerable: !0,
                  get: function () {
                    return c.XfaLayer;
                  },
                });
              var t = __w_pdfjs_require__(1),
                s = __w_pdfjs_require__(6),
                r = __w_pdfjs_require__(2),
                n = __w_pdfjs_require__(17),
                a = __w_pdfjs_require__(12),
                i = __w_pdfjs_require__(4),
                o = __w_pdfjs_require__(19),
                l = __w_pdfjs_require__(20),
                c = __w_pdfjs_require__(21);
              if (i.isNodeJS) {
                const { PDFNodeStream: e } = __w_pdfjs_require__(22);
                (0, s.setPDFNetworkStreamFactory)((t) => new e(t));
              } else {
                const { PDFNetworkStream: e } = __w_pdfjs_require__(25),
                  { PDFFetchStream: r } = __w_pdfjs_require__(26);
                (0, s.setPDFNetworkStreamFactory)((s) =>
                  (0, t.isValidFetchUrl)(s.url) ? new r(s) : new e(s)
                );
              }
            })(),
            __webpack_exports__
          );
        })();
      }),
        (module.exports = factory());
    },
  },
]);
