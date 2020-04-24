function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-examples-module-ngfactory"], {
  /***/
  "./src/app/examples/examples-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/examples/examples-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ExamplesRoutingModule */

  /***/
  function srcAppExamplesExamplesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesRoutingModule", function () {
      return ExamplesRoutingModule;
    });
    /* harmony import */


    var _examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./examples.component */
    "./src/app/examples/examples.component.ts");

    var routes = [{
      path: ':exampleType',
      component: _examples_component__WEBPACK_IMPORTED_MODULE_0__["ExamplesComponent"]
    }];

    var ExamplesRoutingModule = function ExamplesRoutingModule() {
      _classCallCheck(this, ExamplesRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/examples/examples.component.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/examples/examples.component.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: RenderType_ExamplesComponent, View_ExamplesComponent_0, View_ExamplesComponent_Host_0, ExamplesComponentNgFactory */

  /***/
  function srcAppExamplesExamplesComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ExamplesComponent", function () {
      return RenderType_ExamplesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExamplesComponent_0", function () {
      return View_ExamplesComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExamplesComponent_Host_0", function () {
      return View_ExamplesComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesComponentNgFactory", function () {
      return ExamplesComponentNgFactory;
    });
    /* harmony import */


    var _examples_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./examples.component.scss.shim.ngstyle */
    "./src/app/examples/examples.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_scully_image_scully_image_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../dist/scully-image/scully-image.ngfactory */
    "../../dist/scully-image/scully-image.ngfactory.js");
    /* harmony import */


    var scully_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! scully-image */
    "../../dist/scully-image/fesm2015/scully-image.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "../../node_modules/@scullyio/ng-lib/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./examples.component */
    "./src/app/examples/examples.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ExamplesComponent = [_examples_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ExamplesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ExamplesComponent,
      data: {}
    });

    function View_ExamplesComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "scully-blur-image", [["src", "/assets/scully.jpeg"]], [[4, "height", null], [4, "width", null], [1, "data-type", 0], [1, "data-plugin-options", 0]], null, null, _dist_scully_image_scully_image_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ScullyBlurImageComponent_0"], _dist_scully_image_scully_image_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ScullyBlurImageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, scully_image__WEBPACK_IMPORTED_MODULE_3__["ScullyBlurImageComponent"], [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["TransferStateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], scully_image__WEBPACK_IMPORTED_MODULE_3__["ɵa"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        src: [0, "src"],
        pixelHeight: [1, "pixelHeight"],
        pixelWidth: [2, "pixelWidth"],
        pluginOptions: [3, "pluginOptions"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
        width: 0
      })], function (_ck, _v) {
        var currVal_4 = "/assets/scully.jpeg";
        var currVal_5 = 330;
        var currVal_6 = 440;

        var currVal_7 = _ck(_v, 2, 0, 20);

        _ck(_v, 1, 0, currVal_4, currVal_5, currVal_6, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).height;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).width;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).type;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).pluginOptionsAsString;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_ExamplesComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "scully-primitives-image", [["src", "/assets/scully.jpeg"]], [[4, "height", null], [4, "width", null], [1, "data-type", 0], [1, "data-plugin-options", 0]], null, null, _dist_scully_image_scully_image_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ScullyPrimitivesImageComponent_0"], _dist_scully_image_scully_image_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ScullyPrimitivesImageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, scully_image__WEBPACK_IMPORTED_MODULE_3__["ScullyPrimitivesImageComponent"], [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["TransferStateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], scully_image__WEBPACK_IMPORTED_MODULE_3__["ɵa"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        src: [0, "src"],
        pluginOptions: [1, "pluginOptions"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
        numberOfPrimitives: 0
      })], function (_ck, _v) {
        var currVal_4 = "/assets/scully.jpeg";

        var currVal_5 = _ck(_v, 2, 0, 60);

        _ck(_v, 1, 0, currVal_4, currVal_5);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).height;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).width;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).type;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).pluginOptionsAsString;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_ExamplesComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "scully-traced-image", [["src", "/assets/scully.jpeg"]], [[4, "height", null], [4, "width", null], [1, "data-type", 0], [1, "data-plugin-options", 0]], null, null, _dist_scully_image_scully_image_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ScullyTracedImageComponent_0"], _dist_scully_image_scully_image_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ScullyTracedImageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, scully_image__WEBPACK_IMPORTED_MODULE_3__["ScullyTracedImageComponent"], [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["TransferStateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], scully_image__WEBPACK_IMPORTED_MODULE_3__["ɵa"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        src: [0, "src"],
        fluidMaxWidth: [1, "fluidMaxWidth"],
        pluginOptions: [2, "pluginOptions"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
        color: 0,
        optTolerance: 1,
        turdSize: 2,
        turnPolicy: 3
      })], function (_ck, _v) {
        var currVal_4 = "/assets/scully.jpeg";
        var currVal_5 = 800;

        var currVal_6 = _ck(_v, 2, 0, "#3AA860", 0.4, 10, "majority");

        _ck(_v, 1, 0, currVal_4, currVal_5, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).height;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).width;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).type;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).pluginOptionsAsString;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_ExamplesComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExamplesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExamplesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExamplesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.exampleType === "blur";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.exampleType === "primitives";

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.exampleType === "traced";

        _ck(_v, 7, 0, currVal_2);
      }, null);
    }

    function View_ExamplesComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-examples", [], null, null, null, View_ExamplesComponent_0, RenderType_ExamplesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _examples_component__WEBPACK_IMPORTED_MODULE_7__["ExamplesComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ExamplesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-examples", _examples_component__WEBPACK_IMPORTED_MODULE_7__["ExamplesComponent"], View_ExamplesComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/examples/examples.component.scss.shim.ngstyle.js":
  /*!******************************************************************!*\
    !*** ./src/app/examples/examples.component.scss.shim.ngstyle.js ***!
    \******************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppExamplesExamplesComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["h1[_ngcontent-%COMP%] {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbWdyaWZmaW5nL3JlcG9zL3NjdWxseS1wbHVnaW4taW1hZ2Utc2hhcnAvcHJvamVjdHMvZG9jdW1lbnRhdGlvbi9zcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZG9jdW1lbnRhdGlvbi9zcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvZG9jdW1lbnRhdGlvbi9zcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGNvbG9yOnJnYig1MSwgNiwgMzcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIxMSwgMjM2KTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4iLCJoMSB7XG4gIGNvbG9yOiAjMzMwNjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkM2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/examples/examples.component.ts":
  /*!************************************************!*\
    !*** ./src/app/examples/examples.component.ts ***!
    \************************************************/

  /*! exports provided: ExamplesComponent */

  /***/
  function srcAppExamplesExamplesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function () {
      return ExamplesComponent;
    });

    var ExamplesComponent = /*#__PURE__*/function () {
      function ExamplesComponent(router, route) {
        var _this = this;

        _classCallCheck(this, ExamplesComponent);

        this.router = router;
        this.route = route;
        this.exampleType = 'blur';
        this.route.params.subscribe(function (params) {
          if (params.exampleType) {
            _this.exampleType = params.exampleType;
          }
        });
      }

      _createClass(ExamplesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExamplesComponent;
    }();
    /***/

  },

  /***/
  "./src/app/examples/examples.module.ngfactory.js":
  /*!*******************************************************!*\
    !*** ./src/app/examples/examples.module.ngfactory.js ***!
    \*******************************************************/

  /*! exports provided: ExamplesModuleNgFactory */

  /***/
  function srcAppExamplesExamplesModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesModuleNgFactory", function () {
      return ExamplesModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _examples_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./examples.module */
    "./src/app/examples/examples.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./examples.component.ngfactory */
    "./src/app/examples/examples.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var scully_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! scully-image */
    "../../dist/scully-image/fesm2015/scully-image.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _examples_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./examples-routing.module */
    "./src/app/examples/examples-routing.module.ts");
    /* harmony import */


    var _examples_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./examples.component */
    "./src/app/examples/examples.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var ExamplesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_examples_module__WEBPACK_IMPORTED_MODULE_1__["ExamplesModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ExamplesComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, scully_image__WEBPACK_IMPORTED_MODULE_6__["ɵa"], scully_image__WEBPACK_IMPORTED_MODULE_6__["ɵa"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _examples_routing_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesRoutingModule"], _examples_routing_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, scully_image__WEBPACK_IMPORTED_MODULE_6__["ScullyImageModule"], scully_image__WEBPACK_IMPORTED_MODULE_6__["ScullyImageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _examples_module__WEBPACK_IMPORTED_MODULE_1__["ExamplesModule"], _examples_module__WEBPACK_IMPORTED_MODULE_1__["ExamplesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () {
        return [[{
          path: ":exampleType",
          component: _examples_component__WEBPACK_IMPORTED_MODULE_9__["ExamplesComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/examples/examples.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/examples/examples.module.ts ***!
    \*********************************************/

  /*! exports provided: ExamplesModule */

  /***/
  function srcAppExamplesExamplesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesModule", function () {
      return ExamplesModule;
    });

    var ExamplesModule = function ExamplesModule() {
      _classCallCheck(this, ExamplesModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=examples-examples-module-ngfactory-es5.js.map