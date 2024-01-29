// import  { useState } from 'react';

const JsonInputComponent = () => {
  // const [jsonInput, setJsonInput] = useState('');
  // const [parsedJson, setParsedJson] = useState<unknown>(null);
  // const [error, setError] = useState<string|null>(null);
  //
  // const processJSON = () => {
  //   try {
  //     const parsed = JSON.parse(jsonInput);
  //     setParsedJson(parsed);
  //     setError(null);
  //   } catch (error) {
  //     setParsedJson(null);
  //     setError('Invalid JSON format');
  //   }
  // };

  return (
    <div className="container mt-5">
      {/*<h1>Data to encrypt</h1>*/}
      {/*<div className="row">*/}
      {/*  <div className="col-md-6">*/}
      {/*    <form>*/}
      {/*      <div className="mb-3">*/}
      {/*        <label htmlFor="jsonInput" className="form-label">Enter in JSON format:</label>*/}
      {/*        <textarea*/}
      {/*          className="form-control"*/}
      {/*          id="jsonInput"*/}
      {/*          rows={8}*/}
      {/*          value={jsonInput}*/}
      {/*          onChange={(e) => setJsonInput(e.target.value)}*/}
      {/*        ></textarea>*/}
      {/*      </div>*/}
      {/*      /!*<button type="button" className="btn btn-primary" onClick={processJSON}>*!/*/}
      {/*      /!*  Process JSON*!/*/}
      {/*      /!*</button>*!/*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*  <div className="col-md-6">*/}
      {/*    {parsedJson !== null && (*/}
      {/*      <div className="json-container">*/}
      {/*        <h2>Parsed JSON:</h2>*/}
      {/*        <pre>{JSON.stringify(parsedJson, null, 2)}</pre>*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*    {error && (*/}
      {/*      <div className="alert alert-danger" role="alert">*/}
      {/*        {error}*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default JsonInputComponent;
