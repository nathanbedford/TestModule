import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TfBulmaDialogService {
    constructor() {
        console.log('Service was created!');
    }
}
TfBulmaDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TfBulmaDialogService.ctorParameters = () => [];
/** @nocollapse */ TfBulmaDialogService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TfBulmaDialogService_Factory() { return new TfBulmaDialogService(); }, token: TfBulmaDialogService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TfBulmaDialogComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TfBulmaDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-TfBulmaDialog',
                template: `
    <p>
      tf-bulma-dialog works!
    </p>
  `
            }] }
];
/** @nocollapse */
TfBulmaDialogComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TfBulmaDialogModule {
}
TfBulmaDialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TfBulmaDialogComponent],
                imports: [],
                exports: [TfBulmaDialogComponent]
            },] }
];

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
