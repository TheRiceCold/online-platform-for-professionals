const navLinks = id => {
  const prefix = to => `/clients/${id}/${to}`
  return [
    { label: "Professionals", href: "/professionals" },
    { label: "Connections", href: prefix("connections") },
  ]
}


export {navLinks}
