(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      editable: true,
      delayedDragging: false,
      isDragging: false,
      // For Function variable
      functionName: null,
      functionList: [],
      isForIpcrUpdate: false,
      // For Sub function variable
      subFunctionName: null,
      subFunctionList: [],
      subfunctionSelect: null,
      isForSubIpcrUpdate: false,
      updateSubFunctionData: [],
      // For Performance Function variable
      updatePerformanceFunctionData: [],
      performanceFunctionSelect: null,
      performanceSubfunctionSelect: null,
      selectedSubFunctionList: [],
      performanceFunctionList: [],
      performanceFunctionName: null,
      isForPerformannceIpcrUpdate: false,
      // For Signatories Function variable
      signatoryList: [],
      updateSignatoryData: [],
      isForSingatoriesUpdate: false,
      level_of_assestment: null,
      name_of_signatories: null,
      position: null
    };
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    isDragging: function isDragging(newValue) {
      var _this = this;

      if (newValue) {
        this.delayedDragging = true;
        return;
      }

      this.$nextTick(function () {
        _this.delayedDragging = false;
      });
    }
  },
  mounted: function mounted() {
    this.fetchFunctionList();
    this.fetchSubFunctionList();
    this.fetchPerformanceFunctionList();
    this.fetchSignatoryList();
  },
  methods: {
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    },
    orderList: function orderList() {
      this.functionList = this.functionList.sort(function (one, two) {
        return one.order - two.order;
      });
    },
    onMove: function onMove(_ref) {
      var relatedContext = _ref.relatedContext,
          draggedContext = _ref.draggedContext;
      var relatedElement = relatedContext.element;
      var draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
    },
    updateFunction: function updateFunction(value) {
      var name = value.name;
      this.functionName = name;
      this.updateFunctionTitle = name;
      this.isForIpcrUpdate = true;
    },
    deleteFunction: function deleteFunction(value, index) {
      var _this2 = this;

      if (value.id) {
        axios["delete"]("ipcr/".concat(value.id)).then(function (response) {
          _this2.$toast.success("IPCR Function successfully deleted!");

          _this2.fetchFunctionList();
        })["catch"](function (error) {
          var message = error.response.data.message || error.message;

          _this2.$toast.error(message);
        });
      }

      this.functionList.splice(index, 1);
    },
    updateSubFunction: function updateSubFunction(value) {
      var name = value.name;
      this.subFunctionName = name;
      this.updateSubFunctionData = value;
      this.subfunctionSelect = {
        id: value.ipcr_function.id,
        name: value.ipcr_function.name
      };
      this.isForSubIpcrUpdate = true;
    },
    deleteSubFunction: function deleteSubFunction(value, index) {
      var _this3 = this;

      if (value.id) {
        axios["delete"]("ipcr-sub/".concat(value.id)).then(function (response) {
          _this3.$toast.success("IPCR Sub Function successfully deleted!");

          _this3.fetchFunctionList();

          _this3.fetchSubFunctionList();
        })["catch"](function (error) {
          var message = error.response.data.message || error.message;

          _this3.$toast.error(message);
        });
      }

      this.subFunctionList.splice(index, 1);
    },
    updatePerformanceFunction: function updatePerformanceFunction(value) {
      var name = value.name;
      this.performanceFunctionName = name;
      this.updatePerformanceFunctionData = value;
      this.performanceFunctionSelect = {
        id: value.ipcr_sub_function.ipcr_function.id,
        name: value.ipcr_sub_function.ipcr_function.name
      };
      this.performanceSubfunctionSelect = {
        id: value.ipcr_sub_function.id,
        name: value.ipcr_sub_function.name
      };
      this.isForPerformannceIpcrUpdate = true;
    },
    deletePerformanceFunction: function deletePerformanceFunction(value, index) {
      var _this4 = this;

      if (value.id) {
        axios["delete"]("ipcr-performance/".concat(value.id)).then(function (response) {
          _this4.$toast.success("IPCR Performance successfully deleted!");

          _this4.fetchPerformanceFunctionList();
        })["catch"](function (error) {
          var message = error.response.data.message || error.message;

          _this4.$toast.error(message);
        });
      }

      this.subFunctionList.splice(index, 1);
    },
    addUpdateFunction: function addUpdateFunction() {
      var _this5 = this;

      var listOrderCount = this.functionList.length;

      if (this.isForIpcrUpdate) {
        this.functionList.map(function (obj) {
          if (obj['name'] === _this5.updateFunctionTitle) {
            obj.name = _this5.functionName;
          }

          return obj;
        });
      } else {
        console.log(this.functionName);
        this.functionList.push({
          name: this.functionName,
          order: listOrderCount + 1,
          fixed: false
        });
      }

      this.functionName = null;
    },
    addSubUpdateFunction: function addSubUpdateFunction() {
      var _this6 = this;

      var listOrderCount = this.subFunctionList.length;

      if (this.isForSubIpcrUpdate) {
        this.subFunctionList.map(function (obj) {
          if (obj['id'] === _this6.updateSubFunctionData.id) {
            obj.name = _this6.subFunctionName;
            obj.ipcr_function_id = _this6.subfunctionSelect.id;
          }

          return obj;
        });
      } else {
        this.subFunctionList.push({
          name: this.subFunctionName,
          order: listOrderCount + 1,
          fixed: false,
          ipcr_function_id: this.subfunctionSelect.id
        });
      }

      this.subfunctionSelect = null;
      this.subFunctionName = null;
    },
    addPeformanceUpdateFunction: function addPeformanceUpdateFunction() {
      var _this7 = this;

      var listOrderCount = this.performanceFunctionList.length;

      if (this.isForPerformannceIpcrUpdate) {
        this.performanceFunctionList.map(function (obj) {
          if (obj['id'] === _this7.updatePerformanceFunctionData.id) {
            obj.name = _this7.performanceFunctionName;
            obj.ipcr_sub_function_id = _this7.updatePerformanceFunctionData.ipcr_sub_function_id;
          }

          return obj;
        });
      } else {
        this.performanceFunctionList.push({
          name: this.performanceFunctionName,
          order: listOrderCount + 1,
          fixed: false,
          ipcr_sub_function_id: this.performanceSubfunctionSelect.id
        });
      }

      this.performanceFunctionSelect = null;
      this.performanceSubfunctionSelect = null;
      this.performanceFunctionName = null;
    },
    saveFunction: function saveFunction() {
      var _this8 = this;

      axios.post('ipcr', this.functionList).then(function (response) {
        _this8.$toast.success("IPCR Functions successfully saved!");

        _this8.isForIpcrUpdate = false;

        _this8.fetchFunctionList();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this8.$toast.error(message);
      });
    },
    saveSubFunction: function saveSubFunction() {
      var _this9 = this;

      axios.post('ipcr-sub', this.subFunctionList).then(function (response) {
        _this9.$toast.success("IPCR Sub Functions successfully saved!");

        _this9.isForSubIpcrUpdate = false;

        _this9.fetchSubFunctionList();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this9.$toast.error(message);
      });
    },
    savePerformaceFunction: function savePerformaceFunction() {
      var _this10 = this;

      axios.post('ipcr-performance', this.performanceFunctionList).then(function (response) {
        _this10.$toast.success("IPCR Sub Performance successfully saved!");

        _this10.isForPerformannceIpcrUpdate = false;

        _this10.fetchPerformanceFunctionList();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this10.$toast.error(message);
      });
    },
    fetchFunctionList: function fetchFunctionList() {
      var _this11 = this;

      axios.get('ipcr').then(function (response) {
        _this11.functionList = response.data.data;
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this11.$toast.error(message);
      });
    },
    fetchSubFunctionList: function fetchSubFunctionList() {
      var _this12 = this;

      axios.get('ipcr-sub').then(function (response) {
        _this12.subFunctionList = response.data.data;
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this12.$toast.error(message);
      });
    },
    fetchPerformanceFunctionList: function fetchPerformanceFunctionList() {
      var _this13 = this;

      axios.get('ipcr-performance').then(function (response) {
        _this13.performanceFunctionList = response.data.data;
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this13.$toast.error(message);
      });
    },
    selectedFunctionList: function selectedFunctionList(value) {
      this.selectedSubFunctionList = value.ipcr_sub_function;
    },
    // Signatories
    addUpdateSignatories: function addUpdateSignatories() {
      var _this14 = this;

      var listOrderCount = this.signatoryList.length;

      if (this.isForSingatoriesUpdate) {
        this.signatoryList.map(function (obj) {
          if (obj['id'] === _this14.updateSignatoryData.id) {
            obj.level_of_assestment = _this14.level_of_assestment;
            obj.name_of_signatories = _this14.name_of_signatories;
            obj.position = _this14.position;
          }

          return obj;
        });
      } else {
        this.signatoryList.push({
          name: this["function"],
          level_of_assestment: this.level_of_assestment,
          name_of_signatories: this.name_of_signatories,
          position: this.position,
          order: listOrderCount + 1,
          fixed: false
        });
      }

      this.functionName = null;
    },
    saveSignatories: function saveSignatories() {
      var _this15 = this;

      axios.post('ipcr-signatory', this.signatoryList).then(function (response) {
        _this15.$toast.success("IPCR Signatory successfully saved!");

        _this15.isForPerformannceIpcrUpdate = false;

        _this15.fetchPerformanceFunctionList();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this15.$toast.error(message);
      });
    },
    fetchSignatoryList: function fetchSignatoryList() {
      var _this16 = this;

      axios.get('ipcr-signatory').then(function (response) {
        _this16.signatoryList = response.data.data;
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this16.$toast.error(message);
      });
    },
    updateSignatory: function updateSignatory(value) {
      var name = value.name;
      this.name_of_signatories = value.name_of_signatories;
      this.level_of_assestment = value.level_of_assestment;
      this.position = value.position;
      this.updateSignatoryData = value;
      this.isForSingatoriesUpdate = true;
    },
    deleteSignatory: function deleteSignatory(value, index) {
      var _this17 = this;

      if (value.id) {
        axios["delete"]("ipcr-signatory/".concat(value.id)).then(function (response) {
          _this17.$toast.success("IPCR Signatory successfully deleted!");

          _this17.fetchSignatoryList();
        })["catch"](function (error) {
          var message = error.response.data.message || error.message;

          _this17.$toast.error(message);
        });
      }

      this.signatoryList.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alert {\r\n\tpadding: 9px 6px !important;\n}\n.ipcr-card {\r\n\tpadding-left: 53px;\r\n\tpadding-top: 31px;\r\n\tpadding-bottom: 20px;\n}\n.ipcr-span {\r\n\tbackground-color: #f0ffff !important;\r\n\tcolor: black !important;\n}\n.ipcr-select {\r\n\twidth: 77.3%;\r\n\tpadding: 5px;\r\n\tmargin-bottom: 17px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #000000;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\n}\n.ipcr-editable {\r\n\tbackground-color: transparent;\r\n\tcolor: black !important;\r\n\tmargin-top: -7px;\r\n\tmargin-left: -18px;\n}\n.ipcr-editable-button {\r\n\tbackground-color: transparent !important;\r\n\tcolor: black !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=template&id=3a5d1d54&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=template&id=3a5d1d54& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("h4", [_vm._v("FUNCTIONS")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group bmd-form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.functionName,
                          expression: "functionName"
                        }
                      ],
                      attrs: { type: "text", size: "50", required: "" },
                      domProps: { value: _vm.functionName },
                      on: {
                        focus: function($event) {
                          return _vm.focusField("title")
                        },
                        blur: _vm.clearFocus,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.functionName = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        attrs: { type: "button" },
                        on: { click: _vm.addUpdateFunction }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.isForIpcrUpdate ? "Update" : "Add") +
                            "\n\t\t\t\t\t\t\t\t\t"
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("div", { staticClass: "form-group bmd-form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tDrag the box to arrange their orders.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        staticStyle: { "margin-left": "118px" },
                        attrs: { type: "button" },
                        on: { click: _vm.saveFunction }
                      },
                      [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-12 mt-4",
                        staticStyle: { "margin-left": "-20px" }
                      },
                      [
                        _c(
                          "draggable",
                          _vm._b(
                            {
                              attrs: { move: _vm.onMove },
                              on: {
                                start: function($event) {
                                  _vm.isDragging = true
                                },
                                end: function($event) {
                                  _vm.isDragging = false
                                }
                              },
                              model: {
                                value: _vm.functionList,
                                callback: function($$v) {
                                  _vm.functionList = $$v
                                },
                                expression: "functionList"
                              }
                            },
                            "draggable",
                            _vm.dragOptions,
                            false
                          ),
                          [
                            _c(
                              "transition-group",
                              {
                                attrs: { type: "transition", name: "flip-list" }
                              },
                              _vm._l(_vm.functionList, function(
                                element,
                                index
                              ) {
                                return _c("div", { key: element.order }, [
                                  _c("div", { staticClass: "container" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row alert alert-info ipcr-span",
                                        attrs: { "aria-hidden": "true" },
                                        on: {
                                          click: function($event) {
                                            element.fixed = !element.fixed
                                          }
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "col-md-1" }, [
                                          _c("span", [
                                            _c(
                                              "i",
                                              { staticClass: "material-icons" },
                                              [_vm._v("sort")]
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-md-10" },
                                          [
                                            _c("span", [
                                              _vm._v(_vm._s(element.name))
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-1" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown ipcr-editable"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-secondary btn-sm ipcr-editable-button",
                                                  attrs: {
                                                    type: "button",
                                                    id: "dropdownMenuButton",
                                                    "data-toggle": "dropdown",
                                                    "aria-haspopup": "true",
                                                    "aria-expanded": "false"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "i",
                                                    {
                                                      staticClass:
                                                        "material-icons"
                                                    },
                                                    [_vm._v("more_vert")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "dropdown-menu",
                                                  attrs: {
                                                    "aria-labelledby":
                                                      "dropdownMenuButton"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      staticStyle: {
                                                        color: "black"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.updateFunction(
                                                            element
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Edit")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      staticStyle: {
                                                        color: "black"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.deleteFunction(
                                                            element,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Delete")]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("h4", [_vm._v("+ SUB-FUNCTIONS")]),
                  _vm._v(" "),
                  _c("small", [
                    _vm._v(
                      "(Example: Plan and prepare instructional materials to enhance\n\t\t\t\t\t\t\t\t\tinstructions)"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group bmd-form-group" },
                    [
                      _c("v-select", {
                        staticClass: "form-control ipcr-select",
                        attrs: {
                          name: "sub_function",
                          label: "name",
                          options: _vm.functionList
                        },
                        on: {
                          focus: function($event) {
                            return _vm.focusField("sub_function")
                          },
                          blur: _vm.clearFocus
                        },
                        model: {
                          value: _vm.subfunctionSelect,
                          callback: function($$v) {
                            _vm.subfunctionSelect = $$v
                          },
                          expression: "subfunctionSelect"
                        }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.subFunctionName,
                            expression: "subFunctionName"
                          }
                        ],
                        attrs: { type: "text", size: "50", required: "" },
                        domProps: { value: _vm.subFunctionName },
                        on: {
                          focus: function($event) {
                            return _vm.focusField("title")
                          },
                          blur: _vm.clearFocus,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.subFunctionName = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-warning",
                          attrs: { type: "button" },
                          on: { click: _vm.addSubUpdateFunction }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.isForSubIpcrUpdate ? "Update" : "Add"
                              ) +
                              "\n\t\t\t\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("div", { staticClass: "form-group bmd-form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tDrag the box to arrange their orders.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        staticStyle: { "margin-left": "118px" },
                        attrs: { type: "button" },
                        on: { click: _vm.saveSubFunction }
                      },
                      [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-12 mt-4",
                        staticStyle: { "margin-left": "-20px" }
                      },
                      _vm._l(_vm.functionList, function(element) {
                        return _c(
                          "div",
                          { key: element.order },
                          [
                            _c("div", { staticClass: "container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "row alert alert-info ipcr-span"
                                },
                                [
                                  _c("div", { staticClass: "col-sm" }, [
                                    _c("span", [_vm._v(_vm._s(element.name))])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "draggable",
                              _vm._b(
                                {
                                  attrs: { move: _vm.onMove },
                                  on: {
                                    start: function($event) {
                                      _vm.isDragging = true
                                    },
                                    end: function($event) {
                                      _vm.isDragging = false
                                    }
                                  },
                                  model: {
                                    value: _vm.subFunctionList,
                                    callback: function($$v) {
                                      _vm.subFunctionList = $$v
                                    },
                                    expression: "subFunctionList"
                                  }
                                },
                                "draggable",
                                _vm.dragOptions,
                                false
                              ),
                              [
                                _c(
                                  "transition-group",
                                  {
                                    attrs: {
                                      type: "transition",
                                      name: "flip-list"
                                    }
                                  },
                                  _vm._l(_vm.subFunctionList, function(
                                    sub,
                                    index
                                  ) {
                                    return _c("div", { key: sub.order }, [
                                      element.id === sub.ipcr_function_id
                                        ? _c(
                                            "div",
                                            { staticClass: "container" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "row alert alert-info ipcr-span",
                                                  attrs: {
                                                    "aria-hidden": "true"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      sub.fixed = !sub.fixed
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-md-1" },
                                                    [
                                                      _c("span", [
                                                        _c(
                                                          "i",
                                                          {
                                                            staticClass:
                                                              "material-icons"
                                                          },
                                                          [_vm._v("sort")]
                                                        )
                                                      ])
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-md-10"
                                                    },
                                                    [
                                                      _c("span", [
                                                        _vm._v(_vm._s(sub.name))
                                                      ])
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-md-1" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "dropdown ipcr-editable"
                                                        },
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-secondary btn-sm ipcr-editable-button",
                                                              attrs: {
                                                                type: "button",
                                                                id:
                                                                  "dropdownMenuButton",
                                                                "data-toggle":
                                                                  "dropdown",
                                                                "aria-haspopup":
                                                                  "true",
                                                                "aria-expanded":
                                                                  "false"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "i",
                                                                {
                                                                  staticClass:
                                                                    "material-icons"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "more_vert"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "dropdown-menu",
                                                              attrs: {
                                                                "aria-labelledby":
                                                                  "dropdownMenuButton"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "dropdown-item",
                                                                  staticStyle: {
                                                                    color:
                                                                      "black"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.updateSubFunction(
                                                                        sub
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [_vm._v("Edit")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "dropdown-item",
                                                                  staticStyle: {
                                                                    color:
                                                                      "black"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.deleteSubFunction(
                                                                        sub,
                                                                        index
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Delete"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  }),
                                  0
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("h4", [_vm._v("+ PERFORMANCE INDICATOR")]),
                  _vm._v(" "),
                  _c("small", [_vm._v("(Example: No. of syllabus prepared)")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group bmd-form-group" },
                    [
                      _c("v-select", {
                        staticClass: "form-control ipcr-select",
                        attrs: {
                          name: "performance_function",
                          label: "name",
                          options: _vm.functionList
                        },
                        on: {
                          input: _vm.selectedFunctionList,
                          focus: function($event) {
                            return _vm.focusField("performance_function")
                          },
                          blur: _vm.clearFocus
                        },
                        model: {
                          value: _vm.performanceFunctionSelect,
                          callback: function($$v) {
                            _vm.performanceFunctionSelect = $$v
                          },
                          expression: "performanceFunctionSelect"
                        }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "form-control ipcr-select",
                        attrs: {
                          name: "performance_function",
                          label: "name",
                          options: _vm.selectedSubFunctionList
                        },
                        on: {
                          focus: function($event) {
                            return _vm.focusField("performance_function")
                          },
                          blur: _vm.clearFocus
                        },
                        model: {
                          value: _vm.performanceSubfunctionSelect,
                          callback: function($$v) {
                            _vm.performanceSubfunctionSelect = $$v
                          },
                          expression: "performanceSubfunctionSelect"
                        }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.performanceFunctionName,
                            expression: "performanceFunctionName"
                          }
                        ],
                        attrs: { type: "text", size: "50", required: "" },
                        domProps: { value: _vm.performanceFunctionName },
                        on: {
                          focus: function($event) {
                            return _vm.focusField("title")
                          },
                          blur: _vm.clearFocus,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.performanceFunctionName = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-warning",
                          attrs: { type: "button" },
                          on: { click: _vm.addPeformanceUpdateFunction }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.isForPerformannceIpcrUpdate
                                  ? "Update"
                                  : "Add"
                              ) +
                              "\n\t\t\t\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("div", { staticClass: "form-group bmd-form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tDrag the box to arrange their orders.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        staticStyle: { "margin-left": "118px" },
                        attrs: { type: "button" },
                        on: { click: _vm.savePerformaceFunction }
                      },
                      [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-12 mt-4",
                        staticStyle: { "margin-left": "-20px" }
                      },
                      _vm._l(_vm.functionList, function(element) {
                        return _c(
                          "div",
                          { key: element.id },
                          [
                            _c("div", { staticClass: "container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "row alert alert-info ipcr-span"
                                },
                                [
                                  _c("div", { staticClass: "col-sm" }, [
                                    _c("span", [_vm._v(_vm._s(element.name))])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._l(element.ipcr_sub_function, function(sub) {
                              return _c(
                                "div",
                                { key: sub.id },
                                [
                                  _c("div", { staticClass: "container" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row alert alert-info ipcr-span"
                                      },
                                      [
                                        _c("div", { staticClass: "col-sm" }, [
                                          _c("span", [_vm._v(_vm._s(sub.name))])
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "draggable",
                                    _vm._b(
                                      {
                                        attrs: { move: _vm.onMove },
                                        on: {
                                          start: function($event) {
                                            _vm.isDragging = true
                                          },
                                          end: function($event) {
                                            _vm.isDragging = false
                                          }
                                        },
                                        model: {
                                          value: _vm.performanceFunctionList,
                                          callback: function($$v) {
                                            _vm.performanceFunctionList = $$v
                                          },
                                          expression: "performanceFunctionList"
                                        }
                                      },
                                      "draggable",
                                      _vm.dragOptions,
                                      false
                                    ),
                                    [
                                      _c(
                                        "transition-group",
                                        {
                                          attrs: {
                                            type: "transition",
                                            name: "flip-list"
                                          }
                                        },
                                        _vm._l(
                                          _vm.performanceFunctionList,
                                          function(performance, index) {
                                            return _c(
                                              "div",
                                              { key: performance.order },
                                              [
                                                performance.ipcr_sub_function_id ===
                                                sub.id
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass: "container"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "row alert alert-info ipcr-span",
                                                            attrs: {
                                                              "aria-hidden":
                                                                "true"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                performance.fixed = !performance.fixed
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-md-1"
                                                              },
                                                              [
                                                                _c("span", [
                                                                  _c(
                                                                    "i",
                                                                    {
                                                                      staticClass:
                                                                        "material-icons"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "sort"
                                                                      )
                                                                    ]
                                                                  )
                                                                ])
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-md-10"
                                                              },
                                                              [
                                                                _c("span", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      performance.name
                                                                    )
                                                                  )
                                                                ])
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col-md-1"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "dropdown ipcr-editable"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "button",
                                                                      {
                                                                        staticClass:
                                                                          "btn btn-secondary btn-sm ipcr-editable-button",
                                                                        attrs: {
                                                                          type:
                                                                            "button",
                                                                          id:
                                                                            "dropdownMenuButton",
                                                                          "data-toggle":
                                                                            "dropdown",
                                                                          "aria-haspopup":
                                                                            "true",
                                                                          "aria-expanded":
                                                                            "false"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "i",
                                                                          {
                                                                            staticClass:
                                                                              "material-icons"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "more_vert"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-menu",
                                                                        attrs: {
                                                                          "aria-labelledby":
                                                                            "dropdownMenuButton"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "a",
                                                                          {
                                                                            staticClass:
                                                                              "dropdown-item",
                                                                            staticStyle: {
                                                                              color:
                                                                                "black"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.updatePerformanceFunction(
                                                                                  performance
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Edit"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "a",
                                                                          {
                                                                            staticClass:
                                                                              "dropdown-item",
                                                                            staticStyle: {
                                                                              color:
                                                                                "black"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.deletePerformanceFunction(
                                                                                  performance,
                                                                                  index
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Delete"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("h4", [_vm._v("SIGNATORIES")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group bmd-form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.level_of_assestment,
                          expression: "level_of_assestment"
                        }
                      ],
                      staticClass: "mb-4",
                      attrs: {
                        type: "text",
                        size: "50",
                        placeholder: "Level of Assessment",
                        required: ""
                      },
                      domProps: { value: _vm.level_of_assestment },
                      on: {
                        focus: function($event) {
                          return _vm.focusField("level_of_assestment")
                        },
                        blur: _vm.clearFocus,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.level_of_assestment = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.name_of_signatories,
                          expression: "name_of_signatories"
                        }
                      ],
                      staticClass: "mb-4",
                      attrs: {
                        type: "text",
                        size: "50",
                        placeholder: "Name of Signatory ",
                        required: ""
                      },
                      domProps: { value: _vm.name_of_signatories },
                      on: {
                        focus: function($event) {
                          return _vm.focusField("name_of_signatories")
                        },
                        blur: _vm.clearFocus,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name_of_signatories = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.position,
                          expression: "position"
                        }
                      ],
                      staticClass: "mb-4",
                      attrs: {
                        type: "text",
                        size: "50",
                        placeholder: "Position",
                        required: ""
                      },
                      domProps: { value: _vm.position },
                      on: {
                        focus: function($event) {
                          return _vm.focusField("position")
                        },
                        blur: _vm.clearFocus,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.position = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        attrs: { type: "button" },
                        on: { click: _vm.addUpdateSignatories }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.isForSingatoriesUpdate ? "Update" : "Add"
                            ) +
                            "\n\t\t\t\t\t\t\t\t\t"
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "card ipcr-card" }, [
                  _c("div", { staticClass: "form-group bmd-form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tDrag the box to arrange their orders.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        staticStyle: { "margin-left": "118px" },
                        attrs: { type: "button" },
                        on: { click: _vm.saveSignatories }
                      },
                      [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-12 mt-4",
                        staticStyle: { "margin-left": "-20px" }
                      },
                      [
                        _c(
                          "draggable",
                          _vm._b(
                            {
                              attrs: { move: _vm.onMove },
                              on: {
                                start: function($event) {
                                  _vm.isDragging = true
                                },
                                end: function($event) {
                                  _vm.isDragging = false
                                }
                              },
                              model: {
                                value: _vm.signatoryList,
                                callback: function($$v) {
                                  _vm.signatoryList = $$v
                                },
                                expression: "signatoryList"
                              }
                            },
                            "draggable",
                            _vm.dragOptions,
                            false
                          ),
                          [
                            _c(
                              "transition-group",
                              {
                                attrs: { type: "transition", name: "flip-list" }
                              },
                              _vm._l(_vm.signatoryList, function(
                                element,
                                index
                              ) {
                                return _c("div", { key: element.order }, [
                                  _c("div", { staticClass: "container" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row alert alert-info ipcr-span",
                                        attrs: { "aria-hidden": "true" },
                                        on: {
                                          click: function($event) {
                                            element.fixed = !element.fixed
                                          }
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "col-md-1" }, [
                                          _c("span", [
                                            _c(
                                              "i",
                                              { staticClass: "material-icons" },
                                              [_vm._v("sort")]
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-md-10" },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  element.name_of_signatories
                                                )
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-1" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown ipcr-editable"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-secondary btn-sm ipcr-editable-button",
                                                  attrs: {
                                                    type: "button",
                                                    id: "dropdownMenuButton",
                                                    "data-toggle": "dropdown",
                                                    "aria-haspopup": "true",
                                                    "aria-expanded": "false"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "i",
                                                    {
                                                      staticClass:
                                                        "material-icons"
                                                    },
                                                    [_vm._v("more_vert")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "dropdown-menu",
                                                  attrs: {
                                                    "aria-labelledby":
                                                      "dropdownMenuButton"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      staticStyle: {
                                                        color: "black"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.updateSignatory(
                                                            element
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Edit")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      staticStyle: {
                                                        color: "black"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.deleteSignatory(
                                                            element,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Delete")]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "container" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row alert alert-info ipcr-span"
                                      },
                                      [
                                        _c("span", { staticClass: "ml-5" }, [
                                          _vm._v(
                                            _vm._s(element.level_of_assestment)
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "container" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row alert alert-info ipcr-span"
                                      },
                                      [
                                        _c("span", { staticClass: "ml-5" }, [
                                          _vm._v(_vm._s(element.position))
                                        ])
                                      ]
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header card-header-primary card-header-icon" },
      [_c("h4", { staticClass: "card-title" }, [_vm._v("IPCR")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/index.vue":
/*!****************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3a5d1d54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3a5d1d54& */ "./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=template&id=3a5d1d54&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3a5d1d54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3a5d1d54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=template&id=3a5d1d54&":
/*!***********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=template&id=3a5d1d54& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a5d1d54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3a5d1d54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=template&id=3a5d1d54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a5d1d54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3a5d1d54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);