// 同時接続数を制限した画像ローダー
const MAX_CONCURRENT = 12;
const queue = [];
let active = 0;

function pump() {
	while (active < MAX_CONCURRENT && queue.length) {
		// 優先度の高い(値の小さい)ものから処理
		let best = 0;
		for (let i = 1; i < queue.length; i++) {
			if (queue[i].priority() < queue[best].priority()) best = i;
		}
		const job = queue.splice(best, 1)[0];
		active++;
		fetch(job.url, { mode: 'cors' })
			.then((res) => {
				if (!res.ok) throw new Error(`${res.status} ${job.url}`);
				return res.blob();
			})
			.then((blob) => createImageBitmap(blob))
			.then(job.resolve, job.reject)
			.finally(() => {
				active--;
				pump();
			});
	}
}

// priority: 数値を返す関数 (小さいほど先に読み込む)
export function loadImage(url, priority = () => 0) {
	return new Promise((resolve, reject) => {
		queue.push({ url, priority, resolve, reject });
		pump();
	});
}

export function pendingCount() {
	return queue.length + active;
}
