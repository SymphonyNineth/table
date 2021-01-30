import React, { Component } from "react"
import _ from "lodash";

import './App.css';

import Table from "./components/table";
import Spinner from "./components/spinner";
import PersonDetails from "./components/person-details";
import WelcomeMessage from "./components/welcome-message";
import Pagination from "./components/pagination";
import Search from "./components/search";
import AddPerson from "./components/add-person";

export default class App extends Component {
    state = {
        dataSource: "",
        isLoading: false,
        data: [],
        sortDirection: "asc",
        sortedField: "",
        hasBeenSorted: false,
        selectedPerson: null,
        currentPage: 1,
        searchTerm: "",
        isFormHidden: true,
    }
    onPersonSelected = person => {
        this.setState({
            selectedPerson: person
        })
    }
    // UNEFFICENT CODE
    onSort = field => {
        const sortDirection = this.state.sortDirection === "asc" ? "desc" : "asc";
        const sortedData = _.orderBy(this.clonedData, field, sortDirection);
        this.setState({
            data: sortedData,
            sortDirection,
            sortedField: field,
            hasBeenSorted: true,
        });
    }

    createPerson( person ){
        const id = person[1].value,
              firstName = person[2].value,
              lastName = person[3].value,
              email = person[4].value,
              phone = person[5].value;
        return {
            id,
            firstName,
            lastName,
            email,
            phone,
            description: "No data",
            address: { streetAddress: "No data", city: "No data", state: "No data", zip: "No data" }
        }
    }
    onSourceSelected = async source => {
        this.setState({
            dataSource: source,
            isLoading: true,
        });
        const res = await fetch(source);
        const data = await res.json();
        this.clonedData = data;
        this.setState({
            isLoading: false,
            data,
        })
    }

    onSearch = (searchTerm, event) => {
        event.preventDefault();
        this.setState({
            searchTerm,
            currentPage: 1,
        })
    }

    getFilteredData = () => {
        let { data, searchTerm } = this.state;
        if(!searchTerm) return data;
        searchTerm = searchTerm.toLowerCase()
        return data.filter (({ firstName, lastName, email, phone }) => {
        if(firstName.toLowerCase().includes(searchTerm) || lastName.toLowerCase().includes(searchTerm) || email.toLowerCase().includes(searchTerm) || phone.toLowerCase().includes(searchTerm)){
            return true;
        } return false;
        })
    }

    togglePersonAddForm = () => {
      this.setState(
          () => {
              return {
                  isFormHidden: !this.state.isFormHidden,
              }
          }
      )
    }
    onClose = () => {
        this.setState(
            {
                isFormHidden: true,
            }
        )
    }


    onPersonAdded = ( fields ) => {
    const newPerson = this.createPerson(fields);
    this.setState(() => {
        return {
        data : [newPerson, ...this.state.data],
        }
    })
    }


   render() {
        const paginate = (pageNumber, event) =>
        {
            event.preventDefault();
            this.setState({
            currentPage: pageNumber,
        })
        }
        const filteredData = this.getFilteredData();
        const  itemsPerPage = 50;
        const { isLoading, data, dataSource, currentPage, isFormHidden} = this.state;
        const lastItemIndex = currentPage * itemsPerPage;
        const firstItemIndex = lastItemIndex - itemsPerPage;
        const currentItems = filteredData.slice(firstItemIndex, lastItemIndex);
        if (!dataSource) return <WelcomeMessage onSourceSelected={ this.onSourceSelected } />;
       return (
           <div className="container">
               { isLoading ? <Spinner/>
               : <React.Fragment>
                       { !isFormHidden ? <AddPerson onPersonAdded={ this.onPersonAdded } onClose={ this.onClose } /> : null }
                       <button
                           onClick={ this.togglePersonAddForm }
                           className="btn btn-outline-primary mt-3">Add Person</button>
                       <Search onSearch={ this.onSearch } />
                   <Table
                   data={ currentItems }
                   onSort={ this.onSort }
                   sortDirection={ this.state.sortDirection }
                   sortField={ this.state.sortedField }
                   hasBeenSorted={ this.state.hasBeenSorted }
                   onItemSelected={ this.onPersonSelected }
               />
               </React.Fragment>

               }
               {filteredData.length <= itemsPerPage ? null : <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={ paginate }/>}
               {
                   this.state.selectedPerson ? <PersonDetails person={this.state.selectedPerson} /> : true

               }

           </div>
       )

   }
}