import React from 'react'
import styles from './styles/subscription.module.scss'
import Card from './Card'

const Subscription = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <div className={styles.titlecontainer}>
            <div className={styles.titleText}>
              <p className={styles.title}>
                Choose Your Subscription!
              </p>
              <p className={styles.titleDiscription}>
                The most advanced Load & Hauling Ticketing Solution with simple and affordable pricing. Try it for 30 days in our free trial
              </p>
            </div>

          </div>

        </div>
        <div className={styles.page2}>
        <div className={styles.cards}>
          <Card
            title="Enterprise"
            price="$599.99/month"
            bulletPoint="Unlimited Drivers"
          />
          <Card
            title="Starter"
            price="$199.99/month"
            bulletPoint="1-10 Drivers"
          />
          <Card
            title="Professional"
            price="$299.99/month"
            bulletPoint="1-25 Drivers "
          />
        </div>
  
         <div className={styles.questionContainer}>
          <div className={styles.questionTitle}> Frequently Asked Questions
          </div>
   

          <div className={styles.flex}>
            <div className={styles.questionBox}>
              <div className={styles.question}>How does free trial work?</div>
              <div className={styles.answere}>
              For 30 days, you can use LOADZ ONLINE unlimited capabilities, completely free (you’ll experience the Expert plan). No Credit Card needed, no strings attached. During those 14 days, our Customer Success team will help you understand if LOADZ ONLINE is the right solution for your business.</div>
              </div>


            <div className={styles.questionBox}>  <div className={styles.question}>Can I cancel any time?</div>
              <div className={styles.answere}>
              Yes. You can upgrade, downgrade or cancel your plan at any time.</div></div>


            <div className={styles.questionBox}>  <div className={styles.question}>What happens after my trial ended?</div>
              <div className={styles.answere}>
              After a 30 Day Trial, you need to decide if you will continue using LOADZ ONLINE. If you will continue using LOADZ ONLINE, you will need to subscribe to one of our premium plans. We try to make this decision as easy as possible, that’s why we offer a monthly subscription that can be cancelled at any time and an annual subscription with a 30 day refund policy. If you don’t want to subscribe, all your information will stay intangible until you decide to subscribe or delete the account upon request. if you’re a small business working the authority of a current subscriber, you’ll be able to use the “small Business Plan” for free.</div></div>


            <div className={styles.questionBox}>  <div className={styles.question}>Can I have a discount?</div>
              <div className={styles.answere}>
              When purchasing a plan on an annual subscription, your monthly cost is reduced in a way that equals to 10 months of use on a monthly subscription. And there you go – 2 Months for Free.</div></div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Subscription
