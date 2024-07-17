document.addEventListener('DOMContentLoaded', function() {
    const showSurveyButton = document.getElementById('showSurveyButton');
    const formSection = document.getElementById('form-section');
    const introductionSection = document.getElementById('introduction-section');
    const priceInfoSection = document.getElementById('price-info-section');
    const priceInfoButton = document.getElementById('priceInfoButton'); // Corrected ID

    showSurveyButton.addEventListener('click', function() {
        introductionSection.classList.add('introduction-small');
        formSection.classList.add('form-expanded');
        formSection.style.display = 'block'; // Ensure the form section is visible
        priceInfoSection.style.display = 'block'; // Show the price info section
        setTimeout(scrollToForm, 500); // Scroll after the transition completes
    });

    priceInfoButton.addEventListener('click', function() {
        if (priceInfoSection.style.display === 'block') {
            priceInfoSection.style.display = 'none'; // Hide the price info section if it's visible
        } else {
            priceInfoSection.style.display = 'block'; // Show the price info section if it's hidden
            setTimeout(scrollToPriceInfo, 500); // Scroll after the transition completes
        }
    });

    function scrollToForm() {
        const yOffset = -60;
        const surveyForm = document.getElementById('surveyForm');
        const y = surveyForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    function scrollToPriceInfo() {
        const yOffset = -60;
        const y = priceInfoSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
});
