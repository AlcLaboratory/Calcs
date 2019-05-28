import { Injectable } from "@angular/core";
import { Diet } from "../interfaces/diet.interface";
import { diet52 } from "../data/diets/5-2";
import { balancedDiet } from "../data/diets/balanced";
import { intermittentFastingDiet } from "../data/diets/intermittent-fasting";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class DietsService {
    private diets: BehaviorSubject<Diet[]> = new BehaviorSubject<Diet[]>([diet52, balancedDiet, intermittentFastingDiet]);


    public getDiets(): Observable<Diet[]> {
        return this.diets.asObservable();
    }

    public addDiet(diet: Diet): void {
        const dietsData = this.getDietsValue();
        dietsData.push(diet);
        this.diets.next(dietsData);
    }

    public removeDiet(dietToRemove: Diet): void {
        const newDietsData = this.getDietsValue().filter(diet => !Object.is(diet, dietToRemove));
        this.diets.next(newDietsData);
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

    private getDietsValue(): Diet[] {
        return this.diets.getValue();
    }
}
