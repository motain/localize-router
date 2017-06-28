(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs/add/observable/forkJoin"), require("@angular/router"), require("rxjs/Observable"), require("@angular/common"), require("@angular/http"), require("@ngx-translate/core"), require("rxjs/Subject"), require("rxjs/add/operator/share"), require("rxjs/add/operator/toPromise"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/add/observable/forkJoin", "@angular/router", "rxjs/Observable", "@angular/common", "@angular/http", "@ngx-translate/core", "rxjs/Subject", "rxjs/add/operator/share", "rxjs/add/operator/toPromise"], factory);
	else if(typeof exports === 'object')
		exports["localize-router"] = factory(require("@angular/core"), require("rxjs/add/observable/forkJoin"), require("@angular/router"), require("rxjs/Observable"), require("@angular/common"), require("@angular/http"), require("@ngx-translate/core"), require("rxjs/Subject"), require("rxjs/add/operator/share"), require("rxjs/add/operator/toPromise"));
	else
		root["localize-router"] = factory(root["@angular/core"], root["rxjs/add/observable/forkJoin"], root["@angular/router"], root["rxjs/Observable"], root["@angular/common"], root["@angular/http"], root["@ngx-translate/core"], root["rxjs/Subject"], root["rxjs/add/operator/share"], root["rxjs/add/operator/toPromise"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RAW_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalizeParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ManualParserLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StaticParserLoader; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var LOCALIZE_LOCAL_STORAGE = 'LOCALIZE_LOCAL_STORAGE';
/**
 * Static provider for keeping track of routes
 * @type {OpaqueToken}
 */
var RAW_ROUTES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('RAW_ROUTES');
/**
 * Abstract class for parsing localization
 */
var LocalizeParser = (function () {
    /**
     * Loader constructor
     * @param translate
     * @param location
     */
    function LocalizeParser(translate, location) {
        this.translate = translate;
        this.location = location;
    }
    /**
     * Initialize language and routes
     * @param routes
     * @returns {Promise<any>}
     */
    LocalizeParser.prototype.init = function (routes) {
        var selectedLanguage;
        var wildcardRoute;
        this.routes = routes;
        if (!this.locales.length) {
            return Promise.resolve();
        }
        /** detect current language */
        var locationLang = this.getLocationLang();
        this.defaultLang = this._cachedLang || this._getBrowserLang() || this.locales[0];
        selectedLanguage = locationLang || this.defaultLang;
        this.translate.setDefaultLang(this.defaultLang);
        /** set base route */
        var baseRoute = { path: '', redirectTo: this.defaultLang, pathMatch: 'full' };
        /** extract potential wildcard route */
        var wildcardIndex = routes.findIndex(function (route) { return route.path === '**'; });
        if (wildcardIndex !== -1) {
            wildcardRoute = routes.splice(wildcardIndex, 1)[0];
        }
        /** mutable operation on routes */
        var children = this.routes.splice(0, this.routes.length, baseRoute);
        /** append children routes... */
        this.routes.push({ children: children });
        /** ...and potential wildcard route */
        if (wildcardRoute) {
            this.routes.push(wildcardRoute);
        }
        /** translate routes */
        var res = this.translateRoutes(selectedLanguage);
        return res.toPromise();
    };
    LocalizeParser.prototype.initChildRoutes = function (routes) {
        if (!this.translationObject) {
            // not lazy, it will be translated in main init
            return routes;
        }
        this._translateRouteTree(routes);
        return routes;
    };
    /**
     * Translate routes to selected language
     * @param language
     * @returns {Promise<any>}
     */
    LocalizeParser.prototype.translateRoutes = function (language) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this._cachedLang = language;
            if (_this.routes.length > 1) {
                _this.routes[1].path = language;
            }
            _this.translate.use(language).subscribe(function (translations) {
                _this.translationObject = translations;
                _this.currentLang = language;
                if (_this.routes.length > 1) {
                    _this._translateRouteTree(_this.routes[1].children);
                }
                // if there is wildcard route
                if (_this.routes.length > 2 && _this.routes[2].redirectTo) {
                    _this._translateProperty(_this.routes[2], 'redirectTo', true);
                }
                observer.next(void 0);
                observer.complete();
            });
        });
    };
    /**
     * Translate the route node and recursively call for all it's children
     * @param routes
     * @private
     */
    LocalizeParser.prototype._translateRouteTree = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            if (route.path && route.path !== '**') {
                _this._translateProperty(route, 'path');
            }
            if (route.redirectTo) {
                _this._translateProperty(route, 'redirectTo', !route.redirectTo.indexOf('/'));
            }
            if (route.children) {
                _this._translateRouteTree(route.children);
            }
            if (route.loadChildren && route._loadedConfig) {
                _this._translateRouteTree(route._loadedConfig.routes);
            }
        });
    };
    /**
     * Translate property and if first time add original to cache
     * @param route
     * @param property
     * @param prefixLang
     * @private
     */
    LocalizeParser.prototype._translateProperty = function (route, property, prefixLang) {
        // set property to data if not there yet
        var dataPointer = route.data = route.data || {};
        if (!dataPointer.localizeRouter) {
            dataPointer.localizeRouter = {};
        }
        if (!dataPointer.localizeRouter[property]) {
            dataPointer.localizeRouter[property] = route[property];
        }
        var result = this.translateRoute(dataPointer.localizeRouter[property]);
        route[property] = prefixLang ? "/" + this.currentLang + result : result;
    };
    /**
     * Translate route and return observable
     * @param path
     * @returns {string}
     */
    LocalizeParser.prototype.translateRoute = function (path) {
        var _this = this;
        var pathSegments = path.split('/');
        /** collect observables  */
        return pathSegments.map(function (part) { return part.length ? _this.translateText(part) : part; }).join('/');
    };
    /**
     * Get language from url
     * @returns {string}
     * @private
     */
    LocalizeParser.prototype.getLocationLang = function (url) {
        var pathSlices = (url || this.location.path()).split('/');
        if (pathSlices.length > 1 && this.locales.indexOf(pathSlices[1]) !== -1) {
            return pathSlices[1];
        }
        if (pathSlices.length && this.locales.indexOf(pathSlices[0]) !== -1) {
            return pathSlices[0];
        }
        return null;
    };
    /**
     * Get user's language set in the browser
     * @returns {string}
     * @private
     */
    LocalizeParser.prototype._getBrowserLang = function () {
        return this._returnIfInLocales(this.translate.getBrowserLang());
    };
    Object.defineProperty(LocalizeParser.prototype, "_cachedLang", {
        /**
         * Get language from local storage
         * @returns {string}
         * @private
         */
        get: function () {
            if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
                return void 0;
            }
            try {
                return this._returnIfInLocales(window.localStorage.getItem(LOCALIZE_LOCAL_STORAGE));
            }
            catch (e) {
                // weird Safari issue in private mode, where LocalStorage is defined but throws error on access
                return void 0;
            }
        },
        /**
         * Save language to local storage
         * @param value
         * @private
         */
        set: function (value) {
            if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
                return;
            }
            try {
                window.localStorage.setItem(LOCALIZE_LOCAL_STORAGE, value);
            }
            catch (e) {
                // weird Safari issue in private mode, where LocalStorage is defined but throws error on access
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    LocalizeParser.prototype._returnIfInLocales = function (value) {
        if (value && this.locales.indexOf(value) !== -1) {
            return value;
        }
        return null;
    };
    LocalizeParser.prototype.translateText = function (key) {
        if (!this.translationObject) {
            return key;
        }
        var res = this.translationObject[this.prefix + key];
        return res || key;
    };
    return LocalizeParser;
}());
/**
 * Manually set configuration
 */
var ManualParserLoader = (function (_super) {
    __extends(ManualParserLoader, _super);
    /**
     * CTOR
     * @param translate
     * @param location
     * @param locales
     * @param prefix
     */
    function ManualParserLoader(translate, location, locales, prefix) {
        if (locales === void 0) { locales = ['en']; }
        if (prefix === void 0) { prefix = 'ROUTES.'; }
        _super.call(this, translate, location);
        this.locales = locales;
        this.prefix = prefix || '';
    }
    /**
     * Initialize or append routes
     * @param routes
     * @returns {Promise<any>}
     */
    ManualParserLoader.prototype.load = function (routes) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.init(routes).then(resolve);
        });
    };
    return ManualParserLoader;
}(LocalizeParser));
/**
 * Load configuration from server
 */
var StaticParserLoader = (function (_super) {
    __extends(StaticParserLoader, _super);
    /**
     * CTOR
     * @param translate
     * @param location
     * @param http
     * @param path
     */
    function StaticParserLoader(translate, location, http, path) {
        if (path === void 0) { path = 'assets/locales.json'; }
        _super.call(this, translate, location);
        this.http = http;
        this.path = path;
        this._dataLoaded = false;
    }
    /**
     * Initialize or append routes
     * @param routes
     * @returns {Promise<any>}
     */
    StaticParserLoader.prototype.load = function (routes) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this._dataLoaded) {
                _this.init(routes).then(resolve);
            }
            else {
                _this.http.get("" + _this.path)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this._dataLoaded = true;
                    _this.locales = data.locales;
                    _this.prefix = data.prefix || '';
                    _this.init(routes).then(resolve);
                });
            }
        });
    };
    return StaticParserLoader;
}(LocalizeParser));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localize_router_parser__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizeRouterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Localization service
 * modifyRoutes
 */
var LocalizeRouterService = (function () {
    /**
     * CTOR
     * @param parser
     * @param router
     */
    function LocalizeRouterService(parser, router) {
        this.parser = parser;
        this.router = router;
        this.routerEvents = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    /**
     * Start up the service
     */
    LocalizeRouterService.prototype.init = function () {
        this.router.resetConfig(this.parser.routes);
        this.router.events.subscribe(this._routeChanged());
    };
    /**
     * Change language and navigate to translated route
     * @param lang
     * @param extras
     */
    LocalizeRouterService.prototype.changeLanguage = function (lang, extras) {
        var _this = this;
        if (lang !== this.parser.currentLang) {
            var rootSnapshot_1 = this.router.routerState.snapshot.root;
            this.parser.translateRoutes(lang).subscribe(function () {
                _this.router.navigateByUrl(_this.traverseRouteSnapshot(rootSnapshot_1), extras);
            });
        }
    };
    /**
     * Traverses through the tree to assemble new translated url
     * @param snapshot
     * @returns {string}
     */
    LocalizeRouterService.prototype.traverseRouteSnapshot = function (snapshot) {
        if (snapshot.firstChild && snapshot.firstChild.routeConfig && snapshot.firstChild.routeConfig.path) {
            return this.parseSegmentValue(snapshot) + '/' + this.traverseRouteSnapshot(snapshot.firstChild);
        }
        return this.parseSegmentValue(snapshot);
    };
    /**
     * Extracts new segment value based on routeConfig and url
     * @param snapshot
     * @returns {string}
     */
    LocalizeRouterService.prototype.parseSegmentValue = function (snapshot) {
        if (snapshot.routeConfig) {
            var subPathSegments = snapshot.routeConfig.path.split('/');
            return subPathSegments.map(function (s, i) { return s.indexOf(':') === 0 ? snapshot.url[i].path : s; }).join('/');
        }
        return '';
    };
    /**
     * Translate route to current language
     * If new language is explicitly provided then replace language part in url with new language
     * @param path
     * @returns {string | any[]}
     */
    LocalizeRouterService.prototype.translateRoute = function (path) {
        var _this = this;
        if (typeof path === 'string') {
            var result_1 = this.parser.translateRoute(path);
            return !path.indexOf('/') ? "/" + this.parser.currentLang + result_1 : result_1;
        }
        // it's an array
        var result = [];
        path.forEach(function (segment, index) {
            if (typeof segment === 'string') {
                var res = _this.parser.translateRoute(segment);
                if (!index && !segment.indexOf('/')) {
                    result.push("/" + _this.parser.currentLang + res);
                }
                else {
                    result.push(res);
                }
            }
            else {
                result.push(segment);
            }
        });
        return result;
    };
    /**
     * Event handler to react on route change
     * @returns {(event:any)=>void}
     * @private
     */
    LocalizeRouterService.prototype._routeChanged = function () {
        var _this = this;
        var self = this;
        return function (event) {
            var lang = _this.parser.getLocationLang(event.url);
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"] && lang && lang !== _this.parser.currentLang) {
                _this.parser.translateRoutes(lang).subscribe(function () {
                    // Fire route change event
                    _this.routerEvents.next(lang);
                });
            }
            // This value does not exist in Router before version 4
            // so we have to find it indirectly
            if (event.toString().match(/RouteConfigLoadEnd/)) {
                __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(event.route).toPromise().then(function (route) {
                    self.parser.initChildRoutes(route._loadedConfig.routes);
                });
            }
        };
    };
    LocalizeRouterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_5__localize_router_parser__["b" /* LocalizeParser */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], LocalizeRouterService);
    return LocalizeRouterService;
}());


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localize_router_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizeRouterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalizeRouterPipe = (function () {
    /**
     * CTOR
     * @param localize
     * @param _ref
     */
    function LocalizeRouterPipe(localize, _ref) {
        var _this = this;
        this.localize = localize;
        this._ref = _ref;
        this.value = '';
        this.subscription = this.localize.routerEvents.subscribe(function () {
            _this.transform(_this.lastKey);
        });
    }
    /**
     * Transform current url to localized one
     * @param query
     * @returns {string | any[]}
     */
    LocalizeRouterPipe.prototype.transform = function (query) {
        if (!query || query.length === 0 || !this.localize.parser.currentLang) {
            return query;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* equals */])(query, this.lastKey) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* equals */])(this.lastLanguage, this.localize.parser.currentLang)) {
            return this.value;
        }
        this.lastKey = query;
        this.lastLanguage = this.localize.parser.currentLang;
        /** translate key and update values */
        this.value = this.localize.translateRoute(query);
        this.lastKey = query;
        this._ref.markForCheck();
        return this.value;
    };
    LocalizeRouterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'localize',
            pure: false // required to update the value when the promise is resolved
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__localize_router_service__["a" /* LocalizeRouterService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], LocalizeRouterPipe);
    return LocalizeRouterPipe;
}());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localize_router_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localize_router_parser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localize_router_pipe__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCALIZE_ROUTER_FORROOT_GUARD; });
/* harmony export (immutable) */ __webpack_exports__["b"] = localizeLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ParserInitializer; });
/* harmony export (immutable) */ __webpack_exports__["d"] = getAppInitializer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LocalizeRouterModule; });
/* harmony export (immutable) */ __webpack_exports__["f"] = provideForRootGuard;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LOCALIZE_ROUTER_FORROOT_GUARD = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('LOCALIZE_ROUTER_FORROOT_GUARD');
/**
 * Helper function for loading external parser
 * @param translate
 * @param location
 * @param http
 * @returns {StaticParserLoader}
 */
function localizeLoaderFactory(translate, location, http) {
    return new __WEBPACK_IMPORTED_MODULE_3__localize_router_parser__["d" /* StaticParserLoader */](translate, location, http);
}
var ParserInitializer = (function () {
    /**
     * CTOR
     * @param injector
     */
    function ParserInitializer(injector) {
        this.injector = injector;
    }
    /**
     * @returns {Promise<any>}
     */
    ParserInitializer.prototype.appInitializer = function () {
        var _this = this;
        var res = this.parser.load(this.routes);
        res.then(function () {
            var localize = _this.injector.get(__WEBPACK_IMPORTED_MODULE_2__localize_router_service__["a" /* LocalizeRouterService */]);
            localize.init();
        });
        return res;
    };
    /**
     * @param parser
     * @param routes
     * @returns {()=>Promise<any>}
     */
    ParserInitializer.prototype.generateInitializer = function (parser, routes) {
        this.parser = parser;
        this.routes = routes.reduce(function (a, b) { return a.concat(b); });
        return this.appInitializer;
    };
    ParserInitializer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ParserInitializer);
    return ParserInitializer;
}());
/**
 * @param p
 * @param parser
 * @param routes
 * @returns {any}
 */
function getAppInitializer(p, parser, routes) {
    return p.generateInitializer(parser, routes).bind(p);
}
var LocalizeRouterModule = (function () {
    function LocalizeRouterModule() {
    }
    LocalizeRouterModule.forRoot = function (routes, localizeLoader) {
        if (localizeLoader === void 0) { localizeLoader = {
            provide: __WEBPACK_IMPORTED_MODULE_3__localize_router_parser__["b" /* LocalizeParser */],
            useFactory: localizeLoaderFactory,
            deps: [__WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["TranslateService"], __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]]
        }; }
        return {
            ngModule: LocalizeRouterModule,
            providers: [
                {
                    provide: LOCALIZE_ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[LocalizeRouterModule, new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"]()]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__localize_router_parser__["a" /* RAW_ROUTES */],
                    multi: true,
                    useValue: routes
                },
                localizeLoader,
                __WEBPACK_IMPORTED_MODULE_2__localize_router_service__["a" /* LocalizeRouterService */],
                ParserInitializer,
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"],
                    multi: true,
                    useFactory: getAppInitializer,
                    deps: [ParserInitializer, __WEBPACK_IMPORTED_MODULE_3__localize_router_parser__["b" /* LocalizeParser */], __WEBPACK_IMPORTED_MODULE_3__localize_router_parser__["a" /* RAW_ROUTES */]]
                }
            ]
        };
    };
    LocalizeRouterModule.forChild = function (routes) {
        return {
            ngModule: LocalizeRouterModule,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__localize_router_parser__["a" /* RAW_ROUTES */],
                    multi: true,
                    useValue: routes
                }
            ]
        };
    };
    LocalizeRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["TranslateModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__localize_router_pipe__["a" /* LocalizeRouterPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__localize_router_pipe__["a" /* LocalizeRouterPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LocalizeRouterModule);
    return LocalizeRouterModule;
}());
/**
 * @param localizeRouterModule
 * @returns {string}
 */
function provideForRootGuard(localizeRouterModule) {
    if (localizeRouterModule) {
        throw new Error("LocalizeRouterModule.forRoot() called twice. Lazy loaded modules should use LocalizeRouterModule.forChild() instead.");
    }
    return 'guarded';
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/**
 * Compare if two objects are same
 * @param o1
 * @param o2
 * @returns {boolean}
 */
function equals(o1, o2) {
    if (o1 === o2) {
        return true;
    }
    if (o1 === null || o2 === null) {
        return false;
    }
    if (o1 !== o1 && o2 !== o2) {
        return true;
    } // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 === t2 && t1 === 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2)) {
                return false;
            }
            if ((length = o1.length) === o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key])) {
                        return false;
                    }
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (o1.hasOwnProperty(key)) {
                    if (!equals(o1[key], o2[key])) {
                        return false;
                    }
                    keySet[key] = true;
                }
            }
            for (key in o2) {
                if (o2.hasOwnProperty(key)) {
                    if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                        return false;
                    }
                }
            }
            return true;
        }
    }
    return false;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_localize_router_module__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LOCALIZE_ROUTER_FORROOT_GUARD", function() { return __WEBPACK_IMPORTED_MODULE_0__src_localize_router_module__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "localizeLoaderFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_localize_router_module__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ParserInitializer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_localize_router_module__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getAppInitializer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_localize_router_module__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LocalizeRouterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_localize_router_module__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "provideForRootGuard", function() { return __WEBPACK_IMPORTED_MODULE_0__src_localize_router_module__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_localize_router_parser__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RAW_ROUTES", function() { return __WEBPACK_IMPORTED_MODULE_1__src_localize_router_parser__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LocalizeParser", function() { return __WEBPACK_IMPORTED_MODULE_1__src_localize_router_parser__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ManualParserLoader", function() { return __WEBPACK_IMPORTED_MODULE_1__src_localize_router_parser__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StaticParserLoader", function() { return __WEBPACK_IMPORTED_MODULE_1__src_localize_router_parser__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_localize_router_service__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LocalizeRouterService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_localize_router_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_localize_router_pipe__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LocalizeRouterPipe", function() { return __WEBPACK_IMPORTED_MODULE_3__src_localize_router_pipe__["a"]; });






/***/ })
/******/ ]);
});
//# sourceMappingURL=localize-router.umd.js.map