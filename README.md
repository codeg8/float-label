# Float Label

This is a simple jquery plugin which can be used to modifiy the look and interface provided by normal Bootstrap forms. 


# Install
Using this plugin is very simple. All you need to do is include the css & Js file your page and then enclose all your form-fields container with class float-label-control

```
<div class="form-group float-label-control">
    <label for="">Username</label>
    <input type="email" class="form-control" placeholder="Username" name="someNewField">
</div>
```


```
<div class="form-group float-label-control" id="select-field">
    <label for="">Country</label>
    <select class="form-control" id="country-list">
        <option value="AU" data-icon="flag-icon flag-icon-au">Austraila</option>
        <option value="CH" data-icon="flag-icon flag-icon-ch">China</option>
        <option value="IN" data-icon="flag-icon flag-icon-in">India</option>
        <option value="PK" data-icon="flag-icon flag-icon-pk">Pakistan</option>
        <option value="RS" data-icon="flag-icon flag-icon-rs">Russia</option>
        <option value="AE" data-icon="flag-icon flag-icon-ae">United Arab Emirates</option>
        <option value="GB" data-icon="flag-icon flag-icon-gb">United Kingdom</option>
        <option value="US" data-icon="flag-icon flag-icon-us">United States of America</option>
        <option value="ZM" data-icon="flag-icon flag-icon-zm">Zimbawe</option>
    </select>
</div>
```

