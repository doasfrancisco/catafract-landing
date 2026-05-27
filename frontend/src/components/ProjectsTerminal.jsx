import { TabProvider } from './terminal/tab-context'
import { Terminal } from './terminal/terminal'
import { GraphCard } from './terminal/graph-card'

/**
 * Terminal + GitHub-style contributions graph, ported from the Catafract
 * landing (landing/). Replaces the old DashboardMockup as the hero showcase.
 * Themed: a Notepad++-style white editor + GitHub-light graph in light mode,
 * the original dark terminal in dark mode. Both follow the site's light/dark
 * toggle via the `--ct-*` CSS variables defined in index.css (the inline
 * styles in terminal/*.tsx reference those vars, so they flip with html.dark).
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
