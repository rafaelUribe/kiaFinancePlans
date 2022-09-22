const getMonthlyPayment = (price, downpayment, periods, anual_rate, tax, gap = 0) => {
    const presentValue_without_life_insurance = price - downpayment + gap
    const life_insurance_bill = price * .0181765
    const presentValue = presentValue_without_life_insurance + life_insurance_bill
    const rate = anual_rate * (1 + tax) / 12
    const rate_without_tax = anual_rate / 12
    const payment = (rate * (presentValue * Math.pow((rate + 1), periods))) / ((rate + 1) * (Math.pow((rate + 1), periods) - 1));
    return payment;
}

export default getMonthlyPayment