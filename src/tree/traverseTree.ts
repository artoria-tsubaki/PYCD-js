interface treeItemConstrcuter {
  children: treeItemConstrcuter[],
  [key: string]: any
}

const traverseTree = (tree: treeItemConstrcuter[], cb: Function) => {
  tree.forEach((item: treeItemConstrcuter) => {
    cb(item); // 先处理当前节点
    if (item.children) {
      traverseTree(item.children, cb); // 递归处理子节点
    }
  })

  return tree
}

export default traverseTree