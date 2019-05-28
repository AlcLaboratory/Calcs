import { Diet } from '~/app/interfaces/diet.interface';

export const diet52: Diet = {
    name: '5:2 diet',
    description: 'The 5:2 approach is similar to but less restrictive than alternate day fasting as adherents restrict calories for just two days per week',
    week: {
        monday: {
            calories: 600,
            proteins: 25,
            carbohydrates: 10,
            fats: 10
        },
        tuesday: {
            calories: 2000,
            proteins: 25,
            carbohydrates: 10,
            fats: 10
        },
        wednesday: {
            calories: 2000,
            proteins: 25,
            carbohydrates: 10,
            fats: 10
        },
        thursday: {
            calories: 600,
            proteins: 25,
            carbohydrates: 10,
            fats: 10
        },
        friday: {
            calories: 2000,
            proteins: 25,
            carbohydrates: 10,
            fats: 10
        },
        saturday: {
            calories: 2000,
            proteins: 25,
            carbohydrates: 10,
            fats: 10
        },
        sunday: {
            calories: 2000,
            proteins: 25,
            carbohydrates: 10,
            fats: 10
        }
    }
}
