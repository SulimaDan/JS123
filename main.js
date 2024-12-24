const slider = document.getElementById('slider');
const indicator = document.getElementById('indicator');
const sliderContainer = document.querySelector('.slider-container');

function updateIndicator() {
    const value = slider.value;
    const percent = value / 100;
    const sliderWidth = slider.offsetWidth;
    indicator.style.left = `${percent * sliderWidth}px`;
}

slider.addEventListener('input', updateIndicator);
window.addEventListener('load', updateIndicator);
