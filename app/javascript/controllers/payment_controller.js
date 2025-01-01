import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="payment"
export default class extends Controller {
  static targets = ["selection", "additionalFields"]
  initialize() {
    this.showAdditionalFields()
  }

  showAdditionalFields() {
    let selection = this.selectionTarget.value;
    console.log(selection)
    for (let fields of this.additionalFieldsTargets){
      console.log("fields.dataset.type:", fields.dataset.type)
      fields.disabled = fields.hidden = (fields.dataset.type != selection)
    }
  }
}
