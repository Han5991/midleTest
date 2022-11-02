import { useState } from 'react';

import {
  setoneval,
  oneargfunc,
  showvalues,
  setattribute,
} from 'services/reg.service';

export { AddEdit };

function AddEdit() {
  const [contractName, setContractName] = useState('');
  const [attribute, setAttribute] = useState('');
  const [result, setResult] = useState('');

  return (
    <form>
      <h1>{'Add NameRegistry'}</h1>
      <div className="form-row">
        <div className="form-group col-3">
          <label>Contract Name</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setContractName(e.target.value)}
          />
        </div>
        <div className="form-group col-9">
          <label>Attribute</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setAttribute(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-12">
          <label>Result</label>
          <textarea className="form-control" value={result} />
        </div>
      </div>
      <div className="form-group">
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="changeOwner"
          onClick={async event => {
            const result = await setattribute(
              contractName,
              attribute,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          changeOwner
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="register"
          onClick={async event => {
            const result = await setoneval(
              contractName,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          register
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="setAddr"
          onClick={async event => {
            const result = await setattribute(
              contractName,
              attribute,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          setAddr
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="setDescription"
          onClick={async event => {
            const result = await setattribute(
              contractName,
              attribute,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          setDescription
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="unregister"
          onClick={async event => {
            const result = await setoneval(
              contractName,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          unregister
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="contracts"
          onClick={async event => {
            const result = await oneargfunc(
              contractName,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          contracts
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="getAddr"
          onClick={async event => {
            const result = await oneargfunc(
              contractName,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          getAddr
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="getDescription"
          onClick={async event => {
            const result = await oneargfunc(
              contractName,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          getDescription
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="getOwner"
          onClick={async event => {
            const result = await oneargfunc(
              contractName,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          getOwner
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="numContracts"
          onClick={async event => {
            const result = await showvalues(event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          numOfContracts
        </button>
      </div>
    </form>
  );
}
