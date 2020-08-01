import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import Toggle from "./Common/Preloader/Toggle/Toggle";
import NarcotisContainer from "./components/Narcotics/NarcoticasContainer";
import store from "./redux/state";
import BookLectureContainer from "./components/BookLectureContainer/BookLectureContainer";
import { BrowserView,MobileView} from "react-device-detect";
import NavBurger from "./components/NavBurger/NavBurger";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <BrowserView viewClassName={classes.app_wrapper_header}>
                    {/* <div className={classes.app_wrapper_header}>
                        <Header />
                    </div> */}
                        <Header />
                </BrowserView>
                <div className={classes.app_wrapper}>
                    <div className={classes.app_wrapper_nav}>
                        <MobileView>
                            <NavBurger store={store}/>
                        </MobileView>
                        <BrowserView>
                            <Nav store={store} />
                            <Toggle
                                render={({ on, Toggle }) => (
                                    <div className={classes.app_wrapper_toggle}>
                                        {/* <button onClick={Toggle}>k</button> */}
                                        {on && <Nav />}
                                    </div>
                                )}
                            />
                        </BrowserView>
                    </div>
                    <div className={classes.app_wrapper_content}>
                        <Switch>
                            <Route
                                path="/main"
                                render={() => <MainPageContainer store={store} />}
                            />
                            <Route
                                path="/narcotics"
                                render={() => <NarcotisContainer store={store} />}
                            />
                            <Route
                                path="/book-a-lecture"
                                render={() => <BookLectureContainer store={store} />}
                            />
                            <Route render={() => <MainPageContainer store={store} />}
                            />
                        </Switch>
                    </div>
                </div>
                <BrowserView>
                </BrowserView>
                <BrowserView fixed="top">
                    <Footer/>

                </BrowserView>
            </div>
        </BrowserRouter>
    );
};

export default App;
