export const ukraine = 
{   
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
export const latvia = 
{ 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
export const litva = 
{ 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

export const country = 
{
    
    getMyTaxes: function(salary){
        return (salary * this.tax);
    },
    getMiddleTaxes: function(){
        return (this.middleSalary*this.tax);
    },
    getTotalTaxes: function(){
        return(this.tax*this.middleSalary*this.vacancies);
    }
}
console.log(country.getMyTaxes.call(latvia,3500));
console.log(country.getMiddleTaxes.call(latvia));
console.log(country.getTotalTaxes.call(latvia));

export function getMySalary(){
    const randomSalary = Math.floor(Math.random()*(2000-1500))+1500;
    const myTax = country.getMyTaxes.call(this, randomSalary);
    const myProfit = randomSalary - myTax;
    const obj = {
        salary:randomSalary,
        tax:myTax,
        profit:myProfit
    }
    

    return obj;

}
console.log(getMySalary.call(latvia))

