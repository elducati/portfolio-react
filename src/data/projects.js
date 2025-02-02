// src/data/projects.js
import image3 from '../assets/3.png';
import image2 from '../assets/2.png';
import image1 from '../assets/1.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import image10 from '../assets/10.png';
import movieImage from '../assets/movie.PNG';
import quoteImage from '../assets/quote.PNG';
import turnGameImage from '../assets/turn-game.png';
import restaurantImage from '../assets/restaurant.png';
import existingProjImage from '../assets/existing-proj.png';

const projects = [
  {
    title: "Lootbox",
    description: "NFT-rewarding quiz web app built with thirdweb and React",
    image: image3,
    link: "https://thirdweb-lootbox-quiz-app.fly.dev/"
  },
  {
    title: "On-chain Mechanical Keyboards",
    description: "Web app for creating on-chain mechanical keyboards with ETH tipping. Built with Solidity, React, Next.js",
    image: image2,
    link: "http://on-chain-mechanical-keyboards.vercel.app/"
  },
  {
    title: "Cool Domains on Polygon",
    description: "ENS-style domain service on Polygon L2 with smart contracts and React frontend",
    image: image1,
    link: "http://cool-domains-on-polygon.vercel.app/"
  },
  {
    title: "Cryptodev Defi Exchange",
    description: "DeFi exchange with ETH/CD token pair, liquidity pools, and 1% swap fees",
    image: image4,
    link: "https://cryptodev-defi-exchange.vercel.app/"
  },
  {
    title: "DAO Cryptodev",
    description: "Decentralized Autonomous Organization for Crypto Dev governance and voting",
    image: image5,
    link: "http://dao-cryptodev.vercel.app/"
  },
  {
    title: "ICO Initial Coin Offering",
    description: "Token launch platform with NFT holder rewards and gas-efficient distribution",
    image: image6,
    link: "http://ico-sigma.vercel.app/"
  },
  {
    title: "NFT Collection Cryptodev",
    description: "Unique NFT collection with presale whitelisting and limited edition drops",
    image: image7,
    link: "http://nft-collection-cryptodev.vercel.app/"
  },
  {
    title: "Whitelist Dapp",
    description: "NFT whitelisting solution with early access for community supporters",
    image: image8,
    link: "http://whitelist-dapp-eosin.vercel.app/"
  },
  {
    title: "Decentralized Autonomous Organization - DAO",
    description: "DAO implementation with Javascript/React for proposal creation and voting",
    image: image9,
    link: "https://Buildspace-DAO-Starter.elducati.repl.co"
  },
  {
    title: "Mint Your Own NFT Collection",
    description: "End-to-end NFT minting platform with Web3 gallery display",
    image: image10,
    link: "https://nft-starter-project.elducati.repl.co/"
  },
  {
    title: "Film Festival Website",
    description: "Event management platform with registration system and social media integration",
    image: movieImage,
    link: "https://elducati.github.io/movie-site/"
  },
  {
    title: "Quotation Generator",
    description: "Random quote generator with MDBootstrap interface",
    image: quoteImage,
    link: "https://elducati.github.io/quote-generator/"
  },
  {
    title: "Turn-based Board Game",
    description: "Multiplayer strategy game with JavaScript core mechanics",
    image: turnGameImage,
    link: "https://elducati.github.io/Turn-based-Javascript-board-game/"
  },
  {
    title: "Restaurant Review Platform",
    description: "Crowdsourced restaurant rating system with user reviews",
    image: restaurantImage,
    link: "https://elducati.github.io/restaurant-review-site/"
  },
  {
    title: "Todo List App Enhancement",
    description: "Legacy code modernization with test implementation and bug fixes",
    image: existingProjImage,
    link: "https://github.com/elducati/todo-list-app/wiki"
  }
];

export default projects;