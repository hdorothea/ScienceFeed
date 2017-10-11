export function rename(element, renameMapping) {
  return Object.keys(element).reduce((renamedElement, key) => {
    if (Object.keys(renameMapping).includes(key)) {
      key = renameMapping[key];
    }
    renamedElement[key] = element[key];
    return renamedElement;
  }, {});
}
