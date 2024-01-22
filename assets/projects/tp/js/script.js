function verif() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var genderSelected = document.getElementsByName('gender');
    var country = document.getElementById('country').value;
    var languagesSelected = document.forms.elements('langue')
    var date = document.getElementById('naissance').value;


    if (firstName === '') {
        alert('veuillez entrer votre nom ');
        return false;
    }
    else if (lastName === '') {
        alert('veuillez entrer votre prenom ');
        return false;
    }
    else if (!genderSelected) {
        alert('veuillez entrer votre sexe ');
        return false;
    }
    else if (country === '') {
        alert('veuillez entrer votre pays ');
        return false;
    }
    else if (languagesSelected.length === 0) {
        alert('veuillez entrer votre langue ');
        return false;
    }
    else if (date === '') {
        alert('veuillez entrer votre date de naissance ');
        return false;
    }


    alert('');
    return true;
}
