(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    templates: {},
    signatures: {}
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
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.remove-space {\r\n\tmargin: 0;\r\n\tpadding: 0;\n}\ntable,\r\nth,\r\ntd {\r\n\tborder: 1px solid !important;\r\n\tfont-weight: 500;\n}\n.two-table th {\r\n\tborder: 1px solid black;\r\n\ttext-align: center;\n}\n.two-table th {\r\n\tvertical-align: middle !important;\n}\n.two-table tbody {\r\n\tborder: 1px solid !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./facultytemplate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=template&id=a69e9640&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=template&id=a69e9640& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _vm.templates.ipcr_function
    ? _c(
        "div",
        [
          _vm._t("default"),
          _vm._v(" "),
          _c("div", { staticClass: "card", staticStyle: { width: "100%" } }, [
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
                _c("p", { staticStyle: { "word-wrap": "break-word" } }, [
                  _vm._v("\n\t\t\t\t\tI,"),
                  _c("input", {
                    attrs: { type: "text", size: "15", disabled: "" },
                    domProps: { value: _vm.$t("auth.name") }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", size: "20", disabled: "" },
                    domProps: { value: _vm.$t("auth.role_name") }
                  }),
                  _vm._v(
                    "\n\t\t\t\t\tof the Laguna State Polytechnic University, commit to deliver and agree to the rated of the\n\t\t\t\t\tfollowing in accordance with the indicated measures for the\n\t\t\t\t\t"
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
                    attrs: { type: "text", size: "5", disabled: "" },
                    domProps: { value: _vm.templates.semester },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.templates, "semester", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" Semester of Academic Year\n\t\t\t\t\t"),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.templates.year,
                        expression: "templates.year"
                      }
                    ],
                    attrs: { type: "text", size: "10", disabled: "" },
                    domProps: { value: _vm.templates.year },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.templates, "year", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(".\n\t\t\t\t")
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-border" }, [
                _c(
                  "tr",
                  _vm._l(_vm.signatures, function(signatory, index) {
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
                      _c("span", { staticStyle: { "margin-left": "30%" } }, [
                        _c("img", {
                          staticStyle: { width: "128px", height: "50px" },
                          attrs: { src: signatory.signature, alt: "My Image" }
                        }),
                        _vm._v(" "),
                        _c("p", { staticStyle: { "margin-left": "30%" } }, [
                          _vm._v(_vm._s(signatory.name))
                        ])
                      ])
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "tr",
                  [
                    _c("th", { staticStyle: { "text-align": "center" } }, [
                      _vm._v("Ratee")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.templates.ipcr_signatory, function(signatory) {
                      return _c(
                        "th",
                        {
                          key: signatory.id,
                          staticStyle: { "text-align": "center" }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(signatory.position) +
                              "\n\t\t\t\t\t"
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-border two-table" }, [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.templates.ipcr_function, function(ipcrFunction) {
                      return [
                        _c("tr", [
                          _c("td", { attrs: { colspan: "10" } }, [
                            _vm._v(_vm._s(ipcrFunction.name))
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._l(ipcrFunction.ipcr_subfunctions, function(
                          ipcrSubfunction
                        ) {
                          return [
                            _c("tr", [
                              _c("td", { attrs: { colspan: "10" } }, [
                                _vm._v(_vm._s(ipcrSubfunction.name))
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._l(ipcrSubfunction.ipcr_performance, function(
                              performance
                            ) {
                              return [
                                _c("tr", [
                                  _c("td", [_vm._v(_vm._s(performance.name))]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { display: "none" } },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: performance.id,
                                            expression: "performance.id"
                                          }
                                        ],
                                        attrs: { type: "text" },
                                        domProps: { value: performance.id },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              performance,
                                              "id",
                                              $event.target.value
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
                                          value: performance.target,
                                          expression: "performance.target"
                                        }
                                      ],
                                      attrs: { type: "number", disabled: "" },
                                      domProps: { value: performance.target },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "target",
                                            $event.target.value
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
                                          value: performance.accomplished,
                                          expression: "performance.accomplished"
                                        }
                                      ],
                                      attrs: { type: "number", disabled: "" },
                                      domProps: {
                                        value: performance.accomplished
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "accomplished",
                                            $event.target.value
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
                                          value: performance.date_of_submission,
                                          expression:
                                            "performance.date_of_submission"
                                        }
                                      ],
                                      attrs: { type: "date", disabled: "" },
                                      domProps: {
                                        value: performance.date_of_submission
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "date_of_submission",
                                            $event.target.value
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
                                          value: performance.date_completed,
                                          expression:
                                            "performance.date_completed"
                                        }
                                      ],
                                      attrs: { type: "input", disabled: "" },
                                      domProps: {
                                        value: performance.date_completed
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "date_completed",
                                            $event.target.value
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
                                          value: performance.quantity,
                                          expression: "performance.quantity"
                                        }
                                      ],
                                      staticStyle: { width: "50px" },
                                      attrs: { type: "number", disabled: "" },
                                      domProps: { value: performance.quantity },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "quantity",
                                            $event.target.value
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
                                          value: performance.quality,
                                          expression: "performance.quality"
                                        }
                                      ],
                                      staticStyle: { width: "50px" },
                                      attrs: { type: "number", disabled: "" },
                                      domProps: { value: performance.quality },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "quality",
                                            $event.target.value
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
                                          value: performance.tar,
                                          expression: "performance.tar"
                                        }
                                      ],
                                      staticStyle: { width: "50px" },
                                      attrs: { type: "number", disabled: "" },
                                      domProps: { value: performance.tar },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "tar",
                                            $event.target.value
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
                                          value: performance.asc,
                                          expression: "performance.asc"
                                        }
                                      ],
                                      staticStyle: { width: "50px" },
                                      attrs: { type: "number", disabled: "" },
                                      domProps: { value: performance.asc },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "asc",
                                            $event.target.value
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
                                          value: performance.remarks,
                                          expression: "performance.remarks"
                                        }
                                      ],
                                      attrs: { type: "text", disabled: "" },
                                      domProps: { value: performance.remarks },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            performance,
                                            "remarks",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]
                            })
                          ]
                        })
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
                        "\n\t\t\t\t\t\t\tComments and Recommendations for Development Purposes:\n\t\t\t\t\t\t\t"
                      ),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.templates.recommendation,
                            expression: "templates.recommendation"
                          }
                        ],
                        staticClass: "form-control",
                        staticStyle: { border: "1px solid" },
                        attrs: { name: "recommendation", disabled: "" },
                        domProps: { value: _vm.templates.recommendation },
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
                      _vm._v("Numerical Rating: " + _vm._s(_vm.numericalRating))
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "4" } }, [
                      _vm._v(
                        "Adjectival Rating: " + _vm._s(_vm.adjectivalRating)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tr",
                    _vm._l(_vm.signatures, function(signatory, index) {
                      return _c(
                        "td",
                        {
                          key: index,
                          attrs: {
                            colspan:
                              signatory.title === "Final Rating:" ? "4" : "2"
                          }
                        },
                        [
                          _c("p", [_vm._v(_vm._s(signatory.title))]),
                          _vm._v(" "),
                          signatory.name
                            ? _c(
                                "span",
                                { staticStyle: { "margin-left": "102px" } },
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
                                    { staticStyle: { "margin-left": "102px" } },
                                    [_vm._v(_vm._s(signatory.name))]
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
              ])
            ])
          ])
        ],
        2
      )
    : _vm._e()
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue":
/*!**************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/facultytemplate.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facultytemplate_vue_vue_type_template_id_a69e9640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facultytemplate.vue?vue&type=template&id=a69e9640& */ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=template&id=a69e9640&");
/* harmony import */ var _facultytemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facultytemplate.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _facultytemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facultytemplate.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _facultytemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _facultytemplate_vue_vue_type_template_id_a69e9640___WEBPACK_IMPORTED_MODULE_0__["render"],
  _facultytemplate_vue_vue_type_template_id_a69e9640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/facultytemplate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./facultytemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./facultytemplate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=template&id=a69e9640&":
/*!*********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=template&id=a69e9640& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_template_id_a69e9640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./facultytemplate.vue?vue&type=template&id=a69e9640& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/facultytemplate.vue?vue&type=template&id=a69e9640&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_template_id_a69e9640___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_facultytemplate_vue_vue_type_template_id_a69e9640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);