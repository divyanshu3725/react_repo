// NAMEACCESSOR FUNCTION (FUNCTIONALITY)
export function fullName(obj) {
    return `${obj.firstNaam}`
};

// ADDRESSACCESSOR FUNCTION (FUNCTIONAILITY)
export function fullAddress(obj) {
    return `${obj.city}, ${obj.state}, ${obj.pincode}, ${obj.country}`;
};

// SHOW HEADER FUNCTION (FUNCTIONALITY)
export function showHeaders(obj) {
    if (obj.info.aggregatedDiscountInfoV3) {
        return `${obj.info.aggregatedDiscountInfoV3.header} ${obj.info.aggregatedDiscountInfoV3.subHeader}`;
    }
    else {
        return '';
    };
};

// SHOW RATING FUNCTION (FUNCTIONALITY)
export function showRating(num) {
    if (num.toString().indexOf('.')==-1) {
        return `${num}.0`
    }
    return num; 
};