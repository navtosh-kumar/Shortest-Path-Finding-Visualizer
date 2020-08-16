import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import {astar, getNodesInShortestPathOrder2} from '../algorithms/astar';
import {bfs, getNodesInShortestPathOrder3} from '../algorithms/bfs';
import {dfs} from '../algorithms/dfs';
import './PathfindingVisualizer.css';

const START_NODE_ROW = 4;
const START_NODE_COL = 4;
const FINISH_NODE_ROW = 16;
const FINISH_NODE_COL = 16;

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
  }

  reset() {
    const temp = getInitialGrid();
    this.setState({temp});
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    for(let i=0;i<21;i++)
    {
      for(let j=0;j<21;j++)
      {
        const node = grid[i][j];
        if(node===startNode)
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-start';
        else if(node===finishNode)
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-finish';
        else
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node';
      }
    }
  }

  animate(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const {grid} = this.state;
    for (const row of grid) {
      for (const node of row) {
        node.distance=Infinity;
        node.isVisited=false;
        node.previousNode=null;
      }
    }
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animate(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeAstar() {
    const{grid}=this.state;
    for (const row of grid) {
      for (const node of row) {
        node.distance=Infinity;
        node.isVisited=false;
        node.previousNode=null;
      }
    }
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode=grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder2=astar(grid,startNode,finishNode);
    const nodesInShortestPathOrder2 = getNodesInShortestPathOrder2(finishNode);
    this.animate(visitedNodesInOrder2,nodesInShortestPathOrder2);
  }

  visualizeBfs() {
    const{grid}=this.state;
    for (const row of grid) {
      for (const node of row) {
        node.distance=Infinity;
        node.isVisited=false;
        node.previousNode=null;
      }
    }
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder3=bfs(grid,startNode,finishNode);
    const nodesInShortestPathOrder3 = getNodesInShortestPathOrder3(finishNode);
    this.animate(visitedNodesInOrder3,nodesInShortestPathOrder3);
  }

  visualizeDfs() {
    const{grid}=this.state;
    for (const row of grid) {
      for (const node of row) {
        node.distance=Infinity;
        node.isVisited=false;
        node.previousNode=null;
      }
    }
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder4=dfs(grid,startNode,finishNode);
    const nodesInShortestPathOrder4=visitedNodesInOrder4;
    this.animate(visitedNodesInOrder4,nodesInShortestPathOrder4);
  }

  render() {
    const {grid} = this.state;

    return (
      <>
        <button onClick={() => this.visualizeDijkstra()} className="Dijkstra">Visualize Dijkstra's Algorithm</button>
        <button onClick={()=>this.visualizeAstar()} className="Astar">Visualize A * Algorithm</button>
        <button onClick={()=> this.visualizeBfs()} className="BFS">Visualize BFS</button>
        <button onClick={()=> this.visualizeDfs()} className="DFS">Visualize DFS</button>
        <button onClick={()=>this.reset()} className="Reset">Reset Grid</button>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart,weight} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      weight={weight}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}


const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20+1; row++) {
    const currentRow = [];
    for (let col = 0; col < 20+1; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};
const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    previousNode: null,
    weight: Math.floor(Math.random()*10),
  };
};
