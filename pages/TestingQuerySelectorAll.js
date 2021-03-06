import React, { createRef } from 'react';
import Gist from 'react-gist';
import { simpleQuerySelectorAll } from '../utils';

const TestingQuerySelectorAll = () => {
  const referenceToRoot = createRef();

  const findElement = () => {
    const rootNode = referenceToRoot.current;
    const tagNameToFind = 'span';

    const results = simpleQuerySelectorAll(rootNode, tagNameToFind);
    alert('check console for results!');
    console.log({ simpleQuerySelectorAll: results });
  };

  return (
    <>
      <button type="button" onClick={findElement}>
        Find all Elements!!
      </button>
      <p>Given a DOM of following structure: </p>
      <pre>
        {`
          <div id="root" ref={referenceToRoot}>
            <div>
              <span />
            </div>
            <div>
              <span>
                <span />
              </span>
              <div>
                <div />
              </div>
            </div>
          </div>
        `}
      </pre>
      Find all elements matching the passed in selector: <strong>Span</strong>
      <Gist id="5836025aa1e10b881f1f624fa02e65d9" />
      <div id="root" ref={referenceToRoot}>
        <div>
          <span />
        </div>
        <div>
          <span>
            <span />
          </span>
          <div>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingQuerySelectorAll;
