import PlanSelector from "../../components/SubscribtionBuilder/SubscribtionBuilder";

function SubscribtionPage() {
  return (
    <div id="subscribtion-page">
      <section className="subscribtion-page-first-section">
        <img
          src="src/assets/images/Secondary_Images/subscribtion.jpeg"
          alt=""
        />
        <div className="subscribtion-page-first-section-text-wrapper">
          <h2>Flower Subscription</h2>
          <ul>
            <li>
              <h6>For Yourself</h6>
              <p>
                The perfect way to keep your home fresh and beautiful. Get a
                regular delivery of stunning bouquets straight to your doorstep
                without lifting a finger. Enjoy the beauty and fragrance of
                fresh flowers hassle-free!
              </p>
            </li>
            <li>
              <h6>As a Gift</h6>
              <p>
                Simply provide us with their address and let us take care of the
                rest, delivering beautiful blooms straight to their doorstep at
                the frequency and duration of your choosing.
              </p>
            </li>
            <li>
              <h6>For Business</h6>
              <p>
                Is a great way to create a pleasant atmosphere and leave a good
                impression on your guests and customers. Fresh floral
                arrangements will improve the aesthetic image of your business,
                and our service guarantees timely replacement without extra care
                or effort on your part.
              </p>
            </li>
          </ul>
          <button className="subscribtion-page-first-section-button">
            Explore Plans
          </button>
        </div>
      </section>
      <section className="subscribtion-page-how-work">
        <div className="subscribtion-page-how-work-left-side">
          <h2>How does it work?</h2>
        </div>
        <div className="subscribtion-page-how-work-right-side">
          <div className="subscribtion-page-how-work-right-side-element">
            <h3>Choose a Plan</h3>
            <p>
              Select the subscription plan that suits you best from our three
              bouquet designs: classic, seasonal, and deluxe. Each plan comes
              with a designer vase, free delivery, and a discount of up to 30%.
              Our seasonal and deluxe plans also include a luxurious scented
              candle to enhance the ambiance.
            </p>
          </div>
          <div className="subscribtion-page-how-work-right-side-element">
            <h3>Frequency and Duration</h3>
            <p>
              Choose delivery frequency: once a week, every two weeks, or once a
              month. Then, select your subscription duration from 3 to 12
              months. Enjoy savings with a longer subscription. We understand
              that every customer has different needs, and we aim to provide
              flexible subscription options that cater to your specific
              preferences.
            </p>
          </div>
          <div className="subscribtion-page-how-work-right-side-element">
            <h3>Pay once</h3>
            <p>
              After entering your contact and delivery information and paying
              for your subscription, you can sit back and relax, knowing that
              you have secured a regular supply of fresh, stunning flowers for
              yourself or your loved ones
            </p>
          </div>
        </div>
      </section>
      <section className="subscribtion-page-plan-select">
        <PlanSelector />
        <div className="subscribtion-page-plan-select-image">
          <img 
            src="src/assets/images/Secondary_Images/service_image.webp"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default SubscribtionPage;
