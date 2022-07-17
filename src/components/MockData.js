export const MockData = (options = {}) => {

    const {PRICE_MAX_LIMIT, SOCIAL_MAX_LIMIT} = options;

    return {
        '2022-07-16': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
         },
        '2022-07-15': {
           'open': Math.random() * PRICE_MAX_LIMIT,
           'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },            
        '2022-07-14' :{
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-13': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        }, 
        '2022-07-12': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-11': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-10': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-09': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-08': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-07': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-06': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
        '2022-07-05': {
            'open': Math.random() * PRICE_MAX_LIMIT,
            'social_count': Math.random() * SOCIAL_MAX_LIMIT
        },
    }
}