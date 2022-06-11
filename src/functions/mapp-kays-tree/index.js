const func = function (tree) {
  for (const nodeIdx in tree) {
    const {
      type: elementName,
      components: children,
      attributes: props
    } = tree[nodeIdx]
    func(children)
    tree[nodeIdx] = { elementName, props: props ? props : {}, children }
  }
  let newArray = tree
  return newArray
}
export default func
