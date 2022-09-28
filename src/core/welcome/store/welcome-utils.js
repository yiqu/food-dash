export const generateRandomMessages = () => {
  const firstMsg = firstMessages[getRandomArbitrary(0, firstMessages.length)];
  const secondMsg = secondMessages[getRandomArbitrary(0, secondMessages.length)];
  return {
    motd: firstMsg,
    motd2: secondMsg
  };
};

const firstMessages = [
  "Restaurants and more",
  "A life full of tasty food",
  "The flavors come from the culture of nature",
  "Giving your hunger a new option",
  "Your favourite food",
  "Deliciousness twirling in your mouth"
];

const secondMessages = [
  "delivered to your door"
];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
