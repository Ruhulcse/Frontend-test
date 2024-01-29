import HeaderLogged from "components/Header/HeaderLogged";
import Heading from "components/Heading/Heading";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Footer from "shared/Footer/Footer";
import FAQCard from "./FAQCard";

export interface FAQProps {}

export const faqs = [
  {
    sr: 1,
    question: "What is STOPTHEFAKE?",
    answer:
      "STF is an online legit check site, accessible to all, it allows you to verify the authenticity of articles presented with the aim of limiting articles around counterfeiting.",
  },
  {
    sr: 2,
    question: "How it works ?",
    answer:
      "Simply log on to our stopthefake.fr website and create a account. Buying tokens allows you to send the legit check form (“Legit-check now”), plus the number of tokens used per form, is important, the less the response time. The photos that We have needs are explained to you by image in the legit check form.",
  },
  {
    sr: 3,
    question: "Who are we ?",
    answer:
      "The members of the STF team are made up of young fashion enthusiasts, working for the Mostly in ready-to-wear boutiques in the Aix region, the STF site is also hosted in France, where its head office is located.",
  },
  {
    sr: 4,
    question:
      "Are we reliable?",
    answer:
      "All our checks are verified by multiple people, which allows us to avoid the opinions unilateral. All legit checks since the creation of the site are available on our page“ Explore”, nothing is hidden which allows you to get an idea of the reliability of our service ?",
  },
  {
    sr: 5,
    question: "What items do we check?",
    answer:
      "Overall, all clothing, accessories and sneakers of all brands are available at online verification service, except luxury leather goods, watches and jewelry are not verifiable",
  },
  {
    sr: 6,
    question: "How to carry out a good legitimate check?",
    answer:
      "To do this, you must first send quality photos, showing precise details. of the item in question, any packaging, bag or box should not be neglected, plus the photos and information sent are of high quality, the greater the reliability of the legit check.",
  },
  {
    sr: 7,
    question: "Is a legitimate online check 100% reliable?",
    answer:
      "No, 0 risk does not exist, the goal of STF is not to have the pretension to be 100% sure but to be as close as possible, our mission is to avoid as much as possible scam, especially for those starting out in the field, our lowest price on the market allows to be accessible to all for all types of items. Our opinion is based above all on the information that we receive from your part, so be specific and clear.",
  },
  {
    sr: 8,
    question: "Is double checking useful?",
    answer:
      "Yes, checking before purchasing often helps avoid a dispute upon receipt of the item, days or weeks of waiting without being 100% sure of being reimbursed, verification once the item received allows you to avoid realizing too late of a potential scam, in fact sellers can put photos of an authentic item on their ad, and you send a quality counterfeit.",
  },
  {
    sr: 9,
    question: "How long will it take to receive my response?",
    answer:
      "The time it takes to receive the response to your legitimate check depends solely on the weather that you have selected, the quicker you want to have the answer, the lower the cost in tokens will be important.",
  },
  {
    sr: 10,
    question: "How do I receive my legitimate check response?",
    answer: "This is automatically sent to your email in relation to the delivery time. verification that you have chosen, you can use this certificate for your future sales by example, the number allows you to find the photos of your legit check on our site via the section “explore”. The result of your legitimate check is also available in your history clicking on “my profile” or in the feed on the home page.",
  },
  {
    sr:11,
    question:"How to collaborate with us?",
    answer:"Our rather unique concept deserves the most accomplished visibility, for this, our team is always looking for a partner, if you are a YouTuber, TikToker, influencer or other, and that the fight against counterfeiting and this subject, if you are interested, do not hesitate to contact us via instagram or on our email contact@stopthefake.fr",
  },
  {
    sr:12,
    question:"What payment methods are accepted, and which platform secures this?",
    answer:"Our site, through the stripe platform, only accepts card payments banking, but all types of cards are valid, the presence of the padlock in URL allows to secure the transfer of payment.",
  },
  {
    sr:13,
    question:"How to contact us in case of various problems?",
    answer:"First of all, we invite you to contact us via our Instagram page, if you do not receive a response within 24 hours, you can contact us via our email address contact@stopthefake.fr",
  },
];

const FAQ: FC<FAQProps> = () => {
  return (
    <>
      <HeaderLogged />
      <Helmet>
        <title>Stopthefake - Legit-check your item</title>
      </Helmet>
      <div className="overflow-hidden relative">
        <div className="container">
          <Heading
            style={{ margin: "40px 0px", textTransform: "uppercase" }}
            isCenter
          >
            Frequently Asked Questions
          </Heading>
          <div>
            {faqs.map((item, index) => (
              <FAQCard
                question={item.question}
                answer={item.answer}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
