import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Week } from "../interfaces/week.interface";
import { weeks } from "../data/my-fitness-pal/weeks";

@Injectable()
export class MyFitnessPalService {
    private selectedWeek: Subject<Week> = new Subject<Week>();

    public setWeek(number: number = 0): void {
        const weekNumber = number < 0 ? 0 : number;
        this.selectedWeek.next(weeks[weekNumber]);
    }

    public getWeek(): Observable<Week> {
        return this.selectedWeek.asObservable();
    }
}
