class Graph {
    constructor() {
      this.vertices = new Map();
    }
    addVertex(vertex) {
      this.vertices.set(vertex, new Set());
    }
    addEdge(vertex1, vertex2) {
      this.vertices.get(vertex1).add(vertex2);
      this.vertices.get(vertex2).add(vertex1);
    }
    getEdges(vertex) {
      return this.vertices.get(vertex);
    }
    getVertices() {
      return [...this.vertices.keys()];
    }
    
    dfs(startVertex){
      let visited = new Set()
      this.dfshelper(startVertex,visited)
    }
    dfshelper(currentvisited,visited){
      visited.add(currentvisited)
      console.log(currentvisited)
      for(let adjVertex of this.getEdges(currentvisited)){
        if(!visited.has(adjVertex)){
        this.dfshelper(adjVertex,visited)
        }
      }
    }
  }
  const myGraph = new Graph();
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');
  myGraph.addVertex('E');
  myGraph.addEdge('A', 'B');
  myGraph.addEdge('A', 'D');
  myGraph.addEdge('B', 'C');
  myGraph.addEdge('C', 'E');
  console.log('Vertices:', myGraph.getVertices());
  for (const vertex of myGraph.getVertices()) {
    console.log(`Edges for ${vertex}:`, [...myGraph.getEdges(vertex)]);
  }
  console.log('_____DFS_______')
  myGraph.dfs('A')