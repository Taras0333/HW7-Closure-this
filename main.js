const ukraine = {
	tax: 0.195,
	midSalary: 1789,
	vacancies: 11476,
	name: 'Ukraine',
};
const latvia = {
	tax: 0.25,
	midSalary: 1586,
	vacancies: 3921,
	name: 'Latvia',
};
const litva = {
	tax: 0.15,
	midSalary: 1509,
	vacancies: 1114,
	name: 'Lithuania',
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
function getMySalary(){
	return {} + salary;
}
function randomSalary(){
	let salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
	return salary;
}

let i = 1;
let object = {};
function getMySalary(country){
	setTimeout(() =>{
		object.salary = randomSalary();
		object.taxes = this.tax * object.salary;
		object.profit = object.salary - object.taxes; 
		console.log(this.name, object);
		i++
		object = {};
		if(i <= 22){
		getMySalary.call(this);
		}

	}, 10000)
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

const container=document.querySelector("#container");
container.innerHTML=`
<p>Taxes for Ukraine: ${yourTaxeFeeUkraine};</p>
<p>Taxes for Latvia : ${yourTaxeFeeLatvia};</p>
<p>Taxes for Lithuania: ${yourTaxeFeeLithuania};</p>
<p>Middle taxes for Ukraine: ${ukraineMid};</p>
<p>Middle taxes for Latvia: ${latviaMid};</p>
<p>Middle taxes for Lithuania: ${lithuaniaMid};</p>
<p>Total taxes for Ukraine: ${ukraineTotal};</p>
<p>Total taxes for Latvia: ${latviaTotal};</p>
<p>Total taxes for Lithuania: ${lithuaniaTotal};</p>

`;


getMySalary.call(ukraine);
getMySalary.call(latvia);
getMySalary.call(litva);