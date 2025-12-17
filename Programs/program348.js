function CountDigit(no)
{
	let iDigit = 0, iCount = 0;

	while(no != 0)
	{
		// iDigit = no % 10;
		iCount++;
		no = no / 10; // issue
	}

	return iCount;
}

function main()
{
	let iValue = 721;
	let iRet = 0;
	
	iRet = CountDigit(iValue);
	
	console.log(`${iValue} contains ${iRet} digits`);
}

main();