import React from 'react';

export function LoggerHOC(Component) {
  const InnerComponent = (props) => {
    const [logs, setLog] = React.useState([]);

    React.useEffect(() => {
      setLog((prevLogs) => [...prevLogs, props]);
    }, [props]);

    return (
      <>
        <Component {...props} />
        <p>Logging:</p>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{JSON.stringify(log, null, 2)}</li>
          ))}
        </ul>
      </>
    );
  };

  return InnerComponent;
}

const ComponentToBeLogged = ({ name }) => <div>Printing: {name}</div>;
const EnhancedComponentToBeLogged = LoggerHOC(ComponentToBeLogged);

export default function LoggerHOCExample() {
  const [name, setName] = React.useState('Rohan');
  return (
    <>
      <label htmlFor="NameField">
        Enter name to be passed to Child Component
        <input
          type="text"
          name="NameField"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <EnhancedComponentToBeLogged name={name} />
    </>
  );
}
