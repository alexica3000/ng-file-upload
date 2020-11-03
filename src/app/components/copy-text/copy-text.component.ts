import {Component, OnDestroy, OnInit} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {ClipboardService} from 'ngx-clipboard';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.scss']
})
export class CopyTextComponent implements OnInit, OnDestroy {
  randomText = 'lorem ipsum';
  text1: string;
  isCopied1: boolean;
  private cbSub: Subscription;

  constructor(private cbService: ClipboardService) { }

  ngOnInit(): void {
    this.cbSub = this.cbService.copyResponse$.subscribe(res => {
      if (res.isSuccess) {
        alert('Copy successfully');
      }
    });
  }

  ngOnDestroy(): void {
    this.cbSub.unsubscribe();
  }

  copyToCBText(): void {
    this.cbService.copy(this.randomText);
  }

  onCopyFailure(): void {
    alert('Copy failed.');
  }
}
