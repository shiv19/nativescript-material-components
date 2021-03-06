import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { Directive } from '@angular/core';

@Directive({ selector: 'MDCardView' })
export class MaterialCardViewDirective {}

@NgModule({
    declarations: [MaterialCardViewDirective],
    exports: [MaterialCardViewDirective]
})
export class NativeScriptMaterialCardViewModule {}

registerElement('MDCardView', () => require('../cardview').CardView);
