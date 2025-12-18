/*
function Addition(A, B)
{
	return A+B;
}
*/

Addition = (A, B) => {return A+B;}

function main()
{
	let Ret = 0;
	Ret = Addition(10,11);
	console.log("Addition is", Ret);
}

main();