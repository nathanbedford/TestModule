import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibService {
    constructor() { }
}
MyLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MyLibService.ctorParameters = () => [];
/** @nocollapse */ MyLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-my-lib',
                template: `
    <p>
      my-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
MyLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibComponent],
                imports: [],
                exports: [MyLibComponent]
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

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=nathanbedford-angular-test.js.map
