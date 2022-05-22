const navLinks = id => {
  const prefix = to => `/professionals/${id}/${to}`
  return [
    { label: "Clients", href: "/clients" }, 
    { label: "Portfolio", href: prefix("portfolio") },
    { label: "Services", href: prefix("services") }, 
    { label: "Bookings", href: "/bookings" }
  ]
}

export {navLinks}
