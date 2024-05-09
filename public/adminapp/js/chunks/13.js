(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cruds_IPCR_facultytemplate_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cruds/IPCR/facultytemplate.vue */ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    facultytemplate: _cruds_IPCR_facultytemplate_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      faculty: [],
      templates: [],
      json: [],
      assestment_id: '',
      template_id: '',
      signatures: [],
      department_name: null
    };
  },
  mounted: function mounted() {
    this.fetchPerDepartment();
  },
  computed: {
    numericalRating: function numericalRating() {
      var result = 0;
      var total_ipcr_performance1 = 0;

      _.each(this.templates.ipcr_function, function (value, key) {
        var sum1 = 0;
        var total_ipcr_performance2 = 0;

        _.each(value.ipcr_subfunctions, function (value2, key2) {
          var sum = 0;
          var total_ipcr_performance3 = 0;

          _.each(value2.ipcr_performance, function (value3, key4) {
            if (value3.asc) {
              sum += parseFloat(value3.asc);
            }

            total_ipcr_performance3 = key4 + 1;
          });

          total_ipcr_performance2 += total_ipcr_performance3;
          sum1 += sum;
        });

        total_ipcr_performance1 += total_ipcr_performance2;
        result += sum1;
      });

      var compute = result / total_ipcr_performance1;
      return parseFloat(compute.toFixed(2));
    },
    adjectivalRating: function adjectivalRating() {
      var value = null;

      if (this.numericalRating >= 4 && this.numericalRating < 5) {
        value = 'Very Satisfactory';
      } else if (this.numericalRating >= 3 && this.numericalRating < 4) {
        value = 'Satisfactory';
      } else if (this.numericalRating >= 2 && this.numericalRating < 3) {
        value = 'Unsatisfactory';
      } else if (this.numericalRating >= 1 && this.numericalRating < 2) {
        value = 'Poor';
      } else {
        value = 'Outstanding';
      }

      return value;
    },
    dateToday: function dateToday() {
      var date = new Date();
      this.templates.date_today = "".concat(date.getMonth(), ", ").concat(date.getFullYear());
      return this.templates.date_today;
    }
  },
  methods: {
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    },
    fetchPerDepartment: function fetchPerDepartment() {
      var _this = this;

      var department_id = this.$route.params.id;
      axios.get("ipcr-faculty-assesstment/department/".concat(department_id)).then(function (response) {
        var data = response.data.data;
        _this.faculty = data.ipcr;
        _this.department_name = data.department_name;
      });
    },
    editFiles: function editFiles(data) {
      var _data$faculty_signatu;

      this.templates = JSON.parse(data.data);
      this.templates.id = data.id; // this.templates.status_id = "Done Evaluate By Campus Director";

      this.signatures = [{
        'title': 'Discussed with:',
        'name': data.faculty_id ? data.faculty.name : null,
        'signature': (_data$faculty_signatu = data.faculty_signature) !== null && _data$faculty_signatu !== void 0 ? _data$faculty_signatu : null
      }, {
        'title': 'Assessed by:',
        'name': data.dean_id ? data.dean.name : null,
        'signature': this.numericalRating > 0 ? data.dean_signature : null
      }, {
        'title': 'Checked by:',
        'name': data.hrmo_id ? data.hrmo.name : null,
        'signature': this.numericalRating > 0 ? data.hrmo_signature : null
      }, {
        'title': 'Final Rating:',
        'name': data.campus_director_id ? data.campus_director.name : null,
        'signature': this.numericalRating > 0 ? data.campus_director_signature : null
      }];
    },
    submitForm: function submitForm() {
      var _this2 = this;

      axios.post("ipcr-faculty-assesstment", this.templates).then(function (response) {
        _this2.$toast.success("IPCR Evaluate successfully saved!");

        window.location.reload();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this2.$toast.error(message);
      });
    },
    downloadFiles: function downloadFiles(data) {
      var _data$dean_signature, _data$campus_director, _data$hrmo_signature, _data$vp_signature;

      this.json = JSON.parse(data);
      this.signatures = [{
        'title': 'Discuss with:',
        'name': data.dean_id ? data.dean.name : null,
        'signature': (_data$dean_signature = data.dean_signature) !== null && _data$dean_signature !== void 0 ? _data$dean_signature : null
      }, {
        'title': 'Assessed by:',
        'name': data.campus_director_id ? data.campus_director.name : null,
        'signature': (_data$campus_director = data.campus_director_signature) !== null && _data$campus_director !== void 0 ? _data$campus_director : null
      }, {
        'title': 'Checked by:',
        'name': data.hrmo_id ? data.hrmo.name : null,
        'signature': (_data$hrmo_signature = data.hrmo_signature) !== null && _data$hrmo_signature !== void 0 ? _data$hrmo_signature : null
      }, {
        'title': 'Final Rating:',
        'name': data.vp_id ? data.vp.name : null,
        'signature': (_data$vp_signature = data.vp_signature) !== null && _data$vp_signature !== void 0 ? _data$vp_signature : null
      }];
      this.$refs.html2Pdf.generatePdf();
    },
    openFileInput: function openFileInput() {
      // Trigger a click event on the hidden file input when the button is clicked
      this.$refs.fileInput.click();
    },
    handleFileUpload: function handleFileUpload(event) {
      var _this3 = this;

      var form = new FormData();
      var selectedFile = event.target.files[0];
      var data = {
        'assessment_id': this.templates.id,
        'files': selectedFile,
        'is_hrmo': 1
      };

      _.each(data, function (value, key) {
        form.append(key, value);
      });

      var config = {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      };
      axios.post("ipcr-faculty-assesstment/upload-signature", form, config).then(function (response) {
        _this3.$toast.success("Signature Sucessfully Saved!");

        window.location.reload();

        _this3.fetchPerDepartment();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this3.$toast.error(message);
      }); // You can now use the selectedFile object as needed
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=template&id=2082cd98&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=template&id=2082cd98& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "card", staticStyle: { width: "90vw" } },
          [
            _c(
              "div",
              {
                staticClass: "card-header card-header-primary card-header-icon",
                staticStyle: { "z-index": "0 !important" }
              },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("strong", [_vm._v(_vm._s(_vm.department_name))])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            Object.keys(_vm.faculty).length !== 0
              ? _c(
                  "div",
                  { staticClass: "card-body" },
                  _vm._l(_vm.faculty, function(fac) {
                    return _c("div", { key: fac.id, staticClass: "card" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("h3", [
                            _vm._v(
                              "Checked IPCR of " + _vm._s(fac.faculty.name)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 mt-4" }, [
                          _c("h5", [_vm._v("Status: " + _vm._s(fac.status_id))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-1 mt-3" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.editFiles(fac)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-1 mt-3" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-success",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.downloadFiles(fac.data)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.templates.ipcr_function
              ? _c("div", { staticClass: "container-fluid" }, [
                  _c("input", {
                    ref: "fileInput",
                    staticStyle: { display: "none" },
                    attrs: { type: "file" },
                    on: { change: _vm.handleFileUpload }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary ml-5",
                      on: { click: _vm.openFileInput }
                    },
                    [_vm._v("Upload Signature")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitForm($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "float-right" }, [
                            _c("p", { staticClass: "remove-space" }, [
                              _vm._v("SPMS Form 02")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "remove-space" }, [
                              _vm._v("Date: " + _vm._s(_vm.dateToday))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "remove-space" }, [
                              _vm._v("Revised: 03")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              { staticStyle: { "word-wrap": "break-word" } },
                              [
                                _vm._v("\n\t\t\t\t\t\t\t\t\t\tI,"),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.templates.name,
                                      expression: "templates.name"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    size: "15",
                                    disabled: ""
                                  },
                                  domProps: { value: _vm.templates.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.templates,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.templates.roles_name,
                                      expression: "templates.roles_name"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    size: "20",
                                    disabled: ""
                                  },
                                  domProps: { value: _vm.templates.roles_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.templates,
                                        "roles_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tof the Laguna State Polytechnic University, commit to deliver and agree to\n\t\t\t\t\t\t\t\t\t\tthe rated of the following in accordance with the indicated measures for\n\t\t\t\t\t\t\t\t\t\tthe\n\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.templates.semester,
                                      expression: "templates.semester"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    size: "5",
                                    disabled: ""
                                  },
                                  domProps: { value: _vm.templates.semester },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.templates,
                                        "semester",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tSemester of Academic Year\n\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.templates.year,
                                      expression: "templates.year"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    size: "7",
                                    disabled: ""
                                  },
                                  domProps: { value: _vm.templates.year },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.templates,
                                        "year",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(".\n\t\t\t\t\t\t\t\t\t")
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-border" }, [
                            _c(
                              "tr",
                              _vm._l(_vm.signatures, function(
                                signatory,
                                index
                              ) {
                                return _c("th", { key: index }, [
                                  _c("p", [
                                    _vm._v(
                                      _vm._s(
                                        signatory.title === "Discussed with:"
                                          ? "Conforme"
                                          : signatory.title
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticStyle: { "margin-left": "30%" } },
                                    [
                                      _c("img", {
                                        staticStyle: {
                                          width: "128px",
                                          height: "50px"
                                        },
                                        attrs: {
                                          src: signatory.signature,
                                          alt: "My Image"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticStyle: { "margin-left": "30%" }
                                        },
                                        [_vm._v(_vm._s(signatory.name))]
                                      )
                                    ]
                                  )
                                ])
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "tr",
                              [
                                _c(
                                  "th",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\tRatee\n\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.templates.ipcr_signatory, function(
                                  signatory
                                ) {
                                  return _c(
                                    "th",
                                    {
                                      key: signatory.id,
                                      staticStyle: { "text-align": "center" }
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(signatory.position) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "table",
                            { staticClass: "table table-border two-table" },
                            [
                              _vm._m(1),
                              _vm._v(" "),
                              _vm._m(2),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                [
                                  _vm._l(_vm.templates.ipcr_function, function(
                                    ipcrFunction,
                                    index
                                  ) {
                                    return [
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "10" } }, [
                                          _vm._v(_vm._s(ipcrFunction.name))
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        ipcrFunction.ipcr_subfunctions,
                                        function(ipcrSubfunction, index1) {
                                          return [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { attrs: { colspan: "10" } },
                                                [
                                                  _vm._v(
                                                    _vm._s(ipcrSubfunction.name)
                                                  )
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _vm._l(
                                              ipcrSubfunction.ipcr_performance,
                                              function(performance, index2) {
                                                return [
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      [
                                                        _c(
                                                          "router-link",
                                                          {
                                                            attrs: {
                                                              to:
                                                                "/upload-files"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                                _vm._s(
                                                                  performance.name
                                                                ) +
                                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          display: "none"
                                                        }
                                                      },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                performance.id,
                                                              expression:
                                                                "performance.id"
                                                            }
                                                          ],
                                                          attrs: {
                                                            type: "text"
                                                          },
                                                          domProps: {
                                                            value:
                                                              performance.id
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                performance,
                                                                "id",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.target,
                                                            expression:
                                                              "performance.target"
                                                          }
                                                        ],
                                                        attrs: {
                                                          type: "number",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.target
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "target",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.accomplished,
                                                            expression:
                                                              "performance.accomplished"
                                                          }
                                                        ],
                                                        attrs: {
                                                          type: "number",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.accomplished
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "accomplished",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.date_of_submission,
                                                            expression:
                                                              "performance.date_of_submission"
                                                          }
                                                        ],
                                                        attrs: {
                                                          type: "date",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.date_of_submission
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "date_of_submission",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.date_completed,
                                                            expression:
                                                              "performance.date_completed"
                                                          }
                                                        ],
                                                        attrs: {
                                                          type: "date",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.date_completed
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "date_completed",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.quantity,
                                                            expression:
                                                              "performance.quantity"
                                                          }
                                                        ],
                                                        staticStyle: {
                                                          width: "50px"
                                                        },
                                                        attrs: {
                                                          type: "number",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.quantity
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "quantity",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.quality,
                                                            expression:
                                                              "performance.quality"
                                                          }
                                                        ],
                                                        staticStyle: {
                                                          width: "50px"
                                                        },
                                                        attrs: {
                                                          type: "number",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.quality
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "quality",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.tar,
                                                            expression:
                                                              "performance.tar"
                                                          }
                                                        ],
                                                        staticStyle: {
                                                          width: "50px"
                                                        },
                                                        attrs: {
                                                          type: "number",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value: performance.tar
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "tar",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.asc,
                                                            expression:
                                                              "performance.asc"
                                                          }
                                                        ],
                                                        staticStyle: {
                                                          width: "50px"
                                                        },
                                                        attrs: {
                                                          type: "number",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value: performance.asc
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "asc",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              performance.remarks,
                                                            expression:
                                                              "performance.remarks"
                                                          }
                                                        ],
                                                        attrs: {
                                                          type: "text",
                                                          disabled: ""
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.remarks
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              performance,
                                                              "remarks",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ])
                                                  ])
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("tfoot", [
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "5" } }, [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\tComments and Recommendations for Development Purposes:\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.templates.recommendation,
                                          expression: "templates.recommendation"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        size: "70",
                                        disabled: ""
                                      },
                                      domProps: {
                                        value: _vm.templates.recommendation
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.templates,
                                            "recommendation",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "Numerical Rating: " +
                                        _vm._s(_vm.numericalRating)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { attrs: { colspan: "4" } }, [
                                    _vm._v(
                                      "Adjectival Rating: " +
                                        _vm._s(_vm.adjectivalRating)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  _vm._l(_vm.signatures, function(
                                    signatory,
                                    index
                                  ) {
                                    return _c(
                                      "td",
                                      {
                                        key: index,
                                        attrs: {
                                          colspan:
                                            signatory.title === "Final Rating:"
                                              ? "4"
                                              : "2"
                                        }
                                      },
                                      [
                                        _c("p", [
                                          _vm._v(_vm._s(signatory.title))
                                        ]),
                                        _vm._v(" "),
                                        signatory.name
                                          ? _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "margin-left": "102px"
                                                }
                                              },
                                              [
                                                _c("img", {
                                                  staticStyle: {
                                                    width: "128px",
                                                    height: "50px"
                                                  },
                                                  attrs: {
                                                    src: signatory.signature,
                                                    alt: "My Image"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticStyle: {
                                                      "margin-left": "102px"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(signatory.name)
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _vm._m(3)
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(4)
                      ]
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "VueHtml2pdf",
              {
                ref: "html2Pdf",
                attrs: {
                  "manual-pagination": true,
                  "enable-download": true,
                  "paginate-elements-by-height": 1200,
                  filename: "myPDF",
                  "pdf-quality": 2,
                  "pdf-format": "a3",
                  "pdf-orientation": "landscape",
                  "pdf-content-width": "1600px"
                }
              },
              [
                _c(
                  "section",
                  { attrs: { slot: "pdf-content" }, slot: "pdf-content" },
                  [
                    _c("facultytemplate", {
                      attrs: { templates: _vm.json, signatures: _vm.signatures }
                    })
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("h4", { staticStyle: { "font-weight": "900" } }, [
        _vm._v("INDIVIDUAL PERFORMANCE COMMITMENT AND REVIEW")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { attrs: { rowspan: "2", colspan: "1" } }, [
        _vm._v("PERFORMANCE INDICATOR")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { rowspan: "2", colspan: "1" } }, [_vm._v("TARGET")]),
      _vm._v(" "),
      _c("th", { attrs: { rowspan: "2", colspan: "1" } }, [
        _vm._v("ACCOMPLISHED")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { rowspan: "2", colspan: "1" } }, [
        _vm._v("DATE OF SUBMISSION/COMPLETION")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { rowspan: "2", colspan: "1" } }, [
        _vm._v("DATE SUBMITTED/ COMPLETED")
      ]),
      _vm._v(" "),
      _c("th", { attrs: { rowspan: "1", colspan: "4" } }, [_vm._v("Rating")]),
      _vm._v(" "),
      _c("th", { attrs: { rowspan: "2", colspan: "1" } }, [_vm._v("Remarks")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { attrs: { scope: "col" } }, [_vm._v("QTY")]),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("QL/E")]),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("T")]),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("A")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { attrs: { colspan: "2" } }, [_vm._v("RATEE")]),
      _vm._v(" "),
      _c("th", { attrs: { colspan: "2" } }, [_vm._v("DEAN")]),
      _vm._v(" "),
      _c("th", { attrs: { colspan: "2" } }, [_vm._v("HRMO")]),
      _vm._v(" "),
      _c("th", { attrs: { colspan: "4" } }, [_vm._v("CAMPUS DIRECTOR")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary mb-4 btn-sm float-right",
          attrs: { type: "submit" }
        },
        [_vm._v("\n\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t")]
      ),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-danger mb-4 btn-sm float-right" }, [
        _vm._v("Cancel")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue":
/*!***************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowByDepartment_vue_vue_type_template_id_2082cd98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowByDepartment.vue?vue&type=template&id=2082cd98& */ "./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=template&id=2082cd98&");
/* harmony import */ var _ShowByDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowByDepartment.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowByDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowByDepartment_vue_vue_type_template_id_2082cd98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowByDepartment_vue_vue_type_template_id_2082cd98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowByDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowByDepartment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowByDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=template&id=2082cd98&":
/*!**********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=template&id=2082cd98& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowByDepartment_vue_vue_type_template_id_2082cd98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowByDepartment.vue?vue&type=template&id=2082cd98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/ShowByDepartment.vue?vue&type=template&id=2082cd98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowByDepartment_vue_vue_type_template_id_2082cd98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowByDepartment_vue_vue_type_template_id_2082cd98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);