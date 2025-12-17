function CheckEvenOdd(no)
{
	if((no % 2) == 0)
	{
		console.log("It is even number");
	}
	else
	{
		console.log("It is odd number");
	}
}

function main()
{
	let iValue = 10;

	CheckEvenOdd(iValue);
}

main();