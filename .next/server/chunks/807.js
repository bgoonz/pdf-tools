exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FileUploader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_fileupload_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var _styles_fileupload_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fileupload_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function FileUploader({
  setFiles,
  multiple
}) {
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = e => setFiles(e.target.files);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "d-flex align-items-center justify-content-center",
    style: {
      height: "80vh"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      ref: wrapperRef,
      className: (_styles_fileupload_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropFileInput),
      onDragEnter: onDragEnter,
      onDragLeave: onDragLeave,
      onDrop: onDrop,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: (_styles_fileupload_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropFileInput__label),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "70",
          height: "70",
          fill: "currentColor",
          className: "bi bi-cloud-arrow-up",
          viewBox: "0 0 16 16",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
            fillRule: "evenodd",
            d: "M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
            d: "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
          children: "Drag & Drop your files here or click to browse files"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: "file",
        accept: ".pdf",
        value: "",
        onChange: onFileDrop,
        multiple: multiple
      })]
    })
  });
}

/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PDFTool)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
// EXTERNAL MODULE: external "react-sortable-hoc"
var external_react_sortable_hoc_ = __webpack_require__(597);
// EXTERNAL MODULE: ./styles/filelist.module.css
var filelist_module = __webpack_require__(922);
var filelist_module_default = /*#__PURE__*/__webpack_require__.n(filelist_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/FilePreview/FilePreview.jsx



function FilePreview({
  file,
  deleteFileHandler
}) {
  const ref = (0,external_react_.useRef)();
  let deg = file.degrees || 0;
  (0,external_react_.useEffect)(() => {
    file.degrees = deg;
    ref.current.style.transform = `rotate(${deg}deg)`;
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      placeItems: "center",
      gridTemplateRows: "3fr 1fr 4fr",
      height: "230px",
      textAlign: "center",
      overflow: "hidden"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: file.image,
      alt: "",
      style: {
        height: "100px",
        width: "100px",
        transition: "ease-in 0.1s"
      },
      ref: ref
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: "180px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: file.name
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex flex-wrap align-items-center justify-content-center my-1",
        style: {
          width: "100%"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-outline-success mx-1",
          onClick: () => {
            deg = deg - 90;

            if (deg % 360 == 0) {
              file.degrees = 0;
            } else {
              file.degrees = deg % 360;
            }

            ref.current.style.transform = `rotate(${deg}deg)`;
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-arrow-counterclockwise",
            viewBox: "0 0 16 16",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-outline-success mx-1",
          onClick: () => {
            deg = deg + 90;

            if (deg % 360 == 0) {
              file.degrees = 0;
            } else {
              file.degrees = deg % 360;
            }

            ref.current.style.transform = `rotate(${deg}deg)`;
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-arrow-clockwise",
            viewBox: "0 0 16 16",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-outline-danger mx-1 d-inline",
          onClick: () => deleteFileHandler(file),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-trash",
            viewBox: "0 0 16 16",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            })]
          })
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/FilePreview/FilePreview2.jsx



function FilePreview2_FilePreview({
  file,
  deleteFileHandler
}) {
  const ref = (0,external_react_.useRef)();
  let deg = file.degrees || 0;
  (0,external_react_.useEffect)(() => {
    file.degrees = deg;
    ref.current.style.transform = `rotate(${deg}deg)`;
  }, []);
  file.range = file.range || [0, file.pages];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      placeItems: "center",
      gridTemplateRows: "3fr 1fr 4fr 2fr",
      height: "280px",
      textAlign: "center",
      overflow: "hidden"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: file.image,
      alt: "",
      style: {
        height: "100px",
        width: "100px",
        transition: "ease-in 0.1s"
      },
      ref: ref
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: "180px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: file.name
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex flex-wrap align-items-center justify-content-center my-1",
        style: {
          width: "100%"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-outline-success mx-1",
          onClick: () => {
            deg = deg - 90;

            if (deg % 360 == 0) {
              file.degrees = 0;
            } else {
              file.degrees = deg % 360;
            }

            ref.current.style.transform = `rotate(${deg}deg)`;
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-arrow-counterclockwise",
            viewBox: "0 0 16 16",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-outline-success mx-1",
          onClick: () => {
            deg = deg + 90;

            if (deg % 360 == 0) {
              file.degrees = 0;
            } else {
              file.degrees = deg % 360;
            }

            ref.current.style.transform = `rotate(${deg}deg)`;
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-arrow-clockwise",
            viewBox: "0 0 16 16",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-outline-danger mx-1 d-inline",
          onClick: () => deleteFileHandler(file),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-trash",
            viewBox: "0 0 16 16",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "2px",
        padding: "10px"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        id: "from",
        placeholder: "From",
        defaultValue: file.range[0],
        type: "number",
        className: "form-control",
        min: 0,
        max: file.pages,
        onChange: e => {
          if (e.target.value < 0) {
            e.target.value = 1;
            return;
          }

          file.range = [parseInt(e.target.value), file.range[1]];
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        id: "to",
        placeholder: "To",
        defaultValue: file.range[1],
        type: "number",
        className: "form-control",
        min: 0,
        max: file.pages,
        onChange: e => {
          if (e.target.value > file.pages) {
            e.target.value = file.pages;
            return;
          }

          file.range = [file.range[0], parseInt(e.target.value)];
        }
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/PDF/PDFList.jsx




 //Drag handler



const DragHandle = (0,external_react_sortable_hoc_.sortableHandle)(({
  tabIndex
}) => /*#__PURE__*/jsx_runtime_.jsx("span", {
  className: (filelist_module_default()).dragHandler,
  tabIndex: tabIndex,
  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-grip-horizontal",
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    })
  })
})); //Drag area

const SortableContainer = (0,external_react_sortable_hoc_.sortableContainer)(({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (filelist_module_default()).dragContainer,
    children: children
  });
});

const arrayMoveMutate = (array, from, to) => {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

const arrayMove = (array, from, to) => {
  array = array.slice();
  arrayMoveMutate(array, from, to);
  return array;
};

function PDFList({
  files,
  setFiles
}) {
  const router = (0,router_.useRouter)();
  const path = router.pathname.split("/").reverse()[0];

  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    setFiles(arrayMove(files, oldIndex, newIndex));
  }; // Functions


  const deleteFileHandler = file => {
    const newFiles = files;
    newFiles.forEach(fileNew => {
      if (fileNew == file) {
        fileNew.deleted = true;
      }
    });
    setFiles([...newFiles]);
  }; //Draggable elements


  const SortableItem = (0,external_react_sortable_hoc_.sortableElement)(({
    value
  }) => {
    return path === "split" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (filelist_module_default()).dragElement2,
      children: [/*#__PURE__*/jsx_runtime_.jsx(DragHandle, {}), /*#__PURE__*/jsx_runtime_.jsx(FilePreview2_FilePreview, {
        file: value,
        deleteFileHandler: deleteFileHandler
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (filelist_module_default()).dragElement,
      children: [/*#__PURE__*/jsx_runtime_.jsx(DragHandle, {}), /*#__PURE__*/jsx_runtime_.jsx(FilePreview, {
        file: value,
        deleteFileHandler: deleteFileHandler
      })]
    });
  });
  let allDeleted = true;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SortableContainer, {
    onSortEnd: onSortEnd,
    useDragHandle: true,
    axis: "xy",
    children: [files.map((file, index) => {
      if (!file.deleted) {
        allDeleted = false;
        return /*#__PURE__*/jsx_runtime_.jsx(SortableItem, {
          index: index,
          value: file
        }, `item-${index}`);
      }
    }), allDeleted && /*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "No Files"
    })]
  });
}
// EXTERNAL MODULE: external "pdfjs-dist"
var external_pdfjs_dist_ = __webpack_require__(60);
;// CONCATENATED MODULE: ./methods/imageDataURLfromFile.js

external_pdfjs_dist_.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.js";

const imageDataURLFromFile = async file => {
  const doc = await (0,external_pdfjs_dist_.getDocument)({
    url: URL.createObjectURL(file)
  }).promise;
  const page = await doc.getPage(1);
  var scale = 1.5;
  var viewport = page.getViewport({
    scale: scale
  });
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  var renderContext = {
    canvasContext: context,
    viewport: viewport
  };
  var renderTask = page.render(renderContext);
  await renderTask.promise;
  return {
    data: canvas.toDataURL(),
    pageCount: doc.numPages
  };
};

/* harmony default export */ const imageDataURLfromFile = (imageDataURLFromFile);
;// CONCATENATED MODULE: ./components/PDF/PDFButtons.jsx





function PDFButtons({
  filesLocal,
  setFilesLocal,
  downloadPDFHandler,
  multiple
}) {
  const ref = (0,external_react_.useRef)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "file",
      multiple: multiple,
      className: "form-control d-none",
      accept: ".pdf",
      ref: ref,
      onChange: async e => {
        const addFileButton = document.getElementById("addFileButton");
        const processFileButton = document.querySelectorAll("#processFileButton");
        addFileButton.innerText = "Adding Files ...";
        addFileButton.disabled = true;
        processFileButton.forEach(btn => btn.disabled = true);
        const temp = [];

        for (let i = 0; i < e.target.files.length; i++) {
          const file = e.target.files[i];
          const res = await imageDataURLfromFile(file);
          file.image = res.data;
          file.pages = res.pageCount;
          temp.push(file);
        }

        setFilesLocal([...filesLocal, ...temp]);
        ref.current.value = "";
        addFileButton.innerText = "Add Files";
        addFileButton.disabled = false;
        processFileButton.forEach(btn => btn.disabled = false);
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row justify-content-md-center align-items-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-sm-4 d-flex flex-column",
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          id: "processFileButton",
          className: "btn btn-danger my-2 mx-1",
          onClick: e => {
            downloadPDFHandler(e);
          },
          children: "Save and Download"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-primary my-2",
          type: "button",
          id: "addFileButton",
          onClick: () => ref.current.click(),
          children: "Add Files"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "accordion",
          id: "settings",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "accordion-header",
              id: "pageSettings",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#pageSetting",
                "aria-expanded": "true",
                "aria-controls": "pageSetting",
                children: "Page Settings"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: "pageSetting",
              className: "accordion-collapse collapse",
              "aria-labelledby": "pageSettings",
              "data-bs-parent": "#settings",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "accordion-body",
                children: "Page Settings Goes Here"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "accordion-header",
              id: "marginSettings",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "accordion-button",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#marginSetting",
                "aria-expanded": "true",
                "aria-controls": "marginSetting",
                children: "Margin Settings"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: "marginSetting",
              className: "accordion-collapse collapse",
              "aria-labelledby": "marginSettings",
              "data-bs-parent": "#settings",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "accordion-body",
                children: "Margin Settings Goes Here"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-sm-8 my-3",
        style: {
          height: "50vh",
          overflowY: "scroll",
          border: "2px dashed red"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row gy-3",
            style: {
              padding: "2rem 0px"
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(PDFList, {
              files: filesLocal,
              setFiles: setFilesLocal
            })
          })
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/PDF/PDFTool.jsx




function PDFTool({
  files,
  method,
  multiple
}) {
  const {
    0: filesLocal,
    1: setFilesLocal
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const temp = [];
    const arr = Array.from(files);

    const myFunction = async () => {
      const addFileButton = document.getElementById("addFileButton");
      const processFileButton = document.querySelectorAll("#processFileButton");
      addFileButton.innerText = "Adding Files ...";
      addFileButton.disabled = true;
      processFileButton.forEach(btn => btn.disabled = true);

      for (let i = 0; i < arr.length; i++) {
        const file = arr[i];
        const res = await imageDataURLfromFile(file);
        file.image = res.data;
        file.pages = res.pageCount;
        temp.push(file);
      }

      setFilesLocal(temp);
      addFileButton.innerText = "Add Files";
      addFileButton.disabled = false;
      processFileButton.forEach(btn => btn.disabled = false);
    };

    myFunction();
  }, []);

  const downloadPDFHandler = async e => {
    e.target.innerText = "Processing Files....";
    e.target.disabled = true;
    const filteredFiles = filesLocal.filter(file => !file.deleted);
    await method(filteredFiles);
    e.target.innerText = "Save and Download";
    e.target.disabled = false;
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/jsx_runtime_.jsx(PDFButtons, {
      filesLocal: filesLocal,
      setFilesLocal: setFilesLocal,
      downloadPDFHandler: downloadPDFHandler,
      multiple: multiple
    })
  });
}

/***/ }),

/***/ 922:
/***/ ((module) => {

// Exports
module.exports = {
	"dragHandler": "filelist_dragHandler__38ZOC",
	"dragContainer": "filelist_dragContainer__334O1",
	"dragElement": "filelist_dragElement__3PrGi",
	"dragElement2": "filelist_dragElement2__3MFpg"
};


/***/ }),

/***/ 623:
/***/ ((module) => {

// Exports
module.exports = {
	"dropFileInput": "fileupload_dropFileInput__3eFei",
	"dragover": "fileupload_dragover__IPQUE",
	"dropFileInput__label": "fileupload_dropFileInput__label__36oRU"
};


/***/ })

};
;