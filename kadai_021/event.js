const btn = document.getElementById('btn');
const message = document.getElementById('text');
btn.addEventListener('click', () => {
    setTimeout(() => {
        message.textContent = 'ボタンをクリックしました';
    }, 2000);
});