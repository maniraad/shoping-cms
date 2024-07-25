// تابع تبدیل اعداد فارسی به اعداد لاتین 

export default function useConvertToLatinNumber(num) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const latinNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return num.replace(/[۰-۹]/g, (w) => latinNumbers[persianNumbers.indexOf(w)]);
};