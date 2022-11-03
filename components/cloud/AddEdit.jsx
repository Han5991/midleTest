import { useState } from 'react';

import {
  setoneval,
  oneargfunc,
  showvalues,
  setattribute,
} from 'services/reg.service';

import { checkGoalReached } from 'services/cloud.service';

export { AddEdit };

function AddEdit() {
  const [amount, setAmount] = useState('');
  const [investorsIndex, setInvestorsIndex] = useState('');
  const [result, setResult] = useState('');

  return (
    <form>
      <h1>{'Add Cloud'}</h1>
      <div className="form-row">
        <div className="form-group col-3">
          <label>Amount</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group col-9">
          <label>investorsIndex</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setInvestorsIndex(e.target.value)}
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
          id="checkGoalReached"
          onClick={async event => {
            const result = await checkGoalReached(event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          checkGoalReached
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="register"
          onClick={async event => {
            const result = await setoneval(amount, event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          fund
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="setAddr"
          onClick={async event => {
            const result = await setattribute(
              amount,
              investorsIndex,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          deadline
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="setDescription"
          onClick={async event => {
            const result = await setattribute(
              amount,
              investorsIndex,
              event.currentTarget.id,
            );
            setResult(JSON.stringify(result));
          }}
        >
          ended
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="unregister"
          onClick={async event => {
            const result = await setoneval(amount, event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          investors
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="contracts"
          onClick={async event => {
            const result = await oneargfunc(amount, event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          getBalance
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="getAddr"
          onClick={async event => {
            const result = await oneargfunc(amount, event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          goalAmount
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="getDescription"
          onClick={async event => {
            const result = await oneargfunc(amount, event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          numInvestors
        </button>
        <button
          type="button"
          className="btn btn-primary mr-2 mb-2"
          id="getOwner"
          onClick={async event => {
            const result = await oneargfunc(amount, event.currentTarget.id);
            setResult(JSON.stringify(result));
          }}
        >
          status
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
          totalAmount
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
          owner
        </button>
      </div>
    </form>
  );
}
