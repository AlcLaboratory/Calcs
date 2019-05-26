import { MyFitnessPalApi } from "../interfaces/my-fitness-pal-api.interface";

const myFitnessPalUrl = 'https://www.myfitnesspal.com/';

export const myFitnessPalApi: MyFitnessPalApi = {
    userDiary: `${myFitnessPalUrl}printable_diary/` // + username
}
