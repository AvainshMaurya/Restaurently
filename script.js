

//login start
document.addEventListener('DOMContentLoaded', () => {
    // Show Register Form by Default
    document.getElementById('register-form').style.display = 'block';

    // Toggle between Register and Login forms
    window.toggleForms = function(formType) {
        if (formType === 'register') {
            document.getElementById('register-form').style.display = 'block';
            document.getElementById('login-form').style.display = 'none';
        } else if (formType === 'login') {
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('register-form').style.display = 'none';
        }
    };
});
//login end

//About start

document.addEventListener('DOMContentLoaded', () => {
    // Example of a simple interactive effect on the "Learn More" button
    const learnMoreButton = document.querySelector('.btn-learn-more');
    learnMoreButton.addEventListener('click', () => {
        alert("Thanks for your interest! We're always happy to share more about our Restaurantly.");
    });
});
//About End


//itme 
function addItem(itemName) {
    const cartList = document.getElementById('cartList');
    const li = document.createElement('li');
    li.textContent = itemName;
    cartList.appendChild(li);
}
//end item