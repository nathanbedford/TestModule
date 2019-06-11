import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TfBulmaDialogService = /** @class */ (function () {
    function TfBulmaDialogService() {
        console.log('Service was created!');
    }
    TfBulmaDialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TfBulmaDialogService.ctorParameters = function () { return []; };
    /** @nocollapse */ TfBulmaDialogService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TfBulmaDialogService_Factory() { return new TfBulmaDialogService(); }, token: TfBulmaDialogService, providedIn: "root" });
    return TfBulmaDialogService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TfBulmaDialogComponent = /** @class */ (function () {
    function TfBulmaDialogComponent() {
    }
    /**
     * @return {?}
     */
    TfBulmaDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TfBulmaDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-TfBulmaDialog',
                    template: "\n    <p>\n      tf-bulma-dialog works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    TfBulmaDialogComponent.ctorParameters = function () { return []; };
    return TfBulmaDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TfBulmaDialogModule = /** @class */ (function () {
    function TfBulmaDialogModule() {
    }
    TfBulmaDialogModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TfBulmaDialogComponent],
                    imports: [],
                    exports: [TfBulmaDialogComponent]
                },] }
    ];
    return TfBulmaDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TfBulmaDialogComponent, TfBulmaDialogModule, TfBulmaDialogService };
//# sourceMappingURL=tf-bulma-dialog.js.map
