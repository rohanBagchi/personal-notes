# React Class Component Lifecycle Methods

<https://reactjs.org/docs/react-component.html#the-component-lifecycle>

<https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

![React Class Component Lifecycle](/react-life-cycle.png)

Mounting Phase:

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

Update Phase:

1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

Unmounting

1. componentWillUnmount
