document.addEventListener('DOMContentLoaded', function () {
    // 要素の取得
    const messageElement = document.getElementById('text');
    const buttonElement = document.getElementById('btn');

    // ボタンクリック時のイベントリスナーを追加
    buttonElement.addEventListener('click', function () {
        // メッセージを変更
        messageElement.textContent = 'ボタンをクリックしました。';
    });
});
