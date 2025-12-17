function Addition(iNo1, iNo2)
{
	let iAns = 0;
	iAns = iNo1 + iNo2;
	return iAns;	
}

function main()
{
	let iValue1 = 10, iValue2 = 11;
	let iRet = 0;

	iRet = Addition(iValue1, iValue2);

	console.log("Addition is " + iRet);
}

main();