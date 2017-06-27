<template>
  <div class="card-form">
    <h3 class="text-center">Get Started!</h3>
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
        <input type="email" placeholder="email@bartender.com" class="form-control" />
      </div>
      <div class="form-group">
        <select class="custom-select">
          <option selected>Which state are you in?</option>
          <option value="AL">Alabama</option>
          <option value="AR">Arkansas</option>
          <option value="AL">Alaska</option>
          <option value="CO">Colorado</option>
          <option value="IN">Indiana</option>
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
        <a href="#" class="mt-2">Not sure? Click here and we'll get you squared away.</a>
      </div>
      <button type="input" class="btn btn-xl btn-block btn-danger">Let's Go!</button>
    </form>
  </div>
</template>