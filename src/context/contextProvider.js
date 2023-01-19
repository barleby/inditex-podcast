import React from "react";

const AppContext = React.createContext();

class AppContextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10,
            filterQuery:'',
            isNavigating: false,
            handleFilter: (e) => {

                const query = e.target.value.trim().toLowerCase();
                return this.setState(() => ({filterQuery: query}))
            },
            handleLoader: (mustShow) => this.setState(() =>({isNavigating: mustShow}))
        }
    }
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContext;
export {AppContextComponent};
