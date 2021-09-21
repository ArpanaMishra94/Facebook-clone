import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Watch from './components/Watch/Watch';
import Market from './components/Market/Market';
import GroupPost from './components/Groups/GroupPost';
import Profile from './components/Profile';
function App() {

    const [feedVisible, setFeedVisible] = useState(true);
    const [watchVisible, setWatchVisible] = useState(false);
    const [marketVisible, setMarketVisible] = useState(false);
    const [groupsVisible, setGroupsVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [widgetVisible, setWidgetVisible] = useState(true);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    return (
        <div className="app-root">
            <div className="app">
                <Header setFeedVisible={setFeedVisible}
                    setWatchVisible={setWatchVisible}
                    setMarketVisible={setMarketVisible}
                    setGroupsVisible={setGroupsVisible}
                    setWidgetVisible={setWidgetVisible}
                    setSidebarVisible={setSidebarVisible}
                    setProfileVisible={setProfileVisible}/>
                <div className="app__body">
                    {
                    sidebarVisible && <Sidebar setFeedVisible={setFeedVisible}
                        setWatchVisible={setWatchVisible}
                        setMarketVisible={setMarketVisible}
                        setGroupsVisible={setGroupsVisible}
                        setProfileVisible={setProfileVisible}
                        setWidgetVisible={setWidgetVisible}
                        setSidebarVisible={setSidebarVisible}/>
                }

                    <div> {
                        feedVisible && <Feed/>
                    }
                        {
                        watchVisible && <Watch/>
                    }
                        {
                        marketVisible && <Market/>
                    }
                        {
                        groupsVisible && <GroupPost/>
                    } </div>
                    {
                    widgetVisible && <Widgets/>
                } </div>
                {
                profileVisible && <Profile/>
            } </div>

        </div>
    );
}

export default App;
