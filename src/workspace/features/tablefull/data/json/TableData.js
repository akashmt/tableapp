export const TableData = {
  table: {
    fixedHeader: false,
    showFooter: false,
    selectRow: false,
    columns: [ 
      {
        name: "name",
        dataType: "text",
        buttonText: "",
        buttonUrl: "", 
        formatString: "",
        headerText: "My Text Column",
        isKey: true,
        display: true,
        isSearchable: true,
        isSortable: true,
        isSelectDropDown: false
      }, 
      {
        name: "country",
        dataType: "text",
        buttonText: "",
        buttonUrl: "",
        formatString: "",
        headerText: "My Text Country Column",
        isKey: true,
        display: true,
        isSearchable: false,
        isSortable: false,
        isSelectDropDown: true
      },
      {
        name: "price",
        dataType: "currency",
        buttonText: "",
        buttonUrl: "",
        formatString: "simple", // simple / decimal
        headerText: "My numeric Price Column",
        isKey: true,
        display: true,
        isSearchable: true,
        isSortable: true,
        isSelectDropDown: false
      },
      {
        name: "number",
        dataType: "number",
        buttonText: "",
        buttonUrl: "",
        formatString: "decimal", // simple / decimal
        presicion: "6", 
        headerText: "My numeric Number Column",
        isKey: true,
        display: true,
        isSearchable: true,
        isSortable: true,
        isSelectDropDown: false
      },
      {
        name: "percentage",
        dataType: "percent",
        buttonText: "",
        buttonUrl: "",
        formatString: "decimal", // simple / decimal
        presicion: "4", 
        headerText: "My numeric Percentage Column",
        isKey: true,
        display: true,
        isSearchable: false,
        isSortable: false,
        isSelectDropDown: false
      },
      {
        name: "active",
        dataType: "boolean",
        buttonText: "",
        buttonUrl: "",
        formatString: "true", // 1 / true
        headerText: "My boolean Column",
        isKey: true,
        display: true,
        isSearchable: false,
        isSortable: false,
        isSelectDropDown: false
      },
      {
        name: "date",
        dataType: "date", // Need to pass datetime as a date(MM/DD/YYYY) ex. 01/12/2020
        buttonText: "",
        buttonUrl: "",
        formatString: "MM/DD/YYYY", //  M/D/YY  //  MM/DD/YY  // MM/DD/YYYY  //  MMM D, YY // MMMM D, YYYY  // MM-DD // YY-MM-DD // D-MMM-YY // MMM-YY  // D-MMM
        headerText: "My Date Column",
        isKey: true,
        display: true,
        isSearchable: false,
        isSortable: false,
        isSelectDropDown: false
      },
      {
        name: "datetime",
        dataType: "date",  // Need to pass datetime as a datestring ex. October 13, 2020 11:13:00 
        buttonText: "",
        buttonUrl: "",
        formatString: "MM/DD/YYYY HH:MM:SS", // MM/DD/YY HH:MM AM/PM  // MM/DD/YYYY HH:MM:SS  // M/D/YYYY H:MM
        headerText: "My Datetime Column",
        isKey: true,
        display: true,
        isSearchable: false,
        isSortable: false,
        isSelectDropDown: false
      },
      {
        name: "time",
        dataType: "time",  // Need to pass second as a data ex. 3600
        buttonText: "",
        buttonUrl: "",
        formatString: "HH:MM AM/PM",  // HH:MM  // HH:MM:SS  // HH:MM AM/PM  // HH:MM:SS AM/PM // H:MM AM/PM  // H:MM  // H:MM:SS
        headerText: "My Time Column",
        isKey: true,
        display: true,
        isSearchable: false,
        isSortable: false,
        isSelectDropDown: false
      }
    ],
    rows: [
      {
        key: "1",
        name: "Akash Patel",
        country: "India",
        price: 100,
        number: 27.5,
        percentage: 12,
        active: 1,
        date: "01/12/2020",
        datetime: "October 13, 2020 11:13:00",
        time: "3685"
      },
      {
        key: "2",
        name: "john Paul",
        country: "US",
        price: 200,
        number: 37100,
        percentage: 34.66,
        active: 1,
        date: "11/30/2020",
        datetime: "November 3, 2020 11:13:00",
        time: "22222"
      },
      {
        key: "3",
        name: "Steve Smith",
        country: "Australia",
        price: 150,
        number: 43.1,
        decimal: 32300,
        percentage: 44,
        active: 0,
        date: "12/12/2020",
        datetime: "January 31, 2020 11:13:00",
        time: "3564"
      },
      {
        key: "4",
        name: "Kevin Piter",
        country: "England",
        price: 2150.3,
        number: 23,
        decimal: 320,
        percentage: 32.01,
        active: 1,
        date: "10/11/2020",
        datetime: "March 31, 2020 21:13:00",
        time: "9564"
      },
      {
        key: "5",
        name: "Akash Patel1",
        country: "India",
        price: 1000.87,
        number: 27.55,
        decimal: 100.0,
        percentage: 12,
        active: 0,
        date: "2/20/2020",
        datetime: "May 21, 2020 7:13:00",
        time: "19564"
      },
      {
        key: "6",
        name: "john Paul1",
        country: "US",
        price: 2000,
        number: 37,
        decimal: 200.0,
        percentage: 34,
        active: 1,
        date: "11/25/2020",
        datetime: "June 10, 2020 6:55:24",
        time: "3600"
      },
      {
        key: "7",
        name: "Steve Smith1",
        country: "Australia",
        price: 150,
        number: 43,
        decimal: 300,
        percentage: 44.77,
        active: 0,
        date: "1/01/2020",
        datetime: "January 1, 2020 5:55:55",
        time: "43200"
      },
      {
        key: "8",
        name: "Kevin Piter1",
        country: "England",
        price: 250,
        number: 23.566,
        decimal: 320,
        percentage: 32.54,
        active: 0,
        date: "04/14/2020",
        datetime: "April 4, 2020 6:25:55",
        time: "86400"
      }
    ],
  }
}