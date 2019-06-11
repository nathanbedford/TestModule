(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tf-bulma-dialog', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['tf-bulma-dialog'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TfBulmaDialogService = /** @class */ (function () {
        function TfBulmaDialogService() {
            console.log('Service was created!');
        }
        TfBulmaDialogService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TfBulmaDialogService.ctorParameters = function () { return []; };
        /** @nocollapse */ TfBulmaDialogService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TfBulmaDialogService_Factory() { return new TfBulmaDialogService(); }, token: TfBulmaDialogService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [TfBulmaDialogComponent],
                        imports: [],
                        exports: [TfBulmaDialogComponent]
                    },] }
        ];
        return TfBulmaDialogModule;
    }());

    exports.TfBulmaDialogComponent = TfBulmaDialogComponent;
    exports.TfBulmaDialogModule = TfBulmaDialogModule;
    exports.TfBulmaDialogService = TfBulmaDialogService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tf-bulma-dialog.umd.js.map
