function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(items, item) {
  //remove the first matching item from items,
  //if item exists,and return it.Otherwise,
  //return undefined.
  let index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
  }
  return item;
}

export { choice, remove };
