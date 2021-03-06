import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS, get_request } from '../data';

@Component({
    selector: 'app-hierarchical-grid-resizing',
    styleUrls: ['./hierarchical-grid-resizing.component.scss'],
    templateUrl: 'hierarchical-grid-resizing.component.html'
})

export class HGridColumnResizingSampleComponent implements OnInit {
    public years = 10;
    public localdata: any[];
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.loaddata()
    }
    async loaddata() {
        let data = await get_request()
        for (const singer of data.results) {
            this.getSales(singer);
        }
       
        this.localdata = data.results;
        console.log(this.localdata)
    }

    public ngOnInit(): void {

    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public getSales(singer: any): any {
        singer['Sales'] = this.getSalesData(10);
    }

    public getSalesData(years?: number): any[] {
        if (years === undefined) {
            years = 20;
        }
        const sales: any[] = [];
        for (let y = 0; y < years; y++) {
            const value = this.getRandomNumber(0, 1000);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            sales.push({Copies: value, Year: y});
        }
        return sales;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public formatter = (a) => a;
}
