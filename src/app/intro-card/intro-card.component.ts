import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'mt-intro-card',
  template: `
  <div class="intro-card">
    <div class="no">{{introNo}}</div>
    <div class="intro">{{introDesc}}</div>
  </div>
  `,
  styles: [`
    .intro-card {
      position: relative;
      padding-left: 130px;
      height: 100%;
    }
    
    .intro-card .no {
      position: absolute;
      left: 0;
      top: 0;
      width: 130px;
      height: 100%;
      line-height: 130px;
      text-align: center;
      font-family: PingFangSC-Medium, sans-serif;
      font-size: 40px;
      color: #fff;
      letter-spacing: 1px;
      background: rgba(45, 45, 45, 0.60);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
    }
    
    .intro-card .intro {
      display: table-cell;
      vertical-align: middle;
      padding: 10px;
        background: rgba(239, 239, 239, 0.30);
        box-shadow: 0 2px 4px 0 rgba(186, 186, 186, 0.50);
        font-family: PingFangSC-Medium, sans-serif;
        font-size: 18px;
        height: 120px;
        color:#ffffff;
        letter-spacing:1px;
        line-height:28px;
        width: 1000px;
      }
  `]
})
export class IntroCardComponent implements OnInit {

  @Input() introNo: String;
  @Input() introDesc: String;

  constructor() {
  }

  ngOnInit() {
  }

}
