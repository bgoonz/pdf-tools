(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [192],
  {
    3298: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n(7294),
        s = n(7313),
        i = n(2238),
        a = n(5861),
        u = n(7757),
        c = n.n(u),
        l = n(4835),
        o = n(5733),
        f = n.n(o),
        p = n(8102),
        d = (function () {
          var e = (0, a.Z)(
            c().mark(function e(t) {
              var n, r, s, i, a, u, o;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = new (f())()), (r = 0);
                    case 2:
                      if (!(r < t.length)) {
                        e.next = 21;
                        break;
                      }
                      return (
                        (s = t[r]),
                        (e.next = 6),
                        l.createPDF.PDFDocumentFromFile(s)
                      );
                    case 6:
                      return (
                        (i = e.sent),
                        (e.next = 9),
                        (0, l.splitPDF)(i, s.range, { degree: s.degrees })
                      );
                    case 9:
                      if (typeof (a = e.sent) === String) {
                        e.next = 17;
                        break;
                      }
                      return (e.next = 13), a.save();
                    case 13:
                      (u = e.sent),
                        n.file("split-".concat(s.name), u),
                        (e.next = 18);
                      break;
                    case 17:
                      alert("Error In Split Ranges");
                    case 18:
                      r++, (e.next = 2);
                      break;
                    case 21:
                      return (e.next = 23), (0, l.zipToBlob)(n);
                    case 23:
                      (o = e.sent), (0, p.saveAs)(o, "splittedPDFFiles.zip");
                    case 25:
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
        x = n(9008),
        h = n(5893);
      function _() {
        var e = (0, r.useState)([]),
          t = e[0],
          n = e[1];
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(x.default, {
              children: (0, h.jsx)("title", {
                children: "pdftoolz - Split PDF",
              }),
            }),
            (0, h.jsx)("div", {
              children:
                0 === t.length
                  ? (0, h.jsx)(s.Z, { setFiles: n, multiple: true })
                  : (0, h.jsx)(i.Z, { files: t, method: d, multiple: true }),
            }),
          ],
        });
      }
    },
    7012: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pdf-tools/split",
        function () {
          return n(3298);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 577, 185, 733, 730, 888, 179], function () {
      return (t = 7012), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
