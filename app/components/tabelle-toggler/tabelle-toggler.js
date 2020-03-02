import { find } from 'uitil/dom'

class TabelleToggler extends HTMLButtonElement {
  connectedCallback () {
    this.removeAttribute("hidden")
    this.initialExpand()
    this.addEventListener("click", () => {
      if (this.expanded) {
        this.collapse()
      } else {
        this.expand()
      }
    })

    window.addEventListener('resize', () => {
      clearTimeout(this.timer)

      this.timer = setTimeout(() => {
        console.log('resize')
        this.initialExpand()
      }, 300)
    })
  }

  initialExpand () {
    this.removeHidden()
    if (this.expanded) {
      this.expand()
    } else {
      this.collapse()
    }
  }

  removeHidden () {
    find(this.closest("tr"), ".hide").forEach (e => {
      e.classList.remove('hide')
    })
  }

  expand () {
    this.setAttribute("aria-expanded", "true")
    this.removeHidden()
  }

  collapse () {
    this.setAttribute("aria-expanded", "false")
    let nrOfCols = this.nrOfCols

    find(this.closest("tr"), "td").forEach ((e, i) => {
      if (i > nrOfCols) {
        e.classList.add("hide")
      }
    })
  }

  get expanded () {
    return this.getAttribute("aria-expanded") === "true";
  }

  get nrOfCols () {
    let colsStr = getComputedStyle(this).getPropertyValue("--nr-cols");
    return parseInt(colsStr) || 2;
  }
}

customElements.define('tabelle-toggler', TabelleToggler, { extends: 'button' })