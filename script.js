//your JS code here. If required.
function printItself()
{
	console.log(arguments.callee.name)
}
printItself()