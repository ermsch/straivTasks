import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import SignaturePad from "signature_pad";


@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  //Task Nr.5
  @ViewChild("canvas", { static: true }) canvas: ElementRef
  base64: string
  sig: SignaturePad
  signatureImage: any
  clear: boolean
  codeCopied: boolean

  showImage(data:any) {
    this.signatureImage = data
  }

  showBase64() {
    this.clear = false
    this.base64 = this.sig.toDataURL().split(';base64,')[1]
  }

  clearCanvas() {
    this.sig.clear()
    this.clear = true
  }

  copied() {
    this.codeCopied = true
    setTimeout(() => {
      this.codeCopied = false
    }, 1500);
  }

  constructor() { }

  ngOnInit(): void {
    this.sig = new SignaturePad(this.canvas.nativeElement)
  }

}
