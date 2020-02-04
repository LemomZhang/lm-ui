import '../css/dialog.css'
class Dialog {
	constructor($root, options = {}) {
		this.$root = $root
		this.options = options
		this.onCancel = options.onCancel || function() {}
		this.onOk = options.onOk || function() {}

		this.bind()
	}

	bind() {
		let self = this
		this.$root.querySelector('.close').onclick = function() {
			self.hide()
			self.onCancel()
		}
		this.$root.querySelector('.btn-cancel').onclick = function() {
			self.hide()
			self.onCancel()
		}
		this.$root.querySelector('.btn-ok').onclick = function() {
			self.hide()
			self.onOk()
		}
	}

	hide() {
		this.$root.classList.remove('appear')
		setTimeout(() => this.$root.classList.remove('show'), 400)
	}

	show() {
		this.$root.classList.add('show')
		setTimeout(() => this.$root.classList.add('appear'))
	}
}

let dialog = new Dialog(document.querySelector('.dialog'), {
	onOk() {
		console.log('点了ok')
	},
	onCancel() {
		console.log('点了取消')
	}
})

document.querySelector('.open-dialog').onclick = function() {
	dialog.show()
}
