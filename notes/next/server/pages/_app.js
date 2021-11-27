(() => {
  const exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 2033: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ _app,
      });

      // EXTERNAL MODULE: external "react"
      const external_react_ = __webpack_require__(9297);
      // EXTERNAL MODULE: ./node_modules/next/link.js
      const next_link = __webpack_require__(1664);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      const jsx_runtime_ = __webpack_require__(5282); // CONCATENATED MODULE: ./components/Navbar.jsx
      function Navbar() {
        const navOptions = [
          ["Home", "/"],
          ["About", "/about"],
        ];
        const pdfToolsDropdownOptions = [
          ["Merge PDF", "merge"],
          ["Split PDF", "split"],
          ["Rotate PDF", "rotate"],
        ];
        return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
          className: "navbar navbar-expand-lg navbar-light bg-light",
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className: "navbar-brand",
                  children: "pdftoolz",
                }),
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarNavDropdown",
                "aria-controls": "navbarNavDropdown",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                  className: "navbar-toggler-icon",
                }),
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "collapse navbar-collapse",
                id: "navbarNavDropdown",
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("ul", {
                  className: "navbar-nav",
                  children: [
                    navOptions.map(([text, path], index) =>
                      /*#__PURE__*/ jsx_runtime_.jsx(
                        "li",
                        {
                          className: "nav-item",
                          children: /*#__PURE__*/ jsx_runtime_.jsx(
                            next_link.default,
                            {
                              href: path,
                              children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-link",
                                children: text,
                              }),
                            }
                          ),
                        },
                        index
                      )
                    ),
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)("li", {
                      className: "nav-item dropdown",
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                          className: "nav-link dropdown-toggle",
                          id: "navbarDropdownMenuLink",
                          role: "button",
                          "data-bs-toggle": "dropdown",
                          "aria-expanded": "false",
                          children: "PDF Tools",
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                          className: "dropdown-menu",
                          "aria-labelledby": "navbarDropdownMenuLink",
                          children: pdfToolsDropdownOptions.map(
                            ([text, path], index) =>
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                "li",
                                {
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    next_link.default,
                                    {
                                      href: `/pdf-tools/${path}`,
                                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                                        "div",
                                        {
                                          className: "dropdown-item",
                                          children: text,
                                        }
                                      ),
                                    }
                                  ),
                                },
                                index
                              )
                          ),
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
      // EXTERNAL MODULE: external "next/head"
      const head_ = __webpack_require__(701);
      const head_default = /*#__PURE__*/ __webpack_require__.n(head_); // CONCATENATED MODULE: external "react-top-loading-bar"
      const external_react_top_loading_bar_namespaceObject = require("react-top-loading-bar");
      const external_react_top_loading_bar_default =
        /*#__PURE__*/ __webpack_require__.n(
          external_react_top_loading_bar_namespaceObject
        );
      // EXTERNAL MODULE: external "next/router"
      const router_ = __webpack_require__(6731); // CONCATENATED MODULE: ./pages/_app.js
      function ownKeys(object, enumerableOnly) {
        const keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(sym => {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          const source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(key => {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(key => {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function MyApp({ Component, pageProps }) {
        const loadingRef = (0, external_react_.useRef)(null);
        const router = (0, router_.useRouter)();
        (0, external_react_.useEffect)(() => {
          router.events.on("routeChangeStart", () =>
            loadingRef.current.continuousStart()
          );
          router.events.on("routeChangeComplete", () =>
            loadingRef.current.complete()
          );
          router.events.on("routeChangeError", () =>
            loadingRef.current.complete()
          );
        }, []);
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(head_default(), {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
                  rel: "stylesheet",
                  integrity:
                    "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
                  crossOrigin: "anonymous",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                  src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
                  integrity:
                    "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
                  crossOrigin: "anonymous",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "manifest",
                  href: "/manifest.json",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-icon",
                  href: "apple-icon-180.png",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                  name: "apple-mobile-web-app-capable",
                  content: "yes",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2048-2732.jpg",
                  media:
                    "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2732-2048.jpg",
                  media:
                    "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-1668-2388.jpg",
                  media:
                    "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2388-1668.jpg",
                  media:
                    "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-1536-2048.jpg",
                  media:
                    "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2048-1536.jpg",
                  media:
                    "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-1668-2224.jpg",
                  media:
                    "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2224-1668.jpg",
                  media:
                    "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-1620-2160.jpg",
                  media:
                    "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2160-1620.jpg",
                  media:
                    "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-1284-2778.jpg",
                  media:
                    "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2778-1284.jpg",
                  media:
                    "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-1170-2532.jpg",
                  media:
                    "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                  rel: "apple-touch-startup-image",
                  href: "apple-splash-2532-1170.jpg",
                  media:
                    "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(
              external_react_top_loading_bar_default(),
              {
                ref: loadingRef,
              }
            ),
            ";",
            /*#__PURE__*/ jsx_runtime_.jsx(
              Component,
              _objectSpread({}, pageProps)
            ),
          ],
        });
      }

      /* harmony default export */ const _app = MyApp;

      /***/
    },

    /***/ 9325: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/server/denormalize-page-path.js");

      /***/
    },

    /***/ 5378: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

      /***/
    },

    /***/ 7162: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/mitt.js");

      /***/
    },

    /***/ 8773: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/router-context.js");

      /***/
    },

    /***/ 2248: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

      /***/
    },

    /***/ 9372: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

      /***/
    },

    /***/ 665: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

      /***/
    },

    /***/ 2747: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

      /***/
    },

    /***/ 333: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

      /***/
    },

    /***/ 3456: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

      /***/
    },

    /***/ 7620: /***/ (module) => {
      "use strict";
      module.exports = require("next/dist/shared/lib/utils.js");

      /***/
    },

    /***/ 701: /***/ (module) => {
      "use strict";
      module.exports = require("next/head");

      /***/
    },

    /***/ 6731: /***/ (module) => {
      "use strict";
      module.exports = require("next/router");

      /***/
    },

    /***/ 9297: /***/ (module) => {
      "use strict";
      module.exports = require("react");

      /***/
    },

    /***/ 5282: /***/ (module) => {
      "use strict";
      module.exports = require("react/jsx-runtime");

      /***/
    },

    /***/ 2431: /***/ () => {
      /* (ignored) */
      /***/
    },
  };
  // load runtime
  const __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  const __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  const __webpack_exports__ = __webpack_require__.X(0, [664], () =>
    __webpack_exec__(2033)
  );
  module.exports = __webpack_exports__;
})();
