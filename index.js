const axios = require('axios');
const cheerio = require('cheerio');

const webhookUrl = process.env.WEBHOOK
const url = `https://store.ui.com/us/en/${process.env.PRODUCT_SLUG}`;

module.exports.checkStock = async (event) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const isButtonActive = $('span').filter(function () {
      // button's label is "Add to Cart"
      return $(this).text() === 'Add to Cart';
    }).text()

    if (isButtonActive) {
      await axios.post(webhookUrl, {
        content: `The item at ${url} is back in stock!`
      });
      console.log('Sent message to Discord');
    } else {
      console.log('Not in stock');
    }
  } catch (error) {
    console.error(`Failed to check the website ${url} - ${error}`);
  }
};