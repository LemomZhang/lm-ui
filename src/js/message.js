import '../css/message.css'
class Message {
	constructor({ type = 'success', text = '' }) {
		this.type = type
		this.text = text

		this.render()
		this.bind()
	}

	render() {
		let $div = document.createElement('div')
		this.$message = $div
		$div.classList.add('message')
		$div.classList.add(this.type)
		let $icon = document.createElement('span')
		$icon.classList.add('iconfont')
		$icon.classList.add('icon-' + this.type)
		$div.appendChild($icon)
		let $text = document.createTextNode(this.text)
		$div.appendChild($text)
		document.body.appendChild($div)
	}

	bind() {
		setTimeout(() => this.show())
		setTimeout(() => this.destory(), 3000)
	}

	show() {
		this.$message.classList.add('show')
	}

	destory() {
		this.$message.classList.remove('show')
		setTimeout(
			() => this.$message.parentNode.removeChild(this.$message),
			400
		)
	}
}

document.querySelector('#btn-success').onclick = function() {
	new Message({
		text: '成功'
	})
}
document.querySelector('#btn-info').onclick = function() {
	new Message({
		text: '我是通知',
		type: 'info'
	})
}
document.querySelector('#btn-danger').onclick = function() {
	new Message({
		text: '危险',
		type: 'danger'
	})
}
document.querySelector('#btn-warning').onclick = function() {
	new Message({
		text: '我是警告',
		type: 'warning'
	})
}
