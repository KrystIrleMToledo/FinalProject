document.getElementById('profileFirstName').textContent = localStorage.getItem('firstName') || 'N/A';
document.getElementById('profileLastName').textContent = localStorage.getItem('lastName') || 'N/A';
document.getElementById('profileEmail').textContent = localStorage.getItem('email') || 'N/A';
document.getElementById('profileSex').textContent = localStorage.getItem('sex') || 'N/A';
document.getElementById('profileReason').textContent = localStorage.getItem('reason') || 'No reason provided.';
