// 1
const colors = [
    '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
    '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50',
    '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d',
    '#e67e22', '#e74c3c', '#f1c40f', '#ecf0f1', '#95a5a6'
];

function createColorBlock() {
    const container = document.getElementById('blockContainer');
    const block = document.createElement('div');
    block.className = 'block';
    block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    
    block.addEventListener('dblclick', () => {
        container.removeChild(block);
    });
    
    container.appendChild(block);
}

document.getElementById('addBlockBtn').addEventListener('click', createColorBlock);



//2
let currentLight = 0;
const lights = [
    document.getElementById('redLight'),
    document.getElementById('yellowLight'),
    document.getElementById('greenLight')
];

function switchLight() {
    lights.forEach(light => light.classList.remove('active'));
    lights[currentLight].classList.add('active');
    currentLight = (currentLight + 1) % lights.length;
}

document.getElementById('nextButton').addEventListener('click', switchLight);
switchLight();
