import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {ClipboardService} from 'ngx-clipboard';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.scss']
})
export class CopyTextComponent implements OnInit {
  randomText = 'lorem ipsum';
  text1: string;
  isCopied1: boolean;

  constructor(private cbService: ClipboardService) { }

  ngOnInit(): void {
    this.cbService.copyResponse$.subscribe(res => {
      if (res.isSuccess) {
        alert('Copy successfully');
      }
    });
  }

  copyToCBText(): void {
    this.cbService.copy(this.randomText);
  }

  onCopyFailure(): void {
    alert('Copy failed.');
  }
}
