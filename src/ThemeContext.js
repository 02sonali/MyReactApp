import React, { Component } from "react";

const ThemeContext = React.createContext();

class ThemeProvider extends Component {
    state = {
        theme: "light"
    }

    //method to update theme
    setTheme = themeVal => {
        this.setState({theme: themeVal})
    }
    render() {
        const { children } = this.props
        const { theme } = this.state
        const { setTheme } = this
    
        return (
          <ThemeContext.Provider
            value={{
              theme,
              setTheme,
            }}
          >
            {children}
          </ThemeContext.Provider>
        )
      }
}

export default ThemeContext;
export {ThemeProvider}