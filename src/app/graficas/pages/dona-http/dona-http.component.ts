import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 
          //350, 450, 100, 70 
        ],
        backgroundColor: ['#5351E8', '#5120D4', '#204FD4', '#2593F6'  ] 
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {
        console.log(data);
        const labels = Object.keys( data );
        const values = Object.values( data );

        this.doughnutChartData['labels'] = labels;
        this.doughnutChartData['datasets'][0].data = values;
      });

  }

}
