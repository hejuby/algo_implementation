class Node {
  constructor (key) {
    this.key = key;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insert(key) {
    const node = new Node(key);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = node;
    }
  }
}

function bfs(s, graph) {
  const levels = {};
  levels[s] = 0;

  let frontier = [s];
  let next = [];
  let i = 1;

  while (frontier.length) {
    next = [];
    for (const vertex of frontier) {
      for (const neighbor of adj(vertex, graph)) {
        if (!(neighbor in levels)) {
          levels[neighbor] = i;
          next.push(neighbor);
        }
      }
    }
    frontier = next;
    i++;
  }

  return levels;
}

function adj(s, graph) {
  const ret = [];
  let current = graph[s].head;
  while (current) {
    ret.push(current.key);
    current = current.next;
  }

  return ret;
}

const graph = {};
const vertices = ["z", "a", "s", "x", "d", "c", "f", "v"];
for (const vertex of vertices) {
  graph[vertex] = new LinkedList();
}
graph["z"].insert("a");
graph["a"].insert("z");
graph["a"].insert("s");
graph["s"].insert("a");
graph["s"].insert("x");
graph["x"].insert("s");
graph["x"].insert("d");
graph["x"].insert("c");
graph["d"].insert("x");
graph["d"].insert("c");
graph["d"].insert("f");
graph["c"].insert("x");
graph["c"].insert("d");
graph["c"].insert("f");
graph["c"].insert("v");
graph["f"].insert("d");
graph["f"].insert("c");
graph["f"].insert("v");
graph["v"].insert("c");
graph["v"].insert("f");

console.log(graph);
console.log(bfs("s", graph));