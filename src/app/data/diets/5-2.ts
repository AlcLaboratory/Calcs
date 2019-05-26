import { Diet } from '~/app/interfaces/diet.interface';

export const diet52: Diet = {
    name: '5:2 diet',
    description: 'The 5:2 approach is similar to but less restrictive than alternate day fasting as adherents restrict calories for just two days per week',
    week: {
        monday: {
            calories: 600
        },
        tuesday: {
            calories: 2000
        },
        wednesday: {
            calories: 2000
        },
        thursday: {
            calories: 600
        },
        friday: {
            calories: 2000
        },
        saturday: {
            calories: 2000
        },
        sunday: {
            calories: 2000
        }
    }
}
