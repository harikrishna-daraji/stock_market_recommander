import { Algorithm } from "./Algorithm/Algorithm";

export const ResponseData = (options = {}) => {
    const {reponseData, SOCIAL_MAX_LIMIT, PRICE_MAX_LIMIT,limit_divider} = options;

    let stockChartXValuesFunction = [];
    let stockChartYPriceValuesFunction = [];
    let stockChartYSocialValuesFunction = [];
    let stock_recommand_status = [];

    for(var key in reponseData) {
        stockChartXValuesFunction.push(key);
        stockChartYPriceValuesFunction.push(reponseData[key]['open']);
        stockChartYSocialValuesFunction.push(reponseData[key]['social_count'])
        stock_recommand_status.push(Algorithm({date:key,price:reponseData[key]['open'],social_count:reponseData[key]['social_count'],S_MAX_LIMIT: SOCIAL_MAX_LIMIT,P_MAX_LIMIT: PRICE_MAX_LIMIT,limit_divider: limit_divider}));
    }

    return {
        'stockChartXValuesFunction': stockChartXValuesFunction,
        'stockChartYPriceValuesFunction': stockChartYPriceValuesFunction,
        'stockChartYSocialValuesFunction': stockChartYSocialValuesFunction,
        'stock_recommand_status': stock_recommand_status
    }
}