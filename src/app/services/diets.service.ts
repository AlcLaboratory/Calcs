import { Injectable } from "@angular/core";
import { Diet } from "../interfaces/diet.interface";
import { diet52 } from "../data/diets/5-2";
import { balancedDiet } from "../data/diets/balanced";
import { intermittentFastingDiet } from "../data/diets/intermittent-fasting";
import { Observable, of } from "rxjs";

@Injectable()
export class DietsService {
    private readonly diets: Diet[] = [diet52, balancedDiet, intermittentFastingDiet];


    public getDiets(): Observable<Diet[]> {
        return of(this.diets);
    }

    public addDiet(diet: Diet): void {
        this.diets.push(diet);
    }

    public createEmptyDiet(): Diet {
        return {
            name: '',
            description: '',
            week: {
                monday: {},
                tuesday: {},
                wednesday: {},
                thursday: {},
                friday: {},
                saturday:{},
                sunday: {}
            }
        }
    }
}
