import '../css/collapse.css'
const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)
class Collapse {
	constructor($container, type = 1) {
		this.$container = $container
		this.$$item = $container.querySelectorAll('.collapse .item')
		this.type = type
		this.bind()
	}
	bind() {
		this.$$item.forEach(element => {
			element.onclick = () => {
				if (this.type === 1) {
					this.$$item.forEach($content => {
						$content.classList.remove('active')
					})
					element.classList.add('active')
				} else if (this.type === 2) {
					element.classList.toggle('active')
				}
			}
		})
	}
}
new Collapse(document.querySelectorAll('.collapse')[0])
new Collapse(document.querySelectorAll('.collapse')[1], 2)
