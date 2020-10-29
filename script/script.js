

function validationEvent()
{
	var buttonOptions = document.getElementsByName("duck");
	for(var x =0; x<buttonOptions.length; x++)
	{
		if(buttonOptions[x].checked !=false)
		{
			if(confirm("You have chosen "+buttonOptions[x].value+". Do you wish to keep this?"))
				return true;
		}
	}

}