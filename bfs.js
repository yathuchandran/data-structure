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
    connection() {
        console.log("yeay"+[...this.vertices.keys()])
        return [...this.vertices.keys()];
      }
   
    bfs(startindex){
      let visited = new Set()
      visited.add(startindex)
      let queue = [startindex]
      while(queue.length > 0){
        let currentvisited = queue.shift()
        console.log(currentvisited)
        for(let adjVertex of this.getEdges(currentvisited)){
          if(!visited.has(adjVertex)){
            visited.add(adjVertex)
            queue.push(adjVertex)
          } } } } }
  const myGraph = new Graph();
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('D');
  myGraph.addEdge('A', 'B');
  myGraph.addEdge('A', 'D');
  myGraph.addEdge('B', 'C');
  myGraph.connection()
  console.log(myGraph)
  console.log('Vertices:', myGraph.getVertices());
  for (const vertex of myGraph.getVertices()) {
    console.log(`Edges for ${vertex}:`, [...myGraph.getEdges(vertex)]);
  }
  console.log("___BSF____")
  myGraph.bfs('B')


