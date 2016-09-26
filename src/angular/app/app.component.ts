import { Component } from '@angular/core';
import { PATH } from './config';

@Component({
    selector: 'app-root',
    templateUrl: `${PATH.templates}app`,
    interpolation: ["[[", "]]"]
})
export class AppComponent {
    title = 'app works!!';
}
