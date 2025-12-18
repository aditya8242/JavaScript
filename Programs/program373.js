class Demo
{
	constructor()	// default
	{
		this.No1 = 0;
		this.No2 = 0;

		console.log("Inside constructor");
	}
}

function main()
{
	let obj = new Demo();

	console.log(obj.No1);
	console.log(obj.No2);
}

main();