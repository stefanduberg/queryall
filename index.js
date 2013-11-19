function queryAll(selector, parent) {
  parent = parent || document;
  return Array.prototype.slice.call(parent.querySelectorAll(selector));
}

module.exports = queryAll;
