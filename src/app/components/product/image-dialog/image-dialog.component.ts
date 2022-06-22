import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'image-dialog',
  templateUrl: 'image-dialog.component.html',
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public url: string) {}
}