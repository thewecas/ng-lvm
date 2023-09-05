import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  hidePassword = true;
  hideConfirmPassword = true;
  title!: string;

  userForm!: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, @Inject(MAT_DIALOG_DATA) public user: any | null) {
    console.log("Received user  : ", user);

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      employeeId: ['', [Validators.required, Validators.pattern(/PWS\d{1,3}/i)]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', Validators.required],
      role: ['employee', Validators.required],
    }
    );

    if (!this.user) {
      this.title = 'New User ';
      this.userForm.addControl('password', this.fb.control('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,16}')]));
      this.userForm.addControl('confirmPassword', this.fb.control('', [Validators.required, this.passwordMatch]));
    }

    else {
      this.title = "Update User";
      this.userForm.setValue({
        employeeId: this.user.employeeId,
        name: this.user.name,
        email: this.user.email,
        designation: this.user.designation,
        role: this.user.role
      });
    }

  }

  onSubmit() {
    console.log(this.userForm);
    if (!this.user)
      this.userService
        .addNewUser(this.userForm.value)
        .subscribe({
          next: res => {
            console.log("User Added ");
            this.userService.isUpdated$.next(true);
          },
          error: err => {
            console.log(err);

          }
        });
    else
      this.userService.updateUser(this.user.uid, this.userForm.value).subscribe({
        next: res => {
          console.log("User updated ");
          this.userService.isUpdated$.next(true);

        },
        error: err => {
          console.log(err);

        }
      });
  }


  private passwordPattern = '';
  setPattern(pattern: string) {
    this.passwordPattern = pattern;
  }

  passwordMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const confirmPassword = control?.value ?? '';
    return this.passwordPattern != confirmPassword ? {
      passwordMatch: {
        password: this.passwordPattern,
        confirmPassword: confirmPassword,
        isMatch: false
      }
    } : null;
  };



}
