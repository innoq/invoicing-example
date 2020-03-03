import debounce from "uitil/debounce";
import { find } from "uitil/dom";

class TabelleToggler extends HTMLButtonElement {
  connectedCallback() {
    this.removeAttribute("hidden");
    this.initialExpand();
    this.addEventListener("click", this.toggle.bind(this));
    window.addEventListener(
      "resize",
      debounce(300, this.initialExpand.bind(this))
    );
  }

  initialExpand() {
    this.removeHidden();
    if (this.expanded) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  toggle() {
    if (this.expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  removeHidden() {
    find(this.closest("tr"), ".hide").forEach(e => {
      e.classList.remove("hide");
    });
  }

  expand() {
    this.setAttribute("aria-expanded", "true");
    this.removeHidden();
  }

  collapse() {
    this.setAttribute("aria-expanded", "false");

    find(this.closest("tr"), "td")
      .slice(this.nrOfCols + 1)
      .forEach(e => {
        e.classList.add("hide");
      });
  }

  get expanded() {
    return this.getAttribute("aria-expanded") === "true";
  }

  get nrOfCols() {
    let colsStr = getComputedStyle(this).getPropertyValue("--nr-cols");
    return parseInt(colsStr) || 2;
  }
}

customElements.define("tabelle-toggler", TabelleToggler, { extends: "button" });
