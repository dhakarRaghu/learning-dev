"use client"

import type { FC } from "react"
import type { Session } from "@/lib/types/session"

interface SavedSessionsProps {
  savedSessions: Session[]
  playSession: (session: Session) => void
  deleteSession: (sessionId: string) => void
}

const SavedSessions: FC<SavedSessionsProps> = ({ savedSessions, playSession, deleteSession }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Saved Sessions</h5>
      </div>
      <div className="card-body" style={{ maxHeight: "200px", overflowY: "auto" }}>
        {savedSessions.length === 0 ? (
          <p className="text-muted">No saved sessions yet.</p>
        ) : (
          <ul className="list-group">
            {savedSessions.map((session) => (
              <li key={session.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{session.name}</strong>
                  <br />
                  <small className="text-muted">
                    {new Date(session.timestamp).toLocaleString()} • {session.events.length} events
                  </small>
                </div>
                <div>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => playSession(session)}>
                    Play
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteSession(session.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SavedSessions

