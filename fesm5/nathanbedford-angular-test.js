import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibService = /** @class */ (function () {
    function MyLibService() {
    }
    MyLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MyLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MyLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [MyLibComponent],
                    imports: [],
                    exports: [MyLibComponent]
                },] }
    ];
    return MyLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=nathanbedford-angular-test.js.map
