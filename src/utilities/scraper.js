import cheerio from 'react-native-cheerio';
import _ from 'lodash';

export default (html) => {
  let result = {};
  const $ = cheerio.load(html);
  const infoRows = $('table.print-friendly').eq(0).find('tr');
  const previewImage = $('img').eq(1).attr('src');
  result.previewImage = previewImage;

  const aptDetailedImages = $('.col-sm-offset-1.col-sm-4.col-xs-12').find('div:last-child > div:first-child > div img');
  // console.log('scraping detailed images: ', aptDetailedImages);
  result.apartmentImages = _.toArray(aptDetailedImages.map((index, image) => $(image).attr('src')));
  infoRows.map((index, row) => {
    let cellProp = $(row).find('th').text().length > 1 ? _.camelCase($(row).find('th').text()) : '';
    let cellValue = cellProp ? $(row).find('td').text() : '';
    // console.log(`${cellProp} | ${cellValue}`);
    if (cellProp) {
      result[cellProp] = cellValue;
    }
  });

  // console.log('apartment info after processed in scraper: ', result);
  return result;
}
