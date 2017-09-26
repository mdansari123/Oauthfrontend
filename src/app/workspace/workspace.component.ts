import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Workspace } from './Workspace.interface';

@Component({
  moduleId: module.id,
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            Intentname: ['', [Validators.required, Validators.minLength(5)]],
            Intentquestions: this._fb.array([
                this.initIntentquestion(),
            ])
        });
    }

    initIntentquestion() {
        return this._fb.group({
            question: ['', Validators.required],
                   });
    }

    addIntentquestion() {
        const control = <FormArray>this.myForm.controls['Intentquestions'];
        control.push(this.initIntentquestion());
    }

    removeIntentquestion(i: number) {
        const control = <FormArray>this.myForm.controls['Intentquestions'];
        control.removeAt(i);
    }

    save(model: Workspace) {
        // call API to save
        // ...
        console.log(model);
    }
}
