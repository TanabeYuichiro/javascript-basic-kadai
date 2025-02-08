document.addEventListener('DOMContentLoaded', function () {
    // 要素の取得
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');

    // ボタンクリック時のイベントリスナーを追加
    btn.addEventListener('click', () => {
        // ボタンを無効化（連打防止）
        btn.disabled = true;

        // 2秒後にメッセージを変更
        setTimeout(() => {
            text.textContent = 'ボタンをクリックしました。';
            // ボタンを再度有効化
            btn.disabled = false;
        }, 2000);
    });
});
