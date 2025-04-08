"use client"

const DemoArea = () => {
  return (
    <div
      className="demo-area"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        minHeight: "300px",
      }}
    >
      <div className="mb-3">
        <label htmlFor="demoInput" className="form-label">
          Sample Input
        </label>
        <input type="text" className="form-control" id="demoInput" placeholder="Type something here..." />
      </div>

      <div className="mb-3">
        <label htmlFor="demoTextarea" className="form-label">
          Sample Textarea
        </label>
        <textarea className="form-control" id="demoTextarea" rows={3} placeholder="Write some text..."></textarea>
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="demoCheckbox" />
          <label className="form-check-label" htmlFor="demoCheckbox">
            Sample checkbox
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="demoSelect" className="form-label">
          Sample Select
        </label>
        <select className="form-select" id="demoSelect">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div className="mb-3">
        <button className="btn btn-outline-primary me-2">Sample Button 1</button>
        <button className="btn btn-outline-secondary me-2">Sample Button 2</button>
        <button className="btn btn-outline-success">Sample Button 3</button>
      </div>
    </div>
  )
}

export default DemoArea