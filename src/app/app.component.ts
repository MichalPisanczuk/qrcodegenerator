import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
  QrcodeComponent,
} from '@techiediaries/ngx-qrcode';
 import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  public elementType = NgxQrcodeElementTypes.URL;
  public correctionLevel = NgxQrcodeErrorCorrectionLevels.LOW;
  public value = 'pisanczuk.com';
  public margin = 10;
  public qrcolor = 'ffffff';
  public bgcolor = '000000';
  public scale = 3;
  public level: any;

  @ViewChild('imgqr') qrImg!: ElementRef;
  @ViewChild(QrcodeComponent) qrComp!: QrcodeComponent;

  constructor(private _fileSaverService:FileSaverService) {}

  // switch(this.level) {
  //   case 1: this.correctionLevel = NgxQrcodeErrorCorrectionLevels.LOW;
  //   case 2: this.correctionLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;
  //   case 3: this.correctionLevel = NgxQrcodeErrorCorrectionLevels.QUARTILE;
  //   case 4: this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  // }

  ngAfterViewInit() {
    console.log(this.qrImg);


  }
  saveQrCode() {
    this.qrComp['toDataURL']().then((data: string) => {
      this._fileSaverService.save(this._dataURItoBlob(data), 'qr.png');
    });
  }
  _dataURItoBlob(dataURI:string) {
    // convert base64/URLEncoded data component to raw binary data held in a string

    var byteString;

    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array

    var ia = new Uint8Array(byteString.length);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }
}
