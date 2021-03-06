import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose file';

  constructor() { }

  ngOnInit(): void {
  }

  uploadFileEvt(imgFile: any): void {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name + ' - ';
      });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
        };
      };

      reader.readAsDataURL(imgFile.target.files[0]);
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose file';
    }
  }
}
