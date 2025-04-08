"use client"

import { useState, useEffect, useRef } from "react"
import SessionRecorder from "@/components/session-recorded"
import DemoArea from "@/components/demo-area"
import ReplayArea from "@/components/replay-area"
import SavedSessions from "@/components/saved-session"
import type { Session } from "@/lib/types/session"

export default function Home() {
  const [recording, setRecording] = useState(false)
  const [events, setEvents] = useState<any[]>([])
  const [savedSessions, setSavedSessions] = useState<Session[]>([])
  const [currentSession, setCurrentSession] = useState<Session | null>(null)
  const [replayMode, setReplayMode] = useState(false)
  const stopFnRef = useRef<any>(null)

  useEffect(() => {
    const loadSavedSessions = () => {
      if (typeof window !== "undefined") {
        const savedSessionsData = localStorage.getItem("rrweb-sessions")
        if (savedSessionsData) {
          try {
            const parsedSessions = JSON.parse(savedSessionsData)
            setSavedSessions(parsedSessions)
          } catch (error) {
            console.error("Error loading saved sessions:", error)
          }
        }
      }
    }
    loadSavedSessions()
  }, [])

  const startRecording = () => {
    import("rrweb").then((rrweb) => {
      const newEvents: any[] = []
      const stopFn = rrweb.record({
        emit(event: any) {
          newEvents.push(event)
          setEvents([...newEvents])
        },
      })
      if (stopFn) {
        stopFnRef.current = stopFn
      }
      setEvents(newEvents)
      setRecording(true)
    })
  }

  const stopRecording = () => {
    if (stopFnRef.current) {
      stopFnRef.current()
      stopFnRef.current = null
    }
    setRecording(false)
  }

  const saveRecording = () => {
    if (events.length === 0) return

    const sessionName = prompt("Enter a name for this session:", `Session ${savedSessions.length + 1}`)
    if (!sessionName) return

    const newSession: Session = {
      id: Date.now().toString(),
      name: sessionName,
      timestamp: new Date().toISOString(),
      events: events,
    }

    const updatedSessions = [...savedSessions, newSession]
    localStorage.setItem("rrweb-sessions", JSON.stringify(updatedSessions))
    setSavedSessions(updatedSessions)
    setEvents([])
  }

  const deleteSession = (sessionId: string) => {
    const updatedSessions = savedSessions.filter((session) => session.id !== sessionId)
    localStorage.setItem("rrweb-sessions", JSON.stringify(updatedSessions))
    setSavedSessions(updatedSessions)

    if (currentSession && currentSession.id === sessionId) {
      setCurrentSession(null)
      setReplayMode(false)
    }
  }

  const playSession = (session: Session) => {
    setCurrentSession(session)
    setReplayMode(true)
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Web Session Recorder & Replayer</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <SessionRecorder
            recording={recording}
            events={events}
            startRecording={startRecording}
            stopRecording={stopRecording}
            saveRecording={saveRecording}
          />
        </div>

        <div className="col-md-6">
          <SavedSessions savedSessions={savedSessions} playSession={playSession} deleteSession={deleteSession} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>Demo Area (Interaction Sandbox)</h4>
          <p className="text-muted">Try interacting with elements below to record them.</p>
          <DemoArea />
        </div>

        <div className="col-md-6">
          <h4>Replay Area</h4>
          <p className="text-muted">
            {replayMode
              ? `Playing: ${currentSession?.name}`
              : "Select a session from the list above to replay it here."}
          </p>
          <ReplayArea replayMode={replayMode} currentSession={currentSession} />
        </div>
      </div>
    </div>
  )
}