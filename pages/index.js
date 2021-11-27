import React from "react";
import Head from "next/head";
export default function home() {
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
        <center>
        <img src="https://i.imgur.com/5JDpzgO.gif" />
        </center>
<h5>
  Code Samples:
</h5>

        <div>
          <pre><code className="lang-jsx"><span className="hljs-keyword">import</span> <span className="hljs-type">React</span>, {"{"} useRef {"}"} <span className="hljs-keyword">from</span> <span className="hljs-string">"react"</span>;{"\n"}<span className="hljs-keyword">import</span> <span className="hljs-type">PDFList</span> <span className="hljs-keyword">from</span> <span className="hljs-string">"./PDFList"</span>;{"\n"}<span className="hljs-keyword">import</span> imageDataURLfromFile <span className="hljs-keyword">from</span> <span className="hljs-string">"../../methods/imageDataURLfromFile"</span>;{"\n"}{"\n"}<span className="hljs-keyword">export</span> default function <span className="hljs-type">PDFButtons</span>({"{"}{"\n"}{"  "}filesLocal,{"\n"}{"  "}setFilesLocal,{"\n"}{"  "}downloadPDFHandler,{"\n"}{"  "}multiple,{"\n"}{"}"}) {"{"}{"\n"}{"  "}<span className="hljs-keyword">const</span> <span className="hljs-keyword">ref</span> = useRef();{"\n"}{"  "}<span className="hljs-keyword">return</span> ({"\n"}{"    "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"container-fluid"</span>&gt;{"\n"}{"      "}&lt;input{"\n"}{"        "}<span className="hljs-keyword">type</span>=<span className="hljs-string">"file"</span>{"\n"}{"        "}multiple={"{"}multiple{"}"}{"\n"}{"        "}className=<span className="hljs-string">"form-control d-none"</span>{"\n"}{"        "}accept=<span className="hljs-string">".pdf"</span>{"\n"}{"        "}<span className="hljs-keyword">ref</span>={"{"}<span className="hljs-keyword">ref</span>{"}"}{"\n"}{"        "}onChange={"{"}async (e) =&gt; {"{"}{"\n"}{"          "}<span className="hljs-keyword">const</span> addFileButton = document.getElementById(<span className="hljs-string">"addFileButton"</span>);{"\n"}{"          "}<span className="hljs-keyword">const</span> processFileButton ={"\n"}{"            "}document.querySelectorAll(<span className="hljs-string">"#processFileButton"</span>);{"\n"}{"\n"}{"          "}addFileButton.innerText = <span className="hljs-string">"Adding Files ..."</span>;{"\n"}{"          "}addFileButton.disabled = <span className="hljs-literal">true</span>;{"\n"}{"          "}processFileButton.forEach((btn) =&gt; (btn.disabled = <span className="hljs-literal">true</span>));{"\n"}{"\n"}{"          "}<span className="hljs-keyword">const</span> temp = [];{"\n"}{"          "}<span className="hljs-keyword">for</span> (<span className="hljs-keyword">let</span> i = <span className="hljs-number">0</span>; i &lt; e.target.files.length; i++) {"{"}{"\n"}{"            "}<span className="hljs-keyword">const</span> file = e.target.files[i];{"\n"}{"            "}<span className="hljs-keyword">const</span> res = await imageDataURLfromFile(file);{"\n"}{"            "}file.image = res.data;{"\n"}{"            "}file.pages = res.pageCount;{"\n"}{"            "}temp.push(file);{"\n"}{"          "}{"}"}{"\n"}{"          "}setFilesLocal([...filesLocal, ...temp]);{"\n"}{"          "}<span className="hljs-keyword">ref</span>.current.value = <span className="hljs-string">""</span>;{"\n"}{"          "}addFileButton.innerText = <span className="hljs-string">"Add Files"</span>;{"\n"}{"          "}addFileButton.disabled = <span className="hljs-literal">false</span>;{"\n"}{"          "}processFileButton.forEach((btn) =&gt; (btn.disabled = <span className="hljs-literal">false</span>));{"\n"}{"        "}{"}"}{"}"}{"\n"}{"      "}/&gt;{"\n"}{"      "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"row justify-content-md-center align-items-center"</span>&gt;{"\n"}{"        "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"col-sm-4 d-flex flex-column"</span>&gt;{"\n"}{"          "}&lt;button{"\n"}{"            "}id=<span className="hljs-string">"processFileButton"</span>{"\n"}{"            "}className=<span className="hljs-string">"btn btn-danger my-2 mx-1"</span>{"\n"}{"            "}onClick={"{"}(e) =&gt; {"{"}{"\n"}{"              "}downloadPDFHandler(e);{"\n"}{"            "}{"}"}{"}"}{"\n"}{"          "}&gt;{"\n"}{"            "}<span className="hljs-type">Save</span> <span className="hljs-keyword">and</span> <span className="hljs-type">Download</span>{"\n"}{"          "}&lt;/button&gt;{"\n"}{"\n"}{"          "}&lt;button{"\n"}{"            "}className=<span className="hljs-string">"btn btn-primary my-2"</span>{"\n"}{"            "}<span className="hljs-keyword">type</span>=<span className="hljs-string">"button"</span>{"\n"}{"            "}id=<span className="hljs-string">"addFileButton"</span>{"\n"}{"            "}onClick={"{"}() =&gt; <span className="hljs-keyword">ref</span>.current.click(){"}"}{"\n"}{"          "}&gt;{"\n"}{"            "}<span className="hljs-type">Add</span> <span className="hljs-type">Files</span>{"\n"}{"          "}&lt;/button&gt;{"\n"}{"          "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"accordion"</span> id=<span className="hljs-string">"settings"</span>&gt;{"\n"}{"            "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"accordion-item"</span>&gt;{"\n"}{"              "}&lt;h2 className=<span className="hljs-string">"accordion-header"</span> id=<span className="hljs-string">"pageSettings"</span>&gt;{"\n"}{"                "}&lt;button{"\n"}{"                  "}className=<span className="hljs-string">"accordion-button collapsed"</span>{"\n"}{"                  "}<span className="hljs-keyword">type</span>=<span className="hljs-string">"button"</span>{"\n"}{"                  "}data-bs-toggle=<span className="hljs-string">"collapse"</span>{"\n"}{"                  "}data-bs-target=<span className="hljs-string">"#pageSetting"</span>{"\n"}{"                  "}aria-expanded=<span className="hljs-string">"true"</span>{"\n"}{"                  "}aria-controls=<span className="hljs-string">"pageSetting"</span>{"\n"}{"                "}&gt;{"\n"}{"                  "}<span className="hljs-type">Page</span> <span className="hljs-type">Settings</span>{"\n"}{"                "}&lt;/button&gt;{"\n"}{"              "}&lt;/h2&gt;{"\n"}{"              "}&lt;<span className="hljs-keyword">div</span>{"\n"}{"                "}id=<span className="hljs-string">"pageSetting"</span>{"\n"}{"                "}className=<span className="hljs-string">"accordion-collapse collapse"</span>{"\n"}{"                "}aria-labelledby=<span className="hljs-string">"pageSettings"</span>{"\n"}{"                "}data-bs-parent=<span className="hljs-string">"#settings"</span>{"\n"}{"              "}&gt;{"\n"}{"                "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"accordion-body"</span>&gt;<span className="hljs-type">Page</span> <span className="hljs-type">Settings</span> <span className="hljs-type">Goes</span> <span className="hljs-type">Here</span>&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"              "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"            "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"            "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"accordion-item"</span>&gt;{"\n"}{"              "}&lt;h2 className=<span className="hljs-string">"accordion-header"</span> id=<span className="hljs-string">"marginSettings"</span>&gt;{"\n"}{"                "}&lt;button{"\n"}{"                  "}className=<span className="hljs-string">"accordion-button"</span>{"\n"}{"                  "}<span className="hljs-keyword">type</span>=<span className="hljs-string">"button"</span>{"\n"}{"                  "}data-bs-toggle=<span className="hljs-string">"collapse"</span>{"\n"}{"                  "}data-bs-target=<span className="hljs-string">"#marginSetting"</span>{"\n"}{"                  "}aria-expanded=<span className="hljs-string">"true"</span>{"\n"}{"                  "}aria-controls=<span className="hljs-string">"marginSetting"</span>{"\n"}{"                "}&gt;{"\n"}{"                  "}<span className="hljs-type">Margin</span> <span className="hljs-type">Settings</span>{"\n"}{"                "}&lt;/button&gt;{"\n"}{"              "}&lt;/h2&gt;{"\n"}{"              "}&lt;<span className="hljs-keyword">div</span>{"\n"}{"                "}id=<span className="hljs-string">"marginSetting"</span>{"\n"}{"                "}className=<span className="hljs-string">"accordion-collapse collapse"</span>{"\n"}{"                "}aria-labelledby=<span className="hljs-string">"marginSettings"</span>{"\n"}{"                "}data-bs-parent=<span className="hljs-string">"#settings"</span>{"\n"}{"              "}&gt;{"\n"}{"                "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"accordion-body"</span>&gt;<span className="hljs-type">Margin</span> <span className="hljs-type">Settings</span> <span className="hljs-type">Goes</span> <span className="hljs-type">Here</span>&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"              "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"            "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"          "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"        "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"        "}&lt;<span className="hljs-keyword">div</span>{"\n"}{"          "}className=<span className="hljs-string">"col-sm-8 my-3"</span>{"\n"}{"          "}style={"{"}{"{"}{"\n"}{"            "}height: <span className="hljs-string">"50vh"</span>,{"\n"}{"            "}overflowY: <span className="hljs-string">"scroll"</span>,{"\n"}{"            "}border: <span className="hljs-string">"2px dashed red"</span>,{"\n"}{"          "}{"}"}{"}"}{"\n"}{"        "}&gt;{"\n"}{"          "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"container"</span>&gt;{"\n"}{"            "}&lt;<span className="hljs-keyword">div</span> className=<span className="hljs-string">"row gy-3"</span> style={"{"}{"{"} padding: <span className="hljs-string">"2rem 0px"</span> {"}"}{"}"}&gt;{"\n"}{"              "}&lt;<span className="hljs-type">PDFList</span> files={"{"}filesLocal{"}"} setFiles={"{"}setFilesLocal{"}"} /&gt;{"\n"}{"            "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"          "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"        "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"      "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"    "}&lt;/<span className="hljs-keyword">div</span>&gt;{"\n"}{"  "});{"\n"}{"}"}{"\n"}</code></pre>
          <h2 id="-">---</h2>
          <pre><code className="lang-jsx">{"\n"}{"\n"}<span className="moonscript"><span className="hljs-keyword">import</span> {"{"} useRouter {"}"} <span className="hljs-keyword">from</span> <span className="hljs-string">"next/router"</span>;{"\n"}<span className="hljs-keyword">import</span> {"{"}{"\n"}{"  "}sortableContainer,{"\n"}{"  "}sortableElement,{"\n"}{"  "}sortableHandle,{"\n"}{"}"} <span className="hljs-keyword">from</span> <span className="hljs-string">"react-sortable-hoc"</span>;{"\n"}<span className="hljs-keyword">import</span> styles <span className="hljs-keyword">from</span> <span className="hljs-string">"../../styles/filelist.module.css"</span>;{"\n"}<span className="hljs-keyword">import</span> FilePreview <span className="hljs-keyword">from</span> <span className="hljs-string">"../FilePreview/FilePreview"</span>;{"\n"}<span className="hljs-keyword">import</span> FilePreview2 <span className="hljs-keyword">from</span> <span className="hljs-string">"../FilePreview/FilePreview2"</span>;{"\n"}{"\n"}//Drag handler{"\n"}const DragHandle = sortableHandle(<span className="hljs-function"><span className="hljs-params">({"{"} tabIndex {"}"})</span> =&gt;</span> ({"\n"}{"  "}&lt;span className={"{"}styles.dragHandler{"}"} tabIndex={"{"}tabIndex{"}"}&gt;{"\n"}{"    "}&lt;svg{"\n"}{"      "}xmlns=<span className="hljs-string">"http://www.w3.org/2000/svg"</span>{"\n"}{"      "}width=<span className="hljs-string">"16"</span>{"\n"}{"      "}height=<span className="hljs-string">"16"</span>{"\n"}{"      "}fill=<span className="hljs-string">"currentColor"</span>{"\n"}{"      "}className=<span className="hljs-string">"bi bi-grip-horizontal"</span>{"\n"}{"      "}viewBox=<span className="hljs-string">"0 0 16 16"</span>{"\n"}{"    "}&gt;{"\n"}{"      "}&lt;path d=<span className="hljs-string">"M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"</span> /&gt;{"\n"}{"    "}&lt;/svg&gt;{"\n"}{"  "}&lt;/span&gt;{"\n"}));{"\n"}{"\n"}//Drag area{"\n"}const SortableContainer = sortableContainer(<span className="hljs-function"><span className="hljs-params">({"{"} children {"}"})</span> =&gt;</span> {"{"}{"\n"}{"  "}<span className="hljs-keyword">return</span> &lt;div className={"{"}styles.dragContainer{"}"}&gt;{"{"}children{"}"}&lt;/div&gt;;{"\n"}{"}"});{"\n"}{"\n"}const arrayMoveMutate = <span className="hljs-function"><span className="hljs-params">(array, <span className="hljs-keyword">from</span>, to)</span> =&gt;</span> {"{"}{"\n"}{"  "}array.splice(to &lt; <span className="hljs-number">0</span> ? array.length + to : to, <span className="hljs-number">0</span>, array.splice(<span className="hljs-keyword">from</span>, <span className="hljs-number">1</span>)[<span className="hljs-number">0</span>]);{"\n"}{"}"};{"\n"}{"\n"}const arrayMove = <span className="hljs-function"><span className="hljs-params">(array, <span className="hljs-keyword">from</span>, to)</span> =&gt;</span> {"{"}{"\n"}{"  "}array = array.slice();{"\n"}{"  "}arrayMoveMutate(array, <span className="hljs-keyword">from</span>, to);{"\n"}{"  "}<span className="hljs-keyword">return</span> array;{"\n"}{"}"};{"\n"}{"\n"}<span className="hljs-keyword">export</span> default function PDFList({"{"} files, setFiles {"}"}) {"{"}{"\n"}{"  "}const router = useRouter();{"\n"}{"  "}const path = router.pathname.split(<span className="hljs-string">"/"</span>).reverse()[<span className="hljs-number">0</span>];{"\n"}{"\n"}{"  "}const onSortEnd = <span className="hljs-function"><span className="hljs-params">({"{"} oldIndex, newIndex {"}"})</span> =&gt;</span> {"{"}{"\n"}{"    "}setFiles(arrayMove(files, oldIndex, newIndex));{"\n"}{"  "}{"}"};{"\n"}{"\n"}{"  "}// Functions{"\n"}{"  "}const deleteFileHandler = <span className="hljs-function"><span className="hljs-params">(file)</span> =&gt;</span> {"{"}{"\n"}{"    "}const newFiles = files;{"\n"}{"    "}newFiles.forEach(<span className="hljs-function"><span className="hljs-params">(fileNew)</span> =&gt;</span> {"{"}{"\n"}{"      "}<span className="hljs-keyword">if</span> (fileNew == file) {"{"}{"\n"}{"        "}fileNew.deleted = <span className="hljs-literal">true</span>;{"\n"}{"      "}{"}"}{"\n"}{"    "}{"}"});{"\n"}{"    "}setFiles([...newFiles]);{"\n"}{"  "}{"}"};{"\n"}{"\n"}{"  "}//Draggable elements{"\n"}{"  "}const SortableItem = sortableElement(<span className="hljs-function"><span className="hljs-params">({"{"} value {"}"})</span> =&gt;</span> {"{"}{"\n"}{"    "}<span className="hljs-keyword">return</span> path === <span className="hljs-string">"split"</span> ? ({"\n"}{"      "}&lt;div className={"{"}styles.dragElement2{"}"}&gt;{"\n"}{"        "}&lt;DragHandle /&gt;{"\n"}{"        "}&lt;FilePreview2 file={"{"}value{"}"} deleteFileHandler={"{"}deleteFileHandler{"}"} /&gt;{"\n"}{"      "}&lt;/div&gt;{"\n"}{"    "}) : ({"\n"}{"      "}&lt;div className={"{"}styles.dragElement{"}"}&gt;{"\n"}{"        "}&lt;DragHandle /&gt;{"\n"}{"        "}&lt;FilePreview file={"{"}value{"}"} deleteFileHandler={"{"}deleteFileHandler{"}"} /&gt;{"\n"}{"      "}&lt;/div&gt;{"\n"}{"    "});{"\n"}{"  "}{"}"});{"\n"}{"\n"}{"  "}let allDeleted = <span className="hljs-literal">true</span>;{"\n"}{"  "}<span className="hljs-keyword">return</span> ({"\n"}{"    "}&lt;SortableContainer onSortEnd={"{"}onSortEnd{"}"} useDragHandle axis=<span className="hljs-string">"xy"</span>&gt;{"\n"}{"      "}{"{"}files.map(<span className="hljs-function"><span className="hljs-params">(file, index)</span> =&gt;</span> {"{"}{"\n"}{"        "}<span className="hljs-keyword">if</span> (!file.deleted) {"{"}{"\n"}{"          "}allDeleted = <span className="hljs-literal">false</span>;{"\n"}{"          "}<span className="hljs-keyword">return</span> ({"\n"}{"            "}&lt;SortableItem key={"{"}`item-${"{"}index{"}"}`{"}"} index={"{"}index{"}"} value={"{"}file{"}"} /&gt;{"\n"}{"          "});{"\n"}{"        "}{"}"}{"\n"}{"      "}{"}"}){"}"}{"\n"}{"      "}{"{"}allDeleted &amp;&amp; &lt;h2&gt;No Files&lt;/h2&gt;{"}"}{"\n"}{"    "}&lt;/SortableContainer&gt;{"\n"}{"  "});{"\n"}{"}"}</span>{"\n"}</code></pre>
          <h2 id="-">---</h2>
          <p>```jsx</p>
          <p>import React, {'{'} useEffect, useState {'}'} from "react";
            import PDFButtons from "./PDFButtons";
            import imageDataURLfromFile from "../../methods/imageDataURLfromFile";</p>
          <p>export default function PDFTool({'{'} files, method, multiple {'}'}) {'{'}
            const [filesLocal, setFilesLocal] = useState([]);</p>
          <p>  useEffect(() =&gt; {'{'}
            const temp = [];
            const arr = Array.from(files);
            const myFunction = async () =&gt; {'{'}
            const addFileButton = document.getElementById("addFileButton");
            const processFileButton = document.querySelectorAll("#processFileButton");
            addFileButton.innerText = "Adding Files ...";
            addFileButton.disabled = true;
            processFileButton.forEach((btn) =&gt; (btn.disabled = true));</p>
          <pre><code>{"  "}for (let i = <span className="hljs-number">0</span><span className="hljs-comment">; i &lt; arr.length; i++) {"{"}</span>{"\n"}{"    "}const file = arr[i]<span className="hljs-comment">;</span>{"\n"}{"    "}const res = await imageDataURLfromFile(file)<span className="hljs-comment">;</span>{"\n"}{"    "}file.image = res<span className="hljs-meta">.data</span><span className="hljs-comment">;</span>{"\n"}{"    "}file.pages = res.pageCount<span className="hljs-comment">;</span>{"\n"}{"    "}temp.push(file)<span className="hljs-comment">;</span>{"\n"}{"  "}{"}"}{"\n"}{"  "}setFilesLocal(temp)<span className="hljs-comment">;</span>{"\n"}{"  "}<span className="hljs-keyword">addFileButton.innerText </span>= <span className="hljs-string">"Add Files"</span><span className="hljs-comment">;</span>{"\n"}{"  "}<span className="hljs-keyword">addFileButton.disabled </span>= false<span className="hljs-comment">;</span>{"\n"}{"  "}processFileButton.forEach((<span className="hljs-keyword">btn) </span>=&gt; (<span className="hljs-keyword">btn.disabled </span>= false))<span className="hljs-comment">;</span>{"\n"}{"}"}<span className="hljs-comment">;</span>{"\n"}myFunction()<span className="hljs-comment">;</span>{"\n"}</code></pre><p>  {'}'}, []);</p>
          <p>  const downloadPDFHandler = async (e) =&gt; {'{'}
            e.target.innerText = "Processing Files....";
            e.target.disabled = true;
            const filteredFiles = filesLocal.filter((file) =&gt; !file.deleted);
            await method(filteredFiles);
            e.target.innerText = "Save and Download";
            e.target.disabled = false;
            {'}'};</p>
          <p>  return (
          </p><div classname="container">
            <pdfbuttons fileslocal="{filesLocal}" setfileslocal="{setFilesLocal}" downloadpdfhandler="{downloadPDFHandler}" multiple="{multiple}">
            </pdfbuttons></div>
          );
          {'}'}<p />
        </div>
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
