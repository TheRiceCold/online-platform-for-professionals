const ClientLayout = ({clients}) => {

  return (
    clients.isLoading ? 
    <h1>Loading...</h1>
    : !clients.length ?
      <h1>No Clients</h1>
    : clients.data.map((client, i) => (
      <h1 key={i}>
        {client}
      </h1>
    ))
  )
}

export default ClientLayout
