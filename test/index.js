import shader from './glsl/main.frag';
const app = document.getElementById('app');

console.info(`Shader Length: ${shader.length} characters.`);

app.style.backgroundColor = '#222222';
app.style.fontFamily = 'monospace';
app.style.whiteSpace = 'pre-wrap';

app.style.color = '#bbbbbb';
app.style.padding = '16px';
app.textContent = shader;
