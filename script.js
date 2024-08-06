const style = ['style1', 'style2', 'style3'];
const opacity = ['opacity1', 'opacity2', 'opacity3'];
const twinkle = ['twinkle1', 'twinkle2', 'twinkle3', 'twinkle4'];

for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const randomStyle = style[Math.floor(Math.random() * style.length)];
    const randomOpacity = opacity[Math.floor(Math.random() * opacity.length)];
    const randomTwinkle = twinkle[Math.floor(Math.random() * twinkle.length)];
    
    star.classList.add(randomStyle, randomOpacity, randomTwinkle);
    
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    
    document.querySelector('.star-container').appendChild(star);
}