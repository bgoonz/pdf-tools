(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [730],
  {
    7313: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(7294),
        r = n(4073),
        s = n.n(r),
        i = n(5893);
      function l(e) {
        var t = e.setFiles,
          n = e.multiple,
          r = (0, a.useRef)(null);
        return (0, i.jsx)("div", {
          className: "d-flex align-items-center justify-content-center",
          style: { height: "80vh" },
          children: (0, i.jsxs)("div", {
            ref: r,
            className: s().dropFileInput,
            onDragEnter: function () {
              return r.current.classList.add("dragover");
            },
            onDragLeave: function () {
              return r.current.classList.remove("dragover");
            },
            onDrop: function () {
              return r.current.classList.remove("dragover");
            },
            children: [
              (0, i.jsxs)("div", {
                className: s().dropFileInput__label,
                children: [
                  (0, i.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "70",
                    height: "70",
                    fill: "currentColor",
                    className: "bi bi-cloud-arrow-up",
                    viewBox: "0 0 16 16",
                    children: [
                      (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z",
                      }),
                      (0, i.jsx)("path", {
                        d: "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z",
                      }),
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Drag & Drop your files here or click to browse files",
                  }),
                ],
              }),
              (0, i.jsx)("input", {
                type: "file",
                accept: ".pdf",
                value: "",
                onChange: function (e) {
                  return t(e.target.files);
                },
                multiple: n,
              }),
            ],
          }),
        });
      }
    },
    2238: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var a = n(5861),
        r = n(7757),
        s = n.n(r),
        i = n(7294),
        l = n(2982),
        c = n(1163),
        o = n(644),
        d = n(6733),
        u = n.n(d),
        h = n(5893);
      function g(e) {
        var t = e.file,
          n = e.deleteFileHandler,
          a = (0, i.useRef)(),
          r = t.degrees || 0;
        return (
          (0, i.useEffect)(function () {
            (t.degrees = r),
              (a.current.style.transform = "rotate(".concat(r, "deg)"));
          }, []),
          (0, h.jsxs)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr",
              placeItems: "center",
              gridTemplateRows: "3fr 1fr 4fr",
              height: "230px",
              textAlign: "center",
              overflow: "hidden",
            },
            children: [
              (0, h.jsx)("img", {
                src: t.image,
                alt: "",
                style: {
                  height: "100px",
                  width: "100px",
                  transition: "ease-in 0.1s",
                },
                ref: a,
              }),
              (0, h.jsx)("div", {
                style: {
                  width: "180px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
                children: (0, h.jsx)("span", { children: t.name }),
              }),
              (0, h.jsxs)("div", {
                children: [
                  (0, h.jsxs)("div", {
                    className:
                      "d-flex flex-wrap align-items-center justify-content-center my-1",
                    style: { width: "100%" },
                    children: [
                      (0, h.jsx)("button", {
                        className: "btn btn-outline-success mx-1",
                        onClick: function () {
                          (r -= 90),
                            (t.degrees = r % 360 == 0 ? 0 : r % 360),
                            (a.current.style.transform = "rotate(".concat(
                              r,
                              "deg)"
                            ));
                        },
                        children: (0, h.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fill: "currentColor",
                          className: "bi bi-arrow-counterclockwise",
                          viewBox: "0 0 16 16",
                          children: [
                            (0, h.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z",
                            }),
                            (0, h.jsx)("path", {
                              d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z",
                            }),
                          ],
                        }),
                      }),
                      (0, h.jsx)("button", {
                        className: "btn btn-outline-success mx-1",
                        onClick: function () {
                          (r += 90),
                            (t.degrees = r % 360 == 0 ? 0 : r % 360),
                            (a.current.style.transform = "rotate(".concat(
                              r,
                              "deg)"
                            ));
                        },
                        children: (0, h.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fill: "currentColor",
                          className: "bi bi-arrow-clockwise",
                          viewBox: "0 0 16 16",
                          children: [
                            (0, h.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z",
                            }),
                            (0, h.jsx)("path", {
                              d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, h.jsx)("div", {
                    children: (0, h.jsx)("button", {
                      className: "btn btn-outline-danger mx-1 d-inline",
                      onClick: function () {
                        return n(t);
                      },
                      children: (0, h.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-trash",
                        viewBox: "0 0 16 16",
                        children: [
                          (0, h.jsx)("path", {
                            d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z",
                          }),
                          (0, h.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function f(e) {
        var t = e.file,
          n = e.deleteFileHandler,
          a = (0, i.useRef)(),
          r = t.degrees || 0;
        return (
          (0, i.useEffect)(function () {
            (t.degrees = r),
              (a.current.style.transform = "rotate(".concat(r, "deg)"));
          }, []),
          (t.range = t.range || [0, t.pages]),
          (0, h.jsxs)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr",
              placeItems: "center",
              gridTemplateRows: "3fr 1fr 4fr 2fr",
              height: "280px",
              textAlign: "center",
              overflow: "hidden",
            },
            children: [
              (0, h.jsx)("img", {
                src: t.image,
                alt: "",
                style: {
                  height: "100px",
                  width: "100px",
                  transition: "ease-in 0.1s",
                },
                ref: a,
              }),
              (0, h.jsx)("div", {
                style: {
                  width: "180px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
                children: (0, h.jsx)("span", { children: t.name }),
              }),
              (0, h.jsxs)("div", {
                children: [
                  (0, h.jsxs)("div", {
                    className:
                      "d-flex flex-wrap align-items-center justify-content-center my-1",
                    style: { width: "100%" },
                    children: [
                      (0, h.jsx)("button", {
                        className: "btn btn-outline-success mx-1",
                        onClick: function () {
                          (r -= 90),
                            (t.degrees = r % 360 == 0 ? 0 : r % 360),
                            (a.current.style.transform = "rotate(".concat(
                              r,
                              "deg)"
                            ));
                        },
                        children: (0, h.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fill: "currentColor",
                          className: "bi bi-arrow-counterclockwise",
                          viewBox: "0 0 16 16",
                          children: [
                            (0, h.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z",
                            }),
                            (0, h.jsx)("path", {
                              d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z",
                            }),
                          ],
                        }),
                      }),
                      (0, h.jsx)("button", {
                        className: "btn btn-outline-success mx-1",
                        onClick: function () {
                          (r += 90),
                            (t.degrees = r % 360 == 0 ? 0 : r % 360),
                            (a.current.style.transform = "rotate(".concat(
                              r,
                              "deg)"
                            ));
                        },
                        children: (0, h.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fill: "currentColor",
                          className: "bi bi-arrow-clockwise",
                          viewBox: "0 0 16 16",
                          children: [
                            (0, h.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z",
                            }),
                            (0, h.jsx)("path", {
                              d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, h.jsx)("div", {
                    children: (0, h.jsx)("button", {
                      className: "btn btn-outline-danger mx-1 d-inline",
                      onClick: function () {
                        return n(t);
                      },
                      children: (0, h.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-trash",
                        viewBox: "0 0 16 16",
                        children: [
                          (0, h.jsx)("path", {
                            d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z",
                          }),
                          (0, h.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, h.jsxs)("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridGap: "2px",
                  padding: "10px",
                },
                children: [
                  (0, h.jsx)("input", {
                    id: "from",
                    placeholder: "From",
                    defaultValue: t.range[0],
                    type: "number",
                    className: "form-control",
                    min: 0,
                    max: t.pages,
                    onChange: function (e) {
                      e.target.value < 0
                        ? (e.target.value = 1)
                        : (t.range = [parseInt(e.target.value), t.range[1]]);
                    },
                  }),
                  (0, h.jsx)("input", {
                    id: "to",
                    placeholder: "To",
                    defaultValue: t.range[1],
                    type: "number",
                    className: "form-control",
                    min: 0,
                    max: t.pages,
                    onChange: function (e) {
                      e.target.value > t.pages
                        ? (e.target.value = t.pages)
                        : (t.range = [t.range[0], parseInt(e.target.value)]);
                    },
                  }),
                ],
              }),
            ],
          })
        );
      }
      var p = (0, o.JV)(function (e) {
          var t = e.tabIndex;
          return (0,
          h.jsx)("span", { className: u().dragHandler, tabIndex: t, children: (0, h.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-grip-horizontal", viewBox: "0 0 16 16", children: (0, h.jsx)("path", { d: "M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" }) }) });
        }),
        m = (0, o.hv)(function (e) {
          var t = e.children;
          return (0,
          h.jsx)("div", { className: u().dragContainer, children: t });
        });
      function x(e) {
        var t = e.files,
          n = e.setFiles,
          a = (0, c.useRouter)().pathname.split("/").reverse()[0],
          r = function (e) {
            var a = t;
            a.forEach(function (t) {
              t == e && (t.deleted = !0);
            }),
              n((0, l.Z)(a));
          },
          s = (0, o.gU)(function (e) {
            var t = e.value;
            return "split" === a
              ? (0, h.jsxs)("div", {
                  className: u().dragElement2,
                  children: [
                    (0, h.jsx)(p, {}),
                    (0, h.jsx)(f, { file: t, deleteFileHandler: r }),
                  ],
                })
              : (0, h.jsxs)("div", {
                  className: u().dragElement,
                  children: [
                    (0, h.jsx)(p, {}),
                    (0, h.jsx)(g, { file: t, deleteFileHandler: r }),
                  ],
                });
          }),
          i = !0;
        return (0, h.jsxs)(m, {
          onSortEnd: function (e) {
            var a,
              r,
              s,
              i = e.oldIndex,
              l = e.newIndex;
            n(
              ((r = i),
              (s = l),
              (function (e, t, n) {
                e.splice(n < 0 ? e.length + n : n, 0, e.splice(t, 1)[0]);
              })((a = (a = t).slice()), r, s),
              a)
            );
          },
          useDragHandle: !0,
          axis: "xy",
          children: [
            t.map(function (e, t) {
              if (!e.deleted)
                return (
                  (i = !1),
                  (0, h.jsx)(s, { index: t, value: e }, "item-".concat(t))
                );
            }),
            i && (0, h.jsx)("h2", { children: "No Files" }),
          ],
        });
      }
      var v = n(9299);
      v.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.js";
      var w = (function () {
        var e = (0, a.Z)(
          s().mark(function e(t) {
            var n, a, r, i, l, c, o;
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      (0, v.getDocument)({ url: URL.createObjectURL(t) })
                        .promise
                    );
                  case 2:
                    return (n = e.sent), (e.next = 5), n.getPage(1);
                  case 5:
                    return (
                      (a = e.sent),
                      1.5,
                      (r = a.getViewport({ scale: 1.5 })),
                      (i = document.createElement("canvas")),
                      (l = i.getContext("2d")),
                      (i.height = r.height),
                      (i.width = r.width),
                      (c = { canvasContext: l, viewport: r }),
                      (o = a.render(c)),
                      (e.next = 16),
                      o.promise
                    );
                  case 16:
                    return e.abrupt("return", {
                      data: i.toDataURL(),
                      pageCount: n.numPages,
                    });
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      function j(e) {
        var t = e.filesLocal,
          n = e.setFilesLocal,
          r = e.downloadPDFHandler,
          c = e.multiple,
          o = (0, i.useRef)();
        return (0, h.jsxs)("div", {
          className: "container-fluid",
          children: [
            (0, h.jsx)("input", {
              type: "file",
              multiple: c,
              className: "form-control d-none",
              accept: ".pdf",
              ref: o,
              onChange: (function () {
                var e = (0, a.Z)(
                  s().mark(function e(a) {
                    var r, i, c, d, u, h;
                    return s().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (r = document.getElementById("addFileButton")),
                              (i =
                                document.querySelectorAll(
                                  "#processFileButton"
                                )),
                              (r.innerText = "Adding Files ..."),
                              (r.disabled = !0),
                              i.forEach(function (e) {
                                return (e.disabled = !0);
                              }),
                              (c = []),
                              (d = 0);
                          case 7:
                            if (!(d < a.target.files.length)) {
                              e.next = 18;
                              break;
                            }
                            return (u = a.target.files[d]), (e.next = 11), w(u);
                          case 11:
                            (h = e.sent),
                              (u.image = h.data),
                              (u.pages = h.pageCount),
                              c.push(u);
                          case 15:
                            d++, (e.next = 7);
                            break;
                          case 18:
                            n([].concat((0, l.Z)(t), c)),
                              (o.current.value = ""),
                              (r.innerText = "Add Files"),
                              (r.disabled = !1),
                              i.forEach(function (e) {
                                return (e.disabled = !1);
                              });
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            }),
            (0, h.jsxs)("div", {
              className: "row justify-content-md-center align-items-center",
              children: [
                (0, h.jsxs)("div", {
                  className: "col-sm-4 d-flex flex-column",
                  children: [
                    (0, h.jsx)("button", {
                      id: "processFileButton",
                      className: "btn btn-danger my-2 mx-1",
                      onClick: function (e) {
                        r(e);
                      },
                      children: "Save and Download",
                    }),
                    (0, h.jsx)("button", {
                      className: "btn btn-primary my-2",
                      type: "button",
                      id: "addFileButton",
                      onClick: function () {
                        return o.current.click();
                      },
                      children: "Add Files",
                    }),
                    (0, h.jsxs)("div", {
                      className: "accordion",
                      id: "settings",
                      children: [
                        (0, h.jsxs)("div", {
                          className: "accordion-item",
                          children: [
                            (0, h.jsx)("h2", {
                              className: "accordion-header",
                              id: "pageSettings",
                              children: (0, h.jsx)("button", {
                                className: "accordion-button collapsed",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#pageSetting",
                                "aria-expanded": "true",
                                "aria-controls": "pageSetting",
                                children: "Page Settings",
                              }),
                            }),
                            (0, h.jsx)("div", {
                              id: "pageSetting",
                              className: "accordion-collapse collapse",
                              "aria-labelledby": "pageSettings",
                              "data-bs-parent": "#settings",
                              children: (0, h.jsx)("div", {
                                className: "accordion-body",
                                children: "Page Settings Goes Here",
                              }),
                            }),
                          ],
                        }),
                        (0, h.jsxs)("div", {
                          className: "accordion-item",
                          children: [
                            (0, h.jsx)("h2", {
                              className: "accordion-header",
                              id: "marginSettings",
                              children: (0, h.jsx)("button", {
                                className: "accordion-button",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#marginSetting",
                                "aria-expanded": "true",
                                "aria-controls": "marginSetting",
                                children: "Margin Settings",
                              }),
                            }),
                            (0, h.jsx)("div", {
                              id: "marginSetting",
                              className: "accordion-collapse collapse",
                              "aria-labelledby": "marginSettings",
                              "data-bs-parent": "#settings",
                              children: (0, h.jsx)("div", {
                                className: "accordion-body",
                                children: "Margin Settings Goes Here",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, h.jsx)("div", {
                  className: "col-sm-8 my-3",
                  style: {
                    height: "50vh",
                    overflowY: "scroll",
                    border: "2px dashed red",
                  },
                  children: (0, h.jsx)("div", {
                    className: "container",
                    children: (0, h.jsx)("div", {
                      className: "row gy-3",
                      style: { padding: "2rem 0px" },
                      children: (0, h.jsx)(x, { files: t, setFiles: n }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        var t = e.files,
          n = e.method,
          r = e.multiple,
          l = (0, i.useState)([]),
          c = l[0],
          o = l[1];
        (0, i.useEffect)(function () {
          var e = [],
            n = Array.from(t);
          (function () {
            var t = (0, a.Z)(
              s().mark(function t() {
                var a, r, i, l, c;
                return s().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (a = document.getElementById("addFileButton")),
                          (r = document.querySelectorAll("#processFileButton")),
                          (a.innerText = "Adding Files ..."),
                          (a.disabled = !0),
                          r.forEach(function (e) {
                            return (e.disabled = !0);
                          }),
                          (i = 0);
                      case 6:
                        if (!(i < n.length)) {
                          t.next = 17;
                          break;
                        }
                        return (l = n[i]), (t.next = 10), w(l);
                      case 10:
                        (c = t.sent),
                          (l.image = c.data),
                          (l.pages = c.pageCount),
                          e.push(l);
                      case 14:
                        i++, (t.next = 6);
                        break;
                      case 17:
                        o(e),
                          (a.innerText = "Add Files"),
                          (a.disabled = !1),
                          r.forEach(function (e) {
                            return (e.disabled = !1);
                          });
                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })()();
        }, []);
        var d = (function () {
          var e = (0, a.Z)(
            s().mark(function e(t) {
              var a;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t.target.innerText = "Processing Files...."),
                        (t.target.disabled = !0),
                        (a = c.filter(function (e) {
                          return !e.deleted;
                        })),
                        (e.next = 5),
                        n(a)
                      );
                    case 5:
                      (t.target.innerText = "Save and Download"),
                        (t.target.disabled = !1);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return (0, h.jsx)("div", {
          className: "container",
          children: (0, h.jsx)(j, {
            filesLocal: c,
            setFilesLocal: o,
            downloadPDFHandler: d,
            multiple: r,
          }),
        });
      }
    },
    6733: function (e) {
      e.exports = {
        dragHandler: "filelist_dragHandler__38ZOC",
        dragContainer: "filelist_dragContainer__334O1",
        dragElement: "filelist_dragElement__3PrGi",
        dragElement2: "filelist_dragElement2__3MFpg",
      };
    },
    4073: function (e) {
      e.exports = {
        dropFileInput: "fileupload_dropFileInput__3eFei",
        dragover: "fileupload_dragover__IPQUE",
        dropFileInput__label: "fileupload_dropFileInput__label__36oRU",
      };
    },
    3414: function () {},
    172: function () {},
    2001: function () {},
    3779: function () {},
    2258: function () {},
  },
]);
