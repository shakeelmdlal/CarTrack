
function UserDetails(props) {
    const filteredData = props.filterData;
    const filterItem = filteredData.map((item, key) => {
        return <tbody key={key}>
        <tr><td>Name</td><td>{item.name}</td></tr>
        <tr><td>UserName</td><td>{item.username}</td></tr>
        <tr><td>Email</td><td><a tabIndex={3} href={'mailto:' + item.email}>{item.email}</a></td></tr>
        <tr><td>Address</td><td>{item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</td></tr>
        <tr><td>Phone</td><td><a tabIndex={4} href={'tel:' + item.phone}>{item.phone}</a></td></tr>
        <tr><td>Website</td><td>{item.website}</td></tr>
        <tr><td>company</td><td>{item.company.name}</td></tr>
    </tbody>
    })
  
    console.log('nameList', filterItem)
    return (
      <div>
           <div className="display-content">
                    <table data-testid="searchList">
                        {filterItem}
                    </table>
                </div>
             {/* <div className="pa-10 mt-10 w-75">
              <div className="font-weight-bold text-center">Residents List</div>
              <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
                  {nameList.length > 0 ? studentList : null}
              </ul>
          </div> */}
  
      </div>
    )
  }
  export default UserDetails;
  