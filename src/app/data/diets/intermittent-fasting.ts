import { Diet } from '~/app/interfaces/diet.interface';

export const intermittentFastingDiet: Diet = {
    name: 'intermittent fasting',
    description: '',
    week: {
        monday: {
            calories: 2000,
            startHour: 12,
            endHour: 20
        },
        tuesday: {
            calories: 2000,
            startHour: 12,
            endHour: 20
        },
        wednesday: {
            calories: 2000,
            startHour: 12,
            endHour: 20
        },
        thursday: {
            calories: 2000,
            startHour: 12,
            endHour: 20
        },
        friday: {
            calories: 2000,
            startHour: 12,
            endHour: 20
        },
        saturday: {
            calories: 2000,
            startHour: 12,
            endHour: 20
        },
        sunday: {
            calories: 2000,
            startHour: 12,
            endHour: 20
        }
    }
}
