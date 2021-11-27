import React from "react";
import Head from "next/head";
export default function about() {
  return (
    <>
      <Head>
        <title>pdftoolz -Home</title>
        <a href="https://github.com/bgoonz/pdf-tools">Github Repo</a>
      </Head>
      <div>
        <br></br>

        <br></br>
        <hr></hr>
        <h2>Usage</h2>
        <br></br>
        <img src="https://i.imgur.com/5JDpzgO.gif" />

        <div>
          <div
            className="container"
            style={{
              boxSizing: "border-box",
              marginRight: "auto",
              marginLeft: "auto",
              paddingLeft: "15px",
              paddingRight: "15px",
              width: "1170px",
              color: "rgb(51, 51, 51)",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "14px",
              fontStyle: "normal",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontWeight: 400,
              letterSpacing: "normal",
              orphans: 2,
              textAlign: "start",
              textIndent: "0px",
              textTransform: "none",
              whiteSpace: "normal",
              widows: 2,
              wordSpacing: "0px",
              WebkitTextStrokeWidth: "0px",
              textDecorationThickness: "initial",
              textDecorationStyle: "initial",
              textDecorationColor: "initial",
            }}
          >
            <div
              className="starter-template"
              style={{ boxSizing: "border-box", padding: "0px 15px" }}
            >
              <section
                className="content"
                style={{ boxSizing: "border-box", display: "block" }}
              >
                <h1
                  style={{
                    boxSizing: "border-box",
                    fontSize: "36px",
                    margin: "20px 0px 10px",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                  }}
                >
                  Getting Started
                </h1>
                <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                  An ************ to&nbsp;
                  <span className="caps" style={{ boxSizing: "border-box" }}>
                    PDF
                  </span>
                  .js with
                  <span className="widont" style={{ boxSizing: "border-box" }}>
                    &nbsp;
                  </span>
                  examples.
                </p>
                <h2
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                >
                  Introduction
                </h2>
                <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                  Before downloading&nbsp;
                  <span className="caps" style={{ boxSizing: "border-box" }}>
                    PDF
                  </span>
                  .** please take a moment to understand the different layers **
                  the&nbsp;
                  <span className="caps" style={{ boxSizing: "border-box" }}>
                    PDF
                  </span>
                  .js
                  <span className="widont" style={{ boxSizing: "border-box" }}>
                    &nbsp;
                  </span>
                  project.
                </p>
                <table
                  className="table"
                  style={{
                    boxSizing: "border-box",
                    borderCollapse: "collapse",
                    borderSpacing: "0px",
                    maxWidth: "100%",
                    backgroundColor: "transparent",
                    width: "1110px",
                    marginBottom: "20px",
                  }}
                >
                  <thead style={{ boxSizing: "border-box" }}>
                    <tr style={{ boxSizing: "border-box" }}>
                      <th
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          textAlign: "left",
                          lineHeight: "1.42857",
                          verticalAlign: "bottom",
                          borderTop: "0px",
                          borderBottom: "2px solid rgb(221, 221, 221)",
                        }}
                      >
                        Layer
                      </th>
                      <th
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          textAlign: "left",
                          lineHeight: "1.42857",
                          verticalAlign: "bottom",
                          borderTop: "0px",
                          borderBottom: "2px solid rgb(221, 221, 221)",
                        }}
                      >
                        About
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ boxSizing: "border-box" }}>
                    <tr style={{ boxSizing: "border-box" }}>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          lineHeight: "1.42857",
                          verticalAlign: "top",
                          borderTop: "1px solid rgb(221, 221, 221)",
                        }}
                      >
                        Core
                      </td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          lineHeight: "1.42857",
                          verticalAlign: "top",
                          borderTop: "1px solid rgb(221, 221, 221)",
                        }}
                      >
                        The core layer is where a binary&nbsp;
                        <span
                          className="caps"
                          style={{ boxSizing: "border-box" }}
                        >
                          PDF
                        </span>{" "}
                        is parsed and interpreted. This layer is the foundation
                        for all subsequent layers. ** is not ********** here
                        because using it ******** is considered an advanced
                        usage and the&nbsp;
                        <span
                          className="caps"
                          style={{ boxSizing: "border-box" }}
                        >
                          API
                        </span>{" "}
                        is likely to change. For an example of using the core
                        layer see the&nbsp;
                        <a
                          href="https://github.com/brendandahl/pdf.js.utils/tree/master/browser"
                          style={{
                            boxSizing: "border-box",
                            background: "0px 0px",
                            color: "rgb(66, 139, 202)",
                            textDecoration: "none",
                          }}
                        >
                          <span
                            className="caps"
                            style={{ boxSizing: "border-box" }}
                          >
                            PDF
                          </span>{" "}
                          Object Browser
                        </a>
                        .
                      </td>
                    </tr>
                    <tr style={{ boxSizing: "border-box" }}>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          lineHeight: "1.42857",
                          verticalAlign: "top",
                          borderTop: "1px solid rgb(221, 221, 221)",
                        }}
                      >
                        Display
                      </td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          lineHeight: "1.42857",
                          verticalAlign: "top",
                          borderTop: "1px solid rgb(221, 221, 221)",
                        }}
                      >
                        The display layer ***** the core ***** and exposes an
                        easier to use&nbsp;
                        <span
                          className="caps"
                          style={{ boxSizing: "border-box" }}
                        >
                          API
                        </span>{" "}
                        to render PDFs and get other *********** out of a
                        document. This&nbsp;
                        <span
                          className="caps"
                          style={{ boxSizing: "border-box" }}
                        >
                          API
                        </span>{" "}
                        is what the version number is based on.
                      </td>
                    </tr>
                    <tr style={{ boxSizing: "border-box" }}>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          lineHeight: "1.42857",
                          verticalAlign: "top",
                          borderTop: "1px solid rgb(221, 221, 221)",
                        }}
                      >
                        Viewer
                      </td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "8px",
                          lineHeight: "1.42857",
                          verticalAlign: "top",
                          borderTop: "1px solid rgb(221, 221, 221)",
                        }}
                      >
                        The viewer is built on the display layer and is
                        the&nbsp;
                        <span
                          className="caps"
                          style={{ boxSizing: "border-box" }}
                        >
                          UI
                        </span>{" "}
                        for&nbsp;
                        <span
                          className="caps"
                          style={{ boxSizing: "border-box" }}
                        >
                          PDF
                        </span>{" "}
                        ****** ** ******* and the other browser extensions
                        within the project. It can be a good starting point for
                        ******** your *** viewer.&nbsp;
                        <em style={{ boxSizing: "border-box" }}>
                          However, we do *** if you plan to embed the viewer in
                          your own site, that it not just be an unmodified
                          version. Please re-skin it or build **** it.
                        </em>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                >
                  Download
                </h2>
                <div
                  className="row"
                  style={{
                    boxSizing: "border-box",
                    marginLeft: "-15px",
                    marginRight: "-15px",
                  }}
                >
                  <div
                    className="col-md-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      minHeight: "1px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      float: "left",
                      width: "380px",
                    }}
                  >
                    <h3
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                        fontWeight: 500,
                        lineHeight: "1.1",
                        color: "inherit",
                        marginTop: "20px",
                        marginBottom: "10px",
                        fontSize: "24px",
                      }}
                    >
                      Prebuilt
                    </h3>
                    <p
                      style={{
                        boxSizing: "border-box",
                        margin: "0px 0px 10px",
                      }}
                    >
                      Includes the generic build of&nbsp;
                      <span
                        className="caps"
                        style={{ boxSizing: "border-box" }}
                      >
                        PDF
                      </span>
                      .js and the
                      <span
                        className="widont"
                        style={{ boxSizing: "border-box" }}
                      >
                        &nbsp;
                      </span>
                      viewer.
                    </p>
                    <span
                      className="btn-group-vertical centered"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <a
                        className="btn btn-primary"
                        href="https://github.com/mozilla/pdf.js/releases/download/v2.10.377/pdfjs-2.10.377-dist.zip"
                        style={{
                          boxSizing: "border-box",
                          background: "none 0px 0px rgb(66, 139, 202)",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          display: "block",
                          marginBottom: "0px",
                          fontWeight: 400,
                          textAlign: "center",
                          verticalAlign: "middle",
                          cursor: "pointer",
                          border: "1px solid rgb(53, 126, 189)",
                          whiteSpace: "nowrap",
                          padding: "6px 12px",
                          fontSize: "14px",
                          lineHeight: "1.42857",
                          borderRadius: "4px 4px 0px 0px",
                          userSelect: "none",
                          position: "relative",
                          float: "none",
                          width: "140.625px",
                          maxWidth: "100%",
                        }}
                        type="button"
                      >
                        Stable (v2.10.377)
                      </a>
                      <a
                        className="btn btn-warning"
                        href="https://github.com/mozilla/pdf.js/releases/download/v2.11.338/pdfjs-2.11.338-dist.zip"
                        style={{
                          boxSizing: "border-box",
                          background: "none 0px 0px rgb(240, 173, 78)",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          display: "block",
                          marginBottom: "0px",
                          fontWeight: 400,
                          textAlign: "center",
                          verticalAlign: "middle",
                          cursor: "pointer",
                          border: "1px solid rgb(238, 162, 54)",
                          whiteSpace: "nowrap",
                          padding: "6px 12px",
                          fontSize: "14px",
                          lineHeight: "1.42857",
                          borderRadius: "0px 0px 4px 4px",
                          userSelect: "none",
                          position: "relative",
                          float: "none",
                          width: "140.625px",
                          maxWidth: "100%",
                          marginTop: "-1px",
                          marginLeft: "0px",
                        }}
                        type="button"
                      >
                        Beta (v2.11.338)
                      </a>
                    </span>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      minHeight: "1px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      float: "left",
                      width: "380px",
                    }}
                  >
                    <h3
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                        fontWeight: 500,
                        lineHeight: "1.1",
                        color: "inherit",
                        marginTop: "20px",
                        marginBottom: "10px",
                        fontSize: "24px",
                      }}
                    >
                      Prebuilt (for older
                      <span
                        className="widont"
                        style={{ boxSizing: "border-box" }}
                      >
                        &nbsp;
                      </span>
                      browsers)
                    </h3>
                    <p
                      style={{
                        boxSizing: "border-box",
                        margin: "0px 0px 10px",
                      }}
                    >
                      Includes the generic build of&nbsp;
                      <span
                        className="caps"
                        style={{ boxSizing: "border-box" }}
                      >
                        PDF
                      </span>
                      .js *** the
                      <span
                        className="widont"
                        style={{ boxSizing: "border-box" }}
                      >
                        &nbsp;
                      </span>
                      viewer.
                    </p>
                    <span
                      className="btn-group-vertical centered"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <a
                        className="btn btn-primary"
                        href="https://github.com/mozilla/pdf.js/releases/download/v2.10.377/pdfjs-2.10.377-legacy-dist.zip"
                        style={{
                          boxSizing: "border-box",
                          background: "none 0px 0px rgb(66, 139, 202)",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          display: "block",
                          marginBottom: "0px",
                          fontWeight: 400,
                          textAlign: "center",
                          verticalAlign: "middle",
                          cursor: "pointer",
                          border: "1px solid rgb(53, 126, 189)",
                          whiteSpace: "nowrap",
                          padding: "6px 12px",
                          fontSize: "14px",
                          lineHeight: "1.42857",
                          borderRadius: "4px 4px 0px 0px",
                          userSelect: "none",
                          position: "relative",
                          float: "none",
                          width: "140.625px",
                          maxWidth: "100%",
                        }}
                        type="button"
                      >
                        ****** (v2.10.377)
                      </a>
                      <a
                        className="btn btn-warning"
                        href="https://github.com/mozilla/pdf.js/releases/download/v2.11.338/pdfjs-2.11.338-legacy-dist.zip"
                        style={{
                          boxSizing: "border-box",
                          background: "none 0px 0px rgb(240, 173, 78)",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          display: "block",
                          marginBottom: "0px",
                          fontWeight: 400,
                          textAlign: "center",
                          verticalAlign: "middle",
                          cursor: "pointer",
                          border: "1px solid rgb(238, 162, 54)",
                          whiteSpace: "nowrap",
                          padding: "6px 12px",
                          fontSize: "14px",
                          lineHeight: "1.42857",
                          borderRadius: "0px 0px 4px 4px",
                          userSelect: "none",
                          position: "relative",
                          float: "none",
                          width: "140.625px",
                          maxWidth: "100%",
                          marginTop: "-1px",
                          marginLeft: "0px",
                        }}
                        type="button"
                      >
                        Beta (v2.11.338)
                      </a>
                    </span>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      minHeight: "1px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      float: "left",
                      width: "380px",
                    }}
                  >
                    <h3
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                        fontWeight: 500,
                        lineHeight: "1.1",
                        color: "inherit",
                        marginTop: "20px",
                        marginBottom: "10px",
                        fontSize: "24px",
                      }}
                    >
                      Source
                    </h3>
                    To get a local copy ** *** ******* code, clone ** using git:
                    <pre
                      style={{
                        boxSizing: "border-box",
                        overflow: "auto",
                        fontFamily:
                          'Menlo, Monaco, Consolas, "Courier New", monospace',
                        fontSize: "13px",
                        display: "block",
                        padding: "9.5px",
                        margin: "0px 0px 10px",
                        lineHeight: "1.42857",
                        wordBreak: "break-all",
                        overflowWrap: "break-word",
                        color: "rgb(51, 51, 51)",
                        backgroundColor: "rgb(245, 245, 245)",
                        border: "1px solid rgb(204, 204, 204)",
                        borderRadius: "4px",
                        position: "relative",
                      }}
                    >
                      <code
                        style={{
                          boxSizing: "border-box",
                          fontFamily: '"Anonymous Pro", monospace',
                          fontSize: "inherit",
                          padding: "0px",
                          color: "inherit",
                          backgroundColor: "transparent",
                          whiteSpace: "pre-wrap",
                          borderRadius: "0px",
                          display: "block",
                          lineHeight: "1.1",
                        }}
                      >
                        $ git clone https://github.com/mozilla/pdf.js.git{"\n"}$
                        cd pdf.js{"\n"}
                      </code>
                    </pre>
                    <div
                      className="open_grepper_editor"
                      style={{
                        boxSizing: "border-box",
                        display: "block !important",
                        height: "20px !important",
                        width: "20px !important",
                        position: "absolute !important",
                        top: "0px !important",
                        right: "0px !important",
                        backgroundSize: "20px 20px !important",
                        cursor: "pointer !important",
                        backgroundColor: "rgb(0, 0, 0) !important",
                        backgroundImage: 'url("data:image/png',
                      }}
                      title="Edit & Save To Grepper"
                    />
                  </div>
                </div>
                <h2
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                >
                  Including via a
                  <span className="widont" style={{ boxSizing: "border-box" }}>
                    &nbsp;
                  </span>
                  <span className="caps" style={{ boxSizing: "border-box" }}>
                    CDN
                  </span>
                </h2>
                <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                  <span className="caps" style={{ boxSizing: "border-box" }}>
                    PDF
                  </span>
                  .js is hosted on several free
                  <span className="widont" style={{ boxSizing: "border-box" }}>
                    &nbsp;
                  </span>
                  CDNs:
                </p>
                <ul
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >
                  <li style={{ boxSizing: "border-box" }}>
                    <a
                      href="https://www.jsdelivr.com/package/npm/pdfjs-dist"
                      style={{
                        boxSizing: "border-box",
                        background: "0px 0px",
                        color: "rgb(66, 139, 202)",
                        textDecoration: "none",
                      }}
                    >
                      https://www.jsdelivr.com/package/npm/pdfjs-dist
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box" }}>
                    <a
                      href="https://cdnjs.com/libraries/pdf.js"
                      style={{
                        boxSizing: "border-box",
                        background: "0px 0px",
                        color: "rgb(66, 139, 202)",
                        textDecoration: "none",
                      }}
                    >
                      https://cdnjs.com/libraries/pdf.js
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box" }}>
                    <a
                      href="https://unpkg.com/pdfjs-dist/"
                      style={{
                        boxSizing: "border-box",
                        background: "0px 0px",
                        color: "rgb(66, 139, 202)",
                        textDecoration: "none",
                      }}
                    >
                      https://unpkg.com/pdfjs-dist/
                    </a>
                  </li>
                </ul>
                <h2
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                >
                  File Layout Overview
                </h2>
                <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                  Note that we only mention the most relevant ***** and
                  <span className="widont" style={{ boxSizing: "border-box" }}>
                    &nbsp;
                  </span>
                  folders.
                </p>
                <h3
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "24px",
                  }}
                >
                  Prebuilt
                </h3>
                <pre
                  style={{
                    boxSizing: "border-box",
                    overflow: "auto",
                    fontFamily:
                      'Menlo, Monaco, Consolas, "Courier New", monospace',
                    fontSize: "13px",
                    display: "block",
                    padding: "9.5px",
                    margin: "0px 0px 10px",
                    lineHeight: "1.42857",
                    wordBreak: "break-all",
                    overflowWrap: "break-word",
                    color: "rgb(51, 51, 51)",
                    backgroundColor: "rgb(245, 245, 245)",
                    border: "1px solid rgb(204, 204, 204)",
                    borderRadius: "4px",
                    position: "relative",
                  }}
                >
                  <code
                    style={{
                      boxSizing: "border-box",
                      fontFamily: '"Anonymous Pro", monospace',
                      fontSize: "inherit",
                      padding: "0px",
                      color: "inherit",
                      backgroundColor: "transparent",
                      whiteSpace: "pre-wrap",
                      borderRadius: "0px",
                      display: "block",
                      lineHeight: "1.1",
                    }}
                  >
                    ├── build/{"\n"}│{"   "}├── pdf.js
                    {"                             "}- display layer{"\n"}│
                    {"   "}├── pdf.js.map{"                         "}- display
                    layer's source map{"\n"}│{"   "}├── pdf.worker.js
                    {"                      "}- core layer{"\n"}│{"   "}└──
                    pdf.worker.js.map{"                  "}- **** layer's source
                    map{"\n"}├── web/{"\n"}│{"   "}├── cmaps/
                    {"                             "}- character maps (required
                    by core){"\n"}│{"   "}├── compressed.tracemonkey-pldi-09.pdf
                    - PDF file for testing purposes{"\n"}│{"   "}├── debugger.js
                    {"                        "}- helpful debugging features
                    {"\n"}│{"   "}├── images/{"                            "}-
                    images for the viewer and annotation icons{"\n"}│{"   "}├──
                    locale/{"                            "}- *********** files
                    {"\n"}│{"   "}├── viewer.css{"                         "}-
                    viewer style sheet{"\n"}│{"   "}├── viewer.html
                    {"                        "}- viewer layout{"\n"}│{"   "}├──
                    viewer.js{"                          "}- viewer layer{"\n"}│
                    {"   "}└── viewer.js.***{"                      "}- viewer
                    layer's source map{"\n"}└── LICENSE
                  </code>
                </pre>
                <div
                  className="open_grepper_editor"
                  style={{
                    boxSizing: "border-box",
                    display: "block !important",
                    height: "20px !important",
                    width: "20px !important",
                    position: "absolute !important",
                    top: "0px !important",
                    right: "0px !important",
                    backgroundSize: "20px 20px !important",
                    cursor: "pointer !important",
                    backgroundColor: "rgb(0, 0, 0) !important",
                    backgroundImage: 'url("data:image/png',
                  }}
                  title="Edit & Save To Grepper"
                />
                <h3
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "24px",
                  }}
                >
                  Source
                </h3>
                <pre
                  style={{
                    boxSizing: "border-box",
                    overflow: "auto",
                    fontFamily:
                      'Menlo, Monaco, Consolas, "Courier New", monospace',
                    fontSize: "13px",
                    display: "block",
                    padding: "9.5px",
                    margin: "0px 0px 10px",
                    lineHeight: "1.42857",
                    wordBreak: "break-all",
                    overflowWrap: "break-word",
                    color: "rgb(51, 51, 51)",
                    backgroundColor: "rgb(245, 245, 245)",
                    border: "1px solid rgb(204, 204, 204)",
                    borderRadius: "4px",
                    position: "relative",
                  }}
                >
                  <code
                    style={{
                      boxSizing: "border-box",
                      fontFamily: '"Anonymous Pro", monospace',
                      fontSize: "inherit",
                      padding: "0px",
                      color: "inherit",
                      backgroundColor: "transparent",
                      whiteSpace: "pre-wrap",
                      borderRadius: "0px",
                      display: "block",
                      lineHeight: "1.1",
                    }}
                  >
                    ├── docs/{"                                  "}- website
                    source code{"\n"}├── examples/
                    {"                              "}- simple ***** examples
                    {"\n"}├── extensions/{"                            "}-
                    browser extension source code{"\n"}├── external/
                    {"                              "}- third party code{"\n"}
                    ├── l10n/{"                                  "}- translation
                    files{"\n"}├── src/{"\n"}│{"   "}├── core/
                    {"                              "}- core layer{"\n"}│{"   "}
                    ├── display/{"                           "}- display layer
                    {"\n"}│{"   "}├── shared/{"                            "}-
                    shared code between the core and display layers{"\n"}│
                    {"   "}├── interfaces.js{"                      "}-
                    interface definitions for *** core/display layers{"\n"}│
                    {"   "}├── pdf.*.js{"                           "}- wrapper
                    files *** bundling{"\n"}│{"   "}└── worker_loader.js
                    {"                   "}- **** for developer builds to ****
                    worker files{"\n"}├── test/
                    {"                                  "}- unit, font and
                    reference tests{"\n"}├── web/
                    {"                                   "}- viewer layer{"\n"}
                    ├── LICENSE{"\n"}├── README.md{"\n"}├── gulpfile.js
                    {"                            "}- build scripts/logic{"\n"}
                    ├── package-lock.****{"                      "}- pinned
                    dependency versions{"\n"}└── package.json
                    {"                           "}- package definition and
                    dependencies
                  </code>
                </pre>
                <div
                  className="open_grepper_editor"
                  style={{
                    boxSizing: "border-box",
                    display: "block !important",
                    height: "20px !important",
                    width: "20px !important",
                    position: "absolute !important",
                    top: "0px !important",
                    right: "0px !important",
                    backgroundSize: "20px 20px !important",
                    cursor: "pointer !important",
                    backgroundColor: "rgb(0, 0, 0) !important",
                    backgroundImage: 'url("data:image/png',
                  }}
                  title="Edit & Save To Grepper"
                />
                <h2
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                >
                  Trying the Viewer
                </h2>
                <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                  With the prebuilt ** source version, open&nbsp;
                  <code
                    style={{
                      boxSizing: "border-box",
                      fontFamily: '"Anonymous Pro", monospace',
                      fontSize: "0.85em",
                      padding: "0.1em 0.3em 0.2em",
                      color: "rgb(255, 255, 255)",
                      background: "rgb(68, 68, 68)",
                      whiteSpace: "nowrap",
                      borderRadius: "0.3em",
                      position: "relative",
                      top: "-0.15em",
                    }}
                  >
                    web/viewer.html
                  </code>{" "}
                  in a browser and the test pdf should load. Note: the worker is
                  not enabled for file:// urls, so use a server. If you’re using
                  the source build and have node, you can run&nbsp;
                  <code
                    style={{
                      boxSizing: "border-box",
                      fontFamily: '"Anonymous Pro", monospace',
                      fontSize: "0.85em",
                      padding: "0.1em 0.3em 0.2em",
                      color: "rgb(255, 255, 255)",
                      background: "rgb(68, 68, 68)",
                      whiteSpace: "nowrap",
                      borderRadius: "0.3em",
                      position: "relative",
                      top: "-0.15em",
                    }}
                  >
                    gulp server
                  </code>
                  .
                </p>
                <h2
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    fontWeight: 500,
                    lineHeight: "1.1",
                    color: "inherit",
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "30px",
                  }}
                >
                  More Information
                </h2>
                <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                  For a further walkthrough ** a ******* viewer, *** the *****
                  world example. More documentation *** be found in our&nbsp;
                  <a
                    href="https://github.com/mozilla/pdf.js/wiki"
                    style={{
                      boxSizing: "border-box",
                      background: "0px 0px",
                      color: "rgb(66, 139, 202)",
                      textDecoration: "none",
                    }}
                  >
                    wiki
                  </a>
                  <span className="widont" style={{ boxSizing: "border-box" }}>
                    &nbsp;
                  </span>
                  too.
                </p>
              </section>
            </div>
          </div>
          <div
            className="container"
            style={{
              boxSizing: "border-box",
              marginRight: "auto",
              marginLeft: "auto",
              paddingLeft: "15px",
              paddingRight: "15px",
              width: "1170px",
              color: "rgb(51, 51, 51)",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "14px",
              fontStyle: "normal",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontWeight: 400,
              letterSpacing: "normal",
              orphans: 2,
              textAlign: "start",
              textIndent: "0px",
              textTransform: "none",
              whiteSpace: "normal",
              widows: 2,
              wordSpacing: "0px",
              WebkitTextStrokeWidth: "0px",
              textDecorationThickness: "initial",
              textDecorationStyle: "initial",
              textDecorationColor: "initial",
            }}
          >
            <footer
              style={{
                boxSizing: "border-box",
                display: "block",
                paddingTop: "40px",
                paddingBottom: "40px",
                marginTop: "100px",
                color: "rgb(119, 119, 119)",
                textAlign: "center",
                borderTop: "1px solid rgb(229, 229, 229)",
              }}
            >
              <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                ©Mozilla and individual contributors
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
