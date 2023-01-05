/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    // at first check if the tree is not empty
    if (!this.root) return 0;

    // define a function that loops over each node's children and
    // if each child of children has its own children; call the helper func on its child (resursively).
    let total = this.root.val;
    function helperSum(node) {
      for (let child of node.children) {
        total += child.val;

        if (child.children.length > 0) {
          helperSum(child);
        }
      }
    }
    //call helper function on root
    helperSum(this.root);
    return total;
  }

  // sumValues() {
  //   if(!this.root) return 0;
  //   let total = this.root.val
  //   for (const child of this.root.children){
  //     total += child.val
  //     for (const subChild of child.children){
  //       total += subChild.val
  //     }
  //   }
  //   return total
  // }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;
    function helperCountEvens(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;
        // check if child has children, if has, call func on it recursively.
        if (child.children.length > 0) helperCountEvens(child);
      }
    }

    helperCountEvens(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //check if tree is not empty
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;
    function helperNumGreater(node) {
      for (let child of node.children) {
        //check if value of child is greater than lowerBound, if yes, increment count.
        if (child.val > lowerBound) count++;
        // check if child has children, if has, call func on it recursively.
        if (child.children.length > 0) helperNumGreater(child);
      }
    }
    helperNumGreater(this.root);
    return count;
  }
}

const nodes = new TreeNode(0, [
  new TreeNode(1),
  new TreeNode(2),
  new TreeNode(3, [new TreeNode(4), new TreeNode(5)]),
  new TreeNode(6, [new TreeNode(7), new TreeNode(8)]),
  new TreeNode(9, [new TreeNode(10), new TreeNode(11)]),
]);

const nodes2 = new TreeNode(0, [
  new TreeNode(1),
  new TreeNode(2),
  new TreeNode(3),
  new TreeNode(4),
  new TreeNode(5),
  new TreeNode(6),
  new TreeNode(7),
  new TreeNode(8),
  new TreeNode(9),
  new TreeNode(10),
  new TreeNode(11),
]);

const tree = new Tree(nodes);
const tree2 = new Tree(nodes2);

module.exports = { Tree, TreeNode };
