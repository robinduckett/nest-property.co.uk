---
layout: default
---
<script>window.formsubmit = function submit() {
  document.querySelector('#submit').setAttribute('disabled', 'disabled');
  return true;
}</script>
<div class="form" markdown="1">
# Tenant Application Form

All information you provide us on this form is strictly confidential. The information will not be passed on to any other person or business. Please note that filling out this application form does NOT guarantee you the property your applying to rent.

  <div class="form-container">
    <div class="container">
      <form onsubmit="window.formsubmit()" action="https://6ompv667rb.execute-api.eu-west-1.amazonaws.com/submit" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="type" value="tenancy" />
        <h2>Applicants Personal Information</h2>
        <div class="fields">
          <div class="field">{% include input.html name="pii_name" label="Name" %}</div> 
          <div class="field">{% include input.html name="pii_email_address" label="Email Address" %}</div>
          <div class="field">{% include phone-input.html name="pii_phone_number" label="Phone Number" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="pii_date_of_birth" label="DOB" %}</div>
          <div class="field">{% include input.html name="pii_ni_number" label="National Insurance Number" %}</div>
        </div>
        <h2>Employment Details</h2>
        <label class="control-label" required>Please check which of the following apply to you</label>
        <div class="fields">
          <div class="field">
            <div class="checkbox">
              <label>
                <input name="employment_employed" type="checkbox"/><i class="helper"></i>Employed
              </label>
              <label>
                <input name="employment_disability_benefit" type="checkbox"/><i class="helper"></i>Disability Benefit
              </label>
              <label>
                <input name="employment_universal_credit" type="checkbox"/><i class="helper"></i>Universal Credit
              </label>
              <label>
                <input name="employment_student" type="checkbox"/><i class="helper"></i>Student
              </label>
              <label>
                <input name="employment_self_employed" type="checkbox"/><i class="helper"></i>Self Employed
              </label>
            </div>
          </div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="employers_name" label="Employers Name" %}</div>
          <div class="field">{% include input.html name="employers_address" label="Employers Address" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="employers_email" label="Employers Email Address" %}</div>
          <div class="field">{% include phone-input.html name="employers_contact_number" label="Contact Number" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="employers_annual_salary" label="Annual Salary" %}</div>
          <div class="field">{% include input.html name="employers_employment_time" label="Length of time with employer" %}</div>
        </div>
        <h2>Previous Landlords Details</h2>
        <div class="fields">
          <div class="field">{% include input.html name="landlord_previous_address" label="Previous/current address" %}</div>
          <div class="field">{% include input.html name="landlord_length_of_time" label="Length of time at current address" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="landlord_previous_landlord_name" label="Previous/current Landlords Name" %}</div>
          <div class="field">{% include input.html name="landlord_previous_landlord_email" label="Previous/current Landlords Email" %}</div>
        </div>
        <h2>Next of Kin</h2>
        <div class="fields">
          <div class="field">{% include input.html name="nextofkin_name" label="Name" %}</div>
          <div class="field">{% include input.html name="nextofkin_address" label="Address" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="nextofkin_relationship" label="Relationship to you" %}</div>
          <div class="field">{% include input.html name="nextofkin_number" label="Contact number" %}</div>
        </div>
        <h2>&nbsp;</h2>
        <div class="fields">
          <div class="field">{% include textarea.html name="letting_occupants" content="Names of any other occupants who will be living in the property" %}
          </div>
          <div class="field">
            <label for="radio" class="control-label" required>Do you have any children that will be residing at the property with you?</label>{% include radio.html name="letting_children" optiona="Yes" optionb="No" %}
            {% include textarea.html name="letting_children_details" content="If yes what are the ages of all children" %}
          </div>
        </div>
        <div class="fields">
          <div class="field">
            <label for="radio" class="control-label" required>Have you ever received any county court judgements?</label>{% include radio.html name="letting_ccjs" optiona="Yes" optionb="No" %}
            {% include textarea.html name="letting_ccjs_details" content="Please provide details if you have answered yes" %}
          </div>
          <div class="field">
            <label for="radio" class="control-label" required>Have you ever been convicted of any criminal offence?</label>{% include radio.html name="letting_crime" optiona="Yes" optionb="No" %}
            {% include textarea.html name="letting_crime_details" content="Please provide details if you have answered yes" %}
          </div>
        </div>
        <div class="fields">
          <div class="field">
            <label for="radio" class="control-label" required>Do you have any pets?</label>{% include radio.html name="letting_pets" optiona="Yes" optionb="No" %}
            {% include textarea.html name="letting_pets_details" content="If yes what type of pet?" %}
          </div>
          <div class="field">
            <label for="radio" class="control-label" required>Do you smoke?</label>{% include radio.html name="letting_smoke" optiona="Yes" optionb="No" %}
          </div>
        </div>
        <div class="fields">
          <div class="field">
            <h4>Please provide copies of two of the following</h4>
            <p>
              <ul>
                <li>Utility bill</li>
                <li>Passport</li>
                <li>Driving Licence</li>
                <li>Other proof of identification</li>
              </ul>
            </p>
          </div>
          <div class="field">
            <h4>&nbsp;</h4>{% include file-input.html name="identification1" label="Identification Proof 1" %}
            {% include file-input.html name="identification2" label="Identification Proof 2" %}
          </div>
        </div>
        <div class="fields">
          <div class="field" style="text-align: center">
            {% include captcha.html %}
          </div>
        </div>
        <div class="fields">
          <div class="field">
            <div class="button-container">
              <button id="submit" type="submit" class="button"><span>Submit</span></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
