import '../css/carousel.css'
class Carousel {
	constructor($root) {
		this.$root = $root
		this.$pre = $root.querySelector('.arrow-pre')
		this.$next = $root.querySelector('.arrow-next')
		this.$$indicators = $root.querySelectorAll('.indicators > li')
		this.$$panels = $root.querySelectorAll('.panels > a')

		this.bind()
	}

	bind() {
		setInterval(() => {
			// IE浏览器
			if (document.all) {
				document.getElementById('clickMe').click()
			}
			// 其它浏览器
			else {
				var e = document.createEvent('MouseEvents')
				e.initEvent('click', true, true)
				this.$next.dispatchEvent(e)
			}
		}, 3000)

		this.$pre.onclick = () => {
			let index = this.getPreIndex()
			this.setPage(index)
			this.setIndicator(index)
		}

		this.$next.onclick = () => {
			let index = this.getNextIndex()
			this.setPage(index)
			this.setIndicator(index)
		}

		this.$$indicators.forEach(
			$indicator =>
				($indicator.onclick = e => {
					let index = [...this.$$indicators].indexOf(e.target)
					this.setIndicator(index)
					this.setPage(index)
				})
		)
	}

	getIndex() {
		return [...this.$$indicators].indexOf(
			this.$root.querySelector('.indicators .active')
		)
	}

	getPreIndex() {
		return (
			(this.getIndex() - 1 + this.$$indicators.length) %
			this.$$indicators.length
		)
	}

	getNextIndex() {
		return (this.getIndex() + 1) % this.$$indicators.length
	}

	setPage(index) {
		this.$$panels.forEach($panel => $panel.classList.remove('active'))
		this.$$panels[index].classList.add('active')
	}

	setIndicator(index) {
		this.$$indicators.forEach($indicator =>
			$indicator.classList.remove('active')
		)
		this.$$indicators[index].classList.add('active')
	}
}

let $$carousel = document.querySelectorAll('.carousel')
$$carousel.forEach($root => new Carousel($root))
