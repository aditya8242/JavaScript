function Maximum(Brr)
{
	let iMax = 0, iCnt = 0;
	iMax = Brr[0];

	for(iCnt = 0; iCnt < Brr.length; iCnt++)
	{
		if(Brr[iCnt] > iMax)
		{
			iMax = Brr[iCnt];
		}
	}

	return iMax;
}

function main()
{
	const Arr = [10, 20, 30, 40, 50];

	let iRet = Maximum(Arr);
	console.log("Maximum element is",iRet);
}

main();