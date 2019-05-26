import { Injectable } from "@angular/core";
import { Diet } from "../interfaces/diet.interface";
import { diet52 } from "../data/diets/5-2";
import { balancedDiet } from "../data/diets/balanced";
import { intermittentFastingDiet } from "../data/diets/intermittent-fasting";
import { Observable, of } from "rxjs";

@Injectable()
export class DietsService {

    public getDiets(): Observable<Diet[]> {
        return of([diet52, balancedDiet, intermittentFastingDiet]);
    }
}
