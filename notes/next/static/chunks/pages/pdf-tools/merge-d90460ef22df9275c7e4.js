(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    4380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(7294),
        s = n(7313),
        u = n(2238),
        a = n(5861),
        c = n(7757),
        i = n.n(c),
        o = n(4835),
        f = n(8102),
        l = (function () {
          var e = (0, a.Z)(
            i().mark(function e(t) {
              var n, r, s, u, a, c, l;
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = []), (r = 0);
                    case 2:
                      if (!(r < t.length)) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (s = t[r]),
                        (e.next = 6),
                        o.createPDF.PDFDocumentFromFile(s)
                      );
                    case 6:
                      return (
                        (u = e.sent),
                        (e.next = 9),
                        (0, o.rotatePDF)(u, s.degrees)
                      );
                    case 9:
                      (a = e.sent), n.push(a);
                    case 11:
                      r++, (e.next = 2);
                      break;
                    case 14:
                      return (e.next = 16), (0, o.mergePDF)(n);
                    case 16:
                      return (e.next = 18), e.sent.save();
                    case 18:
                      (c = e.sent),
                        (l = (0, o.pdfArrayToBlob)(c)),
                        (0, f.saveAs)(l, "merged.pdf");
                    case 21:
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
        d = n(9008),
        p = n(5893);
      function h() {
        var e = (0, r.useState)([]),
          t = e[0],
          n = e[1];
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(d.default, {
              children: (0, p.jsx)("title", {
                children: "pdftoolz - Merge PDF",
              }),
            }),
            (0, p.jsx)("div", {
              children:
                0 === t.length
                  ? (0, p.jsx)(s.Z, { setFiles: n, multiple: true })
                  : (0, p.jsx)(u.Z, { files: t, method: l, multiple: true }),
            }),
          ],
        });
      }
    },
    5061: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pdf-tools/merge",
        function () {
          return n(4380);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 577, 185, 730, 888, 179], function () {
      return (t = 5061), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
