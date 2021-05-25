import { Component, DoCheck, Input, ViewChild, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective, Label } from 'ng2-charts';
import {DualCardService} from '../dual-card.service';

@Component({
  selector: 'app-age-item',
  templateUrl: './age-item.component.html',
  styleUrls: ['./age-item.component.css'],
})
export class AgeItemComponent implements OnInit, OnDestroy {
 dataList;
  @ViewChild("baseChart")
    chart: BaseChartDirective;
  dataMen = [];
  dataWomen = [];
  dataLabel = [];

  constructor(
    private dualCardService: DualCardService
  ) {}

  ngOnInit(): void {
    this.dualCardService.ageListChanged.subscribe((list) => {
      this.dataList = list;
      this.handleBarChartData();
      this.updateData();
    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: function (value, context) {
          return value + '%';
        }
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    layout: {
      padding: {
        top: 25,
      },
    },
    tooltips: { enabled: false },
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [pluginDataLabels];

  barChartData = [
    {
      data: [],
      stack: 'a',
      label: 'Men',
      backgroundColor: '#1E90FF',
      hoverBackgroundColor: '#1E90FF',
      datalabels: {
        display: false,
      },
    },
    {
      data: [],
      stack: 'a',
      label: 'Women',
      backgroundColor: 'purple',
      hoverBackgroundColor: 'purple',
    },
  ];

  handleBarChartData() {
    for (let dataItem of this.dataList) {
      if (dataItem.gender === 'Men') {
        this.dataMen = dataItem.data.map((element) => element.quantity);
        this.handleBarChartLabels(dataItem.data);
      } else {
        this.dataWomen = dataItem.data.map((element) => element.quantity);
      }
    }
  }

  handleBarChartLabels(data) {
    for (let itemLabel of data) {
      if (itemLabel.checked) {
        if (this.dataLabel.length > 0) {
          const labelList = this.dataLabel.findIndex(
            (item) => item === itemLabel.label
          );
          labelList === -1 ? this.dataLabel.push(itemLabel.label) : this.dataLabel;
        } else {
          this.dataLabel.push(itemLabel.label);
        }
      } else if (!itemLabel.checked) {
        if (this.dataLabel.length > 0) {
        const indexID = this.dataLabel.findIndex(item => item === itemLabel.label);
        indexID !== -1 && this.dataLabel.splice(indexID, 1);
        }   
      }
    }
  }

  updateData() {
    this.barChartData[0] = {
      ...this.barChartData[0],
      data: this.dataMen,
    };
    this.barChartData[1] = {
      ...this.barChartData[1],
      data: this.dataWomen,
    };
    this.barChartLabels = this.dataLabel;
  }

  ngOnDestroy(): any {
  }
}
