function Minimum(Brr)
{
	let iMin = 0, iCnt = 0;
	iMin = Brr[0];

	for(iCnt = 0; iCnt < Brr.length; iCnt++)
	{
		if(Brr[iCnt] < iMin)
		{
			iMin = Brr[iCnt];
		}
	}

	return iMin;
}

function main()
{
	const Arr = [10, 20, 30, 40, 50];

	let iRet = Minimum(Arr);
	console.log("Minimum element is",iRet);
}

main();