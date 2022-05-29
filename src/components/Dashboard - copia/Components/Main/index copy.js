import './cc.css'

export const DDD = () => {
  return (
    <details class="custom-select">
      <summary class="radios">
        <input
          type="radio"
          name="item"
          id="default"
          title="Auswählen..."
          checked
        />
        <input type="radio" name="item" id="item1" title="Item 1" />
        <input type="radio" name="item" id="item2" title="Item 2" />
        <input type="radio" name="item" id="item3" title="Item 3" />
        <input type="radio" name="item" id="item4" title="Item 4" />
        <input type="radio" name="item" id="item5" title="Item 5" />
      </summary>
      <ul class="liste">
        <li>
          <label for="item1">Item 1</label>
        </li>
        <li>
          <label for="item2">Item 2</label>
        </li>
        <li>
          <label for="item3">Item 3</label>
        </li>
        <li>
          <label for="item4">Item 4</label>
        </li>
        <li>
          <label for="item5">Item 5</label>
        </li>
      </ul>
    </details>
  )
}
