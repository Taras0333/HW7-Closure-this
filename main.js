const ukraine = {
	tax: 0.195,
	midSalary: 1789,
	vacancies: 11476,
};
const latvia = {
	tax: 0.25,
	midSalary: 1586,
	vacancies: 3921,
};
const litva = {
	tax: 0.15,
	midSalary: 1509,
	vacancies: 1114,
};

function getMyTaxes(salary){
	return salary * this.tax;
}
function getMidTaxes(){
	return this.midSalary * this.tax;
}
function getTotalTaxes(){
	return this.midSalary * this.tax * this.vacancies;
}
const yourTaxeFeeUkraine = getMyTaxes.call(ukraine, +prompt('Write your salary to calculete taxes in Ukraine'));
const yourTaxeFeeLatvia = getMyTaxes.call(latvia, +prompt('Write your salary to calculete taxes in Latvia'));
const yourTaxeFeeLithuania = getMyTaxes.call(litva, +prompt('Write your salary to calculete taxes in Lithuania'));


const ukraineMid = getMidTaxes.call(ukraine);
const latviaMid = getMidTaxes.call(latvia);
const lithuaniaMid = getMidTaxes.call(litva);

const ukraineTotal = getTotalTaxes.call(ukraine);
const latviaTotal = getTotalTaxes.call(latvia);
const lithuaniaTotal = getTotalTaxes.call(litva);



