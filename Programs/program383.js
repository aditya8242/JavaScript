function CountSmall(str)
{
	let iCount = 0;

	for(iCnt = 0; iCnt < str.length; iCnt++)
	{
		if(str.charAt(iCnt) >= 'a' && str.charAt(iCnt) <= 'z')
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

	iRet = CountSmall(data);

	console.log(iRet);
}

main();