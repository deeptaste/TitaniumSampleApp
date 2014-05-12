//var args = arguments[0] || {};

function goBack(e) {
	$.contacts.close();
}

function showContactDetails(e) {
	var contacts = Titanium.Contacts.getAllPeople();
	var contactMsg = "<strong>" + contacts.length + "</strong> contacts found, but showing contacts with phone numbers only.<br/>";
	
	for (var i=0, cLen=contacts.length; i<cLen; i++) { 
		var person = contacts[i];
		
		if (person.phone.mobile) {
			contactMsg  += "<br/> [" + (i+1) + "] <b>" + person.fullName + "</b>";
			contactMsg  += " : " + person.phone.mobile + " (Mobile)";	
		}
	}
	
	$.contactDetails.html = contactMsg;
}
