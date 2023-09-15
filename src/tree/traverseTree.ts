interface treeItemConstrcuter {
  children: treeItemConstrcuter[],
  [key: string]: any
}

/**
 * @description 遍历树形结构对每一个叶子节点进行操作
 * @param tree 要遍历的树形结构
 * @param cb 对树形结构的每一个叶子节点进行的操作
 * @returns 遍历后的树形结构
 */
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