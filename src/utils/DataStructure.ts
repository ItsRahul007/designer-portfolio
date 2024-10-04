import { NodeType, TreeNodeValueType } from "./Types";

export class TreeNode {
  value: TreeNodeValueType;
  children: NodeType[];
  constructor(value: TreeNodeValueType) {
    this.value = value;
    this.children = [];
  }

  addChild(node: NodeType) {
    this.children.push(node);
  }

  setValue(val: TreeNodeValueType) {
    this.value = val;
  }

  clearChildren() {
    this.children = [];
  }
}

export class EditorState {
  root: NodeType;

  constructor(node: NodeType) {
    this.root = node;
  }

  buildExpression = (node: NodeType = this.root): string => {
    if (!node) return "";

    if (node.value.type === "fn") {
      let str = "";
      let label = node.value.data.label || "";
      const childExpressions = node.children
        .map((child) => this.buildExpression(child))
        .filter(Boolean);
      str += `(${childExpressions.join(" " + label + " ")})`;
      return str;
    } else {
      // For non-function nodes, return the label, key, or a custom input value
      return (
        node.value.data.label ||
        node.value.data.key ||
        node.value.data.value ||
        ""
      );
    }
  };
}
