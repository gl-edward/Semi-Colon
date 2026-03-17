const input = document.getElementById('command-input');
const output = document.getElementById('output');

const commands = {
    help: "가능한 명령어: [about, members, baekjoon, clear, sudo]",
    about: "세미콜론(;)은 과천중앙고등학교의 컴퓨터 코딩 동아리입니다.",
    members: "기장: 이동현 \n부기장: 류로빈\n서포터: 신준",
    baekjoon: "과천중앙고 세미콜론 백준 그룹으로 이동합니다. (클릭하세요)",
    sudo: "Access Denied: You are not an administrator.",
    clear: "",
};

// 백준 그룹 URL
const BAEKJOON_URL = "https://www.acmicpc.net/group/24210";

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const fullCommand = input.value.trim();
        const cmd = fullCommand.toLowerCase();
        
        // 새로운 라인 추가 (사용자가 입력한 명령어 표시)
        const newLine = document.createElement('div');
        newLine.innerHTML = `<span class="prompt">semicolon@root:~$</span> ${fullCommand}`;
        output.appendChild(newLine);

        if (cmd === 'clear') {
            output.innerHTML = '';
        } else if (cmd === 'baekjoon') {
            // 백준 명령어 전용 처리 (링크 삽입)
            const response = document.createElement('div');
            response.innerHTML = `<a href="${BAEKJOON_URL}" target="_blank" style="color: #58a6ff; text-decoration: underline;">${commands[cmd]}</a>`;
            output.appendChild(response);
        } else if (commands[cmd]) {
            // 일반 명령어 처리
            const response = document.createElement('div');
            response.style.whiteSpace = "pre-line";
            response.style.color = "#888";
            response.textContent = commands[cmd];
            output.appendChild(response);
        } else if (cmd !== "") {
            // 에러 메시지 처리
            const error = document.createElement('div');
            error.style.color = "#ff5f56";
            error.textContent = `Command not found: ${cmd}`;
            output.appendChild(error);
        }

        input.value = '';
        output.scrollTop = output.scrollHeight;
    }
});

document.addEventListener('click', () => input.focus());
