const input = document.getElementById('command-input');
const output = document.getElementById('output');

const commands = {
    help: "Available commands: [about, projects, members, clear, sudo]",
    about: "Semicolon(;) is a coding club at our high school. We code for the future.",
    projects: "1. SC-BOT (KakaoTalk Bot) \n2. School Meal App \n3. Algorithm Study",
    members: "Leader: ED(𝕰𝕯) \nFront-end: 4 Members \nBack-end: 3 Members",
    sudo: "Access Denied: You are not an administrator.",
    clear: ""
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const fullCommand = input.value.trim();
        const cmd = fullCommand.toLowerCase();
        
        // 새로운 라인 추가
        const newLine = document.createElement('div');
        newLine.innerHTML = `<span class="prompt">semicolon@root:~$</span> ${fullCommand}`;
        output.appendChild(newLine);

        if (cmd === 'clear') {
            output.innerHTML = '';
        } else if (commands[cmd]) {
            const response = document.createElement('div');
            response.style.whiteSpace = "pre-line"; // 줄바꿈 적용
            response.style.color = "#888";
            response.textContent = commands[cmd];
            output.appendChild(response);
        } else if (cmd !== "") {
            const error = document.createElement('div');
            error.style.color = "#ff5f56";
            error.textContent = `Command not found: ${cmd}`;
            output.appendChild(error);
        }

        input.value = '';
        output.scrollTop = output.scrollHeight; // 스크롤 자동 이동
    }
});

// 화면 아무데나 클릭해도 인풋에 포커스
document.addEventListener('click', () => input.focus());
