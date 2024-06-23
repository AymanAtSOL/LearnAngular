import {Component} from '@angular/core';

@Component({
    selector:'myApp-header',
    standalone: true, // set false for module based componenets (old way)
    templateUrl: './header.component.html',
    styleUrl:'./header.component.css'
})
export class HeaderComponent{ }
