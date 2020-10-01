---
layout: home
---

<script src="/assets/js/vendor/siema.min.js"></script>

<div class="map">
  <a id="view-all" href="https://www.facebook.com/nestlettingsltd" target="_blank" rel="noopener noreferrer">
    <span class="viewbox">View All Nest Letting Properties</span>
    <span class="button">Search for NEST Property</span>
  </a>
</div>

# Nest Services

Let our services exceed your expectations

<ul id="services">
  <li>
    <a href="/property-management">
      <img src="/assets/img/home-prop1.jpg" />
      <h2>Property Management</h2>
      <p>With all the new regulations and compliance that needs to be undertaken to let a property, you have never been in safer hands.</p>
    </a>
  </li>
  <li>
    <a href="/property-maintenance">
      <img src="/assets/img/home-prop2.jpg" />
      <h2>Property Maintenance</h2>
      <p>Here at Nest we have our own in house team of dedicated, fully insured and fully qualified work force.</p>
    </a>
  </li>
  <li>
    <a href="/epcs-and-safety-certificates">
      <img src="/assets/img/home-prop3.jpg" />
      <h2>EPC's, Gas Safety and more</h2>
      <p>An Energy performance certificate provides potential buyers and tenants with an induction of the energy efficiency of a property.</p>
    </a>
  </li>
</ul>

<div id="testimonials">
  <div class="inner">
    <h2>What our landlords think about <strong>Nest</strong></h2>
    <div class="testimonials-siema">
      <div>
        <p>
          <em>"Nest Letting &amp; Property Management arranged the letting of one of my flats during really difficult times when we were locked down when I really didn't expect it.<br /><br />They were thorough, efficient and reasonable and I cannot recommend them highly enough.<br /><br />
 I am 100% satisfied with the service both past and on going.
"</em>
          <div class="author">
            <img src="/assets/img/testimonials/paul.jpg" width="70" height="70" />
            <p>
              Paul Lipman
              <em>Landlord</em>
            </p>
          </div>
        </p>
      </div>
      <div>
        <p>
          <em>"Brilliant &nbsp; &nbsp; &nbsp; <img class="testimg" src="/assets/img/star-png.png" alt="" width="87" height="24"><br><br>Saved time and money and the service is second to none, a refreshing change from the normal estate agent! Maxine Sharp"</em>
          <div class="author">
            <img src="/assets/img/testimonials/maxine.png" width="70" height="70" />
            <p>
              Maxine Sharp
              <em>Property Investor</em>
            </p>
          </div>
        </p>
      </div>
      <div>
        <p>
          <em>"A Breath of fresh air, agents who finally look after everything, after previous experiences with other agents I decided to give Nest a try, The girls have gone above and beyond to assist in anyway they can - Keep up the good work"</em>
          <div class="author">
            <img src="/assets/img/testimonials/williams.png" width="70" height="70" />
            <p>
              Mrs T Williams
              <em>Landlord</em>
            </p>
          </div>
        </p>
      </div>
      <div>
        <p>
          <em>"Looking forward to working more with the girls over the upcoming months, pleased with the service and how Lindsey was able to give me further ideas on how to increase rents which had never been suggested by my previous agent"</em>
          <div class="author">
            <img src="/assets/img/testimonials/mark.png" width="70" height="70" />
            <p>
              Mark Bowyer
              <em>Property Director</em>
            </p>
          </div>
        </p>
      </div>
    </div>
      <div class="dots">
        <button class="dot-button"></button>
        <button class="dot-button"></button>
        <button class="dot-button"></button>
        <button class="dot-button"></button>
      </div>
  </div>
</div>

<script>
  function updateButtons(buttons, index) {
    buttons.forEach(function(button) {
      button.classList.remove('active');
    });
  
    if (typeof buttons[index] !== "undefined") {
      buttons[index].classList.add('active');
    }
  }

  let buttons;

  const testimonialCarousel = new Siema({
    selector: '.testimonials-siema',
    loop: true,
    onChange: function() {
      updateButtons(buttons, this.currentSlide);
    },
    onInit: function() {
      buttons = Array.from(document.getElementsByClassName('dot-button'));

      buttons.forEach(function(button, i) {
        button.addEventListener('click', () => {
          testimonialCarousel.goTo(i);
          updateButtons(buttons, i);
        });
      });

      updateButtons(buttons, 0);
    }
  });

  setInterval(() => testimonialCarousel.next(), 5000);
</script>

<div class="links-siema">
  <div>
    <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer">
      <img width="85" src="/assets/img/links/airbnb.png" />
    </a>
  </div>
  <div>
    <a href="https://www.facebook.com/nestlettingsltd" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/links/facebook.png" />
    </a>
  </div>
  <div>
    <a href="" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/links/mydeposits.png" />
    </a>
  </div>
  <div>
    <a href="" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/links/ukala.png" />
    </a>
  </div>
    <div>
    <a href="" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/links/propertyredressscheme.png" />
    </a>
  </div>
  <div>
    <a href="" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/links/rentsmartwales.png" />
    </a>
  </div>
  <div>
    <a href="https://www.instagram.com/nestlettings/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/links/instagram.png" />
    </a>
  </div>
  <!-- <div>
    <a href="https://www.zoopla.co.uk/to-rent/branch/nest-lettings-and-property-management-llanishen-108377" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/links/zoopla.png" />
    </a>
  </div> -->
</div>

<script>
  const linkCarousel = new Siema({
    selector: '.links-siema',
    loop: true,
    duration: 500,
    perPage: {
      375: 3,
      600: 3,
      768: 4,
      1024: 5,
    },
  });

setInterval(() => linkCarousel.next(), 3000);
</script>

## Meet The Agents

<div class="agents">
  <div class="agent">
    <img src="/assets/img/lindsey.jpg"><br>
    <h3>Lindsey Fryer - CEO</h3>
    <p>The driving force behind our ambition to provide the very best service and solutions for our landlords and tenants.<br /><br />
    Lindsey has the benefit of a lifetime spent in the property business. From a young age she has been consistently involved in her family business and has invested her wealth of knowledge and experience into Nest lettings and property maintenance Ltd. Lindsey has comprehensive knowledge of every aspect of the property business, from finding tenants to renovation management and everything in between.<br />
    She is a valuable asset for anyone to have overseeing their property portfolio.
    </p>
  </div>
  <div class="agent">
    <img src="/assets/img/beth.jpg"><br>
    <h3>Beth Evans - CEO</h3>
    <p>Beth has a colourful portfolio of management, sales, networking and marketing experience<br /><br />
    With a wealth of understanding in current social security procedures and the economical implications to our landlords, Beth's role within the company is to offer what no other letting agency offers.<br /><br />
    <strong>Tenant support</strong><br /><br />
    Beth maintains contact with tenants and offers practical support in applying for benefits and grants. If a tenant should become unemployed or have to claim benefits for any reason, Beth will minimise any potential disruption of payments.
    </p>
  </div>
</div>
