# Forms
A forms with switch click for test: <a href="https://malextrap.github.io/Forms/src/">this</a>

## Default form
```html 
                 <form>
                    <div class="form-group">
                        <div class="form-group in-line" style="text-align: left;">
                            <label for="f1">Example</label>
                            <input id="f1" placeholder="Input">
                        </div>
                        <div class="form-group in-line" style="text-align: left;">
                            <label for="f2">Type</label>
                            <select id="f2">
                                <option>RGB</option>
                                <option disabled>RGBA</option>
                                <option>HEX</option>
                            </select>
                        </div>
                        <div class="form-group in-line" style="text-align: left;">
                            <label for="f3">Example</label>
                            <input disabled id="f3" placeholder="Output">
                        </div>
                        <div class="form-group in-line" style="text-align: left;">
                            <label for="f3">CheckBox</label>
                            <input type="checkbox">
                        </div>
                        <div class="form-group in-line" style="text-align: left;">
                            <label for="f3">RadioButton</label>
                            <input type="radio">
                        </div>
                        <div class="form-group in-line" style="text-align: left;">
                            <label for="f3">Switch</label>
                            <label class="switch" data-on="On" data-off="Off">
                        </div>
                    </div>
                </form>
```
<br>

## Form in-line
```html
                <form>
                    <div class="form-group">
                        <div class="form-group" style="text-align: left;">
                            <label for="f1">Example</label>
                            <input placeholder="Input">
                        </div>
                        <div class="form-group" style="text-align: left;">
                            <label for="f2">Type</label>
                            <select>
                                <option>RGB</option>
                                <option disabled>RGBA</option>
                                <option>HEX</option>
                            </select>
                        </div>
                        <div class="form-group" style="text-align: left;">
                            <label for="f3">Example</label>
                            <input disabled placeholder="Output">
                        </div>
                        <div class="form-group" style="text-align: left;">
                            <label for="f3">CheckBox</label>
                            <input type="checkbox">
                        </div>
                        <div class="form-group" style="text-align: left;">
                            <label for="f3">RadioButton</label>
                            <input type="radio">
                        </div>
                        <div class="form-group" style="text-align: left;">
                            <label for="f3">Switch</label>
                            <label class="switch" data-on="On" data-off="Off">
                        </div>
                    </div>
                </form>
```
