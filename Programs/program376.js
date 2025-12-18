class Arithmetic {
	constructor(No1, No2)
	{
		this.A = No1;
		this.B = No2;
	}

	Addition()
	{
		return this.A + this.B;
	}

	Substraction()
	{
		return this.A - this.B;
	}
}

function main()
{
	let obj = new Arithmetic(10, 5);
	let iRet = 0;

	iRet = obj.Addition();
	console.log("Addition is", iRet);
	
	iRet = obj.Substraction();
	console.log("Substraction is", iRet);
}

main();