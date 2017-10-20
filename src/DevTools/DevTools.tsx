import React from 'react'
import { observer, inject } from 'mobx-react'
import register from './register';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

// import "./DevTools.css"
// import "react-tabs/style/react-tabs.css"

interface OwnProps {
    historyStore?: any;
}

const DevTools = ({historyStore}: OwnProps) =>
    historyStore ? (
        <div className="devtools">
           <div>
               {historyStore.snapshots.map((entry, idx) => (
                   <HistoryEntry key={idx} entry={entry}/>
               ))}
           </div>

            <div>
                {historyStore.patches.map((entry, idx) => <HistoryEntry key={idx} entry={entry}/>)}
            </div>

            <div>
                {historyStore.actions.map((entry, idx) => <HistoryEntry key={idx} entry={entry}/>)}
            </div>
        </div>
    ) : null


class HistoryEntry extends React.Component<any> {
    render() {
        const {entry} = this.props;

        return (
            <pre className="history-entry" onClick={this.replay}>
                {JSON.stringify(entry.data, null, 2)}
            </pre>
        );
    }

    private replay = () => {
        this.props.entry.replay();
    }
}

export default inject('historyStore')(observer(DevTools));
