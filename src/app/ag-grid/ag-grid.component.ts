import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app"})
export class AGgridComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete Details",
        children: [
          {
            headerName: "Athlete",
            field: "athlete",
            width: 150,
            filter: "agTextColumnFilter"
          },
          {
            headerName: "Age",
            field: "age",
            width: 90,
            filter: "agNumberColumnFilter"
          },
          {
            headerName: "Country",
            field: "country",
            width: 120
          }
        ]
      },
      {
        headerName: "Sports Results",
        children: [
          {
            headerName: "Sport",
            field: "sport",
            width: 110
          },
          {
            headerName: "Total",
            columnGroupShow: "closed",
            field: "total",
            width: 100,
            filter: "agNumberColumnFilter"
          },
          {
            headerName: "Gold",
            columnGroupShow: "open",
            field: "gold",
            width: 100,
            filter: "agNumberColumnFilter"
          },
          {
            headerName: "Silver",
            columnGroupShow: "open",
            field: "silver",
            width: 100,
            filter: "agNumberColumnFilter"
          },
          {
            headerName: "Bronze",
            columnGroupShow: "open",
            field: "bronze",
            width: 100,
            filter: "agNumberColumnFilter"
          }
        ]
      }
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }
}
