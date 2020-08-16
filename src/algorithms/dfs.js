export function dfs(grid,startNode,finishNode) {
    const array=[];
    let node=startNode;
    array.push(node);
    while(node!==finishNode) {
        if(node.row>0&&grid[node.row-1][node.col].isVisited===false)
        node=grid[node.row-1][node.col];
        else if(node.col<grid.length-1&&grid[node.row][node.col+1].isVisited===false)
        node=grid[node.row][node.col+1];
        else if(node.row<grid.length-1&&grid[node.row+1][node.col].isVisited===false)
        node=grid[node.row+1][node.col];
        else 
        node=grid[node.row][node.col-1];
        node.isVisited=true;
        array.push(node);
    }
    return array;
}