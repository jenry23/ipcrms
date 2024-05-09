(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a,
    XLSX: xlsx__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      template_name: null,
      status: '',
      activeField: '',
      editable: true,
      delayedDragging: false,
      isDragging: false,
      template_id: null,
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
      position: null,
      templates: null,
      templateList: []
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
    this.fetchIPCRTemplates();
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

        _this9.fetchPerformanceFunctionList();
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
    // setTemplate (template) {
    // 	this.template_id = template.id
    // },
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
    },
    fetchIPCRTemplates: function fetchIPCRTemplates() {
      var _this18 = this;

      axios.get('ipcr-templates').then(function (response) {
        _this18.templateList = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        var message = error.response.data.message || error.message;

        _this18.$toast.error(message);
      });
    },
    setActiveTemplates: function setActiveTemplates() {
      var _this19 = this;

      if (this.template_id) {
        axios.post("ipcr-templates/set-active", {
          id: this.template_id.id
        }).then(function (response) {
          _this19.$toast.success("IPCR templates is now active!");
        })["catch"](function (error) {
          var message = error.response.data.message || error.message;

          _this19.$toast.error(message);
        });
      } else {
        this.$toast.error("Please Select IPCR Template!");
      }
    },
    saveTemplates: function saveTemplates() {
      var _this20 = this;

      axios.post("ipcr-templates", {
        data: this.functionList,
        template_name: this.template_name
      }).then(function (response) {
        _this20.$toast.success("IPCR templates sucessfully saved!");
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this20.$toast.error(message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      departmentList: []
    };
  },
  created: function created() {
    this.fetchDepartment();
  },
  methods: {
    fetchDepartment: function fetchDepartment() {
      var _this = this;

      axios.get('department').then(function (response) {
        _this.departmentList = response.data.data;
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this.$toast.error(message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facultytemplate_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facultytemplate.vue */ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    facultytemplate: _facultytemplate_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
      signatures: []
    };
  },
  mounted: function mounted() {
    this.fetchDeanIPCR();
  },
  computed: {
    numericalRating: function numericalRating() {
      var result = 0;
      var total_ipcr_performance1 = 0;

      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(this.templates.ipcr_function, function (value, key) {
        var sum1 = 0;
        var total_ipcr_performance2 = 0;

        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(value.ipcr_subfunctions, function (value2, key2) {
          var sum = 0;
          var total_ipcr_performance3 = 0;

          lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(value2.ipcr_performance, function (value3, key4) {
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
    fetchDeanIPCR: function fetchDeanIPCR() {
      var _this = this;

      axios.get('ipcr-faculty-assesstment/campus-director').then(function (response) {
        var data = response.data.data;
        _this.faculty = data;
      });
    },
    setQuantity: function setQuantity(value, index2, index1, index) {
      var sum = 0;

      if (value.target) {
        sum = parseInt(value.accomplished) / parseInt(value.target) * 5;
      }

      sum = sum > 5 ? 5 : Math.ceil(sum);
      this.templates.ipcr_function[index].ipcr_subfunctions[index1].ipcr_performance[index2].quantity = sum;
      return sum;
    },
    setTarget: function setTarget(value) {},
    computeAverage: function computeAverage(value, index2, index1, index) {
      var sum = 0;
      this.number1 = Math.min(5, Math.max(1, parseInt(value.quantity)));
      this.number2 = Math.min(5, Math.max(1, parseInt(value.quality)));
      this.number3 = Math.min(5, Math.max(1, parseInt(value.tar))); // Calculate the average of the three numbers

      sum = (this.number1 + this.number2 + this.number3) / 3;
      this.templates.ipcr_function[index].ipcr_subfunctions[index1].ipcr_performance[index2].asc = sum;
    },
    computedTarget: function computedTarget(value, index2, index1, index) {
      var startDate = new Date(value.date_completed);
      var endDate = new Date(value.date_of_submission);
      var timeDifference = endDate - startDate;
      var rating = 0; // Calculate the number of days late or early (assuming 24 hours per day)

      var daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Define your rating scale based on your criteria

      if (daysDifference >= -3 && daysDifference <= 3) {
        rating = 3; // On time
      } else if (daysDifference < -3) {
        rating = 1; // Extremely late
      } else if (daysDifference >= 7 && daysDifference <= 8) {
        rating = 4; // Extremely late
      } else {
        rating = 5; // Completed well ahead of schedule
      }

      this.templates.ipcr_function[index].ipcr_subfunctions[index1].ipcr_performance[index2].tar = rating;
    },
    editFiles: function editFiles(data) {
      var _data$faculty_signatu;

      this.templates = JSON.parse(data.data);
      this.templates.id = data.id;
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
      console.log(this.signatures);
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
        'is_dean': 1
      };

      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(data, function (value, key) {
        form.append(key, value);
      });

      var config = {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      };
      axios.post("ipcr-faculty-assesstment/upload-signature", form, config).then(function (response) {
        _this3.$toast.success("Signature Sucessfully Saved!");

        _this3.fetchDeanIPCR();

        window.location.reload();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this3.$toast.error(message);
      }); // You can now use the selectedFile object as needed
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _facultytemplate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facultytemplate.vue */ "./resources/adminapp/js/cruds/IPCR/facultytemplate.vue");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    facultytemplate: _facultytemplate_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      faculty: [],
      form: [],
      templates: [],
      availableRate: true,
      signatures: [],
      json: []
    };
  },
  computed: {
    numericalRating: function numericalRating() {
      var result = 0;
      var total_ipcr_performance1 = 0;

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.templates.ipcr_function, function (value, key) {
        var sum1 = 0;
        var total_ipcr_performance2 = 0;

        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(value.ipcr_subfunctions, function (value2, key2) {
          var sum = 0;
          var total_ipcr_performance3 = 0;

          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(value2.ipcr_performance, function (value3, key4) {
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
  mounted: function mounted() {
    this.fetchFacultyIPCR();
  },
  methods: {
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    },
    setQuantity: function setQuantity(value) {
      var sum = 0;

      if (value.target) {
        sum = parseInt(value.accomplished) / parseInt(value.target);
      }

      return sum > 5 ? 5 : Math.ceil(sum);
    },
    rateYourself: function rateYourself() {
      var _this = this;

      axios.get('ipcr-templates/get-active').then(function (response) {
        var data = response.data;

        if (Object.keys(data).length === 0) {
          _this.$toast.error("Please Upload IPCR Template to Admin");
        } else {
          _this.$toast.success("IPCR Create Rate Yourself!");

          console.log(data);
          _this.templates = data; // this.fetchFacultyIPCR();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    downloadIpcr: function downloadIpcr(ipcr, faculty_name) {
      var id = ipcr.id;
      var file = "".concat(ipcr.file_name, " by ").concat(faculty_name);
      var replace_filename = file.replace('.xlsx', '');
      var file_name = "".concat(replace_filename, ".xlsx");
      axios.get("ipcr-templates/download/".concat(id), {
        headers: {
          Accept: 'application/octet-stream'
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', file_name);
        document.body.appendChild(link);
        link.click();
      });
    },
    fetchFacultyIPCR: function fetchFacultyIPCR() {
      var _this2 = this;

      axios.get('ipcr-faculty-assesstment/faculty').then(function (response) {
        var data = response.data.data;
        console.log(data);

        if (Object.keys(data).length !== 0) {
          _this2.faculty = response.data;
          _this2.templates = [];
        }
      });
    },
    submitForm: function submitForm() {
      var _this3 = this;

      this.$swal({
        title: 'Are you sure want to submit?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        confirmButtonColor: '#dd4b39',
        focusCancel: true,
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios.post("ipcr-faculty-assesstment", _this3.templates).then(function (response) {
            _this3.$toast.success("IPCR Assessment successfully saved!");

            _this3.fetchFacultyIPCR();
          })["catch"](function (error) {
            var message = error.response.data.message || error.message;

            _this3.$toast.error(message);
          });
        }
      });
    },
    viewFiles: function viewFiles(data) {
      var _data$faculty_signatu, _data$dean_signature, _data$hrmo_signature, _data$campus_director;

      this.json = JSON.parse(data.data);
      this.signatures = [{
        'title': 'Discussed with:',
        'name': data.faculty_id ? data.faculty.name : null,
        'signature': (_data$faculty_signatu = data.faculty_signature) !== null && _data$faculty_signatu !== void 0 ? _data$faculty_signatu : null
      }, {
        'title': 'Assessed by:',
        'name': data.dean_id ? data.dean.name : null,
        'signature': (_data$dean_signature = data.dean_signature) !== null && _data$dean_signature !== void 0 ? _data$dean_signature : null
      }, {
        'title': 'Checked by:',
        'name': data.hrmo_id ? data.hrmo.name : null,
        'signature': (_data$hrmo_signature = data.hrmo_signature) !== null && _data$hrmo_signature !== void 0 ? _data$hrmo_signature : null
      }, {
        'title': 'Final Rating:',
        'name': data.campus_director_id ? data.campus_director.name : null,
        'signature': (_data$campus_director = data.campus_director_signature) !== null && _data$campus_director !== void 0 ? _data$campus_director : null
      }];
    },
    downloadFiles: function downloadFiles(data) {
      var _data$faculty_signatu2, _data$dean_signature2, _data$hrmo_signature2, _data$campus_director2;

      this.json = JSON.parse(data);
      this.signatures = [{
        'title': 'Discussed with:',
        'name': data.faculty_id ? data.faculty.name : null,
        'signature': (_data$faculty_signatu2 = data.faculty_signature) !== null && _data$faculty_signatu2 !== void 0 ? _data$faculty_signatu2 : null
      }, {
        'title': 'Assessed by:',
        'name': data.dean_id ? data.dean.name : null,
        'signature': (_data$dean_signature2 = data.dean_signature) !== null && _data$dean_signature2 !== void 0 ? _data$dean_signature2 : null
      }, {
        'title': 'Checked by:',
        'name': data.hrmo_id ? data.hrmo.name : null,
        'signature': (_data$hrmo_signature2 = data.hrmo_signature) !== null && _data$hrmo_signature2 !== void 0 ? _data$hrmo_signature2 : null
      }, {
        'title': 'Final Rating:',
        'name': data.campus_director_id ? data.campus_director.name : null,
        'signature': (_data$campus_director2 = data.campus_director_signature) !== null && _data$campus_director2 !== void 0 ? _data$campus_director2 : null
      }];
      this.$refs.html2Pdf.generatePdf();
    },
    openFileInput: function openFileInput() {
      // Trigger a click event on the hidden file input when the button is clicked
      this.$refs.fileInput.click();
    },
    handleFileUpload: function handleFileUpload(event) {
      var _this4 = this;

      var form = new FormData();
      var selectedFile = event.target.files[0];
      var data = {
        'assessment_id': this.faculty.id,
        'files': selectedFile,
        'is_faculty': 1
      };

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(data, function (value, key) {
        form.append(key, value);
      });

      var config = {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      };
      axios.post("ipcr-faculty-assesstment/upload-signature", form, config).then(function (response) {
        _this4.$toast.success("Signature Sucessfully Saved!");

        _this4.fetchFacultyIPCR();

        window.location.reload();
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this4.$toast.error(message);
      }); // You can now use the selectedFile object as needed
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      departmentList: []
    };
  },
  created: function created() {
    this.fetchDepartment();
  },
  methods: {
    fetchDepartment: function fetchDepartment() {
      var _this = this;

      axios.get('department').then(function (response) {
        _this.departmentList = response.data.data;
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this.$toast.error(message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin */ "./resources/adminapp/js/cruds/IPCR/admin.vue");
/* harmony import */ var _faculty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faculty */ "./resources/adminapp/js/cruds/IPCR/faculty.vue");
/* harmony import */ var _campus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campus */ "./resources/adminapp/js/cruds/IPCR/campus.vue");
/* harmony import */ var _dean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dean */ "./resources/adminapp/js/cruds/IPCR/dean.vue");
/* harmony import */ var _hrmo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hrmo */ "./resources/adminapp/js/cruds/IPCR/hrmo.vue");
/* harmony import */ var _vp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vp */ "./resources/adminapp/js/cruds/IPCR/vp.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AdminTemplate: _admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    FacultyTemplate: _faculty__WEBPACK_IMPORTED_MODULE_1__["default"],
    CampusTemplate: _campus__WEBPACK_IMPORTED_MODULE_2__["default"],
    DeanTemplate: _dean__WEBPACK_IMPORTED_MODULE_3__["default"],
    HrmoTemplate: _hrmo__WEBPACK_IMPORTED_MODULE_4__["default"],
    VpTemplate: _vp__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      departmentList: []
    };
  },
  created: function created() {
    this.fetchDepartment();
  },
  methods: {
    fetchDepartment: function fetchDepartment() {
      var _this = this;

      axios.get('department').then(function (response) {
        _this.departmentList = response.data.data;
      })["catch"](function (error) {
        var message = error.response.data.message || error.message;

        _this.$toast.error(message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alert {\r\n\tpadding: 9px 6px !important;\n}\n.ipcr-card {\r\n\tpadding-left: 53px;\r\n\tpadding-top: 31px;\r\n\tpadding-bottom: 20px;\n}\n.ipcr-span {\r\n\tbackground-color: #f0ffff !important;\r\n\tcolor: black !important;\n}\n.ipcr-select {\r\n\twidth: 77.3%;\r\n\tpadding: 5px;\r\n\tmargin-bottom: 17px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #000000;\r\n\tborder-radius: 4px;\r\n\tbox-sizing: border-box;\n}\n.ipcr-editable {\r\n\tbackground-color: transparent;\r\n\tcolor: black !important;\r\n\tmargin-top: -7px;\r\n\tmargin-left: -18px;\n}\n.ipcr-editable-button {\r\n\tbackground-color: transparent !important;\r\n\tcolor: black !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.remove-space {\r\n\tmargin: 0;\r\n\tpadding: 0;\n}\n.ipcr-font-size {\r\n\tfont-size: small !important;\n}\ntable {\r\n\tpage-break-inside: auto;\r\n\tpage-break-before: avoid;\n}\ntr {\r\n\tpage-break-inside: avoid;\r\n\tpage-break-after: auto;\n}\ntable,\r\nth,\r\ntd {\r\n\tborder: 1px solid !important;\r\n\tfont-weight: 500;\n}\n.two-table th {\r\n\tborder: 1px solid black;\r\n\ttext-align: center;\n}\n.two-table th {\r\n\tvertical-align: middle !important;\n}\n.two-table tbody {\r\n\tborder: 1px solid !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./admin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./faculty.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=template&id=6bcc7151&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=template&id=6bcc7151& ***!
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
          _c(
            "div",
            { staticClass: "card-header card-header-primary card-header-icon" },
            [
              _c("div", { staticClass: "row" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-2 mt-4" },
                  [
                    _c("v-select", {
                      key: "template-field",
                      attrs: {
                        name: "template",
                        label: "name",
                        placeholder: "Templates",
                        options: _vm.templateList
                      },
                      model: {
                        value: _vm.template_id,
                        callback: function($$v) {
                          _vm.template_id = $$v
                        },
                        expression: "template_id"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2 mt-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      on: { click: _vm.setActiveTemplates }
                    },
                    [_vm._v("Set as Acitve")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6", staticStyle: { "margin-left": "50px" } },
            [
              _c("h4", [_vm._v("Template Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.template_name,
                    expression: "template_name"
                  }
                ],
                attrs: { type: "text", size: "50" },
                domProps: { value: _vm.template_name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.template_name = $event.target.value
                  }
                }
              })
            ]
          ),
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
                                return _c(
                                  "div",
                                  { key: "Functions 1 " + element.order },
                                  [
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
                                            { staticClass: "col-md-10" },
                                            [
                                              _c("span", [
                                                _vm._v(_vm._s(element.name))
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
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
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
                          { key: "Sub Functions " + element.order },
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
                                    return _c(
                                      "div",
                                      {
                                        key: "Sub Functions Order " + sub.order
                                      },
                                      [
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
                                                      {
                                                        staticClass: "col-md-1"
                                                      },
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
                                                          _vm._v(
                                                            _vm._s(sub.name)
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-1"
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
                                                                        return _vm.updateSubFunction(
                                                                          sub
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
                                      ]
                                    )
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
                          { key: "Performance Functions " + element.order },
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
                                { key: "Sub Functions pro " + sub.order },
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
                                              {
                                                key:
                                                  "Functions 2 " +
                                                  performance.order
                                              },
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
                                return _c(
                                  "div",
                                  { key: "Signatures " + element.order },
                                  [
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
                                            ]
                                          )
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
                                              _vm._s(
                                                element.level_of_assestment
                                              )
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
                                  ]
                                )
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 mt-4 mb-3 float-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    on: { click: _vm.saveTemplates }
                  },
                  [_vm._v("Submit")]
                )
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
    return _c("div", { staticClass: "col-md-8" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("IPCR")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=template&id=891f0b66&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=template&id=891f0b66& ***!
  \******************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.departmentList, function(department) {
                return _c(
                  "div",
                  { key: department.id, staticClass: "col-md-2" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "department/" + department.id } },
                      [
                        department.url
                          ? _c("img", {
                              staticClass: "img-fluid mt-4",
                              staticStyle: { "margin-top": "5px" },
                              attrs: { src: department.url }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-center" },
                      [
                        _c("h4", [
                          _c("b", [_vm._v(" " + _vm._s(department.name) + " ")])
                        ])
                      ]
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
      [
        _c("h4", { staticClass: "card-title" }, [
          _c("strong", [_vm._v("Departments")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=template&id=21e5c7dc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=template&id=21e5c7dc& ***!
  \****************************************************************************************************************************************************************************************************************/
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
            _vm._m(0),
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
                              "Evaluated IPCR of " + _vm._s(fac.faculty.name)
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
                          _vm._m(1),
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
                              _vm._m(2),
                              _vm._v(" "),
                              _vm._m(3),
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
                                                              to: "upload-files"
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
                                                        attrs: { type: "date" },
                                                        domProps: {
                                                          value:
                                                            performance.date_of_submission
                                                        },
                                                        on: {
                                                          input: [
                                                            function($event) {
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
                                                            },
                                                            function($event) {
                                                              return _vm.computedTarget(
                                                                performance,
                                                                index2,
                                                                index1,
                                                                index
                                                              )
                                                            }
                                                          ]
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
                                                      performance.quantity
                                                        ? _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
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
                                                        : _c("input", {
                                                            staticStyle: {
                                                              width: "50px"
                                                            },
                                                            attrs: {
                                                              disabled: ""
                                                            },
                                                            domProps: {
                                                              value: _vm.setQuantity(
                                                                performance,
                                                                index2,
                                                                index1,
                                                                index
                                                              )
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
                                                          type: "number"
                                                        },
                                                        domProps: {
                                                          value:
                                                            performance.quality
                                                        },
                                                        on: {
                                                          input: [
                                                            function($event) {
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
                                                            },
                                                            function($event) {
                                                              return _vm.computeAverage(
                                                                performance,
                                                                index2,
                                                                index1,
                                                                index
                                                              )
                                                            }
                                                          ]
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
                                                        attrs: { type: "text" },
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
                                      attrs: { type: "text", size: "70" },
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
                                                      "margin-left": "32%"
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
                                _vm._m(4)
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(5)
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
    return _c(
      "div",
      {
        staticClass: "card-header card-header-primary card-header-icon",
        staticStyle: { "z-index": "0 !important" }
      },
      [
        _c("h4", { staticClass: "card-title" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-10" }, [
              _c("strong", [_vm._v("Dean")])
            ])
          ])
        ])
      ]
    )
  },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=template&id=50b93934&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=template&id=50b93934& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c("form", [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("div", { staticClass: "col-md-2" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-warning",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.rateYourself($event)
                    }
                  }
                },
                [_vm._v("Rate Yourself")]
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.faculty.data, function(fac, key) {
              return _c(
                "div",
                {
                  key: key,
                  staticClass: "card",
                  staticStyle: { width: "90vw" }
                },
                [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(1, true),
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
                                  return _vm.viewFiles(fac)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t\t\t"
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
                                "\n\t\t\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card", staticStyle: { width: "90vw" } },
              [
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
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\tUpload Signature\n\t\t\t\t\t\t"
                          )
                        ]
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
                              _vm._m(2),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "p",
                                  {
                                    staticStyle: { "word-wrap": "break-word" }
                                  },
                                  [
                                    _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tI,"),
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
                                      domProps: {
                                        value: _vm.templates.roles_name
                                      },
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
                                      "\n\t\t\t\t\t\t\t\t\t\t\tof the Laguna State Polytechnic University, commit to deliver and\n\t\t\t\t\t\t\t\t\t\t\tagree to the rated of the following in accordance with the indicated\n\t\t\t\t\t\t\t\t\t\t\tmeasures for the\n\t\t\t\t\t\t\t\t\t\t\t"
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
                                      attrs: { type: "text", size: "5" },
                                      domProps: {
                                        value: _vm.templates.semester
                                      },
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
                                      " Semester\n\t\t\t\t\t\t\t\t\t\t\tof Academic Year\n\t\t\t\t\t\t\t\t\t\t\t"
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
                                      attrs: { type: "text", size: "10" },
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
                                    _vm._v(".\n\t\t\t\t\t\t\t\t\t\t")
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "table",
                                { staticClass: "table table-border" },
                                [
                                  _c(
                                    "tr",
                                    [
                                      _c("th", [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\tConforme:\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(_vm.$t("auth.name")) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.templates.ipcr_signatory,
                                        function(signatory) {
                                          return _c(
                                            "th",
                                            { key: signatory.id },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    signatory.level_of_assestment
                                                  ) +
                                                  " :\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    signatory.name_of_signatories
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        }
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "tr",
                                    [
                                      _c(
                                        "th",
                                        {
                                          staticStyle: {
                                            "text-align": "center"
                                          }
                                        },
                                        [_vm._v("Ratee")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.templates.ipcr_signatory,
                                        function(signatory) {
                                          return _c(
                                            "th",
                                            {
                                              key: signatory.id,
                                              staticStyle: {
                                                "text-align": "center"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(signatory.position) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        }
                                      )
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "table",
                                { staticClass: "table table-border two-table" },
                                [
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    [
                                      _vm._l(
                                        _vm.templates.ipcr_function,
                                        function(ipcrFunction) {
                                          return [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { attrs: { colspan: "10" } },
                                                [
                                                  _vm._v(
                                                    _vm._s(ipcrFunction.name)
                                                  )
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _vm._l(
                                              ipcrFunction.ipcr_subfunctions,
                                              function(ipcrSubfunction) {
                                                return [
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        attrs: { colspan: "10" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            ipcrSubfunction.name
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    ipcrSubfunction.ipcr_performance,
                                                    function(performance) {
                                                      return [
                                                        _c("tr", [
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                performance.name
                                                              )
                                                            )
                                                          ]),
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
                                                                    name:
                                                                      "model",
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
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      performance,
                                                                      "id",
                                                                      $event
                                                                        .target
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
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    performance.target,
                                                                  expression:
                                                                    "performance.target"
                                                                }
                                                              ],
                                                              attrs: {
                                                                type: "number"
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "target",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "accomplished",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "date_of_submission",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "date_completed",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "quantity",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "quality",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                value:
                                                                  performance.tar
                                                              },
                                                              on: {
                                                                input: function(
                                                                  $event
                                                                ) {
                                                                  if (
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "tar",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                value:
                                                                  performance.asc
                                                              },
                                                              on: {
                                                                input: function(
                                                                  $event
                                                                ) {
                                                                  if (
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "asc",
                                                                    $event
                                                                      .target
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
                                                                  rawName:
                                                                    "v-model",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    performance,
                                                                    "remarks",
                                                                    $event
                                                                      .target
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
                                        }
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("tfoot", [
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "5" } }, [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t\tComments and Recommendations for Development Purposes:\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                        ),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.templates.recommendation,
                                              expression:
                                                "templates.recommendation"
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
                                            attrs: { colspan: "2" }
                                          },
                                          [
                                            signatory.name
                                              ? _c("span", [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(signatory.name) +
                                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                  ),
                                                  _c("img", {
                                                    staticStyle: {
                                                      width: "128px",
                                                      height: "50px"
                                                    },
                                                    attrs: {
                                                      src: signatory.signature,
                                                      alt: "My Image"
                                                    }
                                                  })
                                                ])
                                              : _vm._e()
                                          ]
                                        )
                                      }),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _vm._m(4)
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(5)
                          ]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "facultytemplate",
                  {
                    attrs: { templates: _vm.json, signatures: _vm.signatures }
                  },
                  [
                    [
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
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.openFileInput($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tUpload Signature\n\t\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ]
                  ],
                  2
                ),
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
                          attrs: {
                            templates: _vm.json,
                            signatures: _vm.signatures
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          ],
          2
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
    return _c(
      "div",
      {
        staticClass: "card-header card-header-primary card-header-icon",
        staticStyle: { "z-index": "0 !important" }
      },
      [
        _c("h4", { staticClass: "card-title" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-10" }, [
              _c("strong", [_vm._v("Faculty")])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("h3", [_vm._v("To Be Assessed By")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("h4", { staticStyle: { "font-weight": "900" } }, [
        _vm._v(
          "\n\t\t\t\t\t\t\t\t\t\t\tINDIVIDUAL PERFORMANCE COMMITMENT AND REVIEW\n\t\t\t\t\t\t\t\t\t\t"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "ipcr-font-size",
            attrs: { rowspan: "2", colspan: "1" }
          },
          [
            _vm._v(
              "\n\t\t\t\t\t\t\t\t\t\t\t\t\tPERFORMANCE INDICATOR\n\t\t\t\t\t\t\t\t\t\t\t\t"
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "ipcr-font-size",
            attrs: { rowspan: "2", colspan: "1" }
          },
          [_vm._v("TARGET")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "ipcr-font-size",
            attrs: { rowspan: "2", colspan: "1" }
          },
          [
            _vm._v(
              "\n\t\t\t\t\t\t\t\t\t\t\t\t\tACCOMPLISHED\n\t\t\t\t\t\t\t\t\t\t\t\t"
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "ipcr-font-size",
            attrs: { rowspan: "2", colspan: "1" }
          },
          [
            _vm._v(
              "\n\t\t\t\t\t\t\t\t\t\t\t\t\tDATE OF SUBMISSION/COMPLETION\n\t\t\t\t\t\t\t\t\t\t\t\t"
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "ipcr-font-size",
            attrs: { rowspan: "2", colspan: "1" }
          },
          [
            _vm._v(
              "\n\t\t\t\t\t\t\t\t\t\t\t\t\tDATE SUBMITTED/COMPLETED\n\t\t\t\t\t\t\t\t\t\t\t\t"
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "ipcr-font-size",
            attrs: { rowspan: "1", colspan: "4" }
          },
          [_vm._v("Rating")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "ipcr-font-size",
            attrs: { rowspan: "2", colspan: "1" }
          },
          [_vm._v("Remarks")]
        )
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "ipcr-font-size", attrs: { scope: "col" } }, [
          _vm._v("QTY")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "ipcr-font-size", attrs: { scope: "col" } }, [
          _vm._v("QL/E")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "ipcr-font-size", attrs: { scope: "col" } }, [
          _vm._v("T")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "ipcr-font-size", attrs: { scope: "col" } }, [
          _vm._v("A")
        ])
      ])
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
      _c("button", { staticClass: "btn btn-primary mb-4 btn-sm float-right" }, [
        _vm._v("Submit")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-danger mb-4 btn-sm float-right" }, [
        _vm._v("Cancel")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=template&id=f4b886cc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=template&id=f4b886cc& ***!
  \****************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.departmentList, function(department) {
                return _c(
                  "div",
                  { key: department.id, staticClass: "col-md-2" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "department/" + department.id } },
                      [
                        department.url
                          ? _c("img", {
                              staticClass: "img-fluid mt-4",
                              staticStyle: { "margin-top": "5px" },
                              attrs: { src: department.url }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-center" },
                      [
                        _c("h4", [
                          _c("b", [_vm._v(" " + _vm._s(department.name) + " ")])
                        ])
                      ]
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
      [
        _c("h4", { staticClass: "card-title" }, [
          _c("strong", [_vm._v("Departments")])
        ])
      ]
    )
  }
]
render._withStripped = true



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
    _vm.role_title === "" ? _c("div", [_c("admin-template")], 1) : _vm._e(),
    _vm._v(" "),
    _vm.role_title === "Faculty"
      ? _c("div", [_c("faculty-template")], 1)
      : _vm._e(),
    _vm._v(" "),
    _vm.role_title === "Campus Director"
      ? _c("div", [_c("campus-template")], 1)
      : _vm._e(),
    _vm._v(" "),
    _vm.role_title === "Dean" ? _c("div", [_c("dean-template")], 1) : _vm._e(),
    _vm._v(" "),
    _vm.role_title === "HRMO" ? _c("div", [_c("hrmo-template")], 1) : _vm._e(),
    _vm._v(" "),
    _vm.role_title === "VICE PRESIDENT FOR ACADEMIC AFFAIRS"
      ? _c("div", [_c("vp-template")], 1)
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=template&id=6996d1a8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=template&id=6996d1a8& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.departmentList, function(department) {
                return _c(
                  "div",
                  { key: department.id, staticClass: "col-md-2" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "department/" + department.id } },
                      [
                        department.url
                          ? _c("img", {
                              staticClass: "img-fluid mt-4",
                              staticStyle: { "margin-top": "5px" },
                              attrs: { src: department.url }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-center" },
                      [
                        _c("h4", [
                          _c("b", [_vm._v(" " + _vm._s(department.name) + " ")])
                        ])
                      ]
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
      [
        _c("h4", { staticClass: "card-title" }, [
          _c("strong", [_vm._v("Departments")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/admin.vue":
/*!****************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/admin.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_vue_vue_type_template_id_6bcc7151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.vue?vue&type=template&id=6bcc7151& */ "./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=template&id=6bcc7151&");
/* harmony import */ var _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_vue_vue_type_template_id_6bcc7151___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_vue_vue_type_template_id_6bcc7151___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./admin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=template&id=6bcc7151&":
/*!***********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=template&id=6bcc7151& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_6bcc7151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./admin.vue?vue&type=template&id=6bcc7151& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/admin.vue?vue&type=template&id=6bcc7151&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_6bcc7151___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_6bcc7151___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/campus.vue":
/*!*****************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/campus.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _campus_vue_vue_type_template_id_891f0b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campus.vue?vue&type=template&id=891f0b66& */ "./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=template&id=891f0b66&");
/* harmony import */ var _campus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campus.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _campus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _campus_vue_vue_type_template_id_891f0b66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _campus_vue_vue_type_template_id_891f0b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/campus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_campus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./campus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_campus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=template&id=891f0b66&":
/*!************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=template&id=891f0b66& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_campus_vue_vue_type_template_id_891f0b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./campus.vue?vue&type=template&id=891f0b66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/campus.vue?vue&type=template&id=891f0b66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_campus_vue_vue_type_template_id_891f0b66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_campus_vue_vue_type_template_id_891f0b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/dean.vue":
/*!***************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/dean.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dean_vue_vue_type_template_id_21e5c7dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dean.vue?vue&type=template&id=21e5c7dc& */ "./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=template&id=21e5c7dc&");
/* harmony import */ var _dean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dean.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dean_vue_vue_type_template_id_21e5c7dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dean_vue_vue_type_template_id_21e5c7dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/dean.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dean.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dean_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=template&id=21e5c7dc&":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=template&id=21e5c7dc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dean_vue_vue_type_template_id_21e5c7dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dean.vue?vue&type=template&id=21e5c7dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/dean.vue?vue&type=template&id=21e5c7dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dean_vue_vue_type_template_id_21e5c7dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dean_vue_vue_type_template_id_21e5c7dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/faculty.vue":
/*!******************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/faculty.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faculty_vue_vue_type_template_id_50b93934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faculty.vue?vue&type=template&id=50b93934& */ "./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=template&id=50b93934&");
/* harmony import */ var _faculty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faculty.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _faculty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faculty.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _faculty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _faculty_vue_vue_type_template_id_50b93934___WEBPACK_IMPORTED_MODULE_0__["render"],
  _faculty_vue_vue_type_template_id_50b93934___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/faculty.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./faculty.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./faculty.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=template&id=50b93934&":
/*!*************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=template&id=50b93934& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_template_id_50b93934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./faculty.vue?vue&type=template&id=50b93934& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/faculty.vue?vue&type=template&id=50b93934&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_template_id_50b93934___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faculty_vue_vue_type_template_id_50b93934___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/hrmo.vue":
/*!***************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/hrmo.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hrmo_vue_vue_type_template_id_f4b886cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hrmo.vue?vue&type=template&id=f4b886cc& */ "./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=template&id=f4b886cc&");
/* harmony import */ var _hrmo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hrmo.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hrmo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hrmo_vue_vue_type_template_id_f4b886cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hrmo_vue_vue_type_template_id_f4b886cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/hrmo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hrmo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hrmo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hrmo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=template&id=f4b886cc&":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=template&id=f4b886cc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hrmo_vue_vue_type_template_id_f4b886cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hrmo.vue?vue&type=template&id=f4b886cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/hrmo.vue?vue&type=template&id=f4b886cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hrmo_vue_vue_type_template_id_f4b886cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hrmo_vue_vue_type_template_id_f4b886cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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



/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/vp.vue":
/*!*************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/vp.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vp_vue_vue_type_template_id_6996d1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vp.vue?vue&type=template&id=6996d1a8& */ "./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=template&id=6996d1a8&");
/* harmony import */ var _vp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vp.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vp_vue_vue_type_template_id_6996d1a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vp_vue_vue_type_template_id_6996d1a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/IPCR/vp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=template&id=6996d1a8&":
/*!********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=template&id=6996d1a8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vp_vue_vue_type_template_id_6996d1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vp.vue?vue&type=template&id=6996d1a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/IPCR/vp.vue?vue&type=template&id=6996d1a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vp_vue_vue_type_template_id_6996d1a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vp_vue_vue_type_template_id_6996d1a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);