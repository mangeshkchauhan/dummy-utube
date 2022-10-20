import React from "react";

class SearchBar extends React.Component{
    state = {searchTerm: ''}
    
    onInputChange=(e)=>{
        this.setState({searchTerm: e.target.value})
    };

    onFormSubmit=e=>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.searchTerm)
    }

    render(){
        return(
            <div className="searchBar ui segment ">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="feild">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.searchTerm} 
                        onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;