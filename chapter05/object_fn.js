// js 中编写一个通过函数修改对象属性的函数

const stockPrices = {
  ibm: 144.23,
  apple: 247.74,
  mi: 2.56
};

function getQuote(stock) {
  // Look up the stock price from the mock API
  const price = stockPrices[stock];
  if (!price) {
    throw new Error(`Invalid stock: ${stock}`);
  }
  return price;
}

let pfo = Object.create(Object.prototype);

function addstock(protfolio,stockname,shares) {
	protfolio[stockname] = shares;
}

function computeValue(protfolio) {
	let total = 0.0;
	for (let stock in protfolio) {
		let shares = protfolio[stock];
		let price = getQuote(stock);
		total += shares * price;
	}
	return total;
}

addstock(pfo,"ibm",50);
addstock(pfo,"apple",32);
addstock(pfo,"mi",10);

console.log(computeValue(pfo));
