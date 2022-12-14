(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 8, vars: 0, consts: [[1, "about-section"], [1, "inner-container"], [1, "text"], [1, "skills"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Book for fresh flowers online by placing your order for flower delivery in 200 + Cities in India. Our flower delivery in all the cities of India ensures delivery of garden fresh flowers to your door steps. So, whether you wish to send roses, lilies or orchids our professionals beautifully arrange for flower delivery to cities you wish to send them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Open Sans\",sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.about-section[_ngcontent-%COMP%]{\r\n    background: url('slider2.jpg') no-repeat left;\r\n    background-size: 55%;\r\n    background-color: #fdfdfd;\r\n    overflow: hidden;\r\n    padding: 100px 0;\r\n}\r\n\r\n.inner-container[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n    float: right;\r\n    background-color: #fdfdfd;\r\n    padding: 150px;\r\n}\r\n\r\n.inner-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-bottom: 30px;\r\n    font-size: 30px;\r\n    font-weight: 900;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #545454;\r\n    line-height: 30px;\r\n    text-align: justify;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-weight: 700;\r\n    font-size: 13px;\r\n}\r\n\r\n@media screen and (max-width:1200px){\r\n    .inner-container[_ngcontent-%COMP%]{\r\n        padding: 80px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:1000px){\r\n    .about-section[_ngcontent-%COMP%]{\r\n        background-size: 100%;\r\n        padding: 100px 40px;\r\n    }\r\n    .inner-container[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:600px){\r\n    .about-section[_ngcontent-%COMP%]{\r\n        padding: 0;\r\n    }\r\n    .inner-container[_ngcontent-%COMP%]{\r\n        padding: 60px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2Q0FBd0Q7SUFDeEQsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsc2Fucy1zZXJpZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uYWJvdXQtc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvc2xpZGVyMi5qcGcpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbn1cclxuXHJcbi5pbm5lci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcclxuICAgIHBhZGRpbmc6IDE1MHB4O1xyXG59XHJcblxyXG4uaW5uZXItY29udGFpbmVyIGgxe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uc2tpbGxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgIC5pbm5lci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogODBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xyXG4gICAgLmFib3V0LXNlY3Rpb257XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC5hYm91dC1zZWN0aW9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/additem/additem.component.ts":
/*!**********************************************!*\
  !*** ./src/app/additem/additem.component.ts ***!
  \**********************************************/
/*! exports provided: AdditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemComponent", function() { return AdditemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class AdditemComponent {
    constructor(driverService, router) {
        this.driverService = driverService;
        this.router = router;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    onAddSubmit() {
        const item = {
            initial_quantity: this.initial_quantity,
            alert_quantity: this.alert_quantity,
            remarks: this.remarks,
            created_by: this.user.id
        };
    }
}
AdditemComponent.ɵfac = function AdditemComponent_Factory(t) { return new (t || AdditemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdditemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdditemComponent, selectors: [["app-additem"]], decls: 21, vars: 3, consts: [["method", "post", 1, "modal-content", 3, "submit"], [1, "container"], ["for", "email"], ["type", "text", "required", "", "name", "initial_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "alert_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "remarks", 3, "ngModel", "ngModelChange"], [1, "clearfix"], ["type", "submit", "id", "submitDetails", 1, "btn"]], template: function AdditemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdditemComponent_Template_form_submit_1_listener() { return ctx.onAddSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please fill Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Initial Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_8_listener($event) { return ctx.initial_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Alert Level Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_12_listener($event) { return ctx.alert_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_16_listener($event) { return ctx.remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initial_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alert_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.remarks);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_3__["Navbar2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {font-family: Arial, Helvetica, sans-serif;background-color:rgba(19, 231, 37, 0.979); }\r\n*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #09e65e;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  opacity:1;\r\n}\r\n\r\n\r\n.signupbtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 50%; \r\n  overflow: auto; \r\n  background-color: #2813e2;\r\n  padding-top: 50px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #c7d0ee;\r\n  margin: 5% auto 15% auto; \r\n  border: 1px solid #888;\r\n  width: 60%; \r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 300px) {\r\n .signupbtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGRpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0seUNBQXlDLENBQUMseUNBQXlDLEVBQUU7QUFDM0YsR0FBRyxzQkFBc0IsQ0FBQztBQUkxQiw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUdBO0VBQ0UsU0FBUztBQUNYO0FBRUEsdUNBQXVDO0FBR3ZDLDJEQUEyRDtBQUMxRDtFQUNDLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxhQUFhO0FBQ2Y7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixXQUFXLEVBQUUsZ0JBQWdCO0VBQzdCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0IsRUFBRSxzREFBc0Q7RUFDaEYsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQSw2RUFBNkU7QUFDN0U7Q0FDQztLQUNJLFdBQVc7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRkaXRlbS9hZGRpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5LCAyMzEsIDM3LCAwLjk3OSk7IH1cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOWU2NWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG5cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4gLnNpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogNTAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODEzZTI7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdkMGVlO1xyXG4gIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bzsgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDYwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4gXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdditemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-additem',
                templateUrl: './additem.component.html',
                styleUrls: ['./additem.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/addorder/addorder.component.ts":
/*!************************************************!*\
  !*** ./src/app/addorder/addorder.component.ts ***!
  \************************************************/
/*! exports provided: AddorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddorderComponent", function() { return AddorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");










function AddorderComponent_fieldset_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account Information:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 1 - 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Company Name: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.company_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email Address: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.email_address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phone No: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Address: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "City: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "State: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Zip: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.zip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Country: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_23_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddorderComponent_fieldset_23_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.next1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.email_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.zip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.country);
} }
function AddorderComponent_fieldset_24_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 2 - 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose a date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_24_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker", null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Order ID: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_24_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.order_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Product Code.: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_24_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.product_code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Product Name : *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_24_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.product_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Units : *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_24_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.units = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Current Status: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_24_Template_select_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "order complied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "In Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Order complied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Out Of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Payment Received ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Payment Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddorderComponent_fieldset_24_Template_input_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.next1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddorderComponent_fieldset_24_Template_input_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r14)("ngModel", ctx_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.status);
} }
function AddorderComponent_fieldset_25_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "payment Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 3 - 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bill Amount : *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_25_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.bill_amount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Advance : *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_25_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.advance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Balance : *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_25_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.balance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mode of Payment: *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddorderComponent_fieldset_25_Template_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.mode_of = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RGTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " NEFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Paytm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddorderComponent_fieldset_25_Template_input_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.bill_amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.advance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.mode_of);
} }
class AddorderComponent {
    constructor(driverService, router) {
        this.driverService = driverService;
        this.router = router;
        this.step = 1;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    next1() {
        this.step = this.step + 1;
    }
    previous() {
        this.step = this.step - 1;
    }
    onAddSubmit() {
        const order = {
            company_name: this.company_name,
            name: this.name,
            email_address: this.email_address,
            phone: this.phone,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country,
            date: this.date,
            order_id: this.order_id,
            product_code: this.product_code,
            product_name: this.product_name,
            units: this.units,
            status: this.status,
            bill_amount: this.bill_amount,
            advance: this.advance,
            balance: this.balance,
            mode_of: this.mode_of,
            created_by: this.user.id
        };
        console.log(order);
        this.driverService.registerOrder(order).subscribe(res => {
            console.log(res);
            this.router.navigate(['/order']);
        });
    }
}
AddorderComponent.ɵfac = function AddorderComponent_Factory(t) { return new (t || AddorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddorderComponent, selectors: [["app-addorder"]], decls: 26, vars: 3, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11", "col-sm-10", "col-md-10", "col-lg-6", "col-xl-5", "text-center", "p-0", "mt-3", "mb-2"], [1, "card", "px-0", "pt-4", "pb-0", "mt-3", "mb-3"], ["id", "heading"], ["id", "msform", "method", "post", 3, "submit"], ["id", "progressbar"], ["id", "personal", 1, "active"], ["id", "account", 1, "active"], ["id", "payment", 1, "active"], ["id", "confirm", 1, "active"], [4, "ngIf"], [1, "form-card"], [1, "row"], [1, "col-7"], [1, "fs-title"], [1, "col-5"], [1, "steps"], [1, "fieldlabels"], ["type", "text", "name", "company_name", "placeholder", "Company Name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "name", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email_address", "placeholder", "Email Id", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "phone", "placeholder", "Phone", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "address", "placeholder", "Address", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "city", "placeholder", "City", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "state", "placeholder", "State ", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "zip", "placeholder", "Zip Code", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "country", "placeholder", "Country", 3, "ngModel", "ngModelChange"], ["type", "button", "name", "next", "value", "Next", 1, "next", "action-button", 3, "click"], ["appearance", "fill"], [2, "color", "white"], ["matInput", "", "name", "date", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "text", "name", "order_id", "placeholder", "Order Id", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "product_code", "placeholder", "Product Code", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "product_name", "placeholder", "Product Name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "units", "placeholder", "unit", 3, "ngModel", "ngModelChange"], ["name", "Product code", "id", "Prodname", "name", "status", 1, "form-control", 2, "width", "200px", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "In process"], ["value", "Order Complied", 1, "btn", "btn-primary"], ["value", "Out of Stock"], ["value", "Delivered"], ["value", "Payment Received"], ["value", "Payment Pending"], ["type", "button", "name", "previous", "value", "Previous", 1, "previous", "action-button-previous", 3, "click"], ["type", "text", "name", "bill_amount", "placeholder", "Bill Amount", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "advance", "placeholder", "Advance", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "balance", "placeholder", "Balance", 3, "ngModel", "ngModelChange"], ["name", "Product code", "id", "Prodname", "name", "mode_of", 1, "form-control", 2, "width", "200px", 3, "ngModel", "ngModelChange"], ["value", "Cash"], ["value", "RGTS"], ["value", "NEFT"], ["value", "Paytm"], [1, "clearfix"], ["type", "submit", "id", "submitDetails", 1, "btn"]], template: function AddorderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fill all form field to go to next step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddorderComponent_Template_form_submit_9_listener() { return ctx.onAddSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddorderComponent_fieldset_23_Template, 37, 9, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddorderComponent_fieldset_24_Template, 47, 8, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddorderComponent_fieldset_25_Template, 34, 4, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step == 3);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_3__["Navbar2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');\r\n\r\n\r\nbody[_ngcontent-%COMP%] {font-family: Arial, Helvetica, sans-serif;background-color:rgba(19, 231, 37, 0.979); }\r\n\r\n\r\n*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\n\r\n\r\n\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #09e65e;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  opacity:1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.signupbtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 50%; \r\n  overflow: auto; \r\n  background-color: #474e5d;\r\n  padding-top: 50px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: rgb(55, 55, 226);\r\n  margin: 5% auto 15% auto; \r\n  border: 5px solid rgb(22, 21, 21);\r\n  width: 60%; \r\n}\r\n\r\n\r\n\r\n\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n .signupbtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0\r\n}\r\n\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  height: 100%\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: grey\r\n}\r\n\r\n\r\n#heading[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  color: #673AB7;\r\n  font-weight: normal\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position: relative;\r\n  margin-top: 20px\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\r\n  background: white;\r\n  border: 0 none;\r\n  border-radius: 0.5rem;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding-bottom: 20px;\r\n  position: relative\r\n}\r\n\r\n\r\n.form-card[_ngcontent-%COMP%] {\r\n  text-align: left\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]:not(:first-of-type) {\r\n  display: none\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #msform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  padding: 8px 15px 8px 15px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 0px;\r\n  margin-bottom: 25px;\r\n  margin-top: 2px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  font-family: montserrat;\r\n  color: #2C3E50;\r\n  background-color: #ECEFF1;\r\n  font-size: 16px;\r\n  letter-spacing: 1px\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #msform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none !important;\r\n  border: 1px solid #673AB7;\r\n  outline-width: 0\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  background: #673AB7;\r\n  font-weight: bold;\r\n  color: white;\r\n  border: 0 none;\r\n  border-radius: 0px;\r\n  cursor: pointer;\r\n  padding: 10px 5px;\r\n  margin: 10px 0px 10px 5px;\r\n  float: right\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover, #msform[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:focus {\r\n  background-color: #311B92\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   .action-button-previous[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  background: #616161;\r\n  font-weight: bold;\r\n  color: white;\r\n  border: 0 none;\r\n  border-radius: 0px;\r\n  cursor: pointer;\r\n  padding: 10px 5px;\r\n  margin: 10px 5px 10px 0px;\r\n  float: right\r\n}\r\n\r\n\r\n#msform[_ngcontent-%COMP%]   .action-button-previous[_ngcontent-%COMP%]:hover, #msform[_ngcontent-%COMP%]   .action-button-previous[_ngcontent-%COMP%]:focus {\r\n  background-color: #000000\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  z-index: 0;\r\n  border: none;\r\n  position: relative\r\n}\r\n\r\n\r\n.fs-title[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #673AB7;\r\n  margin-bottom: 15px;\r\n  font-weight: normal;\r\n  text-align: left\r\n}\r\n\r\n\r\n.purple-text[_ngcontent-%COMP%] {\r\n  color: #673AB7;\r\n  font-weight: normal\r\n}\r\n\r\n\r\n.steps[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: gray;\r\n  margin-bottom: 10px;\r\n  font-weight: normal;\r\n  text-align: right\r\n}\r\n\r\n\r\n.fieldlabels[_ngcontent-%COMP%] {\r\n  color: gray;\r\n  text-align: left\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  overflow: hidden;\r\n  color: lightgrey\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  color: #673AB7\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  font-size: 15px;\r\n  width: 25%;\r\n  float: left;\r\n  position: relative;\r\n  font-weight: 400\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   #account[_ngcontent-%COMP%]:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f13e\"\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   #personal[_ngcontent-%COMP%]:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f007\"\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   #payment[_ngcontent-%COMP%]:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f030\"\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   #confirm[_ngcontent-%COMP%]:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f00c\"\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n  display: block;\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  background: lightgray;\r\n  border-radius: 50%;\r\n  margin: 0 auto 10px auto;\r\n  padding: 2px\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  width: 100%;\r\n  height: 2px;\r\n  background: lightgray;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 25px;\r\n  z-index: -1\r\n}\r\n\r\n\r\n#progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before, #progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after {\r\n  background: #673AB7\r\n}\r\n\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n  height: 20px\r\n}\r\n\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n  background-color: #673AB7\r\n}\r\n\r\n\r\n.fit-image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  object-fit: cover\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkb3JkZXIvYWRkb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEZBQTBGOzs7QUFHMUYsTUFBTSx5Q0FBeUMsQ0FBQyx5Q0FBeUMsRUFBRTs7O0FBQzNGLEdBQUcsc0JBQXNCLENBQUM7OztBQUkxQiw0QkFBNEI7OztBQUM1QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFFQSxxREFBcUQ7OztBQUNyRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7OztBQUVBLGdDQUFnQzs7O0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsU0FBUztBQUNYOzs7QUFFQSx1Q0FBdUM7OztBQUd2QywyREFBMkQ7OztBQUMxRDtFQUNDLFdBQVc7RUFDWCxVQUFVO0FBQ1o7OztBQUVBLHNDQUFzQzs7O0FBQ3RDO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQSwyQkFBMkI7OztBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFdBQVcsRUFBRSxnQkFBZ0I7RUFDN0IsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COzs7QUFFQSxzQkFBc0I7OztBQUN0QjtFQUNFLGtDQUFrQztFQUNsQyx3QkFBd0IsRUFBRSxzREFBc0Q7RUFDaEYsaUNBQWlDO0VBQ2pDLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7OztBQUVBLCtCQUErQjs7O0FBQy9CO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7O0FBRUEseUJBQXlCOzs7QUFDekI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7OztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7QUFFQSxpQkFBaUI7OztBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7O0FBRUEsNkVBQTZFOzs7QUFDN0U7Q0FDQztLQUNJLFdBQVc7RUFDZDtBQUNGOzs7QUFLQSxvQkFBb0I7OztBQUdwQjtFQUNFLFNBQVM7RUFDVDtBQUNGOzs7QUFFQTtFQUNFO0FBQ0Y7OztBQUVBO0VBQ0U7QUFDRjs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkO0FBQ0Y7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQjtBQUNGOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsU0FBUztFQUNULG9CQUFvQjtFQUNwQjtBQUNGOzs7QUFFQTtFQUNFO0FBQ0Y7OztBQUVBO0VBQ0U7QUFDRjs7O0FBRUE7O0VBRUUsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZjtBQUNGOzs7QUFFQTs7RUFJRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCO0FBQ0Y7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekI7QUFDRjs7O0FBRUE7O0VBRUU7QUFDRjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QjtBQUNGOzs7QUFFQTs7RUFFRTtBQUNGOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1o7QUFDRjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkI7QUFDRjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2Q7QUFDRjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkI7QUFDRjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7QUFDRjs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCO0FBQ0Y7OztBQUVBO0VBQ0U7QUFDRjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCO0FBQ0Y7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCO0FBQ0Y7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCO0FBQ0Y7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCO0FBQ0Y7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCO0FBQ0Y7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEI7QUFDRjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1Q7QUFDRjs7O0FBRUE7O0VBRUU7QUFDRjs7O0FBRUE7RUFDRTtBQUNGOzs7QUFFQTtFQUNFO0FBQ0Y7OztBQUVBO0VBQ0UsV0FBVztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGRvcmRlci9hZGRvcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5ib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTksIDIzMSwgMzcsIDAuOTc5KTsgfVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcblxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5ZTY1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcblxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbiAuc2lnbnVwYnRuIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiA1MCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNTUsIDIyNik7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIyLCAyMSwgMjEpO1xyXG4gIHdpZHRoOiA2MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuIFxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAuc2lnbnVwYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIG11bHRpIHN0ZXAgZm9ybSAqL1xyXG5cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwXHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogZ3JleVxyXG59XHJcblxyXG4jaGVhZGluZyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzY3M0FCNztcclxuICBmb250LXdlaWdodDogbm9ybWFsXHJcbn1cclxuXHJcbiNtc2Zvcm0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweFxyXG59XHJcblxyXG4jbXNmb3JtIGZpZWxkc2V0IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDAgbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5mb3JtLWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGxlZnRcclxufVxyXG5cclxuI21zZm9ybSBmaWVsZHNldDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbiNtc2Zvcm0gaW5wdXQsXHJcbiNtc2Zvcm0gdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4IDhweCAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgY29sb3I6ICMyQzNFNTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUZGMTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweFxyXG59XHJcblxyXG4jbXNmb3JtIGlucHV0OmZvY3VzLFxyXG4jbXNmb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3M0FCNztcclxuICBvdXRsaW5lLXdpZHRoOiAwXHJcbn1cclxuXHJcbiNtc2Zvcm0gLmFjdGlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjNjczQUI3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDAgbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0XHJcbn1cclxuXHJcbiNtc2Zvcm0gLmFjdGlvbi1idXR0b246aG92ZXIsXHJcbiNtc2Zvcm0gLmFjdGlvbi1idXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTFCOTJcclxufVxyXG5cclxuI21zZm9ybSAuYWN0aW9uLWJ1dHRvbi1wcmV2aW91cyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDBweDtcclxuICBmbG9hdDogcmlnaHRcclxufVxyXG5cclxuI21zZm9ybSAuYWN0aW9uLWJ1dHRvbi1wcmV2aW91czpob3ZlcixcclxuI21zZm9ybSAuYWN0aW9uLWJ1dHRvbi1wcmV2aW91czpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgei1pbmRleDogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5mcy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjNjczQUI3O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0XHJcbn1cclxuXHJcbi5wdXJwbGUtdGV4dCB7XHJcbiAgY29sb3I6ICM2NzNBQjc7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbFxyXG59XHJcblxyXG4uc3RlcHMge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLmZpZWxkbGFiZWxzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0XHJcbn1cclxuXHJcbiNwcm9ncmVzc2JhciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiBsaWdodGdyZXlcclxufVxyXG5cclxuI3Byb2dyZXNzYmFyIC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjNjczQUI3XHJcbn1cclxuXHJcbiNwcm9ncmVzc2JhciBsaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNDAwXHJcbn1cclxuXHJcbiNwcm9ncmVzc2JhciAjYWNjb3VudDpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBjb250ZW50OiBcIlxcZjEzZVwiXHJcbn1cclxuXHJcbiNwcm9ncmVzc2JhciAjcGVyc29uYWw6YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgY29udGVudDogXCJcXGYwMDdcIlxyXG59XHJcblxyXG4jcHJvZ3Jlc3NiYXIgI3BheW1lbnQ6YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgY29udGVudDogXCJcXGYwMzBcIlxyXG59XHJcblxyXG4jcHJvZ3Jlc3NiYXIgI2NvbmZpcm06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgY29udGVudDogXCJcXGYwMGNcIlxyXG59XHJcblxyXG4jcHJvZ3Jlc3NiYXIgbGk6YmVmb3JlIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJweFxyXG59XHJcblxyXG4jcHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDI1cHg7XHJcbiAgei1pbmRleDogLTFcclxufVxyXG5cclxuI3Byb2dyZXNzYmFyIGxpLmFjdGl2ZTpiZWZvcmUsXHJcbiNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2NzNBQjdcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDIwcHhcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M0FCN1xyXG59XHJcblxyXG4uZml0LWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlclxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addorder',
                templateUrl: './addorder.component.html',
                styleUrls: ['./addorder.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/addsetting/addsetting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addsetting/addsetting.component.ts ***!
  \****************************************************/
/*! exports provided: MY_DATE_FORMATS, AddsettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DATE_FORMATS", function() { return MY_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsettingComponent", function() { return AddsettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");










const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
    },
};
class AddsettingComponent {
    constructor(driverService, router) {
        this.driverService = driverService;
        this.router = router;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    onAddSubmit() {
        const driver = {
            date: this.date,
            product_code: this.product_code,
            product_name: this.product_name,
            price: this.price,
            units: this.units,
            initial_quantity: this.initial_quantity,
            alert_quantity: this.alert_quantity,
            sold_quantity: this.sold_quantity,
            receive_item: this.receive_item,
            created_by: this.user.id
        };
        this.driverService.registerDriver(driver).subscribe(res => {
            console.log(res);
            this.router.navigate(['/setting']);
        });
    }
}
AddsettingComponent.ɵfac = function AddsettingComponent_Factory(t) { return new (t || AddsettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddsettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddsettingComponent, selectors: [["app-addsetting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_DATE_FORMATS }
        ])], decls: 52, vars: 11, consts: [["method", "post", 1, "modal-content", 3, "submit"], [1, "container"], [2, "color", "white"], ["appearance", "fill"], ["matInput", "", "name", "date", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["for", "name"], ["type", "text", "required", "", "name", "product_code", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "product_name", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "required", "", "name", "price", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "units", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "initial_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "alert_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "sold_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "receive_item", 3, "ngModel", "ngModelChange"], [1, "clearfix"], ["type", "submit", "id", "submitDetails", 1, "btn"]], template: function AddsettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddsettingComponent_Template_form_submit_1_listener() { return ctx.onAddSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Item List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_11_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_19_listener($event) { return ctx.product_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_23_listener($event) { return ctx.product_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_27_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_31_listener($event) { return ctx.units = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Initial Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_35_listener($event) { return ctx.initial_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Alert Level Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_39_listener($event) { return ctx.alert_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sold Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_43_listener($event) { return ctx.sold_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Receive Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddsettingComponent_Template_input_ngModelChange_47_listener($event) { return ctx.receive_item = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.initial_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alert_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sold_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.receive_item);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__["Navbar2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: ["body[_ngcontent-%COMP%] {font-family: Arial, Helvetica, sans-serif;background-color:rgba(19, 231, 37, 0.979); }\r\n*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #09e65e;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  opacity:1;\r\n}\r\n\r\n\r\n.signupbtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 50%; \r\n  overflow: auto; \r\n  background-color: #474e5d;\r\n  padding-top: 50px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: rgb(55, 55, 226);\r\n  margin: 5% auto 15% auto; \r\n  border: 5px solid rgb(22, 21, 21);\r\n  width: 60%; \r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 300px) {\r\n .signupbtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkc2V0dGluZy9hZGRzZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0seUNBQXlDLENBQUMseUNBQXlDLEVBQUU7QUFDM0YsR0FBRyxzQkFBc0IsQ0FBQztBQUkxQiw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUdBO0VBQ0UsU0FBUztBQUNYO0FBRUEsdUNBQXVDO0FBR3ZDLDJEQUEyRDtBQUMxRDtFQUNDLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxhQUFhO0FBQ2Y7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixXQUFXLEVBQUUsZ0JBQWdCO0VBQzdCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGtDQUFrQztFQUNsQyx3QkFBd0IsRUFBRSxzREFBc0Q7RUFDaEYsaUNBQWlDO0VBQ2pDLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQSw2RUFBNkU7QUFDN0U7Q0FDQztLQUNJLFdBQVc7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRkc2V0dGluZy9hZGRzZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5LCAyMzEsIDM3LCAwLjk3OSk7IH1cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOWU2NWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG5cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4gLnNpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogNTAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDU1LCAyMjYpO1xyXG4gIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bzsgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMiwgMjEsIDIxKTtcclxuICB3aWR0aDogNjAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddsettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addsetting',
                templateUrl: './addsetting.component.html',
                styleUrls: ['./addsetting.component.css'],
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_DATE_FORMATS }
                ]
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AdminComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "60");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.initial_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.receive_item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.sold_quantity);
} }
class AdminComponent {
    constructor(driverService) {
        this.driverService = driverService;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getDriverDetails();
    }
    getDriverDetails() {
        this.driverService.getDriverDetails(this.user.id).subscribe((res) => {
            this.driversDetails = res.data;
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 41, vars: 1, consts: [[1, "center"], [1, "table"], [1, "thead-dark"], [2, "color", "red"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " DASHBOARD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Initial Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Received Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sold Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Inventory Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cost of Sold Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cost Of Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Profit %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdminComponent_tr_35_Template, 21, 5, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.driversDetails);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_2__["Navbar2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".center[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n  \r\n*[_ngcontent-%COMP%]{\r\n\tbox-sizing: border-box;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tborder-collapse: collapse;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tfont-family: 'Noto Sans JP', sans-serif;\r\n  padding:12px 15px;\r\n  border:1px solid #ddd;\r\n  text-align: center;\r\n  font-size:14px;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: darkblue;\r\n\tcolor:#ffffff;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){\r\n\tbackground-color: #f5f5f5;\r\n}\r\n  \r\n\r\n  \r\n@media(max-width: 500px){\r\n\t.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\tmargin-bottom:15px;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\ttext-align: right;\r\n\t\tpadding-left: 50%;\r\n\t\ttext-align: right;\r\n\t\tposition: relative;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before{\r\n\t\tcontent: attr(data-label);\r\n\t\tposition: absolute;\r\n\t\tleft:0;\r\n\t\twidth: 50%;\r\n\t\tpadding-left:15px;\r\n\t\tfont-size:15px;\r\n\t\tfont-weight: bold;\r\n\t\ttext-align: left;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBS0E7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsdUNBQXVDO0VBQ3RDLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBLGFBQWE7O0FBRWI7Q0FDQztFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuICBcclxuKntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGFibGV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnRhYmxlIHRkLC50YWJsZSB0aHtcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzoxMnB4IDE1cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6MTRweDtcclxufVxyXG5cclxuLnRhYmxlIHRoe1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbil7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLypyZXNwb25zaXZlKi9cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuXHQudGFibGUgdGhlYWR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LnRhYmxlLCAudGFibGUgdGJvZHksIC50YWJsZSB0ciwgLnRhYmxlIHRke1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LnRhYmxlIHRye1xyXG5cdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdH1cclxuXHQudGFibGUgdGR7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdHBhZGRpbmctbGVmdDogNTAlO1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC50YWJsZSB0ZDo6YmVmb3Jle1xyXG5cdFx0Y29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/alogin/alogin.component.ts":
/*!********************************************!*\
  !*** ./src/app/alogin/alogin.component.ts ***!
  \********************************************/
/*! exports provided: AloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AloginComponent", function() { return AloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class AloginComponent {
    constructor(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe((data) => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.toastr.success('you are now logged in', 'Success');
                this.router.navigate(['/admin']);
            }
            else {
                this.toastr.error(data.msg, 'Oops');
                this.router.navigate(['login']);
            }
        });
    }
}
AloginComponent.ɵfac = function AloginComponent_Factory(t) { return new (t || AloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AloginComponent, selectors: [["app-alogin"]], decls: 29, vars: 2, consts: [[1, "center"], [1, "wrapper"], [1, "title"], [3, "submit"], [1, "field"], ["type", "text", "required", "", "name", "username", 3, "ngModel", "ngModelChange"], ["type", "password", "required", "", "name", "password", 3, "ngModel", "ngModelChange"], [1, "content"], [1, "checkbox"], ["type", "checkbox", "id", "remember-me"], ["for", "remember-me"], [1, "pass-link"], ["href", "#"], ["type", "submit", "value", "Login"], [1, "signup-link"], ["routerLink", "/admin"]], template: function AloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\nAdmin Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AloginComponent_Template_form_submit_6_listener() { return ctx.onLoginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AloginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AloginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "skip now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::selection{\r\n  background: #4158d0;\r\n  color: #fff;\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n  width: 450px;\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  line-height: 100px;\r\n  color: #fff;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  border-radius: 15px 15px 0 0;\r\n  background: linear-gradient(-135deg, #1806bd, #1435dd);\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  padding: 10px 30px 50px 30px;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  position: relative;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 17px;\r\n  padding-left: 20px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 25px;\r\n  transition: all 0.3s ease;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{\r\n  border-color: #4158d0;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 20px;\r\n  color: #999999;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  pointer-events: none;\r\n  transform: translateY(-50%);\r\n  transition: all 0.3s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]{\r\n  top: 0%;\r\n  font-size: 16px;\r\n  color: #4158d0;\r\n  background: #fff;\r\n  transform: translateY(-50%);\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 16px;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 15px;\r\n  background: red;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  color: #262626;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  padding-left: 5px;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]{\r\n  color: \"\";\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  border: none;\r\n  padding-left: 0;\r\n  margin-top: -10px;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background: linear-gradient(-135deg, #1d12b6, #4158d0);\r\n  transition: all 0.3s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:active{\r\n  transform: scale(0.95);\r\n}\r\nform[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]{\r\n  color: #262626;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\nform[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #4158d0;\r\n  text-decoration: none;\r\n}\r\nform[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n  display: flex;\r\n   justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxvZ2luL2Fsb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJGQUEyRjtBQUMzRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQztBQUNBOzs7Ozt3QkFLd0I7QUFDdEIsNERBQTREO0FBQzlELE1BQU07QUFDTjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLE9BQU87RUFDUCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNEQUFzRDtFQUN0RCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsMEJBQTBCO0FBQzVCO0FBR0E7RUFDRSxhQUFhO0dBQ1osdUJBQXVCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWxvZ2luL2Fsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLyogaHRtbCxib2R5e1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjsgKi9cclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgI2M4NTBjMCwgIzQxNThkMCk7ICovXHJcbi8qIH0gKi9cclxuOjpzZWxlY3Rpb257XHJcbiAgYmFja2dyb3VuZDogIzQxNThkMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbi53cmFwcGVyIC50aXRsZXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsICMxODA2YmQsICMxNDM1ZGQpO1xyXG59XHJcbi53cmFwcGVyIGZvcm17XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDUwcHggMzBweDtcclxufVxyXG4ud3JhcHBlciBmb3JtIC5maWVsZHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLndyYXBwZXIgZm9ybSAuZmllbGQgaW5wdXR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi53cmFwcGVyIGZvcm0gLmZpZWxkIGlucHV0OmZvY3VzLFxyXG5mb3JtIC5maWVsZCBpbnB1dDp2YWxpZHtcclxuICBib3JkZXItY29sb3I6ICM0MTU4ZDA7XHJcbn1cclxuLndyYXBwZXIgZm9ybSAuZmllbGQgbGFiZWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuZm9ybSAuZmllbGQgaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuZm9ybSAuZmllbGQgaW5wdXQ6dmFsaWQgfiBsYWJlbHtcclxuICB0b3A6IDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzQxNThkMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5mb3JtIC5jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbmZvcm0gLmNvbnRlbnQgLmNoZWNrYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5mb3JtIC5jb250ZW50IGlucHV0e1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuZm9ybSAuY29udGVudCBsYWJlbHtcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5mb3JtIC5jb250ZW50IC5wYXNzLWxpbmt7XHJcbiAgY29sb3I6IFwiXCI7XHJcbn1cclxuZm9ybSAuZmllbGQgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgIzFkMTJiNiwgIzQxNThkMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5mb3JtIC5maWVsZCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcbmZvcm0gLnNpZ251cC1saW5re1xyXG4gIGNvbG9yOiAjMjYyNjI2O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmZvcm0gLnBhc3MtbGluayBhLFxyXG5mb3JtIC5zaWdudXAtbGluayBhe1xyXG4gIGNvbG9yOiAjNDE1OGQwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5mb3JtIC5wYXNzLWxpbmsgYTpob3ZlcixcclxuZm9ybSAuc2lnbnVwLWxpbmsgYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alogin',
                templateUrl: './alogin.component.html',
                styleUrls: ['./alogin.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
class Response {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _alogin_alogin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alogin/alogin.component */ "./src/app/alogin/alogin.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _clogin_clogin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clogin/clogin.component */ "./src/app/clogin/clogin.component.ts");
/* harmony import */ var _cregister_cregister_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cregister/cregister.component */ "./src/app/cregister/cregister.component.ts");
/* harmony import */ var _dashboad_dashboad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboad/dashboad.component */ "./src/app/dashboad/dashboad.component.ts");
/* harmony import */ var _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detailproduct/detailproduct.component */ "./src/app/detailproduct/detailproduct.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./itemlist/itemlist.component */ "./src/app/itemlist/itemlist.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _receiveditem_receiveditem_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./receiveditem/receiveditem.component */ "./src/app/receiveditem/receiveditem.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _addsetting_addsetting_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./addsetting/addsetting.component */ "./src/app/addsetting/addsetting.component.ts");
/* harmony import */ var _additem_additem_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./additem/additem.component */ "./src/app/additem/additem.component.ts");
/* harmony import */ var _updatesetting_updatesetting_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./updatesetting/updatesetting.component */ "./src/app/updatesetting/updatesetting.component.ts");
/* harmony import */ var _editsale_editsale_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editsale/editsale.component */ "./src/app/editsale/editsale.component.ts");
/* harmony import */ var _editreceive_editreceive_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./editreceive/editreceive.component */ "./src/app/editreceive/editreceive.component.ts");
/* harmony import */ var _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./addorder/addorder.component */ "./src/app/addorder/addorder.component.ts");



























const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"] },
    { path: 'login', component: _clogin_clogin_component__WEBPACK_IMPORTED_MODULE_6__["CloginComponent"] },
    { path: 'main', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_14__["MainpageComponent"] },
    { path: 'register', component: _cregister_cregister_component__WEBPACK_IMPORTED_MODULE_7__["CregisterComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'alogin', component: _alogin_alogin_component__WEBPACK_IMPORTED_MODULE_4__["AloginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'dash', component: _dashboad_dashboad_component__WEBPACK_IMPORTED_MODULE_8__["DashboadComponent"] },
    { path: 'itemlist', component: _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_13__["ItemlistComponent"] },
    { path: 'receive', component: _receiveditem_receiveditem_component__WEBPACK_IMPORTED_MODULE_16__["ReceiveditemComponent"] },
    { path: 'sale', component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_17__["SalesComponent"] },
    { path: 'setting', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_18__["SettingComponent"] },
    { path: 'details', component: _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_9__["DetailproductComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_15__["OrderComponent"] },
    { path: 'addsetting', component: _addsetting_addsetting_component__WEBPACK_IMPORTED_MODULE_19__["AddsettingComponent"] },
    { path: 'additem', component: _additem_additem_component__WEBPACK_IMPORTED_MODULE_20__["AdditemComponent"] },
    { path: 'upsetting', component: _updatesetting_updatesetting_component__WEBPACK_IMPORTED_MODULE_21__["UpdatesettingComponent"] },
    { path: 'editreceive', component: _editreceive_editreceive_component__WEBPACK_IMPORTED_MODULE_23__["EditreceiveComponent"] },
    { path: 'addorder', component: _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_24__["AddorderComponent"] },
    { path: 'editsale', component: _editsale_editsale_component__WEBPACK_IMPORTED_MODULE_22__["EditsaleComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");




class AppComponent {
    constructor() {
        this.title = 'flowerproject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/validate.service */ "./src/app/service/validate.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _src_app_service_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/app/service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _clogin_clogin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clogin/clogin.component */ "./src/app/clogin/clogin.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _cregister_cregister_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cregister/cregister.component */ "./src/app/cregister/cregister.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _alogin_alogin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./alogin/alogin.component */ "./src/app/alogin/alogin.component.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _dashboad_dashboad_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboad/dashboad.component */ "./src/app/dashboad/dashboad.component.ts");
/* harmony import */ var _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./itemlist/itemlist.component */ "./src/app/itemlist/itemlist.component.ts");
/* harmony import */ var _receiveditem_receiveditem_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./receiveditem/receiveditem.component */ "./src/app/receiveditem/receiveditem.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./detailproduct/detailproduct.component */ "./src/app/detailproduct/detailproduct.component.ts");
/* harmony import */ var _addsetting_addsetting_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./addsetting/addsetting.component */ "./src/app/addsetting/addsetting.component.ts");
/* harmony import */ var _additem_additem_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./additem/additem.component */ "./src/app/additem/additem.component.ts");
/* harmony import */ var _updatesetting_updatesetting_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./updatesetting/updatesetting.component */ "./src/app/updatesetting/updatesetting.component.ts");
/* harmony import */ var _editsale_editsale_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./editsale/editsale.component */ "./src/app/editsale/editsale.component.ts");
/* harmony import */ var _editreceive_editreceive_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./editreceive/editreceive.component */ "./src/app/editreceive/editreceive.component.ts");
/* harmony import */ var _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./addorder/addorder.component */ "./src/app/addorder/addorder.component.ts");












































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _src_app_service_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"], _service_sharedData_service__WEBPACK_IMPORTED_MODULE_5__["SharedData"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                timeOut: 1000,
                progressBar: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _clogin_clogin_component__WEBPACK_IMPORTED_MODULE_18__["CloginComponent"],
        _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_19__["MainpageComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
        _cregister_cregister_component__WEBPACK_IMPORTED_MODULE_22__["CregisterComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__["CartComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
        _alogin_alogin_component__WEBPACK_IMPORTED_MODULE_26__["AloginComponent"],
        _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_27__["Navbar2Component"],
        _dashboad_dashboad_component__WEBPACK_IMPORTED_MODULE_28__["DashboadComponent"],
        _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_29__["ItemlistComponent"],
        _receiveditem_receiveditem_component__WEBPACK_IMPORTED_MODULE_30__["ReceiveditemComponent"],
        _sales_sales_component__WEBPACK_IMPORTED_MODULE_31__["SalesComponent"],
        _setting_setting_component__WEBPACK_IMPORTED_MODULE_32__["SettingComponent"],
        _order_order_component__WEBPACK_IMPORTED_MODULE_33__["OrderComponent"],
        _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_34__["DetailproductComponent"],
        _addsetting_addsetting_component__WEBPACK_IMPORTED_MODULE_35__["AddsettingComponent"],
        _additem_additem_component__WEBPACK_IMPORTED_MODULE_36__["AdditemComponent"],
        _updatesetting_updatesetting_component__WEBPACK_IMPORTED_MODULE_37__["UpdatesettingComponent"],
        _editsale_editsale_component__WEBPACK_IMPORTED_MODULE_38__["EditsaleComponent"],
        _editreceive_editreceive_component__WEBPACK_IMPORTED_MODULE_39__["EditreceiveComponent"],
        _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_40__["AddorderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _clogin_clogin_component__WEBPACK_IMPORTED_MODULE_18__["CloginComponent"],
                    _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_19__["MainpageComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                    _cregister_cregister_component__WEBPACK_IMPORTED_MODULE_22__["CregisterComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__["CartComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
                    _alogin_alogin_component__WEBPACK_IMPORTED_MODULE_26__["AloginComponent"],
                    _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_27__["Navbar2Component"],
                    _dashboad_dashboad_component__WEBPACK_IMPORTED_MODULE_28__["DashboadComponent"],
                    _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_29__["ItemlistComponent"],
                    _receiveditem_receiveditem_component__WEBPACK_IMPORTED_MODULE_30__["ReceiveditemComponent"],
                    _sales_sales_component__WEBPACK_IMPORTED_MODULE_31__["SalesComponent"],
                    _setting_setting_component__WEBPACK_IMPORTED_MODULE_32__["SettingComponent"],
                    _order_order_component__WEBPACK_IMPORTED_MODULE_33__["OrderComponent"],
                    _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_34__["DetailproductComponent"],
                    _addsetting_addsetting_component__WEBPACK_IMPORTED_MODULE_35__["AddsettingComponent"],
                    _additem_additem_component__WEBPACK_IMPORTED_MODULE_36__["AdditemComponent"],
                    _updatesetting_updatesetting_component__WEBPACK_IMPORTED_MODULE_37__["UpdatesettingComponent"],
                    _editsale_editsale_component__WEBPACK_IMPORTED_MODULE_38__["EditsaleComponent"],
                    _editreceive_editreceive_component__WEBPACK_IMPORTED_MODULE_39__["EditreceiveComponent"],
                    _addorder_addorder_component__WEBPACK_IMPORTED_MODULE_40__["AddorderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                        timeOut: 1000,
                        progressBar: true
                    }),
                ],
                providers: [_service_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _src_app_service_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"], _service_sharedData_service__WEBPACK_IMPORTED_MODULE_5__["SharedData"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class CartComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 108, vars: 0, consts: [[1, "row"], [1, "col-75"], [1, "container"], ["id", "validate", "action", "/action_page.php"], [1, "col-50"], ["for", "fname"], [1, "fa", "fa-user"], ["type", "text", "id", "fname", "name", "fullname", "placeholder", "Soeng.Souy", "required", ""], ["for", "email"], [1, "fa", "fa-envelope"], ["type", "text", "id", "email", "name", "email", "placeholder", "soeng.souy@gmail.com", "required", ""], ["for", "adr"], [1, "fa", "fa-address-card-o"], ["type", "text", "id", "adr", "name", "address", "placeholder", "110 W. 15th Phnom Penh", "required", ""], ["type", "text", "id", "adr", "name", "phone", "placeholder", "2845635684", "required", ""], ["for", "city"], [1, "fa", "fa-institution"], ["type", "text", "id", "city", "name", "city", "placeholder", "Phnom Penh", "required", ""], ["for", "state"], ["type", "text", "id", "state", "name", "state", "placeholder", "Phnom Penh", "required", ""], ["for", "zip"], ["type", "text", "id", "zip", "name", "zip", "placeholder", "12000", "required", ""], [1, "icon-container"], [1, "fa", "fa-cc-visa", 2, "color", "navy"], [1, "fa", "fa-cc-amex", 2, "color", "blue"], [1, "fa", "fa-cc-mastercard", 2, "color", "red"], [1, "fa", "fa-cc-discover", 2, "color", "orange"], ["for", "cname"], ["type", "text", "id", "cname", "name", "cardname", "placeholder", "Soeng Souy", "required", ""], ["for", "ccnum"], ["type", "text", "id", "ccnum", "name", "cardnumber", "placeholder", "1111-2222-3333-4444", "required", ""], ["for", "expmonth"], ["type", "text", "id", "expmonth", "name", "expmonth", "placeholder", "September", "required", ""], ["for", "expyear"], ["type", "text", "id", "expyear", "name", "expyear", "placeholder", "2021", "required", ""], ["for", "cvv"], ["type", "text", "id", "cvv", "name", "cvv", "placeholder", "352", "required", ""], ["type", "checkbox", "checked", "checked", "name", "sameadr"], ["type", "submit", "value", "Continue to checkout", 1, "btn"], [1, "col-25"], [1, "price", 2, "color", "black"], [1, "fa", "fa-shopping-cart"], ["href", "#"], [1, "price"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Checkout Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Phone No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Accepted Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Name on Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Credit card number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Exp Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Exp Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Shipping address same as billing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Rose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "code:22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "SAMSUNG S21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "$1500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "OPPO F14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "$1400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "HUAWEI 20 Mac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "$1200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "$12600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');\r\n\r\n*[_ngcontent-%COMP%]{\r\n\r\n\tfont-family: 'Comfortaa', cursive;\r\n\r\n\tmargin: 0;\r\n\r\n\tpadding: 0;\r\n\r\n\tbox-sizing: border-box;\r\n\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n\r\n\tmax-width: 1200px;\r\n\r\n\tmargin: 0 auto;\r\n\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]{\r\n\r\n\tpadding: 20px 0;\r\n\r\n}\r\n\r\n.cart[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: flex;\r\n\r\n}\r\n\r\n.products[_ngcontent-%COMP%]{\r\n\r\n\tflex: 0.75;\r\n\r\n}\r\n\r\n.product[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: flex;\r\n\r\n\twidth: 100%;\r\n\r\n\theight: 200px;\r\n\r\n\toverflow: hidden;\r\n\r\n\tborder: 1px solid silver;\r\n\r\n\tmargin-bottom: 20px;\r\n\r\n}\r\n\r\n.product[_ngcontent-%COMP%]:hover{\r\n\r\n\tborder: none;\r\n\r\n\tbox-shadow: 2px 2px 4px rgba(0,0,0,0.2);\r\n\r\n\ttransform: scale(1.01);\r\n\r\n}\r\n\r\n.product[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n\r\n\twidth: 300px;\r\n\r\n\theight: 200px;\r\n\r\n\tobject-fit: cover;\r\n\r\n}\r\n\r\n.product[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover{\r\n\r\n\ttransform: scale(1.04);\r\n\r\n}\r\n\r\n.product-info[_ngcontent-%COMP%]{\r\n\r\n\tpadding: 20px;\r\n\r\n\twidth: 100%;\r\n\r\n\tposition: relative;\r\n\r\n}\r\n\r\n.product-name[_ngcontent-%COMP%], .product-price[_ngcontent-%COMP%], .product-offer[_ngcontent-%COMP%]{\r\n\r\n\tmargin-bottom: 20px;\r\n\r\n}\r\n\r\n.product-remove[_ngcontent-%COMP%]{\r\n\r\n\tposition: absolute;\r\n\r\n\tbottom: 20px;\r\n\r\n\tright: 20px;\r\n\r\n\tpadding: 10px 25px;\r\n\r\n\tbackground-color: green;\r\n\r\n\tcolor: white;\r\n\r\n\tcursor: pointer;\r\n\r\n\tborder-radius: 5px;\r\n\r\n}\r\n\r\n.product-remove[_ngcontent-%COMP%]:hover{\r\n\r\n\tbackground-color: white;\r\n\r\n\tcolor: green;\r\n\r\n\tfont-weight: 600;\r\n\r\n\tborder: 1px solid green;\r\n\r\n}\r\n\r\n.product-quantity[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n\r\n\twidth: 40px;\r\n\r\n\tpadding: 5px;\r\n\r\n\ttext-align: center;\r\n\r\n}\r\n\r\n.fa[_ngcontent-%COMP%]{\r\n\r\n\tmargin-right: 5px;\r\n\r\n}\r\n\r\n.cart-total[_ngcontent-%COMP%]{\r\n\r\n\tflex: 0.25;\r\n\r\n\tmargin-left: 20px;\r\n\r\n\tpadding: 20px;\r\n\r\n\theight: 240px;\r\n\r\n\tborder: 1px solid silver;\r\n\r\n\tborder-radius: 5px;\r\n\r\n}\r\n\r\n.cart-total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: flex;\r\n\r\n\tjustify-content: space-between;\r\n\r\n\tmargin-bottom: 30px;\r\n\r\n\tfont-size: 20px;\r\n\r\n}\r\n\r\n.cart-total[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: block;\r\n\r\n\ttext-align: center;\r\n\r\n\theight: 40px;\r\n\r\n\tline-height: 40px;\r\n\r\n\tbackground-color: tomato;\r\n\r\n\tcolor: white;\r\n\r\n\ttext-decoration: none;\r\n\r\n}\r\n\r\n.cart-total[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\r\n\tbackground-color: red;\r\n\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n\r\n\t.remove[_ngcontent-%COMP%]{\r\n\r\n\t\tdisplay: none;\r\n\r\n\t}\r\n\r\n\t.product[_ngcontent-%COMP%]{\r\n\r\n\t\theight: 150px;\r\n\r\n\t}\r\n\r\n\t.product[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n\r\n\t\theight: 150px;\r\n\r\n\t\twidth: 200px;\r\n\r\n\t}\r\n\r\n\t.product-name[_ngcontent-%COMP%], .product-price[_ngcontent-%COMP%], .product-offer[_ngcontent-%COMP%]{\r\n\r\n\t\tmargin-bottom: 10px;\r\n\r\n\t}\r\n\r\n}\r\n\r\n@media screen and (max-width: 900px){\r\n\r\n\t.cart[_ngcontent-%COMP%]{\r\n\r\n\t\tflex-direction: column;\r\n\r\n\t}\r\n\r\n\t.cart-total[_ngcontent-%COMP%]{\r\n\r\n\t\tmargin-left: 0;\r\n\r\n\t\tmargin-bottom: 20px;\r\n\r\n\t}\r\n\r\n}\r\n\r\n@media screen and (max-width: 1220px){\r\n\r\n\t.container[_ngcontent-%COMP%]{\r\n\r\n\t\tmax-width: 95%;\r\n\r\n\t}\r\n\r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: Arial;\r\n    font-size: 17px;\r\n    padding: 8px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-align:left;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    color: red;\r\n    border-color: red;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] { \r\n    display: flex; \r\n    flex-wrap: wrap;\r\n    margin: 0 -10px;\r\n}\r\n\r\n.col-25[_ngcontent-%COMP%] { \r\n    flex: 25%;\r\n}\r\n\r\n.col-50[_ngcontent-%COMP%] { \r\n    flex: 50%;\r\n}\r\n\r\n.col-75[_ngcontent-%COMP%] { \r\n    flex: 75%;\r\n}\r\n\r\n.col-25[_ngcontent-%COMP%], .col-50[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%] {\r\n    padding: 0 16px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    background-color: #FFFFFF;\r\n    padding: 3px 18px 13px 18px;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 2rem 0 rgba(168, 180, 194, 0.37);\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    padding: 12px;\r\n    border: 1px solid rgb(130, 26, 26);\r\n    border-radius: 1px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    display: block;\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    padding: 7px 0;\r\n    font-size: 24px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    background-color: #01BAEF;\r\n    color: white;\r\n    padding: 12px;\r\n    margin: 10px 0;\r\n    border: none;\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    box-shadow: 0 0 1rem 0 rgba(99, 123, 150, 0.329);\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #0CBABA;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #2196F3;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    border: 1px solid lightgrey;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: grey;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 800px) {\r\n    .row[_ngcontent-%COMP%] {\r\n        flex-direction: column-reverse;\r\n    }\r\n    .col-25[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQUU5RTs7Q0FFQyxpQ0FBaUM7O0NBRWpDLFNBQVM7O0NBRVQsVUFBVTs7Q0FFVixzQkFBc0I7O0FBRXZCOztBQUVBOztDQUVDLGlCQUFpQjs7Q0FFakIsY0FBYzs7QUFFZjs7QUFFQTs7Q0FFQyxlQUFlOztBQUVoQjs7QUFFQTs7Q0FFQyxhQUFhOztBQUVkOztBQUVBOztDQUVDLFVBQVU7O0FBRVg7O0FBRUE7O0NBRUMsYUFBYTs7Q0FFYixXQUFXOztDQUVYLGFBQWE7O0NBRWIsZ0JBQWdCOztDQUVoQix3QkFBd0I7O0NBRXhCLG1CQUFtQjs7QUFFcEI7O0FBRUE7O0NBRUMsWUFBWTs7Q0FFWix1Q0FBdUM7O0NBRXZDLHNCQUFzQjs7QUFFdkI7O0FBRUE7O0NBRUMsWUFBWTs7Q0FFWixhQUFhOztDQUViLGlCQUFpQjs7QUFFbEI7O0FBRUE7O0NBRUMsc0JBQXNCOztBQUV2Qjs7QUFFQTs7Q0FFQyxhQUFhOztDQUViLFdBQVc7O0NBRVgsa0JBQWtCOztBQUVuQjs7QUFFQTs7Q0FFQyxtQkFBbUI7O0FBRXBCOztBQUVBOztDQUVDLGtCQUFrQjs7Q0FFbEIsWUFBWTs7Q0FFWixXQUFXOztDQUVYLGtCQUFrQjs7Q0FFbEIsdUJBQXVCOztDQUV2QixZQUFZOztDQUVaLGVBQWU7O0NBRWYsa0JBQWtCOztBQUVuQjs7QUFFQTs7Q0FFQyx1QkFBdUI7O0NBRXZCLFlBQVk7O0NBRVosZ0JBQWdCOztDQUVoQix1QkFBdUI7O0FBRXhCOztBQUVBOztDQUVDLFdBQVc7O0NBRVgsWUFBWTs7Q0FFWixrQkFBa0I7O0FBRW5COztBQUVBOztDQUVDLGlCQUFpQjs7QUFFbEI7O0FBRUE7O0NBRUMsVUFBVTs7Q0FFVixpQkFBaUI7O0NBRWpCLGFBQWE7O0NBRWIsYUFBYTs7Q0FFYix3QkFBd0I7O0NBRXhCLGtCQUFrQjs7QUFFbkI7O0FBRUE7O0NBRUMsYUFBYTs7Q0FFYiw4QkFBOEI7O0NBRTlCLG1CQUFtQjs7Q0FFbkIsZUFBZTs7QUFFaEI7O0FBRUE7O0NBRUMsY0FBYzs7Q0FFZCxrQkFBa0I7O0NBRWxCLFlBQVk7O0NBRVosaUJBQWlCOztDQUVqQix3QkFBd0I7O0NBRXhCLFlBQVk7O0NBRVoscUJBQXFCOztBQUV0Qjs7QUFFQTs7Q0FFQyxxQkFBcUI7O0FBRXRCOztBQUVBOztDQUVDOztFQUVDLGFBQWE7O0NBRWQ7O0NBRUE7O0VBRUMsYUFBYTs7Q0FFZDs7Q0FFQTs7RUFFQyxhQUFhOztFQUViLFlBQVk7O0NBRWI7O0NBRUE7O0VBRUMsbUJBQW1COztDQUVwQjs7QUFFRDs7QUFFQTs7Q0FFQzs7RUFFQyxzQkFBc0I7O0NBRXZCOztDQUVBOztFQUVDLGNBQWM7O0VBRWQsbUJBQW1COztDQUVwQjs7QUFFRDs7QUFFQTs7Q0FFQzs7RUFFQyxjQUFjOztDQUVmOztBQUVEOztBQUtBLHFCQUFxQjs7QUFJckI7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQSxPQUMwQixTQUFTO0lBQy9CLGFBQWEsRUFDUSxTQUFTO0lBQzlCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBLFVBQ21CLFNBQVM7SUFDeEIsU0FBUztBQUNiOztBQUVBLFVBQ21CLFNBQVM7SUFDeEIsU0FBUztBQUNiOztBQUVBLFVBQ21CLFNBQVM7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixnREFBZ0Q7QUFDcEQ7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnREFBZ0Q7O0FBRXBEOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7OztDQUdDOztBQUNEO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWEmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qe1xyXG5cclxuXHRmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcblxyXG5cdG1hcmdpbjogMDtcclxuXHJcblx0cGFkZGluZzogMDtcclxuXHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcblxyXG5cdG1heC13aWR0aDogMTIwMHB4O1xyXG5cclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIgPiBoMXtcclxuXHJcblx0cGFkZGluZzogMjBweCAwO1xyXG5cclxufVxyXG5cclxuLmNhcnR7XHJcblxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdHN7XHJcblxyXG5cdGZsZXg6IDAuNzU7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdHtcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdGhlaWdodDogMjAwcHg7XHJcblxyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcclxuXHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0OmhvdmVye1xyXG5cclxuXHRib3JkZXI6IG5vbmU7XHJcblxyXG5cdGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuXHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0ID4gaW1ne1xyXG5cclxuXHR3aWR0aDogMzAwcHg7XHJcblxyXG5cdGhlaWdodDogMjAwcHg7XHJcblxyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuLnByb2R1Y3QgPiBpbWc6aG92ZXJ7XHJcblxyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZve1xyXG5cclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cclxuXHR3aWR0aDogMTAwJTtcclxuXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtbmFtZSwgLnByb2R1Y3QtcHJpY2UsIC5wcm9kdWN0LW9mZmVye1xyXG5cclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtcmVtb3Zle1xyXG5cclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cdGJvdHRvbTogMjBweDtcclxuXHJcblx0cmlnaHQ6IDIwcHg7XHJcblxyXG5cdHBhZGRpbmc6IDEwcHggMjVweDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1yZW1vdmU6aG92ZXJ7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuXHRjb2xvcjogZ3JlZW47XHJcblxyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtcXVhbnRpdHkgPiBpbnB1dHtcclxuXHJcblx0d2lkdGg6IDQwcHg7XHJcblxyXG5cdHBhZGRpbmc6IDVweDtcclxuXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmZhe1xyXG5cclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5jYXJ0LXRvdGFse1xyXG5cclxuXHRmbGV4OiAwLjI1O1xyXG5cclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcblx0cGFkZGluZzogMjBweDtcclxuXHJcblx0aGVpZ2h0OiAyNDBweDtcclxuXHJcblx0Ym9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4uY2FydC10b3RhbCBwe1xyXG5cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbn1cclxuXHJcbi5jYXJ0LXRvdGFsIGF7XHJcblxyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdGhlaWdodDogNDBweDtcclxuXHJcblx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uY2FydC10b3RhbCBhOmhvdmVye1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XHJcblxyXG5cdC5yZW1vdmV7XHJcblxyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHJcblx0fVxyXG5cclxuXHQucHJvZHVjdHtcclxuXHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0ID4gaW1ne1xyXG5cclxuXHRcdGhlaWdodDogMTUwcHg7XHJcblxyXG5cdFx0d2lkdGg6IDIwMHB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC5wcm9kdWN0LW5hbWUsIC5wcm9kdWN0LXByaWNlLCAucHJvZHVjdC1vZmZlcntcclxuXHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcblxyXG5cdC5jYXJ0e1xyXG5cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdH1cclxuXHJcblx0LmNhcnQtdG90YWx7XHJcblxyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblxyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyMHB4KXtcclxuXHJcblx0LmNvbnRhaW5lcntcclxuXHJcblx0XHRtYXgtd2lkdGg6IDk1JTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogIGNoZWNrIG91dCBwYWdlICAqL1xyXG5cclxuXHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDsgLyogSUUxMCAqL1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAwIC0xMHB4O1xyXG59XHJcblxyXG4uY29sLTI1IHtcclxuICAgIC1tcy1mbGV4OiAyNSU7IC8qIElFMTAgKi9cclxuICAgIGZsZXg6IDI1JTtcclxufVxyXG5cclxuLmNvbC01MCB7XHJcbiAgICAtbXMtZmxleDogNTAlOyAvKiBJRTEwICovXHJcbiAgICBmbGV4OiA1MCU7XHJcbn1cclxuXHJcbi5jb2wtNzUge1xyXG4gICAgLW1zLWZsZXg6IDc1JTsgLyogSUUxMCAqL1xyXG4gICAgZmxleDogNzUlO1xyXG59XHJcblxyXG4uY29sLTI1LC5jb2wtNTAsLmNvbC03NSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmc6IDNweCAxOHB4IDEzcHggMThweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIDAgcmdiYSgxNjgsIDE4MCwgMTk0LCAwLjM3KTtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzAsIDI2LCAyNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFCQUVGO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAwIHJnYmEoOTksIDEyMywgMTUwLCAwLjMyOSk7XHJcblxyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQ0JBQkE7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufVxyXG5cclxuc3Bhbi5wcmljZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDgwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIFxyXG4gICAgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKGFsc28gY2hhbmdlIHRoZSBkaXJlY3Rpb24gXHJcbiAgICAtIG1ha2UgdGhlIFwiY2FydFwiIGNvbHVtbiBnbyBvbiB0b3ApIFxyXG4qL1xyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH1cclxuICAgIC5jb2wtMjUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/clogin/clogin.component.ts":
/*!********************************************!*\
  !*** ./src/app/clogin/clogin.component.ts ***!
  \********************************************/
/*! exports provided: CloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloginComponent", function() { return CloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class CloginComponent {
    constructor(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe((data) => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.toastr.success('you are now logged in', 'Success');
                this.router.navigate(['main']);
            }
            else {
                this.toastr.error(data.msg, 'Oops');
                this.router.navigate(['login']);
            }
        });
    }
}
CloginComponent.ɵfac = function CloginComponent_Factory(t) { return new (t || CloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloginComponent, selectors: [["app-clogin"]], decls: 32, vars: 2, consts: [[1, "center"], [1, "wrapper"], [1, "title"], [3, "submit"], [1, "field"], ["type", "text", "required", "", "name", "username", 3, "ngModel", "ngModelChange"], ["type", "password", "required", "", "name", "password", 3, "ngModel", "ngModelChange"], [1, "content"], [1, "checkbox"], ["type", "checkbox", "id", "remember-me"], ["for", "remember-me"], [1, "pass-link"], ["href", "#"], ["type", "submit", "value", "Login"], [1, "signup-link"], ["routerLink", "/main"], ["routerLink", "/register"]], template: function CloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\nLogin Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CloginComponent_Template_form_submit_6_listener() { return ctx.onLoginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "skip now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\nNot a member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Signup now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::selection{\r\n  background: #4158d0;\r\n  color: #fff;\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n  width: 450px;\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  line-height: 100px;\r\n  color: #fff;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  border-radius: 15px 15px 0 0;\r\n  background: linear-gradient(-135deg, #1806bd, #1435dd);\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  padding: 10px 30px 50px 30px;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  position: relative;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 17px;\r\n  padding-left: 20px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 25px;\r\n  transition: all 0.3s ease;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{\r\n  border-color: #4158d0;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 20px;\r\n  color: #999999;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  pointer-events: none;\r\n  transform: translateY(-50%);\r\n  transition: all 0.3s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]{\r\n  top: 0%;\r\n  font-size: 16px;\r\n  color: #4158d0;\r\n  background: #fff;\r\n  transform: translateY(-50%);\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 16px;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 15px;\r\n  background: red;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  color: #262626;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  padding-left: 5px;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]{\r\n  color: \"\";\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  border: none;\r\n  padding-left: 0;\r\n  margin-top: -10px;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background: linear-gradient(-135deg, #1d12b6, #4158d0);\r\n  transition: all 0.3s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:active{\r\n  transform: scale(0.95);\r\n}\r\nform[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]{\r\n  color: #262626;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\nform[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #4158d0;\r\n  text-decoration: none;\r\n}\r\nform[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n  display: flex;\r\n   justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvZ2luL2Nsb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJGQUEyRjtBQUMzRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQztBQUNBOzs7Ozt3QkFLd0I7QUFDdEIsNERBQTREO0FBQzlELE1BQU07QUFDTjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLE9BQU87RUFDUCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNEQUFzRDtFQUN0RCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsMEJBQTBCO0FBQzVCO0FBR0E7RUFDRSxhQUFhO0dBQ1osdUJBQXVCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY2xvZ2luL2Nsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLyogaHRtbCxib2R5e1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjsgKi9cclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgI2M4NTBjMCwgIzQxNThkMCk7ICovXHJcbi8qIH0gKi9cclxuOjpzZWxlY3Rpb257XHJcbiAgYmFja2dyb3VuZDogIzQxNThkMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbi53cmFwcGVyIC50aXRsZXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsICMxODA2YmQsICMxNDM1ZGQpO1xyXG59XHJcbi53cmFwcGVyIGZvcm17XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDUwcHggMzBweDtcclxufVxyXG4ud3JhcHBlciBmb3JtIC5maWVsZHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLndyYXBwZXIgZm9ybSAuZmllbGQgaW5wdXR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi53cmFwcGVyIGZvcm0gLmZpZWxkIGlucHV0OmZvY3VzLFxyXG5mb3JtIC5maWVsZCBpbnB1dDp2YWxpZHtcclxuICBib3JkZXItY29sb3I6ICM0MTU4ZDA7XHJcbn1cclxuLndyYXBwZXIgZm9ybSAuZmllbGQgbGFiZWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuZm9ybSAuZmllbGQgaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuZm9ybSAuZmllbGQgaW5wdXQ6dmFsaWQgfiBsYWJlbHtcclxuICB0b3A6IDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzQxNThkMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5mb3JtIC5jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbmZvcm0gLmNvbnRlbnQgLmNoZWNrYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5mb3JtIC5jb250ZW50IGlucHV0e1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuZm9ybSAuY29udGVudCBsYWJlbHtcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5mb3JtIC5jb250ZW50IC5wYXNzLWxpbmt7XHJcbiAgY29sb3I6IFwiXCI7XHJcbn1cclxuZm9ybSAuZmllbGQgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgIzFkMTJiNiwgIzQxNThkMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5mb3JtIC5maWVsZCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcbmZvcm0gLnNpZ251cC1saW5re1xyXG4gIGNvbG9yOiAjMjYyNjI2O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmZvcm0gLnBhc3MtbGluayBhLFxyXG5mb3JtIC5zaWdudXAtbGluayBhe1xyXG4gIGNvbG9yOiAjNDE1OGQwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5mb3JtIC5wYXNzLWxpbmsgYTpob3ZlcixcclxuZm9ybSAuc2lnbnVwLWxpbmsgYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clogin',
                templateUrl: './clogin.component.html',
                styleUrls: ['./clogin.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
class Response {
}


/***/ }),

/***/ "./src/app/cregister/cregister.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cregister/cregister.component.ts ***!
  \**************************************************/
/*! exports provided: CregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CregisterComponent", function() { return CregisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/validate.service */ "./src/app/service/validate.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class CregisterComponent {
    constructor(AuthService, validateService, toastr, router) {
        this.AuthService = AuthService;
        this.validateService = validateService;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //require field
        if (!this.validateService.validateRegister(user)) {
            this.toastr.warning('please fill in all field');
            return false;
        }
        // validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.toastr.warning('please use a valid email');
            return false;
        }
        //register user
        this.AuthService.registerUser(user).subscribe((data) => {
            if (data.success) {
                this.toastr.success('you are now registered', 'Success');
                this.router.navigate(['/login']);
            }
            else {
                this.toastr.show('something went wrong');
                this.router.navigate(['/register']);
            }
        });
    }
}
CregisterComponent.ɵfac = function CregisterComponent_Factory(t) { return new (t || CregisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CregisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CregisterComponent, selectors: [["app-cregister"]], decls: 31, vars: 5, consts: [[1, "center"], [1, "wrapper"], [1, "title"], [3, "submit"], [1, "field"], ["type", "text", "required", "", "name", "name", 3, "ngModel", "ngModelChange"], ["type", "email", "required", "", "name", "email", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "username", 3, "ngModel", "ngModelChange"], ["type", "password", "required", "", "id", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["id", "messages"], ["type", "password", "required", "", "id", "passwordss", "name", "password", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Sign Up"]], template: function CregisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\nRegistration form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CregisterComponent_Template_form_submit_6_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CregisterComponent_Template_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CregisterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CregisterComponent_Template_input_ngModelChange_16_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CregisterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CregisterComponent_Template_input_ngModelChange_25_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::selection{\r\n  background: #4158d0;\r\n  color: #fff;\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n  width: 450px;\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  line-height: 100px;\r\n  color: #fff;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  border-radius: 15px 15px 0 0;\r\n  background: linear-gradient(-135deg, #1806bd, #1435dd);\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  padding: 10px 30px 50px 30px;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  position: relative;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 17px;\r\n  padding-left: 20px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 25px;\r\n  transition: all 0.3s ease;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{\r\n  border-color: #4158d0;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 20px;\r\n  color: #999999;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  pointer-events: none;\r\n  transform: translateY(-50%);\r\n  transition: all 0.3s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]{\r\n  top: 0%;\r\n  font-size: 16px;\r\n  color: #4158d0;\r\n  background: #fff;\r\n  transform: translateY(-50%);\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-size: 16px;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 15px;\r\n  background: red;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  color: #262626;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  padding-left: 5px;\r\n}\r\nform[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]{\r\n  color: \"\";\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  border: none;\r\n  padding-left: 0;\r\n  margin-top: -10px;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background: linear-gradient(-135deg, #1d12b6, #4158d0);\r\n  transition: all 0.3s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:active{\r\n  transform: scale(0.95);\r\n}\r\nform[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]{\r\n  color: #262626;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\nform[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #4158d0;\r\n  text-decoration: none;\r\n}\r\nform[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n  display: flex;\r\n   justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlZ2lzdGVyL2NyZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJGQUEyRjtBQUMzRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQztBQUNBOzs7Ozt3QkFLd0I7QUFDdEIsNERBQTREO0FBQzlELE1BQU07QUFDTjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLE9BQU87RUFDUCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNEQUFzRDtFQUN0RCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsMEJBQTBCO0FBQzVCO0FBR0E7RUFDRSxhQUFhO0dBQ1osdUJBQXVCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY3JlZ2lzdGVyL2NyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLyogaHRtbCxib2R5e1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjsgKi9cclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgI2M4NTBjMCwgIzQxNThkMCk7ICovXHJcbi8qIH0gKi9cclxuOjpzZWxlY3Rpb257XHJcbiAgYmFja2dyb3VuZDogIzQxNThkMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbi53cmFwcGVyIC50aXRsZXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsICMxODA2YmQsICMxNDM1ZGQpO1xyXG59XHJcbi53cmFwcGVyIGZvcm17XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDUwcHggMzBweDtcclxufVxyXG4ud3JhcHBlciBmb3JtIC5maWVsZHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLndyYXBwZXIgZm9ybSAuZmllbGQgaW5wdXR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi53cmFwcGVyIGZvcm0gLmZpZWxkIGlucHV0OmZvY3VzLFxyXG5mb3JtIC5maWVsZCBpbnB1dDp2YWxpZHtcclxuICBib3JkZXItY29sb3I6ICM0MTU4ZDA7XHJcbn1cclxuLndyYXBwZXIgZm9ybSAuZmllbGQgbGFiZWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuZm9ybSAuZmllbGQgaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuZm9ybSAuZmllbGQgaW5wdXQ6dmFsaWQgfiBsYWJlbHtcclxuICB0b3A6IDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzQxNThkMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5mb3JtIC5jb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbmZvcm0gLmNvbnRlbnQgLmNoZWNrYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5mb3JtIC5jb250ZW50IGlucHV0e1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuZm9ybSAuY29udGVudCBsYWJlbHtcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5mb3JtIC5jb250ZW50IC5wYXNzLWxpbmt7XHJcbiAgY29sb3I6IFwiXCI7XHJcbn1cclxuZm9ybSAuZmllbGQgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgIzFkMTJiNiwgIzQxNThkMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5mb3JtIC5maWVsZCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcbmZvcm0gLnNpZ251cC1saW5re1xyXG4gIGNvbG9yOiAjMjYyNjI2O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmZvcm0gLnBhc3MtbGluayBhLFxyXG5mb3JtIC5zaWdudXAtbGluayBhe1xyXG4gIGNvbG9yOiAjNDE1OGQwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5mb3JtIC5wYXNzLWxpbmsgYTpob3ZlcixcclxuZm9ybSAuc2lnbnVwLWxpbmsgYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CregisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cregister',
                templateUrl: './cregister.component.html',
                styleUrls: ['./cregister.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _service_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();
class Response {
}


/***/ }),

/***/ "./src/app/dashboad/dashboad.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashboad/dashboad.component.ts ***!
  \************************************************/
/*! exports provided: DashboadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboadComponent", function() { return DashboadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");



class DashboadComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboadComponent.ɵfac = function DashboadComponent_Factory(t) { return new (t || DashboadComponent)(); };
DashboadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboadComponent, selectors: [["app-dashboad"]], decls: 1, vars: 0, template: function DashboadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_1__["Navbar2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FkL2Rhc2hib2FkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboad',
                templateUrl: './dashboad.component.html',
                styleUrls: ['./dashboad.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/detailproduct/detailproduct.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/detailproduct/detailproduct.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailproductComponent", function() { return DetailproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class DetailproductComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailproductComponent.ɵfac = function DetailproductComponent_Factory(t) { return new (t || DetailproductComponent)(); };
DetailproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailproductComponent, selectors: [["app-detailproduct"]], decls: 73, vars: 0, consts: [[1, "text-gray-700", "body-font", "overflow-hidden"], [1, "container", "px-5", "py-24", "mx-auto"], [1, "lg:w-4/5", "mx-auto", "flex", "flex-wrap"], ["alt", "ecommerce", "src", "../../assets/f1.jfif", 1, "lg:w-1/2", "w-full", "lg:h-auto", "h-64", "object-cover", "object-center", "rounded"], [1, "lg:w-1/2", "w-full", "lg:pl-10", "lg:py-6", "mt-6", "lg:mt-0"], [1, "text-sm", "title-font", "text-gray-500", "tracking-widest"], [1, "text-gray-900", "text-3xl", "title-font", "font-medium", "mb-1"], [1, "flex", "mb-4"], [1, "flex", "items-center"], ["fill", "currentColor", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-indigo-500"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-indigo-500"], [1, "text-gray-600", "ml-3"], [1, "flex", "ml-3", "pl-3", "py-2", "border-l-2", "border-gray-200"], [1, "text-gray-500"], ["fill", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"], [1, "ml-2", "text-gray-500"], ["d", "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"], ["d", "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"], [1, "leading-relaxed"], [1, "flex", "mt-6", "items-center", "pb-5", "border-b-2", "border-gray-200", "mb-5"], [1, "flex"], [1, "mr-3"], [1, "border-2", "border-gray-300", "rounded-full", "w-6", "h-6", "focus:outline-none"], [1, "border-2", "border-gray-300", "ml-1", "bg-gray-700", "rounded-full", "w-6", "h-6", "focus:outline-none"], [1, "border-2", "border-gray-300", "ml-1", "bg-indigo-500", "rounded-full", "w-6", "h-6", "focus:outline-none"], [1, "flex", "ml-6", "items-center"], [1, "relative"], [1, "rounded", "border", "appearance-none", "border-gray-400", "py-2", "focus:outline-none", "focus:border-indigo-500", "text-base", "pl-3", "pr-10"], [1, "absolute", "right-0", "top-0", "h-full", "w-10", "text-center", "text-gray-600", "pointer-events-none", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M6 9l6 6 6-6"], [1, "title-font", "font-medium", "text-2xl", "text-gray-900"], [1, "flex", "ml-auto", "text-white", "bg-indigo-500", "border-0", "py-2", "px-6", "focus:outline-none", "hover:bg-indigo-600", "rounded"], [1, "rounded-full", "w-10", "h-10", "bg-gray-200", "p-0", "border-0", "inline-flex", "items-center", "justify-center", "text-gray-500", "ml-4"], ["d", "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"]], template: function DetailproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FLOWERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "4 Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Did you know that the rose is edible, can live for a very long time, has been mentioned in the bible and is a great source of vitamin C?. A dozen of bright red roses are gifted on special occasion such as Valentine\u2019s Day and on marriage anniversaries. The red hot roses are arranged perfectly in a bouquet, they are ready to be gifted to omeone special any time. The bouquet of red hot roses opens the way to your heart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Rs 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Add To Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHByb2R1Y3QvZGV0YWlscHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailproductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detailproduct',
                templateUrl: './detailproduct.component.html',
                styleUrls: ['./detailproduct.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/editreceive/editreceive.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editreceive/editreceive.component.ts ***!
  \******************************************************/
/*! exports provided: EditreceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreceiveComponent", function() { return EditreceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class EditreceiveComponent {
    constructor(driverService, router, sharedData) {
        this.driverService = driverService;
        this.router = router;
        this.sharedData = sharedData;
        this.userObj = {
            id: "",
            receive_item: "",
        };
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.sharedData.currentSharedData.subscribe(res => {
            this.userObj = {
                id: res['_id'],
                receive_item: res['receive_item'],
            };
            console.log(this.userObj);
        });
    }
    updateDriver() {
        this.driverService.updateDriver(this.userObj).subscribe(() => {
            //  this.getDriverDetails();
            this.router.navigate(['/receive']);
        });
    }
}
EditreceiveComponent.ɵfac = function EditreceiveComponent_Factory(t) { return new (t || EditreceiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"])); };
EditreceiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditreceiveComponent, selectors: [["app-editreceive"]], decls: 13, vars: 1, consts: [["method", "post", 1, "modal-content", 3, "submit"], [1, "container"], ["for", "name"], ["type", "text", "required", "", "name", "receive_item", 3, "ngModel", "ngModelChange"], [1, "clearfix"], ["type", "submit", "id", "submitDetails", 1, "btn"]], template: function EditreceiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditreceiveComponent_Template_form_submit_1_listener() { return ctx.updateDriver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please fill Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Received Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditreceiveComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userObj.receive_item = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.receive_item);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__["Navbar2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {font-family: Arial, Helvetica, sans-serif;background-color:rgba(19, 231, 37, 0.979); }\r\n*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #09e65e;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  opacity:1;\r\n}\r\n\r\n\r\n.signupbtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 50%; \r\n  overflow: auto; \r\n  background-color: #474e5d;\r\n  padding-top: 50px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: rgb(55, 55, 226);\r\n  margin: 5% auto 15% auto; \r\n  border: 5px solid rgb(22, 21, 21);\r\n  width: 60%; \r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 300px) {\r\n .signupbtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHJlY2VpdmUvZWRpdHJlY2VpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTSx5Q0FBeUMsQ0FBQyx5Q0FBeUMsRUFBRTtBQUMzRixHQUFHLHNCQUFzQixDQUFDO0FBSTFCLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUEscURBQXFEO0FBQ3JEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUVBLGdDQUFnQztBQUNoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBR0E7RUFDRSxTQUFTO0FBQ1g7QUFFQSx1Q0FBdUM7QUFHdkMsMkRBQTJEO0FBQzFEO0VBQ0MsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBLHNDQUFzQztBQUN0QztFQUNFLGFBQWE7QUFDZjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFdBQVcsRUFBRSxnQkFBZ0I7RUFDN0IsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QixFQUFFLHNEQUFzRDtFQUNoRixpQ0FBaUM7RUFDakMsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTtBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBLDZFQUE2RTtBQUM3RTtDQUNDO0tBQ0ksV0FBVztFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lZGl0cmVjZWl2ZS9lZGl0cmVjZWl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO2JhY2tncm91bmQtY29sb3I6cmdiYSgxOSwgMjMxLCAzNywgMC45NzkpOyB9XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuXHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDllNjVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuXHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuIC5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDUwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA1NSwgMjI2KTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjIsIDIxLCAyMSk7XHJcbiAgd2lkdGg6IDYwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4gXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditreceiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editreceive',
                templateUrl: './editreceive.component.html',
                styleUrls: ['./editreceive.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"] }]; }, null); })();


/***/ }),

/***/ "./src/app/editsale/editsale.component.ts":
/*!************************************************!*\
  !*** ./src/app/editsale/editsale.component.ts ***!
  \************************************************/
/*! exports provided: EditsaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsaleComponent", function() { return EditsaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class EditsaleComponent {
    constructor(driverService, router, sharedData) {
        this.driverService = driverService;
        this.router = router;
        this.sharedData = sharedData;
        this.userObj = {
            id: "",
            sold_quantity: "",
            date: "",
        };
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.sharedData.currentSharedData.subscribe(res => {
            this.userObj = {
                id: res['_id'],
                sold_quantity: res['sold_quantity'],
                date: res['date'],
            };
            console.log(this.userObj);
        });
    }
    updateDriver() {
        this.driverService.updateDriver(this.userObj).subscribe(() => {
            //  this.getDriverDetails();
            this.router.navigate(['/sale']);
        });
    }
}
EditsaleComponent.ɵfac = function EditsaleComponent_Factory(t) { return new (t || EditsaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"])); };
EditsaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditsaleComponent, selectors: [["app-editsale"]], decls: 17, vars: 2, consts: [["method", "post", 1, "modal-content", 3, "submit"], [1, "container"], ["for", "name"], ["type", "text", "required", "", "name", "sold_quantity", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "required", "", "name", "date", 3, "ngModel", "ngModelChange"], [1, "clearfix"], ["type", "submit", "id", "submitDetails", 1, "btn"]], template: function EditsaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditsaleComponent_Template_form_submit_1_listener() { return ctx.updateDriver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please fill Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sold Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditsaleComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userObj.sold_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditsaleComponent_Template_input_ngModelChange_12_listener($event) { return ctx.userObj.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.sold_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.date);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__["Navbar2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {font-family: Arial, Helvetica, sans-serif;background-color:rgba(19, 231, 37, 0.979); }\r\n*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #09e65e;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  opacity:1;\r\n}\r\n\r\n\r\n.signupbtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 50%; \r\n  overflow: auto; \r\n  background-color: #474e5d;\r\n  padding-top: 50px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: rgb(55, 55, 226);\r\n  margin: 5% auto 15% auto; \r\n  border: 5px solid rgb(22, 21, 21);\r\n  width: 60%; \r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 300px) {\r\n .signupbtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHNhbGUvZWRpdHNhbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTSx5Q0FBeUMsQ0FBQyx5Q0FBeUMsRUFBRTtBQUMzRixHQUFHLHNCQUFzQixDQUFDO0FBSTFCLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUEscURBQXFEO0FBQ3JEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUVBLGdDQUFnQztBQUNoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBR0E7RUFDRSxTQUFTO0FBQ1g7QUFFQSx1Q0FBdUM7QUFHdkMsMkRBQTJEO0FBQzFEO0VBQ0MsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBLHNDQUFzQztBQUN0QztFQUNFLGFBQWE7QUFDZjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFdBQVcsRUFBRSxnQkFBZ0I7RUFDN0IsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QixFQUFFLHNEQUFzRDtFQUNoRixpQ0FBaUM7RUFDakMsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTtBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBLDZFQUE2RTtBQUM3RTtDQUNDO0tBQ0ksV0FBVztFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lZGl0c2FsZS9lZGl0c2FsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO2JhY2tncm91bmQtY29sb3I6cmdiYSgxOSwgMjMxLCAzNywgMC45NzkpOyB9XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuXHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDllNjVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuXHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIHNpZ251cCBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuIC5zaWdudXBidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDUwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA1NSwgMjI2KTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjIsIDIxLCAyMSk7XHJcbiAgd2lkdGg6IDYwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4gXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditsaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editsale',
                templateUrl: './editsale.component.html',
                styleUrls: ['./editsale.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 20, vars: 0, consts: [[1, "center"], ["id", "site-socials", 1, "no-padding", "white-bg"], [1, "site-socials", "inner", "no-padding"], ["data-animation", "fadeInLeft", "data-animation-delay", "300", 1, "socials", "animated"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "social", 2, "margin", "10px"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/login?lang=en", "target", "_blank", 1, "social", 2, "margin", "10px"], [1, "fa", "fa-twitter"], ["href", "https://www.instagram.com/accounts/login/?hl=en", 1, "social", 2, "margin", "10px"], [1, "fa", "fa-instagram"], ["href", "#", "target", "_blank", 1, "social", 2, "margin", "10px"], [1, "fa", "fa-youtube"], ["href", "https://aboutme.google.com/u/0/?referer=gplus", "target", "_blank", 1, "social", 2, "margin", "10px"], [1, "fa", "fa-google-plus"], ["id", "footer", 1, "footer"], [1, "copyright", "normal"], [1, "colored"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Flower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center[_ngcontent-%COMP%]{\r\n    display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    \r\n    padding:45px;\r\n    text-align: center;\r\n    background: #191919;\r\n    background:#222;\r\n}\r\n\r\n\r\n.footer[_ngcontent-%COMP%]   h2.company-name[_ngcontent-%COMP%]{\r\n    margin-top:0;\r\n    padding-top:0;\r\n    font-size:35px;\r\n}\r\n\r\n\r\n.footer[_ngcontent-%COMP%]   p.copyright[_ngcontent-%COMP%]{\r\n    margin-bottom:0;\r\n    padding-bottom:0;\r\n    padding-top:15px;\r\n    color:#999;\r\n    font-size:14px;\r\n}\r\n\r\n\r\n.footer[_ngcontent-%COMP%]   p.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color:#8BC3A3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmLHVCQUF1QjtBQUN6Qjs7O0FBR0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvb3RlcntcclxuICAgIFxyXG4gICAgcGFkZGluZzo0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIGJhY2tncm91bmQ6IzIyMjtcclxufVxyXG5cclxuLmZvb3RlciBoMi5jb21wYW55LW5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgZm9udC1zaXplOjM1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgcC5jb3B5cmlnaHR7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgIGNvbG9yOiM5OTk7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG5cclxuLmZvb3RlciBwLmNvcHlyaWdodCBhOmhvdmVye1xyXG4gICAgY29sb3I6IzhCQzNBMztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 0, consts: [[1, "logo"], ["href", "#", 1, "active"], ["href", "#"], [1, "fa", "fa-caret-down"], ["routerLink", "/login"], ["routerLink", "/alogin"], ["routerLink", "/register"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flowers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n  font-family: sans-serif;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 33px;\r\n  font-weight: bold;\r\n  line-height: 70px;\r\n  padding-left: 110px;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  height: 70px;\r\n  background: #063247;\r\n  box-shadow: 0 3px 15px rgba(0,0,0,.4);\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-right: 30px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: white;\r\n  display: block;\r\n  padding: 0 15px;\r\n  line-height: 70px;\r\n  font-size: 20px;\r\n  background: #063247;\r\n  transition: .5s;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n  color: #23dbdb;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 85px;\r\n  border-top: 3px solid #23dbdb;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]{\r\n  top: 70px;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: .3s linear;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  display: list-item;\r\n  position: relative;\r\n  border: 1px solid #042331;\r\n  border-top: none;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  line-height: 50px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  border-top: none;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: -70px;\r\n  left: 150px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-left: 45px;\r\n}\r\nsection[_ngcontent-%COMP%]{\r\n  background: url();\r\n  background-position: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5uYXYgLmxvZ297XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogNzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xyXG59XHJcbm5hdntcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA2MzI0NztcclxuICBib3gtc2hhZG93OiAwIDNweCAxNXB4IHJnYmEoMCwwLDAsLjQpO1xyXG59XHJcbm5hdiB1bHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbm5hdiB1bCBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxubmF2IHVsIGxpIGF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBsaW5lLWhlaWdodDogNzBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA2MzI0NztcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxubmF2IHVsIGxpIGE6aG92ZXIsXHJcbm5hdiB1bCBsaSBhLmFjdGl2ZXtcclxuICBjb2xvcjogIzIzZGJkYjtcclxufVxyXG5uYXYgdWwgdWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODVweDtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzIzZGJkYjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5uYXYgdWwgbGk6aG92ZXIgPiB1bHtcclxuICB0b3A6IDcwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IC4zcyBsaW5lYXI7XHJcbn1cclxubmF2IHVsIHVsIGxpe1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDIzMzE7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5uYXYgdWwgdWwgbGkgYXtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5uYXYgdWwgdWwgdWx7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5uYXYgdWwgdWwgdWwgbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTcwcHg7XHJcbiAgbGVmdDogMTUwcHg7XHJcbn1cclxubmF2IHVsIHVsIGxpIGEgaXtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxufVxyXG5zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6IHVybCgpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mainpage");
    } }, directives: [_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__["MainpageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/itemlist/itemlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/itemlist/itemlist.component.ts ***!
  \************************************************/
/*! exports provided: ItemlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemlistComponent", function() { return ItemlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ItemlistComponent {
    constructor() { }
    ngOnInit() {
    }
}
ItemlistComponent.ɵfac = function ItemlistComponent_Factory(t) { return new (t || ItemlistComponent)(); };
ItemlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemlistComponent, selectors: [["app-itemlist"]], decls: 0, vars: 0, template: function ItemlistComponent_Template(rf, ctx) { }, styles: [".center[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n \r\n*[_ngcontent-%COMP%]{\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n \r\n.table[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n \r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n  padding:12px 15px;\r\n  border:1px solid #ddd;\r\n  text-align: center;\r\n  font-size:16px;\r\n}\r\n\r\n \r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: darkblue;\r\n\tcolor:#ffffff;\r\n}\r\n\r\n \r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n \r\n\r\n\r\n \r\n@media(max-width: 500px){\r\n\t.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\tmargin-bottom:15px;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\ttext-align: right;\r\n\t\tpadding-left: 50%;\r\n\t\ttext-align: right;\r\n\t\tposition: relative;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before{\r\n\t\tcontent: attr(data-label);\r\n\t\tposition: absolute;\r\n\t\tleft:0;\r\n\t\twidth: 50%;\r\n\t\tpadding-left:15px;\r\n\t\tfont-size:15px;\r\n\t\tfont-weight: bold;\r\n\t\ttext-align: left;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbWxpc3QvaXRlbWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUdBO0NBQ0Msc0JBQXNCO0FBQ3ZCOzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtBQUNkOzs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7O0FBRUEsYUFBYTs7O0FBRWI7Q0FDQztFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9pdGVtbGlzdC9pdGVtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuIFxyXG4qe1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4udGFibGUgdGQsLnRhYmxlIHRoe1xyXG4gIHBhZGRpbmc6MTJweCAxNXB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi8qcmVzcG9uc2l2ZSovXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcblx0LnRhYmxlIHRoZWFke1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50YWJsZSwgLnRhYmxlIHRib2R5LCAudGFibGUgdHIsIC50YWJsZSB0ZHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC50YWJsZSB0cntcclxuXHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHR9XHJcblx0LnRhYmxlIHRke1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDUwJTtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQudGFibGUgdGQ6OmJlZm9yZXtcclxuXHRcdGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0XHRmb250LXNpemU6MTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-itemlist',
                templateUrl: './itemlist.component.html',
                styleUrls: ['./itemlist.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class MainpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainpageComponent.ɵfac = function MainpageComponent_Factory(t) { return new (t || MainpageComponent)(); };
MainpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainpageComponent, selectors: [["app-mainpage"]], decls: 168, vars: 0, consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "width", "100%", "height", "600px"], ["src", "../../assets/slider.jpg", "alt", "First slide", 1, "d-block", "w-100", 2, "height", "600px"], [1, "carousel-item", 2, "width", "100%", "height", "600px"], ["src", "../../assets/slider2.jpg", "alt", "Second slide", 1, "d-block", "w-100", 2, "height", "600px"], ["src", "../../assets/slider3.jpg", "alt", "Third slide", 1, "d-block", "w-100", 2, "height", "600px"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "center"], [1, "col-lg-9", "col-md-6", "col-6"], [1, "header_right_info"], [1, "search_container"], ["action", "#"], [1, "hover_category"], ["name", "select", "id", "categori1", 1, "select_option"], ["selected", "", "value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "search_box"], ["placeholder", "Search product...", "type", "text"], ["type", "submit"], [1, "fa", "fa-check-circle"], [1, "main", 2, "margin-bottom", "240px"], [1, "card"], [1, "image"], ["src", "../../assets/f1.jfif", "routerLink", "/details"], [1, "title"], [1, "des"], ["href", "", 1, "btn-round", "mr-2"], [1, "fa", "fa-shopping-cart"], [1, "btns"], ["src", "../../assets/f1.jfif"], ["src", "../../assets/f2.jfif"]], template: function MainpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "All Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sunflower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Birthday flower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Anniversary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Plants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Most Popular Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Rose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "code -1111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "price - Rs 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Rose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "code -1111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "price - Rs 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Rose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "code -1111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "price - Rs 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Rose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "code -1111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "price - Rs 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Sun Flower ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "code -3333");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "price -Rs 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Sun Flower ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "code -3333");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "price -Rs 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Sun Flower ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "code -3333");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "price -Rs 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Sun Flower ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "code -3333");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "price -Rs 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n   }\r\n   body[_ngcontent-%COMP%]{\r\n    font-family: arial;\r\n   }\r\n   .main[_ngcontent-%COMP%]{\r\n   \r\n    margin: 2%;\r\n   }\r\n   .card[_ngcontent-%COMP%]{\r\n        width: 20%;\r\n        display: inline-block;\r\n        box-shadow: 2px 2px 20px black;\r\n        border-radius: 5px; \r\n        margin: 2%;\r\n       }\r\n   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n     width: 100%;\r\n     border-top-right-radius: 5px;\r\n     border-top-left-radius: 5px;\r\n     \r\n   \r\n    \r\n    }\r\n   .title[_ngcontent-%COMP%]{\r\n    \r\n     text-align: center;\r\n     padding: 10px;\r\n     \r\n    }\r\n   h1[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n    }\r\n   .des[_ngcontent-%COMP%]{\r\n     padding: 3px;\r\n     text-align: center;\r\n    \r\n     padding-top: 10px;\r\n           border-bottom-right-radius: 5px;\r\n     border-bottom-left-radius: 5px;\r\n   }\r\n   button[_ngcontent-%COMP%]{\r\n     margin-top: 40px;\r\n     margin-bottom: 10px;\r\n     background-color: white;\r\n     border: 1px solid black;\r\n     border-radius: 5px;\r\n     padding:10px;\r\n   }\r\n   button[_ngcontent-%COMP%]:hover{\r\n     background-color: black;\r\n     color: white;\r\n     transition: .5s;\r\n     cursor: pointer;\r\n   }\r\n   \r\n   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  height: 40px;\r\n  border: none;\r\n  outline: none;\r\n  background:#444;\r\n  border-radius: 30px;\r\n  color:whitesmoke;\r\n  font-size: 16px;\r\n  padding-left: 5px;\r\n  padding-right: 40px;\r\n}\r\n   .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  width:40px;\r\n  height: 40px;\r\n  border-radius: 30px;\r\n  border:none;\r\n  position: absolute;\r\n  top:0;\r\n  right: 0;\r\n  transform: scale(0.9);\r\n}\r\n   .search-box[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n  position: relative;\r\n}\r\n   \r\n   .table-filter[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\tmargin-left: 15px;\r\n}\r\n   .table-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .table-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n\theight: 34px;\r\n\tborder-radius: 3px;\r\n\tborder-color: #ddd;\r\n\tbox-shadow: none;\r\n}\r\n   .table-filter[_ngcontent-%COMP%] {\r\n\tpadding: 5px 0 10px;\r\n\tborder-bottom: 1px solid #e9e9e9;\r\n\tmargin-bottom: 1px;\r\n}\r\n   .table-filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n\theight: 34px;\r\n}\r\n   .table-filter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n\tmargin-left: 10px;\r\n}\r\n   .table-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .table-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tmargin-left: 5px;\r\n}\r\n   .table-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\twidth: 200px;\r\n\tdisplay: inline-block;\r\n}\r\n   .filter-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\r\n\twidth: 110px;\r\n}\r\n   .filter-icon[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\tmargin-top: 1px;\r\n}\r\n   .filter-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\topacity: 0.7;\r\n}\r\n   .center[_ngcontent-%COMP%]{\r\n  display: flex;\r\n   justify-content: center;\r\n}\r\n   \r\n   .header_right_info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .header_right_info[_ngcontent-%COMP%] {\r\n      justify-content: center;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .header_right_info[_ngcontent-%COMP%] {\r\n      justify-content: center;\r\n    }\r\n  }\r\n   .search_container[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n   .search_container[_ngcontent-%COMP%] {\r\n    margin-right: 138px;\r\n  }\r\n   @media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n    .search_container[_ngcontent-%COMP%] {\r\n      margin-right: 40px;\r\n    }\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .search_container[_ngcontent-%COMP%] {\r\n      display: none;\r\n      margin-right: 0;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .search_container[_ngcontent-%COMP%] {\r\n      margin-right: 0;\r\n      display: none;\r\n    }\r\n  }\r\n   .search_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-radius: 30px;\r\n    border: 1px solid #e1e1e1;\r\n    background: #fff;\r\n    width: 520px;\r\n  }\r\n   @media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n    .search_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n      width: 481px;\r\n    }\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .search_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n      flex-direction: column-reverse;\r\n      border: 0;\r\n      align-items: center;\r\n      width: 100%;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .search_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n      flex-direction: column-reverse;\r\n      border: 0;\r\n      align-items: center;\r\n      width: 100%;\r\n    }\r\n  }\r\n   .hover_category[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n   .hover_category[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    width: 1px;\r\n    height: 16px;\r\n    background: #a1a1a1;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -8px;\r\n    right: 0;\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .hover_category[_ngcontent-%COMP%]::before {\r\n      display: none;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .hover_category[_ngcontent-%COMP%]::before {\r\n      display: none;\r\n    }\r\n  }\r\n   .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: inherit;\r\n    height: 54px;\r\n    line-height: 54px;\r\n    padding-left: 25px;\r\n    padding-right: 35px;\r\n    font-size: 14px;\r\n  }\r\n   @media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n    .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\r\n      padding-right: 28px;\r\n    }\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\r\n      height: 34px;\r\n      line-height: 35px;\r\n      font-size: 13px;\r\n      padding-left: 50px;\r\n      padding-right: 51px;\r\n      border: 1px solid #e1e1e1;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%] {\r\n      height: 34px;\r\n      line-height: 35px;\r\n      font-size: 13px;\r\n      padding-left: 50px;\r\n      padding-right: 51px;\r\n      border: 1px solid #e1e1e1;\r\n    }\r\n  }\r\n   .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]::after {\r\n    top: 54%;\r\n    right: 13px;\r\n  }\r\n   .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]   ul.list[_ngcontent-%COMP%] {\r\n    max-height: 300px;\r\n    overflow: auto;\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]   ul.list[_ngcontent-%COMP%] {\r\n      max-height: 220px;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .hover_category[_ngcontent-%COMP%]   .select_option[_ngcontent-%COMP%]   ul.list[_ngcontent-%COMP%] {\r\n      max-height: 220px;\r\n    }\r\n  }\r\n   .search_box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .search_box[_ngcontent-%COMP%] {\r\n      border: 1px solid #e1e1e1;\r\n      margin-bottom: 25px;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .search_box[_ngcontent-%COMP%] {\r\n      border: 1px solid #e1e1e1;\r\n      margin-bottom: 25px;\r\n    }\r\n  }\r\n   .search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    \r\n    color: #222222;\r\n  }\r\n   .search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\r\n  \r\n    color: #222222;\r\n  }\r\n   .search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  \r\n    color: #222222;\r\n  }\r\n   .search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\r\n   \r\n    color: #222222;\r\n  }\r\n   .search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: inherit;\r\n    width: 100%;\r\n    height: 54px;\r\n    color: #222222;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    padding: 0 53px 0 20px;\r\n    opacity: 0.7;\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      font-size: 12px;\r\n      padding: 0 54px 0 10px;\r\n      width: 100%;\r\n      height: 34px;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      font-size: 12px;\r\n      padding: 0 54px 0 10px;\r\n      width: 100%;\r\n      height: 34px;\r\n    }\r\n  }\r\n   .search_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    height: 100%;\r\n    right: 15px;\r\n    font-weight: 400;\r\n    font-size: 25px;\r\n    border-radius: 0 5px 5px 0;\r\n    transition: 0.3s;\r\n    background: inherit;\r\n  }\r\n   .search_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    color: #79a206;\r\n  }\r\n   @media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .search_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      min-width: 55px;\r\n      padding: 0 6px;\r\n      top: 0;\r\n      bottom: 0;\r\n      right: 0;\r\n      font-size: 20px;\r\n    }\r\n  }\r\n   @media only screen and (max-width: 767px) {\r\n    .search_box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      min-width: 55px;\r\n      padding: 0 6px;\r\n      top: 0;\r\n      bottom: 0;\r\n      right: 0;\r\n      font-size: 20px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0dBQ2I7R0FDQTtJQUNDLGtCQUFrQjtHQUNuQjtHQUNBOztJQUVDLFVBQVU7R0FDWDtHQUVBO1FBQ0ssVUFBVTtRQUNWLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLFVBQVU7T0FDWDtHQUVKO0tBQ0UsV0FBVztLQUNYLDRCQUE0QjtLQUM1QiwyQkFBMkI7Ozs7SUFJNUI7R0FFRDs7S0FFRSxrQkFBa0I7S0FDbEIsYUFBYTs7SUFFZDtHQUVEO0tBQ0UsZUFBZTtJQUNoQjtHQUVEO0tBQ0UsWUFBWTtLQUNaLGtCQUFrQjs7S0FFbEIsaUJBQWlCO1dBQ1gsK0JBQStCO0tBQ3JDLDhCQUE4QjtHQUNoQztHQUNBO0tBQ0UsZ0JBQWdCO0tBQ2hCLG1CQUFtQjtLQUNuQix1QkFBdUI7S0FDdkIsdUJBQXVCO0tBQ3ZCLGtCQUFrQjtLQUNsQixZQUFZO0dBQ2Q7R0FDQTtLQUNFLHVCQUF1QjtLQUN2QixZQUFZO0tBQ1osZUFBZTtLQUNmLGVBQWU7R0FDakI7R0FHSCxTQUFTO0dBRVQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7R0FDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxRQUFRO0VBQ1IscUJBQXFCO0FBQ3ZCO0dBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCO0dBSUEsS0FBSztHQUdMO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtHQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0dBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtBQUNuQjtHQUNBO0NBQ0MsWUFBWTtBQUNiO0dBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCO0dBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0FBQ2pCO0dBQ0E7Q0FDQyxZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCO0dBQ0E7Q0FDQyxZQUFZO0FBQ2I7R0FDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCO0dBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtBQUNiO0dBRUE7RUFDRSxhQUFhO0dBQ1osdUJBQXVCO0FBQzFCO0dBRUEsZUFBZTtHQUlkO0lBQ0csYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7R0FDQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0VBQ0Y7R0FDQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0VBQ0Y7R0FFQTtJQUNFLGNBQWM7RUFDaEI7R0FFQTtJQUNFLG1CQUFtQjtFQUNyQjtHQUNBO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjtHQUNBO0lBQ0U7TUFDRSxhQUFhO01BQ2IsZUFBZTtJQUNqQjtFQUNGO0dBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixhQUFhO0lBQ2Y7RUFDRjtHQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtHQUNBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7RUFDRjtHQUNBO0lBQ0U7TUFDRSw4QkFBOEI7TUFDOUIsU0FBUztNQUNULG1CQUFtQjtNQUNuQixXQUFXO0lBQ2I7RUFDRjtHQUNBO0lBQ0U7TUFDRSw4QkFBOEI7TUFDOUIsU0FBUztNQUNULG1CQUFtQjtNQUNuQixXQUFXO0lBQ2I7RUFDRjtHQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0dBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsUUFBUTtFQUNWO0dBQ0E7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGO0dBQ0E7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGO0dBQ0E7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0dBQ0E7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGO0dBQ0E7SUFDRTtNQUNFLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIseUJBQXlCO0lBQzNCO0VBQ0Y7R0FDQTtJQUNFO01BQ0UsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQix5QkFBeUI7SUFDM0I7RUFDRjtHQUNBO0lBQ0UsUUFBUTtJQUNSLFdBQVc7RUFDYjtHQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7R0FDQTtJQUNFO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0Y7R0FDQTtJQUNFO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0Y7R0FHRjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7R0FDQTtJQUNFO01BQ0UseUJBQXlCO01BQ3pCLG1CQUFtQjtJQUNyQjtFQUNGO0dBQ0E7SUFDRTtNQUNFLHlCQUF5QjtNQUN6QixtQkFBbUI7SUFDckI7RUFDRjtHQUNDOztJQUVDLGNBQWM7RUFDaEI7R0FDQTs7SUFFRSxjQUFjO0VBQ2hCO0dBQ0E7O0lBRUUsY0FBYztFQUNoQjtHQUNBOztJQUVFLGNBQWM7RUFDaEI7R0FDQTtJQUNFLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkO0dBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixzQkFBc0I7TUFDdEIsV0FBVztNQUNYLFlBQVk7SUFDZDtFQUNGO0dBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixzQkFBc0I7TUFDdEIsV0FBVztNQUNYLFlBQVk7SUFDZDtFQUNGO0dBQ0E7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBRTFCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7R0FDQTtJQUNFLGNBQWM7RUFDaEI7R0FDQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCxNQUFNO01BQ04sU0FBUztNQUNULFFBQVE7TUFDUixlQUFlO0lBQ2pCO0VBQ0Y7R0FDQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCxNQUFNO01BQ04sU0FBUztNQUNULFFBQVE7TUFDUixlQUFlO0lBQ2pCO0VBQ0Y7R0FHQyxlQUFlIiwiZmlsZSI6InNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbip7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgfVxyXG4gICBib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICB9XHJcbiAgIC5tYWlue1xyXG4gICBcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jYXJke1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gICAgICAgIG1hcmdpbjogMiU7XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICAuaW1hZ2UgaW1ne1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgIFxyXG4gICBcclxuICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgLnRpdGxle1xyXG4gICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICBoMXtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAuZGVze1xyXG4gICAgIHBhZGRpbmc6IDNweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgfVxyXG4gICBidXR0b257XHJcbiAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgIH1cclxuICAgYnV0dG9uOmhvdmVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB9XHJcblxyXG5cclxuLyogdnZ2diAqL1xyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDojNDQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgY29sb3I6d2hpdGVzbW9rZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxufVxyXG4uc2VhcmNoLWJveCBidXR0b257XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOjQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbiAgZmxleDogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogICovXHJcblxyXG5cclxuLnRhYmxlLWZpbHRlciAuZmlsdGVyLWdyb3VwIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLnRhYmxlLWZpbHRlciBpbnB1dCwgLnRhYmxlLWZpbHRlciBzZWxlY3Qge1xyXG5cdGhlaWdodDogMzRweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLnRhYmxlLWZpbHRlciB7XHJcblx0cGFkZGluZzogNXB4IDAgMTBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxuXHRtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuLnRhYmxlLWZpbHRlciAuYnRuIHtcclxuXHRoZWlnaHQ6IDM0cHg7XHJcbn1cclxuLnRhYmxlLWZpbHRlciBsYWJlbCB7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4udGFibGUtZmlsdGVyIHNlbGVjdCwgLnRhYmxlLWZpbHRlciBpbnB1dCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLnRhYmxlLWZpbHRlciBpbnB1dCB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZmlsdGVyLWdyb3VwIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG5cdHdpZHRoOiAxMTBweDtcclxufVxyXG4uZmlsdGVyLWljb24ge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuLmZpbHRlci1pY29uIGkge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRvcGFjaXR5OiAwLjc7XHJcbn1cdFxyXG5cclxuLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogc2VhcmNoIGJveCAqL1xyXG5cclxuXHJcblxyXG4gLmhlYWRlcl9yaWdodF9pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuaGVhZGVyX3JpZ2h0X2luZm8ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmhlYWRlcl9yaWdodF9pbmZvIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zZWFyY2hfY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTM4cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIC5zZWFyY2hfY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5zZWFyY2hfY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlYXJjaF9jb250YWluZXIgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDUyMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuc2VhcmNoX2NvbnRhaW5lciBmb3JtIHtcclxuICAgICAgd2lkdGg6IDQ4MXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5zZWFyY2hfY29udGFpbmVyIGZvcm0ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5zZWFyY2hfY29udGFpbmVyIGZvcm0ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaG92ZXJfY2F0ZWdvcnkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmhvdmVyX2NhdGVnb3J5OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTFhMWExO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmhvdmVyX2NhdGVnb3J5OjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuaG92ZXJfY2F0ZWdvcnk6OmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ob3Zlcl9jYXRlZ29yeSAuc2VsZWN0X29wdGlvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuaG92ZXJfY2F0ZWdvcnkgLnNlbGVjdF9vcHRpb24ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5ob3Zlcl9jYXRlZ29yeSAuc2VsZWN0X29wdGlvbiB7XHJcbiAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1MXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuaG92ZXJfY2F0ZWdvcnkgLnNlbGVjdF9vcHRpb24ge1xyXG4gICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTFweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIH1cclxuICB9XHJcbiAgLmhvdmVyX2NhdGVnb3J5IC5zZWxlY3Rfb3B0aW9uOjphZnRlciB7XHJcbiAgICB0b3A6IDU0JTtcclxuICAgIHJpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICAuaG92ZXJfY2F0ZWdvcnkgLnNlbGVjdF9vcHRpb24gdWwubGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5ob3Zlcl9jYXRlZ29yeSAuc2VsZWN0X29wdGlvbiB1bC5saXN0IHtcclxuICAgICAgbWF4LWhlaWdodDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ob3Zlcl9jYXRlZ29yeSAuc2VsZWN0X29wdGlvbiB1bC5saXN0IHtcclxuICAgICAgbWF4LWhlaWdodDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfSAgXHJcblxyXG4gIFxyXG4uc2VhcmNoX2JveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc2VhcmNoX2JveCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5zZWFyY2hfYm94IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICB9IFxyXG4gICAuc2VhcmNoX2JveCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuICAuc2VhcmNoX2JveCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgXHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICB9XHJcbiAgLnNlYXJjaF9ib3ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuICAuc2VhcmNoX2JveCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgXHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICB9XHJcbiAgLnNlYXJjaF9ib3ggaW5wdXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogMCA1M3B4IDAgMjBweDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc2VhcmNoX2JveCBpbnB1dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMCA1NHB4IDAgMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzRweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNlYXJjaF9ib3ggaW5wdXQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTRweCAwIDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWFyY2hfYm94IGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIH1cclxuICAuc2VhcmNoX2JveCBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICM3OWEyMDY7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLnNlYXJjaF9ib3ggYnV0dG9uIHtcclxuICAgICAgbWluLXdpZHRoOiA1NXB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5zZWFyY2hfYm94IGJ1dHRvbiB7XHJcbiAgICAgIG1pbi13aWR0aDogNTVweDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAgXHJcblxyXG4gICAvKiBlbmQgc2VhcmNoICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mainpage',
                templateUrl: './mainpage.component.html',
                styleUrls: ['./mainpage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





class NavbarComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    onLogoutClick() {
        this.authService.logout();
        this.toastr.success('you are logged out');
        this.router.navigate(['/login']);
        return false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 29, vars: 1, consts: [[1, "head"], [1, "user", 2, "text-align", "center", "font-size", "20px"], ["routerLink", "/main", 1, "logo"], ["routerLink", "/about"], ["routerLink", "/cart"], [1, "fa", "fa-shopping-cart"], ["href", "#"], [1, "fa", "fa-user"], ["routerLink", "/login"], ["routerLink", "/alogin"], [3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Flowers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_27_listener() { return ctx.onLogoutClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome To : ", ctx.user.name, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    text-decoration: none;\r\n  }\r\n  body[_ngcontent-%COMP%]{\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 33px;\r\n    font-weight: bold;\r\n    line-height: 70px;\r\n    padding-left: 110px;\r\n  }\r\n  nav[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    background: #063247;\r\n    box-shadow: 0 3px 15px rgba(0,0,0,.4);\r\n    z-index: 8;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-right: 30px;\r\n    z-index: 8;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    z-index: 8;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n    display: block;\r\n    padding: 0 15px;\r\n    line-height: 70px;\r\n    font-size: 20px;\r\n    background: #063247;\r\n    transition: .5s;\r\n    z-index: 8;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n    color: #23dbdb;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 85px;\r\n    border-top: 3px solid #23dbdb;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    z-index: 8;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]{\r\n    top: 70px;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: .3s linear;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    display: list-item;\r\n    position: relative;\r\n    border: 1px solid #042331;\r\n    border-top: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    line-height: 50px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    border-top: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: -70px;\r\n    left: 150px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-left: 45px;\r\n  }\r\n  section[_ngcontent-%COMP%]{\r\n    background: url();\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 100vh;\r\n  }\r\n  \r\n  .head[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 100%;\r\n    background-color: rgb(235, 228, 236);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUUsS0FBSztFQUNMO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHlCQUFpQjtZQUFqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0VBQ1o7RUFDQTs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsYUFBYTtFQUNmO0VBQ0EsZUFBZTtFQUNmO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7RUFDdEMiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgLyogICovXHJcbiAgKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIG5hdiAubG9nb3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xyXG4gIH1cclxuICBuYXZ7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDYzMjQ3O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTVweCByZ2JhKDAsMCwwLC40KTtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgfVxyXG4gIG5hdiB1bHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgfVxyXG4gIG5hdiB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgfVxyXG4gIG5hdiB1bCBsaSBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNjMyNDc7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gIH1cclxuICBuYXYgdWwgbGkgYTpob3ZlcixcclxuICBuYXYgdWwgbGkgYS5hY3RpdmV7XHJcbiAgICBjb2xvcjogIzIzZGJkYjtcclxuICB9XHJcbiAgbmF2IHVsIHVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4NXB4O1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMyM2RiZGI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogODtcclxuICB9XHJcbiAgbmF2IHVsIGxpOmhvdmVyID4gdWx7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXI7XHJcbiAgfVxyXG4gIG5hdiB1bCB1bCBsaXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNDIzMzE7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxuICBuYXYgdWwgdWwgbGkgYXtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBuYXYgdWwgdWwgdWx7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxuICBuYXYgdWwgdWwgdWwgbGl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC03MHB4O1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbiAgfVxyXG4gIG5hdiB1bCB1bCBsaSBhIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICB9XHJcbiAgc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC8qIHRvcCBoZWFkZXIgKi9cclxuICAuaGVhZHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjI4LCAyMzYpO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar2/navbar2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navbar2/navbar2.component.ts ***!
  \**********************************************/
/*! exports provided: Navbar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar2Component", function() { return Navbar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





class Navbar2Component {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    onLogoutClick() {
        this.authService.logout();
        this.toastr.success('you are logged out');
        this.router.navigate(['/alogin']);
        return false;
    }
}
Navbar2Component.ɵfac = function Navbar2Component_Factory(t) { return new (t || Navbar2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
Navbar2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Navbar2Component, selectors: [["app-navbar2"]], decls: 28, vars: 0, consts: [[1, "head"], [2, "text-align", "center", "font-size", "20px"], ["routerLink", "/admin", 1, "logo"], ["routerLink", "/admin"], ["routerLink", "/receive"], ["routerLink", "/sale"], ["routerLink", "/setting"], ["routerLink", "/order"], [3, "click"]], template: function Navbar2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome To Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Flowers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "DASHBOARD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RECEIVED ITEM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SALES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ITEM LIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ORDER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Navbar2Component_Template_a_click_26_listener() { return ctx.onLogoutClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    text-decoration: none;\r\n  }\r\n  body[_ngcontent-%COMP%]{\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 33px;\r\n    font-weight: bold;\r\n    line-height: 70px;\r\n    padding-left: 110px;\r\n  }\r\n  nav[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    background: #063247;\r\n    box-shadow: 0 3px 15px rgba(0,0,0,.4);\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-right: 30px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n    display: block;\r\n    padding: 0 15px;\r\n    line-height: 70px;\r\n    font-size: 20px;\r\n    background: #063247;\r\n    transition: .5s;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n    color: #23dbdb;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 85px;\r\n    border-top: 3px solid #23dbdb;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]{\r\n    top: 70px;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: .3s linear;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    display: list-item;\r\n    position: relative;\r\n    border: 1px solid #042331;\r\n    border-top: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    line-height: 50px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    border-top: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: -70px;\r\n    left: 150px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-left: 45px;\r\n  }\r\n  section[_ngcontent-%COMP%]{\r\n    background: url();\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 100vh;\r\n  }\r\n  .head[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 100%;\r\n    background-color: rgb(235, 228, 236);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyMi9uYXZiYXIyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBR0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjtFQUNBOztJQUVFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7RUFDdEMiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIyL25hdmJhcjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG5cclxuICAqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGJvZHl7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgbmF2IC5sb2dve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbiAgfVxyXG4gIG5hdntcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNjMyNDc7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxNXB4IHJnYmEoMCwwLDAsLjQpO1xyXG4gIH1cclxuICBuYXYgdWx7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIG5hdiB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgbmF2IHVsIGxpIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzA2MzI0NztcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICB9XHJcbiAgbmF2IHVsIGxpIGE6aG92ZXIsXHJcbiAgbmF2IHVsIGxpIGEuYWN0aXZle1xyXG4gICAgY29sb3I6ICMyM2RiZGI7XHJcbiAgfVxyXG4gIG5hdiB1bCB1bHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODVweDtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMjNkYmRiO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgbmF2IHVsIGxpOmhvdmVyID4gdWx7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXI7XHJcbiAgfVxyXG4gIG5hdiB1bCB1bCBsaXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNDIzMzE7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxuICBuYXYgdWwgdWwgbGkgYXtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBuYXYgdWwgdWwgdWx7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxuICBuYXYgdWwgdWwgdWwgbGl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC03MHB4O1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbiAgfVxyXG4gIG5hdiB1bCB1bCBsaSBhIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICB9XHJcbiAgc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFke1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMjgsIDIzNik7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Navbar2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar2',
                templateUrl: './navbar2.component.html',
                styleUrls: ['./navbar2.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function OrderComponent_tr_97_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_tr_97_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const order_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteOrder(order_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.email_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.zip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.order_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.bill_amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.advance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.mode_of);
} }
class OrderComponent {
    constructor(driverService, sharedData, router) {
        this.driverService = driverService;
        this.sharedData = sharedData;
        this.router = router;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getOrderDetails();
    }
    getOrderDetails() {
        this.driverService.getOrderDetails(this.user.id).subscribe((res) => {
            this.ordersDetails = res.data;
        });
    }
    deleteOrder(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.driverService.deleteOrder(id).subscribe((res) => {
                    this.getOrderDetails();
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your Product has been deleted.', 'success');
            }
        });
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 103, vars: 1, consts: [[1, "center"], ["type", "button", "routerLink", "/addorder", 1, "btn", "btn-primary"], [1, "tablescroll"], [1, "table"], [1, "thead-dark"], [2, "color", "red"], ["scope", "col"], ["scope", "col", "colspan", "9", 2, "color", "aqua"], ["scope", "col", "colspan", "6", 2, "color", "aqua"], ["scope", "col", "colspan", "5", 2, "color", "aqua"], ["name", "Product code", "id", "Prodname", 1, "form-control", 2, "width", "100px"], ["value", ""], ["value", "Whatsapp"], ["value", "Web"], ["value", "Reference"], ["name", "Product code", "id", "Prodname", 1, "form-control", 2, "width", "80px"], ["value", "Cash"], ["value", "RGTS"], ["value", "NEFT"], ["value", "Paytm"], [4, "ngFor", "ngForOf"], [1, "list-inline-item"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-trash"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Offline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Order Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Order Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Current Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "order complied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "In Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Order complied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Out Of Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Payment Received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Payment Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Bill Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Advance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Mode of Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "RGTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " NEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Paytm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, OrderComponent_tr_97_Template, 45, 19, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ordersDetails);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_5__["Navbar2Component"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');\n\n\n.center[_ngcontent-%COMP%]{\r\n     display: flex;\r\n     justify-content: center;\r\n   }\n*[_ngcontent-%COMP%]{\r\n\tbox-sizing: border-box;\r\n}\n.table[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tborder-collapse: collapse;\r\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n  font-family: 'Noto Sans JP', sans-serif;\r\n  padding:12px 15px;\r\n  border:1px solid #ddd;\r\n  text-align: center;\r\n  font-size:14px;\r\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: darkblue;\r\n\tcolor:#ffffff;\r\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){\r\n\tbackground-color: #f5f5f5;\r\n}\n\n@media(max-width: 500px){\r\n\t.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n    margin-bottom:15px;\r\n    font-family: 'Noto Sans JP', sans-serif;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\ttext-align: right;\r\n\t\tpadding-left: 50%;\r\n\t\ttext-align: right;\r\n\t\tposition: relative;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before{\r\n\t\tcontent: attr(data-label);\r\n\t\tposition: absolute;\r\n\t\tleft:0;\r\n\t\twidth: 50%;\r\n\t\tpadding-left:15px;\r\n\t\tfont-size:15px;\r\n\t\tfont-weight: bold;\r\n\t\ttext-align: left;\r\n\t}\r\n}\n.tablescroll[_ngcontent-%COMP%]{\r\n  overflow-x: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztHQW9QRywwRkFBMEY7QUFwUDdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrS0s7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStFRTtBQUlEO0tBQ0UsYUFBYTtLQUNiLHVCQUF1QjtHQUN6QjtBQUlIO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0FBQzFCO0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7QUFDZDtBQUVBO0NBQ0MseUJBQXlCO0FBQzFCO0FBRUEsYUFBYTtBQUViO0NBQ0M7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxjQUFjO0VBQ2QsV0FBVztDQUNaO0NBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsdUNBQXVDO0NBQzFDO0NBQ0E7RUFDQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFDRDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5oZWFkZXJfcmlnaHRfaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmhlYWRlcl9yaWdodF9pbmZvIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5oZWFkZXJfcmlnaHRfaW5mbyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEzOHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNlYXJjaF9jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWFyY2hfY29udGFpbmVyIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiA1MjBweDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLnNlYXJjaF9jb250YWluZXIgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA0ODFweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc2VhcmNoX2NvbnRhaW5lciBmb3JtIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc2VhcmNoX2NvbnRhaW5lciBmb3JtIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvdmVyX2NhdGVnb3J5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5ob3Zlcl9jYXRlZ29yeTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ExYTFhMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5ob3Zlcl9jYXRlZ29yeTo6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmhvdmVyX2NhdGVnb3J5OjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaG92ZXJfY2F0ZWdvcnkgLnNlbGVjdF9vcHRpb24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLmhvdmVyX2NhdGVnb3J5IC5zZWxlY3Rfb3B0aW9uIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuaG92ZXJfY2F0ZWdvcnkgLnNlbGVjdF9vcHRpb24ge1xyXG4gICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTFweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmhvdmVyX2NhdGVnb3J5IC5zZWxlY3Rfb3B0aW9uIHtcclxuICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUxcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ob3Zlcl9jYXRlZ29yeSAuc2VsZWN0X29wdGlvbjo6YWZ0ZXIge1xyXG4gICAgdG9wOiA1NCU7XHJcbiAgICByaWdodDogMTNweDtcclxuICB9XHJcbiAgLmhvdmVyX2NhdGVnb3J5IC5zZWxlY3Rfb3B0aW9uIHVsLmxpc3Qge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuaG92ZXJfY2F0ZWdvcnkgLnNlbGVjdF9vcHRpb24gdWwubGlzdCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuaG92ZXJfY2F0ZWdvcnkgLnNlbGVjdF9vcHRpb24gdWwubGlzdCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuICBcclxuLnNlYXJjaF9ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLnNlYXJjaF9ib3gge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc2VhcmNoX2JveCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgfSAqL1xyXG4gIC8qIC5zZWFyY2hfYm94IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIFxyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgfVxyXG4gIC5zZWFyY2hfYm94IGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuICAuc2VhcmNoX2JveCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIFxyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgfVxyXG4gIC5zZWFyY2hfYm94IGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICBcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuICAuc2VhcmNoX2JveCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiAwIDUzcHggMCAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5zZWFyY2hfYm94IGlucHV0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDU0cHggMCAxMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc2VhcmNoX2JveCBpbnB1dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMCA1NHB4IDAgMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlYXJjaF9ib3ggYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5zZWFyY2hfYm94IGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc5YTIwNjtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc2VhcmNoX2JveCBidXR0b24ge1xyXG4gICAgICBtaW4td2lkdGg6IDU1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNlYXJjaF9ib3ggYnV0dG9uIHtcclxuICAgICAgbWluLXdpZHRoOiA1NXB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAqL1xyXG5cclxuICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgLmNlbnRlcntcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICB9XHJcblxyXG5cclxuICAgXHJcbip7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRhYmxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwudGFibGUgdGh7XHJcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSlAnLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6MTJweCAxNXB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi8qcmVzcG9uc2l2ZSovXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcblx0LnRhYmxlIHRoZWFke1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50YWJsZSwgLnRhYmxlIHRib2R5LCAudGFibGUgdHIsIC50YWJsZSB0ZHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC50YWJsZSB0cntcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJywgc2Fucy1zZXJpZjtcclxuXHR9XHJcblx0LnRhYmxlIHRke1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDUwJTtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQudGFibGUgdGQ6OmJlZm9yZXtcclxuXHRcdGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0XHRmb250LXNpemU6MTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcbn1cclxuXHJcbi50YWJsZXNjcm9sbHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"] }, { type: _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/receiveditem/receiveditem.component.ts":
/*!********************************************************!*\
  !*** ./src/app/receiveditem/receiveditem.component.ts ***!
  \********************************************************/
/*! exports provided: ReceiveditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveditemComponent", function() { return ReceiveditemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ReceiveditemComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiveditemComponent_tr_46_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const driver_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editDriver(driver_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.receive_item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs ", driver_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.units);
} }
class ReceiveditemComponent {
    constructor(driverService, router, sharedData) {
        this.driverService = driverService;
        this.router = router;
        this.sharedData = sharedData;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getDriverDetails();
    }
    getDriverDetails() {
        this.driverService.getDriverDetails(this.user.id).subscribe((res) => {
            this.driversDetails = res.data;
        });
    }
    editDriver(driver) {
        this.sharedData.updateSharedData(driver);
        this.router.navigate(['/editreceive']);
    }
}
ReceiveditemComponent.ɵfac = function ReceiveditemComponent_Factory(t) { return new (t || ReceiveditemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"])); };
ReceiveditemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceiveditemComponent, selectors: [["app-receiveditem"]], decls: 52, vars: 1, consts: [[1, "center"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "form-group"], ["for", "exampleInputPassword1"], ["type", "text", "id", "exampleInputPassword1", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "list-inline-item"], ["data-toggle", "modal", "type", "button", "data-target", "#myModal", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"]], template: function ReceiveditemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RECEIVED ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Received Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Received Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ReceiveditemComponent_tr_46_Template, 17, 6, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.driversDetails);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__["Navbar2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".center[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n  \r\n*[_ngcontent-%COMP%]{\r\n\tbox-sizing: border-box;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tborder-collapse: collapse;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tfont-family: 'Noto Sans JP', sans-serif;\r\n  padding:12px 15px;\r\n  border:1px solid #ddd;\r\n  text-align: center;\r\n  font-size:14px;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: darkblue;\r\n\tcolor:#ffffff;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){\r\n\tbackground-color: #f5f5f5;\r\n}\r\n  \r\n\r\n  \r\n@media(max-width: 500px){\r\n\t.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\tmargin-bottom:15px;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\ttext-align: right;\r\n\t\tpadding-left: 50%;\r\n\t\ttext-align: right;\r\n\t\tposition: relative;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before{\r\n\t\tcontent: attr(data-label);\r\n\t\tposition: absolute;\r\n\t\tleft:0;\r\n\t\twidth: 50%;\r\n\t\tpadding-left:15px;\r\n\t\tfont-size:15px;\r\n\t\tfont-weight: bold;\r\n\t\ttext-align: left;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZWRpdGVtL3JlY2VpdmVkaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBS0E7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsdUNBQXVDO0VBQ3RDLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBLGFBQWE7O0FBRWI7Q0FDQztFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXZlZGl0ZW0vcmVjZWl2ZWRpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuICBcclxuKntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGFibGV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnRhYmxlIHRkLC50YWJsZSB0aHtcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzoxMnB4IDE1cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6MTRweDtcclxufVxyXG5cclxuLnRhYmxlIHRoe1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbil7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLypyZXNwb25zaXZlKi9cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuXHQudGFibGUgdGhlYWR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LnRhYmxlLCAudGFibGUgdGJvZHksIC50YWJsZSB0ciwgLnRhYmxlIHRke1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LnRhYmxlIHRye1xyXG5cdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdH1cclxuXHQudGFibGUgdGR7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdHBhZGRpbmctbGVmdDogNTAlO1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC50YWJsZSB0ZDo6YmVmb3Jle1xyXG5cdFx0Y29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceiveditemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-receiveditem',
                templateUrl: './receiveditem.component.html',
                styleUrls: ['./receiveditem.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SalesComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_28_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const driver_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editDriver(driver_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs ", driver_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.sold_quantity);
} }
class SalesComponent {
    // salesDetails:[
    //   {sold_quantity:"",
    //   date:"",
    //   product_code:"",
    //   product_name:"",
    //   price:"",
    //   units:""
    // }
    // ]
    constructor(driverService, router, sharedData) {
        this.driverService = driverService;
        this.router = router;
        this.sharedData = sharedData;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getDriverDetails();
    }
    // getDriverDetails(){
    //   this.driverService.getDriverDetails(this.user.id).subscribe((res:any)=>{
    //      for(let data of res.data){
    //       this.salesDetails.push(data);
    //      }      
    //   });
    // }  
    getDriverDetails() {
        this.driverService.getDriverDetails(this.user.id).subscribe((res) => {
            this.driversDetails = res.data;
        });
    }
    // getSalesDetails(){
    //   this.driverService.getSalesDetails(this.user.id).subscribe((res:any)=>{
    //     for(let sdata of this.salesDetails){
    //       for(let data of res.data){
    //           sdata['sold_quantity'] = data.sold_quantity;
    //           sdata['date'] = data.date;
    //       }
    //     }
    //     this.salesDetails = res.data;
    //   });
    // } 
    editDriver(driver) {
        this.sharedData.updateSharedData(driver);
        this.router.navigate(['/editsale']);
    }
    addsale() {
        this.router.navigate(['/addsale']);
    }
}
SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"])); };
SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], decls: 34, vars: 1, consts: [[1, "center"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "list-inline-item"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"]], template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SALES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sold Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SalesComponent_tr_28_Template, 17, 6, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.driversDetails);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__["Navbar2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".center[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n  \r\n*[_ngcontent-%COMP%]{\r\n\tbox-sizing: border-box;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tborder-collapse: collapse;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tfont-family: 'Noto Sans JP', sans-serif;\r\n  padding:12px 15px;\r\n  border:1px solid #ddd;\r\n  text-align: center;\r\n  font-size:14px;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: darkblue;\r\n\tcolor:#ffffff;\r\n}\r\n  \r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){\r\n\tbackground-color: #f5f5f5;\r\n}\r\n  \r\n\r\n  \r\n@media(max-width: 500px){\r\n\t.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\tmargin-bottom:15px;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\ttext-align: right;\r\n\t\tpadding-left: 50%;\r\n\t\ttext-align: right;\r\n\t\tposition: relative;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before{\r\n\t\tcontent: attr(data-label);\r\n\t\tposition: absolute;\r\n\t\tleft:0;\r\n\t\twidth: 50%;\r\n\t\tpadding-left:15px;\r\n\t\tfont-size:15px;\r\n\t\tfont-weight: bold;\r\n\t\ttext-align: left;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUlBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHVDQUF1QztFQUN0QyxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQSxhQUFhOztBQUViO0NBQ0M7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxjQUFjO0VBQ2QsV0FBVztDQUNaO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbiAgXHJcbip7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRhYmxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwudGFibGUgdGh7XHJcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSlAnLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6MTJweCAxNXB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi8qcmVzcG9uc2l2ZSovXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcblx0LnRhYmxlIHRoZWFke1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50YWJsZSwgLnRhYmxlIHRib2R5LCAudGFibGUgdHIsIC50YWJsZSB0ZHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC50YWJsZSB0cntcclxuXHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHR9XHJcblx0LnRhYmxlIHRke1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDUwJTtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQudGFibGUgdGQ6OmJlZm9yZXtcclxuXHRcdGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0XHRmb250LXNpemU6MTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales',
                templateUrl: './sales.component.html',
                styleUrls: ['./sales.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class AuthService {
    // head:HttpHeaders = new HttpHeaders();
    // url = "http://localhost:5000/users/register";
    // data = {
    //     "name": "John Doe",
    //     "email": "john@gmail.com",
    //     "username": "john",
    //     "password": "john@123"
    // }
    constructor(http) {
        this.http = http;
        this.httpRegisterOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    registerUser(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/users/register', user, this.httpRegisterOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    authenticateUser(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/users/authenticate', user, this.httpRegisterOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/driver.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/driver.service.ts ***!
  \*******************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class DriverService {
    constructor(http) {
        this.http = http;
        this.httpRegisterOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    registerDriver(driver) {
        return this.http.post('http://localhost:5000/drivers/register', driver).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getDriverDetails(id) {
        return this.http.get('http://localhost:5000/drivers/getDrivers?user=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    deleteDriver(id) {
        return this.http.delete('http://localhost:5000/drivers/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    updateDriver(driver) {
        return this.http.patch('http://localhost:5000/drivers/update?id=' + driver.id, driver).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    // order  service 
    registerOrder(order) {
        return this.http.post('http://localhost:5000/orders/add', order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getOrderDetails(id) {
        return this.http.get('http://localhost:5000/orders/getOrders?user=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    deleteOrder(id) {
        return this.http.delete('http://localhost:5000/orders/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
}
DriverService.ɵfac = function DriverService_Factory(t) { return new (t || DriverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DriverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DriverService, factory: DriverService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/sharedData.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/sharedData.service.ts ***!
  \***********************************************/
/*! exports provided: SharedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedData", function() { return SharedData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SharedData {
    constructor() {
        this.sharedData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.currentSharedData = this.sharedData.asObservable();
        this.productData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            price: "",
            count: 0,
            id: '',
        });
        this.currentProductData = this.productData.asObservable();
    }
    updateSharedData(data) {
        this.sharedData.next(data);
    }
    updateProductData(product) {
        this.productData.next(product);
    }
}
SharedData.ɵfac = function SharedData_Factory(t) { return new (t || SharedData)(); };
SharedData.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedData, factory: SharedData.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/validate.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/validate.service.ts ***!
  \*********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValidateService {
    constructor() { }
    validateRegister(user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email));
    }
    validatePassword(password) {
        var a = "password";
        var b = "passwords";
        if (a != b) {
            document.getElementById("message").innerHTML = "* password are not same";
        }
    }
}
ValidateService.ɵfac = function ValidateService_Factory(t) { return new (t || ValidateService)(); };
ValidateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidateService, factory: ValidateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SettingComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_tr_34_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const driver_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editDriver(driver_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_tr_34_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const driver_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteDriver(driver_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs ", driver_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.initial_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.alert_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.sold_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r1.receive_item);
} }
class SettingComponent {
    constructor(router, driverService, sharedData) {
        this.router = router;
        this.driverService = driverService;
        this.sharedData = sharedData;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getDriverDetails();
        this.sharedData.updateSharedData('driver');
    }
    getDriverDetails() {
        this.driverService.getDriverDetails(this.user.id).subscribe((res) => {
            this.driversDetails = res.data;
        });
    }
    deleteDriver(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.driverService.deleteDriver(id).subscribe((res) => {
                    this.getDriverDetails();
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your Product has been deleted.', 'success');
            }
        });
    }
    editDriver(driver) {
        this.sharedData.updateSharedData(driver);
        this.router.navigate(['/upsetting']);
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sharedData_service__WEBPACK_IMPORTED_MODULE_4__["SharedData"])); };
SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 40, vars: 1, consts: [[1, "center"], ["type", "button", "routerLink", "/addsetting", 1, "btn", "btn-primary"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "list-inline-item"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-trash"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ITEM LIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Initial Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Alert Level Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sold Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Receive Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SettingComponent_tr_34_Template, 26, 9, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.driversDetails);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_5__["Navbar2Component"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');\r\n\r\n.center[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tfont-family: 'Noto Sans JP', sans-serif;\r\n  padding:12px 15px;\r\n  border:1px solid #ddd;\r\n  text-align: center;\r\n  font-size:15px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: darkblue;\r\n\tcolor:#ffffff;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n\r\n\r\n@media(max-width: 500px){\r\n\t.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\t\tmargin-bottom:15px;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n\t\ttext-align: right;\r\n\t\tpadding-left: 50%;\r\n\t\ttext-align: right;\r\n\t\tposition: relative;\r\n\t}\r\n\t.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before{\r\n\t\tcontent: attr(data-label);\r\n\t\tposition: absolute;\r\n\t\tleft:0;\r\n\t\twidth: 50%;\r\n\t\tpadding-left:15px;\r\n\t\tfont-size:15px;\r\n\t\tfont-weight: bold;\r\n\t\ttext-align: left;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGOztBQUUxRjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBR0E7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsdUNBQXVDO0VBQ3RDLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBLGFBQWE7O0FBRWI7Q0FDQztFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiBcclxuKntcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGFibGV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnRhYmxlIHRkLC50YWJsZSB0aHtcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzoxMnB4IDE1cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6MTVweDtcclxufVxyXG5cclxuLnRhYmxlIHRoe1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbil7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLypyZXNwb25zaXZlKi9cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuXHQudGFibGUgdGhlYWR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LnRhYmxlLCAudGFibGUgdGJvZHksIC50YWJsZSB0ciwgLnRhYmxlIHRke1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LnRhYmxlIHRye1xyXG5cdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdH1cclxuXHQudGFibGUgdGR7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdHBhZGRpbmctbGVmdDogNTAlO1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC50YWJsZSB0ZDo6YmVmb3Jle1xyXG5cdFx0Y29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-setting',
                templateUrl: './setting.component.html',
                styleUrls: ['./setting.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"] }, { type: _service_sharedData_service__WEBPACK_IMPORTED_MODULE_4__["SharedData"] }]; }, null); })();


/***/ }),

/***/ "./src/app/updatesetting/updatesetting.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/updatesetting/updatesetting.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdatesettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesettingComponent", function() { return UpdatesettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/sharedData.service */ "./src/app/service/sharedData.service.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class UpdatesettingComponent {
    constructor(driverService, router, sharedData) {
        this.driverService = driverService;
        this.router = router;
        this.sharedData = sharedData;
        this.userObj = {
            id: "",
            date: "",
            product_code: "",
            product_name: "",
            price: "",
            units: "",
            initial_quantity: "",
            alert_quantity: "",
            sold_quantity: "",
            receive_item: "",
        };
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.sharedData.currentSharedData.subscribe(res => {
            this.userObj = {
                id: res['_id'],
                date: res['date'],
                product_code: res['product_code'],
                product_name: res['product_name'],
                price: res['price'],
                units: res['units'],
                initial_quantity: res['initial_quantity'],
                alert_quantity: res['alert_quantity'],
                sold_quantity: res['sold_quantity'],
                receive_item: res['receive_item']
            };
        });
    }
    updateDriver() {
        this.driverService.updateDriver(this.userObj).subscribe(() => {
            //  this.getDriverDetails();
        });
    }
}
UpdatesettingComponent.ɵfac = function UpdatesettingComponent_Factory(t) { return new (t || UpdatesettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"])); };
UpdatesettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatesettingComponent, selectors: [["app-updatesetting"]], decls: 45, vars: 9, consts: [["method", "post", 1, "modal-content", 3, "submit"], [1, "container"], ["for", "name"], ["type", "text", "required", "", "name", "date", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "product_code", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "required", "", "name", "product_name", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "price", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "units", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "initial_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "alert_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "sold_quantity", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "receive_item", 3, "ngModel", "ngModelChange"], [1, "clearfix"], ["type", "submit", "id", "submitDetails", 1, "btn"]], template: function UpdatesettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UpdatesettingComponent_Template_form_submit_1_listener() { return ctx.updateDriver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please fill Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userObj.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_12_listener($event) { return ctx.userObj.product_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_16_listener($event) { return ctx.userObj.product_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_20_listener($event) { return ctx.userObj.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_24_listener($event) { return ctx.userObj.units = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Initial Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_28_listener($event) { return ctx.userObj.initial_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Alert Level Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_32_listener($event) { return ctx.userObj.alert_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sold Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_36_listener($event) { return ctx.userObj.sold_quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Receive Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatesettingComponent_Template_input_ngModelChange_40_listener($event) { return ctx.userObj.receive_item = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.product_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.initial_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.alert_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.sold_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userObj.receive_item);
    } }, directives: [_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_4__["Navbar2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {font-family: Arial, Helvetica, sans-serif;background-color:rgba(19, 231, 37, 0.979); }\r\n*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #09e65e;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  opacity:1;\r\n}\r\n\r\n\r\n.signupbtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 50%; \r\n  overflow: auto; \r\n  background-color: #f3f3f5;\r\n  padding-top: 50px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color:rgb(55, 55, 226);\r\n  margin: 5% auto 15% auto; \r\n  border: 1px solid #888;\r\n  width: 60%; \r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n@media screen and (max-width: 300px) {\r\n .signupbtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlc2V0dGluZy91cGRhdGVzZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU0seUNBQXlDLENBQUMseUNBQXlDLEVBQUU7QUFDM0YsR0FBRyxzQkFBc0IsQ0FBQztBQUkxQiw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUdBO0VBQ0UsU0FBUztBQUNYO0FBRUEsdUNBQXVDO0FBR3ZDLDJEQUEyRDtBQUMxRDtFQUNDLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxhQUFhO0FBQ2Y7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixXQUFXLEVBQUUsZ0JBQWdCO0VBQzdCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0IsRUFBRSxzREFBc0Q7RUFDaEYsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQSw2RUFBNkU7QUFDN0U7Q0FDQztLQUNJLFdBQVc7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlc2V0dGluZy91cGRhdGVzZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5LCAyMzEsIDM3LCAwLjk3OSk7IH1cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzICovXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOWU2NWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG5cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4gLnNpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogNTAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig1NSwgNTUsIDIyNik7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogNjAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbiBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatesettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-updatesetting',
                templateUrl: './updatesetting.component.html',
                styleUrls: ['./updatesetting.component.css']
            }]
    }], function () { return [{ type: _service_driver_service__WEBPACK_IMPORTED_MODULE_1__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _service_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedData"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ankit\dekstop\flower\flowerproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map