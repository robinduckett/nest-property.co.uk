---
layout: default
---
<script>window.formsubmit = function submit() {
  document.querySelector('#submit').setAttribute('disabled', 'disabled');
  return true;
}</script>
<div class="form" markdown="1">
# Guarantor Application form

All information you provide us on this form is strictly confidential. The information will not be passed on to any other person or business.

  <div class="form-container">
    <div class="container">
      <form onsubmit="window.formsubmit()" action="https://6ompv667rb.execute-api.eu-west-1.amazonaws.com/submit" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="type" value="guarantor" />
        <h2>Applicants Personal Information</h2>
        <div class="fields">
          <div class="field">{% include input.html name="pii_name" required="required" label="Applicant's Full Name" %}</div> 
          <div class="field">{% include input.html name="pii_date_of_birth" label="DOB" %}</div>
          <div class="field">{% include input.html name="pii_ni_number" label="National Insurance Number" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include phone-input.html name="pii_phone_number" label="Phone Number" %}</div>
          <div class="field">{% include input.html name="pii_address" label="Address" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="pii_postcode" label="Postcode" %}</div>
          <div class="field">{% include input.html name="pii_time_at_address" label="Time at address" %}</div>
          <div class="field">{% include input.html name="pii_tenant_relationship" label="Relationship to Applying Tenant" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="pii_previous_address" label="Previous address (if under 3 years at current address)" %}</div>
        </div>
        <div cass="fields">
          <div class="field">
            <label for="radio" class="control-label" required>Are you currently a homeowner?</label>{% include radio.html name="pii_homeowner" optiona="Yes" optionb="No" %}
          </div>
        </div>
        <h2>Employment Details</h2>
        <div class="fields">
          <div class="field">{% include input.html name="employers_name" label="Employers Name" %}</div>
          <div class="field">{% include input.html name="employers_address" label="Employers Address" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="employers_email" label="Employers Email Address" %}</div>
          <div class="field">{% include phone-input.html required="required" name="employers_contact_number" label="Contact Number" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html name="employers_annual_salary" label="Annual Salary" %}</div>
          <div class="field">{% include input.html name="employers_start_date" label="Start Date" %}</div>
        </div>
        <h2>Bank Details</h2>
        <div class="fields">
          <div class="field">{% include input.html name="bank_name" label="Bank / Building Society" %}</div>
          <div class="field">{% include input.html name="bank_sort_code" label="Sort Code" %}</div>
          <div class="field">{% include input.html name="bank_account_number" label="Account Number" %}</div>
        </div>
        <div class="fields">
          <div class="field">{% include input.html required="required" name="bank_guarantor_signature" label="Guarantor Signature (Full Name)" %}</div>
        </div>
        <div class="fields">
          <div class="field" style="text-align: center">{% include captcha.html %}</div>
        </div>
        <div class="fields">
          <div class="field">
            <div class="button-container">
              <script>function submit() {
                document.querySelector('#submit').setAttribute('disabled', 'disabled');
                return true;
              }</script>
              <button id="submit" type="submit" class="button"><span>Submit</span></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
