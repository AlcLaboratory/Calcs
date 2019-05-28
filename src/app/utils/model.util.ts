import { Day } from '../interfaces/day.interface';
import { Diet } from '../interfaces/diet.interface';

type modelToChange = Day | Diet;

export class ModelUtil {
    public static onModelChange(model: modelToChange, value: string, fieldName: string): void {
        model[fieldName] = value;
    }
}
