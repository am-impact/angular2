import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PATTERN } from './../config';

@Component({
    selector: 'app-formexample',
    templateUrl: './formexample.component.html'
})
export class FormexampleComponent implements OnInit {
    formulierNaam : FormGroup;

    /**
     * @constructor
     */
    constructor( fb: FormBuilder ) {
        // Default values en validators zetten
        this.formulierNaam = fb.group({
            'companyName' : ['', Validators.required],

            // Bij meerdere validators moet je deze stoppen in een compose functie
            'yourName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            'email' : ['', Validators.compose([
                    Validators.required,
                    Validators.pattern( PATTERN.email )
                ])
            ],
            'telephone' : ''
        });
    }

    /**
     * Init Component Lifecycle Hook
     */
    ngOnInit() {}

    /**
     * Form submit
     *
     * @param {object} formData
     */
    onSubmit( formData: any ) {
        console.log( formData );
    }
}
