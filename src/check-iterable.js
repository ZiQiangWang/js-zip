/**
 * Check object is iterable
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-04 15:26:04
 */

module.exports = (obj, index) => {

  const error = new TypeError(`argument #${index} must support iteration`);

  // checks for null and undefined
  if (obj == null) {
    throw error;
  }

  if(!(typeof obj[Symbol.iterator] === 'function')) {
    throw error;
  }
};
