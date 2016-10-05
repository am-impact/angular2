import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    interpolation: ["[[", "]]"]
})
export class AppComponent {
    title = 'app works!!';
    foo = 'Input waarde';
}
