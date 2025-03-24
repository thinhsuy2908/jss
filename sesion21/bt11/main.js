for (let i = 0; i < 10; i++) {
    let a = Math.floor(Math.random() * 16777215).toString(16);
    console.log("%cMàu đã được thay đổi", `color: #${a}; font-size: 20px; font-weight: bold;`);
}
