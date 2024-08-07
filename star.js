document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    const windowWidth = window.innerWidth * 0.66;
    const windowHeight = window.innerHeight * 1; // 70% 높이까지만 별이 생성되도록 설정

    const style = ['style1', 'style2', 'style3', 'style4']; // 스타일 추가
    const opacity = ['opacity1', 'opacity2', 'opacity3']; // 변경된 클래스 배열
    const twinkle = [
        'twinkle1', 'twinkle2', 'twinkle3', 'twinkle4', 
        'twinkle5', 'twinkle6', 'twinkle7', 'twinkle8'
    ]; // 추가된 클래스 배열

    function getRandomValue(max) {
        return Math.floor(Math.random() * max);
    }

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star ' + style[getRandomValue(style.length)] + ' ' + opacity[getRandomValue(opacity.length)] + ' ' + twinkle[getRandomValue(twinkle.length)];

        star.style.left = `${getRandomValue(windowWidth)}px`;
        star.style.top = `${getRandomValue(windowHeight)}px`;

        section.appendChild(star);
    }
});
