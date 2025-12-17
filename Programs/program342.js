function Factorial(no)
{
	let iCnt = 0;
	let iFact = 1;

	//for(iCnt = no; iCnt >= 1; iCnt--)
	//{
	//	iFact = iFact * iCnt;
	//}

	while(no != 0)
	{
		iFact = iFact * no;
		no--;
	}

	return iFact;
}

function main()
{
	let iValue = 20;
	let iRet = 0;

	iRet = Factorial(iValue);

	console.log("Factorial is " + iRet);
}

main();