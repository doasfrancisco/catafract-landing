import { TabProvider } from './terminal/tab-context'
import { Terminal } from './terminal/terminal'
import { GraphCard } from './terminal/graph-card'

/**
 * Dark terminal + GitHub-style contributions graph, ported from the
 * Catafract landing (landing/). Replaces the old DashboardMockup as the
 * hero showcase. Always dark — it reads as an intentional terminal panel
 * in both light and dark site themes.
 */
export default function ProjectsTerminal() {
  return (
    <TabProvider>
      <div
        className="catafract-projects-body"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 32,
          boxSizing: 'border-box',
        }}
      >
        <div
          className="catafract-projects-terminal-wrap"
          style={{ flex: '1 1 0', minWidth: 0, order: 1 }}
        >
          <Terminal />
        </div>
        <aside
          className="catafract-projects-graph-wrap"
          style={{
            width: 320,
            flexShrink: 0,
            order: 2,
            position: 'sticky',
            top: 'max(24px, calc(50vh - 280px))',
            alignSelf: 'flex-start',
          }}
        >
          <GraphCard />
        </aside>
      </div>
    </TabProvider>
  )
}
