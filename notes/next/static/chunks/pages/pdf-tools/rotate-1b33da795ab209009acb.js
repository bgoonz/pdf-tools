(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [210],
  {
    9693: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var r = n(7294),
        s = n(7313),
        a = n(2238),
        u = n(5861),
        c = n(7757),
        i = n.n(c),
        o = n(4835),
        l = n(5733),
        f = n.n(l),
        d = n(8102),
        p = (function () {
          var e = (0, u.Z)(
            i().mark(function e(t) {
              var n, r, s, a;
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = new (f())()), (r = 0);
                    case 2:
                      if (!(r < t.length)) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (s = t[r]),
                        (e.next = 6),
                        o.createPDF.PDFDocumentFromFile(s)
                      );
                    case 6:
                      return (
                        (a = e.sent),
                        (e.t0 = n),
                        (e.t1 = "rotated-".concat(s.name)),
                        (e.next = 11),
                        (0, o.rotatePDF)(a, s.degrees)
                      );
                    case 11:
                      return (e.next = 13), e.sent.save();
                    case 13:
                      (e.t2 = e.sent), e.t0.file.call(e.t0, e.t1, e.t2);
                    case 15:
                      r++, (e.next = 2);
                      break;
                    case 18:
                      return (
                        (e.t3 = d.saveAs), (e.next = 21), (0, o.zipToBlob)(n)
                      );
                    case 21:
                      (e.t4 = e.sent), (0, e.t3)(e.t4, "rotatedPDFFiles.zip");
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
        h = n(9008),
        x = n(5893);
      function _() {
        var e = (0, r.useState)([]),
          t = e[0],
          n = e[1];
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsx)(h.default, {
              children: (0, x.jsx)("title", {
                children: "pdftoolz - Rotate PDF",
              }),
            }),
            (0, x.jsx)("div", {
              children:
                0 === t.length
                  ? (0, x.jsx)(s.Z, { setFiles: n, multiple: true })
                  : (0, x.jsx)(a.Z, { files: t, method: p, multiple: true }),
            }),
          ],
        });
      }
    },
    1202: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pdf-tools/rotate",
        function () {
          return n(9693);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 577, 185, 733, 730, 888, 179], function () {
      return (t = 1202), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
