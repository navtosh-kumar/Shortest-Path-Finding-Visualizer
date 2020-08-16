

export function bfs(grid,startNode,finishNode) {
    const visitedarray=[];
    startNode.distance=0;
    const unvisitedarray = getallgrid(grid);
    while(!!unvisitedarray.length) {
        sortNodesByDistance(unvisitedarray);
        const closestNode = unvisitedarray.shift();
        closestNode.isVisited = true;
        visitedarray.push(closestNode);
        if(closestNode===finishNode)
        return visitedarray;
        updateNeighbors(closestNode,grid);
    }
}

function getallgrid(grid) {
    const array=[];
    for(const row of grid)
    {
        for(const node of row)
        array.push(node);
    }
    return array;
}

function sortNodesByDistance(array)
{
    array.sort((a,b)=> a.distance - b.distance);
}

function updateNeighbors(node,grid) {
    const unvisited = getUnvisitedNeighbors(node,grid);
    for(const neighbor of unvisited) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode=node;
    }
}

function getUnvisitedNeighbors(node,grid) {
    const array=[];
    if(node.row>0)array.push(grid[node.row-1][node.col]);
    if(node.row<grid.length-1)array.push(grid[node.row+1][node.col]);
    if(node.col>0)array.push(grid[node.row][node.col-1]);
    if(node.col<grid.length-1)array.push(grid[node.row][node.col+1]);
    return array.filter(x=> !x.isVisited);
}

export function getNodesInShortestPathOrder3(finishNode) {
    const array=[];
    let node=finishNode;
    while(node!==null) {
        array.unshift(node);
        node=node.previousNode;
    }
    return array;
}

