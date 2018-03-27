// Import React
import React from "react";


// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  nick: require("../assets/nickbg.jpg"),
  logo: require("../assets/coincheck.jpg"),
  apology: require("../assets/check_apologies.jpg"),
  coinjoin: require("../assets/coinjoin.jpg"),
  multisig: require("../assets/multisig.jpg"),
  digital: require("../assets/digital_currency.jpg"),
  gox: require("../assets/mt_Gox.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  secondary: "black"
});

var tag = {
  fontFamily: "Raleway, 'sans-serif'",
  marginTop: '519px',
  marginLeft: '670px',
  color: 'black',
  fontSize: '22px'
};

var fontStyle = {
  fontFamily: "Raleway, 'sans-serif'",
  color: 'black'
}

var title = {
  fontFamily: "Raleway, 'sans-serif'",
  color: '#2cedcc',
  fontWeight: 'unset',
  textShadow: '2px 2px 4px #000000'
}

var sources = {
  fontSize: '16px'
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={'pacman'}>

          <Slide transition={["zoom"]} bgImage={images.logo}>
            <Text style={tag} lineHeight={1} textColor="black">
              ブライアン・フェルプス<br/>
              Brian Phelps JR.
            </Text>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="white" notes="Talk about History and what problems it solved">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Vocab:
            </Heading>
            <List style={fontStyle}>
              cryptocurrency<br/><br/>
              cryptocurrency exchange<br/><br/>
              wallet<br/><br/>
              Private key<br/><br/>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.digital}>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="white">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Coincheck
            </Heading>
            <List style={fontStyle}>
                CoinCheck is a digital currency exchange.<br/><br/>
                Operates exchanges such as BTC/ETC coins and other fiat currencies in Japan.<br/><br/>
                January 26th, 2018, over 520 million XEM coins were stolen from Coincheck exchange.<br/><br/>
                260,000 users affected.
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} Fit cap lineHeight={1} style={title}>
                Attack
            </Heading>
            <List style={fontStyle}>
                CoinCheck's private key compromised.<br/><br/>
                NEM coins were moved to 11 different accounts.<br/><br/>
                Considered largest crypto heist.
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.nick}>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.gox}>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Intrusion Detection
            </Heading>
            <List style={fontStyle}>
            Move of the coins was undetected for 8 hours. <br/><br/>
            Not until a staff member noticed an alert in the steep drop of their NEM coin reserves.

            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              How they got Access
            </Heading>
            <List style={fontStyle}>
              Coins were stored in a HOT wallet.<br/><br/>
              System hacked via employee email.<br/><br/>
              Private key stolen.<br/><br/>
              Suspected phishing email.<br/><br/>
              Infected with Malware.
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Response
            </Heading>
            <List style={fontStyle}>
              Held press conference to provide details of what has happened and what's happening next.<br/><br/>
              They hope to return 90% of all funds lost.<br /><br/>
              Halted new registrations on their website.<br/><br/>
              Halted trading of BTC and NEM.<br/><br/>
              Suspended trading Monero / Dash / ZCash.
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.apology}>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} style={title}>
              Remediation
            </Heading>
            <List style={fontStyle}>
              Paid back $423 million back to investors.  <br/><br/>
              Compensation formula = 88.549 yen * number of NEM you lost.<br/><br/>
              Hard Fork.<br/><br/>
              They should have used NEM's multi-signature contract.
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.multisig}>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} Fit cap lineHeight={1.5} style={title}>
              Questions
            </Heading>
            <List style={fontStyle}>
              <Appear><ListItem style={fontStyle}>Where did the stolen coins go? </ListItem></Appear>
              <Appear><ListItem style={fontStyle}>Cashing the coins in?</ListItem></Appear>
              <Appear>
              <ListItem>Trade coins into Monero / Dash</ListItem>
              </Appear>
              <Appear>
              <ListItem>Convert to cash at exchanges outside of Japan</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.coinjoin}>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1.5} style={title}>
              Sources
            </Heading>
            <List style={sources}>
              https://cointelegraph.com/news/mt-gox-coincheck-binance-and-more-how-exchanges-are-learning-to-deal-with-cyberattacks<br/>
              https://cointelegraph.com/news/coincheck-nem-foundation-stops-tracing-stolen-coins-hackers-account-at-zero<br/>
              https://cointelegraph.com/news/mt-gox-coincheck-binance-and-more-how-exchanges-are-learning-to-deal-with-cyberattacks<br/>
              https://www.cnbc.com/2018/01/28/coincheck-nem-hack-unlikely-last-for-cryptocurrency-space-analyst.html<br/>
              https://www.cnbc.com/2018/01/29/japan-raps-coincheck-orders-broader-checks-after-cryptocurrency-theft.html<br/>
              https://www.cnbc.com/2018/02/02/japanese-regulators-raid-coincheck-in-wake-of-crypto-heist.html<br/>
              https://www.cnbc.com/2018/02/13/reuters-america-update-2-japans-coincheck-reports-to-regulators-over-530-million-cryptocurrency-heist.html<br/>
              https://news.bitcoin.com/tumbling-bitcoins-guide-rinse-cycle/<br/>
              https://www.technologyreview.com/s/610092/what-the-coincheck-hack-means-for-the-future-of-blockchain-security/<br/>
              https://hackernoon.com/coincheck-the-half-a-billion-dollar-hack-84d0a30f92b1<br/>
              https://www.theregister.co.uk/2018/01/26/coincheck_hacked/<br/>
              https://asia.nikkei.com/Tech-Science/Tech/Coincheck-targeted-by-suspicious-traffic-for-weeks-before-NEM-heist<br/>
              https://medium.com/nemofficial/coincheck-hack-interview-with-nem-foundation-vp-jeff-mcdonald-alex-tinsman-from-inside-nem-8d678babb19a<br/>
              http://fortune.com/2018/01/31/coincheck-hack-how/<br/>
              http://fortune.com/2018/01/29/coincheck-japan-nem-hack/<br/>
              https://btcmanager.com/coincheck-refunding-investors-lost-nem-xem-cyberheist/<br/>
              https://www.ft.com/content/6a761a60-2694-11e8-b27e-cc62a39d57a0<br/>
              https://news.bitcoin.com/tumbling-bitcoins-guide-rinse-cycle/
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
            <i class="fal fa-code-branch"></i>
              gitHub
            </Heading>
            <Text lineHeight={2} style={fontStyle}>
              https://github.com/F1nalFortune/coinCheck_Spec
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
