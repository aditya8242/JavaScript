function Count(str)
{
	let iCount = 0;

	for(iCnt = 0; iCnt < str.length; iCnt++)
	{
		if(str.charAt(iCnt) == 'l')
		{
			iCount++;
		}
	}

	return iCount;
}

function main()
{
	let data = "Hello";
	let iRet = 0;

	iRet = Count(data);

	console.log(iRet);
}

main();