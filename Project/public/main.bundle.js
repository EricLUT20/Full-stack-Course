webpackJsonp([1,4],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=../../src/app/services/validate.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=../../src/main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app works!";
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-root",
            template: __webpack_require__(694),
            styles: [__webpack_require__(686)],
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=../../src/app/app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(524);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: "search", component: __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__["a" /* SearchComponent */] },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]],
    },
    { path: "profile", component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__["a" /* SearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=../../src/app/app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllPosts().subscribe(function (posts) {
            _this.posts = posts.reverse();
            console.log(posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Getting all existing posts
    DashboardComponent.prototype.getAllPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http
            .get("http://localhost:3000/posts/", {
            headers: headers,
        })
            .map(function (res) { return res.json(); });
    };
    // Creating a new post
    DashboardComponent.prototype.onPost = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            console.log(profile.user._id, _this.textField);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", localStorage.getItem("id_token"));
            _this.http
                .post("http://localhost:3000/posts/", {
                content: _this.textField,
                owner: profile.user._id,
            }, { headers: headers })
                .subscribe(function (res) {
                _this.getAllPosts().subscribe(function (posts) {
                    _this.posts = posts.reverse();
                    console.log(posts);
                }, function (err) {
                    console.log(err);
                    return false;
                });
            });
        });
    };
    var _a, _b;
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(695),
            styles: [__webpack_require__(687)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" ? _b : Object])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=../../src/app/components/dashboard/dashboard.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    var _a;
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-home",
            template: __webpack_require__(696),
            styles: [__webpack_require__(688)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" ? _a : Object])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=../../src/app/components/home/home.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("You are now logged in", {
                    cssClass: "alert-success",
                    timeout: 5000,
                });
                _this.router.navigate(["/"]);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeout: 5000,
                });
                _this.router.navigate(["login"]);
            }
        });
    };
    var _a, _b, _c;
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-login",
            template: __webpack_require__(697),
            styles: [__webpack_require__(689)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" ? _c : Object])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=../../src/app/components/login/login.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.search = "";
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", {
            cssClass: "alert-success",
            timeout: 3000,
        });
        this.router.navigate(["/login"]);
        return false;
    };
    NavbarComponent.prototype.onSearch = function () {
        this.router.navigate(["/search"], { queryParams: { search: this.search } });
    };
    var _a, _b, _c;
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(698),
            styles: [__webpack_require__(690)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" ? _c : Object])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=../../src/app/components/navbar/navbar.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.getPosts(profile.user._id).subscribe(function (posts) {
                _this.posts = posts;
                console.log(posts);
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.getPosts = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        console.log("http://localhost:3000/posts/" + userId);
        return this.http
            .get("http://localhost:3000/posts/" + userId, {
            headers: headers,
        })
            .map(function (res) { return res.json(); });
    };
    var _a, _b, _c;
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(699),
            styles: [__webpack_require__(691)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" ? _c : Object])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=../../src/app/components/profile/profile.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all fields", {
                cssClass: "alert-danger",
                timeout: 3000,
            });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", {
                cssClass: "alert-danger",
                timeout: 3000,
            });
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered and can log in", {
                    cssClass: "alert-success",
                    timeout: 3000,
                });
                _this.router.navigate(["/"]);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeout: 3000,
                });
                _this.router.navigate(["/register"]);
            }
        });
    };
    var _a, _b, _c, _d;
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-register",
            template: __webpack_require__(700),
            styles: [__webpack_require__(692)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" ? _d : Object])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=../../src/app/components/register/register.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var username = params["search"];
            _this.getUser(username).subscribe(function (user) {
                _this.user = user !== null ? user : null;
                _this.getPosts(user._id).subscribe(function (posts) {
                    _this.posts = posts;
                    console.log(posts);
                }, function (err) {
                    console.log(err);
                    return false;
                });
                console.log(_this.user);
            }, function (err) {
                console.log(err);
                _this.user = null;
                return false;
            });
        });
    };
    SearchComponent.prototype.getUser = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http
            .get("http://localhost:3000/users/search/" + username, {
            headers: headers,
        })
            .map(function (res) { return res.json(); });
    };
    SearchComponent.prototype.getPosts = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        console.log("http://localhost:3000/posts/" + userId);
        return this.http
            .get("http://localhost:3000/posts/" + userId, {
            headers: headers,
        })
            .map(function (res) { return res.json(); });
    };
    var _a, _b, _c;
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-search",
            template: __webpack_require__(701),
            styles: [__webpack_require__(693)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" ? _c : Object])
    ], SearchComponent);
    return SearchComponent;
}());

//# sourceMappingURL=../../src/app/components/search/search.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    var _a, _b;
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" ? _b : Object])
    ], AuthGuard);
    return AuthGuard;
}());

//# sourceMappingURL=../../src/app/guards/auth.guard.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=../../src/environments/environment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http
            .post("http://localhost:3000/users/register", user, {
            headers: headers,
        })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http
            .post("http://localhost:3000/users/authenticate", user, {
            headers: headers,
        })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append("Authorization", this.authToken);
        headers.append("Content-Type", "application/json");
        return this.http
            .get("http://localhost:3000/users/profile", {
            headers: headers,
        })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem("id_token");
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem("id_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])("id_token");
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    var _a;
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" ? _a : Object])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=../../src/app/services/auth.service.js.map

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n  border: 2px solid #000;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #ffffff;\r\n  border: 2px solid #d6d8db;\r\n  color: #000;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.post-bar {\r\n  width: calc(100% - 20px);\r\n  height: 100px;\r\n  min-height: 50px;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  overflow-y: hidden;\r\n  transition: height 0.3s;\r\n  resize: none;\r\n}\r\n\r\n.card-title a {\r\n  color: #007bff;\r\n  text-decoration: none;\r\n}\r\n\r\n.card-title a:hover {\r\n  color: black;\r\n  transition: color 0.5s;\r\n}\r\n\r\n.card-deck .card {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.3s;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 10px;\r\n}\r\n\r\n.card .card-body {\r\n  padding: 10px;\r\n}\r\n\r\n.card:hover {\r\n  transform: scale(1.05);\r\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\r\n}\r\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ".text-center {\r\n  text-align: center;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: #f8f9fa;\r\n  border: #d6d8db 1px solid;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btn {\r\n  background-color: black;\r\n  border: 2px solid #000;\r\n  border-radius: 8px;\r\n  color: #fff;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #ffffff;\r\n  border-radius: 8px;\r\n  border: 2px solid #d6d8db;\r\n  color: #000;\r\n  transition: all 0.5s;\r\n}\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  background-color: #000;\r\n  color: #fff;\r\n  border: 2px solid #fff;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #fff;\r\n  color: #000;\r\n  border: 2px solid #d6d8db;\r\n  transition: all 0.5s;\r\n}\r\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".custom-navbar {\r\n  background-color: #343a40;\r\n  padding: 10px;\r\n  border-radius: 0;\r\n}\r\n\r\n.custom-navbar .navbar-brand:hover {\r\n  background-color: #ffffff;\r\n  color: #000000;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n  border-radius: 4px;\r\n}\r\n\r\n.custom-navbar .navbar-brand {\r\n  color: #ffffff;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n}\r\n\r\n.custom-navbar form {\r\n  margin-top: 8px;\r\n}\r\n\r\n.custom-navbar .search-input {\r\n  width: 175px;\r\n  border: #ffffff 2px solid;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n  background-color: transparent;\r\n  margin-right: 5px;\r\n}\r\n\r\n.custom-navbar .search-input:-ms-input-placeholder {\r\n  color: #98968b;\r\n}\r\n\r\n.custom-navbar .search-input::placeholder {\r\n  color: #98968b;\r\n}\r\n\r\n.custom-navbar .search-input:focus,\r\n.custom-navbar .search-input:not(:placeholder-shown) {\r\n  background-color: #ffffff;\r\n  color: #000000;\r\n  outline: none;\r\n}\r\n\r\n.custom-navbar .search-btn {\r\n  background-color: #ffffff;\r\n  color: #000000;\r\n  border: 1px solid #000000;\r\n}\r\n\r\n.custom-navbar .search-btn:hover {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n  border-radius: 4px;\r\n}\r\n\r\n.custom-navbar .nav.navbar-nav.navbar-right a {\r\n  color: #ffffff;\r\n  margin-left: 20px;\r\n}\r\n\r\n.custom-navbar .nav.navbar-nav.navbar-right a:hover {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n  border-radius: 4px;\r\n}\r\n\r\n.custom-navbar .nav.navbar-nav.navbar-right .active a {\r\n  background-color: #ffffff;\r\n  color: #000000;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n  border-radius: 4px;\r\n}\r\n\r\n.custom-navbar .nav.navbar-nav.navbar-left a {\r\n  color: #ffffff;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.custom-navbar .nav.navbar-nav.navbar-left a:hover {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n  border-radius: 4px;\r\n}\r\n\r\n.custom-navbar .nav.navbar-nav.navbar-left .active a {\r\n  background-color: #ffffff;\r\n  color: #000000;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n  border-radius: 4px;\r\n}\r\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ".user-details {\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #d6d8db;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.user-details h4 {\r\n  color: #3790f0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.list-group {\r\n  margin-top: 10px;\r\n}\r\n\r\n.user-posts {\r\n  margin-top: 20px;\r\n}\r\n\r\n.user-posts h4 {\r\n  color: #3790f0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.list-group-item {\r\n  background-color: #ffffff;\r\n  border: 1px solid #d6d8db;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.user-posts .list-group-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  background-color: #000;\r\n  color: #fff;\r\n  border: 2px solid #fff;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #fff;\r\n  color: #000;\r\n  border: 2px solid #d6d8db;\r\n  transition:\r\n    background-color 0.5s,\r\n    color 0.5s;\r\n}\r\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ".user-details {\r\n  background-color: #f8f9fa;\r\n  border: 1px solid #d6d8db;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.user-details h4 {\r\n  color: #3790f0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.list-group {\r\n  margin-top: 10px;\r\n}\r\n\r\n.user-posts {\r\n  margin-top: 20px;\r\n}\r\n\r\n.user-posts h4 {\r\n  color: #3790f0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.list-group-item {\r\n  background-color: #ffffff;\r\n  border: 1px solid #d6d8db;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.user-posts .list-group-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<!-- Create post -->\n<div class=\"create-post-bar\">\n  <textarea\n    class=\"post-bar\"\n    id=\"newPost\"\n    placeholder=\"Write a new post...\"\n    [(ngModel)]=\"textField\"\n  ></textarea>\n  <button class=\"btn btn-primary\" (click)=\"onPost()\">Post</button>\n</div>\n\n<!-- Recent posts -->\n<div class=\"container mt-5\">\n  <h2 class=\"mb-5\">Recent Posts</h2>\n  <div class=\"card-deck\">\n    <div *ngFor=\"let post of posts\" class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">\n          <a\n            [routerLink]=\"['/search']\"\n            [queryParams]=\"{ search: post.owner.username }\"\n            >{{ post.owner.username }}</a\n          >\n        </h5>\n        <p class=\"card-text\">{{ post.content }}</p>\n        <small>Posted on: {{ post.timestamp | date: \"medium\" }}</small>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1>Welcome to the MEAN Social App</h1>\n  <br />\n  <!-- User logged out-->\n  <div *ngIf=\"!authService.loggedIn()\">\n    <div class=\"jumbotron\">\n      <p class=\"lead\">Register as a new user.</p>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    </div>\n    <div class=\"jumbotron\">\n      <p class=\"lead\">Already have an account?</p>\n      <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n\n  <!-- User logged in -->\n  <div *ngIf=\"authService.loggedIn()\">\n    <div class=\"jumbotron\">\n      <p class=\"lead\" *ngIf=\"user\">\n        Welcome, you have logged in as {{ user.name }}\n      </p>\n      <p class=\"\"></p>\n      <a class=\"btn btn-default\" [routerLink]=\"['/profile']\">Your Profile</a>\n    </div>\n    <div class=\"jumbotron\">\n      <p class=\"lead\">Create posts and view other users' posts</p>\n      <a class=\"btn btn-default\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n    </div>\n    <div class=\"jumbotron\">\n      <p class=\"lead\">Wrong account?</p>\n      <a class=\"btn btn-default\" (click)=\"authService.logout()\">Logout</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"Username\">Username</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Enter Username\"\n      [(ngModel)]=\"username\"\n      name=\"username\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Password\">Password</label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      placeholder=\" Enter Password\"\n      [(ngModel)]=\"password\"\n      name=\"password\"\n    />\n  </div>\n  <div class=\"checkbox\">\n    <label> <input type=\"checkbox\" value=\"remember-me\" /> Remember me </label>\n  </div>\n  <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\" />\n</form>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default custom-navbar\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button\n        type=\"button\"\n        class=\"navbar-toggle collaped\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbar\"\n        aria-expanded=\"false\"\n        aria-controls=\"navbar\"\n      >\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">MEAN Social App</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a [routerLink]=\"['/']\">Home</a>\n        </li>\n        <li>\n          <form\n            class=\"navbar-form navbar-right\"\n            role=\"search\"\n            (ngSubmit)=\"onSearch()\"\n          >\n            <div class=\"form-group\">\n              <input\n                type=\"text\"\n                [(ngModel)]=\"search\"\n                name=\"search\"\n                class=\"form-control search-input\"\n                id=\"search\"\n                placeholder=\"Search by name\"\n              />\n            </div>\n            <button type=\"submit\" class=\"btn btn-default search-btn\">\n              Search\n            </button>\n          </form>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li\n          *ngIf=\"authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/dashboard']\"\n            >Dashboard</a\n          >\n        </li>\n        <li\n          *ngIf=\"authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/profile']\"\n            >Profile</a\n          >\n        </li>\n        <li\n          *ngIf=\"!authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li\n          *ngIf=\"!authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\"\n            >Register</a\n          >\n        </li>\n        <li *ngIf=\"authService.loggedIn()\">\n          <a (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"user-details\">\n    <h2 class=\"page-header\">{{ user.name }}</h2>\n    <h4>User Details</h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><strong>ID:</strong> {{ user._id }}</li>\n      <li class=\"list-group-item\"><strong>Name:</strong> {{ user.name }}</li>\n      <li class=\"list-group-item\">\n        <strong>Username:</strong> {{ user.username }}\n      </li>\n      <li class=\"list-group-item\"><strong>Email:</strong> {{ user.email }}</li>\n      <li class=\"list-group-item\">\n        <strong>Password:</strong> {{ user.password }}\n      </li>\n    </ul>\n    <br />\n    <h4>Posts</h4>\n\n    <!-- If user has posts -->\n    <div class=\"user-posts\" *ngIf=\"posts && posts.length > 0\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let post of posts.reverse()\">\n          {{ post.content }}\n          <br />\n          <small>Posted on: {{ post.timestamp | date: \"medium\" }}</small>\n        </li>\n      </ul>\n    </div>\n\n    <!-- If user has no posts -->\n    <p class=\"text-center\" *ngIf=\"!posts || posts.length === 0\">\n      No posts available\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header\">Register</h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"name\"\n        name=\"name\"\n        class=\"form-control\"\n        id=\"name\"\n        placeholder=\"Enter Name\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"username\"\n        name=\"username\"\n        class=\"form-control\"\n        id=\"username\"\n        placeholder=\"Enter Username\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input\n        type=\"email\"\n        [(ngModel)]=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        id=\"email\"\n        aria-describedby=\"emailHelp\"\n        placeholder=\"Enter Email\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n        type=\"password\"\n        [(ngModel)]=\"password\"\n        name=\"password\"\n        class=\"form-control\"\n        id=\"password\"\n        placeholder=\" Enter Password\"\n      />\n      <small id=\"passwordHelp\" class=\"form-text text-muted\"\n        >We'll never share your password with anyone else.</small\n      >\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n  </form>\n</div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<!--If user found-->\n<div *ngIf=\"user\" class=\"user-details\">\n  <h2 class=\"page-header\">{{ user.name }}</h2>\n  <h4>User details</h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{ user.username }}</li>\n    <li class=\"list-group-item\">Email: {{ user.email }}</li>\n  </ul>\n\n  <br />\n  <h4>Posts</h4>\n\n  <!--If user has posts-->\n  <div class=\"user-posts\" *ngIf=\"posts && posts.length > 0\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let post of posts.reverse()\">\n        {{ post.content }}\n        <br />\n        <small>Posted on: {{ post.timestamp | date: \"medium\" }}</small>\n      </li>\n    </ul>\n  </div>\n\n  <!--If user has not posts-->\n  <p class=\"text-center\" *ngIf=\"!posts || posts.length === 0\">\n    No posts available\n  </p>\n</div>\n\n<!--If user not found-->\n<div *ngIf=\"!user\">\n  <h1 class=\"text-center\">Error 404</h1>\n  <p class=\"jumbotron text-center\">User: {{ username }} not found.</p>\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[740]);
//# sourceMappingURL=main.bundle.map