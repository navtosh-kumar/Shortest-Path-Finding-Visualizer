
## Path Finding Visualizer

One of the most popular path finding algorithm is known as the Dijkstra's Shortest Path First algorithm. As a beginner’s step to algorithm and starting to understand how they work I decided to make this visualizer that show in action how the path finding algorithm works in action. The understanding of this algorithm gives you the base idea of how navigation tools are implemented.  In this visualizer I have a grid page that has nodes that helped to pinpoint where to start and the end point. a good understanding of the some path finding algorithm. Futher, I implemented more Algorithms such as A* algorithm, BFS and DFS to see how the path looks in different scenarios.

![image](https://user-images.githubusercontent.com/44619905/118291599-66d2a480-b4f5-11eb-8c7b-1715e52c7131.png)

### Path Algorithms

#### 1. Dijkstra's Algorithm (weighted):
"the father of pathfinding algorithms;" find the shortest path between nodes in a graph

![image](https://user-images.githubusercontent.com/44619905/118291773-9681ac80-b4f5-11eb-9308-b6d095b3453e.png)

#### 2. A* Search (weighted):
Arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm

![image](https://user-images.githubusercontent.com/44619905/118291869-ad280380-b4f5-11eb-9b77-5f4c1a37d820.png)

#### 3. Breath-first Search (unweighted): 
A great algorithm; guarantees the shortest path

![image](https://user-images.githubusercontent.com/44619905/118291937-c16c0080-b4f5-11eb-8eb2-803527d69055.png)

#### 4. Depth-first Search (unweighted):
A very bad algorithm for pathfinding; does not guarantee the shortest path

![image](https://user-images.githubusercontent.com/44619905/118292003-d21c7680-b4f5-11eb-8309-1cabc842797c.png)

The motivation behind this project was to understand how map applications work to finding the destination from one point to another; With that wonder in mind I decided to visualize the path finding algorithm which I thought was close to the way maps works. Starting this project I was expecting to have it be more user friendly for example making the starting and the end node to be able to move around or the user to choose wherever he want it to start and end or even move the end node as the application is executing and make the algorithm figure out where the new position of the end node is located. From now forward that’s what I will be working on to make this application more user friendly.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

