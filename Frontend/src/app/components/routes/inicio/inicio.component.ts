import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
 
export class InicioComponent implements OnInit {
  jsValue = 75;
  htmlCssValue = 90;
  tsValue = 60;
  azureValue = 50;

  Values() {
  const jsProgress = document.getElementById("js-progress") as HTMLProgressElement;
  const jsValueEl = document.getElementById("js-value") as HTMLSpanElement;
  jsProgress.value = this.jsValue;
  jsValueEl.innerText = `${this.jsValue}%`;
  const htmlCssProgress = document.getElementById("html-css-progress") as HTMLProgressElement;
  const htmlCssValueEl = document.getElementById("html-css-value") as HTMLSpanElement;
  htmlCssProgress.value = this.htmlCssValue;
  htmlCssValueEl.innerText = `${this.htmlCssValue}%`;

  const tsProgress = document.getElementById("ts-progress") as HTMLProgressElement;
  const tsValueEl = document.getElementById("ts-value") as HTMLSpanElement;
  tsProgress.value = this.tsValue;
  tsValueEl.innerText = `${this.tsValue}%`;

  const azureProgress = document.getElementById("azure-progress") as HTMLProgressElement;
  const azureValueEl = document.getElementById("azure-value") as HTMLSpanElement;
  azureProgress.value = this.azureValue;
  azureValueEl.innerText = `${this.azureValue}%`;
  }

  constructor() { }

  ngOnInit(): void {
  this.Values();
  }

}
