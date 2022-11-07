import React, { Component } from "react";

class DropDownList extends Component {
    constructor() {
        super();
        this.state = {
            category: [],
            label: [],
            selectddl: '',
        };
    }
    componentDidMount() {
        this.setState({
            category: [
                {name: "Expense", label: ["Food and Beverage", "Shop", "Transportation", 
                "Entertainment", "Family and Personal", "Health", "Other"]},
                {name: "Income", label: ["Salary", "Gift", "Other"]},
            ]
        })
    }
    selectChange(e) {
        this.setState({ selectddl: e.target.value });
        this.setState({ label: this.state.category.find(x => x.name === e.target.value).label })
    }
    render() {
        return (
            <div className="flex flex-col mt-2">
                <select
                className="py-1 px-2 border border-black rounded-lg"
                value={this.state.selectddl}
                onChange={this.selectChange.bind(this)}>
                    <option>Category</option>
                    {this.state.category.map(x => {
                        return <option>{x.name}</option>
                    })}
                </select>
                <select
                className="mt-4 py-1 px-2 border border-black rounded-lg">
                    <option selected disabled>Label</option>
                    {this.state.label.map(x => {
                        return <option>{x}</option>
                    })}
                </select>
                
            </div>
        )
    }
}
export default DropDownList;