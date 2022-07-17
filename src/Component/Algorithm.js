
// Buy low and sell high or Buy high and sell higher
// Each values is dependable on props value which might make it easier to 
export const Algorithm = (options = {}) => { 
    const {date, price, social_count, S_MAX_LIMIT, P_MAX_LIMIT, limit_divider} = options;

    let status = 'Hold';

        if((social_count > S_MAX_LIMIT - S_MAX_LIMIT/limit_divider) && price >  P_MAX_LIMIT - P_MAX_LIMIT/limit_divider) {
            status= 'Sell';
        } else if((social_count < S_MAX_LIMIT - S_MAX_LIMIT/limit_divider) && price <  P_MAX_LIMIT - P_MAX_LIMIT/limit_divider) {
            status= 'Buy';
        } 

        return {
            'date': date,
            'status': status
        }

};