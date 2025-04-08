"use client"

import { type FC, useEffect, useRef } from "react"
import type { Session } from "@/lib/types/session"

interface ReplayAreaProps {
  replayMode: boolean
  currentSession: Session | null
}

const ReplayArea: FC<ReplayAreaProps> = ({ replayMode, currentSession }) => {
  const replayContainerRef = useRef<HTMLDivElement>(null)
  const replayerRef = useRef<any>(null)

  useEffect(() => {
    if (replayMode && currentSession && replayContainerRef.current) {
      if (replayerRef.current) {
        try {
          replayerRef.current.pause()
          replayerRef.current = null
        } catch (e) {
          console.error("Error stopping previous replayer:", e)
        }
      }

      const initializeReplayer = async () => {
        try {
          const { default: rrwebPlayer } = await import("rrweb-player")
          if (replayContainerRef.current && currentSession.events.length > 0) {
            replayerRef.current = new rrwebPlayer({
              target: replayContainerRef.current,
              props: {
                events: currentSession.events,
                width: replayContainerRef.current.clientWidth,
                height: 500,
                showController: true,
                autoPlay: true,
              },
            })
          }
        } catch (e) {
          console.error("Error initializing replayer:", e)
        }
      }

      const timeoutId = setTimeout(initializeReplayer, 100)

      return () => {
        clearTimeout(timeoutId)
        if (replayerRef.current) {
          try {
            replayerRef.current.pause()
          } catch (e) {
            console.error("Error cleaning up replayer:", e)
          }
        }
      }
    }
  }, [replayMode, currentSession])

  return (
    <div
      className="replay-container"
      ref={replayContainerRef}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        minHeight: "500px",
        position: "relative",
      }}
    >
      {!replayMode && (
        <div className="d-flex justify-content-center align-items-center h-100 text-muted">
          No session selected for replay
        </div>
      )}
    </div>
  )
}

export default ReplayArea