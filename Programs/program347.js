function CheckPerfect(no)
{
	let iCnt = 0, iSum = 0;

	for(iCnt = 0; iCnt <= (no/2); iCnt++)
	{
		if(no % iCnt == 0)
		{
			iSum = iSum + iCnt;
		}
	}

	if(iSum == no)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function main()
{
	let iValue = 28;
	let bRet = false;

	bRet = CheckPerfect(iValue);

	if(bRet == true)
	{
		console.log(`${iValue} is a perfect number.`);
	}
	else
	{
		console.log(`${iValue} is not a perfect number.`);
	}
}

main();