import { Week } from "~/app/interfaces/week.interface";

/*
    This is mock of data which we will download from the my fitness pal later.
    The mock is enough for a prototype.
*/

export const weeks: Week[] = [
    {
        number: 1,
        monday: {
            calories: 1664,
            proteins: 75,
            carbohydrates: 200,
            fats: 70
        },
        tuesday: {
            calories: 2122,
            proteins: 88,
            carbohydrates: 211,
            fats: 55
        },
        wednesday: {
            calories: 1800,
            proteins: 56,
            carbohydrates: 311,
            fats: 99
        },
        thursday: {
            calories: 2700,
            proteins: 175,
            carbohydrates: 300,
            fats: 90
        },
        friday: {
            calories: 2200,
            proteins: 90,
            carbohydrates: 281,
            fats: 90
        },
        saturday: {
            calories: 2400,
            proteins: 102,
            carbohydrates: 180,
            fats: 90
        },
        sunday: {
            calories: 2211,
            proteins: 90,
            carbohydrates: 321,
            fats: 32
        }
    },
    {
        number: 2,
        monday: {
            calories: 1200,
            proteins: 89,
            carbohydrates: 120,
            fats: 79
        },
        tuesday: {
            calories: 2322,
            proteins: 79,
            carbohydrates: 200,
            fats: 70
        },
        wednesday: {
            calories: 3200,
            proteins: 111,
            carbohydrates: 405,
            fats: 72
        },
        thursday: {
            calories: 2300,
            proteins: 52,
            carbohydrates: 399,
            fats: 21
        },
        friday: {
            calories: 2109,
            proteins: 152,
            carbohydrates: 200,
            fats: 50
        },
        saturday: {
            calories: 1664,
            proteins: 75,
            carbohydrates: 200,
            fats: 70
        },
        sunday: {
            calories: 4020,
            proteins: 230,
            carbohydrates: 452,
            fats: 112
        }
    }
];
