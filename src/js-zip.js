/**
 * Implement of zip function of python
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-04 14:36:41
 */

const CheckIterable = require('./check-iterable');

const zip = (...array) => {

  array.forEach((ele, index) => {
    // 检验输入数据的合法性，如果为非法数据，则抛出异常
    CheckIterable(ele, index+1);  
  });

  // 避免没有参数输入的情况
  if (array.length === 0) {
    return [];
  }

  let minLength = 999999;
  // 将可迭代的对象转为数组形式，并获取最小长度
  const matrix = array.map((ele) => {
    const newArray = new Array(...ele);
    minLength = Math.min(minLength, newArray.length);
    return newArray;
  });

  // 矩阵转置操作
  var newMatrix = matrix[0].slice(0, minLength).map(function(col, i) {
    return matrix.map(function(row) {
      return row[i];
    });
  });

  return newMatrix;
};

module.exports = zip;
