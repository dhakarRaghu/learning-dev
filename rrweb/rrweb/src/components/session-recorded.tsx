"use client"

import type { FC } from "react"

interface SessionRecorderProps {
  recording: boolean
  events: any[]
  startRecording: () => void
  stopRecording: () => void
  saveRecording: () => void
}

const SessionRecorder: FC<SessionRecorderProps> = ({
  recording,
  events,
  startRecording,
  stopRecording,
  saveRecording,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Recording Controls</h5>
      </div>
      <div className="card-body position-relative">
        {!recording ? (
          <button className="btn btn-primary me-2" onClick={startRecording}>
            Start Recording
          </button>
        ) : (
          <>
            <button className="btn btn-danger me-2" onClick={stopRecording}>
              Stop Recording
            </button>
            {recording && (
              <div
                className="recording-indicator"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  animation: "pulse 1.5s infinite",
                }}
              />
            )}
          </>
        )}

        <button
          className="btn btn-success me-2"
          onClick={saveRecording}
          disabled={events.length === 0 || recording}
        >
          Save Recording
        </button>

        <span className="ms-2">{events.length > 0 && `${events.length} events recorded`}</span>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default SessionRecorder