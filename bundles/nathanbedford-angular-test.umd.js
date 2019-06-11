(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('nathanbedford-angular-test', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['nathanbedford-angular-test'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        MyLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MyLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
        return MyLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        /**
         * @return {?}
         */
        MyLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        MyLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-my-lib',
                        template: "\n    <p>\n      my-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        MyLibComponent.ctorParameters = function () { return []; };
        return MyLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        MyLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MyLibComponent],
                        imports: [],
                        exports: [MyLibComponent]
                    },] }
        ];
        return MyLibModule;
    }());

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=nathanbedford-angular-test.umd.js.map
