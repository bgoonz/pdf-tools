(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2167: function (e, t, n) {
      "use strict";
      var r = n(3038);
      t.default = void 0;
      var a,
        i = (a = n(7294)) && a.__esModule ? a : { default: a },
        o = n(1063),
        l = n(4651),
        s = n(7426);
      var c = {};
      function p(e, t, n, r) {
        if (e && o.isLocalURL(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var a =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          c[t + "%" + n + (a ? "%" + a : "")] = !0;
        }
      }
      var u = function (e) {
        var t,
          n = !1 !== e.prefetch,
          a = l.useRouter(),
          u = i.default.useMemo(
            function () {
              var t = o.resolveHref(a, e.href, !0),
                n = r(t, 2),
                i = n[0],
                l = n[1];
              return { href: i, as: e.as ? o.resolveHref(a, e.as) : l || i };
            },
            [a, e.href, e.as]
          ),
          d = u.href,
          f = u.as,
          h = e.children,
          v = e.replace,
          g = e.shallow,
          m = e.scroll,
          b = e.locale;
        "string" === typeof h && (h = i.default.createElement("a", null, h));
        var x =
          (t = i.default.Children.only(h)) && "object" === typeof t && t.ref,
          j = s.useIntersection({ rootMargin: "200px" }),
          w = r(j, 2),
          y = w[0],
          k = w[1],
          E = i.default.useCallback(
            function (e) {
              y(e),
                x &&
                ("function" === typeof x
                  ? x(e)
                  : "object" === typeof x && (x.current = e));
            },
            [x, y]
          );
        i.default.useEffect(
          function () {
            var e = k && n && o.isLocalURL(d),
              t = "undefined" !== typeof b ? b : a && a.locale,
              r = c[d + "%" + f + (t ? "%" + t : "")];
            e && !r && p(a, d, f, { locale: t });
          },
          [f, d, k, b, n, a]
        );
        var O = {
          ref: E,
          onClick: function (e) {
            t.props &&
              "function" === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
              (function (e, t, n, r, a, i, l, s) {
                ("A" !== e.currentTarget.nodeName ||
                  (!(function (e) {
                    var t = e.currentTarget.target;
                    return (
                      (t && "_self" !== t) ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.shiftKey ||
                      e.altKey ||
                      (e.nativeEvent && 2 === e.nativeEvent.which)
                    );
                  })(e) &&
                    o.isLocalURL(n))) &&
                  (e.preventDefault(),
                    null == l && r.indexOf("#") >= 0 && (l = !1),
                    t[a ? "replace" : "push"](n, r, {
                      shallow: i,
                      locale: s,
                      scroll: l,
                    }));
              })(e, a, d, f, v, g, m, b);
          },
          onMouseEnter: function (e) {
            o.isLocalURL(d) &&
              (t.props &&
                "function" === typeof t.props.onMouseEnter &&
                t.props.onMouseEnter(e),
                p(a, d, f, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === t.type && !("href" in t.props))) {
          var N = "undefined" !== typeof b ? b : a && a.locale,
            S =
              a &&
              a.isLocaleDomain &&
              o.getDomainLocale(f, N, a && a.locales, a && a.domainLocales);
          O.href = S || o.addBasePath(o.addLocale(f, N, a && a.defaultLocale));
        }
        return i.default.cloneElement(t, O);
      };
      t.default = u;
    },
    7426: function (e, t, n) {
      "use strict";
      var r = n(3038);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !o,
            s = a.useRef(),
            c = a.useState(!1),
            p = r(c, 2),
            u = p[0],
            d = p[1],
            f = a.useCallback(
              function (e) {
                s.current && (s.current(), (s.current = void 0)),
                  n ||
                  u ||
                  (e &&
                    e.tagName &&
                    (s.current = (function (e, t, n) {
                      var r = (function (e) {
                        var t = e.rootMargin || "",
                          n = l.get(t);
                        if (n) return n;
                        var r = new Map(),
                          a = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                              var t = r.get(e.target),
                                n =
                                  e.isIntersecting ||
                                  e.intersectionRatio > 0;
                              t && n && t(n);
                            });
                          }, e);
                        return (
                          l.set(
                            t,
                            (n = { id: t, observer: a, elements: r })
                          ),
                          n
                        );
                      })(n),
                        a = r.id,
                        i = r.observer,
                        o = r.elements;
                      return (
                        o.set(e, t),
                        i.observe(e),
                        function () {
                          o.delete(e),
                            i.unobserve(e),
                            0 === o.size && (i.disconnect(), l.delete(a));
                        }
                      );
                    })(
                      e,
                      function (e) {
                        return e && d(e);
                      },
                      { rootMargin: t }
                    )));
              },
              [n, t, u]
            );
          return (
            a.useEffect(
              function () {
                if (!o && !u) {
                  var e = i.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return i.cancelIdleCallback(e);
                  };
                }
              },
              [u]
            ),
            [f, u]
          );
        });
      var a = n(7294),
        i = n(3447),
        o = "undefined" !== typeof IntersectionObserver;
      var l = new Map();
    },
    6503: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var r = n(4942),
        a = n(7294),
        i = (n(3146), n(885)),
        o = n(1664),
        l = n(5893);
      function s() {
        return (0, l.jsx)("nav", {
          className: "navbar navbar-expand-lg navbar-light bg-light",
          children: (0, l.jsxs)("div", {
            className: "container-fluid",
            children: [
              (0, l.jsx)(o.default, {
                href: "/",
                children: (0, l.jsx)("div", {
                  className: "navbar-brand",
                  children: "pdftoolz",
                }),
              }),
              (0, l.jsx)("button", {
                className: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarNavDropdown",
                "aria-controls": "navbarNavDropdown",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: (0, l.jsx)("span", {
                  className: "navbar-toggler-icon",
                }),
              }),
              (0, l.jsx)("div", {
                className: "collapse navbar-collapse",
                id: "navbarNavDropdown",
                children: (0, l.jsxs)("ul", {
                  className: "navbar-nav",
                  children: [
                    [
                      ["Home", "/"],

                    ].map(function (e, t) {
                      var n = (0, i.Z)(e, 2),
                        r = n[0],
                        a = n[1];
                      return (0,
                        l.jsx)("li", { className: "nav-item", children: (0, l.jsx)(o.default, { href: a, children: (0, l.jsx)("div", { className: "nav-link", children: r }) }) }, t);
                    }),
                    (0, l.jsxs)("li", {
                      className: "nav-item dropdown",
                      children: [
                        (0, l.jsx)("div", {
                          className: "nav-link dropdown-toggle",
                          id: "navbarDropdownMenuLink",
                          role: "button",
                          "data-bs-toggle": "dropdown",
                          "aria-expanded": "false",
                          children: "PDF Tools",
                        }),
                        (0, l.jsx)("ul", {
                          className: "dropdown-menu",
                          "aria-labelledby": "navbarDropdownMenuLink",
                          children: [
                            ["Merge PDF", "merge"],
                            ["Split PDF", "split"],
                            ["Rotate PDF", "rotate"],
                          ].map(function (e, t) {
                            var n = (0, i.Z)(e, 2),
                              r = n[0],
                              a = n[1];
                            return (0,
                              l.jsx)("li", { children: (0, l.jsx)(o.default, { href: "/pdf-tools/".concat(a), children: (0, l.jsx)("div", { className: "dropdown-item", children: r }) }) }, t);
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var c = n(9008);
      const p = () => { };
      function u(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e);
      }
      var d = (0, a.forwardRef)(
        (
          {
            progress: e,
            height: t = 2,
            className: n = "",
            color: r = "red",
            background: i = "transparent",
            onLoaderFinished: o,
            transitionTime: l = 300,
            loaderSpeed: s = 500,
            waitingTime: c = 1e3,
            shadow: d = !0,
            containerStyle: f = {},
            style: h = {},
            shadowStyle: v = {},
            containerClassName: g = "",
          },
          m
        ) => {
          const b = (0, a.useRef)(!1),
            [x, j] = (0, a.useState)(0),
            [w, y] = (0, a.useState)({
              active: !1,
              startingValue: 20,
              refreshRate: 1e3,
            }),
            [k, E] = (0, a.useState)(!1),
            [O, N] = (0, a.useState)({ active: !1, value: 20 }),
            S = {
              height: "100%",
              background: r,
              transition: `all ${s}ms ease`,
              width: "0%",
            },
            P = {
              position: "fixed",
              top: 0,
              left: 0,
              height: t,
              background: i,
              zIndex: 99999999999,
              width: "100%",
            },
            M = {
              boxShadow: `0 0 10px ${r}, 0 0 10px ${r}`,
              width: "5%",
              opacity: 1,
              position: "absolute",
              height: "100%",
              transition: `all ${s}ms ease`,
              transform: "rotate(3deg) translate(0px, -4px)",
              left: "-10rem",
            },
            [R, C] = (0, a.useState)(S),
            [_, D] = (0, a.useState)(M);
          (0, a.useEffect)(
            () => (
              (b.current = !0),
              () => {
                b.current = !1;
              }
            ),
            []
          ),
            (0, a.useImperativeHandle)(m, () => ({
              continuousStart(e, t = 1e3) {
                if (O.active) return;
                if (k)
                  return void console.warn(
                    "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                  );
                const n = e || u(10, 20);
                y({ active: !0, refreshRate: t, startingValue: e }),
                  j(n),
                  L(n);
              },
              staticStart(e) {
                if (w.active) return;
                if (k)
                  return void console.warn(
                    "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                  );
                const t = e || u(30, 50);
                N({ active: !0, value: t }), j(t), L(t);
              },
              complete() {
                k
                  ? console.warn(
                    "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                  )
                  : (j(100), L(100));
              },
            })),
            (0, a.useEffect)(() => {
              C({ ...R, background: r }),
                D({ ..._, boxShadow: `0 0 10px ${r}, 0 0 5px ${r}` });
            }, [r]),
            (0, a.useEffect)(() => {
              if (m) {
                if (m && void 0 !== e)
                  return void console.warn(
                    'react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.'
                  );
                L(x), E(!1);
              } else e && L(e), E(!0);
            }, [e]);
          const L = (e) => {
            e >= 100
              ? (C({ ...R, width: "100%" }),
                d && D({ ..._, left: e - 10 + "%" }),
                setTimeout(() => {
                  b.current &&
                    (C({
                      ...R,
                      opacity: 0,
                      width: "100%",
                      transition: `all ${l}ms ease-out`,
                      color: r,
                    }),
                      setTimeout(() => {
                        b.current &&
                          (w.active && (y({ ...w, active: !1 }), j(0), L(0)),
                            O.active && (N({ ...O, active: !1 }), j(0), L(0)),
                            o && o(),
                            j(0),
                            L(0));
                      }, l));
                }, c))
              : (C((t) => ({
                ...t,
                width: e + "%",
                opacity: 1,
                transition: e > 0 ? `all ${s}ms ease` : "",
              })),
                d &&
                D({
                  ..._,
                  left: e - 5.5 + "%",
                  transition: e > 0 ? `all ${s}ms ease` : "",
                }));
          };
          return (
            (function (e, t, n) {
              const r = (0, a.useRef)(p);
              (0, a.useEffect)(() => {
                r.current = e;
              }),
                (0, a.useEffect)(() => {
                  n && null !== t && !1 !== t && r.current();
                }, [n]),
                (0, a.useEffect)(() => {
                  if (null === t || !1 === t) return;
                  const e = setInterval(() => r.current(), t);
                  return () => clearInterval(e);
                }, [t]);
            })(
              () => {
                const e = u(10, 20);
                x + e < 90 && (j(x + e), L(x + e));
              },
              w.active ? w.refreshRate : null
            ),
            (0, a.createElement)(
              "div",
              { className: g, style: { ...P, ...f } },
              (0, a.createElement)(
                "div",
                { className: n, style: { ...R, ...h } },
                d
                  ? (0, a.createElement)("div", { style: { ..._, ...v } })
                  : null
              )
            )
          );
        }
      ),
        f = n(1163);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
              (0, r.Z)(e, t, n[t]);
            })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var g = function (e) {
        var t = e.Component,
          n = e.pageProps,
          r = (0, a.useRef)(null),
          i = (0, f.useRouter)();
        return (
          (0, a.useEffect)(function () {
            i.events.on("routeChangeStart", function () {
              return r.current.continuousStart();
            }),
              i.events.on("routeChangeComplete", function () {
                return r.current.complete();
              }),
              i.events.on("routeChangeError", function () {
                return r.current.complete();
              });
          }, []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(c.default, {
                children: [
                  (0, l.jsx)("link", {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
                    rel: "stylesheet",
                    integrity:
                      "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
                    crossOrigin: "anonymous",
                  }),
                  (0, l.jsx)("script", {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
                    integrity:
                      "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
                    crossOrigin: "anonymous",
                  }),
                  (0, l.jsx)("link", {
                    rel: "manifest",
                    href: "/manifest.json",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-icon",
                    href: "apple-icon-180.png",
                  }),
                  (0, l.jsx)("meta", {
                    name: "apple-mobile-web-app-capable",
                    content: "yes",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2048-2732.jpg",
                    media:
                      "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2732-2048.jpg",
                    media:
                      "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-1668-2388.jpg",
                    media:
                      "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2388-1668.jpg",
                    media:
                      "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-1536-2048.jpg",
                    media:
                      "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2048-1536.jpg",
                    media:
                      "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-1668-2224.jpg",
                    media:
                      "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2224-1668.jpg",
                    media:
                      "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-1620-2160.jpg",
                    media:
                      "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2160-1620.jpg",
                    media:
                      "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-1284-2778.jpg",
                    media:
                      "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2778-1284.jpg",
                    media:
                      "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-1170-2532.jpg",
                    media:
                      "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                  }),
                  (0, l.jsx)("link", {
                    rel: "apple-touch-startup-image",
                    href: "apple-splash-2532-1170.jpg",
                    media:
                      "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                  }),
                ],
              }),
              (0, l.jsx)(s, {}),
              (0, l.jsx)(d, { ref: r }),
              ";",
              (0, l.jsx)(t, v({}, n)),
            ],
          })
        );
      };
    },
    1780: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(6503);
        },
      ]);
    },
    3146: function () { },
    9008: function (e, t, n) {
      e.exports = n(639);
    },
    1664: function (e, t, n) {
      e.exports = n(2167);
    },
    1163: function (e, t, n) {
      e.exports = n(4651);
    },
    907: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    4942: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    885: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(181);
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (s) {
                (l = !0), (a = s);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (0, r.Z)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    181: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(907);
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? (0, r.Z)(e, t)
                : void 0
          );
        }
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1780), t(4651);
    });
    var n = e.O();
    _N_E = n;
  },
]);
