class Node {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
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

// DFS implementation that starts at a certain vertex
function dfs(s, graph) {
  let parent = [];
  parent.push(s);
  for (const neighbor of adj(s, graph)) {
    if (!(parent.includes(neighbor))) {
      dfsVisit(neighbor, graph, parent);
    }
  }

  return parent;
}

function dfsVisit(s, graph, parent) {
  parent.push(s);
  for (const neighbor of adj(s, graph)) {
    if (!(parent.includes(neighbor))) {
      dfsVisit(neighbor, graph, parent);
    }
  }
}

// DFS traversing all vertices in the graph, based on the course video
function newDfs(graph) {
  let parent = {};
  for (const s in graph) {
    if (!(s in parent)) {
      parent[s] = null;
      newDfsVisit(graph, s, parent);
    }
  }

  return parent;
}

function newDfsVisit(graph, s, parent) {
  for (const v of adj(s, graph)) {
    if (!(v in parent)) {
      parent[v] = s;
      newDfsVisit(graph, v, parent);
    }
  }
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

console.log(dfs("s", graph));
console.log(newDfs(graph));
