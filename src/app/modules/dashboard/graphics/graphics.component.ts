import { Component } from '@angular/core';
import {
  LegendPosition,
  ViewDimensions,
  calculateViewDimensions,
} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class GraphicsComponent {
  barChartData: any[];
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {
    this.barChartData = [
      {
        name: 'Germany',
        value: 8940000,
      },
      {
        name: 'USA',
        value: 5000000,
      },
      {
        name: 'France',
        value: 7200000,
      },
      {
        name: 'UK',
        value: 6200000,
      },
      {
        name: 'Italy',
        value: 4200000,
      },
      {
        name: 'Spain',
        value: 8200000,
      },
    ];

    this.dos = [
      {
        name: 'Guinea-Bissau',
        series: [
          {
            value: 4335,
            name: '2016-09-23T19:07:55.824Z',
          },
          {
            value: 5084,
            name: '2016-09-16T06:26:25.647Z',
          },
          {
            value: 2844,
            name: '2016-09-24T06:17:51.329Z',
          },
          {
            value: 2667,
            name: '2016-09-19T08:22:25.645Z',
          },
          {
            value: 3595,
            name: '2016-09-18T03:42:30.704Z',
          },
          {
            name: '2016-09-15T11:36:30.166Z',
            value: 3729,
          },
          {
            name: '2016-09-17T06:44:36.352Z',
            value: 6942,
          },
          {
            name: '2016-09-21T21:14:43.333Z',
            value: 3837,
          },
          {
            name: '2016-09-19T12:57:46.358Z',
            value: 6951,
          },
          {
            name: '2016-09-14T02:07:32.679Z',
            value: 6133,
          },
          {
            name: '2016-09-19T04:28:47.423Z',
            value: 4865,
          },
          {
            name: '2016-09-13T16:37:17.452Z',
            value: 3192,
          },
          {
            name: '2016-09-16T20:49:33.735Z',
            value: 2126,
          },
          {
            name: '2016-09-15T14:00:48.308Z',
            value: 3202,
          },
          {
            name: '2016-09-13T15:14:19.529Z',
            value: 4328,
          },
          {
            name: '2016-09-23T16:09:39.847Z',
            value: 2149,
          },
        ],
      },
      {
        name: 'South Georgia',
        series: [
          {
            value: 6799,
            name: '2016-09-23T19:07:55.824Z',
          },
          {
            value: 3104,
            name: '2016-09-16T06:26:25.647Z',
          },
          {
            value: 6967,
            name: '2016-09-24T06:17:51.329Z',
          },
          {
            value: 6678,
            name: '2016-09-19T08:22:25.645Z',
          },
          {
            value: 6877,
            name: '2016-09-18T03:42:30.704Z',
          },
          {
            name: '2016-09-15T11:36:30.166Z',
            value: 6118,
          },
          {
            name: '2016-09-17T06:44:36.352Z',
            value: 6935,
          },
          {
            name: '2016-09-21T21:14:43.333Z',
            value: 4112,
          },
          {
            name: '2016-09-19T12:57:46.358Z',
            value: 2057,
          },
          {
            name: '2016-09-14T02:07:32.679Z',
            value: 6006,
          },
          {
            name: '2016-09-19T04:28:47.423Z',
            value: 3921,
          },
          {
            name: '2016-09-13T16:37:17.452Z',
            value: 2464,
          },
          {
            name: '2016-09-16T20:49:33.735Z',
            value: 3160,
          },
          {
            name: '2016-09-15T14:00:48.308Z',
            value: 5494,
          },
          {
            name: '2016-09-13T15:14:19.529Z',
            value: 6057,
          },
          {
            name: '2016-09-23T16:09:39.847Z',
            value: 3073,
          },
        ],
      },
      {
        name: 'Uganda',
        series: [
          {
            value: 2356,
            name: '2016-09-23T19:07:55.824Z',
          },
          {
            value: 2799,
            name: '2016-09-16T06:26:25.647Z',
          },
          {
            value: 4291,
            name: '2016-09-24T06:17:51.329Z',
          },
          {
            value: 2841,
            name: '2016-09-19T08:22:25.645Z',
          },
          {
            value: 5165,
            name: '2016-09-18T03:42:30.704Z',
          },
          {
            name: '2016-09-15T11:36:30.166Z',
            value: 3878,
          },
          {
            name: '2016-09-17T06:44:36.352Z',
            value: 3382,
          },
          {
            name: '2016-09-21T21:14:43.333Z',
            value: 3819,
          },
          {
            name: '2016-09-19T12:57:46.358Z',
            value: 6873,
          },
          {
            name: '2016-09-14T02:07:32.679Z',
            value: 3139,
          },
          {
            name: '2016-09-19T04:28:47.423Z',
            value: 5903,
          },
          {
            name: '2016-09-13T16:37:17.452Z',
            value: 3660,
          },
          {
            name: '2016-09-16T20:49:33.735Z',
            value: 3688,
          },
          {
            name: '2016-09-15T14:00:48.308Z',
            value: 5159,
          },
          {
            name: '2016-09-13T15:14:19.529Z',
            value: 2584,
          },
          {
            name: '2016-09-23T16:09:39.847Z',
            value: 2318,
          },
        ],
      },
      {
        name: 'Madagascar',
        series: [
          {
            value: 6892,
            name: '2016-09-23T19:07:55.824Z',
          },
          {
            value: 4527,
            name: '2016-09-16T06:26:25.647Z',
          },
          {
            value: 3122,
            name: '2016-09-24T06:17:51.329Z',
          },
          {
            value: 5982,
            name: '2016-09-19T08:22:25.645Z',
          },
          {
            value: 6961,
            name: '2016-09-18T03:42:30.704Z',
          },
          {
            name: '2016-09-15T11:36:30.166Z',
            value: 2896,
          },
          {
            name: '2016-09-17T06:44:36.352Z',
            value: 4949,
          },
          {
            name: '2016-09-21T21:14:43.333Z',
            value: 5977,
          },
          {
            name: '2016-09-19T12:57:46.358Z',
            value: 6070,
          },
          {
            name: '2016-09-14T02:07:32.679Z',
            value: 2261,
          },
          {
            name: '2016-09-19T04:28:47.423Z',
            value: 4906,
          },
          {
            name: '2016-09-13T16:37:17.452Z',
            value: 6798,
          },
          {
            name: '2016-09-16T20:49:33.735Z',
            value: 3086,
          },
          {
            name: '2016-09-15T14:00:48.308Z',
            value: 2985,
          },
          {
            name: '2016-09-13T15:14:19.529Z',
            value: 4922,
          },
          {
            name: '2016-09-23T16:09:39.847Z',
            value: 3555,
          },
        ],
      },
      {
        name: 'Guyana',
        series: [
          {
            value: 4666,
            name: '2016-09-23T19:07:55.824Z',
          },
          {
            value: 2454,
            name: '2016-09-16T06:26:25.647Z',
          },
          {
            value: 5660,
            name: '2016-09-24T06:17:51.329Z',
          },
          {
            value: 5075,
            name: '2016-09-19T08:22:25.645Z',
          },
          {
            value: 2954,
            name: '2016-09-18T03:42:30.704Z',
          },
          {
            name: '2016-09-15T11:36:30.166Z',
            value: 4394,
          },
          {
            name: '2016-09-17T06:44:36.352Z',
            value: 3763,
          },
          {
            name: '2016-09-21T21:14:43.333Z',
            value: 3132,
          },
          {
            name: '2016-09-19T12:57:46.358Z',
            value: 4499,
          },
          {
            name: '2016-09-14T02:07:32.679Z',
            value: 6095,
          },
          {
            name: '2016-09-19T04:28:47.423Z',
            value: 6083,
          },
          {
            name: '2016-09-13T16:37:17.452Z',
            value: 3641,
          },
          {
            name: '2016-09-16T20:49:33.735Z',
            value: 3156,
          },
          {
            name: '2016-09-15T14:00:48.308Z',
            value: 5546,
          },
          {
            name: '2016-09-13T15:14:19.529Z',
            value: 2513,
          },
          {
            name: '2016-09-23T16:09:39.847Z',
            value: 5915,
          },
        ],
      },
    ];
  }

  onSelect(event: any) {
    console.log(event);
  }

  //NEW

  dos: any[];

  // options
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  bwlow = LegendPosition.Below;

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  gradient: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  legendTitle: string = 'Years';

  tres = [
    {
      name: 'Germany',
      value: 40632,
      extra: {
        code: 'de',
      },
    },
    {
      name: 'United States',
      value: 50000,
      extra: {
        code: 'us',
      },
    },
    {
      name: 'France',
      value: 36745,
      extra: {
        code: 'fr',
      },
    },
    {
      name: 'United Kingdom',
      value: 36240,
      extra: {
        code: 'uk',
      },
    },
    {
      name: 'Italy',
      value: 35800,
      extra: {
        code: 'it',
      },
    },
    {
      name: 'Moldova',
      value: 55168,
    },
    {
      name: 'Sri Lanka',
      value: 31801,
    },
    {
      name: 'Cyprus',
      value: 56340,
    },
    {
      name: 'Viet Nam',
      value: 43139,
    },
    {
      name: 'San Marino',
      value: 52258,
    },
    {
      name: 'Switzerland',
      value: 27344,
    },
  ];
}
