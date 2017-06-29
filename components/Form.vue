<template>
  <div class="card-form">
    <h3 class="text-center">Become a legal bartender!</h3>
    <p class="text-center text-sm">Start your bartender certification now</p>
    <form>
      <div class="form-group row">
        <div class="col-6">
          <input type="text" placeholder="First Name" class="form-control" />
        </div>
        <div class="col-6">
          <input type="text" placeholder="Last Name" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <input type="email" placeholder="email@bartender.com" class="form-control" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="form-control" />
      </div>
      <div class="form-group">
        <select class="custom-select" name="state" id="state">
          <option value="" selected="selected">What State Do You Live In?</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div class="form-group custom-controls-stacked">
        <label class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="test1" name="radio">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">I need a new certification!</span>
        </label>
        <label class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="test2" name="radio">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">I need to recertify!</span>
        </label>
        <a href="#" class="mt-1 text-sm"><small>Not sure? Click here and we'll get you squared away.</small></a>
      </div>
      <button type="input" class="btn btn-xl btn-block btn-danger">Let's Go!</button>
    </form>
  </div>
</template>