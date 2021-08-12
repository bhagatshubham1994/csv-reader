import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-cases-report',
  templateUrl: './cases-report.component.html',
  styleUrls: ['./cases-report.component.css']
})
export class CasesReportComponent implements OnInit {

  covidData: any = [];

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.covidService.getInfo().subscribe(data => {
      const list = data.split('\n');
      console.log('list:', list)

      list.forEach(e => {
        this.covidData.push(e);
        console.log('covidData:', this.covidData);
      })
    })
  }
}
