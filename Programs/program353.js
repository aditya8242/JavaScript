function SumDigits(no)
{
	let iDigit = 0;
	let iSum = 0;

	while(no != 0)
	{
		iDigit = no % 10;
		iSum = iSum + iDigit;
		no = Math.floor(no / 10);
	}

	return iSum;
}

function main()
{
	let iValue = 721965;
	let iRet = 0;
	
	iRet = SumDigits(iValue);
	
	console.log(`Sum of digits of ${iValue} is ${iRet}`);
}

main();