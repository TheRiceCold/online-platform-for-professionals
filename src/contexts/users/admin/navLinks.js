const navLinks = id => {
  const prefix = to => `/admin/${id}/${to}`
  return [
    { label: "Professionals", href: prefix("professionasl") },
    { label: "Clients", href: prefix("clients") },
  ]
}

export {navLinks}

