import '../css/tooltip.css'
class Tooltip {
	constructor($root) {
		this.$root = $root
		this.$root.tooltip = this
		this.align = $root.dataset.align
		this.text = $root.dataset.text

		this.render()
		this.setRoot()
		this.show()
	}

	render() {
		let $tooltip = document.createElement('div')
		$tooltip.classList.add('tooltip')
		$tooltip.classList.add(this.align)
		$tooltip.innerText = this.text
		this.$tooltip = $tooltip
		this.$root.appendChild($tooltip)
	}

	setRoot() {
		this.$root.showTooltip = this.show.bind(this)
		this.$root.hideTooltip = this.hide.bind(this)
	}

	show() {
		this.$tooltip.classList.add('show')
	}

	hide() {
		this.$tooltip.classList.remove('show')
	}
}

document.querySelectorAll('[data-name="tooltip"]').forEach($node => {
	$node.onmouseenter = function() {
		if ($node.tooltip) {
			$node.showTooltip()
		} else {
			new Tooltip(this)
		}
	}
	$node.onmouseleave = function() {
		$node.hideTooltip()
	}
})
